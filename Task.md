🚀 DAY 15: Random Forest — Ensemble Learning

🎯 Today's mission
Build a Student Performance Predictor v3 that compares a single Decision Tree with a Random Forest.

By the end of today, you should understand:
- What ensemble learning is.
- How Random Forest combines multiple decision trees.
- Why Random Forest often generalizes better than a single tree.
- How to compare models using unseen test data.
Step 1 — Understand the concept
A Decision Tree makes predictions using one tree of learned rules.

A Random Forest combines predictions from many decision trees. For regression, it typically averages their predictions.

Decision Tree

One tree learns patterns. It can overfit when allowed to become too complex.

Random Forest

Many trees contribute predictions, often making the overall model more stable.


Step 2 — Prepare your dataset
Run this in Google Colab or VS Code.
import pandas as pddata = {    "hours_studied": [1, 2, 3, 4, 5, 6, 7, 8, 2, 6, 4, 7],    "sleep_hours":   [5, 6, 6, 7, 7, 8, 8, 9, 5, 7, 8, 6],    "attendance":    [45, 55, 60, 70, 75, 85, 90, 98, 50, 80, 65, 92],    "marks":         [25, 35, 42, 55, 65, 75, 85, 95, 30, 72, 58, 88]}df = pd.DataFrame(data)X = df[["hours_studied", "sleep_hours", "attendance"]]y = df["marks"]print(df.head())


Your ML task: Use the three input features to predict student marks.
Step 3 — Split the data
from sklearn.model_selection import train_test_splitX_train, X_test, y_train, y_test = train_test_split(    X, y,    test_size=0.25,    random_state=42)


We keep test data separate so that we can evaluate how well each model predicts unseen examples.
Step 4 — Train both models
from sklearn.tree import DecisionTreeRegressorfrom sklearn.ensemble import RandomForestRegressortree = DecisionTreeRegressor(    max_depth=3,    random_state=42)forest = RandomForestRegressor(    n_estimators=100,    max_depth=3,    random_state=42)tree.fit(X_train, y_train)forest.fit(X_train, y_train)print("Both models trained successfully!")


Understand the new parameter
- n_estimators=100: build 100 trees in the forest.
- max_depth=3: limit each tree's depth.
- random_state=42: make the experiment reproducible.
Step 5 — Evaluate the models
from sklearn.metrics import mean_absolute_error, r2_scoremodels = {    "Decision Tree": tree,    "Random Forest": forest}for name, model in models.items():    train_pred = model.predict(X_train)    test_pred = model.predict(X_test)    print(f"\n{name}")    print("Train MAE:", round(        mean_absolute_error(y_train, train_pred), 2    ))    print("Test MAE:", round(        mean_absolute_error(y_test, test_pred), 2    ))    print("Test R²:", round(        r2_score(y_test, test_pred), 3    ))


Interpret the results:
Metric	Meaning
Train MAE	Average absolute prediction error on training data
Test MAE	Average absolute prediction error on unseen test data
Test R²	How well predictions explain variation in test targets

Important: Lower test MAE is better. A higher test R² is generally better, but R² can be negative. With this small, synthetic dataset, results can vary considerably with the split; don't assume Random Forest must win.
Step 6 — Accept user input
hours = float(input("Hours studied: "))sleep = float(input("Sleep hours: "))attendance = float(input("Attendance percentage: "))student = pd.DataFrame([{    "hours_studied": hours,    "sleep_hours": sleep,    "attendance": attendance}])tree_prediction = tree.predict(student)[0]forest_prediction = forest.predict(student)[0]print("\nDecision Tree prediction:",      round(tree_prediction, 2))print("Random Forest prediction:",      round(forest_prediction, 2))


Try inputs such as:
- Study hours: 5
- Sleep hours: 7
- Attendance: 80
Compare the predictions. These are educational estimates, not guarantees of actual marks.