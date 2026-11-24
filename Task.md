🚀 Day 20 — ML Pipelines, ColumnTransformer & Data Leakage Prevention
Day 19 completed
Day 20 started
Week 3

Today we're moving from training individual ML models to building professional, reusable machine learning workflows.

Your main project context remains our Credit Card Fraud Detection dataset.
Today's learning objectives
By the end of Day 20, you'll understand:
1. Why preprocessing is necessary.
2. What an ML Pipeline is.
3. How ColumnTransformer works.
4. How to handle numerical and categorical columns.
5. What data leakage is and how to prevent it.
6. How to combine preprocessing and model training into one workflow.
Today's time plan: 2–3 hours, with most of the time spent coding.

1. The problem: Why do we need pipelines?
Imagine your ML workflow looks like this:
Without a Pipeline
Load Dataset

Handle Missing Values

Scale Features

Encode Categories

Train Model
Every step is managed separately. It's easier to make mistakes or forget preprocessing during prediction.
A Pipeline combines preprocessing and model training into one organized workflow.
With a Pipeline
Single ML Pipeline

Imputation → Scaling → Model


Train / Predict

Preprocessing and model execution are handled consistently.
Think of a Pipeline as an automated assembly line for your ML model.
2. First practical: Build your first Pipeline
Let's use a small dataset so you understand the concept before applying it to fraud detection.
Step 1 — Import libraries
Run this in Google Colab or Jupyter Notebook.
import pandas as pdimport numpy as npfrom sklearn.model_selection import train_test_splitfrom sklearn.pipeline import Pipelinefrom sklearn.preprocessing import StandardScalerfrom sklearn.impute import SimpleImputerfrom sklearn.linear_model import LogisticRegressionfrom sklearn.metrics import classification_report



Step 2 — Create a sample dataset
data = {    "Age": [22, 25, 47, 52, 46, 56, 23, 40, 35, 60],    "Salary": [        25000, 30000, 60000, 80000, 55000,        90000, 28000, 50000, 45000, 100000    ],    "Purchased": [0, 0, 1, 1, 1, 1, 0, 1, 0, 1]}df = pd.DataFrame(data)print(df)



Our objective: predict whether a customer purchases a product.
Step 3 — Separate X and y
X = df[["Age", "Salary"]]y = df["Purchased"]X_train, X_test, y_train, y_test = train_test_split(    X, y,    test_size=0.3,    random_state=42,    stratify=y)



Step 4 — Create the Pipeline
pipeline = Pipeline([    ("imputer", SimpleImputer(strategy="mean")),    ("scaler", StandardScaler()),    ("model", LogisticRegression())])



Understand the three steps:
Step	Purpose
imputer	Fills missing numerical values
scaler	Standardizes numerical features
model	Trains Logistic Regression

Step 5 — Train and evaluate
pipeline.fit(X_train, y_train)predictions = pipeline.predict(X_test)print(classification_report(    y_test,    predictions,    zero_division=0))



That's your first complete ML Pipeline!

Important: This tiny dataset is only for learning the workflow. Its test metrics aren't reliable evidence of real-world performance.

3. Data Leakage — one of the most important ML concepts
Before learning ColumnTransformer, understand this problem.

Data leakage happens when information from outside the training data improperly influences model training.

For example, suppose you have 10,000 records:
- 8,000 training records
- 2,000 test records
You calculate the average salary using all 10,000 records, fill missing values, and then split the data.
Incorrect workflow
# WRONG: preprocessing before splittingX_scaled = StandardScaler().fit_transform(X)X_train, X_test, y_train, y_test = train_test_split(    X_scaled, y, test_size=0.2, random_state=42)



Why is this wrong?

Because the scaler calculated its mean and standard deviation using both training and test data.

The model's training process has indirectly received information from the test set.
Correct workflow
# Split firstX_train, X_test, y_train, y_test = train_test_split(    X, y, test_size=0.2, random_state=42)# Fit preprocessing only on training datascaler = StandardScaler()X_train_scaled = scaler.fit_transform(X_train)# Only transform test dataX_test_scaled = scaler.transform(X_test)



Remember these two methods:
Method	Meaning
fit()	Learn parameters from data
transform()	Apply learned parameters to data
fit_transform()	Learn and apply

A Pipeline handles this correctly when you call fit() on training data. During prediction, it only applies the already-learned transformations.

4. ColumnTransformer — handle different column types
Real-world datasets often contain different types of features.

Example:
Age	Salary	City	Education
25	30000	Delhi	Graduate
35	60000	Mumbai	Postgraduate
42	80000	Pune	Graduate

Problem:
- Age and Salary are numerical.
- City and Education are categorical.
- Numerical features need numerical preprocessing.
- Categorical features need encoding.
This is where ColumnTransformer helps.
ColumnTransformer workflow
Input Dataset

Age · Salary · City · Education

Numerical

Age, Salary

Imputer + Scaler


Categorical

City, Education

Imputer + Encoder




Combined processed data


Machine Learning Model


Step 1 — Create a mixed dataset
data = {    "Age": [22, 25, 47, 52, 46, 56, 23, 40, 35, 60,            28, 32, 45, 50, 29, 38, 42, 55, 31, 48],    "Salary": [25000, 30000, 60000, 80000, 55000,               90000, 28000, 50000, 45000, 100000,               32000, 40000, 70000, 85000, 35000,               52000, 65000, 95000, 42000, 75000],    "City": ["Delhi", "Mumbai", "Pune", "Delhi", "Pune",             "Mumbai", "Delhi", "Pune", "Mumbai", "Delhi",             "Pune", "Mumbai", "Delhi", "Pune", "Mumbai",             "Delhi", "Pune", "Mumbai", "Delhi", "Pune"],    "Education": ["Graduate", "Postgraduate", "Graduate",                  "Postgraduate", "Graduate", "Postgraduate",                  "Graduate", "Graduate", "Postgraduate",                  "Postgraduate", "Graduate", "Graduate",                  "Postgraduate", "Graduate", "Graduate",                  "Postgraduate", "Graduate", "Postgraduate",                  "Graduate", "Postgraduate"],    "Purchased": [0, 0, 1, 1, 1, 1, 0, 1, 0, 1,                  0, 0, 1, 1, 0, 1, 1, 1, 0, 1]}df = pd.DataFrame(data)X = df.drop("Purchased", axis=1)y = df["Purchased"]



Step 2 — Identify numerical and categorical columns
numeric_features = ["Age", "Salary"]categorical_features = ["City", "Education"]



Step 3 — Create preprocessing pipelines
from sklearn.compose import ColumnTransformerfrom sklearn.preprocessing import OneHotEncodernumeric_transformer = Pipeline([    ("imputer", SimpleImputer(strategy="median")),    ("scaler", StandardScaler())])categorical_transformer = Pipeline([    ("imputer", SimpleImputer(strategy="most_frequent")),    ("encoder", OneHotEncoder(handle_unknown="ignore"))])



What's OneHotEncoder?

It converts categories into numerical columns.

For example:
City	Delhi	Mumbai	Pune
Delhi	1	0	0
Mumbai	0	1	0
Pune	0	0	1

Step 4 — Combine using ColumnTransformer
preprocessor = ColumnTransformer([    ("num", numeric_transformer, numeric_features),    ("cat", categorical_transformer, categorical_features)])



This tells Scikit-learn:
- Apply numerical preprocessing to Age and Salary.
- Apply categorical preprocessing to City and Education.
- Combine the resulting features.
Step 5 — Create the complete ML Pipeline
full_pipeline = Pipeline([    ("preprocessing", preprocessor),    ("model", LogisticRegression(max_iter=1000))])



Step 6 — Train and evaluate
X_train, X_test, y_train, y_test = train_test_split(    X, y,    test_size=0.25,    random_state=42,    stratify=y)full_pipeline.fit(X_train, y_train)predictions = full_pipeline.predict(X_test)print(classification_report(    y_test, predictions, zero_division=0))



You have now built a complete preprocessing and model-training workflow.

5. Apply today's learning to your Fraud Detection project
Your Credit Card Fraud Detection dataset contains numerical features (V1–V28, Time, Amount).

Therefore, you don't need categorical encoding for this dataset.

You can create a clean pipeline like this:
from sklearn.pipeline import Pipelinefrom sklearn.preprocessing import StandardScalerfrom sklearn.linear_model import LogisticRegressionfrom sklearn.metrics import classification_report, confusion_matrixfraud_pipeline = Pipeline([    ("scaler", StandardScaler()),    ("model", LogisticRegression(        class_weight="balanced",        max_iter=1000,        random_state=42    ))])# Fit only on training datafraud_pipeline.fit(X_train, y_train)# Predict on test datafraud_predictions = fraud_pipeline.predict(X_test)print("Confusion Matrix:")print(confusion_matrix(y_test, fraud_predictions))print("\nClassification Report:")print(classification_report(    y_test,    fraud_predictions,    target_names=["Legitimate", "Fraud"],    zero_division=0))



This gives you a reusable model that automatically scales incoming data before prediction.

Important: This example uses the default classification threshold of 0.5. It is a new baseline, not a replacement for your Day 19 threshold experiment. Keep your original test set untouched when comparing models; use validation data for model and threshold selection.