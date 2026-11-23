🚀 DAY 16 — Ensemble Learning 🔥
You've completed Day 15: Random Forest vs Decision Tree. Let's continue your 30-day ML roadmap with a practical lesson on Ensemble Learning.
Week 3 · Day 16 of 30

Hands-on

Estimated time: 60–90 minutes · Google Colab

1. The core concept
Ensemble Learning combines predictions from multiple models to try to improve performance and generalization.
Model A
70


Model B
80


Model C
90



Combined prediction
80 marks
Average of the three predictions


The average above is a regression example. For classification, models can combine their predicted classes or class probabilities.
2. Three techniques to know
Technique	How it works	Example
Bagging	Trains models on different bootstrap samples and combines their predictions	Random Forest
Voting	Combines predictions from different classifiers	Voting Classifier
Boosting	Builds models sequentially, improving on earlier errors or residuals	AdaBoost, Gradient Boosting, XGBoost

Remember: combining models does not guarantee better results. Model diversity, data quality, and evaluation matter.
3. Mini-project — Student Pass/Fail Predictor
We'll compare a Decision Tree, Random Forest, Logistic Regression, and a Voting Ensemble.
Step 1: Create the dataset
import pandas as pdfrom sklearn.model_selection import train_test_splitfrom sklearn.tree import DecisionTreeClassifierfrom sklearn.ensemble import RandomForestClassifier, VotingClassifierfrom sklearn.linear_model import LogisticRegressionfrom sklearn.metrics import accuracy_score, classification_reportdata = {    "hours_studied": [        1, 2, 2, 3, 3, 4, 4, 5, 5, 6,        6, 7, 7, 8, 8, 9, 2, 4, 6, 9    ],    "attendance": [        40, 45, 50, 55, 60, 60, 65, 70, 75, 75,        80, 85, 88, 90, 95, 98, 48, 68, 82, 96    ],    "passed": [        0, 0, 0, 0, 0, 0, 1, 0, 1, 1,        1, 1, 1, 1, 1, 1, 0, 1, 1, 1    ]}df = pd.DataFrame(data)X = df[["hours_studied", "attendance"]]y = df["passed"]X_train, X_test, y_train, y_test = train_test_split(    X, y,    test_size=0.30,    random_state=42,    stratify=y)print(df.head())print("Dataset shape:", df.shape)



Here, 0 = Fail and 1 = Pass.
Step 2: Train and compare the models
models = {    "Decision Tree": DecisionTreeClassifier(        max_depth=3, random_state=42    ),    "Random Forest": RandomForestClassifier(        n_estimators=100, random_state=42    ),    "Logistic Regression": LogisticRegression(        max_iter=1000    ),    "Voting Ensemble": VotingClassifier(        estimators=[            ("dt", DecisionTreeClassifier(                max_depth=3, random_state=42            )),            ("rf", RandomForestClassifier(                n_estimators=100, random_state=42            )),            ("lr", LogisticRegression(                max_iter=1000            ))        ],        voting="hard"    )}for name, model in models.items():    model.fit(X_train, y_train)    predictions = model.predict(X_test)    accuracy = accuracy_score(y_test, predictions)    print(f"{name}: {accuracy:.2%}")



Your task: Compare the test accuracy of all four models. Don't assume the ensemble will win; the dataset is tiny and synthetic.
Step 3: Inspect the ensemble's performance
ensemble = models["Voting Ensemble"]predictions = ensemble.predict(X_test)print(classification_report(    y_test,    predictions,    labels=[0, 1],    target_names=["Fail", "Pass"],    zero_division=0))



Look beyond accuracy. Precision and recall help you understand which class the model predicts well.
Step 4: Predict for a new student
student = pd.DataFrame({    "hours_studied": [6],    "attendance": [80]})prediction = ensemble.predict(student)[0]print("Prediction:", "PASS" if prediction == 1 else "FAIL")



This is only a model prediction, not a guarantee of the student's result.