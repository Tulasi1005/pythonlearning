import fs from 'fs';
import path from 'path';
import { writeCleanData } from './dataWriter.js';

// Section 1: Python Basics (1-7)
const pythonBasics = [
  {
    id: "what-is-python",
    topicNumber: 1,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "What is Python?",
    shortDescription: "An introduction to Python, its core philosophy, key characteristics, and why it is one of the world's most popular programming languages.",
    whatYouWillLearn: [
      "Understand what high-level, interpreted languages are",
      "Key features of Python (readable syntax, dynamic typing, rich standard library)",
      "Popular use-cases: Web, Data Science, AI, Automation, and Scripting",
      "Why Python's design philosophy prioritizes developer productivity and code readability"
    ],
    explanation: "Python is a high-level, general-purpose, interpreted programming language created by Guido van Rossum and first released in 1991.\n\nUnlike lower-level languages that require manual memory management and complex syntax (like C or C++), Python emphasizes readability and simplicity. Its syntax closely resembles plain English, allowing programmers to express concepts in fewer lines of code.\n\nKey Characteristics:\n1. Interpreted: Code is executed line-by-line without an explicit pre-compilation step, enabling rapid prototyping and interactive testing.\n2. Dynamically Typed: You do not need to explicitly declare variable types. Python infers types at runtime.\n3. Cross-Platform: Python scripts run seamlessly on Windows, macOS, Linux, and web servers.\n4. Huge Ecosystem: With over 400,000 packages on PyPI, Python powers everything from simple scripts to modern AI frameworks like PyTorch and TensorFlow.",
    example: {
      code: "# Your very first taste of Python\nmessage = \"Welcome to Python!\"\nprint(message)\nprint(f\"Length of message: {len(message)} characters\")",
      output: "Welcome to Python!\nLength of message: 18 characters",
      howItWorks: "The variable 'message' holds a string of text. The built-in print() function outputs the text to the console, and len() computes the total number of characters."
    },
    commonMistakes: [
      "Assuming Python is compiled directly to machine code like C/C++ (it compiles to bytecode run on the Python Virtual Machine).",
      "Mixing Python 2 syntax (like 'print text' without parentheses) with Python 3."
    ],
    practiceQuestions: [
      {
        question: "Write a Python statement that stores your favorite language name in a variable named 'lang' and prints it.",
        answer: "lang = \"Python\"\nprint(\"My favorite language is\", lang)",
        output: "My favorite language is Python"
      }
    ],
    interviewQuestion: "Why is Python considered an 'interpreted' language, and how does it actually execute code?",
    interviewAnswer: "Python source code (.py) is first compiled into intermediate bytecode (.pyc), which is then executed by the Python Virtual Machine (PVM). Because bytecode is interpreted dynamically at runtime, Python is classified as an interpreted language."
  },
  {
    id: "installing-python",
    topicNumber: 2,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "Installing Python",
    shortDescription: "How to install Python on your operating system, verify the installation, and set up your development environment.",
    whatYouWillLearn: [
      "Downloading the official Python installer from python.org",
      "Adding Python to system PATH on Windows",
      "Verifying installation via terminal / command prompt",
      "Understanding the difference between python and pip"
    ],
    explanation: "To start coding in Python, you need the Python interpreter installed on your system.\n\nInstallation Steps:\n1. Visit the official website: https://www.python.org/downloads/\n2. Download the latest Python 3 installer for your OS (Windows, macOS, or Linux).\n3. On Windows: IMPORTANT — check the checkbox 'Add Python to PATH' before clicking 'Install Now'.\n4. Verify by opening your terminal or Command Prompt and running:\n   python --version  (or python3 --version)\n   pip --version\n\nRecommended IDEs / Code Editors:\n- VS Code (with the official Python extension)\n- PyCharm (Community or Professional Edition)\n- IDLE (comes built-in with standard Python on Windows)",
    example: {
      code: "# Check your Python version programmatically\nimport sys\n\nprint(\"Python Version:\", sys.version.split()[0])\nprint(\"Executable Path:\", sys.executable)",
      output: "Python Version: 3.11.8\nExecutable Path: C:\\Python311\\python.exe",
      howItWorks: "The built-in 'sys' module gives direct access to the Python interpreter's runtime configuration, platform details, and version string."
    },
    commonMistakes: [
      "Forgetting to check 'Add python.exe to PATH' during Windows installation, which causes 'python is not recognized as an internal or external command'.",
      "Having multiple Python versions installed and using the wrong pip to install packages."
    ],
    practiceQuestions: [
      {
        question: "What command in the terminal checks which Python version is currently installed?",
        answer: "python --version  # or python3 --version",
        output: "Python 3.x.x"
      }
    ],
    interviewQuestion: "What is PATH environment variable and why is it important for Python?",
    interviewAnswer: "PATH is an operating system variable that lists directories where the OS searches for executable programs. When Python's installation directory and Scripts folder are in PATH, you can run 'python' and 'pip' commands from any directory in your terminal."
  },
  {
    id: "first-python-program",
    topicNumber: 3,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "First Python Program",
    shortDescription: "Write and run the canonical 'Hello, World!' program and understand Python script execution.",
    whatYouWillLearn: [
      "The classic 'Hello, World!' program",
      "How to save files with the .py extension",
      "Running scripts via terminal: python script.py",
      "The role of the built-in print() function"
    ],
    explanation: "The traditional way to start learning any programming language is by printing 'Hello, World!' to the screen.\n\nIn Python, this requires just a single line of code! Unlike Java or C++, Python does not require class definitions, main functions, or boilerplate headers just to print text.\n\nHow to run:\n1. Create a text file named 'app.py'.\n2. Write 'print(\"Hello, World!\")' inside it.\n3. Open terminal in that directory and run: python app.py",
    example: {
      code: "# First Python Program\nprint(\"Hello, World!\")\nprint(\"Welcome to learning Python in 2026!\")",
      output: "Hello, World!\nWelcome to learning Python in 2026!",
      howItWorks: "print() takes any value or text enclosed in quotes and prints it followed by a newline to standard output."
    },
    commonMistakes: [
      "Missing quotes around text strings: print(Hello World) will cause a SyntaxError or NameError.",
      "Mismatched quotes: print('Hello\") mixing single and double quotes."
    ],
    practiceQuestions: [
      {
        question: "Write a program that prints your name on the first line and your city on the second line.",
        answer: "print(\"Alex Rivera\")\nprint(\"San Francisco\")",
        output: "Alex Rivera\nSan Francisco"
      }
    ],
    interviewQuestion: "What happens behind the scenes when you run 'python script.py'?",
    interviewAnswer: "The Python interpreter parses the source code into an Abstract Syntax Tree (AST), compiles it into bytecode (.pyc), loads the bytecode into the Python Virtual Machine (PVM), and executes instructions sequentially."
  },
  {
    id: "variables",
    topicNumber: 4,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "Variables",
    shortDescription: "Understand how variables act as labeled references to values in memory, and how naming rules work.",
    whatYouWillLearn: [
      "What a variable is and how dynamic assignment works",
      "Python variable naming conventions (snake_case, valid characters)",
      "Multiple assignments and value reassignment",
      "Checking the memory identity of variables with id()"
    ],
    explanation: "A variable is a name used to store or refer to a value in a Python program.\n\nThink of a variable like a labeled box. The label tells us what is inside the box. In Python, you do not declare a variable's type (like 'int' or 'string'). You simply assign a value with the '=' operator, and Python handles the memory allocation and typing automatically.\n\nVariable Naming Rules:\n- Must begin with a letter (a-z, A-Z) or an underscore (_).\n- Can contain letters, numbers, and underscores (e.g., user_age_2).\n- Cannot start with a digit (e.g., 2age is INVALID).\n- Case-sensitive: 'score', 'Score', and 'SCORE' are 3 distinct variables.\n- Cannot be reserved Python keywords (such as if, for, class, return).",
    example: {
      code: "# Variable assignment and reassignment\nname = \"Tulasi\"\nage = 25\n\nprint(name)\nprint(age)",
      output: "Tulasi\n25",
      howItWorks: "name stores the text 'Tulasi'. age stores the number 25."
    },
    commonMistakes: [
      "Using hyphens instead of underscores (e.g., user-name is treated as subtraction: user minus name).",
      "Using reserved keywords as variable names (e.g., def = 5 or class = 10)."
    ],
    practiceQuestions: [
      {
        question: "Create a variable called city and store 'Hyderabad' in it.",
        answer: "city = \"Hyderabad\"\n\nprint(city)",
        output: "Hyderabad"
      }
    ],
    interviewQuestion: "What is a variable in Python?",
    interviewAnswer: "A variable is a name that refers to a value or object in Python. Python uses dynamic typing, so the type does not need to be explicitly declared when creating a variable."
  },
  {
    id: "data-types",
    topicNumber: 5,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "Data Types",
    shortDescription: "Explore Python's built-in primitive and composite data types: int, float, str, bool, list, dict, and more.",
    whatYouWillLearn: [
      "Core primitive data types: int, float, str, bool, NoneType",
      "Using the type() function to inspect variable types",
      "Type conversion (casting) between types",
      "Mutable vs Immutable fundamental concepts"
    ],
    explanation: "Every value in Python has an associated data type that determines what operations can be performed on it.\n\nPrimary Data Types:\n1. Numeric:\n   - int: Whole numbers (e.g., 42, -7, 1000000)\n   - float: Decimal numbers (e.g., 3.14159, -0.05)\n   - complex: Complex numbers (e.g., 2 + 3j)\n2. Sequence:\n   - str: Text characters enclosed in quotes (e.g., \"Hello\")\n   - list: Ordered, mutable sequence (e.g., [1, 2, 3])\n   - tuple: Ordered, immutable sequence (e.g., (1, 2, 3))\n3. Boolean:\n   - bool: True or False\n4. Mapping:\n   - dict: Key-value pairs (e.g., {\"id\": 101, \"name\": \"Sam\"})\n5. Set:\n   - set: Unique, unordered elements (e.g., {1, 2, 3})\n6. None:\n   - NoneType: Represents absence of value (None)",
    example: {
      code: "item_price = 19.99\nquantity = 3\nitem_name = \"Python Handbook\"\nin_stock = True\n\nprint(type(item_price)) # <class 'float'>\nprint(type(quantity))   # <class 'int'>\nprint(type(item_name))  # <class 'str'>\nprint(type(in_stock))   # <class 'bool'>\n\ntotal_str = str(item_price * quantity)\nprint(\"Total Cost: $\" + total_str)",
      output: "<class 'float'>\n<class 'int'>\n<class 'str'>\n<class 'bool'>\nTotal Cost: $59.97",
      howItWorks: "type() returns the class type of any Python object. Casting functions like int(), float(), and str() convert values safely."
    },
    commonMistakes: [
      "Adding incompatible types directly: 'Score: ' + 10 raises TypeError (must use str(10) or f-strings).",
      "Expecting float division result of two ints to be int (in Python 3, 7 / 2 returns 3.5 float; use 7 // 2 for integer division)."
    ],
    practiceQuestions: [
      {
        question: "Convert the string '450' to an integer and add 50 to it.",
        answer: "num_str = \"450\"\nresult = int(num_str) + 50\nprint(result)",
        output: "500"
      }
    ],
    interviewQuestion: "What is the difference between mutable and immutable data types in Python?",
    interviewAnswer: "Immutable types (int, float, str, tuple, frozenset, bool) cannot be modified in place once created; any change creates a new object in memory. Mutable types (list, dict, set, bytearray) can have their contents modified without changing their memory address."
  },
  {
    id: "input-and-output",
    topicNumber: 6,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "Input and Output",
    shortDescription: "Interact with users using input() for prompt intake and print() with custom separators, endings, and formatting.",
    whatYouWillLearn: [
      "Receiving user input with input()",
      "Why input() always returns a string and how to convert it",
      "Customizing print() with sep and end arguments",
      "Using modern f-strings for clean output formatting"
    ],
    explanation: "Input and output (I/O) allow your programs to communicate with humans and external systems.\n\n1. Output with print():\n   The print() function sends textual representations to the console. You can pass multiple arguments separated by commas, change the separator with 'sep', and change the trailing newline with 'end'.\n\n2. Input with input():\n   The input(prompt) function pauses program execution, displays the prompt, and waits for the user to type text and press Enter.\n   CRITICAL: input() ALWAYS returns a string. If you need a number, convert it with int() or float().",
    example: {
      code: "print(\"Python\", \"is\", \"awesome\", sep=\"-\")\nprint(\"Loading\", end=\"...\")\nprint(\" Done!\")\n\nuser = \"Alex\"\nscore = 98.5\nprint(f\"Player {user} scored {score:.1f}% on the quiz.\")",
      output: "Python-is-awesome\nLoading... Done!\nPlayer Alex scored 98.5% on the quiz.",
      howItWorks: "sep='-' replaces the default space between arguments. end='...' overrides the default newline character."
    },
    commonMistakes: [
      "Forgetting to convert input(): num = input('Enter number: ') followed by num + 5 causes TypeError: can only concatenate str to str.",
      "Misplacing braces in f-strings: f'{name}' vs '{name}' without the leading 'f'."
    ],
    practiceQuestions: [
      {
        question: "Write code to print three numbers 10, 20, 30 separated by ' --> ' and ending with ' [END]'.",
        answer: "print(10, 20, 30, sep=\" --> \", end=\" [END]\\n\")",
        output: "10 --> 20 --> 30 [END]"
      }
    ],
    interviewQuestion: "What is the difference between raw_input() and input() across Python versions?",
    interviewAnswer: "In Python 2, raw_input() returned a string and input() evaluated user input as Python code (a major security risk). In Python 3, raw_input() was removed and input() safely returns user input as a string."
  },
  {
    id: "comments",
    topicNumber: 7,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "Comments",
    shortDescription: "Learn how to write single-line comments, multi-line explanations, and docstrings for maintainable code.",
    whatYouWillLearn: [
      "Single line comments using the # symbol",
      "Multi-line explanations and inline comments",
      "Function and module docstrings using triple quotes (\"\"\")",
      "Best practices: explaining 'why', not just 'what'"
    ],
    explanation: "Comments are human-readable explanations added to code that are completely ignored by the Python interpreter during execution.\n\nTypes of Comments:\n1. Single-line comments: Start with '#' and extend to the end of the line.\n2. Inline comments: Placed on the same line as a statement (after 2 spaces per PEP 8).\n3. Docstrings: Multi-line strings enclosed in triple double quotes (\"\"\" ... \"\"\") placed immediately beneath functions, classes, or modules. They are accessible at runtime via the .__doc__ attribute.",
    example: {
      code: "def calculate_total(subtotal, tax_rate=0.08):\n    \"\"\"\n    Computes total amount including tax.\n    \"\"\"\n    tax = subtotal * tax_rate  # Calculate tax fraction\n    return subtotal + tax\n\nprint(\"Total:\", calculate_total(100))\nprint(\"Docstring:\", calculate_total.__doc__.strip().splitlines()[0])",
      output: "Total: 108.0\nDocstring: Computes total amount including tax.",
      howItWorks: "The interpreter skips lines starting with #. The docstring inside the function is stored as metadata and helps tools like help() and IDE tooltips."
    },
    commonMistakes: [
      "Writing redundant comments that state the obvious (e.g. x = 5 # set x to 5).",
      "Letting comments become outdated when code changes."
    ],
    practiceQuestions: [
      {
        question: "Write a function 'greet' with a docstring that says 'Returns a friendly greeting message.'",
        answer: "def greet(name):\n    \"\"\"Returns a friendly greeting message.\"\"\"\n    return f\"Hello, {name}!\"\n\nprint(greet(\"Sara\"))",
        output: "Hello, Sara!"
      }
    ],
    interviewQuestion: "What is the difference between a standard multi-line comment and a docstring in Python?",
    interviewAnswer: "A standard comment using # is discarded by the tokenizer during compilation. A docstring (triple quoted string) is retained in the AST as the '__doc__' attribute of the module, class, or function object and can be inspected dynamically at runtime."
  }
];

writeCleanData("pythonBasics.js", "pythonBasics", pythonBasics);
