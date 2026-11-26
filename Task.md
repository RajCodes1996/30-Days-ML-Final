Day 28 — Embeddings, Vector Databases & RAG
Modern AI application development
 Day 28 of 30

1. What are embeddings?
So far, you've worked with numerical data and text classification.

Now imagine you have 100 documents. A user asks:

"What are the refund conditions?"

You want your application to find the documents that discuss refunds, even if they don't contain exactly the same words.

This is where embeddings become useful.

An embedding converts text into a list of numbers (a vector) that represents its semantic meaning.

For example, these sentences have similar meanings:
- "I love machine learning."
- "Artificial intelligence is fascinating."
An embedding model can represent them as vectors that are relatively close to one another.

Simple distinction:
- Traditional text search looks for matching words.
- Semantic search looks for similar meaning.
2. What is a Vector Database?
A vector database stores embeddings and helps us find similar vectors efficiently.

For today's project, we'll use ChromaDB.

Our workflow:
1. Collect documents.
2. Split documents into smaller chunks.
3. Convert chunks into embeddings.
4. Store embeddings in ChromaDB.
5. Convert the user's question into an embedding.
6. Retrieve the most relevant chunks.
3. What is RAG?
Important modern AI concept
RAG stands for Retrieval-Augmented Generation.

Instead of asking an AI model to answer entirely from its existing knowledge, we first retrieve relevant information from our own documents and provide that information as context.
Your documents

PDFs, text files, notes, manuals

Chunking + Embeddings

Split text and convert it into vectors

Vector Database

Store and retrieve relevant information

Relevant context + User question

LLM generates an answer

Grounded in retrieved document content


A RAG application has two major stages:
- Indexing: Prepare and store document embeddings.
- Retrieval and generation: Find relevant chunks and use an AI model to answer.
4. Build your first RAG application
Day 28 practical project
We'll build a Personal Knowledge Assistant. It will search your own documents and answer questions using their content.

We'll use:
Technology	Purpose
Python	Application logic
Sentence Transformers	Generate embeddings
ChromaDB	Store and search vectors
Hugging Face Transformers	Generate answers
FLAN-T5	Small pretrained text-generation model

This is a local-model approach: you won't need an OpenAI API key. The first run requires internet access to download the models and libraries.
Step 1 — Install dependencies
From your VS Code terminal:
python -m pip install sentence-transformers chromadb transformers torch sentencepiece


Step 2 — Create the project structure
Keep this separate from your fraud detection project so your ML experiments remain organized.
My_AI_Projects/
│
└── Day28_RAG_Assistant/
    │
    ├── data/
    │   └── knowledge.txt
    │
    ├── chroma_db/
    │
    ├── src/
    │   ├── index_documents.py
    │   └── ask_question.py
    │
    └── requirements.txt


Step 3 — Create your knowledge document
Create data/knowledge.txt.

Paste this sample content:
MACHINE LEARNING

Machine learning is a branch of artificial intelligence.
It enables computers to learn patterns from data.
Common machine learning algorithms include linear regression,
decision trees, random forests, and logistic regression.

DEEP LEARNING

Deep learning is a subset of machine learning.
It uses artificial neural networks with multiple layers.
PyTorch and TensorFlow are popular deep learning frameworks.

NATURAL LANGUAGE PROCESSING

Natural Language Processing enables computers to process
and understand human language.
Common applications include sentiment analysis,
text classification, translation, and chatbots.

RETRIEVAL AUGMENTED GENERATION

RAG stands for Retrieval-Augmented Generation.
It combines information retrieval with language generation.
A RAG application retrieves relevant information from
external documents and provides it as context to a language model.

EMBEDDINGS

Embeddings represent text, images, or other information
as numerical vectors.
Similar meanings are generally represented by vectors
that are close together in the embedding space.

VECTOR DATABASES

Vector databases store and retrieve vector embeddings.
They are useful for semantic search and AI applications.
ChromaDB is an example of a vector database.


This is our small knowledge base. Later, you can replace it with your own project notes, documentation, or other text documents.
Step 4 — Create the document indexing program
Create src/index_documents.py.

This program will:
1. Read your document.
2. Split it into smaller chunks.
3. Generate embeddings.
4. Store the chunks and embeddings in ChromaDB.
# =====================================================# DAY 28 - DOCUMENT INDEXING# Create embeddings and store them in ChromaDB# =====================================================from pathlib import Pathimport chromadbfrom sentence_transformers import SentenceTransformer# 1. Locate project foldersPROJECT_ROOT = Path(__file__).resolve().parent.parentDOCUMENT_PATH = PROJECT_ROOT / "data" / "knowledge.txt"DATABASE_PATH = PROJECT_ROOT / "chroma_db"# 2. Load embedding modelprint("Loading embedding model...")embedding_model = SentenceTransformer(    "sentence-transformers/all-MiniLM-L6-v2")# 3. Read documenttext = DOCUMENT_PATH.read_text(encoding="utf-8")# 4. Split document into chunks



Understand the important line:
embedding_model.encode(chunks)



This converts your text chunks into numerical vectors.

ChromaDB stores these vectors so that we can search for semantically similar information later.
Step 5 — Create the question-answering program
Create src/ask_question.py.

This program retrieves relevant document chunks and passes them to a pretrained language model.
# =====================================================# DAY 28 - RAG QUESTION ANSWERING# Retrieve relevant documents and generate an answer# =====================================================from pathlib import Pathimport chromadbimport torchfrom sentence_transformers import SentenceTransformerfrom transformers import pipeline# 1. Locate databasePROJECT_ROOT = Path(__file__).resolve().parent.parentDATABASE_PATH = PROJECT_ROOT / "chroma_db"# 2. Load embedding modelprint("Loading embedding model...")embedding_model = SentenceTransformer(    "sentence-transformers/all-MiniLM-L6-v2")# 3. Connect to ChromaDBclient = chromadb.PersistentClient(    path=str(DATABASE_PATH))



Step 6 — Run the application
First, build the vector database:
python src/index_documents.py


Expected output:
Loading embedding model...
Total document chunks: 6
Generating embeddings...

Indexing completed successfully!
Stored chunks: 6


Then start the assistant:
python src/ask_question.py


Try these questions:
What is deep learning?

Which frameworks are used for deep learning?

What is RAG?

What are embeddings?

What is ChromaDB?


Also try:
What is quantum computing?


The assistant should indicate that the information isn't available in your document context. However, remember that a prompt instruction cannot guarantee that a language model will never hallucinate.
5. Understand the complete RAG workflow


Let's translate the code into simple language:
Code component	What it does
read_text()	Reads your knowledge document
chunks	Breaks the document into pieces
SentenceTransformer	Converts text into embeddings
ChromaDB	Stores and searches embeddings
collection.query()	Retrieves relevant chunks
pipeline()	Loads the language model
generator()	Generates an answer using retrieved context

One important distinction: ChromaDB is the retrieval component. FLAN-T5 is the generation component. Together, they form our basic RAG application.

For this first project, we use paragraph-level chunks. Production RAG systems often need better chunking, metadata, retrieval evaluation, source tracking, and safeguards against irrelevant or malicious document content.