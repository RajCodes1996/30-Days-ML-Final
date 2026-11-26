8. Next — Day 27
Upcoming
NLP & Hugging Face Transformers








softaai.com


We'll cover:
- Natural Language Processing fundamentals.
- Text tokenization.
- Pretrained models.
- Hugging Face Transformers.
- Your first practical NLP application.

Today's target: Run day26_ann.py successfully and save breast_cancer_ann.pth.

Once you have your terminal output, share it with me. We'll proceed directly to Day 27 without quizzes.

















proceed with day-27 i will share the output later as deadline is coming closer!












Let's move! 🚀 Since your deadline is approaching, we'll keep Day 27 focused on learning the essential concepts and building a working NLP application. You can share your outputs later.
Day 27 — NLP & Hugging Face Transformers
Deep Learning — NLP
 Day 27 of 30


Today's project: Build an AI-powered Sentiment Analysis application that understands whether a sentence expresses positive or negative sentiment.
1. What is NLP?
NLP (Natural Language Processing) is a field of AI that enables computers to understand and process human language.

Examples of NLP applications:
- ChatGPT and AI assistants.
- Text summarization.
- Sentiment analysis.
- Language translation.
- Spam detection.
- Question answering.
- Text classification.






















6











For example:

Input:
I absolutely love this product!


Expected interpretation:
Sentiment: POSITIVE


Another example:
This product is terrible.


Expected interpretation:
Sentiment: NEGATIVE


2. What is Tokenization?
Computers don't directly understand sentences like humans do.

Before processing text, NLP models convert text into smaller units called tokens.

Example:
I love Machine Learning


A tokenizer might split it into:
["I", "love", "Machine", "Learning"]


The tokenizer then converts those tokens into numerical token IDs.
Text processing workflow
Original text

I love Machine Learning


Tokenization

["I", "love", "Machine", "Learning"]


Numerical token IDs

[101, ..., ..., ...]

Illustrative IDs, not actual tokenizer output.


Transformer model

Understands patterns in the input and generates a prediction.


Important terminology
Term	Meaning
Token	A piece of text
Tokenizer	Converts text into model-compatible tokens
Token ID	Numerical representation of a token
Attention mask	Indicates which tokens are real input versus padding
Embedding	Numerical vector representing a token

3. What are Transformers?
Transformer architecture is an important neural network architecture used in modern AI.

Traditional NLP approaches often struggled with understanding relationships between words across long sentences.

Transformers use a mechanism called self-attention to learn relationships between different tokens in a sequence.

For example:
The animal didn't cross the road because it was tired.


A language model needs to understand what "it" refers to from the surrounding context.

Self-attention helps models learn these contextual relationships.








jalammar.github.io


You don't need to implement a Transformer from scratch today. We'll use an already-trained model.
4. What is Hugging Face?
Hugging Face provides tools, models, datasets, and libraries for machine learning and NLP.

Its popular library is:

Transformers

It gives developers access to pretrained models without having to train everything from scratch.

Examples of pretrained models:
- BERT
- DistilBERT
- RoBERTa
- GPT
- T5


































Official resources:
- Hugging Face Model Hub
- Transformers Documentation
5. Build your first NLP application
Main Day 27 practical project
We'll create a sentiment analyzer using a pretrained DistilBERT model.

Model:

distilbert/distilbert-base-uncased-finetuned-sst-2-english

This model is already trained to classify English text as positive or negative.
Step 1 — Install dependencies
Open VS Code terminal:
python -m pip install transformers torch


The first model download requires an internet connection. The downloaded model is cached locally for subsequent runs.
Step 2 — Project structure
Create a new Python file:
Fraud_Detection_Project/
│
├── src/
│   ├── day25_pytorch.py
│   ├── day25_training.py
│   ├── day26_ann.py
│   └── day27_sentiment.py       ← NEW
│
├── models/
├── reports/
└── requirements.txt


Add the following dependencies to your existing requirements.txt without deleting the previous ones:
transformers
torch


Step 3 — Complete runnable code
Create src/day27_sentiment.py:
# ==========================================================# DAY 27 - NLP WITH HUGGING FACE TRANSFORMERS# Project: Sentiment Analysis Application# ==========================================================from transformers import pipeline, AutoTokenizer# ----------------------------------------------------------# 1. SELECT PRETRAINED MODEL# ----------------------------------------------------------MODEL_NAME = (    "distilbert/distilbert-base-uncased-finetuned-sst-2-english")print("Loading pretrained NLP model...")# ----------------------------------------------------------# 2. LOAD TOKENIZER# ----------------------------------------------------------tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)# ----------------------------------------------------------# 3. LOAD SENTIMENT ANALYSIS PIPELINE# ----------------------------------------------------------sentiment_analyzer = pipeline(    "sentiment-analysis",    model=MODEL_NAME)print("Model loaded successfully!")



Step 4 — Run the application
From your project root:
python src/day27_sentiment.py


Try these inputs:
Test sentences
"I absolutely love learning Artificial Intelligence!"Expected: POSITIVE
 Copy

"This application is terrible and completely useless."Expected: NEGATIVE
 Copy

"The product is amazing and works perfectly."Expected: POSITIVE
 Copy

"I am disappointed with the quality."Expected: NEGATIVE
 Copy


Your output will look approximately like:
AI SENTIMENT ANALYZER

Enter a sentence:
I absolutely love learning Artificial Intelligence!

Prediction Results
------------------
Sentiment: POSITIVE
Confidence: 99.XX %

Analysis completed!


The exact confidence score depends on the input and model.

6. Understand what happened behind the scenes
You only wrote a few lines of model-loading code, but several things happened.
Your NLP application architecture
User enters text


Tokenizer

Text → Token IDs + Attention Mask


Pretrained DistilBERT

Processes contextual information


Sentiment prediction
POSITIVE / NEGATIVE
Classification label and model score


What does confidence mean?
For example:
{
  "label": "POSITIVE",
  "score": 0.998
}


This means the model assigned approximately 99.8% of its classification score to the positive class.

Important: This is the model's confidence score, not a guarantee that the sentence is objectively positive. The model is also designed for English sentiment classification, not every language or every type of text.
7. What you've covered on Day 27
Concept	Status
NLP fundamentals	Covered
Tokenization	Implemented
Token IDs	Implemented
Attention masks	Introduced
Transformers	Explained
Pretrained models	Implemented
Hugging Face	Implemented
Sentiment analysis	Project provided

8. Day 28 — Embeddings, Vector Databases & RAG
Next lesson
Build a basic RAG application

We'll cover:
1. What are embeddings?
2. Semantic search.
3. Vector databases.
4. Similarity search.
5. Retrieval-Augmented Generation (RAG).
6. Build a document question-answering application.

Your immediate priority: Save day27_sentiment.py and run it whenever convenient. You can share Day 26 and Day 27 outputs together later.

We're now moving from traditional ML into modern AI application development. Days 28–30 will focus on putting these technologies together into a practical portfolio project.