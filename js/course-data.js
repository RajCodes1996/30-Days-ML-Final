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
}
  ]
};