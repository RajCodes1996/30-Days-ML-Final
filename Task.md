Day 25 — PyTorch Fundamentals
Deep Learning Begins
 Day 25 of 30

1. What is PyTorch?
PyTorch is a Python framework used to build and train machine learning and deep learning models.

Think about the difference:
Traditional ML	Deep Learning
Logistic Regression	Neural Networks
Decision Tree	Deep Neural Networks
Random Forest	CNNs, RNNs, Transformers
Scikit-learn	PyTorch

Why learn PyTorch?
- Build neural networks.
- Train deep learning models.
- Work with GPUs.
- Build computer vision applications.
- Work with NLP and modern AI models.
2. Install PyTorch
We'll begin with the CPU version to avoid unnecessary GPU setup complications.

Open your VS Code terminal:
python -m pip install torch


Check the installation:
python -c "import torch; print(torch.__version__)"


Check GPU availability:
import torchprint("PyTorch Version:", torch.__version__)print("CUDA Available:", torch.cuda.is_available())



If CUDA returns False, don't worry. Your exercises can run on the CPU.

If you eventually want NVIDIA GPU acceleration, use the appropriate installation command from the official PyTorch installation selector.

3. Understand Tensors
Today's most important concept
A tensor is a data structure used to store numerical values in PyTorch.

You can think of tensors as an extension of NumPy arrays.
Type	Example	Dimension
Scalar	10	0D
Vector	[10, 20, 30]	1D
Matrix	[[1, 2], [3, 4]]	2D
3D Tensor	Multiple matrices	3D

Visual understanding
0D — Scalar
10
Single value

1D — Vector
[1, 2, 3]
One-dimensional data

2D — Matrix
[[1, 2], [3, 4]]
Rows and columns

3D — Tensor
2 × 2 × 2
Stack of matrices


Your first PyTorch program
Create a new file:
Fraud_Detection_Project/
│
├── src/
│   ├── train.py
│   ├── predict.py
│   ├── app.py
│   └── day25_pytorch.py    ← NEW


Add this code to src/day25_pytorch.py:
import torch# 1. Scalar (0D Tensor)scalar = torch.tensor(10)# 2. Vector (1D Tensor)vector = torch.tensor([10, 20, 30])# 3. Matrix (2D Tensor)matrix = torch.tensor([    [1, 2],    [3, 4]])# 4. 3D Tensortensor_3d = torch.tensor([    [[1, 2], [3, 4]],    [[5, 6], [7, 8]]])print("Scalar:", scalar)print("Vector:", vector)print("Matrix:\n", matrix)print("3D Tensor:\n", tensor_3d)# Check dimensionsprint("\nDimensions:")print(scalar.ndim)print(vector.ndim)print(matrix.ndim)print(tensor_3d.ndim)# Check shapesprint("\nShapes:")print(scalar.shape)print(vector.shape)print(matrix.shape)print(tensor_3d.shape)



Run:
python src/day25_pytorch.py


Understand these two properties:
- ndim: Number of dimensions.
- shape: Size of the tensor along each dimension.
For example, a matrix with 2 rows and 3 columns has shape (2, 3).

4. Tensor Operations
PyTorch allows you to perform mathematical operations directly on tensors.

Add the following code below your previous exercise:
import torcha = torch.tensor([10, 20, 30])b = torch.tensor([1, 2, 3])# Additionprint("Addition:", a + b)# Subtractionprint("Subtraction:", a - b)# Multiplication (element-wise)print("Multiplication:", a * b)# Divisionprint("Division:", a / b)# Matrix multiplicationx = torch.tensor([    [1, 2],    [3, 4]])y = torch.tensor([    [5, 6],    [7, 8]])print("Matrix Multiplication:\n", torch.matmul(x, y))# Other useful operationsprint("Mean:", a.float().mean())print("Maximum:", a.max())print("Minimum:", a.min())



Expected addition:
tensor([11, 22, 33])


One important distinction:
- a * b performs element-wise multiplication.
- torch.matmul(a, b) performs matrix multiplication when the tensor shapes are compatible.
These operations are fundamental to neural network calculations.

5. CPU vs GPU
When training deep learning models, we often perform millions or billions of mathematical operations.

A CPU can handle these calculations, but GPUs are designed to perform many operations in parallel.










CPU

General-purpose processing. Good for everyday tasks and smaller models.











GPU

Highly parallel processing. Useful for large tensor operations and deep learning.


Try this:
import torchif torch.cuda.is_available():    device = torch.device("cuda")    print("GPU Available!")else:    device = torch.device("cpu")    print("Using CPU!")numbers = torch.tensor(    [10, 20, 30],    device=device)print("Tensor:", numbers)print("Device:", numbers.device)



Remember: tensors involved in the same operation generally need to be on the same device.

6. Autograd — Automatic Differentiation
Extremely important for Deep Learning
Before learning neural networks, understand one important concept: Gradient.

Imagine your model predicts a student's marks:
- Actual marks = 80
- Predicted marks = 60
Your model has made an error.

During training, it needs to adjust its parameters to reduce that error.

This is where gradients become important.

PyTorch provides a feature called autograd, which automatically calculates gradients.
Simple example
We have:
\[
y = x^2
\]

The derivative is:
\[
\frac{dy}{dx}=2x
\]

If \(x=3\), the gradient is 6.

Let's make PyTorch calculate it.
import torch# Create a tensor that tracks gradientsx = torch.tensor(3.0, requires_grad=True)# Mathematical operationy = x ** 2# Calculate gradienty.backward()print("Value of x:", x.item())print("Value of y:", y.item())print("Gradient:", x.grad.item())



Expected output:
Value of x: 3.0
Value of y: 9.0
Gradient: 6.0


What happened?
1. We created x with requires_grad=True.
2. PyTorch tracked the mathematical operation.
3. y.backward() calculated the derivative.
4. x.grad returned the gradient.
Why is this useful?

Neural networks have many parameters. Instead of calculating every derivative manually, PyTorch calculates the gradients automatically.

7. Your first mini training workflow
Now let's connect the concepts.

We'll train a very simple linear model using PyTorch.

Our goal:

Given some input values, predict their corresponding output values.

We'll use this relationship:
\[
y = 2x + 1
\]

Our model will try to learn the relationship from data.

Create a separate file:
src/day25_training.py


Paste the following code:
import torchimport torch.nn as nn# 1. Create training dataX = torch.tensor(    [[1.0], [2.0], [3.0], [4.0], [5.0]])y = torch.tensor(    [[3.0], [5.0], [7.0], [9.0], [11.0]])# 2. Create a simple linear modelmodel = nn.Linear(1, 1)# 3. Define loss functionloss_function = nn.MSELoss()# 4. Define optimizeroptimizer = torch.optim.SGD(    model.parameters(),    lr=0.01)# 5. Training loopfor epoch in range(1000):    # Forward pass    predictions = model(X)    # Calculate error    loss = loss_function(predictions, y)    # Clear previous gradients    optimizer.zero_grad()    # Calculate new gradients    loss.backward()    # Update model parameters    optimizer.step()    if (epoch + 1) % 100 == 0:        print(            f"Epoch {epoch+1}, Loss: {loss.item():.4f}"        )# 6. Test the trained modeltest_input = torch.tensor([[6.0]])with torch.no_grad():    prediction = model(test_input)print("\nPrediction for input 6:")print(prediction.item())print("\nLearned weight:")print(model.weight.item())print("Learned bias:")print(model.bias.item())



Run:
python src/day25_training.py


Your model should learn a weight close to 2 and a bias close to 1.

For input 6, its prediction should approach 13.

The exact values may vary slightly because the model starts with randomly initialized parameters.
8. Understand the training workflow
This is the foundation of PyTorch training:
1. Forward pass
   
   Model receives input and generates predictions.
2. Loss calculation
   
   Compare predictions against actual values.
3. Zero gradients
   
   Clear gradients from the previous training iteration.
4. Backpropagation
   
   loss.backward() calculates gradients.
5. Optimizer step
   
   optimizer.step() updates the model parameters.
6. Repeat
   
   Continue training over multiple epochs.
You'll use this same fundamental workflow when building neural networks on Day 26.

9. Day 25 deliverables
Create these two files:
src/
├── day25_pytorch.py
└── day25_training.py


Run both successfully.

Today's concepts:
Topic	What you learned
PyTorch	Deep learning framework
Tensors	Data representation
Tensor operations	Mathematical calculations
CPU vs GPU	Processing devices
Autograd	Automatic gradient calculation
Forward pass	Generate predictions
Loss function	Measure prediction error
Backpropagation	Calculate gradients
Optimizer	Update model parameters