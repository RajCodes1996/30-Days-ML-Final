🚀 DAY 2: NumPy + Pandas (Real Data Skills)
🎯 Goal of Today
By the end of today, you will:
- Understand how ML handles data internally ✅
- Perform real-world data operations ✅
- Clean, filter, and manipulate datasets confidently ✅
⚡ Step 1: NumPy (Fast Computation Brain of ML)
👉 Think of NumPy as:
“Super-fast arrays used inside ML models”

🛠️ Practice This:
import numpy as np# Create arrayarr = np.array([10, 20, 30, 40])print("Array:", arr)# Basic operationsprint("Add 5:", arr + 5)print("Multiply by 2:", arr * 2)# Meanprint("Average:", np.mean(arr))


🧠 Key Understanding
- ML models don’t use lists → they use NumPy arrays
- Operations are vectorized (fast)
⚡ Step 2: Pandas (Your Main Weapon)
👉 If ML had a “daily tool”, this is it.
🛠️ Load Dataset
Use this upgraded dataset:
import pandas as pddata = {    "name": ["A", "B", "C", "D", "E"],    "hours_studied": [2, 4, 1, 5, 3],    "marks": [40, 60, 30, 70, 50]}df = pd.DataFrame(data)print(df)


🔍 Step 3: Data Exploration
print(df.head())      # first rowsprint(df.columns)     # column namesprint(df.shape)       # rows, columns


🧹 Step 4: Data Filtering (VERY IMPORTANT)
# Students who scored more than 50print(df[df["marks"] > 50])


➕ Step 5: Create New Column (Feature Engineering Start)
df["performance"] = df["marks"] * 2print(df)


🔄 Step 6: Sorting Data
df_sorted = df.sort_values(by="marks", ascending=False)print(df_sorted)


🧼 Step 7: Handling Missing Data
df.loc[2, "marks"] = Noneprint(df)# Fill missing valuedf["marks"].fillna(df["marks"].mean(), inplace=True)print(df)


🧠 Step 8: Grouping (Real ML Use Case)
# Add categorydf["category"] = ["avg", "good", "avg", "good", "avg"]grouped = df.groupby("category")["marks"].mean()print(grouped)


🔥 Mini Project (Day 2)
🎯 Build:
👉 Student Analyzer v1
Features:
- Show top student
- Show average marks
- Filter students > 50
- Handle missing data
💡 Challenge (Important)
👉 Add this:
- New column: "status"
  - marks > 50 → "Pass"
  - marks <= 50 → "Fail"
💡 Hint:
df["status"] = df["marks"].apply(lambda x: "Pass" if x > 50 else "Fail")


🧠 What You Learned Today (REAL SKILL)
- How to manipulate data (this is 70% of ML work)
- How to clean messy datasets
- How to create features (VERY important later)