import path from 'path';
import { fileURLToPath } from 'url';
import { writeTopicFile } from './helper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../../src/data');

const adaptivePracticeData = [
  // ---------------- KID PRACTICE ----------------
  {
    id: "p-kid-1",
    stage: "kid",
    category: "Basics & Variables",
    type: "Multiple Choice",
    question: "What is a variable in Python?",
    options: ["A labeled toy box to store a treasure inside", "A bicycle", "A piece of cheese", "A loud whistle"],
    correctAnswer: "A labeled toy box to store a treasure inside",
    explanation: "Just like labeling your toy box 'toys', a variable gives a name to what's inside!",
    difficulty: "Easy"
  },
  {
    id: "p-kid-2",
    stage: "kid",
    category: "Output & Print",
    type: "Predict the Output",
    code: "print(\"Woof Woof! 🐶\")",
    options: ["Woof Woof! 🐶", "Meow Meow! 🐱", "Nothing", "Error"],
    correctAnswer: "Woof Woof! 🐶",
    explanation: "Python shows whatever friendly words you put inside the speech marks.",
    difficulty: "Easy"
  },
  {
    id: "p-kid-3",
    stage: "kid",
    category: "Decisions",
    type: "Multiple Choice",
    question: "If light == 'Green', what should the toy car do?",
    options: ["Go Vroom! 🚗💨", "Stop and sleep", "Turn into a banana", "Disappear"],
    correctAnswer: "Go Vroom! 🚗💨",
    explanation: "Green means go!",
    difficulty: "Easy"
  },
  {
    id: "p-kid-4",
    stage: "kid",
    category: "Numbers",
    type: "Predict the Output",
    code: "cookies = 3 + 2\nprint(cookies)",
    options: ["5", "32", "3", "0"],
    correctAnswer: "5",
    explanation: "3 cookies + 2 cookies = 5 delicious cookies!",
    difficulty: "Easy"
  },

  // ---------------- YOUNG PRACTICE ----------------
  {
    id: "p-young-1",
    stage: "young",
    category: "Gaming Variables",
    type: "Predict the Output",
    code: "player = \"Alex\"\nhp = 100\nhp = hp - 25\nprint(f\"{player} HP: {hp}\")",
    options: ["Alex HP: 75", "Alex HP: 100", "Alex HP: 25", "Error"],
    correctAnswer: "Alex HP: 75",
    explanation: "100 - 25 updates the hp variable to 75.",
    difficulty: "Easy"
  },
  {
    id: "p-young-2",
    stage: "young",
    category: "Lists & Inventory",
    type: "Predict the Output",
    code: "inventory = [\"Sword\", \"Shield\", \"Potion\"]\nprint(inventory[0])",
    options: ["Sword", "Shield", "Potion", "3"],
    correctAnswer: "Sword",
    explanation: "Python list indexing starts at 0, so inventory[0] is 'Sword'.",
    difficulty: "Easy"
  },
  {
    id: "p-young-3",
    stage: "young",
    category: "Loops & Range",
    type: "Multiple Choice",
    question: "How many times does `for i in range(4):` run?",
    options: ["4 times (0, 1, 2, 3)", "5 times", "3 times", "Infinite times"],
    correctAnswer: "4 times (0, 1, 2, 3)",
    explanation: "range(4) yields 0, 1, 2, 3, which is exactly 4 iterations.",
    difficulty: "Easy"
  },
  {
    id: "p-young-4",
    stage: "young",
    category: "Conditions",
    type: "Find the Error",
    code: "score = 100\nif score = 100:\n    print(\"Max Score!\")",
    options: ["Use == for comparison instead of = assignment", "print must be uppercase", "score cannot be 100", "No colon needed"],
    correctAnswer: "Use == for comparison instead of = assignment",
    explanation: "`=` is used for assigning variables, while `==` is used for comparing values.",
    difficulty: "Medium"
  },

  // ---------------- COLLEGE PRACTICE ----------------
  {
    id: "p-coll-1",
    stage: "college",
    category: "Memory & References",
    type: "Predict the Output",
    code: "a = [1, 2]\nb = a\nb.append(3)\nprint(a)",
    options: ["[1, 2, 3]", "[1, 2]", "[3]", "Error"],
    correctAnswer: "[1, 2, 3]",
    explanation: "Assignment copies the memory reference pointer. Both a and b refer to the same list object in the heap.",
    difficulty: "Medium"
  },
  {
    id: "p-coll-2",
    stage: "college",
    category: "Functions & Scope",
    type: "Multiple Choice",
    question: "What is the scope resolution order in Python (LEGB rule)?",
    options: ["Local -> Enclosing -> Global -> Built-in", "Global -> Local -> Enclosing", "Built-in -> Global -> Local", "Linear -> Extended -> Global"],
    correctAnswer: "Local -> Enclosing -> Global -> Built-in",
    explanation: "Python resolves identifiers through Local, Enclosing (closures), Global (module level), and Built-in namespaces.",
    difficulty: "Medium"
  },
  {
    id: "p-coll-3",
    stage: "college",
    category: "List Comprehensions",
    type: "Predict the Output",
    code: "squares = [x**2 for x in range(5) if x % 2 == 0]\nprint(squares)",
    options: ["[0, 4, 16]", "[0, 1, 4, 9, 16]", "[4, 16]", "[0, 2, 4]"],
    correctAnswer: "[0, 4, 16]",
    explanation: "Even numbers in range(5) are 0, 2, 4. Their squares are 0, 4, 16.",
    difficulty: "Medium"
  },

  // ---------------- GRADUATE PRACTICE ----------------
  {
    id: "p-grad-1",
    stage: "graduate",
    category: "Exception Handling",
    type: "Multiple Choice",
    question: "In a try-except-else-finally construct, when does the `else` block execute?",
    options: ["Only when the `try` block completes successfully without raising an exception", "Whenever an exception is raised", "Always, right before finally", "Only during server restart"],
    correctAnswer: "Only when the `try` block completes successfully without raising an exception",
    explanation: "The `else` clause executes only when no exceptions are raised inside the `try` block.",
    difficulty: "Medium"
  },
  {
    id: "p-grad-2",
    stage: "graduate",
    category: "Database & Context Managers",
    type: "Predict the Output",
    code: "class MockDB:\n    def __enter__(self): return \"CONNECTED\"\n    def __exit__(self, *args): print(\"CLOSED\")\n\nwith MockDB() as conn:\n    print(conn)",
    options: ["CONNECTED\nCLOSED", "CONNECTED", "CLOSED", "Error"],
    correctAnswer: "CONNECTED\nCLOSED",
    explanation: "`__enter__` returns the target resource, and `__exit__` guarantees cleanup upon block exit.",
    difficulty: "Medium"
  },
  {
    id: "p-grad-3",
    stage: "graduate",
    category: "Decorators",
    type: "Multiple Choice",
    question: "Why should `functools.wraps` be used when writing custom decorators?",
    options: ["To preserve the original function's name, docstring, and annotations (__name__, __doc__)", "To make decorators run on GPU", "To encrypt the function", "To bypass GIL"],
    correctAnswer: "To preserve the original function's name, docstring, and annotations (__name__, __doc__)",
    explanation: "`functools.wraps` copies metadata from the wrapped function to the wrapper closure, preventing reflection loss.",
    difficulty: "Medium"
  },

  // ---------------- PROFESSIONAL PRACTICE ----------------
  {
    id: "p-prof-1",
    stage: "professional",
    category: "CPython & Memory",
    type: "Multiple Choice",
    question: "What is the primary architectural advantage of defining `__slots__` on high-volume data models?",
    options: ["Eliminates per-instance `__dict__` hash maps in favor of fixed descriptor offsets, slashing memory by ~60%", "Enables true CPU multithreading in CPython", "Makes attributes globally mutable", "Converts code into WebAssembly"],
    correctAnswer: "Eliminates per-instance `__dict__` hash maps in favor of fixed descriptor offsets, slashing memory by ~60%",
    explanation: "`__slots__` prevents dynamic dictionary creation for instances, saving 100+ bytes per object.",
    difficulty: "Hard"
  },
  {
    id: "p-prof-2",
    stage: "professional",
    category: "Async Concurrency",
    type: "Predict the Output",
    code: "import asyncio\n\nasync def worker(id):\n    return id * 2\n\nasync def main():\n    res = await asyncio.gather(worker(1), worker(2), worker(3))\n    print(res)\n\nasyncio.run(main())",
    options: ["[2, 4, 6]", "[1, 2, 3]", "(2, 4, 6)", "Error"],
    correctAnswer: "[2, 4, 6]",
    explanation: "`asyncio.gather` executes coroutines concurrently and returns their aggregated results in order as a list.",
    difficulty: "Hard"
  },
  {
    id: "p-prof-3",
    stage: "professional",
    category: "GIL & Architecture",
    type: "Multiple Choice",
    question: "For a CPU-bound compute pipeline (e.g. image rendering or heavy numerical matrix operations), how do you bypass the CPython GIL?",
    options: ["Use multiprocessing, C-extensions (NumPy/Cython), or PyPy/free-threaded Python 3.13+", "Use standard threading.Thread with 50 threads", "Increase CPU voltage", "Use print() statements"],
    correctAnswer: "Use multiprocessing, C-extensions (NumPy/Cython), or PyPy/free-threaded Python 3.13+",
    explanation: "CPU-bound tasks require multiple OS processes (`multiprocessing`) or C-extensions that release the GIL during execution.",
    difficulty: "Hard"
  }
];

writeTopicFile(path.join(DATA_DIR, 'practiceData.js'), 'practiceData', adaptivePracticeData);
