Day 23 — Build an ML Prediction API using FastAPI
Hands-on development
 Day 23 of 30

Today's objective
So far, you've built a fraud detection model that can:
- Train on historical transaction data.
- Save the trained model using Joblib.
- Load the saved model.
- Predict whether a transaction is fraudulent.
But there's one important limitation: other applications cannot easily use your Python prediction script.

Today, we'll expose your trained ML model through an API.

For example, another application will be able to send transaction data to:
POST http://127.0.0.1:8000/predict


And receive a response like:
{
  "fraud_probability": 0.12,
  "threshold": 0.95,
  "prediction": "Legitimate"
}


This is how ML models start becoming usable applications.
1. Concepts we'll implement
Concept	What it does
API	Allows applications to communicate
FastAPI	Python framework for building APIs
Endpoint	URL where an API operation is available
HTTP POST	Sends data to an API
Pydantic	Validates incoming data
JSON	Format used to exchange data
Inference API	Uses a trained model to return predictions

Architecture for today:
Client application

Sends transaction data as JSON

FastAPI endpoint

Receives the POST request

Pydantic validation

Checks incoming feature values

Saved ML Pipeline

Loads the Day 21 model and predicts

JSON prediction response

Returns fraud probability and decision


2. Update your project structure
Keep your existing project. Don't modify or retrain the Day 21 model.

Create one new file: src/app.py.
Fraud_Detection_Project/
│
├── models/
│   └── fraud_detection_v1.joblib
│
├── src/
│   ├── train.py
│   ├── predict.py
│   └── app.py              ← NEW
│
├── reports/
│   └── evaluation.txt
│
└── requirements.txt


3. Install the required libraries
Open the VS Code terminal in your project root.

Run:
python -m pip install fastapi "uvicorn[standard]" pydantic


Add these packages to your existing requirements.txt:
fastapi
uvicorn[standard]
pydantic


Keep your existing dependencies, such as pandas, scikit-learn, and joblib.
4. Build your prediction API
Open src/app.py and paste this complete code.
    **{        feature: (float, ...)        for feature in features    })# ----------------------------------------------------------# 4. HEALTH CHECK ENDPOINT# ----------------------------------------------------------@app.get("/")def home():    return {        "message": "Credit Card Fraud Detection API is running!",        "version": "1.0.0"    }@app.get("/health")def health_check():    return {        "status": "healthy",        "model_loaded": True    }# ----------------------------------------------------------# 5. PREDICTION ENDPOINT# ----------------------------------------------------------@app.post("/predict")def predict(transaction: TransactionInput):    # Convert validated input into a DataFrame    transaction_data = transaction.model_dump()    input_df = pd.DataFrame(        [transaction_data],        columns=features    )    # Get fraud probability    probability = float(        pipeline.predict_proba(input_df)[0, 1]    )    # Apply saved decision threshold    prediction = (        probability >= threshold    )    result = (        "Fraud" if prediction else "Legitimate"    )    # Return JSON response    return {        "fraud_probability": round(probability, 6),        "threshold": threshold,        "prediction": result    }



What makes this code important?
There are four key parts:
1. Joblib: Loads the model you trained on Day 21.
2. FastAPI: Creates the API endpoints.
3. Pydantic: Automatically validates the incoming transaction features.
4. Pipeline: Applies the same preprocessing and prediction steps used during training.
Notice that we dynamically generate the Pydantic input model from the saved feature names. This avoids hardcoding a potentially incorrect list of features.
5. Run your API
From the project root, execute:
python -m uvicorn src.app:app --reload


You should see something similar to:
INFO: Uvicorn running on http://127.0.0.1:8000
INFO: Application startup complete.


API running
6. Test your API using Swagger UI
Open your browser:
FastAPI interactive documentation

http://127.0.0.1:8000/docs
  Open API documentationKeep the VS Code terminal running while testing.

Follow these steps:
1. Find GET /health and click Try it out, then Execute.
2. Find POST /predict.
3. Click Try it out.
4. Swagger will show all required feature names from your saved model.
5. Enter numeric values for every required feature. You can use 0 for this initial API smoke test.
6. Click Execute.
Your response should have this structure:
{
  "fraud_probability": 0.006313,
  "threshold": 0.95,
  "prediction": "Legitimate"
}


The numbers above illustrate the response format; your actual output will depend on your input.

Important: Zero-filled input is only for checking that the API works. It is not a realistic credit-card transaction. Real predictions require properly prepared transaction features.
7. Understand Pydantic validation
This is one of today's most useful concepts.

Suppose your API expects numeric features.

If someone sends:
{
  "Amount": "hello"
}


Pydantic will reject the invalid input rather than letting it reach the model.

It also checks that required features are present and rejects unexpected extra fields.

FastAPI automatically returns an HTTP 422 Unprocessable Entity response for invalid request data.