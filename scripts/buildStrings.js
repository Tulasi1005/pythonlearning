import { writeCleanData } from './dataWriter.js';

// STRINGS (26-30)
const strings = [
  {
    id: "string-basics",
    topicNumber: 26,
    sectionId: "strings",
    sectionTitle: "Section 5 — Strings",
    title: "String Basics",
    shortDescription: "Learn how strings represent text data, immutability of strings, multi-line quotes, and escape characters.",
    whatYouWillLearn: [
      "Creating strings with single, double, or triple quotes",
      "String immutability (cannot modify individual characters in place)",
      "Escape sequences (\\n, \\t, \\\\, \\\")",
      "String concatenation (+) and repetition (*)"
    ],
    explanation: "A string is an immutable sequence of characters used to store textual information.\n\nStrings in Python can be enclosed in single quotes ('...'), double quotes (\"...\"), or triple quotes ('''...''' or \"\"\"...\"\"\") for multi-line text.\n\nString Immutability:\nOnce created, a string cannot be modified in place. If you do s[0] = 'X', Python raises a TypeError. Any modification operation returns a brand-new string.",
    example: {
      code: "greeting = \"Hello\"\ntarget = \"World\"\nfull_message = greeting + \", \" + target + \"!\"\nprint(full_message)\n\ndivider = \"-\" * 20\nprint(divider)",
      output: "Hello, World!\n--------------------",
      howItWorks: "'+' combines strings, '*' repeats strings, and triple quotes preserve newlines across lines."
    },
    commonMistakes: [
      "Attempting to modify a character directly (e.g. s[0] = 'a').",
      "Forgetting escape backslashes when using matching internal quotes: 'It\\'s cool'."
    ],
    practiceQuestions: [
      {
        question: "Create a string repeated 4 times: 'Python! '.",
        answer: "print(\"Python! \" * 4)",
        output: "Python! Python! Python! Python! "
      }
    ],
    interviewQuestion: "Why are strings immutable in Python?",
    interviewAnswer: "Immutability allows strings to be hashable (usable as dictionary keys and set elements), ensures thread-safety, and allows Python to optimize memory via string interning."
  },
  {
    id: "string-indexing",
    topicNumber: 27,
    sectionId: "strings",
    sectionTitle: "Section 5 — Strings",
    title: "String Indexing",
    shortDescription: "Access individual characters in a string using positive (0-based) and negative backward indexing.",
    whatYouWillLearn: [
      "0-based forward indexing (0 to length - 1)",
      "Negative reverse indexing (-1 is the last character)",
      "IndexError when accessing out-of-range positions",
      "Retrieving character codes with ord() and chr()"
    ],
    explanation: "Every character in a string occupies a fixed index position.\n\nPython supports both forward and reverse indexing:\n- Positive Indexing: Starts at 0 for the first character, 1 for the second, up to len(s) - 1.\n- Negative Indexing: Starts at -1 for the last character, -2 for the second-to-last, etc.",
    example: {
      code: "word = \"PYTHON\"\n\nprint(\"First char (index 0):\", word[0])\nprint(\"Third char (index 2):\", word[2])\nprint(\"Last char (index -1):\", word[-1])\nprint(\"Second to last (index -2):\", word[-2])",
      output: "First char (index 0): P\nThird char (index 2): T\nLast char (index -1): N\nSecond to last (index -2): O",
      howItWorks: "Positive indices count from left to right; negative indices count backwards from right to left."
    },
    commonMistakes: [
      "Forgetting 0-indexing: index 1 is the 2nd character.",
      "Accessing word[len(word)] which causes IndexError: string index out of range."
    ],
    practiceQuestions: [
      {
        question: "Get the 4th character of 'Elephant' using indexing.",
        answer: "animal = \"Elephant\"\nprint(animal[3])",
        output: "p"
      }
    ],
    interviewQuestion: "What is the return type of accessing a single character via index s[0] in Python?",
    interviewAnswer: "In Python, there is no distinct char type. s[0] simply returns a new string of length 1."
  },
  {
    id: "string-slicing",
    topicNumber: 28,
    sectionId: "strings",
    sectionTitle: "Section 5 — Strings",
    title: "String Slicing",
    shortDescription: "Extract substrings cleanly using the slice syntax [start:stop:step].",
    whatYouWillLearn: [
      "Basic slice syntax: string[start:stop]",
      "Step parameter for strides and jumping",
      "Reversing strings cleanly with [::-1]",
      "Handling omitted start or stop bounds"
    ],
    explanation: "Slicing allows you to extract a portion of a string.\n\nSyntax:\nstring[start:stop:step]\n- start: Beginning index (inclusive, defaults to 0).\n- stop: Ending index (exclusive, defaults to len).\n- step: Increment step (defaults to 1).\n\nImportant: Slicing NEVER raises an IndexError if indices are out of bounds; it gracefully clamps to string bounds.",
    example: {
      code: "text = \"Python Programming\"\n\nprint(\"First 6 chars [0:6]:\", text[0:6])\nprint(\"From index 7 onwards [7:]:\", text[7:])\nprint(\"Every second letter [::2]:\", text[::2])\nprint(\"Reversed string [::-1]:\", text[::-1])",
      output: "First 6 chars [0:6]: Python\nFrom index 7 onwards [7:]: Programming\nEvery second letter [::2]: Pto rgamn\nReversed string [::-1]: gnimmargorP nohtyP",
      howItWorks: "text[0:6] takes indices 0, 1, 2, 3, 4, 5 (stopping before index 6)."
    },
    commonMistakes: [
      "Expecting the stop index to be included (remember: stop is always exclusive).",
      "Using negative step without swapping start and stop bounds."
    ],
    practiceQuestions: [
      {
        question: "Extract the domain 'google.com' from 'https://google.com' using slicing.",
        answer: "url = \"https://google.com\"\nprint(url[8:])",
        output: "google.com"
      }
    ],
    interviewQuestion: "Why does string slicing not raise an IndexError when indices are out of bounds?",
    interviewAnswer: "Python's slicing semantics are designed to extract valid overlapping ranges gracefully; indices outside the string length are automatically clipped to the string's start or end boundary."
  },
  {
    id: "string-methods",
    topicNumber: 29,
    sectionId: "strings",
    sectionTitle: "Section 5 — Strings",
    title: "String Methods",
    shortDescription: "Transform, clean, search, split, and validate strings using Python's extensive built-in string methods.",
    whatYouWillLearn: [
      "Case methods: upper(), lower(), title(), capitalize()",
      "Trimming whitespace: strip(), lstrip(), rstrip()",
      "Search & replace: replace(), find(), count(), startswith(), endswith()",
      "Splitting and joining: split() and join()"
    ],
    explanation: "Python provides dozens of built-in methods on string objects. Because strings are immutable, these methods never mutate the original string; they return a transformed new string.\n\nKey Methods:\n- .upper() / .lower() / .title()\n- .strip(): removes whitespace/chars from both ends\n- .replace(old, new)\n- .split(delimiter): splits string into a list\n- .join(iterable): joins items with delimiter\n- .startswith(prefix) / .endswith(suffix)",
    example: {
      code: "raw_email = \"  USER@Example.COM  \"\ncleaned = raw_email.strip().lower()\nprint(\"Cleaned:\", cleaned)\n\nsentence = \"Python is fast, Python is simple\"\nupdated = sentence.replace(\"Python\", \"Rust\")\nprint(\"Replaced:\", updated)\n\nwords = [\"Data\", \"Science\", \"2026\"]\njoined = \"-\".join(words)\nprint(\"Joined:\", joined)",
      output: "Cleaned: user@example.com\nReplaced: Rust is fast, Rust is simple\nJoined: Data-Science-2026",
      howItWorks: "Methods can be chained (e.g. .strip().lower()) to execute sequential transformations."
    },
    commonMistakes: [
      "Expecting s.upper() to change s in place (you must reassign: s = s.upper()).",
      "Using words.join('-') instead of '-'.join(words)."
    ],
    practiceQuestions: [
      {
        question: "Split the CSV text 'apple,banana,orange' into a list of fruits.",
        answer: "fruits_csv = \"apple,banana,orange\"\nfruits = fruits_csv.split(\",\")\nprint(fruits)",
        output: "['apple', 'banana', 'orange']"
      }
    ],
    interviewQuestion: "What is the time complexity of the str.join() method vs using + in a loop?",
    interviewAnswer: "str.join() runs in O(N) linear time because it pre-calculates the exact total memory needed. Using + in a loop creates a new string object on every iteration, leading to O(N^2) quadratic time."
  },
  {
    id: "string-formatting",
    topicNumber: 30,
    sectionId: "strings",
    sectionTitle: "Section 5 — Strings",
    title: "String Formatting",
    shortDescription: "Format strings dynamically using modern f-strings, str.format(), and number specifiers.",
    whatYouWillLearn: [
      "Modern f-strings (formatted string literals, Python 3.6+)",
      "Formatting numbers (decimals, percentages, commas for thousands)",
      "Expression evaluation inside f-strings",
      "str.format() and legacy % formatting comparison"
    ],
    explanation: "String formatting allows you to inject dynamic variables and expressions into strings.\n\nf-Strings (Recommended):\nPrefix string with 'f' (e.g., f\"Hello {name}\"). Expressions inside curly braces { } are evaluated at runtime.\n\nFormat Specifiers:\n- f\"{val:.2f}\": 2 decimal places\n- f\"{val:,}\": Thousand comma separators (e.g. 1,000,000)\n- f\"{val:>10}\": Right align in 10-char space\n- f\"{val:%}\": Percentage format",
    example: {
      code: "item = \"Laptop\"\nprice = 1299.954\ndiscount = 0.15\n\nprint(f\"Product: {item.upper()}\")\nprint(f\"Original Price: ${price:,.2f}\")\nprint(f\"Discount: {discount:.0%}\")\nprint(f\"Final Price: ${price * (1 - discount):,.2f}\")",
      output: "Product: LAPTOP\nOriginal Price: $1,299.95\nDiscount: 15%\nFinal Price: $1,104.96",
      howItWorks: "f-strings evaluate expressions like uppercase methods, math calculations, and number precision inside {} directly."
    },
    commonMistakes: [
      "Forgetting the 'f' prefix before opening quotes: '{name}' prints literal '{name}'.",
      "Using backslashes inside f-string expressions prior to Python 3.12."
    ],
    practiceQuestions: [
      {
        question: "Format a float number pi = 3.14159265 to 3 decimal places using an f-string.",
        answer: "pi = 3.14159265\nprint(f\"Pi: {pi:.3f}\")",
        output: "Pi: 3.142"
      }
    ],
    interviewQuestion: "Why are f-strings faster than % formatting and str.format()?",
    interviewAnswer: "f-strings are parsed at compile time into efficient Python bytecode (BUILD_STRING opcode) rather than being evaluated via runtime string parsing and dictionary lookups."
  }
];

writeCleanData("strings.js", "strings", strings);
