🚀 DAY 5: Train/Test Split + Model Accuracy
🎯 Goal of Today
By the end of today, you will:
- Understand why your current model is not enough ❗
- Learn how to test ML models properly ✅
- Measure model performance (accuracy) ✅
⚠️ Step 1: The Problem with Your Current Model
Right now:
- You trained AND tested on same data ❌
👉 That’s like:
Studying questions and giving the SAME exam → fake confidence 😅  

✅ Solution:
Split data into:
- Training Data → model learns
- Testing Data → model is tested
⚡ Step 2: Train/Test Split
from sklearn.model_selection import train_test_splitX = df[["hours_studied"]]y = df["marks"]X_train, X_test, y_train, y_test = train_test_split(    X, y, test_size=0.2, random_state=42)


🧠 What this means:
- 80% data → training
- 20% data → testing
⚡ Step 3: Train Model (Again)
from sklearn.linear_model import LinearRegressionmodel = LinearRegression()model.fit(X_train, y_train)


⚡ Step 4: Test the Model
y_pred = model.predict(X_test)print("Predicted:", y_pred)print("Actual:", y_test.values)


📊 Step 5: Measure Accuracy
from sklearn.metrics import mean_absolute_errorerror = mean_absolute_error(y_test, y_pred)print("Mean Absolute Error:", error)


🧠 Interpretation:
- Lower error = better model ✅
- Higher error = poor model ❌
📈 Step 6: Visualize Train vs Test
import matplotlib.pyplot as pltplt.scatter(X_train, y_train, label="Train Data")plt.scatter(X_test, y_test, label="Test Data")plt.legend()plt.show()


🔥 Mini Project (Day 5)
🎯 Upgrade:
👉 Marks Predictor v2 (Real ML Version)
Add:
- Train/Test split
- Error calculation
- Better prediction logic
💡 Challenge (IMPORTANT)
👉 Try changing:
test_size=0.3


📌 Observe:
- Does error increase/decrease?
🧠 Extra Insight (VERY IMPORTANT)
What you learned today is called:
👉 Model Validation

Without this:
- Your ML model is useless in real world ❌
🧠 Real-World Thinking
Ask:
- Will model work on new student?
- Is it overfitting?
👉 This is what companies care about.
✅ End of Day 5 Checklist