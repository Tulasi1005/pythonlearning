export const DICTIONARY_TERMS = [
  {
    term: "reliable",
    type: "english",
    meanings: {
      english: {
        kid: {
          meaning: "Reliable means something you can always trust to work properly without breaking.",
          explanation: "Just like a best friend who is always there for you, reliable code always runs smoothly without crashing.",
          simpleExample: "A reliable alarm clock always rings on time every morning."
        },
        young: {
          meaning: "Reliable refers to software or systems that perform consistently and dependably under expected conditions.",
          explanation: "Writing reliable code means handling errors properly so your program doesn't crash when unexpected input is provided.",
          simpleExample: "A reliable website doesn't crash even when thousands of people visit it at once."
        },
        college: {
          meaning: "Reliability is the probability that a software system will perform its intended functions without failure for a specified period of time in a specified environment.",
          explanation: "Building reliable software involves fault tolerance, robust error handling, automated testing, and defensive programming practices.",
          simpleExample: "Implementing try-catch blocks and health monitoring ensures a reliable microservice architecture.",
          pythonExample: "try:\n    result = 10 / divisor\nexcept ZeroDivisionError:\n    result = 0  # Fallback for reliability",
          pythonExplanation: "Using try-except prevents the program from abruptly crashing, ensuring reliable execution."
        }
      },
      telugu: {
        young: {
          meaning: "Reliable ante nammadagina vidhamga, elanti errors lekunda eppudu sarigga pani cheyadam.",
          explanation: "Manam rase code eppudu crash avvakunda, smooth ga run aithe daanni reliable software antaru.",
          simpleExample: "Eppudu sarigga pani chese bike laaga, reliable code eppudu neat ga run avtundi."
        }
      }
    }
  },
  {
    term: "programming language",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "A programming language is a way we use special words to talk to computers and tell them what to do.",
          explanation: "Just like you speak English to your friends, you speak a programming language to a computer so it can play games and draw pictures.",
          simpleExample: "Python is a programming language that is super easy to read and use.",
          pythonExample: "print('Hello')",
          pythonExplanation: "This tells the computer to display 'Hello' on the screen."
        },
        young: {
          meaning: "A programming language is a set of instructions we use to communicate with a computer.",
          explanation: "Computers don't understand human languages directly. Programming languages let us write instructions in a way we understand, which are then translated for the computer.",
          simpleExample: "Python is a programming language used to build apps, websites, and games.",
          pythonExample: "print('Score: 100')",
          pythonExplanation: "This simple code outputs text to the screen."
        },
        college: {
          meaning: "A programming language is a formal system designed to construct instructions that a machine can parse and execute.",
          explanation: "It provides a structured syntax and semantics to define logic, algorithms, and data structures.",
          simpleExample: "Languages like Python, Java, and C++ are used to write everything from operating systems to web servers.",
          pythonExample: "def greet():\n    print('Hello World')",
          pythonExplanation: "This defines a reusable block of instructions (a function)."
        }
      },
      telugu: {
        young: {
          meaning: "Programming language ante computer ki instructions ivvadaniki vaade bhasha.",
          explanation: "Computer ki mana bhasha ardam kaadu, anduke manam programming language vaadi em cheyyalo cheptham.",
          simpleExample: "Python oka programming language, deentho manam games and apps tayaru cheyachu.",
          pythonExample: "print('Hello')",
          pythonExplanation: "Idi computer ki 'Hello' ani chupinchamani cheptundi."
        }
      }
    }
  },
  {
    term: "variable",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "A variable is like a small box with a name on it where you can keep things.",
          explanation: "If you have a toy, you put it in a box labeled 'Toys'. In Python, you put numbers or words into named boxes so the computer remembers them.",
          simpleExample: "A box named 'age' that holds the number 10.",
          pythonExample: "age = 10",
          pythonExplanation: "Here, we put the number 10 into a variable named 'age'."
        },
        young: {
          meaning: "A variable is a name used to store a value in the computer's memory.",
          explanation: "You use variables to keep track of information that might change, like a player's score or a character's name in a game.",
          simpleExample: "If score is 50, and you earn 10 points, the score variable becomes 60.",
          pythonExample: "score = 50\nscore = score + 10",
          pythonExplanation: "This updates the stored score value."
        },
        college: {
          meaning: "A variable is an identifier bound to a memory location storing a mutable or immutable value.",
          explanation: "Variables act as symbolic representations of data, allowing developers to write flexible algorithms without hardcoding values.",
          simpleExample: "Storing API endpoints or configuration states in variables for reuse.",
          pythonExample: "user_id = 492\nprint(user_id)",
          pythonExplanation: "Binds the integer object 492 to the identifier 'user_id'."
        }
      },
      telugu: {
        young: {
          meaning: "Variable ante data ni save chesukune oka container / memory box laantidi.",
          explanation: "Game lo player score maaruthu untundi kadha, alanti values ni store cheyadaniki variable vaadatham.",
          simpleExample: "score = 100 ani oka box lo 100 number daachadam.",
          pythonExample: "score = 100",
          pythonExplanation: "'score' ane variable lo 100 store chestundi."
        }
      }
    }
  },
  {
    term: "function",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "A function is like a recipe card that you can use over and over whenever you want to make a dish.",
          explanation: "Instead of remembering all the steps every single time, you just say the name of the recipe and do it!",
          simpleExample: "A function named 'make_sandwich' that puts bread and cheese together.",
          pythonExample: "def say_hello():\n    print('Hello!')\n\nsay_hello()",
          pythonExplanation: "This defines a function and calls it to print 'Hello!'."
        },
        young: {
          meaning: "A function is a named block of code that performs a specific task when called.",
          explanation: "Functions help keep code clean, organized, and reusable so you don't repeat the same lines of code.",
          simpleExample: "A function that calculates total bill including tax.",
          pythonExample: "def add(a, b):\n    return a + b\n\nprint(add(5, 3))",
          pythonExplanation: "Takes two numbers, adds them, and returns 8."
        },
        college: {
          meaning: "A function is a first-class subroutine or parameterized block of code that encapsulates logic for modularity and reusability.",
          explanation: "Functions support abstraction, parameter passing, return values, and closures, forming the basis for procedural and functional paradigms.",
          simpleExample: "Pure functions ensure deterministic outputs given identical inputs without side effects.",
          pythonExample: "def calculate_discount(price, discount=0.1):\n    return price * (1 - discount)",
          pythonExplanation: "Implements default parameter values and functional computation."
        }
      }
    }
  },
  {
    term: "loop",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "A loop is like repeating a dance move or jumping rope multiple times without stopping.",
          explanation: "If you want to say 'Hello' 5 times, a loop does it for you automatically instead of you saying it 5 times yourself.",
          simpleExample: "Spinning around 3 times in a circle.",
          pythonExample: "for i in range(3):\n    print('Hop!')",
          pythonExplanation: "Prints 'Hop!' three times in a row."
        },
        young: {
          meaning: "A loop repeats a block of code multiple times as long as a condition is met.",
          explanation: "Loops (like 'for' and 'while') automate repetitive tasks such as counting, processing list items, or running game frames.",
          simpleExample: "Sending a notification email to each subscriber on a list.",
          pythonExample: "fruits = ['apple', 'banana']\nfor fruit in fruits:\n    print(fruit)",
          pythonExplanation: "Iterates through each element in the list and prints it."
        },
        college: {
          meaning: "A loop is a control flow structure that repeatedly executes a statement block based on an iteration protocol or boolean condition.",
          explanation: "Python implements iteration via the iterator protocol (`__iter__` and `__next__`), offering `for` and `while` constructs with break/continue/else semantics.",
          simpleExample: "Iterating through generator streams with O(1) auxiliary memory consumption.",
          pythonExample: "count = 0\nwhile count < 3:\n    print(count)\n    count += 1",
          pythonExplanation: "Executes conditional iteration until the invariant evaluates to false."
        }
      }
    }
  },
  {
    term: "syntax",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "Syntax is like the grammar rules of computer languages.",
          explanation: "In English, sentences start with a capital letter and end with a period. In Python, syntax is the correct spelling and symbols needed so the computer understands.",
          simpleExample: "Putting quotation marks around words: print('Hello').",
          pythonExample: "print('Correct!')",
          pythonExplanation: "Proper quotes and parentheses make valid Python syntax."
        },
        young: {
          meaning: "Syntax is the set of rules that defines how programs written in a language must be structured.",
          explanation: "If you forget a colon or parenthesis, Python will raise a 'SyntaxError' because it cannot understand the instructions.",
          simpleExample: "Leaving out a colon after an 'if' statement is a syntax error.",
          pythonExample: "if True:\n    print('Syntax is correct')",
          pythonExplanation: "The colon and proper indentation follow Python's syntax rules."
        },
        college: {
          meaning: "Syntax defines the formal grammar and lexical structure required by a language parser to construct an Abstract Syntax Tree (AST).",
          explanation: "Violations during tokenization or parsing result in compile-time/parse-time SyntaxError exceptions before bytecode execution.",
          simpleExample: "Python relies heavily on whitespace indentation to define code blocks (off-side rule).",
          pythonExample: "# SyntaxError example:\n# if True print('missing colon')",
          pythonExplanation: "Without a colon after the expression, parsing fails immediately."
        }
      }
    }
  },
  {
    term: "algorithm",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "An algorithm is a step-by-step plan to solve a puzzle or do a task.",
          explanation: "Like steps to brush your teeth: 1. Put paste on brush, 2. Brush teeth, 3. Rinse with water.",
          simpleExample: "A recipe for baking chocolate cookies."
        },
        young: {
          meaning: "An algorithm is a clear set of step-by-step instructions designed to solve a problem or perform a calculation.",
          explanation: "In computer science, algorithms are used to sort numbers, search data, route maps, and power AI recommendations.",
          simpleExample: "Finding the highest score in a list of players.",
          pythonExample: "numbers = [4, 1, 9, 2]\nhighest = max(numbers)\nprint(highest)",
          pythonExplanation: "Uses a built-in search algorithm to find the maximum value."
        },
        college: {
          meaning: "An algorithm is an unambiguous, finite sequence of computational steps that transforms input data into desired output.",
          explanation: "Algorithms are analyzed for time and space complexity using Big-O notation to evaluate scalability.",
          simpleExample: "Binary Search algorithm achieves O(log n) time complexity on sorted datasets.",
          pythonExample: "def binary_search(arr, target):\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1",
          pythonExplanation: "Classic divide-and-conquer search algorithm."
        }
      }
    }
  },
  {
    term: "debugging",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "Debugging means finding and fixing mistakes in your computer program.",
          explanation: "When code doesn't work right, programmers act like detectives to find the 'bug' and fix it!",
          simpleExample: "Finding why a video game character got stuck in a wall and fixing it."
        },
        young: {
          meaning: "Debugging is the process of identifying, analyzing, and removing errors or bugs from software.",
          explanation: "Programmers use print statements, error messages, and debuggers to figure out why code isn't producing the expected results.",
          simpleExample: "Checking error line numbers in the terminal to fix typos.",
          pythonExample: "x = 10\nprint(f'Debug: x is {x}')  # Debug print",
          pythonExplanation: "Printing variable states to trace program execution."
        },
        college: {
          meaning: "Debugging is the systematic routine of detecting, isolating, and resolving software defects (logical, semantic, or runtime errors).",
          explanation: "Involves using tools like `pdb`, breakpoints, call stack analysis, and unit test suites.",
          simpleExample: "Setting breakpoints in an IDE to inspect variable frames during execution.",
          pythonExample: "import pdb\n# pdb.set_trace()  # Launches interactive debugger",
          pythonExplanation: "Python's standard library debugger allows stepping through lines of code."
        }
      }
    }
  },
  {
    term: "reusable",
    type: "english",
    meanings: {
      english: {
        kid: {
          meaning: "Reusable means you can use something again and again instead of throwing it away.",
          explanation: "Like a favorite water bottle that you refill instead of buying a new plastic one every time.",
          simpleExample: "In coding, we write reusable code so we don't have to type the same thing 100 times."
        },
        young: {
          meaning: "Reusable refers to something designed to be used more than once.",
          explanation: "In software, writing reusable code means creating tools or functions that solve a problem once, which can then be applied anywhere else in the app.",
          simpleExample: "A function that calculates a math formula is reusable because you can call it whenever you need it."
        },
        college: {
          meaning: "Reusable implies that a component, function, or module is modular enough to be utilized across multiple contexts.",
          explanation: "Code reusability reduces technical debt, shrinks codebase size, and limits bug surfaces by adhering to the DRY (Don't Repeat Yourself) principle.",
          simpleExample: "Creating a robust HTTP fetch utility that is reusable across all API service classes."
        }
      }
    }
  },
  {
    term: "condition",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "A condition is like a question: 'Is it raining? If yes, take an umbrella!'",
          explanation: "Computers use conditions to make smart choices based on true or false answers.",
          simpleExample: "If score is greater than 100, you win a gold star!",
          pythonExample: "if score > 100:\n    print('You Win!')",
          pythonExplanation: "Checks if the condition 'score > 100' is true before printing."
        },
        young: {
          meaning: "A condition is an expression that evaluates to either True or False to control program flow.",
          explanation: "Using 'if', 'elif', and 'else', programs can take different actions based on changing circumstances.",
          simpleExample: "Checking if a user is logged in before displaying their dashboard.",
          pythonExample: "if age >= 18:\n    status = 'Adult'\nelse:\n    status = 'Minor'",
          pythonExplanation: "Branches logic according to whether age meets the threshold."
        },
        college: {
          meaning: "A condition is a Boolean predicate evaluated by conditional branching statements to direct program control flow.",
          explanation: "In Python, truthiness is evaluated using the `__bool__` or `__len__` magic methods on objects in conditional expressions.",
          simpleExample: "Short-circuit evaluation in complex boolean logic expressions.",
          pythonExample: "is_valid = user is not None and user.is_active",
          pythonExplanation: "Evaluates left-to-right with short-circuit boolean semantics."
        }
      }
    }
  },
  {
    term: "list",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "A list is like a shopping list or toy box where you can put many items together in order.",
          explanation: "You can keep all your favorite toys or friends' names inside square brackets [].",
          simpleExample: "['apple', 'banana', 'orange']",
          pythonExample: "fruits = ['apple', 'banana', 'cherry']\nprint(fruits[0])",
          pythonExplanation: "Creates a list of fruits and prints the first one ('apple')."
        },
        young: {
          meaning: "A list is an ordered, changeable (mutable) collection of elements in Python.",
          explanation: "Lists can hold numbers, strings, or any data types, and allow you to add, remove, and access elements by index.",
          simpleExample: "Storing a list of student names or leaderboard scores.",
          pythonExample: "scores = [95, 88, 92]\nscores.append(100)\nprint(scores)",
          pythonExplanation: "Appends 100 to the end of the existing scores list."
        },
        college: {
          meaning: "A Python list is a dynamic contiguous array of object references, providing O(1) random access and amortized O(1) appending.",
          explanation: "Implements sequence protocols, slice notation, and list comprehensions with internal geometric over-allocation for capacity growth.",
          simpleExample: "Using list comprehensions for concise and vector-like data transformation.",
          pythonExample: "squares = [x**2 for x in range(10) if x % 2 == 0]",
          pythonExplanation: "Creates a new list using a filtered list comprehension."
        }
      }
    }
  },
  {
    term: "dictionary",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "A Python dictionary is like a real dictionary where every word has its own meaning.",
          explanation: "In Python, we call the word a 'key' and the meaning a 'value'. They are linked together with curly brackets {}.",
          simpleExample: "A phone book where a person's name gives you their phone number.",
          pythonExample: "pet = {'name': 'Buddy', 'animal': 'Dog'}\nprint(pet['name'])",
          pythonExplanation: "Looks up the key 'name' and outputs 'Buddy'."
        },
        young: {
          meaning: "A dictionary (dict) is a collection of key-value pairs where each unique key maps to a value.",
          explanation: "Dictionaries allow fast lookups, updates, and structured data representation using `{key: value}` syntax.",
          simpleExample: "Storing user profile information (name, email, age).",
          pythonExample: "user = {'username': 'code_ninja', 'level': 5}\nuser['level'] += 1\nprint(user)",
          pythonExplanation: "Accesses and increments the 'level' value associated with the key."
        },
        college: {
          meaning: "A Python dict is a hash map implementation characterized by O(1) average time complexity for insertion, deletion, and lookup.",
          explanation: "Keys must be hashable (`__hash__` and `__eq__` implemented). Since Python 3.7+, dictionaries preserve insertion order.",
          simpleExample: "Using dictionaries for associative arrays and caching memoized outputs.",
          pythonExample: "inventory = {'sku_101': {'qty': 45, 'price': 19.99}}\nprint(inventory.get('sku_101'))",
          pythonExplanation: "Uses `.get()` method for safe retrieval without KeyError."
        }
      }
    }
  },
  {
    term: "string",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "A string is any piece of text, letters, or words put inside quote marks.",
          explanation: "Whenever you want to write words in computer code, you wrap them in single ' ' or double \" \" quotes.",
          simpleExample: "'Hello World!' or 'My name is Alex'",
          pythonExample: "greeting = 'Hello!'\nprint(greeting)",
          pythonExplanation: "Stores text in a variable and prints it."
        },
        young: {
          meaning: "A string (str) is an immutable sequence of characters used to represent text data.",
          explanation: "Python provides many built-in methods for formatting, searching, splitting, and manipulating strings.",
          simpleExample: "Concatenating user's first name and last name.",
          pythonExample: "first = 'Ada'\nlast = 'Lovelace'\nfull = f'{first} {last}'\nprint(full)",
          pythonExplanation: "Uses an f-string to cleanly format and combine text variables."
        },
        college: {
          meaning: "A string in Python is an immutable Unicode sequence (UTF-8 encoded internally via PEP 393 flexible string representation).",
          explanation: "Operations on strings create new string instances due to immutability, enabling safe hashing and dictionary key usage.",
          simpleExample: "Performing regex searches and encoding/decoding byte streams.",
          pythonExample: "cleaned = '  user_input  '.strip().upper()",
          pythonExplanation: "Chains string transformation methods returning new string objects."
        }
      }
    }
  },
  {
    term: "class",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "A class is like a blueprint or mold used to build many similar toys.",
          explanation: "If you have a blueprint for a toy car, you can use it to build red cars, blue cars, and fast cars!",
          simpleExample: "A blueprint for making superhero characters.",
          pythonExample: "class Hero:\n    def __init__(self, name):\n        self.name = name\n\nhero1 = Hero('Batman')",
          pythonExplanation: "Creates a Hero class and instantiates a hero named 'Batman'."
        },
        young: {
          meaning: "A class is a template or blueprint for creating objects, defining their attributes and behaviors.",
          explanation: "Classes form the basis of Object-Oriented Programming (OOP) by grouping related data and functions together.",
          simpleExample: "A 'BankAccount' class that holds balance and methods to deposit or withdraw.",
          pythonExample: "class Player:\n    def __init__(self, name, score=0):\n        self.name = name\n        self.score = score\n\n    def add_score(self, points):\n        self.score += points",
          pythonExplanation: "Defines state and methods bundled within an OOP class."
        },
        college: {
          meaning: "A class is a user-defined type that encapsulates data attributes and methods, supporting polymorphism, inheritance, and encapsulation.",
          explanation: "Classes in Python are instances of metaclasses (`type`), supporting multiple inheritance via the C3 linearization algorithm (MRO).",
          simpleExample: "Implementing abstract base classes (ABCs) and dataclasses for structured schemas.",
          pythonExample: "from dataclasses import dataclass\n\n@dataclass\nclass Config:\n    host: str\n    port: int = 8000",
          pythonExplanation: "Utilizes Python dataclasses to automatically generate boilerplate methods."
        }
      }
    }
  },
  {
    term: "api",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "An API is like a friendly waiter at a restaurant who takes your order to the kitchen and brings back your food.",
          explanation: "It lets two different computer apps talk to each other and share information easily.",
          simpleExample: "A weather app asking a weather satellite for today's temperature."
        },
        young: {
          meaning: "An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate.",
          explanation: "APIs let developers access database records, AI services, maps, or payment gateways without rebuilding them from scratch.",
          simpleExample: "Fetching the latest crypto prices or YouTube videos into your own website.",
          pythonExample: "import requests\nresponse = requests.get('https://api.github.com')\nprint(response.status_code)",
          pythonExplanation: "Sends an HTTP GET request to a REST API endpoint."
        },
        college: {
          meaning: "An API defines programmatic contracts, endpoints, schemas, and communication interfaces between distributed systems or modular components.",
          explanation: "Encompasses RESTful JSON over HTTP, GraphQL queries, gRPC Protocol Buffers, and OS-level system call interfaces.",
          simpleExample: "Designing asynchronous REST API endpoints with OpenAPI/Swagger specifications.",
          pythonExample: "from fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/health')\ndef health_check():\n    return {'status': 'healthy'}",
          pythonExplanation: "Defines a lightweight microservice endpoint using FastAPI."
        }
      }
    }
  },
  {
    term: "database",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "A database is like a giant, super-organized digital library where all important information is stored safely.",
          explanation: "It holds game scores, user accounts, and photos so they never get lost even when the computer turns off.",
          simpleExample: "The database that saves all your levels in Minecraft."
        },
        young: {
          meaning: "A database is an organized collection of structured data stored electronically in a computer system.",
          explanation: "Databases allow apps to store, query, update, and manage huge amounts of data quickly and securely using SQL or NoSQL.",
          simpleExample: "Storing user accounts, passwords, and order history in an e-commerce store.",
          pythonExample: "import sqlite3\nconn = sqlite3.connect('app.db')\ncursor = conn.cursor()\ncursor.execute('CREATE TABLE IF NOT EXISTS users (name TEXT)')",
          pythonExplanation: "Connects to a local SQLite database and creates a table."
        },
        college: {
          meaning: "A database management system (DBMS) manages persistent data storage adhering to ACID properties (Relational) or CAP theorem trade-offs (NoSQL).",
          explanation: "Supports indexed queries, transaction management, connection pooling, and ORM abstractions like SQLAlchemy in Python.",
          simpleExample: "Managing schema migrations and indexing query performance on PostgreSQL.",
          pythonExample: "# Using SQLAlchemy ORM for relational abstraction",
          pythonExplanation: "Facilitates object-relational mapping between Python objects and SQL tables."
        }
      }
    }
  },
  {
    term: "python",
    type: "python",
    meanings: {
      english: {
        kid: {
          meaning: "Python is a very friendly computer language that uses simple words.",
          explanation: "It is super easy to read and is used by kids and grown-ups to make computers do amazing things.",
          simpleExample: "You can use Python to build a virtual pet game.",
          pythonExample: "print('I love Python!')",
          pythonExplanation: "This prints a message on the screen easily."
        },
        young: {
          meaning: "Python is a popular programming language known for being easy to read and write.",
          explanation: "Because it looks a bit like regular English, developers can write programs faster without worrying about complex symbols.",
          simpleExample: "People use Python for web apps, AI, and game scripting.",
          pythonExample: "name = 'Alex'\nprint('Hi ' + name)",
          pythonExplanation: "Stores a name and prints a personalized greeting."
        },
        college: {
          meaning: "Python is a high-level, interpreted programming language known for its strict typing and dynamic semantics.",
          explanation: "Its design philosophy emphasizes code readability and simplicity, making it the dominant language for Data Science, ML, and automation.",
          simpleExample: "Building a scalable microservice using Python's FastAPI framework.",
          pythonExample: "import json\ndata = json.dumps({'status': 200})",
          pythonExplanation: "Leverages the extensive standard library to easily perform JSON serialization."
        }
      }
    }
  }
];

export function searchDictionary(query, lang = "english", stage = "young") {
  if (!query || query.trim() === "") return null;
  
  let q = query.toLowerCase().trim().replace(/^[^a-z0-9]+|[^a-z0-9]+$/g, '');
  if (!q) return null;
  
  // Find exact match
  let match = DICTIONARY_TERMS.find(d => d.term === q);
  
  // Try stemming variations
  if (!match) {
    const candidates = [
      q,
      q.endsWith('ies') ? q.slice(0, -3) + 'y' : null,
      q.endsWith('es') ? q.slice(0, -2) : null,
      q.endsWith('s') && !q.endsWith('ss') ? q.slice(0, -1) : null,
      q.endsWith('ing') ? q.slice(0, -3) : null,
      q.endsWith('ing') ? q.slice(0, -3) + 'e' : null,
      q.endsWith('ed') ? q.slice(0, -2) : null,
      q.endsWith('ed') ? q.slice(0, -1) : null,
      q.endsWith('ly') ? q.slice(0, -2) : null,
      q.endsWith('ity') ? q.slice(0, -3) + 'e' : null,
      q.endsWith('ability') ? q.slice(0, -7) + 'able' : null,
      q === 'variabel' ? 'variable' : null,
      q === 'langauge' ? 'programming language' : null,
      q === 'relible' ? 'reliable' : null,
      q === 'functon' ? 'function' : null,
      q === 'prnt' ? 'print' : null
    ].filter(Boolean);

    for (const cand of candidates) {
      match = DICTIONARY_TERMS.find(d => d.term === cand);
      if (match) break;
    }
  }

  // Fuzzy match / Did you mean
  let suggestion = null;
  if (!match) {
    match = DICTIONARY_TERMS.find(d => 
      d.term.includes(q) || q.includes(d.term)
    );
    
    if (match && match.term !== q) {
      suggestion = match.term;
    }
  }
  
  if (!match) return null;
  
  // Resolve language and stage fallbacks
  const termLang = match.meanings[lang] || match.meanings.english;
  
  let mappedStage = stage;
  if (stage === "graduate" || stage === "professional") mappedStage = "college";
  if (!termLang[mappedStage]) mappedStage = "young";
  if (!termLang[mappedStage]) mappedStage = "kid";
  
  const data = termLang[mappedStage];
  if (!data) return null;
  
  return {
    term: match.term,
    type: match.type,
    suggestion: suggestion,
    meaning: data.meaning,
    explanation: data.explanation,
    simpleExample: data.simpleExample,
    pythonExample: data.pythonExample,
    pythonExplanation: data.pythonExplanation
  };
}

// Fallback search using Free Dictionary API for any general English word
export async function searchDictionaryWithFallback(query, lang = "english", stage = "young") {
  // Try built-in curated dictionary first
  const localResult = searchDictionary(query, lang, stage);
  if (localResult) {
    return localResult;
  }

  // Fallback to Free Dictionary API for general words
  const trimmed = query.trim().toLowerCase().replace(/^[^a-z0-9]+|[^a-z0-9]+$/g, '');
  if (!trimmed) return null;

  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(trimmed)}`);
    if (!response.ok) return null;
    const data = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      const entry = data[0];
      const meaningObj = entry.meanings?.[0];
      const defObj = meaningObj?.definitions?.[0];

      if (defObj?.definition) {
        return {
          term: entry.word || trimmed,
          type: "english",
          suggestion: null,
          meaning: defObj.definition,
          explanation: meaningObj.partOfSpeech ? `Part of speech: ${meaningObj.partOfSpeech}` : "General English vocabulary word",
          simpleExample: defObj.example || `Example usage: "${entry.word}" is widely used across educational and technical texts.`,
          pythonExample: null,
          pythonExplanation: null
        };
      }
    }
  } catch {
    // network or parse error, fallback gracefully
    return null;
  }

  return null;
}

