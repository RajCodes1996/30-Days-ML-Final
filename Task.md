🚀 Day 21 — End-to-End Fraud Detection Project V1
Days 1–19 completed
Day 21 started

Today is a major milestone. Instead of learning another isolated ML algorithm, we're going to combine the skills you've learned into one complete, practical machine learning project.
Today's project
Credit Card Fraud Detection System








h2o.ai


Goal: Build a reusable fraud detection model that can process transaction data, predict fraud, and evaluate its performance.

1. What you'll build today
Our project will have this workflow:
01

Load dataset

Load the Credit Card Fraud Detection dataset


02

Explore data

Inspect rows, columns, missing values and class imbalance


03

Prepare data

Separate features and target; create train, validation and test sets


04

Build pipeline

StandardScaler + Logistic Regression with class weights


05

Train model

Fit the pipeline using training data


06

Evaluate model

Confusion matrix, precision, recall, F1 and classification report


07

Threshold selection

Choose a threshold using validation data


08

Save project

Organize code and results for future deployment



2. Project folder structure
Create this structure in VS Code or your project directory:
Fraud_Detection_Project/
│
├── data/
│   └── README.md
│
├── notebooks/
│   └── fraud_detection.ipynb
│
├── models/
│
├── reports/
│   └── evaluation.txt
│
├── src/
│   └── train.py
│
├── requirements.txt
└── README.md


For today, we'll primarily work in fraud_detection.ipynb. Later, we'll turn it into a more deployable project.

3. Step 1 — Load the dataset
We're continuing with the same Credit Card Fraud Detection dataset you used on Day 18 and Day 19.

If you're using Google Colab:
!pip install -q scikit-learn pandas numpy matplotlib seaborn joblib



Now load the dataset:
from sklearn.datasets import fetch_openmldataset = fetch_openml(    data_id=1597,    as_frame=True)df = dataset.frameprint("Dataset Shape:", df.shape)display(df.head())



Expected dataset characteristics:
- Approximately 284,807 transactions.
- 31 columns.
- Class is the target column.
- 0 means legitimate.
- 1 means fraudulent.
If OpenML is temporarily unavailable, don't silently substitute a different dataset; we can troubleshoot the download.
4. Step 2 — Explore the dataset
Before training, inspect the data.
print("Shape:", df.shape)print("\nColumn information:")print(df.info())print("\nMissing values:")print(df.isnull().sum().sum())print("\nDuplicate rows:")print(df.duplicated().sum())print("\nClass distribution:")print(df["Class"].value_counts())print("\nClass percentages:")print(    df["Class"].value_counts(normalize=True) * 100)



Visualize the imbalance:
import matplotlib.pyplot as pltimport seaborn as snssns.countplot(data=df, x="Class")plt.title("Legitimate vs Fraud Transactions")plt.xlabel("Class (0 = Legitimate, 1 = Fraud)")plt.ylabel("Number of Transactions")plt.show()



Remember: Fraud is the minority class. A model that predicts every transaction as legitimate could still achieve very high accuracy, while detecting zero fraud.
5. Step 3 — Prepare features and split the data
Separate the input features from the target:
X = df.drop("Class", axis=1)y = df["Class"].astype(int)print("Features:", X.shape)print("Target:", y.shape)



We'll create three datasets:
- Training set: 64% — model learning.
- Validation set: 16% — threshold selection.
- Test set: 20% — final evaluation.
from sklearn.model_selection import train_test_split# First: separate the final test setX_train_full, X_test, y_train_full, y_test = train_test_split(    X,    y,    test_size=0.20,    random_state=42,    stratify=y)# Second: create training and validation setsX_train, X_val, y_train, y_val = train_test_split(    X_train_full,    y_train_full,    test_size=0.20,    random_state=42,    stratify=y_train_full)print("Training:", X_train.shape)print("Validation:", X_val.shape)print("Testing:", X_test.shape)



Our data split




Training 64%Validation 16%Test 20%

Why three sets? We train on training data, select a threshold using validation data, and reserve test data for one final evaluation.
6. Step 4 — Build the complete ML Pipeline
Now combine preprocessing and Logistic Regression.
from sklearn.pipeline import Pipelinefrom sklearn.preprocessing import StandardScalerfrom sklearn.linear_model import LogisticRegressionfraud_pipeline = Pipeline([    ("scaler", StandardScaler()),    ("model", LogisticRegression(        class_weight="balanced",        max_iter=1000,        random_state=42    ))])print(fraud_pipeline)



What happens here?
1. StandardScaler scales the features.
2. LogisticRegression learns to classify transactions.
3. class_weight="balanced" gives more importance to the minority class during training.
7. Step 5 — Train the model
fraud_pipeline.fit(X_train, y_train)print("Fraud detection model trained successfully!")



That's it. Your complete pipeline is now trained.
8. Step 6 — Evaluate at the default threshold
First, understand the model's performance at the standard probability threshold of 0.5.
from sklearn.metrics import (    confusion_matrix,    classification_report,    accuracy_score)val_predictions = fraud_pipeline.predict(X_val)print("Validation Accuracy:")print(accuracy_score(y_val, val_predictions))print("\nConfusion Matrix:")print(confusion_matrix(y_val, val_predictions))print("\nClassification Report:")print(classification_report(    y_val,    val_predictions,    target_names=["Legitimate", "Fraud"],    zero_division=0))



Pay special attention to the Fraud row:
- Precision
- Recall
- F1-score
Don't focus on accuracy alone.
9. Step 7 — Select the best threshold
Remember Day 19? We learned that a threshold controls the trade-off between fraud precision and fraud recall.

Now we'll apply that knowledge to our project.

Get fraud probabilities:
import numpy as npimport pandas as pdval_probabilities = fraud_pipeline.predict_proba(X_val)[:, 1]



Test multiple thresholds:
from sklearn.metrics import precision_score, recall_score, f1_scorethreshold_results = []for threshold in np.arange(0.05, 0.96, 0.01):    predictions = (        val_probabilities >= threshold    ).astype(int)    threshold_results.append({        "Threshold": threshold,        "Precision": precision_score(            y_val, predictions, zero_division=0        ),        "Recall": recall_score(            y_val, predictions, zero_division=0        ),        "F1": f1_score(            y_val, predictions, zero_division=0        )    })threshold_df = pd.DataFrame(threshold_results)display(threshold_df.round(4))



Select the threshold that gives the highest precision while maintaining at least 80% fraud recall:
eligible = threshold_df[    threshold_df["Recall"] >= 0.80]if not eligible.empty:    best_row = eligible.sort_values(        "Precision",        ascending=False    ).iloc[0]    chosen_threshold = best_row["Threshold"]    print("Selected Threshold:", chosen_threshold)    print("Validation Precision:", best_row["Precision"])    print("Validation Recall:", best_row["Recall"])    print("Validation F1:", best_row["F1"])else:    chosen_threshold = None    print("No threshold achieved 80% recall.")



The 80% recall target is an educational target, not a universal banking requirement. A real fraud system needs business-defined costs for missed fraud and false alarms.
10. Step 8 — Final test evaluation
Important: Final independent evaluation
Only do this if a suitable validation threshold was found.
from sklearn.metrics import confusion_matrix, classification_reportif chosen_threshold is not None:    test_probabilities = fraud_pipeline.predict_proba(X_test)[:, 1]    test_predictions = (        test_probabilities >= chosen_threshold    ).astype(int)    print("FINAL TEST CONFUSION MATRIX")    print(confusion_matrix(y_test, test_predictions))    print("\nFINAL TEST CLASSIFICATION REPORT")    print(classification_report(        y_test,        test_predictions,        target_names=["Legitimate", "Fraud"],        zero_division=0    ))



This is your final evaluation for this project version. Don't keep changing the threshold based on test results.
11. Step 9 — Save your trained model
A trained model shouldn't disappear when your notebook closes.

We'll use Joblib to save it.
import joblibif chosen_threshold is not None:    model_artifact = {        "pipeline": fraud_pipeline,        "threshold": float(chosen_threshold),        "features": list(X.columns)    }    joblib.dump(        model_artifact,        "fraud_detection_v1.joblib"    )    print("Model saved successfully!")



Later, we'll learn to load this model and build an API around it.

To test loading:
loaded_artifact = joblib.load(    "fraud_detection_v1.joblib")loaded_pipeline = loaded_artifact["pipeline"]loaded_threshold = loaded_artifact["threshold"]print("Loaded threshold:", loaded_threshold)



Try predicting one transaction from your test dataset:
sample = X_test.iloc[[0]]probability = loaded_pipeline.predict_proba(sample)[0, 1]prediction = int(probability >= loaded_threshold)print("Fraud Probability:", probability)print("Prediction:", "Fraud" if prediction == 1 else "Legitimate")




12. Today's project deliverables
Your folder should now look like this:
Fraud_Detection_Project/
│
├── data/
│   └── README.md
│
├── notebooks/
│   └── fraud_detection.ipynb
│
├── models/
│   └── fraud_detection_v1.joblib
│
├── reports/
│   └── evaluation.txt
│
├── src/
│   └── train.py
│
├── requirements.txt
└── README.md


For now, saving the notebook and model is enough. We will organize the training script and documentation more thoroughly as part of our deployment work.