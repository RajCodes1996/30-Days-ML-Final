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
    },
    {
        "day": 2,
        "title": "NumPy + Pandas: Real Data Skills",
        "subtitle": "Understand how ML handles data internally, then clean, filter and manipulate real datasets with confidence.",
        "level": "Beginner",
        "duration": "90-120 min",
        "tags": [
            "NumPy",
            "Pandas",
            "Filtering",
            "Feature Engineering",
            "Sorting",
            "groupby"
        ],
        "goals": [
            "Understand how ML handles data internally",
            "Perform real-world data operations",
            "Clean, filter and manipulate datasets confidently"
        ],
        "sections": [
            {
                "id": "numpy",
                "icon": "⚡",
                "title": "Step 1: NumPy, the Fast Brain of ML",
                "meta": "Super-fast arrays used inside ML models",
                "blocks": [
                    {
                        "type": "p",
                        "text": "NumPy arrays hold numbers in a compact block and run math on every element at once. Try this:"
                    },
                    {
                        "type": "code",
                        "lang": "python",
                        "title": "day2_numpy.py",
                        "code": "import numpy as np\n\n# Create array\narr = np.array([10, 20, 30, 40])\nprint(\"Array:\", arr)\n\n# Basic operations\nprint(\"Add 5:\", arr + 5)\nprint(\"Multiply by 2:\", arr * 2)\n\n# Mean\nprint(\"Average:\", np.mean(arr))",
                        "output": "Array: [10 20 30 40]\nAdd 5: [15 25 35 45]\nMultiply by 2: [20 40 60 80]\nAverage: 25.0"
                    },
                    {
                        "type": "p",
                        "text": "Compare with a plain Python list to see why vectorization matters:"
                    },
                    {
                        "type": "code",
                        "lang": "python",
                        "title": "list_vs_array.py",
                        "code": "import numpy as np\n\nlst = [10, 20, 30, 40]\narr = np.array(lst)\n\nprint(\"List * 2 :\", lst * 2)\nprint(\"Array * 2:\", arr * 2)\nprint(\"Shape:\", arr.shape)",
                        "output": "List * 2 : [10, 20, 30, 40, 10, 20, 30, 40]\nArray * 2: [20 40 60 80]\nShape: (4,)"
                    },
                    {
                        "type": "callout",
                        "tone": "info",
                        "text": "Key understanding: ML models use NumPy arrays, not lists. Operations are vectorized, so there is no manual loop and it runs much faster."
                    }
                ]
            },
            {
                "id": "pandas-load",
                "icon": "🛠️",
                "title": "Step 2: Pandas, Your Main Weapon",
                "meta": "The daily tool of ML",
                "blocks": [
                    {
                        "type": "p",
                        "text": "Load the upgraded dataset. Every step below continues with this same df."
                    },
                    {
                        "type": "code",
                        "lang": "python",
                        "title": "day2_pandas.py",
                        "code": "import pandas as pd\n\ndata = {\n    \"name\": [\"A\", \"B\", \"C\", \"D\", \"E\"],\n    \"hours_studied\": [2, 4, 1, 5, 3],\n    \"marks\": [40, 60, 30, 70, 50]\n}\n\ndf = pd.DataFrame(data)\nprint(df)",
                        "output": "  name  hours_studied  marks\n0    A              2     40\n1    B              4     60\n2    C              1     30\n3    D              5     70\n4    E              3     50"
                    }
                ]
            },
            {
                "id": "explore",
                "icon": "🔍",
                "title": "Step 3: Data Exploration",
                "blocks": [
                    {
                        "type": "code",
                        "lang": "python",
                        "title": "explore.py",
                        "code": "print(df.head())      # first rows\nprint(df.columns)     # column names\nprint(df.shape)       # (rows, columns)",
                        "output": "  name  hours_studied  marks\n0    A              2     40\n1    B              4     60\n2    C              1     30\n3    D              5     70\n4    E              3     50\nIndex(['name', 'hours_studied', 'marks'], dtype='object')\n(5, 3)"
                    },
                    {
                        "type": "callout",
                        "tone": "tip",
                        "text": "df.shape has no brackets because it is an attribute, not a method. Writing df.shape() causes an error."
                    },
                    {
                        "type": "callout",
                        "tone": "info",
                        "text": "On newer Pandas versions the columns line may show dtype='str' instead of dtype='object'. Both are fine."
                    }
                ]
            },
            {
                "id": "filter",
                "icon": "🧹",
                "title": "Step 4: Data Filtering",
                "meta": "Very important",
                "blocks": [
                    {
                        "type": "p",
                        "text": "A condition inside df[...] keeps only the rows where it is True."
                    },
                    {
                        "type": "code",
                        "lang": "python",
                        "title": "filter.py",
                        "code": "# Students who scored more than 50\nprint(df[df[\"marks\"] > 50])",
                        "output": "  name  hours_studied  marks\n1    B              4     60\n3    D              5     70"
                    }
                ]
            },
            {
                "id": "feature",
                "icon": "➕",
                "title": "Step 5: Create a New Column",
                "meta": "Feature engineering starts here",
                "blocks": [
                    {
                        "type": "code",
                        "lang": "python",
                        "title": "new_column.py",
                        "code": "df[\"performance\"] = df[\"marks\"] * 2\nprint(df)",
                        "output": "  name  hours_studied  marks  performance\n0    A              2     40           80\n1    B              4     60          120\n2    C              1     30           60\n3    D              5     70          140\n4    E              3     50          100"
                    },
                    {
                        "type": "p",
                        "text": "A column built from other columns is called a feature. Good features make models smarter."
                    }
                ]
            },
            {
                "id": "sort",
                "icon": "🔄",
                "title": "Step 6: Sorting Data",
                "blocks": [
                    {
                        "type": "code",
                        "lang": "python",
                        "title": "sort.py",
                        "code": "df_sorted = df.sort_values(by=\"marks\", ascending=False)\nprint(df_sorted)",
                        "output": "  name  hours_studied  marks  performance\n3    D              5     70          140\n1    B              4     60          120\n4    E              3     50          100\n0    A              2     40           80\n2    C              1     30           60"
                    },
                    {
                        "type": "callout",
                        "tone": "info",
                        "text": "sort_values returns a new sorted table. The original df keeps its order."
                    }
                ]
            },
            {
                "id": "missing",
                "icon": "🧼",
                "title": "Step 7: Handling Missing Data",
                "blocks": [
                    {
                        "type": "code",
                        "lang": "python",
                        "title": "missing.py",
                        "code": "# Make one marks value missing\ndf.loc[2, \"marks\"] = None\nprint(df)\n\nprint(\"\\nMissing values:\")\nprint(df.isnull().sum())\n\n# Fill missing value with the average\ndf[\"marks\"] = df[\"marks\"].fillna(df[\"marks\"].mean())\nprint(df)",
                        "output": "  name  hours_studied  marks  performance\n0    A              2   40.0           80\n1    B              4   60.0          120\n2    C              1    NaN           60\n3    D              5   70.0          140\n4    E              3   50.0          100\n\nMissing values:\nname             0\nhours_studied    0\nmarks            1\nperformance      0\ndtype: int64\n  name  hours_studied  marks  performance\n0    A              2   40.0           80\n1    B              4   60.0          120\n2    C              1   55.0           60\n3    D              5   70.0          140\n4    E              3   50.0          100"
                    },
                    {
                        "type": "callout",
                        "tone": "warn",
                        "text": "Older tutorials write df[\"marks\"].fillna(..., inplace=True). In recent Pandas it shows a FutureWarning and may not change df. Assign the result back as above."
                    },
                    {
                        "type": "callout",
                        "tone": "info",
                        "text": "df.loc[row, column] selects by label. Here it targets row 2 and column marks."
                    }
                ]
            },
            {
                "id": "group",
                "icon": "🧠",
                "title": "Step 8: Grouping",
                "meta": "Real ML use case",
                "blocks": [
                    {
                        "type": "code",
                        "lang": "python",
                        "title": "groupby.py",
                        "code": "# Add category\ndf[\"category\"] = [\"avg\", \"good\", \"avg\", \"good\", \"avg\"]\n\ngrouped = df.groupby(\"category\")[\"marks\"].mean()\nprint(grouped)",
                        "output": "category\navg     48.333333\ngood    65.000000\nName: marks, dtype: float64"
                    },
                    {
                        "type": "p",
                        "text": "groupby splits rows into groups, then calculates one value per group, such as the average marks of each category."
                    }
                ]
            },
            {
                "id": "mini",
                "icon": "🔥",
                "title": "Mini Project: Student Analyzer v1",
                "meta": "Build it yourself",
                "blocks": [
                    {
                        "type": "p",
                        "text": "Features to build:"
                    },
                    {
                        "type": "list",
                        "items": [
                            "Show top student",
                            "Show average marks",
                            "Filter students above 50",
                            "Handle missing data"
                        ]
                    },
                    {
                        "type": "p",
                        "text": "Challenge: add a status column. Marks above 50 mean Pass, otherwise Fail."
                    },
                    {
                        "type": "callout",
                        "tone": "tip",
                        "text": "Hint: df[\"status\"] = df[\"marks\"].apply(lambda x: \"Pass\" if x > 50 else \"Fail\")"
                    },
                    {
                        "type": "details",
                        "summary": "Show the challenge solution",
                        "blocks": [
                            {
                                "type": "code",
                                "lang": "python",
                                "title": "status.py",
                                "code": "df[\"status\"] = df[\"marks\"].apply(lambda x: \"Pass\" if x > 50 else \"Fail\")\nprint(df[[\"name\", \"marks\", \"status\"]])",
                                "output": "  name  marks status\n0    A   40.0   Fail\n1    B   60.0   Pass\n2    C   55.0   Pass\n3    D   70.0   Pass\n4    E   50.0   Fail"
                            },
                            {
                                "type": "p",
                                "text": "The full Student Analyzer v1 is in the Final Program below."
                            }
                        ]
                    }
                ]
            },
            {
                "id": "learned",
                "icon": "✅",
                "title": "What You Actually Learned",
                "blocks": [
                    {
                        "type": "list",
                        "items": [
                            "How to manipulate data (about 70% of ML work)",
                            "How to clean messy datasets",
                            "How to create features, very important later"
                        ]
                    }
                ]
            }
        ],
        "finalProgram": {
            "title": "Student Analyzer v1",
            "file": "day2_final.py",
            "description": "One program combining everything from Day 2: NumPy math, loading, exploring, cleaning, filtering, new features, sorting and grouping.",
            "concepts": [
                "NumPy arrays",
                "DataFrame",
                "shape / columns",
                "fillna",
                "filtering",
                "new columns",
                "apply + lambda",
                "sort_values",
                "groupby"
            ],
            "code": "import numpy as np\nimport pandas as pd\n\n# 1. LOAD: student data (C's marks are missing)\ndata = {\n    \"name\": [\"A\", \"B\", \"C\", \"D\", \"E\"],\n    \"hours_studied\": [2, 4, 1, 5, 3],\n    \"marks\": [40, 60, None, 70, 50],\n    \"category\": [\"avg\", \"good\", \"avg\", \"good\", \"avg\"]\n}\ndf = pd.DataFrame(data)\n\n# 2. EXPLORE\nprint(\"=== STUDENT ANALYZER v1 ===\")\nprint(df)\nprint(\"\\nShape:\", df.shape)\nprint(\"Columns:\", list(df.columns))\n\n# 3. CLEAN: handle missing data\nprint(\"\\nMissing values:\")\nprint(df.isnull().sum())\ndf[\"marks\"] = df[\"marks\"].fillna(df[\"marks\"].mean())\n\n# 4. NUMPY: fast math on the marks column\nmarks_arr = df[\"marks\"].to_numpy()\nprint(\"\\nNumPy average:\", np.mean(marks_arr))\nprint(\"NumPy max:\", np.max(marks_arr))\n\n# 5. FEATURES: new columns\ndf[\"performance\"] = df[\"marks\"] * 2\ndf[\"status\"] = df[\"marks\"].apply(lambda x: \"Pass\" if x > 50 else \"Fail\")\n\n# 6. ANALYSIS\nprint(\"\\nTop student:\")\nprint(df[df[\"marks\"] == df[\"marks\"].max()])\n\nprint(\"\\nAverage marks:\", round(df[\"marks\"].mean(), 2))\n\nprint(\"\\nStudents who scored more than 50:\")\nprint(df[df[\"marks\"] > 50])\n\nprint(\"\\nRanking:\")\nprint(df.sort_values(by=\"marks\", ascending=False)[[\"name\", \"marks\", \"status\"]])\n\nprint(\"\\nAverage marks by category:\")\nprint(df.groupby(\"category\")[\"marks\"].mean())",
            "output": "=== STUDENT ANALYZER v1 ===\n  name  hours_studied  marks category\n0    A              2   40.0      avg\n1    B              4   60.0     good\n2    C              1    NaN      avg\n3    D              5   70.0     good\n4    E              3   50.0      avg\n\nShape: (5, 4)\nColumns: ['name', 'hours_studied', 'marks', 'category']\n\nMissing values:\nname             0\nhours_studied    0\nmarks            1\ncategory         0\ndtype: int64\n\nNumPy average: 55.0\nNumPy max: 70.0\n\nTop student:\n  name  hours_studied  marks category  performance status\n3    D              5   70.0     good        140.0   Pass\n\nAverage marks: 55.0\n\nStudents who scored more than 50:\n  name  hours_studied  marks category  performance status\n1    B              4   60.0     good        120.0   Pass\n2    C              1   55.0      avg        110.0   Pass\n3    D              5   70.0     good        140.0   Pass\n\nRanking:\n  name  marks status\n3    D   70.0   Pass\n1    B   60.0   Pass\n2    C   55.0   Pass\n4    E   50.0   Fail\n0    A   40.0   Fail\n\nAverage marks by category:\ncategory\navg     48.333333\ngood    65.000000\nName: marks, dtype: float64"
        },
        "practice": [
            {
                "title": "Mini Store Inventory",
                "level": "Easy",
                "file": "practice1.py",
                "description": "A shop keeps its stock in a table. Use NumPy and Pandas to analyze it.",
                "tasks": [
                    "Create the DataFrame and print its shape and column names",
                    "Print the items with price above 200",
                    "Add a total_value column (price * quantity)",
                    "Print the top 3 items by total_value",
                    "Use NumPy to print the average price"
                ],
                "hint": "Sort with sort_values(by=..., ascending=False), then use head(3). For NumPy use np.mean(df[\"price\"]).",
                "starter": "import numpy as np\nimport pandas as pd\n\ndata = {\n    \"item\": [\"Pen\", \"Book\", \"Bag\", \"Bottle\", \"Lamp\"],\n    \"price\": [10, 160, 600, 250, 450],\n    \"quantity\": [50, 20, 5, 12, 8]\n}\n\n# TODO 1: create the DataFrame, print shape and columns\n\n# TODO 2: filter price above 200\n\n# TODO 3: add total_value column\n\n# TODO 4: top 3 items by total_value\n\n# TODO 5: average price using NumPy",
                "solution": "import numpy as np\nimport pandas as pd\n\ndata = {\n    \"item\": [\"Pen\", \"Book\", \"Bag\", \"Bottle\", \"Lamp\"],\n    \"price\": [10, 160, 600, 250, 450],\n    \"quantity\": [50, 20, 5, 12, 8]\n}\n\ndf = pd.DataFrame(data)\nprint(\"Shape:\", df.shape)\nprint(\"Columns:\", list(df.columns))\n\nprint(\"\\nPrice above 200:\")\nprint(df[df[\"price\"] > 200])\n\ndf[\"total_value\"] = df[\"price\"] * df[\"quantity\"]\n\nprint(\"\\nTop 3 by total value:\")\nprint(df.sort_values(by=\"total_value\", ascending=False).head(3))\n\nprint(\"\\nAverage price (NumPy):\", np.mean(df[\"price\"]))",
                "output": "Shape: (5, 3)\nColumns: ['item', 'price', 'quantity']\n\nPrice above 200:\n     item  price  quantity\n2     Bag    600         5\n3  Bottle    250        12\n4    Lamp    450         8\n\nTop 3 by total value:\n   item  price  quantity  total_value\n4  Lamp    450         8         3600\n1  Book    160        20         3200\n2   Bag    600         5         3000\n\nAverage price (NumPy): 294.0"
            },
            {
                "title": "Employee Salary Cleaner",
                "level": "Medium",
                "file": "practice2.py",
                "description": "An HR table has missing salaries. Clean it, add features and summarize by department.",
                "tasks": [
                    "Create the DataFrame and count missing values per column",
                    "Fill missing salaries with the average salary",
                    "Add a level column: experience of 5 or more is Senior, otherwise Junior",
                    "Print the average salary per department",
                    "Print employees earning more than 49000, highest salary first"
                ],
                "hint": "Use fillna with the mean, apply with a lambda for level, and groupby(\"department\")[\"salary\"].mean().",
                "starter": "import pandas as pd\n\ndata = {\n    \"name\": [\"Ravi\", \"Sana\", \"Tom\", \"Priya\", \"Karan\", \"Meera\"],\n    \"department\": [\"IT\", \"HR\", \"IT\", \"HR\", \"IT\", \"HR\"],\n    \"salary\": [50000, 40000, None, 45000, 60000, None],\n    \"experience\": [3, 2, 5, 4, 8, 6]\n}\n\n# TODO 1: create the DataFrame, count missing values\n\n# TODO 2: fill missing salaries with the average\n\n# TODO 3: add level column (Senior / Junior)\n\n# TODO 4: average salary per department\n\n# TODO 5: salary above 49000, highest first",
                "solution": "import pandas as pd\n\ndata = {\n    \"name\": [\"Ravi\", \"Sana\", \"Tom\", \"Priya\", \"Karan\", \"Meera\"],\n    \"department\": [\"IT\", \"HR\", \"IT\", \"HR\", \"IT\", \"HR\"],\n    \"salary\": [50000, 40000, None, 45000, 60000, None],\n    \"experience\": [3, 2, 5, 4, 8, 6]\n}\n\ndf = pd.DataFrame(data)\nprint(\"Missing before:\")\nprint(df.isnull().sum())\n\ndf[\"salary\"] = df[\"salary\"].fillna(df[\"salary\"].mean())\ndf[\"level\"] = df[\"experience\"].apply(lambda x: \"Senior\" if x >= 5 else \"Junior\")\nprint(\"\\n\", df, sep=\"\")\n\nprint(\"\\nAverage salary by department:\")\nprint(df.groupby(\"department\")[\"salary\"].mean())\n\nprint(\"\\nSalary above 49000:\")\nprint(df[df[\"salary\"] > 49000].sort_values(by=\"salary\", ascending=False))",
                "output": "Missing before:\nname          0\ndepartment    0\nsalary        2\nexperience    0\ndtype: int64\n\n    name department   salary  experience   level\n0   Ravi         IT  50000.0           3  Junior\n1   Sana         HR  40000.0           2  Junior\n2    Tom         IT  48750.0           5  Senior\n3  Priya         HR  45000.0           4  Junior\n4  Karan         IT  60000.0           8  Senior\n5  Meera         HR  48750.0           6  Senior\n\nAverage salary by department:\ndepartment\nHR    44583.333333\nIT    52916.666667\nName: salary, dtype: float64\n\nSalary above 49000:\n    name department   salary  experience   level\n4  Karan         IT  60000.0           8  Senior\n0   Ravi         IT  50000.0           3  Junior",
                "note": "Filling with one overall average ignores departments. A smarter fix is to fill each missing salary with its own department's average. You will learn better imputation later."
            }
        ],
        "checklist": [
            "Ran NumPy array operations",
            "Loaded and explored a DataFrame",
            "Filtered and sorted data",
            "Created new columns (performance, status)",
            "Handled missing data",
            "Used groupby",
            "Built Student Analyzer v1"
        ],
        "quiz": [
            {
                "q": "Why do ML models prefer NumPy arrays over Python lists?",
                "options": [
                    "They look nicer",
                    "Vectorized operations run fast on all elements",
                    "Lists cannot store numbers",
                    "Arrays use less code only"
                ],
                "answer": 1,
                "why": "NumPy applies math to whole arrays at once, which is much faster than looping over lists."
            },
            {
                "q": "Which line keeps only students with marks above 50?",
                "options": [
                    "df.filter(marks > 50)",
                    "df[df[\"marks\"] > 50]",
                    "df.marks > 50",
                    "df.where(50)"
                ],
                "answer": 1,
                "why": "A True/False condition inside df[...] selects the matching rows."
            },
            {
                "q": "What does df.groupby(\"category\")[\"marks\"].mean() return?",
                "options": [
                    "Average marks of every row",
                    "Average marks for each category",
                    "The top student",
                    "The number of categories"
                ],
                "answer": 1,
                "why": "groupby splits the rows by category and mean() is calculated per group."
            },
            {
                "q": "Which creates a Pass/Fail column?",
                "options": [
                    "df[\"status\"] = df[\"marks\"].apply(lambda x: \"Pass\" if x > 50 else \"Fail\")",
                    "df.status = Pass",
                    "df.apply(status)",
                    "df[\"marks\"] = \"Pass\""
                ],
                "answer": 0,
                "why": "apply runs the lambda on each marks value and stores the result in the new column."
            }
        ]
    },


  // DAY 3 snippet. In course-data.js: add a comma after Day 2's closing }, then paste this object (no file replacement needed).
{
  "day": 3,
  "title": "Data Visualization + Pattern Thinking",
  "subtitle": "See your data before you model it: scatter plots, trends, distributions, correlation and outliers.",
  "level": "Beginner",
  "duration": "90-120 min",
  "tags": [
    "Matplotlib",
    "Scatter",
    "Histogram",
    "Correlation",
    "Outliers"
  ],
  "goals": [
    "Understand data visually, like real ML engineers",
    "Identify patterns and relationships",
    "Prepare your brain for model building (Day 4)"
  ],
  "sections": [
    {
      "id": "why",
      "icon": "⚡",
      "title": "Step 1: Why Visualization Matters",
      "meta": "If you can see it, you can model it",
      "blocks": [
        {
          "type": "p",
          "text": "Before any ML model, YOU should see the patterns. Charts answer questions that raw numbers hide:"
        },
        {
          "type": "list",
          "items": [
            "More study, more marks?",
            "Any outliers (points far from the rest)?",
            "Any weird or wrong data?"
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Rule of ML engineers: look at the data first, model second."
        }
      ]
    },
    {
      "id": "setup",
      "icon": "🛠️",
      "title": "Step 2: Setup Visualization",
      "blocks": [
        {
          "type": "p",
          "text": "Import the plotting library and rebuild the Day 2 dataset (clean version):"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "day3_setup.py",
          "code": "import matplotlib.pyplot as plt\nimport pandas as pd\n\ndata = {\n    \"name\": [\"A\", \"B\", \"C\", \"D\", \"E\"],\n    \"hours_studied\": [2, 4, 1, 5, 3],\n    \"marks\": [40, 60, 30, 70, 50]\n}\ndf = pd.DataFrame(data)\nprint(df)",
          "output": "  name  hours_studied  marks\n0    A              2     40\n1    B              4     60\n2    C              1     30\n3    D              5     70\n4    E              3     50"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "plt.show() opens a window and pauses your script until you close it. In Jupyter the chart appears under the cell."
        }
      ]
    },
    {
      "id": "scatter",
      "icon": "📊",
      "title": "Step 3: Scatter Plot",
      "meta": "Most important chart",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "scatter.py",
          "code": "plt.scatter(df[\"hours_studied\"], df[\"marks\"])\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"Study vs Marks\")\nplt.show()"
        },
        {
          "type": "image",
          "src": "images/day3/scatter.png",
          "alt": "Scatter plot of hours studied against marks",
          "caption": "Five dots rising almost on a straight line"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "What you should see: 5 dots rising from bottom left to top right, almost on a straight line."
        },
        {
          "type": "table",
          "head": [
            "What you see",
            "Meaning"
          ],
          "rows": [
            [
              "Points form a line",
              "✅ Good for ML, a model can learn it"
            ],
            [
              "Points look random",
              "❌ Harder problem, no clear relation"
            ]
          ]
        },
        {
          "type": "image",
          "src": "images/day3/pattern_types.png",
          "alt": "Three scatter plots: strong pattern, random, negative",
          "caption": "Compare: a clear pattern is learnable, random dots are not"
        },
        {
          "type": "p",
          "text": "Always ask: is there a pattern? Is it linear (a straight line)?"
        }
      ]
    },
    {
      "id": "line",
      "icon": "📈",
      "title": "Step 4: Line Plot",
      "blocks": [
        {
          "type": "p",
          "text": "A line plot joins points in order, so the x values must be sorted. Our hours are not sorted (2, 4, 1, 5, 3), so sort first using Day 2's sort_values:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "line.py",
          "code": "df_sorted = df.sort_values(by=\"hours_studied\")\n\nplt.plot(df_sorted[\"hours_studied\"], df_sorted[\"marks\"], marker=\"o\")\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"Trend: Hours vs Marks\")\nplt.show()"
        },
        {
          "type": "image",
          "src": "images/day3/line_compare.png",
          "alt": "Unsorted zigzag line next to a sorted clean line",
          "caption": "Same data: sorting by x turns a zigzag into a clear trend"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Without sorting, a line plot jumps back and forth between points. Our dataset is perfectly linear, so the effect hides here, but on real noisy data (left chart, illustration) the trend becomes a mess. Always sort by x first."
        },
        {
          "type": "p",
          "text": "A line plot helps you see the trend clearly."
        }
      ]
    },
    {
      "id": "bar",
      "icon": "📊",
      "title": "Step 5: Bar Chart",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "bar.py",
          "code": "plt.bar(df[\"name\"], df[\"marks\"])\nplt.xlabel(\"Student\")\nplt.ylabel(\"Marks\")\nplt.title(\"Student Marks\")\nplt.show()"
        },
        {
          "type": "image",
          "src": "images/day3/bar.png",
          "alt": "Bar chart of marks per student",
          "caption": "D is the tallest bar (highlighted)"
        },
        {
          "type": "p",
          "text": "Bar charts compare categories, here one bar per student. D is the tallest and C the shortest."
        }
      ]
    },
    {
      "id": "hist",
      "icon": "🔥",
      "title": "Step 6: Histogram",
      "meta": "Data distribution",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "hist.py",
          "code": "plt.hist(df[\"marks\"], bins=5, edgecolor=\"black\")\nplt.xlabel(\"Marks\")\nplt.ylabel(\"Number of Students\")\nplt.title(\"Marks Distribution\")\nplt.show()"
        },
        {
          "type": "image",
          "src": "images/day3/hist.png",
          "alt": "Histogram of marks",
          "caption": "How many students fall in each marks range"
        },
        {
          "type": "p",
          "text": "Why it matters:"
        },
        {
          "type": "list",
          "items": [
            "See how the data is spread across ranges",
            "Detect skewness (most values bunched on one side) and imbalance"
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "A histogram groups values into bins and counts how many fall in each. bins=5 means 5 ranges."
        }
      ]
    },
    {
      "id": "corr",
      "icon": "🧊",
      "title": "Step 7: Correlation",
      "meta": "Very powerful",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "corr.py",
          "code": "print(df.corr(numeric_only=True))",
          "output": "               hours_studied  marks\nhours_studied            1.0    1.0\nmarks                    1.0    1.0"
        },
        {
          "type": "image",
          "src": "images/day3/corr_heatmap.png",
          "alt": "Correlation heatmaps before and after adding student F",
          "caption": "Correlation table as colors: 1.00 turns into -0.25 after F"
        },
        {
          "type": "table",
          "head": [
            "Value",
            "Interpretation"
          ],
          "rows": [
            [
              "Close to +1",
              "Strong positive: when one rises, the other rises"
            ],
            [
              "Close to 0",
              "No relation"
            ],
            [
              "Close to -1",
              "Strong negative: when one rises, the other falls"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "hours_studied vs marks = 1.0 means a perfect straight line. ML will work very well here. Real data is rarely this perfect."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "numeric_only=True skips text columns like name. Without it, newer Pandas raises an error."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Student Analyzer v2 (Visual)",
      "meta": "Upgrade Day 2",
      "blocks": [
        {
          "type": "p",
          "text": "Add these to your analyzer:"
        },
        {
          "type": "list",
          "items": [
            "Scatter plot (main)",
            "Bar chart",
            "Histogram",
            "Correlation output"
          ]
        },
        {
          "type": "p",
          "text": "All four are combined in the Final Program below, drawn in one window with plt.subplot."
        }
      ]
    },
    {
      "id": "challenge",
      "icon": "💡",
      "title": "Challenge: Detect the Outlier",
      "meta": "Important",
      "blocks": [
        {
          "type": "p",
          "text": "Add a suspicious student: 10 hours of study but only 20 marks."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "outlier_add.py",
          "code": "import pandas as pd\n\nnew_row = {\"name\": \"F\", \"hours_studied\": 10, \"marks\": 20}\ndf = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)\nprint(df)\n\nprint(\"\\nCorrelation now:\")\nprint(df.corr(numeric_only=True))\n\nplt.scatter(df[\"hours_studied\"], df[\"marks\"])\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"Study vs Marks (with F)\")\nplt.show()",
          "output": "  name  hours_studied  marks\n0    A              2     40\n1    B              4     60\n2    C              1     30\n3    D              5     70\n4    E              3     50\n5    F             10     20\n\nCorrelation now:\n               hours_studied     marks\nhours_studied       1.000000 -0.251459\nmarks              -0.251459  1.000000"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "What you should see: the old line is broken. Dot F sits far below the others. Correlation falls from 1.0 to about -0.25, and it even turns negative. One bad row can flip the story."
        },
        {
          "type": "image",
          "src": "images/day3/outlier_before_after.png",
          "alt": "Scatter plots before and after adding outlier F",
          "caption": "Student F (10 hours, 20 marks) breaks the pattern"
        },
        {
          "type": "p",
          "text": "Now find the outlier with code. Learn the pattern from the 5 trusted rows, predict the expected marks, then measure the gap:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "outlier_detect.py",
          "code": "import numpy as np\n\n# Pattern from the first 5 trusted rows (a straight line)\nslope, intercept = np.polyfit(df[\"hours_studied\"].head(5), df[\"marks\"].head(5), 1)\nprint(\"Slope:\", round(slope, 2), \"Intercept:\", round(intercept, 2))\n\ndf[\"expected\"] = (slope * df[\"hours_studied\"] + intercept).round(1)\ndf[\"gap\"] = (df[\"marks\"] - df[\"expected\"]).round(1)\nprint(df)\n\nprint(\"\\nOutliers (gap bigger than 20):\")\nprint(df[df[\"gap\"].abs() > 20])",
          "output": "Slope: 10.0 Intercept: 20.0\n  name  hours_studied  marks  expected    gap\n0    A              2     40      40.0    0.0\n1    B              4     60      60.0    0.0\n2    C              1     30      30.0    0.0\n3    D              5     70      70.0    0.0\n4    E              3     50      50.0    0.0\n5    F             10     20     120.0 -100.0\n\nOutliers (gap bigger than 20):\n  name  hours_studied  marks  expected    gap\n5    F             10     20     120.0 -100.0"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "np.polyfit(x, y, 1) finds the best straight line: marks = slope * hours + intercept. This is a preview of Day 4. Here slope 10 means each extra hour adds about 10 marks."
        }
      ]
    },
    {
      "id": "learned",
      "icon": "✅",
      "title": "What You Actually Learned",
      "blocks": [
        {
          "type": "list",
          "items": [
            "How to see patterns before modeling",
            "How to detect bad data",
            "How to think like a data scientist"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Student Analyzer v2 (Visual)",
    "file": "day3_final.py",
    "description": "One program combining Day 3: correlation, a 4-chart dashboard, adding a suspicious student and detecting the outlier visually and with code.",
    "concepts": [
      "scatter",
      "line plot",
      "bar chart",
      "histogram",
      "subplot",
      "correlation",
      "concat",
      "outlier gap"
    ],
    "code": "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# 1. LOAD\ndata = {\n    \"name\": [\"A\", \"B\", \"C\", \"D\", \"E\"],\n    \"hours_studied\": [2, 4, 1, 5, 3],\n    \"marks\": [40, 60, 30, 70, 50]\n}\ndf = pd.DataFrame(data)\nprint(\"=== STUDENT ANALYZER v2 (VISUAL) ===\")\nprint(df)\n\n# 2. CORRELATION\nprint(\"\\nCorrelation:\")\nprint(df.corr(numeric_only=True))\n\n# 3. DASHBOARD: 4 charts in one window\nplt.figure(figsize=(10, 8))\n\nplt.subplot(2, 2, 1)\nplt.scatter(df[\"hours_studied\"], df[\"marks\"])\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"Study vs Marks\")\n\nplt.subplot(2, 2, 2)\ndf_sorted = df.sort_values(by=\"hours_studied\")\nplt.plot(df_sorted[\"hours_studied\"], df_sorted[\"marks\"], marker=\"o\")\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"Trend\")\n\nplt.subplot(2, 2, 3)\nplt.bar(df[\"name\"], df[\"marks\"])\nplt.title(\"Student Marks\")\n\nplt.subplot(2, 2, 4)\nplt.hist(df[\"marks\"], bins=5, edgecolor=\"black\")\nplt.title(\"Marks Distribution\")\n\nplt.tight_layout()\nplt.show()\n\n# 4. CHALLENGE: add a suspicious student\nnew_row = {\"name\": \"F\", \"hours_studied\": 10, \"marks\": 20}\ndf = pd.concat([df, pd.DataFrame([new_row])], ignore_index=True)\nprint(\"\\nCorrelation after adding F:\")\nprint(df.corr(numeric_only=True))\n\n# 5. DETECT THE OUTLIER: learn the pattern from the 5 trusted rows\nslope, intercept = np.polyfit(df[\"hours_studied\"].head(5), df[\"marks\"].head(5), 1)\ndf[\"expected\"] = (slope * df[\"hours_studied\"] + intercept).round(1)\ndf[\"gap\"] = (df[\"marks\"] - df[\"expected\"]).round(1)\nprint(\"\\nGap between actual and expected marks:\")\nprint(df[[\"name\", \"hours_studied\", \"marks\", \"expected\", \"gap\"]])\n\noutliers = df[df[\"gap\"].abs() > 20]\nnormal = df[df[\"gap\"].abs() <= 20]\nprint(\"\\nOutlier student(s):\", list(outliers[\"name\"]))\n\n# 6. PLOT AGAIN: outlier in red, trend line in green\nplt.scatter(normal[\"hours_studied\"], normal[\"marks\"], color=\"blue\", label=\"Normal\")\nplt.scatter(outliers[\"hours_studied\"], outliers[\"marks\"], color=\"red\", s=150, label=\"Outlier\")\nplt.plot([0, 10], [intercept, slope * 10 + intercept], color=\"green\", label=\"Trend (trusted rows)\")\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"Outlier Detection\")\nplt.legend()\nplt.show()",
    "output": "=== STUDENT ANALYZER v2 (VISUAL) ===\n  name  hours_studied  marks\n0    A              2     40\n1    B              4     60\n2    C              1     30\n3    D              5     70\n4    E              3     50\n\nCorrelation:\n               hours_studied  marks\nhours_studied            1.0    1.0\nmarks                    1.0    1.0\n\nCorrelation after adding F:\n               hours_studied     marks\nhours_studied       1.000000 -0.251459\nmarks              -0.251459  1.000000\n\nGap between actual and expected marks:\n  name  hours_studied  marks  expected    gap\n0    A              2     40      40.0    0.0\n1    B              4     60      60.0    0.0\n2    C              1     30      30.0    0.0\n3    D              5     70      70.0    0.0\n4    E              3     50      50.0    0.0\n5    F             10     20     120.0 -100.0\n\nOutlier student(s): ['F']",
    "images": [
      {
        "type": "image",
        "src": "images/day3/dashboard.png",
        "alt": "Dashboard with scatter, trend line, bar chart and histogram",
        "caption": "First window: the 4-chart dashboard"
      },
      {
        "type": "image",
        "src": "images/day3/outlier_final.png",
        "alt": "Scatter plot with red outlier and green trend line",
        "caption": "Second window: outlier F in red, trend learned from trusted rows in green"
      }
    ]
  },
  "practice": [
    {
      "title": "Ice Cream Sales Visualizer",
      "level": "Easy",
      "file": "practice1.py",
      "description": "A shop owner recorded the temperature and ice cream sales. Visualize the pattern.",
      "tasks": [
        "Create the DataFrame and draw a scatter plot with labels and a title",
        "Draw a line plot of sales against temperature",
        "Draw a histogram of sales",
        "Print the correlation and say if the relation is strong"
      ],
      "hint": "Get one value with df.corr(numeric_only=True).loc[\"temperature\", \"sales\"]. Use an if/else to print the message.",
      "starter": "import pandas as pd\nimport matplotlib.pyplot as plt\n\ndata = {\n    \"temperature\": [18, 22, 26, 30, 34, 38],\n    \"sales\": [120, 150, 230, 250, 310, 340]\n}\n\n# TODO 1: create DataFrame + scatter plot with labels and title\n\n# TODO 2: line plot of sales vs temperature\n\n# TODO 3: histogram of sales\n\n# TODO 4: print correlation and a strong/weak message",
      "solution": "import pandas as pd\nimport matplotlib.pyplot as plt\n\ndata = {\n    \"temperature\": [18, 22, 26, 30, 34, 38],\n    \"sales\": [120, 150, 230, 250, 310, 340]\n}\ndf = pd.DataFrame(data)\n\nplt.scatter(df[\"temperature\"], df[\"sales\"])\nplt.xlabel(\"Temperature (C)\")\nplt.ylabel(\"Sales\")\nplt.title(\"Temperature vs Sales\")\nplt.show()\n\nplt.plot(df[\"temperature\"], df[\"sales\"], marker=\"o\")\nplt.xlabel(\"Temperature (C)\")\nplt.ylabel(\"Sales\")\nplt.title(\"Sales Trend\")\nplt.show()\n\nplt.hist(df[\"sales\"], bins=4, edgecolor=\"black\")\nplt.title(\"Sales Distribution\")\nplt.show()\n\ncorr = df.corr(numeric_only=True).loc[\"temperature\", \"sales\"]\nprint(\"Correlation:\", round(corr, 2))\nif corr > 0.8:\n    print(\"Strong relationship: good for ML\")\nelse:\n    print(\"Weak relationship: harder problem\")",
      "output": "Correlation: 0.99\nStrong relationship: good for ML",
      "images": [
        {
          "type": "image",
          "src": "images/day3/practice1.png",
          "alt": "Scatter, line and histogram for ice cream sales",
          "caption": "Expected charts for Practice 1"
        }
      ]
    },
    {
      "title": "Delivery Time Outlier Hunter",
      "level": "Medium",
      "file": "practice2.py",
      "description": "A food app tracks delivery distance and time. One record looks wrong. Find it and see how it hurts correlation.",
      "tasks": [
        "Create the DataFrame, draw a scatter plot and print the correlation",
        "Learn the pattern from the first 7 trusted rows with np.polyfit",
        "Add expected and gap columns, then print rows where the gap is bigger than 15",
        "Remove the outlier and print the correlation again",
        "Compare before and after"
      ],
      "hint": "Use df[\"km\"].head(7) and df[\"minutes\"].head(7) in np.polyfit(..., 1). Keep clean rows with df[df[\"gap\"].abs() <= 15].",
      "starter": "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\ndata = {\n    \"km\": [1, 2, 3, 4, 5, 6, 7, 8],\n    \"minutes\": [8, 12, 18, 23, 27, 33, 38, 95]\n}\n\n# TODO 1: DataFrame, scatter plot, correlation\n\n# TODO 2: np.polyfit on the first 7 rows\n\n# TODO 3: expected + gap columns, print outliers (gap > 15)\n\n# TODO 4: remove outliers, print correlation again",
      "solution": "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\ndata = {\n    \"km\": [1, 2, 3, 4, 5, 6, 7, 8],\n    \"minutes\": [8, 12, 18, 23, 27, 33, 38, 95]\n}\ndf = pd.DataFrame(data)\n\nplt.scatter(df[\"km\"], df[\"minutes\"])\nplt.xlabel(\"Distance (km)\")\nplt.ylabel(\"Delivery Time (min)\")\nplt.title(\"Distance vs Time\")\nplt.show()\n\nprint(\"Correlation before:\", round(df.corr(numeric_only=True).loc[\"km\", \"minutes\"], 3))\n\nslope, intercept = np.polyfit(df[\"km\"].head(7), df[\"minutes\"].head(7), 1)\ndf[\"expected\"] = (slope * df[\"km\"] + intercept).round(1)\ndf[\"gap\"] = (df[\"minutes\"] - df[\"expected\"]).round(1)\n\nprint(\"\\nOutliers:\")\nprint(df[df[\"gap\"].abs() > 15])\n\nclean = df[df[\"gap\"].abs() <= 15]\nprint(\"\\nCorrelation after removing outlier:\", round(clean.corr(numeric_only=True).loc[\"km\", \"minutes\"], 3))",
      "output": "Correlation before: 0.836\n\nOutliers:\n   km  minutes  expected   gap\n7   8       95      42.9  52.1\n\nCorrelation after removing outlier: 0.999",
      "note": "One bad record changed the picture. Never delete outliers blindly: first ask if it is a data error (typo, sensor fault) or a real rare case. You will learn more about this later.",
      "images": [
        {
          "type": "image",
          "src": "images/day3/practice2.png",
          "alt": "Scatter of distance vs delivery time with one suspicious point",
          "caption": "Expected chart: the 95 minute delivery stands out"
        }
      ]
    }
  ],
  "checklist": [
    "Created scatter plot",
    "Created bar chart",
    "Created histogram",
    "Checked correlation",
    "Identified pattern",
    "Completed mini project"
  ],
  "quiz": [
    {
      "q": "Dots forming a straight line on a scatter plot usually means:",
      "options": [
        "The data is broken",
        "A clear pattern that is good for ML",
        "The plot is wrong",
        "No relation"
      ],
      "answer": 1,
      "why": "A line-like pattern means one value predicts the other, which models can learn."
    },
    {
      "q": "Which chart shows how values are spread across ranges?",
      "options": [
        "Bar chart",
        "Line plot",
        "Histogram",
        "Scatter plot"
      ],
      "answer": 2,
      "why": "A histogram counts how many values fall in each bin."
    },
    {
      "q": "A correlation close to 0 means:",
      "options": [
        "Strong positive relation",
        "Strong negative relation",
        "No linear relation",
        "Perfect prediction"
      ],
      "answer": 2,
      "why": "Values near 0 show the two columns are not linearly related."
    },
    {
      "q": "Why do we sort data before a line plot?",
      "options": [
        "To make colors brighter",
        "So the line follows x in order, not zigzag",
        "To remove outliers",
        "Pandas requires it"
      ],
      "answer": 1,
      "why": "Unsorted x values make the line jump back and forth and hide the trend."
    }
  ]
},

// DAY 4 snippet. In course-data.js: add a comma after Day 3's closing }, then paste this object. Also unzip day4-images.zip into your images/ folder.
{
  "day": 4,
  "title": "Your First ML Model: Linear Regression",
  "subtitle": "Train a model, make predictions and read the equation it learned.",
  "level": "Beginner",
  "duration": "90-120 min",
  "tags": [
    "Linear Regression",
    "scikit-learn",
    "fit / predict",
    "Slope",
    "Intercept"
  ],
  "goals": [
    "Train your first ML model",
    "Make predictions",
    "Understand how ML actually works (core intuition)"
  ],
  "sections": [
    {
      "id": "what",
      "icon": "🧠",
      "title": "Step 1: What is Linear Regression?",
      "meta": "Find the line that best fits the data",
      "blocks": [
        {
          "type": "p",
          "text": "Simple idea: draw the straight line that passes as close as possible to all your data points. Then use that line to predict new values."
        },
        {
          "type": "list",
          "items": [
            "Input: hours studied",
            "Output: marks",
            "ML learns: marks = m x hours + b"
          ]
        },
        {
          "type": "image",
          "src": "images/day4/concept.png",
          "alt": "Line chart explaining slope m and intercept b",
          "caption": "y = m x + b: m is the slope (rise / run), b is where the line starts at 0 hours"
        },
        {
          "type": "table",
          "head": [
            "Symbol",
            "Name",
            "Meaning in our example"
          ],
          "rows": [
            [
              "m",
              "Slope",
              "Extra marks gained for every extra hour"
            ],
            [
              "b",
              "Intercept",
              "Base marks when hours = 0"
            ],
            [
              "x",
              "Input (feature)",
              "Hours studied"
            ],
            [
              "y",
              "Output (target)",
              "Marks"
            ]
          ]
        },
        {
          "type": "p",
          "text": "How does the model pick the best line? It tries lines and keeps the one with the smallest total error, the vertical gaps between the points and the line:"
        },
        {
          "type": "image",
          "src": "images/day4/best_fit_idea.png",
          "alt": "Three lines: too flat, too steep and best fit with their errors",
          "caption": "The best-fit line has the smallest total squared error (18 vs 336 and 241)"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "This line is what your model will learn. You will not write the formula, ML finds m and b for you."
        }
      ]
    },
    {
      "id": "prepare",
      "icon": "⚡",
      "title": "Step 2: Prepare Data",
      "blocks": [
        {
          "type": "p",
          "text": "Use the dataset from Day 1:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "day4_ml.py",
          "code": "import pandas as pd\n\ndata = {\n    \"hours_studied\": [1, 2, 3, 4, 5, 6],\n    \"marks\": [35, 40, 50, 60, 65, 70]\n}\ndf = pd.DataFrame(data)\nprint(df)",
          "output": "   hours_studied  marks\n0              1     35\n1              2     40\n2              3     50\n3              4     60\n4              5     65\n5              6     70"
        }
      ]
    },
    {
      "id": "split",
      "icon": "⚡",
      "title": "Step 3: Split Input and Output",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "split.py",
          "code": "X = df[[\"hours_studied\"]]   # input (2D table)\ny = df[\"marks\"]             # output (1D column)\n\nprint(\"X shape:\", X.shape)\nprint(\"y shape:\", y.shape)",
          "output": "X shape: (6, 1)\ny shape: (6,)"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Double brackets df[[...]] keep X as a 2D table, which scikit-learn requires. Single brackets df[...] give y as a 1D column."
        },
        {
          "type": "p",
          "text": "By convention X is a capital letter (a table) and y is lowercase (a single column)."
        }
      ]
    },
    {
      "id": "train",
      "icon": "⚡",
      "title": "Step 4: Train the Model",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "train.py",
          "code": "from sklearn.linear_model import LinearRegression\n\nmodel = LinearRegression()\nmodel.fit(X, y)\nprint(\"Model trained!\")",
          "output": "Model trained!"
        },
        {
          "type": "p",
          "text": "fit(X, y) is the learning step: the model studies every (hours, marks) pair and finds the best line."
        },
        {
          "type": "image",
          "src": "images/day4/learning_flow.png",
          "alt": "Flow: data, fit, equation, predict",
          "caption": "The whole ML process in four steps"
        }
      ]
    },
    {
      "id": "predict",
      "icon": "⚡",
      "title": "Step 5: Make a Prediction",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "predict.py",
          "code": "# Use the same column name as in training\nnew_hours = pd.DataFrame({\"hours_studied\": [7]})\npred = model.predict(new_hours)\nprint(\"Predicted marks for 7 hours:\", round(pred[0], 2))",
          "output": "Predicted marks for 7 hours: 79.33"
        },
        {
          "type": "image",
          "src": "images/day4/prediction.png",
          "alt": "Model line extended to 7 hours with the predicted point",
          "caption": "The green point is the prediction for 7 hours"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "If you write model.predict([[7]]) after training on a DataFrame, scikit-learn prints a warning about feature names. Passing a DataFrame with the same column name avoids it."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "7 hours is outside the data the model saw (1 to 6). Predictions beyond the training range are guesses, and real marks can never go above 100."
        }
      ]
    },
    {
      "id": "understand",
      "icon": "🧠",
      "title": "Step 6: Understand What Happened",
      "blocks": [
        {
          "type": "table",
          "head": [
            "What the model did",
            "In plain words"
          ],
          "rows": [
            [
              "Saw past data",
              "6 pairs of hours and marks"
            ],
            [
              "Found a pattern",
              "Marks rise steadily with hours"
            ],
            [
              "Created an equation",
              "marks = m x hours + b"
            ],
            [
              "Used it to predict",
              "Put 7 into the equation"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "You did not code the formula. ML learned it from the data. That is what learning from data means."
        }
      ]
    },
    {
      "id": "visualize",
      "icon": "📊",
      "title": "Step 7: Visualize the Model Line",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "visualize.py",
          "code": "import matplotlib.pyplot as plt\n\nplt.scatter(X, y, label=\"Actual data\")                          # actual data\nplt.plot(X, model.predict(X), color=\"red\", label=\"Model line\")  # predicted line\nplt.xlabel(\"Hours\")\nplt.ylabel(\"Marks\")\nplt.title(\"ML Model Fit\")\nplt.legend()\nplt.show()"
        },
        {
          "type": "image",
          "src": "images/day4/model_fit.png",
          "alt": "Scatter plot of data with the red model line",
          "caption": "Blue dots are real data, the red line is what the model learned"
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Marks Predictor (ML Version)",
      "blocks": [
        {
          "type": "p",
          "text": "Features to build:"
        },
        {
          "type": "list",
          "items": [
            "Input: hours studied",
            "Output: predicted marks",
            "Graph showing the prediction line"
          ]
        },
        {
          "type": "p",
          "text": "The Final Program below combines all three, with several predictions at once."
        }
      ]
    },
    {
      "id": "challenge",
      "icon": "💡",
      "title": "Challenge: Read the Learned Equation",
      "meta": "Very important",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "equation.py",
          "code": "print(\"Slope (m):\", model.coef_)\nprint(\"Intercept (b):\", model.intercept_)\n\nm = model.coef_[0]\nb = model.intercept_\nprint(f\"Equation: marks = {m:.2f} x hours + {b:.2f}\")\nprint(\"Check for 7 hours:\", round(m * 7 + b, 2))",
          "output": "Slope (m): [7.42857143]\nIntercept (b): 27.333333333333336\nEquation: marks = 7.43 x hours + 27.33\nCheck for 7 hours: 79.33"
        },
        {
          "type": "table",
          "head": [
            "Attribute",
            "Meaning"
          ],
          "rows": [
            [
              "coef_",
              "How much marks increase per extra hour (the slope m)"
            ],
            [
              "intercept_",
              "Base marks at 0 hours (b)"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "coef_ is an array because a model can have many inputs. With one input, use coef_[0] to get the number. The manual check matches the prediction from Step 5: the model is just this equation."
        },
        {
          "type": "image",
          "src": "images/day4/equation.png",
          "alt": "Model line with the learned equation and intercept",
          "caption": "This is the actual equation your model learned"
        }
      ]
    },
    {
      "id": "bonus",
      "icon": "🔥",
      "title": "Bonus Challenge: Take User Input",
      "meta": "Power move",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "bonus.py",
          "code": "hours = float(input(\"Enter hours studied: \"))\nprediction = model.predict(pd.DataFrame({\"hours_studied\": [hours]}))\nprint(\"Expected Marks:\", round(prediction[0], 2))"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Example: type 7 and the output is Expected Marks: 79.33. In the website workspace a small pop-up box asks for your input. In VS Code you type it in the terminal."
        }
      ]
    },
    {
      "id": "learned",
      "icon": "✅",
      "title": "What You Actually Learned (Core ML)",
      "blocks": [
        {
          "type": "list",
          "items": [
            "How ML models are trained with fit()",
            "How prediction works with predict()",
            "What learning from data means: the model finds m and b by itself"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Marks Predictor (ML Version)",
    "file": "day4_final.py",
    "description": "One program combining Day 4: prepare data, split, train, read the learned equation, predict several values, prove the equation by hand and plot the model.",
    "concepts": [
      "X and y split",
      "LinearRegression",
      "fit",
      "predict",
      "coef_ and intercept_",
      "manual equation check",
      "model line plot"
    ],
    "code": "import pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.linear_model import LinearRegression\n\n# 1. PREPARE DATA\ndata = {\n    \"hours_studied\": [1, 2, 3, 4, 5, 6],\n    \"marks\": [35, 40, 50, 60, 65, 70]\n}\ndf = pd.DataFrame(data)\nprint(\"=== MARKS PREDICTOR (ML VERSION) ===\")\nprint(df)\n\n# 2. SPLIT INPUT AND OUTPUT\nX = df[[\"hours_studied\"]]\ny = df[\"marks\"]\n\n# 3. TRAIN THE MODEL\nmodel = LinearRegression()\nmodel.fit(X, y)\n\n# 4. THE LEARNED EQUATION\nm = model.coef_[0]\nb = model.intercept_\nprint(f\"\\nLearned equation: marks = {m:.2f} x hours + {b:.2f}\")\nprint(f\"Slope (m): {m:.2f} marks gained per extra hour\")\nprint(f\"Intercept (b): {b:.2f} base marks at 0 hours\")\n\n# 5. PREDICT SEVERAL VALUES AT ONCE\nnew_data = pd.DataFrame({\"hours_studied\": [3.5, 7, 8]})\nnew_data[\"predicted_marks\"] = model.predict(new_data).round(2)\nprint(\"\\nPredictions:\")\nprint(new_data)\n\n# 6. PROVE IT: the model is just the equation\nprint(\"\\nManual check for 7 hours:\", round(m * 7 + b, 2))\n\n# 7. VISUALIZE\nx_line = pd.DataFrame({\"hours_studied\": [0, 8]})\nplt.scatter(X, y, color=\"blue\", label=\"Actual data\")\nplt.plot(x_line, model.predict(x_line), color=\"red\", label=\"Model line\")\nplt.scatter(new_data[\"hours_studied\"], new_data[\"predicted_marks\"], color=\"green\", s=120, label=\"Predictions\")\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"Marks Predictor (ML Version)\")\nplt.legend()\nplt.show()\n\n# Interactive version (try it in your own file):\n# hours = float(input(\"Enter hours studied: \"))\n# print(\"Expected Marks:\", round(model.predict(pd.DataFrame({\"hours_studied\": [hours]}))[0], 2))",
    "output": "=== MARKS PREDICTOR (ML VERSION) ===\n   hours_studied  marks\n0              1     35\n1              2     40\n2              3     50\n3              4     60\n4              5     65\n5              6     70\n\nLearned equation: marks = 7.43 x hours + 27.33\nSlope (m): 7.43 marks gained per extra hour\nIntercept (b): 27.33 base marks at 0 hours\n\nPredictions:\n   hours_studied  predicted_marks\n0            3.5            53.33\n1            7.0            79.33\n2            8.0            86.76\n\nManual check for 7 hours: 79.33",
    "images": [
      {
        "type": "image",
        "src": "images/day4/final.png",
        "alt": "Data, model line and three predictions",
        "caption": "Blue: real data. Red: model line. Green: predictions for 3.5, 7 and 8 hours"
      }
    ]
  },
  "practice": [
    {
      "title": "NumPy Study Predictor",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Train the same kind of model on plain NumPy arrays with only 3 data points.",
      "tasks": [
        "Train a LinearRegression model on X and y",
        "Print the intercept (b0) and slope (b1) with 2 decimals",
        "Predict marks for 7 hours and for 10 hours",
        "Ask yourself: is the 10 hour answer realistic?"
      ],
      "hint": "With NumPy, X must be 2D and predictions use np.array([[7]]). Get the slope with model.coef_[0].",
      "starter": "import numpy as np\nfrom sklearn.linear_model import LinearRegression\n\nX = np.array([[2], [5], [8]])   # hours studied (2D)\ny = np.array([40, 70, 90])      # marks obtained (1D)\n\n# TODO 1: create and train the model\n\n# TODO 2: print intercept (b0) and slope (b1)\n\n# TODO 3: predict marks for 7 hours and 10 hours",
      "solution": "import numpy as np\nfrom sklearn.linear_model import LinearRegression\n\nX = np.array([[2], [5], [8]])\ny = np.array([40, 70, 90])\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\nprint(f\"Baseline (b0): {model.intercept_:.2f}\")\nprint(f\"Boost factor (b1): {model.coef_[0]:.2f}\")\n\nfor hours in [7, 10]:\n    marks = model.predict(np.array([[hours]]))[0]\n    print(f\"Predicted marks for {hours} hours: {marks:.2f}\")",
      "output": "Baseline (b0): 25.00\nBoost factor (b1): 8.33\nPredicted marks for 7 hours: 83.33\nPredicted marks for 10 hours: 108.33",
      "images": [
        {
          "type": "image",
          "src": "images/day4/practice1.png",
          "alt": "NumPy model line with predictions at 7 and 10 hours and the 100 marks limit",
          "caption": "10 hours predicts over 100: the model does not know the maximum is 100"
        }
      ],
      "note": "10 hours gives more than 100 marks, which is impossible. The model only follows the line and knows nothing about limits. Always sanity check predictions, especially outside the training range."
    },
    {
      "title": "House Price Predictor",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Predict house prices from size. Train a model, read the equation, predict and plot.",
      "tasks": [
        "Create the DataFrame and split into X (size_100sqft) and y (price_lakh)",
        "Train the model and print slope and intercept (2 decimals)",
        "Predict the price for 1100 sqft (11) and 2000 sqft (20)",
        "Plot the data, the model line and both predictions",
        "Which prediction is more reliable and why?"
      ],
      "hint": "Size is in units of 100 sqft, so 1100 sqft is 11. Predict with pd.DataFrame({\"size_100sqft\": [11, 20]}).",
      "starter": "import pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.linear_model import LinearRegression\n\ndata = {\n    \"size_100sqft\": [5, 8, 10, 12, 15, 18],\n    \"price_lakh\": [25, 39, 50, 59, 76, 89]\n}\n\n# TODO 1: DataFrame, X and y\n\n# TODO 2: train the model, print slope and intercept\n\n# TODO 3: predict prices for sizes 11 and 20\n\n# TODO 4: plot data, model line and predictions",
      "solution": "import pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.linear_model import LinearRegression\n\ndata = {\n    \"size_100sqft\": [5, 8, 10, 12, 15, 18],\n    \"price_lakh\": [25, 39, 50, 59, 76, 89]\n}\ndf = pd.DataFrame(data)\n\nX = df[[\"size_100sqft\"]]\ny = df[\"price_lakh\"]\n\nmodel = LinearRegression()\nmodel.fit(X, y)\nprint(f\"Slope: {model.coef_[0]:.2f} lakh per 100 sqft\")\nprint(f\"Intercept: {model.intercept_:.2f} lakh\")\n\nnew = pd.DataFrame({\"size_100sqft\": [11, 20]})\nnew[\"predicted_price\"] = model.predict(new).round(2)\nprint(new)\n\nx_line = pd.DataFrame({\"size_100sqft\": [0, 24]})\nplt.scatter(X, y, label=\"Past houses\")\nplt.plot(x_line, model.predict(x_line), color=\"red\", label=\"Model line\")\nplt.scatter(new[\"size_100sqft\"], new[\"predicted_price\"], color=\"green\", s=120, label=\"Predictions\")\nplt.xlabel(\"Size (100 sqft)\")\nplt.ylabel(\"Price (lakh)\")\nplt.title(\"House Price Model\")\nplt.legend()\nplt.show()",
      "output": "Slope: 5.00 lakh per 100 sqft\nIntercept: -0.30 lakh\n   size_100sqft  predicted_price\n0            11            54.67\n1            20            99.64",
      "images": [
        {
          "type": "image",
          "src": "images/day4/practice2.png",
          "alt": "House price model line with predictions for 1100 and 2000 sqft",
          "caption": "1100 sqft sits inside the data. 2000 sqft is outside it, so trust it less"
        }
      ],
      "note": "The 1100 sqft prediction is inside the range of past houses, so it is more reliable. 2000 sqft is beyond every house the model has seen, so it is an extrapolation and a guess."
    }
  ],
  "checklist": [
    "Prepared data and split X and y",
    "Trained a LinearRegression model",
    "Made a prediction",
    "Plotted the model line",
    "Read slope and intercept",
    "Built the Marks Predictor"
  ],
  "quiz": [
    {
      "q": "In y = m x + b, what does m (the slope) mean here?",
      "options": [
        "Base marks at 0 hours",
        "Extra marks for each extra hour",
        "The number of students",
        "The prediction error"
      ],
      "answer": 1,
      "why": "The slope is how much the output rises when the input increases by 1."
    },
    {
      "q": "Why is X written as df[[\"hours_studied\"]] with double brackets?",
      "options": [
        "To rename the column",
        "To sort the data",
        "To keep X as a 2D table, which scikit-learn needs",
        "To remove missing values"
      ],
      "answer": 2,
      "why": "Features must be 2D (rows x columns). y stays a 1D column."
    },
    {
      "q": "Which method makes the model learn from data?",
      "options": [
        "predict()",
        "fit()",
        "plot()",
        "head()"
      ],
      "answer": 1,
      "why": "fit(X, y) trains the model. predict() uses what it learned."
    },
    {
      "q": "Why is predicting marks for 20 hours risky?",
      "options": [
        "20 is not a number",
        "The model never saw data that far out, so it is a guess",
        "Linear Regression cannot predict",
        "Hours cannot be a decimal"
      ],
      "answer": 1,
      "why": "Predictions outside the training range are extrapolations and may be unrealistic (marks cannot exceed 100)."
    }
  ]
},

// DAY 5 snippet. In course-data.js: add a comma after Day 4's closing }, then paste this object. No images for this day.
{
  "day": 5,
  "title": "Train/Test Split + Model Accuracy",
  "subtitle": "Learn why testing on training data is fake confidence, then validate your model properly with unseen data.",
  "level": "Beginner",
  "duration": "90-120 min",
  "tags": [
    "train_test_split",
    "Model Validation",
    "MAE",
    "Overfitting",
    "random_state"
  ],
  "goals": [
    "Understand why your current model is not enough",
    "Learn how to test ML models properly",
    "Measure model performance (error and accuracy)"
  ],
  "sections": [
    {
      "id": "problem",
      "icon": "⚠️",
      "title": "Step 1: The Problem with Your Current Model",
      "meta": "Why Day 4 was not enough",
      "blocks": [
        {
          "type": "p",
          "text": "In Day 4 you trained AND tested on the same data. That is like studying the exact exam questions and then taking the same exam: your high score is fake confidence."
        },
        {
          "type": "table",
          "head": [
            "Data",
            "Purpose",
            "Analogy"
          ],
          "rows": [
            [
              "Training data",
              "The model learns from it",
              "Practice questions"
            ],
            [
              "Testing data",
              "The model is tested on it, never seen before",
              "The real exam"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Rule: a model must be tested on data it has never seen. Only then does the score tell you how it will behave in the real world."
        }
      ]
    },
    {
      "id": "split",
      "icon": "⚡",
      "title": "Step 2: Train/Test Split",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "day5_ml.py",
          "code": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\n\ndata = {\n    \"hours_studied\": [1, 2, 3, 4, 5, 6],\n    \"marks\": [35, 40, 50, 60, 65, 70]\n}\ndf = pd.DataFrame(data)\n\nX = df[[\"hours_studied\"]]\ny = df[\"marks\"]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\nprint(\"Training rows:\", len(X_train))\nprint(\"Testing rows :\", len(X_test))\nprint(\"\\nTest hours:\", list(X_test[\"hours_studied\"]))",
          "output": "Training rows: 4\nTesting rows : 2\n\nTest hours: [1, 2]"
        },
        {
          "type": "table",
          "head": [
            "Argument",
            "Meaning"
          ],
          "rows": [
            [
              "test_size=0.2",
              "About 20% of rows go to testing"
            ],
            [
              "random_state=42",
              "Fixes the shuffle, so everyone gets the same split every run"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "With only 6 rows, 20% is 1.2 rows. scikit-learn rounds the test set up, so you get 2 test rows and 4 training rows, not an exact 80/20. This is why real projects need much more data."
        }
      ]
    },
    {
      "id": "train",
      "icon": "⚡",
      "title": "Step 3: Train the Model (Again)",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "train.py",
          "code": "from sklearn.linear_model import LinearRegression\n\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)      # learn ONLY from training data\nprint(\"Model trained on\", len(X_train), \"rows\")",
          "output": "Model trained on 4 rows"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "The model never sees X_test or y_test during fit(). That keeps the exam fair."
        }
      ]
    },
    {
      "id": "test",
      "icon": "⚡",
      "title": "Step 4: Test the Model",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "test.py",
          "code": "y_pred = model.predict(X_test)\n\nprint(\"Predicted:\", y_pred.round(2))\nprint(\"Actual:   \", y_test.values)\n\n# Side by side\nresults = pd.DataFrame({\n    \"hours_studied\": X_test[\"hours_studied\"].values,\n    \"actual\": y_test.values,\n    \"predicted\": y_pred.round(2)\n})\nresults[\"error\"] = (results[\"actual\"] - results[\"predicted\"]).abs()\nprint()\nprint(results)",
          "output": "Predicted: [38.5 45. ]\nActual:    [35 40]\n\n   hours_studied  actual  predicted  error\n0              1      35       38.5    3.5\n1              2      40       45.0    5.0"
        },
        {
          "type": "p",
          "text": "error is how many marks the prediction missed by. Some rows are close, some are further away."
        }
      ]
    },
    {
      "id": "accuracy",
      "icon": "📊",
      "title": "Step 5: Measure Accuracy",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "mae.py",
          "code": "from sklearn.metrics import mean_absolute_error\n\nerror = mean_absolute_error(y_test, y_pred)\nprint(\"Mean Absolute Error:\", round(error, 2))",
          "output": "Mean Absolute Error: 4.25"
        },
        {
          "type": "table",
          "head": [
            "Result",
            "Meaning"
          ],
          "rows": [
            [
              "Lower error",
              "Better model ✅"
            ],
            [
              "Higher error",
              "Poorer model ❌"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Mean Absolute Error (MAE) is the average size of the mistakes, in the same unit as your output. An MAE of 4.25 means predictions miss by about 4 marks on average."
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Accuracy in %, like 95%, is used for classification (spam or not spam). For predicting numbers like marks, we measure error. You will meet accuracy % later."
        }
      ]
    },
    {
      "id": "visualize",
      "icon": "📈",
      "title": "Step 6: Visualize Train vs Test",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "visualize.py",
          "code": "import matplotlib.pyplot as plt\n\nplt.scatter(X_train, y_train, color=\"blue\", label=\"Train Data\")\nplt.scatter(X_test, y_test, color=\"orange\", s=120, label=\"Test Data\")\nplt.plot(X, model.predict(X), color=\"red\", label=\"Model line\")\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"Train vs Test\")\nplt.legend()\nplt.show()"
        },
        {
          "type": "p",
          "text": "What you should see: blue dots (training) and orange dots (testing) around the red model line. Orange dots far from the line mean larger test errors."
        }
      ]
    },
    {
      "id": "overfit",
      "icon": "🔍",
      "title": "Check: Train Error vs Test Error",
      "meta": "Is the model overfitting?",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "overfit.py",
          "code": "mae_train = mean_absolute_error(y_train, model.predict(X_train))\nmae_test = mean_absolute_error(y_test, y_pred)\n\nprint(\"Train error:\", round(mae_train, 2))\nprint(\"Test error :\", round(mae_test, 2))",
          "output": "Train error: 1.25\nTest error : 4.25"
        },
        {
          "type": "table",
          "head": [
            "Train error",
            "Test error",
            "What it means"
          ],
          "rows": [
            [
              "Low",
              "Low",
              "Good model that generalizes ✅"
            ],
            [
              "Low",
              "Much higher",
              "Overfitting: it memorized the training data ❌"
            ],
            [
              "High",
              "High",
              "Underfitting: the model is too simple ❌"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Test error is usually a bit higher than train error, that is normal. A big gap is the warning sign. Here the test rows are hours 1 and 2, which are outside the training range (3 to 6), so the model is partly guessing. That is an unlucky split on a tiny dataset."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Marks Predictor v2",
      "meta": "Real ML version",
      "blocks": [
        {
          "type": "p",
          "text": "Upgrade the predictor with three things: a train/test split, error calculation and better prediction logic. Better logic means marks must stay between 0 and 100, as you saw in Day 4 when the model predicted over 100:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "predictor_v2.py",
          "code": "def predict_marks(hours):\n    raw = model.predict(pd.DataFrame({\"hours_studied\": [hours]}))[0]\n    return round(min(max(raw, 0), 100), 2)   # keep marks between 0 and 100\n\nfor h in [0, 3.5, 7, 12]:\n    print(f\"{h} hours -> {predict_marks(h)} marks\")",
          "output": "0 hours -> 32.0 marks\n3.5 hours -> 54.75 marks\n7 hours -> 77.5 marks\n12 hours -> 100 marks"
        },
        {
          "type": "p",
          "text": "The Final Program below combines split, training, testing, error and this function."
        }
      ]
    },
    {
      "id": "challenge",
      "icon": "💡",
      "title": "Challenge: Change test_size",
      "meta": "Important",
      "blocks": [
        {
          "type": "p",
          "text": "Try test_size=0.3 and compare the error. Let us test several sizes at once:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "test_size.py",
          "code": "for size in [0.2, 0.3, 0.5]:\n    Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=size, random_state=42)\n    m = LinearRegression().fit(Xtr, ytr)\n    err = mean_absolute_error(yte, m.predict(Xte))\n    print(f\"test_size={size}: train rows={len(Xtr)}, test rows={len(Xte)}, MAE={err:.2f}\")",
          "output": "test_size=0.2: train rows=4, test rows=2, MAE=4.25\ntest_size=0.3: train rows=4, test rows=2, MAE=4.25\ntest_size=0.5: train rows=3, test rows=3, MAE=2.50"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "0.2 and 0.3 give the SAME result! 30% of 6 rows is 1.8, which rounds up to 2 test rows, exactly as before. Only at 0.5 does the split change. Always check how many rows the test set really has."
        },
        {
          "type": "p",
          "text": "Now keep test_size=0.2 and change only random_state, which changes WHICH rows are tested:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "random_state.py",
          "code": "for seed in range(5):\n    Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.2, random_state=seed)\n    m = LinearRegression().fit(Xtr, ytr)\n    err = mean_absolute_error(yte, m.predict(Xte))\n    print(f\"random_state={seed}: MAE={err:.2f}\")",
          "output": "random_state=0: MAE=2.00\nrandom_state=1: MAE=1.79\nrandom_state=2: MAE=1.83\nrandom_state=3: MAE=2.71\nrandom_state=4: MAE=4.25"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Same data, same model, but the error jumps between 1.79 and 4.25 just by choosing different test rows. With so little data, one score is not reliable. More data (and later, cross-validation) gives steadier answers."
        }
      ]
    },
    {
      "id": "validation",
      "icon": "🧠",
      "title": "Extra Insight: Model Validation",
      "blocks": [
        {
          "type": "p",
          "text": "What you learned today is called Model Validation: checking a model on unseen data before trusting it."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Without validation, your model may look perfect in your notebook and fail in the real world."
        }
      ]
    },
    {
      "id": "real",
      "icon": "🌍",
      "title": "Real-World Thinking",
      "blocks": [
        {
          "type": "p",
          "text": "Ask these questions about every model:"
        },
        {
          "type": "list",
          "items": [
            "Will the model work on a new student?",
            "Is it overfitting (great on training, poor on testing)?",
            "Is my test set big and varied enough to trust the score?"
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "This is what companies care about: not how well the model remembers old data, but how well it predicts new data."
        }
      ]
    },
    {
      "id": "learned",
      "icon": "✅",
      "title": "What You Actually Learned",
      "blocks": [
        {
          "type": "list",
          "items": [
            "Why testing on training data gives fake confidence",
            "How to split data with train_test_split",
            "How to measure error with mean_absolute_error",
            "How to compare train error and test error to spot problems"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Marks Predictor v2 (Real ML Version)",
    "file": "day5_final.py",
    "description": "One program combining Day 5: train/test split, honest testing, MAE for train and test, the effect of test_size, safe prediction logic and a train vs test plot.",
    "concepts": [
      "train_test_split",
      "random_state",
      "fit on train only",
      "predict on test",
      "mean_absolute_error",
      "train vs test error",
      "clipped predictions"
    ],
    "code": "import pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error\n\n# 1. DATA\ndata = {\n    \"hours_studied\": [1, 2, 3, 4, 5, 6],\n    \"marks\": [35, 40, 50, 60, 65, 70]\n}\ndf = pd.DataFrame(data)\nX = df[[\"hours_studied\"]]\ny = df[\"marks\"]\n\n# 2. TRAIN/TEST SPLIT\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\nprint(\"=== MARKS PREDICTOR v2 ===\")\nprint(\"Training rows:\", len(X_train), \"| Testing rows:\", len(X_test))\n\n# 3. TRAIN (only on training data)\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\n# 4. TEST: actual vs predicted\ny_pred = model.predict(X_test)\nresults = pd.DataFrame({\n    \"hours_studied\": X_test[\"hours_studied\"].values,\n    \"actual\": y_test.values,\n    \"predicted\": y_pred.round(2)\n})\nresults[\"error\"] = (results[\"actual\"] - results[\"predicted\"]).abs().round(2)\nprint(\"\\nTest results:\")\nprint(results)\n\n# 5. ERROR: train vs test\nmae_train = mean_absolute_error(y_train, model.predict(X_train))\nmae_test = mean_absolute_error(y_test, y_pred)\nprint(\"\\nTrain error (MAE):\", round(mae_train, 2))\nprint(\"Test error (MAE): \", round(mae_test, 2))\n\n# 6. HOW STABLE IS THE SCORE? change test_size\nprint(\"\\nEffect of test_size:\")\nfor size in [0.2, 0.3, 0.5]:\n    Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=size, random_state=42)\n    m = LinearRegression().fit(Xtr, ytr)\n    err = mean_absolute_error(yte, m.predict(Xte))\n    print(f\"  test_size={size}: test rows={len(Xte)}, MAE={err:.2f}\")\n\n# 7. BETTER PREDICTION LOGIC: keep marks between 0 and 100\ndef predict_marks(hours):\n    raw = model.predict(pd.DataFrame({\"hours_studied\": [hours]}))[0]\n    return round(min(max(raw, 0), 100), 2)\n\nprint(\"\\nPredictions:\")\nfor h in [0, 3.5, 7, 12]:\n    print(f\"  {h} hours -> {predict_marks(h)} marks\")\n\n# 8. VISUALIZE\nplt.scatter(X_train, y_train, color=\"blue\", label=\"Train Data\")\nplt.scatter(X_test, y_test, color=\"orange\", s=120, label=\"Test Data\")\nplt.plot(X, model.predict(X), color=\"red\", label=\"Model line\")\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"Marks Predictor v2: Train vs Test\")\nplt.legend()\nplt.show()",
    "output": "=== MARKS PREDICTOR v2 ===\nTraining rows: 4 | Testing rows: 2\n\nTest results:\n   hours_studied  actual  predicted  error\n0              1      35       38.5    3.5\n1              2      40       45.0    5.0\n\nTrain error (MAE): 1.25\nTest error (MAE):  4.25\n\nEffect of test_size:\n  test_size=0.2: test rows=2, MAE=4.25\n  test_size=0.3: test rows=2, MAE=4.25\n  test_size=0.5: test rows=3, MAE=2.50\n\nPredictions:\n  0 hours -> 32.0 marks\n  3.5 hours -> 54.75 marks\n  7 hours -> 77.5 marks\n  12 hours -> 100 marks"
  },
  "practice": [
    {
      "title": "Ice Cream Sales Tester",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Test an ice cream sales model properly on data it has never seen.",
      "tasks": [
        "Create the DataFrame and split X and y",
        "Split into train and test with test_size=0.2 and random_state=42",
        "Train the model on the training data only",
        "Print actual vs predicted sales for the test rows",
        "Print the Mean Absolute Error for train and for test"
      ],
      "hint": "Use train_test_split(X, y, test_size=0.2, random_state=42), then fit on X_train and y_train only.",
      "starter": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"temperature\": [15, 18, 20, 22, 25, 27, 30, 32, 35, 38],\n    \"sales\": [100, 120, 135, 150, 185, 200, 230, 240, 280, 300]\n}\n\n# TODO 1: DataFrame, X and y\n\n# TODO 2: train/test split\n\n# TODO 3: train the model on training data only\n\n# TODO 4: print actual vs predicted for test rows\n\n# TODO 5: print train MAE and test MAE",
      "solution": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"temperature\": [15, 18, 20, 22, 25, 27, 30, 32, 35, 38],\n    \"sales\": [100, 120, 135, 150, 185, 200, 230, 240, 280, 300]\n}\ndf = pd.DataFrame(data)\n\nX = df[[\"temperature\"]]\ny = df[\"sales\"]\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nprint(\"Train rows:\", len(X_train), \"| Test rows:\", len(X_test))\n\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\n\ny_pred = model.predict(X_test)\nresults = pd.DataFrame({\n    \"temperature\": X_test[\"temperature\"].values,\n    \"actual\": y_test.values,\n    \"predicted\": y_pred.round(1)\n})\nprint(results)\n\nprint(\"Train MAE:\", round(mean_absolute_error(y_train, model.predict(X_train)), 2))\nprint(\"Test MAE: \", round(mean_absolute_error(y_test, y_pred), 2))",
      "output": "Train rows: 8 | Test rows: 2\n   temperature  actual  predicted\n0           35     280      270.8\n1           18     120      120.8\nTrain MAE: 3.53\nTest MAE:  5.0"
    },
    {
      "title": "Split Size and Safe Predictor",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Compare test sizes, spot overfitting signs and build a prediction function with safe limits.",
      "tasks": [
        "Create the DataFrame and split X and y",
        "For test_size 0.2, 0.3 and 0.4 print the number of test rows, train MAE and test MAE",
        "Look at the gap between train and test error. Which split looks most trustworthy?",
        "Train one model with test_size=0.2 and write predict_marks(hours) that keeps marks between 0 and 100",
        "Print predictions for 2.5 and 14 hours"
      ],
      "hint": "Loop with for size in [0.2, 0.3, 0.4]. Clip with min(max(raw, 0), 100).",
      "starter": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"hours\": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],\n    \"marks\": [33, 39, 44, 49, 57, 59, 66, 68, 77, 79, 84, 95]\n}\n\n# TODO 1: DataFrame, X and y\n\n# TODO 2: loop over test sizes 0.2, 0.3, 0.4 and print rows + train/test MAE\n\n# TODO 3: train one model (test_size=0.2) and write predict_marks(hours)\n\n# TODO 4: print predictions for 2.5 and 14 hours",
      "solution": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"hours\": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],\n    \"marks\": [33, 39, 44, 49, 57, 59, 66, 68, 77, 79, 84, 95]\n}\ndf = pd.DataFrame(data)\n\nX = df[[\"hours\"]]\ny = df[\"marks\"]\n\nfor size in [0.2, 0.3, 0.4]:\n    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=size, random_state=42)\n    model = LinearRegression().fit(X_train, y_train)\n    train_err = mean_absolute_error(y_train, model.predict(X_train))\n    test_err = mean_absolute_error(y_test, model.predict(X_test))\n    print(f\"test_size={size}: test rows={len(X_test)}, train MAE={train_err:.2f}, test MAE={test_err:.2f}\")\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel = LinearRegression().fit(X_train, y_train)\n\ndef predict_marks(hours):\n    raw = model.predict(pd.DataFrame({\"hours\": [hours]}))[0]\n    return round(min(max(raw, 0), 100), 2)\n\nfor h in [2.5, 14]:\n    print(f\"{h} hours -> {predict_marks(h)} marks\")",
      "output": "test_size=0.2: test rows=3, train MAE=1.11, test MAE=2.41\ntest_size=0.3: test rows=4, train MAE=1.23, test MAE=1.83\ntest_size=0.4: test rows=5, train MAE=1.15, test MAE=1.80\n2.5 hours -> 41.11 marks\n14 hours -> 100 marks",
      "note": "A bigger test set (0.4 gives 5 test rows) rests its score on more evidence, so it is more trustworthy than a score from 2 or 3 rows. The 14 hour prediction is capped at 100 because the raw line goes above it. Capping keeps answers possible, but the model is still extrapolating beyond 12 hours, so treat it as a guess."
    }
  ],
  "checklist": [
    "Understood why train and test data must be separate",
    "Split data with train_test_split",
    "Trained on training data only",
    "Tested on unseen data",
    "Measured Mean Absolute Error",
    "Compared train error and test error",
    "Built Marks Predictor v2"
  ],
  "quiz": [
    {
      "q": "Why do we test a model on data it has never seen?",
      "options": [
        "To make training faster",
        "To get an honest idea of how it works on new data",
        "Because test data is always cleaner",
        "To increase the training score"
      ],
      "answer": 1,
      "why": "Testing on training data is like taking the same exam you studied: it hides real performance."
    },
    {
      "q": "What does random_state=42 do in train_test_split?",
      "options": [
        "Picks 42 rows for testing",
        "Makes the shuffle repeatable, so the split is the same every run",
        "Sets the model accuracy to 42%",
        "Removes missing values"
      ],
      "answer": 1,
      "why": "A fixed random_state gives the same split each time, so results are reproducible."
    },
    {
      "q": "Which result suggests overfitting?",
      "options": [
        "Low train error and low test error",
        "High train error and high test error",
        "Low train error but much higher test error",
        "Equal errors of zero"
      ],
      "answer": 2,
      "why": "The model memorized training data but fails on new data."
    },
    {
      "q": "A Mean Absolute Error of 4 marks means:",
      "options": [
        "The model is 4% accurate",
        "Predictions miss by about 4 marks on average",
        "4 rows were wrong",
        "The test set has 4 rows"
      ],
      "answer": 1,
      "why": "MAE is the average size of the mistakes, in the same unit as the output."
    }
  ]
}
  ]
};