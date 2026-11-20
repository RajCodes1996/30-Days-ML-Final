🚀 DAY 7: Mini Project Day
🎯 Build: Student Performance Predictor (Complete v1)
🧠 Goal of Today
By the end of today, you will:
- Combine everything you learned ✅
- Build a complete ML pipeline ✅
- Think like a real ML developer ✅
🏗️ Project Overview
🎯 Input:
- Hours studied
🎯 Output:
- Predicted marks
- Pass/Fail status
🎯 Features:
- Data handling
- Visualization
- ML model (Regression + Classification)
⚡ Step 1: Full Dataset
import pandas as pddata = {    "hours_studied": [1,2,3,4,5,6,7,8],    "marks": [35,40,50,60,65,70,80,90]}df = pd.DataFrame(data)# Create status columndf["status"] = df["marks"].apply(lambda x: 1 if x >= 50 else 0)


🔍 Step 2: Data Visualization
import matplotlib.pyplot as pltplt.scatter(df["hours_studied"], df["marks"])plt.xlabel("Hours Studied")plt.ylabel("Marks")plt.title("Study vs Marks")plt.show()


⚡ Step 3: Regression Model (Marks Prediction)
from sklearn.model_selection import train_test_splitfrom sklearn.linear_model import LinearRegressionX = df[["hours_studied"]]y_marks = df["marks"]X_train, X_test, y_train, y_test = train_test_split(    X, y_marks, test_size=0.2, random_state=42)reg_model = LinearRegression()reg_model.fit(X_train, y_train)


⚡ Step 4: Classification Model (Pass/Fail)
from sklearn.linear_model import LogisticRegressiony_status = df["status"]clf_model = LogisticRegression()clf_model.fit(X, y_status)


⚡ Step 5: User Input System
hours = float(input("Enter hours studied: "))# Predict markspred_marks = reg_model.predict([[hours]])# Predict pass/failpred_status = clf_model.predict([[hours]])print("\nPredicted Marks:", round(pred_marks[0], 2))if pred_status[0] == 1:    print("Result: Pass ✅")else:    print("Result: Fail ❌")


📊 Step 6: Model Evaluation
from sklearn.metrics import mean_absolute_error, accuracy_score# Regression errory_pred_marks = reg_model.predict(X_test)error = mean_absolute_error(y_test, y_pred_marks)print("Regression Error:", error)# Classification accuracyy_pred_status = clf_model.predict(X)acc = accuracy_score(y_status, y_pred_status)print("Classification Accuracy:", acc)


🔥 Final Output Example
Enter hours studied: 6

Predicted Marks: 72.5
Result: Pass ✅
Regression Error: 3.2
Classification Accuracy: 1.0

💡 Challenge (VERY IMPORTANT)
Upgrade your project:
🔹 Add:
- More features:
  - Sleep hours
  - Attendance
- Better prediction 🔥
🧠 What You Just Achieved
This is BIG:
- ✅ Data handling
- ✅ Visualization
- ✅ Regression model
- ✅ Classification model
- ✅ Evaluation
👉 This is your first complete ML system