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
},

// DAY 6 snippet. In course-data.js: add a comma after Day 5's closing }, then paste this object. No images for this day.
{
  "day": 6,
  "title": "Classification: Pass/Fail Predictor",
  "subtitle": "Predict categories instead of numbers: build your first classification model and learn to evaluate it fairly.",
  "level": "Beginner",
  "duration": "90-120 min",
  "tags": [
    "Classification",
    "LogisticRegression",
    "Accuracy",
    "stratify",
    "Baseline"
  ],
  "goals": [
    "Understand classification vs regression",
    "Build your first classification model",
    "Predict categories (Pass/Fail) instead of numbers"
  ],
  "sections": [
    {
      "id": "types",
      "icon": "🧠",
      "title": "Step 1: Regression vs Classification",
      "blocks": [
        {
          "type": "table",
          "head": [
            "",
            "Regression (Days 4 and 5)",
            "Classification (today)"
          ],
          "rows": [
            [
              "Output",
              "A number",
              "A category (label)"
            ],
            [
              "Example",
              "Marks = 65",
              "Pass or Fail"
            ],
            [
              "Question",
              "How many marks will the student get?",
              "Will the student pass?"
            ],
            [
              "Algorithm",
              "LinearRegression",
              "LogisticRegression"
            ],
            [
              "Error measure",
              "MAE (marks off)",
              "Accuracy (% correct)"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Despite its name, Logistic Regression is a classification algorithm. It predicts the chance of a category, then picks the most likely one."
        }
      ]
    },
    {
      "id": "prepare",
      "icon": "⚡",
      "title": "Step 2: Prepare the Dataset",
      "meta": "Convert marks into Pass/Fail",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "day6_ml.py",
          "code": "import pandas as pd\n\ndata = {\n    \"hours_studied\": [1, 2, 3, 4, 5, 6],\n    \"marks\": [35, 40, 50, 60, 65, 70]\n}\ndf = pd.DataFrame(data)\n\n# Convert into classification: 1 = Pass (marks >= 50), 0 = Fail\ndf[\"status\"] = df[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\nprint(df)\n\nprint(\"\\nHow many of each class?\")\nprint(df[\"status\"].value_counts())",
          "output": "   hours_studied  marks  status\n0              1     35       0\n1              2     40       0\n2              3     50       1\n3              4     60       1\n4              5     65       1\n5              6     70       1\n\nHow many of each class?\nstatus\n1    4\n0    2\nName: count, dtype: int64"
        },
        {
          "type": "table",
          "head": [
            "status",
            "Meaning"
          ],
          "rows": [
            [
              "1",
              "Pass ✅"
            ],
            [
              "0",
              "Fail ❌"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Turning categories into numbers like 0 and 1 is called label encoding. Models work with numbers."
        }
      ]
    },
    {
      "id": "split",
      "icon": "⚡",
      "title": "Step 3: Split Data",
      "meta": "Careful: a tiny trap here",
      "blocks": [
        {
          "type": "p",
          "text": "Run the split exactly as before and look at the labels in each part:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "split.py",
          "code": "from sklearn.model_selection import train_test_split\n\nX = df[[\"hours_studied\"]]\ny = df[\"status\"]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\n\nprint(\"Train labels:\", list(y_train))\nprint(\"Test labels :\", list(y_test))",
          "output": "Train labels: [1, 1, 1, 1]\nTest labels : [0, 0]"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Problem! The training set has only Pass (1) examples and both Fail examples landed in the test set. A classifier cannot learn what Fail looks like, and model.fit() would stop with a ValueError saying it needs at least 2 classes."
        },
        {
          "type": "p",
          "text": "Fix: use stratify=y. It keeps the same Pass/Fail mix in both train and test parts."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "split_fixed.py",
          "code": "X_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.33, random_state=42, stratify=y\n)\n\nprint(\"Train labels:\", list(y_train))\nprint(\"Test labels :\", list(y_test))\nprint(\"Test hours  :\", list(X_test[\"hours_studied\"]))",
          "output": "Train labels: [1, 1, 0, 1]\nTest labels : [1, 0]\nTest hours  : [6, 1]"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "For classification, always check that every class appears in the training data. stratify=y is the safe habit. With 6 rows, test_size=0.33 gives 2 test rows, one Pass and one Fail."
        }
      ]
    },
    {
      "id": "train",
      "icon": "⚡",
      "title": "Step 4: Train the Classification Model",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "train.py",
          "code": "from sklearn.linear_model import LogisticRegression\n\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\nprint(\"Model trained on\", len(X_train), \"rows\")",
          "output": "Model trained on 4 rows"
        }
      ]
    },
    {
      "id": "predict",
      "icon": "⚡",
      "title": "Step 5: Make Predictions",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "predict.py",
          "code": "y_pred = model.predict(X_test)\n\nprint(\"Predicted:\", y_pred)\nprint(\"Actual:   \", y_test.values)",
          "output": "Predicted: [1 0]\nActual:    [1 0]"
        },
        {
          "type": "p",
          "text": "The model predicts a label (0 or 1), not a number of marks. Compare each predicted label with the actual one."
        }
      ]
    },
    {
      "id": "accuracy",
      "icon": "📊",
      "title": "Step 6: Check Accuracy",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "accuracy.py",
          "code": "from sklearn.metrics import accuracy_score\n\nacc = accuracy_score(y_test, y_pred)\nprint(\"Accuracy:\", acc)\nprint(f\"That is {acc:.0%}: {int(acc * len(y_test))} correct out of {len(y_test)}\")",
          "output": "Accuracy: 1.0\nThat is 100%: 2 correct out of 2"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Accuracy = correct predictions / total predictions. 1.0 means 100% correct."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "With only 2 test rows, accuracy can only be 0%, 50% or 100%. One score on so little data is not reliable. More test data gives a trustworthy number."
        }
      ]
    },
    {
      "id": "proba",
      "icon": "🔍",
      "title": "Insight: How the Model Decides",
      "meta": "Probabilities",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "proba.py",
          "code": "hours = pd.DataFrame({\"hours_studied\": [1, 2, 2.5, 3, 4, 7]})\n\nresult = hours.copy()\nresult[\"chance_of_pass\"] = model.predict_proba(hours)[:, 1].round(2)\nresult[\"prediction\"] = model.predict(hours)\nprint(result)",
          "output": "   hours_studied  chance_of_pass  prediction\n0            1.0            0.32           0\n1            2.0            0.52           1\n2            2.5            0.62           1\n3            3.0            0.71           1\n4            4.0            0.85           1\n5            7.0            0.98           1"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The model first computes the chance of Pass. If it is 0.5 or more, it predicts Pass (1), otherwise Fail (0). The point where the chance crosses 0.5 is the decision boundary, here around 2 hours."
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Our data says 2 hours means 40 marks, which is a Fail, but the model says about a 50% chance. A model trained on 4 rows is only roughly right near the boundary. More data sharpens it."
        }
      ]
    },
    {
      "id": "input",
      "icon": "🧠",
      "title": "Step 7: Try Custom Input",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "custom_input.py",
          "code": "hours = float(input(\"Enter hours studied: \"))\nresult = model.predict(pd.DataFrame({\"hours_studied\": [hours]}))\n\nif result[0] == 1:\n    print(\"Pass ✅\")\nelse:\n    print(\"Fail ❌\")"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Example: type 5 and the output is Pass ✅. We pass a DataFrame with the same column name instead of [[hours]] to avoid scikit-learn's feature-name warning. In the website workspace a pop-up asks for your input."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Pass/Fail Predictor",
      "blocks": [
        {
          "type": "p",
          "text": "Features: input hours, output Pass/Fail, and accuracy display. Wrap the logic in a function that also shows how sure the model is:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "predictor.py",
          "code": "def predict_status(hours):\n    new = pd.DataFrame({\"hours_studied\": [hours]})\n    label = model.predict(new)[0]\n    chance = model.predict_proba(new)[0][1]\n    text = \"Pass ✅\" if label == 1 else \"Fail ❌\"\n    return f\"{text} (chance of passing: {chance:.0%})\"\n\nprint(\"Model accuracy:\", f\"{acc:.0%}\")\nfor h in [1, 2.5, 5]:\n    print(f\"{h} hours -> {predict_status(h)}\")",
          "output": "Model accuracy: 100%\n1 hours -> Fail ❌ (chance of passing: 32%)\n2.5 hours -> Pass ✅ (chance of passing: 62%)\n5 hours -> Pass ✅ (chance of passing: 93%)"
        },
        {
          "type": "p",
          "text": "The Final Program below combines everything, plus a chart of the probability curve."
        }
      ]
    },
    {
      "id": "challenge",
      "icon": "💡",
      "title": "Challenge: Improve the Dataset",
      "meta": "Important",
      "blocks": [
        {
          "type": "p",
          "text": "Use the bigger dataset from the task (8 students), retrain and check accuracy:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "bigger_data.py",
          "code": "data8 = {\n    \"hours_studied\": [1, 2, 3, 4, 5, 6, 7, 8],\n    \"marks\": [35, 40, 50, 60, 65, 70, 80, 90]\n}\ndf8 = pd.DataFrame(data8)\ndf8[\"status\"] = df8[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\n\nX8 = df8[[\"hours_studied\"]]\ny8 = df8[\"status\"]\nXtr, Xte, ytr, yte = train_test_split(X8, y8, test_size=0.25, random_state=42, stratify=y8)\n\nm8 = LogisticRegression().fit(Xtr, ytr)\nprint(\"Fail / Pass counts:\", (y8 == 0).sum(), \"/\", (y8 == 1).sum())\nprint(\"Accuracy:\", accuracy_score(yte, m8.predict(Xte)))",
          "output": "Fail / Pass counts: 2 / 6\nAccuracy: 0.5"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Accuracy went DOWN to 50%, not up! The 2 extra students both passed, so Fail examples are still only 2 out of 8. More rows is not automatically better data. The test set has just 2 rows too, so one split is a coin flip."
        },
        {
          "type": "p",
          "text": "To judge fairly, repeat with 10 different splits and compare three datasets. The third is bigger and has a balanced mix of Fail and Pass:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "compare_data.py",
          "code": "import numpy as np\n\ndef evaluate(df):\n    X = df[[\"hours_studied\"]]\n    y = df[\"status\"]\n    scores = []\n    for seed in range(10):\n        Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.25, random_state=seed, stratify=y)\n        m = LogisticRegression().fit(Xtr, ytr)\n        scores.append(accuracy_score(yte, m.predict(Xte)))\n    return np.mean(scores), min(scores)\n\nbig = pd.DataFrame({\n    \"hours_studied\": [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8],\n    \"marks\": [18, 24, 30, 37, 44, 48, 53, 57, 62, 64, 69, 72, 76, 80, 85, 90]\n})\nbig[\"status\"] = big[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\n\nfor name, d in [(\"6 rows\", df), (\"8 rows (task)\", df8), (\"16 rows balanced\", big)]:\n    avg, worst = evaluate(d)\n    print(f\"{name:17} average accuracy: {avg:.0%} | worst split: {worst:.0%}\")",
          "output": "6 rows            average accuracy: 90% | worst split: 50%\n8 rows (task)     average accuracy: 85% | worst split: 50%\n16 rows balanced  average accuracy: 92% | worst split: 75%"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The bigger balanced dataset is the most stable: its worst case is 75%, while the small datasets can drop to 50%. Better data means more rows AND a good mix of classes AND a fair test. That is the real lesson behind better data = better model."
        }
      ]
    },
    {
      "id": "baseline",
      "icon": "🌍",
      "title": "Real-World Thinking: Beat the Baseline",
      "blocks": [
        {
          "type": "p",
          "text": "Imagine a lazy model that always predicts the most common class. How accurate is it?"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "baseline.py",
          "code": "baseline = y8.value_counts(normalize=True).max()\nprint(f\"Always predict Pass: {baseline:.0%} accurate on the 8 row dataset\")",
          "output": "Always predict Pass: 75% accurate on the 8 row dataset"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "A model must beat this baseline to be useful. Accuracy alone can fool you when one class is much more common than the other, for example 95% of emails are not spam. Later you will learn better metrics like precision and recall."
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
            "The difference between regression (numbers) and classification (categories)",
            "How to turn marks into Pass/Fail labels",
            "How to train LogisticRegression and measure accuracy",
            "Why every class must appear in the training data (stratify)",
            "Why better data means more rows, balanced classes and a fair test"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Pass/Fail Predictor",
    "file": "day6_final.py",
    "description": "One program combining Day 6: Pass/Fail labels, a safe stratified split, LogisticRegression, accuracy against a baseline, a prediction function with probabilities and the probability curve.",
    "concepts": [
      "classification",
      "label encoding",
      "stratify",
      "LogisticRegression",
      "accuracy_score",
      "predict_proba",
      "baseline"
    ],
    "code": "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\n# 1. DATA: convert marks into Pass (1) / Fail (0)\ndata = {\n    \"hours_studied\": [1, 2, 3, 4, 5, 6],\n    \"marks\": [35, 40, 50, 60, 65, 70]\n}\ndf = pd.DataFrame(data)\ndf[\"status\"] = df[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\nprint(\"=== PASS/FAIL PREDICTOR ===\")\nprint(df)\nprint(\"\\nClass counts:\")\nprint(df[\"status\"].value_counts())\n\n# 2. SPLIT: stratify keeps both classes in train and test\nX = df[[\"hours_studied\"]]\ny = df[\"status\"]\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.33, random_state=42, stratify=y\n)\nprint(\"\\nTrain labels:\", list(y_train), \"| Test labels:\", list(y_test))\n\n# 3. TRAIN\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\n\n# 4. TEST\ny_pred = model.predict(X_test)\nresults = pd.DataFrame({\n    \"hours_studied\": X_test[\"hours_studied\"].values,\n    \"actual\": y_test.values,\n    \"predicted\": y_pred\n})\nprint(\"\\nTest results:\")\nprint(results)\n\n# 5. ACCURACY vs BASELINE\nacc = accuracy_score(y_test, y_pred)\nbaseline = y.value_counts(normalize=True).max()\nprint(f\"\\nModel accuracy: {acc:.0%}\")\nprint(f\"Baseline (always Pass): {baseline:.0%}\")\n\n# 6. PASS/FAIL PREDICTOR\ndef predict_status(hours):\n    new = pd.DataFrame({\"hours_studied\": [hours]})\n    label = model.predict(new)[0]\n    chance = model.predict_proba(new)[0][1]\n    text = \"Pass ✅\" if label == 1 else \"Fail ❌\"\n    return f\"{text} (chance of passing: {chance:.0%})\"\n\nprint(\"\\nPredictions:\")\nfor h in [1, 2.5, 5, 7]:\n    print(f\"  {h} hours -> {predict_status(h)}\")\n\n# 7. VISUALIZE: the probability curve\nx_line = pd.DataFrame({\"hours_studied\": np.linspace(0, 8, 100)})\nplt.scatter(X[\"hours_studied\"], y, color=\"blue\", s=70, label=\"Actual (0 = Fail, 1 = Pass)\")\nplt.plot(x_line[\"hours_studied\"], model.predict_proba(x_line)[:, 1], color=\"red\", label=\"Chance of Pass\")\nplt.axhline(0.5, color=\"gray\", linestyle=\"--\", label=\"Decision line (0.5)\")\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Pass (1) / Fail (0)\")\nplt.title(\"Pass/Fail Predictor\")\nplt.legend()\nplt.show()",
    "output": "=== PASS/FAIL PREDICTOR ===\n   hours_studied  marks  status\n0              1     35       0\n1              2     40       0\n2              3     50       1\n3              4     60       1\n4              5     65       1\n5              6     70       1\n\nClass counts:\nstatus\n1    4\n0    2\nName: count, dtype: int64\n\nTrain labels: [1, 1, 0, 1] | Test labels: [1, 0]\n\nTest results:\n   hours_studied  actual  predicted\n0              6       1          1\n1              1       0          0\n\nModel accuracy: 100%\nBaseline (always Pass): 67%\n\nPredictions:\n  1 hours -> Fail ❌ (chance of passing: 32%)\n  2.5 hours -> Pass ✅ (chance of passing: 62%)\n  5 hours -> Pass ✅ (chance of passing: 93%)\n  7 hours -> Pass ✅ (chance of passing: 98%)"
  },
  "practice": [
    {
      "title": "Attendance Result Classifier",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Predict whether a student passes from their attendance percentage.",
      "tasks": [
        "Create the DataFrame and add a status column: marks of 50 or more is 1 (Pass), else 0 (Fail)",
        "Print how many Pass and Fail students there are",
        "Split with test_size=0.25, random_state=42 and stratify=y",
        "Train a LogisticRegression model and print its accuracy",
        "Predict Pass or Fail for 58% and 80% attendance"
      ],
      "hint": "Use stratify=y in train_test_split. For predictions use pd.DataFrame({\"attendance\": [58, 80]}).",
      "starter": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\ndata = {\n    \"attendance\": [35, 42, 50, 55, 60, 65, 72, 78, 85, 90, 95, 98],\n    \"marks\": [28, 33, 38, 41, 45, 52, 58, 62, 70, 75, 82, 90]\n}\n\n# TODO 1: DataFrame + status column (1 = Pass if marks >= 50)\n\n# TODO 2: print counts of Pass and Fail\n\n# TODO 3: stratified split (test_size=0.25)\n\n# TODO 4: train LogisticRegression, print accuracy\n\n# TODO 5: predict for attendance 58 and 80",
      "solution": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\ndata = {\n    \"attendance\": [35, 42, 50, 55, 60, 65, 72, 78, 85, 90, 95, 98],\n    \"marks\": [28, 33, 38, 41, 45, 52, 58, 62, 70, 75, 82, 90]\n}\ndf = pd.DataFrame(data)\ndf[\"status\"] = df[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\n\nprint(\"Fail / Pass counts:\", (df[\"status\"] == 0).sum(), \"/\", (df[\"status\"] == 1).sum())\n\nX = df[[\"attendance\"]]\ny = df[\"status\"]\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42, stratify=y)\n\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\n\nacc = accuracy_score(y_test, model.predict(X_test))\nprint(f\"Accuracy: {acc:.0%}\")\n\nnew = pd.DataFrame({\"attendance\": [58, 80]})\nfor a, label in zip(new[\"attendance\"], model.predict(new)):\n    print(f\"{a}% attendance -> {'Pass' if label == 1 else 'Fail'}\")",
      "output": "Fail / Pass counts: 5 / 7\nAccuracy: 100%\n58% attendance -> Fail\n80% attendance -> Pass"
    },
    {
      "title": "Course Completion vs Baseline",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Predict if a learner completes an online course from videos watched, then check if the model really beats a lazy baseline.",
      "tasks": [
        "Create the DataFrame and print the Complete / Drop counts",
        "Split with test_size=0.3, random_state=1 and stratify=y, then train LogisticRegression",
        "Print the model accuracy and the baseline accuracy (always predict the most common class)",
        "Print the chance of completing for 3, 9 and 15 videos using predict_proba",
        "Decide: does the model beat the baseline?"
      ],
      "hint": "Baseline: y.value_counts(normalize=True).max(). Probability of class 1: model.predict_proba(new)[:, 1].",
      "starter": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\ndata = {\n    \"videos\": [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22],\n    \"completed\": [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1]\n}\n\n# TODO 1: DataFrame, print Complete / Drop counts\n\n# TODO 2: stratified split (test_size=0.3, random_state=1), train model\n\n# TODO 3: print model accuracy and baseline accuracy\n\n# TODO 4: chance of completing for 3, 9 and 15 videos\n\n# TODO 5: does the model beat the baseline?",
      "solution": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\ndata = {\n    \"videos\": [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22],\n    \"completed\": [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1]\n}\ndf = pd.DataFrame(data)\nprint(\"Drop / Complete counts:\", (df[\"completed\"] == 0).sum(), \"/\", (df[\"completed\"] == 1).sum())\n\nX = df[[\"videos\"]]\ny = df[\"completed\"]\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=1, stratify=y)\n\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\n\nacc = accuracy_score(y_test, model.predict(X_test))\nbaseline = y.value_counts(normalize=True).max()\nprint(f\"Model accuracy: {acc:.0%}\")\nprint(f\"Baseline accuracy: {baseline:.0%}\")\n\nnew = pd.DataFrame({\"videos\": [3, 9, 15]})\nnew[\"chance_complete\"] = model.predict_proba(new)[:, 1].round(2)\nprint(new)\n\nprint(\"Beats the baseline!\" if acc > baseline else \"Does not beat the baseline yet.\")",
      "output": "Drop / Complete counts: 8 / 6\nModel accuracy: 80%\nBaseline accuracy: 57%\n   videos  chance_complete\n0       3             0.00\n1       9             0.03\n2      15             0.87\nBeats the baseline!"
    }
  ],
  "checklist": [
    "Understood regression vs classification",
    "Created Pass/Fail labels",
    "Split data safely with stratify",
    "Trained a LogisticRegression model",
    "Measured accuracy",
    "Tried custom input",
    "Built the Pass/Fail Predictor"
  ],
  "quiz": [
    {
      "q": "Which problem is classification?",
      "options": [
        "Predicting tomorrow's temperature in degrees",
        "Predicting a house price",
        "Predicting whether an email is spam or not",
        "Predicting marks out of 100"
      ],
      "answer": 2,
      "why": "Spam or not spam is a category. Temperature, price and marks are numbers (regression)."
    },
    {
      "q": "Why can the plain train_test_split fail on our 6 row Pass/Fail data?",
      "options": [
        "Logistic regression cannot use splits",
        "The training part may contain only one class",
        "The data has missing values",
        "test_size must be 0.5"
      ],
      "answer": 1,
      "why": "If every Fail row lands in the test set, the model has nothing to learn Fail from. stratify=y prevents this."
    },
    {
      "q": "What does an accuracy of 0.75 mean?",
      "options": [
        "The error is 0.75 marks",
        "75% of predictions were correct",
        "The model is 0.75 hours off",
        "75 rows were used"
      ],
      "answer": 1,
      "why": "Accuracy is correct predictions divided by total predictions."
    },
    {
      "q": "A model with 90% accuracy on data where 90% of rows are Pass is:",
      "options": [
        "Excellent for sure",
        "Not better than always guessing Pass",
        "Perfect",
        "Impossible"
      ],
      "answer": 1,
      "why": "Compare accuracy with the baseline of always predicting the most common class."
    }
  ]
},

// DAY 7 snippet. In course-data.js: add a comma after Day 6's closing }, then paste this object. No images for this day.
{
  "day": 7,
  "title": "Mini Project: Student Performance Predictor",
  "subtitle": "Combine everything from Days 1 to 6 into one complete ML pipeline with regression, classification and honest evaluation.",
  "level": "Beginner",
  "duration": "2-3 hours",
  "tags": [
    "Pipeline",
    "Regression + Classification",
    "Evaluation",
    "Feature Engineering",
    "Project"
  ],
  "goals": [
    "Combine everything you learned",
    "Build a complete ML pipeline",
    "Think like a real ML developer"
  ],
  "sections": [
    {
      "id": "overview",
      "icon": "🏗️",
      "title": "Project Overview",
      "meta": "Student Performance Predictor (Complete v1)",
      "blocks": [
        {
          "type": "p",
          "text": "Today you combine everything from Days 1 to 6 into one complete ML system."
        },
        {
          "type": "table",
          "head": [
            "Part",
            "Details"
          ],
          "rows": [
            [
              "Input",
              "Hours studied"
            ],
            [
              "Output",
              "Predicted marks (regression) and Pass/Fail (classification)"
            ],
            [
              "Skills used",
              "Data handling, visualization, two ML models, evaluation"
            ]
          ]
        },
        {
          "type": "table",
          "head": [
            "Pipeline step",
            "From day",
            "Code you will use"
          ],
          "rows": [
            [
              "1. Data",
              "Days 1 and 2",
              "DataFrame, apply, status column"
            ],
            [
              "2. Visualize",
              "Day 3",
              "plt.scatter"
            ],
            [
              "3. Split",
              "Days 5 and 6",
              "train_test_split with stratify"
            ],
            [
              "4. Train",
              "Days 4 and 6",
              "LinearRegression + LogisticRegression"
            ],
            [
              "5. Predict",
              "Days 4 to 6",
              "predict, predict_proba"
            ],
            [
              "6. Evaluate",
              "Days 5 and 6",
              "MAE + accuracy on test data"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "A pipeline is a fixed chain of steps from raw data to a prediction. Real ML projects are exactly this, just bigger."
        }
      ]
    },
    {
      "id": "data",
      "icon": "⚡",
      "title": "Step 1: Full Dataset",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "day7_project.py",
          "code": "import pandas as pd\n\ndata = {\n    \"hours_studied\": [1, 2, 3, 4, 5, 6, 7, 8],\n    \"marks\": [35, 40, 50, 60, 65, 70, 80, 90]\n}\ndf = pd.DataFrame(data)\n\n# Create status column: 1 = Pass, 0 = Fail\ndf[\"status\"] = df[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\nprint(df)",
          "output": "   hours_studied  marks  status\n0              1     35       0\n1              2     40       0\n2              3     50       1\n3              4     60       1\n4              5     65       1\n5              6     70       1\n6              7     80       1\n7              8     90       1"
        }
      ]
    },
    {
      "id": "viz",
      "icon": "🔍",
      "title": "Step 2: Data Visualization",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "viz.py",
          "code": "import matplotlib.pyplot as plt\n\ncolors = df[\"status\"].map({1: \"green\", 0: \"red\"})   # green = Pass, red = Fail\nplt.scatter(df[\"hours_studied\"], df[\"marks\"], c=colors, s=80)\nplt.axhline(50, color=\"gray\", linestyle=\"--\", label=\"Pass mark (50)\")\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"Study vs Marks\")\nplt.legend()\nplt.show()"
        },
        {
          "type": "p",
          "text": "What you should see: dots rising with study hours. Red dots (Fail) sit below the dashed 50 line, green dots (Pass) above it."
        }
      ]
    },
    {
      "id": "split",
      "icon": "⚡",
      "title": "Step 3: Regression Model (Marks Prediction)",
      "blocks": [
        {
          "type": "p",
          "text": "One split for BOTH models. train_test_split accepts several targets and splits them with the same rows, so the regression and classification models are tested on the same students. We use stratify so Pass and Fail appear in both parts."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "regression.py",
          "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\n\nX = df[[\"hours_studied\"]]\ny_marks = df[\"marks\"]\ny_status = df[\"status\"]\n\nX_train, X_test, marks_train, marks_test, status_train, status_test = train_test_split(\n    X, y_marks, y_status, test_size=0.25, random_state=42, stratify=y_status\n)\nprint(\"Train hours:\", list(X_train[\"hours_studied\"]))\nprint(\"Test hours :\", list(X_test[\"hours_studied\"]))\n\nreg_model = LinearRegression()\nreg_model.fit(X_train, marks_train)\nprint(\"\\nRegression model trained\")",
          "output": "Train hours: [5, 1, 3, 6, 8, 4]\nTest hours : [2, 7]\n\nRegression model trained"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "The original task trained the classifier on ALL the data and later measured its accuracy on that same data. That is the fake confidence trap from Day 5. Here every model learns from the training rows only."
        }
      ]
    },
    {
      "id": "clf",
      "icon": "⚡",
      "title": "Step 4: Classification Model (Pass/Fail)",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "classification.py",
          "code": "from sklearn.linear_model import LogisticRegression\n\nclf_model = LogisticRegression()\nclf_model.fit(X_train, status_train)     # training rows only\nprint(\"Classification model trained\")",
          "output": "Classification model trained"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "The two models answer different questions from the same input: LinearRegression says how many marks, LogisticRegression says Pass or Fail."
        }
      ]
    },
    {
      "id": "predict",
      "icon": "⚡",
      "title": "Step 5: User Input System",
      "blocks": [
        {
          "type": "p",
          "text": "Put the prediction logic in one function. It returns both answers and keeps marks between 0 and 100 (Day 5):"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "predict_student.py",
          "code": "def predict_student(hours):\n    new = pd.DataFrame({\"hours_studied\": [hours]})\n\n    marks = reg_model.predict(new)[0]\n    marks = round(min(max(marks, 0), 100), 2)\n\n    status = clf_model.predict(new)[0]\n    chance = clf_model.predict_proba(new)[0][1]\n    return marks, status, chance\n\nfor h in [2, 4.5, 6, 9]:\n    marks, status, chance = predict_student(h)\n    result = \"Pass ✅\" if status == 1 else \"Fail ❌\"\n    print(f\"{h} hours -> {marks} marks | {result} (chance of passing: {chance:.0%})\")",
          "output": "2 hours -> 42.6 marks | Pass ✅ (chance of passing: 59%)\n4.5 hours -> 61.67 marks | Pass ✅ (chance of passing: 94%)\n6 hours -> 73.11 marks | Pass ✅ (chance of passing: 98%)\n9 hours -> 95.99 marks | Pass ✅ (chance of passing: 100%)"
        },
        {
          "type": "p",
          "text": "Now connect it to the user:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "user_input.py",
          "code": "hours = float(input(\"Enter hours studied: \"))\nmarks, status, chance = predict_student(hours)\n\nprint(\"\\nPredicted Marks:\", marks)\nif status == 1:\n    print(\"Result: Pass ✅\")\nelse:\n    print(\"Result: Fail ❌\")"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Look at 2 hours: the regression model predicts 42.6 marks (a Fail), yet the classifier says Pass with a 59% chance. Two models trained separately on tiny data can disagree near the pass mark. In a real system you would pick one rule, for example: Pass if the predicted marks are 50 or more."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Example: type 6 and you get Predicted Marks: 73.11 and Result: Pass ✅. The numbers in the original task's sample output were only an illustration. Yours come from the real model."
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "We pass a DataFrame with the same column name instead of [[hours]], which avoids scikit-learn's feature-name warning."
        }
      ]
    },
    {
      "id": "eval",
      "icon": "📊",
      "title": "Step 6: Model Evaluation",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "evaluation.py",
          "code": "from sklearn.metrics import mean_absolute_error, accuracy_score\n\n# Regression error on the TEST rows\npred_marks = reg_model.predict(X_test)\nerror = mean_absolute_error(marks_test, pred_marks)\nprint(\"Regression Error (MAE):\", round(error, 2), \"marks\")\n\n# Classification accuracy on the TEST rows\npred_status = clf_model.predict(X_test)\nacc = accuracy_score(status_test, pred_status)\nprint(\"Classification Accuracy (test):\", acc)\n\n# What the original task measured: accuracy on training rows\nacc_train = accuracy_score(status_train, clf_model.predict(X_train))\nprint(\"Classification Accuracy (train):\", acc_train)",
          "output": "Regression Error (MAE): 1.67 marks\nClassification Accuracy (test): 0.5\nClassification Accuracy (train): 1.0"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Train accuracy is 100% but test accuracy is only 50%. With just 2 test rows each wrong answer costs 50 points, so this number is noisy. It still shows why we test on unseen data: the training score hides the problem."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The honest takeaway: 8 rows and 1 feature are too little for a trustworthy system. That is what the challenge fixes."
        }
      ]
    },
    {
      "id": "challenge",
      "icon": "💡",
      "title": "Challenge: More Features, Better Prediction",
      "meta": "Very important",
      "blocks": [
        {
          "type": "p",
          "text": "Add Sleep hours and Attendance. Here is a larger dataset of 24 students:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "more_features.py",
          "code": "import numpy as np\n\ndata2 = {\n    \"hours_studied\": [1.6, 7.2, 4.5, 6.8, 8.8, 5.3, 5.0, 1.6, 3.1, 5.0, 6.4, 7.4, 4.0, 1.5, 3.3, 8.3, 2.7, 4.6, 8.4, 1.2, 5.8, 8.6, 2.8, 5.4],\n    \"sleep_hours\": [8.5, 4.7, 6.6, 7.8, 7.3, 6.3, 5.0, 6.5, 5.9, 6.4, 5.8, 8.2, 7.8, 5.6, 6.9, 5.4, 6.3, 5.8, 7.3, 5.9, 6.3, 7.6, 6.1, 8.5],\n    \"attendance\": [59, 87, 71, 71, 82, 76, 71, 50, 55, 85, 76, 85, 98, 84, 53, 65, 80, 62, 98, 97, 92, 74, 92, 57],\n    \"marks\": [35, 54, 47, 66, 71, 49, 42, 25, 33, 50, 59, 69, 57, 38, 41, 59, 42, 45, 75, 34, 60, 72, 46, 51]\n}\ndf2 = pd.DataFrame(data2)\ndf2[\"status\"] = df2[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\n\nprint(df2.head())\nprint(\"\\nFail / Pass counts:\", (df2[\"status\"] == 0).sum(), \"/\", (df2[\"status\"] == 1).sum())",
          "output": "   hours_studied  sleep_hours  attendance  marks  status\n0            1.6          8.5          59     35       0\n1            7.2          4.7          87     54       1\n2            4.5          6.6          71     47       0\n3            6.8          7.8          71     66       1\n4            8.8          7.3          82     71       1\n\nFail / Pass counts: 12 / 12"
        },
        {
          "type": "p",
          "text": "Compare hours only against all three features. Small data is noisy, so average over 10 different splits:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "compare_features.py",
          "code": "def compare(features):\n    maes, accs = [], []\n    for seed in range(10):\n        Xtr, Xte, mtr, mte, str_, ste = train_test_split(\n            df2[features], df2[\"marks\"], df2[\"status\"],\n            test_size=0.25, random_state=seed, stratify=df2[\"status\"]\n        )\n        reg = LinearRegression().fit(Xtr, mtr)\n        clf = LogisticRegression(max_iter=1000).fit(Xtr, str_)\n        maes.append(mean_absolute_error(mte, reg.predict(Xte)))\n        accs.append(accuracy_score(ste, clf.predict(Xte)))\n    return np.mean(maes), np.mean(accs)\n\nfor name, feats in [(\"Hours only\", [\"hours_studied\"]),\n                    (\"Hours + Sleep + Attendance\", [\"hours_studied\", \"sleep_hours\", \"attendance\"])]:\n    mae, acc = compare(feats)\n    print(f\"{name:27} avg MAE: {mae:.2f} marks | avg accuracy: {acc:.0%}\")",
          "output": "Hours only                  avg MAE: 5.53 marks | avg accuracy: 92%\nHours + Sleep + Attendance  avg MAE: 2.51 marks | avg accuracy: 95%"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "More relevant features cut the average error roughly in half (about 5.5 to 2.5 marks), and accuracy improves too. Better features are usually the biggest upgrade."
        },
        {
          "type": "p",
          "text": "Which feature matters most? Look at the learned slopes:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "feature_weights.py",
          "code": "features = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\nbig_model = LinearRegression().fit(df2[features], df2[\"marks\"])\n\nprint(\"Marks gained per +1 unit of each feature:\")\nprint(pd.Series(big_model.coef_, index=features).round(2))",
          "output": "Marks gained per +1 unit of each feature:\nhours_studied    4.60\nsleep_hours      3.35\nattendance       0.28\ndtype: float64"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Read the slopes with units in mind: +1 study hour adds about 4.6 marks, +1 sleep hour about 3.4 marks, and +1 attendance point about 0.3 marks. Attendance looks small only because it is measured on a 0 to 100 scale."
        }
      ]
    },
    {
      "id": "think",
      "icon": "🧠",
      "title": "Think Like an ML Developer",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Question",
            "Answer for this project"
          ],
          "rows": [
            [
              "Did I test on unseen data?",
              "Yes, a train/test split for both models"
            ],
            [
              "Is there enough data?",
              "No, 8 rows is tiny. 24 rows is better. Real projects use hundreds or thousands"
            ],
            [
              "Did I check class balance?",
              "Yes, stratify keeps Pass and Fail in both parts"
            ],
            [
              "What would improve it next?",
              "More students, more features, repeated splits, better metrics"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "This is your first complete ML system: data handling, visualization, regression, classification and evaluation, all in one pipeline."
        }
      ]
    },
    {
      "id": "learned",
      "icon": "✅",
      "title": "What You Just Achieved",
      "blocks": [
        {
          "type": "list",
          "items": [
            "Data handling with Pandas",
            "Visualization with Matplotlib",
            "A regression model for marks",
            "A classification model for Pass/Fail",
            "Honest evaluation on unseen data",
            "A complete pipeline from data to prediction"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Student Performance Predictor (Complete v1)",
    "file": "day7_final.py",
    "description": "The complete pipeline in one file: data, visualization, one shared stratified split, regression and classification models, honest test evaluation with a baseline, a prediction function and a combined plot.",
    "concepts": [
      "pipeline",
      "shared split",
      "LinearRegression",
      "LogisticRegression",
      "MAE",
      "accuracy vs baseline",
      "predict_student()"
    ],
    "code": "import pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_absolute_error, accuracy_score\n\n# 1. DATA\ndata = {\n    \"hours_studied\": [1, 2, 3, 4, 5, 6, 7, 8],\n    \"marks\": [35, 40, 50, 60, 65, 70, 80, 90]\n}\ndf = pd.DataFrame(data)\ndf[\"status\"] = df[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\nprint(\"=== STUDENT PERFORMANCE PREDICTOR (COMPLETE v1) ===\")\nprint(df)\n\n# 2. SPLIT: one split for both models, stratified on Pass/Fail\nX = df[[\"hours_studied\"]]\ny_marks = df[\"marks\"]\ny_status = df[\"status\"]\nX_train, X_test, marks_train, marks_test, status_train, status_test = train_test_split(\n    X, y_marks, y_status, test_size=0.25, random_state=42, stratify=y_status\n)\nprint(\"\\nTrain hours:\", list(X_train[\"hours_studied\"]), \"| Test hours:\", list(X_test[\"hours_studied\"]))\n\n# 3. TRAIN BOTH MODELS (training rows only)\nreg_model = LinearRegression().fit(X_train, marks_train)\nclf_model = LogisticRegression().fit(X_train, status_train)\n\n# 4. EVALUATE ON UNSEEN TEST DATA\nmae = mean_absolute_error(marks_test, reg_model.predict(X_test))\nacc = accuracy_score(status_test, clf_model.predict(X_test))\nbaseline = y_status.value_counts(normalize=True).max()\nprint(f\"\\nRegression Error (MAE): {mae:.2f} marks\")\nprint(f\"Classification Accuracy: {acc:.0%} (baseline always-Pass: {baseline:.0%})\")\n\n# 5. PREDICTION SYSTEM\ndef predict_student(hours):\n    new = pd.DataFrame({\"hours_studied\": [hours]})\n    marks = round(min(max(reg_model.predict(new)[0], 0), 100), 2)\n    status = clf_model.predict(new)[0]\n    chance = clf_model.predict_proba(new)[0][1]\n    return marks, status, chance\n\nprint(\"\\nPredictions:\")\nfor h in [2, 4.5, 6, 9]:\n    marks, status, chance = predict_student(h)\n    result = \"Pass ✅\" if status == 1 else \"Fail ❌\"\n    print(f\"  {h} hours -> {marks} marks | {result} (chance of passing: {chance:.0%})\")\n\n# 6. VISUALIZE\ncolors = df[\"status\"].map({1: \"green\", 0: \"red\"})\nplt.scatter(df[\"hours_studied\"], df[\"marks\"], c=colors, s=80, label=\"Students (green = Pass, red = Fail)\")\nx_line = pd.DataFrame({\"hours_studied\": [0, 9]})\nplt.plot(x_line, reg_model.predict(x_line), color=\"blue\", label=\"Regression line\")\nplt.axhline(50, color=\"gray\", linestyle=\"--\", label=\"Pass mark (50)\")\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"Student Performance Predictor\")\nplt.legend()\nplt.show()\n\n# Interactive version (try it in your own file):\n# hours = float(input(\"Enter hours studied: \"))\n# marks, status, chance = predict_student(hours)\n# print(\"Predicted Marks:\", marks, \"|\", \"Pass\" if status == 1 else \"Fail\")",
    "output": "=== STUDENT PERFORMANCE PREDICTOR (COMPLETE v1) ===\n   hours_studied  marks  status\n0              1     35       0\n1              2     40       0\n2              3     50       1\n3              4     60       1\n4              5     65       1\n5              6     70       1\n6              7     80       1\n7              8     90       1\n\nTrain hours: [5, 1, 3, 6, 8, 4] | Test hours: [2, 7]\n\nRegression Error (MAE): 1.67 marks\nClassification Accuracy: 50% (baseline always-Pass: 75%)\n\nPredictions:\n  2 hours -> 42.6 marks | Pass ✅ (chance of passing: 59%)\n  4.5 hours -> 61.67 marks | Pass ✅ (chance of passing: 94%)\n  6 hours -> 73.11 marks | Pass ✅ (chance of passing: 98%)\n  9 hours -> 95.99 marks | Pass ✅ (chance of passing: 100%)"
  },
  "practice": [
    {
      "title": "Salary Pipeline",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Build a complete mini pipeline for a new topic: predict salary (regression) and high earner (classification) from years of experience.",
      "tasks": [
        "Create the DataFrame and add a high_earner column: salary of 50000 or more is 1, else 0",
        "Split once for both targets (test_size=0.25, random_state=42, stratify on high_earner)",
        "Train LinearRegression for salary and LogisticRegression for high_earner on the training rows",
        "Print the test MAE and the test accuracy",
        "Predict salary and class for 3 and 9 years of experience"
      ],
      "hint": "Pass both targets to one train_test_split call. Use pd.DataFrame({\"experience\": [3, 9]}) for predictions.",
      "starter": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_absolute_error, accuracy_score\n\ndata = {\n    \"experience\": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],\n    \"salary\": [28000, 31000, 36000, 41000, 46000, 52000, 56000, 63000, 67000, 74000, 79000, 86000]\n}\n\n# TODO 1: DataFrame + high_earner column\n\n# TODO 2: one split for both targets (stratify)\n\n# TODO 3: train both models\n\n# TODO 4: print test MAE and test accuracy\n\n# TODO 5: predict for 3 and 9 years",
      "solution": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.metrics import mean_absolute_error, accuracy_score\n\ndata = {\n    \"experience\": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],\n    \"salary\": [28000, 31000, 36000, 41000, 46000, 52000, 56000, 63000, 67000, 74000, 79000, 86000]\n}\ndf = pd.DataFrame(data)\ndf[\"high_earner\"] = df[\"salary\"].apply(lambda x: 1 if x >= 50000 else 0)\n\nX = df[[\"experience\"]]\nX_train, X_test, sal_train, sal_test, cls_train, cls_test = train_test_split(\n    X, df[\"salary\"], df[\"high_earner\"], test_size=0.25, random_state=42, stratify=df[\"high_earner\"]\n)\n\nreg = LinearRegression().fit(X_train, sal_train)\nclf = LogisticRegression().fit(X_train, cls_train)\n\nprint(\"Test MAE:\", round(mean_absolute_error(sal_test, reg.predict(X_test))), \"currency units\")\nprint(\"Test accuracy:\", f\"{accuracy_score(cls_test, clf.predict(X_test)):.0%}\")\n\nnew = pd.DataFrame({\"experience\": [3, 9]})\nfor years, s, c in zip(new[\"experience\"], reg.predict(new), clf.predict(new)):\n    print(f\"{years} years -> salary {round(s)} | {'High earner' if c == 1 else 'Not high earner'}\")",
      "output": "Test MAE: 1696 currency units\nTest accuracy: 100%\n3 years -> salary 36566 | Not high earner\n9 years -> salary 67504 | High earner"
    },
    {
      "title": "House Price Feature Upgrade",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Upgrade a house price model with more features and prove it helps with repeated splits.",
      "tasks": [
        "Create the DataFrame and print its first 3 rows",
        "Write compare(features) that averages the test MAE over 10 splits (random_state 0 to 9)",
        "Compare size only against size + rooms + age",
        "Print the learned slope of every feature from a model trained on all rows",
        "Decide which feature adds the most price per unit"
      ],
      "hint": "Loop for seed in range(10) with train_test_split(df[features], df[\"price\"], test_size=0.25, random_state=seed). Use pd.Series(model.coef_, index=features).",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"size_100sqft\": [7.7, 5.3, 11.9, 15.9, 11.3, 12.3, 5.2, 12.3, 19.1, 17.8, 15.9, 6.6, 18.4, 17.9, 7.5, 14.5, 5.3, 6.8, 9.7, 7.4],\n    \"rooms\": [2, 4, 1, 4, 4, 3, 2, 4, 3, 2, 4, 1, 2, 3, 4, 4, 4, 1, 1, 1],\n    \"age_years\": [27, 24, 5, 21, 7, 18, 3, 27, 1, 16, 3, 8, 23, 17, 4, 8, 18, 0, 14, 19],\n    \"price\": [39.7, 45.0, 72.4, 99.5, 88.5, 74.7, 43.3, 72.0, 118.4, 102.7, 109.7, 40.5, 96.5, 100.7, 71.1, 97.9, 47.2, 45.2, 50.2, 36.6]\n}\n\n# TODO 1: DataFrame, print first 3 rows\n\n# TODO 2: compare(features) averaging test MAE over 10 splits\n\n# TODO 3: compare size only vs all features\n\n# TODO 4: print learned slopes of every feature",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"size_100sqft\": [7.7, 5.3, 11.9, 15.9, 11.3, 12.3, 5.2, 12.3, 19.1, 17.8, 15.9, 6.6, 18.4, 17.9, 7.5, 14.5, 5.3, 6.8, 9.7, 7.4],\n    \"rooms\": [2, 4, 1, 4, 4, 3, 2, 4, 3, 2, 4, 1, 2, 3, 4, 4, 4, 1, 1, 1],\n    \"age_years\": [27, 24, 5, 21, 7, 18, 3, 27, 1, 16, 3, 8, 23, 17, 4, 8, 18, 0, 14, 19],\n    \"price\": [39.7, 45.0, 72.4, 99.5, 88.5, 74.7, 43.3, 72.0, 118.4, 102.7, 109.7, 40.5, 96.5, 100.7, 71.1, 97.9, 47.2, 45.2, 50.2, 36.6]\n}\ndf = pd.DataFrame(data)\nprint(df.head(3))\n\ndef compare(features):\n    errors = []\n    for seed in range(10):\n        X_train, X_test, y_train, y_test = train_test_split(df[features], df[\"price\"], test_size=0.25, random_state=seed)\n        model = LinearRegression().fit(X_train, y_train)\n        errors.append(mean_absolute_error(y_test, model.predict(X_test)))\n    return np.mean(errors)\n\nall_features = [\"size_100sqft\", \"rooms\", \"age_years\"]\nprint()\nprint(\"Size only: avg MAE =\", round(compare([\"size_100sqft\"]), 2), \"lakh\")\nprint(\"All features: avg MAE =\", round(compare(all_features), 2), \"lakh\")\n\nmodel = LinearRegression().fit(df[all_features], df[\"price\"])\nprint()\nprint(pd.Series(model.coef_, index=all_features).round(2))",
      "output": "   size_100sqft  rooms  age_years  price\n0           7.7      2         27   39.7\n1           5.3      4         24   45.0\n2          11.9      1          5   72.4\n\nSize only: avg MAE = 8.12 lakh\nAll features: avg MAE = 2.39 lakh\n\nsize_100sqft    4.94\nrooms           6.72\nage_years      -0.70\ndtype: float64",
      "note": "Read the slopes with units in mind: each extra 100 sqft adds about 4.9 lakh, each extra room about 6.7 lakh, and each year of age takes away about 0.7 lakh. Adding rooms and age cuts the error a lot, because price depends on more than size."
    }
  ],
  "checklist": [
    "Built the dataset and status column",
    "Visualized the data",
    "Trained a regression model",
    "Trained a classification model",
    "Evaluated both on unseen test data",
    "Built the user prediction system",
    "Tried more features in the challenge"
  ],
  "quiz": [
    {
      "q": "Why do we pass both y_marks and y_status to one train_test_split call?",
      "options": [
        "It makes training faster",
        "Both models are trained and tested on the same students",
        "It removes outliers",
        "It is required by LinearRegression"
      ],
      "answer": 1,
      "why": "One call splits all arrays with the same rows, so the two models are compared fairly on the same test students."
    },
    {
      "q": "What is wrong with measuring accuracy on the same data used for training?",
      "options": [
        "Nothing, it is the best measure",
        "It gives fake confidence and hides real performance",
        "It uses too much memory",
        "It cannot be calculated"
      ],
      "answer": 1,
      "why": "The model has already seen those rows. Only unseen test data shows real performance."
    },
    {
      "q": "Which model predicts the number of marks?",
      "options": [
        "LogisticRegression",
        "LinearRegression",
        "accuracy_score",
        "train_test_split"
      ],
      "answer": 1,
      "why": "LinearRegression predicts numbers. LogisticRegression predicts categories like Pass/Fail."
    },
    {
      "q": "Adding relevant features (sleep, attendance) usually:",
      "options": [
        "Always makes the model worse",
        "Can reduce the error a lot",
        "Has no effect",
        "Removes the need for a test set"
      ],
      "answer": 1,
      "why": "Relevant features give the model more information, so predictions improve. Always confirm on test data."
    }
  ]
},

// DAY 8 snippet. In course-data.js: add a comma after Day 7's closing }, then paste this object. No images for this day.
{
  "day": 8,
  "title": "Data Cleaning: The Most Important Skill in ML",
  "subtitle": "Handle messy real-world data: find and fix missing values, duplicates, wrong types and impossible values.",
  "level": "Beginner",
  "duration": "90-120 min",
  "tags": [
    "Data Cleaning",
    "Missing Values",
    "Duplicates",
    "to_numeric",
    "Pipeline"
  ],
  "goals": [
    "Handle messy real-world data",
    "Fix missing values, duplicates and errors",
    "Prepare data like a professional"
  ],
  "sections": [
    {
      "id": "reality",
      "icon": "🧠",
      "title": "Reality Check",
      "meta": "The most important skill in ML",
      "blocks": [
        {
          "type": "p",
          "text": "In real ML, data is never clean. Experienced engineers spend about 70% of their time cleaning data. Master this and you are ahead of most learners."
        },
        {
          "type": "table",
          "head": [
            "Problem",
            "What it looks like",
            "Typical fix"
          ],
          "rows": [
            [
              "Missing values",
              "NaN or None in a column",
              "Fill (mean or median) or drop the row"
            ],
            [
              "Duplicate rows",
              "The same record twice",
              "drop_duplicates()"
            ],
            [
              "Wrong data types",
              "Numbers stored as text, like \"three\"",
              "pd.to_numeric(..., errors=\"coerce\")"
            ],
            [
              "Impossible values",
              "Marks of 150 or negative hours",
              "Treat as missing, then fill"
            ],
            [
              "Messy text",
              "\" a\" and \"A\" for the same person",
              "str.strip() and str.upper()"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Garbage in, garbage out. Even the best model fails when the data is dirty."
        }
      ]
    },
    {
      "id": "create",
      "icon": "⚡",
      "title": "Step 1: Create a Messy Dataset",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "day8_cleaning.py",
          "code": "import pandas as pd\n\ndata = {\n    \"name\": [\"A\", \"B\", \"C\", \"D\", \"E\", \"E\"],\n    \"hours_studied\": [2, 4, None, 5, 3, 3],\n    \"marks\": [40, 60, 30, None, 50, 50]\n}\ndf = pd.DataFrame(data)\nprint(df)",
          "output": "  name  hours_studied  marks\n0    A            2.0   40.0\n1    B            4.0   60.0\n2    C            NaN   30.0\n3    D            5.0    NaN\n4    E            3.0   50.0\n5    E            3.0   50.0"
        },
        {
          "type": "p",
          "text": "NaN means Not a Number: Pandas' marker for a missing value. A column with NaN becomes decimal (float)."
        }
      ]
    },
    {
      "id": "identify",
      "icon": "🔍",
      "title": "Step 2: Identify Problems",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "identify.py",
          "code": "print(df.isnull())\n\nprint(\"\\nMissing values per column:\")\nprint(df.isnull().sum())\n\nprint(\"\\nDuplicate rows:\")\nprint(df[df.duplicated()])",
          "output": "    name  hours_studied  marks\n0  False          False  False\n1  False          False  False\n2  False           True  False\n3  False          False   True\n4  False          False  False\n5  False          False  False\n\nMissing values per column:\nname             0\nhours_studied    1\nmarks            1\ndtype: int64\n\nDuplicate rows:\n  name  hours_studied  marks\n5    E            3.0   50.0"
        },
        {
          "type": "p",
          "text": "You will see two problems: missing values in hours_studied and marks, and a duplicate row (the second E). The first copy is kept, the repeat is flagged as the duplicate."
        }
      ]
    },
    {
      "id": "dups",
      "icon": "🔁",
      "title": "Step 3: Remove Duplicates",
      "meta": "Do this BEFORE filling missing values",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "duplicates.py",
          "code": "print(\"Rows before:\", len(df))\nprint(\"Mean marks WITH the duplicate:\", df[\"marks\"].mean())\n\ndf = df.drop_duplicates()\n\nprint(\"Rows after :\", len(df))\nprint(\"Mean marks WITHOUT the duplicate:\", df[\"marks\"].mean())",
          "output": "Rows before: 6\nMean marks WITH the duplicate: 46.0\nRows after : 5\nMean marks WITHOUT the duplicate: 45.0"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The original task filled missing values first. But a duplicate counts twice in the mean (46.0 instead of 45.0), so the filled values come out slightly wrong. Remove duplicates first, then fill."
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "drop_duplicates() returns a new table. Assign it back: df = df.drop_duplicates(). The old style drop_duplicates(inplace=True) also works, but assigning is clearer and safer."
        }
      ]
    },
    {
      "id": "missing",
      "icon": "🧹",
      "title": "Step 4: Handle Missing Values",
      "meta": "Option 1: fill with the mean",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "fill_missing.py",
          "code": "df[\"hours_studied\"] = df[\"hours_studied\"].fillna(df[\"hours_studied\"].mean())\ndf[\"marks\"] = df[\"marks\"].fillna(df[\"marks\"].mean())\nprint(df)",
          "output": "  name  hours_studied  marks\n0    A            2.0   40.0\n1    B            4.0   60.0\n2    C            3.5   30.0\n3    D            5.0   45.0\n4    E            3.0   50.0"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Older tutorials write df[\"marks\"].fillna(..., inplace=True). In recent Pandas this shows a FutureWarning, and in Pandas 3 it silently does nothing. Assign the result back, as above."
        },
        {
          "type": "table",
          "head": [
            "Option",
            "Use when",
            "Code"
          ],
          "rows": [
            [
              "Fill with mean",
              "Values are fairly evenly spread",
              "fillna(df[col].mean())"
            ],
            [
              "Fill with median",
              "There are outliers (a few extreme values)",
              "fillna(df[col].median())"
            ],
            [
              "Drop the row",
              "Few rows are missing and you have plenty of data",
              "df.dropna()"
            ]
          ]
        }
      ]
    },
    {
      "id": "types",
      "icon": "🔎",
      "title": "Step 5: Fix Data Types",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "dtypes.py",
          "code": "print(df[[\"hours_studied\", \"marks\"]].dtypes)",
          "output": "hours_studied    float64\nmarks            float64\ndtype: object"
        },
        {
          "type": "p",
          "text": "Make sure numeric columns are numeric. Here both are float64 (decimal numbers), which is fine for ML. If a number column showed object, it contains text and needs fixing. You will do exactly that in the challenge."
        }
      ]
    },
    {
      "id": "final_df",
      "icon": "⚡",
      "title": "Step 6: Final Clean Dataset",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "clean_check.py",
          "code": "print(df)\n\nprint(\"\\nMissing values left:\", df.isnull().sum().sum())\nprint(\"Duplicates left:\", df.duplicated().sum())",
          "output": "  name  hours_studied  marks\n0    A            2.0   40.0\n1    B            4.0   60.0\n2    C            3.5   30.0\n3    D            5.0   45.0\n4    E            3.0   50.0\n\nMissing values left: 0\nDuplicates left: 0"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Always end with a quick check like this. Clean means: zero missing values, zero duplicates, correct types."
        }
      ]
    },
    {
      "id": "extra",
      "icon": "🔥",
      "title": "More Real-World Problems",
      "meta": "Text mess and impossible values",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "extra_problems.py",
          "code": "messy = pd.DataFrame({\n    \"name\": [\" a\", \"B \", \"c\"],\n    \"marks\": [150, 60, -5]\n})\n\n# Clean text: remove spaces, make uppercase\nmessy[\"name\"] = messy[\"name\"].str.strip().str.upper()\nprint(messy)\n\n# Find impossible marks (below 0 or above 100)\nprint(\"\\nImpossible marks:\")\nprint(messy[(messy[\"marks\"] < 0) | (messy[\"marks\"] > 100)])",
          "output": "  name  marks\n0    A    150\n1    B     60\n2    C     -5\n\nImpossible marks:\n  name  marks\n0    A    150\n2    C     -5"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Without str.strip() and str.upper(), \" a\" and \"A\" look like different people, so duplicates would go undetected. Impossible values should be treated as missing and then filled."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Data Cleaner Tool",
      "blocks": [
        {
          "type": "p",
          "text": "Features: detect missing values, fill them, remove duplicates and show the cleaned data. Wrap them in one reusable function that also returns a report:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "cleaner_tool.py",
          "code": "import numpy as np\n\ndef clean_data(df):\n    df = df.copy()\n    report = {}\n\n    # 1. Fix text and types\n    df[\"name\"] = df[\"name\"].str.strip().str.upper()\n    for col in [\"hours_studied\", \"marks\"]:\n        df[col] = pd.to_numeric(df[col], errors=\"coerce\")\n\n    # 2. Impossible values become missing\n    df.loc[(df[\"marks\"] < 0) | (df[\"marks\"] > 100), \"marks\"] = np.nan\n    df.loc[(df[\"hours_studied\"] < 0) | (df[\"hours_studied\"] > 24), \"hours_studied\"] = np.nan\n    report[\"missing_found\"] = int(df.isnull().sum().sum())\n\n    # 3. Remove duplicates BEFORE filling\n    before = len(df)\n    df = df.drop_duplicates()\n    report[\"duplicates_removed\"] = before - len(df)\n\n    # 4. Fill missing values with the mean\n    for col in [\"hours_studied\", \"marks\"]:\n        df[col] = df[col].fillna(df[col].mean()).round(2)\n\n    return df.reset_index(drop=True), report\n\ndirty = pd.DataFrame({\n    \"name\": [\"A\", \"B\", \"C\", \"D\", \" e\", \"E\", \"F\", \"G\"],\n    \"hours_studied\": [2, 4, \"three\", 5, 3, 3, -1, 6],\n    \"marks\": [40, 60, 30, None, 50, 50, 70, 150]\n})\n\nprint(\"DIRTY DATA:\")\nprint(dirty)\n\ncleaned, report = clean_data(dirty)\nprint(\"\\nREPORT:\", report)\nprint(\"\\nCLEAN DATA:\")\nprint(cleaned)",
          "output": "DIRTY DATA:\n  name hours_studied  marks\n0    A             2   40.0\n1    B             4   60.0\n2    C         three   30.0\n3    D             5    NaN\n4    e             3   50.0\n5    E             3   50.0\n6    F            -1   70.0\n7    G             6  150.0\n\nREPORT: {'missing_found': 4, 'duplicates_removed': 1}\n\nCLEAN DATA:\n  name  hours_studied  marks\n0    A            2.0   40.0\n1    B            4.0   60.0\n2    C            4.0   30.0\n3    D            5.0   50.0\n4    E            3.0   50.0\n5    F            4.0   70.0\n6    G            6.0   50.0"
        },
        {
          "type": "p",
          "text": "One function now does the whole job. Real projects keep a function like this and run it on every new batch of data."
        }
      ]
    },
    {
      "id": "challenge",
      "icon": "💡",
      "title": "Challenge: Convert Text to Numbers",
      "meta": "Important",
      "blocks": [
        {
          "type": "p",
          "text": "Add dirty data where a number was typed as a word. Build the column so it mixes numbers and text, like data from a form or a CSV file:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "to_numeric.py",
          "code": "df2 = pd.DataFrame({\n    \"name\": [\"A\", \"B\", \"C\", \"D\", \"E\"],\n    \"hours_studied\": [2, 4, \"three\", 5, 3]\n})\nprint(\"Before:\", df2[\"hours_studied\"].dtype)\n\ndf2[\"hours_studied\"] = pd.to_numeric(df2[\"hours_studied\"], errors=\"coerce\")\nprint(\"After :\", df2[\"hours_studied\"].dtype)\nprint(df2)",
          "output": "Before: object\nAfter : float64\n  name  hours_studied\n0    A            2.0\n1    B            4.0\n2    C            NaN\n3    D            5.0\n4    E            3.0"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "errors=\"coerce\" turns anything that cannot be a number into NaN. So \"three\" becomes a missing value, and you must fill it afterwards. Converting is only half of the job."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "The original task wrote df.loc[2, \"hours_studied\"] = \"three\" on a number column. Recent Pandas refuses this (it warns or raises an error), because the column is numeric. Real dirty data arrives already mixed, so we build it that way."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "fill_after_coerce.py",
          "code": "df2[\"hours_studied\"] = df2[\"hours_studied\"].fillna(df2[\"hours_studied\"].mean())\nprint(df2)",
          "output": "  name  hours_studied\n0    A            2.0\n1    B            4.0\n2    C            3.5\n3    D            5.0\n4    E            3.0"
        }
      ]
    },
    {
      "id": "payoff",
      "icon": "🚀",
      "title": "Why It Matters: Model Test",
      "blocks": [
        {
          "type": "p",
          "text": "See what a model does with dirty data, then with the cleaned data from the Data Cleaner Tool:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "model_test.py",
          "code": "from sklearn.linear_model import LinearRegression\n\n# Dirty data: one hours value is missing\ndirty_numbers = pd.DataFrame({\n    \"hours_studied\": [2, 4, None, 5],\n    \"marks\": [40, 60, 30, 45]\n})\ntry:\n    LinearRegression().fit(dirty_numbers[[\"hours_studied\"]], dirty_numbers[\"marks\"])\nexcept ValueError as e:\n    print(\"Model refused dirty data:\", str(e).split(\"\\n\")[0])\n\n# Clean data\nmodel = LinearRegression().fit(cleaned[[\"hours_studied\"]], cleaned[\"marks\"])\nprint(\"Model trained on\", len(cleaned), \"clean rows\")",
          "output": "Model refused dirty data: Input X contains NaN.\nModel trained on 7 clean rows"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Most ML models refuse missing values outright, and wrong values quietly damage predictions. Cleaning is what makes modeling possible."
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
            "How to find missing values, duplicates and wrong types",
            "How to fill, drop and convert values safely",
            "Why the order matters: duplicates first, then fill",
            "How to build a reusable cleaning function",
            "How to prepare a dataset for ML like a professional"
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Important truth: even Google-level ML models fail if the data is dirty."
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Data Cleaner Tool",
    "file": "day8_final.py",
    "description": "A reusable cleaning function that fixes text, converts types, flags impossible values, removes duplicates first, fills missing values, reports what it did and proves the data is ready for ML.",
    "concepts": [
      "isnull",
      "duplicated / drop_duplicates",
      "fillna",
      "to_numeric coerce",
      "str.strip / upper",
      "impossible values",
      "cleaning function"
    ],
    "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.linear_model import LinearRegression\n\ndef clean_data(df):\n    \"\"\"Clean a student table: text, types, impossible values, duplicates, missing values.\"\"\"\n    df = df.copy()\n    report = {}\n\n    # 1. Fix text and types\n    df[\"name\"] = df[\"name\"].str.strip().str.upper()\n    for col in [\"hours_studied\", \"marks\"]:\n        df[col] = pd.to_numeric(df[col], errors=\"coerce\")\n\n    # 2. Impossible values become missing\n    df.loc[(df[\"marks\"] < 0) | (df[\"marks\"] > 100), \"marks\"] = np.nan\n    df.loc[(df[\"hours_studied\"] < 0) | (df[\"hours_studied\"] > 24), \"hours_studied\"] = np.nan\n    report[\"missing_found\"] = int(df.isnull().sum().sum())\n\n    # 3. Remove duplicates BEFORE filling\n    before = len(df)\n    df = df.drop_duplicates()\n    report[\"duplicates_removed\"] = before - len(df)\n\n    # 4. Fill missing values with the mean\n    for col in [\"hours_studied\", \"marks\"]:\n        df[col] = df[col].fillna(df[col].mean()).round(2)\n\n    report[\"rows_left\"] = len(df)\n    return df.reset_index(drop=True), report\n\n# ---- DATA CLEANER TOOL ----\ndirty = pd.DataFrame({\n    \"name\": [\"A\", \"B\", \"C\", \"D\", \" e\", \"E\", \"F\", \"G\"],\n    \"hours_studied\": [2, 4, \"three\", 5, 3, 3, -1, 6],\n    \"marks\": [40, 60, 30, None, 50, 50, 70, 150]\n})\n\nprint(\"=== DATA CLEANER TOOL ===\")\nprint(\"\\nDIRTY DATA:\")\nprint(dirty)\n\nprint(\"\\nProblems found BEFORE cleaning:\")\nprint(\"  Missing marks      :\", dirty[\"marks\"].isnull().sum())\nprint(\"  Text in hours      :\", dirty[\"hours_studied\"].apply(lambda v: isinstance(v, str)).sum())\nprint(\"  Impossible marks   :\", ((dirty[\"marks\"] < 0) | (dirty[\"marks\"] > 100)).sum())\n\ncleaned, report = clean_data(dirty)\nprint(\"\\nCLEANING REPORT:\", report)\nprint(\"\\nCLEAN DATA:\")\nprint(cleaned)\n\n# ---- READY FOR ML? ----\nprint(\"\\nMissing values left:\", cleaned.isnull().sum().sum())\nprint(\"Duplicates left:\", cleaned.duplicated().sum())\nprint(cleaned[[\"hours_studied\", \"marks\"]].dtypes)\n\nmodel = LinearRegression().fit(cleaned[[\"hours_studied\"]], cleaned[\"marks\"])\nprint(f\"\\nModel trained on {len(cleaned)} clean rows. Slope: {model.coef_[0]:.2f} marks per hour\")",
    "output": "=== DATA CLEANER TOOL ===\n\nDIRTY DATA:\n  name hours_studied  marks\n0    A             2   40.0\n1    B             4   60.0\n2    C         three   30.0\n3    D             5    NaN\n4    e             3   50.0\n5    E             3   50.0\n6    F            -1   70.0\n7    G             6  150.0\n\nProblems found BEFORE cleaning:\n  Missing marks      : 1\n  Text in hours      : 1\n  Impossible marks   : 1\n\nCLEANING REPORT: {'missing_found': 4, 'duplicates_removed': 1, 'rows_left': 7}\n\nCLEAN DATA:\n  name  hours_studied  marks\n0    A            2.0   40.0\n1    B            4.0   60.0\n2    C            4.0   30.0\n3    D            5.0   50.0\n4    E            3.0   50.0\n5    F            4.0   70.0\n6    G            6.0   50.0\n\nMissing values left: 0\nDuplicates left: 0\nhours_studied    float64\nmarks            float64\ndtype: object\n\nModel trained on 7 clean rows. Slope: 2.00 marks per hour"
  },
  "practice": [
    {
      "title": "Fee Table Cleaner",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Clean a small fee table: find the problems, fix them and verify the result. This time fill with the median.",
      "tasks": [
        "Create the DataFrame and print the missing values per column",
        "Print how many duplicate rows there are",
        "Remove duplicates first",
        "Fill the missing age and fee with the median of each column",
        "Print the clean table and confirm zero missing values"
      ],
      "hint": "Median: df[col].median(). Assign back: df[col] = df[col].fillna(...). Duplicates: df.duplicated().sum().",
      "starter": "import pandas as pd\n\ndata = {\n    \"name\": [\"Ravi\", \"Sana\", \"Tom\", \"Sana\", \"Priya\", \"Karan\"],\n    \"age\": [21, None, 23, None, 22, 25],\n    \"fee\": [1200, 1500, None, 1500, 1800, 2000]\n}\n\n# TODO 1: DataFrame + missing values per column\n\n# TODO 2: count duplicate rows\n\n# TODO 3: remove duplicates\n\n# TODO 4: fill missing values with the median\n\n# TODO 5: print clean table and missing count",
      "solution": "import pandas as pd\n\ndata = {\n    \"name\": [\"Ravi\", \"Sana\", \"Tom\", \"Sana\", \"Priya\", \"Karan\"],\n    \"age\": [21, None, 23, None, 22, 25],\n    \"fee\": [1200, 1500, None, 1500, 1800, 2000]\n}\ndf = pd.DataFrame(data)\n\nprint(\"Missing per column:\")\nprint(df.isnull().sum())\n\nprint(\"\\nDuplicate rows:\", df.duplicated().sum())\ndf = df.drop_duplicates()\n\nfor col in [\"age\", \"fee\"]:\n    df[col] = df[col].fillna(df[col].median())\n\nprint(\"\\nClean table:\")\nprint(df)\nprint(\"Missing left:\", df.isnull().sum().sum())",
      "output": "Missing per column:\nname    0\nage     2\nfee     1\ndtype: int64\n\nDuplicate rows: 1\n\nClean table:\n    name   age     fee\n0   Ravi  21.0  1200.0\n1   Sana  22.5  1500.0\n2    Tom  23.0  1650.0\n4  Priya  22.0  1800.0\n5  Karan  25.0  2000.0\nMissing left: 0"
    },
    {
      "title": "Survey Cleaner Pipeline",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Clean a messy survey with messy text, words instead of numbers, impossible values and a hidden duplicate.",
      "tasks": [
        "Clean the name column: strip spaces and make it uppercase",
        "Convert age and score to numbers with errors=\"coerce\"",
        "Mark impossible values as missing: age outside 0 to 100, score outside 0 to 100",
        "Remove duplicates, then fill missing values with the median",
        "Print the report (rows before, rows after, missing found) and the clean table"
      ],
      "hint": "Use df.loc[(df[col] < 0) | (df[col] > 100), col] = np.nan. Count missing before duplicates are removed.",
      "starter": "import numpy as np\nimport pandas as pd\n\ndata = {\n    \"name\": [\"Anu\", \" anu\", \"Bala\", \"Chitra\", \"Dev\", \"Esha\"],\n    \"age\": [\"25\", \"25\", \"thirty\", 31, -3, 28],\n    \"score\": [70, 70, 55, None, 62, 150]\n}\ndf = pd.DataFrame(data)\n\n# TODO 1: clean the name column\n\n# TODO 2: convert age and score to numbers\n\n# TODO 3: impossible values become NaN (0 to 100 allowed)\n\n# TODO 4: remove duplicates, fill with the median\n\n# TODO 5: print the report and the clean table",
      "solution": "import numpy as np\nimport pandas as pd\n\ndata = {\n    \"name\": [\"Anu\", \" anu\", \"Bala\", \"Chitra\", \"Dev\", \"Esha\"],\n    \"age\": [\"25\", \"25\", \"thirty\", 31, -3, 28],\n    \"score\": [70, 70, 55, None, 62, 150]\n}\ndf = pd.DataFrame(data)\nrows_before = len(df)\n\ndf[\"name\"] = df[\"name\"].str.strip().str.upper()\n\nfor col in [\"age\", \"score\"]:\n    df[col] = pd.to_numeric(df[col], errors=\"coerce\")\n    df.loc[(df[col] < 0) | (df[col] > 100), col] = np.nan\n\nmissing_found = int(df.isnull().sum().sum())\n\ndf = df.drop_duplicates()\nfor col in [\"age\", \"score\"]:\n    df[col] = df[col].fillna(df[col].median())\n\nprint(f\"Rows before: {rows_before} | Rows after: {len(df)} | Missing found: {missing_found}\")\nprint(df.reset_index(drop=True))",
      "output": "Rows before: 6 | Rows after: 5 | Missing found: 4\n     name   age  score\n0     ANU  25.0   70.0\n1    BALA  28.0   55.0\n2  CHITRA  31.0   62.0\n3     DEV  28.0   62.0\n4    ESHA  28.0   62.0",
      "note": "Notice that \" anu\" only became a visible duplicate after strip() and upper(). If you had removed duplicates first, it would have stayed. The order is: fix text and types, mark invalid values, remove duplicates, then fill."
    }
  ],
  "checklist": [
    "Created and inspected a messy dataset",
    "Found missing values and duplicates",
    "Removed duplicates before filling",
    "Filled missing values",
    "Converted text to numbers with to_numeric",
    "Built the Data Cleaner Tool",
    "Checked the data is ready for ML"
  ],
  "quiz": [
    {
      "q": "Why should you remove duplicates BEFORE filling missing values with the mean?",
      "options": [
        "It is faster",
        "A duplicate counts twice and skews the mean",
        "fillna only works on unique rows",
        "Pandas requires this order"
      ],
      "answer": 1,
      "why": "Duplicate rows are counted twice in the average, so the filled values would be slightly wrong."
    },
    {
      "q": "What does pd.to_numeric(col, errors=\"coerce\") do with the word \"three\"?",
      "options": [
        "Converts it to 3",
        "Raises an error",
        "Turns it into NaN (missing)",
        "Deletes the row"
      ],
      "answer": 2,
      "why": "coerce replaces values that cannot be numbers with NaN, which you then fill or drop."
    },
    {
      "q": "Which line counts missing values per column?",
      "options": [
        "df.isnull().sum()",
        "df.missing()",
        "df.dropna()",
        "df.count_nan"
      ],
      "answer": 0,
      "why": "isnull() marks missing cells and sum() counts them per column."
    },
    {
      "q": "Which fill is safer when a few values are extremely large?",
      "options": [
        "Mean",
        "Median",
        "Maximum",
        "Zero"
      ],
      "answer": 1,
      "why": "The median is not pulled by extreme values, so it represents a typical value better."
    }
  ]
},

// DAY 9 snippet. In course-data.js: paste this object between Day 8 and Day 10 (comma after Day 8's closing }, and a comma after this object's closing }). No images for this day.
{
  "day": 9,
  "title": "Feature Engineering: Making Data Powerful",
  "subtitle": "Create new features, avoid target leakage, scale correctly and test whether a feature really helps.",
  "level": "Beginner",
  "duration": "2 hours",
  "tags": [
    "Feature Engineering",
    "Target Leakage",
    "StandardScaler",
    "One-hot",
    "Feature Importance"
  ],
  "goals": [
    "Understand what features really are",
    "Create new meaningful features",
    "Improve model performance with better data, not better algorithms"
  ],
  "sections": [
    {
      "id": "what",
      "icon": "🧠",
      "title": "Step 1: What is a Feature?",
      "meta": "Making data powerful",
      "blocks": [
        {
          "type": "p",
          "text": "A feature is an input variable the model uses to make its prediction. The thing you want to predict is the target."
        },
        {
          "type": "table",
          "head": [
            "Column",
            "Role"
          ],
          "rows": [
            [
              "hours_studied",
              "Feature (input)"
            ],
            [
              "sleep_hours",
              "Feature (input)"
            ],
            [
              "attendance",
              "Feature (input)"
            ],
            [
              "marks",
              "Target (output)"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Important truth: better features give a better model, even with a simple algorithm. Feature engineering means creating new, more useful features from the raw columns."
        }
      ]
    },
    {
      "id": "data",
      "icon": "⚡",
      "title": "Step 2: Start with the Dataset",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "day9_features.py",
          "code": "import pandas as pd\n\ndata = {\n    \"hours_studied\": [2, 4, 1, 5, 3],\n    \"sleep_hours\": [6, 7, 5, 8, 6],\n    \"attendance\": [60, 80, 50, 90, 70],\n    \"marks\": [40, 60, 30, 70, 50]\n}\ndf = pd.DataFrame(data)\nprint(df)",
          "output": "   hours_studied  sleep_hours  attendance  marks\n0              2            6          60     40\n1              4            7          80     60\n2              1            5          50     30\n3              5            8          90     70\n4              3            6          70     50"
        }
      ]
    },
    {
      "id": "create",
      "icon": "⚡",
      "title": "Step 3: Create New Features",
      "meta": "Core skill",
      "blocks": [
        {
          "type": "p",
          "text": "Three kinds of new features, all built only from the INPUT columns:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "new_features.py",
          "code": "# 1. Total effort: combine two columns (attendance / 10 puts it on the same scale as hours)\ndf[\"total_effort\"] = df[\"hours_studied\"] + df[\"attendance\"] / 10\n\n# 2. Ratio: study hours compared with sleep hours\ndf[\"study_sleep_ratio\"] = (df[\"hours_studied\"] / df[\"sleep_hours\"]).round(2)\n\n# 3. Category: group attendance into levels\ndf[\"attendance_level\"] = pd.cut(df[\"attendance\"], bins=[0, 65, 80, 100], labels=[\"Low\", \"Medium\", \"High\"])\n\nprint(df[[\"attendance\", \"total_effort\", \"study_sleep_ratio\", \"attendance_level\"]])",
          "output": "   attendance  total_effort  study_sleep_ratio attendance_level\n0          60           8.0               0.33              Low\n1          80          12.0               0.57           Medium\n2          50           6.0               0.20              Low\n3          90          14.0               0.62             High\n4          70          10.0               0.50           Medium"
        },
        {
          "type": "table",
          "head": [
            "New feature",
            "Idea"
          ],
          "rows": [
            [
              "total_effort",
              "Study and attendance together describe effort"
            ],
            [
              "study_sleep_ratio",
              "How much a student studies relative to resting"
            ],
            [
              "attendance_level",
              "Turns a number into a group: Low, Medium, High"
            ]
          ]
        }
      ]
    },
    {
      "id": "leak",
      "icon": "🚨",
      "title": "Danger: Target Leakage",
      "meta": "The most common feature engineering mistake",
      "blocks": [
        {
          "type": "p",
          "text": "The original task also creates efficiency = marks / hours_studied and a performance label from marks. Look at what they use:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "leakage.py",
          "code": "df[\"efficiency\"] = df[\"marks\"] / df[\"hours_studied\"]\ndf[\"performance\"] = df[\"marks\"].apply(lambda x: \"High\" if x > 60 else \"Low\")\nprint(df[[\"hours_studied\", \"marks\", \"efficiency\", \"performance\"]])\n\n# A brand new student: we know their inputs, but NOT their marks yet\nnew_student = pd.DataFrame({\"hours_studied\": [4.5], \"sleep_hours\": [7], \"attendance\": [75]})\ntry:\n    new_student[\"efficiency\"] = new_student[\"marks\"] / new_student[\"hours_studied\"]\nexcept KeyError:\n    print(\"\\nCannot compute efficiency: a new student has no marks yet!\")",
          "output": "   hours_studied  marks  efficiency performance\n0              2     40   20.000000         Low\n1              4     60   15.000000         Low\n2              1     30   30.000000         Low\n3              5     70   14.000000        High\n4              3     50   16.666667         Low\n\nCannot compute efficiency: a new student has no marks yet!"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "efficiency and performance are built from marks, the very thing we want to predict. That is called target leakage: the model would be handed the answer. It looks brilliant in training and is useless in real life, because a new student has no marks yet."
        },
        {
          "type": "table",
          "head": [
            "Ask yourself",
            "Safe feature",
            "Leaky feature"
          ],
          "rows": [
            [
              "Can I compute it BEFORE the answer is known?",
              "Yes",
              "No"
            ],
            [
              "Does the formula use the target column?",
              "No",
              "Yes"
            ],
            [
              "Example",
              "hours / sleep",
              "marks / hours"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Rule: a feature may only use information you would really have when making the prediction. Use efficiency and performance as analysis columns or as targets, never as inputs for predicting marks. Today's mini project therefore swaps efficiency for a safe feature."
        }
      ]
    },
    {
      "id": "help",
      "icon": "🔬",
      "title": "Does a Feature Help?",
      "meta": "Think like an engineer: test it",
      "blocks": [
        {
          "type": "p",
          "text": "Five students cannot prove anything. Use 30 students where marks depend on how many hours a student studies AND how often they attend. Test each feature by averaging the test error over 10 splits:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "test_features.py",
          "code": "import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error\n\ndata30 = {\n    \"hours_studied\": [2.8, 8.0, 2.7, 8.3, 4.9, 5.9, 7.1, 5.1, 3.4, 2.5, 1.6, 6.9, 4.5, 2.3, 8.0, 3.2, 4.3, 3.4, 6.0, 5.6, 5.8, 3.1, 3.3, 3.0, 3.6, 2.2, 2.3, 8.7, 8.7, 2.5],\n    \"sleep_hours\": [4.1, 5.0, 7.5, 7.9, 4.1, 6.9, 4.0, 6.6, 7.2, 8.9, 5.3, 8.0, 8.4, 8.6, 4.0, 6.3, 8.9, 6.0, 8.1, 6.7, 7.9, 6.4, 4.1, 4.4, 4.6, 5.3, 8.8, 7.2, 8.1, 6.8],\n    \"attendance\": [82, 91, 96, 96, 91, 55, 68, 52, 77, 90, 53, 59, 68, 62, 90, 68, 82, 75, 79, 97, 97, 56, 92, 67, 55, 69, 76, 98, 69, 51],\n    \"marks\": [42, 76, 41, 89, 50, 55, 61, 46, 45, 45, 34, 59, 52, 42, 79, 44, 59, 47, 67, 69, 68, 39, 43, 36, 41, 35, 45, 87, 72, 39]\n}\ndf30 = pd.DataFrame(data30)\n\n# Candidate features (is_high is built from marks: a LEAK, included only for the demo)\ndf30[\"total_effort\"] = df30[\"hours_studied\"] + df30[\"attendance\"] / 10\ndf30[\"study_sleep_ratio\"] = (df30[\"hours_studied\"] / df30[\"sleep_hours\"]).round(2)\ndf30[\"effective_hours\"] = (df30[\"hours_studied\"] * df30[\"attendance\"] / 100).round(2)\ndf30[\"is_high\"] = (df30[\"marks\"] > 60).astype(int)\n\ndef avg_test_mae(features):\n    errors = []\n    for seed in range(10):\n        X_train, X_test, y_train, y_test = train_test_split(\n            df30[features], df30[\"marks\"], test_size=0.25, random_state=seed)\n        model = LinearRegression().fit(X_train, y_train)\n        errors.append(mean_absolute_error(y_test, model.predict(X_test)))\n    return np.mean(errors)\n\nbase = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\nexperiments = [\n    (\"Raw features only\", base),\n    (\"+ total_effort\", base + [\"total_effort\"]),\n    (\"+ study_sleep_ratio\", base + [\"study_sleep_ratio\"]),\n    (\"+ effective_hours\", base + [\"effective_hours\"]),\n    (\"+ is_high (LEAK!)\", base + [\"is_high\"]),\n]\nfor name, feats in experiments:\n    print(f\"{name:22} avg test MAE: {avg_test_mae(feats):.2f}\")",
          "output": "Raw features only      avg test MAE: 3.99\n+ total_effort         avg test MAE: 3.99\n+ study_sleep_ratio    avg test MAE: 4.46\n+ effective_hours      avg test MAE: 2.68\n+ is_high (LEAK!)      avg test MAE: 3.26"
        },
        {
          "type": "table",
          "head": [
            "Feature",
            "Result",
            "Why"
          ],
          "rows": [
            [
              "total_effort",
              "No change",
              "It is just hours + attendance/10, a straight-line mix the linear model can already build. No new information."
            ],
            [
              "study_sleep_ratio",
              "Slightly worse",
              "It adds noise: sleep has little to do with how marks are earned in this data."
            ],
            [
              "effective_hours",
              "Clearly better ✅",
              "hours x attendance captures that studying only pays off when you also attend. This is genuinely new information."
            ],
            [
              "is_high",
              "Better, but cheating ❌",
              "It is built from marks. Never use it for prediction."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "A new feature helps only when it adds information the model could not easily build itself, such as a product, ratio or category that reflects how the world really works."
        }
      ]
    },
    {
      "id": "scale",
      "icon": "⚡",
      "title": "Step 4: Feature Scaling",
      "meta": "Important, but not magic",
      "blocks": [
        {
          "type": "p",
          "text": "Features live on different scales: hours are 1 to 9, attendance is 50 to 100. StandardScaler rewrites each feature to mean 0 and spread (standard deviation) 1. Do it correctly: split first, learn the scaling from the TRAINING rows only, then apply the same numbers to the test rows."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "scaling.py",
          "code": "from sklearn.preprocessing import StandardScaler\n\nraw = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\ntrain, test = train_test_split(df30, test_size=0.25, random_state=42)\n\nscaler = StandardScaler()\nX_train_s = scaler.fit_transform(train[raw])   # learn mean and spread from TRAIN only\nX_test_s = scaler.transform(test[raw])         # apply the same numbers to TEST\n\nprint(\"Scaled train means:\", X_train_s.mean(axis=0).round(2) + 0.0)\nprint(\"Scaled train spread:\", X_train_s.std(axis=0).round(2))\n\nraw_model = LinearRegression().fit(train[raw], train[\"marks\"])\nscaled_model = LinearRegression().fit(X_train_s, train[\"marks\"])\n\ndiff = np.abs(raw_model.predict(test[raw]) - scaled_model.predict(X_test_s)).max()\nprint(\"\\nLargest prediction difference, raw vs scaled:\", round(diff, 6))\n\nprint(\"\\nSlopes on scaled data (bigger = more important):\")\nprint(pd.Series(scaled_model.coef_, index=raw).round(2))",
          "output": "Scaled train means: [0. 0. 0.]\nScaled train spread: [1. 1. 1.]\n\nLargest prediction difference, raw vs scaled: 0.0\n\nSlopes on scaled data (bigger = more important):\nhours_studied    12.57\nsleep_hours       2.80\nattendance        4.24\ndtype: float64"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "The original task scaled the whole table before splitting and overwrote the original columns. Fitting the scaler on all rows lets test information leak into training. Always fit_transform on train and only transform on test."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Surprise: predictions are identical with or without scaling for Linear Regression and Decision Trees. Scaling matters for distance-based and gradient-based models (KNN, SVM, neural networks, regularized models). It also makes slopes comparable: here hours (12.6) matters far more than attendance (4.2) or sleep (2.8)."
        }
      ]
    },
    {
      "id": "categories",
      "icon": "🏷️",
      "title": "Categorical Features",
      "meta": "Turning groups into numbers",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "categories.py",
          "code": "df30[\"attendance_level\"] = pd.cut(df30[\"attendance\"], bins=[0, 65, 80, 100], labels=[\"Low\", \"Medium\", \"High\"])\n\nprint(\"Average marks by attendance level:\")\nprint(df30.groupby(\"attendance_level\", observed=True)[\"marks\"].mean().round(1))\n\n# Models need numbers: one column per level (one-hot encoding)\nlevels = pd.get_dummies(df30[\"attendance_level\"], prefix=\"att\").astype(int)\nprint()\nprint(levels.head(4))\n\ndf30 = pd.concat([df30, levels], axis=1)\n\nprint()\nprint(\"Raw features, avg test MAE:\", round(avg_test_mae(base), 2))\nprint(\"Raw + attendance levels, avg test MAE:\", round(avg_test_mae(base + list(levels.columns)), 2))",
          "output": "Average marks by attendance level:\nattendance_level\nLow       44.4\nMedium    50.4\nHigh      62.3\nName: marks, dtype: float64\n\n   att_Low  att_Medium  att_High\n0        0           0         1\n1        0           0         1\n2        0           0         1\n3        0           0         1\n\nRaw features, avg test MAE: 3.99\nRaw + attendance levels, avg test MAE: 4.27"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "One-hot encoding turns Low / Medium / High into three 0/1 columns. Groups are useful for explaining data, but they throw away detail: an attendance of 52 and 65 both become Low. On this data the raw number predicts better, so keep the group only if it helps on test data."
        }
      ]
    },
    {
      "id": "select",
      "icon": "⚡",
      "title": "Step 5: Select Important Features",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "select.py",
          "code": "X_cols = [\"hours_studied\", \"sleep_hours\", \"attendance\", \"effective_hours\"]\nprint(\"Correlation with marks:\")\nprint(df30[X_cols + [\"marks\"]].corr()[\"marks\"].drop(\"marks\").round(2).sort_values(ascending=False))\n\nX = df30[X_cols]\ny = df30[\"marks\"]\nprint(\"\\nX shape:\", X.shape)",
          "output": "Correlation with marks:\neffective_hours    0.97\nhours_studied      0.93\nattendance         0.55\nsleep_hours        0.18\nName: marks, dtype: float64\n\nX shape: (30, 4)"
        },
        {
          "type": "p",
          "text": "Correlation shows which features move with marks. The best feature here is effective_hours, the one we engineered. The final decision still comes from test error (previous step), not correlation alone."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Student Analyzer v3 (Smart Version)",
      "blocks": [
        {
          "type": "p",
          "text": "Build the full smart pipeline: engineered features, scaled data (fitted on train only), a model and a prediction function. Safe features only, so efficiency is replaced by effective_hours:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "analyzer_v3.py",
          "code": "def make_features(d):\n    out = d[[\"hours_studied\", \"sleep_hours\", \"attendance\"]].copy()\n    out[\"total_effort\"] = d[\"hours_studied\"] + d[\"attendance\"] / 10\n    out[\"effective_hours\"] = (d[\"hours_studied\"] * d[\"attendance\"] / 100).round(2)\n    return out\n\ntrain, test = train_test_split(df30, test_size=0.25, random_state=42)\nX_train, X_test = make_features(train), make_features(test)\n\nscaler = StandardScaler().fit(X_train)\nsmart_model = LinearRegression().fit(scaler.transform(X_train), train[\"marks\"])\n\nbaseline = LinearRegression().fit(train[raw], train[\"marks\"])\n\nsmart_mae = mean_absolute_error(test[\"marks\"], smart_model.predict(scaler.transform(X_test)))\nbase_mae = mean_absolute_error(test[\"marks\"], baseline.predict(test[raw]))\nprint(\"Test MAE -> raw features:\", round(base_mae, 2), \"| engineered features:\", round(smart_mae, 2))\n\ndef predict_marks(hours, sleep, attendance):\n    new = pd.DataFrame({\"hours_studied\": [hours], \"sleep_hours\": [sleep], \"attendance\": [attendance]})\n    features = scaler.transform(make_features(new))      # same steps as training\n    return round(min(max(smart_model.predict(features)[0], 0), 100), 1)\n\nfor hours, sleep, attendance in [(2, 5, 55), (5, 7, 80), (8, 8, 95)]:\n    print(f\"{hours} h, {sleep} h sleep, {attendance}% attendance -> {predict_marks(hours, sleep, attendance)} marks\")",
          "output": "Test MAE -> raw features: 2.79 | engineered features: 2.2\n2 h, 5 h sleep, 55% attendance -> 34.3 marks\n5 h, 7 h sleep, 80% attendance -> 56.9 marks\n8 h, 8 h sleep, 95% attendance -> 86.4 marks"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Keeping the feature steps in make_features() guarantees new students go through exactly the same transformation as the training data. This habit prevents many real-world bugs."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "total_effort is in the model as the task asked, but it adds nothing new (a straight-line mix of existing columns). effective_hours is the one doing the work."
        }
      ]
    },
    {
      "id": "challenge",
      "icon": "💡",
      "title": "Challenge: Create Your Own Feature",
      "meta": "Very important",
      "blocks": [
        {
          "type": "p",
          "text": "Examples to try: study_sleep_ratio and attendance_level (you saw both). Here are two more ideas, tested the same way: hours squared (does more study give extra returns?) and rest_gap (distance from 7 hours of sleep):"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "own_features.py",
          "code": "df30[\"hours_squared\"] = df30[\"hours_studied\"] ** 2\ndf30[\"rest_gap\"] = (df30[\"sleep_hours\"] - 7).abs()\n\nmore = [\n    (\"Raw features only\", base),\n    (\"+ hours_squared\", base + [\"hours_squared\"]),\n    (\"+ rest_gap\", base + [\"rest_gap\"]),\n    (\"+ effective_hours + hours_squared\", base + [\"effective_hours\", \"hours_squared\"]),\n]\nfor name, feats in more:\n    print(f\"{name:34} avg test MAE: {avg_test_mae(feats):.2f}\")",
          "output": "Raw features only                  avg test MAE: 3.99\n+ hours_squared                    avg test MAE: 4.13\n+ rest_gap                         avg test MAE: 4.21\n+ effective_hours + hours_squared  avg test MAE: 2.76"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Test every idea. Most of your own features will NOT help. Finding the few that do, usually by understanding how the real world works, is the skill."
        }
      ]
    },
    {
      "id": "think",
      "icon": "🧠",
      "title": "Think Like an Engineer",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Question",
            "Example from today"
          ],
          "rows": [
            [
              "Does this feature help prediction?",
              "effective_hours: yes (error 3.99 to 2.68). total_effort: no."
            ],
            [
              "Is it logical?",
              "effective_hours: studying only counts when you attend. efficiency (marks / hours): not usable at all."
            ],
            [
              "Does it add new information?",
              "Only features that are not a simple mix of existing columns can improve a linear model."
            ],
            [
              "Could I compute it for a new student?",
              "If it needs the answer (marks), it is a leak."
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "This thinking is the real ML skill. Top ML engineers spend more time on features than on models."
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
            "Raw data is weak, engineered data is powerful",
            "How to create combined, ratio and category features",
            "Why features built from the target leak the answer",
            "How to scale correctly: fit on train only",
            "How to test whether a feature really helps"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Student Analyzer v3 (Smart Version)",
    "file": "day9_final.py",
    "description": "One program combining Day 9: safe engineered features in one reusable function, a fair test of whether they help, scaling fitted on train only, feature importance from scaled slopes and a prediction function for new students.",
    "concepts": [
      "feature engineering",
      "target leakage",
      "StandardScaler",
      "fit on train only",
      "one-hot / categories",
      "feature importance",
      "make_features()"
    ],
    "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_absolute_error\n\n# 1. DATA: 30 students\ndata = {\n    \"hours_studied\": [2.8, 8.0, 2.7, 8.3, 4.9, 5.9, 7.1, 5.1, 3.4, 2.5, 1.6, 6.9, 4.5, 2.3, 8.0, 3.2, 4.3, 3.4, 6.0, 5.6, 5.8, 3.1, 3.3, 3.0, 3.6, 2.2, 2.3, 8.7, 8.7, 2.5],\n    \"sleep_hours\": [4.1, 5.0, 7.5, 7.9, 4.1, 6.9, 4.0, 6.6, 7.2, 8.9, 5.3, 8.0, 8.4, 8.6, 4.0, 6.3, 8.9, 6.0, 8.1, 6.7, 7.9, 6.4, 4.1, 4.4, 4.6, 5.3, 8.8, 7.2, 8.1, 6.8],\n    \"attendance\": [82, 91, 96, 96, 91, 55, 68, 52, 77, 90, 53, 59, 68, 62, 90, 68, 82, 75, 79, 97, 97, 56, 92, 67, 55, 69, 76, 98, 69, 51],\n    \"marks\": [42, 76, 41, 89, 50, 55, 61, 46, 45, 45, 34, 59, 52, 42, 79, 44, 59, 47, 67, 69, 68, 39, 43, 36, 41, 35, 45, 87, 72, 39]\n}\ndf = pd.DataFrame(data)\nprint(\"=== STUDENT ANALYZER v3 (SMART VERSION) ===\")\nprint(df.head(3))\n\n# 2. FEATURE ENGINEERING (inputs only: no feature may use marks!)\nRAW = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\n\ndef make_features(d):\n    out = d[RAW].copy()\n    out[\"total_effort\"] = d[\"hours_studied\"] + d[\"attendance\"] / 10\n    out[\"effective_hours\"] = (d[\"hours_studied\"] * d[\"attendance\"] / 100).round(2)\n    return out\n\n# 3. DOES FEATURE ENGINEERING HELP? average test error over 10 splits\ndef avg_test_mae(use_engineered):\n    errors = []\n    for seed in range(10):\n        train, test = train_test_split(df, test_size=0.25, random_state=seed)\n        X_train = make_features(train) if use_engineered else train[RAW]\n        X_test = make_features(test) if use_engineered else test[RAW]\n        model = LinearRegression().fit(X_train, train[\"marks\"])\n        errors.append(mean_absolute_error(test[\"marks\"], model.predict(X_test)))\n    return np.mean(errors)\n\nprint(\"\\nAverage test MAE over 10 splits:\")\nprint(\"  Raw features       :\", round(avg_test_mae(False), 2))\nprint(\"  Engineered features:\", round(avg_test_mae(True), 2))\n\n# 4. FINAL MODEL: scale using TRAIN rows only\ntrain, test = train_test_split(df, test_size=0.25, random_state=42)\nX_train, X_test = make_features(train), make_features(test)\n\nscaler = StandardScaler().fit(X_train)\nmodel = LinearRegression().fit(scaler.transform(X_train), train[\"marks\"])\n\nmae = mean_absolute_error(test[\"marks\"], model.predict(scaler.transform(X_test)))\nprint(\"\\nFinal model test MAE:\", round(mae, 2), \"marks\")\n\n# 5. WHICH FEATURES MATTER? Read slopes on the RAW features, scaled\n# (overlapping features share credit, so engineered columns are hard to read this way)\nraw_scaler = StandardScaler().fit(train[RAW])\nraw_model = LinearRegression().fit(raw_scaler.transform(train[RAW]), train[\"marks\"])\nprint(\"\\nFeature importance (scaled slopes, raw features):\")\nprint(pd.Series(raw_model.coef_, index=RAW).round(2).sort_values(ascending=False))\n\n# 6. PREDICT NEW STUDENTS: same steps as training\ndef predict_marks(hours, sleep, attendance):\n    new = pd.DataFrame({\"hours_studied\": [hours], \"sleep_hours\": [sleep], \"attendance\": [attendance]})\n    features = scaler.transform(make_features(new))\n    return round(min(max(model.predict(features)[0], 0), 100), 1)\n\nprint(\"\\nPredictions:\")\nfor hours, sleep, attendance in [(2, 5, 55), (5, 7, 80), (8, 8, 95)]:\n    print(f\"  {hours} h, {sleep} h sleep, {attendance}% attendance -> {predict_marks(hours, sleep, attendance)} marks\")",
    "output": "=== STUDENT ANALYZER v3 (SMART VERSION) ===\n   hours_studied  sleep_hours  attendance  marks\n0            2.8          4.1          82     42\n1            8.0          5.0          91     76\n2            2.7          7.5          96     41\n\nAverage test MAE over 10 splits:\n  Raw features       : 3.99\n  Engineered features: 2.68\n\nFinal model test MAE: 2.2 marks\n\nFeature importance (scaled slopes, raw features):\nhours_studied    12.57\nattendance        4.24\nsleep_hours       2.80\ndtype: float64\n\nPredictions:\n  2 h, 5 h sleep, 55% attendance -> 34.3 marks\n  5 h, 7 h sleep, 80% attendance -> 56.9 marks\n  8 h, 8 h sleep, 95% attendance -> 86.4 marks"
  },
  "practice": [
    {
      "title": "House Feature Factory",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Create new features for a house price table and find out which ones relate most to the price.",
      "tasks": [
        "Create the DataFrame",
        "Create area = length * width",
        "Create rooms_per_100sqft = rooms / area * 100 (round to 2)",
        "Create age_group: New if age is below 10, else Old",
        "Print each numeric feature's correlation with price (sorted, 2 decimals) and name the best one"
      ],
      "hint": "Correlation: df[[...numeric columns..., \"price\"]].corr()[\"price\"].drop(\"price\"). Sort with .sort_values(ascending=False).",
      "starter": "import pandas as pd\n\ndata = {\n    \"length\": [44, 23, 28, 20, 41, 39, 30, 30, 41, 58, 52, 40],\n    \"width\": [27, 22, 29, 39, 32, 37, 17, 17, 16, 34, 20, 23],\n    \"rooms\": [2, 3, 1, 4, 1, 4, 2, 4, 1, 5, 2, 5],\n    \"age\": [28, 23, 22, 0, 0, 9, 18, 20, 5, 24, 24, 7],\n    \"price\": [48.4, 28.8, 33.4, 52.4, 53.7, 75.5, 27.1, 36.1, 29.9, 95.1, 40.0, 58.4]\n}\n\n# TODO 1: DataFrame\n\n# TODO 2: area = length * width\n\n# TODO 3: rooms_per_100sqft\n\n# TODO 4: age_group (New if age < 10)\n\n# TODO 5: correlations with price, best feature",
      "solution": "import pandas as pd\n\ndata = {\n    \"length\": [44, 23, 28, 20, 41, 39, 30, 30, 41, 58, 52, 40],\n    \"width\": [27, 22, 29, 39, 32, 37, 17, 17, 16, 34, 20, 23],\n    \"rooms\": [2, 3, 1, 4, 1, 4, 2, 4, 1, 5, 2, 5],\n    \"age\": [28, 23, 22, 0, 0, 9, 18, 20, 5, 24, 24, 7],\n    \"price\": [48.4, 28.8, 33.4, 52.4, 53.7, 75.5, 27.1, 36.1, 29.9, 95.1, 40.0, 58.4]\n}\ndf = pd.DataFrame(data)\n\ndf[\"area\"] = df[\"length\"] * df[\"width\"]\ndf[\"rooms_per_100sqft\"] = (df[\"rooms\"] / df[\"area\"] * 100).round(2)\ndf[\"age_group\"] = df[\"age\"].apply(lambda a: \"New\" if a < 10 else \"Old\")\n\nprint(df[[\"length\", \"width\", \"area\", \"rooms_per_100sqft\", \"age_group\"]].head(3))\n\nnumeric = [\"length\", \"width\", \"rooms\", \"age\", \"area\", \"rooms_per_100sqft\", \"price\"]\ncorr = df[numeric].corr()[\"price\"].drop(\"price\").round(2).sort_values(ascending=False)\nprint()\nprint(corr)\nprint(\"\\nBest feature:\", corr.index[0])",
      "output": "   length  width  area  rooms_per_100sqft age_group\n0      44     27  1188               0.17       Old\n1      23     22   506               0.59       Old\n2      28     29   812               0.12       Old\n\narea                 0.91\nwidth                0.70\nrooms                0.63\nlength               0.57\nage                 -0.10\nrooms_per_100sqft   -0.16\nName: price, dtype: float64\n\nBest feature: area",
      "note": "The engineered feature area beats length and width on their own, because price depends on total size, not on one side. rooms_per_100sqft is built only from inputs, so it is safe, but a weak correlation (-0.16) tells you it is unlikely to help."
    },
    {
      "title": "Leakage Detective",
      "level": "Medium",
      "file": "practice2.py",
      "description": "A taxi dataset contains a suspicious column. Prove it leaks, then build a fair model with correct scaling.",
      "tasks": [
        "Create the DataFrame. fare_rounded is the fare rounded to the nearest 10",
        "Write avg_mae(features) that averages the test MAE of LinearRegression over 10 splits",
        "Compare [distance_km, minutes] against [distance_km, minutes, fare_rounded]",
        "Say which column is leaky and why it cannot be used for a new trip",
        "Scale [distance_km, minutes] correctly (fit on train only, random_state=42) and print the scaled train means and spreads"
      ],
      "hint": "The leaky column is derived from the target (fare). For scaling: scaler.fit_transform on train, scaler.transform on test.",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"distance_km\": [13.2, 14.6, 13.2, 8.4, 4.3, 1.2, 7.0, 6.6, 8.3, 7.7, 8.8, 8.6, 11.7, 11.0, 9.7, 7.0, 5.0, 14.6, 5.7, 4.1],\n    \"minutes\": [8, 44, 10, 18, 8, 14, 21, 41, 19, 44, 6, 19, 20, 36, 43, 18, 22, 16, 37, 31],\n    \"fare\": [206, 285, 226, 164, 98, 75, 155, 185, 173, 196, 142, 166, 199, 235, 234, 151, 132, 244, 193, 153],\n    \"fare_rounded\": [210, 280, 230, 160, 100, 80, 160, 180, 170, 200, 140, 170, 200, 240, 230, 150, 130, 240, 190, 150]\n}\n\n# TODO 1: DataFrame\n\n# TODO 2: avg_mae(features) over 10 splits\n\n# TODO 3: compare honest features and honest + fare_rounded\n\n# TODO 4: which column leaks?\n\n# TODO 5: scaling (fit on train only)",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"distance_km\": [13.2, 14.6, 13.2, 8.4, 4.3, 1.2, 7.0, 6.6, 8.3, 7.7, 8.8, 8.6, 11.7, 11.0, 9.7, 7.0, 5.0, 14.6, 5.7, 4.1],\n    \"minutes\": [8, 44, 10, 18, 8, 14, 21, 41, 19, 44, 6, 19, 20, 36, 43, 18, 22, 16, 37, 31],\n    \"fare\": [206, 285, 226, 164, 98, 75, 155, 185, 173, 196, 142, 166, 199, 235, 234, 151, 132, 244, 193, 153],\n    \"fare_rounded\": [210, 280, 230, 160, 100, 80, 160, 180, 170, 200, 140, 170, 200, 240, 230, 150, 130, 240, 190, 150]\n}\ndf = pd.DataFrame(data)\n\ndef avg_mae(features):\n    errors = []\n    for seed in range(10):\n        X_train, X_test, y_train, y_test = train_test_split(df[features], df[\"fare\"], test_size=0.25, random_state=seed)\n        model = LinearRegression().fit(X_train, y_train)\n        errors.append(mean_absolute_error(y_test, model.predict(X_test)))\n    return np.mean(errors)\n\nhonest = [\"distance_km\", \"minutes\"]\nprint(\"Honest features avg MAE:\", round(avg_mae(honest), 2))\nprint(\"With fare_rounded avg MAE:\", round(avg_mae(honest + [\"fare_rounded\"]), 2))\nprint(\"Leaky column: fare_rounded (it is the target rounded)\")\n\nX_train, X_test, y_train, y_test = train_test_split(df[honest], df[\"fare\"], test_size=0.25, random_state=42)\nscaler = StandardScaler()\nX_train_s = scaler.fit_transform(X_train)\nX_test_s = scaler.transform(X_test)\nprint(\"Scaled train means:\", X_train_s.mean(axis=0).round(2) + 0.0)\nprint(\"Scaled train spread:\", X_train_s.std(axis=0).round(2))",
      "output": "Honest features avg MAE: 8.82\nWith fare_rounded avg MAE: 4.23\nLeaky column: fare_rounded (it is the target rounded)\nScaled train means: [0. 0.]\nScaled train spread: [1. 1.]",
      "note": "fare_rounded looks like a wonderful feature (the error drops a lot) but it is just the answer with the last digit removed. A new trip has no fare until it is finished, so you could never compute it when you need the prediction. Whenever a result looks too good to be true after adding a feature, suspect leakage first."
    }
  ],
  "checklist": [
    "Understood features vs target",
    "Created combined, ratio and category features",
    "Spotted target leakage",
    "Tested whether features help on test data",
    "Scaled with fit on train only",
    "Encoded a category with one-hot",
    "Built Student Analyzer v3"
  ],
  "quiz": [
    {
      "q": "Why is efficiency = marks / hours_studied a bad feature for predicting marks?",
      "options": [
        "It is too small",
        "It uses the target (marks), so it leaks the answer and cannot be computed for new students",
        "Division is not allowed",
        "It has missing values"
      ],
      "answer": 1,
      "why": "A feature must only use information available at prediction time. A new student has no marks yet."
    },
    {
      "q": "Where should StandardScaler learn its mean and spread from?",
      "options": [
        "The whole dataset",
        "The test rows",
        "The training rows only",
        "The target column"
      ],
      "answer": 2,
      "why": "Fitting on all rows leaks test information into training. fit on train, then transform both."
    },
    {
      "q": "Which new feature adds NO new information for a linear model?",
      "options": [
        "hours_studied * attendance / 100",
        "hours_studied + attendance / 10",
        "A feature built from a real-world interaction",
        "None of these"
      ],
      "answer": 1,
      "why": "A plain sum of existing columns is a straight-line mix the linear model can already create."
    },
    {
      "q": "What does pd.get_dummies do to a column with Low / Medium / High?",
      "options": [
        "Deletes it",
        "Makes one 0/1 column per level",
        "Sorts it",
        "Scales it"
      ],
      "answer": 1,
      "why": "One-hot encoding turns each category into its own 0/1 column so models can use it."
    }
  ]
},

// DAY 10 snippet. In course-data.js: add a comma after Day 9's closing }, then paste this object. No images for this day.
{
  "day": 10,
  "title": "Decision Trees: Your First Smart Model",
  "subtitle": "Move beyond straight lines: build a Decision Tree, read its if-else rules and learn why model complexity and overfitting matter.",
  "level": "Beginner",
  "duration": "2 hours",
  "tags": [
    "Decision Tree",
    "Non-linear",
    "max_depth",
    "Overfitting",
    "plot_tree"
  ],
  "goals": [
    "Understand non-linear ML models",
    "Build a Decision Tree model",
    "See how ML makes if-else decisions like humans"
  ],
  "sections": [
    {
      "id": "what",
      "icon": "🧠",
      "title": "Step 1: What is a Decision Tree?",
      "meta": "A model that follows if-else rules",
      "blocks": [
        {
          "type": "p",
          "text": "A Decision Tree learns a set of yes/no questions from the data, just like a person would reason:"
        },
        {
          "type": "code",
          "lang": "text",
          "title": "The idea (pseudocode)",
          "code": "IF hours > 4:\n    predict High Marks\nELSE:\n    predict Low Marks"
        },
        {
          "type": "p",
          "text": "It builds a tree of such questions. Each question is a split, and the answers at the bottom (the leaves) are the predictions."
        },
        {
          "type": "table",
          "head": [
            "Linear Regression",
            "Decision Tree"
          ],
          "rows": [
            [
              "One straight-line equation",
              "Many if-else rules"
            ],
            [
              "Can continue the line beyond the data",
              "Never predicts outside the values it has seen"
            ],
            [
              "Hard to see why it predicted something",
              "Easy to read and explain"
            ],
            [
              "Best when the pattern is a straight line",
              "Best when the pattern has steps, bends or interactions"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Trees are easy to understand and handle complex patterns. They are not automatically better than linear models. You will see on real examples today when each one wins."
        }
      ]
    },
    {
      "id": "data",
      "icon": "⚡",
      "title": "Step 2: Prepare the Dataset",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "day10_tree.py",
          "code": "import pandas as pd\n\ndata = {\n    \"hours_studied\": [2, 4, 1, 5, 3],\n    \"sleep_hours\": [6, 7, 5, 8, 6],\n    \"attendance\": [60, 80, 50, 90, 70],\n    \"marks\": [40, 60, 30, 70, 50]\n}\ndf = pd.DataFrame(data)\nprint(df)",
          "output": "   hours_studied  sleep_hours  attendance  marks\n0              2            6          60     40\n1              4            7          80     60\n2              1            5          50     30\n3              5            8          90     70\n4              3            6          70     50"
        }
      ]
    },
    {
      "id": "xy",
      "icon": "⚡",
      "title": "Step 3: Define Features and Target",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "features.py",
          "code": "X = df[[\"hours_studied\", \"sleep_hours\", \"attendance\"]]\ny = df[\"marks\"]\n\nprint(\"X shape:\", X.shape)\nprint(\"Features:\", list(X.columns))",
          "output": "X shape: (5, 3)\nFeatures: ['hours_studied', 'sleep_hours', 'attendance']"
        },
        {
          "type": "p",
          "text": "Three input columns (features) now, one output (target). A tree can use any of them in its questions."
        }
      ]
    },
    {
      "id": "train",
      "icon": "⚡",
      "title": "Step 4: Train a Decision Tree",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "train.py",
          "code": "from sklearn.tree import DecisionTreeRegressor\n\nmodel = DecisionTreeRegressor(random_state=42)\nmodel.fit(X, y)\n\nprint(\"Tree trained\")\nprint(\"Depth:\", model.get_depth(), \"| Leaves:\", model.get_n_leaves())",
          "output": "Tree trained\nDepth: 3 | Leaves: 5"
        },
        {
          "type": "p",
          "text": "Why random_state=42? When several features split the data equally well, the tree picks one at random. Without a fixed seed you can get a different tree on every run:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "random_state.py",
          "code": "from sklearn.tree import export_text\n\nfor seed in [0, 1, 2]:\n    t = DecisionTreeRegressor(random_state=seed).fit(X, y)\n    first_rule = export_text(t, feature_names=list(X.columns)).split(\"\\n\")[0]\n    print(f\"random_state={seed}: first question -> {first_rule}\")",
          "output": "random_state=0: first question -> |--- sleep_hours <= 6.50\nrandom_state=1: first question -> |--- hours_studied <= 2.50\nrandom_state=2: first question -> |--- hours_studied <= 2.50"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Same data, different seeds, different first question. Always set random_state so your results are repeatable."
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
          "code": "new_student = pd.DataFrame({\n    \"hours_studied\": [4],\n    \"sleep_hours\": [7],\n    \"attendance\": [80]\n})\npred = model.predict(new_student)\nprint(\"Predicted Marks:\", pred[0])",
          "output": "Predicted Marks: 60.0"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "This student is exactly student B from the training data (4 hours, 7 sleep, 80 attendance), so the tree returns B's marks: 60. A tree has memorized its training rows. A fair test needs students it has never seen, as in the next step."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "We pass a DataFrame with the same column names instead of [[4, 7, 80]] to avoid scikit-learn's feature-name warning."
        }
      ]
    },
    {
      "id": "compare",
      "icon": "🧠",
      "title": "Step 6: Compare with Linear Regression",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "compare.py",
          "code": "from sklearn.linear_model import LinearRegression\n\nlinear = LinearRegression().fit(X, y)\n\nstudents = pd.DataFrame({\n    \"hours_studied\": [4, 3.5, 6, 8],\n    \"sleep_hours\": [7, 6.5, 8, 9],\n    \"attendance\": [80, 75, 95, 100]\n})\nfeatures = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\nstudents[\"tree\"] = model.predict(students[features])\nstudents[\"linear\"] = linear.predict(students[features]).round(2)\nprint(students)",
          "output": "   hours_studied  sleep_hours  attendance  tree  linear\n0            4.0          7.0          80  60.0   60.00\n1            3.5          6.5          75  50.0   55.00\n2            6.0          8.0          95  70.0   75.05\n3            8.0          9.0         100  70.0   80.20"
        },
        {
          "type": "table",
          "head": [
            "Student",
            "What happened"
          ],
          "rows": [
            [
              "Row 0 (4, 7, 80)",
              "A training row: both models give 60"
            ],
            [
              "Row 1 (3.5, 6.5, 75)",
              "Between known students: the tree picks a leaf (50), the line gives 55"
            ],
            [
              "Rows 2 and 3 (6 and 8 hours)",
              "Beyond the data: the tree is stuck at 70, the highest it has seen. The line keeps rising to 75 and 80"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "A tree predicts the average of the training marks that fall in the same leaf. So it can never go above the highest mark it saw. That is a strength (no impossible values) and a weakness (it cannot extrapolate)."
        }
      ]
    },
    {
      "id": "visualize",
      "icon": "📊",
      "title": "Step 7: Visualize the Tree",
      "meta": "Important: this is how ML \"thinks\"",
      "blocks": [
        {
          "type": "p",
          "text": "First read the rules as text:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "rules.py",
          "code": "print(export_text(model, feature_names=list(X.columns)))",
          "output": "|--- sleep_hours <= 6.50\n|   |--- attendance <= 55.00\n|   |   |--- value: [30.00]\n|   |--- attendance >  55.00\n|   |   |--- attendance <= 65.00\n|   |   |   |--- value: [40.00]\n|   |   |--- attendance >  65.00\n|   |   |   |--- value: [50.00]\n|--- sleep_hours >  6.50\n|   |--- hours_studied <= 4.50\n|   |   |--- value: [60.00]\n|   |--- hours_studied >  4.50\n|   |   |--- value: [70.00]"
        },
        {
          "type": "table",
          "head": [
            "In the printout",
            "Meaning"
          ],
          "rows": [
            [
              "|--- sleep_hours <= 6.50",
              "A question: is sleep 6.5 hours or less?"
            ],
            [
              "Indented lines under it",
              "What to ask next if the answer is yes"
            ],
            [
              "|--- sleep_hours >  6.50",
              "The branch for the answer no"
            ],
            [
              "value: [30.00]",
              "A leaf: the predicted marks"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Now draw it:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "plot_tree.py",
          "code": "from sklearn.tree import plot_tree\nimport matplotlib.pyplot as plt\n\nplt.figure(figsize=(10, 6))\nplot_tree(model, feature_names=list(X.columns), filled=True)\nplt.show()"
        },
        {
          "type": "p",
          "text": "What you should see: boxes with a condition (like sleep_hours <= 6.5), the number of samples and the predicted value. Darker boxes mean higher predicted marks."
        }
      ]
    },
    {
      "id": "overfit",
      "icon": "🧠",
      "title": "Step 8: Overfitting Insight",
      "meta": "The big idea of the day",
      "blocks": [
        {
          "type": "p",
          "text": "A tree with no depth limit keeps splitting until every training student has their own leaf. It memorizes the data. Let us measure this on a bigger dataset, 24 students, with 10 different splits:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "overfitting.py",
          "code": "import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import mean_absolute_error\n\ndata24 = {\n    \"hours_studied\": [1.6, 7.2, 4.5, 6.8, 8.8, 5.3, 5.0, 1.6, 3.1, 5.0, 6.4, 7.4, 4.0, 1.5, 3.3, 8.3, 2.7, 4.6, 8.4, 1.2, 5.8, 8.6, 2.8, 5.4],\n    \"sleep_hours\": [8.5, 4.7, 6.6, 7.8, 7.3, 6.3, 5.0, 6.5, 5.9, 6.4, 5.8, 8.2, 7.8, 5.6, 6.9, 5.4, 6.3, 5.8, 7.3, 5.9, 6.3, 7.6, 6.1, 8.5],\n    \"attendance\": [59, 87, 71, 71, 82, 76, 71, 50, 55, 85, 76, 85, 98, 84, 53, 65, 80, 62, 98, 97, 92, 74, 92, 57],\n    \"marks\": [35, 54, 47, 66, 71, 49, 42, 25, 33, 50, 59, 69, 57, 38, 41, 59, 42, 45, 75, 34, 60, 72, 46, 51]\n}\ndf24 = pd.DataFrame(data24)\nF24 = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\n\ndef train_test_error(make_model):\n    train_errs, test_errs = [], []\n    for seed in range(10):\n        Xtr, Xte, ytr, yte = train_test_split(df24[F24], df24[\"marks\"], test_size=0.25, random_state=seed)\n        m = make_model().fit(Xtr, ytr)\n        train_errs.append(mean_absolute_error(ytr, m.predict(Xtr)))\n        test_errs.append(mean_absolute_error(yte, m.predict(Xte)))\n    return np.mean(train_errs), np.mean(test_errs)\n\nprint(\"Model                train MAE   test MAE\")\ntr, te = train_test_error(LinearRegression)\nprint(f\"{'Linear Regression':20} {tr:9.2f} {te:10.2f}\")\nfor depth in [1, 2, 3, 5, None]:\n    tr, te = train_test_error(lambda: DecisionTreeRegressor(max_depth=depth, random_state=42))\n    print(f\"{'Tree, max_depth=' + str(depth):20} {tr:9.2f} {te:10.2f}\")",
          "output": "Model                train MAE   test MAE\nLinear Regression         2.06       2.62\nTree, max_depth=1         6.38       7.88\nTree, max_depth=2         3.40       6.23\nTree, max_depth=3         1.74       5.89\nTree, max_depth=5         0.19       6.82\nTree, max_depth=None      0.00       6.10"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Look at the unlimited tree (max_depth=None): train error 0.00, it memorized every student, yet test error is 6.10. It also does worse than a depth 3 tree (5.89). That gap between train and test error is called overfitting."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Here Linear Regression wins easily (test 2.62), because these marks really follow a straight-line rule. Model choice depends on the data. Trees do not always beat linear models."
        },
        {
          "type": "table",
          "head": [
            "Max depth",
            "Model",
            "Result"
          ],
          "rows": [
            [
              "Too small (1)",
              "Too simple",
              "Errors high on train AND test (underfitting)"
            ],
            [
              "Medium (2 to 3)",
              "Balanced",
              "Test error is at its best for a tree"
            ],
            [
              "Unlimited",
              "Too complex",
              "Train error 0, test error worse (overfitting)"
            ]
          ]
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Student Predictor v4 (Tree Model)",
      "blocks": [
        {
          "type": "p",
          "text": "Add a Decision Tree, compare it with Linear Regression and show both predictions side by side, trained on a train split of the 24 students:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "predictor_v4.py",
          "code": "Xtr, Xte, ytr, yte = train_test_split(df24[F24], df24[\"marks\"], test_size=0.25, random_state=42)\n\nlin = LinearRegression().fit(Xtr, ytr)\ntree = DecisionTreeRegressor(max_depth=3, random_state=42).fit(Xtr, ytr)\n\nprint(\"Test MAE -> Linear:\", round(mean_absolute_error(yte, lin.predict(Xte)), 2),\n      \"| Tree:\", round(mean_absolute_error(yte, tree.predict(Xte)), 2))\n\ndef predict_both(hours, sleep, attendance):\n    new = pd.DataFrame({\"hours_studied\": [hours], \"sleep_hours\": [sleep], \"attendance\": [attendance]})\n    return round(lin.predict(new)[0], 1), round(tree.predict(new)[0], 1)\n\nprint()\nfor hours, sleep, attendance in [(2, 5, 55), (5, 7, 80), (8, 8, 95)]:\n    l, t = predict_both(hours, sleep, attendance)\n    print(f\"{hours} h, {sleep} h sleep, {attendance}% attendance -> Linear: {l} | Tree: {t}\")",
          "output": "Test MAE -> Linear: 1.8 | Tree: 6.0\n\n2 h, 5 h sleep, 55% attendance -> Linear: 25.8 | Tree: 36.0\n5 h, 7 h sleep, 80% attendance -> Linear: 54.0 | Tree: 45.0\n8 h, 8 h sleep, 95% attendance -> Linear: 75.6 | Tree: 71.5"
        }
      ]
    },
    {
      "id": "challenge",
      "icon": "💡",
      "title": "Challenge: Change the Model Depth",
      "meta": "Very important",
      "blocks": [
        {
          "type": "p",
          "text": "Train trees of different depths on the original 5 students and compare their size and predictions for one unseen student (3.5 hours, 6.5 sleep, 75 attendance):"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "max_depth.py",
          "code": "unseen = pd.DataFrame({\"hours_studied\": [3.5], \"sleep_hours\": [6.5], \"attendance\": [75]})\n\nfor depth in [1, 2, 3, None]:\n    m = DecisionTreeRegressor(max_depth=depth, random_state=42).fit(X, y)\n    print(f\"max_depth={str(depth):4} -> depth used: {m.get_depth()}, leaves: {m.get_n_leaves()}, prediction: {m.predict(unseen)[0]}\")\n\nprint()\nsmall = DecisionTreeRegressor(max_depth=2, random_state=42).fit(X, y)\nprint(export_text(small, feature_names=list(X.columns)))",
          "output": "max_depth=1    -> depth used: 1, leaves: 2, prediction: 40.0\nmax_depth=2    -> depth used: 2, leaves: 4, prediction: 45.0\nmax_depth=3    -> depth used: 3, leaves: 5, prediction: 50.0\nmax_depth=None -> depth used: 3, leaves: 5, prediction: 50.0\n\n|--- sleep_hours <= 6.50\n|   |--- attendance <= 55.00\n|   |   |--- value: [30.00]\n|   |--- attendance >  55.00\n|   |   |--- value: [45.00]\n|--- sleep_hours >  6.50\n|   |--- sleep_hours <= 7.50\n|   |   |--- value: [60.00]\n|   |--- sleep_hours >  7.50\n|   |   |--- value: [70.00]"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Less depth means a simpler model with fewer rules (depth 1 has just 2 leaves and 1 question). More depth means more rules, until the tree has a leaf for every student (5 leaves, a perfect memory of the training data)."
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "In real projects you pick max_depth by comparing test error across depths, exactly like the table in Step 8."
        }
      ]
    },
    {
      "id": "wins",
      "icon": "🌳",
      "title": "When Do Trees Beat Linear Models?",
      "blocks": [
        {
          "type": "p",
          "text": "When the pattern has jumps, such as grade bands: marks stay low, then jump, then jump again as hours increase."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "trees_win.py",
          "code": "step = pd.DataFrame({\n    \"hours\": list(range(1, 16)),\n    \"marks\": [20, 22, 21, 24, 23, 55, 57, 56, 58, 59, 88, 90, 89, 91, 92]\n})\n\ndef avg_test_mae(make_model):\n    errs = []\n    for seed in range(10):\n        Xtr, Xte, ytr, yte = train_test_split(step[[\"hours\"]], step[\"marks\"], test_size=0.25, random_state=seed)\n        m = make_model().fit(Xtr, ytr)\n        errs.append(mean_absolute_error(yte, m.predict(Xte)))\n    return np.mean(errs)\n\nprint(\"Linear Regression test MAE:\", round(avg_test_mae(LinearRegression), 2))\nprint(\"Tree (max_depth=2) test MAE:\", round(avg_test_mae(lambda: DecisionTreeRegressor(max_depth=2, random_state=42)), 2))",
          "output": "Linear Regression test MAE: 6.62\nTree (max_depth=2) test MAE: 4.92"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "A straight line cannot follow the jumps, but a tree makes one rule per band. Smooth straight-line data favours linear models. Step-like or bendy data favours trees. Always compare on test data."
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
            "ML models can follow rules, not only equations",
            "Decision Trees handle non-linear patterns and are easy to read",
            "Trees cannot extrapolate beyond the values they have seen",
            "Model complexity matters: max_depth controls it",
            "Overfitting: train error near 0 with a worse test error"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Student Predictor v4 (Tree Model)",
    "file": "day10_final.py",
    "description": "One program combining Day 10: a Decision Tree and Linear Regression trained on the same split, test errors, the tree's rules, side-by-side predictions, an overfitting check across depths and the tree drawing.",
    "concepts": [
      "DecisionTreeRegressor",
      "max_depth",
      "random_state",
      "export_text",
      "plot_tree",
      "overfitting",
      "linear vs tree"
    ],
    "code": "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeRegressor, export_text, plot_tree\nfrom sklearn.metrics import mean_absolute_error\n\n# 1. DATA: 24 students\ndata = {\n    \"hours_studied\": [1.6, 7.2, 4.5, 6.8, 8.8, 5.3, 5.0, 1.6, 3.1, 5.0, 6.4, 7.4, 4.0, 1.5, 3.3, 8.3, 2.7, 4.6, 8.4, 1.2, 5.8, 8.6, 2.8, 5.4],\n    \"sleep_hours\": [8.5, 4.7, 6.6, 7.8, 7.3, 6.3, 5.0, 6.5, 5.9, 6.4, 5.8, 8.2, 7.8, 5.6, 6.9, 5.4, 6.3, 5.8, 7.3, 5.9, 6.3, 7.6, 6.1, 8.5],\n    \"attendance\": [59, 87, 71, 71, 82, 76, 71, 50, 55, 85, 76, 85, 98, 84, 53, 65, 80, 62, 98, 97, 92, 74, 92, 57],\n    \"marks\": [35, 54, 47, 66, 71, 49, 42, 25, 33, 50, 59, 69, 57, 38, 41, 59, 42, 45, 75, 34, 60, 72, 46, 51]\n}\ndf = pd.DataFrame(data)\nfeatures = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\nX = df[features]\ny = df[\"marks\"]\n\n# 2. SPLIT\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)\nprint(\"=== STUDENT PREDICTOR v4 (TREE MODEL) ===\")\nprint(\"Train rows:\", len(X_train), \"| Test rows:\", len(X_test))\n\n# 3. TRAIN BOTH MODELS\nlinear = LinearRegression().fit(X_train, y_train)\ntree = DecisionTreeRegressor(max_depth=3, random_state=42).fit(X_train, y_train)\nprint(\"Tree depth:\", tree.get_depth(), \"| Leaves:\", tree.get_n_leaves())\n\n# 4. COMPARE ON UNSEEN TEST DATA\nprint(\"\\nTest MAE -> Linear:\", round(mean_absolute_error(y_test, linear.predict(X_test)), 2),\n      \"| Tree:\", round(mean_absolute_error(y_test, tree.predict(X_test)), 2))\n\n# 5. THE TREE'S RULES\nprint(\"\\nTree rules:\")\nprint(export_text(tree, feature_names=features))\n\n# 6. PREDICTIONS FROM BOTH MODELS\nnew_students = pd.DataFrame({\n    \"hours_studied\": [2, 5, 8],\n    \"sleep_hours\": [5, 7, 8],\n    \"attendance\": [55, 80, 95]\n})\nnew_students[\"linear\"] = linear.predict(new_students[features]).round(1)\nnew_students[\"tree\"] = tree.predict(new_students[features]).round(1)\nprint(\"Predictions:\")\nprint(new_students)\n\n# 7. OVERFITTING CHECK: train vs test error by depth (10 splits)\ndef train_test_error(depth):\n    tr, te = [], []\n    for seed in range(10):\n        a, b, c, d = train_test_split(X, y, test_size=0.25, random_state=seed)\n        m = DecisionTreeRegressor(max_depth=depth, random_state=42).fit(a, c)\n        tr.append(mean_absolute_error(c, m.predict(a)))\n        te.append(mean_absolute_error(d, m.predict(b)))\n    return np.mean(tr), np.mean(te)\n\nprint(\"\\nDepth    train MAE   test MAE\")\nfor depth in [1, 2, 3, 5, None]:\n    tr, te = train_test_error(depth)\n    print(f\"{str(depth):5} {tr:10.2f} {te:10.2f}\")\n\n# 8. DRAW THE TREE\nplt.figure(figsize=(12, 6))\nplot_tree(tree, feature_names=features, filled=True)\nplt.title(\"Student Predictor v4: Decision Tree (max_depth=3)\")\nplt.show()",
    "output": "=== STUDENT PREDICTOR v4 (TREE MODEL) ===\nTrain rows: 18 | Test rows: 6\nTree depth: 3 | Leaves: 8\n\nTest MAE -> Linear: 1.8 | Tree: 6.0\n\nTree rules:\n|--- hours_studied <= 5.60\n|   |--- hours_studied <= 2.20\n|   |   |--- sleep_hours <= 6.20\n|   |   |   |--- value: [36.00]\n|   |   |--- sleep_hours >  6.20\n|   |   |   |--- value: [25.00]\n|   |--- hours_studied >  2.20\n|   |   |--- sleep_hours <= 7.35\n|   |   |   |--- value: [45.00]\n|   |   |--- sleep_hours >  7.35\n|   |   |   |--- value: [54.00]\n|--- hours_studied >  5.60\n|   |--- sleep_hours <= 6.80\n|   |   |--- sleep_hours <= 5.05\n|   |   |   |--- value: [54.00]\n|   |   |--- sleep_hours >  5.05\n|   |   |   |--- value: [59.33]\n|   |--- sleep_hours >  6.80\n|   |   |--- attendance <= 72.50\n|   |   |   |--- value: [66.00]\n|   |   |--- attendance >  72.50\n|   |   |   |--- value: [71.50]\n\nPredictions:\n   hours_studied  sleep_hours  attendance  linear  tree\n0              2            5          55    25.8  36.0\n1              5            7          80    54.0  45.0\n2              8            8          95    75.6  71.5\n\nDepth    train MAE   test MAE\n1           6.38       7.88\n2           3.40       6.23\n3           1.74       5.89\n5           0.19       6.82\nNone        0.00       6.10"
  },
  "practice": [
    {
      "title": "Ice Cream Rules",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Train a small tree, read its rules, and compare it with a straight line when sales jump with temperature.",
      "tasks": [
        "Create the DataFrame and train DecisionTreeRegressor(max_depth=2, random_state=42)",
        "Print the tree's rules with export_text",
        "Predict sales for 22 and 40 degrees",
        "Train a LinearRegression model and predict the same two temperatures",
        "Which model can predict above the highest sales seen (330)?"
      ],
      "hint": "Use pd.DataFrame({\"temperature\": [22, 40]}) for predictions. export_text(model, feature_names=[\"temperature\"]).",
      "starter": "import pandas as pd\nfrom sklearn.tree import DecisionTreeRegressor, export_text\nfrom sklearn.linear_model import LinearRegression\n\ndata = {\n    \"temperature\": [15, 18, 21, 24, 27, 30, 33, 36],\n    \"sales\": [100, 105, 110, 200, 210, 215, 320, 330]\n}\n\n# TODO 1: DataFrame, X and y, train the tree (max_depth=2)\n\n# TODO 2: print the rules\n\n# TODO 3: predict for 22 and 40 degrees\n\n# TODO 4: train LinearRegression and predict the same values",
      "solution": "import pandas as pd\nfrom sklearn.tree import DecisionTreeRegressor, export_text\nfrom sklearn.linear_model import LinearRegression\n\ndata = {\n    \"temperature\": [15, 18, 21, 24, 27, 30, 33, 36],\n    \"sales\": [100, 105, 110, 200, 210, 215, 320, 330]\n}\ndf = pd.DataFrame(data)\nX = df[[\"temperature\"]]\ny = df[\"sales\"]\n\ntree = DecisionTreeRegressor(max_depth=2, random_state=42).fit(X, y)\nprint(export_text(tree, feature_names=[\"temperature\"]))\n\nnew = pd.DataFrame({\"temperature\": [22, 40]})\nlinear = LinearRegression().fit(X, y)\n\nnew[\"tree\"] = tree.predict(new).round(1)\nnew[\"linear\"] = linear.predict(new[[\"temperature\"]]).round(1)\nprint(new)",
      "output": "|--- temperature <= 31.50\n|   |--- temperature <= 22.50\n|   |   |--- value: [105.00]\n|   |--- temperature >  22.50\n|   |   |--- value: [208.33]\n|--- temperature >  31.50\n|   |--- temperature <= 34.50\n|   |   |--- value: [320.00]\n|   |--- temperature >  34.50\n|   |   |--- value: [330.00]\n\n   temperature   tree  linear\n0           22  105.0   156.9\n1           40  330.0   371.9",
      "note": "The linear model predicts about 372 sales at 40 degrees, above anything it has seen. The tree stays at 330, the sales of its hottest group. Neither is guaranteed to be right out there. A tree cannot go beyond its training range, a line can, but extrapolation is a guess for both."
    },
    {
      "title": "Depth Detective",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Find the best tree depth for a saturating pattern: marks rise fast, then level off.",
      "tasks": [
        "Create the DataFrame from the data",
        "Write avg_errors(make_model) that returns the average train and test MAE over 10 splits (random_state 0 to 9, test_size=0.25)",
        "Print a table for Linear Regression and trees with max_depth 1, 2, 3, 4, 6 and None",
        "Find the depth with the lowest test error",
        "Explain why train error keeps falling but test error does not"
      ],
      "hint": "Reuse the Step 8 function. Compare the test column, not the train column.",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"hours\": [0.5, 1.1, 1.8, 2.4, 3.0, 3.7, 4.3, 4.9, 5.5, 6.2, 6.8, 7.4, 8.1, 8.7, 9.3, 10.0, 10.6, 11.2, 11.8, 12.5, 13.1, 13.7, 14.4, 15.0],\n    \"marks\": [33, 38, 54, 51, 57, 66, 62, 66, 71, 73, 72, 77, 78, 82, 77, 81, 87, 90, 81, 88, 84, 84, 85, 86]\n}\n\n# TODO 1: DataFrame\n\n# TODO 2: avg_errors(make_model) -> (train MAE, test MAE) averaged over 10 splits\n\n# TODO 3: print the table for linear and trees of depth 1, 2, 3, 4, 6, None\n\n# TODO 4: print the best depth",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"hours\": [0.5, 1.1, 1.8, 2.4, 3.0, 3.7, 4.3, 4.9, 5.5, 6.2, 6.8, 7.4, 8.1, 8.7, 9.3, 10.0, 10.6, 11.2, 11.8, 12.5, 13.1, 13.7, 14.4, 15.0],\n    \"marks\": [33, 38, 54, 51, 57, 66, 62, 66, 71, 73, 72, 77, 78, 82, 77, 81, 87, 90, 81, 88, 84, 84, 85, 86]\n}\ndf = pd.DataFrame(data)\n\ndef avg_errors(make_model):\n    train_errs, test_errs = [], []\n    for seed in range(10):\n        X_train, X_test, y_train, y_test = train_test_split(df[[\"hours\"]], df[\"marks\"], test_size=0.25, random_state=seed)\n        m = make_model().fit(X_train, y_train)\n        train_errs.append(mean_absolute_error(y_train, m.predict(X_train)))\n        test_errs.append(mean_absolute_error(y_test, m.predict(X_test)))\n    return np.mean(train_errs), np.mean(test_errs)\n\nprint(\"Model              train MAE   test MAE\")\ntr, te = avg_errors(LinearRegression)\nprint(f\"{'Linear':16} {tr:10.2f} {te:10.2f}\")\n\nresults = {}\nfor depth in [1, 2, 3, 4, 6, None]:\n    tr, te = avg_errors(lambda: DecisionTreeRegressor(max_depth=depth, random_state=42))\n    results[depth] = te\n    print(f\"{'Tree depth ' + str(depth):16} {tr:10.2f} {te:10.2f}\")\n\nbest = min(results, key=results.get)\nprint(\"\\nBest depth by test error:\", best)",
      "output": "Model              train MAE   test MAE\nLinear                 5.29       5.77\nTree depth 1           6.45       8.49\nTree depth 2           2.98       4.56\nTree depth 3           1.33       3.54\nTree depth 4           0.70       3.71\nTree depth 6           0.06       3.70\nTree depth None        0.00       3.68\n\nBest depth by test error: 3",
      "note": "Deeper trees fit the training noise, so train error keeps shrinking toward 0, but that extra detail does not help on new students, so test error stops improving after about depth 3. Pick the depth where test error is lowest, not train error."
    }
  ],
  "checklist": [
    "Understood what a Decision Tree is",
    "Trained DecisionTreeRegressor with random_state",
    "Compared tree and linear predictions",
    "Read the tree rules and plot",
    "Changed max_depth and saw the effect",
    "Measured overfitting with train vs test error",
    "Built Student Predictor v4"
  ],
  "quiz": [
    {
      "q": "What does a Decision Tree learn?",
      "options": [
        "One straight-line equation",
        "A set of if-else questions that lead to predictions",
        "The average of all rows",
        "A random guess"
      ],
      "answer": 1,
      "why": "A tree learns splits (questions) and predicts the average of the training values in each leaf."
    },
    {
      "q": "Why can a Decision Tree not predict marks above the highest marks it was trained on?",
      "options": [
        "It has a bug",
        "Each leaf predicts an average of training values",
        "Marks are capped at 100",
        "Trees ignore new data"
      ],
      "answer": 1,
      "why": "A leaf's prediction is the mean of its training samples, so predictions stay inside the range of seen values."
    },
    {
      "q": "What does a smaller max_depth do?",
      "options": [
        "Makes the tree simpler with fewer rules",
        "Makes the tree memorize the data",
        "Removes features",
        "Speeds up the internet"
      ],
      "answer": 0,
      "why": "A shallow tree asks fewer questions, which gives a simpler model that is less likely to overfit."
    },
    {
      "q": "Train error 0.00 but a much higher test error means:",
      "options": [
        "The model is perfect",
        "The model is overfitting",
        "The data is clean",
        "The test set is wrong"
      ],
      "answer": 1,
      "why": "The model memorized the training data but does not generalize to new data."
    }
  ]
},

// DAY 11 snippet. In course-data.js: add a comma after Day 10's closing }, then paste this object. No images for this day.
{
  "day": 11,
  "title": "K-Nearest Neighbors (KNN)",
  "subtitle": "Learn by distance: build a KNN model, see why scaling is essential and compare it with Linear Regression and Decision Trees.",
  "level": "Beginner",
  "duration": "2 hours",
  "tags": [
    "KNN",
    "Distance",
    "Scaling",
    "Choosing K",
    "Model Comparison"
  ],
  "goals": [
    "Understand distance-based learning",
    "Build a KNN model",
    "Compare it with Decision Tree and Linear Regression"
  ],
  "sections": [
    {
      "id": "what",
      "icon": "🧠",
      "title": "Step 1: What is KNN?",
      "meta": "K-Nearest Neighbors: look at the closest data points",
      "blocks": [
        {
          "type": "p",
          "text": "KNN predicts by asking: which known students are most similar to this new student? Then it uses their marks."
        },
        {
          "type": "table",
          "head": [
            "Step",
            "What KNN does"
          ],
          "rows": [
            [
              "1",
              "Measure the distance from the new student to every known student"
            ],
            [
              "2",
              "Pick the K closest ones (the neighbors)"
            ],
            [
              "3",
              "Predict the average of their marks"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "No formula and no tree, just distance. It works best when the data is properly scaled and the features are meaningful."
        }
      ]
    },
    {
      "id": "data",
      "icon": "⚡",
      "title": "Step 2: Prepare the Dataset",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "day11_knn.py",
          "code": "import pandas as pd\n\ndata = {\n    \"hours_studied\": [2, 4, 1, 5, 3],\n    \"sleep_hours\": [6, 7, 5, 8, 6],\n    \"attendance\": [60, 80, 50, 90, 70],\n    \"marks\": [40, 60, 30, 70, 50]\n}\ndf = pd.DataFrame(data)\nprint(df)",
          "output": "   hours_studied  sleep_hours  attendance  marks\n0              2            6          60     40\n1              4            7          80     60\n2              1            5          50     30\n3              5            8          90     70\n4              3            6          70     50"
        }
      ]
    },
    {
      "id": "scale",
      "icon": "⚡",
      "title": "Step 3: Feature Scaling",
      "meta": "Very important for KNN",
      "blocks": [
        {
          "type": "p",
          "text": "Distance adds up differences across all features. If one feature has big numbers, it dominates. See how much each feature contributes to the total variation:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "why_scale.py",
          "code": "features = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\nX = df[features]\ny = df[\"marks\"]\n\nvariance = X.var()\nprint(\"Share of total variation per feature:\")\nprint((variance / variance.sum()).round(3))",
          "output": "Share of total variation per feature:\nhours_studied    0.010\nsleep_hours      0.005\nattendance       0.985\ndtype: float64"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Attendance (50 to 90) makes up 98% of the variation, so without scaling KNN would mostly ignore hours and sleep. Scaling puts every feature on the same footing."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "scaling.py",
          "code": "from sklearn.preprocessing import StandardScaler\n\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\nprint(pd.DataFrame(X_scaled, columns=features).round(2))",
          "output": "   hours_studied  sleep_hours  attendance\n0          -0.71        -0.39       -0.71\n1           0.71         0.59        0.71\n2          -1.41        -1.37       -1.41\n3           1.41         1.57        1.41\n4           0.00        -0.39        0.00"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "For this tiny demo we scale all 5 rows. When you test a model, always fit the scaler on the training rows only (you will do that from Step 8)."
        }
      ]
    },
    {
      "id": "train",
      "icon": "⚡",
      "title": "Step 4: Train the KNN Model",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "train.py",
          "code": "from sklearn.neighbors import KNeighborsRegressor\n\nmodel = KNeighborsRegressor(n_neighbors=3)\nmodel.fit(X_scaled, y)\nprint(\"KNN ready. Stored students:\", model.n_samples_fit_)",
          "output": "KNN ready. Stored students: 5"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "fit() does no learning. It only stores the data. That is why KNN is called a lazy learner."
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
          "code": "# A student from the table (4 h, 7 h sleep, 80%) and a new unseen student\nnew_data = pd.DataFrame({\n    \"hours_studied\": [4, 3.5],\n    \"sleep_hours\": [7, 6.5],\n    \"attendance\": [80, 75]\n})\npred = model.predict(scaler.transform(new_data))\nprint(\"Predicted Marks:\", pred)\n\n# Who are the neighbors of the unseen student?\ndistances, indexes = model.kneighbors(scaler.transform(new_data.iloc[[1]]))\nprint(\"\\nNeighbor distances:\", distances[0].round(2))\nprint(\"Neighbor marks    :\", list(y.iloc[indexes[0]]))\nprint(\"Average           :\", y.iloc[indexes[0]].mean())",
          "output": "Predicted Marks: [60. 50.]\n\nNeighbor distances: [0.7  0.7  1.58]\nNeighbor marks    : [60, 50, 40]\nAverage           : 50.0"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "The original task passed a plain list to scaler.transform. That triggers a feature-names warning because the scaler was fitted on a DataFrame. Pass a DataFrame with the same column names."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The first student is already in the table, so he is his own nearest neighbor. For the unseen student, the 3 closest students have marks 60, 50 and 40, and KNN predicts their average: 50."
        }
      ]
    },
    {
      "id": "k",
      "icon": "🧠",
      "title": "Step 6: Understand K",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "k_values.py",
          "code": "unseen = scaler.transform(new_data.iloc[[1]])\n\nfor k in [1, 3, 5]:\n    m = KNeighborsRegressor(n_neighbors=k).fit(X_scaled, y)\n    print(f\"K={k}: predicted marks = {m.predict(unseen)[0]}\")",
          "output": "K=1: predicted marks = 60.0\nK=3: predicted marks = 50.0\nK=5: predicted marks = 50.0"
        },
        {
          "type": "table",
          "head": [
            "K",
            "Behavior"
          ],
          "rows": [
            [
              "K = 1",
              "Copies the single closest student. Very sensitive, can be noisy"
            ],
            [
              "K = 3",
              "Balanced"
            ],
            [
              "K = 5",
              "Averages more students, smoother"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "With only 5 students, K=5 averages EVERY student, so it predicts the overall average (50) for everyone. K must be much smaller than your number of rows."
        }
      ]
    },
    {
      "id": "compare",
      "icon": "📊",
      "title": "Step 7: Compare Three Models",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "compare.py",
          "code": "from sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeRegressor\n\nlinear = LinearRegression().fit(X, y)\ntree = DecisionTreeRegressor(random_state=42).fit(X, y)\nknn = KNeighborsRegressor(n_neighbors=3).fit(X_scaled, y)\n\nstudents = pd.DataFrame({\n    \"hours_studied\": [4, 3.5, 8],\n    \"sleep_hours\": [7, 6.5, 9],\n    \"attendance\": [80, 75, 100]\n})\nresult = students.copy()\nresult[\"linear\"] = linear.predict(students[features]).round(1)\nresult[\"tree\"] = tree.predict(students[features])\nresult[\"knn\"] = knn.predict(scaler.transform(students[features]))\nprint(result)",
          "output": "   hours_studied  sleep_hours  attendance  linear  tree   knn\n0            4.0          7.0          80    60.0  60.0  60.0\n1            3.5          6.5          75    55.0  50.0  50.0\n2            8.0          9.0         100    80.2  70.0  60.0"
        },
        {
          "type": "table",
          "head": [
            "Student",
            "Observation"
          ],
          "rows": [
            [
              "(4, 7, 80)",
              "In the table, so all models agree on 60"
            ],
            [
              "(3.5, 6.5, 75)",
              "Between known students: the line says 55, tree and KNN say 50"
            ],
            [
              "(8, 9, 100)",
              "Beyond the data: the line keeps climbing to 80.2, but tree and KNN stay near the marks they have seen (70 and 60)"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Like the tree, KNN cannot go beyond the marks of its neighbors. Only the straight line can extrapolate."
        }
      ]
    },
    {
      "id": "fair",
      "icon": "🔬",
      "title": "Fair Comparison on 30 Students",
      "meta": "Test it properly",
      "blocks": [
        {
          "type": "p",
          "text": "Five students prove nothing. Compare the models on 30 students, averaging the test error over 10 splits. The scaler is fitted on the training rows only, inside each split:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "fair_test.py",
          "code": "import numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import mean_absolute_error\n\ndata30 = {\n    \"hours_studied\": [2.8, 8.0, 2.7, 8.3, 4.9, 5.9, 7.1, 5.1, 3.4, 2.5, 1.6, 6.9, 4.5, 2.3, 8.0, 3.2, 4.3, 3.4, 6.0, 5.6, 5.8, 3.1, 3.3, 3.0, 3.6, 2.2, 2.3, 8.7, 8.7, 2.5],\n    \"sleep_hours\": [4.1, 5.0, 7.5, 7.9, 4.1, 6.9, 4.0, 6.6, 7.2, 8.9, 5.3, 8.0, 8.4, 8.6, 4.0, 6.3, 8.9, 6.0, 8.1, 6.7, 7.9, 6.4, 4.1, 4.4, 4.6, 5.3, 8.8, 7.2, 8.1, 6.8],\n    \"attendance\": [82, 91, 96, 96, 91, 55, 68, 52, 77, 90, 53, 59, 68, 62, 90, 68, 82, 75, 79, 97, 97, 56, 92, 67, 55, 69, 76, 98, 69, 51],\n    \"marks\": [42, 76, 41, 89, 50, 55, 61, 46, 45, 45, 34, 59, 52, 42, 79, 44, 59, 47, 67, 69, 68, 39, 43, 36, 41, 35, 45, 87, 72, 39]\n}\ndf30 = pd.DataFrame(data30)\n\ndef evaluate(make_model, scale=False):\n    errors = []\n    for seed in range(10):\n        X_train, X_test, y_train, y_test = train_test_split(\n            df30[features], df30[\"marks\"], test_size=0.25, random_state=seed)\n        if scale:\n            sc = StandardScaler().fit(X_train)          # learn scaling from TRAIN only\n            X_train, X_test = sc.transform(X_train), sc.transform(X_test)\n        model = make_model().fit(X_train, y_train)\n        errors.append(mean_absolute_error(y_test, model.predict(X_test)))\n    return np.mean(errors)\n\nprint(\"Average test MAE over 10 splits:\")\nprint(\"  Linear Regression      :\", round(evaluate(LinearRegression), 2))\nprint(\"  Decision Tree (depth 3):\", round(evaluate(lambda: DecisionTreeRegressor(max_depth=3, random_state=42)), 2))\nprint(\"  KNN (K=3), scaled      :\", round(evaluate(lambda: KNeighborsRegressor(n_neighbors=3), scale=True), 2))\nprint(\"  KNN (K=3), NOT scaled  :\", round(evaluate(lambda: KNeighborsRegressor(n_neighbors=3)), 2))",
          "output": "Average test MAE over 10 splits:\n  Linear Regression      : 3.99\n  Decision Tree (depth 3): 4.47\n  KNN (K=3), scaled      : 5.68\n  KNN (K=3), NOT scaled  : 11.28"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Scaling more than halves the KNN error (11.28 down to 5.68). Skipping it is the number one KNN mistake."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "KNN still loses to the linear model here. The marks follow a smooth rule, so a formula suits them better, and 22 training students are few for a distance-based model. No model wins everywhere, so always test."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Student Predictor v5 (KNN Model)",
      "blocks": [
        {
          "type": "p",
          "text": "Scaling plus all three models, side by side, on one split of the 30 students:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "predictor_v5.py",
          "code": "X_train, X_test, y_train, y_test = train_test_split(\n    df30[features], df30[\"marks\"], test_size=0.25, random_state=42)\n\nscaler = StandardScaler().fit(X_train)\nX_train_s, X_test_s = scaler.transform(X_train), scaler.transform(X_test)\n\nlinear = LinearRegression().fit(X_train, y_train)\ntree = DecisionTreeRegressor(max_depth=3, random_state=42).fit(X_train, y_train)\nknn = KNeighborsRegressor(n_neighbors=3).fit(X_train_s, y_train)\n\nprint(\"Test MAE\")\nprint(\"  Linear:\", round(mean_absolute_error(y_test, linear.predict(X_test)), 2))\nprint(\"  Tree  :\", round(mean_absolute_error(y_test, tree.predict(X_test)), 2))\nprint(\"  KNN   :\", round(mean_absolute_error(y_test, knn.predict(X_test_s)), 2))\n\ndef predict_all(hours, sleep, attendance):\n    new = pd.DataFrame({\"hours_studied\": [hours], \"sleep_hours\": [sleep], \"attendance\": [attendance]})\n    return (round(linear.predict(new)[0], 1), round(tree.predict(new)[0], 1),\n            round(knn.predict(scaler.transform(new))[0], 1))\n\nprint()\nfor hours, sleep, attendance in [(2, 5, 55), (5, 7, 80), (8, 8, 95)]:\n    l, t, k = predict_all(hours, sleep, attendance)\n    print(f\"{hours} h, {sleep} h sleep, {attendance}% -> Linear: {l} | Tree: {t} | KNN: {k}\")",
          "output": "Test MAE\n  Linear: 2.79\n  Tree  : 3.54\n  KNN   : 5.08\n\n2 h, 5 h sleep, 55% -> Linear: 30.0 | Tree: 34.5 | KNN: 36.0\n5 h, 7 h sleep, 80% -> Linear: 57.9 | Tree: 49.3 | KNN: 62.7\n8 h, 8 h sleep, 95% -> Linear: 81.5 | Tree: 89.0 | KNN: 74.7"
        }
      ]
    },
    {
      "id": "challenge",
      "icon": "💡",
      "title": "Challenge: Change the K Value",
      "meta": "Important",
      "blocks": [
        {
          "type": "p",
          "text": "Test K=1 and K=5 on the 5-student table (you saw them in Step 6), then sweep K properly on the 30 students:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "k_sweep.py",
          "code": "print(\"Average test MAE by K (scaled, 10 splits):\")\nfor k in [1, 2, 3, 5, 7, 10, 15]:\n    err = evaluate(lambda: KNeighborsRegressor(n_neighbors=k), scale=True)\n    print(f\"  K={k:2}: {err:.2f}\")",
          "output": "Average test MAE by K (scaled, 10 splits):\n  K= 1: 5.08\n  K= 2: 6.76\n  K= 3: 5.68\n  K= 5: 6.37\n  K= 7: 6.51\n  K=10: 7.64\n  K=15: 9.63"
        },
        {
          "type": "table",
          "head": [
            "Observation",
            "Why"
          ],
          "rows": [
            [
              "Prediction changes with K",
              "Different K means a different set of neighbors to average"
            ],
            [
              "K=1 is least stable",
              "It copies one student, so one unusual student changes the answer"
            ],
            [
              "Large K is smoother",
              "But it drifts toward the overall average (K=15 is worst here, with only 22 training students)"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Pick K by comparing test error, like any other setting. Rule of thumb: start small (3 to 7) and never let K approach the number of training rows."
        }
      ]
    },
    {
      "id": "insight",
      "icon": "🧠",
      "title": "Deep Insight and Limitations",
      "blocks": [
        {
          "type": "table",
          "head": [
            "KNN is",
            "Limitation"
          ],
          "rows": [
            [
              "A lazy learner: no training phase, it stores the data",
              "Slow on large datasets: every prediction compares against ALL stored rows"
            ],
            [
              "Based only on distance",
              "Needs good scaling and meaningful features"
            ],
            [
              "Easy to explain: here are the similar students",
              "Many irrelevant features make distances meaningless"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Linear models and trees learn a compact rule, so predicting is fast. KNN keeps everything and does the work at prediction time."
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
            "ML can work using distance alone",
            "Scaling is essential for distance-based models",
            "K controls how many neighbors vote: small is noisy, large is too smooth",
            "Different models behave differently, so always compare them on test data"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Student Predictor v5 (KNN Model)",
    "file": "day11_final.py",
    "description": "One program combining Day 11: scaling fitted on train only, Linear, Tree and KNN compared on the same split, the effect of scaling across 10 splits, side-by-side predictions and the neighbors behind a KNN answer.",
    "concepts": [
      "KNeighborsRegressor",
      "distance",
      "StandardScaler",
      "K",
      "kneighbors",
      "model comparison",
      "lazy learner"
    ],
    "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.neighbors import KNeighborsRegressor\nfrom sklearn.metrics import mean_absolute_error\n\n# 1. DATA: 30 students\ndata = {\n    \"hours_studied\": [2.8, 8.0, 2.7, 8.3, 4.9, 5.9, 7.1, 5.1, 3.4, 2.5, 1.6, 6.9, 4.5, 2.3, 8.0, 3.2, 4.3, 3.4, 6.0, 5.6, 5.8, 3.1, 3.3, 3.0, 3.6, 2.2, 2.3, 8.7, 8.7, 2.5],\n    \"sleep_hours\": [4.1, 5.0, 7.5, 7.9, 4.1, 6.9, 4.0, 6.6, 7.2, 8.9, 5.3, 8.0, 8.4, 8.6, 4.0, 6.3, 8.9, 6.0, 8.1, 6.7, 7.9, 6.4, 4.1, 4.4, 4.6, 5.3, 8.8, 7.2, 8.1, 6.8],\n    \"attendance\": [82, 91, 96, 96, 91, 55, 68, 52, 77, 90, 53, 59, 68, 62, 90, 68, 82, 75, 79, 97, 97, 56, 92, 67, 55, 69, 76, 98, 69, 51],\n    \"marks\": [42, 76, 41, 89, 50, 55, 61, 46, 45, 45, 34, 59, 52, 42, 79, 44, 59, 47, 67, 69, 68, 39, 43, 36, 41, 35, 45, 87, 72, 39]\n}\ndf = pd.DataFrame(data)\nfeatures = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\nprint(\"=== STUDENT PREDICTOR v5 (KNN MODEL) ===\")\nprint(df.head(3))\n\n# 2. SPLIT AND SCALE (scaler learns from the training rows only)\nX_train, X_test, y_train, y_test = train_test_split(df[features], df[\"marks\"], test_size=0.25, random_state=42)\nscaler = StandardScaler().fit(X_train)\nX_train_s, X_test_s = scaler.transform(X_train), scaler.transform(X_test)\n\n# 3. TRAIN THREE MODELS\nlinear = LinearRegression().fit(X_train, y_train)\ntree = DecisionTreeRegressor(max_depth=3, random_state=42).fit(X_train, y_train)\nknn = KNeighborsRegressor(n_neighbors=3).fit(X_train_s, y_train)\n\n# 4. COMPARE ON UNSEEN TEST DATA\nprint(\"\\nTest MAE:\")\nprint(\"  Linear:\", round(mean_absolute_error(y_test, linear.predict(X_test)), 2))\nprint(\"  Tree  :\", round(mean_absolute_error(y_test, tree.predict(X_test)), 2))\nprint(\"  KNN   :\", round(mean_absolute_error(y_test, knn.predict(X_test_s)), 2))\n\n# 5. DOES SCALING MATTER? average over 10 splits\ndef avg_knn_mae(scale):\n    errors = []\n    for seed in range(10):\n        a, b, c, d = train_test_split(df[features], df[\"marks\"], test_size=0.25, random_state=seed)\n        if scale:\n            sc = StandardScaler().fit(a)\n            a, b = sc.transform(a), sc.transform(b)\n        errors.append(mean_absolute_error(d, KNeighborsRegressor(n_neighbors=3).fit(a, c).predict(b)))\n    return np.mean(errors)\n\nprint(\"\\nKNN average MAE, scaled:\", round(avg_knn_mae(True), 2), \"| not scaled:\", round(avg_knn_mae(False), 2))\n\n# 6. PREDICTIONS FROM ALL THREE MODELS\nnew_students = pd.DataFrame({\n    \"hours_studied\": [2, 5, 8],\n    \"sleep_hours\": [5, 7, 8],\n    \"attendance\": [55, 80, 95]\n})\nnew_students[\"linear\"] = linear.predict(new_students[features]).round(1)\nnew_students[\"tree\"] = tree.predict(new_students[features]).round(1)\nnew_students[\"knn\"] = knn.predict(scaler.transform(new_students[features])).round(1)\nprint(\"\\nPredictions:\")\nprint(new_students)\n\n# 7. WHY DID KNN PREDICT THAT? look at the neighbors of the first new student\ndist, idx = knn.kneighbors(scaler.transform(new_students[features].iloc[[0]]))\nprint(\"\\nNeighbor marks for the first student:\", list(y_train.iloc[idx[0]]))",
    "output": "=== STUDENT PREDICTOR v5 (KNN MODEL) ===\n   hours_studied  sleep_hours  attendance  marks\n0            2.8          4.1          82     42\n1            8.0          5.0          91     76\n2            2.7          7.5          96     41\n\nTest MAE:\n  Linear: 2.79\n  Tree  : 3.54\n  KNN   : 5.08\n\nKNN average MAE, scaled: 5.68 | not scaled: 11.28\n\nPredictions:\n   hours_studied  sleep_hours  attendance  linear  tree   knn\n0              2            5          55    30.0  34.5  36.0\n1              5            7          80    57.9  49.3  62.7\n2              8            8          95    81.5  89.0  74.7\n\nNeighbor marks for the first student: [34, 35, 39]"
  },
  "practice": [
    {
      "title": "Delivery Time Neighbors",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Predict delivery time from distance and traffic with KNN, and see exactly which past deliveries it used.",
      "tasks": [
        "Create the DataFrame and scale distance_km and traffic with StandardScaler",
        "Train KNeighborsRegressor(n_neighbors=3)",
        "Predict the time for a 5 km trip with traffic level 3",
        "Print the minutes of the 3 neighbors it used",
        "Print the prediction for K=1, K=3 and K=5"
      ],
      "hint": "Use model.kneighbors(scaler.transform(new)) to get the neighbor positions, then y.iloc[idx[0]].",
      "starter": "import pandas as pd\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsRegressor\n\ndata = {\n    \"distance_km\": [1.2, 2.5, 3.1, 4.0, 5.5, 6.2, 7.8, 8.5, 9.9, 11.0],\n    \"traffic\": [2, 4, 1, 3, 5, 2, 4, 1, 3, 5],\n    \"minutes\": [8, 17, 9, 18, 30, 20, 32, 20, 30, 45]\n}\n\n# TODO 1: DataFrame, X, y, scale the features\n\n# TODO 2: train KNN with K=3\n\n# TODO 3: predict for a 5 km trip with traffic 3\n\n# TODO 4: print the neighbors' minutes\n\n# TODO 5: predictions for K=1, 3, 5",
      "solution": "import pandas as pd\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.neighbors import KNeighborsRegressor\n\ndata = {\n    \"distance_km\": [1.2, 2.5, 3.1, 4.0, 5.5, 6.2, 7.8, 8.5, 9.9, 11.0],\n    \"traffic\": [2, 4, 1, 3, 5, 2, 4, 1, 3, 5],\n    \"minutes\": [8, 17, 9, 18, 30, 20, 32, 20, 30, 45]\n}\ndf = pd.DataFrame(data)\nfeatures = [\"distance_km\", \"traffic\"]\nX = df[features]\ny = df[\"minutes\"]\n\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\nmodel = KNeighborsRegressor(n_neighbors=3).fit(X_scaled, y)\n\ntrip = pd.DataFrame({\"distance_km\": [5], \"traffic\": [3]})\ntrip_scaled = scaler.transform(trip)\nprint(\"Predicted minutes:\", round(model.predict(trip_scaled)[0], 1))\n\ndist, idx = model.kneighbors(trip_scaled)\nprint(\"Neighbor minutes:\", list(y.iloc[idx[0]]))\n\nfor k in [1, 3, 5]:\n    m = KNeighborsRegressor(n_neighbors=k).fit(X_scaled, y)\n    print(f\"K={k}: {round(m.predict(trip_scaled)[0], 1)} minutes\")",
      "output": "Predicted minutes: 18.3\nNeighbor minutes: [18, 20, 17]\nK=1: 18.0 minutes\nK=3: 18.3 minutes\nK=5: 19.0 minutes"
    },
    {
      "title": "Scaling Matters",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Prove why KNN needs scaling using house data where size is in the thousands and rooms are 1 to 5.",
      "tasks": [
        "Create the DataFrame",
        "Write evaluate(make_model, scale) averaging the test MAE over 10 splits (test_size=0.25, scaler fitted on train only)",
        "Compare Linear Regression, KNN (K=3) not scaled and KNN (K=3) scaled",
        "Print the three averages",
        "Explain why unscaled KNN does badly and why linear still wins"
      ],
      "hint": "Reuse the evaluate function from the lesson. Fit StandardScaler on X_train only, then transform both parts.",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.neighbors import KNeighborsRegressor\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"size_sqft\": [1646, 674, 939, 1209, 2421, 860, 2123, 956, 1318, 893, 1582, 2288, 2395, 609, 2130, 1323, 1451, 1837, 2396, 2200, 1446, 1568, 1818, 1650],\n    \"rooms\": [3, 5, 4, 1, 2, 1, 3, 1, 2, 3, 3, 1, 1, 4, 3, 2, 1, 5, 4, 3, 4, 3, 2, 3],\n    \"price\": [81.4, 80.4, 76.8, 43.4, 105.5, 39.4, 106.5, 36.2, 70.1, 57.3, 80.9, 82.8, 84.0, 56.8, 95.5, 67.0, 63.9, 118.8, 118.8, 105.2, 86.8, 85.1, 73.2, 85.5]\n}\n\n# TODO 1: DataFrame\n\n# TODO 2: evaluate(make_model, scale=False) over 10 splits\n\n# TODO 3: compare Linear, KNN not scaled, KNN scaled",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.neighbors import KNeighborsRegressor\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"size_sqft\": [1646, 674, 939, 1209, 2421, 860, 2123, 956, 1318, 893, 1582, 2288, 2395, 609, 2130, 1323, 1451, 1837, 2396, 2200, 1446, 1568, 1818, 1650],\n    \"rooms\": [3, 5, 4, 1, 2, 1, 3, 1, 2, 3, 3, 1, 1, 4, 3, 2, 1, 5, 4, 3, 4, 3, 2, 3],\n    \"price\": [81.4, 80.4, 76.8, 43.4, 105.5, 39.4, 106.5, 36.2, 70.1, 57.3, 80.9, 82.8, 84.0, 56.8, 95.5, 67.0, 63.9, 118.8, 118.8, 105.2, 86.8, 85.1, 73.2, 85.5]\n}\ndf = pd.DataFrame(data)\nfeatures = [\"size_sqft\", \"rooms\"]\n\ndef evaluate(make_model, scale=False):\n    errors = []\n    for seed in range(10):\n        X_train, X_test, y_train, y_test = train_test_split(df[features], df[\"price\"], test_size=0.25, random_state=seed)\n        if scale:\n            sc = StandardScaler().fit(X_train)\n            X_train, X_test = sc.transform(X_train), sc.transform(X_test)\n        model = make_model().fit(X_train, y_train)\n        errors.append(mean_absolute_error(y_test, model.predict(X_test)))\n    return np.mean(errors)\n\nprint(\"Linear Regression      :\", round(evaluate(LinearRegression), 2))\nprint(\"KNN (K=3), not scaled  :\", round(evaluate(lambda: KNeighborsRegressor(n_neighbors=3)), 2))\nprint(\"KNN (K=3), scaled      :\", round(evaluate(lambda: KNeighborsRegressor(n_neighbors=3), scale=True), 2))",
      "output": "Linear Regression      : 4.69\nKNN (K=3), not scaled  : 16.45\nKNN (K=3), scaled      : 9.96",
      "note": "Unscaled, size (500 to 2500) dwarfs rooms (1 to 5) in every distance, so KNN effectively ignores rooms even though they matter a lot for price. Scaling lets both features count. Linear still wins because price is an exact straight-line mix of size and rooms plus noise, and 18 training rows are few for KNN."
    }
  ],
  "checklist": [
    "Understood how KNN predicts",
    "Scaled features before KNN",
    "Trained KNeighborsRegressor",
    "Looked at the neighbors behind a prediction",
    "Changed K and observed the effect",
    "Compared Linear, Tree and KNN on test data",
    "Built Student Predictor v5"
  ],
  "quiz": [
    {
      "q": "How does KNN make a prediction?",
      "options": [
        "It applies a learned formula",
        "It averages the targets of the K closest known points",
        "It builds a tree of questions",
        "It picks a random row"
      ],
      "answer": 1,
      "why": "KNN finds the K nearest neighbors by distance and averages their target values."
    },
    {
      "q": "Why must features be scaled for KNN?",
      "options": [
        "To make training faster",
        "So a feature with big numbers does not dominate the distance",
        "Because KNN needs integers",
        "To remove duplicates"
      ],
      "answer": 1,
      "why": "Distance adds up feature differences. Big-number features would swamp small-number ones."
    },
    {
      "q": "What happens if K equals the number of training rows?",
      "options": [
        "Perfect accuracy",
        "Every prediction becomes the overall average",
        "The model crashes",
        "It becomes a decision tree"
      ],
      "answer": 1,
      "why": "All rows are neighbors, so the average of all targets is predicted for everyone."
    },
    {
      "q": "Why is KNN called a lazy learner?",
      "options": [
        "It is slow to install",
        "fit() just stores the data and the work happens at prediction time",
        "It ignores half the data",
        "It needs no data"
      ],
      "answer": 1,
      "why": "There is no training phase beyond storing the data, so every prediction searches all stored rows."
    }
  ]
},

// DAY 12 snippet. In course-data.js: add a comma after Day 11's closing }, then paste this object. No images for this day.
{
  "day": 12,
  "title": "Model Evaluation: Real Understanding",
  "subtitle": "Go beyond accuracy: read confusion matrices, use precision and recall and see why imbalance fools accuracy.",
  "level": "Intermediate",
  "duration": "2 hours",
  "tags": [
    "Confusion Matrix",
    "Precision",
    "Recall",
    "F1",
    "Imbalance"
  ],
  "goals": [
    "Go beyond accuracy",
    "Understand precision and recall",
    "Use the confusion matrix like a pro"
  ],
  "sections": [
    {
      "id": "trap",
      "icon": "⚠️",
      "title": "Step 1: Why Accuracy is NOT Enough",
      "blocks": [
        {
          "type": "p",
          "text": "100 students: 90 pass, 10 fail. A lazy model predicts Pass for everyone:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "day12_eval.py",
          "code": "import numpy as np\nfrom sklearn.metrics import accuracy_score\n\ny_true = np.array([1] * 90 + [0] * 10)     # 90 Pass (1), 10 Fail (0)\ny_lazy = np.ones(100, dtype=int)            # lazy model: Pass for everyone\n\nprint(\"Accuracy:\", accuracy_score(y_true, y_lazy))\nprint(\"Fails detected:\", int(((y_true == 0) & (y_lazy == 0)).sum()), \"out of\", int((y_true == 0).sum()))",
          "output": "Accuracy: 0.9\nFails detected: 0 out of 10"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "90% accuracy, yet the model never finds a single failing student. When one class is much bigger than the other, accuracy hides the truth. We need better tools."
        }
      ]
    },
    {
      "id": "cm",
      "icon": "🧠",
      "title": "Step 2: Confusion Matrix",
      "meta": "Core concept: actual vs predicted",
      "blocks": [
        {
          "type": "table",
          "head": [
            "",
            "Predicted Pass",
            "Predicted Fail"
          ],
          "rows": [
            [
              "Actual Pass",
              "TP: correct pass ✅",
              "FN: missed pass ❌"
            ],
            [
              "Actual Fail",
              "FP: wrong pass ❌",
              "TN: correct fail ✅"
            ]
          ]
        },
        {
          "type": "table",
          "head": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "TP",
              "Pass predicted, really passed"
            ],
            [
              "TN",
              "Fail predicted, really failed"
            ],
            [
              "FP",
              "Pass predicted, but really failed (false alarm)"
            ],
            [
              "FN",
              "Fail predicted, but really passed (missed pass)"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Here is the lazy model from Step 1 in a confusion matrix:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "confusion.py",
          "code": "import pandas as pd\nfrom sklearn.metrics import confusion_matrix\n\ncm = confusion_matrix(y_true, y_lazy)\nprint(cm)\nprint()\nprint(pd.DataFrame(cm, index=[\"Actual Fail\", \"Actual Pass\"], columns=[\"Predicted Fail\", \"Predicted Pass\"]))\n\ntn, fp, fn, tp = cm.ravel()\nprint(f\"\\nTN={tn} FP={fp} FN={fn} TP={tp}\")\n\n# Pass first, exactly like the table above\nprint()\nprint(confusion_matrix(y_true, y_lazy, labels=[1, 0]))",
          "output": "[[ 0 10]\n [ 0 90]]\n\n             Predicted Fail  Predicted Pass\nActual Fail               0              10\nActual Pass               0              90\n\nTN=0 FP=10 FN=0 TP=90\n\n[[90  0]\n [10  0]]"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Careful: scikit-learn orders classes from smallest to largest, so by default the first row is Fail (0) and the matrix reads [[TN, FP], [FN, TP]]. That is upside down compared with the table above. Add labels=[1, 0] to get the Pass-first layout, or use ravel() to read the four numbers safely."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The lazy model has FP=10: all ten failing students were wrongly called Pass."
        }
      ]
    },
    {
      "id": "real",
      "icon": "⚡",
      "title": "Step 3: Code It on a Real Model",
      "blocks": [
        {
          "type": "p",
          "text": "Train a Pass/Fail model on 40 students (20 Fail, 20 Pass), scaled on the training rows only, then look at its confusion matrix on unseen test students:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "real_model.py",
          "code": "from sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\ndata40 = {\n    \"hours_studied\": [5.4, 6.7, 3.3, 5.1, 8.1, 8.2, 2.0, 2.7, 1.4, 4.5, 1.2, 4.7, 6.2, 3.2, 6.4, 5.7, 1.2, 5.5, 3.1, 4.3, 3.3, 6.5, 4.5, 2.3, 5.4, 7.2, 3.5, 2.8, 4.1, 8.5, 8.8, 6.4, 8.2, 7.8, 4.0, 1.7, 6.2, 5.5, 3.9, 2.8],\n    \"sleep_hours\": [6.0, 6.3, 5.3, 5.5, 6.3, 8.3, 6.9, 5.4, 5.4, 6.3, 5.0, 5.0, 6.6, 4.4, 6.4, 5.8, 7.5, 7.7, 7.5, 7.4, 5.9, 7.3, 5.7, 6.9, 5.6, 6.2, 4.3, 5.2, 8.9, 5.2, 7.5, 7.3, 7.6, 6.4, 7.0, 4.3, 4.4, 5.0, 4.8, 4.5],\n    \"attendance\": [56, 78, 59, 98, 84, 77, 85, 63, 96, 92, 86, 74, 92, 87, 83, 96, 82, 68, 78, 60, 60, 86, 89, 99, 93, 77, 54, 74, 96, 89, 74, 73, 61, 59, 54, 95, 82, 57, 71, 52],\n    \"marks\": [47, 56, 34, 61, 69, 67, 41, 35, 41, 53, 31, 42, 63, 41, 57, 57, 37, 56, 44, 47, 39, 64, 48, 51, 53, 61, 29, 31, 61, 67, 70, 59, 62, 56, 41, 41, 54, 41, 41, 26]\n}\ndf40 = pd.DataFrame(data40)\ndf40[\"status\"] = df40[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\n\nfeatures = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\nX_train, X_test, y_train, y_test = train_test_split(\n    df40[features], df40[\"status\"], test_size=0.3, random_state=42, stratify=df40[\"status\"])\n\nscaler = StandardScaler().fit(X_train)\nmodel = LogisticRegression().fit(scaler.transform(X_train), y_train)\ny_pred = model.predict(scaler.transform(X_test))\n\ncm = confusion_matrix(y_test, y_pred)\nprint(pd.DataFrame(cm, index=[\"Actual Fail\", \"Actual Pass\"], columns=[\"Predicted Fail\", \"Predicted Pass\"]))",
          "output": "             Predicted Fail  Predicted Pass\nActual Fail               5               1\nActual Pass               0               6"
        },
        {
          "type": "p",
          "text": "Read it: 5 failing students were correctly found (TN=5), 1 failing student was wrongly called Pass (FP=1), no passing student was missed (FN=0) and 6 passing students were correct (TP=6)."
        }
      ]
    },
    {
      "id": "pr",
      "icon": "🧠",
      "title": "Step 4: Precision and Recall",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Metric",
            "Question it answers",
            "Formula"
          ],
          "rows": [
            [
              "Precision",
              "Of the students I predicted Pass, how many really passed?",
              "TP / (TP + FP)"
            ],
            [
              "Recall",
              "Of the students who really passed, how many did I find?",
              "TP / (TP + FN)"
            ]
          ]
        },
        {
          "type": "code",
          "lang": "python",
          "title": "precision_recall.py",
          "code": "from sklearn.metrics import precision_score, recall_score\n\nprint(\"Pass as the positive class:\")\nprint(\"  Precision:\", round(precision_score(y_test, y_pred), 3))\nprint(\"  Recall   :\", round(recall_score(y_test, y_pred), 3))\n\nprint(\"Fail as the positive class:\")\nprint(\"  Precision:\", round(precision_score(y_test, y_pred, pos_label=0), 3))\nprint(\"  Recall   :\", round(recall_score(y_test, y_pred, pos_label=0), 3))\n\ntn, fp, fn, tp = cm.ravel()\nprint(\"\\nBy hand -> Pass precision:\", round(tp / (tp + fp), 3), \"| Pass recall:\", round(tp / (tp + fn), 3))",
          "output": "Pass as the positive class:\n  Precision: 0.857\n  Recall   : 1.0\nFail as the positive class:\n  Precision: 1.0\n  Recall   : 0.833\n\nBy hand -> Pass precision: 0.857 | Pass recall: 1.0"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Precision and recall depend on which class you call positive (pos_label). Pass recall is 1.0 here, but Fail recall is 0.833 because one failing student slipped through. For a tool meant to spot struggling students, Fail recall is the number to watch."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Remember the lazy model: looked at as Pass-positive it has precision 0.9 and recall 1.0, which looks great. Looked at as Fail-positive it finds nothing. Always check the class you care about."
        }
      ]
    },
    {
      "id": "when",
      "icon": "🧠",
      "title": "Step 5: When to Use What?",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Situation",
            "Important metric",
            "Why"
          ],
          "rows": [
            [
              "Spam detection",
              "Precision",
              "A good email sent to spam (FP) is costly"
            ],
            [
              "Disease detection",
              "Recall",
              "Missing a sick patient (FN) is dangerous"
            ],
            [
              "Find students who need help",
              "Recall on Fail",
              "Missing a struggling student (FN) is costly"
            ],
            [
              "General case",
              "Balanced: F1 score",
              "F1 combines precision and recall into one number"
            ]
          ]
        },
        {
          "type": "code",
          "lang": "python",
          "title": "f1.py",
          "code": "from sklearn.metrics import f1_score\n\nprint(\"F1 for Pass:\", round(f1_score(y_test, y_pred), 3))\nprint(\"F1 for Fail:\", round(f1_score(y_test, y_pred, pos_label=0), 3))",
          "output": "F1 for Pass: 0.923\nF1 for Fail: 0.909"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "There is usually a trade-off: making the model catch more positives (higher recall) tends to create more false alarms (lower precision)."
        }
      ]
    },
    {
      "id": "report",
      "icon": "⚡",
      "title": "Step 6: The Full Report",
      "meta": "Best way",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "report.py",
          "code": "from sklearn.metrics import classification_report\n\nprint(classification_report(y_test, y_pred, target_names=[\"Fail\", \"Pass\"], zero_division=0))",
          "output": "              precision    recall  f1-score   support\n\n        Fail       1.00      0.83      0.91         6\n        Pass       0.86      1.00      0.92         6\n\n    accuracy                           0.92        12\n   macro avg       0.93      0.92      0.92        12\nweighted avg       0.93      0.92      0.92        12"
        },
        {
          "type": "p",
          "text": "One table with precision, recall, F1 and support (how many real students are in each class) for both classes. Add zero_division=0 so a class with no predictions shows 0 instead of a warning."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Pass/Fail Predictor v2 (Smart Evaluation)",
      "blocks": [
        {
          "type": "p",
          "text": "Wrap the evaluation in one reusable function showing the confusion matrix, accuracy, precision and recall for both classes, then compare the model with the lazy baseline:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "smart_report.py",
          "code": "from sklearn.metrics import accuracy_score\n\ndef smart_report(name, y_true, y_pred):\n    cm = confusion_matrix(y_true, y_pred, labels=[0, 1])\n    print(f\"--- {name} ---\")\n    print(pd.DataFrame(cm, index=[\"Actual Fail\", \"Actual Pass\"], columns=[\"Predicted Fail\", \"Predicted Pass\"]))\n    print(\"Accuracy      :\", round(accuracy_score(y_true, y_pred), 2))\n    print(\"Pass precision:\", round(precision_score(y_true, y_pred, zero_division=0), 2),\n          \"| Pass recall:\", round(recall_score(y_true, y_pred, zero_division=0), 2))\n    print(\"Fail precision:\", round(precision_score(y_true, y_pred, pos_label=0, zero_division=0), 2),\n          \"| Fail recall:\", round(recall_score(y_true, y_pred, pos_label=0, zero_division=0), 2))\n\nsmart_report(\"Lazy baseline (everyone passes)\", y_test, np.ones(len(y_test), dtype=int))\nprint()\nsmart_report(\"Logistic Regression\", y_test, y_pred)",
          "output": "--- Lazy baseline (everyone passes) ---\n             Predicted Fail  Predicted Pass\nActual Fail               0               6\nActual Pass               0               6\nAccuracy      : 0.5\nPass precision: 0.5 | Pass recall: 1.0\nFail precision: 0.0 | Fail recall: 0.0\n\n--- Logistic Regression ---\n             Predicted Fail  Predicted Pass\nActual Fail               5               1\nActual Pass               0               6\nAccuracy      : 0.92\nPass precision: 0.86 | Pass recall: 1.0\nFail precision: 1.0 | Fail recall: 0.83"
        }
      ]
    },
    {
      "id": "challenge",
      "icon": "💡",
      "title": "Challenge: Add Imbalance",
      "meta": "Very important",
      "blocks": [
        {
          "type": "p",
          "text": "Now 60 students with many more Pass (51) than Fail (9). Compare the default model with one that gives extra weight to the rare class (class_weight=\"balanced\"):"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "imbalance.py",
          "code": "data60 = {\n    \"hours_studied\": [8.7, 5.4, 8.8, 6.7, 6.6, 2.7, 8.8, 1.0, 3.0, 4.5, 7.2, 2.6, 7.9, 8.9, 2.3, 5.8, 1.1, 4.1, 1.4, 8.7, 4.5, 8.6, 7.3, 7.9, 2.4, 1.6, 5.8, 2.3, 6.9, 4.3, 5.2, 8.5, 5.2, 1.9, 2.3, 5.4, 5.2, 6.1, 4.2, 6.2, 4.2, 6.0, 7.1, 2.4, 4.0, 5.0, 6.5, 3.0, 5.4, 6.0, 8.2, 3.9, 6.1, 2.5, 5.0, 2.5, 8.3, 4.5, 7.6, 4.3],\n    \"sleep_hours\": [8.5, 6.0, 5.7, 6.9, 8.2, 8.3, 7.0, 4.4, 7.0, 5.2, 7.7, 8.5, 6.6, 7.0, 4.3, 6.7, 4.6, 7.1, 5.8, 7.8, 4.2, 4.5, 7.4, 6.6, 6.9, 8.2, 6.4, 8.1, 6.6, 8.6, 7.3, 4.7, 5.8, 8.3, 5.8, 4.9, 6.4, 6.0, 7.1, 6.2, 5.3, 6.1, 6.1, 8.5, 8.9, 7.1, 4.4, 7.7, 7.4, 8.1, 5.7, 4.3, 7.1, 4.6, 7.8, 8.0, 6.0, 8.7, 4.9, 8.7],\n    \"attendance\": [73, 88, 88, 99, 99, 52, 51, 77, 52, 83, 77, 83, 72, 64, 97, 86, 50, 55, 82, 64, 70, 89, 68, 96, 86, 78, 59, 70, 88, 100, 54, 57, 87, 92, 54, 91, 89, 84, 67, 72, 68, 92, 66, 66, 97, 96, 98, 90, 54, 55, 78, 93, 94, 82, 98, 58, 61, 67, 63, 66],\n    \"marks\": [84, 64, 81, 77, 82, 53, 78, 43, 48, 59, 75, 63, 80, 76, 53, 69, 31, 55, 45, 82, 47, 75, 73, 79, 56, 49, 61, 49, 75, 75, 66, 71, 70, 59, 48, 64, 67, 65, 59, 69, 51, 70, 67, 53, 70, 67, 74, 56, 58, 67, 78, 56, 74, 48, 73, 53, 70, 61, 64, 64]\n}\ndf60 = pd.DataFrame(data60)\ndf60[\"status\"] = df60[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\nprint(\"Fail / Pass counts:\", (df60[\"status\"] == 0).sum(), \"/\", (df60[\"status\"] == 1).sum())\n\nX_train, X_test, y_train, y_test = train_test_split(\n    df60[features], df60[\"status\"], test_size=0.3, random_state=42, stratify=df60[\"status\"])\nscaler60 = StandardScaler().fit(X_train)\nX_train_s, X_test_s = scaler60.transform(X_train), scaler60.transform(X_test)\n\nprint(\"Lazy 'everyone passes' accuracy:\", round((y_test == 1).mean(), 2))\nprint()\n\ndefault = LogisticRegression().fit(X_train_s, y_train)\nweighted = LogisticRegression(class_weight=\"balanced\").fit(X_train_s, y_train)\n\nsmart_report(\"Default model\", y_test, default.predict(X_test_s))\nprint()\nsmart_report(\"class_weight=balanced\", y_test, weighted.predict(X_test_s))",
          "output": "Fail / Pass counts: 9 / 51\nLazy 'everyone passes' accuracy: 0.83\n\n--- Default model ---\n             Predicted Fail  Predicted Pass\nActual Fail               1               2\nActual Pass               0              15\nAccuracy      : 0.89\nPass precision: 0.88 | Pass recall: 1.0\nFail precision: 1.0 | Fail recall: 0.33\n\n--- class_weight=balanced ---\n             Predicted Fail  Predicted Pass\nActual Fail               3               0\nActual Pass               2              13\nAccuracy      : 0.89\nPass precision: 1.0 | Pass recall: 0.87\nFail precision: 0.6 | Fail recall: 1.0"
        },
        {
          "type": "table",
          "head": [
            "",
            "Default model",
            "class_weight=balanced"
          ],
          "rows": [
            [
              "Accuracy",
              "0.89",
              "0.89 (the same!)"
            ],
            [
              "Fail recall",
              "0.33: found 1 of 3 failing students",
              "1.0: found all 3"
            ],
            [
              "Pass recall",
              "1.0",
              "0.87: now wrongly flags 2 passing students"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Same accuracy, completely different behavior. Accuracy cannot tell these two models apart, while recall can. The lazy baseline already scores 0.83, so the default model's 0.89 is not much better."
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Which model is better depends on the cost of each mistake. If missing a failing student is worse than a false alarm, choose the weighted one."
        }
      ]
    },
    {
      "id": "truth",
      "icon": "🏭",
      "title": "Deep Insight and Industry Truth",
      "blocks": [
        {
          "type": "p",
          "text": "Accuracy is the surface. Precision and recall are real understanding. Companies care about the cost of each type of mistake:"
        },
        {
          "type": "table",
          "head": [
            "Problem",
            "False positive (FP)",
            "False negative (FN)",
            "Costlier error"
          ],
          "rows": [
            [
              "Spam filter",
              "Good email lost",
              "Spam in inbox",
              "FP"
            ],
            [
              "Disease test",
              "Healthy person worried",
              "Sick person sent home",
              "FN"
            ],
            [
              "Fraud detection",
              "Real purchase blocked",
              "Fraud goes through",
              "Depends on the amounts"
            ],
            [
              "Pass/Fail helper",
              "Struggling student not helped",
              "Good student gets extra attention",
              "FP"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The cost table decides the metric. Without it, accuracy is just a number."
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
            "Why accuracy can hide a useless model",
            "How to read a confusion matrix (and sklearn's row order)",
            "Precision and recall, and how they depend on the positive class",
            "How to read a full classification report",
            "How class imbalance changes the picture, and one way to handle it"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Pass/Fail Predictor v2 (Smart Evaluation)",
    "file": "day12_final.py",
    "description": "One program combining Day 12: a reusable evaluation function (confusion matrix, accuracy, precision and recall for both classes), a full classification report, and the effect of imbalance with and without class weights.",
    "concepts": [
      "confusion_matrix",
      "precision",
      "recall",
      "classification_report",
      "pos_label",
      "imbalance",
      "class_weight"
    ],
    "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import (confusion_matrix, accuracy_score, precision_score,\n                             recall_score, classification_report)\n\ndef smart_report(name, y_true, y_pred):\n    cm = confusion_matrix(y_true, y_pred, labels=[0, 1])\n    print(f\"--- {name} ---\")\n    print(pd.DataFrame(cm, index=[\"Actual Fail\", \"Actual Pass\"], columns=[\"Predicted Fail\", \"Predicted Pass\"]))\n    print(\"Accuracy      :\", round(accuracy_score(y_true, y_pred), 2))\n    print(\"Pass precision:\", round(precision_score(y_true, y_pred, zero_division=0), 2),\n          \"| Pass recall:\", round(recall_score(y_true, y_pred, zero_division=0), 2))\n    print(\"Fail precision:\", round(precision_score(y_true, y_pred, pos_label=0, zero_division=0), 2),\n          \"| Fail recall:\", round(recall_score(y_true, y_pred, pos_label=0, zero_division=0), 2))\n\nfeatures = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\n\ndef train_and_predict(df, class_weight=None):\n    X_train, X_test, y_train, y_test = train_test_split(\n        df[features], df[\"status\"], test_size=0.3, random_state=42, stratify=df[\"status\"])\n    scaler = StandardScaler().fit(X_train)\n    model = LogisticRegression(class_weight=class_weight).fit(scaler.transform(X_train), y_train)\n    return y_test, model.predict(scaler.transform(X_test))\n\nprint(\"=== PASS/FAIL PREDICTOR v2 (SMART EVALUATION) ===\")\n\n# 1. BALANCED DATA: 40 students\ndata40 = {\n    \"hours_studied\": [5.4, 6.7, 3.3, 5.1, 8.1, 8.2, 2.0, 2.7, 1.4, 4.5, 1.2, 4.7, 6.2, 3.2, 6.4, 5.7, 1.2, 5.5, 3.1, 4.3, 3.3, 6.5, 4.5, 2.3, 5.4, 7.2, 3.5, 2.8, 4.1, 8.5, 8.8, 6.4, 8.2, 7.8, 4.0, 1.7, 6.2, 5.5, 3.9, 2.8],\n    \"sleep_hours\": [6.0, 6.3, 5.3, 5.5, 6.3, 8.3, 6.9, 5.4, 5.4, 6.3, 5.0, 5.0, 6.6, 4.4, 6.4, 5.8, 7.5, 7.7, 7.5, 7.4, 5.9, 7.3, 5.7, 6.9, 5.6, 6.2, 4.3, 5.2, 8.9, 5.2, 7.5, 7.3, 7.6, 6.4, 7.0, 4.3, 4.4, 5.0, 4.8, 4.5],\n    \"attendance\": [56, 78, 59, 98, 84, 77, 85, 63, 96, 92, 86, 74, 92, 87, 83, 96, 82, 68, 78, 60, 60, 86, 89, 99, 93, 77, 54, 74, 96, 89, 74, 73, 61, 59, 54, 95, 82, 57, 71, 52],\n    \"marks\": [47, 56, 34, 61, 69, 67, 41, 35, 41, 53, 31, 42, 63, 41, 57, 57, 37, 56, 44, 47, 39, 64, 48, 51, 53, 61, 29, 31, 61, 67, 70, 59, 62, 56, 41, 41, 54, 41, 41, 26]\n}\nbalanced = pd.DataFrame(data40)\nbalanced[\"status\"] = balanced[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\nprint(\"\\nBalanced data, Fail / Pass:\", (balanced[\"status\"] == 0).sum(), \"/\", (balanced[\"status\"] == 1).sum())\n\ny_test, y_pred = train_and_predict(balanced)\nsmart_report(\"Balanced data, Logistic Regression\", y_test, y_pred)\nprint()\nprint(classification_report(y_test, y_pred, target_names=[\"Fail\", \"Pass\"], zero_division=0))\n\n# 2. IMBALANCED DATA: 60 students, mostly Pass\ndata60 = {\n    \"hours_studied\": [8.7, 5.4, 8.8, 6.7, 6.6, 2.7, 8.8, 1.0, 3.0, 4.5, 7.2, 2.6, 7.9, 8.9, 2.3, 5.8, 1.1, 4.1, 1.4, 8.7, 4.5, 8.6, 7.3, 7.9, 2.4, 1.6, 5.8, 2.3, 6.9, 4.3, 5.2, 8.5, 5.2, 1.9, 2.3, 5.4, 5.2, 6.1, 4.2, 6.2, 4.2, 6.0, 7.1, 2.4, 4.0, 5.0, 6.5, 3.0, 5.4, 6.0, 8.2, 3.9, 6.1, 2.5, 5.0, 2.5, 8.3, 4.5, 7.6, 4.3],\n    \"sleep_hours\": [8.5, 6.0, 5.7, 6.9, 8.2, 8.3, 7.0, 4.4, 7.0, 5.2, 7.7, 8.5, 6.6, 7.0, 4.3, 6.7, 4.6, 7.1, 5.8, 7.8, 4.2, 4.5, 7.4, 6.6, 6.9, 8.2, 6.4, 8.1, 6.6, 8.6, 7.3, 4.7, 5.8, 8.3, 5.8, 4.9, 6.4, 6.0, 7.1, 6.2, 5.3, 6.1, 6.1, 8.5, 8.9, 7.1, 4.4, 7.7, 7.4, 8.1, 5.7, 4.3, 7.1, 4.6, 7.8, 8.0, 6.0, 8.7, 4.9, 8.7],\n    \"attendance\": [73, 88, 88, 99, 99, 52, 51, 77, 52, 83, 77, 83, 72, 64, 97, 86, 50, 55, 82, 64, 70, 89, 68, 96, 86, 78, 59, 70, 88, 100, 54, 57, 87, 92, 54, 91, 89, 84, 67, 72, 68, 92, 66, 66, 97, 96, 98, 90, 54, 55, 78, 93, 94, 82, 98, 58, 61, 67, 63, 66],\n    \"marks\": [84, 64, 81, 77, 82, 53, 78, 43, 48, 59, 75, 63, 80, 76, 53, 69, 31, 55, 45, 82, 47, 75, 73, 79, 56, 49, 61, 49, 75, 75, 66, 71, 70, 59, 48, 64, 67, 65, 59, 69, 51, 70, 67, 53, 70, 67, 74, 56, 58, 67, 78, 56, 74, 48, 73, 53, 70, 61, 64, 64]\n}\nimbalanced = pd.DataFrame(data60)\nimbalanced[\"status\"] = imbalanced[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\nprint(\"Imbalanced data, Fail / Pass:\", (imbalanced[\"status\"] == 0).sum(), \"/\", (imbalanced[\"status\"] == 1).sum())\n\ny_test, y_default = train_and_predict(imbalanced)\n_, y_weighted = train_and_predict(imbalanced, class_weight=\"balanced\")\nprint(\"Lazy 'everyone passes' accuracy:\", round((y_test == 1).mean(), 2))\nprint()\nsmart_report(\"Imbalanced, default\", y_test, y_default)\nprint()\nsmart_report(\"Imbalanced, class_weight=balanced\", y_test, y_weighted)\n\n# 3. THE LESSON\nprint(\"\\nSame accuracy, very different Fail recall. Always look beyond accuracy.\")",
    "output": "=== PASS/FAIL PREDICTOR v2 (SMART EVALUATION) ===\n\nBalanced data, Fail / Pass: 20 / 20\n--- Balanced data, Logistic Regression ---\n             Predicted Fail  Predicted Pass\nActual Fail               5               1\nActual Pass               0               6\nAccuracy      : 0.92\nPass precision: 0.86 | Pass recall: 1.0\nFail precision: 1.0 | Fail recall: 0.83\n\n              precision    recall  f1-score   support\n\n        Fail       1.00      0.83      0.91         6\n        Pass       0.86      1.00      0.92         6\n\n    accuracy                           0.92        12\n   macro avg       0.93      0.92      0.92        12\nweighted avg       0.93      0.92      0.92        12\n\nImbalanced data, Fail / Pass: 9 / 51\nLazy 'everyone passes' accuracy: 0.83\n\n--- Imbalanced, default ---\n             Predicted Fail  Predicted Pass\nActual Fail               1               2\nActual Pass               0              15\nAccuracy      : 0.89\nPass precision: 0.88 | Pass recall: 1.0\nFail precision: 1.0 | Fail recall: 0.33\n\n--- Imbalanced, class_weight=balanced ---\n             Predicted Fail  Predicted Pass\nActual Fail               3               0\nActual Pass               2              13\nAccuracy      : 0.89\nPass precision: 1.0 | Pass recall: 0.87\nFail precision: 0.6 | Fail recall: 1.0\n\nSame accuracy, very different Fail recall. Always look beyond accuracy."
  },
  "practice": [
    {
      "title": "Spam Filter Scorecard",
      "level": "Easy",
      "file": "practice1.py",
      "description": "A spam filter checked 20 emails (1 = spam). Score it by hand and with scikit-learn.",
      "tasks": [
        "Print the confusion matrix and read TN, FP, FN, TP with ravel()",
        "Calculate precision and recall by hand from those four numbers",
        "Confirm them with precision_score and recall_score",
        "Print the accuracy",
        "Which error hurts more for a spam filter, FP or FN?"
      ],
      "hint": "tn, fp, fn, tp = cm.ravel(). Precision = tp / (tp + fp), recall = tp / (tp + fn).",
      "starter": "import numpy as np\nfrom sklearn.metrics import confusion_matrix, precision_score, recall_score, accuracy_score\n\ny_true = np.array([1] * 6 + [0] * 14)\ny_pred = np.array([1, 1, 1, 1, 0, 0] + [1, 1, 1] + [0] * 11)\n\n# TODO 1: confusion matrix and ravel()\n\n# TODO 2: precision and recall by hand\n\n# TODO 3: confirm with scikit-learn\n\n# TODO 4: accuracy",
      "solution": "import numpy as np\nfrom sklearn.metrics import confusion_matrix, precision_score, recall_score, accuracy_score\n\ny_true = np.array([1] * 6 + [0] * 14)\ny_pred = np.array([1, 1, 1, 1, 0, 0] + [1, 1, 1] + [0] * 11)\n\ncm = confusion_matrix(y_true, y_pred)\nprint(cm)\ntn, fp, fn, tp = cm.ravel()\nprint(f\"TN={tn} FP={fp} FN={fn} TP={tp}\")\n\nprint(\"\\nPrecision by hand:\", round(tp / (tp + fp), 3))\nprint(\"Recall by hand   :\", round(tp / (tp + fn), 3))\n\nprint(\"\\nPrecision (sklearn):\", round(precision_score(y_true, y_pred), 3))\nprint(\"Recall (sklearn)   :\", round(recall_score(y_true, y_pred), 3))\nprint(\"Accuracy:\", accuracy_score(y_true, y_pred))",
      "output": "[[11  3]\n [ 2  4]]\nTN=11 FP=3 FN=2 TP=4\n\nPrecision by hand: 0.571\nRecall by hand   : 0.667\n\nPrecision (sklearn): 0.571\nRecall (sklearn)   : 0.667\nAccuracy: 0.75",
      "note": "For a spam filter a false positive (a real email sent to spam) usually hurts more than a false negative (one spam in the inbox), so precision is the key metric. Here precision is only 0.571: 3 of the 7 emails flagged as spam were real."
    },
    {
      "title": "Disease Screening",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Screen 80 patients where only 12 are sick. Decide between the default model and a recall-focused one.",
      "tasks": [
        "Create the DataFrame and print the Healthy / Sick counts",
        "Split (test_size=0.3, random_state=42, stratify) and scale on the training rows only",
        "Train the default LogisticRegression and one with class_weight=\"balanced\"",
        "Print recall and precision for the sick class for both",
        "Print the classification report of the model you would choose and say why"
      ],
      "hint": "Sick is class 1, so the default positive class works. For a disease test choose the model with the higher recall.",
      "starter": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import precision_score, recall_score, classification_report\n\ndata = {\n    \"temperature\": [37.2, 37.6, 37.6, 36.8, 36.8, 36.5, 36.5, 37.0, 36.6, 37.1, 37.6, 37.4, 37.3, 37.5, 37.2, 37.3, 37.0, 37.1, 37.0, 38.1, 36.1, 37.0, 36.8, 38.0, 37.0, 37.7, 37.3, 36.6, 36.7, 36.0, 37.8, 38.2, 37.8, 38.2, 37.6, 36.4, 36.8, 35.9, 36.9, 37.6, 36.5, 38.2, 37.2, 36.9, 37.3, 37.7, 37.8, 37.5, 38.4, 37.6, 37.7, 37.2, 38.0, 36.8, 37.4, 37.6, 36.5, 37.4, 37.9, 36.8, 37.0, 36.9, 38.1, 37.5, 38.5, 37.0, 37.6, 36.7, 37.9, 37.1, 37.0, 38.4, 36.9, 36.4, 37.2, 38.1, 36.8, 36.8, 37.2, 37.3],\n    \"cough_score\": [7, 5, 5, 5, 3, 3, 4, 2, 3, 1, 4, 1, 2, 3, 1, 2, 2, 1, 3, 6, 7, 6, 1, 4, 0, 4, 3, 3, 2, 4, 0, 4, 8, 8, 5, 2, 2, 5, 2, 4, 4, 4, 6, 0, 3, 1, 6, 0, 6, 8, 3, 1, 3, 2, 8, 5, 1, 5, 4, 2, 3, 4, 4, 4, 5, 3, 3, 3, 4, 1, 6, 5, 4, 3, 4, 7, 3, 6, 4, 4],\n    \"sick\": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0]\n}\n\n# TODO 1: DataFrame, Healthy / Sick counts\n\n# TODO 2: stratified split, scale on train only\n\n# TODO 3: default model and class_weight=\"balanced\" model\n\n# TODO 4: recall and precision for the sick class\n\n# TODO 5: classification report of your choice",
      "solution": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import precision_score, recall_score, classification_report\n\ndata = {\n    \"temperature\": [37.2, 37.6, 37.6, 36.8, 36.8, 36.5, 36.5, 37.0, 36.6, 37.1, 37.6, 37.4, 37.3, 37.5, 37.2, 37.3, 37.0, 37.1, 37.0, 38.1, 36.1, 37.0, 36.8, 38.0, 37.0, 37.7, 37.3, 36.6, 36.7, 36.0, 37.8, 38.2, 37.8, 38.2, 37.6, 36.4, 36.8, 35.9, 36.9, 37.6, 36.5, 38.2, 37.2, 36.9, 37.3, 37.7, 37.8, 37.5, 38.4, 37.6, 37.7, 37.2, 38.0, 36.8, 37.4, 37.6, 36.5, 37.4, 37.9, 36.8, 37.0, 36.9, 38.1, 37.5, 38.5, 37.0, 37.6, 36.7, 37.9, 37.1, 37.0, 38.4, 36.9, 36.4, 37.2, 38.1, 36.8, 36.8, 37.2, 37.3],\n    \"cough_score\": [7, 5, 5, 5, 3, 3, 4, 2, 3, 1, 4, 1, 2, 3, 1, 2, 2, 1, 3, 6, 7, 6, 1, 4, 0, 4, 3, 3, 2, 4, 0, 4, 8, 8, 5, 2, 2, 5, 2, 4, 4, 4, 6, 0, 3, 1, 6, 0, 6, 8, 3, 1, 3, 2, 8, 5, 1, 5, 4, 2, 3, 4, 4, 4, 5, 3, 3, 3, 4, 1, 6, 5, 4, 3, 4, 7, 3, 6, 4, 4],\n    \"sick\": [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0]\n}\ndf = pd.DataFrame(data)\nprint(\"Healthy / Sick:\", (df[\"sick\"] == 0).sum(), \"/\", (df[\"sick\"] == 1).sum())\n\nX_train, X_test, y_train, y_test = train_test_split(\n    df[[\"temperature\", \"cough_score\"]], df[\"sick\"], test_size=0.3, random_state=42, stratify=df[\"sick\"])\nscaler = StandardScaler().fit(X_train)\nX_train_s, X_test_s = scaler.transform(X_train), scaler.transform(X_test)\n\nmodels = {\n    \"Default\": LogisticRegression().fit(X_train_s, y_train),\n    \"Balanced weights\": LogisticRegression(class_weight=\"balanced\").fit(X_train_s, y_train),\n}\nfor name, model in models.items():\n    pred = model.predict(X_test_s)\n    print(f\"{name}: sick recall = {recall_score(y_test, pred):.2f}, sick precision = {precision_score(y_test, pred):.2f}\")\n\nprint()\nchosen = models[\"Balanced weights\"].predict(X_test_s)\nprint(classification_report(y_test, chosen, target_names=[\"Healthy\", \"Sick\"], zero_division=0))",
      "output": "Healthy / Sick: 68 / 12\nDefault: sick recall = 0.75, sick precision = 1.00\nBalanced weights: sick recall = 1.00, sick precision = 0.57\n\n              precision    recall  f1-score   support\n\n     Healthy       1.00      0.85      0.92        20\n        Sick       0.57      1.00      0.73         4\n\n    accuracy                           0.88        24\n   macro avg       0.79      0.93      0.82        24\nweighted avg       0.93      0.88      0.89        24",
      "note": "For a disease screening test, missing a sick patient (a false negative) is far worse than a false alarm, so we choose the balanced model: recall for the sick class rises from 0.75 to 1.0. The price is lower precision (0.57), which means more healthy people get a follow-up test. That trade-off is exactly what precision and recall expose and accuracy hides."
    }
  ],
  "checklist": [
    "Saw why accuracy can be misleading",
    "Built and read a confusion matrix",
    "Calculated precision and recall",
    "Chose a metric for a situation",
    "Read a full classification report",
    "Tested an imbalanced dataset",
    "Built Pass/Fail Predictor v2"
  ],
  "quiz": [
    {
      "q": "A model predicts Pass for all 100 students (90 pass, 10 fail). What is true?",
      "options": [
        "Accuracy 90%, but it finds none of the failing students",
        "Accuracy 10%",
        "It is a perfect model",
        "Recall for Fail is 100%"
      ],
      "answer": 0,
      "why": "Accuracy looks great, but Fail recall is 0, so the model is useless for detecting failures."
    },
    {
      "q": "What does recall answer?",
      "options": [
        "Of everything predicted positive, how much was right?",
        "Of all real positives, how many did we find?",
        "How many rows were used",
        "How fast the model is"
      ],
      "answer": 1,
      "why": "Recall = TP / (TP + FN): the share of real positives that were found."
    },
    {
      "q": "Which metric matters most for a disease screening test?",
      "options": [
        "Precision",
        "Recall",
        "Row count",
        "Training time"
      ],
      "answer": 1,
      "why": "Missing a sick patient (a false negative) is dangerous, so you want high recall."
    },
    {
      "q": "Why is confusion_matrix(y_true, y_pred) upside down compared with a Pass-first table?",
      "options": [
        "It is a bug",
        "scikit-learn orders classes smallest to largest, so Fail (0) comes first",
        "It only works for spam",
        "It sorts by accuracy"
      ],
      "answer": 1,
      "why": "Rows and columns follow label order 0 then 1. Use labels=[1, 0] for Pass first, or ravel() to read the four numbers."
    }
  ]
},

// DAY 13 snippet. In course-data.js: add a comma after Day 12's closing }, then paste this object. No images for this day.
// DAY 13 snippet. In course-data.js: add a comma after Day 12's closing }, then paste this object. No images for this day.
{
  "day": 13,
  "title": "Overfitting vs Underfitting",
  "subtitle": "Understand why models fail, detect underfitting and overfitting with train vs test scores and balance model complexity.",
  "level": "Intermediate",
  "duration": "2 hours",
  "tags": [
    "Overfitting",
    "Underfitting",
    "Bias-Variance",
    "R²",
    "max_depth",
    "Polynomial"
  ],
  "goals": [
    "Understand why ML models fail",
    "Detect overfitting and underfitting",
    "Learn how to balance models properly"
  ],
  "sections": [
    {
      "id": "core",
      "icon": "🧠",
      "title": "Step 1: The Core Idea",
      "meta": "A model should learn patterns, not memorize data",
      "blocks": [
        {
          "type": "table",
          "head": [
            "",
            "Underfitting",
            "Good fit",
            "Overfitting"
          ],
          "rows": [
            [
              "The model is",
              "Too simple",
              "Just right",
              "Too complex"
            ],
            [
              "Train performance",
              "Poor ❌",
              "Good ✅",
              "Excellent ✅"
            ],
            [
              "Test performance",
              "Poor ❌",
              "Good ✅",
              "Poor ❌"
            ],
            [
              "Example",
              "A straight line on curved data",
              "A tree of sensible depth",
              "A tree that memorizes every point"
            ],
            [
              "Bias / variance",
              "High bias",
              "Balanced",
              "High variance"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Overfitting means learning the noise in the training data. Underfitting means missing the real pattern. The goal is the balance in the middle."
        }
      ]
    },
    {
      "id": "data",
      "icon": "⚡",
      "title": "Step 2: Create an Example Dataset",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "day13_fitting.py",
          "code": "import pandas as pd\n\ndata = {\n    \"hours_studied\": [1, 2, 3, 4, 5, 6, 7, 8],\n    \"marks\": [35, 40, 50, 60, 65, 70, 80, 90]\n}\ndf = pd.DataFrame(data)\nX = df[[\"hours_studied\"]]\ny = df[\"marks\"]\nprint(df)",
          "output": "   hours_studied  marks\n0              1     35\n1              2     40\n2              3     50\n3              4     60\n4              5     65\n5              6     70\n6              7     80\n7              8     90"
        }
      ]
    },
    {
      "id": "split",
      "icon": "⚡",
      "title": "Step 3: Split the Data",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "split.py",
          "code": "from sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\nprint(\"Train hours:\", list(X_train[\"hours_studied\"]))\nprint(\"Test hours :\", list(X_test[\"hours_studied\"]))",
          "output": "Train hours: [1, 8, 3, 5, 4, 7]\nTest hours : [2, 6]"
        }
      ]
    },
    {
      "id": "deep",
      "icon": "⚡",
      "title": "Step 4: Create the Overfitting Tree",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "deep_tree.py",
          "code": "from sklearn.tree import DecisionTreeRegressor\n\nmodel = DecisionTreeRegressor(max_depth=None, random_state=42)\nmodel.fit(X_train, y_train)\n\nprint(\"Depth:\", model.get_depth(), \"| Leaves:\", model.get_n_leaves())",
          "output": "Depth: 4 | Leaves: 6"
        },
        {
          "type": "p",
          "text": "max_depth=None lets the tree keep splitting until it has a leaf for (almost) every training row. That is the memorizing machine."
        }
      ]
    },
    {
      "id": "scores",
      "icon": "⚡",
      "title": "Step 5: Check Train vs Test Score",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "scores.py",
          "code": "train_score = model.score(X_train, y_train)\ntest_score = model.score(X_test, y_test)\n\nprint(\"Train Score:\", round(train_score, 3))\nprint(\"Test Score :\", round(test_score, 3))",
          "output": "Train Score: 1.0\nTest Score : 0.889"
        },
        {
          "type": "table",
          "head": [
            "R² score",
            "Meaning"
          ],
          "rows": [
            [
              "1.0",
              "Perfect predictions"
            ],
            [
              "0.0",
              "No better than always predicting the average"
            ],
            [
              "Below 0",
              "Worse than predicting the average"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "For regression models, score() is R² (not accuracy). The 99% accuracy and 60% accuracy in the task's industry story describe classifiers. The idea is identical: compare the training number with the testing number."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Train 1.0 but test 0.889: a small gap, and the test score is still high. This is NOT real overfitting. The data has no noise (marks rise in a perfect pattern), so memorizing it costs nothing. Overfitting hurts when there is noise to memorize."
        }
      ]
    },
    {
      "id": "shallow",
      "icon": "⚡",
      "title": "Step 6: Reduce Complexity",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "depths.py",
          "code": "for depth in [1, 2, 3, 5, None]:\n    m = DecisionTreeRegressor(max_depth=depth, random_state=42).fit(X_train, y_train)\n    print(f\"max_depth={str(depth):4} leaves={m.get_n_leaves()}  train={m.score(X_train, y_train):.3f}  test={m.score(X_test, y_test):.3f}\")",
          "output": "max_depth=1    leaves=2  train=0.710  test=-0.028\nmax_depth=2    leaves=4  train=0.941  test=0.642\nmax_depth=3    leaves=5  train=0.994  test=0.819\nmax_depth=5    leaves=6  train=1.000  test=0.889\nmax_depth=None leaves=6  train=1.000  test=0.889"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "The task expects the shallow tree (max_depth=2) to generalize better. On this clean data it is actually WORSE (test 0.642 vs 0.889), because it is too simple for a pattern with no noise. Depth 1 is clearly underfitting: train 0.71 and a test score below zero."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Two test rows (hours 2 and 6) also make every score shaky. To see real overfitting we need noisy data and more rows, coming next."
        }
      ]
    },
    {
      "id": "noisy",
      "icon": "🔬",
      "title": "A Better Playground: Noisy, Curved Data",
      "meta": "Where overfitting really shows up",
      "blocks": [
        {
          "type": "p",
          "text": "Real data is noisy and often curved. Here marks rise quickly with study hours, then level off, with some random noise (30 students). Average over 10 splits, with 30% of the data for testing:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "curve_data.py",
          "code": "import numpy as np\nfrom sklearn.linear_model import LinearRegression\n\ndata_curve = {\n    \"hours\": [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5, 14.0, 14.5, 15.0],\n    \"marks\": [33, 37, 51, 48, 53, 61, 57, 62, 67, 68, 67, 72, 74, 78, 73, 77, 84, 87, 78, 85, 81, 82, 82, 84, 89, 89, 87, 86, 87, 87]\n}\ndf_curve = pd.DataFrame(data_curve)\n\ndef scores(make_model):\n    train_scores, test_scores = [], []\n    for seed in range(10):\n        X_tr, X_te, y_tr, y_te = train_test_split(df_curve[[\"hours\"]], df_curve[\"marks\"], test_size=0.3, random_state=seed)\n        model = make_model().fit(X_tr, y_tr)\n        train_scores.append(model.score(X_tr, y_tr))\n        test_scores.append(model.score(X_te, y_te))\n    return np.mean(train_scores), np.mean(test_scores)\n\ndef verdict(train, test):\n    if train < 0.9:\n        return \"underfit\"\n    if train - test > 0.2:\n        return \"OVERFIT\"\n    return \"good fit\"\n\ndef show(name, make_model):\n    tr, te = scores(make_model)\n    print(f\"{name:20} train {tr:.2f}  test {te:.2f}  gap {tr - te:.2f}  {verdict(tr, te)}\")\n\nshow(\"Straight line\", LinearRegression)\nfor depth in [1, 2, 3, 4, 5, None]:\n    show(f\"Tree depth {depth}\", lambda: DecisionTreeRegressor(max_depth=depth, random_state=42))",
          "output": "Straight line        train 0.85  test 0.64  gap 0.20  underfit\nTree depth 1         train 0.74  test 0.45  gap 0.29  underfit\nTree depth 2         train 0.94  test 0.76  gap 0.18  good fit\nTree depth 3         train 0.99  test 0.83  gap 0.16  good fit\nTree depth 4         train 1.00  test 0.82  gap 0.18  good fit\nTree depth 5         train 1.00  test 0.79  gap 0.21  OVERFIT\nTree depth None      train 1.00  test 0.79  gap 0.21  OVERFIT"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Now the textbook picture appears. The line and depth 1 underfit (low train score). Depth 3 has the best test score (0.83). From depth 5 the tree reaches train 1.00 while the test score drops, so the gap grows: overfitting."
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "The verdict() thresholds (train below 0.9, gap above 0.2) are rules of thumb for this lesson, not laws. Always look at the numbers too."
        }
      ]
    },
    {
      "id": "poly",
      "icon": "📈",
      "title": "Underfitting vs Overfitting with Curves",
      "meta": "Complexity you can dial",
      "blocks": [
        {
          "type": "p",
          "text": "A polynomial model fits a curve. Degree 1 is a straight line, higher degrees bend more and more. A pipeline chains the steps (make powers of hours, scale them, fit a line):"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "polynomial.py",
          "code": "from sklearn.preprocessing import PolynomialFeatures, StandardScaler\nfrom sklearn.pipeline import make_pipeline\n\ndef poly_model(degree):\n    return make_pipeline(PolynomialFeatures(degree), StandardScaler(), LinearRegression())\n\nfor degree in [1, 2, 3, 5, 8, 10]:\n    show(f\"Polynomial degree {degree}\", lambda: poly_model(degree))",
          "output": "Polynomial degree 1  train 0.85  test 0.64  gap 0.20  underfit\nPolynomial degree 2  train 0.96  test 0.89  gap 0.07  good fit\nPolynomial degree 3  train 0.97  test 0.89  gap 0.08  good fit\nPolynomial degree 5  train 0.97  test 0.89  gap 0.09  good fit\nPolynomial degree 8  train 0.98  test 0.54  gap 0.43  OVERFIT\nPolynomial degree 10 train 0.98  test 0.58  gap 0.40  OVERFIT"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Degree 2 and 3 fit well (test 0.89). Degree 8 and 10 have a better train score but the test score collapses to about 0.55: they are wiggling through the noise. More complexity helped training and hurt reality."
        }
      ]
    },
    {
      "id": "bias",
      "icon": "🔥",
      "title": "Step 7: Bias-Variance Intuition",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Problem",
            "Meaning",
            "Symptom"
          ],
          "rows": [
            [
              "Underfitting",
              "High bias: the model is too rigid, so it is consistently off in the same direction",
              "Poor train and test scores"
            ],
            [
              "Overfitting",
              "High variance: the model changes a lot depending on which training data it saw",
              "Great train score, poor test score"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Let us measure both. Train each model on 30 different random 70% subsets and predict marks for a student who studies 7 hours. The true curve value there is 76.3:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "bias_variance.py",
          "code": "x0 = pd.DataFrame({\"hours\": [7.0]})\ntruth = 25 + 65 * (1 - np.exp(-7 / 4.5))\nprint(\"True value at 7 hours:\", round(truth, 1))\n\nmodels = {\n    \"Straight line\": LinearRegression,\n    \"Tree depth 3\": lambda: DecisionTreeRegressor(max_depth=3, random_state=42),\n    \"Tree depth None\": lambda: DecisionTreeRegressor(random_state=42),\n}\nprint()\nfor name, make_model in models.items():\n    predictions = []\n    for seed in range(30):\n        X_tr, _, y_tr, _ = train_test_split(df_curve[[\"hours\"]], df_curve[\"marks\"], test_size=0.3, random_state=seed)\n        predictions.append(make_model().fit(X_tr, y_tr).predict(x0)[0])\n    print(f\"{name:16} average prediction {np.mean(predictions):5.1f} (off by {np.mean(predictions) - truth:+.1f}) | spread {np.std(predictions):.2f}\")",
          "output": "True value at 7 hours: 76.3\n\nStraight line    average prediction  70.0 (off by -6.3) | spread 0.86\nTree depth 3     average prediction  75.2 (off by -1.1) | spread 1.35\nTree depth None  average prediction  76.7 (off by +0.4) | spread 2.00"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The straight line is stubbornly off (high bias, about 6 marks low) but steady (spread 0.86). The unlimited tree is right on average but its answer jumps around the most (spread 2.0): high variance. Depth 3 sits in between. Balancing the two is the whole game."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Smart Student Predictor",
      "blocks": [
        {
          "type": "p",
          "text": "Compare a deep tree and a shallow tree with train and test scores. First on one split:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "smart_predictor.py",
          "code": "X_train, X_test, y_train, y_test = train_test_split(\n    df_curve[[\"hours\"]], df_curve[\"marks\"], test_size=0.3, random_state=42)\n\ndef fit_report(name, model):\n    model.fit(X_train, y_train)\n    train, test = model.score(X_train, y_train), model.score(X_test, y_test)\n    print(f\"{name:14} train {train:.2f} | test {test:.2f} | gap {train - test:.2f}\")\n\nfit_report(\"Deep tree\", DecisionTreeRegressor(max_depth=None, random_state=42))\nfit_report(\"Shallow tree\", DecisionTreeRegressor(max_depth=2, random_state=42))\nfit_report(\"Medium tree\", DecisionTreeRegressor(max_depth=3, random_state=42))",
          "output": "Deep tree      train 1.00 | test 0.90 | gap 0.10\nShallow tree   train 0.94 | test 0.61 | gap 0.33\nMedium tree    train 0.99 | test 0.85 | gap 0.14"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "On this one split the deep tree scores best on test (0.90) and the shallow tree worst (0.61). A single split with 9 test students can mislead. Always repeat over several splits before judging."
        },
        {
          "type": "p",
          "text": "Now the same comparison averaged over 10 splits, with the automatic verdict:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "smart_predictor_avg.py",
          "code": "show(\"Deep tree\", lambda: DecisionTreeRegressor(max_depth=None, random_state=42))\nshow(\"Shallow tree\", lambda: DecisionTreeRegressor(max_depth=2, random_state=42))\nshow(\"Medium tree\", lambda: DecisionTreeRegressor(max_depth=3, random_state=42))",
          "output": "Deep tree            train 1.00  test 0.79  gap 0.21  OVERFIT\nShallow tree         train 0.94  test 0.76  gap 0.18  good fit\nMedium tree          train 0.99  test 0.83  gap 0.16  good fit"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The stable story: the deep tree overfits (train 1.00, test 0.79), the shallow tree is solid, and the medium tree has the best test score."
        }
      ]
    },
    {
      "id": "challenge",
      "icon": "💡",
      "title": "Challenge: Try Different Depths",
      "meta": "Very important",
      "blocks": [
        {
          "type": "p",
          "text": "Test max_depth 1, 3 and 5 on the noisy data and find the best balance. The best depth is the one with the highest TEST score, not the highest train score:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "best_depth.py",
          "code": "results = {}\nfor depth in [1, 3, 5]:\n    tr, te = scores(lambda: DecisionTreeRegressor(max_depth=depth, random_state=42))\n    results[depth] = te\n    print(f\"max_depth={depth}: train {tr:.2f} | test {te:.2f}\")\n\nbest = max(results, key=results.get)\nprint(\"\\nBest balance: max_depth =\", best)",
          "output": "max_depth=1: train 0.74 | test 0.45\nmax_depth=3: train 0.99 | test 0.83\nmax_depth=5: train 1.00 | test 0.79\n\nBest balance: max_depth = 3"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Depth 1 underfits, depth 5 starts to overfit, depth 3 balances. In real projects you pick the setting with the best test (or cross-validation) score."
        }
      ]
    },
    {
      "id": "truth",
      "icon": "🏭",
      "title": "Real-World Insight and Industry Truth",
      "blocks": [
        {
          "type": "p",
          "text": "Most ML engineering is not choosing fancy models. It is controlling overfitting. A model with 99% train performance and 60% test performance is bad. Here is the toolbox:"
        },
        {
          "type": "table",
          "head": [
            "Remedy",
            "How"
          ],
          "rows": [
            [
              "Simplify the model",
              "Lower max_depth, lower polynomial degree"
            ],
            [
              "Get more data",
              "More rows make memorizing harder"
            ],
            [
              "Limit the leaves",
              "min_samples_leaf stops tiny leaves"
            ],
            [
              "Validate properly",
              "Always judge by test data, and later by cross-validation"
            ],
            [
              "Remove noisy or useless features",
              "Fewer distractions to memorize"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Never judge a model by its training score alone."
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
            "Underfitting is too simple, overfitting is too complex",
            "How to detect both by comparing train and test scores",
            "Overfitting needs noise: clean data can hide it",
            "The bias-variance trade-off in numbers",
            "Choose complexity by the best test score"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Smart Student Predictor: Fit Check",
    "file": "day13_final.py",
    "description": "One program combining Day 13: models of rising complexity compared on train and test scores (averaged over 10 splits), an automatic underfit / good fit / overfit verdict, the best model by test score and a plot of three fits.",
    "concepts": [
      "underfitting",
      "overfitting",
      "train vs test score",
      "R²",
      "max_depth",
      "polynomial degree",
      "pipeline"
    ],
    "code": "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.preprocessing import PolynomialFeatures, StandardScaler\nfrom sklearn.pipeline import make_pipeline\n\n# 1. DATA: noisy, curved (marks rise then level off)\ndata_curve = {\n    \"hours\": [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5, 14.0, 14.5, 15.0],\n    \"marks\": [33, 37, 51, 48, 53, 61, 57, 62, 67, 68, 67, 72, 74, 78, 73, 77, 84, 87, 78, 85, 81, 82, 82, 84, 89, 89, 87, 86, 87, 87]\n}\ndf = pd.DataFrame(data_curve)\nprint(\"=== SMART STUDENT PREDICTOR: FIT CHECK ===\")\nprint(df.head(3))\n\n# 2. HELPERS\ndef scores(make_model):\n    train_scores, test_scores = [], []\n    for seed in range(10):\n        X_tr, X_te, y_tr, y_te = train_test_split(df[[\"hours\"]], df[\"marks\"], test_size=0.3, random_state=seed)\n        model = make_model().fit(X_tr, y_tr)\n        train_scores.append(model.score(X_tr, y_tr))\n        test_scores.append(model.score(X_te, y_te))\n    return np.mean(train_scores), np.mean(test_scores)\n\ndef verdict(train, test):\n    if train < 0.9:\n        return \"underfit\"\n    if train - test > 0.2:\n        return \"OVERFIT\"\n    return \"good fit\"\n\ndef poly_model(degree):\n    return make_pipeline(PolynomialFeatures(degree), StandardScaler(), LinearRegression())\n\n# 3. COMPARE MODELS OF INCREASING COMPLEXITY (average of 10 splits)\ncandidates = [\n    (\"Straight line\", LinearRegression),\n    (\"Tree depth 1\", lambda: DecisionTreeRegressor(max_depth=1, random_state=42)),\n    (\"Tree depth 3\", lambda: DecisionTreeRegressor(max_depth=3, random_state=42)),\n    (\"Tree depth None\", lambda: DecisionTreeRegressor(random_state=42)),\n    (\"Polynomial deg 2\", lambda: poly_model(2)),\n    (\"Polynomial deg 10\", lambda: poly_model(10)),\n]\nprint(\"\\nModel                train  test   gap   verdict\")\nbest_name, best_test = None, -1\nfor name, make_model in candidates:\n    tr, te = scores(make_model)\n    print(f\"{name:18} {tr:6.2f} {te:5.2f} {tr - te:5.2f}   {verdict(tr, te)}\")\n    if te > best_test:\n        best_name, best_test = name, te\nprint(\"\\nBest model by TEST score:\", best_name, f\"({best_test:.2f})\")\n\n# 4. DRAW THREE FITS ON ONE SPLIT\nX_train, X_test, y_train, y_test = train_test_split(df[[\"hours\"]], df[\"marks\"], test_size=0.3, random_state=42)\ngrid = pd.DataFrame({\"hours\": np.linspace(0.5, 15, 200)})\nplt.scatter(X_train, y_train, color=\"blue\", label=\"Train data\")\nplt.scatter(X_test, y_test, color=\"orange\", s=90, label=\"Test data\")\nfor name, make_model, color in [(\"Straight line (underfit)\", LinearRegression, \"gray\"),\n                                (\"Tree depth 3 (good)\", lambda: DecisionTreeRegressor(max_depth=3, random_state=42), \"green\"),\n                                (\"Polynomial deg 10 (overfit)\", lambda: poly_model(10), \"red\")]:\n    plt.plot(grid[\"hours\"], make_model().fit(X_train, y_train).predict(grid), color=color, label=name)\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"Underfit, good fit and overfit\")\nplt.legend()\nplt.show()",
    "output": "=== SMART STUDENT PREDICTOR: FIT CHECK ===\n   hours  marks\n0    0.5     33\n1    1.0     37\n2    1.5     51\n\nModel                train  test   gap   verdict\nStraight line        0.85  0.64  0.20   underfit\nTree depth 1         0.74  0.45  0.29   underfit\nTree depth 3         0.99  0.83  0.16   good fit\nTree depth None      1.00  0.79  0.21   OVERFIT\nPolynomial deg 2     0.96  0.89  0.07   good fit\nPolynomial deg 10    0.98  0.58  0.40   OVERFIT\n\nBest model by TEST score: Polynomial deg 2 (0.89)"
  },
  "practice": [
    {
      "title": "Ad Spend Depth Detector",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Sales grow with advertising spend, then level off. Find the tree depth that balances the fit.",
      "tasks": [
        "Create the DataFrame",
        "Write scores(depth) returning the average train and test R² over 10 splits (test_size=0.3, random_state 0 to 9)",
        "Print train, test and the verdict for depths 1, 2, 3, 5 and None",
        "Find the SIMPLEST depth whose test score is within 0.01 of the best one",
        "Say which depths underfit and which overfit"
      ],
      "hint": "Use DecisionTreeRegressor(max_depth=depth, random_state=42) and model.score(...). Sort depths simplest first (None counts as the largest) and take the first one within 0.01 of the best score.",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeRegressor\n\ndata = {\n    \"ad_spend\": [1.0, 2.0, 2.9, 3.9, 4.8, 5.8, 6.8, 7.7, 8.7, 9.6, 10.6, 11.6, 12.5, 13.5, 14.4, 15.4, 16.4, 17.3, 18.3, 19.2, 20.2, 21.2, 22.1, 23.1, 24.0, 25.0],\n    \"sales\": [63, 69, 91, 86, 119, 109, 132, 138, 139, 178, 152, 167, 176, 159, 186, 176, 189, 173, 174, 196, 192, 190, 196, 196, 182, 173]\n}\n\ndef verdict(train, test):\n    if train < 0.9:\n        return \"underfit\"\n    if train - test > 0.2:\n        return \"OVERFIT\"\n    return \"good fit\"\n\n# TODO 1: DataFrame\n\n# TODO 2: scores(depth)\n\n# TODO 3: print the table for depths 1, 2, 3, 5, None\n\n# TODO 4: simplest depth within 0.01 of the best test score",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeRegressor\n\ndata = {\n    \"ad_spend\": [1.0, 2.0, 2.9, 3.9, 4.8, 5.8, 6.8, 7.7, 8.7, 9.6, 10.6, 11.6, 12.5, 13.5, 14.4, 15.4, 16.4, 17.3, 18.3, 19.2, 20.2, 21.2, 22.1, 23.1, 24.0, 25.0],\n    \"sales\": [63, 69, 91, 86, 119, 109, 132, 138, 139, 178, 152, 167, 176, 159, 186, 176, 189, 173, 174, 196, 192, 190, 196, 196, 182, 173]\n}\ndf = pd.DataFrame(data)\n\ndef verdict(train, test):\n    if train < 0.9:\n        return \"underfit\"\n    if train - test > 0.2:\n        return \"OVERFIT\"\n    return \"good fit\"\n\ndef scores(depth):\n    train_scores, test_scores = [], []\n    for seed in range(10):\n        X_train, X_test, y_train, y_test = train_test_split(df[[\"ad_spend\"]], df[\"sales\"], test_size=0.3, random_state=seed)\n        model = DecisionTreeRegressor(max_depth=depth, random_state=42).fit(X_train, y_train)\n        train_scores.append(model.score(X_train, y_train))\n        test_scores.append(model.score(X_test, y_test))\n    return np.mean(train_scores), np.mean(test_scores)\n\nresults = {}\nfor depth in [1, 2, 3, 5, None]:\n    train, test = scores(depth)\n    results[depth] = test\n    print(f\"depth {str(depth):4} train {train:.2f} | test {test:.2f} | {verdict(train, test)}\")\n\nbest_score = max(results.values())\nsimplest_first = sorted(results, key=lambda d: 99 if d is None else d)\nbest = next(d for d in simplest_first if results[d] >= best_score - 0.01)\nprint(\"\\nSimplest depth within 0.01 of the best:\", best)",
      "output": "depth 1    train 0.77 | test 0.65 | underfit\ndepth 2    train 0.94 | test 0.76 | good fit\ndepth 3    train 0.98 | test 0.79 | good fit\ndepth 5    train 1.00 | test 0.79 | OVERFIT\ndepth None train 1.00 | test 0.78 | OVERFIT\n\nSimplest depth within 0.01 of the best: 3",
      "note": "When two depths score almost the same on test data, choose the simpler one: it is cheaper, easier to explain and less likely to overfit."
    },
    {
      "title": "Sleep and Performance Curves",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Performance rises with sleep up to about 7.5 hours, then falls (an upside-down U). A straight line cannot capture that.",
      "tasks": [
        "Create the DataFrame",
        "Build poly_model(degree) as a pipeline: PolynomialFeatures, StandardScaler, LinearRegression",
        "Print train, test and the verdict (averaged over 10 splits, test_size=0.3) for degrees 1, 2, 4 and 9",
        "Find the best degree by test score",
        "Explain why degree 1 underfits and degree 9 overfits"
      ],
      "hint": "Pipeline: make_pipeline(PolynomialFeatures(degree), StandardScaler(), LinearRegression()). The score() of a pipeline is R².",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.preprocessing import PolynomialFeatures, StandardScaler\nfrom sklearn.pipeline import make_pipeline\n\ndata = {\n    \"sleep_hours\": [3.0, 3.5, 3.9, 4.4, 4.9, 5.4, 5.8, 6.3, 6.8, 7.3, 7.7, 8.2, 8.7, 9.2, 9.6, 10.1, 10.6, 11.1, 11.5, 12.0],\n    \"performance\": [27, 40, 58, 52, 76, 66, 81, 86, 98, 92, 88, 100, 99, 78, 83, 67, 62, 52, 32, 28]\n}\n\ndef verdict(train, test):\n    if train < 0.9:\n        return \"underfit\"\n    if train - test > 0.2:\n        return \"OVERFIT\"\n    return \"good fit\"\n\n# TODO 1: DataFrame\n\n# TODO 2: poly_model(degree) pipeline\n\n# TODO 3: table for degrees 1, 2, 4, 9 over 10 splits\n\n# TODO 4: best degree",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.preprocessing import PolynomialFeatures, StandardScaler\nfrom sklearn.pipeline import make_pipeline\n\ndata = {\n    \"sleep_hours\": [3.0, 3.5, 3.9, 4.4, 4.9, 5.4, 5.8, 6.3, 6.8, 7.3, 7.7, 8.2, 8.7, 9.2, 9.6, 10.1, 10.6, 11.1, 11.5, 12.0],\n    \"performance\": [27, 40, 58, 52, 76, 66, 81, 86, 98, 92, 88, 100, 99, 78, 83, 67, 62, 52, 32, 28]\n}\ndf = pd.DataFrame(data)\n\ndef verdict(train, test):\n    if train < 0.9:\n        return \"underfit\"\n    if train - test > 0.2:\n        return \"OVERFIT\"\n    return \"good fit\"\n\ndef poly_model(degree):\n    return make_pipeline(PolynomialFeatures(degree), StandardScaler(), LinearRegression())\n\nresults = {}\nfor degree in [1, 2, 4, 9]:\n    train_scores, test_scores = [], []\n    for seed in range(10):\n        X_train, X_test, y_train, y_test = train_test_split(df[[\"sleep_hours\"]], df[\"performance\"], test_size=0.3, random_state=seed)\n        model = poly_model(degree).fit(X_train, y_train)\n        train_scores.append(model.score(X_train, y_train))\n        test_scores.append(model.score(X_test, y_test))\n    train, test = np.mean(train_scores), np.mean(test_scores)\n    results[degree] = test\n    print(f\"degree {degree}: train {train:.2f} | test {test:.2f} | {verdict(train, test)}\")\n\nprint(\"\\nBest degree by test score:\", max(results, key=results.get))",
      "output": "degree 1: train 0.07 | test -0.73 | underfit\ndegree 2: train 0.94 | test 0.81 | good fit\ndegree 4: train 0.95 | test 0.71 | OVERFIT\ndegree 9: train 0.96 | test -6.30 | OVERFIT\n\nBest degree by test score: 2",
      "note": "Degree 9 has far more wiggle than 20 noisy points justify. It threads through the training points (train stays high) and then swings wildly between them, so the test score collapses, even far below 0. Degree 2 matches the true upside-down U shape. Degree 1 is a straight line that cannot bend at all."
    }
  ],
  "checklist": [
    "Understood underfitting vs overfitting",
    "Compared train and test scores",
    "Saw complexity change with max_depth",
    "Used noisy data to see real overfitting",
    "Understood bias and variance",
    "Compared deep and shallow trees",
    "Picked the best depth by test score"
  ],
  "quiz": [
    {
      "q": "Train score 0.99 and test score 0.60 most likely means:",
      "options": [
        "Underfitting",
        "Overfitting",
        "A perfect model",
        "Bad scaling"
      ],
      "answer": 1,
      "why": "A large gap between a great train score and a poor test score means the model memorized the training data."
    },
    {
      "q": "A straight line fitted to clearly curved data is:",
      "options": [
        "Overfitting",
        "Underfitting (high bias)",
        "A perfect fit",
        "High variance"
      ],
      "answer": 1,
      "why": "The model is too simple, so it misses the pattern and scores poorly on both train and test."
    },
    {
      "q": "Which max_depth should you choose?",
      "options": [
        "The highest train score",
        "The one with the best test score",
        "Always 1",
        "Always None"
      ],
      "answer": 1,
      "why": "Complexity is chosen by performance on unseen data, not by training performance."
    },
    {
      "q": "Why did the unlimited tree NOT overfit on the perfectly clean 8 row dataset?",
      "options": [
        "Trees never overfit",
        "There was no noise to memorize",
        "The test set was larger",
        "Because scaling was used"
      ],
      "answer": 1,
      "why": "Overfitting means learning noise. With perfectly regular data, memorizing and learning the pattern are the same thing."
    }
  ]
},
// DAY 14 snippet. In course-data.js: add a comma after Day 13's closing }, then paste this object. No images for this day.
{
  "day": 14,
  "title": "Student Predictor v2: Professional ML Version",
  "subtitle": "Combine cleaning, feature engineering, three models, honest evaluation and overfitting control into one complete ML application.",
  "level": "Intermediate",
  "duration": "3 hours",
  "tags": [
    "Capstone",
    "Pipeline",
    "Model Comparison",
    "Data Cleaning",
    "Prediction Engine"
  ],
  "goals": [
    "Build a smarter ML application",
    "Combine cleaning, features, models, evaluation and overfitting control",
    "Think like a professional ML engineer"
  ],
  "sections": [
    {
      "id": "overview",
      "icon": "🎯",
      "title": "Project Overview",
      "meta": "Student Predictor v2: Professional ML Version",
      "blocks": [
        {
          "type": "p",
          "text": "You will build one complete system that brings together everything from Days 1 to 13."
        },
        {
          "type": "table",
          "head": [
            "Pipeline step",
            "Skill used",
            "From day"
          ],
          "rows": [
            [
              "Clean the data",
              "Duplicates, impossible values, missing values",
              "Day 8"
            ],
            [
              "Engineer features",
              "Combined features, tested for real benefit, no leakage",
              "Day 9"
            ],
            [
              "Split and scale correctly",
              "Stratified split, scaler fitted on train only",
              "Days 5, 6, 9"
            ],
            [
              "Train three models",
              "Linear Regression, Decision Tree, KNN",
              "Days 4, 10, 11"
            ],
            [
              "Evaluate honestly",
              "Test MAE over many splits, train vs test, stability",
              "Days 5, 13"
            ],
            [
              "Classify Pass/Fail",
              "Logistic Regression, precision and recall",
              "Days 6, 12"
            ],
            [
              "Predict for a new student",
              "One function that repeats every step",
              "Day 7"
            ]
          ]
        },
        {
          "type": "table",
          "head": [
            "",
            "Details"
          ],
          "rows": [
            [
              "Inputs",
              "Hours studied, sleep hours, attendance"
            ],
            [
              "Outputs",
              "Predicted marks and Pass/Fail with a chance"
            ],
            [
              "Models",
              "Linear Regression, Decision Tree, KNN (marks) and Logistic Regression (Pass/Fail)"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "This is a data pipeline plus several models plus honest evaluation plus a prediction engine. It is no longer beginner ML."
        }
      ]
    },
    {
      "id": "imports",
      "icon": "⚡",
      "title": "Step 1: Import Libraries",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "day14_project.py",
          "code": "import pandas as pd\nimport numpy as np\nimport matplotlib.pyplot as plt\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.neighbors import KNeighborsRegressor\nfrom sklearn.metrics import mean_absolute_error, accuracy_score, precision_score, recall_score, confusion_matrix\n\nprint(\"Libraries ready\")",
          "output": "Libraries ready"
        }
      ]
    },
    {
      "id": "data",
      "icon": "⚡",
      "title": "Step 2: Create the Dataset",
      "meta": "40 students, with real-world mess",
      "blocks": [
        {
          "type": "p",
          "text": "Eight rows are too few to evaluate anything, so the project uses 40 students. Like real data, it is messy: a missing sleep value, two missing marks, an attendance typed as 150 and one student entered twice."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "dataset.py",
          "code": "data = {\n    \"hours_studied\": [5.1, 7.2, 8.0, 1.1, 3.5, 8.7, 5.1, 3.5, 5.3, 2.8, 7.5, 3.7, 5.3, 1.0, 6.4, 2.7, 8.5, 4.0, 7.0, 7.1, 8.0, 1.9, 3.4, 4.8, 6.4, 3.1, 6.6, 6.3, 2.5, 3.6, 8.1, 1.7, 7.0, 1.5, 6.9, 6.9, 4.3, 8.9, 4.6, 2.5, 5.1],\n    \"sleep_hours\": [5.8, 7.6, 5.8, 4.3, 5.6, 9.0, 5.4, 6.3, 7.7, None, 4.9, 5.1, 4.7, 5.0, 9.0, 5.2, 4.6, 6.5, 6.3, 7.7, 7.1, 7.1, 4.8, 6.7, 4.6, 4.8, 6.3, 6.1, 7.7, 4.4, 5.4, 4.8, 6.5, 6.9, 7.2, 5.1, 6.1, 6.3, 4.4, 6.9, 5.4],\n    \"attendance\": [61, 52, 98, 54, 87, 75, 55, 76, 72, 77, 97, 100, 83, 68, 72, 89, 81, 55, 83, 98, 62, 70, 150, 91, 64, 58, 58, 64, 50, 87, 93, 96, 65, 74, 87, 83, 63, 69, 95, 87, 55],\n    \"marks\": [48, 59, 80, None, 51, 77, 44, 40, 56, 46, 76, 53, 56, 27, 68, 43, 74, None, 68, 76, 60, 37, 36, 59, 44, 36, 52, 58, 38, 44, 78, 37, 55, 33, 73, 66, 46, 74, 50, 44, 44]\n}\ndf = pd.DataFrame(data)\nprint(\"Shape:\", df.shape)\nprint(df.head(5))",
          "output": "Shape: (41, 4)\n   hours_studied  sleep_hours  attendance  marks\n0            5.1          5.8          61   48.0\n1            7.2          7.6          52   59.0\n2            8.0          5.8          98   80.0\n3            1.1          4.3          54    NaN\n4            3.5          5.6          87   51.0"
        }
      ]
    },
    {
      "id": "clean",
      "icon": "🧹",
      "title": "Step 3: Data Cleaning",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "find_problems.py",
          "code": "print(\"Rows:\", len(df))\nprint(\"\\nMissing values:\")\nprint(df.isnull().sum())\nprint(\"\\nDuplicate rows:\", df.duplicated().sum())\nprint(\"Impossible attendance values:\", ((df[\"attendance\"] < 0) | (df[\"attendance\"] > 100)).sum())",
          "output": "Rows: 41\n\nMissing values:\nhours_studied    0\nsleep_hours      1\nattendance       0\nmarks            2\ndtype: int64\n\nDuplicate rows: 1\nImpossible attendance values: 1"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "clean_data.py",
          "code": "def clean_data(raw):\n    d = raw.drop_duplicates().copy()                                   # 1. duplicates FIRST\n    d.loc[(d[\"attendance\"] < 0) | (d[\"attendance\"] > 100), \"attendance\"] = np.nan   # 2. impossible values\n    d = d.dropna(subset=[\"marks\"]).copy()                              # 3. never invent the answer\n    for col in [\"hours_studied\", \"sleep_hours\", \"attendance\"]:\n        d[col] = d[col].fillna(d[col].mean()).round(1)                 # 4. fill gaps in the INPUTS\n    return d.reset_index(drop=True)\n\ndata = clean_data(df)\nprint(\"Rows before:\", len(df), \"| after:\", len(data))\nprint(\"Missing values left:\", data.isnull().sum().sum())",
          "output": "Rows before: 41 | after: 38\nMissing values left: 0"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "The original task fills the missing marks with the average and uses fillna(..., inplace=True), which does nothing in Pandas 3. Also, marks are the thing we want to predict: filling them with an average invents answers. We drop the rows with missing marks and fill gaps only in the input columns."
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Order matters (Day 8): remove duplicates first, then handle impossible values, then fill."
        }
      ]
    },
    {
      "id": "features",
      "icon": "⚡",
      "title": "Step 4: Feature Engineering",
      "meta": "Create features, then test them",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "features.py",
          "code": "def make_features(d):\n    out = d.copy()\n    out[\"total_effort\"] = out[\"hours_studied\"] + out[\"attendance\"] / 10\n    out[\"study_sleep_ratio\"] = (out[\"hours_studied\"] / out[\"sleep_hours\"]).round(2)\n    out[\"effective_hours\"] = (out[\"hours_studied\"] * out[\"attendance\"] / 100).round(2)\n    return out\n\ndata = make_features(data)\nprint(data[[\"hours_studied\", \"attendance\", \"total_effort\", \"study_sleep_ratio\", \"effective_hours\"]].head(3))",
          "output": "   hours_studied  attendance  total_effort  study_sleep_ratio  effective_hours\n0            5.1        61.0          11.2               0.88             3.11\n1            7.2        52.0          12.4               0.95             3.74\n2            8.0        98.0          17.8               1.38             7.84"
        },
        {
          "type": "p",
          "text": "The task's two features (total_effort, study_sleep_ratio) plus effective_hours (studying only pays off when you attend). Do they help? Test each feature set with a Linear Regression, averaging over 10 splits:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "test_features.py",
          "code": "RAW = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\n\ndef linear_mae(features):\n    errors = []\n    for seed in range(10):\n        X_tr, X_te, y_tr, y_te = train_test_split(data[features], data[\"marks\"], test_size=0.25, random_state=seed)\n        model = LinearRegression().fit(X_tr, y_tr)\n        errors.append(mean_absolute_error(y_te, model.predict(X_te)))\n    return np.mean(errors), np.std(errors)\n\nfeature_sets = [\n    (\"Raw features\", RAW),\n    (\"+ total_effort, study_sleep_ratio (task)\", RAW + [\"total_effort\", \"study_sleep_ratio\"]),\n    (\"+ effective_hours\", RAW + [\"effective_hours\"]),\n]\nfor name, feats in feature_sets:\n    mae, spread = linear_mae(feats)\n    print(f\"{name:42} test MAE {mae:.2f} (spread {spread:.2f})\")",
          "output": "Raw features                               test MAE 2.84 (spread 0.38)\n+ total_effort, study_sleep_ratio (task)   test MAE 2.79 (spread 0.53)\n+ effective_hours                          test MAE 2.37 (spread 0.27)"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Only effective_hours helps (2.84 down to 2.37 and steadier). The task's two features add almost nothing here: total_effort is just a mix of existing columns and the ratio adds noise. The final model uses the raw features plus effective_hours. This is the Day 9 lesson in action: test every feature."
        }
      ]
    },
    {
      "id": "target",
      "icon": "⚡",
      "title": "Steps 5 and 6: Pass/Fail Column and Visualization",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "status.py",
          "code": "data[\"status\"] = data[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\nprint(\"Fail / Pass counts:\", (data[\"status\"] == 0).sum(), \"/\", (data[\"status\"] == 1).sum())",
          "output": "Fail / Pass counts: 16 / 22"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "scatter.py",
          "code": "colors = data[\"status\"].map({1: \"green\", 0: \"red\"})\nplt.scatter(data[\"hours_studied\"], data[\"marks\"], c=colors)\nplt.axhline(50, color=\"gray\", linestyle=\"--\")\nplt.xlabel(\"Hours\")\nplt.ylabel(\"Marks\")\nplt.title(\"Study vs Marks (green = Pass, red = Fail)\")\nplt.show()"
        },
        {
          "type": "p",
          "text": "What you should see: marks rise with hours, with some spread caused by attendance and sleep. Red dots (Fail) sit below the dashed pass line."
        }
      ]
    },
    {
      "id": "prepare",
      "icon": "⚡",
      "title": "Steps 7 to 9: Prepare, Split and Scale",
      "blocks": [
        {
          "type": "p",
          "text": "The original task scales ALL the data first and then splits, which leaks test information. Here we split first (one split for marks AND status, stratified on Pass/Fail) and fit the scaler on the training rows only:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "split_scale.py",
          "code": "FEATURES = RAW + [\"effective_hours\"]\nX = data[FEATURES]\n\nX_train, X_test, marks_train, marks_test, status_train, status_test = train_test_split(\n    X, data[\"marks\"], data[\"status\"], test_size=0.25, random_state=42, stratify=data[\"status\"])\n\nscaler = StandardScaler().fit(X_train)\nX_train_s, X_test_s = scaler.transform(X_train), scaler.transform(X_test)\n\nprint(\"Train rows:\", len(X_train), \"| Test rows:\", len(X_test))\nprint(\"Features:\", FEATURES)",
          "output": "Train rows: 28 | Test rows: 10\nFeatures: ['hours_studied', 'sleep_hours', 'attendance', 'effective_hours']"
        }
      ]
    },
    {
      "id": "models",
      "icon": "🚀",
      "title": "Steps 10 to 12: Train Three Models",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "three_models.py",
          "code": "reg_models = {\n    \"Linear Regression\": LinearRegression(),\n    \"Decision Tree\": DecisionTreeRegressor(max_depth=3, random_state=42),\n    \"KNN (K=3)\": KNeighborsRegressor(n_neighbors=3),\n}\n\nfor name, model in reg_models.items():\n    model.fit(X_train_s, marks_train)\n    error = mean_absolute_error(marks_test, model.predict(X_test_s))\n    print(f\"{name:18} test error: {error:.2f} marks\")",
          "output": "Linear Regression  test error: 3.40 marks\nDecision Tree      test error: 3.97 marks\nKNN (K=3)          test error: 4.67 marks"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "These numbers come from just 10 test students on one split, so they are only a first look. The next step compares the models properly."
        }
      ]
    },
    {
      "id": "compare",
      "icon": "🧠",
      "title": "Step 13 and Final Challenge: Compare Models Properly",
      "meta": "Train score, test score, stability",
      "blocks": [
        {
          "type": "p",
          "text": "Which model has the lowest error? Which overfits? Which is stable? Average over 10 splits and look at train R², test R² and the spread of the error:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "compare_models.py",
          "code": "def compare(make_model):\n    maes, train_r2, test_r2 = [], [], []\n    for seed in range(10):\n        X_tr, X_te, y_tr, y_te = train_test_split(X, data[\"marks\"], test_size=0.25, random_state=seed)\n        sc = StandardScaler().fit(X_tr)\n        X_tr, X_te = sc.transform(X_tr), sc.transform(X_te)\n        model = make_model().fit(X_tr, y_tr)\n        maes.append(mean_absolute_error(y_te, model.predict(X_te)))\n        train_r2.append(model.score(X_tr, y_tr))\n        test_r2.append(model.score(X_te, y_te))\n    return np.mean(maes), np.std(maes), np.mean(train_r2), np.mean(test_r2)\n\ndef verdict(train, test):\n    if train < 0.9:\n        return \"underfit\"\n    if train - test > 0.15:\n        return \"OVERFIT\"          # a stricter 0.15 threshold for this project\n    return \"good fit\"\n\ncandidates = {\n    \"Linear Regression\": LinearRegression,\n    \"Decision Tree (depth 3)\": lambda: DecisionTreeRegressor(max_depth=3, random_state=42),\n    \"Decision Tree (no limit)\": lambda: DecisionTreeRegressor(random_state=42),\n    \"KNN (K=3)\": lambda: KNeighborsRegressor(n_neighbors=3),\n}\nprint(\"Model                    test MAE  spread  train R2  test R2  verdict\")\nfor name, make_model in candidates.items():\n    mae, spread, tr, te = compare(make_model)\n    print(f\"{name:24} {mae:8.2f} {spread:7.2f} {tr:9.2f} {te:8.2f}  {verdict(tr, te)}\")",
          "output": "Model                    test MAE  spread  train R2  test R2  verdict\nLinear Regression            2.37    0.27      0.96     0.95  good fit\nDecision Tree (depth 3)      5.23    1.31      0.97     0.77  OVERFIT\nDecision Tree (no limit)     4.66    0.70      1.00     0.82  OVERFIT\nKNN (K=3)                    4.72    1.17      0.92     0.82  good fit"
        },
        {
          "type": "table",
          "head": [
            "Question",
            "Answer from the table"
          ],
          "rows": [
            [
              "Lowest error?",
              "Linear Regression (2.37 marks)"
            ],
            [
              "Which model overfits?",
              "Both trees: train 0.97 and 1.00 against test 0.77 and 0.82 (the gap is above 0.15). KNN and Linear Regression keep a small gap."
            ],
            [
              "Which feels stable?",
              "Linear Regression: the smallest spread of errors across splits"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Linear Regression wins because these marks follow a smooth rule (hours x attendance plus sleep). Trees and KNN need far more data to compete. The best model is the one that wins on test data, not the fanciest one."
        }
      ]
    },
    {
      "id": "clf",
      "icon": "⚡",
      "title": "Step 14: Pass/Fail Classifier",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "classifier.py",
          "code": "clf = LogisticRegression().fit(X_train_s, status_train)\npred = clf.predict(X_test_s)\n\nprint(\"Confusion matrix (rows: actual Fail, Pass | columns: predicted Fail, Pass):\")\nprint(confusion_matrix(status_test, pred, labels=[0, 1]))\nprint(\"\\nAccuracy :\", round(accuracy_score(status_test, pred), 2))\nprint(\"Precision:\", round(precision_score(status_test, pred, zero_division=0), 2))\nprint(\"Recall   :\", round(recall_score(status_test, pred, zero_division=0), 2))\nprint(\"Baseline (always Pass):\", round((status_test == 1).mean(), 2))",
          "output": "Confusion matrix (rows: actual Fail, Pass | columns: predicted Fail, Pass):\n[[4 0]\n [0 6]]\n\nAccuracy : 1.0\nPrecision: 1.0\nRecall   : 1.0\nBaseline (always Pass): 0.6"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "The task trained the classifier on all the data and then classified one hand-typed student. We evaluate on unseen students instead (Days 6 and 12). Perfect scores on only 10 test students show the problem is easy, not that the model is flawless."
        }
      ]
    },
    {
      "id": "system",
      "icon": "🔥",
      "title": "Step 15: The Final Prediction System",
      "blocks": [
        {
          "type": "p",
          "text": "One function repeats every step for a new student: build the features, scale with the TRAINING scaler, predict marks and Pass/Fail. The task typed the engineered values by hand (even rounding 0.714 to 0.7), which invites mistakes:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "predict_student.py",
          "code": "final_model = reg_models[\"Linear Regression\"]\n\ndef predict_student(hours, sleep, attendance):\n    new = pd.DataFrame({\"hours_studied\": [hours], \"sleep_hours\": [sleep], \"attendance\": [attendance]})\n    new[\"effective_hours\"] = (new[\"hours_studied\"] * new[\"attendance\"] / 100).round(2)\n    x = scaler.transform(new[FEATURES])\n\n    marks = round(min(max(final_model.predict(x)[0], 0), 100), 1)\n    chance = clf.predict_proba(x)[0][1]\n    status = \"Pass ✅\" if clf.predict(x)[0] == 1 else \"Fail ❌\"\n    return marks, status, chance\n\nfor hours, sleep, attendance in [(2, 5, 55), (5, 7, 80), (8, 8, 95)]:\n    marks, status, chance = predict_student(hours, sleep, attendance)\n    print(f\"{hours} h, {sleep} h sleep, {attendance}% -> {marks} marks | {status} (chance of passing: {chance:.0%})\")",
          "output": "2 h, 5 h sleep, 55% -> 29.6 marks | Fail ❌ (chance of passing: 1%)\n5 h, 7 h sleep, 80% -> 56.7 marks | Pass ✅ (chance of passing: 85%)\n8 h, 8 h sleep, 95% -> 86.8 marks | Pass ✅ (chance of passing: 100%)"
        },
        {
          "type": "p",
          "text": "Connect it to a user:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "user_input.py",
          "code": "hours = float(input(\"Hours Studied: \"))\nsleep = float(input(\"Sleep Hours: \"))\nattendance = float(input(\"Attendance: \"))\n\nmarks, status, chance = predict_student(hours, sleep, attendance)\nprint(\"\\nPredicted Marks:\", marks)\nprint(\"Result:\", status)"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Example: enter 5, 7 and 80 and you get a prediction with the same numbers as the table above. In the website workspace, three small pop-up boxes ask for your input."
        }
      ]
    },
    {
      "id": "built",
      "icon": "🏆",
      "title": "What You Built Today",
      "blocks": [
        {
          "type": "list",
          "items": [
            "A data pipeline that cleans messy data",
            "Feature engineering with real tests, not guesses",
            "Three regression models compared on train, test and stability",
            "A Pass/Fail classifier evaluated on unseen students",
            "A prediction engine that repeats every step for a new student"
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "This is the shape of a real ML project: clean, engineer, split, scale, train, compare, evaluate, deploy a function. Every later day plugs into this pipeline."
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Student Predictor v2 (Professional ML Version)",
    "file": "day14_final.py",
    "description": "The complete professional pipeline in one file: messy data in, cleaning, feature test, split and scale without leakage, three models compared on train, test and stability, a Pass/Fail classifier and a prediction function.",
    "concepts": [
      "data cleaning",
      "feature engineering",
      "no leakage",
      "model comparison",
      "overfitting check",
      "classification",
      "prediction engine"
    ],
    "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LinearRegression, LogisticRegression\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.neighbors import KNeighborsRegressor\nfrom sklearn.metrics import mean_absolute_error, accuracy_score, precision_score, recall_score\n\n# 1. DATA (40 students, messy)\ndata = {\n    \"hours_studied\": [5.1, 7.2, 8.0, 1.1, 3.5, 8.7, 5.1, 3.5, 5.3, 2.8, 7.5, 3.7, 5.3, 1.0, 6.4, 2.7, 8.5, 4.0, 7.0, 7.1, 8.0, 1.9, 3.4, 4.8, 6.4, 3.1, 6.6, 6.3, 2.5, 3.6, 8.1, 1.7, 7.0, 1.5, 6.9, 6.9, 4.3, 8.9, 4.6, 2.5, 5.1],\n    \"sleep_hours\": [5.8, 7.6, 5.8, 4.3, 5.6, 9.0, 5.4, 6.3, 7.7, None, 4.9, 5.1, 4.7, 5.0, 9.0, 5.2, 4.6, 6.5, 6.3, 7.7, 7.1, 7.1, 4.8, 6.7, 4.6, 4.8, 6.3, 6.1, 7.7, 4.4, 5.4, 4.8, 6.5, 6.9, 7.2, 5.1, 6.1, 6.3, 4.4, 6.9, 5.4],\n    \"attendance\": [61, 52, 98, 54, 87, 75, 55, 76, 72, 77, 97, 100, 83, 68, 72, 89, 81, 55, 83, 98, 62, 70, 150, 91, 64, 58, 58, 64, 50, 87, 93, 96, 65, 74, 87, 83, 63, 69, 95, 87, 55],\n    \"marks\": [48, 59, 80, None, 51, 77, 44, 40, 56, 46, 76, 53, 56, 27, 68, 43, 74, None, 68, 76, 60, 37, 36, 59, 44, 36, 52, 58, 38, 44, 78, 37, 55, 33, 73, 66, 46, 74, 50, 44, 44]\n}\ndf = pd.DataFrame(data)\nprint(\"=== STUDENT PREDICTOR v2 (PROFESSIONAL ML VERSION) ===\")\nprint(\"Raw rows:\", len(df), \"| missing:\", int(df.isnull().sum().sum()), \"| duplicates:\", df.duplicated().sum())\n\n# 2. CLEAN\ndef clean_data(raw):\n    d = raw.drop_duplicates().copy()\n    d.loc[(d[\"attendance\"] < 0) | (d[\"attendance\"] > 100), \"attendance\"] = np.nan\n    d = d.dropna(subset=[\"marks\"]).copy()\n    for col in [\"hours_studied\", \"sleep_hours\", \"attendance\"]:\n        d[col] = d[col].fillna(d[col].mean()).round(1)\n    return d.reset_index(drop=True)\n\ndata = clean_data(df)\nprint(\"Clean rows:\", len(data), \"| missing left:\", int(data.isnull().sum().sum()))\n\n# 3. FEATURES (effective_hours won the test, see the lesson)\ndata[\"effective_hours\"] = (data[\"hours_studied\"] * data[\"attendance\"] / 100).round(2)\ndata[\"status\"] = data[\"marks\"].apply(lambda x: 1 if x >= 50 else 0)\nFEATURES = [\"hours_studied\", \"sleep_hours\", \"attendance\", \"effective_hours\"]\nX = data[FEATURES]\n\n# 4. SPLIT AND SCALE (one split for marks and status, scaler fitted on train only)\nX_train, X_test, marks_train, marks_test, status_train, status_test = train_test_split(\n    X, data[\"marks\"], data[\"status\"], test_size=0.25, random_state=42, stratify=data[\"status\"])\nscaler = StandardScaler().fit(X_train)\nX_train_s, X_test_s = scaler.transform(X_train), scaler.transform(X_test)\n\n# 5. COMPARE MODELS PROPERLY (average of 10 splits)\ndef compare(make_model):\n    maes, train_r2, test_r2 = [], [], []\n    for seed in range(10):\n        X_tr, X_te, y_tr, y_te = train_test_split(X, data[\"marks\"], test_size=0.25, random_state=seed)\n        sc = StandardScaler().fit(X_tr)\n        X_tr, X_te = sc.transform(X_tr), sc.transform(X_te)\n        model = make_model().fit(X_tr, y_tr)\n        maes.append(mean_absolute_error(y_te, model.predict(X_te)))\n        train_r2.append(model.score(X_tr, y_tr))\n        test_r2.append(model.score(X_te, y_te))\n    return np.mean(maes), np.std(maes), np.mean(train_r2), np.mean(test_r2)\n\ndef verdict(train, test):\n    if train < 0.9:\n        return \"underfit\"\n    if train - test > 0.15:\n        return \"OVERFIT\"\n    return \"good fit\"\n\ncandidates = {\n    \"Linear Regression\": LinearRegression,\n    \"Decision Tree (depth 3)\": lambda: DecisionTreeRegressor(max_depth=3, random_state=42),\n    \"Decision Tree (no limit)\": lambda: DecisionTreeRegressor(random_state=42),\n    \"KNN (K=3)\": lambda: KNeighborsRegressor(n_neighbors=3),\n}\nprint(\"\\nModel                    test MAE  spread  train R2  test R2  verdict\")\nbest_name, best_mae = None, 999\nfor name, make_model in candidates.items():\n    mae, spread, tr, te = compare(make_model)\n    print(f\"{name:24} {mae:8.2f} {spread:7.2f} {tr:9.2f} {te:8.2f}  {verdict(tr, te)}\")\n    if mae < best_mae:\n        best_name, best_mae = name, mae\nprint(\"\\nBest model by test error:\", best_name)\n\n# 6. PASS/FAIL CLASSIFIER\nclf = LogisticRegression().fit(X_train_s, status_train)\npred = clf.predict(X_test_s)\nprint(\"\\nClassifier on unseen students:\")\nprint(\"  Accuracy :\", round(accuracy_score(status_test, pred), 2), \"| baseline (always Pass):\", round((status_test == 1).mean(), 2))\nprint(\"  Precision:\", round(precision_score(status_test, pred, zero_division=0), 2), \"| Recall:\", round(recall_score(status_test, pred, zero_division=0), 2))\n\n# 7. PREDICTION SYSTEM\nfinal_model = LinearRegression().fit(X_train_s, marks_train)\n\ndef predict_student(hours, sleep, attendance):\n    new = pd.DataFrame({\"hours_studied\": [hours], \"sleep_hours\": [sleep], \"attendance\": [attendance]})\n    new[\"effective_hours\"] = (new[\"hours_studied\"] * new[\"attendance\"] / 100).round(2)\n    x = scaler.transform(new[FEATURES])\n    marks = round(min(max(final_model.predict(x)[0], 0), 100), 1)\n    chance = clf.predict_proba(x)[0][1]\n    status = \"Pass ✅\" if clf.predict(x)[0] == 1 else \"Fail ❌\"\n    return marks, status, chance\n\nprint(\"\\nPredictions:\")\nfor hours, sleep, attendance in [(2, 5, 55), (5, 7, 80), (8, 8, 95)]:\n    marks, status, chance = predict_student(hours, sleep, attendance)\n    print(f\"  {hours} h, {sleep} h sleep, {attendance}% -> {marks} marks | {status} (chance of passing: {chance:.0%})\")",
    "output": "=== STUDENT PREDICTOR v2 (PROFESSIONAL ML VERSION) ===\nRaw rows: 41 | missing: 3 | duplicates: 1\nClean rows: 38 | missing left: 0\n\nModel                    test MAE  spread  train R2  test R2  verdict\nLinear Regression            2.37    0.27      0.96     0.95  good fit\nDecision Tree (depth 3)      5.23    1.31      0.97     0.77  OVERFIT\nDecision Tree (no limit)     4.66    0.70      1.00     0.82  OVERFIT\nKNN (K=3)                    4.72    1.17      0.92     0.82  good fit\n\nBest model by test error: Linear Regression\n\nClassifier on unseen students:\n  Accuracy : 1.0 | baseline (always Pass): 0.6\n  Precision: 1.0 | Recall: 1.0\n\nPredictions:\n  2 h, 5 h sleep, 55% -> 29.6 marks | Fail ❌ (chance of passing: 1%)\n  5 h, 7 h sleep, 80% -> 56.7 marks | Pass ✅ (chance of passing: 85%)\n  8 h, 8 h sleep, 95% -> 86.8 marks | Pass ✅ (chance of passing: 100%)"
  },
  "practice": [
    {
      "title": "House Price Pipeline",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Run the full mini pipeline on a messy house table: clean, add a feature, split, compare two models.",
      "tasks": [
        "Create the DataFrame and print the missing values per column",
        "Clean it: remove duplicates, turn rooms of 0 into missing, drop rows with a missing price, fill missing size, rooms and age with the mean",
        "Add the feature area_per_room = size_sqft / rooms (round to 1)",
        "Split (test_size=0.25, random_state=42) and train LinearRegression and DecisionTreeRegressor(max_depth=3, random_state=42)",
        "Print the test MAE of both and name the winner"
      ],
      "hint": "A row with an impossible value (rooms = 0) becomes NaN with df.loc[df[\"rooms\"] == 0, \"rooms\"] = np.nan. Never fill the target (price): drop those rows.",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"size_sqft\": [650, 900, 1200, 1500, 800, 1100, 1800, 2000, 950, 1350, 1100, None, 1700, 2200],\n    \"rooms\": [2, 2, 3, 3, 2, 3, 4, 4, 2, 3, 3, 3, 0, 5],\n    \"age\": [12, 5, 8, 3, 20, 10, 2, 1, 15, None, 10, 6, 4, 2],\n    \"price\": [38, 55, 72, 90, 44, 66, 108, 121, 52, 80, 66, 70, 102, None]\n}\n\n# TODO 1: DataFrame, missing values per column\n\n# TODO 2: clean (duplicates, rooms = 0, drop missing price, fill inputs)\n\n# TODO 3: feature area_per_room\n\n# TODO 4: split, train both models\n\n# TODO 5: test MAE and the winner",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"size_sqft\": [650, 900, 1200, 1500, 800, 1100, 1800, 2000, 950, 1350, 1100, None, 1700, 2200],\n    \"rooms\": [2, 2, 3, 3, 2, 3, 4, 4, 2, 3, 3, 3, 0, 5],\n    \"age\": [12, 5, 8, 3, 20, 10, 2, 1, 15, None, 10, 6, 4, 2],\n    \"price\": [38, 55, 72, 90, 44, 66, 108, 121, 52, 80, 66, 70, 102, None]\n}\ndf = pd.DataFrame(data)\nprint(\"Missing per column:\")\nprint(df.isnull().sum())\n\ndf = df.drop_duplicates().copy()\ndf.loc[df[\"rooms\"] == 0, \"rooms\"] = np.nan\ndf = df.dropna(subset=[\"price\"]).copy()\nfor col in [\"size_sqft\", \"rooms\", \"age\"]:\n    df[col] = df[col].fillna(df[col].mean()).round(1)\nprint(\"\\nClean rows:\", len(df))\n\ndf[\"area_per_room\"] = (df[\"size_sqft\"] / df[\"rooms\"]).round(1)\nfeatures = [\"size_sqft\", \"rooms\", \"age\", \"area_per_room\"]\n\nX_train, X_test, y_train, y_test = train_test_split(df[features], df[\"price\"], test_size=0.25, random_state=42)\n\nresults = {}\nfor name, model in [(\"Linear Regression\", LinearRegression()),\n                    (\"Decision Tree\", DecisionTreeRegressor(max_depth=3, random_state=42))]:\n    model.fit(X_train, y_train)\n    results[name] = mean_absolute_error(y_test, model.predict(X_test))\n    print(f\"{name} test MAE: {results[name]:.2f}\")\n\nprint(\"Winner:\", min(results, key=results.get))",
      "output": "Missing per column:\nsize_sqft    1\nrooms        0\nage          1\nprice        1\ndtype: int64\n\nClean rows: 12\nLinear Regression test MAE: 2.70\nDecision Tree test MAE: 5.33\nWinner: Linear Regression",
      "note": "With only 12 clean rows, a test set of 3 houses and one split, this is a demonstration, not proof. In a real project you would collect far more data and compare the models over many splits."
    },
    {
      "title": "Dropout Risk Classifier",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Predict which online learners will drop out (about 1 in 5 do). Choose between the default and a recall-focused model, then build the prediction function.",
      "tasks": [
        "Create the DataFrame and print the Stay / Drop counts",
        "Split (test_size=0.3, random_state=42, stratify), scale on train only",
        "Train a default LogisticRegression and one with class_weight=\"balanced\"",
        "Print the confusion matrix, recall and precision for the Drop class of both",
        "Choose the model that finds more at-risk learners and write predict_dropout(videos, quiz, days) that returns the chance of dropping out"
      ],
      "hint": "Dropping out is class 1. Use confusion_matrix(y_test, pred, labels=[0, 1]) and scaler.transform(new) before predict_proba.",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import confusion_matrix, precision_score, recall_score\n\ndata = {\n    \"videos_watched\": [3, 20, 5, 26, 8, 19, 40, 21, 10, 27, 13, 9, 15, 29, 34, 18, 14, 38, 29, 9, 4, 7, 26, 2, 38, 9, 37, 17, 15, 28, 27, 22, 31, 20, 21, 8, 28, 28, 31, 10, 0, 7, 2, 38, 7, 31, 36, 25, 38, 27],\n    \"quiz_average\": [64, 75, 40, 78, 32, 93, 46, 70, 48, 43, 56, 63, 48, 89, 89, 81, 61, 68, 74, 65, 82, 62, 73, 77, 61, 31, 32, 49, 85, 96, 38, 82, 98, 82, 65, 38, 85, 32, 37, 47, 52, 95, 63, 63, 87, 47, 74, 67, 72, 49],\n    \"days_active\": [8, 25, 2, 1, 25, 16, 10, 15, 14, 22, 29, 11, 3, 30, 3, 13, 3, 8, 8, 8, 23, 30, 11, 17, 29, 4, 19, 16, 21, 18, 6, 7, 20, 20, 17, 29, 5, 23, 9, 5, 23, 26, 9, 22, 28, 13, 17, 3, 4, 11],\n    \"dropped\": [1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n}\n\n# TODO 1: DataFrame, Stay / Drop counts\n\n# TODO 2: stratified split, scale on train only\n\n# TODO 3: default and balanced models\n\n# TODO 4: confusion matrix, recall, precision for Drop\n\n# TODO 5: choose a model, write predict_dropout()",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import confusion_matrix, precision_score, recall_score\n\ndata = {\n    \"videos_watched\": [3, 20, 5, 26, 8, 19, 40, 21, 10, 27, 13, 9, 15, 29, 34, 18, 14, 38, 29, 9, 4, 7, 26, 2, 38, 9, 37, 17, 15, 28, 27, 22, 31, 20, 21, 8, 28, 28, 31, 10, 0, 7, 2, 38, 7, 31, 36, 25, 38, 27],\n    \"quiz_average\": [64, 75, 40, 78, 32, 93, 46, 70, 48, 43, 56, 63, 48, 89, 89, 81, 61, 68, 74, 65, 82, 62, 73, 77, 61, 31, 32, 49, 85, 96, 38, 82, 98, 82, 65, 38, 85, 32, 37, 47, 52, 95, 63, 63, 87, 47, 74, 67, 72, 49],\n    \"days_active\": [8, 25, 2, 1, 25, 16, 10, 15, 14, 22, 29, 11, 3, 30, 3, 13, 3, 8, 8, 8, 23, 30, 11, 17, 29, 4, 19, 16, 21, 18, 6, 7, 20, 20, 17, 29, 5, 23, 9, 5, 23, 26, 9, 22, 28, 13, 17, 3, 4, 11],\n    \"dropped\": [1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]\n}\ndf = pd.DataFrame(data)\nprint(\"Stay / Drop:\", (df[\"dropped\"] == 0).sum(), \"/\", (df[\"dropped\"] == 1).sum())\n\nfeatures = [\"videos_watched\", \"quiz_average\", \"days_active\"]\nX_train, X_test, y_train, y_test = train_test_split(df[features], df[\"dropped\"], test_size=0.3, random_state=42, stratify=df[\"dropped\"])\nscaler = StandardScaler().fit(X_train)\nX_train_s, X_test_s = scaler.transform(X_train), scaler.transform(X_test)\n\nmodels = {\n    \"Default\": LogisticRegression().fit(X_train_s, y_train),\n    \"Balanced\": LogisticRegression(class_weight=\"balanced\").fit(X_train_s, y_train),\n}\nfor name, model in models.items():\n    pred = model.predict(X_test_s)\n    print(f\"\\n{name}:\")\n    print(confusion_matrix(y_test, pred, labels=[0, 1]))\n    print(f\"Drop recall {recall_score(y_test, pred):.2f} | Drop precision {precision_score(y_test, pred, zero_division=0):.2f}\")\n\nchosen = models[\"Balanced\"]\n\ndef predict_dropout(videos, quiz, days):\n    new = pd.DataFrame({\"videos_watched\": [videos], \"quiz_average\": [quiz], \"days_active\": [days]})\n    return chosen.predict_proba(scaler.transform(new[features]))[0][1]\n\nprint()\nfor videos, quiz, days in [(2, 40, 3), (30, 85, 25)]:\n    print(f\"{videos} videos, quiz {quiz}, {days} active days -> chance of dropping out: {predict_dropout(videos, quiz, days):.0%}\")",
      "output": "Stay / Drop: 39 / 11\n\nDefault:\n[[11  1]\n [ 2  1]]\nDrop recall 0.33 | Drop precision 0.50\n\nBalanced:\n[[8 4]\n [0 3]]\nDrop recall 1.00 | Drop precision 0.43\n\n2 videos, quiz 40, 3 active days -> chance of dropping out: 93%\n30 videos, quiz 85, 25 active days -> chance of dropping out: 9%",
      "note": "We choose the balanced model because missing a learner who is about to drop out costs more than sending a friendly reminder to one who would have stayed. It finds all 3 at-risk learners in the test set (recall 1.0) at the price of lower precision. Note that the test set has only 3 dropouts, so in real life you would validate on much more data."
    }
  ],
  "checklist": [
    "Cleaned a messy dataset",
    "Engineered and tested features",
    "Split and scaled without leakage",
    "Trained three regression models",
    "Compared train, test and stability",
    "Evaluated a Pass/Fail classifier",
    "Built the prediction system"
  ],
  "quiz": [
    {
      "q": "Why do we drop rows with missing marks instead of filling them with the average?",
      "options": [
        "It is faster",
        "Marks are the target, and filling them invents answers",
        "Averages are not allowed",
        "Pandas cannot fill marks"
      ],
      "answer": 1,
      "why": "The target is what the model must learn. Invented target values teach it fake answers."
    },
    {
      "q": "Why is the scaler fitted only on the training rows?",
      "options": [
        "Test data has no numbers",
        "So no information from the test set leaks into training",
        "Scalers only work once",
        "It makes the model slower"
      ],
      "answer": 1,
      "why": "Fitting on all data lets the test rows influence the scaling, which makes the evaluation too optimistic."
    },
    {
      "q": "Which model won on test error in the project, and why?",
      "options": [
        "The unlimited tree, because it has train score 1.0",
        "Linear Regression, because the marks follow a smooth rule",
        "KNN, because it is the newest",
        "None of them"
      ],
      "answer": 1,
      "why": "The data follows a smooth rule, which a linear model captures with little data. Always pick by test performance."
    },
    {
      "q": "What is the benefit of one predict_student() function?",
      "options": [
        "It looks nicer",
        "Every new student goes through exactly the same steps as the training data",
        "It trains the model",
        "It removes the need for a scaler"
      ],
      "answer": 1,
      "why": "Reusing the same feature and scaling steps prevents mistakes like typing engineered values by hand."
    }
  ]
},

// DAY 15 snippet. In course-data.js: add a comma after Day 14's closing }, then paste this object. Also unzip day15-images.zip into your images/ folder (images/day15/).
{
  "day": 15,
  "title": "Random Forest: Ensemble Learning",
  "subtitle": "Combine many decision trees into a Random Forest, see why it generalizes better than one tree and compare models honestly on unseen data.",
  "level": "Intermediate",
  "duration": "2 hours",
  "tags": [
    "Random Forest",
    "Ensemble Learning",
    "n_estimators",
    "Feature Importance",
    "Model Comparison"
  ],
  "goals": [
    "Understand what ensemble learning is",
    "See how Random Forest combines many decision trees",
    "Understand why it often generalizes better than a single tree",
    "Compare models using unseen test data"
  ],
  "sections": [
    {
      "id": "concept",
      "icon": "🧠",
      "title": "Step 1: Understand the Concept",
      "meta": "Ensemble learning",
      "blocks": [
        {
          "type": "p",
          "text": "A single Decision Tree is one set of rules, and one unusual training row can change them a lot. A Random Forest builds many different trees and combines them. For regression it averages their predictions."
        },
        {
          "type": "image",
          "src": "images/day15/concept.png",
          "alt": "One tree gives one prediction while a forest of trees averages many",
          "caption": "Many trees each give an answer, and the forest averages them"
        },
        {
          "type": "table",
          "head": [
            "",
            "Decision Tree",
            "Random Forest"
          ],
          "rows": [
            [
              "Number of trees",
              "1",
              "Many (n_estimators)"
            ],
            [
              "Prediction",
              "The leaf's average",
              "The average of all trees' predictions"
            ],
            [
              "Overfits easily?",
              "Yes, if deep",
              "Much less, because averaging cancels individual mistakes"
            ],
            [
              "Easy to read?",
              "Yes",
              "No, 100 trees are hard to read"
            ]
          ]
        },
        {
          "type": "table",
          "head": [
            "Why trees differ inside a forest",
            "How"
          ],
          "rows": [
            [
              "Different rows",
              "Each tree trains on a random sample of the rows (a bootstrap sample)"
            ],
            [
              "Different features",
              "At each split a tree only considers a random subset of the features"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Ensemble learning means many weak or unstable models voting together. The errors of individual trees point in different directions, so the average is steadier."
        }
      ]
    },
    {
      "id": "data",
      "icon": "⚡",
      "title": "Step 2: Prepare the Dataset",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "day15_forest.py",
          "code": "import pandas as pd\n\ndata = {\n    \"hours_studied\": [1, 2, 3, 4, 5, 6, 7, 8, 2, 6, 4, 7],\n    \"sleep_hours\":   [5, 6, 6, 7, 7, 8, 8, 9, 5, 7, 8, 6],\n    \"attendance\":    [45, 55, 60, 70, 75, 85, 90, 98, 50, 80, 65, 92],\n    \"marks\":         [25, 35, 42, 55, 65, 75, 85, 95, 30, 72, 58, 88]\n}\ndf = pd.DataFrame(data)\nX = df[[\"hours_studied\", \"sleep_hours\", \"attendance\"]]\ny = df[\"marks\"]\nprint(df.head())",
          "output": "   hours_studied  sleep_hours  attendance  marks\n0              1            5          45     25\n1              2            6          55     35\n2              3            6          60     42\n3              4            7          70     55\n4              5            7          75     65"
        },
        {
          "type": "p",
          "text": "Your task: use the three input features to predict marks."
        }
      ]
    },
    {
      "id": "split",
      "icon": "⚡",
      "title": "Step 3: Split the Data",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "split.py",
          "code": "from sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)\n\nprint(\"Train rows:\", len(X_train), \"| Test rows:\", len(X_test))\nprint(\"Test students' marks:\", list(y_test))",
          "output": "Train rows: 9 | Test rows: 3\nTest students' marks: [58, 72, 25]"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Only 3 test students. Every number in this lesson that comes from this split is shaky, so we will also repeat the comparison on many splits and on a bigger dataset."
        }
      ]
    },
    {
      "id": "train",
      "icon": "⚡",
      "title": "Step 4: Train Both Models",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "train.py",
          "code": "from sklearn.tree import DecisionTreeRegressor\nfrom sklearn.ensemble import RandomForestRegressor\n\ntree = DecisionTreeRegressor(max_depth=3, random_state=42)\nforest = RandomForestRegressor(n_estimators=100, max_depth=3, random_state=42)\n\ntree.fit(X_train, y_train)\nforest.fit(X_train, y_train)\nprint(\"Both models trained successfully!\")\nprint(\"Trees inside the forest:\", len(forest.estimators_))",
          "output": "Both models trained successfully!\nTrees inside the forest: 100"
        },
        {
          "type": "table",
          "head": [
            "Parameter",
            "Meaning"
          ],
          "rows": [
            [
              "n_estimators=100",
              "Build 100 trees in the forest"
            ],
            [
              "max_depth=3",
              "Limit each tree's depth"
            ],
            [
              "random_state=42",
              "Make the experiment repeatable (the random samples are fixed)"
            ]
          ]
        }
      ]
    },
    {
      "id": "evaluate",
      "icon": "📊",
      "title": "Step 5: Evaluate the Models",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "evaluate.py",
          "code": "from sklearn.metrics import mean_absolute_error, r2_score\n\nmodels = {\"Decision Tree\": tree, \"Random Forest\": forest}\n\nfor name, model in models.items():\n    train_pred = model.predict(X_train)\n    test_pred = model.predict(X_test)\n    print(f\"\\n{name}\")\n    print(\"Train MAE:\", round(mean_absolute_error(y_train, train_pred), 2))\n    print(\"Test MAE:\", round(mean_absolute_error(y_test, test_pred), 2))\n    print(\"Test R²:\", round(r2_score(y_test, test_pred), 3))",
          "output": "\nDecision Tree\nTrain MAE: 0.89\nTest MAE: 10.17\nTest R²: 0.69\n\nRandom Forest\nTrain MAE: 2.54\nTest MAE: 5.01\nTest R²: 0.913"
        },
        {
          "type": "table",
          "head": [
            "Metric",
            "Meaning"
          ],
          "rows": [
            [
              "Train MAE",
              "Average error on training data"
            ],
            [
              "Test MAE",
              "Average error on unseen test data (lower is better)"
            ],
            [
              "Test R²",
              "How much of the variation in test marks is explained (can be negative)"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "On this split the forest wins clearly (test error 5.01 against 10.17). Notice the single tree has the tiny train error (0.89) but the bigger test error: it fits the training rows tightly and travels worse. With 3 test students, treat this as a first look, not proof."
        }
      ]
    },
    {
      "id": "inside",
      "icon": "🔍",
      "title": "Inside the Forest",
      "meta": "How the forest decides",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "inside_forest.py",
          "code": "import numpy as np\n\nstudent = pd.DataFrame([{\"hours_studied\": 5, \"sleep_hours\": 7, \"attendance\": 80}])\n\n# Each tree inside the forest votes\nvotes = np.array([t.predict(student.to_numpy())[0] for t in forest.estimators_])\n\nprint(\"Lowest vote :\", round(votes.min(), 1))\nprint(\"Highest vote:\", round(votes.max(), 1))\nprint(\"Average of the 100 trees:\", round(votes.mean(), 2))\nprint(\"forest.predict gives    :\", round(forest.predict(student)[0], 2))\nprint(\"Single tree gives       :\", round(tree.predict(student)[0], 2))",
          "output": "Lowest vote : 42.0\nHighest vote: 88.0\nAverage of the 100 trees: 64.4\nforest.predict gives    : 64.4\nSingle tree gives       : 65.0"
        },
        {
          "type": "image",
          "src": "images/day15/tree_votes.png",
          "alt": "Histogram of the predictions of 100 trees with the forest average and the single tree",
          "caption": "Individual trees disagree widely, yet their average is close to the single tree here"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The forest's prediction is exactly the average of its trees' votes. Individual trees can be far off (42 to 88 here), but the mistakes cancel out. Averaging is the whole trick."
        }
      ]
    },
    {
      "id": "fair",
      "icon": "🔬",
      "title": "A Fair Comparison",
      "meta": "Many splits, bigger data",
      "blocks": [
        {
          "type": "p",
          "text": "First the 12-student dataset over 10 different splits, then a bigger and noisier dataset of 60 students. Linear Regression joins as a baseline:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "fair_test.py",
          "code": "from sklearn.linear_model import LinearRegression\n\ndef avg_test_mae(make_model, X_all, y_all, test_size=0.25):\n    errors = []\n    for seed in range(10):\n        X_tr, X_te, y_tr, y_te = train_test_split(X_all, y_all, test_size=test_size, random_state=seed)\n        model = make_model().fit(X_tr, y_tr)\n        errors.append(mean_absolute_error(y_te, model.predict(X_te)))\n    return np.mean(errors), np.std(errors)\n\ndata60 = {\n    \"hours_studied\": [3.3, 8.7, 7.2, 8.9, 2.7, 2.1, 8.3, 1.5, 1.6, 5.3, 1.7, 4.1, 6.3, 4.4, 1.4, 2.6, 4.6, 1.5, 3.4, 8.5, 3.3, 3.1, 4.3, 7.6, 5.1, 3.2, 3.7, 8.8, 2.5, 2.9, 6.5, 4.1, 4.7, 6.4, 1.7, 2.9, 5.2, 1.6, 1.7, 1.7, 3.6, 8.3, 7.7, 7.0, 4.8, 7.9, 3.2, 1.7, 2.2, 5.0, 3.4, 3.4, 1.1, 5.6, 6.7, 4.3, 2.3, 2.7, 7.1, 3.9],\n    \"sleep_hours\": [5.9, 7.8, 8.3, 7.7, 6.0, 6.1, 6.8, 6.3, 8.3, 8.1, 4.4, 5.6, 6.1, 7.3, 7.2, 6.6, 5.8, 4.2, 4.2, 7.9, 4.9, 6.0, 8.1, 6.2, 6.7, 4.1, 6.2, 6.3, 5.6, 7.1, 5.2, 4.8, 5.9, 7.2, 5.8, 6.8, 7.9, 7.4, 8.5, 7.9, 5.8, 8.9, 8.5, 6.8, 6.9, 6.4, 5.7, 4.4, 5.5, 4.3, 5.5, 4.8, 8.1, 8.5, 8.5, 8.8, 6.3, 6.3, 8.9, 5.6],\n    \"attendance\": [76, 62, 70, 79, 66, 98, 99, 57, 63, 73, 52, 58, 61, 91, 52, 85, 74, 77, 70, 92, 93, 61, 83, 62, 89, 60, 87, 98, 50, 57, 100, 62, 68, 77, 73, 53, 86, 57, 97, 52, 56, 90, 73, 97, 90, 63, 95, 69, 62, 60, 97, 54, 75, 52, 76, 66, 57, 61, 63, 51],\n    \"marks\": [37, 68, 67, 83, 38, 44, 88, 31, 39, 49, 23, 44, 55, 56, 34, 50, 44, 33, 30, 82, 48, 40, 50, 69, 54, 29, 50, 83, 39, 40, 72, 44, 54, 64, 33, 36, 61, 39, 46, 31, 42, 81, 69, 88, 56, 70, 44, 37, 35, 45, 59, 40, 35, 49, 64, 60, 41, 36, 65, 49]\n}\ndf60 = pd.DataFrame(data60)\nfeatures = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\n\ncandidates = [\n    (\"Linear Regression\", LinearRegression),\n    (\"Decision Tree (depth 3)\", lambda: DecisionTreeRegressor(max_depth=3, random_state=42)),\n    (\"Decision Tree (no limit)\", lambda: DecisionTreeRegressor(random_state=42)),\n    (\"Random Forest (depth 3)\", lambda: RandomForestRegressor(n_estimators=100, max_depth=3, random_state=42)),\n    (\"Random Forest (no limit)\", lambda: RandomForestRegressor(n_estimators=100, random_state=42)),\n]\n\nfor title, X_all, y_all in [(\"12 students\", X, y), (\"60 students\", df60[features], df60[\"marks\"])]:\n    print(title, \"(average test MAE, spread)\")\n    for name, make_model in candidates:\n        mae, spread = avg_test_mae(make_model, X_all, y_all)\n        print(f\"  {name:26} {mae:5.2f}  ({spread:.2f})\")",
          "output": "12 students (average test MAE, spread)\n  Linear Regression           2.46  (1.40)\n  Decision Tree (depth 3)     8.75  (4.96)\n  Decision Tree (no limit)    8.40  (4.98)\n  Random Forest (depth 3)     5.76  (2.69)\n  Random Forest (no limit)    5.78  (2.77)\n60 students (average test MAE, spread)\n  Linear Regression           3.85  (0.76)\n  Decision Tree (depth 3)     4.81  (1.11)\n  Decision Tree (no limit)    6.02  (0.89)\n  Random Forest (depth 3)     4.18  (0.61)\n  Random Forest (no limit)    4.29  (0.64)"
        },
        {
          "type": "image",
          "src": "images/day15/compare_bar.png",
          "alt": "Bar chart of average test error for five models on 60 students",
          "caption": "60 students: forests beat single trees and have a smaller spread. Linear Regression still wins"
        }
      ]
    },
    {
      "id": "insights",
      "icon": "🧠",
      "title": "What the Comparison Shows",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Finding",
            "Evidence"
          ],
          "rows": [
            [
              "A forest beats a single tree",
              "12 students: 5.76 vs 8.75. 60 students: 4.18 vs 4.81 for depth 3, and 4.29 vs 6.02 with no depth limit"
            ],
            [
              "A forest is steadier",
              "Its spread across splits is smaller (60 students: 0.61 vs 1.11)"
            ],
            [
              "A forest resists overfitting",
              "With no depth limit it scores 4.29, almost the same as depth 3 (4.18), while an unlimited tree falls to 6.02"
            ],
            [
              "Random Forest does NOT always win",
              "Linear Regression is best (2.46 and 3.85) because these marks follow a smooth, nearly straight-line rule"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Pick the model by test performance, never by reputation. Forests shine when relationships are bumpy, have interactions or thresholds, and when you cannot guess the formula."
        }
      ]
    },
    {
      "id": "smooth",
      "icon": "📈",
      "title": "Forests are Smoother",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "smooth.py",
          "code": "cv_hours = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5, 12.0, 12.5, 13.0, 13.5, 14.0, 14.5, 15.0]\ncv_marks = [33, 37, 51, 48, 53, 61, 57, 62, 67, 68, 67, 72, 74, 78, 73, 77, 84, 87, 78, 85, 81, 82, 82, 84, 89, 89, 87, 86, 87, 87]\ncurve = pd.DataFrame({\"hours\": cv_hours, \"marks\": cv_marks})\n\ndeep_tree = DecisionTreeRegressor(random_state=42).fit(curve[[\"hours\"]], curve[\"marks\"])\nbig_forest = RandomForestRegressor(n_estimators=100, random_state=42).fit(curve[[\"hours\"]], curve[\"marks\"])\n\nimport matplotlib.pyplot as plt\ngrid = pd.DataFrame({\"hours\": np.linspace(0.5, 15, 300)})\nplt.scatter(curve[\"hours\"], curve[\"marks\"], color=\"gray\", label=\"Noisy data\")\nplt.plot(grid[\"hours\"], deep_tree.predict(grid), color=\"red\", label=\"Single deep tree\")\nplt.plot(grid[\"hours\"], big_forest.predict(grid), color=\"green\", label=\"Random Forest\")\nplt.xlabel(\"Hours Studied\")\nplt.ylabel(\"Marks\")\nplt.title(\"One tree vs a forest on noisy data\")\nplt.legend()\nplt.show()"
        },
        {
          "type": "image",
          "src": "images/day15/curve_fit.png",
          "alt": "A jagged single tree line and a slightly smoother forest line through noisy points",
          "caption": "The forest follows the trend a little more smoothly. The single tree jumps at every noisy point"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The forest still looks steppy because trees predict in steps. But averaging 100 slightly different step functions rounds off the sharpest jumps."
        }
      ]
    },
    {
      "id": "trees",
      "icon": "🌲",
      "title": "How Many Trees?",
      "meta": "n_estimators",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "n_estimators.py",
          "code": "print(\"Trees   avg test MAE (60 students)\")\nfor k in [1, 5, 25, 100, 200]:\n    mae, spread = avg_test_mae(lambda: RandomForestRegressor(n_estimators=k, random_state=42), df60[features], df60[\"marks\"])\n    print(f\"{k:5} {mae:10.2f}\")",
          "output": "Trees   avg test MAE (60 students)\n    1       6.07\n    5       4.45\n   25       4.27\n  100       4.29\n  200       4.29"
        },
        {
          "type": "image",
          "src": "images/day15/n_estimators.png",
          "alt": "Line chart of test error against number of trees that flattens out",
          "caption": "One tree is the same as a single tree. The error drops fast, then levels off after about 25 trees"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "More trees never hurt accuracy, they only cost time and memory. Around 100 is a good default."
        }
      ]
    },
    {
      "id": "importance",
      "icon": "⭐",
      "title": "Which Features Matter?",
      "meta": "A bonus of forests",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "importance.py",
          "code": "final_forest = RandomForestRegressor(n_estimators=100, random_state=42).fit(df60[features], df60[\"marks\"])\n\nimportance = pd.Series(final_forest.feature_importances_, index=features).round(2)\nprint(importance.sort_values(ascending=False))",
          "output": "hours_studied    0.85\nattendance       0.11\nsleep_hours      0.04\ndtype: float64"
        },
        {
          "type": "image",
          "src": "images/day15/importance.png",
          "alt": "Horizontal bar chart of feature importance",
          "caption": "Study hours dominate the forest's decisions"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Feature importance shows what the forest USES, not a law of nature. Features that are correlated share the credit (here attendance also affects how much studying counts), so read it as a hint, not a proof."
        }
      ]
    },
    {
      "id": "input",
      "icon": "⚡",
      "title": "Step 6: Accept User Input",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "user_input.py",
          "code": "hours = float(input(\"Hours studied: \"))\nsleep = float(input(\"Sleep hours: \"))\nattendance = float(input(\"Attendance percentage: \"))\n\nstudent = pd.DataFrame([{\n    \"hours_studied\": hours,\n    \"sleep_hours\": sleep,\n    \"attendance\": attendance\n}])\n\ntree_prediction = tree.predict(student)[0]\nforest_prediction = forest.predict(student)[0]\n\nprint(\"\\nDecision Tree prediction:\", round(tree_prediction, 2))\nprint(\"Random Forest prediction:\", round(forest_prediction, 2))"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Example: enter 5, 7 and 80 and you get Decision Tree 65.0 and Random Forest 64.4. These are educational estimates, not guarantees. The workspace asks for each value in a pop-up box."
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Trees never predict outside the marks they were trained on (the forest here stays between 25 and 95), which is a handy safety net for impossible values."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Student Performance Predictor v3",
      "blocks": [
        {
          "type": "p",
          "text": "Student Predictor v3 compares a single Decision Tree with a Random Forest (and Linear Regression as a baseline) on unseen data, then predicts for new students with all three. It is the Final Program below."
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
            "Ensemble learning: many models voting beat one unstable model",
            "A Random Forest averages many trees trained on different samples",
            "Forests usually generalize better and resist overfitting",
            "More trees help until about 100, then the gain flattens",
            "Always compare on unseen data: forests do not always beat simpler models"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Student Performance Predictor v3 (Random Forest)",
    "file": "day15_final.py",
    "description": "One program combining Day 15: Linear Regression, a Decision Tree and a Random Forest compared on one split and over 10 splits, feature importance, predictions for new students and two charts.",
    "concepts": [
      "ensemble learning",
      "RandomForestRegressor",
      "n_estimators",
      "train vs test MAE",
      "feature importance",
      "model comparison"
    ],
    "code": "import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.metrics import mean_absolute_error, r2_score\n\n# 1. DATA: 60 students\ndata = {\n    \"hours_studied\": [3.3, 8.7, 7.2, 8.9, 2.7, 2.1, 8.3, 1.5, 1.6, 5.3, 1.7, 4.1, 6.3, 4.4, 1.4, 2.6, 4.6, 1.5, 3.4, 8.5, 3.3, 3.1, 4.3, 7.6, 5.1, 3.2, 3.7, 8.8, 2.5, 2.9, 6.5, 4.1, 4.7, 6.4, 1.7, 2.9, 5.2, 1.6, 1.7, 1.7, 3.6, 8.3, 7.7, 7.0, 4.8, 7.9, 3.2, 1.7, 2.2, 5.0, 3.4, 3.4, 1.1, 5.6, 6.7, 4.3, 2.3, 2.7, 7.1, 3.9],\n    \"sleep_hours\": [5.9, 7.8, 8.3, 7.7, 6.0, 6.1, 6.8, 6.3, 8.3, 8.1, 4.4, 5.6, 6.1, 7.3, 7.2, 6.6, 5.8, 4.2, 4.2, 7.9, 4.9, 6.0, 8.1, 6.2, 6.7, 4.1, 6.2, 6.3, 5.6, 7.1, 5.2, 4.8, 5.9, 7.2, 5.8, 6.8, 7.9, 7.4, 8.5, 7.9, 5.8, 8.9, 8.5, 6.8, 6.9, 6.4, 5.7, 4.4, 5.5, 4.3, 5.5, 4.8, 8.1, 8.5, 8.5, 8.8, 6.3, 6.3, 8.9, 5.6],\n    \"attendance\": [76, 62, 70, 79, 66, 98, 99, 57, 63, 73, 52, 58, 61, 91, 52, 85, 74, 77, 70, 92, 93, 61, 83, 62, 89, 60, 87, 98, 50, 57, 100, 62, 68, 77, 73, 53, 86, 57, 97, 52, 56, 90, 73, 97, 90, 63, 95, 69, 62, 60, 97, 54, 75, 52, 76, 66, 57, 61, 63, 51],\n    \"marks\": [37, 68, 67, 83, 38, 44, 88, 31, 39, 49, 23, 44, 55, 56, 34, 50, 44, 33, 30, 82, 48, 40, 50, 69, 54, 29, 50, 83, 39, 40, 72, 44, 54, 64, 33, 36, 61, 39, 46, 31, 42, 81, 69, 88, 56, 70, 44, 37, 35, 45, 59, 40, 35, 49, 64, 60, 41, 36, 65, 49]\n}\ndf = pd.DataFrame(data)\nfeatures = [\"hours_studied\", \"sleep_hours\", \"attendance\"]\nX, y = df[features], df[\"marks\"]\nprint(\"=== STUDENT PERFORMANCE PREDICTOR v3 (RANDOM FOREST) ===\")\nprint(\"Students:\", len(df))\n\n# 2. SPLIT AND TRAIN\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42)\nmodels = {\n    \"Linear Regression\": LinearRegression(),\n    \"Decision Tree\": DecisionTreeRegressor(max_depth=3, random_state=42),\n    \"Random Forest\": RandomForestRegressor(n_estimators=100, max_depth=3, random_state=42),\n}\nfor model in models.values():\n    model.fit(X_train, y_train)\n\n# 3. EVALUATE ON UNSEEN STUDENTS\nprint(\"\\nOne split (15 test students):\")\nfor name, model in models.items():\n    train_mae = mean_absolute_error(y_train, model.predict(X_train))\n    test_mae = mean_absolute_error(y_test, model.predict(X_test))\n    print(f\"  {name:18} train MAE {train_mae:5.2f} | test MAE {test_mae:5.2f} | test R2 {r2_score(y_test, model.predict(X_test)):.3f}\")\n\n# 4. A FAIRER COMPARISON: average of 10 splits\ndef avg_test_mae(make_model):\n    errors = []\n    for seed in range(10):\n        X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.25, random_state=seed)\n        errors.append(mean_absolute_error(y_te, make_model().fit(X_tr, y_tr).predict(X_te)))\n    return np.mean(errors), np.std(errors)\n\ncandidates = {\n    \"Linear Regression\": LinearRegression,\n    \"Tree (depth 3)\": lambda: DecisionTreeRegressor(max_depth=3, random_state=42),\n    \"Tree (no limit)\": lambda: DecisionTreeRegressor(random_state=42),\n    \"Forest (depth 3)\": lambda: RandomForestRegressor(n_estimators=100, max_depth=3, random_state=42),\n    \"Forest (no limit)\": lambda: RandomForestRegressor(n_estimators=100, random_state=42),\n}\nprint(\"\\nAverage test MAE over 10 splits (spread):\")\nresults = {}\nfor name, make_model in candidates.items():\n    results[name] = avg_test_mae(make_model)\n    print(f\"  {name:18} {results[name][0]:5.2f} ({results[name][1]:.2f})\")\n\n# 5. WHICH FEATURES DOES THE FOREST USE?\nforest_all = RandomForestRegressor(n_estimators=100, random_state=42).fit(X, y)\nimportance = pd.Series(forest_all.feature_importances_, index=features).round(2)\nprint(\"\\nFeature importance:\")\nprint(importance.sort_values(ascending=False))\n\n# 6. PREDICT NEW STUDENTS WITH ALL THREE MODELS\nnew_students = pd.DataFrame({\n    \"hours_studied\": [2, 5, 8],\n    \"sleep_hours\": [5, 7, 8],\n    \"attendance\": [55, 80, 95]\n})\nfor name, model in models.items():\n    new_students[name] = model.predict(new_students[features]).round(1)\nprint(\"\\nPredictions:\")\nprint(new_students)\n\n# 7. CHARTS: model comparison and feature importance\nfig, axes = plt.subplots(1, 2, figsize=(12, 4))\nnames = list(results)\naxes[0].bar(names, [results[k][0] for k in names], yerr=[results[k][1] for k in names], color=\"steelblue\", capsize=4)\naxes[0].set_ylabel(\"Average test MAE\")\naxes[0].set_title(\"Test error over 10 splits\")\naxes[0].tick_params(axis=\"x\", rotation=30)\nimportance.sort_values().plot(kind=\"barh\", ax=axes[1], color=\"darkorange\")\naxes[1].set_title(\"Feature importance\")\nplt.tight_layout()\nplt.show()",
    "output": "=== STUDENT PERFORMANCE PREDICTOR v3 (RANDOM FOREST) ===\nStudents: 60\n\nOne split (15 test students):\n  Linear Regression  train MAE  3.99 | test MAE  3.17 | test R2 0.920\n  Decision Tree      train MAE  3.00 | test MAE  4.38 | test R2 0.807\n  Random Forest      train MAE  2.84 | test MAE  4.58 | test R2 0.802\n\nAverage test MAE over 10 splits (spread):\n  Linear Regression   3.85 (0.76)\n  Tree (depth 3)      4.81 (1.11)\n  Tree (no limit)     6.02 (0.89)\n  Forest (depth 3)    4.18 (0.61)\n  Forest (no limit)   4.29 (0.64)\n\nFeature importance:\nhours_studied    0.85\nattendance       0.11\nsleep_hours      0.04\ndtype: float64\n\nPredictions:\n   hours_studied  sleep_hours  ...  Decision Tree  Random Forest\n0              2            5  ...           35.5           35.6\n1              5            7  ...           52.8           51.1\n2              8            8  ...           84.4           82.3\n\n[3 rows x 6 columns]",
    "images": [
      {
        "type": "image",
        "src": "images/day15/final.png",
        "alt": "Bar chart of model test errors and feature importance",
        "caption": "The two charts the program draws: model comparison and feature importance"
      }
    ]
  },
  "practice": [
    {
      "title": "Ad Spend: Tree vs Forest",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Sales grow with ad spending and then level off, with noise. See how a forest handles it compared with one deep tree.",
      "tasks": [
        "Create the DataFrame",
        "Write avg_errors(make_model) that returns the average train MAE and test MAE over 10 splits (test_size=0.3, random_state 0 to 9)",
        "Compare DecisionTreeRegressor(random_state=42) with RandomForestRegressor(n_estimators=100, random_state=42)",
        "Print the number of trees in the forest and the forest's prediction for an ad spend of 12",
        "Which model has the smaller gap between train and test error?"
      ],
      "hint": "forest.estimators_ is the list of trees, so len(forest.estimators_) counts them. Predict with pd.DataFrame({\"ad_spend\": [12]}).",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"ad_spend\": [1.0, 2.0, 2.9, 3.9, 4.8, 5.8, 6.8, 7.7, 8.7, 9.6, 10.6, 11.6, 12.5, 13.5, 14.4, 15.4, 16.4, 17.3, 18.3, 19.2, 20.2, 21.2, 22.1, 23.1, 24.0, 25.0],\n    \"sales\": [63, 69, 91, 86, 119, 109, 132, 138, 139, 178, 152, 167, 176, 159, 186, 176, 189, 173, 174, 196, 192, 190, 196, 196, 182, 173]\n}\n\n# TODO 1: DataFrame\n\n# TODO 2: avg_errors(make_model) -> (train MAE, test MAE)\n\n# TODO 3: compare a single tree and the forest\n\n# TODO 4: number of trees and the prediction for ad spend 12",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"ad_spend\": [1.0, 2.0, 2.9, 3.9, 4.8, 5.8, 6.8, 7.7, 8.7, 9.6, 10.6, 11.6, 12.5, 13.5, 14.4, 15.4, 16.4, 17.3, 18.3, 19.2, 20.2, 21.2, 22.1, 23.1, 24.0, 25.0],\n    \"sales\": [63, 69, 91, 86, 119, 109, 132, 138, 139, 178, 152, 167, 176, 159, 186, 176, 189, 173, 174, 196, 192, 190, 196, 196, 182, 173]\n}\ndf = pd.DataFrame(data)\n\ndef avg_errors(make_model):\n    train_errs, test_errs = [], []\n    for seed in range(10):\n        X_train, X_test, y_train, y_test = train_test_split(df[[\"ad_spend\"]], df[\"sales\"], test_size=0.3, random_state=seed)\n        model = make_model().fit(X_train, y_train)\n        train_errs.append(mean_absolute_error(y_train, model.predict(X_train)))\n        test_errs.append(mean_absolute_error(y_test, model.predict(X_test)))\n    return np.mean(train_errs), np.mean(test_errs)\n\nfor name, make_model in [(\"Single tree\", lambda: DecisionTreeRegressor(random_state=42)),\n                         (\"Random Forest\", lambda: RandomForestRegressor(n_estimators=100, random_state=42))]:\n    train, test = avg_errors(make_model)\n    print(f\"{name:14} train MAE {train:5.2f} | test MAE {test:5.2f} | gap {test - train:5.2f}\")\n\nforest = RandomForestRegressor(n_estimators=100, random_state=42).fit(df[[\"ad_spend\"]], df[\"sales\"])\nprint(\"\\nTrees in the forest:\", len(forest.estimators_))\nprint(\"Predicted sales at ad spend 12:\", round(forest.predict(pd.DataFrame({\"ad_spend\": [12]}))[0], 1))",
      "output": "Single tree    train MAE  0.00 | test MAE 14.74 | gap 14.74\nRandom Forest  train MAE  4.78 | test MAE 12.02 | gap  7.24\n\nTrees in the forest: 100\nPredicted sales at ad spend 12: 168.2",
      "images": [
        {
          "type": "image",
          "src": "images/day15/practice1.png",
          "alt": "Single tree and forest lines through noisy sales data",
          "caption": "Expected chart style: the forest line follows the trend a little more smoothly than one tree"
        }
      ],
      "note": "The single tree memorizes the training points (train error near 0), so its test error is much bigger than its train error. The forest also fits the training data closely, but averaging 100 trees keeps the test error lower. The gap between train and test is the overfitting."
    },
    {
      "title": "Tune the Forest",
      "level": "Medium",
      "file": "practice2.py",
      "description": "House prices jump for large homes (a threshold effect). Tune the forest and see whether it beats a line.",
      "tasks": [
        "Create the DataFrame",
        "Write avg_test_mae(make_model) averaging the test MAE over 10 splits (test_size=0.25, random_state 0 to 9)",
        "Try every combination of n_estimators in [10, 50, 100] and max_depth in [2, 4, None] and print the table",
        "Find the best combination, then compare it with a single DecisionTreeRegressor(max_depth=4) and LinearRegression",
        "Print the feature importances of the best forest trained on all rows"
      ],
      "hint": "Store results in a dictionary keyed by (n_estimators, max_depth) and use min(results, key=results.get).",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"size_sqft\": [675, 1720, 1037, 1002, 2103, 711, 1419, 2139, 1872, 1709, 1922, 1035, 2108, 845, 866, 1054, 1230, 1404, 1691, 1592, 1956, 2419, 891, 1440, 2036, 1599, 1323, 750, 1530, 2311, 1968, 1568, 2227, 1849, 2348, 1676, 683, 1449, 1636, 1263, 1713, 2484, 790, 812, 701, 1986, 1050, 1272, 994, 1661],\n    \"rooms\": [4, 4, 1, 4, 1, 2, 1, 1, 5, 5, 5, 3, 2, 4, 1, 5, 1, 5, 4, 2, 4, 4, 4, 2, 4, 4, 5, 4, 2, 4, 2, 2, 2, 3, 4, 3, 3, 4, 4, 3, 1, 5, 4, 2, 2, 5, 4, 5, 5, 5],\n    \"age\": [15, 27, 3, 16, 4, 11, 8, 26, 26, 22, 11, 15, 23, 13, 18, 7, 3, 29, 12, 12, 15, 29, 8, 22, 6, 21, 6, 21, 12, 27, 7, 17, 10, 15, 5, 4, 20, 9, 9, 29, 26, 0, 28, 30, 22, 2, 12, 6, 8, 2],\n    \"price\": [47.8, 62.2, 34.4, 55.1, 108.2, 31.9, 41.6, 99.2, 130.7, 75.5, 140.2, 44.2, 116.2, 47.9, 27.9, 60.6, 37.1, 66.4, 62.3, 33.9, 131.9, 130.5, 59.6, 39.7, 141.2, 55.6, 71.7, 42.2, 38.5, 134.1, 118.3, 44.8, 119.7, 116.9, 140.6, 58.9, 32.3, 57.6, 72.0, 43.2, 33.7, 154.8, 42.9, 28.0, 27.3, 145.7, 52.2, 71.5, 75.4, 83.4]\n}\n\n# TODO 1: DataFrame\n\n# TODO 2: avg_test_mae(make_model)\n\n# TODO 3: grid over n_estimators and max_depth\n\n# TODO 4: best combination vs tree vs linear\n\n# TODO 5: feature importances",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.tree import DecisionTreeRegressor\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.metrics import mean_absolute_error\n\ndata = {\n    \"size_sqft\": [675, 1720, 1037, 1002, 2103, 711, 1419, 2139, 1872, 1709, 1922, 1035, 2108, 845, 866, 1054, 1230, 1404, 1691, 1592, 1956, 2419, 891, 1440, 2036, 1599, 1323, 750, 1530, 2311, 1968, 1568, 2227, 1849, 2348, 1676, 683, 1449, 1636, 1263, 1713, 2484, 790, 812, 701, 1986, 1050, 1272, 994, 1661],\n    \"rooms\": [4, 4, 1, 4, 1, 2, 1, 1, 5, 5, 5, 3, 2, 4, 1, 5, 1, 5, 4, 2, 4, 4, 4, 2, 4, 4, 5, 4, 2, 4, 2, 2, 2, 3, 4, 3, 3, 4, 4, 3, 1, 5, 4, 2, 2, 5, 4, 5, 5, 5],\n    \"age\": [15, 27, 3, 16, 4, 11, 8, 26, 26, 22, 11, 15, 23, 13, 18, 7, 3, 29, 12, 12, 15, 29, 8, 22, 6, 21, 6, 21, 12, 27, 7, 17, 10, 15, 5, 4, 20, 9, 9, 29, 26, 0, 28, 30, 22, 2, 12, 6, 8, 2],\n    \"price\": [47.8, 62.2, 34.4, 55.1, 108.2, 31.9, 41.6, 99.2, 130.7, 75.5, 140.2, 44.2, 116.2, 47.9, 27.9, 60.6, 37.1, 66.4, 62.3, 33.9, 131.9, 130.5, 59.6, 39.7, 141.2, 55.6, 71.7, 42.2, 38.5, 134.1, 118.3, 44.8, 119.7, 116.9, 140.6, 58.9, 32.3, 57.6, 72.0, 43.2, 33.7, 154.8, 42.9, 28.0, 27.3, 145.7, 52.2, 71.5, 75.4, 83.4]\n}\ndf = pd.DataFrame(data)\nfeatures = [\"size_sqft\", \"rooms\", \"age\"]\n\ndef avg_test_mae(make_model):\n    errors = []\n    for seed in range(10):\n        X_train, X_test, y_train, y_test = train_test_split(df[features], df[\"price\"], test_size=0.25, random_state=seed)\n        errors.append(mean_absolute_error(y_test, make_model().fit(X_train, y_train).predict(X_test)))\n    return np.mean(errors)\n\nresults = {}\nprint(\"n_estimators  max_depth  test MAE\")\nfor n_trees in [10, 50, 100]:\n    for depth in [2, 4, None]:\n        results[(n_trees, depth)] = avg_test_mae(lambda: RandomForestRegressor(n_estimators=n_trees, max_depth=depth, random_state=42))\n        print(f\"{n_trees:12}  {str(depth):9}  {results[(n_trees, depth)]:.2f}\")\n\nbest = min(results, key=results.get)\nprint(\"\\nBest forest:\", best, \"->\", round(results[best], 2))\nprint(\"Single tree (depth 4):\", round(avg_test_mae(lambda: DecisionTreeRegressor(max_depth=4, random_state=42)), 2))\nprint(\"Linear Regression    :\", round(avg_test_mae(LinearRegression), 2))\n\nbest_forest = RandomForestRegressor(n_estimators=best[0], max_depth=best[1], random_state=42).fit(df[features], df[\"price\"])\nprint()\nprint(pd.Series(best_forest.feature_importances_, index=features).round(2).sort_values(ascending=False))",
      "output": "n_estimators  max_depth  test MAE\n          10  2          8.75\n          10  4          6.79\n          10  None       6.68\n          50  2          8.63\n          50  4          6.53\n          50  None       6.46\n         100  2          8.69\n         100  4          6.39\n         100  None       6.32\n\nBest forest: (100, None) -> 6.32\nSingle tree (depth 4): 7.67\nLinear Regression    : 16.0\n\nsize_sqft    0.87\nrooms        0.12\nage          0.02\ndtype: float64",
      "images": [
        {
          "type": "image",
          "src": "images/day15/practice2.png",
          "alt": "Heatmap of test error for combinations of number of trees and depth",
          "caption": "Expected chart: test error for each forest setting (darker green is better)"
        }
      ],
      "note": "Price jumps by a large amount once a house passes about 1800 sqft. A straight line cannot make a jump, so Linear Regression does worst here, while trees and forests handle thresholds naturally. This is the opposite of the student marks data, where the line won. A forest with a few dozen trees is usually enough: going from 50 to 100 trees changes the error very little, and a very shallow depth (2) is clearly too simple. Always compare on test data."
    }
  ],
  "checklist": [
    "Understood ensemble learning",
    "Trained a Decision Tree and a Random Forest",
    "Evaluated both on unseen data",
    "Looked at the votes of the individual trees",
    "Compared models over many splits",
    "Checked feature importance",
    "Built Student Predictor v3"
  ],
  "quiz": [
    {
      "q": "How does a Random Forest make a regression prediction?",
      "options": [
        "It picks the best single tree",
        "It averages the predictions of many trees",
        "It takes the maximum of all trees",
        "It uses one formula"
      ],
      "answer": 1,
      "why": "Each tree predicts, and the forest returns the average of those predictions."
    },
    {
      "q": "Why do the trees in a forest differ from each other?",
      "options": [
        "Each uses a random sample of rows and random features at splits",
        "They use different datasets from the internet",
        "They use different loss functions",
        "They do not differ"
      ],
      "answer": 0,
      "why": "Bootstrap samples of rows and random feature subsets make every tree a little different, and averaging cancels their individual errors."
    },
    {
      "q": "What happens to the error as you add more trees?",
      "options": [
        "It always keeps falling",
        "It drops quickly, then levels off",
        "It gets worse",
        "It stays the same"
      ],
      "answer": 1,
      "why": "The first trees help a lot. After a few dozen the average is already stable."
    },
    {
      "q": "Linear Regression beat the forest on our data. What does that tell us?",
      "options": [
        "The forest is broken",
        "No model wins everywhere, so always compare on test data",
        "Linear models are always best",
        "Forests only work on classification"
      ],
      "answer": 1,
      "why": "The marks follow a smooth rule that a line captures with little data. Choose models by test performance."
    }
  ]
},
// DAY 16 snippet. In course-data.js: after Day 15's closing }, paste this object (keep the comma after Day 15). No images needed for this day.
{
  "day": 16,
  "title": "Ensemble Learning",
  "subtitle": "Combine multiple models with bagging, voting and boosting, then compare them honestly on a small Student Pass/Fail dataset.",
  "level": "Intermediate",
  "duration": "60-90 min",
  "tags": [
    "Ensemble Learning",
    "Bagging",
    "Voting Classifier",
    "Boosting",
    "Cross-Validation"
  ],
  "goals": [
    "Understand what ensemble learning is",
    "Know the difference between bagging, voting and boosting",
    "Compare a Voting Ensemble with its member models",
    "Look beyond accuracy using precision and recall"
  ],
  "sections": [
    {
      "id": "concept",
      "icon": "🧠",
      "title": "Step 1: Understand the Concept",
      "meta": "Ensemble learning",
      "blocks": [
        {
          "type": "p",
          "text": "Ensemble Learning combines predictions from multiple models to try to improve performance and generalization."
        },
        {
          "type": "table",
          "head": [
            "Model",
            "Prediction (marks)"
          ],
          "rows": [
            [
              "Model A",
              "70"
            ],
            [
              "Model B",
              "80"
            ],
            [
              "Model C",
              "90"
            ],
            [
              "Combined prediction",
              "80 (average of the three)"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The average above is a regression example. For classification, models can combine their predicted classes (hard voting) or class probabilities (soft voting)."
        },
        {
          "type": "table",
          "head": [
            "Technique",
            "How it works",
            "Example"
          ],
          "rows": [
            [
              "Bagging",
              "Trains models on different bootstrap samples and combines their predictions",
              "Random Forest"
            ],
            [
              "Voting",
              "Combines predictions from different classifiers",
              "Voting Classifier"
            ],
            [
              "Boosting",
              "Builds models sequentially, improving on earlier errors or residuals",
              "AdaBoost, Gradient Boosting, XGBoost"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Combining models does not guarantee better results. Model diversity, data quality, and evaluation matter."
        }
      ]
    },
    {
      "id": "data",
      "icon": "⚡",
      "title": "Step 2: Create the Dataset",
      "meta": "Student Pass/Fail",
      "blocks": [
        {
          "type": "p",
          "text": "We will predict whether a student passes from hours studied and attendance. Copy this into day16_ensemble.py:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "day16_ensemble.py",
          "code": "import pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier, VotingClassifier\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, classification_report\n\ndata = {\n    \"hours_studied\": [\n        1, 2, 2, 3, 3, 4, 4, 5, 5, 6,\n        6, 7, 7, 8, 8, 9, 2, 4, 6, 9\n    ],\n    \"attendance\": [\n        40, 45, 50, 55, 60, 60, 65, 70, 75, 75,\n        80, 85, 88, 90, 95, 98, 48, 68, 82, 96\n    ],\n    \"passed\": [\n        0, 0, 0, 0, 0, 0, 1, 0, 1, 1,\n        1, 1, 1, 1, 1, 1, 0, 1, 1, 1\n    ]\n}\n\ndf = pd.DataFrame(data)\nX = df[[\"hours_studied\", \"attendance\"]]\ny = df[\"passed\"]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y,\n    test_size=0.30,\n    random_state=42,\n    stratify=y\n)\n\nprint(df.head())\nprint(\"Dataset shape:\", df.shape)",
          "output": "   hours_studied  attendance  passed\n0              1          40       0\n1              2          45       0\n2              2          50       0\n3              3          55       0\n4              3          60       0\nDataset shape: (20, 3)"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Here, 0 = Fail and 1 = Pass. The split is stratified so the test set keeps the same pass/fail balance."
        }
      ]
    },
    {
      "id": "compare",
      "icon": "🛠️",
      "title": "Step 3: Train and Compare the Models",
      "meta": "Most important step",
      "blocks": [
        {
          "type": "p",
          "text": "We compare a Decision Tree, Random Forest, Logistic Regression, and a hard-voting ensemble of those three."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "compare.py",
          "code": "models = {\n    \"Decision Tree\": DecisionTreeClassifier(\n        max_depth=3, random_state=42\n    ),\n    \"Random Forest\": RandomForestClassifier(\n        n_estimators=100, random_state=42\n    ),\n    \"Logistic Regression\": LogisticRegression(\n        max_iter=1000\n    ),\n    \"Voting Ensemble\": VotingClassifier(\n        estimators=[\n            (\"dt\", DecisionTreeClassifier(\n                max_depth=3, random_state=42\n            )),\n            (\"rf\", RandomForestClassifier(\n                n_estimators=100, random_state=42\n            )),\n            (\"lr\", LogisticRegression(\n                max_iter=1000\n            ))\n        ],\n        voting=\"hard\"\n    )\n}\n\nfor name, model in models.items():\n    model.fit(X_train, y_train)\n    predictions = model.predict(X_test)\n    accuracy = accuracy_score(y_test, predictions)\n    print(f\"{name}: {accuracy:.2%}\")",
          "output": "Decision Tree: 83.33%\nRandom Forest: 83.33%\nLogistic Regression: 83.33%\nVoting Ensemble: 83.33%"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Your task: compare the test accuracy of all four models. Don't assume the ensemble will win; the dataset is tiny and synthetic."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Only 6 test students: one student changes accuracy by about 17 points. All four models tie here, so this split cannot tell them apart."
        }
      ]
    },
    {
      "id": "inspect",
      "icon": "🔎",
      "title": "Step 4: Inspect the Ensemble's Performance",
      "meta": "Beyond accuracy",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "inspect.py",
          "code": "ensemble = models[\"Voting Ensemble\"]\npredictions = ensemble.predict(X_test)\n\nprint(classification_report(\n    y_test,\n    predictions,\n    labels=[0, 1],\n    target_names=[\"Fail\", \"Pass\"],\n    zero_division=0\n))",
          "output": "              precision    recall  f1-score   support\n\n        Fail       1.00      0.50      0.67         2\n        Pass       0.80      1.00      0.89         4\n\n    accuracy                           0.83         6\n   macro avg       0.90      0.75      0.78         6\nweighted avg       0.87      0.83      0.81         6"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Look beyond accuracy. Precision and recall show which class the model predicts well: here Pass has recall 1.00 but Fail has recall 0.50, so half of the failing students were predicted to pass."
        }
      ]
    },
    {
      "id": "predict",
      "icon": "🎯",
      "title": "Step 5: Predict for a New Student",
      "meta": "Use the ensemble",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "predict.py",
          "code": "student = pd.DataFrame({\n    \"hours_studied\": [6],\n    \"attendance\": [80]\n})\n\nprediction = ensemble.predict(student)[0]\nprint(\"Prediction:\", \"PASS\" if prediction == 1 else \"FAIL\")",
          "output": "Prediction: PASS"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "This is only a model prediction, not a guarantee of the student's result."
        }
      ]
    },
    {
      "id": "input",
      "icon": "⌨️",
      "title": "Step 6: Accept User Input",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "user_input.py",
          "code": "hours = float(input(\"Hours studied: \"))\nattendance = float(input(\"Attendance percentage: \"))\n\nstudent = pd.DataFrame({\n    \"hours_studied\": [hours],\n    \"attendance\": [attendance]\n})\n\nprediction = ensemble.predict(student)[0]\nprint(\"Prediction:\", \"PASS\" if prediction == 1 else \"FAIL\")"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Example: enter 6 and 80 and the ensemble predicts PASS. The workspace asks for each value in a pop-up box."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Student Pass/Fail Predictor",
      "blocks": [
        {
          "type": "p",
          "text": "The Final Program below compares a single tree, Logistic Regression, Bagging, Random Forest, AdaBoost, Gradient Boosting and two voting ensembles, using one split and 25 repeated cross-validation folds."
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
            "Ensemble learning combines several models to try to improve generalization",
            "Bagging trains on bootstrap samples, voting combines different classifiers, boosting learns from earlier mistakes",
            "Hard voting combines predicted classes, soft voting averages probabilities",
            "Accuracy on a tiny test set can tie, so use precision, recall and repeated cross-validation",
            "An ensemble is not guaranteed to win"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Student Pass/Fail Predictor (Ensembles)",
    "file": "day16_final.py",
    "description": "One program combining Day 16: Decision Tree, Logistic Regression, Bagging, Random Forest, AdaBoost, Gradient Boosting and hard/soft Voting compared on one split and 25 cross-validation folds, a classification report and predictions with probabilities.",
    "concepts": [
      "ensemble learning",
      "bagging",
      "voting (hard and soft)",
      "boosting",
      "cross-validation",
      "precision and recall"
    ],
    "code": "import pandas as pd\nfrom sklearn.model_selection import (\n    train_test_split, cross_val_score, RepeatedStratifiedKFold\n)\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.ensemble import (\n    BaggingClassifier, RandomForestClassifier, VotingClassifier,\n    AdaBoostClassifier, GradientBoostingClassifier\n)\nfrom sklearn.metrics import accuracy_score, classification_report\n\nprint(\"=== STUDENT PASS/FAIL PREDICTOR (ENSEMBLES) ===\")\n\ndata = {\n    \"hours_studied\": [1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 2, 4, 6, 9],\n    \"attendance\": [40, 45, 50, 55, 60, 60, 65, 70, 75, 75, 80, 85, 88, 90, 95, 98, 48, 68, 82, 96],\n    \"passed\": [0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1]\n}\ndf = pd.DataFrame(data)\nX = df[[\"hours_studied\", \"attendance\"]]\ny = df[\"passed\"]\nprint(\"Students:\", len(df), \"| Pass rate:\", f\"{y.mean():.0%}\")\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.30, random_state=42, stratify=y\n)\n\ndef tree():\n    return DecisionTreeClassifier(max_depth=3, random_state=42)\n\nmodels = {\n    \"Decision Tree\": tree(),\n    \"Logistic Regression\": LogisticRegression(max_iter=1000),\n    \"Bagging (trees)\": BaggingClassifier(\n        estimator=tree(), n_estimators=50, random_state=42\n    ),\n    \"Random Forest\": RandomForestClassifier(n_estimators=100, random_state=42),\n    \"AdaBoost\": AdaBoostClassifier(n_estimators=50, random_state=42),\n    \"Gradient Boosting\": GradientBoostingClassifier(random_state=42),\n    \"Voting (hard)\": VotingClassifier(\n        estimators=[\n            (\"dt\", tree()),\n            (\"rf\", RandomForestClassifier(n_estimators=100, random_state=42)),\n            (\"lr\", LogisticRegression(max_iter=1000))\n        ],\n        voting=\"hard\"\n    ),\n    \"Voting (soft)\": VotingClassifier(\n        estimators=[\n            (\"dt\", tree()),\n            (\"rf\", RandomForestClassifier(n_estimators=100, random_state=42)),\n            (\"lr\", LogisticRegression(max_iter=1000))\n        ],\n        voting=\"soft\"\n    )\n}\n\ncv = RepeatedStratifiedKFold(n_splits=5, n_repeats=5, random_state=42)\n\nprint(\"\\nOne split (6 test students) and 25 repeated folds:\")\nrows = []\nfor name, model in models.items():\n    model.fit(X_train, y_train)\n    test_acc = accuracy_score(y_test, model.predict(X_test))\n    scores = cross_val_score(model, X, y, cv=cv)\n    rows.append((name, test_acc, scores.mean(), scores.std()))\n    print(f\"  {name:<20} test {test_acc:.0%} | CV {scores.mean():.1%} (+/- {scores.std():.1%})\")\n\nbest_name = max(rows, key=lambda r: r[2])[0]\nprint(\"\\nBest by cross-validation:\", best_name)\n\nensemble = models[\"Voting (soft)\"]\nprint(\"\\nClassification report (Voting soft):\")\nprint(classification_report(\n    y_test, ensemble.predict(X_test),\n    labels=[0, 1], target_names=[\"Fail\", \"Pass\"], zero_division=0\n))\n\nnew_students = pd.DataFrame({\n    \"hours_studied\": [6, 3, 9],\n    \"attendance\": [80, 55, 96]\n})\nlabels = ensemble.predict(new_students)\nproba = ensemble.predict_proba(new_students)[:, 1]\nprint(\"Predictions for new students:\")\nfor i, (lab, p) in enumerate(zip(labels, proba), start=1):\n    row = new_students.iloc[i - 1]\n    print(f\"  Student {i}: {row.hours_studied:.0f} h, {row.attendance:.0f}% -> \"\n          f\"{'PASS' if lab == 1 else 'FAIL'} (pass probability {p:.0%})\")\nprint(\"\\nThese are model predictions, not guarantees.\")",
    "output": "=== STUDENT PASS/FAIL PREDICTOR (ENSEMBLES) ===\nStudents: 20 | Pass rate: 60%\n\nOne split (6 test students) and 25 repeated folds:\n  Decision Tree        test 83% | CV 86.0% (+/- 15.9%)\n  Logistic Regression  test 83% | CV 90.0% (+/- 12.2%)\n  Bagging (trees)      test 83% | CV 94.0% (+/- 10.7%)\n  Random Forest        test 83% | CV 88.0% (+/- 14.4%)\n  AdaBoost             test 83% | CV 90.0% (+/- 12.2%)\n  Gradient Boosting    test 83% | CV 84.0% (+/- 18.5%)\n  Voting (hard)        test 83% | CV 88.0% (+/- 14.4%)\n  Voting (soft)        test 83% | CV 86.0% (+/- 15.9%)\n\nBest by cross-validation: Bagging (trees)\n\nClassification report (Voting soft):\n              precision    recall  f1-score   support\n\n        Fail       1.00      0.50      0.67         2\n        Pass       0.80      1.00      0.89         4\n\n    accuracy                           0.83         6\n   macro avg       0.90      0.75      0.78         6\nweighted avg       0.87      0.83      0.81         6\n\nPredictions for new students:\n  Student 1: 6 h, 80% -> PASS (pass probability 100%)\n  Student 2: 3 h, 55% -> FAIL (pass probability 0%)\n  Student 3: 9 h, 96% -> PASS (pass probability 100%)\n\nThese are model predictions, not guarantees."
  },
  "practice": [
    {
      "title": "Loan Approval: Hard vs Soft Voting",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Combine a tree, Logistic Regression and KNN into voting ensembles and compare hard and soft voting.",
      "tasks": [
        "Create X and y from the DataFrame",
        "Split 75/25 with random_state=1 and stratify=y",
        "Build a list of 3 estimators: Decision Tree (max_depth=3), Logistic Regression and KNN (n_neighbors=5)",
        "Train hard and soft VotingClassifiers and print both test accuracies",
        "Print the soft model's rejected/approved probabilities for income 70 and credit score 640"
      ],
      "hint": "Soft voting needs every estimator to support predict_proba. Use soft.predict_proba(applicant)[0] on a one-row DataFrame.",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.ensemble import VotingClassifier\nfrom sklearn.metrics import accuracy_score\n\nrng = np.random.RandomState(7)\nincome = rng.randint(20, 120, 60)\ncredit = rng.randint(300, 850, 60)\nscore = income / 120 + (credit - 300) / 550 + rng.normal(0, 0.25, 60)\napproved = (score > 1.0).astype(int)\ndf = pd.DataFrame({\"income\": income, \"credit_score\": credit, \"approved\": approved})\n\n# TODO 1: X = the two feature columns, y = approved\n# TODO 2: split 75/25 with random_state=1 and stratify=y\n# TODO 3: build a list of 3 estimators: tree (max_depth=3), logistic regression, KNN (n_neighbors=5)\n# TODO 4: train hard and soft VotingClassifiers and print both test accuracies\n# TODO 5: predict_proba from the soft model for income=70, credit_score=640",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.ensemble import VotingClassifier\nfrom sklearn.metrics import accuracy_score\n\nrng = np.random.RandomState(7)\nincome = rng.randint(20, 120, 60)\ncredit = rng.randint(300, 850, 60)\nscore = income / 120 + (credit - 300) / 550 + rng.normal(0, 0.25, 60)\napproved = (score > 1.0).astype(int)\ndf = pd.DataFrame({\"income\": income, \"credit_score\": credit, \"approved\": approved})\n\nX = df[[\"income\", \"credit_score\"]]\ny = df[\"approved\"]\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.25, random_state=1, stratify=y\n)\n\nestimators = [\n    (\"dt\", DecisionTreeClassifier(max_depth=3, random_state=1)),\n    (\"lr\", LogisticRegression(max_iter=1000)),\n    (\"knn\", KNeighborsClassifier(n_neighbors=5))\n]\n\nhard = VotingClassifier(estimators=estimators, voting=\"hard\")\nsoft = VotingClassifier(estimators=estimators, voting=\"soft\")\n\nfor name, model in [(\"Hard voting\", hard), (\"Soft voting\", soft)]:\n    model.fit(X_train, y_train)\n    acc = accuracy_score(y_test, model.predict(X_test))\n    print(f\"{name}: {acc:.2%}\")\n\napplicant = pd.DataFrame({\"income\": [70], \"credit_score\": [640]})\nproba = soft.predict_proba(applicant)[0]\nprint(f\"Rejected: {proba[0]:.0%} | Approved: {proba[1]:.0%}\")",
      "output": "Hard voting: 80.00%\nSoft voting: 80.00%\nRejected: 20% | Approved: 80%",
      "note": "Hard and soft voting tie on this small test set. Soft voting also gives a probability, which is more useful than a bare yes or no."
    },
    {
      "title": "Bagging vs Boosting",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Compare a single tree with Bagging, Random Forest, AdaBoost and Gradient Boosting using repeated cross-validation.",
      "tasks": [
        "Create X and y from the DataFrame",
        "Create cv = RepeatedStratifiedKFold(n_splits=5, n_repeats=4, random_state=0)",
        "Build a dictionary of the five models",
        "Print the mean and standard deviation of cross_val_score for each model",
        "Print the model with the highest mean and the model with the lowest spread"
      ],
      "hint": "Store (mean, std) in a dictionary and use max(results, key=lambda k: results[k][0]).",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import cross_val_score, RepeatedStratifiedKFold\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import (\n    BaggingClassifier, RandomForestClassifier,\n    AdaBoostClassifier, GradientBoostingClassifier\n)\n\nrng = np.random.RandomState(3)\nusage = rng.randint(1, 60, 80)\ncalls = rng.randint(0, 9, 80)\nrisk = calls / 8 - usage / 60 + rng.normal(0, 0.3, 80)\nchurn = (risk > -0.1).astype(int)\ndf = pd.DataFrame({\"monthly_usage\": usage, \"support_calls\": calls, \"churn\": churn})\n\n# TODO 1: X = the two features, y = churn\n# TODO 2: cv = RepeatedStratifiedKFold(n_splits=5, n_repeats=4, random_state=0)\n# TODO 3: models dict: single tree (max_depth=3), Bagging of trees, Random Forest, AdaBoost, Gradient Boosting\n# TODO 4: print mean and std of cross_val_score for each model\n# TODO 5: print which model has the highest mean and which has the lowest spread",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import cross_val_score, RepeatedStratifiedKFold\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import (\n    BaggingClassifier, RandomForestClassifier,\n    AdaBoostClassifier, GradientBoostingClassifier\n)\n\nrng = np.random.RandomState(3)\nusage = rng.randint(1, 60, 80)\ncalls = rng.randint(0, 9, 80)\nrisk = calls / 8 - usage / 60 + rng.normal(0, 0.3, 80)\nchurn = (risk > -0.1).astype(int)\ndf = pd.DataFrame({\"monthly_usage\": usage, \"support_calls\": calls, \"churn\": churn})\n\nX = df[[\"monthly_usage\", \"support_calls\"]]\ny = df[\"churn\"]\ncv = RepeatedStratifiedKFold(n_splits=5, n_repeats=4, random_state=0)\n\nmodels = {\n    \"Single Tree\": DecisionTreeClassifier(max_depth=3, random_state=0),\n    \"Bagging\": BaggingClassifier(\n        estimator=DecisionTreeClassifier(max_depth=3),\n        n_estimators=50, random_state=0\n    ),\n    \"Random Forest\": RandomForestClassifier(n_estimators=100, random_state=0),\n    \"AdaBoost\": AdaBoostClassifier(n_estimators=50, random_state=0),\n    \"Gradient Boosting\": GradientBoostingClassifier(random_state=0)\n}\n\nresults = {}\nfor name, model in models.items():\n    scores = cross_val_score(model, X, y, cv=cv)\n    results[name] = (scores.mean(), scores.std())\n    print(f\"{name:<18} mean {scores.mean():.1%} | std {scores.std():.1%}\")\n\nbest = max(results, key=lambda k: results[k][0])\nsteadiest = min(results, key=lambda k: results[k][1])\nprint(\"Highest mean:\", best)\nprint(\"Lowest spread:\", steadiest)",
      "output": "Single Tree        mean 78.4% | std 7.3%\nBagging            mean 81.2% | std 7.7%\nRandom Forest      mean 81.6% | std 7.3%\nAdaBoost           mean 80.0% | std 7.0%\nGradient Boosting  mean 80.9% | std 7.5%\nHighest mean: Random Forest\nLowest spread: AdaBoost",
      "note": "All five means are within about 3 points and the spreads are similar, so no model clearly wins. Differences this small can be noise, so always check the spread, not just the mean."
    }
  ],
  "checklist": [
    "Understood ensemble learning",
    "Learned bagging, voting and boosting",
    "Trained a Voting Ensemble",
    "Compared models on unseen data",
    "Read precision and recall",
    "Used cross-validation",
    "Built the Student Pass/Fail Predictor"
  ],
  "quiz": [
    {
      "q": "What does a hard Voting Classifier do?",
      "options": [
        "Averages predicted probabilities",
        "Takes the majority of predicted classes",
        "Trains models one after another",
        "Picks the most accurate model"
      ],
      "answer": 1,
      "why": "Hard voting counts each model's predicted class and returns the majority. Averaging probabilities is soft voting."
    },
    {
      "q": "Which technique builds models sequentially to fix earlier errors?",
      "options": [
        "Bagging",
        "Voting",
        "Boosting",
        "Random sampling"
      ],
      "answer": 2,
      "why": "Boosting trains each new model to improve on the mistakes or residuals of the previous ones, as in AdaBoost and Gradient Boosting."
    },
    {
      "q": "All four models scored 83.33% on the test split. What does that tell us?",
      "options": [
        "The ensemble is the best",
        "The test set is too small to separate them",
        "Logistic Regression is the best",
        "The models are identical"
      ],
      "answer": 1,
      "why": "With only 6 test students, one prediction changes accuracy by about 17 points. Use cross-validation and other metrics to compare."
    },
    {
      "q": "The ensemble's Fail recall is 0.50. What does that mean?",
      "options": [
        "Half of the actual failing students were caught",
        "Half of the predictions were wrong",
        "Half of the students passed",
        "The model is 50% accurate"
      ],
      "answer": 0,
      "why": "Recall is the share of real Fail students the model found. Here it found 1 of 2 and predicted the other as Pass."
    },
    {
      "q": "Does combining models always give better results?",
      "options": [
        "Yes, always",
        "No, diversity, data quality and evaluation matter",
        "Only with boosting",
        "Only with more than 10 models"
      ],
      "answer": 1,
      "why": "An ensemble helps when its members make different errors. On tiny or noisy data it can tie with or lose to a simple model."
    }
  ]
},
// DAY 17 snippet. In course-data.js: after Day 16's closing }, paste this object (keep the comma after Day 16). No images needed for this day.
{
  "day": 17,
  "title": "Hyperparameter Tuning with GridSearchCV",
  "subtitle": "Find better model settings systematically with GridSearchCV and cross-validation, and tune a Random Forest on the Breast Cancer dataset.",
  "level": "Intermediate",
  "duration": "60-90 min",
  "tags": [
    "Hyperparameters",
    "GridSearchCV",
    "Cross-Validation",
    "Random Forest",
    "Model Tuning"
  ],
  "goals": [
    "Understand what hyperparameters are",
    "Know how GridSearchCV and k-fold cross-validation work",
    "Tune a Random Forest and compare it with a baseline",
    "Inspect the top parameter combinations"
  ],
  "sections": [
    {
      "id": "concept",
      "icon": "🧠",
      "title": "Step 1: Understand the Concept",
      "meta": "Hyperparameters and GridSearchCV",
      "blocks": [
        {
          "type": "p",
          "text": "Hyperparameters are settings you choose before training a model. Different settings can produce different results."
        },
        {
          "type": "table",
          "head": [
            "Decision Tree setting",
            "Meaning"
          ],
          "rows": [
            [
              "max_depth",
              "Maximum depth of the tree"
            ],
            [
              "min_samples_split",
              "Minimum samples needed to split a node"
            ],
            [
              "min_samples_leaf",
              "Minimum samples allowed in a leaf"
            ]
          ]
        },
        {
          "type": "table",
          "head": [
            "Approach",
            "How it works"
          ],
          "rows": [
            [
              "Manual tuning",
              "Try a few values yourself and compare. Slow, and it can miss useful combinations."
            ],
            [
              "GridSearchCV",
              "You give candidate values. scikit-learn evaluates every combination with cross-validation and picks the best by your chosen scoring metric."
            ]
          ]
        },
        {
          "type": "p",
          "text": "Cross-validation: instead of relying on one train/validation split, k-fold cross-validation divides the training data into k folds. Each fold gets a turn as the validation fold while the others train the model. With 5 folds, every combination is scored on five splits and GridSearchCV compares the average scores."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "The test set stays untouched. GridSearchCV uses only the training set to choose hyperparameters."
        }
      ]
    },
    {
      "id": "load",
      "icon": "⚡",
      "title": "Step 2: Load the Data",
      "meta": "Breast Cancer Wisconsin",
      "blocks": [
        {
          "type": "p",
          "text": "We use scikit-learn's built-in Breast Cancer dataset to classify tumors as malignant or benign. No CSV download is needed. Copy this into day17_tuning.py:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "day17_tuning.py",
          "code": "import pandas as pd\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split, GridSearchCV\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score, classification_report\n\n# Load dataset\ndata = load_breast_cancer()\nX = pd.DataFrame(data.data, columns=data.feature_names)\ny = data.target\n\nprint(\"Dataset shape:\", X.shape)\nprint(\"Classes:\", data.target_names)\nprint(X.head())",
          "output": "Dataset shape: (569, 30)\nClasses: ['malignant' 'benign']\n   mean radius  mean texture  ...  worst symmetry  worst fractal dimension\n0        17.99         10.38  ...          0.4601                  0.11890\n1        20.57         17.77  ...          0.2750                  0.08902\n2        19.69         21.25  ...          0.3613                  0.08758\n3        11.42         20.38  ...          0.6638                  0.17300\n4        20.29         14.34  ...          0.2364                  0.07678\n\n[5 rows x 30 columns]"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "569 samples and 30 measurements per sample. The target classes are malignant and benign."
        }
      ]
    },
    {
      "id": "split",
      "icon": "✂️",
      "title": "Step 3: Split the Data",
      "meta": "Reserve a test set",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "split.py",
          "code": "X_train, X_test, y_train, y_test = train_test_split(\n    X, y,\n    test_size=0.20,\n    random_state=42,\n    stratify=y\n)\n\nprint(\"Training samples:\", len(X_train))\nprint(\"Testing samples:\", len(X_test))",
          "output": "Training samples: 455\nTesting samples: 114"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Important: we reserve the test set for the final evaluation. Stratify keeps the malignant/benign balance the same in both parts."
        }
      ]
    },
    {
      "id": "baseline",
      "icon": "📏",
      "title": "Step 4: Create a Baseline Model",
      "meta": "Train without tuning",
      "blocks": [
        {
          "type": "p",
          "text": "First, train a Random Forest with default settings. Keep this score to compare against the tuned model."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "baseline.py",
          "code": "baseline = RandomForestClassifier(random_state=42)\nbaseline.fit(X_train, y_train)\nbaseline_predictions = baseline.predict(X_test)\n\nprint(\n    \"Baseline test accuracy:\",\n    round(accuracy_score(y_test, baseline_predictions), 4)\n)",
          "output": "Baseline test accuracy: 0.9561"
        }
      ]
    },
    {
      "id": "grid",
      "icon": "🎛️",
      "title": "Step 5: Define the Hyperparameter Grid",
      "meta": "24 combinations",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "grid.py",
          "code": "param_grid = {\n    \"n_estimators\": [50, 100],\n    \"max_depth\": [None, 5, 10],\n    \"min_samples_split\": [2, 5],\n    \"min_samples_leaf\": [1, 2]\n}\n\nprint(\"Combinations:\", 2 * 3 * 2 * 2)",
          "output": "Combinations: 24"
        },
        {
          "type": "table",
          "head": [
            "Parameter",
            "Meaning"
          ],
          "rows": [
            [
              "n_estimators",
              "Number of trees"
            ],
            [
              "max_depth",
              "Maximum depth of each tree"
            ],
            [
              "min_samples_split",
              "Minimum samples needed to split a node"
            ],
            [
              "min_samples_leaf",
              "Minimum samples allowed in a leaf"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "2 x 3 x 2 x 2 = 24 combinations. With 5-fold cross-validation, GridSearchCV performs 24 x 5 = 120 model fits, then refits the best configuration on the full training set."
        }
      ]
    },
    {
      "id": "search",
      "icon": "🔥",
      "title": "Step 6: Run GridSearchCV",
      "meta": "Most important step",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "search.py",
          "code": "rf = RandomForestClassifier(random_state=42)\n\ngrid_search = GridSearchCV(\n    estimator=rf,\n    param_grid=param_grid,\n    cv=5,\n    scoring=\"accuracy\",\n    n_jobs=-1,\n    verbose=1\n)\n\ngrid_search.fit(X_train, y_train)\n\nprint(\"Best parameters:\")\nprint(grid_search.best_params_)\n\nprint(\"\\nBest cross-validation accuracy:\")\nprint(round(grid_search.best_score_, 4))",
          "output": "Fitting 5 folds for each of 24 candidates, totalling 120 fits\nBest parameters:\n{'max_depth': None, 'min_samples_leaf': 2, 'min_samples_split': 5, 'n_estimators': 50}\n\nBest cross-validation accuracy:\n0.9604"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "best_params_ holds the winning settings and best_score_ holds their mean cross-validation score. With the default refit=True, best_estimator_ is refitted on the whole training set."
        }
      ]
    },
    {
      "id": "evaluate",
      "icon": "🎯",
      "title": "Step 7: Evaluate on Unseen Test Data",
      "meta": "Baseline vs tuned",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "evaluate.py",
          "code": "best_model = grid_search.best_estimator_\ntuned_predictions = best_model.predict(X_test)\n\nprint(\n    \"Baseline accuracy:\",\n    round(accuracy_score(y_test, baseline_predictions), 4)\n)\nprint(\n    \"Tuned accuracy:\",\n    round(accuracy_score(y_test, tuned_predictions), 4)\n)\n\nprint(\"\\nClassification Report:\")\nprint(classification_report(\n    y_test,\n    tuned_predictions,\n    target_names=data.target_names\n))",
          "output": "Baseline accuracy: 0.9561\nTuned accuracy: 0.9474\n\nClassification Report:\n              precision    recall  f1-score   support\n\n   malignant       0.93      0.93      0.93        42\n      benign       0.96      0.96      0.96        72\n\n    accuracy                           0.95       114\n   macro avg       0.94      0.94      0.94       114\nweighted avg       0.95      0.95      0.95       114"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Your goal: compare the baseline and tuned models on the same test set. Tuning may improve performance, but an improvement is not guaranteed."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Here the tuned model scores slightly lower on the test set (0.9474 vs 0.9561). That is one sample out of 114. The best cross-validation score is higher than the baseline's, but the test set is only one sample of data, so do not read too much into a one-sample gap."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Do not use the test set repeatedly to choose parameters. That would gradually turn it into another validation set."
        }
      ]
    },
    {
      "id": "inspect",
      "icon": "🔎",
      "title": "Step 8: Inspect the Top Combinations",
      "meta": "Beyond the winner",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "inspect.py",
          "code": "results = pd.DataFrame(grid_search.cv_results_)\n\ntop_results = results[\n    [\n        \"params\",\n        \"mean_test_score\",\n        \"std_test_score\",\n        \"rank_test_score\"\n    ]\n].sort_values(\"rank_test_score\").head(5)\n\nprint(top_results.to_string(index=False))",
          "output": "                                                                                params  mean_test_score  std_test_score  rank_test_score\n{'max_depth': None, 'min_samples_leaf': 2, 'min_samples_split': 5, 'n_estimators': 50}         0.960440        0.025631                1\n  {'max_depth': 10, 'min_samples_leaf': 2, 'min_samples_split': 5, 'n_estimators': 50}         0.960440        0.025631                1\n{'max_depth': None, 'min_samples_leaf': 2, 'min_samples_split': 2, 'n_estimators': 50}         0.958242        0.028146                3\n{'max_depth': None, 'min_samples_leaf': 1, 'min_samples_split': 5, 'n_estimators': 50}         0.958242        0.023466                3\n  {'max_depth': 10, 'min_samples_leaf': 1, 'min_samples_split': 5, 'n_estimators': 50}         0.958242        0.023466                3"
        },
        {
          "type": "list",
          "items": [
            "Which configurations performed best?",
            "Were the top scores very close?",
            "Was there substantial variation across folds?"
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Two configurations tie at rank 1 (max_depth None and 10 give identical scores), and the next three are only about 0.002 behind. The fold-to-fold std is about 0.025. Close scores and fold variation mean there is no single clearly superior configuration."
        }
      ]
    },
    {
      "id": "predict",
      "icon": "🩺",
      "title": "Step 9: Predict a Sample",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "predict.py",
          "code": "sample = X_test.iloc[[0]]\n\nprediction = best_model.predict(sample)[0]\nprobability = best_model.predict_proba(sample)[0]\n\nprint(\"Prediction:\", data.target_names[prediction])\nprint(\"Actual:\", data.target_names[y_test[0]])\nprint(f\"Malignant: {probability[0]:.0%} | Benign: {probability[1]:.0%}\")",
          "output": "Prediction: malignant\nActual: malignant\nMalignant: 100% | Benign: 0%"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "This is a learning exercise, not a medical tool. Never use a model like this to make a real diagnosis."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🔥",
      "title": "Mini Project: Tune and Compare",
      "blocks": [
        {
          "type": "p",
          "text": "The Final Program below tunes both a Decision Tree and a Random Forest with GridSearchCV, compares baseline and tuned scores, inspects the top configurations, and evaluates the winner once on the test set."
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
            "Hyperparameters are set before training; parameters are learned from data",
            "GridSearchCV tries every combination using k-fold cross-validation",
            "Tune on the training set only and keep the test set for one final check",
            "Compare the tuned model with a baseline",
            "Inspect the top results: ties and large fold variation mean no clear winner",
            "Tuning may improve performance, but an improvement is not guaranteed"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Hyperparameter Tuning with GridSearchCV",
    "file": "day17_final.py",
    "description": "One program combining Day 17: a Decision Tree and a Random Forest tuned with GridSearchCV, baseline vs tuned scores with cross-validation and the test set, the top configurations, a classification report and a confusion matrix.",
    "concepts": [
      "hyperparameters",
      "GridSearchCV",
      "k-fold cross-validation",
      "baseline comparison",
      "top-results inspection",
      "single final test evaluation"
    ],
    "code": "import pandas as pd\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split, GridSearchCV, cross_val_score\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.metrics import accuracy_score, classification_report, confusion_matrix\n\nprint(\"=== HYPERPARAMETER TUNING WITH GRIDSEARCHCV ===\")\n\ndata = load_breast_cancer()\nX = pd.DataFrame(data.data, columns=data.feature_names)\ny = data.target\nprint(\"Samples:\", X.shape[0], \"| Features:\", X.shape[1])\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, random_state=42, stratify=y\n)\n\nsearches = {\n    \"Decision Tree\": (\n        DecisionTreeClassifier(random_state=42),\n        {\n            \"max_depth\": [None, 3, 5, 8],\n            \"min_samples_split\": [2, 5, 10],\n            \"min_samples_leaf\": [1, 2, 4]\n        }\n    ),\n    \"Random Forest\": (\n        RandomForestClassifier(random_state=42),\n        {\n            \"n_estimators\": [50, 100],\n            \"max_depth\": [None, 5, 10],\n            \"min_samples_split\": [2, 5],\n            \"min_samples_leaf\": [1, 2]\n        }\n    )\n}\n\ntuned = {}\nprint(\"\\nBaseline vs tuned (5-fold CV on training data, then the test set):\")\nfor name, (model, grid) in searches.items():\n    base_cv = cross_val_score(model, X_train, y_train, cv=5).mean()\n    model.fit(X_train, y_train)\n    base_test = accuracy_score(y_test, model.predict(X_test))\n\n    gs = GridSearchCV(model, grid, cv=5, scoring=\"accuracy\", n_jobs=-1)\n    gs.fit(X_train, y_train)\n    tuned_test = accuracy_score(y_test, gs.predict(X_test))\n    tuned[name] = gs\n\n    print(f\"\\n{name}\")\n    print(f\"  Baseline: CV {base_cv:.4f} | test {base_test:.4f}\")\n    print(f\"  Tuned:    CV {gs.best_score_:.4f} | test {tuned_test:.4f}\")\n    print(\"  Best params:\", gs.best_params_)\n\nbest_name = max(tuned, key=lambda n: tuned[n].best_score_)\nbest = tuned[best_name]\nprint(\"\\nBest by cross-validation:\", best_name)\n\nprint(\"\\nTop 3 configurations:\")\nres = pd.DataFrame(best.cv_results_)\nprint(\n    res[[\"params\", \"mean_test_score\", \"std_test_score\", \"rank_test_score\"]]\n    .sort_values(\"rank_test_score\").head(3).to_string(index=False)\n)\n\npredictions = best.predict(X_test)\nprint(\"\\nClassification report:\")\nprint(classification_report(y_test, predictions, target_names=data.target_names))\n\ncm = confusion_matrix(y_test, predictions)\nprint(\"Confusion matrix (rows = actual, columns = predicted):\")\nprint(pd.DataFrame(cm, index=data.target_names, columns=data.target_names))\n\nprint(\"\\nThe test set was used only once, for this final check.\")",
    "output": "=== HYPERPARAMETER TUNING WITH GRIDSEARCHCV ===\nSamples: 569 | Features: 30\n\nBaseline vs tuned (5-fold CV on training data, then the test set):\n\nDecision Tree\n  Baseline: CV 0.9099 | test 0.9123\n  Tuned:    CV 0.9385 | test 0.9211\n  Best params: {'max_depth': 5, 'min_samples_leaf': 1, 'min_samples_split': 5}\n\nRandom Forest\n  Baseline: CV 0.9538 | test 0.9561\n  Tuned:    CV 0.9604 | test 0.9474\n  Best params: {'max_depth': None, 'min_samples_leaf': 2, 'min_samples_split': 5, 'n_estimators': 50}\n\nBest by cross-validation: Random Forest\n\nTop 3 configurations:\n                                                                                params  mean_test_score  std_test_score  rank_test_score\n{'max_depth': None, 'min_samples_leaf': 2, 'min_samples_split': 5, 'n_estimators': 50}         0.960440        0.025631                1\n  {'max_depth': 10, 'min_samples_leaf': 2, 'min_samples_split': 5, 'n_estimators': 50}         0.960440        0.025631                1\n{'max_depth': None, 'min_samples_leaf': 2, 'min_samples_split': 2, 'n_estimators': 50}         0.958242        0.028146                3\n\nClassification report:\n              precision    recall  f1-score   support\n\n   malignant       0.93      0.93      0.93        42\n      benign       0.96      0.96      0.96        72\n\n    accuracy                           0.95       114\n   macro avg       0.94      0.94      0.94       114\nweighted avg       0.95      0.95      0.95       114\n\nConfusion matrix (rows = actual, columns = predicted):\n           malignant  benign\nmalignant         39       3\nbenign             3      69\n\nThe test set was used only once, for this final check."
  },
  "practice": [
    {
      "title": "Tune a Decision Tree on Wine Data",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Tune a Decision Tree with GridSearchCV on the built-in Wine dataset and compare it with a baseline.",
      "tasks": [
        "Split 80/20 with random_state=1 and stratify=y",
        "Train a baseline DecisionTreeClassifier(random_state=1) and print its test accuracy",
        "Create a param_grid with max_depth [2, 3, 4, 5, None] and min_samples_leaf [1, 2, 4]",
        "Run GridSearchCV with cv=5 and scoring=\"accuracy\" on the training set only",
        "Print best_params_, best_score_ and the tuned test accuracy",
        "Print the number of combinations and total fits"
      ],
      "hint": "Combinations = 5 x 3 = 15. Total fits = combinations x number of folds.",
      "starter": "import pandas as pd\nfrom sklearn.datasets import load_wine\nfrom sklearn.model_selection import train_test_split, GridSearchCV\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score\n\ndata = load_wine()\nX = pd.DataFrame(data.data, columns=data.feature_names)\ny = data.target\n\n# TODO 1: split 80/20 with random_state=1 and stratify=y\n# TODO 2: train a baseline DecisionTreeClassifier(random_state=1) and print its test accuracy\n# TODO 3: param_grid with max_depth [2, 3, 4, 5, None] and min_samples_leaf [1, 2, 4]\n# TODO 4: run GridSearchCV with cv=5, scoring=\"accuracy\" on the training set only\n# TODO 5: print best_params_, best_score_ and the tuned test accuracy\n# TODO 6: print the number of parameter combinations and total fits",
      "solution": "import pandas as pd\nfrom sklearn.datasets import load_wine\nfrom sklearn.model_selection import train_test_split, GridSearchCV\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score\n\ndata = load_wine()\nX = pd.DataFrame(data.data, columns=data.feature_names)\ny = data.target\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, random_state=1, stratify=y\n)\n\nbaseline = DecisionTreeClassifier(random_state=1)\nbaseline.fit(X_train, y_train)\nprint(\"Baseline test accuracy:\", round(accuracy_score(y_test, baseline.predict(X_test)), 4))\n\nparam_grid = {\n    \"max_depth\": [2, 3, 4, 5, None],\n    \"min_samples_leaf\": [1, 2, 4]\n}\n\ngrid = GridSearchCV(\n    DecisionTreeClassifier(random_state=1),\n    param_grid, cv=5, scoring=\"accuracy\"\n)\ngrid.fit(X_train, y_train)\n\ncombos = 5 * 3\nprint(\"Combinations:\", combos, \"| Total fits:\", combos * 5)\nprint(\"Best parameters:\", grid.best_params_)\nprint(\"Best CV accuracy:\", round(grid.best_score_, 4))\nprint(\"Tuned test accuracy:\", round(accuracy_score(y_test, grid.predict(X_test)), 4))",
      "output": "Baseline test accuracy: 0.9444\nCombinations: 15 | Total fits: 75\nBest parameters: {'max_depth': 4, 'min_samples_leaf': 2}\nBest CV accuracy: 0.8869\nTuned test accuracy: 0.9444",
      "note": "The tuned test accuracy equals the baseline's. The best cross-validation score (0.8869) is lower than the test accuracy, a reminder that the small test set is just one sample."
    },
    {
      "title": "Tune an SVM Pipeline with F1",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Tune a scaled SVM inside a Pipeline, score with F1 and inspect the top configurations.",
      "tasks": [
        "Split 75/25 with random_state=0 and stratify=y",
        "Build a Pipeline with StandardScaler and SVC",
        "Create a grid with svc__C [0.1, 1, 10], svc__kernel [\"linear\", \"rbf\"] and svc__gamma [\"scale\", 0.01]",
        "Run GridSearchCV with cv=5 and scoring=\"f1\" on the training data",
        "Print best_params_ and the best CV F1",
        "Print the test F1 and the classification report",
        "Print the 3 best configurations (params, mean, std)"
      ],
      "hint": "Pipeline parameters use the step name, a double underscore and the parameter, such as svc__C. Sort cv_results_ by mean_test_score.",
      "starter": "import pandas as pd\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split, GridSearchCV\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\nfrom sklearn.metrics import f1_score, classification_report\n\ndata = load_breast_cancer()\nX = pd.DataFrame(data.data, columns=data.feature_names)\ny = data.target\n\n# TODO 1: split 75/25 with random_state=0 and stratify=y\n# TODO 2: build Pipeline([(\"scale\", StandardScaler()), (\"svc\", SVC())])\n# TODO 3: param_grid with keys \"svc__C\" [0.1, 1, 10], \"svc__kernel\" [\"linear\", \"rbf\"], \"svc__gamma\" [\"scale\", 0.01]\n# TODO 4: GridSearchCV with cv=5 and scoring=\"f1\" (training data only)\n# TODO 5: print best_params_ and best CV F1\n# TODO 6: print test F1 and the classification report\n# TODO 7: print the 3 best configurations from cv_results_ (params, mean, std)",
      "solution": "import pandas as pd\nfrom sklearn.datasets import load_breast_cancer\nfrom sklearn.model_selection import train_test_split, GridSearchCV\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.svm import SVC\nfrom sklearn.metrics import f1_score, classification_report\n\ndata = load_breast_cancer()\nX = pd.DataFrame(data.data, columns=data.feature_names)\ny = data.target\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.25, random_state=0, stratify=y\n)\n\npipe = Pipeline([(\"scale\", StandardScaler()), (\"svc\", SVC())])\n\nparam_grid = {\n    \"svc__C\": [0.1, 1, 10],\n    \"svc__kernel\": [\"linear\", \"rbf\"],\n    \"svc__gamma\": [\"scale\", 0.01]\n}\n\ngrid = GridSearchCV(pipe, param_grid, cv=5, scoring=\"f1\", n_jobs=-1)\ngrid.fit(X_train, y_train)\n\nprint(\"Best parameters:\", grid.best_params_)\nprint(\"Best CV F1:\", round(grid.best_score_, 4))\n\npred = grid.predict(X_test)\nprint(\"Test F1:\", round(f1_score(y_test, pred), 4))\nprint(classification_report(y_test, pred, target_names=data.target_names))\n\nres = pd.DataFrame(grid.cv_results_)\nprint(\n    res[[\"params\", \"mean_test_score\", \"std_test_score\"]]\n    .sort_values(\"mean_test_score\", ascending=False)\n    .head(3).to_string(index=False)\n)",
      "output": "Best parameters: {'svc__C': 0.1, 'svc__gamma': 'scale', 'svc__kernel': 'linear'}\nBest CV F1: 0.9906\nTest F1: 0.9674\n              precision    recall  f1-score   support\n\n   malignant       0.98      0.91      0.94        53\n      benign       0.95      0.99      0.97        90\n\n    accuracy                           0.96       143\n   macro avg       0.96      0.95      0.95       143\nweighted avg       0.96      0.96      0.96       143\n\n                                                         params  mean_test_score  std_test_score\n{'svc__C': 0.1, 'svc__gamma': 'scale', 'svc__kernel': 'linear'}         0.990616        0.010434\n   {'svc__C': 0.1, 'svc__gamma': 0.01, 'svc__kernel': 'linear'}         0.990616        0.010434\n     {'svc__C': 1, 'svc__gamma': 'scale', 'svc__kernel': 'rbf'}         0.988886        0.009077",
      "note": "The top two configurations have identical scores because gamma has no effect with a linear kernel. Putting StandardScaler in the Pipeline means scaling is fitted only on each training fold, which avoids leakage."
    }
  ],
  "checklist": [
    "Understood hyperparameters",
    "Learned how GridSearchCV and k-fold cross-validation work",
    "Trained a baseline Random Forest",
    "Defined a hyperparameter grid",
    "Ran GridSearchCV on the training set",
    "Evaluated the tuned model on the test set once",
    "Inspected the top parameter combinations"
  ],
  "quiz": [
    {
      "q": "What is a hyperparameter?",
      "options": [
        "A value learned from the data during training",
        "A setting chosen before training",
        "The model's accuracy",
        "A column in the dataset"
      ],
      "answer": 1,
      "why": "Hyperparameters such as max_depth or n_estimators are set before training. Parameters are what the model learns from the data."
    },
    {
      "q": "A grid has 2 x 3 x 2 x 2 combinations and cv=5. How many model fits does the search perform before the final refit?",
      "options": [
        "24",
        "60",
        "120",
        "240"
      ],
      "answer": 2,
      "why": "There are 24 combinations and each is fitted on 5 folds, so 24 x 5 = 120 fits, then the best configuration is refitted once."
    },
    {
      "q": "Which data should GridSearchCV be fitted on?",
      "options": [
        "The full dataset",
        "The test set",
        "The training set only",
        "The validation set from the test set"
      ],
      "answer": 2,
      "why": "Fitting the search on the training set keeps the test set untouched for one final, unbiased evaluation."
    },
    {
      "q": "The tuned model scores slightly below the baseline on the test set. What is the best conclusion?",
      "options": [
        "GridSearchCV is broken",
        "Tuning is guaranteed to fail",
        "A small gap on one test set can be noise; check the cross-validation scores and the spread",
        "Retune repeatedly until the test score rises"
      ],
      "answer": 2,
      "why": "With 114 test samples, one sample moves accuracy by about 0.9 points. Judge using cross-validation, and avoid tuning against the test set."
    },
    {
      "q": "The top 5 configurations have almost identical scores. What does that suggest?",
      "options": [
        "Only the first one is usable",
        "There is no single clearly superior configuration",
        "The data is invalid",
        "cv must be 10"
      ],
      "answer": 1,
      "why": "Near-tied scores with fold-to-fold variation mean the choice among them matters little, so you can prefer the simpler or cheaper model."
    }
  ]
},

// DAY 18 snippet. In course-data.js: after Day 17's closing }, paste this object (keep the comma after Day 17). No images needed for this day.
{
  "day": 18,
  "title": "Fraud Detection Baseline",
  "subtitle": "Work with rare-event data: build a dummy baseline and a Logistic Regression baseline, and learn why accuracy alone is misleading.",
  "level": "Intermediate",
  "duration": "60-90 min",
  "tags": [
    "Imbalanced Data",
    "Fraud Detection",
    "Confusion Matrix",
    "Precision and Recall",
    "Baseline Models"
  ],
  "goals": [
    "Understand why accuracy is misleading on rare-event data",
    "Build a DummyClassifier baseline and a Logistic Regression baseline",
    "Read a confusion matrix as TN, FP, FN and TP",
    "Compare models with fraud precision, recall and F1"
  ],
  "sections": [
    {
      "id": "concept",
      "icon": "🧠",
      "title": "Step 1: Understand the Problem",
      "meta": "Rare events and accuracy",
      "blocks": [
        {
          "type": "p",
          "text": "In fraud detection, almost every transaction is legitimate. A model can look excellent on accuracy while catching no fraud at all, so we build simple baselines first and judge them with the right metrics."
        },
        {
          "type": "table",
          "head": [
            "Term",
            "Meaning"
          ],
          "rows": [
            [
              "TN",
              "Legitimate transactions correctly predicted as legitimate"
            ],
            [
              "FP",
              "Legitimate transactions incorrectly flagged as fraud"
            ],
            [
              "FN",
              "Fraud transactions incorrectly predicted as legitimate"
            ],
            [
              "TP",
              "Fraud transactions correctly detected"
            ]
          ]
        },
        {
          "type": "table",
          "head": [
            "Metric",
            "Question it answers"
          ],
          "rows": [
            [
              "Precision = TP / (TP + FP)",
              "Of the transactions flagged as fraud, how many really were fraud?"
            ],
            [
              "Recall = TP / (TP + FN)",
              "Of all actual fraud cases, how many did the model detect?"
            ],
            [
              "F1",
              "A single score that balances precision and recall"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "In a confusion matrix, rows are actual classes and columns are predicted classes. The class order is 0 (Legitimate), then 1 (Fraud)."
        }
      ]
    },
    {
      "id": "data",
      "icon": "⚡",
      "title": "Step 2: Create the Dataset",
      "meta": "Synthetic fraud data",
      "blocks": [
        {
          "type": "p",
          "text": "We create a synthetic fraud dataset: 30,000 transactions with ten features, an Amount column and a Class column (1 = fraud, 0 = legitimate). Copy this into day18_fraud.py:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "day18_fraud.py",
          "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.datasets import make_classification\n\n# Synthetic stand-in for a credit-card fraud dataset (fraud is rare)\nX_raw, y_raw = make_classification(\n    n_samples=30000,\n    n_features=10,\n    n_informative=6,\n    n_redundant=0,\n    weights=[0.99, 0.01],\n    class_sep=0.8,\n    flip_y=0,\n    random_state=42\n)\n\ndf = pd.DataFrame(X_raw, columns=[f\"V{i}\" for i in range(1, 11)])\nrng = np.random.RandomState(42)\ndf[\"Amount\"] = rng.lognormal(mean=3.5, sigma=1.0, size=len(df)).round(2)\ndf[\"Class\"] = y_raw\n\nprint(\"Dataset shape:\", df.shape)\nprint(\"\\nClass counts:\")\nprint(df[\"Class\"].value_counts())\nprint(\"\\nFraud rate:\", f\"{df['Class'].mean():.2%}\")",
          "output": "Dataset shape: (30000, 12)\n\nClass counts:\nClass\n0    29700\n1      300\nName: count, dtype: int64\n\nFraud rate: 1.00%"
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Using a real fraud CSV (for example creditcard.csv)? Replace this step with df = pd.read_csv(\"creditcard.csv\"). The target column must be named Class. Every later step works unchanged, but your numbers will differ."
        }
      ]
    },
    {
      "id": "split",
      "icon": "✂️",
      "title": "Step 3: Separate Features and Target",
      "meta": "Stratified split",
      "blocks": [
        {
          "type": "p",
          "text": "Features (X) are the transaction information used to predict. The target (y) says whether the transaction is fraud (1) or legitimate (0)."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "split.py",
          "code": "from sklearn.model_selection import train_test_split\n\nX = df.drop(columns=[\"Class\"])\ny = df[\"Class\"]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X,\n    y,\n    test_size=0.20,\n    random_state=42,\n    stratify=y\n)\n\nprint(\"Training rows:\", len(X_train))\nprint(\"Testing rows:\", len(X_test))\n\nprint(\"\\nFraud cases in training data:\", int(y_train.sum()))\nprint(\"Fraud cases in test data:\", int(y_test.sum()))",
          "output": "Training rows: 24000\nTesting rows: 6000\n\nFraud cases in training data: 240\nFraud cases in test data: 60"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Why stratify=y? Fraud is rare. Stratification keeps about the same fraud proportion in both sets: 240 fraud cases in training and 60 in testing."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Reserve the test set for evaluation. Do not repeatedly use it to tune the model."
        }
      ]
    },
    {
      "id": "dummy",
      "icon": "📏",
      "title": "Step 4: Baseline A — The Simplest Model",
      "meta": "Always predict legitimate",
      "blocks": [
        {
          "type": "p",
          "text": "First, a model that always predicts the majority class."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "dummy.py",
          "code": "from sklearn.dummy import DummyClassifier\nfrom sklearn.metrics import (\n    accuracy_score,\n    classification_report,\n    confusion_matrix\n)\n\ndummy_model = DummyClassifier(strategy=\"most_frequent\")\ndummy_model.fit(X_train, y_train)\n\ndummy_predictions = dummy_model.predict(X_test)\n\nprint(\"Dummy Model Accuracy:\",\n      accuracy_score(y_test, dummy_predictions))\n\nprint(\"\\nConfusion Matrix:\")\nprint(confusion_matrix(y_test, dummy_predictions, labels=[0, 1]))\n\nprint(\"\\nClassification Report:\")\nprint(classification_report(\n    y_test,\n    dummy_predictions,\n    labels=[0, 1],\n    target_names=[\"Legitimate\", \"Fraud\"],\n    zero_division=0\n))",
          "output": "Dummy Model Accuracy: 0.99\n\nConfusion Matrix:\n[[5940    0]\n [  60    0]]\n\nClassification Report:\n              precision    recall  f1-score   support\n\n  Legitimate       0.99      1.00      0.99      5940\n       Fraud       0.00      0.00      0.00        60\n\n    accuracy                           0.99      6000\n   macro avg       0.49      0.50      0.50      6000\nweighted avg       0.98      0.99      0.99      6000"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Accuracy is 0.99, yet the model caught 0 of 60 fraud cases. The dummy model never predicts fraud, so fraud recall is zero. This is the warning against trusting accuracy alone."
        }
      ]
    },
    {
      "id": "logistic",
      "icon": "🔥",
      "title": "Step 5: Baseline B — Logistic Regression",
      "meta": "Most important step",
      "blocks": [
        {
          "type": "p",
          "text": "Now a real ML model. A pipeline scales the features before fitting Logistic Regression."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "logistic.py",
          "code": "from sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\nlogistic_model = make_pipeline(\n    StandardScaler(),\n    LogisticRegression(max_iter=1000, random_state=42)\n)\n\nlogistic_model.fit(X_train, y_train)\n\nlogistic_predictions = logistic_model.predict(X_test)\n\nprint(\"Logistic Regression Accuracy:\",\n      accuracy_score(y_test, logistic_predictions))\n\nprint(\"\\nConfusion Matrix:\")\nprint(confusion_matrix(\n    y_test,\n    logistic_predictions,\n    labels=[0, 1]\n))\n\nprint(\"\\nClassification Report:\")\nprint(classification_report(\n    y_test,\n    logistic_predictions,\n    labels=[0, 1],\n    target_names=[\"Legitimate\", \"Fraud\"],\n    zero_division=0\n))",
          "output": "Logistic Regression Accuracy: 0.992\n\nConfusion Matrix:\n[[5939    1]\n [  47   13]]\n\nClassification Report:\n              precision    recall  f1-score   support\n\n  Legitimate       0.99      1.00      1.00      5940\n       Fraud       0.93      0.22      0.35        60\n\n    accuracy                           0.99      6000\n   macro avg       0.96      0.61      0.67      6000\nweighted avg       0.99      0.99      0.99      6000"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "This is our initial baseline, not our final fraud detector. With default settings it caught 13 of 60 frauds (recall 0.22) and flagged only 1 legitimate transaction (precision 0.93). That gives us a measurable starting point."
        }
      ]
    },
    {
      "id": "compare",
      "icon": "📊",
      "title": "Step 6: Compare the Two Models",
      "meta": "Look at fraud recall first",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "compare.py",
          "code": "from sklearn.metrics import precision_score, recall_score, f1_score\n\nresults = pd.DataFrame([\n    {\n        \"Model\": \"Dummy Classifier\",\n        \"Accuracy\": accuracy_score(y_test, dummy_predictions),\n        \"Fraud Precision\": precision_score(\n            y_test, dummy_predictions, zero_division=0\n        ),\n        \"Fraud Recall\": recall_score(\n            y_test, dummy_predictions, zero_division=0\n        ),\n        \"Fraud F1\": f1_score(\n            y_test, dummy_predictions, zero_division=0\n        )\n    },\n    {\n        \"Model\": \"Logistic Regression\",\n        \"Accuracy\": accuracy_score(y_test, logistic_predictions),\n        \"Fraud Precision\": precision_score(\n            y_test, logistic_predictions, zero_division=0\n        ),\n        \"Fraud Recall\": recall_score(\n            y_test, logistic_predictions, zero_division=0\n        ),\n        \"Fraud F1\": f1_score(\n            y_test, logistic_predictions, zero_division=0\n        )\n    }\n])\n\nprint(results.round(4).to_string(index=False))",
          "output": "              Model  Accuracy  Fraud Precision  Fraud Recall  Fraud F1\n   Dummy Classifier     0.990           0.0000        0.0000    0.0000\nLogistic Regression     0.992           0.9286        0.2167    0.3514"
        },
        {
          "type": "list",
          "items": [
            "Fraud Recall: what proportion of all actual fraud cases did the model detect?",
            "Fraud Precision: how many flagged transactions really were fraud?",
            "Fraud F1: the balance between precision and recall"
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Accuracy rose only from 0.990 to 0.992, but fraud recall went from 0 to 0.22. High accuracy alone does not mean fraud detection is good."
        }
      ]
    },
    {
      "id": "matrix",
      "icon": "🔎",
      "title": "Step 7: Read the Confusion Matrix",
      "meta": "TN, FP, FN, TP",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "matrix.py",
          "code": "tn, fp, fn, tp = confusion_matrix(\n    y_test, logistic_predictions, labels=[0, 1]\n).ravel()\n\nprint(\"TN (legitimate, correct):\", tn)\nprint(\"FP (legitimate flagged as fraud):\", fp)\nprint(\"FN (fraud missed):\", fn)\nprint(\"TP (fraud caught):\", tp)\n\nprint(\"\\nFraud recall   = TP / (TP + FN) =\", round(tp / (tp + fn), 4))\nprint(\"Fraud precision = TP / (TP + FP) =\", round(tp / (tp + fp), 4))\nprint(f\"\\nFraud missed: {fn} of {fn + tp} ({fn / (fn + tp):.0%})\")",
          "output": "TN (legitimate, correct): 5939\nFP (legitimate flagged as fraud): 1\nFN (fraud missed): 47\nTP (fraud caught): 13\n\nFraud recall   = TP / (TP + FN) = 0.2167\nFraud precision = TP / (TP + FP) = 0.9286\n\nFraud missed: 47 of 60 (78%)"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The model is cautious: very few false alarms, but 47 of 60 frauds (78%) slip through. Improving this precision/recall trade-off is the topic of Day 19."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🏁",
      "title": "Mini Project: Fraud Baseline Report",
      "blocks": [
        {
          "type": "p",
          "text": "The Final Program below builds the dataset, splits it, trains both baselines and prints one comparison table, the confusion matrix and the classification report."
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
            "In rare-event problems, accuracy can be high while the model detects nothing",
            "A DummyClassifier baseline shows how much a real model must beat",
            "Rows of a confusion matrix are actual classes, columns are predicted classes",
            "Precision, recall and F1 describe the rare class far better than accuracy",
            "A default Logistic Regression can have high precision but low recall",
            "Stratified splitting preserves the fraud rate in both sets"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Fraud Detection Baseline",
    "file": "day18_final.py",
    "description": "One program combining Day 18: a synthetic fraud dataset, a stratified split, a Dummy baseline and a Logistic Regression baseline compared by accuracy, fraud precision, recall and F1, with the confusion matrix and classification report.",
    "concepts": [
      "imbalanced data",
      "stratified split",
      "dummy baseline",
      "Logistic Regression pipeline",
      "confusion matrix",
      "precision, recall and F1"
    ],
    "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.dummy import DummyClassifier\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import (\n    accuracy_score, precision_score, recall_score, f1_score,\n    confusion_matrix, classification_report\n)\n\nprint(\"=== FRAUD DETECTION BASELINE ===\")\n\nX_raw, y_raw = make_classification(\n    n_samples=30000, n_features=10, n_informative=6, n_redundant=0,\n    weights=[0.99, 0.01], class_sep=0.8, flip_y=0, random_state=42\n)\ndf = pd.DataFrame(X_raw, columns=[f\"V{i}\" for i in range(1, 11)])\nrng = np.random.RandomState(42)\ndf[\"Amount\"] = rng.lognormal(mean=3.5, sigma=1.0, size=len(df)).round(2)\ndf[\"Class\"] = y_raw\n\nprint(\"Transactions:\", len(df))\nprint(\"Fraud cases:\", int(df[\"Class\"].sum()), f\"({df['Class'].mean():.2%})\")\n\nX = df.drop(columns=[\"Class\"])\ny = df[\"Class\"]\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, random_state=42, stratify=y\n)\nprint(\"Fraud in train/test:\", int(y_train.sum()), \"/\", int(y_test.sum()))\n\nmodels = {\n    \"Dummy Classifier\": DummyClassifier(strategy=\"most_frequent\"),\n    \"Logistic Regression\": make_pipeline(\n        StandardScaler(),\n        LogisticRegression(max_iter=1000, random_state=42)\n    )\n}\n\nrows = []\nfor name, model in models.items():\n    model.fit(X_train, y_train)\n    pred = model.predict(X_test)\n    tn, fp, fn, tp = confusion_matrix(y_test, pred, labels=[0, 1]).ravel()\n    rows.append({\n        \"Model\": name,\n        \"Accuracy\": accuracy_score(y_test, pred),\n        \"Fraud Precision\": precision_score(y_test, pred, zero_division=0),\n        \"Fraud Recall\": recall_score(y_test, pred, zero_division=0),\n        \"Fraud F1\": f1_score(y_test, pred, zero_division=0),\n        \"TP\": tp, \"FN\": fn, \"FP\": fp\n    })\n\nprint(\"\\nModel comparison:\")\nprint(pd.DataFrame(rows).round(4).to_string(index=False))\n\nlogistic = models[\"Logistic Regression\"]\npred = logistic.predict(X_test)\nprint(\"\\nConfusion matrix (rows = actual, columns = predicted):\")\nprint(pd.DataFrame(\n    confusion_matrix(y_test, pred, labels=[0, 1]),\n    index=[\"Legitimate\", \"Fraud\"], columns=[\"Legitimate\", \"Fraud\"]\n))\n\nprint(\"\\nClassification report (Logistic Regression):\")\nprint(classification_report(\n    y_test, pred, labels=[0, 1],\n    target_names=[\"Legitimate\", \"Fraud\"], zero_division=0\n))\n\nbest = max(rows, key=lambda r: r[\"Fraud Recall\"])\nprint(\"Highest fraud recall:\", best[\"Model\"])\nprint(\"Accuracy alone is misleading when fraud is rare.\")",
    "output": "=== FRAUD DETECTION BASELINE ===\nTransactions: 30000\nFraud cases: 300 (1.00%)\nFraud in train/test: 240 / 60\n\nModel comparison:\n              Model  Accuracy  Fraud Precision  Fraud Recall  Fraud F1  TP  FN  FP\n   Dummy Classifier     0.990           0.0000        0.0000    0.0000   0  60   0\nLogistic Regression     0.992           0.9286        0.2167    0.3514  13  47   1\n\nConfusion matrix (rows = actual, columns = predicted):\n            Legitimate  Fraud\nLegitimate        5939      1\nFraud               47     13\n\nClassification report (Logistic Regression):\n              precision    recall  f1-score   support\n\n  Legitimate       0.99      1.00      1.00      5940\n       Fraud       0.93      0.22      0.35        60\n\n    accuracy                           0.99      6000\n   macro avg       0.96      0.61      0.67      6000\nweighted avg       0.99      0.99      0.99      6000\n\nHighest fraud recall: Logistic Regression\nAccuracy alone is misleading when fraud is rare."
  },
  "practice": [
    {
      "title": "Accuracy Paradox: Defect Detection",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Show that a dummy model gets high accuracy but zero recall on a factory defect dataset.",
      "tasks": [
        "Print the defect rate of y as a percentage",
        "Split 75/25 with random_state=0 and stratify=y",
        "Train DummyClassifier(strategy=\"most_frequent\") and predict on the test set",
        "Print accuracy and defect recall (zero_division=0)",
        "Print the confusion matrix with labels=[0, 1]",
        "Print how many defective items the dummy model caught"
      ],
      "hint": "In confusion_matrix(...), cm[1, 1] is TP and y_test.sum() is the number of actual defects.",
      "starter": "import pandas as pd\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.dummy import DummyClassifier\nfrom sklearn.metrics import accuracy_score, recall_score, confusion_matrix\n\nX, y = make_classification(\n    n_samples=10000, n_features=8, n_informative=5, n_redundant=0,\n    weights=[0.97, 0.03], class_sep=1.0, flip_y=0, random_state=5\n)\nX = pd.DataFrame(X, columns=[f\"sensor_{i}\" for i in range(1, 9)])\n\n# TODO 1: print the defect rate of y as a percentage\n# TODO 2: split 75/25 with random_state=0 and stratify=y\n# TODO 3: train DummyClassifier(strategy=\"most_frequent\") and predict on the test set\n# TODO 4: print accuracy and defect recall (zero_division=0)\n# TODO 5: print the confusion matrix with labels=[0, 1]\n# TODO 6: print how many defective items the dummy model caught",
      "solution": "import pandas as pd\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.dummy import DummyClassifier\nfrom sklearn.metrics import accuracy_score, recall_score, confusion_matrix\n\nX, y = make_classification(\n    n_samples=10000, n_features=8, n_informative=5, n_redundant=0,\n    weights=[0.97, 0.03], class_sep=1.0, flip_y=0, random_state=5\n)\nX = pd.DataFrame(X, columns=[f\"sensor_{i}\" for i in range(1, 9)])\n\nprint(\"Defect rate:\", f\"{y.mean():.2%}\")\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.25, random_state=0, stratify=y\n)\n\ndummy = DummyClassifier(strategy=\"most_frequent\")\ndummy.fit(X_train, y_train)\npred = dummy.predict(X_test)\n\nprint(\"Accuracy:\", round(accuracy_score(y_test, pred), 4))\nprint(\"Defect recall:\", recall_score(y_test, pred, zero_division=0))\n\ncm = confusion_matrix(y_test, pred, labels=[0, 1])\nprint(\"Confusion matrix:\")\nprint(cm)\nprint(\"Defective items caught:\", cm[1, 1], \"of\", int(y_test.sum()))",
      "output": "Defect rate: 3.00%\nAccuracy: 0.97\nDefect recall: 0.0\nConfusion matrix:\n[[2425    0]\n [  75    0]]\nDefective items caught: 0 of 75",
      "note": "Accuracy equals the share of good items (0.97) while recall is 0. A model with 97% accuracy that finds no defects is useless."
    },
    {
      "title": "Metrics by Hand",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Train a Logistic Regression pipeline and calculate precision, recall and F1 from TN, FP, FN and TP yourself.",
      "tasks": [
        "Split 80/20 with random_state=11 and stratify=y",
        "Build a pipeline with StandardScaler and LogisticRegression(max_iter=1000)",
        "Fit the pipeline and predict on the test set",
        "Unpack tn, fp, fn, tp from confusion_matrix(..., labels=[0, 1]).ravel()",
        "Compute precision, recall and F1 by hand",
        "Verify them with precision_score, recall_score and f1_score",
        "Print the percentage of positive cases that were missed"
      ],
      "hint": "F1 = 2 x precision x recall / (precision + recall). Missed share = FN / (FN + TP).",
      "starter": "import pandas as pd\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import confusion_matrix, precision_score, recall_score, f1_score\n\nX, y = make_classification(\n    n_samples=12000, n_features=8, n_informative=5, n_redundant=0,\n    weights=[0.95, 0.05], class_sep=0.9, flip_y=0, random_state=11\n)\nX = pd.DataFrame(X, columns=[f\"feature_{i}\" for i in range(1, 9)])\n\n# TODO 1: split 80/20 with random_state=11 and stratify=y\n# TODO 2: pipeline = StandardScaler + LogisticRegression(max_iter=1000)\n# TODO 3: fit and predict on the test set\n# TODO 4: unpack tn, fp, fn, tp from confusion_matrix(..., labels=[0, 1]).ravel()\n# TODO 5: compute precision, recall and F1 by hand from tn/fp/fn/tp\n# TODO 6: verify your numbers with precision_score, recall_score, f1_score\n# TODO 7: print how many positive cases were missed, as a percentage",
      "solution": "import pandas as pd\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import confusion_matrix, precision_score, recall_score, f1_score\n\nX, y = make_classification(\n    n_samples=12000, n_features=8, n_informative=5, n_redundant=0,\n    weights=[0.95, 0.05], class_sep=0.9, flip_y=0, random_state=11\n)\nX = pd.DataFrame(X, columns=[f\"feature_{i}\" for i in range(1, 9)])\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, random_state=11, stratify=y\n)\n\nmodel = make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000))\nmodel.fit(X_train, y_train)\npred = model.predict(X_test)\n\ntn, fp, fn, tp = confusion_matrix(y_test, pred, labels=[0, 1]).ravel()\nprint(\"TN:\", tn, \"| FP:\", fp, \"| FN:\", fn, \"| TP:\", tp)\n\nprecision = tp / (tp + fp)\nrecall = tp / (tp + fn)\nf1 = 2 * precision * recall / (precision + recall)\nprint(f\"By hand  -> precision {precision:.4f}, recall {recall:.4f}, F1 {f1:.4f}\")\n\nprint(f\"Sklearn  -> precision {precision_score(y_test, pred):.4f}, \"\n      f\"recall {recall_score(y_test, pred):.4f}, F1 {f1_score(y_test, pred):.4f}\")\n\nprint(f\"Positive cases missed: {fn / (fn + tp):.0%}\")",
      "output": "TN: 2280 | FP: 0 | FN: 119 | TP: 1\nBy hand  -> precision 1.0000, recall 0.0083, F1 0.0165\nSklearn  -> precision 1.0000, recall 0.0083, F1 0.0165\nPositive cases missed: 99%",
      "note": "Precision is 1.00 but recall is 0.0083: the model flags almost nothing, so it is never wrong when it does flag, yet it misses 99% of positives. Precision alone can also mislead."
    }
  ],
  "checklist": [
    "Understood why accuracy misleads on rare events",
    "Built a stratified train/test split",
    "Trained a Dummy baseline",
    "Trained a Logistic Regression pipeline",
    "Read the confusion matrix (TN, FP, FN, TP)",
    "Compared precision, recall and F1",
    "Built the Fraud Detection Baseline"
  ],
  "quiz": [
    {
      "q": "Only 1% of transactions are fraud. A model that always predicts legitimate has what accuracy?",
      "options": [
        "About 50%",
        "About 1%",
        "About 99%",
        "Exactly 100%"
      ],
      "answer": 2,
      "why": "It is right for every legitimate transaction, which is about 99% of the data, while detecting no fraud at all."
    },
    {
      "q": "What does fraud recall measure?",
      "options": [
        "The share of flagged transactions that were fraud",
        "The share of actual fraud cases that were detected",
        "The overall share of correct predictions",
        "The share of legitimate transactions flagged"
      ],
      "answer": 1,
      "why": "Recall = TP / (TP + FN): of all real fraud cases, how many the model caught. The first option describes precision."
    },
    {
      "q": "In confusion_matrix(y_test, pred, labels=[0, 1]), what do the rows represent?",
      "options": [
        "Predicted classes",
        "Actual classes",
        "Features",
        "Folds"
      ],
      "answer": 1,
      "why": "Rows are actual classes and columns are predicted classes, in the order 0 then 1."
    },
    {
      "q": "A fraud model has FN = 47 and TP = 13. How many fraud cases did it miss?",
      "options": [
        "13",
        "47",
        "60",
        "0"
      ],
      "answer": 1,
      "why": "False negatives are fraud cases predicted as legitimate. FN = 47, out of 47 + 13 = 60 actual fraud cases."
    },
    {
      "q": "Why use stratify=y when splitting fraud data?",
      "options": [
        "To make the data balanced",
        "To keep about the same fraud proportion in train and test",
        "To remove legitimate rows",
        "To speed up training"
      ],
      "answer": 1,
      "why": "Stratification preserves the class proportions in both sets. It does not balance the classes, it just avoids a test set with almost no fraud."
    }
  ]
},
// DAY 19 snippet. In course-data.js: add a comma after your last day's closing } (Day 17 or Day 18), then paste this object. No images for this day.
{
  "day": 19,
  "title": "Imbalanced Classification: Catch More Fraud",
  "subtitle": "Handle rare classes: precision, recall, F1, the decision threshold, class weights and an honest validation-then-test workflow.",
  "level": "Intermediate",
  "duration": "60-90 min",
  "tags": [
    "Imbalanced Data",
    "Precision / Recall / F1",
    "Threshold",
    "class_weight",
    "Fraud Detection"
  ],
  "goals": [
    "Understand precision, recall, F1 and the decision threshold",
    "Improve fraud recall with class weights",
    "Choose a threshold on validation data and evaluate once on the test set"
  ],
  "sections": [
    {
      "id": "concepts",
      "icon": "🧠",
      "title": "1. The Four Concepts You Need to Master",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Concept",
            "Question it answers",
            "Formula"
          ],
          "rows": [
            [
              "Precision",
              "Of all transactions predicted as fraud, how many really were fraud? (How trustworthy are the alerts?)",
              "TP / (TP + FP)"
            ],
            [
              "Recall",
              "Of all real fraud, how much did we catch?",
              "TP / (TP + FN)"
            ],
            [
              "F1-score",
              "One balanced number: the harmonic mean of precision and recall",
              "2 x Precision x Recall / (Precision + Recall)"
            ],
            [
              "Threshold",
              "How readily does the model flag fraud? Lower threshold = more alerts",
              "predict fraud if probability >= threshold"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Fraud is rare (here about 4% of transactions). A model that says 'legitimate' every time scores about 96% accuracy and catches zero fraud. That is why we look at fraud recall, precision and F1 instead of accuracy."
        }
      ]
    },
    {
      "id": "threshold",
      "icon": "🎚️",
      "title": "2. Understand the Decision Threshold",
      "meta": "The model's probabilities stay the same, the labels change",
      "blocks": [
        {
          "type": "p",
          "text": "A classifier outputs a fraud probability. The threshold turns it into a label. Ten transactions: 5 really fraud, 5 legitimate, with the probabilities a model gave them:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "day19_threshold.py",
          "code": "import numpy as np\n\nactual = np.array([1, 1, 1, 1, 1, 0, 0, 0, 0, 0])\nprobability = np.array([0.90, 0.80, 0.60, 0.40, 0.20, 0.70, 0.55, 0.52, 0.30, 0.10])\n\nfor threshold in [0.25, 0.50, 0.75]:\n    flagged = probability >= threshold\n    tp = int((flagged & (actual == 1)).sum())\n    fp = int((flagged & (actual == 0)).sum())\n    fn = int((~flagged & (actual == 1)).sum())\n    tn = int((~flagged & (actual == 0)).sum())\n    print(f\"Threshold {threshold:.2f}: TP={tp} FP={fp} TN={tn} FN={fn} | precision {tp / (tp + fp):.0%} | recall {tp / (tp + fn):.0%}\")",
          "output": "Threshold 0.25: TP=4 FP=4 TN=1 FN=1 | precision 50% | recall 80%\nThreshold 0.50: TP=3 FP=3 TN=2 FN=2 | precision 50% | recall 60%\nThreshold 0.75: TP=2 FP=0 TN=5 FN=3 | precision 100% | recall 40%"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "At 0.50 the model flags 6 transactions: 3 are fraud and 3 are not, so precision is 50% and recall is 3 of 5 = 60%. Lowering the threshold to 0.25 catches one more fraud (recall 80%) but flags one more legitimate transaction too. Raising it to 0.75 gives 100% precision but misses most fraud (recall 40%)."
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "The key idea: the model's probabilities do not change. Changing the threshold changes which transactions get flagged."
        }
      ]
    },
    {
      "id": "setup",
      "icon": "⚡",
      "title": "Setup: Your Fraud Dataset and Baseline",
      "meta": "Stands in for your Day 18 data",
      "blocks": [
        {
          "type": "p",
          "text": "The lesson says to run this after your Day 18 code. To make this page self-contained, the code below creates a synthetic fraud dataset (6000 transactions, about 4% fraud) and the same kind of baseline: a default Logistic Regression."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "setup.py",
          "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix\n\ndef make_fraud_data(seed=19, n=6000, fraud_rate=0.04):\n    rs = np.random.RandomState(seed)\n    fraud = (rs.uniform(size=n) < fraud_rate).astype(int)\n    f = fraud == 1\n    amount = np.round(np.where(f, rs.lognormal(5.3, 0.8, n), rs.lognormal(4.2, 0.8, n)), 2)\n    night = rs.uniform(size=n) < 0.6\n    hour = np.where(f, np.where(night, rs.randint(0, 6, n), rs.randint(0, 24, n)), rs.randint(0, 24, n))\n    distance = np.round(np.where(f, rs.exponential(90, n), rs.exponential(25, n)), 1)\n    tx_24h = np.where(f, rs.poisson(5.5, n), rs.poisson(2.2, n))\n    foreign = np.where(f, rs.uniform(size=n) < 0.45, rs.uniform(size=n) < 0.05).astype(int)\n    return pd.DataFrame({\"amount\": amount, \"hour\": hour, \"distance_km\": distance,\n                         \"tx_last_24h\": tx_24h, \"foreign\": foreign, \"fraud\": fraud})\n\ndf = make_fraud_data()\nX = df.drop(columns=\"fraud\")\ny = df[\"fraud\"]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, random_state=42, stratify=y)\n\nprint(\"Transactions:\", len(df), \"| fraud:\", y.sum(), f\"({y.mean():.1%})\")\nprint(X.head(3))\n\nbaseline = make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000, random_state=42))\nbaseline.fit(X_train, y_train)\nbaseline_test = baseline.predict(X_test)\nprint(\"\\nBaseline fraud recall on the test set:\", round(recall_score(y_test, baseline_test), 2))\nprint(\"Baseline accuracy:\", round(accuracy_score(y_test, baseline_test), 3))",
          "output": "Transactions: 6000 | fraud: 205 (3.4%)\n   amount  hour  distance_km  tx_last_24h  foreign\n0  198.76     3         45.4            1        0\n1   42.06     4         43.6            2        0\n2  111.09    14         34.4            4        0\n\nBaseline fraud recall on the test set: 0.61\nBaseline accuracy: 0.983"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The baseline catches about 61% of fraud, close to the 0.64 in your Day 18 notes, while accuracy looks excellent (about 98%). Same trap, same goal: catch more fraud while keeping false alarms under control."
        }
      ]
    },
    {
      "id": "split",
      "icon": "⚡",
      "title": "3.1 Split Your Training Data Again",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "three_sets.py",
          "code": "X_fit, X_val, y_fit, y_val = train_test_split(\n    X_train, y_train, test_size=0.20, random_state=42, stratify=y_train)\n\nprint(\"Model training rows:\", len(X_fit))\nprint(\"Validation rows:\", len(X_val))\nprint(\"Final test rows:\", len(X_test))\nprint(\"Fraud in each:\", y_fit.sum(), \"/\", y_val.sum(), \"/\", y_test.sum())",
          "output": "Model training rows: 3840\nValidation rows: 960\nFinal test rows: 1200\nFraud in each: 131 / 33 / 41"
        },
        {
          "type": "table",
          "head": [
            "Set",
            "Job"
          ],
          "rows": [
            [
              "Training set",
              "Learns the model's parameters"
            ],
            [
              "Validation set",
              "Compares models and chooses the threshold"
            ],
            [
              "Test set",
              "Gives one final, independent evaluation"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "With only 33 fraud cases in the validation set, every recall number moves in steps of 3 points. Treat small differences as noise."
        }
      ]
    },
    {
      "id": "train",
      "icon": "⚡",
      "title": "3.2 Train Both Models",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "train_models.py",
          "code": "# Model A: ordinary Logistic Regression\nmodel_default = make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000, random_state=42))\nmodel_default.fit(X_fit, y_fit)\n\n# Model B: class-weighted Logistic Regression\nmodel_balanced = make_pipeline(\n    StandardScaler(),\n    LogisticRegression(class_weight=\"balanced\", max_iter=1000, random_state=42))\nmodel_balanced.fit(X_fit, y_fit)\n\nprint(\"Both models trained!\")",
          "output": "Both models trained!"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "class_weight=\"balanced\" gives the rare class a bigger weight during training (here each fraud counts about 28 times as much as a legitimate transaction), so fraud mistakes influence the model more. It does not copy fraud rows or invent transactions, and it does not guarantee better results."
        }
      ]
    },
    {
      "id": "compare",
      "icon": "📊",
      "title": "3.3 Compare Precision, Recall and F1",
      "meta": "At the default threshold of 0.50",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "compare.py",
          "code": "def evaluate_predictions(y_true, predictions, model_name):\n    return {\n        \"Model\": model_name,\n        \"Accuracy\": accuracy_score(y_true, predictions),\n        \"Fraud Precision\": precision_score(y_true, predictions, zero_division=0),\n        \"Fraud Recall\": recall_score(y_true, predictions, zero_division=0),\n        \"Fraud F1\": f1_score(y_true, predictions, zero_division=0),\n    }\n\ndefault_val_pred = model_default.predict(X_val)\nbalanced_val_pred = model_balanced.predict(X_val)\n\ncomparison = pd.DataFrame([\n    evaluate_predictions(y_val, default_val_pred, \"Default Logistic Regression\"),\n    evaluate_predictions(y_val, balanced_val_pred, \"Class-Weighted Logistic Regression\"),\n])\nprint(comparison.round(4).to_string(index=False))",
          "output": "                             Model  Accuracy  Fraud Precision  Fraud Recall  Fraud F1\n       Default Logistic Regression    0.9823            0.900        0.5455    0.6792\nClass-Weighted Logistic Regression    0.9323            0.314        0.8182    0.4538"
        },
        {
          "type": "table",
          "head": [
            "Question",
            "Answer from the output"
          ],
          "rows": [
            [
              "Did class weights raise fraud recall?",
              "Yes, a lot"
            ],
            [
              "Did precision drop?",
              "Yes, a lot: many more legitimate transactions get flagged"
            ],
            [
              "Did accuracy change?",
              "It fell: the model now makes more false alarms"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "A trade-off is normal. Whether the weighted model is better depends on what a missed fraud costs compared with a false alarm."
        }
      ]
    },
    {
      "id": "thresholds",
      "icon": "🎚️",
      "title": "3.4 Experiment with Thresholds",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "threshold_sweep.py",
          "code": "def threshold_table(y_true, probabilities, thresholds):\n    rows = []\n    for threshold in thresholds:\n        predictions = (probabilities >= threshold).astype(int)\n        rows.append({\n            \"Threshold\": threshold,\n            \"Fraud Precision\": precision_score(y_true, predictions, zero_division=0),\n            \"Fraud Recall\": recall_score(y_true, predictions, zero_division=0),\n            \"Fraud F1\": f1_score(y_true, predictions, zero_division=0),\n            \"Fraud Alerts\": int(predictions.sum()),\n        })\n    return pd.DataFrame(rows)\n\nval_probabilities = model_balanced.predict_proba(X_val)[:, 1]\nthreshold_df = threshold_table(y_val, val_probabilities, [0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80])\nprint(threshold_df.round(4).to_string(index=False))",
          "output": " Threshold  Fraud Precision  Fraud Recall  Fraud F1  Fraud Alerts\n       0.1           0.1075        1.0000    0.1941           307\n       0.2           0.1590        0.9394    0.2719           195\n       0.3           0.2199        0.9394    0.3563           141\n       0.4           0.2522        0.8788    0.3919           115\n       0.5           0.3140        0.8182    0.4538            86\n       0.6           0.4219        0.8182    0.5567            64\n       0.7           0.5000        0.7879    0.6118            52\n       0.8           0.5652        0.7879    0.6582            46"
        },
        {
          "type": "table",
          "head": [
            "Pattern",
            "What you see"
          ],
          "rows": [
            [
              "Lower threshold",
              "More alerts and higher recall, but lower precision"
            ],
            [
              "Higher threshold",
              "Fewer alerts and higher precision, but lower recall"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Notice the threshold 0.30 of the original task: it flags about 15% of all validation transactions (141 of 960) as fraud, although only about 3.4% really are. Class weights also inflate the probabilities, so a score of 0.30 from this model does NOT mean a 30% chance of fraud. Only the validation table can tell you which threshold makes sense."
        }
      ]
    },
    {
      "id": "choose",
      "icon": "🎯",
      "title": "Choosing the Threshold with the Validation Set",
      "meta": "Decide before you touch the test set",
      "blocks": [
        {
          "type": "p",
          "text": "Three common ways to pick a threshold, all using the validation set only:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "choose_threshold.py",
          "code": "grid = np.round(np.arange(0.05, 0.96, 0.05), 2)\nsweep = threshold_table(y_val, val_probabilities, grid)\n\n# Cost view: a missed fraud costs 100, a false alarm costs 5 (example numbers)\nfraud_total = int(y_val.sum())\ntp = (sweep[\"Fraud Recall\"] * fraud_total).round().astype(int)\nfp = sweep[\"Fraud Alerts\"] - tp\nfn = fraud_total - tp\nsweep[\"Total Cost\"] = 100 * fn + 5 * fp\n\nbest_f1 = sweep.loc[sweep[\"Fraud F1\"].idxmax()]\nmeets_goal = sweep[sweep[\"Fraud Recall\"] >= 0.80]\nbest_for_goal = meets_goal.loc[meets_goal[\"Fraud Precision\"].idxmax()]\ncheapest = sweep.loc[sweep[\"Total Cost\"].idxmin()]\n\nprint(\"1. Best F1                      -> threshold\", best_f1[\"Threshold\"], \"| recall\", round(best_f1[\"Fraud Recall\"], 2), \"| precision\", round(best_f1[\"Fraud Precision\"], 2), \"| alerts\", int(best_f1[\"Fraud Alerts\"]))\nprint(\"2. Recall >= 0.80, best precision -> threshold\", best_for_goal[\"Threshold\"], \"| recall\", round(best_for_goal[\"Fraud Recall\"], 2), \"| precision\", round(best_for_goal[\"Fraud Precision\"], 2), \"| alerts\", int(best_for_goal[\"Fraud Alerts\"]))\nprint(\"3. Lowest cost                  -> threshold\", cheapest[\"Threshold\"], \"| recall\", round(cheapest[\"Fraud Recall\"], 2), \"| precision\", round(cheapest[\"Fraud Precision\"], 2), \"| alerts\", int(cheapest[\"Fraud Alerts\"]))\n\nchosen_threshold = float(best_for_goal[\"Threshold\"])\nprint(\"\\nChosen threshold (rule 2):\", chosen_threshold)",
          "output": "1. Best F1                      -> threshold 0.9 | recall 0.67 | precision 0.76 | alerts 29\n2. Recall >= 0.80, best precision -> threshold 0.6 | recall 0.82 | precision 0.42 | alerts 64\n3. Lowest cost                  -> threshold 0.3 | recall 0.94 | precision 0.22 | alerts 141\n\nChosen threshold (rule 2): 0.6"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Different goals choose different thresholds. Rule 2 says: catch at least 80% of fraud, then keep false alarms as low as possible. That matches today's goal. In a real company the cost numbers (100 and 5 here) come from the business."
        }
      ]
    },
    {
      "id": "final",
      "icon": "🏁",
      "title": "3.5 Evaluate the Chosen Threshold on the Test Set",
      "meta": "Once",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "final_test.py",
          "code": "test_probabilities = model_balanced.predict_proba(X_test)[:, 1]\ntest_predictions = (test_probabilities >= chosen_threshold).astype(int)\n\nprint(\"Chosen threshold:\", chosen_threshold)\nprint(\"\\nFinal test metrics:\")\nfinal_row = evaluate_predictions(y_test, test_predictions, f\"Balanced LR (threshold {chosen_threshold})\")\nbaseline_row = evaluate_predictions(y_test, baseline_test, \"Baseline LR (threshold 0.50)\")\nprint(pd.DataFrame([baseline_row, final_row]).round(4).to_string(index=False))\n\nprint(\"\\nTest confusion matrix (rows: actual 0, 1 | columns: predicted 0, 1):\")\nprint(confusion_matrix(y_test, test_predictions, labels=[0, 1]))",
          "output": "Chosen threshold: 0.6\n\nFinal test metrics:\n                       Model  Accuracy  Fraud Precision  Fraud Recall  Fraud F1\nBaseline LR (threshold 0.50)    0.9833           0.8621        0.6098    0.7143\n Balanced LR (threshold 0.6)    0.9442           0.3646        0.8537    0.5109\n\nTest confusion matrix (rows: actual 0, 1 | columns: predicted 0, 1):\n[[1098   61]\n [   6   35]]"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Compared with the baseline, fraud recall rises a lot and precision falls. The confusion matrix shows the price: how many legitimate transactions get flagged for every extra fraud caught. Whether that is a good deal depends on the cost of a missed fraud and of a false alarm."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "The original task uses 0.30 as an illustrative threshold. Here the threshold came from validation results. The test set is evaluated once. Do not keep changing the threshold after seeing test scores, or the test set becomes another validation set."
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
            "On rare classes, accuracy hides the problem: use precision, recall and F1",
            "The decision threshold moves you along the precision/recall trade-off",
            "class_weight=\"balanced\" raises recall at the price of precision, and inflates probabilities",
            "Use a validation set to choose the threshold, then evaluate the test set once",
            "The right threshold depends on the cost of missed fraud versus false alarms"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Catch More Fraud: Threshold-Tuned Detector",
    "file": "day19_final.py",
    "description": "One program combining Day 19: a rare-class dataset, three data sets, default vs class-weighted models, a threshold sweep, a validation-based threshold choice, one final test evaluation and the price of the alerts in false alarms.",
    "concepts": [
      "precision / recall / F1",
      "decision threshold",
      "class_weight",
      "validation set",
      "threshold sweep",
      "confusion matrix"
    ],
    "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix\n\ndef make_fraud_data(seed=19, n=6000, fraud_rate=0.04):\n    rs = np.random.RandomState(seed)\n    fraud = (rs.uniform(size=n) < fraud_rate).astype(int)\n    f = fraud == 1\n    amount = np.round(np.where(f, rs.lognormal(5.3, 0.8, n), rs.lognormal(4.2, 0.8, n)), 2)\n    night = rs.uniform(size=n) < 0.6\n    hour = np.where(f, np.where(night, rs.randint(0, 6, n), rs.randint(0, 24, n)), rs.randint(0, 24, n))\n    distance = np.round(np.where(f, rs.exponential(90, n), rs.exponential(25, n)), 1)\n    tx_24h = np.where(f, rs.poisson(5.5, n), rs.poisson(2.2, n))\n    foreign = np.where(f, rs.uniform(size=n) < 0.45, rs.uniform(size=n) < 0.05).astype(int)\n    return pd.DataFrame({\"amount\": amount, \"hour\": hour, \"distance_km\": distance,\n                         \"tx_last_24h\": tx_24h, \"foreign\": foreign, \"fraud\": fraud})\n\ndef evaluate_predictions(y_true, predictions, model_name):\n    return {\n        \"Model\": model_name,\n        \"Accuracy\": accuracy_score(y_true, predictions),\n        \"Fraud Precision\": precision_score(y_true, predictions, zero_division=0),\n        \"Fraud Recall\": recall_score(y_true, predictions, zero_division=0),\n        \"Fraud F1\": f1_score(y_true, predictions, zero_division=0),\n    }\n\ndef threshold_table(y_true, probabilities, thresholds):\n    rows = []\n    for threshold in thresholds:\n        predictions = (probabilities >= threshold).astype(int)\n        rows.append({\n            \"Threshold\": threshold,\n            \"Fraud Precision\": precision_score(y_true, predictions, zero_division=0),\n            \"Fraud Recall\": recall_score(y_true, predictions, zero_division=0),\n            \"Fraud F1\": f1_score(y_true, predictions, zero_division=0),\n            \"Fraud Alerts\": int(predictions.sum()),\n        })\n    return pd.DataFrame(rows)\n\n# 1. DATA AND THREE SETS\ndf = make_fraud_data()\nX, y = df.drop(columns=\"fraud\"), df[\"fraud\"]\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=42, stratify=y)\nX_fit, X_val, y_fit, y_val = train_test_split(X_train, y_train, test_size=0.20, random_state=42, stratify=y_train)\nprint(\"=== CATCH MORE FRAUD ===\")\nprint(\"Fit / validation / test rows:\", len(X_fit), \"/\", len(X_val), \"/\", len(X_test), \"| fraud:\", y_fit.sum(), \"/\", y_val.sum(), \"/\", y_test.sum())\n\n# 2. TWO MODELS (default and class-weighted)\nmodel_default = make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000, random_state=42)).fit(X_fit, y_fit)\nmodel_balanced = make_pipeline(StandardScaler(), LogisticRegression(class_weight=\"balanced\", max_iter=1000, random_state=42)).fit(X_fit, y_fit)\n\n# 3. COMPARE AT THRESHOLD 0.50 ON THE VALIDATION SET\ncomparison = pd.DataFrame([\n    evaluate_predictions(y_val, model_default.predict(X_val), \"Default LR\"),\n    evaluate_predictions(y_val, model_balanced.predict(X_val), \"Class-Weighted LR\"),\n])\nprint(\"\\nValidation, threshold 0.50:\")\nprint(comparison.round(4).to_string(index=False))\n\n# 4. THRESHOLD SWEEP FOR THE WEIGHTED MODEL\nval_probabilities = model_balanced.predict_proba(X_val)[:, 1]\nsweep = threshold_table(y_val, val_probabilities, np.round(np.arange(0.05, 0.96, 0.05), 2))\nprint(\"\\nThreshold sweep (validation):\")\nprint(sweep.round(3).to_string(index=False))\n\n# 5. CHOOSE: at least 80% recall, then the best precision\nmeets_goal = sweep[sweep[\"Fraud Recall\"] >= 0.80]\nchosen_threshold = float(meets_goal.loc[meets_goal[\"Fraud Precision\"].idxmax(), \"Threshold\"])\nprint(\"\\nChosen threshold:\", chosen_threshold)\n\n# 6. FINAL TEST EVALUATION (once)\ntest_predictions = (model_balanced.predict_proba(X_test)[:, 1] >= chosen_threshold).astype(int)\nrows = [\n    evaluate_predictions(y_test, model_default.predict(X_test), \"Default LR (0.50)\"),\n    evaluate_predictions(y_test, test_predictions, f\"Weighted LR ({chosen_threshold})\"),\n]\nprint(\"\\nFinal test metrics:\")\nprint(pd.DataFrame(rows).round(4).to_string(index=False))\nprint(\"\\nTest confusion matrix (rows: actual 0, 1 | columns: predicted 0, 1):\")\nprint(confusion_matrix(y_test, test_predictions, labels=[0, 1]))\n\n# 7. WHAT THE ALERTS COST\ncm = confusion_matrix(y_test, test_predictions, labels=[0, 1])\nprint(f\"\\nFraud caught: {cm[1, 1]} of {cm[1].sum()} | false alarms: {cm[0, 1]} of {cm[0].sum()} legitimate transactions\")",
    "output": "=== CATCH MORE FRAUD ===\nFit / validation / test rows: 3840 / 960 / 1200 | fraud: 131 / 33 / 41\n\nValidation, threshold 0.50:\n            Model  Accuracy  Fraud Precision  Fraud Recall  Fraud F1\n       Default LR    0.9823            0.900        0.5455    0.6792\nClass-Weighted LR    0.9323            0.314        0.8182    0.4538\n\nThreshold sweep (validation):\n Threshold  Fraud Precision  Fraud Recall  Fraud F1  Fraud Alerts\n      0.05            0.074         1.000     0.139           443\n      0.10            0.107         1.000     0.194           307\n      0.15            0.134         1.000     0.237           246\n      0.20            0.159         0.939     0.272           195\n      0.25            0.186         0.939     0.310           167\n      0.30            0.220         0.939     0.356           141\n      0.35            0.244         0.909     0.385           123\n      0.40            0.252         0.879     0.392           115\n      0.45            0.283         0.848     0.424            99\n      0.50            0.314         0.818     0.454            86\n      0.55            0.360         0.818     0.500            75\n      0.60            0.422         0.818     0.557            64\n      0.65            0.456         0.788     0.578            57\n      0.70            0.500         0.788     0.612            52\n      0.75            0.553         0.788     0.650            47\n      0.80            0.565         0.788     0.658            46\n      0.85            0.667         0.727     0.696            36\n      0.90            0.759         0.667     0.710            29\n      0.95            0.826         0.576     0.679            23\n\nChosen threshold: 0.6\n\nFinal test metrics:\n            Model  Accuracy  Fraud Precision  Fraud Recall  Fraud F1\nDefault LR (0.50)    0.9825           0.8333        0.6098    0.7042\nWeighted LR (0.6)    0.9442           0.3646        0.8537    0.5109\n\nTest confusion matrix (rows: actual 0, 1 | columns: predicted 0, 1):\n[[1098   61]\n [   6   35]]\n\nFraud caught: 35 of 41 | false alarms: 61 of 1159 legitimate transactions"
  },
  "practice": [
    {
      "title": "Threshold by Hand",
      "level": "Easy",
      "file": "practice1.py",
      "description": "A model scored 20 transactions (6 fraud, 14 legitimate). Find the threshold that gives the best F1.",
      "tasks": [
        "Write a loop over the thresholds 0.2, 0.4, 0.6 and 0.8",
        "For each, print the alerts, precision, recall and F1 (use zero_division=0)",
        "Find the threshold with the highest F1",
        "Print the confusion matrix for that threshold",
        "Which threshold would you choose if missing fraud is very expensive?"
      ],
      "hint": "flagged = (probability >= threshold).astype(int). Keep the F1 values in a dictionary and use max(results, key=results.get).",
      "starter": "import numpy as np\nfrom sklearn.metrics import precision_score, recall_score, f1_score, confusion_matrix\n\nactual = np.array([1, 1, 1, 1, 1, 1] + [0] * 14)\nprobability = np.array([0.92, 0.85, 0.70, 0.55, 0.35, 0.15,\n                        0.80, 0.60, 0.45, 0.40, 0.30, 0.25, 0.20, 0.18, 0.12, 0.10, 0.08, 0.05, 0.04, 0.02])\n\n# TODO 1: loop over the thresholds\n\n# TODO 2: precision, recall, F1, alerts\n\n# TODO 3: best F1 threshold\n\n# TODO 4: confusion matrix for it",
      "solution": "import numpy as np\nfrom sklearn.metrics import precision_score, recall_score, f1_score, confusion_matrix\n\nactual = np.array([1, 1, 1, 1, 1, 1] + [0] * 14)\nprobability = np.array([0.92, 0.85, 0.70, 0.55, 0.35, 0.15,\n                        0.80, 0.60, 0.45, 0.40, 0.30, 0.25, 0.20, 0.18, 0.12, 0.10, 0.08, 0.05, 0.04, 0.02])\n\nresults = {}\nfor threshold in [0.2, 0.4, 0.6, 0.8]:\n    flagged = (probability >= threshold).astype(int)\n    precision = precision_score(actual, flagged, zero_division=0)\n    recall = recall_score(actual, flagged, zero_division=0)\n    f1 = f1_score(actual, flagged, zero_division=0)\n    results[threshold] = f1\n    print(f\"Threshold {threshold}: alerts {flagged.sum():2} | precision {precision:.2f} | recall {recall:.2f} | F1 {f1:.2f}\")\n\nbest = max(results, key=results.get)\nprint(\"\\nBest F1 threshold:\", best)\nprint(confusion_matrix(actual, (probability >= best).astype(int), labels=[0, 1]))",
      "output": "Threshold 0.2: alerts 12 | precision 0.42 | recall 0.83 | F1 0.56\nThreshold 0.4: alerts  8 | precision 0.50 | recall 0.67 | F1 0.57\nThreshold 0.6: alerts  5 | precision 0.60 | recall 0.50 | F1 0.55\nThreshold 0.8: alerts  3 | precision 0.67 | recall 0.33 | F1 0.44\n\nBest F1 threshold: 0.4\n[[10  4]\n [ 2  4]]",
      "note": "If missing fraud is very expensive, choose a LOW threshold such as 0.2, which catches almost every fraud at the price of many false alarms. The best F1 treats both mistakes equally, which is rarely true in real life."
    },
    {
      "title": "Loan Default Detector",
      "level": "Medium",
      "file": "practice2.py",
      "description": "About 1 in 15 loans defaults. Compare three class-weight settings, tune the threshold on validation data and evaluate once on the test set.",
      "tasks": [
        "Create the data, split 80/20 for the test set, then split the training part 80/20 again for validation (random_state=42, stratified)",
        "Train three pipelines (scaler + LogisticRegression): default, class_weight=\"balanced\" and class_weight={0: 1, 1: 10}",
        "Print the validation precision, recall and F1 of each at threshold 0.50",
        "For the custom weight model, sweep thresholds 0.1 to 0.9 (step 0.1) and pick the threshold with the best validation F1",
        "Evaluate that threshold ONCE on the test set: precision, recall, F1 and the confusion matrix"
      ],
      "hint": "Probabilities: model.predict_proba(X_val)[:, 1]. Labels: (probabilities >= threshold).astype(int). Pick the threshold with max(f1_by_threshold, key=f1_by_threshold.get).",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import precision_score, recall_score, f1_score, confusion_matrix\n\ndef make_loan_data(seed=3, n=5000):\n    rs = np.random.RandomState(seed)\n    income = np.round(rs.lognormal(3.8, 0.4, n), 1)            # thousands per month\n    debt_ratio = np.round(rs.beta(2, 5, n), 2)\n    late_payments = rs.poisson(0.8, n)\n    credit_years = rs.randint(1, 26, n)\n    z = -5.0 + 0.8 * late_payments + 4.0 * debt_ratio - 0.02 * income - 0.04 * credit_years\n    default = (rs.uniform(size=n) < 1 / (1 + np.exp(-z))).astype(int)\n    return pd.DataFrame({\"income\": income, \"debt_ratio\": debt_ratio, \"late_payments\": late_payments,\n                         \"credit_years\": credit_years, \"default\": default})\n\n# TODO 1: data and the three sets\n\n# TODO 2: three models\n\n# TODO 3: validation table at threshold 0.50\n\n# TODO 4: threshold sweep for the custom weight model\n\n# TODO 5: one final test evaluation",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import precision_score, recall_score, f1_score, confusion_matrix\n\ndef make_loan_data(seed=3, n=5000):\n    rs = np.random.RandomState(seed)\n    income = np.round(rs.lognormal(3.8, 0.4, n), 1)            # thousands per month\n    debt_ratio = np.round(rs.beta(2, 5, n), 2)\n    late_payments = rs.poisson(0.8, n)\n    credit_years = rs.randint(1, 26, n)\n    z = -5.0 + 0.8 * late_payments + 4.0 * debt_ratio - 0.02 * income - 0.04 * credit_years\n    default = (rs.uniform(size=n) < 1 / (1 + np.exp(-z))).astype(int)\n    return pd.DataFrame({\"income\": income, \"debt_ratio\": debt_ratio, \"late_payments\": late_payments,\n                         \"credit_years\": credit_years, \"default\": default})\n\ndf = make_loan_data()\nX, y = df.drop(columns=\"default\"), df[\"default\"]\nprint(\"Loans:\", len(df), \"| defaults:\", y.sum(), f\"({y.mean():.1%})\")\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)\nX_fit, X_val, y_fit, y_val = train_test_split(X_train, y_train, test_size=0.2, random_state=42, stratify=y_train)\n\nweights = {\"Default\": None, \"Balanced\": \"balanced\", \"Custom 1:10\": {0: 1, 1: 10}}\nmodels = {name: make_pipeline(StandardScaler(), LogisticRegression(class_weight=w, max_iter=1000, random_state=42)).fit(X_fit, y_fit)\n          for name, w in weights.items()}\n\nprint(\"\\nValidation at threshold 0.50:\")\nfor name, model in models.items():\n    pred = model.predict(X_val)\n    print(f\"  {name:12} precision {precision_score(y_val, pred, zero_division=0):.2f} | recall {recall_score(y_val, pred, zero_division=0):.2f} | F1 {f1_score(y_val, pred, zero_division=0):.2f}\")\n\nmodel = models[\"Custom 1:10\"]\nval_probabilities = model.predict_proba(X_val)[:, 1]\nf1_by_threshold = {}\nfor threshold in [round(t, 1) for t in np.arange(0.1, 0.95, 0.1)]:\n    f1_by_threshold[threshold] = f1_score(y_val, (val_probabilities >= threshold).astype(int), zero_division=0)\nbest_threshold = max(f1_by_threshold, key=f1_by_threshold.get)\nprint(\"\\nBest validation threshold:\", best_threshold)\n\ntest_pred = (model.predict_proba(X_test)[:, 1] >= best_threshold).astype(int)\nprint(\"\\nFinal test metrics:\")\nprint(f\"  precision {precision_score(y_test, test_pred, zero_division=0):.2f} | recall {recall_score(y_test, test_pred, zero_division=0):.2f} | F1 {f1_score(y_test, test_pred, zero_division=0):.2f}\")\nprint(confusion_matrix(y_test, test_pred, labels=[0, 1]))",
      "output": "Loans: 5000 | defaults: 89 (1.8%)\n\nValidation at threshold 0.50:\n  Default      precision 0.50 | recall 0.07 | F1 0.12\n  Balanced     precision 0.05 | recall 0.79 | F1 0.10\n  Custom 1:10  precision 0.19 | recall 0.43 | F1 0.27\n\nBest validation threshold: 0.5\n\nFinal test metrics:\n  precision 0.10 | recall 0.22 | F1 0.14\n[[946  36]\n [ 14   4]]",
      "note": "The best threshold came from validation data only, and the test set was used once. The custom 1:10 weight raises recall, but, like class_weight=\"balanced\", it also inflates probabilities, so the best threshold ends up well above 0.5. The right balance depends on what a missed default costs compared with refusing a good customer."
    }
  ],
  "checklist": [
    "Understood precision, recall and F1",
    "Saw how the threshold changes the flagged transactions",
    "Split data into training, validation and test sets",
    "Compared default and class-weighted models",
    "Swept thresholds and chose one on the validation set",
    "Evaluated once on the test set",
    "Read the price of the alerts in false alarms"
  ],
  "quiz": [
    {
      "q": "A fraud model flags 100 transactions and 40 are really fraud. What is the precision?",
      "options": [
        "40%",
        "60%",
        "100%",
        "Cannot tell"
      ],
      "answer": 0,
      "why": "Precision = TP / (TP + FP) = 40 / 100 = 40%."
    },
    {
      "q": "What happens when you lower the decision threshold?",
      "options": [
        "Fewer alerts and higher precision",
        "More alerts and usually higher recall but lower precision",
        "The model is retrained",
        "Nothing changes"
      ],
      "answer": 1,
      "why": "A lower threshold flags more transactions, so it catches more fraud but also flags more legitimate ones."
    },
    {
      "q": "Why choose the threshold on the validation set and not on the test set?",
      "options": [
        "The test set is too big",
        "Choosing on the test set turns it into a second validation set and the final score becomes optimistic",
        "Validation data is cleaner",
        "It is faster"
      ],
      "answer": 1,
      "why": "The test set must stay an independent judge, used once at the end."
    },
    {
      "q": "Does a probability of 0.30 from a class_weight=\"balanced\" model mean a 30% chance of fraud?",
      "options": [
        "Yes, always",
        "No, class weights inflate the probabilities",
        "Only for tree models",
        "Only above 0.5"
      ],
      "answer": 1,
      "why": "Re-weighting the classes shifts the scores, so use them to rank and choose a threshold, not as literal chances."
    },
    {
  "q": "If you lower the classification threshold on your fraud model from 0.50 to 0.25, what is the most common effect?",
  "options": [
    "Higher recall and more fraud alerts, potentially with lower precision",
    "Lower recall and fewer fraud alerts, with higher precision",
    "No change to predictions unless the model is retrained",
    "Fewer false positives and more false negatives"
  ],
  "answer": 0,
  "why": "A lower threshold flags more transactions as fraud, usually catching more actual fraud (higher recall) at the cost of more false alarms (potentially lower precision)."
}
  ]
},
{
  "day": 20,
  "title": "ML Pipelines, ColumnTransformer & Data Leakage Prevention",
  "subtitle": "Move from training single models to building reusable workflows that preprocess data correctly and keep test information out of training.",
  "level": "Intermediate",
  "duration": "2-3 hours",
  "tags": [
    "Pipeline",
    "ColumnTransformer",
    "Data Leakage",
    "OneHotEncoder",
    "Preprocessing"
  ],
  "goals": [
    "Understand why preprocessing is necessary and what a Pipeline is",
    "Use ColumnTransformer for numerical and categorical columns",
    "Understand data leakage and how to prevent it",
    "Combine preprocessing and model training into one workflow"
  ],
  "sections": [
    {
      "id": "concept",
      "icon": "🧠",
      "title": "Step 1: Why We Need Pipelines",
      "meta": "From models to workflows",
      "blocks": [
        {
          "type": "p",
          "text": "Without a pipeline, every step (load, impute, scale, encode, train) is managed separately. It is easy to make mistakes or forget preprocessing during prediction."
        },
        {
          "type": "p",
          "text": "A Pipeline combines preprocessing and model training into one organized workflow: Imputation, Scaling, Model. Preprocessing and model execution are handled consistently for both training and prediction. Think of it as an automated assembly line for your ML model."
        },
        {
          "type": "table",
          "head": [
            "Today's goal",
            "Tool"
          ],
          "rows": [
            [
              "Chain preprocessing and model",
              "Pipeline"
            ],
            [
              "Different preprocessing per column type",
              "ColumnTransformer"
            ],
            [
              "Keep test information out of training",
              "fit on training data only"
            ]
          ]
        }
      ]
    },
    {
      "id": "first",
      "icon": "⚡",
      "title": "Step 2: Build Your First Pipeline",
      "meta": "Small dataset",
      "blocks": [
        {
          "type": "p",
          "text": "We start with a small customer dataset so the idea is clear before we apply it to fraud detection. Copy this into day20_pipelines.py:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "day20_pipelines.py",
          "code": "import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import classification_report\n\ndata = {\n    \"Age\": [22, 25, 47, 52, 46, 56, 23, 40, 35, 60],\n    \"Salary\": [\n        25000, 30000, 60000, 80000, 55000,\n        90000, 28000, 50000, 45000, 100000\n    ],\n    \"Purchased\": [0, 0, 1, 1, 1, 1, 0, 1, 0, 1]\n}\n\ndf = pd.DataFrame(data)\nprint(df)",
          "output": "   Age  Salary  Purchased\n0   22   25000          0\n1   25   30000          0\n2   47   60000          1\n3   52   80000          1\n4   46   55000          1\n5   56   90000          1\n6   23   28000          0\n7   40   50000          1\n8   35   45000          0\n9   60  100000          1"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "split.py",
          "code": "X = df[[\"Age\", \"Salary\"]]\ny = df[\"Purchased\"]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y,\n    test_size=0.3,\n    random_state=42,\n    stratify=y\n)\n\nprint(\"Training rows:\", len(X_train))\nprint(\"Testing rows:\", len(X_test))",
          "output": "Training rows: 7\nTesting rows: 3"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "pipeline.py",
          "code": "pipeline = Pipeline([\n    (\"imputer\", SimpleImputer(strategy=\"mean\")),\n    (\"scaler\", StandardScaler()),\n    (\"model\", LogisticRegression())\n])\n\nprint(pipeline)",
          "output": "Pipeline(steps=[('imputer', SimpleImputer()), ('scaler', StandardScaler()),\n                ('model', LogisticRegression())])"
        },
        {
          "type": "table",
          "head": [
            "Step",
            "Purpose"
          ],
          "rows": [
            [
              "imputer",
              "Fills missing numerical values"
            ],
            [
              "scaler",
              "Standardizes numerical features"
            ],
            [
              "model",
              "Trains Logistic Regression"
            ]
          ]
        },
        {
          "type": "code",
          "lang": "python",
          "title": "train.py",
          "code": "pipeline.fit(X_train, y_train)\npredictions = pipeline.predict(X_test)\n\nprint(classification_report(\n    y_test,\n    predictions,\n    zero_division=0\n))",
          "output": "              precision    recall  f1-score   support\n\n           0       0.50      1.00      0.67         1\n           1       1.00      0.50      0.67         2\n\n    accuracy                           0.67         3\n   macro avg       0.75      0.75      0.67         3\nweighted avg       0.83      0.67      0.67         3"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "This tiny dataset is only for learning the workflow. With 3 test rows, one prediction changes accuracy by 33 points, so these metrics are not reliable evidence of real-world performance."
        }
      ]
    },
    {
      "id": "leakage",
      "icon": "🚨",
      "title": "Step 3: Data Leakage",
      "meta": "Most important concept",
      "blocks": [
        {
          "type": "p",
          "text": "Data leakage happens when information from outside the training data improperly influences model training. For example, fitting a scaler on all records and then splitting means the scaler's mean and standard deviation already include the test rows."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "leakage.py",
          "code": "# WRONG: preprocessing before splitting\nleaky_scaler = StandardScaler().fit(X)\nprint(\"Scaler mean using ALL rows:  \", [round(float(m), 1) for m in leaky_scaler.mean_])\n\n# RIGHT: split first, fit preprocessing on training data only\nscaler = StandardScaler().fit(X_train)\nprint(\"Scaler mean using TRAIN only:\", [round(float(m), 1) for m in scaler.mean_])\n\nX_train_scaled = scaler.transform(X_train)\nX_test_scaled = scaler.transform(X_test)   # transform only, never fit\n\nprint(\"\\nTest rows were NOT used to learn the training mean.\")\nprint(\"Pipeline.fit() does this automatically.\")",
          "output": "Scaler mean using ALL rows:   [40.6, 56300.0]\nScaler mean using TRAIN only: [42.4, 61428.6]\n\nTest rows were NOT used to learn the training mean.\nPipeline.fit() does this automatically."
        },
        {
          "type": "table",
          "head": [
            "Method",
            "Meaning"
          ],
          "rows": [
            [
              "fit()",
              "Learn parameters from data"
            ],
            [
              "transform()",
              "Apply learned parameters to data"
            ],
            [
              "fit_transform()",
              "Learn and apply"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "A Pipeline handles this correctly: fit() learns every transformation from the training data only, and prediction just applies what was already learned."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Wrong: StandardScaler().fit_transform(X) before train_test_split. Right: split first, fit on training data, then transform the test data."
        }
      ]
    },
    {
      "id": "columns",
      "icon": "🧩",
      "title": "Step 4: ColumnTransformer",
      "meta": "Numerical + categorical",
      "blocks": [
        {
          "type": "p",
          "text": "Real datasets mix column types. Age and Salary are numerical and need imputing and scaling. City and Education are categorical and need imputing and encoding. ColumnTransformer applies the right preprocessing to the right columns and combines the results."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "mixed_data.py",
          "code": "data = {\n    \"Age\": [22, 25, 47, 52, 46, 56, 23, 40, 35, 60,\n            28, 32, 45, 50, 29, 38, 42, 55, 31, 48],\n    \"Salary\": [25000, 30000, 60000, 80000, 55000,\n               90000, 28000, 50000, 45000, 100000,\n               32000, 40000, 70000, 85000, 35000,\n               52000, 65000, 95000, 42000, 75000],\n    \"City\": [\"Delhi\", \"Mumbai\", \"Pune\", \"Delhi\", \"Pune\",\n             \"Mumbai\", \"Delhi\", \"Pune\", \"Mumbai\", \"Delhi\",\n             \"Pune\", \"Mumbai\", \"Delhi\", \"Pune\", \"Mumbai\",\n             \"Delhi\", \"Pune\", \"Mumbai\", \"Delhi\", \"Pune\"],\n    \"Education\": [\"Graduate\", \"Postgraduate\", \"Graduate\",\n                  \"Postgraduate\", \"Graduate\", \"Postgraduate\",\n                  \"Graduate\", \"Graduate\", \"Postgraduate\",\n                  \"Postgraduate\", \"Graduate\", \"Graduate\",\n                  \"Postgraduate\", \"Graduate\", \"Graduate\",\n                  \"Postgraduate\", \"Graduate\", \"Postgraduate\",\n                  \"Graduate\", \"Postgraduate\"],\n    \"Purchased\": [0, 0, 1, 1, 1, 1, 0, 1, 0, 1,\n                  0, 0, 1, 1, 0, 1, 1, 1, 0, 1]\n}\n\ndf = pd.DataFrame(data)\nX = df.drop(\"Purchased\", axis=1)\ny = df[\"Purchased\"]\n\nnumeric_features = [\"Age\", \"Salary\"]\ncategorical_features = [\"City\", \"Education\"]\n\nprint(df.head())\nprint(\"\\nNumerical:\", numeric_features)\nprint(\"Categorical:\", categorical_features)",
          "output": "   Age  Salary    City     Education  Purchased\n0   22   25000   Delhi      Graduate          0\n1   25   30000  Mumbai  Postgraduate          0\n2   47   60000    Pune      Graduate          1\n3   52   80000   Delhi  Postgraduate          1\n4   46   55000    Pune      Graduate          1\n\nNumerical: ['Age', 'Salary']\nCategorical: ['City', 'Education']"
        },
        {
          "type": "table",
          "head": [
            "City",
            "Delhi",
            "Mumbai",
            "Pune"
          ],
          "rows": [
            [
              "Delhi",
              "1",
              "0",
              "0"
            ],
            [
              "Mumbai",
              "0",
              "1",
              "0"
            ],
            [
              "Pune",
              "0",
              "0",
              "1"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "OneHotEncoder converts each category into its own 0/1 column. handle_unknown=\"ignore\" lets the pipeline accept a city it never saw in training."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "column_transformer.py",
          "code": "from sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import OneHotEncoder\n\nnumeric_transformer = Pipeline([\n    (\"imputer\", SimpleImputer(strategy=\"median\")),\n    (\"scaler\", StandardScaler())\n])\n\ncategorical_transformer = Pipeline([\n    (\"imputer\", SimpleImputer(strategy=\"most_frequent\")),\n    (\"encoder\", OneHotEncoder(handle_unknown=\"ignore\"))\n])\n\npreprocessor = ColumnTransformer([\n    (\"num\", numeric_transformer, numeric_features),\n    (\"cat\", categorical_transformer, categorical_features)\n])\n\nfull_pipeline = Pipeline([\n    (\"preprocessing\", preprocessor),\n    (\"model\", LogisticRegression(max_iter=1000))\n])\n\nprint(full_pipeline)",
          "output": "Pipeline(steps=[('preprocessing',\n                 ColumnTransformer(transformers=[('num',\n                                                  Pipeline(steps=[('imputer',\n                                                                   SimpleImputer(strategy='median')),\n                                                                  ('scaler',\n                                                                   StandardScaler())]),\n                                                  ['Age', 'Salary']),\n                                                 ('cat',\n                                                  Pipeline(steps=[('imputer',\n                                                                   SimpleImputer(strategy='most_frequent')),\n                                                                  ('encoder',\n                                                                   OneHotEncoder(handle_unknown='ignore'))]),\n                                                  ['City', 'Education'])])),\n                ('model', LogisticRegression(max_iter=1000))])"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "train_full.py",
          "code": "X_train, X_test, y_train, y_test = train_test_split(\n    X, y,\n    test_size=0.25,\n    random_state=42,\n    stratify=y\n)\n\nfull_pipeline.fit(X_train, y_train)\npredictions = full_pipeline.predict(X_test)\n\nprint(classification_report(\n    y_test, predictions, zero_division=0\n))\n\nnames = full_pipeline.named_steps[\"preprocessing\"].get_feature_names_out()\nprint(\"Features after preprocessing:\")\nprint(list(names))",
          "output": "              precision    recall  f1-score   support\n\n           0       1.00      1.00      1.00         2\n           1       1.00      1.00      1.00         3\n\n    accuracy                           1.00         5\n   macro avg       1.00      1.00      1.00         5\nweighted avg       1.00      1.00      1.00         5\n\nFeatures after preprocessing:\n['num__Age', 'num__Salary', 'cat__City_Delhi', 'cat__City_Mumbai', 'cat__City_Pune', 'cat__Education_Graduate', 'cat__Education_Postgraduate']"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Perfect scores on just 5 test rows prove nothing. Use more data and cross-validation before trusting a result."
        }
      ]
    },
    {
      "id": "newdata",
      "icon": "🔥",
      "title": "Step 5: Predict on Raw New Data",
      "meta": "Why pipelines pay off",
      "blocks": [
        {
          "type": "p",
          "text": "The pipeline accepts raw rows. Missing values are imputed with values learned during training, and an unseen city is encoded as all zeros."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "predict_new.py",
          "code": "new_customers = pd.DataFrame({\n    \"Age\": [30, np.nan, 50],\n    \"Salary\": [48000, 70000, np.nan],\n    \"City\": [\"Delhi\", \"Chennai\", np.nan],\n    \"Education\": [\"Graduate\", \"Postgraduate\", \"Graduate\"]\n})\n\nlabels = full_pipeline.predict(new_customers)\nproba = full_pipeline.predict_proba(new_customers)[:, 1]\n\nfor i, (lab, p) in enumerate(zip(labels, proba), start=1):\n    print(f\"Customer {i}: {'PURCHASE' if lab == 1 else 'NO PURCHASE'} \"\n          f\"(probability {p:.0%})\")",
          "output": "Customer 1: NO PURCHASE (probability 30%)\nCustomer 2: PURCHASE (probability 84%)\nCustomer 3: PURCHASE (probability 77%)"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "No manual scaling or encoding was needed. Forgetting preprocessing at prediction time is exactly the mistake pipelines prevent."
        }
      ]
    },
    {
      "id": "fraud",
      "icon": "💳",
      "title": "Step 6: Apply It to Fraud Detection",
      "meta": "Credit card project",
      "blocks": [
        {
          "type": "p",
          "text": "The fraud features are all numerical, so no categorical encoding is needed. A scaler plus Logistic Regression in one pipeline automatically scales incoming data before prediction. We recreate the Day 18 synthetic data so the code runs on its own."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "fraud_pipeline.py",
          "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import confusion_matrix\n\n# Same synthetic fraud data as Day 18 (swap in your real df if you have it)\nX_raw, y_raw = make_classification(\n    n_samples=30000, n_features=10, n_informative=6, n_redundant=0,\n    weights=[0.99, 0.01], class_sep=0.8, flip_y=0, random_state=42\n)\nfraud_df = pd.DataFrame(X_raw, columns=[f\"V{i}\" for i in range(1, 11)])\nrng = np.random.RandomState(42)\nfraud_df[\"Amount\"] = rng.lognormal(mean=3.5, sigma=1.0, size=len(fraud_df)).round(2)\nfraud_df[\"Class\"] = y_raw\n\nX = fraud_df.drop(columns=[\"Class\"])\ny = fraud_df[\"Class\"]\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, random_state=42, stratify=y\n)\n\nfraud_pipeline = Pipeline([\n    (\"scaler\", StandardScaler()),\n    (\"model\", LogisticRegression(\n        class_weight=\"balanced\",\n        max_iter=1000,\n        random_state=42\n    ))\n])\n\n# Fit only on training data\nfraud_pipeline.fit(X_train, y_train)\n\n# Predict on test data\nfraud_predictions = fraud_pipeline.predict(X_test)\n\nprint(\"Confusion Matrix:\")\nprint(confusion_matrix(y_test, fraud_predictions))\n\nprint(\"\\nClassification Report:\")\nprint(classification_report(\n    y_test,\n    fraud_predictions,\n    target_names=[\"Legitimate\", \"Fraud\"],\n    zero_division=0\n))",
          "output": "Confusion Matrix:\n[[4663 1277]\n [  11   49]]\n\nClassification Report:\n              precision    recall  f1-score   support\n\n  Legitimate       1.00      0.79      0.88      5940\n       Fraud       0.04      0.82      0.07        60\n\n    accuracy                           0.79      6000\n   macro avg       0.52      0.80      0.47      6000\nweighted avg       0.99      0.79      0.87      6000"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "class_weight=\"balanced\" raised fraud recall to 0.82 (49 of 60 caught) but precision fell to 0.04 with 1,277 false alarms. Compare that with the default model's recall of 0.22 and precision of 0.93."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "This uses the default 0.5 threshold. It is a new baseline, not a replacement for your Day 19 threshold experiment. Keep the original test set untouched when comparing models; use validation data for model and threshold selection."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🏁",
      "title": "Mini Project: Leakage-Safe Workflow",
      "blocks": [
        {
          "type": "p",
          "text": "The Final Program below builds a ColumnTransformer pipeline on mixed customer data with missing values, evaluates it with cross-validation, then compares two fraud pipelines without touching the test set until the end."
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
            "A Pipeline chains preprocessing and a model into one reusable workflow",
            "Data leakage happens when test information influences training",
            "fit() learns from data, transform() applies what was learned",
            "ColumnTransformer applies different preprocessing to numerical and categorical columns",
            "OneHotEncoder(handle_unknown=\"ignore\") accepts unseen categories",
            "Pipelines keep preprocessing inside each cross-validation fold",
            "class_weight=\"balanced\" shifts the precision/recall trade-off, it does not fix it"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Leakage-Safe Pipeline Workflow",
    "file": "day20_final.py",
    "description": "One program combining Day 20: a ColumnTransformer pipeline on mixed customer data with missing values, cross-validation with preprocessing inside each fold, prediction on raw new rows, and two fraud pipelines compared on an untouched test set.",
    "concepts": [
      "Pipeline",
      "ColumnTransformer",
      "imputation",
      "OneHotEncoder",
      "data leakage prevention",
      "class_weight"
    ],
    "code": "import numpy as np\nimport pandas as pd\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split, cross_val_score, StratifiedKFold\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import confusion_matrix, precision_score, recall_score, f1_score\n\nprint(\"=== ML PIPELINES, COLUMNTRANSFORMER AND LEAKAGE ===\")\n\n# ---------- Part 1: mixed-type customer data ----------\nrng = np.random.RandomState(0)\nn = 200\ncustomers = pd.DataFrame({\n    \"Age\": rng.randint(20, 65, n).astype(float),\n    \"Salary\": rng.randint(20000, 110000, n).astype(float),\n    \"City\": rng.choice([\"Delhi\", \"Mumbai\", \"Pune\"], n),\n    \"Education\": rng.choice([\"Graduate\", \"Postgraduate\"], n)\n})\nscore = (customers[\"Age\"] / 65 + customers[\"Salary\"] / 110000\n         + (customers[\"Education\"] == \"Postgraduate\") * 0.4\n         + rng.normal(0, 0.3, n))\ncustomers[\"Purchased\"] = (score > score.median()).astype(int)\n\n# inject missing values\ncustomers.loc[rng.choice(n, 15, replace=False), \"Salary\"] = np.nan\ncustomers.loc[rng.choice(n, 10, replace=False), \"City\"] = np.nan\n\nX = customers.drop(columns=\"Purchased\")\ny = customers[\"Purchased\"]\nprint(\"\\nCustomers:\", n, \"| Missing values:\", int(X.isna().sum().sum()))\n\nnumeric_features = [\"Age\", \"Salary\"]\ncategorical_features = [\"City\", \"Education\"]\n\npreprocessor = ColumnTransformer([\n    (\"num\", Pipeline([\n        (\"imputer\", SimpleImputer(strategy=\"median\")),\n        (\"scaler\", StandardScaler())\n    ]), numeric_features),\n    (\"cat\", Pipeline([\n        (\"imputer\", SimpleImputer(strategy=\"most_frequent\")),\n        (\"encoder\", OneHotEncoder(handle_unknown=\"ignore\"))\n    ]), categorical_features)\n])\n\npipeline = Pipeline([\n    (\"preprocessing\", preprocessor),\n    (\"model\", LogisticRegression(max_iter=1000))\n])\n\ncv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)\nscores = cross_val_score(pipeline, X, y, cv=cv)\nprint(f\"5-fold CV accuracy (preprocessing inside each fold): \"\n      f\"{scores.mean():.3f} +/- {scores.std():.3f}\")\n\nX_tr, X_te, y_tr, y_te = train_test_split(\n    X, y, test_size=0.25, random_state=42, stratify=y\n)\npipeline.fit(X_tr, y_tr)\nprint(f\"Held-out test accuracy: {pipeline.score(X_te, y_te):.3f}\")\n\nnew = pd.DataFrame({\n    \"Age\": [30, np.nan], \"Salary\": [48000, 70000],\n    \"City\": [\"Delhi\", \"Chennai\"], \"Education\": [\"Graduate\", \"Postgraduate\"]\n})\nprint(\"New customers (missing age, unseen city handled):\",\n      pipeline.predict(new).tolist())\n\n# ---------- Part 2: fraud pipeline ----------\nX_raw, y_raw = make_classification(\n    n_samples=30000, n_features=10, n_informative=6, n_redundant=0,\n    weights=[0.99, 0.01], class_sep=0.8, flip_y=0, random_state=42\n)\ndf = pd.DataFrame(X_raw, columns=[f\"V{i}\" for i in range(1, 11)])\ndf[\"Amount\"] = np.random.RandomState(42).lognormal(3.5, 1.0, len(df)).round(2)\ndf[\"Class\"] = y_raw\n\nXf = df.drop(columns=\"Class\")\nyf = df[\"Class\"]\nXf_train, Xf_test, yf_train, yf_test = train_test_split(\n    Xf, yf, test_size=0.20, random_state=42, stratify=yf\n)\n\nvariants = {\n    \"Default weights\": LogisticRegression(max_iter=1000, random_state=42),\n    \"class_weight balanced\": LogisticRegression(\n        class_weight=\"balanced\", max_iter=1000, random_state=42\n    )\n}\n\nprint(\"\\nFraud pipelines (threshold 0.5, test set used once):\")\nfor name, model in variants.items():\n    pipe = Pipeline([(\"scaler\", StandardScaler()), (\"model\", model)])\n    pipe.fit(Xf_train, yf_train)\n    pred = pipe.predict(Xf_test)\n    tn, fp, fn, tp = confusion_matrix(yf_test, pred, labels=[0, 1]).ravel()\n    print(f\"  {name:<22} precision {precision_score(yf_test, pred, zero_division=0):.3f} | \"\n          f\"recall {recall_score(yf_test, pred):.3f} | \"\n          f\"F1 {f1_score(yf_test, pred):.3f} | TP {tp} FN {fn} FP {fp}\")\n\nscaler = pipe.named_steps[\"scaler\"]\nprint(\"\\nScaler learned from training rows only:\", len(Xf_train), \"rows\")\nprint(\"Amount mean (train):\", round(scaler.mean_[-1], 2))\nprint(\"The test set was never used to fit anything.\")",
    "output": "=== ML PIPELINES, COLUMNTRANSFORMER AND LEAKAGE ===\n\nCustomers: 200 | Missing values: 25\n5-fold CV accuracy (preprocessing inside each fold): 0.770 +/- 0.056\nHeld-out test accuracy: 0.680\nNew customers (missing age, unseen city handled): [0, 1]\n\nFraud pipelines (threshold 0.5, test set used once):\n  Default weights        precision 0.929 | recall 0.217 | F1 0.351 | TP 13 FN 47 FP 1\n  class_weight balanced  precision 0.037 | recall 0.817 | F1 0.071 | TP 49 FN 11 FP 1277\n\nScaler learned from training rows only: 24000 rows\nAmount mean (train): 54.67\nThe test set was never used to fit anything."
  },
  "practice": [
    {
      "title": "Employee Attrition Pipeline",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Build a ColumnTransformer pipeline for a dataset with missing values and categorical columns.",
      "tasks": [
        "Create X (every column except Left) and y (Left)",
        "Define numeric_features and categorical_features",
        "Build a numeric pipeline with a median imputer and StandardScaler",
        "Build a categorical pipeline with a most_frequent imputer and OneHotEncoder(handle_unknown=\"ignore\")",
        "Combine them with ColumnTransformer and add LogisticRegression(max_iter=1000) in a Pipeline",
        "Split 80/20 with random_state=4 and stratify=y, fit, and print the test accuracy",
        "Predict for a new employee with a missing Salary and a Department unseen in training"
      ],
      "hint": "Pipeline([(\"preprocessing\", preprocessor), (\"model\", LogisticRegression(max_iter=1000))]). The new employee is a one-row DataFrame with the same column names.",
      "starter": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\nrng = np.random.RandomState(4)\nn = 150\ndf = pd.DataFrame({\n    \"Experience\": rng.randint(0, 20, n).astype(float),\n    \"Salary\": rng.randint(25000, 120000, n).astype(float),\n    \"Department\": rng.choice([\"Sales\", \"Tech\", \"HR\"], n),\n    \"Remote\": rng.choice([\"Yes\", \"No\"], n)\n})\nrisk = (20 - df[\"Experience\"]) / 20 + (df[\"Department\"] == \"Sales\") * 0.4 + rng.normal(0, 0.3, n)\ndf[\"Left\"] = (risk > risk.median()).astype(int)\ndf.loc[rng.choice(n, 12, replace=False), \"Salary\"] = np.nan\ndf.loc[rng.choice(n, 8, replace=False), \"Department\"] = np.nan\n\n# TODO 1: X = every column except Left, y = Left\n# TODO 2: numeric_features and categorical_features lists\n# TODO 3: numeric pipeline = median imputer + StandardScaler\n# TODO 4: categorical pipeline = most_frequent imputer + OneHotEncoder(handle_unknown=\"ignore\")\n# TODO 5: combine with ColumnTransformer, then add LogisticRegression(max_iter=1000) in a Pipeline\n# TODO 6: split 80/20 with random_state=4 and stratify=y, fit, print test accuracy\n# TODO 7: predict for one new employee with missing Salary and a Department not seen in training",
      "solution": "import numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.compose import ColumnTransformer\nfrom sklearn.preprocessing import StandardScaler, OneHotEncoder\nfrom sklearn.impute import SimpleImputer\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\nrng = np.random.RandomState(4)\nn = 150\ndf = pd.DataFrame({\n    \"Experience\": rng.randint(0, 20, n).astype(float),\n    \"Salary\": rng.randint(25000, 120000, n).astype(float),\n    \"Department\": rng.choice([\"Sales\", \"Tech\", \"HR\"], n),\n    \"Remote\": rng.choice([\"Yes\", \"No\"], n)\n})\nrisk = (20 - df[\"Experience\"]) / 20 + (df[\"Department\"] == \"Sales\") * 0.4 + rng.normal(0, 0.3, n)\ndf[\"Left\"] = (risk > risk.median()).astype(int)\ndf.loc[rng.choice(n, 12, replace=False), \"Salary\"] = np.nan\ndf.loc[rng.choice(n, 8, replace=False), \"Department\"] = np.nan\n\nX = df.drop(columns=\"Left\")\ny = df[\"Left\"]\n\nnumeric_features = [\"Experience\", \"Salary\"]\ncategorical_features = [\"Department\", \"Remote\"]\n\npreprocessor = ColumnTransformer([\n    (\"num\", Pipeline([\n        (\"imputer\", SimpleImputer(strategy=\"median\")),\n        (\"scaler\", StandardScaler())\n    ]), numeric_features),\n    (\"cat\", Pipeline([\n        (\"imputer\", SimpleImputer(strategy=\"most_frequent\")),\n        (\"encoder\", OneHotEncoder(handle_unknown=\"ignore\"))\n    ]), categorical_features)\n])\n\npipeline = Pipeline([\n    (\"preprocessing\", preprocessor),\n    (\"model\", LogisticRegression(max_iter=1000))\n])\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, random_state=4, stratify=y\n)\npipeline.fit(X_train, y_train)\nprint(\"Test accuracy:\", round(accuracy_score(y_test, pipeline.predict(X_test)), 4))\n\nnew_employee = pd.DataFrame({\n    \"Experience\": [3.0], \"Salary\": [np.nan],\n    \"Department\": [\"Finance\"], \"Remote\": [\"Yes\"]\n})\nprint(\"Prediction:\", \"LEAVES\" if pipeline.predict(new_employee)[0] == 1 else \"STAYS\")",
      "output": "Test accuracy: 0.7667\nPrediction: LEAVES",
      "note": "The pipeline handled the missing Salary and the unseen Department \"Finance\" with no extra code."
    },
    {
      "title": "Leakage Experiment",
      "level": "Medium",
      "file": "practice2.py",
      "description": "See leakage inflate a score on pure noise, then fix it with a Pipeline.",
      "tasks": [
        "Leaky way: fit SelectKBest(f_classif, k=20) on all of X, then run cross_val_score with LogisticRegression",
        "Correct way: put SelectKBest and LogisticRegression in a Pipeline and run cross_val_score",
        "Print both mean accuracies",
        "Print which score is unrealistically high and why"
      ],
      "hint": "In the correct version the Pipeline refits SelectKBest on the training part of every fold, so the validation rows never influence feature selection.",
      "starter": "import numpy as np\nfrom sklearn.model_selection import cross_val_score, StratifiedKFold\nfrom sklearn.feature_selection import SelectKBest, f_classif\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.linear_model import LogisticRegression\n\nrng = np.random.RandomState(0)\nX = rng.normal(size=(100, 1000))   # pure noise features\ny = rng.randint(0, 2, 100)         # random labels: no real signal exists\n\ncv = StratifiedKFold(n_splits=5, shuffle=True, random_state=0)\n\n# TODO 1: LEAKY way - fit SelectKBest(f_classif, k=20) on ALL of X, then cross_val_score LogisticRegression\n# TODO 2: CORRECT way - Pipeline([(\"select\", SelectKBest(f_classif, k=20)), (\"model\", LogisticRegression())])\n# TODO 3: print both mean accuracies\n# TODO 4: print which one is unrealistically high and why",
      "solution": "import numpy as np\nfrom sklearn.model_selection import cross_val_score, StratifiedKFold\nfrom sklearn.feature_selection import SelectKBest, f_classif\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.linear_model import LogisticRegression\n\nrng = np.random.RandomState(0)\nX = rng.normal(size=(100, 1000))   # pure noise features\ny = rng.randint(0, 2, 100)         # random labels: no real signal exists\n\ncv = StratifiedKFold(n_splits=5, shuffle=True, random_state=0)\n\n# LEAKY: feature selection sees every row, including validation rows\nX_selected = SelectKBest(f_classif, k=20).fit_transform(X, y)\nleaky = cross_val_score(LogisticRegression(), X_selected, y, cv=cv).mean()\n\n# CORRECT: selection is refitted inside each training fold\npipe = Pipeline([\n    (\"select\", SelectKBest(f_classif, k=20)),\n    (\"model\", LogisticRegression())\n])\ncorrect = cross_val_score(pipe, X, y, cv=cv).mean()\n\nprint(f\"Leaky accuracy:   {leaky:.3f}\")\nprint(f\"Correct accuracy: {correct:.3f}\")\nprint(\"Labels are random, so chance level (about 0.50) is the honest answer.\")\nprint(\"The leaky score is inflated because selection saw the validation rows.\")",
      "output": "Leaky accuracy:   0.810\nCorrect accuracy: 0.430\nLabels are random, so chance level (about 0.50) is the honest answer.\nThe leaky score is inflated because selection saw the validation rows.",
      "note": "The labels are random, so no model should beat chance. The leaky score of 0.81 is pure leakage; the pipeline's 0.43 is the honest result."
    }
  ],
  "checklist": [
    "Understood why pipelines are useful",
    "Built a Pipeline with imputer, scaler and model",
    "Understood data leakage and fit vs transform",
    "Used ColumnTransformer with OneHotEncoder",
    "Predicted on raw new data with missing and unseen values",
    "Built a fraud detection pipeline",
    "Kept the test set untouched until the final check"
  ],
  "quiz": [
    {
      "q": "What is data leakage?",
      "options": [
        "Losing rows from the dataset",
        "Information from outside the training data improperly influencing training",
        "A model that trains too slowly",
        "Missing values in the data"
      ],
      "answer": 1,
      "why": "Leakage means the training process received information it should not have, for example test-set statistics from a scaler fitted before splitting."
    },
    {
      "q": "What is the correct order for scaling features?",
      "options": [
        "Scale all data, then split",
        "Split, then fit the scaler on the training data and transform the test data",
        "Fit a separate scaler on the test data",
        "Scale only the test data"
      ],
      "answer": 1,
      "why": "Split first, fit preprocessing on training data only, and apply the learned parameters to the test data with transform()."
    },
    {
      "q": "What does ColumnTransformer do?",
      "options": [
        "Trains several models at once",
        "Applies different preprocessing to different columns and combines the results",
        "Removes categorical columns",
        "Splits the dataset into folds"
      ],
      "answer": 1,
      "why": "It routes numerical columns through numerical preprocessing and categorical columns through encoding, then joins the outputs."
    },
    {
      "q": "Why use OneHotEncoder(handle_unknown=\"ignore\")?",
      "options": [
        "To drop rare categories",
        "To allow categories not seen in training at prediction time",
        "To scale categorical values",
        "To fill missing values"
      ],
      "answer": 1,
      "why": "An unseen category is encoded as all zeros instead of raising an error."
    },
    {
      "q": "Why is a Pipeline useful inside cross-validation?",
      "options": [
        "It makes folds larger",
        "It refits the preprocessing on each training fold so validation rows never leak",
        "It removes the need for a test set",
        "It always raises accuracy"
      ],
      "answer": 1,
      "why": "Each fold fits imputers, scalers and selectors only on its own training part, which prevents the inflated scores that leakage causes."
    }
  ]
},

// Day 21: End-to-End Fraud Detection Project V1 (add a comma after Day 20's } then paste)
{
 "day": 21,
 "title": "End-to-End Fraud Detection Project V1",
 "subtitle": "Combine splitting, pipelines, thresholds and saving into one reusable project",
 "level": "Intermediate",
 "duration": "90 min",
 "tags": [
  "Project",
  "Pipeline",
  "Fraud",
  "Threshold",
  "joblib"
 ],
 "goals": [
  "Follow the full ML project workflow in order",
  "Use train / validation / test for two separate decisions",
  "Build one Pipeline and pick a threshold on validation",
  "Save a model with its threshold and features"
 ],
 "sections": [
  {
   "id": "workflow",
   "icon": "🗺️",
   "title": "The project workflow",
   "blocks": [
    {
     "type": "p",
     "text": "Today you stop learning single algorithms and build one complete project: a credit card fraud detector. The goal is not to memorise code. It is to learn the **order of decisions** every real ML project follows, so you can repeat it on any dataset."
    },
    {
     "type": "table",
     "head": [
      "Stage",
      "Question you answer",
      "Tool"
     ],
     "rows": [
      [
       "1. Load",
       "What data do I have?",
       "pandas / OpenML"
      ],
      [
       "2. Explore",
       "How big, how clean, how imbalanced?",
       "shape, isnull, value_counts"
      ],
      [
       "3. Split",
       "How do I keep an honest final exam?",
       "train / validation / test"
      ],
      [
       "4. Pipeline",
       "How do I bundle preprocessing + model?",
       "Pipeline"
      ],
      [
       "5. Train + evaluate",
       "Is it good at finding fraud?",
       "confusion matrix, precision, recall"
      ],
      [
       "6. Threshold",
       "How many alarms am I willing to raise?",
       "validation set only"
      ],
      [
       "7. Final test",
       "What will it do on new data?",
       "test set, once"
      ],
      [
       "8. Save",
       "How do I reuse it later?",
       "joblib"
      ]
     ]
    },
    {
     "type": "callout",
     "tone": "info",
     "text": "**Folder layout** to create in VS Code: `data/`, `notebooks/`, `models/`, `reports/`, `src/`, plus `requirements.txt` and `README.md`. Today you work in one notebook; the other files are filled in at the end."
    }
   ]
  },
  {
   "id": "load",
   "icon": "📥",
   "title": "Step 1: Load the data",
   "blocks": [
    {
     "type": "p",
     "text": "The real dataset (Kaggle/OpenML credit card fraud, 284,807 rows) is about 150 MB. It is too big for a browser lesson, so here we use a **synthetic stand-in** with the same shape of problem: a `Time` column, anonymous `V` features, an `Amount`, and a rare `Class` (1 = fraud). Everything you learn transfers unchanged."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "Create the stand-in dataset",
     "code": "import numpy as np\nimport pandas as pd\n\ndef make_fraud_data(n=20000, fraud_rate=0.02, seed=21):\n    rng = np.random.RandomState(seed)\n    is_fraud = rng.rand(n) < fraud_rate\n    X = rng.normal(size=(n, 10))\n    X[is_fraud, 0] -= 2.0\n    X[is_fraud, 2] -= 1.5\n    X[is_fraud, 3] += 1.8\n    X[is_fraud, 6] -= 1.2\n    amount = np.round(np.exp(rng.normal(3.5, 1.1, n) + 0.6 * is_fraud), 2)\n    df = pd.DataFrame(X, columns=[f\"V{i}\" for i in range(1, 11)])\n    df.insert(0, \"Time\", rng.randint(0, 172800, n))\n    df[\"Amount\"] = amount\n    df[\"Class\"] = is_fraud.astype(int)\n    return df\n\ndf = make_fraud_data()\nprint(\"Dataset shape:\", df.shape)\nprint(df[[\"Time\", \"V1\", \"V2\", \"Amount\", \"Class\"]].head(3).round(2).to_string())",
     "output": "Dataset shape: (20000, 13)\n     Time    V1    V2  Amount  Class\n0   33980 -0.16 -0.56   13.84      0\n1   39709  0.58  0.68   28.77      0\n2  157877  0.02 -1.04  329.54      0"
    },
    {
     "type": "callout",
     "tone": "tip",
     "text": "**On your own machine or Colab**, load the real data instead. Do not silently swap datasets: if OpenML is down, fix the download first."
    },
    {
     "type": "code",
     "lang": "text",
     "title": "Real dataset (Colab only, not run here)",
     "code": "from sklearn.datasets import fetch_openml\n\ndataset = fetch_openml(data_id=1597, as_frame=True)\ndf = dataset.frame\nprint(\"Dataset shape:\", df.shape)\n# The real target may load as text; convert it:\n# y = df[\"Class\"].astype(int)"
    }
   ]
  },
  {
   "id": "explore",
   "icon": "🔍",
   "title": "Step 2: Explore before you model",
   "blocks": [
    {
     "type": "p",
     "text": "Always inspect first. Four quick checks tell you whether the data is usable and what kind of problem you have."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "Quality and imbalance checks",
     "code": "print(\"Missing values:\", int(df.isnull().sum().sum()))\nprint(\"Duplicate rows:\", int(df.duplicated().sum()))\nprint(\"Class counts:\", df[\"Class\"].value_counts().to_dict())\nprint(\"Fraud %:\", round(df[\"Class\"].mean() * 100, 2))\nprint(\"Accuracy of 'always legitimate':\", round(1 - df[\"Class\"].mean(), 4))",
     "output": "Missing values: 0\nDuplicate rows: 0\nClass counts: {0: 19591, 1: 409}\nFraud %: 2.04\nAccuracy of 'always legitimate': 0.9796"
    },
    {
     "type": "callout",
     "tone": "warn",
     "text": "The last line is the whole lesson of this section: a model that never detects fraud still scores about 98% accuracy. **Accuracy is the wrong judge here.** You will use precision and recall instead."
    }
   ]
  },
  {
   "id": "split",
   "icon": "✂️",
   "title": "Step 3: Train / validation / test",
   "blocks": [
    {
     "type": "p",
     "text": "Fraud needs three sets because you make **two** decisions with data: how the model learns (train) and which threshold to use (validation). The test set must stay untouched until the end."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "64 / 16 / 20 stratified split",
     "code": "from sklearn.model_selection import train_test_split\n\nX = df.drop(\"Class\", axis=1)\ny = df[\"Class\"]\n\nX_train_full, X_test, y_train_full, y_test = train_test_split(\n    X, y, test_size=0.20, random_state=42, stratify=y)\nX_train, X_val, y_train, y_val = train_test_split(\n    X_train_full, y_train_full, test_size=0.20, random_state=42, stratify=y_train_full)\n\nfor name, part in [(\"Train\", y_train), (\"Validation\", y_val), (\"Test\", y_test)]:\n    print(f\"{name}: {len(part)} rows, {int(part.sum())} frauds\")",
     "output": "Train: 12800 rows, 262 frauds\nValidation: 3200 rows, 65 frauds\nTest: 4000 rows, 82 frauds"
    },
    {
     "type": "callout",
     "tone": "info",
     "text": "`stratify` keeps the fraud ratio the same in every set. Without it, a small split could end up with almost no fraud at all."
    }
   ]
  },
  {
   "id": "pipeline",
   "icon": "🔧",
   "title": "Step 4: Pipeline and training",
   "blocks": [
    {
     "type": "p",
     "text": "A `Pipeline` bundles scaling and the model into one object. Benefits: the scaler is fitted on training data only (no leakage), and you save and reuse **one** thing later."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "Build and train",
     "code": "from sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\nfraud_pipeline = Pipeline([\n    (\"scaler\", StandardScaler()),\n    (\"model\", LogisticRegression(class_weight=\"balanced\", max_iter=1000, random_state=42)),\n])\nfraud_pipeline.fit(X_train, y_train)\nprint(\"Steps:\", [name for name, _ in fraud_pipeline.steps])\nprint(\"Trained on\", len(X_train), \"transactions\")",
     "output": "Steps: ['scaler', 'model']\nTrained on 12800 transactions"
    },
    {
     "type": "callout",
     "tone": "tip",
     "text": "`class_weight=\"balanced\"` makes a missed fraud cost more than a false alarm during training. It helps recall, but it also pushes probabilities upward, so the best threshold often ends up high."
    }
   ]
  },
  {
   "id": "evaluate",
   "icon": "📊",
   "title": "Step 5: Evaluate at the default 0.5",
   "blocks": [
    {
     "type": "p",
     "text": "Look at the **Fraud row** of the report, not at accuracy. Precision = of the alarms raised, how many were real fraud. Recall = of all real fraud, how much was caught."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "Validation confusion matrix and report",
     "code": "from sklearn.metrics import confusion_matrix, classification_report\n\nval_pred = fraud_pipeline.predict(X_val)\nprint(confusion_matrix(y_val, val_pred))\nprint(classification_report(y_val, val_pred, target_names=[\"Legitimate\", \"Fraud\"], zero_division=0))",
     "output": "[[2989  146]\n [   5   60]]\n              precision    recall  f1-score   support\n\n  Legitimate       1.00      0.95      0.98      3135\n       Fraud       0.29      0.92      0.44        65\n\n    accuracy                           0.95      3200\n   macro avg       0.64      0.94      0.71      3200\nweighted avg       0.98      0.95      0.96      3200"
    }
   ]
  },
  {
   "id": "threshold",
   "icon": "🎚️",
   "title": "Step 6: Choose a threshold on validation",
   "blocks": [
    {
     "type": "p",
     "text": "A model outputs a fraud **probability**. The threshold turns it into an alarm. A low threshold catches more fraud but raises more false alarms. Pick the rule from the business goal; here: *highest precision while keeping fraud recall at least 80%*."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "Scan thresholds",
     "code": "import numpy as np\nfrom sklearn.metrics import precision_score, recall_score, f1_score\n\nval_proba = fraud_pipeline.predict_proba(X_val)[:, 1]\n\nrows = []\nfor t in np.round(np.arange(0.05, 1.0, 0.01), 2):\n    pred = (val_proba >= t).astype(int)\n    rows.append({\n        \"Threshold\": float(t),\n        \"Precision\": precision_score(y_val, pred, zero_division=0),\n        \"Recall\": recall_score(y_val, pred, zero_division=0),\n        \"F1\": f1_score(y_val, pred, zero_division=0),\n    })\nthreshold_df = pd.DataFrame(rows)\nprint(threshold_df.iloc[::15].round(3).to_string(index=False))",
     "output": " Threshold  Precision  Recall    F1\n      0.05      0.099   0.985 0.181\n      0.20      0.180   0.954 0.302\n      0.35      0.242   0.923 0.383\n      0.50      0.291   0.923 0.443\n      0.65      0.375   0.923 0.533\n      0.80      0.452   0.877 0.597\n      0.95      0.700   0.754 0.726"
    },
    {
     "type": "code",
     "lang": "python",
     "title": "Apply the rule",
     "code": "eligible = threshold_df[threshold_df[\"Recall\"] >= 0.80]\n\nif eligible.empty:\n    chosen_threshold = None\n    print(\"No threshold reached 80% recall.\")\nelse:\n    best = eligible.sort_values([\"Precision\", \"Threshold\"],\n                                ascending=[False, False], kind=\"stable\").iloc[0]\n    chosen_threshold = float(best[\"Threshold\"])\n    print(\"Chosen threshold:\", chosen_threshold)\n    print(\"Validation precision:\", round(float(best[\"Precision\"]), 3))\n    print(\"Validation recall:\", round(float(best[\"Recall\"]), 3))",
     "output": "Chosen threshold: 0.91\nValidation precision: 0.627\nValidation recall: 0.8"
    },
    {
     "type": "callout",
     "tone": "warn",
     "text": "The validation set holds only about 64 frauds, so one extra caught fraud moves recall by 1.5 points. Treat the chosen threshold as an **estimate**, not a truth. The 80% target is a teaching rule; real banks set it from the cost of missed fraud versus false alarms."
    }
   ]
  },
  {
   "id": "final",
   "icon": "🏁",
   "title": "Step 7: Final test evaluation (once)",
   "blocks": [
    {
     "type": "code",
     "lang": "python",
     "title": "Evaluate on the untouched test set",
     "code": "test_proba = fraud_pipeline.predict_proba(X_test)[:, 1]\ntest_pred = (test_proba >= chosen_threshold).astype(int)\n\nprint(confusion_matrix(y_test, test_pred))\nprint(classification_report(y_test, test_pred, target_names=[\"Legitimate\", \"Fraud\"], zero_division=0))",
     "output": "[[3878   40]\n [  13   69]]\n              precision    recall  f1-score   support\n\n  Legitimate       1.00      0.99      0.99      3918\n       Fraud       0.63      0.84      0.72        82\n\n    accuracy                           0.99      4000\n   macro avg       0.81      0.92      0.86      4000\nweighted avg       0.99      0.99      0.99      4000"
    },
    {
     "type": "callout",
     "tone": "warn",
     "text": "Never change the threshold after seeing these numbers. If you do, the test set has become a second validation set and you no longer have an honest estimate."
    }
   ]
  },
  {
   "id": "save",
   "icon": "💾",
   "title": "Step 8: Save and reload the model",
   "blocks": [
    {
     "type": "p",
     "text": "Save the **pipeline, the threshold and the feature names together**. A model without its threshold and column order cannot be used correctly later."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "Save with joblib, reload, predict",
     "code": "import os\nimport joblib\n\nos.makedirs(\"models\", exist_ok=True)\nartifact = {\"pipeline\": fraud_pipeline, \"threshold\": chosen_threshold, \"features\": list(X.columns)}\njoblib.dump(artifact, \"models/fraud_detection_v1.joblib\")\n\nloaded = joblib.load(\"models/fraud_detection_v1.joblib\")\nfraud_idx = y_test[y_test == 1].index[0]\nlegit_idx = y_test[y_test == 0].index[0]\nfor label, idx in [(\"fraud row\", fraud_idx), (\"legit row\", legit_idx)]:\n    row = X_test.loc[[idx]][loaded[\"features\"]]\n    proba = float(loaded[\"pipeline\"].predict_proba(row)[0, 1])\n    verdict = \"Fraud\" if proba >= loaded[\"threshold\"] else \"Legitimate\"\n    print(f\"{label}: probability={proba:.3f} -> {verdict}\")",
     "output": "fraud row: probability=0.998 -> Fraud\nlegit row: probability=0.000 -> Legitimate"
    },
    {
     "type": "callout",
     "tone": "warn",
     "text": "A `.joblib` file only loads safely with the **same scikit-learn version** that saved it. Write the version in `requirements.txt`. Also: only load joblib files you created yourself, since they can run code."
    }
   ]
  },
  {
   "id": "files",
   "icon": "📁",
   "title": "Step 9: Finish the project folder",
   "blocks": [
    {
     "type": "p",
     "text": "Your folder promised more than a notebook. Even short versions of these files make the project reusable."
    },
    {
     "type": "table",
     "head": [
      "File",
      "What goes in it"
     ],
     "rows": [
      [
       "`reports/evaluation.txt`",
       "Chosen threshold, test precision, recall, F1"
      ],
      [
       "`requirements.txt`",
       "scikit-learn, pandas, numpy, joblib with versions"
      ],
      [
       "`src/train.py`",
       "The whole workflow as a script: load, split, fit, pick threshold, save"
      ],
      [
       "`README.md`",
       "Problem, dataset, how to run, results, limits"
      ]
     ]
    },
    {
     "type": "callout",
     "tone": "tip",
     "text": "Next lesson idea: load the saved file in a small API. Today's habit is the important part: **one script that reproduces the model from raw data**."
    }
   ]
  }
 ],
 "finalProgram": {
  "title": "Fraud Detection Project V1 (end to end)",
  "file": "fraud_project_v1.py",
  "description": "One script that goes from raw transactions to a saved, threshold-aware fraud model and an honest test report.",
  "concepts": [
   "stratified 3-way split",
   "Pipeline",
   "class_weight",
   "validation threshold",
   "joblib artifact"
  ],
  "code": "import numpy as np\nimport pandas as pd\n\ndef make_fraud_data(n=20000, fraud_rate=0.02, seed=21):\n    rng = np.random.RandomState(seed)\n    is_fraud = rng.rand(n) < fraud_rate\n    X = rng.normal(size=(n, 10))\n    X[is_fraud, 0] -= 2.0\n    X[is_fraud, 2] -= 1.5\n    X[is_fraud, 3] += 1.8\n    X[is_fraud, 6] -= 1.2\n    amount = np.round(np.exp(rng.normal(3.5, 1.1, n) + 0.6 * is_fraud), 2)\n    df = pd.DataFrame(X, columns=[f\"V{i}\" for i in range(1, 11)])\n    df.insert(0, \"Time\", rng.randint(0, 172800, n))\n    df[\"Amount\"] = amount\n    df[\"Class\"] = is_fraud.astype(int)\n    return df\n\nimport os, joblib\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import precision_score, recall_score, f1_score\n\ndef pick_threshold(y_true, proba, min_recall=0.80):\n    best_t, best_p = None, -1.0\n    for t in np.round(np.arange(0.05, 1.0, 0.01), 2):\n        pred = (proba >= t).astype(int)\n        if recall_score(y_true, pred, zero_division=0) >= min_recall:\n            prec = precision_score(y_true, pred, zero_division=0)\n            if prec >= best_p:\n                best_t, best_p = float(t), prec\n    return best_t\n\ndf = make_fraud_data()\nX, y = df.drop(\"Class\", axis=1), df[\"Class\"]\nX_tf, X_test, y_tf, y_test = train_test_split(X, y, test_size=0.20, random_state=42, stratify=y)\nX_train, X_val, y_train, y_val = train_test_split(X_tf, y_tf, test_size=0.20, random_state=42, stratify=y_tf)\n\npipe = Pipeline([(\"scaler\", StandardScaler()),\n                 (\"model\", LogisticRegression(class_weight=\"balanced\", max_iter=1000, random_state=42))])\npipe.fit(X_train, y_train)\n\nthreshold = pick_threshold(y_val, pipe.predict_proba(X_val)[:, 1])\ntest_pred = (pipe.predict_proba(X_test)[:, 1] >= threshold).astype(int)\nreport = {\n    \"threshold\": threshold,\n    \"precision\": round(precision_score(y_test, test_pred, zero_division=0), 3),\n    \"recall\": round(recall_score(y_test, test_pred, zero_division=0), 3),\n    \"f1\": round(f1_score(y_test, test_pred, zero_division=0), 3),\n}\nos.makedirs(\"models\", exist_ok=True)\njoblib.dump({\"pipeline\": pipe, \"threshold\": threshold, \"features\": list(X.columns)}, \"models/fraud_v1.joblib\")\nsaved = joblib.load(\"models/fraud_v1.joblib\")\nsame = (saved[\"pipeline\"].predict_proba(X_test) == pipe.predict_proba(X_test)).all()\n\nprint(\"Test report:\", report)\nprint(\"Reloaded model gives identical probabilities:\", bool(same))",
  "output": "Test report: {'threshold': 0.91, 'precision': 0.633, 'recall': 0.841, 'f1': 0.723}\nReloaded model gives identical probabilities: True"
 },
 "practice": [
  {
   "title": "Accuracy Trap Checker",
   "level": "Easy",
   "file": "practice1_accuracy_trap.py",
   "description": "Prove that accuracy hides fraud, then measure real fraud recall.",
   "tasks": [
    "Split 80/20 with stratify",
    "Print the always-0 accuracy",
    "Train the balanced pipeline",
    "Print accuracy and fraud recall at 0.5"
   ],
   "hint": "Always-0 accuracy is 1 minus the fraud share of y_test. Use recall_score(y_test, pred).",
   "starter": "import numpy as np\nimport pandas as pd\n\ndef make_fraud_data(n=20000, fraud_rate=0.03, seed=7):\n    rng = np.random.RandomState(seed)\n    is_fraud = rng.rand(n) < fraud_rate\n    X = rng.normal(size=(n, 10))\n    X[is_fraud, 0] -= 2.0\n    X[is_fraud, 2] -= 1.5\n    X[is_fraud, 3] += 1.8\n    X[is_fraud, 6] -= 1.2\n    amount = np.round(np.exp(rng.normal(3.5, 1.1, n) + 0.6 * is_fraud), 2)\n    df = pd.DataFrame(X, columns=[f\"V{i}\" for i in range(1, 11)])\n    df.insert(0, \"Time\", rng.randint(0, 172800, n))\n    df[\"Amount\"] = amount\n    df[\"Class\"] = is_fraud.astype(int)\n    return df\n\ndf = make_fraud_data()\nX = df.drop(\"Class\", axis=1)\ny = df[\"Class\"]\n\n# TODO 1: stratified 80/20 split (random_state=42)\n\n# TODO 2: print the accuracy of always predicting 0 on the test set (4 decimals)\n\n# TODO 3: Pipeline(StandardScaler + LogisticRegression with class_weight=\"balanced\"), fit on train\n\n# TODO 4: print the model's accuracy and fraud recall at the default 0.5 (4 decimals)",
   "solution": "import numpy as np\nimport pandas as pd\n\ndef make_fraud_data(n=20000, fraud_rate=0.03, seed=7):\n    rng = np.random.RandomState(seed)\n    is_fraud = rng.rand(n) < fraud_rate\n    X = rng.normal(size=(n, 10))\n    X[is_fraud, 0] -= 2.0\n    X[is_fraud, 2] -= 1.5\n    X[is_fraud, 3] += 1.8\n    X[is_fraud, 6] -= 1.2\n    amount = np.round(np.exp(rng.normal(3.5, 1.1, n) + 0.6 * is_fraud), 2)\n    df = pd.DataFrame(X, columns=[f\"V{i}\" for i in range(1, 11)])\n    df.insert(0, \"Time\", rng.randint(0, 172800, n))\n    df[\"Amount\"] = amount\n    df[\"Class\"] = is_fraud.astype(int)\n    return df\n\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score, recall_score\n\ndf = make_fraud_data()\nX = df.drop(\"Class\", axis=1)\ny = df[\"Class\"]\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.20, random_state=42, stratify=y)\n\nprint(\"Always-0 accuracy:\", round(1 - y_test.mean(), 4))\n\npipe = Pipeline([(\"scaler\", StandardScaler()),\n                 (\"model\", LogisticRegression(class_weight=\"balanced\", max_iter=1000, random_state=42))])\npipe.fit(X_train, y_train)\n\npred = pipe.predict(X_test)\nprint(\"Model accuracy:\", round(accuracy_score(y_test, pred), 4))\nprint(\"Model fraud recall:\", round(recall_score(y_test, pred), 4))",
   "output": "Always-0 accuracy: 0.97\nModel accuracy: 0.951\nModel fraud recall: 0.9333"
  },
  {
   "title": "Pick the F1 Threshold",
   "level": "Medium",
   "file": "practice2_f1_threshold.py",
   "description": "Choose a threshold with a different business rule, test it once, and save the artifact.",
   "tasks": [
    "Two-step 64/16/20 split",
    "Fit the pipeline on train",
    "Scan thresholds on validation for best F1",
    "Report test metrics once",
    "Save and reload with joblib in memory"
   ],
   "hint": "Keep best_t when f1 >= best_f1 so ties go to the higher threshold. io.BytesIO needs seek(0) before loading.",
   "starter": "import numpy as np\nimport pandas as pd\n\ndef make_fraud_data(n=20000, fraud_rate=0.025, seed=11):\n    rng = np.random.RandomState(seed)\n    is_fraud = rng.rand(n) < fraud_rate\n    X = rng.normal(size=(n, 10))\n    X[is_fraud, 0] -= 2.0\n    X[is_fraud, 2] -= 1.5\n    X[is_fraud, 3] += 1.8\n    X[is_fraud, 6] -= 1.2\n    amount = np.round(np.exp(rng.normal(3.5, 1.1, n) + 0.6 * is_fraud), 2)\n    df = pd.DataFrame(X, columns=[f\"V{i}\" for i in range(1, 11)])\n    df.insert(0, \"Time\", rng.randint(0, 172800, n))\n    df[\"Amount\"] = amount\n    df[\"Class\"] = is_fraud.astype(int)\n    return df\n\ndf = make_fraud_data()\nX = df.drop(\"Class\", axis=1)\ny = df[\"Class\"]\n\n# TODO 1: 64/16/20 stratified split (random_state=42), same two-step method as the lesson\n\n# TODO 2: Pipeline (StandardScaler + balanced LogisticRegression), fit on train only\n\n# TODO 3: on validation, scan thresholds 0.05..0.99 (step 0.01, rounded) and pick the one\n#         with the highest F1 (on ties, take the higher threshold)\n\n# TODO 4: apply it to the test set and print threshold, precision, recall, F1 (3 decimals)\n\n# TODO 5: save {\"pipeline\", \"threshold\"} to an io.BytesIO with joblib, reload it,\n#         and print whether test predictions are identical",
   "solution": "import numpy as np\nimport pandas as pd\n\ndef make_fraud_data(n=20000, fraud_rate=0.025, seed=11):\n    rng = np.random.RandomState(seed)\n    is_fraud = rng.rand(n) < fraud_rate\n    X = rng.normal(size=(n, 10))\n    X[is_fraud, 0] -= 2.0\n    X[is_fraud, 2] -= 1.5\n    X[is_fraud, 3] += 1.8\n    X[is_fraud, 6] -= 1.2\n    amount = np.round(np.exp(rng.normal(3.5, 1.1, n) + 0.6 * is_fraud), 2)\n    df = pd.DataFrame(X, columns=[f\"V{i}\" for i in range(1, 11)])\n    df.insert(0, \"Time\", rng.randint(0, 172800, n))\n    df[\"Amount\"] = amount\n    df[\"Class\"] = is_fraud.astype(int)\n    return df\n\nimport io, joblib\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import precision_score, recall_score, f1_score\n\ndf = make_fraud_data()\nX = df.drop(\"Class\", axis=1)\ny = df[\"Class\"]\n\nX_tf, X_test, y_tf, y_test = train_test_split(X, y, test_size=0.20, random_state=42, stratify=y)\nX_train, X_val, y_train, y_val = train_test_split(X_tf, y_tf, test_size=0.20, random_state=42, stratify=y_tf)\n\npipe = Pipeline([(\"scaler\", StandardScaler()),\n                 (\"model\", LogisticRegression(class_weight=\"balanced\", max_iter=1000, random_state=42))])\npipe.fit(X_train, y_train)\n\nval_proba = pipe.predict_proba(X_val)[:, 1]\nbest_t, best_f1 = None, -1.0\nfor t in np.round(np.arange(0.05, 1.0, 0.01), 2):\n    f1 = f1_score(y_val, (val_proba >= t).astype(int), zero_division=0)\n    if f1 >= best_f1:\n        best_t, best_f1 = float(t), f1\n\ntest_pred = (pipe.predict_proba(X_test)[:, 1] >= best_t).astype(int)\nprint(\"Threshold:\", best_t)\nprint(\"Test precision:\", round(precision_score(y_test, test_pred, zero_division=0), 3))\nprint(\"Test recall:\", round(recall_score(y_test, test_pred, zero_division=0), 3))\nprint(\"Test F1:\", round(f1_score(y_test, test_pred, zero_division=0), 3))\n\nbuf = io.BytesIO()\njoblib.dump({\"pipeline\": pipe, \"threshold\": best_t}, buf)\nbuf.seek(0)\nsaved = joblib.load(buf)\nagain = (saved[\"pipeline\"].predict_proba(X_test)[:, 1] >= saved[\"threshold\"]).astype(int)\nprint(\"Reloaded predictions identical:\", bool((again == test_pred).all()))",
   "output": "Threshold: 0.98\nTest precision: 0.849\nTest recall: 0.723\nTest F1: 0.781\nReloaded predictions identical: True",
   "note": "Different rules give different thresholds. F1 treats precision and recall equally; the lesson's rule protected recall first."
  }
 ],
 "checklist": [
  "I can list the 8 stages of an ML project",
  "I explain why accuracy fails on imbalanced data",
  "I split data three ways with stratify",
  "I fit the scaler on training data only via a Pipeline",
  "I choose a threshold on validation, not test",
  "I evaluate on the test set once",
  "I save pipeline, threshold and features together"
 ],
 "quiz": [
  {
   "q": "Why do we need a separate validation set?",
   "options": [
    "To make training faster",
    "To choose the threshold without touching the test set",
    "To increase the fraud rate",
    "To avoid scaling"
   ],
   "answer": 1,
   "why": "Validation guides decisions; the test set stays an honest final exam."
  },
  {
   "q": "A model predicts every transaction as legitimate with 98% accuracy. What is its fraud recall?",
   "options": [
    "98%",
    "50%",
    "0%",
    "Cannot be known"
   ],
   "answer": 2,
   "why": "It catches no fraud, so recall is 0 even though accuracy looks great."
  },
  {
   "q": "What does lowering the threshold usually do?",
   "options": [
    "Raises recall, lowers precision",
    "Raises precision, lowers recall",
    "Changes nothing",
    "Removes false negatives and false positives"
   ],
   "answer": 0,
   "why": "More transactions are flagged: more fraud caught, but more false alarms."
  },
 ]
},

// DAY 22 snippet. In course-data.js: after the previous day's closing }, paste this object (keep the comma). No images needed for this day.
{
  "day": 22,
  "title": "Model Saving, Loading & Making Predictions",
  "subtitle": "Practical ML engineering: load a saved fraud model with Joblib and predict on new transactions without retraining.",
  "level": "Intermediate",
  "duration": "60-90 min",
  "tags": [
    "Joblib",
    "Model Persistence",
    "Inference",
    "Model Artifact",
    "Versioning"
  ],
  "goals": [
    "Load a saved model artifact without retraining",
    "Understand the difference between training and inference",
    "Use the saved threshold and feature list for predictions",
    "Validate new data before predicting"
  ],
  "sections": [
    {
      "id": "workflow",
      "icon": "🧠",
      "title": "Step 1: Understand the Workflow",
      "meta": "Train once, predict many times",
      "blocks": [
        {
          "type": "p",
          "text": "Yesterday you trained a Credit Card Fraud Detection model and saved it as models/fraud_detection_v1.joblib. Today you use that saved model without training it again."
        },
        {
          "type": "table",
          "head": [
            "Day",
            "What happens",
            "Result"
          ],
          "rows": [
            [
              "Day 21 - Train",
              "Learn patterns from historical data, then save the model with Joblib",
              "fraud_detection_v1.joblib"
            ],
            [
              "Day 22 - Load",
              "Load the saved model (no retraining) and predict on new transactions",
              "Fraud or legitimate"
            ]
          ]
        },
        {
          "type": "p",
          "text": "Think of a real application: training is expensive and happens occasionally. The trained model is saved. An application loads it, new data comes in, and the model predicts the result."
        }
      ]
    },
    {
      "id": "concepts",
      "icon": "📚",
      "title": "Step 2: Important Concepts",
      "meta": "Persistence and inference",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Concept",
            "Meaning"
          ],
          "rows": [
            [
              "Model persistence",
              "Saving a trained model"
            ],
            [
              "Joblib",
              "Python library for saving/loading objects"
            ],
            [
              "Inference",
              "Using a trained model to make predictions"
            ],
            [
              "Model artifact",
              "Saved model plus required configuration"
            ],
            [
              "Versioning",
              "Keeping track of model versions"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "fit() trains the model. predict() uses the trained model. You do not need fit() every time you want a prediction."
        }
      ]
    },
    {
      "id": "structure",
      "icon": "🗂️",
      "title": "Step 3: Project Structure",
      "meta": "Create src/predict.py",
      "blocks": [
        {
          "type": "code",
          "lang": "text",
          "title": "Fraud_Detection_Project",
          "code": "Fraud_Detection_Project/\n|\n|-- models/\n|   `-- fraud_detection_v1.joblib\n|\n|-- src/\n|   |-- train.py\n|   `-- predict.py       <- CREATE THIS\n|\n|-- reports/\n|   `-- evaluation.txt\n|\n`-- requirements.txt"
        },
        {
          "type": "p",
          "text": "We create a separate prediction script, src/predict.py, that loads your Day 21 model."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "No Day 21 model yet, or want to follow along with a safe demo? Run the setup script below once from the project root (python src/train.py). It trains a small synthetic model and saves the artifact with the pipeline, the 0.95 threshold and the feature list, plus data/new_transactions.csv for practice. The numbers in this lesson come from that demo model, so your own results will differ."
        }
      ]
    },
    {
      "id": "setup",
      "icon": "🛠️",
      "title": "Step 4: Demo Model Setup (optional)",
      "meta": "Skip if you have your Day 21 model",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "src/train.py",
          "code": "import os\nimport numpy as np\nimport pandas as pd\nimport joblib\nfrom sklearn.datasets import make_classification\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import precision_score, recall_score\n\nPROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))\n\n# Synthetic fraud data (stand-in for your real dataset)\nX_raw, y_raw = make_classification(\n    n_samples=30000, n_features=10, n_informative=6, n_redundant=0,\n    weights=[0.99, 0.01], class_sep=0.8, flip_y=0, random_state=42\n)\ndf = pd.DataFrame(X_raw, columns=[f\"V{i}\" for i in range(1, 11)])\nrng = np.random.RandomState(42)\ndf[\"Time\"] = rng.randint(0, 172800, len(df)).astype(float)\ndf[\"Amount\"] = rng.lognormal(mean=3.5, sigma=1.0, size=len(df)).round(2)\ndf[\"Class\"] = y_raw\n\nfeatures = [c for c in df.columns if c != \"Class\"]\nX_train, X_test, y_train, y_test = train_test_split(\n    df[features], df[\"Class\"], test_size=0.20, random_state=42, stratify=df[\"Class\"]\n)\n\npipeline = Pipeline([\n    (\"scaler\", StandardScaler()),\n    (\"model\", LogisticRegression(class_weight=\"balanced\", max_iter=1000, random_state=42))\n])\npipeline.fit(X_train, y_train)\n\nthreshold = 0.95\nproba = pipeline.predict_proba(X_test)[:, 1]\npred = (proba >= threshold).astype(int)\nprint(f\"Test precision at {threshold:.0%}: {precision_score(y_test, pred, zero_division=0):.3f}\")\nprint(f\"Test recall at {threshold:.0%}: {recall_score(y_test, pred):.3f}\")\n\nartifact = {\"pipeline\": pipeline, \"threshold\": threshold, \"features\": features}\nmodel_path = os.path.join(PROJECT_ROOT, \"models\", \"fraud_detection_v1.joblib\")\njoblib.dump(artifact, model_path)\nprint(\"Model saved to:\", os.path.relpath(model_path, PROJECT_ROOT))\n\n# A few unseen transactions to practice inference on\nnew_tx = pd.concat([X_test[y_test == 1].head(3), X_test[y_test == 0].head(3)])\nnew_tx = new_tx.assign(Class=pd.concat([y_test[y_test == 1].head(3), y_test[y_test == 0].head(3)]))\nnew_tx.round(4).to_csv(os.path.join(PROJECT_ROOT, \"data\", \"new_transactions.csv\"), index=False)\nprint(\"Sample transactions saved to: data/new_transactions.csv\")",
          "output": "Test precision at 95%: 0.323\nTest recall at 95%: 0.167\nModel saved to: models/fraud_detection_v1.joblib\nSample transactions saved to: data/new_transactions.csv"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "The 0.95 threshold is illustrative. On this demo it catches few frauds (recall 0.167). Your real threshold comes from your own validation work."
        }
      ]
    },
    {
      "id": "predict",
      "icon": "🔥",
      "title": "Step 5: Write predict.py",
      "meta": "Most important step",
      "blocks": [
        {
          "type": "p",
          "text": "Create src/predict.py and paste this code. It loads the artifact, builds one transaction, predicts a probability and compares it with the saved threshold."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "src/predict.py",
          "code": "import os\nimport joblib\nimport pandas as pd\n\n# 1. Locate the project root and the saved model\nPROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))\n\nMODEL_PATH = os.path.join(\n    PROJECT_ROOT,\n    \"models\",\n    \"fraud_detection_v1.joblib\"\n)\n\n# 2. Load the saved model artifact\nprint(\"Loading saved model...\")\nartifact = joblib.load(MODEL_PATH)\n\npipeline = artifact[\"pipeline\"]\nthreshold = artifact[\"threshold\"]\nfeatures = artifact[\"features\"]\n\nprint(\"Model loaded successfully!\")\nprint(\"Model threshold:\", threshold)\n\n# 3. Create sample transaction data\n# Values here are illustrative, not real transaction records.\nsample_data = {\n    feature: [0.0] for feature in features\n}\n\nsample_data[\"Amount\"] = [100.0]\nsample_data[\"Time\"] = [10000.0]\n\nnew_transaction = pd.DataFrame(sample_data)\n\n# Ensure correct feature order\nnew_transaction = new_transaction[features]\n\n# 4. Make prediction\nfraud_probability = pipeline.predict_proba(\n    new_transaction\n)[0, 1]\n\nprediction = int(\n    fraud_probability >= threshold\n)\n\n# 5. Display result\nprint(\"\\nTRANSACTION ANALYSIS\")\nprint(\"--------------------\")\nprint(\n    f\"Fraud Probability: {fraud_probability:.4%}\"\n)\nprint(\n    f\"Decision Threshold: {threshold:.2%}\"\n)\n\nif prediction == 1:\n    print(\"RESULT: FRAUD DETECTED\")\nelse:\n    print(\"RESULT: LEGITIMATE TRANSACTION\")"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "This sample uses zero-filled illustrative feature values. It demonstrates the inference workflow, not a realistic fraud prediction. In a real application the input must contain correctly prepared transaction features."
        }
      ]
    },
    {
      "id": "run",
      "icon": "▶️",
      "title": "Step 6: Run the Project",
      "meta": "From the project root",
      "blocks": [
        {
          "type": "p",
          "text": "Open your VS Code terminal in the project root and run:"
        },
        {
          "type": "code",
          "lang": "bash",
          "title": "Terminal",
          "code": "python src/predict.py",
          "output": "Loading saved model...\nModel loaded successfully!\nModel threshold: 0.95\n\nTRANSACTION ANALYSIS\n--------------------\nFraud Probability: 36.6589%\nDecision Threshold: 95.00%\nRESULT: LEGITIMATE TRANSACTION"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Your actual probability and result may differ if you change the sample values. The probability is 36.66%, below the 95% threshold, so the decision is LEGITIMATE."
        }
      ]
    },
    {
      "id": "inspect",
      "icon": "🔎",
      "title": "Step 7: Inspect the Model Artifact",
      "meta": "What is inside the file",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "src/inspect_model.py",
          "code": "import os\nimport joblib\n\nPROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))\nMODEL_PATH = os.path.join(PROJECT_ROOT, \"models\", \"fraud_detection_v1.joblib\")\n\nartifact = joblib.load(MODEL_PATH)\n\nprint(\"Artifact keys:\", list(artifact.keys()))\nprint(\"Pipeline steps:\", [name for name, _ in artifact[\"pipeline\"].steps])\nprint(\"Threshold:\", artifact[\"threshold\"])\nprint(\"Number of features:\", len(artifact[\"features\"]))\nprint(\"Features:\", artifact[\"features\"])\nprint(\"File size:\", round(os.path.getsize(MODEL_PATH) / 1024, 1), \"KB\")",
          "output": "Artifact keys: ['pipeline', 'threshold', 'features']\nPipeline steps: ['scaler', 'model']\nThreshold: 0.95\nNumber of features: 12\nFeatures: ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'Time', 'Amount']\nFile size: 2.1 KB"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The artifact is a dictionary: the pipeline (scaler + model), the threshold and the feature list. Saving the threshold and features with the model means the application never has to guess them."
        }
      ]
    },
    {
      "id": "features",
      "icon": "⚠️",
      "title": "Step 8: Same Feature Names and Order",
      "meta": "Avoid silent mistakes",
      "blocks": [
        {
          "type": "code",
          "lang": "python",
          "title": "src/feature_check.py",
          "code": "import os\nimport joblib\nimport pandas as pd\n\nPROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))\nartifact = joblib.load(os.path.join(PROJECT_ROOT, \"models\", \"fraud_detection_v1.joblib\"))\npipeline = artifact[\"pipeline\"]\nfeatures = artifact[\"features\"]\n\nrow = pd.read_csv(os.path.join(PROJECT_ROOT, \"data\", \"new_transactions.csv\")).head(1)[features]\nshuffled = row[list(reversed(features))]   # same values, wrong column order\n\nprint(\"Correct order            ->\", round(pipeline.predict_proba(row)[0, 1], 4))\nprint(\"Reordered by name        ->\", round(pipeline.predict_proba(shuffled[features])[0, 1], 4))\nprint(\"Wrong order, raw values  ->\", round(pipeline.predict_proba(shuffled.values)[0, 1], 4), \"(silently wrong!)\")\n\ntry:\n    pipeline.predict_proba(shuffled)\nexcept ValueError:\n    print(\"Wrong order, DataFrame   -> ValueError\")\n\ntry:\n    pipeline.predict_proba(row.drop(columns=[\"Amount\"]))\nexcept ValueError:\n    print(\"Missing 'Amount'         -> ValueError\")\n\ntry:\n    pipeline.predict_proba(row.rename(columns={\"Amount\": \"amount\"}))\nexcept ValueError:\n    print(\"Renamed column           -> ValueError\")",
          "output": "Correct order            -> 0.5235\nReordered by name        -> 0.5235\nWrong order, raw values  -> 1.0 (silently wrong!)\nWrong order, DataFrame   -> ValueError\nMissing 'Amount'         -> ValueError\nRenamed column           -> ValueError"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "With raw values in the wrong order, the model returned 1.0 without any error. A DataFrame with the wrong order, a missing column or a renamed column raises a ValueError. Always select new_transaction[features] before predicting."
        }
      ]
    },
    {
      "id": "batch",
      "icon": "📦",
      "title": "Step 9: Predict a Batch",
      "meta": "Real application style",
      "blocks": [
        {
          "type": "p",
          "text": "An application usually scores many transactions at once. This script loads data/new_transactions.csv (3 actual frauds and 3 legitimate transactions) and applies the saved threshold."
        },
        {
          "type": "code",
          "lang": "python",
          "title": "src/predict_batch.py",
          "code": "import os\nimport joblib\nimport pandas as pd\n\nPROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))\n\nartifact = joblib.load(os.path.join(PROJECT_ROOT, \"models\", \"fraud_detection_v1.joblib\"))\npipeline = artifact[\"pipeline\"]\nthreshold = artifact[\"threshold\"]\nfeatures = artifact[\"features\"]\n\ntransactions = pd.read_csv(os.path.join(PROJECT_ROOT, \"data\", \"new_transactions.csv\"))\nX_new = transactions[features]\n\nprobabilities = pipeline.predict_proba(X_new)[:, 1]\n\nreport = pd.DataFrame({\n    \"Amount\": transactions[\"Amount\"],\n    \"Fraud Probability\": probabilities.round(4),\n    \"Decision\": [\"FRAUD\" if p >= threshold else \"LEGITIMATE\" for p in probabilities],\n    \"Actual\": transactions[\"Class\"].map({0: \"LEGITIMATE\", 1: \"FRAUD\"})\n})\n\nprint(f\"Threshold: {threshold:.0%}\\n\")\nprint(report.to_string(index=False))\n\nprint(\"\\nSame probabilities, different thresholds:\")\nfor t in [0.50, 0.80, 0.95]:\n    flagged = int((probabilities >= t).sum())\n    print(f\"  threshold {t:.0%}: {flagged} of {len(probabilities)} flagged as fraud\")",
          "output": "Threshold: 95%\n\n Amount  Fraud Probability   Decision     Actual\n 257.16             0.5235 LEGITIMATE      FRAUD\n  31.71             0.9922      FRAUD      FRAUD\n  26.88             0.5109 LEGITIMATE      FRAUD\n  65.18             0.0671 LEGITIMATE LEGITIMATE\n 287.45             0.3721 LEGITIMATE LEGITIMATE\n  10.45             0.3306 LEGITIMATE LEGITIMATE\n\nSame probabilities, different thresholds:\n  threshold 50%: 3 of 6 flagged as fraud\n  threshold 80%: 1 of 6 flagged as fraud\n  threshold 95%: 1 of 6 flagged as fraud"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "At the saved threshold of 95% only 1 of the 3 actual frauds is flagged. Two have probabilities near 0.51 and 0.52. Lowering the threshold flags more transactions: 3 of 6 at 50%, 1 of 6 at 80% and at 95%."
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "A lower threshold catches more fraud but creates more false alarms. That is why the threshold is saved with the model and chosen carefully."
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🏁",
      "title": "Mini Project: Fraud Inference Module",
      "blocks": [
        {
          "type": "p",
          "text": "The Final Program below wraps loading, validation and scoring in small reusable functions, scores the sample transactions, rejects bad input and never retrains the model."
        }
      ]
    },
    {
      "id": "understand",
      "icon": "🎓",
      "title": "What You Should Understand Today",
      "blocks": [
        {
          "type": "list",
          "items": [
            "Why do we save a trained ML model? Training is expensive and occasional, so we save the result and reuse it.",
            "Training vs inference? Training (fit) learns from historical data. Inference (predict) applies the learned model to new data.",
            "Why save the threshold with the model? The decision rule is part of the model, so every application uses the same one.",
            "Why the same feature names and order? The model learned from specific columns. Different names or order cause errors or silently wrong predictions.",
            "Why avoid retraining at every startup? It is slow and costly, and it can change the model's behavior without review."
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "Fraud Inference Module",
    "file": "src/predict_final.py",
    "description": "One program combining Day 22: loading the saved artifact, validating input features, scoring a batch of transactions with the saved threshold, rejecting bad input and reporting results, all without retraining.",
    "concepts": [
      "Joblib",
      "model artifact",
      "inference",
      "saved threshold",
      "feature validation",
      "batch prediction"
    ],
    "code": "import os\nimport joblib\nimport pandas as pd\n\nPROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))\nMODEL_PATH = os.path.join(PROJECT_ROOT, \"models\", \"fraud_detection_v1.joblib\")\nDATA_PATH = os.path.join(PROJECT_ROOT, \"data\", \"new_transactions.csv\")\n\n\ndef load_artifact(path=MODEL_PATH):\n    \"\"\"Load the saved model artifact (no retraining).\"\"\"\n    if not os.path.exists(path):\n        raise FileNotFoundError(f\"Model not found: {path}. Run src/train.py first.\")\n    artifact = joblib.load(path)\n    for key in (\"pipeline\", \"threshold\", \"features\"):\n        if key not in artifact:\n            raise KeyError(f\"Artifact is missing '{key}'\")\n    return artifact\n\n\ndef prepare_features(df, features):\n    \"\"\"Check the columns and return them in training order.\"\"\"\n    missing = [f for f in features if f not in df.columns]\n    if missing:\n        raise ValueError(f\"Missing required features: {missing}\")\n    return df[features]\n\n\ndef score_transactions(df, artifact):\n    \"\"\"Return fraud probability and decision for every transaction.\"\"\"\n    X_new = prepare_features(df, artifact[\"features\"])\n    proba = artifact[\"pipeline\"].predict_proba(X_new)[:, 1]\n    result = pd.DataFrame({\n        \"Fraud Probability\": proba.round(4),\n        \"Decision\": [\"FRAUD\" if p >= artifact[\"threshold\"] else \"LEGITIMATE\" for p in proba]\n    }, index=df.index)\n    return result\n\n\nprint(\"=== FRAUD DETECTION: INFERENCE ===\")\nartifact = load_artifact()\nprint(\"Model loaded | threshold:\", artifact[\"threshold\"],\n      \"| features:\", len(artifact[\"features\"]))\n\ntransactions = pd.read_csv(DATA_PATH)\nresults = score_transactions(transactions, artifact)\nresults.insert(0, \"Amount\", transactions[\"Amount\"])\nresults[\"Actual\"] = transactions[\"Class\"].map({0: \"LEGITIMATE\", 1: \"FRAUD\"})\n\nprint(\"\\nScored\", len(results), \"transactions without retraining:\")\nprint(results.to_string(index=False))\n\nflagged = int((results[\"Decision\"] == \"FRAUD\").sum())\ncaught = int(((results[\"Decision\"] == \"FRAUD\") & (results[\"Actual\"] == \"FRAUD\")).sum())\nactual_fraud = int((results[\"Actual\"] == \"FRAUD\").sum())\nprint(f\"\\nFlagged: {flagged} | Fraud caught: {caught} of {actual_fraud}\")\n\nprint(\"\\nValidation check:\")\ntry:\n    score_transactions(transactions.drop(columns=[\"Amount\"]), artifact)\nexcept ValueError as e:\n    print(\"  Rejected bad input ->\", e)\n\nprint(\"\\nThe model was loaded, never retrained.\")",
    "output": "=== FRAUD DETECTION: INFERENCE ===\nModel loaded | threshold: 0.95 | features: 12\n\nScored 6 transactions without retraining:\n Amount  Fraud Probability   Decision     Actual\n 257.16             0.5235 LEGITIMATE      FRAUD\n  31.71             0.9922      FRAUD      FRAUD\n  26.88             0.5109 LEGITIMATE      FRAUD\n  65.18             0.0671 LEGITIMATE LEGITIMATE\n 287.45             0.3721 LEGITIMATE LEGITIMATE\n  10.45             0.3306 LEGITIMATE LEGITIMATE\n\nFlagged: 1 | Fraud caught: 1 of 3\n\nValidation check:\n  Rejected bad input -> Missing required features: ['Amount']\n\nThe model was loaded, never retrained."
  },
  "practice": [
    {
      "title": "Predict Your Own Transaction",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Load the saved artifact and score a transaction you build yourself.",
      "tasks": [
        "Pull pipeline, threshold and features out of the artifact",
        "Build a transaction dictionary with every feature set to 0.0",
        "Set Amount = 5000, Time = 50000, V1 = 2.0 and V2 = -1.5",
        "Create a one-row DataFrame and keep the training column order",
        "Print the fraud probability as a percentage",
        "Print FRAUD or LEGITIMATE for the saved threshold and for a threshold of 0.50"
      ],
      "hint": "pd.DataFrame(transaction)[features] keeps the training order. Use pipeline.predict_proba(...)[0, 1] for the fraud probability.",
      "starter": "import os\nimport joblib\nimport pandas as pd\n\nPROJECT_ROOT = os.getcwd()   # run this file from the project root\nartifact = joblib.load(os.path.join(PROJECT_ROOT, \"models\", \"fraud_detection_v1.joblib\"))\n\n# TODO 1: pull pipeline, threshold and features out of the artifact\n# TODO 2: build a transaction dict with every feature set to 0.0\n# TODO 3: set Amount = 5000, Time = 50000, V1 = 2.0, V2 = -1.5\n# TODO 4: make a one-row DataFrame and keep the training column order\n# TODO 5: print the fraud probability as a percentage\n# TODO 6: print FRAUD or LEGITIMATE for the saved threshold and for a threshold of 0.50",
      "solution": "import os\nimport joblib\nimport pandas as pd\n\nPROJECT_ROOT = os.getcwd()\nartifact = joblib.load(os.path.join(PROJECT_ROOT, \"models\", \"fraud_detection_v1.joblib\"))\n\npipeline = artifact[\"pipeline\"]\nthreshold = artifact[\"threshold\"]\nfeatures = artifact[\"features\"]\n\ntransaction = {feature: [0.0] for feature in features}\ntransaction[\"Amount\"] = [5000.0]\ntransaction[\"Time\"] = [50000.0]\ntransaction[\"V1\"] = [2.0]\ntransaction[\"V2\"] = [-1.5]\n\nnew_transaction = pd.DataFrame(transaction)[features]\n\nprobability = pipeline.predict_proba(new_transaction)[0, 1]\nprint(f\"Fraud probability: {probability:.2%}\")\n\nfor t in [threshold, 0.50]:\n    decision = \"FRAUD\" if probability >= t else \"LEGITIMATE\"\n    print(f\"Threshold {t:.0%}: {decision}\")",
      "output": "Fraud probability: 12.56%\nThreshold 95%: LEGITIMATE\nThreshold 50%: LEGITIMATE",
      "note": "Both thresholds give LEGITIMATE here because the probability (12.56%) is below 50%. Try other values to see where the decision flips."
    },
    {
      "title": "Input Validation Before Prediction",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Write a validation function and use it to accept or reject incoming batches.",
      "tasks": [
        "Write check_features(df, features) that raises ValueError for missing columns and returns the extra columns",
        "Load data/new_transactions.csv and build 3 batches: complete (drop Class), missing Amount, renamed Time",
        "Call check_features for each batch inside try/except and print OK or REJECTED",
        "For the complete batch, print how many transactions are flagged at thresholds 0.50 and 0.95"
      ],
      "hint": "missing = [f for f in features if f not in df.columns]. Select df[features] before predict_proba.",
      "starter": "import os\nimport joblib\nimport pandas as pd\n\nPROJECT_ROOT = os.getcwd()   # run this file from the project root\nartifact = joblib.load(os.path.join(PROJECT_ROOT, \"models\", \"fraud_detection_v1.joblib\"))\npipeline = artifact[\"pipeline\"]\nfeatures = artifact[\"features\"]\n\n# TODO 1: write check_features(df, features): raise ValueError listing missing columns,\n#         and return the list of extra columns\n# TODO 2: load data/new_transactions.csv and build 3 batches:\n#         \"complete\" (drop Class), \"missing Amount\", \"renamed Time\" (rename Time to time)\n# TODO 3: for each batch, call check_features inside try/except\n#         print OK with the number of rows scored, or REJECTED with the message\n# TODO 4: for the complete batch print how many transactions are flagged at thresholds 0.50 and 0.95",
      "solution": "import os\nimport joblib\nimport pandas as pd\n\nPROJECT_ROOT = os.getcwd()\nartifact = joblib.load(os.path.join(PROJECT_ROOT, \"models\", \"fraud_detection_v1.joblib\"))\npipeline = artifact[\"pipeline\"]\nfeatures = artifact[\"features\"]\n\n\ndef check_features(df, features):\n    missing = [f for f in features if f not in df.columns]\n    extra = [c for c in df.columns if c not in features]\n    if missing:\n        raise ValueError(f\"Missing columns: {missing}\")\n    return extra\n\n\nbase = pd.read_csv(os.path.join(PROJECT_ROOT, \"data\", \"new_transactions.csv\"))\n\nbatches = {\n    \"complete\": base.drop(columns=[\"Class\"]),\n    \"missing Amount\": base.drop(columns=[\"Class\", \"Amount\"]),\n    \"renamed Time\": base.drop(columns=[\"Class\"]).rename(columns={\"Time\": \"time\"})\n}\n\nfor name, df in batches.items():\n    try:\n        extra = check_features(df, features)\n        probabilities = pipeline.predict_proba(df[features])[:, 1]\n        print(f\"{name:<15} OK | scored {len(df)} rows | extra columns: {extra}\")\n    except ValueError as e:\n        print(f\"{name:<15} REJECTED | {e}\")\n\nfull = batches[\"complete\"]\nproba = pipeline.predict_proba(full[features])[:, 1]\nfor t in [0.50, 0.95]:\n    print(f\"Threshold {t:.0%}: {int((proba >= t).sum())} of {len(proba)} flagged\")",
      "output": "complete        OK | scored 6 rows | extra columns: []\nmissing Amount  REJECTED | Missing columns: ['Amount']\nrenamed Time    REJECTED | Missing columns: ['Time']\nThreshold 50%: 3 of 6 flagged\nThreshold 95%: 1 of 6 flagged",
      "note": "Validating columns before predicting turns silent or confusing failures into a clear message. The threshold comparison shows why the decision rule matters: 3 flagged at 50% versus 1 at 95%."
    }
  ],
  "checklist": [
    "Understood why we save a trained model",
    "Loaded a Joblib artifact without retraining",
    "Used the saved threshold and feature list",
    "Predicted a probability and a decision",
    "Understood why feature names and order must match",
    "Scored a batch of transactions",
    "Validated input before predicting"
  ],
  "quiz": [
    {
      "q": "Which method trains a model and which uses a trained model?",
      "options": [
        "predict() trains, fit() uses",
        "fit() trains, predict() uses",
        "Both train",
        "Neither needs data"
      ],
      "answer": 1,
      "why": "fit() learns from data. predict() and predict_proba() apply the already-trained model, so no fit() is needed at prediction time."
    },
    {
      "q": "What is a model artifact?",
      "options": [
        "Only the training data",
        "The saved model plus the configuration it needs",
        "A prediction result",
        "A Python library"
      ],
      "answer": 1,
      "why": "Here the artifact holds the pipeline, the decision threshold and the feature list, everything an application needs to predict consistently."
    },
    {
      "q": "Why is the threshold saved together with the model?",
      "options": [
        "It makes the file smaller",
        "So every application uses the same decision rule",
        "Joblib requires it",
        "It improves accuracy automatically"
      ],
      "answer": 1,
      "why": "The threshold turns a probability into a decision. Saving it with the model prevents each application from choosing a different rule."
    },
    {
      "q": "A model receives raw values in the wrong column order. What can happen?",
      "options": [
        "Always a clear error",
        "Silently wrong predictions",
        "The model retrains itself",
        "Nothing, order never matters"
      ],
      "answer": 1,
      "why": "With raw arrays there are no names to check, so the model may return a prediction without any error. Select columns by name in the training order."
    },
    {
      "q": "Why avoid retraining every time an application starts?",
      "options": [
        "Retraining is illegal",
        "It is slow and costly and can change behavior unexpectedly",
        "Models cannot be retrained",
        "predict() requires old data"
      ],
      "answer": 1,
      "why": "Training is expensive and should happen occasionally under control. Loading a saved, versioned model gives fast and consistent predictions."
    }
  ]
},

// Day 23: ML Prediction API with FastAPI (add a comma after the previous day's } then paste)
{
 "day": 23,
 "title": "Build an ML Prediction API with FastAPI",
 "subtitle": "Expose your saved fraud model through a validated JSON endpoint",
 "level": "Intermediate",
 "duration": "75 min",
 "tags": [
  "FastAPI",
  "Pydantic",
  "API",
  "Deployment",
  "JSON"
 ],
 "goals": [
  "Explain what an inference API is",
  "Validate input with Pydantic",
  "Load a saved pipeline once and serve /predict",
  "Test with Swagger UI and read 422 errors"
 ],
 "sections": [
  {
   "id": "why",
   "icon": "🌐",
   "title": "Why an API?",
   "blocks": [
    {
     "type": "p",
     "text": "A saved model is only usable from Python. An **API** lets any app (website, mobile app, another service) send data over HTTP and get a prediction back. The key idea to learn: **the model stays in one place; everyone talks to it through a small, validated door.**"
    },
    {
     "type": "table",
     "head": [
      "Concept",
      "Meaning"
     ],
     "rows": [
      [
       "Endpoint",
       "A URL for one operation, e.g. `/predict`"
      ],
      [
       "POST",
       "Sends data to the API"
      ],
      [
       "JSON",
       "Text format for the data both ways"
      ],
      [
       "Pydantic",
       "Checks incoming data before it reaches the model"
      ],
      [
       "Inference API",
       "An API that returns predictions from a trained model"
      ]
     ]
    },
    {
     "type": "code",
     "lang": "text",
     "title": "Flow",
     "code": "Client -> JSON -> FastAPI endpoint -> Pydantic validation -> saved Pipeline -> JSON response"
    },
    {
     "type": "callout",
     "tone": "warn",
     "text": "**FastAPI needs a running server, so it cannot run in this browser lesson.** The server code below is shown, not runnable here. Validation (Pydantic) is runnable, so you practise that part live and run the server on your own machine."
    }
   ]
  },
  {
   "id": "setup",
   "icon": "🛠️",
   "title": "Setup",
   "blocks": [
    {
     "type": "p",
     "text": "Keep your Day 21 project. **Do not retrain or modify the model.** Only add one new file: `src/app.py`."
    },
    {
     "type": "code",
     "lang": "text",
     "title": "Install (VS Code terminal, project root)",
     "code": "python -m pip install fastapi \"uvicorn[standard]\" pydantic"
    },
    {
     "type": "code",
     "lang": "text",
     "title": "Add to requirements.txt",
     "code": "fastapi\nuvicorn[standard]\npydantic"
    },
    {
     "type": "callout",
     "tone": "tip",
     "text": "Pin versions (`pip freeze`) once it works. The `.joblib` model also needs the **same scikit-learn version** that saved it."
    }
   ]
  },
  {
   "id": "pydantic",
   "icon": "✅",
   "title": "Validation with Pydantic (runnable)",
   "blocks": [
    {
     "type": "p",
     "text": "Pydantic turns a class with typed fields into a **gatekeeper**. Valid data passes (and is converted); invalid data raises an error that lists exactly what is wrong."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "A typed input model",
     "code": "from pydantic import BaseModel, ValidationError\n\nclass Tx(BaseModel):\n    Amount: float\n    V1: float\n\nok = Tx(Amount=\"12.5\", V1=0.3)\nprint(ok.model_dump())",
     "output": "{'Amount': 12.5, 'V1': 0.3}"
    },
    {
     "type": "code",
     "lang": "python",
     "title": "Catch invalid data",
     "code": "def check(payload):\n    try:\n        Tx(**payload)\n        return \"ok\"\n    except ValidationError as e:\n        return [(err[\"loc\"][0], err[\"type\"]) for err in e.errors()]\n\nprint(check({\"Amount\": \"hello\", \"V1\": 0.3}))\nprint(check({\"Amount\": 5}))",
     "output": "[('Amount', 'float_parsing')]\n[('V1', 'missing')]"
    },
    {
     "type": "callout",
     "tone": "info",
     "text": "FastAPI does this for you: bad request data becomes an automatic **HTTP 422 Unprocessable Entity** response; the model never sees it."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "Reject unexpected fields",
     "code": "from pydantic import ConfigDict\n\nclass StrictTx(BaseModel):\n    model_config = ConfigDict(extra=\"forbid\")\n    Amount: float\n    V1: float\n\ntry:\n    StrictTx(Amount=1, V1=2, Colour=\"red\")\nexcept ValidationError as e:\n    print([err[\"type\"] for err in e.errors()])",
     "output": "['extra_forbidden']"
    },
    {
     "type": "code",
     "lang": "python",
     "title": "Build the schema from feature names",
     "code": "from pydantic import create_model\n\nfeatures = [\"Time\", \"V1\", \"Amount\"]\nDynamic = create_model(\"Dynamic\", __config__=ConfigDict(extra=\"forbid\"),\n                       **{f: (float, ...) for f in features})\nprint(list(Dynamic.model_fields))",
     "output": "['Time', 'V1', 'Amount']"
    },
    {
     "type": "callout",
     "tone": "tip",
     "text": "`create_model` is why the API never hardcodes feature names: it reads them from the saved artifact, so schema and model cannot drift apart."
    }
   ]
  },
  {
   "id": "app",
   "icon": "🧩",
   "title": "The API code (src/app.py)",
   "blocks": [
    {
     "type": "p",
     "text": "Four parts: load the artifact **once at startup**, build the schema from saved feature names, then define the endpoints. `/predict` converts the validated input to a one-row DataFrame **with the same column order**, gets the probability and applies the saved threshold."
    },
    {
     "type": "code",
     "lang": "text",
     "title": "src/app.py",
     "code": "from pathlib import Path\n\nimport joblib\nimport pandas as pd\nfrom fastapi import FastAPI\nfrom pydantic import ConfigDict, create_model\n\n# 1. Load the Day 21 artifact once, at startup\nMODEL_PATH = Path(__file__).resolve().parent.parent / \"models\" / \"fraud_detection_v1.joblib\"\nartifact = joblib.load(MODEL_PATH)\npipeline = artifact[\"pipeline\"]\nthreshold = artifact[\"threshold\"]\nfeatures = artifact[\"features\"]\n\n# 2. Build the input schema from the saved feature names\nTransactionInput = create_model(\n    \"TransactionInput\",\n    __config__=ConfigDict(extra=\"forbid\"),\n    **{feature: (float, ...) for feature in features},\n)\n\n# 3. Create the app\napp = FastAPI(title=\"Credit Card Fraud Detection API\", version=\"1.0.0\")\n\n\n@app.get(\"/\")\ndef home():\n    return {\"message\": \"Credit Card Fraud Detection API is running!\", \"version\": \"1.0.0\"}\n\n\n@app.get(\"/health\")\ndef health_check():\n    return {\"status\": \"healthy\", \"model_loaded\": True}\n\n\n@app.post(\"/predict\")\ndef predict(transaction: TransactionInput):\n    input_df = pd.DataFrame([transaction.model_dump()], columns=features)\n    probability = float(pipeline.predict_proba(input_df)[0, 1])\n    result = \"Fraud\" if probability >= threshold else \"Legitimate\"\n    return {\"fraud_probability\": round(probability, 6), \"threshold\": threshold, \"prediction\": result}"
    },
    {
     "type": "callout",
     "tone": "warn",
     "text": "`extra=\"forbid\"` is what rejects unexpected fields; Pydantic's default would silently ignore them. The original task text claimed rejection without enabling it."
    }
   ]
  },
  {
   "id": "run",
   "icon": "▶️",
   "title": "Run and test it",
   "blocks": [
    {
     "type": "code",
     "lang": "text",
     "title": "Start the server (project root)",
     "code": "python -m uvicorn src.app:app --reload"
    },
    {
     "type": "p",
     "text": "Expect `Uvicorn running on http://127.0.0.1:8000` and `Application startup complete`. Keep this terminal open, then open **http://127.0.0.1:8000/docs** (Swagger UI): try `GET /health`, then `POST /predict` with every feature set to `0`."
    },
    {
     "type": "code",
     "lang": "json",
     "title": "Example response (zero-filled smoke test)",
     "code": "{\n  \"fraud_probability\": 0.00262,\n  \"threshold\": 0.91,\n  \"prediction\": \"Legitimate\"\n}"
    },
    {
     "type": "callout",
     "tone": "warn",
     "text": "Zero-filled input only proves the API works; it is not a realistic transaction. Your numbers depend on your own saved model and threshold. Test a real fraud row and a real legitimate row from your test set too."
    },
    {
     "type": "table",
     "head": [
      "Request",
      "Status",
      "Why"
     ],
     "rows": [
      [
       "All features numeric",
       "200",
       "Valid"
      ],
      [
       "`\"Amount\": \"hello\"`",
       "422",
       "Not a float"
      ],
      [
       "A feature missing",
       "422",
       "Required field"
      ],
      [
       "Extra field",
       "422",
       "`extra=\"forbid\"`"
      ]
     ]
    }
   ]
  },
  {
   "id": "next",
   "icon": "🚀",
   "title": "Good habits and limits",
   "blocks": [
    {
     "type": "list",
     "items": [
      "Load the model **once**, not inside the endpoint (it would reload on every request).",
      "Return the threshold and decision, not only the probability.",
      "Never expose `/docs` and a raw model publicly without authentication.",
      "An API serves a model; it does not make it correct. Monitor it with real data later."
     ]
    }
   ]
  }
 ],
 "finalProgram": {
  "title": "Mini Inference API (logic without the server)",
  "file": "mini_api.py",
  "description": "The same validate -> predict -> respond logic as src/app.py, runnable in the browser. FastAPI only adds the HTTP layer around it.",
  "concepts": [
   "create_model",
   "extra=forbid",
   "422 vs 200",
   "predict_proba + threshold"
  ],
  "code": "import numpy as np\nimport pandas as pd\nfrom pydantic import ConfigDict, ValidationError, create_model\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\n# Stand-in \"Day 21 artifact\": a small trained pipeline\nrng = np.random.RandomState(23)\nfeatures = [\"V1\", \"V2\", \"Amount\"]\ny = (rng.rand(3000) < 0.05).astype(int)\nX = pd.DataFrame(rng.normal(size=(3000, 3)), columns=features)\nX.loc[y == 1, \"V1\"] -= 2.5\npipeline = Pipeline([(\"scaler\", StandardScaler()),\n                     (\"model\", LogisticRegression(class_weight=\"balanced\", max_iter=1000, random_state=42))])\npipeline.fit(X, y)\nthreshold = 0.9\n\n# The API logic, without the web server\nTransactionInput = create_model(\"TransactionInput\", __config__=ConfigDict(extra=\"forbid\"),\n                                **{f: (float, ...) for f in features})\n\ndef predict_endpoint(payload):\n    try:\n        tx = TransactionInput(**payload)\n    except ValidationError as e:\n        return 422, [(err[\"loc\"][0], err[\"type\"]) for err in e.errors()]\n    row = pd.DataFrame([tx.model_dump()], columns=features)\n    prob = float(pipeline.predict_proba(row)[0, 1])\n    return 200, {\"fraud_probability\": round(prob, 3), \"threshold\": threshold,\n                 \"prediction\": \"Fraud\" if prob >= threshold else \"Legitimate\"}\n\nrequests = {\n    \"normal\": {\"V1\": 0.1, \"V2\": 0.0, \"Amount\": 0.2},\n    \"suspicious\": {\"V1\": -4.0, \"V2\": 0.0, \"Amount\": 0.2},\n    \"bad type\": {\"V1\": \"x\", \"V2\": 0.0, \"Amount\": 0.2},\n    \"missing\": {\"V1\": 0.1, \"V2\": 0.0},\n    \"extra field\": {\"V1\": 0.1, \"V2\": 0.0, \"Amount\": 0.2, \"Colour\": 1},\n}\nfor name, payload in requests.items():\n    print(name, predict_endpoint(payload))",
  "output": "normal (200, {'fraud_probability': 0.026, 'threshold': 0.9, 'prediction': 'Legitimate'})\nsuspicious (200, {'fraud_probability': 0.999, 'threshold': 0.9, 'prediction': 'Fraud'})\nbad type (422, [('V1', 'float_parsing')])\nmissing (422, [('Amount', 'missing')])\nextra field (422, [('Colour', 'extra_forbidden')])"
 },
 "practice": [
  {
   "title": "Payment Validator",
   "level": "Easy",
   "file": "practice1_payment_validator.py",
   "description": "Write a Pydantic model and report exactly what is wrong with bad payloads.",
   "tasks": [
    "Define the model",
    "Return ok or (field, error type) pairs"
   ],
   "hint": "Use e.errors(); each item has 'loc' (a tuple) and 'type'.",
   "starter": "from pydantic import BaseModel, ValidationError\n\n# TODO 1: class Payment(BaseModel) with fields Amount (float) and Merchant (str)\n\ndef check(payload):\n    # TODO 2: return \"ok\" if valid, else a list of (field, error type) pairs\n    pass\n\ntests = [{\"Amount\": 10, \"Merchant\": \"Shop\"}, {\"Amount\": \"ten\", \"Merchant\": \"Shop\"}, {\"Merchant\": \"Shop\"}]\nfor t in tests:\n    print(check(t))",
   "solution": "from pydantic import BaseModel, ValidationError\n\nclass Payment(BaseModel):\n    Amount: float\n    Merchant: str\n\ndef check(payload):\n    try:\n        Payment(**payload)\n        return \"ok\"\n    except ValidationError as e:\n        return [(err[\"loc\"][0], err[\"type\"]) for err in e.errors()]\n\ntests = [{\"Amount\": 10, \"Merchant\": \"Shop\"}, {\"Amount\": \"ten\", \"Merchant\": \"Shop\"}, {\"Merchant\": \"Shop\"}]\nfor t in tests:\n    print(check(t))",
   "output": "ok\n[('Amount', 'float_parsing')]\n[('Amount', 'missing')]"
  },
  {
   "title": "Strict Dynamic Schema",
   "level": "Medium",
   "file": "practice2_strict_schema.py",
   "description": "Generate a strict schema from a feature list, with a value rule.",
   "tasks": [
    "create_model from a feature list",
    "Forbid extra fields",
    "Amount >= 0 with Field(ge=0)"
   ],
   "hint": "Pass (float, Field(..., ge=0)) for Amount; set __config__=ConfigDict(extra=\"forbid\").",
   "starter": "from pydantic import ConfigDict, Field, ValidationError, create_model\n\nfeatures = [\"Time\", \"V1\", \"Amount\"]\n\n# TODO 1: build Schema with create_model: every feature is a required float,\n#         extra fields are forbidden, and Amount must be >= 0 (use Field(ge=0))\n\ndef check(payload):\n    # TODO 2: return \"ok\" or a sorted list of (field, error type) pairs\n    pass\n\ntests = [\n    {\"Time\": 1, \"V1\": 0.5, \"Amount\": 20},\n    {\"Time\": 1, \"V1\": 0.5, \"Amount\": -5},\n    {\"Time\": 1, \"V1\": 0.5, \"Amount\": 20, \"Colour\": \"red\"},\n    {\"Time\": 1, \"Amount\": 20},\n]\nfor t in tests:\n    print(check(t))",
   "solution": "from pydantic import ConfigDict, Field, ValidationError, create_model\n\nfeatures = [\"Time\", \"V1\", \"Amount\"]\n\nfields = {f: (float, ...) for f in features}\nfields[\"Amount\"] = (float, Field(..., ge=0))\nSchema = create_model(\"Schema\", __config__=ConfigDict(extra=\"forbid\"), **fields)\n\ndef check(payload):\n    try:\n        Schema(**payload)\n        return \"ok\"\n    except ValidationError as e:\n        return sorted((err[\"loc\"][0], err[\"type\"]) for err in e.errors())\n\ntests = [\n    {\"Time\": 1, \"V1\": 0.5, \"Amount\": 20},\n    {\"Time\": 1, \"V1\": 0.5, \"Amount\": -5},\n    {\"Time\": 1, \"V1\": 0.5, \"Amount\": 20, \"Colour\": \"red\"},\n    {\"Time\": 1, \"Amount\": 20},\n]\nfor t in tests:\n    print(check(t))",
   "output": "ok\n[('Amount', 'greater_than_equal')]\n[('Colour', 'extra_forbidden')]\n[('V1', 'missing')]",
   "note": "Real APIs often add range rules like this so impossible values never reach the model."
  }
 ],
 "checklist": [
  "I can explain endpoint, POST and JSON",
  "I installed fastapi and uvicorn",
  "I know Pydantic rejects bad input before the model",
  "I used extra=\"forbid\" to reject unexpected fields",
  "I load the model once at startup",
  "I ran uvicorn and opened /docs",
  "I tested valid and invalid requests"
 ],
 "quiz": [
  {
   "q": "What does FastAPI return when request data fails validation?",
   "options": [
    "200 with an empty result",
    "422 Unprocessable Entity",
    "500 crash",
    "404"
   ],
   "answer": 1,
   "why": "Pydantic errors become an automatic 422 response."
  },
  {
   "q": "Why build the input schema from the saved feature names?",
   "options": [
    "It is faster",
    "Schema and model cannot drift apart",
    "Pydantic requires it",
    "It removes the threshold"
   ],
   "answer": 1,
   "why": "The model's feature list is the single source of truth."
  },
  {
   "q": "Where should the model be loaded?",
   "options": [
    "Inside /predict on every request",
    "Once at startup",
    "In the client app",
    "In Swagger UI"
   ],
   "answer": 1,
   "why": "Reloading per request is slow and wasteful."
  },
  {
   "q": "A zero-filled /predict call returns 200. What does that prove?",
   "options": [
    "The model is accurate",
    "The API works end to end",
    "Zero is a realistic transaction",
    "The threshold is correct"
   ],
   "answer": 1,
   "why": "It is only a smoke test, not a quality check."
  }
 ]
},
// Day 24: API Testing, Error Handling & Docker (add a comma after the previous day's } then paste)
// Day 24: API Testing, Error Handling & Docker (add a comma after the previous day's } then paste)
{
 "day": 24,
 "title": "API Testing, Error Handling & Docker",
 "subtitle": "Make the fraud API testable, safe when it fails, and portable",
 "level": "Intermediate",
 "duration": "90 min",
 "tags": [
  "pytest",
  "TestClient",
  "HTTPException",
  "Docker",
  "MLOps"
 ],
 "goals": [
  "Write automated API tests with pytest",
  "Return controlled 500 errors and log the real cause",
  "Explain Dockerfile, image and container",
  "Keep Python and scikit-learn versions consistent in Docker"
 ],
 "sections": [
  {
   "id": "why",
   "icon": "🧱",
   "title": "From working to reliable",
   "blocks": [
    {
     "type": "p",
     "text": "Yesterday's API works when you click Execute. A reliable API also **proves** it works (tests), **fails gracefully** (error handling) and **runs anywhere** (Docker). The skill to learn is the habit: *never trust code you have only run by hand.*"
    },
    {
     "type": "table",
     "head": [
      "Goal",
      "Tool",
      "Answers the question"
     ],
     "rows": [
      [
       "Test",
       "pytest + TestClient",
       "Does it still work after my change?"
      ],
      [
       "Handle errors",
       "try/except + HTTPException",
       "What does the client see when it breaks?"
      ],
      [
       "Package",
       "Dockerfile",
       "Will it run on another machine?"
      ]
     ]
    },
    {
     "type": "image",
     "src": "images/day24/api-request-flow.png",
     "alt": "Request flow through the fraud API",
     "caption": "Every request ends as 200, 422 or 500."
    },
    {
     "type": "callout",
     "tone": "warn",
     "text": "pytest, FastAPI and Docker cannot run in this browser lesson. The runnable blocks teach the **ideas** (tests, controlled errors) in plain Python; the real files are shown for your own machine."
    }
   ]
  },
  {
   "id": "testidea",
   "icon": "🧪",
   "title": "What an automated test is (runnable)",
   "blocks": [
    {
     "type": "p",
     "text": "A test is a small function that makes a claim with `assert`. If the claim is false the test fails. pytest simply finds functions named `test_*`, runs them and reports. Here is a tiny runner doing the same thing."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "Tests and a mini runner",
     "code": "def add_vat(price, rate=0.18):\n    return round(price * (1 + rate), 2)\n\ndef test_normal_price():\n    assert add_vat(100) == 118.0\n\ndef test_zero_price():\n    assert add_vat(0) == 0\n\ndef test_deliberately_wrong():\n    assert add_vat(100) == 120\n\ndef run_tests(tests):\n    for t in tests:\n        try:\n            t()\n            print(t.__name__, \"PASSED\")\n        except AssertionError:\n            print(t.__name__, \"FAILED\")\n\nrun_tests([test_normal_price, test_zero_price, test_deliberately_wrong])",
     "output": "test_normal_price PASSED\ntest_zero_price PASSED\ntest_deliberately_wrong FAILED"
    },
    {
     "type": "callout",
     "tone": "tip",
     "text": "A failing test is useful news: it found a bug before a user did. Test the **behaviour** (status codes, response keys), not the model's accuracy; zero-filled inputs prove the API works, not that predictions are good."
    }
   ]
  },
  {
   "id": "tests",
   "icon": "✅",
   "title": "Testing the real API (tests/test_app.py)",
   "blocks": [
    {
     "type": "code",
     "lang": "text",
     "title": "Install",
     "code": "python -m pip install pytest httpx"
    },
    {
     "type": "p",
     "text": "`TestClient` calls your FastAPI app directly, with no server running. The original task showed only 2 of the 4 tests and no checks on the response, so here is the full file, plus a fifth test for the 500 error you add below."
    },
    {
     "type": "image",
     "src": "images/day24/testing-flow.png",
     "alt": "pytest and TestClient testing the API",
     "caption": "What the five tests check and the status each expects."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "tests/test_app.py",
     "code": "from fastapi.testclient import TestClient\n\nfrom src.app import app, features\n\nclient = TestClient(app)\n\n\ndef zero_sample():\n    return {feature: 0.0 for feature in features}\n\n\ndef test_health_check():\n    response = client.get(\"/health\")\n    assert response.status_code == 200\n    assert response.json()[\"status\"] == \"healthy\"\n\n\ndef test_prediction():\n    response = client.post(\"/predict\", json=zero_sample())\n    assert response.status_code == 200\n    result = response.json()\n    assert set(result) == {\"fraud_probability\", \"threshold\", \"prediction\"}\n    assert 0.0 <= result[\"fraud_probability\"] <= 1.0\n    assert result[\"prediction\"] in {\"Fraud\", \"Legitimate\"}\n\n\ndef test_missing_feature():\n    sample = zero_sample()\n    sample.pop(features[0])\n    assert client.post(\"/predict\", json=sample).status_code == 422\n\n\ndef test_extra_feature():\n    sample = zero_sample()\n    sample[\"unexpected_field\"] = 1.0\n    assert client.post(\"/predict\", json=sample).status_code == 422\n\n\ndef test_internal_error_returns_500(monkeypatch):\n    class BrokenPipeline:\n        def predict_proba(self, X):\n            raise RuntimeError(\"boom\")\n\n    monkeypatch.setattr(\"src.app.pipeline\", BrokenPipeline())\n    response = client.post(\"/predict\", json=zero_sample())\n    assert response.status_code == 500\n    assert response.json() == {\"detail\": \"Prediction failed due to an internal server error.\"}"
    },
    {
     "type": "code",
     "lang": "text",
     "title": "Run (stop uvicorn first)",
     "code": "python -m pytest -v"
    },
    {
     "type": "code",
     "lang": "text",
     "title": "Expected result",
     "code": "tests/test_app.py::test_health_check PASSED\ntests/test_app.py::test_prediction PASSED\ntests/test_app.py::test_missing_feature PASSED\ntests/test_app.py::test_extra_feature PASSED\ntests/test_app.py::test_internal_error_returns_500 PASSED\n\n5 passed"
    },
    {
     "type": "callout",
     "tone": "info",
     "text": "Run from the **project root** so `from src.app import ...` works. `monkeypatch` swaps the real pipeline for a broken one only during that test, which is how you test failure paths safely."
    }
   ]
  },
  {
   "id": "errors",
   "icon": "🛡️",
   "title": "Error handling",
   "blocks": [
    {
     "type": "p",
     "text": "Pydantic already turns bad input into **422**. For unexpected problems inside your code, catch the exception, **log the details on the server**, and give the client a short safe message with status **500**."
    },
    {
     "type": "table",
     "head": [
      "Status",
      "Meaning"
     ],
     "rows": [
      [
       "200",
       "Success"
      ],
      [
       "422",
       "Client sent invalid data"
      ],
      [
       "500",
       "Unexpected problem inside the app"
      ]
     ]
    },
    {
     "type": "p",
     "text": "First, see the bug the original task would have created: the `except` block only logged, so the function returned nothing."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "A handler that swallows the error",
     "code": "def broken_model(x):\n    raise RuntimeError(\"model file corrupted\")\n\ndef predict_buggy(x):\n    try:\n        return {\"probability\": broken_model(x)}\n    except Exception:\n        print(\"log: prediction failed\")\n\nprint(predict_buggy(1))",
     "output": "log: prediction failed\nNone"
    },
    {
     "type": "code",
     "lang": "python",
     "title": "The fix: log, then raise a controlled error",
     "code": "class HTTPException(Exception):\n    def __init__(self, status_code, detail):\n        self.status_code, self.detail = status_code, detail\n\ndef predict_safe(x):\n    try:\n        return {\"probability\": broken_model(x)}\n    except Exception:\n        print(\"log: prediction failed\")\n        raise HTTPException(500, \"Prediction failed due to an internal server error.\")\n\ntry:\n    predict_safe(1)\nexcept HTTPException as e:\n    print(e.status_code, e.detail)",
     "output": "log: prediction failed\n500 Prediction failed due to an internal server error."
    },
    {
     "type": "callout",
     "tone": "warn",
     "text": "The client gets a generic message; the real cause (`model file corrupted`) stays in the server log. Never send internal error text to users: it can leak paths and implementation details."
    },
    {
     "type": "code",
     "lang": "python",
     "title": "Replace /predict in src/app.py",
     "code": "@app.post(\"/predict\")\ndef predict(transaction: TransactionInput):\n    try:\n        input_df = pd.DataFrame([transaction.model_dump()], columns=features)\n        probability = float(pipeline.predict_proba(input_df)[0, 1])\n        result = \"Fraud\" if probability >= threshold else \"Legitimate\"\n        return {\"fraud_probability\": round(probability, 6), \"threshold\": threshold, \"prediction\": result}\n    except Exception:\n        logger.exception(\"Prediction failed\")  # full details stay on the server\n        raise HTTPException(status_code=500, detail=\"Prediction failed due to an internal server error.\")"
    },
    {
     "type": "callout",
     "tone": "tip",
     "text": "Also add `import logging` and `from fastapi import FastAPI, HTTPException` at the top, and `logger = logging.getLogger(__name__)` once. Re-run pytest: the 500 test now passes."
    }
   ]
  },
  {
   "id": "docker",
   "icon": "🐳",
   "title": "Docker fundamentals",
   "blocks": [
    {
     "type": "p",
     "text": "Docker packages the app **and** its environment so it behaves the same everywhere."
    },
    {
     "type": "table",
     "head": [
      "Term",
      "Meaning"
     ],
     "rows": [
      [
       "Dockerfile",
       "Recipe of instructions"
      ],
      [
       "Image",
       "Packaged blueprint built from the recipe"
      ],
      [
       "Container",
       "A running instance of an image"
      ]
     ]
    },
    {
     "type": "image",
     "src": "images/day24/docker-concepts.png",
     "alt": "Dockerfile, image and container",
     "caption": "Build once, run the same way anywhere."
    },
    {
     "type": "code",
     "lang": "text",
     "title": "Dockerfile (project root)",
     "code": "FROM python:3.11-slim\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\nCOPY src/ ./src/\nCOPY models/ ./models/\nEXPOSE 8000\nCMD [\"uvicorn\", \"src.app:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]"
    },
    {
     "type": "code",
     "lang": "text",
     "title": ".dockerignore",
     "code": ".venv/\nvenv/\n__pycache__/\n.pytest_cache/\n.git/\n.vscode/\n*.pyc"
    },
    {
     "type": "image",
     "src": "images/day24/docker-layers.png",
     "alt": "Dockerfile layers and caching",
     "caption": "Slow, rarely-changing steps go first so builds stay fast."
    },
    {
     "type": "callout",
     "tone": "warn",
     "text": "**Version match matters.** A `.joblib` model loads reliably only with the scikit-learn (and ideally Python) version that saved it. Check with `python --version` and `python -c \"import sklearn; print(sklearn.__version__)\"`, set the base image to match, and pin `scikit-learn==<that version>` in `requirements.txt`."
    },
    {
     "type": "callout",
     "tone": "tip",
     "text": "Layer order is a speed trick: copying `requirements.txt` and installing **before** copying `src/` means code edits do not reinstall every library. pytest and httpx are only needed for testing; a separate `requirements-dev.txt` keeps the image smaller."
    },
    {
     "type": "code",
     "lang": "text",
     "title": "Build, run, inspect",
     "code": "docker build -t fraud-detection-api:v1 .\ndocker images\ndocker run -d --name fraud-api -p 8000:8000 fraud-detection-api:v1\ndocker ps\ndocker logs fraud-api\ndocker stop fraud-api\ndocker start fraud-api\ndocker rm -f fraud-api"
    },
    {
     "type": "p",
     "text": "Open `http://127.0.0.1:8000/docs`; `/health` should return `{\"status\": \"healthy\", \"model_loaded\": true}`. Stop your local uvicorn first, or both fight for port 8000. If the container exits, `docker logs fraud-api` shows why. In `-p 8000:8000`, the left number is your computer's port and the right one is the container's."
    }
   ]
  }
 ],
 "finalProgram": {
  "title": "Reliable Mini API: validate, handle errors, test",
  "file": "reliable_api.py",
  "description": "The Day 23 logic plus a controlled 500 error and five automated tests, all runnable without a server.",
  "concepts": [
   "assert tests",
   "422 vs 500",
   "hidden internal errors",
   "server log"
  ],
  "code": "import numpy as np\nimport pandas as pd\nfrom pydantic import ConfigDict, ValidationError, create_model\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\n\nclass HTTPException(Exception):\n    def __init__(self, status_code, detail):\n        self.status_code, self.detail = status_code, detail\n\nrng = np.random.RandomState(24)\nfeatures = [\"V1\", \"V2\", \"Amount\"]\ny = (rng.rand(3000) < 0.05).astype(int)\nX = pd.DataFrame(rng.normal(size=(3000, 3)), columns=features)\nX.loc[y == 1, \"V1\"] -= 2.5\npipeline = Pipeline([(\"scaler\", StandardScaler()),\n                     (\"model\", LogisticRegression(class_weight=\"balanced\", max_iter=1000, random_state=42))])\npipeline.fit(X, y)\nthreshold = 0.9\nTx = create_model(\"Tx\", __config__=ConfigDict(extra=\"forbid\"), **{f: (float, ...) for f in features})\nserver_log = []\n\ndef predict(payload):\n    try:\n        tx = Tx(**payload)\n    except ValidationError:\n        return 422, \"invalid input\"\n    try:\n        row = pd.DataFrame([tx.model_dump()], columns=features)\n        prob = float(pipeline.predict_proba(row)[0, 1])\n        return 200, {\"prediction\": \"Fraud\" if prob >= threshold else \"Legitimate\"}\n    except Exception as err:\n        server_log.append(repr(err))\n        raise HTTPException(500, \"Prediction failed due to an internal server error.\")\n\ndef call(payload):\n    try:\n        return predict(payload)\n    except HTTPException as e:\n        return e.status_code, e.detail\n\nok = {\"V1\": 0.1, \"V2\": 0.0, \"Amount\": 0.2}\n\ndef test_valid_request():\n    assert call(ok)[0] == 200\n\ndef test_missing_feature():\n    assert call({\"V1\": 0.1, \"V2\": 0.0})[0] == 422\n\ndef test_extra_feature():\n    assert call(dict(ok, Colour=1))[0] == 422\n\ndef test_fraud_detected():\n    assert call(dict(ok, V1=-4.0))[1][\"prediction\"] == \"Fraud\"\n\ndef test_internal_error_is_hidden():\n    global pipeline\n    good, pipeline = pipeline, None\n    try:\n        status, detail = call(ok)\n    finally:\n        pipeline = good\n    assert status == 500 and \"NoneType\" not in detail and len(server_log) == 1\n\ntests = [test_valid_request, test_missing_feature, test_extra_feature, test_fraud_detected, test_internal_error_is_hidden]\nfor t in tests:\n    try:\n        t(); print(t.__name__, \"PASSED\")\n    except AssertionError:\n        print(t.__name__, \"FAILED\")\nprint(len(tests), \"tests run\")",
  "output": "test_valid_request PASSED\ntest_missing_feature PASSED\ntest_extra_feature PASSED\ntest_fraud_detected PASSED\ntest_internal_error_is_hidden PASSED\n5 tests run"
 },
 "practice": [
  {
   "title": "Threshold Test Suite",
   "level": "Easy",
   "file": "practice1_threshold_tests.py",
   "description": "Write four tests, including the edge case exactly on the threshold.",
   "tasks": [
    "Write 4 test functions",
    "Run them with the runner"
   ],
   "hint": "Each test is one assert comparing decide(...) with the expected string.",
   "starter": "def decide(probability, threshold):\n    return \"Fraud\" if probability >= threshold else \"Legitimate\"\n\ndef run_tests(tests):\n    for t in tests:\n        try:\n            t()\n            print(t.__name__, \"PASSED\")\n        except AssertionError:\n            print(t.__name__, \"FAILED\")\n\n# TODO 1: test_below_threshold: 0.2 vs 0.5 -> \"Legitimate\"\n# TODO 2: test_above_threshold: 0.9 vs 0.5 -> \"Fraud\"\n# TODO 3: test_exactly_on_threshold: 0.5 vs 0.5 -> \"Fraud\"\n# TODO 4: test_stricter_threshold: 0.9 vs 0.95 -> \"Legitimate\"\n\n# TODO 5: call run_tests with your four tests",
   "solution": "def decide(probability, threshold):\n    return \"Fraud\" if probability >= threshold else \"Legitimate\"\n\ndef run_tests(tests):\n    for t in tests:\n        try:\n            t()\n            print(t.__name__, \"PASSED\")\n        except AssertionError:\n            print(t.__name__, \"FAILED\")\n\ndef test_below_threshold():\n    assert decide(0.2, 0.5) == \"Legitimate\"\n\ndef test_above_threshold():\n    assert decide(0.9, 0.5) == \"Fraud\"\n\ndef test_exactly_on_threshold():\n    assert decide(0.5, 0.5) == \"Fraud\"\n\ndef test_stricter_threshold():\n    assert decide(0.9, 0.95) == \"Legitimate\"\n\nrun_tests([test_below_threshold, test_above_threshold, test_exactly_on_threshold, test_stricter_threshold])",
   "output": "test_below_threshold PASSED\ntest_above_threshold PASSED\ntest_exactly_on_threshold PASSED\ntest_stricter_threshold PASSED"
  },
  {
   "title": "Safe Predict Wrapper",
   "level": "Medium",
   "file": "practice2_safe_predict.py",
   "description": "Hide internal errors from the client but keep them in the server log.",
   "tasks": [
    "Return the fraud probability on success",
    "Log and raise a 500 HTTPException on failure",
    "Print the server log"
   ],
   "hint": "Catch Exception as error; log repr(error); raise HTTPException(500, ...).",
   "starter": "class HTTPException(Exception):\n    def __init__(self, status_code, detail):\n        self.status_code, self.detail = status_code, detail\n\nclass BrokenModel:\n    def predict_proba(self, rows):\n        raise RuntimeError(\"secret internal failure\")\n\nclass GoodModel:\n    def predict_proba(self, rows):\n        return [[0.3, 0.7]]\n\nserver_log = []\n\ndef safe_predict(model, row):\n    # TODO 1: try model.predict_proba([row]) and return the fraud probability (index [0][1])\n    # TODO 2: on any Exception, append repr(error) to server_log and\n    #         raise HTTPException(500, \"Prediction failed due to an internal server error.\")\n    pass\n\nfor model in [GoodModel(), BrokenModel()]:\n    try:\n        print(\"OK:\", safe_predict(model, [0.0]))\n    except HTTPException as e:\n        print(\"ERROR:\", e.status_code, e.detail)\n\n# TODO 3: print the server log (it must contain the real error)\nprint(server_log)",
   "solution": "class HTTPException(Exception):\n    def __init__(self, status_code, detail):\n        self.status_code, self.detail = status_code, detail\n\nclass BrokenModel:\n    def predict_proba(self, rows):\n        raise RuntimeError(\"secret internal failure\")\n\nclass GoodModel:\n    def predict_proba(self, rows):\n        return [[0.3, 0.7]]\n\nserver_log = []\n\ndef safe_predict(model, row):\n    try:\n        return model.predict_proba([row])[0][1]\n    except Exception as error:\n        server_log.append(repr(error))\n        raise HTTPException(500, \"Prediction failed due to an internal server error.\")\n\nfor model in [GoodModel(), BrokenModel()]:\n    try:\n        print(\"OK:\", safe_predict(model, [0.0]))\n    except HTTPException as e:\n        print(\"ERROR:\", e.status_code, e.detail)\n\nprint(server_log)",
   "output": "OK: 0.7\nERROR: 500 Prediction failed due to an internal server error.\n[\"RuntimeError('secret internal failure')\"]",
   "note": "The client sees a generic message; only the server log holds the real cause."
  }
 ],
 "checklist": [
  "I can explain what an automated test is",
  "I wrote the 4 API tests plus the 500 test",
  "I run pytest from the project root",
  "I know 200, 422 and 500",
  "My /predict raises HTTPException(500) after logging",
  "I pinned scikit-learn to the training version",
  "I built and ran the Docker container"
 ],
 "quiz": [
  {
   "q": "A user sends a payload missing a feature. What status does the API return?",
   "options": [
    "200",
    "422",
    "500",
    "404"
   ],
   "answer": 1,
   "why": "Pydantic rejects invalid input with 422 before the model runs."
  },
  {
   "q": "Why must the except block raise HTTPException instead of only logging?",
   "options": [
    "Logging is not allowed",
    "Otherwise the client gets an empty success response",
    "It speeds up the model",
    "Docker requires it"
   ],
   "answer": 1,
   "why": "Without raising, the function returns None and the client sees a misleading 200."
  },
  {
   "q": "Why copy requirements.txt and install before copying src/?",
   "options": [
    "Docker demands the order",
    "Code edits will not reinstall all libraries",
    "It shrinks the model",
    "It enables port 8000"
   ],
   "answer": 1,
   "why": "Docker caches layers; unchanged dependency layers are reused."
  },
  {
   "q": "Why match scikit-learn versions between training and Docker?",
   "options": [
    "For prettier logs",
    "A joblib model may fail or behave differently on another version",
    "To change the threshold",
    "pytest requires it"
   ],
   "answer": 1,
   "why": "Pickled models depend on the library version that created them."
  }
 ]
},
// DAY 25 snippet. In course-data.js: after the previous day's closing }, paste this object (keep the comma), outside the previous day's quiz array. Copy the images/day25 folder into your site's images folder.
{
  "day": 25,
  "title": "PyTorch Fundamentals",
  "subtitle": "Deep learning begins: tensors, operations, devices, autograd and your first PyTorch training loop.",
  "level": "Intermediate",
  "duration": "60-90 min",
  "tags": [
    "PyTorch",
    "Tensors",
    "Autograd",
    "Training Loop",
    "Deep Learning"
  ],
  "goals": [
    "Understand what PyTorch is and install the CPU version",
    "Create tensors and read their ndim and shape",
    "Use tensor operations, devices and autograd",
    "Train a simple linear model with the PyTorch workflow"
  ],
  "sections": [
    {
      "id": "what",
      "icon": "🧠",
      "title": "Step 1: What is PyTorch?",
      "meta": "Deep learning begins",
      "blocks": [
        {
          "type": "p",
          "text": "PyTorch is a Python framework used to build and train machine learning and deep learning models."
        },
        {
          "type": "p",
          "text": "Deep learning is machine learning with neural networks: stacks of simple units that learn their own patterns from data. The more layers, the deeper the network."
        },
        {
          "type": "image",
          "src": "images/day25/ml_vs_dl.png",
          "alt": "Traditional ML models matched to their deep learning counterparts",
          "caption": "Same idea, deeper models: each classic ML tool has a deep learning counterpart"
        },
        {
          "type": "table",
          "head": [
            "Traditional ML",
            "Deep Learning"
          ],
          "rows": [
            [
              "Logistic Regression",
              "Neural Networks"
            ],
            [
              "Decision Tree",
              "Deep Neural Networks"
            ],
            [
              "Random Forest",
              "CNNs, RNNs, Transformers"
            ],
            [
              "Scikit-learn",
              "PyTorch"
            ]
          ]
        },
        {
          "type": "image",
          "src": "images/day25/neural_network.png",
          "alt": "Diagram of a neural network with input, two hidden layers and an output",
          "caption": "A neural network: inputs flow through hidden layers to an output, and every line is a weight the network learns"
        },
        {
          "type": "list",
          "items": [
            "Build neural networks",
            "Train deep learning models",
            "Work with GPUs",
            "Build computer vision applications",
            "Work with NLP and modern AI models"
          ]
        }
      ]
    },
    {
      "id": "install",
      "icon": "⚙️",
      "title": "Step 2: Install PyTorch",
      "meta": "CPU version first",
      "blocks": [
        {
          "type": "p",
          "text": "We begin with the CPU version to avoid unnecessary GPU setup complications. In your VS Code terminal:"
        },
        {
          "type": "code",
          "lang": "bash",
          "title": "Terminal",
          "code": "python -m pip install torch"
        },
        {
          "type": "code",
          "lang": "bash",
          "title": "Check the installation",
          "code": "python -c \"import torch; print(torch.__version__)\""
        },
        {
          "type": "code",
          "lang": "python",
          "title": "Check GPU availability",
          "code": "import torch\n\nprint(\"PyTorch Version:\", torch.__version__)\nprint(\"CUDA Available:\", torch.cuda.is_available())",
          "output": "PyTorch Version: 2.x.x\nCUDA Available: False"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "Your version number will differ. If CUDA Available is False, do not worry: every exercise runs on the CPU. For NVIDIA GPU acceleration later, use the install command from the official PyTorch installation selector."
        }
      ]
    },
    {
      "id": "tensors",
      "icon": "🔥",
      "title": "Step 3: Understand Tensors",
      "meta": "Most important concept",
      "blocks": [
        {
          "type": "p",
          "text": "A tensor is a data structure used to store numerical values in PyTorch. Think of tensors as an extension of NumPy arrays."
        },
        {
          "type": "table",
          "head": [
            "Type",
            "Example",
            "Dimension"
          ],
          "rows": [
            [
              "Scalar",
              "10",
              "0D"
            ],
            [
              "Vector",
              "[10, 20, 30]",
              "1D"
            ],
            [
              "Matrix",
              "[[1, 2], [3, 4]]",
              "2D"
            ],
            [
              "3D Tensor",
              "Multiple matrices (2 x 2 x 2)",
              "3D"
            ]
          ]
        },
        {
          "type": "image",
          "src": "images/day25/tensors_dims.png",
          "alt": "Scalar, vector, matrix and 3D tensor drawn as boxes",
          "caption": "Tensors grow from a single number to stacks of matrices"
        },
        {
          "type": "p",
          "text": "Create a new file src/day25_pytorch.py in your project:"
        },
        {
          "type": "code",
          "lang": "text",
          "title": "Fraud_Detection_Project",
          "code": "Fraud_Detection_Project/\n|\n|-- src/\n|   |-- train.py\n|   |-- predict.py\n|   |-- app.py\n|   `-- day25_pytorch.py    <- NEW"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "src/day25_pytorch.py",
          "code": "import torch\n\n# 1. Scalar (0D Tensor)\nscalar = torch.tensor(10)\n\n# 2. Vector (1D Tensor)\nvector = torch.tensor([10, 20, 30])\n\n# 3. Matrix (2D Tensor)\nmatrix = torch.tensor([\n    [1, 2],\n    [3, 4]\n])\n\n# 4. 3D Tensor\ntensor_3d = torch.tensor([\n    [[1, 2], [3, 4]],\n    [[5, 6], [7, 8]]\n])\n\nprint(\"Scalar:\", scalar)\nprint(\"Vector:\", vector)\nprint(\"Matrix:\\n\", matrix)\nprint(\"3D Tensor:\\n\", tensor_3d)\n\n# Check dimensions\nprint(\"\\nDimensions:\")\nprint(scalar.ndim)\nprint(vector.ndim)\nprint(matrix.ndim)\nprint(tensor_3d.ndim)\n\n# Check shapes\nprint(\"\\nShapes:\")\nprint(scalar.shape)\nprint(vector.shape)\nprint(matrix.shape)\nprint(tensor_3d.shape)",
          "output": "Scalar: tensor(10)\nVector: tensor([10, 20, 30])\nMatrix:\n tensor([[1, 2],\n        [3, 4]])\n3D Tensor:\n tensor([[[1, 2],\n         [3, 4]],\n\n        [[5, 6],\n         [7, 8]]])\n\nDimensions:\n0\n1\n2\n3\n\nShapes:\ntorch.Size([])\ntorch.Size([3])\ntorch.Size([2, 2])\ntorch.Size([2, 2, 2])"
        },
        {
          "type": "p",
          "text": "Run it with: python src/day25_pytorch.py"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "ndim is the number of dimensions. shape is the size along each dimension. A matrix with 2 rows and 3 columns has shape (2, 3). A scalar has an empty shape, torch.Size([])."
        }
      ]
    },
    {
      "id": "ops",
      "icon": "➕",
      "title": "Step 4: Tensor Operations",
      "meta": "Math on tensors",
      "blocks": [
        {
          "type": "p",
          "text": "PyTorch performs mathematical operations directly on tensors. Add this below your previous exercise:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "tensor_ops.py",
          "code": "import torch\n\na = torch.tensor([10, 20, 30])\nb = torch.tensor([1, 2, 3])\n\n# Addition\nprint(\"Addition:\", a + b)\n\n# Subtraction\nprint(\"Subtraction:\", a - b)\n\n# Multiplication (element-wise)\nprint(\"Multiplication:\", a * b)\n\n# Division\nprint(\"Division:\", a / b)\n\n# Matrix multiplication\nx = torch.tensor([\n    [1, 2],\n    [3, 4]\n])\ny = torch.tensor([\n    [5, 6],\n    [7, 8]\n])\nprint(\"Matrix Multiplication:\\n\", torch.matmul(x, y))\n\n# Other useful operations\nprint(\"Mean:\", a.float().mean())\nprint(\"Maximum:\", a.max())\nprint(\"Minimum:\", a.min())",
          "output": "Addition: tensor([11, 22, 33])\nSubtraction: tensor([ 9, 18, 27])\nMultiplication: tensor([10, 40, 90])\nDivision: tensor([10., 10., 10.])\nMatrix Multiplication:\n tensor([[19, 22],\n        [43, 50]])\nMean: tensor(20.)\nMaximum: tensor(30)\nMinimum: tensor(10)"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "a * b is element-wise multiplication. torch.matmul performs matrix multiplication when the shapes are compatible. Also notice a / b returns decimals (10.), and .mean() needs a float tensor, so we used a.float()."
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "These operations are fundamental to neural network calculations."
        }
      ]
    },
    {
      "id": "device",
      "icon": "🖥️",
      "title": "Step 5: CPU vs GPU",
      "meta": "Processing devices",
      "blocks": [
        {
          "type": "table",
          "head": [
            "Device",
            "Strength"
          ],
          "rows": [
            [
              "CPU",
              "General-purpose processing. Good for everyday tasks and smaller models."
            ],
            [
              "GPU",
              "Highly parallel processing. Useful for large tensor operations and deep learning."
            ]
          ]
        },
        {
          "type": "image",
          "src": "images/day25/cpu_vs_gpu.png",
          "alt": "A CPU with a few large cores next to a GPU with a grid of many small cores",
          "caption": "CPU: a few powerful cores. GPU: thousands of small cores working in parallel"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "device.py",
          "code": "import torch\n\nif torch.cuda.is_available():\n    device = torch.device(\"cuda\")\n    print(\"GPU Available!\")\nelse:\n    device = torch.device(\"cpu\")\n    print(\"Using CPU!\")\n\nnumbers = torch.tensor(\n    [10, 20, 30],\n    device=device\n)\n\nprint(\"Tensor:\", numbers)\nprint(\"Device:\", numbers.device)",
          "output": "Using CPU!\nTensor: tensor([10, 20, 30])\nDevice: cpu"
        },
        {
          "type": "callout",
          "tone": "warn",
          "text": "Tensors involved in the same operation generally need to be on the same device. On a machine with an NVIDIA GPU you would see GPU Available! and Device: cuda:0."
        }
      ]
    },
    {
      "id": "autograd",
      "icon": "📉",
      "title": "Step 6: Autograd - Automatic Differentiation",
      "meta": "Extremely important",
      "blocks": [
        {
          "type": "p",
          "text": "Suppose your model predicts a student's marks: actual 80, predicted 60. The model made an error, and during training it must adjust its parameters to reduce that error. Gradients tell it how. PyTorch's autograd calculates them automatically."
        },
        {
          "type": "p",
          "text": "Example: y = x squared. The derivative is dy/dx = 2x, so at x = 3 the gradient is 6. Let PyTorch calculate it:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "autograd.py",
          "code": "import torch\n\n# Create a tensor that tracks gradients\nx = torch.tensor(3.0, requires_grad=True)\n\n# Mathematical operation\ny = x ** 2\n\n# Calculate gradient\ny.backward()\n\nprint(\"Value of x:\", x.item())\nprint(\"Value of y:\", y.item())\nprint(\"Gradient:\", x.grad.item())",
          "output": "Value of x: 3.0\nValue of y: 9.0\nGradient: 6.0"
        },
        {
          "type": "image",
          "src": "images/day25/autograd_gradient.png",
          "alt": "Curve y = x squared with a tangent line at x = 3 showing slope 6",
          "caption": "At x = 3 the slope of y = x squared is 6, exactly the x.grad value autograd returns"
        },
        {
          "type": "list",
          "items": [
            "We created x with requires_grad=True",
            "PyTorch tracked the mathematical operation",
            "y.backward() calculated the derivative",
            "x.grad returned the gradient"
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "Neural networks have many parameters. Instead of calculating every derivative by hand, PyTorch calculates the gradients automatically."
        }
      ]
    },
    {
      "id": "training",
      "icon": "🏋️",
      "title": "Step 7: Your First Mini Training Workflow",
      "meta": "Learn y = 2x + 1",
      "blocks": [
        {
          "type": "p",
          "text": "Now we connect the concepts. A very simple linear model learns the relationship y = 2x + 1 from five data points. Create src/day25_training.py:"
        },
        {
          "type": "code",
          "lang": "python",
          "title": "src/day25_training.py",
          "code": "import torch\nimport torch.nn as nn\n\n# 1. Create training data\nX = torch.tensor(\n    [[1.0], [2.0], [3.0], [4.0], [5.0]]\n)\ny = torch.tensor(\n    [[3.0], [5.0], [7.0], [9.0], [11.0]]\n)\n\n# 2. Create a simple linear model\nmodel = nn.Linear(1, 1)\n\n# 3. Define loss function\nloss_function = nn.MSELoss()\n\n# 4. Define optimizer\noptimizer = torch.optim.SGD(\n    model.parameters(),\n    lr=0.01\n)\n\n# 5. Training loop\nfor epoch in range(1000):\n\n    # Forward pass\n    predictions = model(X)\n\n    # Calculate error\n    loss = loss_function(predictions, y)\n\n    # Clear previous gradients\n    optimizer.zero_grad()\n\n    # Calculate new gradients\n    loss.backward()\n\n    # Update model parameters\n    optimizer.step()\n\n    if (epoch + 1) % 100 == 0:\n        print(\n            f\"Epoch {epoch+1}, Loss: {loss.item():.4f}\"\n        )\n\n# 6. Test the trained model\ntest_input = torch.tensor([[6.0]])\n\nwith torch.no_grad():\n    prediction = model(test_input)\n\nprint(\"\\nPrediction for input 6:\")\nprint(prediction.item())\n\nprint(\"\\nLearned weight:\")\nprint(model.weight.item())\nprint(\"Learned bias:\")\nprint(model.bias.item())",
          "output": "Epoch 100, Loss: 0.0065\nEpoch 200, Loss: 0.0033\nEpoch 300, Loss: 0.0017\nEpoch 400, Loss: 0.0009\nEpoch 500, Loss: 0.0004\nEpoch 600, Loss: 0.0002\nEpoch 700, Loss: 0.0001\nEpoch 800, Loss: 0.0001\nEpoch 900, Loss: 0.0000\nEpoch 1000, Loss: 0.0000\n\nPrediction for input 6:\n13.005916595458984\n\nLearned weight:\n2.0024757385253906\nLearned bias:\n0.9910624623298645"
        },
        {
          "type": "p",
          "text": "Run it with: python src/day25_training.py"
        },
        {
          "type": "image",
          "src": "images/day25/learned_line.png",
          "alt": "Training points, the learned line close to y = 2x + 1, and a falling loss curve",
          "caption": "What training achieves: the line fits the data and the loss keeps falling (NumPy simulation of this same loop)"
        },
        {
          "type": "callout",
          "tone": "info",
          "text": "The model should learn a weight close to 2 and a bias close to 1, and predict about 13 for input 6. The exact numbers vary slightly because the model starts with randomly initialized parameters, so your output will not match this block digit for digit."
        }
      ]
    },
    {
      "id": "workflow",
      "icon": "🔁",
      "title": "Step 8: The Training Workflow",
      "meta": "Foundation of PyTorch",
      "blocks": [
        {
          "type": "image",
          "src": "images/day25/training_loop.png",
          "alt": "Six-step training loop drawn as a cycle",
          "caption": "One epoch: forward pass, loss, zero gradients, backpropagation, optimizer step, then repeat"
        },
        {
          "type": "table",
          "head": [
            "#",
            "Stage",
            "What happens"
          ],
          "rows": [
            [
              "1",
              "Forward pass",
              "Model receives input and generates predictions"
            ],
            [
              "2",
              "Loss calculation",
              "Compare predictions against actual values"
            ],
            [
              "3",
              "Zero gradients",
              "Clear gradients from the previous iteration"
            ],
            [
              "4",
              "Backpropagation",
              "loss.backward() calculates gradients"
            ],
            [
              "5",
              "Optimizer step",
              "optimizer.step() updates the model parameters"
            ],
            [
              "6",
              "Repeat",
              "Continue training over multiple epochs"
            ]
          ]
        },
        {
          "type": "callout",
          "tone": "tip",
          "text": "You will use this same workflow when building neural networks on Day 26."
        }
      ]
    },
    {
      "id": "deliver",
      "icon": "📦",
      "title": "Step 9: Day 25 Deliverables",
      "meta": "Run both files",
      "blocks": [
        {
          "type": "code",
          "lang": "text",
          "title": "src",
          "code": "src/\n|-- day25_pytorch.py\n`-- day25_training.py"
        },
        {
          "type": "p",
          "text": "Create these two files and run both successfully."
        },
        {
          "type": "table",
          "head": [
            "Topic",
            "What you learned"
          ],
          "rows": [
            [
              "PyTorch",
              "Deep learning framework"
            ],
            [
              "Tensors",
              "Data representation"
            ],
            [
              "Tensor operations",
              "Mathematical calculations"
            ],
            [
              "CPU vs GPU",
              "Processing devices"
            ],
            [
              "Autograd",
              "Automatic gradient calculation"
            ],
            [
              "Forward pass",
              "Generate predictions"
            ],
            [
              "Loss function",
              "Measure prediction error"
            ],
            [
              "Backpropagation",
              "Calculate gradients"
            ],
            [
              "Optimizer",
              "Update model parameters"
            ]
          ]
        }
      ]
    },
    {
      "id": "mini",
      "icon": "🏁",
      "title": "Mini Project: PyTorch Fundamentals Tour",
      "blocks": [
        {
          "type": "p",
          "text": "The Final Program below covers tensors, operations, device selection, autograd and the full training workflow in one file. It starts the weight and bias at 0 so that every run prints the same numbers."
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
            "A tensor stores numbers; ndim and shape describe it",
            "a * b is element-wise, torch.matmul is matrix multiplication",
            "Tensors in one operation must be on the same device",
            "requires_grad and backward() give automatic gradients",
            "Training = forward pass, loss, zero_grad, backward, step, repeated over epochs",
            "A model learns parameters close to the true ones, not exactly equal"
          ]
        }
      ]
    }
  ],
  "finalProgram": {
    "title": "PyTorch Fundamentals Tour",
    "file": "day25_final.py",
    "description": "One program combining Day 25: tensors with ndim and shape, element-wise and matrix operations, device selection, autograd and a full training loop that learns y = 2x + 1 and predicts unseen inputs.",
    "concepts": [
      "tensors",
      "ndim and shape",
      "tensor operations",
      "device selection",
      "autograd",
      "training loop"
    ],
    "code": "import torch\nimport torch.nn as nn\n\nprint(\"=== PYTORCH FUNDAMENTALS ===\")\n\n# 1. Tensors: dimensions and shapes\nscalar = torch.tensor(10)\nvector = torch.tensor([10, 20, 30])\nmatrix = torch.tensor([[1, 2], [3, 4]])\ntensor_3d = torch.tensor([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])\n\nprint(\"\\nTensors (ndim, shape):\")\nfor name, t in [(\"scalar\", scalar), (\"vector\", vector),\n                (\"matrix\", matrix), (\"tensor_3d\", tensor_3d)]:\n    print(f\"  {name:<10} {t.ndim}D  {tuple(t.shape)}\")\n\n# 2. Tensor operations\na = torch.tensor([10, 20, 30])\nb = torch.tensor([1, 2, 3])\nx = torch.tensor([[1, 2], [3, 4]])\ny_m = torch.tensor([[5, 6], [7, 8]])\n\nprint(\"\\nOperations:\")\nprint(\"  a + b:\", (a + b).tolist())\nprint(\"  a * b (element-wise):\", (a * b).tolist())\nprint(\"  a / b:\", (a / b).tolist())\nprint(\"  x matmul y:\", torch.matmul(x, y_m).tolist())\nprint(\"  mean of a:\", f\"{a.float().mean().item():.1f}\")\n\n# 3. Device\ndevice = torch.device(\"cuda\" if torch.cuda.is_available() else \"cpu\")\nprint(\"\\nDevice in use:\", device.type)\n\n# 4. Autograd\nv = torch.tensor(3.0, requires_grad=True)\nout = v ** 2\nout.backward()\nprint(\"\\nAutograd: x =\", v.item(), \"| y =\", out.item(), \"| gradient =\", v.grad.item())\n\n# 5. Training workflow: learn y = 2x + 1\nX = torch.tensor([[1.0], [2.0], [3.0], [4.0], [5.0]])\ny = torch.tensor([[3.0], [5.0], [7.0], [9.0], [11.0]])\n\nmodel = nn.Linear(1, 1)\nwith torch.no_grad():                 # fixed start so every run matches\n    model.weight.fill_(0.0)\n    model.bias.fill_(0.0)\n\nloss_function = nn.MSELoss()\noptimizer = torch.optim.SGD(model.parameters(), lr=0.01)\n\nprint(\"\\nTraining (weight and bias start at 0):\")\nfor epoch in range(1000):\n    predictions = model(X)                 # forward pass\n    loss = loss_function(predictions, y)   # loss calculation\n    optimizer.zero_grad()                  # zero gradients\n    loss.backward()                        # backpropagation\n    optimizer.step()                       # optimizer step\n    if (epoch + 1) % 200 == 0:\n        print(f\"  Epoch {epoch + 1}, Loss: {loss.item():.4f}\")\n\nprint(\"\\nLearned weight:\", f\"{model.weight.item():.4f}\", \"(target 2)\")\nprint(\"Learned bias:\", f\"{model.bias.item():.4f}\", \"(target 1)\")\n\nprint(\"\\nPredictions on unseen inputs:\")\nwith torch.no_grad():\n    for value in [6.0, 7.0, 10.0]:\n        pred = model(torch.tensor([[value]])).item()\n        print(f\"  input {value:.0f} -> {pred:.2f} (true {2 * value + 1:.0f})\")",
    "output": "=== PYTORCH FUNDAMENTALS ===\n\nTensors (ndim, shape):\n  scalar     0D  ()\n  vector     1D  (3,)\n  matrix     2D  (2, 2)\n  tensor_3d  3D  (2, 2, 2)\n\nOperations:\n  a + b: [11, 22, 33]\n  a * b (element-wise): [10, 40, 90]\n  a / b: [10.0, 10.0, 10.0]\n  x matmul y: [[19, 22], [43, 50]]\n  mean of a: 20.0\n\nDevice in use: cpu\n\nAutograd: x = 3.0 | y = 9.0 | gradient = 6.0\n\nTraining (weight and bias start at 0):\n  Epoch 200, Loss: 0.0081\n  Epoch 400, Loss: 0.0021\n  Epoch 600, Loss: 0.0005\n  Epoch 800, Loss: 0.0001\n  Epoch 1000, Loss: 0.0000\n\nLearned weight: 2.0039 (target 2)\nLearned bias: 0.9860 (target 1)\n\nPredictions on unseen inputs:\n  input 6 -> 13.01 (true 13)\n  input 7 -> 15.01 (true 15)\n  input 10 -> 21.02 (true 21)"
  },
  "practice": [
    {
      "title": "Tensor Toolbox: Student Marks",
      "level": "Easy",
      "file": "practice1.py",
      "description": "Use shapes, averages, broadcasting, reshaping and matrix multiplication on a marks tensor.",
      "tasks": [
        "Print the shape and number of dimensions",
        "Average marks per student (mean over dim=1), printed with 2 decimals",
        "Average marks per subject (mean over dim=0), printed with 2 decimals",
        "Add 5 bonus marks to every value and print it with .tolist()",
        "Reshape marks to (3, 2) and print it with .tolist()",
        "Use torch.matmul with weights [[0.3], [0.3], [0.4]] to get each student's weighted score"
      ],
      "hint": "mean(dim=1) averages across each row. torch.matmul of a (2, 3) tensor and a (3, 1) tensor gives a (2, 1) tensor; use .flatten() to print it.",
      "starter": "import torch\n\nmarks = torch.tensor([\n    [70.0, 80.0, 90.0],\n    [60.0, 75.0, 85.0]\n])   # rows = students, columns = subjects\n\n# TODO 1: print the shape and the number of dimensions\n# TODO 2: average marks per student (mean over dim=1), printed with 2 decimals\n# TODO 3: average marks per subject (mean over dim=0), printed with 2 decimals\n# TODO 4: add 5 bonus marks to every value and print it with .tolist()\n# TODO 5: reshape marks to (3, 2) and print it with .tolist()\n# TODO 6: weights = [[0.3], [0.3], [0.4]]; use torch.matmul to get each student's weighted score (2 decimals)",
      "solution": "import torch\n\nmarks = torch.tensor([\n    [70.0, 80.0, 90.0],\n    [60.0, 75.0, 85.0]\n])   # rows = students, columns = subjects\n\nprint(\"Shape:\", marks.shape)\nprint(\"Dimensions:\", marks.ndim)\n\nstudent_avg = marks.mean(dim=1)\nprint(\"Average per student:\", \" \".join(f\"{v:.2f}\" for v in student_avg.tolist()))\n\nsubject_avg = marks.mean(dim=0)\nprint(\"Average per subject:\", \" \".join(f\"{v:.2f}\" for v in subject_avg.tolist()))\n\nbonus = marks + 5\nprint(\"With bonus:\", bonus.tolist())\n\nreshaped = marks.reshape(3, 2)\nprint(\"Reshaped (3, 2):\", reshaped.tolist())\n\nweights = torch.tensor([[0.3], [0.3], [0.4]])\nweighted = torch.matmul(marks, weights)\nprint(\"Weighted score per student:\", \" \".join(f\"{v:.2f}\" for v in weighted.flatten().tolist()))",
      "output": "Shape: torch.Size([2, 3])\nDimensions: 2\nAverage per student: 80.00 73.33\nAverage per subject: 65.00 77.50 87.50\nWith bonus: [[75.0, 85.0, 95.0], [65.0, 80.0, 90.0]]\nReshaped (3, 2): [[70.0, 80.0], [90.0, 60.0], [75.0, 85.0]]\nWeighted score per student: 81.00 74.50",
      "note": "Adding 5 to the whole tensor works through broadcasting. The weighted scores weigh the third subject most (0.4)."
    },
    {
      "title": "Gradient Descent with Autograd",
      "level": "Medium",
      "file": "practice2.py",
      "description": "Minimise (x - 4)^2 by hand-written gradient descent and check a derivative with autograd.",
      "tasks": [
        "Create x = 0.0 with requires_grad=True and a learning rate of 0.1",
        "Loop 20 steps: loss = (x - 4) ** 2, then loss.backward()",
        "Inside torch.no_grad(): x -= lr * x.grad, then x.grad.zero_()",
        "Every 5 steps print the step, x and the loss with 4 decimals",
        "Compute the gradient of z = x^3 + 2x at x = 2 with autograd",
        "Print the value you expect from the derivative 3x^2 + 2"
      ],
      "hint": "Gradients accumulate, so call x.grad.zero_() after every update. Update the tensor inside torch.no_grad() so the update itself is not tracked.",
      "starter": "import torch\n\n# Part A: gradient descent with autograd (no nn module)\n# TODO 1: x = tensor 0.0 with requires_grad=True, lr = 0.1\n# TODO 2: loop 20 steps: loss = (x - 4) ** 2, then loss.backward()\n# TODO 3: inside torch.no_grad(): x -= lr * x.grad, then x.grad.zero_()\n# TODO 4: every 5 steps print the step, x and the loss (4 decimals)\n\n# Part B: derivative of z = x^3 + 2x at x = 2\n# TODO 5: compute it with autograd and print the gradient with 1 decimal\n# TODO 6: print the answer you expect from the derivative 3x^2 + 2",
      "solution": "import torch\n\n# Part A: gradient descent with autograd (no nn module)\nx = torch.tensor(0.0, requires_grad=True)\nlr = 0.1\n\nfor step in range(1, 21):\n    loss = (x - 4) ** 2\n    loss.backward()\n\n    with torch.no_grad():\n        x -= lr * x.grad\n    x.grad.zero_()\n\n    if step % 5 == 0:\n        print(f\"Step {step}: x = {x.item():.4f}, loss = {loss.item():.4f}\")\n\n# Part B: derivative of z = x^3 + 2x at x = 2\nx2 = torch.tensor(2.0, requires_grad=True)\nz = x2 ** 3 + 2 * x2\nz.backward()\n\nprint(f\"Gradient of x^3 + 2x at x=2: {x2.grad.item():.1f}\")\nprint(\"Expected from 3x^2 + 2:\", 3 * 2 ** 2 + 2)",
      "output": "Step 5: x = 2.6893, loss = 2.6844\nStep 10: x = 3.5705, loss = 0.2882\nStep 15: x = 3.8593, loss = 0.0309\nStep 20: x = 3.9539, loss = 0.0033\nGradient of x^3 + 2x at x=2: 14.0\nExpected from 3x^2 + 2: 14",
      "note": "x moves toward the minimum at 4 and the loss shrinks each step. Without zero_(), gradients would add up and the steps would be wrong."
    }
  ],
  "checklist": [
    "Installed PyTorch and checked CUDA",
    "Created scalar, vector, matrix and 3D tensors",
    "Used ndim and shape",
    "Ran tensor operations",
    "Understood CPU vs GPU devices",
    "Calculated a gradient with autograd",
    "Ran day25_pytorch.py and day25_training.py"
  ],
  "quiz": [
    {
      "q": "What is the shape of a matrix with 2 rows and 3 columns?",
      "options": [
        "(3, 2)",
        "(2, 3)",
        "(6,)",
        "(2, 3, 1)"
      ],
      "answer": 1,
      "why": "Shape lists the size along each dimension, rows first: (2, 3)."
    },
    {
      "q": "What does a * b do for two tensors of the same shape?",
      "options": [
        "Matrix multiplication",
        "Element-wise multiplication",
        "Dot product only",
        "Concatenation"
      ],
      "answer": 1,
      "why": "The * operator multiplies matching elements. Use torch.matmul for matrix multiplication."
    },
    {
      "q": "What does requires_grad=True do?",
      "options": [
        "Moves the tensor to the GPU",
        "Makes PyTorch track operations to compute gradients",
        "Converts it to integers",
        "Freezes the tensor"
      ],
      "answer": 1,
      "why": "PyTorch records operations on the tensor so that backward() can calculate gradients automatically."
    },
    {
      "q": "Why call optimizer.zero_grad() in each training iteration?",
      "options": [
        "To speed up training",
        "To clear gradients left from the previous iteration",
        "To reset the weights to zero",
        "To change the learning rate"
      ],
      "answer": 1,
      "why": "Gradients accumulate by default. Clearing them ensures each update uses only the current iteration's gradients."
    },
    {
      "q": "Which order is the PyTorch training workflow?",
      "options": [
        "Backward, forward, loss, step",
        "Forward pass, loss, zero grad, backward, optimizer step",
        "Step, loss, forward, backward",
        "Loss, step, zero grad, forward"
      ],
      "answer": 1,
      "why": "Predict (forward pass), measure the error (loss), clear old gradients, compute new ones (backward), then update the parameters (step)."
    }
  ]
},
  ]
};