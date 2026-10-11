import { writeCleanData } from './dataWriter.js';

// DATA STRUCTURES (31-36)
const dataStructures = [
  {
    id: "lists",
    topicNumber: 31,
    sectionId: "data-structures",
    sectionTitle: "Section 6 — Data Structures",
    title: "Lists",
    shortDescription: "Ordered, mutable sequences of elements supporting heterogeneous types, indexing, and rich built-in manipulation methods.",
    whatYouWillLearn: [
      "Creating and initializing lists with [] or list()",
      "Adding elements: append(), extend(), insert()",
      "Removing elements: remove(), pop(), clear()",
      "Searching and sorting: index(), count(), sort(), sorted()"
    ],
    explanation: "A list is Python's most versatile sequence type. Lists are:\n1. Ordered: Items maintain their exact position.\n2. Mutable: You can add, remove, and replace items in place.\n3. Heterogeneous: A list can contain integers, strings, objects, or even other lists.\n\nCommon Operations:\n- append(x): Adds item x to the end [O(1)]\n- insert(i, x): Inserts item x at index i [O(n)]\n- pop(): Removes & returns the last item [O(1)]\n- remove(x): Removes the first occurrence of x [O(n)]\n- sort(): In-place sorting using Timsort [O(n log n)]",
    example: {
      code: "tasks = [\"Write code\", \"Test app\", \"Deploy\"]\n\ntasks.append(\"Review PR\")\ntasks.insert(1, \"Standup meeting\")\nprint(\"Tasks:\", tasks)\n\ncompleted = tasks.pop()\nprint(f\"Completed: {completed}\")\n\ntasks.sort()\nprint(\"Sorted Tasks:\", tasks)",
      output: "Tasks: ['Write code', 'Standup meeting', 'Test app', 'Deploy', 'Review PR']\nCompleted: Review PR\nSorted Tasks: ['Deploy', 'Standup meeting', 'Test app', 'Write code']",
      howItWorks: "Lists dynamically resize internal memory as you append or remove elements."
    },
    commonMistakes: [
      "Writing my_list = my_list.sort() (sort() sorts in place and returns None, overwriting your list with None!).",
      "Modifying a list while iterating over it with a for loop."
    ],
    practiceQuestions: [
      {
        question: "Add 'orange' to the end of colors = ['red', 'green', 'blue'] and print it.",
        answer: "colors = ['red', 'green', 'blue']\ncolors.append('orange')\nprint(colors)",
        output: "['red', 'green', 'blue', 'orange']"
      }
    ],
    interviewQuestion: "How are Python lists implemented internally in CPython?",
    interviewAnswer: "In CPython, a list is implemented as a dynamic contiguous array of pointers to Python objects (an array of PyObject*), providing O(1) random index access and amortized O(1) appends."
  },
  {
    id: "tuples",
    topicNumber: 32,
    sectionId: "data-structures",
    sectionTitle: "Section 6 — Data Structures",
    title: "Tuples",
    shortDescription: "Ordered, immutable sequences that protect data integrity, optimize memory, and enable tuple unpacking.",
    whatYouWillLearn: [
      "Creating tuples with () and comma syntax",
      "Immutability rules and why tuples are hashable",
      "Tuple unpacking (a, b = coords)",
      "When to choose tuples over lists"
    ],
    explanation: "A tuple is an ordered, immutable sequence. Once created, its items cannot be added, removed, or changed.\n\nWhy use Tuples?\n1. Data Integrity: Protects constant data from accidental modification.\n2. Memory & Speed: Tuples use less memory and are faster to allocate than lists.\n3. Dictionary Keys: Because tuples are immutable (if containing immutable elements), they are hashable and can serve as dictionary keys and set elements.\n4. Clean Unpacking: x, y, z = (10, 20, 30) allows clean multi-variable assignment.",
    example: {
      code: "point = (1920, 1080)\nwidth, height = point  # Tuple unpacking\nprint(f\"Resolution: {width} x {height}\")\n\nsingle = (42,)\nprint(\"Type of single:\", type(single))\n\nmixed = (1, 2, [\"a\", \"b\"])\nmixed[2].append(\"c\")\nprint(\"Mixed tuple:\", mixed)",
      output: "Resolution: 1920 x 1080\nType of single: <class 'tuple'>\nMixed tuple: (1, 2, ['a', 'b', 'c'])",
      howItWorks: "Tuples cannot have their reference pointers altered; unpacking binds values to separate variables in one step."
    },
    commonMistakes: [
      "Creating a single element tuple without a comma: x = (5) is an integer 5; x = (5,) is a tuple.",
      "Trying to mutate a tuple directly: point[0] = 100 causes TypeError."
    ],
    practiceQuestions: [
      {
        question: "Unpack a tuple coords = (12.5, 77.2) into variables lat and lng and print them.",
        answer: "coords = (12.5, 77.2)\nlat, lng = coords\nprint(f\"Lat: {lat}, Lng: {lng}\")",
        output: "Lat: 12.5, Lng: 77.2"
      }
    ],
    interviewQuestion: "What is the key difference between lists and tuples in memory and usage?",
    interviewAnswer: "Lists are mutable with over-allocated memory for dynamic resizing; tuples are immutable, fixed in size, use less memory, support hashability for dictionary keys, and are stored in single memory blocks."
  },
  {
    id: "sets",
    topicNumber: 33,
    sectionId: "data-structures",
    sectionTitle: "Section 6 — Data Structures",
    title: "Sets",
    shortDescription: "Unordered collections of unique, hashable elements supporting mathematical set operations (union, intersection, difference).",
    whatYouWillLearn: [
      "Creating sets with {} or set()",
      "Automatic deduplication of duplicates",
      "Mathematical set operations: union (|), intersection (&), difference (-), symmetric difference (^)",
      "O(1) average lookup performance"
    ],
    explanation: "A set is an unordered collection of unique, hashable elements.\n\nKey Characteristics:\n1. No Duplicates: Duplicate items are automatically eliminated.\n2. Fast Lookups: Powered by hash tables, checking x in my_set runs in O(1) time.\n3. Unordered: Sets do not maintain insertion order and do not support numeric indexing.",
    example: {
      code: "a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\n\nprint(\"Union (a | b):\", a | b)\nprint(\"Intersection (a & b):\", a & b)\nprint(\"Difference (a - b):\", a - b)\nprint(\"Symmetric Difference (a ^ b):\", a ^ b)\n\nraw_tags = [\"python\", \"ai\", \"python\", \"web\", \"ai\"]\nunique_tags = list(set(raw_tags))\nprint(\"Unique tags:\", sorted(unique_tags))",
      output: "Union (a | b): {1, 2, 3, 4, 5, 6}\nIntersection (a & b): {3, 4}\nDifference (a - b): {1, 2}\nSymmetric Difference (a ^ b): {1, 2, 5, 6}\nUnique tags: ['ai', 'python', 'web']",
      howItWorks: "Duplicate entries in raw_tags are removed instantly upon conversion to a set."
    },
    commonMistakes: [
      "Creating an empty set with {} (that creates an empty dictionary; use set() for an empty set).",
      "Trying to store unhashable mutable objects like lists inside a set (causes TypeError: unhashable type: 'list')."
    ],
    practiceQuestions: [
      {
        question: "Find the common numbers between set_x = {10, 20, 30} and set_y = {20, 30, 40}.",
        answer: "set_x = {10, 20, 30}\nset_y = {20, 30, 40}\nprint(set_x & set_y)",
        output: "{20, 30}"
      }
    ],
    interviewQuestion: "What requirement must an object meet to be stored in a Python set?",
    interviewAnswer: "The object must be hashable—meaning it must have a __hash__() method that returns an immutable integer throughout its lifetime and an __eq__() method for equality comparison."
  },
  {
    id: "dictionaries",
    topicNumber: 34,
    sectionId: "data-structures",
    sectionTitle: "Section 6 — Data Structures",
    title: "Dictionaries",
    shortDescription: "Key-value mapping data structures providing ultra-fast hash lookups, insertions, and flexible structured data handling.",
    whatYouWillLearn: [
      "Creating dictionaries with {key: value}",
      "Accessing values safely with .get() vs []",
      "Iterating through keys(), values(), and items()",
      "Updating and merging dictionaries (update(), | operator in 3.9+)"
    ],
    explanation: "A dictionary (dict) is a mutable, key-value mapping structure. Keys must be unique and hashable (strings, numbers, tuples), while values can be any Python object.\n\nAs of Python 3.7+, dictionaries maintain insertion order.\n\nSafe Access:\nUsing user[\"missing\"] raises a KeyError. Using user.get(\"missing\", default) returns the default value without raising an error.",
    example: {
      code: "user = {\n    \"name\": \"Tulasi\",\n    \"role\": \"Engineer\",\n    \"years_exp\": 5\n}\n\nprint(\"Name:\", user.get(\"name\"))\nprint(\"Salary:\", user.get(\"salary\", \"Not Disclosed\"))\n\nfor key, value in user.items():\n    print(f\"  {key}: {value}\")\n\nextra_info = {\"city\": \"Hyderabad\", \"status\": \"Active\"}\nfull_profile = user | extra_info\nprint(\"Full Profile:\", full_profile)",
      output: "Name: Tulasi\nSalary: Not Disclosed\n  name: Tulasi\n  role: Engineer\n  years_exp: 5\nFull Profile: {'name': 'Tulasi', 'role': 'Engineer', 'years_exp': 5, 'city': 'Hyderabad', 'status': 'Active'}",
      howItWorks: "items() yields (key, value) tuples for clean unpacking in loops."
    },
    commonMistakes: [
      "Using a mutable list as a dictionary key (causes TypeError: unhashable type: 'list').",
      "Directly indexing a key that might not exist without checking or using .get()."
    ],
    practiceQuestions: [
      {
        question: "Add a key 'department' with value 'AI' to employee = {'id': 101, 'name': 'Sam'} and print it.",
        answer: "employee = {'id': 101, 'name': 'Sam'}\nemployee['department'] = 'AI'\nprint(employee)",
        output: "{'id': 101, 'name': 'Sam', 'department': 'AI'}"
      }
    ],
    interviewQuestion: "What is the average time complexity of dictionary lookups, inserts, and deletes in Python?",
    interviewAnswer: "All are O(1) constant time on average, backed by an efficient compact hash table with collision resolution."
  },
  {
    id: "list-comprehension",
    topicNumber: 35,
    sectionId: "data-structures",
    sectionTitle: "Section 6 — Data Structures",
    title: "List Comprehension",
    shortDescription: "Construct new lists concisely from existing iterables using expressive, Pythonic one-liner comprehensions.",
    whatYouWillLearn: [
      "Comprehension syntax: [expression for item in iterable if condition]",
      "Filtering elements with if clauses",
      "Transforming items and applying functions inline",
      "Readability considerations vs traditional for loops"
    ],
    explanation: "List comprehension provides an elegant, concise way to create a new list by applying an expression to each item in an iterable, with optional filtering.\n\nSyntax:\n[expression for item in iterable if condition]\n\nIt is typically faster than a manual for loop with list.append() because the bytecode loop runs in optimized C under the hood.",
    example: {
      code: "numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\neven_squares = [n ** 2 for n in numbers if n % 2 == 0]\nprint(\"Even Squares:\", even_squares)\n\nwords = [\"python\", \"is\", \"awesome\"]\nupper_words = [w.upper() for w in words]\nprint(\"Uppercase:\", upper_words)",
      output: "Even Squares: [4, 16, 36, 64, 100]\nUppercase: ['PYTHON', 'IS', 'AWESOME']",
      howItWorks: "The comprehension filters numbers where n % 2 == 0 is True, then evaluates n ** 2 for each matching element."
    },
    commonMistakes: [
      "Writing overly complex nested comprehensions that become impossible to read or debug.",
      "Using list comprehension solely for side effects (like print) when a standard for loop is appropriate."
    ],
    practiceQuestions: [
      {
        question: "Create a list of lengths of each word in ['apple', 'pie', 'banana'] using list comprehension.",
        answer: "words = ['apple', 'pie', 'banana']\nlengths = [len(w) for w in words]\nprint(lengths)",
        output: "[5, 3, 6]"
      }
    ],
    interviewQuestion: "Why is list comprehension generally faster than an explicit for loop appending to a list?",
    interviewAnswer: "List comprehensions execute at C speed in CPython using the specialized LIST_APPEND bytecode instruction without the overhead of looking up the .append attribute on the list object on every iteration."
  },
  {
    id: "dictionary-comprehension",
    topicNumber: 36,
    sectionId: "data-structures",
    sectionTitle: "Section 6 — Data Structures",
    title: "Dictionary Comprehension",
    shortDescription: "Build and transform dictionaries cleanly using {key_expr: val_expr for item in iterable}.",
    whatYouWillLearn: [
      "Dict comprehension syntax: {k: v for item in iterable}",
      "Inverting dictionary keys and values",
      "Filtering dictionary items with conditions",
      "Pairing iterables with zip()"
    ],
    explanation: "Similar to list comprehensions, dictionary comprehensions provide an expressive syntax to construct new dictionaries from iterables or existing dictionaries.\n\nSyntax:\n{key_expr: value_expr for item in iterable if condition}",
    example: {
      code: "names = [\"Alice\", \"Bob\", \"Charlie\"]\nname_lengths = {name: len(name) for name in names}\nprint(\"Name Lengths:\", name_lengths)\n\ncodes = {\"US\": 1, \"UK\": 44, \"IN\": 91}\ninverted = {code: country for country, code in codes.items()}\nprint(\"Inverted:\", inverted)\n\ncatalog = {\"Pen\": 5, \"Desk\": 120, \"Chair\": 75, \"Notebook\": 12}\nexpensive = {k: v for k, v in catalog.items() if v > 50}\nprint(\"Expensive items:\", expensive)",
      output: "Name Lengths: {'Alice': 5, 'Bob': 3, 'Charlie': 7}\nInverted: {1: 'US', 44: 'UK', 91: 'IN'}\nExpensive items: {'Desk': 120, 'Chair': 75}",
      howItWorks: "The comprehension constructs key-value pairs in a single expression with optional filtering."
    },
    commonMistakes: [
      "Inverting a dictionary when values are not unique (duplicate values overwrite previous keys in the result).",
      "Omitting the colon ':' between key and value expressions."
    ],
    practiceQuestions: [
      {
        question: "Create a dictionary mapping numbers 1 to 4 to their cubes (e.g., 2: 8) using dict comprehension.",
        answer: "cubes = {n: n**3 for n in range(1, 5)}\nprint(cubes)",
        output: "{1: 1, 2: 8, 3: 27, 4: 64}"
      }
    ],
    interviewQuestion: "What happens if a dictionary comprehension generates duplicate keys?",
    interviewAnswer: "Since dictionary keys must be unique, later generated key-value pairs will overwrite earlier ones having the identical key."
  }
];

writeCleanData("dataStructures.js", "dataStructures", dataStructures);

// FUNCTIONS (37-44)
const functions = [
  {
    id: "functions-intro",
    topicNumber: 37,
    sectionId: "functions",
    sectionTitle: "Section 7 — Functions",
    title: "Functions",
    shortDescription: "Define reusable, modular blocks of code using the def keyword to organize logic and follow DRY principles.",
    whatYouWillLearn: [
      "Defining functions with def",
      "Calling functions and managing control flow",
      "Local vs global variable scope",
      "The DRY (Don't Repeat Yourself) principle"
    ],
    explanation: "A function is a named block of reusable code that performs a specific action and optionally returns a result.\n\nWhy use functions?\n- Reusability: Write logic once and execute it anywhere.\n- Modularity: Break large problems down into small, testable chunks.\n- Maintainability: Update logic in one place.\n\nSyntax:\ndef function_name():\n    # function body",
    example: {
      code: "def display_welcome():\n    print(\"========================\")\n    print(\"Welcome to Python Hub!\")\n    print(\"========================\")\n\ndisplay_welcome()\ndisplay_welcome()",
      output: "========================\nWelcome to Python Hub!\n========================\n========================\nWelcome to Python Hub!\n========================",
      howItWorks: "Defining the function registers it in memory. Calling display_welcome() transfers control to the body and returns upon completion."
    },
    commonMistakes: [
      "Forgetting parentheses when invoking: display_welcome references the function object itself, whereas display_welcome() calls it.",
      "Defining a function AFTER trying to call it (Python reads scripts top-to-bottom)."
    ],
    practiceQuestions: [
      {
        question: "Define a function called 'say_hello' that prints 'Hello, Python Learner!'.",
        answer: "def say_hello():\n    print(\"Hello, Python Learner!\")\n\nsay_hello()",
        output: "Hello, Python Learner!"
      }
    ],
    interviewQuestion: "Are functions first-class objects in Python?",
    interviewAnswer: "Yes. In Python, functions are first-class citizens. They can be passed as arguments to other functions, returned from functions, assigned to variables, and stored in data structures."
  },
  {
    id: "parameters-and-arguments",
    topicNumber: 38,
    sectionId: "functions",
    sectionTitle: "Section 7 — Functions",
    title: "Parameters and Arguments",
    shortDescription: "Pass dynamic data into functions using positional and keyword arguments.",
    whatYouWillLearn: [
      "Parameters (in function definition) vs Arguments (in function call)",
      "Positional arguments vs Keyword arguments",
      "Pass-by-assignment / Pass-by-object-reference semantics",
      "Keyword-only arguments with *"
    ],
    explanation: "Parameters are variables defined in the function header, while arguments are the actual values passed into the function when it is invoked.\n\nPassing Styles:\n1. Positional Arguments: Mapped in exact order of parameters.\n2. Keyword Arguments: Passed by parameter name (e.g. greet(name=\"Sara\", age=25)), allowing any order.\n\nPython Parameter Semantics:\nPython uses 'pass-by-assignment'. Immutable objects (integers, strings) cannot be altered by the function, whereas mutable objects (lists, dicts) can have their internal state modified.",
    example: {
      code: "def calculate_area(length, width):\n    return length * width\n\nprint(\"Area 1:\", calculate_area(10, 5))\nprint(\"Area 2:\", calculate_area(width=4, length=8))",
      output: "Area 1: 50\nArea 2: 32",
      howItWorks: "Keyword arguments specify parameter names explicitly, improving code clarity and allowing flexible order."
    },
    commonMistakes: [
      "Putting positional arguments after keyword arguments (e.g. calculate_area(length=10, 5) is a SyntaxError)."
    ],
    practiceQuestions: [
      {
        question: "Write a function full_name(first, last) that prints 'First Last'. Call it using keyword arguments.",
        answer: "def full_name(first, last):\n    print(f\"{first} {last}\")\n\nfull_name(last=\"Smith\", first=\"Jane\")",
        output: "Jane Smith"
      }
    ],
    interviewQuestion: "How does Python handle argument passing: by value or by reference?",
    interviewAnswer: "Python uses 'pass-by-assignment' (pass-by-object-reference). Object references are passed by value: mutating mutable objects inside a function affects the caller, but reassigning the variable name inside the function does not affect the caller's reference."
  },
  {
    id: "return-values",
    topicNumber: 39,
    sectionId: "functions",
    sectionTitle: "Section 7 — Functions",
    title: "Return Values",
    shortDescription: "Send results back to the caller from functions, including returning multiple values as tuples.",
    whatYouWillLearn: [
      "The return keyword and terminating function execution",
      "Functions without return statements implicitly returning None",
      "Returning multiple values via tuple packing/unpacking",
      "Early returns for clean code flow"
    ],
    explanation: "The 'return' statement ends function execution and sends a value back to the caller.\n\nKey Concepts:\n- If no return statement is executed, the function automatically returns None.\n- A function can return multiple comma-separated values, which Python automatically packs into a single tuple.",
    example: {
      code: "def get_circle_stats(radius):\n    import math\n    area = math.pi * (radius ** 2)\n    circumference = 2 * math.pi * radius\n    return area, circumference\n\na, c = get_circle_stats(5)\nprint(f\"Area: {a:.2f}, Circumference: {c:.2f}\")",
      output: "Area: 78.54, Circumference: 31.42",
      howItWorks: "Multiple values separated by commas return a tuple (area, circumference) which is immediately unpacked."
    },
    commonMistakes: [
      "Trying to execute code after a return statement (it will never run as return immediately exits).",
      "Forgetting to capture the return value in a variable."
    ],
    practiceQuestions: [
      {
        question: "Write a function min_max(numbers) that returns both the smallest and largest numbers in a list.",
        answer: "def min_max(numbers):\n    return min(numbers), max(numbers)\n\nlow, high = min_max([4, 1, 9, 7])\nprint(f\"Min: {low}, Max: {high}\")",
        output: "Min: 1, Max: 9"
      }
    ],
    interviewQuestion: "What does a Python function return if it does not contain a return statement?",
    interviewAnswer: "It implicitly returns None (of type NoneType)."
  },
  {
    id: "default-arguments",
    topicNumber: 40,
    sectionId: "functions",
    sectionTitle: "Section 7 — Functions",
    title: "Default Arguments",
    shortDescription: "Assign default fallback values to parameters, and understand the crucial mutable default argument trap.",
    whatYouWillLearn: [
      "Defining optional parameters with default values",
      "Position of default arguments (must follow non-default parameters)",
      "The 'Mutable Default Argument' trap and how to avoid it with None",
      "Evaluating default arguments at function definition time"
    ],
    explanation: "Parameters can have default values. If the caller does not provide an argument, the default is used.\n\nIMPORTANT: The Mutable Default Trap:\nDefault parameter values are evaluated ONCE when the function is defined, NOT each time the function is called! If you use a mutable object (like a list or dict) as a default, all calls without an argument share the exact same object.\n\nSolution: Always use None as the default and initialize the mutable object inside the function body.",
    example: {
      code: "def add_item(item, target_list=None):\n    if target_list is None:\n        target_list = []\n    target_list.append(item)\n    return target_list\n\nlist1 = add_item(\"apple\")\nlist2 = add_item(\"banana\")\nprint(\"List 1:\", list1)\nprint(\"List 2:\", list2)",
      output: "List 1: ['apple']\nList 2: ['banana']",
      howItWorks: "Using target_list=None ensures each invocation receives its own fresh list when no list is provided."
    },
    commonMistakes: [
      "Writing def append_to(element, target=[]): which retains accumulated items across repeated calls.",
      "Placing a non-default parameter after a default parameter (SyntaxError: non-default argument follows default argument)."
    ],
    practiceQuestions: [
      {
        question: "Create a function power(base, exponent=2) that calculates power with a default exponent of 2.",
        answer: "def power(base, exponent=2):\n    return base ** exponent\n\nprint(power(4))\nprint(power(4, 3))",
        output: "16\n64"
      }
    ],
    interviewQuestion: "Why is def func(a, b=[]): considered a dangerous anti-pattern in Python?",
    interviewAnswer: "In Python, default arguments are evaluated once at function definition time. The list b is stored in the function's __defaults__ tuple, so subsequent mutations to b persist across future calls that rely on the default."
  },
  {
    id: "args-variable-positional",
    topicNumber: 41,
    sectionId: "functions",
    sectionTitle: "Section 7 — Functions",
    title: "*args (Variable Positional Arguments)",
    shortDescription: "Accept an arbitrary number of positional arguments into a function packed into a tuple.",
    whatYouWillLearn: [
      "The * unpacking operator for positional arguments",
      "Accessing *args as an immutable tuple inside the function",
      "Unpacking lists/tuples into function calls with *",
      "Combining regular parameters with *args"
    ],
    explanation: "When you don't know how many positional arguments will be passed to a function, use '*args' in the parameter list.\n\nThe asterisk (*) packs all extra positional arguments into a single tuple named 'args'. (The name 'args' is convention; the '*' is what enables the behavior).",
    example: {
      code: "def calculate_sum(*numbers):\n    return sum(numbers)\n\nprint(\"Sum 1:\", calculate_sum(1, 2, 3))\nprint(\"Sum 2:\", calculate_sum(10, 20, 30, 40, 50))\n\nvals = [5, 15, 25]\nprint(\"Sum 3:\", calculate_sum(*vals))",
      output: "Sum 1: 6\nSum 2: 150\nSum 3: 45",
      howItWorks: "All individual arguments passed are bundled into a tuple numbers = (1, 2, 3) inside the function."
    },
    commonMistakes: [
      "Placing positional arguments after *args without specifying them as keyword-only arguments."
    ],
    practiceQuestions: [
      {
        question: "Write a function multiply_all(*nums) that multiplies all provided numbers together.",
        answer: "def multiply_all(*nums):\n    result = 1\n    for n in nums:\n        result *= n\n    return result\n\nprint(multiply_all(2, 3, 4))",
        output: "24"
      }
    ],
    interviewQuestion: "What is the data type of *args inside a function body?",
    interviewAnswer: "*args is packed into a standard immutable Python tuple."
  },
  {
    id: "kwargs-variable-keyword",
    topicNumber: 42,
    sectionId: "functions",
    sectionTitle: "Section 7 — Functions",
    title: "**kwargs (Variable Keyword Arguments)",
    shortDescription: "Accept an arbitrary number of named keyword arguments packed into a dictionary.",
    whatYouWillLearn: [
      "The ** unpacking operator for keyword arguments",
      "Accessing **kwargs as a dictionary inside the function",
      "Unpacking dictionaries into function calls with **",
      "Writing flexible wrapper functions and decorators"
    ],
    explanation: "The '**kwargs' syntax enables a function to accept any number of keyword arguments (key=value).\n\nThe double asterisk (**) packs all named arguments not matched by other parameters into a dictionary named 'kwargs'.",
    example: {
      code: "def build_user_profile(username, **details):\n    print(f\"User: {username}\")\n    for key, value in details.items():\n        print(f\"  {key}: {value}\")\n\nbuild_user_profile(\"tulasi\", role=\"AI Developer\", city=\"Hyderabad\", verified=True)",
      output: "User: tulasi\n  role: AI Developer\n  city: Hyderabad\n  verified: True",
      howItWorks: "All named arguments after 'username' are collected into a dictionary: details = {'role': 'AI Developer', 'city': 'Hyderabad', 'verified': True}."
    },
    commonMistakes: [
      "Placing **kwargs before *args (the canonical order is def func(pos, *args, kw_only, **kwargs):)."
    ],
    practiceQuestions: [
      {
        question: "Write a function print_config(**settings) that prints key = value for all passed settings.",
        answer: "def print_config(**settings):\n    for k, v in settings.items():\n        print(f\"{k} = {v}\")\n\nprint_config(theme=\"dark\", debug=False)",
        output: "theme = dark\ndebug = False"
      }
    ],
    interviewQuestion: "What is the order of parameters in a Python function definition that uses all argument types?",
    interviewAnswer: "The order is: 1) standard positional parameters, 2) default parameters, 3) *args, 4) keyword-only parameters, and 5) **kwargs."
  },
  {
    id: "lambda-functions",
    topicNumber: 43,
    sectionId: "functions",
    sectionTitle: "Section 7 — Functions",
    title: "Lambda Functions",
    shortDescription: "Write small, anonymous, single-expression inline functions without the def keyword.",
    whatYouWillLearn: [
      "Lambda syntax: lambda arguments: expression",
      "Anonymous inline callbacks",
      "Using lambdas with map(), filter(), and sorted(key=...)",
      "When to use lambdas vs standard def functions"
    ],
    explanation: "A lambda function is a small, anonymous function that can have any number of arguments but only a single expression. The result of the expression is implicitly returned.\n\nSyntax:\nlambda arguments: expression\n\nBest Use Case: Short throwaway functions passed as sorting keys or functional mapping transformations.",
    example: {
      code: "students = [(\"Alice\", 88), (\"Bob\", 95), (\"Charlie\", 72)]\nstudents.sort(key=lambda s: s[1], reverse=True)\nprint(\"Ranked students:\", students)\n\nnumbers = [1, 2, 3, 4, 5, 6]\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(\"Evens:\", evens)",
      output: "Ranked students: [('Bob', 95), ('Alice', 88), ('Charlie', 72)]\nEvens: [2, 4, 6]",
      howItWorks: "The lambda extracts s[1] (the score) for each tuple, which the sort method uses as the comparison key."
    },
    commonMistakes: [
      "Trying to put complex statements (like loops, assignments, or multiple lines) inside a lambda (lambdas only accept a single expression; use def for multi-line logic).",
      "Assigning lambdas to variable names (PEP 8 recommends using def instead of square = lambda x: x**2)."
    ],
    practiceQuestions: [
      {
        question: "Use a lambda function with sorted() to sort words ['banana', 'pie', 'apple'] by word length.",
        answer: "words = ['banana', 'pie', 'apple']\nsorted_words = sorted(words, key=lambda w: len(w))\nprint(sorted_words)",
        output: "['pie', 'apple', 'banana']"
      }
    ],
    interviewQuestion: "What are the limitations of lambda functions in Python?",
    interviewAnswer: "Lambda functions are restricted to a single expression without statements (no if-else blocks without ternary expressions, no assignments, no while/for loops), and they lack a descriptive __name__ attribute, making stack traces less readable."
  },
  {
    id: "recursion",
    topicNumber: 44,
    sectionId: "functions",
    sectionTitle: "Section 7 — Functions",
    title: "Recursion",
    shortDescription: "Solve problems by having a function call itself, mastering base cases, and avoiding stack overflows.",
    whatYouWillLearn: [
      "Base case vs recursive step",
      "Call stack dynamics and call frames",
      "Recursion depth limit and sys.getrecursionlimit()",
      "Classic recursive algorithms: factorial, Fibonacci, tree traversal"
    ],
    explanation: "Recursion is a programming technique where a function solves a problem by calling itself with smaller sub-problems.\n\nEvery recursive function MUST have two parts:\n1. Base Case: The condition that stops recursion and returns a direct answer.\n2. Recursive Step: The function calling itself with a smaller input, converging toward the base case.\n\nDanger: Without a base case, recursion continues infinitely until Python raises RecursionError: maximum recursion depth exceeded.",
    example: {
      code: "def factorial(n):\n    if n <= 1:\n        return 1\n    return n * factorial(n - 1)\n\nprint(\"Factorial of 5 (5!):\", factorial(5))\nprint(\"Factorial of 6 (6!):\", factorial(6))",
      output: "Factorial of 5 (5!): 120\nFactorial of 6 (6!): 720",
      howItWorks: "factorial(5) calls 5 * factorial(4) -> 5 * 4 * factorial(3) -> ... down to factorial(1) = 1, then unwinds the stack."
    },
    commonMistakes: [
      "Missing or incorrect base case causing infinite stack overflow (RecursionError).",
      "Excessive redundant calls in naive recursive Fibonacci without memoization."
    ],
    practiceQuestions: [
      {
        question: "Write a recursive function sum_to(n) that calculates the sum of all numbers from 1 up to n.",
        answer: "def sum_to(n):\n    if n <= 1:\n        return n\n    return n + sum_to(n - 1)\n\nprint(sum_to(5))",
        output: "15"
      }
    ],
    interviewQuestion: "Does Python perform Tail Call Optimization (TCO)?",
    interviewAnswer: "No, Python does not optimize tail-recursive calls. Guido van Rossum intentionally omitted TCO to preserve complete stack traces for debugging, keeping Python's default recursion limit at 1,000 frames."
  }
];

writeCleanData("functions.js", "functions", functions);

// MODULES (45-49)
const modules = [
  {
    id: "modules-intro",
    topicNumber: 45,
    sectionId: "modules",
    sectionTitle: "Section 8 — Modules",
    title: "Modules",
    shortDescription: "Organize Python code into separate reusable .py files and understand the __name__ == '__main__' guard.",
    whatYouWillLearn: [
      "What a module is (any .py file)",
      "Creating and importing custom modules",
      "Module search path and sys.path",
      "The role of if __name__ == '__main__':"
    ],
    explanation: "A module is simply a Python file (.py) containing functions, classes, and variables that can be imported and reused across other Python programs.\n\nThe __name__ == '__main__' Idiom:\nWhen Python runs a file directly, it sets the special variable __name__ to '__main__'. When the file is imported into another script, __name__ is set to the module's actual filename. This allows you to write executable test code that won't run when your module is imported elsewhere.",
    example: {
      code: "# math_helpers.py example\ndef add(a, b):\n    return a + b\n\ndef multiply(a, b):\n    return a * b\n\nif __name__ == \"__main__\":\n    print(\"Running self-test on math_helpers:\")\n    print(\"add(2, 3) =\", add(2, 3))",
      output: "Running self-test on math_helpers:\nadd(2, 3) = 5",
      howItWorks: "If math_helpers is imported into app.py, the self-test block is skipped, exposing only the utility functions."
    },
    commonMistakes: [
      "Naming a local script the same name as a built-in module (e.g. naming your file math.py or random.py), which shadows the standard library.",
      "Circular imports where module A imports module B and module B imports module A at the top level."
    ],
    practiceQuestions: [
      {
        question: "What is the purpose of if __name__ == '__main__': in Python scripts?",
        answer: "if __name__ == '__main__':\n    print(\"Executing directly\")",
        output: "Executing directly"
      }
    ],
    interviewQuestion: "How does Python know where to look when you write import my_module?",
    interviewAnswer: "Python searches the directories listed in sys.path: first the current working directory, then the directories in the PYTHONPATH environment variable, and finally the standard library and installed site-packages directories."
  },
  {
    id: "packages",
    topicNumber: 46,
    sectionId: "modules",
    sectionTitle: "Section 8 — Modules",
    title: "Packages",
    shortDescription: "Structure hierarchical collections of modules into packages using directories and __init__.py files.",
    whatYouWillLearn: [
      "What a package is (a directory containing modules)",
      "The role of __init__.py in package initialization",
      "Relative vs absolute imports within packages",
      "Defining public APIs with __all__"
    ],
    explanation: "A package is a directory that organizes multiple related Python modules together in a hierarchical namespace using dot notation (e.g. ecommerce.billing.invoices).\n\nIn Python 3.3+, implicit namespace packages exist, but including an __init__.py file is standard practice to declare regular packages and execute package-level initialization.",
    example: {
      code: "# Package directory structure:\n# my_app/\n#   __init__.py\n#   database.py\n#   auth.py\n\nprint(\"Package directory structure configured with __init__.py\")",
      output: "Package directory structure configured with __init__.py",
      howItWorks: "Importing my_app automatically executes __init__.py and exposes the submodules cleanly."
    },
    commonMistakes: [
      "Using relative imports (like from .utils import helper) when running the file as a standalone script rather than as a module.",
      "Forgetting to export public symbols using __all__ in library packages."
    ],
    practiceQuestions: [
      {
        question: "What file must be present in a directory to mark it as a traditional Python package?",
        answer: "print(\"__init__.py declares a package.\")",
        output: "__init__.py declares a package."
      }
    ],
    interviewQuestion: "What is the difference between a module and a package in Python?",
    interviewAnswer: "A module is a single Python file (.py), whereas a package is a directory of modules that contains an __init__.py file, enabling structured dot-notation namespace imports."
  },
  {
    id: "import-statement",
    topicNumber: 47,
    sectionId: "modules",
    sectionTitle: "Section 8 — Modules",
    title: "import",
    shortDescription: "Master Python's import syntax: import module, from module import func, and import module as alias.",
    whatYouWillLearn: [
      "Different import syntax variants",
      "Aliasing module names with 'as'",
      "Selective importing with 'from ... import ...'",
      "Why wildcard imports (from module import *) are discouraged"
    ],
    explanation: "The 'import' statement loads external or standard library code into your current namespace.\n\nImport Variants:\n1. import math: Access functions via math.sqrt(16)\n2. from math import sqrt, pi: Access directly as sqrt(16) and pi\n3. import numpy as np: Provide a shorter alias\n4. from math import *: Imports everything (ANTI-PATTERN: pollutes namespace and causes name collisions).",
    example: {
      code: "import math\nfrom datetime import datetime\nimport json as jsn\n\nprint(\"Square root of 64:\", math.sqrt(64))\nprint(\"Current Year:\", datetime.now().year)\n\nsample_data = {\"status\": \"ok\"}\nprint(\"JSON encoded:\", jsn.dumps(sample_data))",
      output: "Square root of 64: 8.0\nCurrent Year: 2026\nJSON encoded: {\"status\": \"ok\"}",
      howItWorks: "Different import forms allow you to balance namespace cleanliness, readability, and typing brevity."
    },
    commonMistakes: [
      "Using from module import * which obscures where functions originated from and introduces silent name overwrites.",
      "Circular imports triggered at the top of module files."
    ],
    practiceQuestions: [
      {
        question: "Import the random module and generate a random integer between 1 and 10 using randint.",
        answer: "import random\nnum = random.randint(1, 10)\nprint(\"Generated:\", type(num) is int)",
        output: "Generated: True"
      }
    ],
    interviewQuestion: "What happens when Python encounters an import statement for the first time vs subsequent times?",
    interviewAnswer: "On the first import, Python locates, compiles to bytecode, executes the module top-to-bottom, and caches the resulting module object in sys.modules. On subsequent imports, Python reuses the cached object instantly without re-executing the module code."
  },
  {
    id: "pip-package-manager",
    topicNumber: 48,
    sectionId: "modules",
    sectionTitle: "Section 8 — Modules",
    title: "pip (Package Installer for Python)",
    shortDescription: "Install, upgrade, manage, and freeze third-party libraries from the Python Package Index (PyPI).",
    whatYouWillLearn: [
      "Installing packages with pip install <package>",
      "Managing requirements.txt (pip freeze > requirements.txt)",
      "Upgrading and uninstalling libraries",
      "Using virtual environments (venv) with pip"
    ],
    explanation: "pip is the standard package manager for Python, used to install and manage libraries from the Python Package Index (PyPI).\n\nEssential Commands:\n- pip install requests: Install a package\n- pip install requests==2.31.0: Install a specific version\n- pip install --upgrade requests: Upgrade package\n- pip uninstall requests: Remove package\n- pip freeze > requirements.txt: Export exact dependency versions\n- pip install -r requirements.txt: Install all dependencies listed in a project file",
    example: {
      code: "# Typical requirements.txt format:\n# requests==2.31.0\n# fastapi==0.110.0\n\nprint(\"pip installs packages from PyPI into site-packages.\")",
      output: "pip installs packages from PyPI into site-packages.",
      howItWorks: "pip downloads the package wheels or source tarballs from PyPI, resolves dependencies, and installs them into your Python environment's site-packages."
    },
    commonMistakes: [
      "Installing global packages without an active virtual environment (can cause version conflicts across projects).",
      "Typing pip install inside the Python interactive REPL instead of the terminal shell."
    ],
    practiceQuestions: [
      {
        question: "What terminal command saves all currently installed dependencies to a requirements.txt file?",
        answer: "# pip freeze > requirements.txt\nprint(\"pip freeze > requirements.txt\")",
        output: "pip freeze > requirements.txt"
      }
    ],
    interviewQuestion: "Why is it best practice to use virtual environments (venv) alongside pip?",
    interviewAnswer: "Virtual environments isolate project-specific dependencies and versions in separate self-contained directories, preventing version conflicts between different projects and keeping the global system Python clean."
  },
  {
    id: "python-standard-library",
    topicNumber: 49,
    sectionId: "modules",
    sectionTitle: "Section 8 — Modules",
    title: "Python Standard Library",
    shortDescription: "Explore Python's 'batteries included' philosophy and its powerful built-in standard library modules.",
    whatYouWillLearn: [
      "The 'Batteries Included' philosophy of Python",
      "Essential modules: os, sys, math, random, datetime, json, re, collections, itertools",
      "Working with paths using modern pathlib",
      "Generating unique identifiers with uuid"
    ],
    explanation: "Python comes with an extensive standard library known as 'batteries included'. You do not need to install third-party libraries for many common tasks:\n\nCore Standard Library Modules:\n- math, statistics, random: Numerical computation\n- datetime, time: Timestamps and dates\n- os, sys, pathlib: Operating system and filesystem interaction\n- json, csv: Data serialization and file formats\n- re: Regular expressions pattern matching\n- collections (Counter, defaultdict, deque): Advanced data structures\n- itertools, functools: Functional programming utilities",
    example: {
      code: "from collections import Counter\nimport json\n\nvotes = [\"Python\", \"JavaScript\", \"Python\", \"Rust\", \"Python\", \"Rust\"]\ntally = Counter(votes)\nprint(\"Top vote:\", tally.most_common(1))\n\ndata = {\"user_id\": 101, \"votes\": dict(tally)}\nprint(\"JSON Output:\", json.dumps(data))",
      output: "Top vote: [('Python', 3)]\nJSON Output: {\"user_id\": 101, \"votes\": {\"Python\": 3, \"JavaScript\": 1, \"Rust\": 2}}",
      howItWorks: "Built-in modules provide robust, tested, high-performance implementations directly out of the box."
    },
    commonMistakes: [
      "Installing external packages for tasks that the standard library already solves natively (e.g. installing a library for basic JSON parsing or date calculations)."
    ],
    practiceQuestions: [
      {
        question: "Use collections.Counter to count letter frequencies in the word 'mississippi'.",
        answer: "from collections import Counter\ncounts = Counter('mississippi')\nprint(counts['s'])",
        output: "4"
      }
    ],
    interviewQuestion: "What is collections.defaultdict and how does it differ from a standard Python dictionary?",
    interviewAnswer: "defaultdict is a subclass of dict that takes a default factory function (e.g. int, list). When accessing a non-existent key, it automatically initializes and inserts the default value instead of raising a KeyError."
  }
];

writeCleanData("modules.js", "modules", modules);

// EXCEPTIONS (50-56)
const exceptions = [
  {
    id: "errors-vs-exceptions",
    topicNumber: 50,
    sectionId: "exceptions",
    sectionTitle: "Section 9 — Exception Handling",
    title: "Errors",
    shortDescription: "Understand the fundamental distinction between syntax errors (parsing phase) and runtime exceptions.",
    whatYouWillLearn: [
      "Syntax errors vs runtime errors",
      "How Python's parser detects syntax errors before execution",
      "Common SyntaxError causes (unclosed brackets, invalid indentation)",
      "How to read traceback call stacks"
    ],
    explanation: "In Python, issues in code fall into two main categories:\n1. Syntax Errors: Occur when the parser cannot understand the code structure (e.g. missing colons, mismatched quotes, IndentationError). These halt execution immediately before the program runs any lines.\n2. Exceptions (Runtime Errors): The syntax is valid, but an error occurs during execution (e.g. dividing by zero, accessing a non-existent file, or indexing beyond a list boundary).",
    example: {
      code: "try:\n    result = 10 / 0\nexcept ZeroDivisionError as e:\n    print(\"Caught Runtime Error:\", e)",
      output: "Caught Runtime Error: division by zero",
      howItWorks: "Syntax errors prevent bytecode compilation entirely, whereas runtime exceptions occur while the interpreter is executing instructions."
    },
    commonMistakes: [
      "Trying to wrap a SyntaxError in a try/except block in the same file (the parser fails before try/except can even execute)."
    ],
    practiceQuestions: [
      {
        question: "Is IndentationError a syntax error or a runtime exception?",
        answer: "print(\"SyntaxError subclass\")",
        output: "SyntaxError subclass"
      }
    ],
    interviewQuestion: "What is the difference between a SyntaxError and an Exception in Python?",
    interviewAnswer: "A SyntaxError is raised by Python's tokenizer/parser during bytecode compilation before runtime. An Exception occurs at runtime when a syntactically valid statement attempts an illegal operation."
  },
  {
    id: "built-in-exceptions",
    topicNumber: 51,
    sectionId: "exceptions",
    sectionTitle: "Section 9 — Exception Handling",
    title: "Exceptions",
    shortDescription: "Explore common built-in Python exception classes and the exception hierarchy tree.",
    whatYouWillLearn: [
      "Standard exceptions: ValueError, TypeError, IndexError, KeyError, FileNotFoundError",
      "Python Exception Hierarchy (BaseException -> Exception -> specific types)",
      "Why catching broad BaseException is dangerous",
      "Inspecting exception objects and messages"
    ],
    explanation: "When a runtime error occurs, Python creates an Exception object and raises it.\n\nCommon Built-in Exceptions:\n- ValueError: Right type, but inappropriate value (e.g. int(\"abc\"))\n- TypeError: Incompatible type (e.g. \"age: \" + 25)\n- IndexError: Sequence index out of range\n- KeyError: Dictionary key not found\n- FileNotFoundError: Attempting to read a non-existent file\n- ZeroDivisionError: Division by zero",
    example: {
      code: "try:\n    user_input = \"forty-two\"\n    number = int(user_input)\nexcept ValueError as err:\n    print(f\"Caught {type(err).__name__}: {err}\")",
      output: "Caught ValueError: invalid literal for int() with base 10: 'forty-two'",
      howItWorks: "int('forty-two') fails to parse as a base-10 digit, raising a ValueError with a helpful message."
    },
    commonMistakes: [
      "Catching BaseException or bare except: which accidentally intercepts KeyboardInterrupt (Ctrl+C) and SystemExit."
    ],
    practiceQuestions: [
      {
        question: "What exception is raised when you access d['missing'] on an empty dictionary d = {}?",
        answer: "d = {}\ntry:\n    val = d['missing']\nexcept KeyError:\n    print(\"Caught KeyError\")",
        output: "Caught KeyError"
      }
    ],
    interviewQuestion: "Why should you catch Exception instead of BaseException?",
    interviewAnswer: "BaseException is the root class for system-exiting exceptions like KeyboardInterrupt, SystemExit, and GeneratorExit. Catching BaseException prevents the program from responding to Ctrl+C interrupts or exit calls."
  },
  {
    id: "try-except",
    topicNumber: 52,
    sectionId: "exceptions",
    sectionTitle: "Section 9 — Exception Handling",
    title: "try-except",
    shortDescription: "Gracefully catch and handle runtime exceptions to prevent program crashes.",
    whatYouWillLearn: [
      "try-except block syntax and execution flow",
      "Catching specific exception types",
      "Handling multiple exceptions with separate except clauses",
      "Capturing exception instances with 'as e'"
    ],
    explanation: "The 'try-except' block allows your program to intercept and handle exceptions gracefully without terminating abruptly.\n\nExecution Flow:\n1. The code inside the try block executes line-by-line.\n2. If an exception occurs, execution immediately jumps to the matching except block.\n3. If no exception occurs, the except block is completely skipped.",
    example: {
      code: "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return \"Error: Cannot divide by zero!\"\n    except TypeError:\n        return \"Error: Both arguments must be numbers!\"\n\nprint(safe_divide(10, 2))\nprint(safe_divide(10, 0))",
      output: "5.0\nError: Cannot divide by zero!",
      howItWorks: "Specific except blocks match the exact failure mode, enabling targeted recovery strategies."
    },
    commonMistakes: [
      "Using bare except: without specifying exception types, which hides bugs like typos and logic errors.",
      "Placing broad exceptions like except Exception: before specific ones like except ValueError:."
    ],
    practiceQuestions: [
      {
        question: "Write a try-except block that tries to convert 'abc' to an integer and prints 'Conversion failed' on ValueError.",
        answer: "try:\n    num = int('abc')\nexcept ValueError:\n    print(\"Conversion failed\")",
        output: "Conversion failed"
      }
    ],
    interviewQuestion: "What is EAFP in Python and how does it relate to try-except?",
    interviewAnswer: "EAFP stands for 'Easier to Ask for Forgiveness than Permission'. It is a core Python philosophy where you assume valid conditions and wrap in try-except, rather than cluttering code with multiple pre-emptive if checks (LBYL: Look Before You Leap)."
  },
  {
    id: "try-else-clause",
    topicNumber: 53,
    sectionId: "exceptions",
    sectionTitle: "Section 9 — Exception Handling",
    title: "else in Exception Handling",
    shortDescription: "Execute code ONLY when no exceptions were raised in the try block.",
    whatYouWillLearn: [
      "The role of the 'else' clause in try-except",
      "Separating risky operations from post-success logic",
      "Preventing accidental exception catching in post-try logic"
    ],
    explanation: "The 'else' block in a try-except statement executes ONLY if the 'try' block completed successfully without raising any exceptions.\n\nWhy use 'else'?\nIt keeps the 'try' block minimal (containing only the code that might raise the exception), avoiding accidentally catching exceptions in downstream logic.",
    example: {
      code: "def process_number(text):\n    try:\n        val = int(text)\n    except ValueError:\n        print(f\"'{text}' is not a valid integer.\")\n    else:\n        squared = val ** 2\n        print(f\"Success! {val} squared is {squared}\")\n\nprocess_number(\"12\")\nprocess_number(\"hello\")",
      output: "Success! 12 squared is 144\n'hello' is not a valid integer.",
      howItWorks: "When text='12', int conversion succeeds, so the else block executes and computes the square."
    },
    commonMistakes: [
      "Putting everything inside the try block instead of moving post-success logic into the else block."
    ],
    practiceQuestions: [
      {
        question: "Write a try-except-else block where x = 10 / 2 prints 'Calculation Succeeded: 5.0' in the else block.",
        answer: "try:\n    x = 10 / 2\nexcept ZeroDivisionError:\n    print(\"Error\")\nelse:\n    print(f\"Calculation Succeeded: {x}\")",
        output: "Calculation Succeeded: 5.0"
      }
    ],
    interviewQuestion: "Why is using the else block considered better practice than putting all success logic inside the try block?",
    interviewAnswer: "It prevents unintentional catching of exceptions raised by subsequent operations that weren't meant to be handled by that specific except clause."
  },
  {
    id: "try-finally-clause",
    topicNumber: 54,
    sectionId: "exceptions",
    sectionTitle: "Section 9 — Exception Handling",
    title: "finally",
    shortDescription: "Guarantee cleanup actions (closing files, releasing locks, terminating connections) regardless of exceptions or returns.",
    whatYouWillLearn: [
      "The guaranteed execution contract of the finally block",
      "Resource cleanup and teardown logic",
      "How finally interacts with return statements",
      "try-finally without an except block"
    ],
    explanation: "The 'finally' block ALWAYS executes before leaving the try statement, regardless of whether:\n- The try block succeeded.\n- An exception occurred and was caught.\n- An unhandled exception was raised.\n- A 'return', 'break', or 'continue' statement was executed!\n\nPrimary use case: Releasing external resources like file handles, database connections, and network sockets.",
    example: {
      code: "def perform_cleanup_demo():\n    try:\n        print(\"1. Executing task...\")\n        return \"Success\"\n    finally:\n        print(\"2. Cleanup: Closed database connections.\")\n\nprint(\"Result:\", perform_cleanup_demo())",
      output: "1. Executing task...\n2. Cleanup: Closed database connections.\nResult: Success",
      howItWorks: "Even with a return statement inside try, the finally block runs before the function returns."
    },
    commonMistakes: [
      "Putting a return statement inside the finally block (it will swallow and overwrite any exceptions or return values from the try block!)."
    ],
    practiceQuestions: [
      {
        question: "Write a try-finally block that prints 'Always runs' even when an error occurs.",
        answer: "try:\n    pass\nfinally:\n    print(\"Always runs\")",
        output: "Always runs"
      }
    ],
    interviewQuestion: "Can a finally block ever fail to execute?",
    interviewAnswer: "Only in rare catastrophic scenarios: if the Python interpreter process crashes (SIGKILL / hard OS kill), if os._exit() is called, or if a hardware power failure occurs."
  },
  {
    id: "raise-statement",
    topicNumber: 55,
    sectionId: "exceptions",
    sectionTitle: "Section 9 — Exception Handling",
    title: "raise",
    shortDescription: "Manually trigger exceptions when business logic invariants or validation checks fail.",
    whatYouWillLearn: [
      "Raising exceptions using the raise keyword",
      "Passing descriptive error messages to exception constructors",
      "Re-raising exceptions with a bare 'raise'",
      "Exception chaining with 'raise ... from ...'"
    ],
    explanation: "The 'raise' statement explicitly triggers an exception in your code when invalid arguments or error conditions are encountered.\n\nUse Cases:\n- Input validation: Ensuring arguments meet preconditions.\n- Enforcing business rules (e.g. insufficient account balance).\n- Re-raising an exception after logging it.",
    example: {
      code: "def set_user_age(age):\n    if not isinstance(age, int):\n        raise TypeError(\"Age must be an integer!\")\n    if age < 0 or age > 130:\n        raise ValueError(f\"Age {age} is outside the valid range (0-130)!\")\n    return f\"User age set to {age}\"\n\nprint(set_user_age(28))",
      output: "User age set to 28",
      howItWorks: "When invalid data is passed, raise immediately creates and propagates the exception."
    },
    commonMistakes: [
      "Raising generic Exception instead of specific subclasses like ValueError or TypeError.",
      "Raising strings: raise 'Error' is illegal in Python 3 (must raise an Exception instance or class)."
    ],
    practiceQuestions: [
      {
        question: "Write a function validate_pin(pin) that raises ValueError if pin length is not 4.",
        answer: "def validate_pin(pin):\n    if len(str(pin)) != 4:\n        raise ValueError(\"PIN must be 4 digits\")\n    return \"PIN Valid\"\n\nprint(validate_pin(1234))",
        output: "PIN Valid"
      }
    ],
    interviewQuestion: "What is exception chaining and how do you use raise ... from ... in Python 3?",
    interviewAnswer: "raise NewException() from original_error explicitly chains exceptions, preserving the original cause in __cause__ and displaying both tracebacks for enhanced debugging."
  },
  {
    id: "custom-exceptions",
    topicNumber: 56,
    sectionId: "exceptions",
    sectionTitle: "Section 9 — Exception Handling",
    title: "Custom Exceptions",
    shortDescription: "Create domain-specific exception classes by inheriting from Python's Exception base class.",
    whatYouWillLearn: [
      "Subclassing the Exception class",
      "Adding custom attributes and error codes",
      "Creating domain-specific exception hierarchies for libraries",
      "Best practices for custom exceptions"
    ],
    explanation: "In production applications and packages, creating custom exception classes provides clear, domain-specific error handling for API consumers.\n\nConvention:\n- Inherit from Exception (never BaseException).\n- Name your custom exception ending with Error (e.g., AuthenticationError, PaymentFailedError).",
    example: {
      code: "class InsufficientFundsError(Exception):\n    \"\"\"Raised when an account withdrawal exceeds current balance.\"\"\"\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(f\"Attempted to withdraw ${amount}, but balance is only ${balance}\")\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFundsError(balance, amount)\n    return balance - amount\n\ntry:\n    new_bal = withdraw(balance=100, amount=250)\nexcept InsufficientFundsError as err:\n    print(f\"Deficit: ${err.amount - err.balance}\")",
      output: "Deficit: $150",
      howItWorks: "Custom exception stores context attributes (balance, amount) that error handlers can inspect programmatically."
    },
    commonMistakes: [
      "Inheriting from BaseException instead of Exception.",
      "Creating dozens of unnecessary custom exceptions when built-in exceptions like ValueError or KeyError are already exact fits."
    ],
    practiceQuestions: [
      {
        question: "Define a custom exception InvalidEmailError that inherits from Exception.",
        answer: "class InvalidEmailError(Exception):\n    pass\n\ntry:\n    raise InvalidEmailError(\"Bad email format\")\nexcept InvalidEmailError as e:\n    print(e)",
        output: "Bad email format"
      }
    ],
    interviewQuestion: "Why should custom exceptions inherit from Exception rather than BaseException?",
    interviewAnswer: "Inheriting from Exception ensures the custom exception is caught by standard except Exception: handlers and does not bypass normal recovery routines or interfere with system exits like KeyboardInterrupt."
  }
];

writeCleanData("exceptions.js", "exceptions", exceptions);
