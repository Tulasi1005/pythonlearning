import { writeCleanData } from './dataWriter.js';

// SECTION 2 — OPERATORS (8-13)
const operators = [
  {
    id: "arithmetic-operators",
    topicNumber: 8,
    sectionId: "operators",
    sectionTitle: "Section 2 — Operators",
    title: "Arithmetic Operators",
    shortDescription: "Master mathematical operators in Python including addition, subtraction, division, floor division, modulus, and exponentiation.",
    whatYouWillLearn: [
      "Standard math operators: +, -, *, /",
      "Floor division (//) vs true division (/)",
      "Modulus operator (%) for remainders",
      "Power / Exponentiation operator (**)",
      "Operator precedence (PEMDAS/BODMAS rules)"
    ],
    explanation: "Arithmetic operators perform standard mathematical operations on numeric operands.\n\nList of Operators:\n- Addition (+): Adds operands (e.g. 5 + 3 = 8)\n- Subtraction (-): Subtracts right from left (e.g. 10 - 4 = 6)\n- Multiplication (*): Multiplies values (e.g. 4 * 3 = 12)\n- True Division (/): Always returns a float in Python 3 (e.g. 7 / 2 = 3.5)\n- Floor Division (//): Divides and rounds down to nearest integer (e.g. 7 // 2 = 3)\n- Modulus (%): Returns the division remainder (e.g. 10 % 3 = 1)\n- Exponentiation (**): Computes power (e.g. 2 ** 3 = 8)\n\nOrder of Precedence: Parentheses () > Exponents ** > Multiplication/Division/Modulus (*, /, //, %) > Addition/Subtraction (+, -).",
    example: {
      code: "a = 15\nb = 4\n\nprint(\"Addition:\", a + b)\nprint(\"True Division:\", a / b)\nprint(\"Floor Division:\", a // b)\nprint(\"Remainder (Modulus):\", a % b)\nprint(\"Power (a ** 2):\", a ** 2)",
      output: "Addition: 19\nTrue Division: 3.75\nFloor Division: 3\nRemainder (Modulus): 3\nPower (a ** 2): 225",
      howItWorks: "True division produces float 3.75, while floor division discards the decimal portion to yield integer 3."
    },
    commonMistakes: [
      "Confusing / with //: Using / when an integer result is strictly expected (like list indices).",
      "Using ^ for exponentiation (in Python, ^ is the bitwise XOR operator; use ** for powers)."
    ],
    practiceQuestions: [
      {
        question: "Calculate 2 to the power of 8 using Python's exponentiation operator.",
        answer: "result = 2 ** 8\nprint(result)",
        output: "256"
      }
    ],
    interviewQuestion: "What is the result of -7 // 2 in Python, and why does it differ from some other languages?",
    interviewAnswer: "In Python, -7 // 2 evaluates to -4 (not -3), because floor division in Python floors towards negative infinity (mathematical floor), whereas languages like C/C++ truncate toward zero."
  },
  {
    id: "comparison-operators",
    topicNumber: 9,
    sectionId: "operators",
    sectionTitle: "Section 2 — Operators",
    title: "Comparison Operators",
    shortDescription: "Compare values and evaluate relationships yielding True or False boolean results.",
    whatYouWillLearn: [
      "Relational operators: ==, !=, >, <, >=, <=",
      "Value equality (==) vs assignment (=)",
      "Chained comparisons (e.g., 10 < x < 20)",
      "String and cross-type comparison semantics"
    ],
    explanation: "Comparison (or relational) operators compare two values and always return a boolean: True or False.\n\nComparison Operators:\n- Equal to (==): True if both sides have identical values\n- Not equal to (!=): True if values differ\n- Greater than (>): True if left is strictly greater than right\n- Less than (<): True if left is strictly less than right\n- Greater than or equal to (>=)\n- Less than or equal to (<=)\n\nPython uniquely supports chained comparisons: '10 < age <= 20' is shorthand for '10 < age and age <= 20'.",
    example: {
      code: "x = 25\ny = 30\n\nprint(\"x == y:\", x == y)\nprint(\"x < y:\", x < y)\nprint(\"x != y:\", x != y)\n\nscore = 85\nprint(\"Is Grade A (80 <= score <= 100)?\", 80 <= score <= 100)",
      output: "x == y: False\nx < y: True\nx != y: True\nIs Grade A (80 <= score <= 100)?: True",
      howItWorks: "Each relational expression evaluates both operands and returns the boolean value."
    },
    commonMistakes: [
      "Using single '=' (assignment) inside an if condition instead of double '==' (equality).",
      "Assuming '5' == 5 evaluates to True (Python is strongly typed, so string '5' is not equal to integer 5)."
    ],
    practiceQuestions: [
      {
        question: "Check if the variable temperature = 32 is below freezing (<= 32) and print the boolean result.",
        answer: "temperature = 32\nprint(temperature <= 32)",
        output: "True"
      }
    ],
    interviewQuestion: "How does Python handle chained comparisons like a < b < c under the hood?",
    interviewAnswer: "Python translates a < b < c into (a < b) and (b < c), with the middle expression b evaluated only once, short-circuiting if a < b is False."
  },
  {
    id: "logical-operators",
    topicNumber: 10,
    sectionId: "operators",
    sectionTitle: "Section 2 — Operators",
    title: "Logical Operators",
    shortDescription: "Combine conditional statements using and, or, and not with short-circuit evaluation.",
    whatYouWillLearn: [
      "Boolean logic with and, or, and not",
      "Truth tables and boolean precedence",
      "Short-circuit evaluation behavior",
      "Truthy and Falsy values in Python"
    ],
    explanation: "Logical operators combine boolean expressions to control decision-making.\n\nLogical Operators:\n1. 'and': Returns True ONLY if both expressions are True.\n2. 'or': Returns True if AT LEAST ONE expression is True.\n3. 'not': Inverts the boolean value (True becomes False, False becomes True).\n\nShort-Circuit Evaluation:\n- With 'and', if the first operand is False, Python immediately stops and returns False without evaluating the second operand.\n- With 'or', if the first operand is True, Python immediately returns True.",
    example: {
      code: "has_ticket = True\nis_vip = False\nage = 20\n\ncan_enter = (has_ticket or is_vip) and (age >= 18)\nprint(\"Entry allowed:\", can_enter)\n\nprint(\"not True is:\", not True)\nprint(\"not (age < 18):\", not (age < 18))",
      output: "Entry allowed: True\nnot True is: False\nnot (age < 18): True",
      howItWorks: "has_ticket is True, making (has_ticket or is_vip) True. Since age >= 18 is also True, True and True produces True."
    },
    commonMistakes: [
      "Writing 'if x == 1 or 2:' thinking it checks if x is 1 or 2 (non-zero 2 is always truthy, so this always evaluates to True; write 'if x == 1 or x == 2:' or 'if x in (1, 2):')."
    ],
    practiceQuestions: [
      {
        question: "Write an expression using 'and' to check if a number 'n = 15' is greater than 10 and less than 20.",
        answer: "n = 15\nprint(n > 10 and n < 20)",
        output: "True"
      }
    ],
    interviewQuestion: "What are 'truthy' and 'falsy' values in Python?",
    interviewAnswer: "In boolean contexts, empty containers ([], {}, '', set()), numeric zero (0, 0.0), None, and False evaluate to Falsy. Non-empty collections, non-zero numbers, and non-empty strings evaluate to Truthy."
  },
  {
    id: "assignment-operators",
    topicNumber: 11,
    sectionId: "operators",
    sectionTitle: "Section 2 — Operators",
    title: "Assignment Operators",
    shortDescription: "Assign and update variables concisely with shorthand compound assignment operators.",
    whatYouWillLearn: [
      "Basic assignment (=)",
      "Compound / augmented assignment (+=, -=, *=, /=, //=, %=, **=)",
      "Walrus operator (:=) in Python 3.8+",
      "Chained and unpack assignments"
    ],
    explanation: "Assignment operators store values into variables. Compound assignment operators combine arithmetic or bitwise operations with assignment in a concise syntax.\n\nCommon Compound Operators:\n- += (Add and assign): x += 5 is shorthand for x = x + 5\n- -= (Subtract and assign): x -= 2 is shorthand for x = x - 2\n- *= (Multiply and assign): x *= 3 is shorthand for x = x * 3\n- /= (Divide and assign): x /= 2 is shorthand for x = x / 2\n- //= (Floor divide and assign)\n- %= (Modulus and assign)\n- **= (Power and assign)",
    example: {
      code: "score = 100\nscore += 25   # Add 25 (125)\nscore -= 10   # Subtract 10 (115)\nscore *= 2    # Multiply by 2 (230)\nscore /= 5    # Divide by 5 (46.0)\n\nprint(\"Final Score:\", score)",
      output: "Final Score: 46.0",
      howItWorks: "Each compound assignment takes the current value of 'score', applies the arithmetic operation, and reassigns the new value."
    },
    commonMistakes: [
      "Using increment ++x or x++ (Python does NOT have ++ or -- operators; use x += 1).",
      "Using =+ instead of += (score =+ 5 sets score to positive 5 rather than adding 5)."
    ],
    practiceQuestions: [
      {
        question: "Start with counter = 10, multiply it by 3, then subtract 5 using compound assignment operators.",
        answer: "counter = 10\ncounter *= 3\ncounter -= 5\nprint(counter)",
        output: "25"
      }
    ],
    interviewQuestion: "What is the Walrus operator (:=) in Python and where is it useful?",
    interviewAnswer: "Introduced in Python 3.8, the assignment expression operator (:=) assigns values to variables as part of a larger expression, such as in while loops (e.g. while (chunk := file.read(1024)):) or if conditions without duplicate function calls."
  },
  {
    id: "membership-operators",
    topicNumber: 12,
    sectionId: "operators",
    sectionTitle: "Section 2 — Operators",
    title: "Membership Operators",
    shortDescription: "Test if a value or sequence is present inside lists, tuples, strings, dictionaries, or sets with 'in' and 'not in'.",
    whatYouWillLearn: [
      "Testing membership using 'in'",
      "Testing non-membership using 'not in'",
      "Membership testing in strings, lists, tuples, and sets",
      "Key vs value lookup behavior in dictionaries"
    ],
    explanation: "Membership operators test whether a given element exists within a sequence or collection (strings, lists, tuples, sets, dictionaries).\n\nOperators:\n1. 'in': Returns True if the specified item exists in the collection.\n2. 'not in': Returns True if the specified item does NOT exist in the collection.\n\nPerformance Note:\nMembership testing in sets and dict keys is O(1) constant time average, while in lists and tuples it is O(n) linear search.",
    example: {
      code: "languages = [\"Python\", \"JavaScript\", \"Go\", \"Rust\"]\n\nprint(\"Python\" in languages)        # True\nprint(\"Java\" in languages)          # False\nprint(\"Ruby\" not in languages)      # True\n\nmessage = \"Learning Python is fun\"\nprint(\"Python\" in message)          # True\n\nuser = {\"name\": \"Sara\", \"role\": \"admin\"}\nprint(\"role\" in user)               # True\nprint(\"admin\" in user)              # False (checks keys, not values)",
      output: "True\nFalse\nTrue\nTrue\nTrue\nFalse",
      howItWorks: "'in' scans the iterable to find if an element or substring exists."
    },
    commonMistakes: [
      "Assuming 'in' on a dictionary checks values (it checks keys; use 'val in user.values()' to search values)."
    ],
    practiceQuestions: [
      {
        question: "Check if the character '@' is present in the email string 'dev@python.org'.",
        answer: "email = \"dev@python.org\"\nprint(\"@\" in email)",
        output: "True"
      }
    ],
    interviewQuestion: "Why is membership testing with in much faster on a set than on a list?",
    interviewAnswer: "Sets use hash tables where membership is evaluated via hash lookups in O(1) average time, whereas lists require scanning elements sequentially in O(n) linear time."
  },
  {
    id: "identity-operators",
    topicNumber: 13,
    sectionId: "operators",
    sectionTitle: "Section 2 — Operators",
    title: "Identity Operators",
    shortDescription: "Compare memory locations and object identity with 'is' and 'is not', distinguishing identity from value equality.",
    whatYouWillLearn: [
      "Identity testing using 'is' and 'is not'",
      "Difference between value equality (==) and identity (is)",
      "Python's id() function for memory addresses",
      "Best practice for comparing against None"
    ],
    explanation: "Identity operators compare the memory location (object identity) of two variables, rather than merely checking if their contents are equal.\n\nOperators:\n1. 'is': Evaluates to True if both variables point to the EXACT same object in memory (id(a) == id(b)).\n2. 'is not': Evaluates to True if variables point to different objects in memory.\n\nCrucial Rule:\n- Use '==' to check if values are equal.\n- Use 'is' to check if two variables point to the exact same object in memory (most commonly used as 'is None' or 'is not None').",
    example: {
      code: "list_a = [1, 2, 3]\nlist_b = [1, 2, 3]\nlist_c = list_a\n\nprint(\"list_a == list_b (Value):\", list_a == list_b)\nprint(\"list_a is list_b (Identity):\", list_a is list_b)\nprint(\"list_a is list_c (Identity):\", list_a is list_c)\n\nstatus = None\nprint(\"status is None:\", status is None)",
      output: "list_a == list_b (Value): True\nlist_a is list_b (Identity): False\nlist_a is list_c (Identity): True\nstatus is None: True",
      howItWorks: "list_a and list_b have identical values, so == is True. But they are two distinct list objects in memory, so 'is' is False."
    },
    commonMistakes: [
      "Using 'is' to compare literals like integers or strings (e.g. if x is 5:) which triggers a SyntaxWarning in modern Python. Use '==' for values, and 'is' for singleton checks like None."
    ],
    practiceQuestions: [
      {
        question: "Check whether a variable val = None is indeed None using the recommended identity operator.",
        answer: "val = None\nif val is None:\n    print(\"Variable is None\")",
        output: "Variable is None"
      }
    ],
    interviewQuestion: "What is the difference between == and is in Python?",
    interviewAnswer: "== invokes the object's __eq__() method to compare values, whereas is checks whether two references point to the exact same memory address (id(a) == id(b))."
  }
];

writeCleanData("operators.js", "operators", operators);
