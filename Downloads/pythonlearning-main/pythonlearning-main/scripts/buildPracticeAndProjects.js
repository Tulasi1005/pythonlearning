import fs from 'fs';
import path from 'path';

const practiceCategories = [
  { id: "all", label: "All Questions" },
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
  { id: "interview", label: "Interview Prep" }
];

const practiceQuestions = [
  {
    id: "p-1",
    category: "beginner",
    type: "Predict the output",
    question: "What will this code print?",
    code: "x = 10\ny = 20\n\nprint(x + y)",
    options: [
      "A. 10",
      "B. 20",
      "C. 30",
      "D. Error"
    ],
    correctAnswer: "C. 30",
    explanation: "x is 10 and y is 20. 10 + 20 = 30. The '+' operator adds the two numeric values."
  },
  {
    id: "p-2",
    category: "beginner",
    type: "Multiple choice",
    question: "Which of the following is an invalid variable name in Python?",
    code: "# Option A: user_name\n# Option B: _count\n# Option C: 2total\n# Option D: totalScore",
    options: [
      "A. user_name",
      "B. _count",
      "C. 2total",
      "D. totalScore"
    ],
    correctAnswer: "C. 2total",
    explanation: "In Python, variable names cannot start with a digit (0-9). They must start with a letter (a-z, A-Z) or an underscore (_)."
  },
  {
    id: "p-3",
    category: "beginner",
    type: "True/False",
    question: "In Python 3, the expression 7 / 2 evaluates to an integer 3.",
    code: "result = 7 / 2",
    options: [
      "A. True",
      "B. False"
    ],
    correctAnswer: "B. False",
    explanation: "In Python 3, single slash / is true division and always returns a float (3.5). For integer floor division, you use double slash // (7 // 2 = 3)."
  },
  {
    id: "p-4",
    category: "beginner",
    type: "Find the error",
    question: "What error will occur when executing the following snippet?",
    code: "age = 25\nmessage = \"I am \" + age + \" years old\"\nprint(message)",
    options: [
      "A. SyntaxError",
      "B. TypeError: can only concatenate str (not 'int') to str",
      "C. ValueError",
      "D. NameError"
    ],
    correctAnswer: "B. TypeError: can only concatenate str (not 'int') to str",
    explanation: "Python does not automatically convert numbers to strings when using the + operator. You must either use str(age) or use an f-string: f'I am {age} years old'."
  },
  {
    id: "p-5",
    category: "beginner",
    type: "Write the code",
    question: "How do you swap the values of two variables a = 5 and b = 10 in a single line without a temporary variable?",
    code: "a = 5\nb = 10\n# Write code here",
    options: [
      "A. a, b = b, a",
      "B. swap(a, b)",
      "C. a = b and b = a",
      "D. a == b"
    ],
    correctAnswer: "A. a, b = b, a",
    explanation: "Python supports tuple unpacking for multiple assignment: a, b = b, a evaluates the right side tuple (10, 5) and assigns to a and b simultaneously."
  },
  {
    id: "p-6",
    category: "intermediate",
    type: "Predict the output",
    question: "What is the output of the following list operation?",
    code: "nums = [1, 2, 3, 4, 5]\nprint(nums[::-1][1:3])",
    options: [
      "A. [5, 4]",
      "B. [4, 3]",
      "C. [3, 2]",
      "D. [2, 1]"
    ],
    correctAnswer: "B. [4, 3]",
    explanation: "nums[::-1] reverses the list to [5, 4, 3, 2, 1]. Slicing [1:3] extracts indices 1 and 2, which are 4 and 3."
  },
  {
    id: "p-7",
    category: "intermediate",
    type: "Multiple choice",
    question: "What is the output of modifying a mutable default argument across calls?",
    code: "def append_item(x, lst=[]):\n    lst.append(x)\n    return lst\n\nprint(append_item(1))\nprint(append_item(2))",
    options: [
      "A. [1] followed by [2]",
      "B. [1] followed by [1, 2]",
      "C. [1, 2] followed by [1, 2]",
      "D. TypeError"
    ],
    correctAnswer: "B. [1] followed by [1, 2]",
    explanation: "Default arguments are evaluated once when the function is defined. The mutable list lst persists across calls, accumulating 1 and then 2."
  },
  {
    id: "p-8",
    category: "intermediate",
    type: "Find the error",
    question: "Why will this dictionary comprehension fail or behave unexpectedly?",
    code: "bad_dict = { [1, 2]: \"numbers\" }",
    options: [
      "A. SyntaxError: invalid syntax",
      "B. TypeError: unhashable type: 'list'",
      "C. KeyError: list not found",
      "D. It works fine"
    ],
    correctAnswer: "B. TypeError: unhashable type: 'list'",
    explanation: "Dictionary keys must be hashable and immutable. Lists are mutable and cannot be used as dictionary keys. Use a tuple (1, 2) instead."
  },
  {
    id: "p-9",
    category: "intermediate",
    type: "Predict the output",
    question: "What does this list comprehension produce?",
    code: "matrix = [[1, 2], [3, 4]]\nflattened = [val for row in matrix for val in row]\nprint(flattened)",
    options: [
      "A. [[1, 2], [3, 4]]",
      "B. [1, 2, 3, 4]",
      "C. [1, 3, 2, 4]",
      "D. [[1, 3], [2, 4]]"
    ],
    correctAnswer: "B. [1, 2, 3, 4]",
    explanation: "In nested list comprehensions, 'for row in matrix' runs first as the outer loop, and 'for val in row' runs second as the inner loop, flattening the 2D matrix into [1, 2, 3, 4]."
  },
  {
    id: "p-10",
    category: "advanced",
    type: "Predict the output",
    question: "What does this generator code print?",
    code: "def count_gen():\n    yield 1\n    yield 2\n    yield 3\n\ng = count_gen()\nprint(next(g))\nprint(sum(g))",
    options: [
      "A. 1 then 6",
      "B. 1 then 5",
      "C. 1 then 3",
      "D. StopIteration error"
    ],
    correctAnswer: "B. 1 then 5",
    explanation: "next(g) yields 1, advancing the generator pointer. The subsequent sum(g) consumes the remaining items 2 + 3 = 5."
  },
  {
    id: "p-11",
    category: "advanced",
    type: "Multiple choice",
    question: "What happens when using @functools.wraps(func) inside a custom decorator?",
    code: "@functools.wraps(func)\ndef wrapper(*args, **kwargs): ...",
    options: [
      "A. It optimizes function execution speed in C",
      "B. It copies the original function's name, docstring, and annotations to the wrapper",
      "C. It prevents the wrapper from raising exceptions",
      "D. It converts the function into a generator"
    ],
    correctAnswer: "B. It copies the original function's name, docstring, and annotations to the wrapper",
    explanation: "@functools.wraps updates the wrapper function to mirror the original function's __name__, __doc__, and metadata, preserving introspection."
  },
  {
    id: "p-12",
    category: "advanced",
    type: "Predict the output",
    question: "What is the Method Resolution Order (MRO) behavior in this multiple inheritance setup?",
    code: "class A: def greet(self): return 'A'\nclass B(A): def greet(self): return 'B'\nclass C(A): def greet(self): return 'C'\nclass D(B, C): pass\n\nprint(D().greet())",
    options: [
      "A. A",
      "B. B",
      "C. C",
      "D. TypeError: ambiguous inheritance"
    ],
    correctAnswer: "B. B",
    explanation: "Under Python's C3 Linearization MRO, class D searches D -> B -> C -> A -> object. Since B is first in (B, C) and defines greet(), it returns 'B'."
  },
  {
    id: "p-13",
    category: "interview",
    type: "Multiple choice",
    question: "What is the Global Interpreter Lock (GIL) in CPython?",
    code: "# CPython GIL concept",
    options: [
      "A. A lock that prevents multiple Python scripts from running on the OS",
      "B. A mutex that prevents multiple native OS threads from executing Python bytecodes simultaneously",
      "C. A database lock used by sqlite3",
      "D. A memory security sandbox"
    ],
    correctAnswer: "B. A mutex that prevents multiple native OS threads from executing Python bytecodes simultaneously",
    explanation: "The GIL is a mutex in CPython that ensures only one native thread executes Python bytecode at a time, simplifying thread-safe memory management."
  },
  {
    id: "p-14",
    category: "interview",
    type: "Multiple choice",
    question: "What is the time complexity of checking membership x in collection for a list vs a set of size N?",
    code: "# List: O(?) vs Set: O(?)",
    options: [
      "A. List is O(1), Set is O(N)",
      "B. List is O(N), Set is O(1) average",
      "C. Both are O(log N)",
      "D. Both are O(1)"
    ],
    correctAnswer: "B. List is O(N), Set is O(1) average",
    explanation: "Lists must be scanned linearly in O(N) time. Sets use hash tables allowing O(1) average constant-time lookups."
  },
  {
    id: "p-15",
    category: "interview",
    type: "True/False",
    question: "In Python, integers have arbitrary precision and do not overflow to negative numbers like 32-bit/64-bit integers in C/Java.",
    code: "big = 2 ** 1000\nprint(type(big))",
    options: [
      "A. True",
      "B. False"
    ],
    correctAnswer: "A. True",
    explanation: "In Python 3, int has arbitrary precision and automatically expands in memory as large as available RAM allows, eliminating integer overflow bugs."
  }
];

const projects = [
  {
    id: "calculator",
    name: "Calculator",
    difficulty: "Beginner",
    description: "A command-line calculator that performs arithmetic operations (addition, subtraction, multiplication, division, modulo, and power) with robust input validation.",
    skillsUsed: ["Functions", "Control Flow (if-elif-else)", "Error Handling (ZeroDivisionError)", "User Input Processing"],
    requirements: [
      "Prompt user to select an arithmetic operator (+, -, *, /, %, **)",
      "Read two numeric inputs with float conversion",
      "Safely prevent division by zero",
      "Support continuous calculations in a while loop until the user exits"
    ],
    expectedResult: "=== Python Calculator ===\nEnter first number: 24\nEnter operator (+, -, *, /): *\nEnter second number: 5\nResult: 24.0 * 5.0 = 120.0\nDo you want to continue? (y/n): n\nGoodbye!",
    basicImplementationSteps: [
      "Define individual helper functions for add, subtract, multiply, divide.",
      "Create an interactive while True loop to keep running calculations.",
      "Prompt user for inputs using input() and cast safely with float() inside a try/except.",
      "Execute the selected operation and display the formatted output."
    ],
    codeSnippet: "def add(x, y): return x + y\ndef subtract(x, y): return x - y\ndef multiply(x, y): return x * y\ndef divide(x, y):\n    if y == 0:\n        raise ZeroDivisionError(\"Cannot divide by zero\")\n    return x / y\n\nprint(\"=== Simple Calculator ===\")\na = float(input(\"First number: \"))\nop = input(\"Operator (+, -, *, /): \")\nb = float(input(\"Second number: \"))\n\nops = {\"+\": add, \"-\": subtract, \"*\": multiply, \"/\": divide}\nif op in ops:\n    try:\n        print(\"Result:\", ops[op](a, b))\n    except ZeroDivisionError as e:\n        print(\"Error:\", e)\nelse:\n    print(\"Invalid operator!\")"
  },
  {
    id: "number-guessing-game",
    name: "Number Guessing Game",
    difficulty: "Beginner",
    description: "A game where the computer selects a secret random number and guides the player with 'Too High' or 'Too Low' hints within limited attempts.",
    skillsUsed: ["Random Module (random.randint)", "While Loops", "Conditional Logic", "Score & Attempt Tracking"],
    requirements: [
      "Generate a random target integer between 1 and 100",
      "Allow the player up to 7 attempts",
      "Give directional feedback ('Higher' or 'Lower') after each guess",
      "Display congratulations message with attempts count upon winning"
    ],
    expectedResult: "I have picked a number between 1 and 100.\nAttempt 1/7: 50 -> Too Low!\nAttempt 2/7: 75 -> Too High!\nAttempt 3/7: 62 -> Correct! You guessed it in 3 attempts!",
    basicImplementationSteps: [
      "Import random and pick secret = random.randint(1, 100).",
      "Set attempts = 0 and maximum attempts allowed.",
      "In a while loop, take player guess and compare with secret.",
      "Print appropriate hint and exit loop if guess matches or max attempts reached."
    ],
    codeSnippet: "import random\n\nsecret = random.randint(1, 100)\nattempts = 0\nmax_attempts = 7\n\nprint(\"Guess the number between 1 and 100!\")\nwhile attempts < max_attempts:\n    guess = int(input(f\"Attempt {attempts+1}/{max_attempts}: \"))\n    attempts += 1\n    if guess == secret:\n        print(f\"Correct! You won in {attempts} attempts!\")\n        break\n    elif guess < secret:\n        print(\"Too Low!\")\n    else:\n        print(\"Too High!\")\nelse:\n    print(f\"Game Over! The number was {secret}.\")"
  },
  {
    id: "rock-paper-scissors",
    name: "Rock Paper Scissors",
    difficulty: "Beginner",
    description: "The classic Rock, Paper, Scissors game played against computer AI with running score tracking and round history.",
    skillsUsed: ["random.choice", "Dictionary Lookup / Tuples", "While Loops", "Game State Management"],
    requirements: [
      "Prompt user for 'rock', 'paper', or 'scissors'",
      "Computer randomly picks an option with random.choice",
      "Determine winner using game rules (Rock beats Scissors, etc.)",
      "Track player vs computer win streak"
    ],
    expectedResult: "You chose: Rock | Computer chose: Scissors\n-> You Win this round!\nScore: Player 1 - 0 Computer",
    basicImplementationSteps: [
      "Define choices tuple: ('rock', 'paper', 'scissors').",
      "Use dictionary or conditional matrix to determine victory.",
      "Loop rounds and increment score tally.",
      "Print final winner upon exit."
    ],
    codeSnippet: "import random\n\nchoices = [\"rock\", \"paper\", \"scissors\"]\nwins = {\"rock\": \"scissors\", \"paper\": \"rock\", \"scissors\": \"paper\"}\n\nuser = input(\"Choose (rock/paper/scissors): \").lower()\ncomputer = random.choice(choices)\nprint(f\"Computer chose: {computer}\")\n\nif user == computer:\n    print(\"It's a Tie!\")\nelif wins.get(user) == computer:\n    print(\"You Win!\")\nelse:\n    print(\"Computer Wins!\")"
  },
  {
    id: "simple-quiz",
    name: "Simple Quiz",
    difficulty: "Beginner",
    description: "An interactive command-line quiz application that asks multiple choice questions, checks answers, and calculates score percentages.",
    skillsUsed: ["Lists of Dictionaries", "For Loops", "User Input Validation", "String Formatting"],
    requirements: [
      "Store questions, choices, and answers in structured data",
      "Iterate through questions sequentially",
      "Calculate final percentage and assign a grade",
      "Provide immediate answer feedback"
    ],
    expectedResult: "Q1: Which keyword defines a function in Python?\nA. func  B. def  C. function  D. define\nYour answer: B -> Correct!\nFinal Score: 100% (Grade A+)",
    basicImplementationSteps: [
      "Create a list of question dictionaries with options and correct answers.",
      "Loop through each item, printing question and choices.",
      "Compare user answer to correct key and update score.",
      "Display summary report at the end."
    ],
    codeSnippet: "quiz = [\n    {\"q\": \"What is the output of 2 ** 3?\", \"options\": [\"6\", \"8\", \"9\"], \"a\": \"8\"},\n    {\"q\": \"Which data type is immutable?\", \"options\": [\"list\", \"tuple\", \"dict\"], \"a\": \"tuple\"}\n]\nscore = 0\nfor item in quiz:\n    print(f\"\\nQ: {item['q']}\")\n    for opt in item[\"options\"]:\n        print(f\" - {opt}\")\n    ans = input(\"Your answer: \").strip()\n    if ans.lower() == item[\"a\"].lower():\n        print(\"Correct!\")\n        score += 1\n    else:\n        print(f\"Wrong! Correct was: {item['a']}\")\nprint(f\"\\nFinal Score: {score}/{len(quiz)}\")"
  },
  {
    id: "age-calculator",
    name: "Age Calculator",
    difficulty: "Beginner",
    description: "Calculate a user's exact age in years, months, and days based on their birth date using Python's datetime module.",
    skillsUsed: ["datetime Module", "Date Parsing", "Time Delta Arithmetic", "Input Validation"],
    requirements: [
      "Take birth year, month, and day as input",
      "Validate that the date exists in the calendar",
      "Compute precise age in years, months, and total elapsed days",
      "Handle leap years automatically"
    ],
    expectedResult: "Enter birthdate (YYYY-MM-DD): 2000-05-15\nYou are 26 years, 4 months, and 22 days old.\nTotal days lived: 9,641 days",
    basicImplementationSteps: [
      "Import datetime.date and datetime.datetime.",
      "Parse user string into datetime.strptime(date_str, '%Y-%m-%d').",
      "Compute difference from date.today().",
      "Format output cleanly."
    ],
    codeSnippet: "from datetime import datetime, date\n\nbirth_str = input(\"Enter Birthdate (YYYY-MM-DD): \")\nbirth_date = datetime.strptime(birth_str, \"%Y-%m-%d\").date()\ntoday = date.today()\n\nyears = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))\ntotal_days = (today - birth_date).days\n\nprint(f\"You are {years} years old ({total_days:,} days on Earth).\")"
  },
  {
    id: "temperature-converter",
    name: "Temperature Converter",
    difficulty: "Beginner",
    description: "Convert temperatures between Celsius, Fahrenheit, and Kelvin with formatted unit scales.",
    skillsUsed: ["Arithmetic Formulas", "Functions", "Menu Driven Interface", "String Formatting"],
    requirements: [
      "Convert Celsius to Fahrenheit (C * 9/5 + 32)",
      "Convert Fahrenheit to Celsius ((F - 32) * 5/9)",
      "Convert Celsius to Kelvin (C + 273.15)",
      "Enforce absolute zero validation (temperatures cannot drop below 0 Kelvin)"
    ],
    expectedResult: "Temperature: 100 C\nFahrenheit: 212.0°F\nKelvin: 373.15 K",
    basicImplementationSteps: [
      "Define conversion helper functions.",
      "Prompt user for value and initial unit.",
      "Perform calculation and round to 2 decimal places.",
      "Display results table."
    ],
    codeSnippet: "def c_to_f(c): return (c * 9/5) + 32\ndef f_to_c(f): return (f - 32) * 5/9\ndef c_to_k(c): return c + 273.15\n\ntemp = float(input(\"Enter temperature value: \"))\nunit = input(\"Unit (C/F/K): \").upper()\n\nif unit == \"C\":\n    print(f\"{temp}°C = {c_to_f(temp):.2f}°F | {c_to_k(temp):.2f}K\")\nelif unit == \"F\":\n    c = f_to_c(temp)\n    print(f\"{temp}°F = {c:.2f}°C | {c_to_k(c):.2f}K\")"
  },
  {
    id: "password-generator",
    name: "Password Generator",
    difficulty: "Beginner",
    description: "Generate cryptographically strong, customizable passwords containing uppercase, lowercase, digits, and special characters.",
    skillsUsed: ["secrets / random Module", "string Module (ascii_letters, digits, punctuation)", "List Shuffling", "Security Best Practices"],
    requirements: [
      "Allow user to specify password length (e.g. 12-32 chars)",
      "Allow toggling uppercase, digits, and special symbols",
      "Guarantee at least one character from each selected character set",
      "Use secrets module for cryptographic randomness"
    ],
    expectedResult: "Generated Secure Password (16 chars):\nkP9#vX2$mQ8!zL4@\nStrength: Strong",
    basicImplementationSteps: [
      "Import secrets and string modules.",
      "Build character pool based on user preferences.",
      "Ensure minimum one char from each set, fill remainder randomly, then shuffle.",
      "Print generated password."
    ],
    codeSnippet: "import secrets, string\n\ndef generate_password(length=16):\n    chars = string.ascii_letters + string.digits + \"!@#$%^&*()\"\n    password = [\n        secrets.choice(string.ascii_lowercase),\n        secrets.choice(string.ascii_uppercase),\n        secrets.choice(string.digits),\n        secrets.choice(\"!@#$%^&*()\")\n    ]\n    password += [secrets.choice(chars) for _ in range(length - 4)]\n    secrets.SystemRandom().shuffle(password)\n    return \"\".join(password)\n\nprint(\"Secure Password:\", generate_password(16))"
  },
  {
    id: "to-do-list",
    name: "To-Do List",
    difficulty: "Beginner",
    description: "A task manager that supports adding, viewing, marking complete, and deleting tasks with local JSON file persistence.",
    skillsUsed: ["File Handling / JSON Serialization", "Lists of Dictionaries", "CRUD Menu Flow", "Exception Handling"],
    requirements: [
      "Add new tasks with description and priority",
      "List all pending and completed tasks",
      "Toggle task completion status",
      "Save and load tasks automatically to tasks.json"
    ],
    expectedResult: "=== To-Do List ===\n1. [x] Complete Python Basics\n2. [ ] Practice List Comprehensions\n3. [ ] Build Portfolio Project",
    basicImplementationSteps: [
      "Load existing tasks from tasks.json using json.load() if file exists.",
      "Provide CLI menu: 1) Add Task 2) List Tasks 3) Mark Done 4) Delete 5) Exit.",
      "Update in-memory list upon user command.",
      "Persist list back to tasks.json using json.dump()."
    ],
    codeSnippet: "import json, os\n\nFILE = \"tasks.json\"\ntasks = json.load(open(FILE)) if os.path.exists(FILE) else []\n\ndef save(): json.dump(tasks, open(FILE, \"w\"), indent=2)\n\ndef add_task(title):\n    tasks.append({\"title\": title, \"done\": False})\n    save()\n    print(\"Task added!\")\n\ndef list_tasks():\n    for i, t in enumerate(tasks, 1):\n        status = \"x\" if t[\"done\"] else \" \"\n        print(f\"{i}. [{status}] {t['title']}\")\n\nadd_task(\"Learn Python File Handling\")\nlist_tasks()"
  },

  // INTERMEDIATE
  {
    id: "student-management-system",
    name: "Student Management System",
    difficulty: "Intermediate",
    description: "Manage student records, enrolled courses, grades, GPA calculations, and export reports using OOP and CSV storage.",
    skillsUsed: ["Object-Oriented Programming (Classes/Methods)", "CSV / JSON Persistence", "Data Validation", "Searching & Sorting"],
    requirements: [
      "Student class with id, name, email, and courses dictionary",
      "Add, update, search, and remove student records",
      "Calculate cumulative GPA based on course grade points",
      "Export grade sheet to CSV format"
    ],
    expectedResult: "ID: 101 | Name: Alex Rivera | GPA: 3.85 | Courses: [Python, Data Structures]\nRecord exported successfully.",
    basicImplementationSteps: [
      "Create Student class with methods: add_course(name, grade), calculate_gpa().",
      "Create StudentDatabase manager class to handle list of students.",
      "Implement search by ID or name.",
      "Add CSV import and export functions using csv.DictWriter."
    ],
    codeSnippet: "class Student:\n    def __init__(self, student_id, name):\n        self.id = student_id\n        self.name = name\n        self.grades = {}\n\n    def add_grade(self, course, score):\n        self.grades[course] = score\n\n    def get_average(self):\n        return sum(self.grades.values()) / len(self.grades) if self.grades else 0.0\n\ns = Student(101, \"Alex Rivera\")\ns.add_grade(\"Python\", 95)\ns.add_grade(\"Algorithms\", 88)\nprint(f\"Student: {s.name}, Average: {s.get_average():.1f}%\")"
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    difficulty: "Intermediate",
    description: "Track income and expenses categorized by tags (Food, Rent, Transport), calculate monthly summaries, and filter records by date.",
    skillsUsed: ["datetime Calculations", "collections.defaultdict", "File Persistence (CSV/SQLite)", "Summary Aggregations"],
    requirements: [
      "Log transactions with date, category, description, and amount",
      "Support both Income (+) and Expense (-) categories",
      "Generate monthly category spending breakdown",
      "Alert when expenses exceed a monthly budget threshold"
    ],
    expectedResult: "Category Breakdown:\n- Housing: $1,200\n- Food: $450\n- Transport: $150\nTotal Spent: $1,800",
    basicImplementationSteps: [
      "Define Transaction dataclass with amount, category, date.",
      "Write storage functions to append records to CSV or SQLite.",
      "Implement aggregation functions grouping by month and category.",
      "Print formatted financial summaries."
    ],
    codeSnippet: "from collections import defaultdict\nfrom dataclasses import dataclass\n\n@dataclass\nclass Expense:\n    category: str\n    amount: float\n\nexpenses = [\n    Expense(\"Food\", 45.50),\n    Expense(\"Rent\", 1200.00),\n    Expense(\"Food\", 22.30)\n]\n\nsummary = defaultdict(float)\nfor e in expenses:\n    summary[e.category] += e.amount\n\nprint(\"=== Expense Summary ===\")\nfor cat, total in summary.items():\n    print(f\" - {cat}: ${total:,.2f}\")"
  },
  {
    id: "contact-management-system",
    name: "Contact Management System",
    difficulty: "Intermediate",
    description: "A directory application for storing, searching, grouping, and exporting contacts with regex-based email and phone validation.",
    skillsUsed: ["Regular Expressions (re module)", "SQLite / JSON Database", "OOP", "Input Sanitization"],
    requirements: [
      "Store contact name, phone, email, and group (Work, Personal, Family)",
      "Validate phone numbers (10 digits) and email formats via re regex",
      "Instant search by partial name or phone number",
      "Export contacts to vCard (.vcf) or CSV"
    ],
    expectedResult: "Found 2 contacts matching 'Rivera':\n1. Alex Rivera | alex@company.com | +1-555-0199 [Work]\n2. Maria Rivera | maria@home.net | +1-555-0144 [Family]",
    basicImplementationSteps: [
      "Write regex validators validate_email and validate_phone.",
      "Create Contact class and ContactBook manager.",
      "Implement search with case-insensitive substring matching.",
      "Integrate file backup and restore."
    ],
    codeSnippet: "import re\n\ndef is_valid_email(email):\n    pattern = r\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$\"\n    return bool(re.match(pattern, email))\n\ncontacts = {}\ndef add_contact(name, email, phone):\n    if not is_valid_email(email):\n        raise ValueError(\"Invalid email format\")\n    contacts[name] = {\"email\": email, \"phone\": phone}\n\nadd_contact(\"Tulasi\", \"tulasi@example.com\", \"555-0123\")\nprint(\"Contacts in book:\", list(contacts.keys()))"
  },
  {
    id: "library-management-system",
    name: "Library Management System",
    difficulty: "Intermediate",
    description: "Manage book inventories, track borrower checkouts, calculate overdue late fees, and manage book reservations.",
    skillsUsed: ["OOP Inheritance & Polymorphism", "datetime Difference Calculations", "Custom Exceptions", "State Tracking"],
    requirements: [
      "Book class (ISBN, Title, Author, Copies, Status)",
      "Borrow and return workflows with due date tracking (e.g. 14-day loan)",
      "Calculate overdue fines ($0.50/day late)",
      "Search catalog by author, title, or ISBN"
    ],
    expectedResult: "Book 'Fluent Python' issued to User #402. Due date: 2026-10-21.\nRemaining available copies: 2",
    basicImplementationSteps: [
      "Create Book and Member classes.",
      "Implement Library catalog with borrow_book(isbn, member_id).",
      "Calculate fine if return_date > due_date.",
      "Prevent borrowing if book copies reach zero."
    ],
    codeSnippet: "from datetime import datetime, timedelta\n\nclass Book:\n    def __init__(self, title, copies):\n        self.title = title\n        self.copies = copies\n\nclass Library:\n    def __init__(self):\n        self.books = {}\n    def add(self, b): self.books[b.title] = b\n    def borrow(self, title):\n        if self.books[title].copies > 0:\n            self.books[title].copies -= 1\n            due = datetime.now() + timedelta(days=14)\n            return f\"Issued! Due: {due.strftime('%Y-%m-%d')}\"\n        return \"Out of stock\"\n\nlib = Library()\nlib.add(Book(\"Clean Code\", 3))\nprint(lib.borrow(\"Clean Code\"))"
  },
  {
    id: "banking-system",
    name: "Banking System",
    difficulty: "Intermediate",
    description: "Simulate a multi-account banking platform with PIN authentication, deposits, withdrawals, transfers, and transaction logs.",
    skillsUsed: ["Encapsulation & Private Properties", "Transaction Safety & Mutex Concepts", "Custom Exceptions", "Audit Logging"],
    requirements: [
      "Create Savings and Checking account types with inheritance",
      "Secure accounts with 4-digit PIN authentication",
      "Support fund transfers between two accounts with rollback on failure",
      "Export complete statement of transactions with timestamps"
    ],
    expectedResult: "Transfer $200 from Account #1001 to #1002: SUCCESS.\nAccount #1001 New Balance: $800.00\nAccount #1002 New Balance: $1,200.00",
    basicImplementationSteps: [
      "Define Account base class with private __balance and @property.",
      "Implement deposit(), withdraw(), and transfer() methods.",
      "Raise InsufficientFundsError when balance is inadequate.",
      "Record every operation into an audit transaction list."
    ],
    codeSnippet: "class InsufficientFunds(Exception): pass\n\nclass BankAccount:\n    def __init__(self, acc_num, holder, balance=0.0):\n        self.acc_num = acc_num\n        self.holder = holder\n        self._balance = balance\n\n    def deposit(self, amount):\n        self._balance += amount\n\n    def withdraw(self, amount):\n        if amount > self._balance:\n            raise InsufficientFunds(f\"Deficit of ${amount - self._balance}\")\n        self._balance -= amount\n\nacc = BankAccount(101, \"Tulasi\", 500)\nacc.deposit(200)\nacc.withdraw(100)\nprint(f\"Holder: {acc.holder}, Balance: ${acc._balance}\")"
  },
  {
    id: "inventory-management-system",
    name: "Inventory Management System",
    difficulty: "Intermediate",
    description: "Track warehouse stock levels, supplier details, low-stock reorder triggers, and sales margins with SQLite persistence.",
    skillsUsed: ["SQLite Integration", "CRUD Operations", "Parameterized Queries", "Reporting & Alerts"],
    requirements: [
      "Store products with SKU, name, quantity, unit price, and reorder threshold",
      "Automatically alert when stock falls below reorder level",
      "Process stock adjustments (inbound shipments and outbound sales)",
      "Calculate total inventory valuation"
    ],
    expectedResult: "Low Stock Alert:\n- SKU #A102: Wireless Mouse (Qty: 3 | Reorder Level: 10)\nTotal Inventory Value: $48,250.00",
    basicImplementationSteps: [
      "Design SQLite table inventory with SKU primary key.",
      "Write functions for restock_item() and record_sale().",
      "Implement query SELECT * FROM inventory WHERE qty <= reorder_level.",
      "Generate valuation report with SUM(qty * unit_price)."
    ],
    codeSnippet: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE stock (sku TEXT PRIMARY KEY, name TEXT, qty INT, price REAL)\")\ncur.execute(\"INSERT INTO stock VALUES ('KB-01', 'Keyboard', 4, 45.0)\")\n\ncur.execute(\"SELECT name, qty FROM stock WHERE qty < 5\")\nfor name, qty in cur.fetchall():\n    print(f\"LOW STOCK WARNING: {name} (Only {qty} left)\")"
  },

  // ADVANCED
  {
    id: "rest-api",
    name: "REST API",
    difficulty: "Advanced",
    description: "Build a production-ready REST API with FastAPI, Pydantic schemas, dependency injection, CRUD endpoints, and auto-generated Swagger docs.",
    skillsUsed: ["FastAPI", "Pydantic V2", "HTTP Protocol & Status Codes", "Asynchronous Python (async/await)"],
    requirements: [
      "Design standard RESTful endpoints for resource collections",
      "Validate request payloads using Pydantic models with custom validators",
      "Return appropriate HTTP status codes (200, 201, 204, 400, 404)",
      "Provide interactive documentation at /docs"
    ],
    expectedResult: "HTTP POST /api/v1/products -> 201 Created\nResponse: {\"id\": 101, \"title\": \"Mechanical Keyboard\", \"price\": 99.99}\nSwagger UI live at /docs",
    basicImplementationSteps: [
      "Initialize FastAPI application instance.",
      "Define Pydantic schema models for ProductCreate and ProductResponse.",
      "Implement route decorators @app.get(), @app.post(), @app.delete().",
      "Run server with uvicorn main:app --reload."
    ],
    codeSnippet: "from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI(title=\"Catalog API\")\n\nclass Item(BaseModel):\n    title: str\n    price: float\n\ndb = {}\n\n@app.post(\"/items/\", status_code=201)\ndef create_item(item_id: int, item: Item):\n    db[item_id] = item\n    return {\"id\": item_id, \"data\": item}\n\n@app.get(\"/items/{item_id}\")\ndef get_item(item_id: int):\n    if item_id not in db:\n        raise HTTPException(status_code=404, detail=\"Item not found\")\n    return db[item_id]"
  },
  {
    id: "blog-api",
    name: "Blog API",
    difficulty: "Advanced",
    description: "A multi-user publishing API supporting articles, categories, comments, pagination, and full-text search with SQLAlchemy ORM.",
    skillsUsed: ["SQLAlchemy 2.0 ORM", "FastAPI / Flask", "Relational Database Design", "Pagination & Filtering"],
    requirements: [
      "Post model with One-to-Many relationship to Comments",
      "Query pagination with limit and offset query parameters",
      "Filtering articles by tag, author, and date range",
      "Slug generation for clean SEO-friendly URLs"
    ],
    expectedResult: "GET /api/posts?page=1&limit=5\nResponse: {\n  \"data\": [...5 articles],\n  \"meta\": {\"page\": 1, \"total_pages\": 12}\n}",
    basicImplementationSteps: [
      "Define SQLAlchemy models for User, Post, and Comment with foreign keys.",
      "Implement CRUD controllers with eager loading to avoid N+1 queries.",
      "Add pagination wrapper helper.",
      "Write unit tests with pytest and httpx."
    ],
    codeSnippet: "from pydantic import BaseModel\nfrom typing import List\n\nclass CommentSchema(BaseModel):\n    author: str\n    text: str\n\nclass PostSchema(BaseModel):\n    title: str\n    slug: str\n    content: str\n    comments: List[CommentSchema] = []\n\nprint(\"Blog API schema configured with nested relations.\")"
  },
  {
    id: "authentication-system",
    name: "Authentication System",
    difficulty: "Advanced",
    description: "Implement secure user authentication with password hashing (bcrypt/argon2), JWT (JSON Web Tokens) access & refresh tokens, and role-based access control.",
    skillsUsed: ["Security Cryptography (bcrypt)", "JWT (PyJWT)", "OAuth2 Password Bearer Flow", "Middleware & Guard Decorators"],
    requirements: [
      "Salt and hash user passwords before database storage",
      "Generate cryptographically signed JWT access tokens with expiration",
      "Implement dependency guards to protect private API routes",
      "Role-based permission authorization (Admin, Editor, Member)"
    ],
    expectedResult: "POST /auth/login -> 200 OK\nResponse: {\n  \"access_token\": \"eyJhbGciOiJIUzI1NiIs...\",\n  \"token_type\": \"bearer\"\n}",
    basicImplementationSteps: [
      "Use passlib or bcrypt to hash and verify passwords.",
      "Write token generation utility using jwt.encode(payload, SECRET_KEY, algorithm='HS256').",
      "Create FastAPI OAuth2 password bearer dependency.",
      "Verify signature and extract user claims from Authorization header."
    ],
    codeSnippet: "import hmac, hashlib, base64, json, time\n\nSECRET = b\"super-secret-key-32-chars-long!\"\n\ndef create_simple_token(user_id):\n    header = base64.urlsafe_b64encode(b'{\"alg\":\"HS256\",\"typ\":\"JWT\"}').rstrip(b'=')\n    payload = base64.urlsafe_b64encode(json.dumps({\"sub\": user_id, \"exp\": int(time.time()) + 3600}).encode()).rstrip(b'=')\n    msg = header + b\".\" + payload\n    signature = base64.urlsafe_b64encode(hmac.new(SECRET, msg, hashlib.sha256).digest()).rstrip(b'=')\n    return (msg + b\".\" + signature).decode()\n\nprint(\"Generated Token:\", create_simple_token(101)[:30] + \"...\")"
  },
  {
    id: "weather-application",
    name: "Weather Application",
    difficulty: "Advanced",
    description: "Fetch real-time weather forecasts, historical climate trends, and geolocation coordinates using external HTTP APIs and cache results.",
    skillsUsed: ["Python Requests / httpx", "Third-Party REST APIs", "In-Memory Caching (functools.lru_cache)", "JSON Parsing"],
    requirements: [
      "Query live weather provider APIs (OpenWeatherMap / WeatherAPI)",
      "Parse temperatures, humidity, wind speeds, and precipitation forecasts",
      "Implement caching to avoid redundant paid API calls within 15 minutes",
      "Handle network timeouts and invalid city names gracefully"
    ],
    expectedResult: "Weather for San Francisco, US:\n- Current Temp: 19°C (66°F) | Condition: Clear Skies\n- Humidity: 68% | Wind: 14 km/h W",
    basicImplementationSteps: [
      "Register for an OpenWeather API key.",
      "Build request URL with city query parameter and API token.",
      "Parse JSON payload to extract forecast metrics.",
      "Add error handling for HTTP 404 (city not found) and HTTP 401 (invalid key)."
    ],
    codeSnippet: "def format_weather(city, data):\n    main = data.get(\"main\", {})\n    weather = data.get(\"weather\", [{}])[0]\n    return f\"=== Weather for {city} ===\\nTemp: {main.get('temp')}°C\\nCondition: {weather.get('description', 'N/A').title()}\"\n\nsample_data = {\"main\": {\"temp\": 22.5}, \"weather\": [{\"description\": \"few clouds\"}]}\nprint(format_weather(\"Hyderabad\", sample_data))"
  },
  {
    id: "ai-chatbot",
    name: "AI Chatbot",
    difficulty: "Advanced",
    description: "A multi-turn AI conversational assistant with memory management, system persona instructions, and streaming responses using modern LLM APIs.",
    skillsUsed: ["Generative AI APIs (Gemini / OpenAI)", "Stateful Conversation Management", "Streaming Server-Sent Events", "Prompt Engineering"],
    requirements: [
      "Maintain chronological chat message history across turns",
      "Inject customizable system instructions to set tutor persona",
      "Implement sliding window context pruning to respect token limits",
      "Stream response tokens in real-time to the user"
    ],
    expectedResult: "User: What is list comprehension in Python?\nAssistant: List comprehension is a concise syntax to create lists:\nsquares = [x**2 for x in range(5)]",
    basicImplementationSteps: [
      "Initialize AI Client with API key from environment.",
      "Maintain a conversation list: [{'role': 'user'|'assistant', 'content': '...'}].",
      "Send context history with each new user prompt.",
      "Stream generated chunks to console or web UI."
    ],
    codeSnippet: "chat_history = [\n    {\"role\": \"system\", \"content\": \"You are an encouraging Python tutor.\"}\n]\n\ndef chat_turn(user_msg):\n    chat_history.append({\"role\": \"user\", \"content\": user_msg})\n    reply = f\"Here is how Python handles '{user_msg}': it uses clean syntax!\"\n    chat_history.append({\"role\": \"assistant\", \"content\": reply})\n    return reply\n\nprint(chat_turn(\"lambda functions\"))"
  },
  {
    id: "data-analysis-dashboard",
    name: "Data Analysis Dashboard",
    difficulty: "Advanced",
    description: "An end-to-end data science dashboard that ingests raw datasets, cleans anomalies, performs statistical calculations, and generates charts.",
    skillsUsed: ["NumPy & Pandas", "Matplotlib / Plotly", "Statistical Analysis", "Data Cleaning & Export"],
    requirements: [
      "Load sales and customer CSV datasets into Pandas DataFrames",
      "Clean missing records and standardize currency and date fields",
      "Compute key metrics: Monthly Recurring Revenue (MRR), Customer Acquisition Cost (CAC), and Churn Rate",
      "Generate visual distribution plots and export summary reports"
    ],
    expectedResult: "Executive Summary:\n- Total Revenue: $1,420,500 (+18.4% YoY)\n- Active Customers: 8,420\n- Average Order Value: $168.70",
    basicImplementationSteps: [
      "Load CSV with pd.read_csv().",
      "Clean data with df.dropna() and parse date columns with pd.to_datetime().",
      "Compute aggregations using df.groupby(), .agg(), and .pivot_table().",
      "Plot charts and save high-resolution figures."
    ],
    codeSnippet: "data = [\n    {\"month\": \"Jan\", \"revenue\": 120000},\n    {\"month\": \"Feb\", \"revenue\": 145000},\n    {\"month\": \"Mar\", \"revenue\": 190000}\n]\n\ntotal_rev = sum(d[\"revenue\"] for d in data)\navg_rev = total_rev / len(data)\n\nprint(f\"Total Q1 Revenue: ${total_rev:,.2f}\")\nprint(f\"Monthly Average: ${avg_rev:,.2f}\")"
  }
];

// Write practiceData.js
const practiceFilePath = path.resolve('src/data', 'practiceData.js');
const practiceContent = `export const practiceCategories = ${JSON.stringify(practiceCategories, null, 2)};\n\nexport const practiceQuestions = ${JSON.stringify(practiceQuestions, null, 2)};\n`;
fs.writeFileSync(practiceFilePath, practiceContent, 'utf-8');
console.log('Successfully generated practiceData.js');

// Write projectsData.js
const projectsFilePath = path.resolve('src/data', 'projectsData.js');
const projectsContent = `export const projects = ${JSON.stringify(projects, null, 2)};\n`;
fs.writeFileSync(projectsFilePath, projectsContent, 'utf-8');
console.log('Successfully generated projectsData.js');
