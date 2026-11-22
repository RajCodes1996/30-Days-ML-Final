🚀 DAY 13: Overfitting vs Underfitting
🎯 Goal of Today
By the end of today, you will:
- Understand why ML models fail ❗
- Detect overfitting & underfitting ✅
- Learn how to balance models properly ✅
🧠 Step 1: The Core Idea
ML model should:
- Learn patterns ✅
- NOT memorize data ❌
⚠️ UNDERFITTING
👉 Model is too simple.

Example:
- Trying to fit complex data using straight line only
Result:
- Poor training performance ❌
- Poor testing performance ❌
📉 Visualization
Simple model → misses patterns

⚠️ OVERFITTING
👉 Model memorizes training data.

Result:
- Excellent training accuracy ✅
- Poor real-world accuracy ❌
📉 Visualization
Complex model → memorizes noise

✅ GOOD FIT
👉 Learns actual patterns only.

Result:
- Good training performance ✅
- Good testing performance ✅
⚡ Step 2: Create Example Dataset
import pandas as pddata = {    "hours_studied": [1,2,3,4,5,6,7,8],    "marks": [35,40,50,60,65,70,80,90]}df = pd.DataFrame(data)X = df[["hours_studied"]]y = df["marks"]


⚡ Step 3: Split Data
from sklearn.model_selection import train_test_splitX_train, X_test, y_train, y_test = train_test_split(    X, y, test_size=0.2, random_state=42)


⚡ Step 4: Create Overfitting Tree
from sklearn.tree import DecisionTreeRegressormodel = DecisionTreeRegressor(max_depth=None)model.fit(X_train, y_train)


⚡ Step 5: Check Train vs Test Score
train_score = model.score(X_train, y_train)test_score = model.score(X_test, y_test)print("Train Score:", train_score)print("Test Score:", test_score)


🧠 Interpretation
If:
- Train = very high
- Test = low
👉 OVERFITTING ❌  
⚡ Step 6: Reduce Complexity
model = DecisionTreeRegressor(max_depth=2)model.fit(X_train, y_train)print("Train:", model.score(X_train, y_train))print("Test:", model.score(X_test, y_test))


🧠 Observe:
- Model becomes simpler
- Better generalization
🔥 Step 7: Bias-Variance Intuition
Problem	Meaning
Underfitting	High Bias
Overfitting	High Variance


🔥 Mini Project (Day 13)
🎯 Upgrade:
👉 Smart Student Predictor
Add:
- Compare:
  - Deep tree
  - Shallow tree
- Print:
  - Train score
  - Test score
💡 Challenge (VERY IMPORTANT)
👉 Try different depths:
max_depth=1max_depth=3max_depth=5


📌 Observe:
- Which gives best balance?
🧠 Real-World Insight
Most ML engineering is:
- NOT choosing fancy models
- BUT controlling overfitting 🔥
⚠️ Industry Truth
A model with:
- 99% train accuracy
- 60% test accuracy
👉 is BAD ❌  
✅ End of Day 13