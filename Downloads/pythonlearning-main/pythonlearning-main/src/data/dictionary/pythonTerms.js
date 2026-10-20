/**
 * Core Python Terminology Dictionary
 * Structured across 5 Learning Stages and 4 Languages
 */

export const PYTHON_TERMS = [
  {
    term: "variable",
    category: "python",
    synonyms: ["variables", "var", "variabel"],
    pythonExample: "score = 100\nplayer_name = 'Alex'",
    howUsed: "Used to store numbers, text, and other data in computer memory so the program can use and update them later.",
    meanings: {
      english: {
        kid: {
          meaning: "A variable is like a named toy box where you keep one thing safe.",
          explanation: "If you have a toy car, you put it in a box labeled 'Car'. In Python, you write the box name and put a number or word inside it.",
          example: "A box named 'candies' holding the number 5.",
          remember: "Variable = a labeled box that holds a value for you."
        },
        young: {
          meaning: "A variable is a name used to store information in the computer's memory.",
          explanation: "In games, a variable keeps track of changing numbers like your player score, health points (HP), or coins collected.",
          example: "score = 50. When you earn 10 coins, score becomes 60.",
          remember: "Variable = a name that stores data that can change."
        },
        college: {
          meaning: "A variable is an identifier bound to a memory location storing a mutable or immutable reference.",
          explanation: "Variables allow programs to manipulate data symbolically rather than hardcoding static values.",
          example: "Storing user inputs, mathematical calculation states, or loop counters.",
          remember: "Variable = symbolic identifier referencing a value in memory."
        },
        graduate: {
          meaning: "A variable in Python is a named reference that points to an object in memory.",
          explanation: "Python utilizes dynamic typing; variables do not have fixed types, rather the objects they reference do.",
          example: "Binding API response JSON objects or database connection handles to identifiers.",
          remember: "Variable = a name pointing to a memory-allocated object reference."
        },
        professional: {
          meaning: "A variable is a symbolic reference bound to an object in the Python heap managed via reference counting.",
          explanation: "Variables allow decoupled logic by referencing dynamic state, configurations, and instances across execution scopes.",
          example: "Storing environmental configurations and thread-safe session handles.",
          remember: "Variable = namespace binding to a heap-allocated object reference."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Variable ante data ni save chesukune oka memory box / container laantidi.",
          explanation: "Game lo player score maaruthu untundi kadha, alanti changing values ni store cheyadaniki variable vaadatham.",
          example: "score = 100 ani oka box lo 100 number daachadam.",
          remember: "Variable = data ni store chese oka named container."
        }
      },
      telugu: {
        young: {
          meaning: "వేరియబుల్ (Variable) అంటే కంప్యూటర్ మెమరీలో డేటాను భద్రపరచడానికి ఉపయోగించే ఒక పేరు.",
          explanation: "మనం ఒక బాక్స్‌లో వస్తువులను దాచినట్లుగా, వేరియబుల్ లో సంఖ్యలు లేదా పేర్లను భద్రపరుస్తాము.",
          example: "score = 100 (స్కోర్ అనే వేరియబుల్ లో 100 నిల్వ చేయబడింది).",
          remember: "వేరియబుల్ = డేటాను నిల్వ చేసే మెమరీ బాక్స్."
        }
      },
      hindi: {
        young: {
          meaning: "वेरिएबल (Variable) एक ऐसा नाम है जो कंप्यूटर की मेमोरी में डेटा को स्टोर करता है।",
          explanation: "जैसे हम किसी डिब्बे पर नाम लिखकर उसमें सामान रखते हैं, वैसे ही वेरिएबल में हम कोई नंबर या नाम स्टोर करते हैं।",
          example: "score = 100 (स्कोर नाम के वेरिएबल में 100 वैल्यू स्टोर हुई है)।",
          remember: "Variable = डेटा स्टोर करने वाला मेमोरी बॉक्स।"
        }
      }
    }
  },
  {
    term: "function",
    category: "python",
    synonyms: ["functions", "func", "def", "functon", "subroutine"],
    pythonExample: "def greet(name):\n    return f'Hello, {name}!'\n\nprint(greet('Alex'))",
    howUsed: "Used to bundle a set of instructions into a reusable block that runs whenever you call its name.",
    meanings: {
      english: {
        kid: {
          meaning: "A function is like a magic spell or recipe card that does a job when you say its name.",
          explanation: "Instead of explaining how to make a sandwich every time, you just say 'make_sandwich()' and it's done!",
          example: "A function named 'jump()' that makes a game character jump into the air.",
          remember: "Function = a recipe of steps you can reuse anytime."
        },
        young: {
          meaning: "A function is a named block of code that does a specific task whenever you call it.",
          explanation: "Functions keep your code organized and stop you from typing the exact same lines again and again.",
          example: "A function 'calculate_damage(attack, defense)' used every time a player attacks in a game.",
          remember: "Function = reusable block of instructions."
        },
        college: {
          meaning: "A function is a parameterized subprogram that accepts inputs, executes defined logic, and returns an output.",
          explanation: "Functions enable modularity, code reusability, and functional abstraction across software systems.",
          example: "A function calculating compound interest or performing matrix multiplication.",
          remember: "Function = modular unit of logic with inputs and return values."
        },
        graduate: {
          meaning: "A first-class callable object that encapsulates reusable business logic and supports closures.",
          explanation: "In Python, functions are first-class citizens: they can be passed as arguments, returned from other functions, and assigned to variables.",
          example: "Writing decorator functions and higher-order utility pipelines.",
          remember: "Function = first-class callable object encapsulating parameterized logic."
        },
        professional: {
          meaning: "An encapsulated subroutine providing clean abstraction boundaries, deterministic side-effect isolation, and testability.",
          explanation: "Functions facilitate the Single Responsibility Principle, pure functional pipelines, and unit test mocking.",
          example: "Creating pure functions for financial transaction calculations and validation middleware.",
          remember: "Function = isolated, testable unit of business execution."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Function ante oka specific pani cheyadaniki manam create chese reusable code block.",
          explanation: "Oka pani ni malli malli type cheyyakunda, oka function lo rasi avasaram unnappudu call chestham.",
          example: "add_numbers(5, 10) call chesthe direct ga 15 result vasthundi.",
          remember: "Function = reusable task chese code block."
        }
      },
      telugu: {
        young: {
          meaning: "ఫంక్షన్ (Function) అంటే ఒక నిర్దిష్టమైన పనిని పదే పదే చేయడానికి రాసే కోడ్ సమూహం.",
          explanation: "ఒకే కోడ్‌ను మాటిమాటికి రాయకుండా, ఒక పేరుతో ఫంక్షన్ గా రాసి అవసరమైనప్పుడు కాల్ చేస్తాము.",
          example: "calculate_total(price, tax) ఫంక్షన్ ద్వారా బిల్ లెక్కించవచ్చు.",
          remember: "ఫంక్షన్ = పదే పదే ఉపయోగపడే కోడ్ బ్లాక్."
        }
      },
      hindi: {
        young: {
          meaning: "फ़ंक्शन (Function) कोड का एक ऐसा ब्लॉक है जो किसी खास काम को बार-बार करने के लिए बनाया जाता है।",
          explanation: "एक ही कोड को बार-बार लिखने के बजाय हम फ़ंक्शन बनाते हैं और जब ज़रूरत हो तब उसे कॉल करते हैं।",
          example: "greet('Ravi') लिखने से स्क्रीन पर 'Hello, Ravi!' प्रिंट होता है।",
          remember: "Function = बार-बार इस्तेमाल होने वाला कोड ब्लॉक।"
        }
      }
    }
  },
  {
    term: "parameter",
    category: "python",
    synonyms: ["parameters", "param", "params", "formal parameter"],
    pythonExample: "def calculate_area(width, height):  # width & height are parameters\n    return width * height",
    howUsed: "Defined in the function header to declare what inputs the function expects when called.",
    meanings: {
      english: {
        kid: {
          meaning: "A parameter is like an empty slot on a machine where you slide in a toy or number.",
          explanation: "A toaster has a slot for bread. The slot is the parameter, and the bread is the thing you put in.",
          example: "In 'draw_circle(size)', 'size' is the parameter slot.",
          remember: "Parameter = the slot waiting for input inside a function."
        },
        young: {
          meaning: "A parameter is a variable listed inside the parentheses in the function definition.",
          explanation: "It acts as a placeholder that receives the real values (arguments) when the function is used.",
          example: "In 'def add(a, b):', 'a' and 'b' are parameters.",
          remember: "Parameter = placeholder variable in function header."
        },
        college: {
          meaning: "A parameter (formal parameter) is a variable declared in a function definition signature.",
          explanation: "Defines the interface, expected arity, default values, and type annotations for function execution.",
          example: "Positional, keyword-only, and var-keyword (*args, **kwargs) parameters in Python.",
          remember: "Parameter = formal input variable in function signature."
        },
        graduate: {
          meaning: "A formal signature parameter specifying the contract and constraints of incoming function data.",
          explanation: "Parameters enforce API contracts and interface semantics across library modules.",
          example: "Configuring default parameter values and type hints (e.g. `timeout: float = 5.0`).",
          remember: "Parameter = formal input specification in function contract."
        },
        professional: {
          meaning: "A signature-level input declaration specifying argument binding behavior, defaults, and typing rules.",
          explanation: "Careful parameter design ensures backward compatibility, minimal API surface, and immutability.",
          example: "Designing keyword-only parameters for robust configuration APIs (`*, timeout=30, retries=3`).",
          remember: "Parameter = signature contract definition for incoming callable arguments."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Parameter ante function definition lo manam input kosam pette placeholder variable.",
          explanation: "Function create chesetappudu parentheses `()` lo rase variables ni parameters antaru.",
          example: "def multiply(x, y): lo 'x' and 'y' parameters.",
          remember: "Parameter = function header lo unde input placeholder."
        }
      },
      telugu: {
        young: {
          meaning: "పారామీటర్ (Parameter) అంటే ఫంక్షన్ నిర్వచనంలో ఇన్‌పుట్ కోసం ఉంచే వేరియబుల్.",
          explanation: "ఫంక్షన్ డిఫైన్ చేసేటప్పుడు బ్రాకెట్లలో రాసే పేర్లను పారామీటర్లు అంటారు.",
          example: "def greet(user_name): లో 'user_name' పారామీటర్.",
          remember: "పారామీటర్ = ఫంక్షన్ ఇన్‌పుట్ వేరియబుల్."
        }
      },
      hindi: {
        young: {
          meaning: "पैरामीटर (Parameter) फ़ंक्शन की परिभाषा में इनपुट के लिए रखा गया वेरिएबल होता है।",
          explanation: "जब हम फ़ंक्शन बनाते हैं तो ब्रैकेट के अंदर जो नाम लिखते हैं, उन्हें पैरामीटर कहते हैं।",
          example: "def add(x, y): में 'x' और 'y' पैरामीटर हैं।",
          remember: "Parameter = फ़ंक्शन हेडर में इनपुट प्लेसहोल्डर।"
        }
      }
    }
  },
  {
    term: "argument",
    category: "python",
    synonyms: ["arguments", "arg", "args", "actual parameter"],
    pythonExample: "calculate_area(10, 20)  # 10 and 20 are arguments passed to the function",
    howUsed: "Passed into a function call to supply actual values for its parameters.",
    meanings: {
      english: {
        kid: {
          meaning: "An argument is the real toy or number you actually put into the machine slot.",
          explanation: "If the parameter is a slot for bread, the actual slice of bread you put in is the argument!",
          example: "Passing the number 5 into jump(5).",
          remember: "Argument = the real value you send into a function."
        },
        young: {
          meaning: "An argument is the actual value you send to a function when you call it.",
          explanation: "While parameters are the placeholders, arguments are the real data (like numbers or strings) you provide.",
          example: "In 'print(\"Hello\")' or 'add(5, 10)', 5 and 10 are arguments.",
          remember: "Argument = actual value passed to a function call."
        },
        college: {
          meaning: "An actual argument passed into a callable during runtime invocation.",
          explanation: "Arguments map to formal parameters positionally, by keyword, or via unpacked iterable/mapping structures.",
          example: "Passing arguments with positional unpacking `*args` and keyword mapping `**kwargs`.",
          remember: "Argument = runtime value bound to a formal parameter."
        },
        graduate: {
          meaning: "The concrete runtime operand evaluated and bound to a function parameter slot.",
          explanation: "Python passes arguments by object reference (pass-by-assignment), affecting mutable objects in-place.",
          example: "Passing mutable dicts and observing in-place modifications vs immutable scalars.",
          remember: "Argument = concrete value passed by assignment during invocation."
        },
        professional: {
          meaning: "Runtime evaluation operand bound to invocation scope via Python's call mechanism.",
          explanation: "Understanding argument passing semantics avoids common bugs like mutable default arguments.",
          example: "Passing immutable frozen dataclass instances as arguments for thread safety.",
          remember: "Argument = runtime operand bound to callable execution context."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Argument ante function ni call chesetappudu manam pass chese real value.",
          explanation: "Parameter lo place cheyyadaniki manam pette number or text ni argument antaru.",
          example: "add(10, 20) lo 10 and 20 arguments.",
          remember: "Argument = function call lo iche real value."
        }
      },
      telugu: {
        young: {
          meaning: "ఆర్గ్యుమెంట్ (Argument) అంటే ఫంక్షన్‌ను పిలిచేటప్పుడు (Call) మనం అందించే అసలైన విలువ.",
          explanation: "ఫంక్షన్ పనిచేయడానికి అవసరమైన డేటాను బ్రాకెట్లలో అందించడాన్ని ఆర్గ్యుమెంట్ అంటారు.",
          example: "print('Hello') లో 'Hello' అనేది ఆర్గ్యుమెంట్.",
          remember: "ఆర్గ్యుమెంట్ = ఫంక్షన్ కు ఇచ్చే అసలైన విలువ."
        }
      },
      hindi: {
        young: {
          meaning: "आर्ग्युमेंट (Argument) वह असली वैल्यू होती है जो हम फ़ंक्शन को कॉल करते समय भेजते हैं।",
          explanation: "पैरामीटर सिर्फ खाली जगह होता है, और आर्ग्युमेंट वह असली डेटा होता है जो उसमें डाला जाता है।",
          example: "calculate(10, 20) में 10 और 20 आर्ग्युमेंट्स हैं।",
          remember: "Argument = फ़ंक्शन कॉल में भेजी जाने वाली असली वैल्यू।"
        }
      }
    }
  },
  {
    term: "syntax",
    category: "python",
    synonyms: ["syntaxes", "syntax error", "code grammar"],
    pythonExample: "if x > 10:\n    print('Greater')  # Proper colon and indentation follow Python syntax",
    howUsed: "Defines the exact spelling, symbols, colons, and indentation required for code to execute properly.",
    meanings: {
      english: {
        kid: {
          meaning: "Syntax is the grammar rules of computer coding.",
          explanation: "In English, a sentence starts with a capital letter and ends with a period. In Python, syntax is the rules so the computer understands.",
          example: "Putting quotation marks around words: print('Hello').",
          remember: "Syntax = coding grammar rules."
        },
        young: {
          meaning: "Syntax is the set of rules that tells you how to write valid code in a programming language.",
          explanation: "If you forget a colon `:` or a closing bracket `)`, Python stops and shows a 'SyntaxError'.",
          example: "Writing 'if score > 10:' instead of 'if score > 10' without colon.",
          remember: "Syntax = the correct structure and spelling of code."
        },
        college: {
          meaning: "Syntax defines the formal grammar, tokenization, and lexical structure of a language.",
          explanation: "Violations prevent parser AST generation, throwing SyntaxError during compilation prior to bytecode generation.",
          example: "Whitespace-sensitive off-side indentation and colon-delimited compound statements in Python.",
          remember: "Syntax = formal grammar specification of a language."
        },
        graduate: {
          meaning: "The formal grammatical rules governing the permissible token sequences recognized by the language parser.",
          explanation: "Python uses a PEG (Parsing Expression Grammar) parser to construct AST trees from source syntax.",
          example: "Utilizing modern Python syntax features like pattern matching (`match/case`) and walrus operator (`:=`).",
          remember: "Syntax = grammar rules parsed into an Abstract Syntax Tree."
        },
        professional: {
          meaning: "Formal linguistic specification governing valid token sequences, parsing invariants, and AST representation.",
          explanation: "Enforcing consistent syntax and style via automated linters (Ruff, Flake8) and formatters (Black).",
          example: "Adhering to PEP 8 syntax standards in production codebases.",
          remember: "Syntax = formal language grammar parsed by the interpreter."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Syntax ante programming language yokka grammar rules.",
          explanation: "English lo grammar rules unnatle, Python lo code correct ga rayadaniki unde rules ni syntax antaru.",
          example: "Colon `:` pettadam, proper indentation ivvadam syntax rules.",
          remember: "Syntax = code rase grammar rules."
        }
      },
      telugu: {
        young: {
          meaning: "సింటాక్స్ (Syntax) అంటే ప్రోగ్రామింగ్ భాష యొక్క వ్యాకరణ నియమాలు (Grammar Rules).",
          explanation: "మనం మాట్లాడే భాషకు వ్యాకరణం ఉన్నట్లే, కంప్యూటర్ కోడ్ సరిగ్గా అర్థం చేసుకోవడానికి సింటాక్స్ నియమాలు ఉంటాయి.",
          example: "if పక్కన కోలన్ `:` పెట్టకపోతే సింటాక్స్ ఎర్రర్ వస్తుంది.",
          remember: "సింటాక్స్ = కోడింగ్ వ్యాకరణ నియమాలు."
        }
      },
      hindi: {
        young: {
          meaning: "सिंटेक्स (Syntax) प्रोग्रामिंग भाषा के व्याकरण (Grammar) के नियम होते हैं।",
          explanation: "जैसे भाषा में वाक्य सही लिखने के नियम होते हैं, वैसे ही कंप्यूटर कोड सही लिखने के नियमों को सिंटेक्स कहते हैं।",
          example: "कोलन `:` या ब्रैकेट `()` भूल जाने पर 'SyntaxError' आता है।",
          remember: "Syntax = कोड लिखने के व्याकरण के नियम।"
        }
      }
    }
  },
  {
    term: "loop",
    category: "python",
    synonyms: ["loops", "looping", "for loop", "while loop", "iteration"],
    pythonExample: "for i in range(5):\n    print(f'Count: {i}')",
    howUsed: "Used to repeat a block of code multiple times without writing the same instructions again.",
    meanings: {
      english: {
        kid: {
          meaning: "A loop is like repeating a dance move or jumping on a trampoline over and over.",
          explanation: "Instead of saying 'Jump! Jump! Jump! Jump! Jump!', you just tell the computer 'Jump 5 times!'.",
          example: "Clapping your hands 3 times in a row.",
          remember: "Loop = repeating an action multiple times."
        },
        young: {
          meaning: "A loop repeats a section of code as many times as you want or until a condition is met.",
          explanation: "Loops (like 'for' and 'while') let you print numbers, check all inventory items, or keep a game running.",
          example: "Going through a list of 10 players to check who won.",
          remember: "Loop = automatically repeating code."
        },
        college: {
          meaning: "A control structure that iteratively executes a statement block over a sequence or condition.",
          explanation: "Python implements iteration via the Iterator protocol (`__iter__` and `__next__`), providing `for` and `while` structures.",
          example: "Iterating through linked lists, arrays, or matrix grids with loop constructs.",
          remember: "Loop = iterative control flow execution."
        },
        graduate: {
          meaning: "An iterative control construct utilizing Python's iterable protocol to process streaming sequences efficiently.",
          explanation: "Supports break/continue/else semantics and generator consumption with O(1) memory efficiency.",
          example: "Batching large datasets or chunking database query streams.",
          remember: "Loop = iterative execution construct driven by sequence protocols."
        },
        professional: {
          meaning: "Control flow construct for deterministic sequence traversal and asynchronous stream consumption (`async for`).",
          explanation: "Optimizing loop performance via vectorized operations (NumPy) or generator pipelines to avoid memory overhead.",
          example: "Consuming event streams from message queues with robust exception handling within loop bodies.",
          remember: "Loop = bounded or event-driven iterative execution pipeline."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Loop ante oka code block ni malli malli automatic ga repeat cheyadam.",
          explanation: "Oka message ni 100 times print cheyalante 100 sarlu rayakunda loop vaadi repeat cheyachu.",
          example: "for i in range(5): print('Hello') - Hello 5 sarlu print avtundi.",
          remember: "Loop = code ni repeat chese mechanism."
        }
      },
      telugu: {
        young: {
          meaning: "లూప్ (Loop) అంటే ఒకే కోడ్‌ను నిర్దిష్ట సంఖ్యలో స్వయంచాలకంగా పునరావృతం (Repeat) చేయడం.",
          explanation: "ఒక పనిని వంద సార్లు చేయాల్సి వస్తే, ప్రతిసారీ రాయకుండా లూప్ ద్వారా సులభంగా చేయవచ్చు.",
          example: "for loop ఉపయోగించి 1 నుండి 100 వరకు సంఖ్యలను సులభంగా ముద్రించవచ్చు.",
          remember: "లూప్ = కోడ్‌ను పునరావృతం చేసే సాధనం."
        }
      },
      hindi: {
        young: {
          meaning: "लूप (Loop) कोड के किसी हिस्से को बार-बार दोहराने (Repeat करने) का तरीका है।",
          explanation: "अगर आपको कोई काम 50 बार करना है, तो उसे 50 बार लिखने के बजाय लूप का उपयोग किया जाता है।",
          example: "1 से 10 तक गिनती प्रिंट करने के लिए 'for loop' का उपयोग होता है।",
          remember: "Loop = कोड को बार-बार दोहराने का सिस्टम।"
        }
      }
    }
  }
];
