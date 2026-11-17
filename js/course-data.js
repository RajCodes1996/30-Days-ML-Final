// 30 Days Of Machine Learning - course data
// Add the next lesson by pushing a new object into COURSE.days.
// Section blocks: p | list | code | callout | table | details

const COURSE = {
  title: "30 Days Of Machine Learning",
  total: 30,
  days: [
    {
      day: 1,
      title: "Setup + First Data Interaction",
      subtitle: "Get your ML environment ready, load a real dataset and think like an ML developer.",
      level: "Beginner",
      duration: "60-90 min",
      tags: ["Setup", "Pandas", "EDA", "Missing Values", "Matplotlib"],

      goals: [
        "Have your ML environment ready",
        "Load and explore a dataset with Pandas",
        "Think like an ML developer, not just a coder"
      ],

      sections: [
        {
          id: "setup", icon: "⚡", title: "Step 1: Environment Setup",
          meta: "30-45 mins",
          blocks: [
            { type: "p", text: "Open your terminal or command prompt and install the core ML libraries:" },
            { type: "code", lang: "bash", title: "Terminal", code: "pip install numpy pandas matplotlib scikit-learn jupyter" },
            { type: "p", text: "Choose one workspace:" },
            { type: "list", items: [
              "VS Code (recommended): install the Python extension, then create a file named day1_ml.py",
              "Jupyter Notebook: run jupyter notebook and create a new Python 3 notebook"
            ]},
            { type: "p", text: "Verify the installation worked:" },
            { type: "code", lang: "bash", title: "Terminal", code: "python -c \"import numpy, pandas, matplotlib, sklearn; print('Ready')\"", output: "Ready" }
          ]
        },
        {
          id: "ml-basics", icon: "🧠", title: "Step 2: Understand ML (Quick)",
          meta: "10 mins",
          blocks: [
            { type: "callout", tone: "info", text: "Machine Learning means teaching machines to learn patterns from data instead of coding rules by hand." },
            { type: "table", head: ["Type", "Idea", "Priority now"], rows: [
              ["Supervised", "Learn from labeled data (input → known answer)", "Most important"],
              ["Unsupervised", "Find hidden patterns in unlabeled data", "Later"],
              ["Reinforcement", "Learn by reward and penalty", "Ignore for now"]
            ]},
            { type: "p", text: "Today's dataset is supervised: hours studied is the input and marks is the known answer." }
          ]
        },
        {
          id: "load", icon: "🛠️", title: "Step 3: Load the Dataset",
          meta: "Most important step",
          blocks: [
            { type: "p", text: "Create a Pandas DataFrame, which is a table of rows and columns. Copy this into day1_ml.py:" },
            { type: "code", lang: "python", title: "day1_ml.py", code: String.raw`import pandas as pd

data = {
    "hours_studied": [1, 2, 3, 4, 5, 6],
    "marks": [35, 40, 50, 60, 65, 70]
}

df = pd.DataFrame(data)
print(df)`,
              output: `   hours_studied  marks
0              1     35
1              2     40
2              3     50
3              4     60
4              5     65
5              6     70` }
          ]
        },
        {
          id: "explore", icon: "🔍", title: "Explore the Data",
          blocks: [
            { type: "p", text: "Add these lines below your code to inspect the dataset:" },
            { type: "code", lang: "python", title: "day1_ml.py", code: String.raw`print("\nFirst 5 rows:")
print(df.head())

print("\nDataset Info:")
df.info()

print("\nStatistics:")
print(df.describe())`,
              output: `First 5 rows:
   hours_studied  marks
0              1     35
1              2     40
2              3     50
3              4     60
4              5     65

Dataset Info:
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 6 entries, 0 to 5
Data columns (total 2 columns):
 #   Column         Non-Null Count  Dtype
---  ------         --------------  -----
 0   hours_studied  6 non-null      int64
 1   marks          6 non-null      int64
dtypes: int64(2)

Statistics:
       hours_studied      marks
count       6.000000   6.000000
mean        3.500000  53.333333
std         1.870829  14.023789
min         1.000000  35.000000
25%         2.250000  42.500000
50%         3.500000  55.000000
75%         4.750000  63.750000
max         6.000000  70.000000` },
            { type: "callout", tone: "tip", text: "df.info() prints its report by itself and returns None. Write df.info(), not print(df.info()), or you will see an extra None." },
            { type: "p", text: "Memory usage in the info report may differ slightly on your machine." }
          ]
        },
        {
          id: "analysis", icon: "📊", title: "Basic Analysis",
          blocks: [
            { type: "code", lang: "python", title: "day1_ml.py", code: String.raw`print("\nAverage Marks:", round(df["marks"].mean(), 2))
print("Max Marks:", df["marks"].max())`,
              output: `Average Marks: 53.33
Max Marks: 70` }
          ]
        },
        {
          id: "think", icon: "🧠", title: "Step 4: Think Like an ML Engineer",
          blocks: [
            { type: "p", text: "Before any model, ask these questions. This thinking matters more than the code." },
            { type: "table", head: ["Question", "Answer for today's data"], rows: [
              ["Does more study lead to more marks?", "✅ Yes, marks rise with hours"],
              ["Is the data clean?", "✅ Yes, all values are numbers"],
              ["Any missing values?", "❌ None (df.info shows 6 non-null)"]
            ]}
          ]
        },
        {
          id: "challenge", icon: "⚡", title: "Step 5: Mini Challenge",
          meta: "Do this yourself",
          blocks: [
            { type: "p", text: "Modify the dataset so the last marks value is missing (None):" },
            { type: "code", lang: "python", title: "Challenge starter", code: String.raw`data = {
    "hours_studied": [1, 2, 3, 4, 5, 6, 7],
    "marks": [35, 40, 50, 60, 65, 70, None]
}`},
            { type: "p", text: "Your task: handle the missing value by replacing it with the average marks." },
            { type: "callout", tone: "tip", text: "Hint: use fillna() with the column mean. Try it before opening the solution." },
            { type: "details", summary: "Show solution", blocks: [
              { type: "code", lang: "python", title: "Solution", code: String.raw`import pandas as pd

data = {
    "hours_studied": [1, 2, 3, 4, 5, 6, 7],
    "marks": [35, 40, 50, 60, 65, 70, None]
}
df = pd.DataFrame(data)

print("Missing before:")
print(df.isnull().sum())

df["marks"] = df["marks"].fillna(df["marks"].mean())
print(df)`,
                output: `Missing before:
hours_studied    0
marks            1
dtype: int64
   hours_studied      marks
0              1  35.000000
1              2  40.000000
2              3  50.000000
3              4  60.000000
4              5  65.000000
5              6  70.000000
6              7  53.333333` },
              { type: "callout", tone: "warn", text: "Older tutorials use df[\"marks\"].fillna(..., inplace=True). In recent Pandas versions this shows a FutureWarning and may not change df. Assigning the result back, as above, is the safe way." }
            ]}
          ]
        },
        {
          id: "plot", icon: "🚀", title: "Step 6: Plot the Graph (Optional)",
          blocks: [
            { type: "p", text: "A picture shows the pattern instantly. Plot the original 6-row dataset:" },
            { type: "code", lang: "python", title: "day1_ml.py", code: String.raw`import matplotlib.pyplot as plt

plt.scatter(df["hours_studied"], df["marks"])
plt.xlabel("Hours Studied")
plt.ylabel("Marks")
plt.title("Study vs Marks")
plt.show()` },
            { type: "p", text: "You should see the dots rising from bottom left to top right: more study, more marks." }
          ]
        },
        {
          id: "learned", icon: "✅", title: "What You Actually Learned",
          blocks: [
            { type: "list", items: [
              "How to handle data, the most important ML skill",
              "How to think about patterns before modeling",
              "How ML starts: with data, not models"
            ]}
          ]
        }
      ],

      finalProgram: {
        title: "Day 1 Complete ML Data Workflow",
        file: "day1_final.py",
        description: "One program that combines everything from today: load data, explore it, detect and fix missing values, analyze and plot.",
        concepts: ["DataFrame", "head / info / describe", "isnull", "fillna", "mean / max / min", "scatter plot"],
        code: String.raw`import pandas as pd
import matplotlib.pyplot as plt

# 1. LOAD: build the dataset (last marks value is missing)
data = {
    "hours_studied": [1, 2, 3, 4, 5, 6, 7],
    "marks": [35, 40, 50, 60, 65, 70, None]
}
df = pd.DataFrame(data)
print("Full dataset:")
print(df)

# 2. EXPLORE: first rows and structure
print("\nFirst 5 rows:")
print(df.head())

print("\nDataset Info:")
df.info()

# 3. THINK LIKE AN ML ENGINEER: is the data clean?
print("\nMissing values before cleaning:")
print(df.isnull().sum())

# 4. CLEAN: replace missing marks with the average marks
df["marks"] = df["marks"].fillna(df["marks"].mean())
print("\nMissing values after cleaning:", df["marks"].isnull().sum())

# 5. STATISTICS on the clean data
print("\nStatistics:")
print(df.describe())

# 6. BASIC ANALYSIS
print("\nAverage Marks:", round(df["marks"].mean(), 2))
print("Max Marks:", df["marks"].max())
print("Min Marks:", df["marks"].min())

# 7. VISUALIZE: real data in blue, filled value in red
plt.scatter(df["hours_studied"][:6], df["marks"][:6], color="blue", label="Real data")
plt.scatter(df["hours_studied"][6:], df["marks"][6:], color="red", label="Filled with average")
plt.xlabel("Hours Studied")
plt.ylabel("Marks")
plt.title("Study vs Marks")
plt.legend()
plt.show()`,
        output: `Full dataset:
   hours_studied  marks
0              1   35.0
1              2   40.0
2              3   50.0
3              4   60.0
4              5   65.0
5              6   70.0
6              7    NaN

First 5 rows:
   hours_studied  marks
0              1   35.0
1              2   40.0
2              3   50.0
3              4   60.0
4              5   65.0

Dataset Info:
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 7 entries, 0 to 6
Data columns (total 2 columns):
 #   Column         Non-Null Count  Dtype
---  ------         --------------  -----
 0   hours_studied  7 non-null      int64
 1   marks          6 non-null      float64
dtypes: float64(1), int64(1)

Missing values before cleaning:
hours_studied    0
marks            1
dtype: int64

Missing values after cleaning: 0

Statistics:
       hours_studied      marks
count       7.000000   7.000000
mean        4.000000  53.333333
std         2.160247  12.801910
min         1.000000  35.000000
25%         2.500000  45.000000
50%         4.000000  53.333333
75%         5.500000  62.500000
max         7.000000  70.000000

Average Marks: 53.33
Max Marks: 70.0
Min Marks: 35.0`
      },

      practice: [
        {
          title: "Cricketer Runs Explorer",
          level: "Easy",
          file: "practice1.py",
          description: "A cricketer scored these runs in 6 matches. Explore the data like an ML engineer.",
          tasks: [
            "Create a DataFrame with columns match and runs",
            "Print the full table and the first 5 rows",
            "Print the average, max and min runs",
            "Print how many values are missing in each column"
          ],
          hint: "Use mean(), max(), min() on df[\"runs\"] and isnull().sum() on df.",
          starter: String.raw`import pandas as pd

data = {
    "match": [1, 2, 3, 4, 5, 6],
    "runs": [45, 60, 38, 72, 55, 90]
}

# TODO 1: create the DataFrame

# TODO 2: print the full table and the first 5 rows

# TODO 3: print average, max and min runs

# TODO 4: print missing values per column`,
          solution: String.raw`import pandas as pd

data = {
    "match": [1, 2, 3, 4, 5, 6],
    "runs": [45, 60, 38, 72, 55, 90]
}

df = pd.DataFrame(data)
print(df)

print("\nFirst 5 rows:")
print(df.head())

print("\nAverage Runs:", round(df["runs"].mean(), 2))
print("Max Runs:", df["runs"].max())
print("Min Runs:", df["runs"].min())

print("\nMissing values:")
print(df.isnull().sum())`,
          output: `   match  runs
0      1    45
1      2    60
2      3    38
3      4    72
4      5    55
5      6    90

First 5 rows:
   match  runs
0      1    45
1      2    60
2      3    38
3      4    72
4      5    55

Average Runs: 60.0
Max Runs: 90
Min Runs: 38

Missing values:
match    0
runs     0
dtype: int64`
        },
        {
          title: "Steps vs Calories Cleaner",
          level: "Medium",
          file: "practice2.py",
          description: "A fitness tracker lost two calorie readings. Clean the data and plot it.",
          tasks: [
            "Create the DataFrame and count missing values per column",
            "Replace the missing calories with the average calories",
            "Print the cleaned table",
            "Plot steps (x) vs calories (y) with axis labels and a title"
          ],
          hint: "Assign back: df[\"calories\"] = df[\"calories\"].fillna(df[\"calories\"].mean()). Plot with plt.scatter().",
          starter: String.raw`import pandas as pd
import matplotlib.pyplot as plt

data = {
    "steps_thousands": [2, 4, 6, 8, 10, 12],
    "calories": [90, 160, None, 330, 400, None]
}

# TODO 1: create the DataFrame and print missing values per column

# TODO 2: fill missing calories with the average calories

# TODO 3: print the cleaned table

# TODO 4: scatter plot with labels and a title`,
          solution: String.raw`import pandas as pd
import matplotlib.pyplot as plt

data = {
    "steps_thousands": [2, 4, 6, 8, 10, 12],
    "calories": [90, 160, None, 330, 400, None]
}

df = pd.DataFrame(data)
print("Missing before:")
print(df.isnull().sum())

avg = df["calories"].mean()
df["calories"] = df["calories"].fillna(avg)

print("\nAverage used to fill:", avg)
print(df)

plt.scatter(df["steps_thousands"], df["calories"])
plt.xlabel("Steps (thousands)")
plt.ylabel("Calories Burned")
plt.title("Steps vs Calories")
plt.show()`,
          output: `Missing before:
steps_thousands    0
calories           2
dtype: int64

Average used to fill: 245.0
   steps_thousands  calories
0                2      90.0
1                4     160.0
2                6     245.0
3                8     330.0
4               10     400.0
5               12     245.0`,
          note: "Look at your plot: 12k steps filled with 245 calories looks off, because the trend says it should be higher. Filling with the average is simple but not always smart. You will learn better methods later."
        }
      ],

      checklist: [
        "Installed all tools",
        "Ran dataset code",
        "Understood data",
        "Handled missing values",
        "Plotted graph"
      ],

      quiz: [
        {
          q: "Which type of ML learns from labeled data?",
          options: ["Supervised", "Unsupervised", "Reinforcement", "None of these"],
          answer: 0,
          why: "Supervised learning uses inputs with known answers, like hours studied and marks."
        },
        {
          q: "Which Pandas call shows the first 5 rows?",
          options: ["df.top()", "df.head()", "df.first()", "df.rows(5)"],
          answer: 1,
          why: "df.head() returns the first 5 rows by default."
        },
        {
          q: "What does df.describe() give you?",
          options: ["Column data types only", "Missing value fix", "Count, mean, std, min, quartiles and max", "A plot"],
          answer: 2,
          why: "describe() summarizes numeric columns with basic statistics."
        },
        {
          q: "How do you replace missing marks with the average?",
          options: [
            "df[\"marks\"] = df[\"marks\"].fillna(df[\"marks\"].mean())",
            "df.drop(\"marks\")",
            "df[\"marks\"].mean() = None",
            "df.fill(0)"
          ],
          answer: 0,
          why: "fillna() replaces missing values, and mean() supplies the average."
        }
      ]
    }
  ]
};