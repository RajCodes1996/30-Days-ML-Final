Day 19 — Imbalanced Classification: Catch More Fraud 🚀
Day 18 is complete. Today, we'll improve our fraud-detection approach by learning how to handle rare classes.

Your Logistic Regression baseline achieved a reported fraud recall of 0.64. That means it detected roughly 64% of the actual fraud cases in your test set. Our goal today is to understand how to improve fraud detection while keeping false alarms under control.
1. The four concepts you need to master

Precision — how trustworthy are fraud alerts?

Of all transactions predicted as fraud, what fraction were actually fraud?
\[
\text{Precision}=\frac{TP}{TP+FP}
\]





Recall — how much fraud do we catch?

Of all actual fraud cases, what fraction did the model detect?
\[
\text{Recall}=\frac{TP}{TP+FN}
\]





F1-score — one balanced measure

F1 is the harmonic mean of precision and recall. It is useful when you want to consider both missed fraud and false alarms.
\[
F1=2\frac{Precision\cdot Recall}{Precision+Recall}
\]





Threshold — how readily does the model flag fraud?

A lower decision threshold generally catches more fraud but may also flag more legitimate transactions.



2. Understand the decision threshold visually
A classifier can output a fraud probability, then use a threshold to convert that probability into a class prediction. For example, a transaction with a predicted fraud probability of 0.30 would be classified as fraud at a threshold of 0.25, but not at 0.50.



Threshold 0.50
Actual Positive








Actual Negative








TPTrue positive	3
FPFalse positive	3
TNTrue negative	2
FNFalse negative	2





\(\text{Precision}=\frac{TP}{TP+FP}=\frac{3}{3+3}=50\%\)
\(\text{Recall}=\frac{TP}{TP+FN}=\frac{3}{3+2}=60\%\)

Threshold










Give feedback

The key idea: the model's probabilities don't have to change for its predicted labels to change. Changing the threshold changes which transactions get flagged.
3. Practical: improve our baseline
We'll compare two approaches:
1. Default Logistic Regression — your original starting point.
2. Class-weighted Logistic Regression — penalizes mistakes on the minority class more heavily during training.
We'll use a validation split from the training data to compare approaches and choose a threshold. The test set stays untouched until the final evaluation.
3.1 Split your training data again
Run this after your Day 18 code. It assumes X_train, X_test, y_train, and y_test still exist.
from sklearn.model_selection import train_test_splitX_fit, X_val, y_fit, y_val = train_test_split(    X_train,    y_train,    test_size=0.20,    random_state=42,    stratify=y_train)print("Model training rows:", len(X_fit))print("Validation rows:", len(X_val))print("Final test rows:", len(X_test))



Why three sets?
- Training set: learns model parameters.
- Validation set: helps compare models and choose a threshold.
- Test set: gives us a final, independent evaluation.
3.2 Train both models
from sklearn.pipeline import make_pipelinefrom sklearn.preprocessing import StandardScalerfrom sklearn.linear_model import LogisticRegression# Model A: ordinary Logistic Regressionmodel_default = make_pipeline(    StandardScaler(),    LogisticRegression(max_iter=1000, random_state=42))model_default.fit(X_fit, y_fit)# Model B: class-weighted Logistic Regressionmodel_balanced = make_pipeline(    StandardScaler(),    LogisticRegression(        class_weight="balanced",        max_iter=1000,        random_state=42    ))model_balanced.fit(X_fit, y_fit)print("Both models trained!")



What does class_weight="balanced" do?

It automatically assigns greater weight to the minority class during training. Fraud-related mistakes can therefore have more influence on the model's learning.

It does not duplicate fraud rows or create new transactions, and it does not guarantee better performance.
3.3 Compare precision, recall and F1
We'll evaluate both models at the default threshold of 0.50.
from sklearn.metrics import (    accuracy_score,    precision_score,    recall_score,    f1_score)import pandas as pddef evaluate_predictions(y_true, predictions, model_name):    return {        "Model": model_name,        "Accuracy": accuracy_score(y_true, predictions),        "Fraud Precision": precision_score(            y_true, predictions, zero_division=0        ),        "Fraud Recall": recall_score(            y_true, predictions, zero_division=0        ),        "Fraud F1": f1_score(            y_true, predictions, zero_division=0        )    }default_val_pred = model_default.predict(X_val)balanced_val_pred = model_balanced.predict(X_val)comparison = pd.DataFrame([    evaluate_predictions(        y_val, default_val_pred, "Default Logistic Regression"    ),    evaluate_predictions(        y_val, balanced_val_pred, "Class-Weighted Logistic Regression"    )])print(comparison.round(4).to_string(index=False))



Look for these patterns in your actual results:
- Did class-weighted Logistic Regression increase fraud recall?
- Did its precision decrease?
- Did accuracy change?
A trade-off is common, but don't assume the weighted model is better until you inspect your output.
3.4 Experiment with thresholds
Let's try several thresholds for the class-weighted model.
import numpy as np# Probability that each validation transaction is fraudval_probabilities = model_balanced.predict_proba(X_val)[:, 1]threshold_results = []for threshold in [0.10, 0.20, 0.30, 0.40, 0.50, 0.60]:    predictions = (        val_probabilities >= threshold    ).astype(int)    threshold_results.append({        "Threshold": threshold,        "Fraud Precision": precision_score(            y_val, predictions, zero_division=0        ),        "Fraud Recall": recall_score(            y_val, predictions, zero_division=0        ),        "Fraud F1": f1_score(            y_val, predictions, zero_division=0        ),        "Fraud Alerts": int(predictions.sum())    })threshold_df = pd.DataFrame(threshold_results)print(threshold_df.round(4).to_string(index=False))



Interpret the results:
- Lower threshold: usually more fraud alerts and higher recall, but potentially lower precision.
- Higher threshold: usually fewer fraud alerts and higher precision, but potentially lower recall.
These are typical patterns, not guarantees. Your data determines the actual results.
3.5 Evaluate your chosen threshold on the test set
For this exercise, let's use 0.30 as an illustrative threshold. We're not claiming it's optimal; we'll use the validation results to decide whether it makes sense for your model.
chosen_threshold = 0.30test_probabilities = model_balanced.predict_proba(X_test)[:, 1]test_predictions = (    test_probabilities >= chosen_threshold).astype(int)print("Chosen threshold:", chosen_threshold)print("\nFinal test metrics:")print(pd.DataFrame([    evaluate_predictions(        y_test,        test_predictions,        "Balanced Logistic Regression (threshold 0.30)"    )]).round(4).to_string(index=False))from sklearn.metrics import confusion_matrixprint("\nTest confusion matrix:")print(confusion_matrix(y_test, test_predictions, labels=[0, 1]))



For a rigorous experiment, choose the threshold based on your validation results first, then evaluate that chosen threshold on the test set once. Don't keep changing the threshold in response to test-set scores.