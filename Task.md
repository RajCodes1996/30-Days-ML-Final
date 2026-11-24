ok carry on
Day 18 — Step 2: Build our first fraud-detection baseline
Let's continue! Since I haven't seen your dataset inspection outputs yet, we'll proceed with the next step assuming your dataset loaded successfully. If you encounter an error, share it and we'll fix it.

Our first model will be deliberately simple. Before building a sophisticated fraud detector, we need to understand how a model performs when it takes the easiest possible approach.

2.1 Separate features and target
Features (X): transaction information used to make predictions.

Target (y): whether the transaction is fraudulent (1) or legitimate (0).

from sklearn.model_selection import train_test_split

X = df.drop(columns=["Class"])
y = df["Class"]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)

print("Training rows:", len(X_train))
print("Testing rows:", len(X_test))

print("\nFraud cases in training data:", int(y_train.sum()))
print("Fraud cases in test data:", int(y_test.sum()))

Why stratify=y? Fraud is rare. Stratification helps preserve approximately the same fraud proportion in both sets.

We reserve the test set for evaluation, rather than repeatedly using it to tune the model.

2.2 Baseline A — The simplest possible model
First, let's use a model that always predicts the majority class.

from sklearn.dummy import DummyClassifier
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)

dummy_model = DummyClassifier(strategy="most_frequent")
dummy_model.fit(X_train, y_train)

dummy_predictions = dummy_model.predict(X_test)

print("Dummy Model Accuracy:",
      accuracy_score(y_test, dummy_predictions))

print("\nConfusion Matrix:")
print(confusion_matrix(y_test, dummy_predictions, labels=[0, 1]))

print("\nClassification Report:")
print(classification_report(
    y_test,
    dummy_predictions,
    labels=[0, 1],
    target_names=["Legitimate", "Fraud"],
    zero_division=0
))

Read the confusion matrix in this order:

TN
Legitimate transactions correctly predicted as legitimate.

FP
Legitimate transactions incorrectly flagged as fraud.

FN
Fraud transactions incorrectly predicted as legitimate.

TP
Fraud transactions correctly detected.

Rows represent actual classes; columns represent predicted classes. The class order is 0, then 1.

The dummy model should have zero fraud recall because it never predicts fraud. That's our warning against trusting accuracy alone.

2.3 Baseline B — Logistic Regression
Now let's train an actual ML model. We'll use a pipeline to scale the features before fitting Logistic Regression.

from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

logistic_model = make_pipeline(
    StandardScaler(),
    LogisticRegression(max_iter=1000, random_state=42)
)

logistic_model.fit(X_train, y_train)

logistic_predictions = logistic_model.predict(X_test)

print("Logistic Regression Accuracy:",
      accuracy_score(y_test, logistic_predictions))

print("\nConfusion Matrix:")
print(confusion_matrix(
    y_test,
    logistic_predictions,
    labels=[0, 1]
))

print("\nClassification Report:")
print(classification_report(
    y_test,
    logistic_predictions,
    labels=[0, 1],
    target_names=["Legitimate", "Fraud"],
    zero_division=0
))

This is our initial baseline, not our final fraud detector. With the default settings, Logistic Regression may miss many fraud cases. That's useful information: we now have a measurable starting point.

2.4 Compare the two models
from sklearn.metrics import precision_score, recall_score, f1_score

results = pd.DataFrame([
    {
        "Model": "Dummy Classifier",
        "Accuracy": accuracy_score(y_test, dummy_predictions),
        "Fraud Precision": precision_score(
            y_test, dummy_predictions, zero_division=0
        ),
        "Fraud Recall": recall_score(
            y_test, dummy_predictions, zero_division=0
        ),
        "Fraud F1": f1_score(
            y_test, dummy_predictions, zero_division=0
        )
    },
    {
        "Model": "Logistic Regression",
        "Accuracy": accuracy_score(y_test, logistic_predictions),
        "Fraud Precision": precision_score(
            y_test, logistic_predictions, zero_division=0
        ),
        "Fraud Recall": recall_score(
            y_test, logistic_predictions, zero_division=0
        ),
        "Fraud F1": f1_score(
            y_test, logistic_predictions, zero_division=0
        )
    }
])

print(results.round(4).to_string(index=False))

Focus on the Fraud Recall column first: what proportion of all actual fraud cases did the model detect?

High accuracy alone doesn't mean fraud detection is good.

High recall means catching a larger proportion of fraud cases.

Precision tells us how many transactions flagged as fraud really were fraud.

F1 balances precision and recall.

We'll explore ways to improve the trade-off on Day 19.