import { writeCleanData } from './dataWriter.js';

// SECTION 3 — CONDITIONS (14-18)
const conditions = [
  {
    id: "if-statement",
    topicNumber: 14,
    sectionId: "conditions",
    sectionTitle: "Section 3 — Conditions",
    title: "if Statement",
    shortDescription: "Execute a block of code conditionally only when a specified boolean condition evaluates to True.",
    whatYouWillLearn: [
      "Basic if statement syntax and indentation",
      "How Python uses indentation blocks (4 spaces)",
      "Evaluating boolean expressions in if statements",
      "Truth value testing in conditionals"
    ],
    explanation: "The 'if' statement is the most fundamental decision-making construct in Python. It executes a block of code only if the condition evaluates to True.\n\nPython relies on indentation (typically 4 spaces) rather than curly braces { } to define blocks of code.\n\nSyntax:\nif condition:\n    # indented code runs if condition is True",
    example: {
      code: "age = 20\n\nif age >= 18:\n    print(\"Eligible to vote!\")\n    print(\"Welcome to democracy.\")",
      output: "Eligible to vote!\nWelcome to democracy.",
      howItWorks: "Because age (20) >= 18 is True, both indented print statements execute."
    },
    commonMistakes: [
      "Forgetting the colon (:) at the end of the if statement line.",
      "Inconsistent indentation (mixing tabs and spaces)."
    ],
    practiceQuestions: [
      {
        question: "Write an if statement that checks if temperature is greater than 100, and prints 'Heat Advisory'.",
        answer: "temperature = 105\nif temperature > 100:\n    print(\"Heat Advisory\")",
        output: "Heat Advisory"
      }
    ],
    interviewQuestion: "How does Python determine the scope of a code block inside an if statement?",
    interviewAnswer: "Python uses indentation (standard 4 spaces) to define code blocks, eliminating the need for curly braces or begin/end tokens."
  },
  {
    id: "if-else-statement",
    topicNumber: 15,
    sectionId: "conditions",
    sectionTitle: "Section 3 — Conditions",
    title: "if-else Statement",
    shortDescription: "Provide an alternative fallback branch of code to execute when the if condition evaluates to False.",
    whatYouWillLearn: [
      "Two-way decision making with if-else",
      "Execution flow when condition is True vs False",
      "Proper alignment of else keyword with if"
    ],
    explanation: "The 'if-else' construct provides two paths of execution: one path when the condition evaluates to True, and an alternative path (the else block) when it evaluates to False.\n\nSyntax:\nif condition:\n    # executed if condition is True\nelse:\n    # executed if condition is False",
    example: {
      code: "num = 7\n\nif num % 2 == 0:\n    print(f\"{num} is Even\")\nelse:\n    print(f\"{num} is Odd\")",
      output: "7 is Odd",
      howItWorks: "7 % 2 is 1 (not 0), so the condition is False and the else block executes."
    },
    commonMistakes: [
      "Putting a condition after 'else': 'else x < 5:' is a SyntaxError. Use 'elif' for conditional alternatives."
    ],
    practiceQuestions: [
      {
        question: "Write an if-else statement to check if a number 'score = 45' is >= 50 (Pass) or else (Fail).",
        answer: "score = 45\nif score >= 50:\n    print(\"Pass\")\nelse:\n    print(\"Fail\")",
        output: "Fail"
      }
    ],
    interviewQuestion: "Is the else block guaranteed to execute in an if-else construct if the if condition is False?",
    interviewAnswer: "Yes, exactly one of the two blocks (either if or else) will execute, provided no unhandled exception occurs in evaluating the condition."
  },
  {
    id: "if-elif-else-statement",
    topicNumber: 16,
    sectionId: "conditions",
    sectionTitle: "Section 3 — Conditions",
    title: "if-elif-else Statement",
    shortDescription: "Evaluate multiple conditions in sequence, executing the first branch whose condition evaluates to True.",
    whatYouWillLearn: [
      "Multi-way branching with 'elif' (short for else if)",
      "Sequential condition evaluation and early exit",
      "Using an optional final fallback else block"
    ],
    explanation: "When you need to test multiple conditions sequentially, use 'elif'. Python checks each condition from top to bottom. As soon as one condition evaluates to True, its block runs and Python skips the remaining elif and else blocks.\n\nSyntax:\nif condition1:\n    # block 1\nelif condition2:\n    # block 2\nelif condition3:\n    # block 3\nelse:\n    # fallback if none match",
    example: {
      code: "score = 88\n\nif score >= 90:\n    grade = \"A+\"\nelif score >= 80:\n    grade = \"A\"\nelif score >= 70:\n    grade = \"B\"\nelse:\n    grade = \"C\"\n\nprint(f\"Grade: {grade}\")",
      output: "Grade: A",
      howItWorks: "score >= 90 is False, so it evaluates the next condition: score >= 80 is True, setting grade = 'A' and skipping subsequent checks."
    },
    commonMistakes: [
      "Writing 'else if' instead of 'elif' (Python requires the keyword 'elif').",
      "Ordering conditions incorrectly (e.g., checking score >= 60 before score >= 90)."
    ],
    practiceQuestions: [
      {
        question: "Categorize speed (mph): > 70 'Speeding', >= 40 'Normal', < 40 'Too Slow'.",
        answer: "speed = 65\nif speed > 70:\n    print(\"Speeding\")\nelif speed >= 40:\n    print(\"Normal\")\nelse:\n    print(\"Too Slow\")",
        output: "Normal"
      }
    ],
    interviewQuestion: "What is the difference between multiple independent `if` statements vs `if-elif-else`?",
    interviewAnswer: "Multiple `if` statements evaluate every single condition independently, even after finding a match. In `if-elif-else`, execution terminates and exits the entire construct immediately upon finding the first True condition."
  },
  {
    id: "nested-if",
    topicNumber: 17,
    sectionId: "conditions",
    sectionTitle: "Section 3 — Conditions",
    title: "Nested if",
    shortDescription: "Place conditional statements inside other conditional statements for hierarchical decision logic.",
    whatYouWillLearn: [
      "Structuring nested if statements",
      "Managing deeper indentation levels",
      "Refactoring deep nesting using logical operators or guard clauses"
    ],
    explanation: "An if statement can be nested inside another if or else statement. This is helpful when a secondary condition depends entirely on a primary condition having been met.\n\nTip: While powerful, avoid nesting deeper than 2-3 levels for code readability. You can often simplify nested ifs using 'and' or early returns.",
    example: {
      code: "age = 22\nhas_license = True\n\nif age >= 18:\n    if has_license:\n        print(\"You can rent and drive a car.\")\n    else:\n        print(\"Age is fine, but you need a driving license.\")\nelse:\n    print(\"Must be at least 18 to rent a car.\")",
      output: "You can rent and drive a car.",
      howItWorks: "Outer if (age >= 18) succeeds, so execution enters the inner block where has_license is checked."
    },
    commonMistakes: [
      "Indentation mismatch where the inner else aligns with the wrong outer if.",
      "Over-nesting (creating the 'arrow anti-pattern' of deep indentation)."
    ],
    practiceQuestions: [
      {
        question: "Check if a number 'n = 12' is positive, and if positive, check if it is even.",
        answer: "n = 12\nif n > 0:\n    if n % 2 == 0:\n        print(\"Positive and Even\")",
        output: "Positive and Even"
      }
    ],
    interviewQuestion: "What is a 'Guard Clause' and how does it help avoid deeply nested if statements?",
    interviewAnswer: "A guard clause checks for invalid or exit conditions early and returns or breaks immediately, keeping the main happy-path logic flat and unnested at the top level of the function."
  },
  {
    id: "conditional-expressions",
    topicNumber: 18,
    sectionId: "conditions",
    sectionTitle: "Section 3 — Conditions",
    title: "Conditional Expressions (Ternary Operator)",
    shortDescription: "Write concise inline if-else expressions to assign values or return values in a single readable line.",
    whatYouWillLearn: [
      "Ternary syntax: value_if_true if condition else value_if_false",
      "Inline variable assignments and return statements",
      "When to use conditional expressions vs multi-line if blocks"
    ],
    explanation: "Python provides a concise one-line syntax for simple conditional assignments, often called the ternary operator.\n\nSyntax:\nresult = <val_true> if <condition> else <val_false>\n\nIt is an expression (returns a value), meaning you can use it directly inside print statements, return statements, or list comprehensions.",
    example: {
      code: "age = 19\nstatus = \"Adult\" if age >= 18 else \"Minor\"\nprint(\"Status:\", status)\n\nnumber = 8\nparity = \"Even\" if number % 2 == 0 else \"Odd\"\nprint(\"Parity:\", parity)",
      output: "Status: Adult\nParity: Even",
      howItWorks: "If age >= 18 is True, 'Adult' is assigned to status; otherwise 'Minor' would be assigned."
    },
    commonMistakes: [
      "Omitting the mandatory 'else' branch (Python ternary syntax requires both if and else).",
      "Overcomplicating by chaining multiple ternary expressions into an unreadable line."
    ],
    practiceQuestions: [
      {
        question: "Use a ternary expression to store 'Pass' if score = 75 is >= 50, else 'Fail'.",
        answer: "score = 75\nresult = \"Pass\" if score >= 50 else \"Fail\"\nprint(result)",
        output: "Pass"
      }
    ],
    interviewQuestion: "How does Python's ternary syntax differ from C/Java's condition ? val1 : val2?",
    interviewAnswer: "Python uses English keywords in the order 'val_if_true if condition else val_if_false', placing the default true value first, which prioritizes natural language readability."
  }
];

writeCleanData("conditions.js", "conditions", conditions);

// SECTION 4 — LOOPS (19-25)
const loops = [
  {
    id: "for-loop",
    topicNumber: 19,
    sectionId: "loops",
    sectionTitle: "Section 4 — Loops",
    title: "for Loop",
    shortDescription: "Iterate over items in any iterable collection like lists, strings, tuples, or ranges cleanly and Pythonically.",
    whatYouWillLearn: [
      "for in loop syntax",
      "Iterating through lists, strings, and dictionaries",
      "Using enumerate() to get indices and items simultaneously",
      "for-else construct behavior in Python"
    ],
    explanation: "In Python, a 'for' loop iterates over items of any sequence or iterable collection (such as a list, string, tuple, set, or dictionary).\n\nUnlike C-style for loops with manual index counters, Python's for loop uses the 'for item in iterable:' syntax, which is cleaner and less error-prone.",
    example: {
      code: "fruits = [\"apple\", \"banana\", \"cherry\"]\n\nfor fruit in fruits:\n    print(f\"I like {fruit}\")\n\nfor index, fruit in enumerate(fruits, start=1):\n    print(f\"{index}. {fruit}\")",
      output: "I like apple\nI like banana\nI like cherry\n1. apple\n2. banana\n3. cherry",
      howItWorks: "The loop variable 'fruit' automatically takes the value of each element in the list one by one."
    },
    commonMistakes: [
      "Using range(len(list)) when you only need the elements directly (prefer 'for item in list:').",
      "Modifying a list while iterating over it (can cause skipped elements)."
    ],
    practiceQuestions: [
      {
        question: "Write a for loop to calculate the sum of numbers in list nums = [10, 20, 30, 40].",
        answer: "nums = [10, 20, 30, 40]\ntotal = 0\nfor n in nums:\n    total += n\nprint(\"Total:\", total)",
        output: "Total: 100"
      }
    ],
    interviewQuestion: "What does the else clause in a Python for loop do?",
    interviewAnswer: "The else block on a for loop executes only if the loop finishes iterating naturally over all items without encountering a break statement."
  },
  {
    id: "while-loop",
    topicNumber: 20,
    sectionId: "loops",
    sectionTitle: "Section 4 — Loops",
    title: "while Loop",
    shortDescription: "Repeat a block of code continuously as long as a specified condition remains True.",
    whatYouWillLearn: [
      "while loop structure and evaluation",
      "Updating loop control variables to prevent infinite loops",
      "Interactive input loops with while True",
      "while-else execution rules"
    ],
    explanation: "A 'while' loop repeatedly executes its code block as long as its condition evaluates to True.\n\nBefore each iteration, Python checks the condition. If True, the loop body runs. When the condition becomes False, execution proceeds to the code following the loop.\n\nCRITICAL: Always ensure that variables in the condition are updated inside the loop body, otherwise you will cause an infinite loop!",
    example: {
      code: "count = 1\n\nwhile count <= 5:\n    print(f\"Iteration #{count}\")\n    count += 1\n\nprint(\"Loop finished!\")",
      output: "Iteration #1\nIteration #2\nIteration #3\nIteration #4\nIteration #5\nLoop finished!",
      howItWorks: "count starts at 1. Each iteration prints the count and adds 1. When count becomes 6, the condition count <= 5 becomes False."
    },
    commonMistakes: [
      "Forgetting to increment the loop variable inside the body, causing an infinite freeze.",
      "Off-by-one errors with < vs <=."
    ],
    practiceQuestions: [
      {
        question: "Write a while loop that starts at countdown = 3 and counts down to 1, then prints 'Liftoff!'.",
        answer: "countdown = 3\nwhile countdown > 0:\n    print(countdown)\n    countdown -= 1\nprint(\"Liftoff!\")",
        output: "3\n2\n1\nLiftoff!"
      }
    ],
    interviewQuestion: "When would you prefer a while loop over a for loop?",
    interviewAnswer: "Use a for loop when you know the collection or number of iterations in advance. Use a while loop when looping depends on an indeterminate condition, such as waiting for user input, network status, or convergence algorithms."
  },
  {
    id: "range-function",
    topicNumber: 21,
    sectionId: "loops",
    sectionTitle: "Section 4 — Loops",
    title: "range()",
    shortDescription: "Generate immutable arithmetic progressions of integers efficiently for iteration.",
    whatYouWillLearn: [
      "1-arg, 2-arg, and 3-arg syntax: range(stop), range(start, stop), range(start, stop, step)",
      "Why range produces an immutable sequence, not a full list in memory",
      "Counting backwards with negative step values",
      "Converting ranges to lists"
    ],
    explanation: "The built-in range() function generates a sequence of numbers.\n\nSignatures:\n1. range(stop): 0 up to (stop - 1)\n2. range(start, stop): start up to (stop - 1)\n3. range(start, stop, step): start up to (stop - 1), advancing by step\n\nMemory Efficiency:\nIn Python 3, range() does NOT generate all numbers in memory at once. It creates an immutable sequence object that computes each number on demand (lazy evaluation), using O(1) constant memory regardless of size!",
    example: {
      code: "print(\"1 to 5:\")\nfor i in range(1, 6):\n    print(i, end=\" \")\nprint()\n\nprint(\"Even numbers (2 to 10):\")\nfor i in range(2, 11, 2):\n    print(i, end=\" \")\nprint()",
      output: "1 to 5:\n1 2 3 4 5 \nEven numbers (2 to 10):\n2 4 6 8 10 ",
      howItWorks: "range(start, stop, step) generates numbers starting at start, stopping before stop, incrementing by step."
    },
    commonMistakes: [
      "Expecting range(1, 5) to include 5 (it stops at 4 because 'stop' is exclusive).",
      "Using float numbers in range() (range only accepts integers; use numpy.arange or linspace for floats)."
    ],
    practiceQuestions: [
      {
        question: "Generate all multiples of 5 from 5 up to 25 using range().",
        answer: "print(list(range(5, 26, 5)))",
        output: "[5, 10, 15, 20, 25]"
      }
    ],
    interviewQuestion: "Why is range(100000000) instantaneous in Python 3 compared to Python 2's range()?",
    interviewAnswer: "In Python 3, range() returns a lazy sequence generator object that calculates values on the fly in O(1) memory, whereas Python 2's range() created an actual list containing 100 million integers in RAM."
  },
  {
    id: "break-statement",
    topicNumber: 22,
    sectionId: "loops",
    sectionTitle: "Section 4 — Loops",
    title: "break",
    shortDescription: "Immediately terminate the nearest enclosing loop and transfer control to the statement after the loop.",
    whatYouWillLearn: [
      "Prematurely exiting loops when a target condition is met",
      "How break interacts with the loop's else clause",
      "Using break in infinite while True search loops"
    ],
    explanation: "The 'break' statement immediately terminates the loop it is located inside.\n\nWhen Python encounters 'break', it abandons all remaining iterations of that loop and immediately resumes execution at the first statement following the loop.\n\nNote: If a loop has an 'else' block, triggering a 'break' skips the 'else' block entirely.",
    example: {
      code: "numbers = [12, 45, 78, 99, 105, 34]\ntarget = 99\n\nfor num in numbers:\n    if num == target:\n        print(f\"Found target number {target}! Stopping search.\")\n        break\n    print(f\"Checked {num}...\")",
      output: "Checked 12...\nChecked 45...\nChecked 78...\nFound target number 99! Stopping search.",
      howItWorks: "As soon as num equals 99, the break statement is triggered and the loop stops immediately."
    },
    commonMistakes: [
      "Expecting break to exit multiple nested loops (break only exits the innermost loop it belongs to)."
    ],
    practiceQuestions: [
      {
        question: "Loop through numbers 1 to 10 and break when the number is 4.",
        answer: "for i in range(1, 11):\n    if i == 4:\n        break\n    print(i, end=\" \")",
        output: "1 2 3 "
      }
    ],
    interviewQuestion: "How do you break out of multiple nested loops in Python?",
    interviewAnswer: "You can refactor the loops into a function and use return, raise and catch a custom exception, or use a boolean flag."
  },
  {
    id: "continue-statement",
    topicNumber: 23,
    sectionId: "loops",
    sectionTitle: "Section 4 — Loops",
    title: "continue",
    shortDescription: "Skip the rest of the current loop iteration and immediately advance to the next iteration.",
    whatYouWillLearn: [
      "Skipping unwanted elements without terminating the entire loop",
      "Difference between break (terminates) and continue (skips one step)",
      "Filtering values inside loops cleanly"
    ],
    explanation: "The 'continue' statement immediately ends the current iteration of the loop, skipping any code below it in the loop body, and jumps straight to the next iteration.\n\nUse 'continue' when you want to filter out certain items or bypass special cases without halting the entire loop.",
    example: {
      code: "for i in range(1, 7):\n    if i % 2 == 0:\n        continue  # Skip even numbers\n    print(f\"Odd number: {i}\")",
      output: "Odd number: 1\nOdd number: 3\nOdd number: 5",
      howItWorks: "When i is even (2, 4, 6), continue is executed, skipping print() and advancing to the next number."
    },
    commonMistakes: [
      "In a while loop, putting continue BEFORE updating the loop counter, causing an infinite loop because the counter never increments."
    ],
    practiceQuestions: [
      {
        question: "Print numbers from 1 to 5 skipping the number 3 using continue.",
        answer: "for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i, end=\" \")",
        output: "1 2 4 5 "
      }
    ],
    interviewQuestion: "What is the key difference between break and continue?",
    interviewAnswer: "break completely terminates the loop and exits, while continue skips only the remainder of the current iteration and advances to the next iteration."
  },
  {
    id: "pass-statement",
    topicNumber: 24,
    sectionId: "loops",
    sectionTitle: "Section 4 — Loops",
    title: "pass",
    shortDescription: "A null statement in Python used as a syntactic placeholder where code is required but no action is needed.",
    whatYouWillLearn: [
      "The role of pass as a no-op placeholder",
      "Using pass in empty function, class, and loop definitions during prototyping",
      "Difference between pass, continue, and comments"
    ],
    explanation: "The 'pass' statement is a null operation (no-op). When executed, nothing happens.\n\nBecause Python uses indentation to define code blocks, empty blocks (such as an empty if condition, function, loop, or class) are syntactic errors. 'pass' serves as a placeholder to keep your code syntactically valid while you design your architecture.",
    example: {
      code: "# Placeholder function\ndef process_payment(amount):\n    pass\n\nclass CustomUserException(Exception):\n    pass\n\nfor i in range(3):\n    if i == 1:\n        pass\n    print(f\"Item: {i}\")",
      output: "Item: 0\nItem: 1\nItem: 2",
      howItWorks: "The interpreter encounters pass and executes it as a no-op, allowing the structure to exist without throwing IndentationError."
    },
    commonMistakes: [
      "Confusing pass with continue (pass does NOT skip the remaining code in the loop body; it simply does nothing)."
    ],
    practiceQuestions: [
      {
        question: "Define an empty function named 'calculate_tax' without causing syntax errors.",
        answer: "def calculate_tax():\n    pass\n\nprint(\"Defined successfully\")",
        output: "Defined successfully"
      }
    ],
    interviewQuestion: "Can ... (Ellipsis) be used in place of pass in Python?",
    interviewAnswer: "Yes! In Python 3, the ... literal (Ellipsis object) is often used interchangeably with pass as a placeholder in function stubs and type annotations."
  },
  {
    id: "nested-loops",
    topicNumber: 25,
    sectionId: "loops",
    sectionTitle: "Section 4 — Loops",
    title: "Nested Loops",
    shortDescription: "Run loops inside other loops to work with 2D matrices, grids, coordinates, and combinations.",
    whatYouWillLearn: [
      "Structure and execution order of nested loops",
      "Outer loop vs inner loop cycle dynamics",
      "Iterating through 2D grids and matrices",
      "Time complexity considerations (O(n^2))"
    ],
    explanation: "A nested loop is a loop inside another loop.\n\nFor each single iteration of the outer loop, the inner loop completes all of its iterations from beginning to end.\n\nCommon use cases:\n- Traversing 2D arrays/grids (rows and columns)\n- Generating combinations or pairings\n- Image processing (pixels across X and Y axes)",
    example: {
      code: "for row in range(1, 4):\n    for col in range(1, 4):\n        print(f\"({row},{col})\", end=\" \")\n    print()",
      output: "(1,1) (1,2) (1,3) \n(2,1) (2,2) (2,3) \n(3,1) (3,2) (3,3) ",
      howItWorks: "For row = 1, col runs 1, 2, 3. Then for row = 2, col runs 1, 2, 3 again, and so forth."
    },
    commonMistakes: [
      "Accidentally creating excessive time complexity (e.g. 3 nested loops on large datasets = O(n^3)).",
      "Reusing the same loop variable name in both outer and inner loops (shadowing the variable)."
    ],
    practiceQuestions: [
      {
        question: "Write nested loops to print a right triangle of stars (*) with 3 rows.",
        answer: "for i in range(1, 4):\n    for j in range(i):\n        print(\"*\", end=\"\")\n    print()",
        output: "*\n**\n***"
      }
    ],
    interviewQuestion: "What is the time complexity of two nested loops of size N and M?",
    interviewAnswer: "The time complexity is O(N * M). If both loops iterate N times, the total time complexity is quadratic O(N^2)."
  }
];

writeCleanData("loops.js", "loops", loops);
