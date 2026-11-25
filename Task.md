Day 22 — Model Saving, Loading & Making Predictions
Practical ML Engineering
 Day 22 of 30

Today's goal
Yesterday, you trained a Credit Card Fraud Detection model and saved it as:
models/
└── fraud_detection_v1.joblib


Today, you'll learn how to use that saved model without training it again.

Think about a real application:
- Training is expensive and happens occasionally.
- A trained model is saved.
- An application loads that model.
- New data comes in.
- The model predicts the result.
That's the workflow we're building today.
1. Understand the workflow
Day 21 — Train the model

Learn patterns from historical data


Save model using Joblib

fraud_detection_v1.joblib


Day 22 — Load the saved model

No retraining required


Predict on new transactions

Fraud or legitimate


2. Important concepts
Concept	Meaning
Model persistence	Saving a trained model
Joblib	Python library for saving/loading objects
Inference	Using a trained model to make predictions
Model artifact	Saved model plus required configuration
Versioning	Keeping track of model versions

Remember: fit() trains the model. predict() uses the trained model. You don't need fit() every time you want a prediction.
3. Your Day 22 project
We'll create a separate prediction script that loads your Day 21 model.

Project structure
Fraud_Detection_Project/
│
├── models/
│   └── fraud_detection_v1.joblib
│
├── src/
│   ├── train.py
│   └── predict.py       ← CREATE THIS
│
├── reports/
│   └── evaluation.txt
│
└── requirements.txt


Create src/predict.py and paste this code:
MODEL_PATH = os.path.join(    PROJECT_ROOT,    "models",    "fraud_detection_v1.joblib")print("Loading saved model...")artifact = joblib.load(MODEL_PATH)pipeline = artifact["pipeline"]threshold = artifact["threshold"]features = artifact["features"]print("Model loaded successfully!")print("Model threshold:", threshold)# 3. Create sample transaction data# Values here are illustrative, not real transaction records.sample_data = {    feature: [0.0] for feature in features}sample_data["Amount"] = [100.0]sample_data["Time"] = [10000.0]new_transaction = pd.DataFrame(sample_data)# Ensure correct feature ordernew_transaction = new_transaction[features]# 4. Make predictionfraud_probability = pipeline.predict_proba(    new_transaction)[0, 1]prediction = int(    fraud_probability >= threshold)# 5. Display resultprint("\nTRANSACTION ANALYSIS")print("--------------------")print(    f"Fraud Probability: {fraud_probability:.4%}")print(    f"Decision Threshold: {threshold:.2%}")if prediction == 1:    print("RESULT: FRAUD DETECTED")else:    print("RESULT: LEGITIMATE TRANSACTION")



Important: This sample uses zero-filled illustrative feature values. It demonstrates the inference workflow, not a realistic fraud prediction. In a real application, the input must contain correctly prepared transaction features.
4. Run the project
Open your VS Code terminal in the project root:
python src/predict.py


Expected output format:
Loading saved model...
Model loaded successfully!
Model threshold: 0.95

TRANSACTION ANALYSIS
--------------------
Fraud Probability: ...
Decision Threshold: 95.00%
RESULT: ...


Your actual probability and result may differ if you change the sample values.
5. What you should understand today
By the end of this exercise, you should be able to explain:
1. Why do we save a trained ML model?
2. What is the difference between training and inference?
3. Why do we save the threshold along with the model?
4. Why should new data have the same feature names and order as training data?
5. Why should we avoid retraining every time an application starts?