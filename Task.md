Day 24 — API Testing, Error Handling & Docker
Practical ML Engineering
 Day 24 of 30


Yesterday, you successfully exposed your Credit Card Fraud Detection model through FastAPI.

Today, we'll make that API more reliable and prepare it to run in a portable environment.

Our three goals:
1. Test whether the API works correctly.
2. Handle invalid inputs and application errors.
3. Package the ML API using Docker.
1. Understand what we're building
Imagine someone sends your API an invalid transaction, or your application crashes while making a prediction.

A professional ML API should be able to:
- Detect invalid requests.
- Return meaningful error responses.
- Be tested automatically.
- Run consistently on another computer or server.
Today's architecture:
FastAPI application

Your Day 23 prediction API

Automated testing

pytest + TestClient

Error handling

Validate requests and handle failures

Docker container

Package the application and its dependencies


2. Part A — Automated API testing
What is API testing?
Until now, you've manually opened Swagger at /docs, clicked Execute, and checked the response.

That is manual testing.

Automated testing means writing Python code that checks your API automatically.

We'll use:
- pytest: Runs automated tests.
- TestClient: Sends test requests to your FastAPI application without manually starting a server.
Step 1: Install testing dependencies
Run this in your VS Code terminal, from the project root:
python -m pip install pytest httpx


Add these to your existing requirements.txt:
pytest
httpx


Keep all your previous dependencies.
Step 2: Create a test file
Your project should now look like this:
Fraud_Detection_Project/
│
├── models/
│   └── fraud_detection_v1.joblib
│
├── src/
│   ├── train.py
│   ├── predict.py
│   └── app.py
│
├── tests/
│   └── test_app.py          ← NEW
│
├── reports/
│   └── evaluation.txt
│
└── requirements.txt


Create tests/test_app.py and add:
# ==================================================# DAY 24 - AUTOMATED API TESTING# ==================================================from fastapi.testclient import TestClientfrom src.app import app, featuresclient = TestClient(app)# Test 1: Check whether API is runningdef test_health_check():    response = client.get("/health")    assert response.status_code == 200    assert response.json()["status"] == "healthy"# Test 2: Check whether prediction worksdef test_prediction():    # Create sample input with every required feature    sample = {        feature: 0.0 for feature in features    }    response = client.post(        "/predict",        json=sample    )    assert response.status_code == 200    result = response.json()



Step 3: Run the tests
Stop your existing Uvicorn server with Ctrl + C if it is running.

Then execute:
python -m pytest -v


Expected result:
tests/test_app.py::test_health_check PASSED
tests/test_app.py::test_prediction PASSED
tests/test_app.py::test_missing_feature PASSED
tests/test_app.py::test_extra_feature PASSED

================ 4 passed ================


4 automated tests
Your actual terminal may display slightly different output, but all four tests should pass.

What did we test?
Test	What it checks
Health check	API is working
Prediction	Model returns a valid response
Missing feature	API rejects incomplete input
Extra feature	API rejects unexpected input

Notice something important: the test uses zero-filled sample data. It checks whether the API works, not whether the model is accurate.
3. Part B — Error handling
Testing helps us discover problems. Error handling helps our application respond properly when problems occur.

Let's improve the prediction endpoint in src/app.py.

Find your existing predict() function and replace it with this:
from fastapi import HTTPException# Replace your existing prediction endpoint with this@app.post("/predict")def predict(transaction: TransactionInput):    try:        transaction_data = transaction.model_dump()        input_df = pd.DataFrame(            [transaction_data],            columns=features        )        probability = float(            pipeline.predict_proba(input_df)[0, 1]        )        prediction = probability >= threshold        result = (            "Fraud" if prediction else "Legitimate"        )        return {            "fraud_probability": round(probability, 6),            "threshold": threshold,            "prediction": result        }    except Exception:        # Log the real error in the server terminal        import logging        logging.exception("Prediction failed")



Also add this import at the top of app.py:
from fastapi import HTTPException



Why do we need this?

Imagine your model encounters an unexpected runtime problem.

Without proper error handling, the client may receive an unclear server error.

With HTTPException, your API can return a controlled response:
{
  "detail": "Prediction failed due to an internal server error."
}


With status code:
500 Internal Server Error


The actual error is logged in your server terminal, rather than exposed to the client.

Remember:
- 422 = invalid input.
- 500 = unexpected problem inside the application.
- 200 = successful request.
Your Pydantic validation already handles missing, extra, and invalid fields before the prediction function executes.
4. Part C — Docker fundamentals
Now comes an important concept in AI/ML engineering.
What is Docker?
Suppose your API works perfectly on your Windows laptop.

But when you move it to another computer, it might fail because:
- Python versions are different.
- Required libraries are missing.
- Dependencies conflict.
- Files are located in different places.
Docker helps solve this problem by packaging your application and its dependencies into a portable container image.

Think of it this way:
- Dockerfile: Instructions for packaging your application.
- Docker image: The packaged blueprint.
- Docker container: A running instance of that image.








mlrepa.github.io


Step 1: Install Docker Desktop
If Docker Desktop is not installed, install it for Windows:
Download Docker Desktop for WindowsAfter installation, open Docker Desktop and wait until its engine is running.

Check Docker in your VS Code terminal:
docker --version


Then:
docker info


The second command should display information about the running Docker engine.
Step 2: Create a Dockerfile
Create a file named exactly:
Dockerfile


Place it in the root of Fraud_Detection_Project, alongside requirements.txt.

Use this:

# Use Python 3.11 as the base environment.
# Change this version if your local Python version differs.
FROM python:3.11-slim

# Set application working directory
WORKDIR /app

# Copy dependency list
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application source code
COPY src/ ./src/

# Copy saved ML model
COPY models/ ./models/

# API listens on port 8000
EXPOSE 8000

# Start FastAPI using Uvicorn
CMD ["uvicorn", "src.app:app", "--host", "0.0.0.0", "--port", "8000"]



Important compatibility note: The Python and scikit-learn versions used in Docker should match the environment used to save your Joblib model as closely as possible. Otherwise, model-loading compatibility problems can occur. Check your local versions using:
python --version
python -c "import sklearn; print(sklearn.__version__)"


If your Python version is not 3.11, change the Dockerfile's base image accordingly. Also pin your installed scikit-learn version in requirements.txt to the version you used to train the model.
Step 3: Create .dockerignore
Create another file in the project root:
.dockerignore


Add:
.venv/
venv/
__pycache__/
.pytest_cache/
.git/
.vscode/
*.pyc


This prevents unnecessary development files from being copied into the Docker build.
Step 4: Build your Docker image
Make sure your terminal is in the project root.

Run:
docker build -t fraud-detection-api:v1 .


What happens?
1. Docker reads your Dockerfile.
2. Downloads the Python base image if needed.
3. Installs your dependencies.
4. Copies your FastAPI code.
5. Copies your saved ML model.
6. Creates a Docker image.
Check the image:
docker images


You should find:
fraud-detection-api


Step 5: Run your Docker container
Execute:
docker run -d --name fraud-api -p 8000:8000 fraud-detection-api:v1


Understand the command:
Part	Meaning
-d	Run in the background
--name fraud-api	Give the container a name
-p 8000:8000	Connect your computer's port 8000 to the container's port 8000
fraud-detection-api:v1	Image to run

Now open:
Open your Dockerized API documentationTry the /health and /predict endpoints again.

If the health endpoint returns:
{
  "status": "healthy",
  "model_loaded": true
}


your API is running inside Docker!

Note: Stop your local Uvicorn server before running the container, otherwise both applications may try to use port 8000.

Useful Docker commands:
# See running containers
docker ps

# See application logs
docker logs fraud-api

# Stop container
docker stop fraud-api

# Start it again
docker start fraud-api

# Remove stopped container
docker rm -f fraud-api


5. Final project structure
After Day 24, your project should look like this:
Fraud_Detection_Project/
│
├── models/
│   └── fraud_detection_v1.joblib
│
├── src/
│   ├── train.py
│   ├── predict.py
│   └── app.py
│
├── tests/
│   └── test_app.py
│
├── reports/
│   └── evaluation.txt
│
├── Dockerfile
├── .dockerignore
└── requirements.txt