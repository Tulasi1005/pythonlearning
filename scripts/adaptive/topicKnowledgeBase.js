// Comprehensive Multi-Language & Multi-Stage Pedagogical Content Synthesizer
// Stages: Kid (0-6), Young (7-15), College (16-19), Graduate (20-24), Professional (25+)
// Languages: English, English+Telugu, Telugu, Hindi
// Explanations: Simple, Story, Real-Life, Friend, Visual, Step-by-Step, Example-First, Analogy

export function getTopicContent(concept, title, topicNumber, sectionId, sectionTitle) {
  const cleanTitle = title.replace(/\(.*?\)/g, "").trim();

  return {
    kid: buildStageData("kid", cleanTitle, topicNumber, sectionId, sectionTitle, concept),
    young: buildStageData("young", cleanTitle, topicNumber, sectionId, sectionTitle, concept),
    college: buildStageData("college", cleanTitle, topicNumber, sectionId, sectionTitle, concept),
    graduate: buildStageData("graduate", cleanTitle, topicNumber, sectionId, sectionTitle, concept),
    professional: buildStageData("professional", cleanTitle, topicNumber, sectionId, sectionTitle, concept)
  };
}

function buildStageData(stageId, title, topicNumber, sectionId, sectionTitle, concept) {
  return {
    visual: buildVisualMeta(stageId, title, concept),
    languages: {
      english: buildLanguagePackage("english", stageId, title, concept),
      "english-telugu": buildLanguagePackage("english-telugu", stageId, title, concept),
      telugu: buildLanguagePackage("telugu", stageId, title, concept),
      hindi: buildLanguagePackage("hindi", stageId, title, concept)
    }
  };
}

function buildVisualMeta(stageId, title, concept) {
  const visualsByStage = {
    kid: {
      metaphor: `🧸 ${title} Toy Box`,
      badge: "🧸 Playground Card",
      description: `Connect the colorful blocks to see how ${title} works in a fun playground!`,
      elements: [
        { label: "Step 1", value: "Pick a toy 🧸", color: "emerald", icon: "Sparkles" },
        { label: "Step 2", value: `Do ${title} 🚀`, color: "blue", icon: "Play" },
        { label: "Step 3", value: "Magic on screen! ✨", color: "amber", icon: "Smile" }
      ]
    },
    young: {
      metaphor: `🎒 ${title} Game Inventory`,
      badge: "🎒 Game HUD & State",
      description: `Updates your player stats and runs game mechanics using ${title}.`,
      elements: [
        { label: "Player State", value: "Level 10 Hero", color: "blue", icon: "Gamepad2" },
        { label: "Mechanic", value: title, color: "emerald", icon: "Zap" },
        { label: "Reward", value: "+100 XP Points 🏆", color: "purple", icon: "Trophy" }
      ]
    },
    college: {
      metaphor: `🎓 ${title} Memory & Logic Flow`,
      badge: "🎓 Computer Science Model",
      description: `Structural data flow and memory state representation for ${title}.`,
      elements: [
        { label: "Identifier", value: "Symbol Table", color: "indigo", icon: "FileCode" },
        { label: "Execution", value: "Runtime Step", color: "blue", icon: "Workflow" },
        { label: "Memory Heap", value: "PyObject Reference", color: "emerald", icon: "CheckCircle" }
      ]
    },
    graduate: {
      metaphor: `💼 ${title} Business Service`,
      badge: "💼 Enterprise Service Flow",
      description: `Production data flow integrating backend services and business logic for ${title}.`,
      elements: [
        { label: "Request", value: "API Payload JSON", color: "blue", icon: "Globe" },
        { label: "Business Service", value: title, color: "emerald", icon: "Server" },
        { label: "Database", value: "Transaction Commit", color: "amber", icon: "Database" }
      ]
    },
    professional: {
      metaphor: `🚀 ${title} System Architecture`,
      badge: "🚀 Production Architecture",
      description: `High-throughput execution model, memory layout, and operational telemetry for ${title}.`,
      elements: [
        { label: "Engine", value: "CPython 3.12+", color: "purple", icon: "Cpu" },
        { label: "Subsystem", value: title, color: "blue", icon: "Layers" },
        { label: "Telemetry", value: "p99 < 4ms SLA", color: "emerald", icon: "Activity" }
      ]
    }
  };

  return visualsByStage[stageId] || visualsByStage.young;
}

function buildLanguagePackage(lang, stage, title, concept) {
  const codeSnippets = getStageCode(stage, title, concept);

  return {
    whatIsIt: getLocalizedWhatIsIt(lang, stage, title, concept),
    whyDoWeNeedIt: getLocalizedWhyDoWeNeedIt(lang, stage, title, concept),
    intro: getLocalizedIntro(lang, stage, title),
    explanations: getLocalizedExplanations(lang, stage, title, concept, codeSnippets),
    realLifeExample: getLocalizedRealLife(lang, stage, title),
    code: codeSnippets.code,
    output: codeSnippets.output,
    howItWorks: getLocalizedHowItWorks(lang, stage, title, codeSnippets),
    importantPoints: getLocalizedImportantPoints(lang, stage, title),
    commonMistakes: getLocalizedCommonMistakes(lang, stage, title),
    tryItYourself: getLocalizedTryIt(lang, stage, title, codeSnippets),
    questions: getLocalizedQuestions(lang, stage, title, concept),
    challenge: getLocalizedChallenge(lang, stage, title),
    interviewQuestions: getLocalizedInterview(lang, stage, title)
  };
}

// -------------------------------------------------------------
// CODE GENERATION BY STAGE & CONCEPT
// -------------------------------------------------------------
function getStageCode(stage, title, concept) {
  const t = title.toLowerCase();

  // 1. Variables & Naming & Constants
  if (t.includes("variable") || t.includes("constant") || t.includes("naming")) {
    if (stage === "kid") {
      return {
        code: `toy = "Teddy 🧸"\nprint(toy)`,
        output: `Teddy 🧸`
      };
    }
    if (stage === "young") {
      return {
        code: `player = "Rahul"\nscore = 100\nprint(player)\nprint(score)`,
        output: `Rahul\n100`
      };
    }
    if (stage === "college") {
      return {
        code: `name = "Rahul"\nage = 18\nmarks = 85\nprint(f"Student: {name}, Age: {age}, Marks: {marks}")`,
        output: `Student: Rahul, Age: 18, Marks: 85`
      };
    }
    if (stage === "graduate") {
      return {
        code: `salary = 45000\nbonus = 5000\ntotal = salary + bonus\nprint(f"Total Salary: \${total}")`,
        output: `Total Salary: $50000`
      };
    }
    return {
      code: `employee = {\n    "name": "Anjali",\n    "salary": 45000,\n    "department": "IT"\n}\nprint(employee["name"])\nprint(f"Salary: \${employee['salary']}")`,
      output: `Anjali\nSalary: $45000`
    };
  }

  // 2. Output, Print, Hello
  if (t.includes("print") || t.includes("output") || t.includes("first python program") || t.includes("syntax")) {
    if (stage === "kid") {
      return {
        code: `print("Hello Teddy! 🧸")\nprint("I love Python! 🌟")`,
        output: `Hello Teddy! 🧸\nI love Python! 🌟`
      };
    }
    if (stage === "young") {
      return {
        code: `print("=== GAME START ===")\nprint("Player: Alex | Level: 1")`,
        output: `=== GAME START ===\nPlayer: Alex | Level: 1`
      };
    }
    if (stage === "college") {
      return {
        code: `name = "Priya"\ngpa = 3.9\nprint(f"Student: {name} | GPA: {gpa}")`,
        output: `Student: Priya | GPA: 3.9`
      };
    }
    if (stage === "graduate") {
      return {
        code: `status = "SUCCESS"\ncode = 200\nprint(f"Response: {status} (Code: {code})")`,
        output: `Response: SUCCESS (Code: 200)`
      };
    }
    return {
      code: `import sys\nprint("[INFO] Service worker initialized on port 8080", file=sys.stdout)`,
      output: `[INFO] Service worker initialized on port 8080`
    };
  }

  // 3. Data Types & Types
  if (t.includes("type") || t.includes("int") || t.includes("float") || t.includes("boolean")) {
    if (stage === "kid") {
      return {
        code: `age = 5\nname = "Bunny"\nis_happy = True\nprint(name)\nprint(age)`,
        output: `Bunny\n5`
      };
    }
    if (stage === "young") {
      return {
        code: `level = 10\nspeed = 4.5\nis_alive = True\nprint(f"Level: {level}, Speed: {speed}")`,
        output: `Level: 10, Speed: 4.5`
      };
    }
    if (stage === "college") {
      return {
        code: `item_price = 19.99\nquantity = 3\ntotal = item_price * quantity\nprint(f"Total: \${total:.2f} (Type: {type(total).__name__})")`,
        output: `Total: $59.97 (Type: float)`
      };
    }
    if (stage === "graduate") {
      return {
        code: `user_id = 1045\nis_active = True\naccount_balance = 12500.50\nprint(f"ID: {user_id} | Balance: \${account_balance:,}")`,
        output: `ID: 1045 | Balance: $12,500.5`
      };
    }
    return {
      code: `from typing import Dict, Any\nconfig: Dict[str, Any] = {"port": 8000, "debug": False, "timeout": 3.5}\nprint(config)`,
      output: `{'port': 8000, 'debug': False, 'timeout': 3.5}`
    };
  }

  // 4. Loops (For / While / Range / Break / Continue)
  if (t.includes("loop") || t.includes("range") || t.includes("break") || t.includes("continue") || t.includes("pass")) {
    if (stage === "kid") {
      return {
        code: `toys = ["🚗 Car", "🧸 Teddy", "⚽ Ball"]\nfor t in toys:\n    print(f"Playing with {t}!")`,
        output: `Playing with 🚗 Car!\nPlaying with 🧸 Teddy!\nPlaying with ⚽ Ball!`
      };
    }
    if (stage === "young") {
      return {
        code: `scores = [10, 25, 50]\nfor s in scores:\n    print(f"Earned {s} bonus points! 🏆")`,
        output: `Earned 10 bonus points! 🏆\nEarned 25 bonus points! 🏆\nEarned 50 bonus points! 🏆`
      };
    }
    if (stage === "college") {
      return {
        code: `marks = [85, 90, 78, 92]\ntotal = 0\nfor m in marks:\n    total += m\nprint(f"Average: {total / len(marks):.1f}")`,
        output: `Average: 86.2`
      };
    }
    if (stage === "graduate") {
      return {
        code: `salaries = [45000, 52000, 60000]\nfor idx, sal in enumerate(salaries, 1):\n    print(f"Employee #{idx}: \${sal:,}")`,
        output: `Employee #1: $45,000\nEmployee #2: $52,000\nEmployee #3: $60,000`
      };
    }
    return {
      code: `tasks = ["auth_check", "db_sync", "cache_warmup"]\nfor task in tasks:\n    print(f"[PROCESS] Completed {task} in 1.2ms")`,
      output: `[PROCESS] Completed auth_check in 1.2ms\n[PROCESS] Completed db_sync in 1.2ms\n[PROCESS] Completed cache_warmup in 1.2ms`
    };
  }

  // 5. Conditions (if, if-else, if-elif-else, ternary)
  if (t.includes("condition") || t.includes("if") || t.includes("else") || t.includes("decision")) {
    if (stage === "kid") {
      return {
        code: `traffic_light = "Green"\nif traffic_light == "Green":\n    print("Go Go Vroom! 🚗💨")\nelse:\n    print("Stop and wait! 🛑")`,
        output: `Go Go Vroom! 🚗💨`
      };
    }
    if (stage === "young") {
      return {
        code: `health = 45\nif health > 50:\n    print("Player is energized! ⚡")\nelse:\n    print("Find a health potion! 🧪")`,
        output: `Find a health potion! 🧪`
      };
    }
    if (stage === "college") {
      return {
        code: `score = 88\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelse:\n    grade = "C"\nprint(f"Final Grade: {grade}")`,
        output: `Final Grade: B`
      };
    }
    if (stage === "graduate") {
      return {
        code: `order_total = 120\nif order_total > 100:\n    discount = 15\nelse:\n    discount = 0\nprint(f"Net Pay: \${order_total - discount}")`,
        output: `Net Pay: $105`
      };
    }
    return {
      code: `status_code = 200\nif 200 <= status_code < 300:\n    print("[HTTP] Request succeeded")\nelse:\n    print("[HTTP] Alert: retry required")`,
      output: `[HTTP] Request succeeded`
    };
  }

  // 6. Functions (def, parameters, return, args, kwargs, lambda)
  if (t.includes("function") || t.includes("parameter") || t.includes("argument") || t.includes("return") || t.includes("lambda") || t.includes("recursion") || t.includes("scope")) {
    if (stage === "kid") {
      return {
        code: `def say_hello(toy):\n    print(f"Hello my happy {toy}! 🧸")\n\nsay_hello("Teddy")`,
        output: `Hello my happy Teddy! 🧸`
      };
    }
    if (stage === "young") {
      return {
        code: `def power_up(player, boost):\n    return f"{player} gained +{boost} Power! ⚡"\n\nprint(power_up("Alex", 50))`,
        output: `Alex gained +50 Power! ⚡`
      };
    }
    if (stage === "college") {
      return {
        code: `def calculate_gpa(marks_list):\n    return sum(marks_list) / len(marks_list)\n\nprint(f"GPA: {calculate_gpa([85, 90, 80]):.2f}")`,
        output: `GPA: 85.00`
      };
    }
    if (stage === "graduate") {
      return {
        code: `def compute_net_salary(base, bonus, tax_rate=0.1):\n    gross = base + bonus\n    return gross * (1 - tax_rate)\n\nprint(f"Net: \${compute_net_salary(50000, 5000):,.2f}")`,
        output: `Net: $49,500.00`
      };
    }
    return {
      code: `def format_response(status, payload):\n    return {"status": status, "data": payload, "meta": {"cached": True}}\n\nprint(format_response(200, {"id": 101}))`,
      output: `{'status': 200, 'data': {'id': 101}, 'meta': {'cached': True}}`
    };
  }

  // 7. Data Structures: Lists, Tuples, Sets, Dicts
  if (t.includes("list") || t.includes("tuple") || t.includes("set") || t.includes("dict")) {
    if (stage === "kid") {
      return {
        code: `toy_box = ["Teddy 🧸", "Car 🚗", "Ball ⚽"]\nprint(f"My first toy is: {toy_box[0]}")`,
        output: `My first toy is: Teddy 🧸`
      };
    }
    if (stage === "young") {
      return {
        code: `inventory = {"sword": 1, "potions": 3, "gold": 150}\nprint(f"Gold: {inventory['gold']}")`,
        output: `Gold: 150`
      };
    }
    if (stage === "college") {
      return {
        code: `student = {"id": 101, "name": "Rahul", "courses": ["CS101", "MATH201"]}\nprint(f"Enrolled courses: {len(student['courses'])}")`,
        output: `Enrolled courses: 2`
      };
    }
    if (stage === "graduate") {
      return {
        code: `department_salaries = {\n    "Engineering": [45000, 55000],\n    "Marketing": [38000, 42000]\n}\nprint(f"Eng Count: {len(department_salaries['Engineering'])}")`,
        output: `Eng Count: 2`
      };
    }
    return {
      code: `user_cache = {"usr_1": {"role": "admin", "active": True}}\nprint(f"Admin: {user_cache.get('usr_1', {}).get('role') == 'admin'}")`,
      output: `Admin: True`
    };
  }

  // 8. OOP & Classes
  if (t.includes("class") || t.includes("object") || t.includes("oop") || t.includes("init") || t.includes("inheritance") || t.includes("polymorphism") || t.includes("encapsulation") || t.includes("abstraction")) {
    if (stage === "kid") {
      return {
        code: `class Toy:\n    def __init__(self, name):\n        self.name = name\n    def play(self):\n        print(f"Playing with {self.name}! 🧸")\n\nt = Toy("Teddy")\nt.play()`,
        output: `Playing with Teddy! 🧸`
      };
    }
    if (stage === "young") {
      return {
        code: `class Player:\n    def __init__(self, name, hp=100):\n        self.name = name\n        self.hp = hp\n    def take_hit(self, dmg):\n        self.hp -= dmg\n        print(f"{self.name} HP: {self.hp}")\n\np = Player("Alex")\np.take_hit(20)`,
        output: `Alex HP: 80`
      };
    }
    if (stage === "college") {
      return {
        code: `class Student:\n    def __init__(self, name, roll):\n        self.name = name\n        self.roll = roll\n    def display(self):\n        print(f"Student: {self.name} (Roll: {self.roll})")\n\ns = Student("Rahul", 101)\ns.display()`,
        output: `Student: Rahul (Roll: 101)`
      };
    }
    if (stage === "graduate") {
      return {
        code: `class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n    def apply_raise(self, percent):\n        self.salary += self.salary * (percent / 100)\n\ne = Employee("Anjali", 45000)\ne.apply_raise(10)\nprint(f"New Salary: \${e.salary:,.0f}")`,
        output: `New Salary: $49,500`
      };
    }
    return {
      code: `class UserService:\n    def __init__(self, db_conn):\n        self.db = db_conn\n    def get_user(self, uid):\n        return {"uid": uid, "name": "Anjali", "active": True}\n\ns = UserService("db_pool")\nprint(s.get_user(99))`,
      output: `{'uid': 99, 'name': 'Anjali', 'active': True}`
    };
  }

  // Default fallback code
  if (stage === "kid") {
    return {
      code: `# Playing with ${title}\nprint("Learning is fun! 🌟")\nprint("Let's master ${title}!")`,
      output: `Learning is fun! 🌟\nLet's master ${title}!`
    };
  }
  if (stage === "young") {
    return {
      code: `# Game script for ${title}\nplayer = "Alex"\nprint(f"[STATUS] {player} activated ${title}!")`,
      output: `[STATUS] Alex activated ${title}!`
    };
  }
  if (stage === "college") {
    return {
      code: `# Python script for ${title}\ndef run_demo():\n    print("Executing ${title} successfully")\n    return True\nrun_demo()`,
      output: `Executing ${title} successfully`
    };
  }
  if (stage === "graduate") {
    return {
      code: `# Business workflow for ${title}\nstatus = "SUCCESS"\nprint(f"[SYSTEM] ${title} status: {status}")`,
      output: `[SYSTEM] ${title} status: SUCCESS`
    };
  }
  return {
    code: `import sys\n# Production telemetry for ${title}\nprint(f"[METRIC] ${title} loaded cleanly with 0 errors.")`,
    output: `[METRIC] ${title} loaded cleanly with 0 errors.`
  };
}

// -------------------------------------------------------------
// LOCALIZED "WHAT IS IT?" & "WHY DO WE NEED IT?"
// -------------------------------------------------------------
// -------------------------------------------------------------
// LOCALIZED "WHAT IS IT?" & "WHY DO WE NEED IT?"
// -------------------------------------------------------------
const CONCEPT_KNOWLEDGE_MAP = {
  what_is_python: {
    en: {
      what: "Python is a versatile, high-level, human-readable programming language created by Guido van Rossum, renowned for its clean syntax and massive ecosystem.",
      why: "We need Python because its English-like syntax lets beginners and experts build games, web servers, AI models, and automation scripts with fewer lines of code."
    },
    te_en: {
      what: "Python anedi Guido van Rossum create chesina high-level, easy-to-read programming language. Idi English laaga chala simple ga untundi.",
      why: "Python enduku ante, complex code lekunda simple lines tho games, websites, automation, and AI applications build cheyyachu."
    },
    te: {
      what: "పైథాన్ అనేది గైడో వాన్ రోసమ్ రూపొందించిన సులభమైన, శక్తివంతమైన ప్రోగ్రామింగ్ భాష. దీని కోడ్ ఇంగ్లీష్ లాగా చాలా స్పష్టంగా ఉంటుంది.",
      why: "మనం తక్కువ లైన్ల కోడ్‌తో గేమ్‌లు, వెబ్‌సైట్లు, కృత్రిమ మేధ (AI) మరియు ఆటోమేషన్ ప్రాజెక్టులను వేగంగా నిర్మించడానికి పైథాన్ అవసరం."
    },
    hi: {
      what: "पायथन एक सरल और शक्तिशाली हाई-लेवल प्रोग्रामिंग भाषा है जिसे समझना और सीखना बहुत आसान है।",
      why: "कम कोड में गेम्स, वेबसाइट्स, ऑटोमेशन और आर्टिफिशियल इंटेलिजेंस (AI) ऐप्स बनाने के लिए हमें पायथन की आवश्यकता होती है।"
    }
  },
  why_learn_python: {
    en: {
      what: "Python learning focuses on mastering a beginner-friendly language with top global job demand across software, data science, and AI.",
      why: "Learning Python gives you a superpower to automate tedious tasks, build web apps, analyze data, and enter high-growth tech careers."
    },
    te_en: {
      what: "Python nerchukoovadam ante world lo most in-demand language nerchukoni top tech jobs and exciting projects cheyyadam.",
      why: "Mana daily boring tasks ni automate cheyyadaniki, web apps and AI tools build cheyyadaniki Python chala avasaram."
    },
    te: {
      what: "పైథాన్ నేర్చుకోవడం ద్వారా ప్రపంచవ్యాప్తంగా అత్యధిక డిమాండ్ ఉన్న ప్రోగ్రామింగ్ నైపుణ్యాలను సులభంగా పొందవచ్చు.",
      why: "ఆటోమేషన్, డేటా సైన్స్, వెబ్ డెవలప్‌మెంట్ మరియు ఉద్యోగ అవకాశాల కోసం పైథాన్ నేర్చుకోవడం చాలా అవసరం."
    },
    hi: {
      what: "पायथन सीखना दुनिया की सबसे लोकप्रिय और आसान प्रोग्रामिंग भाषा में महारत हासिल करने का सबसे अच्छा तरीका है।",
      why: "अपने करियर को आगे बढ़ाने, डेटा साइंस और आधुनिक सॉफ्टवेयर बनाने के लिए पायथन सीखना बहुत जरूरी है।"
    }
  },
  where_python_used: {
    en: {
      what: "Python's application domains span Artificial Intelligence, Machine Learning, Web Backend (Django/FastAPI), Data Analysis, and DevOps.",
      why: "Knowing where Python is used helps you target your learning toward real-world industries like Netflix, Google, NASA, and Spotify."
    },
    te_en: {
      what: "Python ni Web Development, Artificial Intelligence, Data Science, Cyber Security, and Cloud Automation lo widely use chestharu.",
      why: "Google, YouTube, Netflix, Spotify lantivi Python use chesthayi kabatti, real-world applications create cheyyadaniki idi nerchukovali."
    },
    te: {
      what: "పైథాన్ కృత్రిమ మేధ (AI), వెబ్ అప్లికేషన్లు, డేటా విశ్లేషణ, రోబోటిక్స్ మరియు సైబర్ సెక్యూరిటీలలో విస్తృతంగా ఉపయోగించబడుతుంది.",
      why: "ప్రపంచంలోని పెద్ద కంపెనీలు (Google, Netflix, NASA) తమ సాఫ్ట్‌వేర్ కోసం పైథాన్‌ను ఎందుకు వాడుతున్నాయో అర్థం చేసుకోవడం ముఖ్యం."
    },
    hi: {
      what: "पायथन का उपयोग AI, वेब डेवलपमेंट, डेटा साइंस, गेमिंग और रोबोटिक्स जैसी कई प्रमुख तकनीकों में होता है।",
      why: "गूगल, नेटफ्लिक्स और नासा जैसी शीर्ष कंपनियों में काम करने और आधुनिक तकनीक समझने के लिए यह जानना आवश्यक है।"
    }
  },
  installing_python: {
    en: {
      what: "Python installation sets up the CPython runtime interpreter and standard library on your operating system from python.org.",
      why: "You need the Python interpreter installed so your computer can understand, translate, and execute `.py` source files."
    },
    te_en: {
      what: "Python installation ante python.org nunchi official Python interpreter software ni mana computer lo setup cheyyadam.",
      why: "Computer mana Python code ni understand cheskoni run cheyyalante Python interpreter install cheyyadam compulsory."
    },
    te: {
      what: "పైథాన్ ఇన్‌స్టాలేషన్ అంటే మీ కంప్యూటర్‌లో పైథాన్ ఇంటర్‌ప్రెటర్‌ను సెటప్ చేసి కోడ్ రన్ అయ్యేలా చేయడం.",
      why: "మనం రాసే పైథాన్ కోడ్‌ను కంప్యూటర్ అర్థం చేసుకొని సరైన ఫలితాన్ని ఇవ్వడానికి ఇన్‌స్టాలేషన్ తప్పనిసరి."
    },
    hi: {
      what: "पायथन इंस्टॉलेशन का मतलब अपने कंप्यूटर में पायथन सॉफ्टवेयर को डाउनलोड और सेटअप करना है।",
      why: "ताकि आपका कंप्यूटर पायथन कोड को समझ सके और आपके निर्देशों को सही से चला सके।"
    }
  },
  python_idle_editor: {
    en: {
      what: "An editor like Python IDLE or VS Code is a dedicated digital workspace designed for typing, syntax highlighting, and running Python code.",
      why: "We need code editors to catch typos with color-coding, auto-complete syntax, and debug programs comfortably."
    },
    te_en: {
      what: "IDLE or VS Code anedi Python code rayadaniki, errors chusukodaniki, and run cheyyadaniki use chese smart software tool.",
      why: "Plain Notepad lo code raste errors teliyavu, ade IDLE lo raste colors and auto-complete tho fast ga code rayachu."
    },
    te: {
      what: "IDLE లేదా VS Code అనేది పైథాన్ కోడ్ రాయడానికి, సరిదిద్దడానికి మరియు అమలు చేయడానికి ఉపయోగించే ఒక ఎడిటర్.",
      why: "కోడ్‌లో తప్పులను రంగులతో సులభంగా గుర్తించి వేగంగా ప్రోగ్రామింగ్ చేయడానికి ఎడిటర్ అవసరం."
    },
    hi: {
      what: "IDLE या कोड एडिटर एक ऐसा सॉफ्टवेयर है जहाँ हम पायथन कोड लिखते हैं और उसे आसानी से चलाते हैं।",
      why: "ताकि कोड में गलतियाँ तुरंत पकड़ सकें और प्रोग्राम को बिना किसी परेशानी के रन कर सकें।"
    }
  },
  first_program: {
    en: {
      what: "A First Python Program typically uses the `print()` function to display 'Hello, World!' onto the standard console screen.",
      why: "Running your first program verifies that your Python environment is working correctly and marks the start of your programming journey."
    },
    te_en: {
      what: "First Python Program ante mana screen paina `print('Hello, World!')` rasi output chudadam.",
      why: "Python environment correct ga pani chestundo ledo check cheyyadaniki and coding journey start cheyyadaniki idi first step."
    },
    te: {
      what: "మొదటి పైథాన్ ప్రోగ్రామ్ అంటే సాధారణంగా స్క్రీన్‌పై `print('Hello, World!')` సందేశాన్ని ప్రదర్శించడం.",
      why: "పైథాన్ సరిగ్గా పనిచేస్తుందో లేదో పరీక్షించడానికి మరియు మొదటి విజయాన్ని సాధించడానికి ఇది అవసరం."
    },
    hi: {
      what: "पहला पायथन प्रोग्राम कंप्यूटर स्क्रीन पर 'Hello, World!' मैसेज दिखाने का एक पारंपरिक और सरल अभ्यास है।",
      why: "यह पुष्टि करने के लिए कि पायथन आपके सिस्टम पर सही से काम कर रहा है।"
    }
  },
  python_syntax: {
    en: {
      what: "Python Syntax represents the set of grammatical rules and clean indentation standards governing valid Python source code.",
      why: "Consistent syntax ensures that the Python interpreter parses your logic without IndentationError or SyntaxError."
    },
    te_en: {
      what: "Python Syntax ante Python language lo code rayadaniki unde grammar and indentation rules.",
      why: "Rules follow avvakapothe computer confuse ayyi SyntaxError isthundi, anduke clean syntax chala important."
    },
    te: {
      what: "పైథాన్ సింటాక్స్ అంటే పైథాన్‌లో కోడ్ రాయడానికి పాటించాల్సిన వ్యాకరణ మరియు ఇండెంటేషన్ నియమాలు.",
      why: "కోడ్‌లో ఎర్రర్లు రాకుండా మరియు ప్రోగ్రామ్ సజావుగా సాగడానికి సరైన సింటాక్స్ అవసరం."
    },
    hi: {
      what: "पायथन सिंटैक्स कोड लिखने के वे नियम और तरीके हैं जिन्हें पायथन समझता है।",
      why: "गलतियों से बचने और कोड को साफ-सुथरा व पठनीय बनाने के लिए सही सिंटैक्स जरूरी है।"
    }
  },
  print_func: {
    en: {
      what: "The `print()` function is Python's built-in tool to output text, numbers, and evaluated expressions to the console.",
      why: "We need `print()` to view outputs, communicate with users, and inspect variable states during debugging."
    },
    te_en: {
      what: "`print()` anedi Python lo screen paina text or calculation results ni display cheyyadaniki use chese built-in function.",
      why: "Mana program em chestundo screen paina chudataniki and debug cheyyadaniki `print()` chala avasaram."
    },
    te: {
      what: "`print()` అనేది పైథాన్‌లో టెక్స్ట్ లేదా సమాచారాన్ని స్క్రీన్‌పై చూపించడానికి వాడే ముఖ్యమైన ఫంక్షన్.",
      why: "మనం చేసే గణనల ఫలితాలు స్క్రీన్‌పై కనిపించడానికి `print()` ఫంక్షన్ అవసరం."
    },
    hi: {
      what: "`print()` पायथन का एक बुनियादी फंक्शन है जो स्क्रीन पर किसी भी टेक्स्ट या आउटपुट को दिखाता है।",
      why: "प्रोग्राम के नतीजों को देखने और जांचने के लिए हमें `print()` की जरूरत होती है।"
    }
  },
  comments: {
    en: {
      what: "Comments are explanatory notes in your code starting with `#` that Python completely ignores during execution.",
      why: "Comments explain the 'why' behind complex logic so teammates and your future self can understand and maintain the code."
    },
    te_en: {
      what: "Comments ante `#` tho modaletti rase notes. Python veetini execute cheyyakunda ignore chesthundi.",
      why: "Code enduku rasamo vere developers ki and manaki tarvata ardam kavataniki comments rayali."
    },
    te: {
      what: "కామెంట్స్ అనేవి `#` గుర్తుతో రాసే వివరణాత్మక గమనికలు. పైథాన్ వీటిని రన్ చేయకుండా వదిలేస్తుంది.",
      why: "కోడ్ ఎందుకు రాశామో భవిష్యత్తులో సులభంగా అర్థం చేసుకోవడానికి కామెంట్స్ అవసరం."
    },
    hi: {
      what: "कमेंट्स `#` से शुरू होने वाली वो लाइनें हैं जिन्हें पायथन रन नहीं करता, ये सिर्फ पढ़ने के लिए होती हैं।",
      why: "कोड का उद्देश्य समझाने और भविष्य में आसानी से याद रखने के लिए कमेंट्स लिखे जाते हैं।"
    }
  },
  variables: {
    en: {
      what: "A Variable is a named reference bound to an object stored in computer memory, holding data like names, scores, and prices.",
      why: "Variables allow programs to store, retrieve, manipulate, and update information dynamically during execution."
    },
    te_en: {
      what: "Variable anedi computer memory lo data (names, numbers, scores) ni store cheskune oka named box lantidi.",
      why: "Values ni gurthupettukoni, calculations chesi, data ni update cheyyadaniki variables compulsory ga kavali."
    },
    te: {
      what: "వేరియబుల్ అనేది కంప్యూటర్ మెమరీలో సమాచారాన్ని (నంబర్లు, పేర్లు) భద్రపరచడానికి ఇచ్చే ఒక పేరు.",
      why: "సమాచారాన్ని నిల్వ చేయడానికి, మార్చడానికి మరియు ప్రోగ్రామ్‌లో ఎప్పుడైనా తిరిగి ఉపయోగించడానికి ఇది అవసరం."
    },
    hi: {
      what: "वेरिएबल मेमोरी में डेटा (जैसे नाम, स्कोर, संख्याएं) को सुरक्षित रखने का एक नाम दिया गया कंटेनर है।",
      why: "जानकारी को याद रखने और जरूरत पड़ने पर बदलने के लिए हमें वेरिएबल की जरूरत होती है।"
    }
  },
  constants: {
    en: {
      what: "Constants are identifiers whose assigned values remain fixed throughout program execution, written in UPPER_CASE by PEP 8 convention.",
      why: "Constants prevent accidental overwrites of critical values like `PI = 3.14159` or `MAX_CONNECTIONS = 100`."
    },
    te_en: {
      what: "Constants ante program mottham lo maarani fixed values (e.g. `PI = 3.14159`), veetini ALL CAPS lo rasthamu.",
      why: "Important fixed values ni accidentally evaru marchakunda undadaniki constants use chestham."
    },
    te: {
      what: "కాన్‌స్టాంట్స్ అనేవి ప్రోగ్రామ్ మొత్తం మారకుండా ఉండే స్థిరమైన విలువలు (ఉదాహరణకు `PI = 3.14159`).",
      why: "ముఖ్యమైన స్థిర విలువలను అనుకోకుండా మార్చకుండా కాపాడటానికి ఇవి అవసరం."
    },
    hi: {
      what: "कॉन्स्टेंट्स ऐसी निश्चित वैल्यू होती हैं जो पूरे प्रोग्राम में नहीं बदलतीं (जैसे `PI = 3.14159`)।",
      why: "महत्वपूर्ण मानों को गलती से बदलने से रोकने के लिए कॉन्स्टेंट्स का उपयोग किया जाता है।"
    }
  },
  naming_variables: {
    en: {
      what: "Variable Naming rules dictate valid identifier characters (letters, numbers, underscores) and snake_case formatting standards.",
      why: "Clean, descriptive naming eliminates ambiguity and prevents fatal SyntaxErrors caused by illegal characters or reserved keywords."
    },
    te_en: {
      what: "Naming Variables ante variables ki proper names pettadaniki unde rules (snake_case, no spaces, numbers tho start avvakudadu).",
      why: "Meaningful names unte code chadavagane ardam avtundi, lekapothe confusing ga untundi."
    },
    te: {
      what: "వేరియబుల్ నామకరణం అంటే పేర్లను సరైన నియమాలతో (snake_case, అక్షరాలు, అండర్‌స్కోర్) ఎంచుకోవడం.",
      why: "కోడ్ సులభంగా అర్థం కావడానికి మరియు ఎర్రర్లు రాకుండా ఉండటానికి సరైన పేర్లు పెట్టడం ముఖ్యం."
    },
    hi: {
      what: "वेरिएबल नेमिंग का मतलब है वेरिएबल्स के लिए सही और मान्य नाम चुनने के नियम (snake_case)।",
      why: "ताकि कोड पढ़ने में आसान हो और गलत नामों की वजह से कोई एरर न आए।"
    }
  },
  data_types: {
    en: {
      what: "Data Types categorize the classification of values in Python, defining what operations can be performed on them (numbers, text, booleans).",
      why: "Data types ensure mathematical and logical operations are executed safely without type incompatibility errors."
    },
    te_en: {
      what: "Data Types ante manam store chese data type enti ani (number ah, text ah, True/False ah) classify cheyyadam.",
      why: "Number tho addition cheyyachu, text tho sentences create cheyyachu. Edi em cheyyalo teliyadaniki data types kavali."
    },
    te: {
      what: "డేటా రకాలు (Data Types) అంటే మనం ఉపయోగించే విలువలు ఏ రకానికి చెందినవో (సంఖ్యలు, అక్షరాలు, నిజం/అబద్ధం) తెలిపే వర్గీకరణ.",
      why: "సమాచారంపై సరైన గణిత లేదా తార్కిక పనులను చేయడానికి డేటా రకాలు అవసరం."
    },
    hi: {
      what: "डेटा टाइप्स बताते हैं कि कोई वैल्यू किस प्रकार की है (जैसे नंबर, टेक्स्ट या बूलियन)।",
      why: "ताकि कंप्यूटर समझ सके कि उस डेटा के साथ क्या गणित या ऑपरेशन करना है।"
    }
  },
  type_int: {
    en: {
      what: "`int` represents signed integers (whole numbers positive, negative, or zero) with arbitrary precision in Python.",
      why: "We need `int` to count items, track indices, manage loops, and perform exact discrete arithmetic without rounding errors."
    },
    te_en: {
      what: "`int` (Integer) ante complete whole numbers like 10, 50, -5, 0 (decimals undavu).",
      why: "Countings, roll numbers, age, and game scores ni track cheyyadaniki `int` vaadathamu."
    },
    te: {
      what: "`int` అనేది దశాంశాలు లేని పూర్తి సంఖ్యలను (10, -5, 100) సూచించే డేటా రకం.",
      why: "వస్తువులను లెక్కించడానికి, స్కోర్లు మరియు వయస్సు నమోదు చేయడానికి `int` అవసరం."
    },
    hi: {
      what: "`int` पूर्णांक (बिना दशमलव वाली पूरी संख्याएँ जैसे 5, 100, -20) को दर्शाता है।",
      why: "गिनती करने, उम्र और स्कोर जैसी संख्याओं को सटीक रूप से रखने के लिए `int` चाहिए।"
    }
  },
  type_float: {
    en: {
      what: "`float` represents real numbers containing fractional decimal points (e.g. 3.14, 99.95, -0.5).",
      why: "We need `float` for prices, measurements, physics simulations, and scientific computations requiring decimal precision."
    },
    te_en: {
      what: "`float` ante decimal point unna numbers (e.g. 19.99, 3.14, 85.5).",
      why: "Product prices, percentages, weights, and measurements calculate cheyyadaniki `float` avasaram."
    },
    te: {
      what: "`float` అనేది దశాంశ బిందువుతో ఉండే సంఖ్యలను (19.99, 3.14) సూచించే డేటా రకం.",
      why: "ధరలు, కొలతలు, శాతం మరియు శాస్త్రీయ గణనల కోసం `float` అవసరం."
    },
    hi: {
      what: "`float` दशमलव वाली संख्याओं (जैसे 3.14, 99.50) को दर्शाता है।",
      why: "कीमतों, प्रतिशत और माप जैसी दशमलव वाली गणनाओं के लिए `float` जरूरी है।"
    }
  },
  type_string: {
    en: {
      what: "A `string` (`str`) is an immutable, ordered sequence of Unicode characters enclosed in single, double, or triple quotes.",
      why: "Strings are essential for representing textual information like usernames, messages, URLs, and formatted documents."
    },
    te_en: {
      what: "`string` (`str`) ante quotes (' ' or \" \") lo unna text data (e.g. 'Hello', 'Rahul').",
      why: "User names, passwords, messages, and emails display cheyyadaniki strings vadatham."
    },
    te: {
      what: "`string` అనేది కొటేషన్లలో ఉండే అక్షరాలు లేదా వాక్యాల సమాహారం (ఉదాహరణ: 'నమస్కారం').",
      why: "పేర్లు, సందేశాలు మరియు వెబ్‌సైట్ టెక్స్ట్‌లను చూపించడానికి స్ట్రింగ్స్ అవసరం."
    },
    hi: {
      what: "`string` कोट्स में लिखा गया अक्षरों और शब्दों का समूह (टेक्स्ट) है।",
      why: "नाम, संदेश, पते और किसी भी प्रकार की लिखित जानकारी के लिए स्ट्रिंग जरूरी है।"
    }
  },
  type_boolean: {
    en: {
      what: "A `boolean` (`bool`) is a logical data type that holds one of exactly two binary values: `True` or `False`.",
      why: "Booleans power all conditional decision making, loop guards, and status flags in software logic."
    },
    te_en: {
      what: "`boolean` (`bool`) ante kevalam rendu values matrame untayi: `True` (nijam) leda `False` (abaddham).",
      why: "Conditions check cheyyadaniki (e.g. user logged in ah kaada, game over ah kaada) booleans vaadathamu."
    },
    te: {
      what: "`boolean` అనేది కేవలం రెండే విలువలని (`True` లేదా `False`) కలిగి ఉండే తార్కిక డేటా రకం.",
      why: "నిర్ణయాలు తీసుకోవడానికి మరియు షరతులు నిజమో కాదో తేల్చడానికి బూలియన్స్ అవసరం."
    },
    hi: {
      what: "`boolean` केवल दो मान रखता है: `True` (सही) या `False` (गलत)।",
      why: "शर्तों की जांच करने और सही-गलत का फैसला लेने के लिए बूलियन का उपयोग होता है।"
    }
  },
  type_func: {
    en: {
      what: "The built-in `type()` function inspects and returns the exact runtime class/type of any given object.",
      why: "We use `type()` during debugging and data validation to verify variables hold the expected data structure before processing."
    },
    te_en: {
      what: "`type()` anedi oka variable lo unna value type (int ah, float ah, str ah) telusukovadaniki use chese function.",
      why: "Code lo data type mismatch errors lekunda verify cheyyadaniki `type()` function chala useful."
    },
    te: {
      what: "`type()` అనేది ఏదైనా వేరియబుల్ ఏ డేటా రకానికి చెందినదో తెలుసుకోవడానికి ఉపయోగించే ఫంక్షన్.",
      why: "డేటా రకాన్ని తనిఖీ చేసి తప్పులు జరగకుండా చూసుకోవడానికి ఇది అవసరం."
    },
    hi: {
      what: "`type()` फंक्शन किसी भी वैल्यू का डेटा टाइप (int, str, float) पता लगाने में मदद करता है।",
      why: "डेटा की सही पहचान करने और गलतियों से बचने के लिए इसका उपयोग किया जाता है।"
    }
  },
  type_conversion: {
    en: {
      what: "Type Conversion (type casting) transforms a value from one data type into another using functions like `int()`, `float()`, and `str()`.",
      why: "We need type conversion because `input()` returns text, which must be cast to `int` or `float` before doing arithmetic."
    },
    te_en: {
      what: "Type Conversion (casting) ante oka data type nunchi inkoka data type ki marchadam (e.g. text '50' ni number 50 ga marchadam).",
      why: "User input eppudu text format lo vastundi, calculations cheyyalante `int()` or `float()` ga convert cheyyali."
    },
    te: {
      what: "టైప్ కన్వర్షన్ అంటే ఒక డేటా రకాన్ని మరొక డేటా రకంగా మార్చడం (ఉదా: స్ట్రింగ్ నుండి నంబర్‌గా).",
      why: "యూజర్ ఇచ్చిన సమాచారంతో గణితం చేయడానికి దాన్ని నంబర్‌గా మార్చడం అవసరం."
    },
    hi: {
      what: "टाइप कन्वर्जन का मतलब एक डेटा टाइप को दूसरे डेटा टाइप में बदलना है (जैसे टेक्स्ट को नंबर में)।",
      why: "क्योंकि इनपुट से मिला टेक्स्ट सीधे गणितीय गणना में इस्तेमाल नहीं हो सकता।"
    }
  },
  input_func: {
    en: {
      what: "The `input()` function pauses program execution and captures a line of text entered by the user from the keyboard.",
      why: "We need `input()` to build interactive software that responds dynamically to human user choices and form entries."
    },
    te_en: {
      what: "`input()` function user keyboard nunchi enter chesina data ni read chesi mana program ki isthundi.",
      why: "User tho interact avvadaniki, valla name, age, choices teesukovadaniki `input()` function compulsory."
    },
    te: {
      what: "`input()` అనేది కీబోర్డ్ ద్వారా యూజర్ ఇచ్చే సమాచారాన్ని స్వీకరించే ఫంక్షన్.",
      why: "యూజర్‌తో సంభాషించడానికి మరియు వారి వివరాలు తీసుకోవడానికి ఇది అవసరం."
    },
    hi: {
      what: "`input()` फंक्शन कीबोर्ड से यूजर द्वारा टाइप की गई जानकारी को पढ़ने का काम करता है।",
      why: "यूजर से उसका नाम, उम्र या डेटा लेकर प्रोग्राम को इंटरएक्टिव बनाने के लिए यह जरूरी है।"
    }
  },
  output_formatting: {
    en: {
      what: "Output Formatting uses f-strings (`f'{name} is {age}'`) and format specifiers to present dynamic data cleanly.",
      why: "Clean formatting produces readable reports, rounded currency decimals, and elegant user-facing messages."
    },
    te_en: {
      what: "Output Formatting (f-strings) ante variables ni text lo neat ga combine chesi beautiful message print cheyyadam.",
      why: "Decimal numbers ni round cheyyadaniki and professional looking output ivvadaniki f-strings chala neat ga untayi."
    },
    te: {
      what: "అవుట్‌పుట్ ఫార్మాటింగ్ (f-strings) అంటే వేరియబుల్స్ మరియు టెక్స్ట్‌ను చక్కగా కలిపి ప్రదర్శించే పద్ధతి.",
      why: "ఫలితాలను అందంగా మరియు స్పష్టంగా చూపించడానికి ఇది అవసరం."
    },
    hi: {
      what: "आउटपुट फॉर्मेटिंग (f-strings) वेरिएबल्स और टेक्स्ट को मिलाकर सुंदर और साफ आउटपुट दिखाने का तरीका है।",
      why: "रिपोर्ट्स और मैसेजेस को पेशेवर और साफ दिखाने के लिए यह बहुत उपयोगी है।"
    }
  }
};

function getLocalizedWhatIsIt(lang, stage, title, concept) {
  const c = CONCEPT_KNOWLEDGE_MAP[concept];
  if (c) {
    if (lang === "english") return c.en.what;
    if (lang === "english-telugu") return c.te_en.what;
    if (lang === "telugu") return c.te.what;
    if (lang === "hindi") return c.hi.what;
  }

  const t = title.toLowerCase();
  // Concept heuristics for other sections
  if (t.includes("operator")) {
    if (lang === "english") return `${title} is a specialized symbol in Python used to perform mathematical, logical, or comparison operations on operands.`;
    if (lang === "english-telugu") return `${title} anedi Python lo calculations and logic compare cheyyadaniki use chese special symbols.`;
    if (lang === "telugu") return `${title} అనేది పైథాన్‌లో గణిత మరియు తార్కిక పనులను చేయడానికి ఉపయోగించే ప్రత్యేక చిహ్నం.`;
    return `${title} पायथन में गणना और तुलना करने के लिए इस्तेमाल किया जाने वाला एक विशेष प्रतीक है।`;
  }

  if (t.includes("loop") || t.includes("range")) {
    if (lang === "english") return `${title} is a control-flow construct that repeatedly executes a block of code while a condition is met or over a sequence.`;
    if (lang === "english-telugu") return `${title} anedi oka block of code ni sequence lo repeat ga run cheyyadaniki use chese loop structure.`;
    if (lang === "telugu") return `${title} అనేది ఒక పనిని మళ్లీ మళ్లీ వరుసగా చేయడానికి ఉపయోగించే నియంత్రణ సాధనం.`;
    return `${title} एक ही कोड को बार-बार दोहराने के लिए इस्तेमाल होने वाला लूप है।`;
  }

  if (t.includes("if") || t.includes("condition") || t.includes("decision")) {
    if (lang === "english") return `${title} evaluates boolean expressions to guide code execution along different conditional branches.`;
    if (lang === "english-telugu") return `${title} anedi condition True or False batti code execution ni branch chese decision structure.`;
    if (lang === "telugu") return `${title} అనేది షరతులను బట్టి ప్రోగ్రామ్ ఏ దారిలో నడవాలో నిర్ణయించే సాధనం.`;
    return `${title} शर्तों के आधार पर यह तय करता है कि कौन सा कोड कब चलेगा।`;
  }

  if (t.includes("function") || t.includes("lambda") || t.includes("argument")) {
    if (lang === "english") return `${title} defines a reusable, modular block of code designed to perform a specific task when called.`;
    if (lang === "english-telugu") return `${title} anedi specific task cheyyadaniki create chese reusable code block.`;
    if (lang === "telugu") return `${title} అనేది ఒక పనిని చేయడానికి రాసే పునర్వినియోగ కోడ్ బ్లాక్.`;
    return `${title} एक बार लिखकर बार-बार इस्तेमाल किया जाने वाला कोड ब्लॉक है।`;
  }

  if (t.includes("list") || t.includes("tuple") || t.includes("set") || t.includes("dict")) {
    if (lang === "english") return `${title} is a built-in Python collection data structure used to group, organize, and manage multiple related elements.`;
    if (lang === "english-telugu") return `${title} anedi multiple values ni group chesi store cheskune Python collection structure.`;
    if (lang === "telugu") return `${title} అనేది సమాచారాన్ని సమూహంగా నిర్వహించడానికి ఉపయోగించే డేటా స్ట్రక్చర్.`;
    return `${title} एक साथ कई डेटा एलिमेंट्स को व्यवस्थित रखने का डेटा स्ट्रक्चर है।`;
  }

  if (t.includes("class") || t.includes("object") || t.includes("oop") || t.includes("inheritance")) {
    if (lang === "english") return `${title} is an Object-Oriented Programming paradigm concept that bundles data and behavior into structured models.`;
    if (lang === "english-telugu") return `${title} anedi Object-Oriented Programming lo data and functions ni oka structured blueprint ga create chese concept.`;
    if (lang === "telugu") return `${title} అనేది ఆబ్జెక్ట్ ఓరియెంటెడ్ ప్రోగ్రామింగ్‌లో డేటాను నమూనాలుగా మార్చే పద్ధతి.`;
    return `${title} ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग का एक महत्वपूर्ण सिद्धांत है।`;
  }

  if (t.includes("file") || t.includes("read") || t.includes("write")) {
    if (lang === "english") return `${title} enables persistent storage operations to read, write, and manipulate external files on disk.`;
    if (lang === "english-telugu") return `${title} tho computer disk lo unna files ni read cheyyachu, write cheyyachu, and save cheyyachu.`;
    if (lang === "telugu") return `${title} అనేది కంప్యూటర్‌లోని ఫైళ్లను తెరవడానికి, చదవడానికి మరియు భద్రపరచడానికి ఉపయోగపడుతుంది.`;
    return `${title} कंप्यूटर में फाइलों को पढ़ने और सुरक्षित लिखने का तरीका है।`;
  }

  if (t.includes("api") || t.includes("request") || t.includes("json")) {
    if (lang === "english") return `${title} facilitates structured data exchange and network communication between distributed software applications.`;
    if (lang === "english-telugu") return `${title} anedi internet lo server and client madhya data exchange cheyyadaniki use avtundi.`;
    if (lang === "telugu") return `${title} అనేది సర్వర్లతో సమాచారాన్ని ఇచ్చిపుచ్చుకోవడానికి ఉపయోగపడే కమ్యూనికేషన్ పద్ధతి.`;
    return `${title} इंटरनेट पर सर्वर और ऐप्स के बीच डेटा ट्रांसफर करने का माध्यम है।`;
  }

  if (lang === "english") {
    return `${title} is an essential Python concept for designing modular, readable, and production-ready applications.`;
  }
  if (lang === "english-telugu") {
    return `${title} anedi Python lo neat ga and scalable ga code develop cheyyadaniki chala important topic.`;
  }
  if (lang === "telugu") {
    return `${title} అనేది పైథాన్‌లో నాణ్యమైన మరియు వేగవంతమైన సాఫ్ట్‌వేర్ రాయడానికి ముఖ్యమైన అంశం.`;
  }
  return `${title} पायथन में बेहतरीन और कुशल कोड लिखने के लिए एक अनिवार्य विषय है।`;
}

function getLocalizedWhyDoWeNeedIt(lang, stage, title, concept) {
  const c = CONCEPT_KNOWLEDGE_MAP[concept];
  if (c) {
    if (lang === "english") return c.en.why;
    if (lang === "english-telugu") return c.te_en.why;
    if (lang === "telugu") return c.te.why;
    if (lang === "hindi") return c.hi.why;
  }

  const t = title.toLowerCase();
  if (t.includes("operator")) {
    if (lang === "english") return `We need ${title} to evaluate mathematical computations, enforce boolean rules, and compare program values.`;
    if (lang === "english-telugu") return `${title} calculations and logic check cheyyadaniki prathi software lo chala avasaram.`;
    if (lang === "telugu") return `గణిత లెక్కలు మరియు తార్కిక సరిపోలికలు చేయడానికి ${title} అవసరం.`;
    return `गणना करने और सही परिणाम पाने के लिए हमें ${title} की जरूरत होती है।`;
  }

  if (t.includes("loop")) {
    if (lang === "english") return `We need ${title} to automate repetitive tasks across thousands of items without manually copying code.`;
    if (lang === "english-telugu") return `Code ni repeat ga rayakunda lakshaladi items ni fast ga process cheyyadaniki loops kavali.`;
    if (lang === "telugu") return `ఒకే పనిని పదే పదే రాయకుండా వేగంగా పూర్తి చేయడానికి ${title} అవసరం.`;
    return `बार-बार कोड लिखने से बचने और डेटा प्रोसेस करने के लिए हमें ${title} की आवश्यकता होती है।`;
  }

  if (t.includes("if") || t.includes("condition")) {
    if (lang === "english") return `We need ${title} so programs can react dynamically and make smart decisions based on changing real-time data.`;
    if (lang === "english-telugu") return `Data and user inputs batti smart decisions teesukovadaniki ${title} avasaram.`;
    if (lang === "telugu") return `పరిస్థితులను బట్టి సరైన నిర్ణయాలు తీసుకోవడానికి ${title} అవసరం.`;
    return `बदलते डेटा के अनुसार सही निर्णय लेने के लिए ${title} जरूरी है।`;
  }

  if (t.includes("function")) {
    if (lang === "english") return `We need ${title} to structure large codebases into reusable, testable, and isolated modules.`;
    if (lang === "english-telugu") return `Code ni clean ga divide chesi malli malli use cheskovadaniki functions chala avasaram.`;
    if (lang === "telugu") return `కోడ్‌ను శుభ్రంగా మరియు మళ్లీ ఉపయోగించుకునేలా చేయడానికి ${title} అవసరం.`;
    return `कोड को साफ और दोबारा इस्तेमाल करने योग्य बनाने के लिए ${title} की जरूरत होती है।`;
  }

  if (lang === "english") {
    return `We need ${title} to build reliable software architectures that scale cleanly in production environments.`;
  }
  if (lang === "english-telugu") {
    return `Real-world production applications lo scalable and bug-free code rayadaniki ${title} avasaram.`;
  }
  if (lang === "telugu") {
    return `వాస్తవ ప్రపంచ ప్రాజెక్టులలో బగ్‌లు లేని నాణ్యమైన సాఫ్ట్‌వేర్ రాయడానికి ${title} అవసరం.`;
  }
  return `रियल-वर्ल्ड ऐप्स में बिना गलतियों के मजबूत कोड लिखने के लिए हमें ${title} की आवश्यकता होती है।`;
}

// -------------------------------------------------------------
// LOCALIZED INTRODUCTIONS
// -------------------------------------------------------------
function getLocalizedIntro(lang, stage, title) {
  if (lang === "english") {
    if (stage === "kid") return `Let's play and learn about ${title} with fun toys and friendly stories!`;
    if (stage === "young") return `Level up your coding skills with ${title} for your games and apps!`;
    if (stage === "college") return `Understand the core principles, syntax, and logic behind ${title}.`;
    if (stage === "graduate") return `See how ${title} is used in real business applications, payroll, and databases.`;
    return `Master ${title} with clean code, best practices, and interview-ready concepts.`;
  }
  if (lang === "english-telugu") {
    if (stage === "kid") return `Manam ippudu ${title} gurinchi chala fun ga, toys tho stories tho nerchukundam!`;
    if (stage === "young") return `Nee games lo super powers add cheyyadaniki ${title} ni easy ga nerchukundam!`;
    if (stage === "college") return `${title} ante enti, adi program lo ela work avtundo simple ga telusukundam.`;
    if (stage === "graduate") return `Real-world company projects lo ${title} ni ela use chestharo practical ga chudam.`;
    return `Production systems lo ${title} best practices and interview answers ni friend laga discuss cheddam.`;
  }
  if (lang === "telugu") {
    if (stage === "kid") return `${title} గురించి సరదా కథలు మరియు బొమ్మలతో సులభంగా నేర్చుకుందాం!`;
    if (stage === "young") return `గేమ్స్ మరియు ప్రాజెక్ట్స్ కోసం ${title} ని సులభంగా నేర్చుకుందాం!`;
    if (stage === "college") return `${title} యొక్క ముఖ్యమైన పద్ధతులు మరియు సూత్రాలను స్పష్టంగా అర్థం చేసుకుందాం.`;
    if (stage === "graduate") return `రియల్-వరల్డ్ సాఫ్ట్‌వేర్‌లో ${title} ని ఎలా ఉపయోగిస్తారో నేర్చుకుందాం.`;
    return `సాఫ్ట్‌వేర్ డెవలప్‌మెంట్‌లో ${title} ఎలా పనిచేస్తుందో స్పష్టంగా తెలుసుకుందాం.`;
  }
  // Hindi
  if (stage === "kid") return `${title} को प्यारे खिलौनों और कहानियों के साथ आसानी से सीखें!`;
  if (stage === "young") return `गेम्स और कोडिंग के लिए ${title} को मजेदार तरीके से समझें!`;
  if (stage === "college") return `${title} के मुख्य नियमों और काम करने के तरीके को आसानी से समझें।`;
  if (stage === "graduate") return `असली सॉफ्टवेयर और बिजनेस ऐप्स में ${title} का उपयोग कैसे होता है, जानिए।`;
  return `प्रोडक्शन कोडिंग और इंटरव्यू के लिए ${title} को आसान भाषा में समझें।`;
}

// -------------------------------------------------------------
// LOCALIZED EXPLANATIONS (8 NARRATIVES)
// -------------------------------------------------------------
function getLocalizedExplanations(lang, stage, title, concept, codeSnippets) {
  const t = title.toLowerCase();
  const isWhatIsPython = t.includes("what is python") || t.includes("why learn python") || t.includes("where python is used");
  const isVar = t.includes("variable") || t.includes("constant") || t.includes("naming");
  const isLoop = t.includes("loop") || t.includes("range");
  const isCond = t.includes("condition") || t.includes("if") || t.includes("else");
  const isFunc = t.includes("function") || t.includes("lambda") || t.includes("argument");
  const isOOP = t.includes("class") || t.includes("object") || t.includes("oop") || t.includes("inheritance");

  if (lang === "english") {
    if (isWhatIsPython) {
      if (stage === "kid") {
        return {
          simple: "Python is a friendly robot language that lets you talk to your computer with easy English words!",
          story: "Imagine you have a magical puppy named Python. When you say 'print(\"Play! 🐾\")' it happily runs and does magic on screen!",
          realLife: "Just like telling your voice assistant to play a cartoon, Python tells the computer to run your fun games.",
          friend: "Hey buddy! Python is the easiest coding language in the world. You write simple words and see instant magic!",
          visual: "┌───────────────────────┐\n│  You: print('Hello')  │ ──> 🐍 Python Robot ──> Screen: Hello!\n└───────────────────────┘",
          stepByStep: "1. Type a friendly command\n2. Python understands it\n3. The computer runs it\n4. You see your creations come to life!",
          exampleFirst: `${codeSnippets.code}\nLook how easy it is to print a greeting!`,
          analogy: "Python is like building with colorful LEGO bricks."
        };
      }
      if (stage === "young") {
        return {
          simple: "Python is the world's favorite programming language for building video games, YouTube bots, and smart apps.",
          story: "Alex wanted to make a game where a hero collects gems. With Python, he created the player character and movement logic in just a few clean lines.",
          realLife: "The servers behind Instagram, YouTube, and Netflix run on Python to stream millions of videos every day.",
          friend: "Coding with Python feels just like chatting in English! You can write scripts in minutes without confusing symbols.",
          visual: "┌───────────────────────┐\n│ Clean Python Script   │ ──> ⚙️ Python Engine ──> 🚀 Working Game App\n└───────────────────────┘",
          stepByStep: "1. Write clear instructions in Python\n2. Run the script in the terminal\n3. Watch your game logic execute!",
          exampleFirst: `${codeSnippets.code}\nSee how clean and readable Python code looks!`,
          analogy: "Python is like a universal game controller for all computers."
        };
      }
      if (stage === "college") {
        return {
          simple: "Python is an interpreted, high-level language renowned for developer productivity, clean syntax, and a vast standard library.",
          story: "During an algorithm lab, Priya compared C++ and Python. A task taking 50 lines in C++ took only 4 lines in Python, letting her focus entirely on algorithm logic.",
          realLife: "Data scientists at NASA and CERN use Python notebooks to analyze astrophysical data and satellite imagery.",
          friend: "Python emphasizes code readability and minimalism (PEP 20 Zen of Python), eliminating boilerplate like manual memory allocation.",
          visual: "┌───────────────────┐\n│ Source Code (.py) │ ──> CPython Bytecode (.pyc) ──> Python Virtual Machine (PVM)\n└───────────────────┘",
          stepByStep: "1. Write source code with indentation\n2. Interpreter compiles to bytecode\n3. Virtual machine evaluates instructions\n4. Output streams to standard stdout.",
          exampleFirst: `${codeSnippets.code}\nNotice the absence of boilerplate code and curly braces.`,
          analogy: "Python is like having an intelligent high-speed calculator that understands conversational instructions."
        };
      }
      if (stage === "graduate") {
        return {
          simple: "Python is an enterprise-grade programming language powering scalable backend APIs, data pipelines, and AI engineering.",
          story: "At a fintech startup, Anjali used Python with FastAPI and PostgreSQL to process 100,000 payment transactions per second with automated exception tracking.",
          realLife: "Spotify uses Python for backend microservices and machine learning models that generate personalized music recommendations.",
          friend: "In enterprise development, Python allows rapid prototyping and transitions seamlessly into containerized microservice architectures.",
          visual: "┌───────────────────────┐     gunicorn / uvicorn     ┌────────────────────────┐\n│ Client HTTPS Requests │ ─────────────────────────> │ FastAPI / Python Svc   │\n└───────────────────────┘                            └────────────────────────┘",
          stepByStep: "1. Structure modules with dependency injection\n2. Build endpoints using asynchronous coroutines\n3. Connect to database connection pools\n4. Deploy with Docker and Kubernetes.",
          exampleFirst: `${codeSnippets.code}\nThis clean foundation scales directly to production microservices.`,
          analogy: "Python is the central operating nervous system of modern software architecture."
        };
      }
      // Professional
      return {
        simple: "Python is a multi-paradigm language with dynamic typing, automatic memory management via reference counting, and high-performance C extension interop.",
        story: "In a production cluster, engineers tuned CPython 3.12 GIL and specialized adaptive bytecode interpreter optimizations to reduce p99 latency by 35%.",
        realLife: "Cloud hyperscalers manage global infrastructure automation and LLM inference clusters using Python orchestrators.",
        friend: "Leverage Python's rich ecosystem (asyncio, type hints, pydantic, cython) to build robust systems while keeping cognitive overhead minimal.",
        visual: "┌────────────────────┐     AST Parser & Compiler     ┌───────────────────────┐\n│ Python AST Engine  │ ────────────────────────────> │ Optimized Bytecode    │\n└────────────────────┘                               └───────────────────────┘",
        stepByStep: "1. Lexical analysis generates AST tokens\n2. Bytecode specialization compiler optimizes hot paths\n3. PVM executes opcodes with dynamic dispatch\n4. Cyclic GC reclaims unreferenced heap structures.",
        exampleFirst: `${codeSnippets.code}\nStructured and optimized for enterprise observability and maintainability.`,
        analogy: "Python is an expressive domain-specific language engine backed by optimized C kernels."
      };
    }

    if (isVar) {
      if (stage === "kid") {
        return {
          simple: "A variable is like a small box with a name on it. You put a toy or a number inside the box so Python remembers it.",
          story: "Teddy had a bright red box labeled 'toy'. Inside, he placed his favorite stuffed bear. Whenever Teddy asks for 'toy', Python opens the box and gives him his bear!",
          realLife: "Think about your school lunchbox. Your name is on the outside, and yummy sandwiches are safe inside.",
          friend: "Hey buddy! A variable is simply a named container. You give it a name, put something fun inside, and use it anytime!",
          visual: "┌───────────────┐\n│   toy box     │\n│      ↓        │\n│  'Teddy Bear' │\n└───────────────┘\nThe box is called 'toy', and Teddy is safely inside!",
          stepByStep: "1. Create a friendly name (like 'toy')\n2. Put a value inside (like 'Teddy')\n3. Python remembers it\n4. Use the name whenever you need your toy!",
          exampleFirst: "Look at this line of code:\ntoy = 'Teddy'\nprint(toy)\nHere, 'toy' is the box name and 'Teddy' is what is kept inside.",
          analogy: "A variable is like a labeled toy bin in your playroom."
        };
      }
      if (stage === "young") {
        return {
          simple: "A variable is a named storage slot in memory that remembers information like a player's name, health, or game score.",
          story: "Rahul was building a battle game. When his hero defeated the dragon, the game needed to remember the score. So he created a box called `score` and stored 100 in it.",
          realLife: "Think about your video game HUD. The screen constantly shows your score and coins because variables remember those numbers in real time.",
          friend: "Imagine a variable as a labeled save-slot in your game inventory. You give the slot a name like `score` and keep the number 100 safe inside.",
          visual: "┌───────────────┐\n│     score     │\n│       ↓       │\n│      100      │\n└───────────────┘\nVariable 'score' holds the number 100.",
          stepByStep: "1. Choose a clear variable name (e.g. `score`)\n2. Use the `=` assignment sign\n3. Give it a value (e.g. `100`)\n4. Call `print(score)` to see the saved number!",
          exampleFirst: "Check out this code:\nplayer = 'Rahul'\nscore = 100\nprint(player)\nprint(score)\nHere, `player` and `score` remember our hero's name and points!",
          analogy: "A variable is like a player profile badge holding your current gaming stats."
        };
      }
      if (stage === "college") {
        return {
          simple: "A variable is a symbolic name bound to a value in computer memory, allowing programs to store, retrieve, and update information.",
          story: "During a computer science lab, Rahul needed to store student records. He created variables `name = 'Rahul'`, `age = 18`, and `marks = 85` to compute final semester results.",
          realLife: "Think of an address book where each contact's name points to their phone number. In Python, the variable name points to the memory location of the value.",
          friend: "Basically, a variable is just a name tag attached to a value in memory. Instead of remembering memory addresses, we use clean names like `marks = 85`.",
          visual: "┌───────────────┐     points to     ┌──────────────────┐\n│  Identifier   │ ───────────────>  │  Memory Value    │\n│  name         │                   │  'Rahul' (str)   │\n└───────────────┘                   └──────────────────┘",
          stepByStep: "1. Write the name on the left\n2. Place the assignment operator (`=`)\n3. Write the value on the right\n4. Python creates the value in memory and attaches your name tag.",
          exampleFirst: "name = 'Rahul'\nage = 18\nmarks = 85\nNotice how each variable holds a distinct data type without needing complex type declarations.",
          analogy: "A variable is like a labeled folder inside a college filing cabinet."
        };
      }
      if (stage === "graduate") {
        return {
          simple: "Variables allow software applications to hold, update, and pass business data such as employee salaries, customer orders, and transaction amounts.",
          story: "Anjali was building a company payroll system. She stored `salary = 45000` and `bonus = 5000` in variables to calculate the total pay of $50,000 for each employee.",
          realLife: "Think about an online shopping checkout. The cart subtotal, discount coupon, and sales tax are all managed through variables before charging the customer's card.",
          friend: "In real apps, variables hold your live state. For example, in an e-commerce backend, you use variables to calculate `total = salary + bonus`.",
          visual: "┌──────────────────────┐\n│  salary:       45000 │\n│  bonus:         5000 │\n│          ↓           │\n│  total:        50000 │\n└──────────────────────┘",
          stepByStep: "1. Define descriptive snake_case names (e.g. `salary`)\n2. Assign clean numerical or text values\n3. Use mathematical operators to calculate totals\n4. Pass the result to notification or database services.",
          exampleFirst: "salary = 45000\nbonus = 5000\ntotal = salary + bonus\nprint(total)\nHere, variables clearly represent real business entities and calculate clean outputs.",
          analogy: "A variable is like a labeled line item on a company invoice."
        };
      }
      // Professional
      return {
        simple: "Python uses dynamic name-binding where identifiers reference heap-allocated objects with automatic memory management.",
        story: "In an enterprise HR application, Anjali designed employee data models using dictionary variables to store records cleanly: `employee = {'name': 'Anjali', 'salary': 45000, 'department': 'IT'}`.",
        realLife: "Think of an application configuration file: variables hold connection strings, API keys, and timeouts that configure running services.",
        friend: "In production, keep variable names explicit and minimize shared mutable state to prevent race conditions and memory leaks.",
        visual: "┌───────────────────┐     binds reference     ┌───────────────────────┐\n│  Symbol Namespace │ ──────────────────────> │ PyObject (refcnt: 1)  │\n│  employee['name'] │                         │ 'Anjali' (str)        │\n└───────────────────┘                         └───────────────────────┘",
        stepByStep: "1. Python creates PyObject on heap\n2. Sets reference count to 1\n3. Binds identifier in current local namespace\n4. Cleans up memory automatically when reference count drops to 0.",
        exampleFirst: "employee = {\n    'name': 'Anjali',\n    'salary': 45000,\n    'department': 'IT'\n}\nprint(employee['name'])\nNotice how structured dictionaries group related variables cleanly for production APIs.",
        analogy: "A variable in Python is a pointer in a symbol table pointing to a heap data structure."
      };
    }

    if (isLoop) {
      return {
        simple: "A loop lets us run the same code again and again without writing it multiple times.",
        story: "Maya wanted to give high-fives to 3 teammates. Instead of shouting 3 separate times, she wrote a loop that greeted every player in the list automatically.",
        realLife: "Think of a music playlist playing your favorite songs one after another until the list ends.",
        friend: "Loops are a huge time saver! If you have 100 items, you write 2 lines of loop code instead of 100 print lines.",
        visual: "┌───────────────┐\n│ Item in List  │ ──> Do Action ──> Next Item ──> [Repeat]\n└───────────────┘",
        stepByStep: "1. Take a collection of items (like a list)\n2. Use `for item in list:`\n3. Indent the actions you want repeated\n4. Python runs the code for every item automatically.",
        exampleFirst: `${codeSnippets.code}\nSee how Python goes through each item in order!`,
        analogy: "A loop is like a Ferris wheel that visits each seat one by one."
      };
    }

    // Default English for all other topics
    return {
      simple: `${title} is a core Python feature that helps you write clean, working code to solve real problems.`,
      story: `Imagine you are building a project and need to handle ${title}. Python makes it simple and clean with minimal lines of code.`,
      realLife: `Just like organizing tools in a workshop, ${title} helps keep your software logic neat and easy to manage.`,
      friend: `Hey! ${title} is super easy once you see it in action. Let's break it down in plain words.`,
      visual: `┌───────────────────────┐\n│   Feature: ${title.padEnd(10)} │\n│          ↓            │\n│   Clean Output & Run  │\n└───────────────────────┘`,
      stepByStep: `1. Understand what ${title} does\n2. Write the clean syntax\n3. Run your Python script\n4. Check your output!`,
      exampleFirst: `Look at the code below first:\n${codeSnippets.code}\nNotice how clean and readable Python code is for ${title}.`,
      analogy: `${title} works just like a helpful tool in your daily toolkit.`
    };
  }

  // 2. ENGLISH + TELUGU (Friend Conversational Style)
  if (lang === "english-telugu") {
    if (isVar) {
      if (stage === "kid") {
        return {
          simple: "Variable ante simple ga cheppali ante, oka box laga imagine cheyyi. Aa box ki oka name untundi. Manam aa box lo value store chestham.",
          story: "Rahul daggara oka toy box undi. Aa box paina 'toy' ani name pettadu, lopaliki 'Teddy' pettadu. Eppudu adigina Python aa box nunchi Teddy ni teesthundi!",
          realLife: "Mana school bag laga. Bag ki oka name untundi, lopala books untayi. Python lo kuda anthe, variable lopala data untundi.",
          friend: "Babu, chala simple ga cheptha chudu! Variable anedi oka named box laga. Nuvemo oka peru petti, daantlo nee favorite item daachipettachu!",
          visual: "┌───────────────┐\n│   toy box     │\n│      ↓        │\n│  'Teddy Bear' │\n└───────────────┘\nBox peru 'toy', lopala unna item 'Teddy'!",
          stepByStep: "1. Oka manchi name create cheyyi (like 'toy')\n2. Daantlo oka value pettu (like 'Teddy')\n3. Python daanni gurthupettukuntundi\n4. Ee name use chesi eppudaina value ni print cheyyachu!",
          exampleFirst: "Ee code chudu:\ntoy = 'Teddy'\nprint(toy)\nIkada 'toy' anedi box name. 'Teddy' anedi box lo unna value!",
          analogy: "Variable ante mana intlo dabba paina 'Sugar' ani sticker vesi, lopala sugar vesi pettadam lantidi."
        };
      }
      if (stage === "young") {
        return {
          simple: "Variable ante game lo player score ni remember cheskune oka small box laga.",
          story: "Rahul oka video game aadutunnadu. Game lo Rahul score 100 reach ayyindi. Game aa score ni marchipokunda undadaniki `score = 100` ane variable lo save cheskundi.",
          realLife: "Nee game screen paina unna score board laga. Ee score board variables valla update avtundi.",
          friend: "Rey mama, variable ante super simple! Game lo player health 100 undi anuko, `score = 100` ani store chestham. Score update ayithe `score = 150` ani marchachu!",
          visual: "┌───────────────┐\n│     score     │\n│       ↓       │\n│      100      │\n└───────────────┘\nVariable 'score' lo 100 store ayyindi.",
          stepByStep: "1. Variable ki oka name ivvu (e.g. `score`)\n2. `=` sign pettu\n3. Value ivvu (e.g. `100`)\n4. `print(score)` chesi screen paina chusko!",
          exampleFirst: "Ee code chudu mama:\nplayer = 'Rahul'\nscore = 100\nprint(player)\nprint(score)\nIkada `player` lo name undi, `score` lo 100 undi!",
          analogy: "Game lo inventory slot lo sword pettinattu, variable lo value pedatham."
        };
      }
      if (stage === "college") {
        return {
          simple: "Variable ante memory lo unna oka value ki manam icche reference name. Example: student name, roll number, marks.",
          story: "College lab lo Priya student marks calculate cheyyali. Anduke `name = 'Rahul'`, `age = 18`, `marks = 85` ani variables lo store chesi average calculate chesindi.",
          realLife: "Mana phone contacts list laga. Friend name click chesthe number vastundi. Variable name use chesthe value vastundi.",
          friend: "Machaa, variable anedi oka identifier. Python memory lo value create chesi, daaniki manam icchina name tag ni tagilistundi.",
          visual: "┌───────────────┐     points to     ┌──────────────────┐\n│  Identifier   │ ───────────────>  │  Heap Memory     │\n│  name         │                   │  'Rahul' (str)   │\n└───────────────┘                   └──────────────────┘",
          stepByStep: "1. Left side variable name rayali\n2. Middle lo `=` operator pettali\n3. Right side value ivvali\n4. Python dynamic ga type create chesthundi!",
          exampleFirst: "Code chudandi:\nname = 'Rahul'\nage = 18\nmarks = 85\nPython lo data type specify cheyyalsina avasaram ledu, direct ga assign cheyyachu!",
          analogy: "College library lo book shelf paina code label vesi book unchinattu."
        };
      }
      if (stage === "graduate") {
        return {
          simple: "Suppose mana employee management app undi. Employee name, salary, department lantivi variables lo store cheyyachu.",
          story: "Anjali company payroll system lo pani chestundi. `salary = 45000` and `bonus = 5000` variables use chesi net salary $50,000 compute chesindi.",
          realLife: "E-commerce checkout lo item price, discount, tax compute cheyyadaniki variables use chestham.",
          friend: "Simple ga cheppali ante, application state mottham variables lone untundi. Backend API lo request vachinappudu data ni variables lo hold chestham.",
          visual: "┌──────────────────────┐\n│  salary:       45000 │\n│  bonus:         5000 │\n│          ↓           │\n│  total:        50000 │\n└──────────────────────┘",
          stepByStep: "1. Clean snake_case variable names rayali\n2. Values assign cheyyali\n3. Calculations perform cheyyali\n4. Response return cheyyali.",
          exampleFirst: "salary = 45000\nbonus = 5000\ntotal = salary + bonus\nprint(total)",
          analogy: "Digital bill lo prathi line item oka variable laga."
        };
      }
      // Professional
      return {
        simple: "Python lo dynamic name-binding untundi. Variable anedi heap object ki pointer reference laga pani chestundi.",
        story: "Production API lo employee details hold cheyyadaniki dictionary variables use chestham: `employee = {'name': 'Anjali', 'salary': 45000, 'department': 'IT'}`.",
        realLife: "Cloud servers lo configuration settings and API tokens variables lo maintain chestham.",
        friend: "Production code lo variable names clear ga undali. Unnecessary global variables avoid chesthe memory leak undadu.",
        visual: "┌───────────────────┐     reference     ┌───────────────────────┐\n│  employee['name'] │ ────────────────> │ PyObject Heap Data    │\n└───────────────────┘                   └───────────────────────┘",
        stepByStep: "1. Heap lo PyObject create avtundi\n2. Local namespace lo name bind avtundi\n3. Reference count track avtundi\n4. Refcount zero avvagane garbage collect avtundi.",
        exampleFirst: "employee = {\n    'name': 'Anjali',\n    'salary': 45000,\n    'department': 'IT'\n}\nprint(employee['name'])",
        analogy: "Symbol table lo oka pointer entry laga."
      };
    }

    if (isLoop) {
      return {
        simple: "Loop ante same pani ni again and again cheyyadam, code ni repeat ga rayakunda.",
        story: "Game lo 3 players ki points ivvali. Okkokariki separate ga rayakunda, for loop use chesi andariki okesari points add chesam.",
        realLife: "Spotify playlist lo songs okadani tarvata okati auto ga play avvadam laga.",
        friend: "Mama, loop anedi super time saver! 100 items unna sare, 2 lines loop code tho pani aipothundi.",
        visual: "┌───────────────┐\n│ List lo item  │ ──> Action cheyyi ──> Next item ──> [Repeat]\n└───────────────┘",
        stepByStep: "1. Oka list tesko\n2. `for item in list:` ani rayi\n3. Lopala cheyyalsina pani rayi\n4. Python list mottham loop chesthundi!",
        exampleFirst: `${codeSnippets.code}\nChudu, loop ela automatically prathi item ni print chesindo!`,
        analogy: "Merry-go-round lo round round ga tiragadam lantidi."
      };
    }

    return {
      simple: `${title} anedi Python lo chala important concept. Idi code ni clean ga and easy ga run cheyyadaniki help chestundi.`,
      story: `Oka real project chestunnappudu ${title} use chesthe mana code chala neat ga and fast ga work avtundi.`,
      realLife: `Mana daily routine lo panulani organize cheskunattu, ${title} code logic ni organize chestundi.`,
      friend: `Mama, ${title} chala simple topic! Manam code examples tho step by step chudam.`,
      visual: `┌───────────────────────┐\n│   Concept: ${title.padEnd(10)} │\n│          ↓            │\n│   Output Success! 🎉  │\n└───────────────────────┘`,
      stepByStep: `1. ${title} concept ardam cheskovali\n2. Simple syntax rayali\n3. Script run cheyyali\n4. Output verify cheyyali!`,
      exampleFirst: `Mundu kinda unna code chudandi:\n${codeSnippets.code}\nDeeni tarvata code ela execute aindo chudam!`,
      analogy: `${title} anedi mana coding toolkit lo oka super useful tool laga.`
    };
  }

  // 3. TELUGU
  if (lang === "telugu") {
    if (isVar) {
      if (stage === "kid") {
        return {
          simple: "Variable అంటే ఒక చిన్న box లాంటిది. దానికి ఒక పేరు పెడతాం. ఆ box లో మనం ఒక value పెడతాం.",
          story: "ఒక చిన్న పిల్లవాడి దగ్గర బొమ్మల పెట్టె ఉంది. ఆ పెట్టెకి 'toy' అని పేరు పెట్టి, అందులో 'Teddy' పెట్టాడు. పైథాన్ ఆ పెట్టెను ఎప్పుడూ గుర్తుంచుకుంటుంది.",
          realLife: "మనం ఇంట్లో వస్తువులను డబ్బాలో పెట్టి పేర్లు రాసినట్లుగానే, పైథాన్‌లో సమాచారాన్ని దాచడానికి variable వాడతాం.",
          friend: "చూడండి, ఇది చాలా సులభం! Variable అంటే మనం కంప్యూటర్‌కు ఇచ్చే ఒక చిన్న బుజ్జి పెట్టె లాంటిది.",
          visual: "┌───────────────┐\n│   toy_box     │\n│      ↓        │\n│    'Teddy'    │\n└───────────────┘\nపెట్టె పేరు 'toy', లోపల ఉన్న బొమ్మ 'Teddy'!",
          stepByStep: "1. ఒక పేరు ఎంచుకోండి (ఉదా: toy)\n2. అందులో ఒక value పెట్టండి (ఉదా: 'Teddy')\n3. పైథాన్ దాన్ని గుర్తుపెట్టుకుంటుంది\n4. ఆ పేరుతో ఎప్పుడైనా పిలవవచ్చు!",
          exampleFirst: "ఈ కోడ్ చూడండి:\ntoy = 'Teddy'\nprint(toy)\nఇక్కడ 'toy' అనే పేరులో 'Teddy' ఉంది!",
          analogy: "Variable అంటే పేరు రాసిన ఒక బొమ్మల పెట్టె లాంటిది."
        };
      }
      return {
        simple: "Variable అంటే మనం ఒక value ని గుర్తుంచుకోవడానికి ఇచ్చే పేరు.",
        story: "ఒక ఆటలో స్కోరు 100 వచ్చింది. ఆ స్కోరును గుర్తుంచుకోవడానికి `score = 100` అనే వేరియబుల్‌లో దాచారు.",
        realLife: "మన ఫోన్ కాంటాక్ట్స్ లిస్ట్‌లో స్నేహితుడి పేరు చూసి ఫోన్ చేసినట్లే, వేరియబుల్ పేరుతో సమాచారాన్ని తీసుకుంటాం.",
        friend: "వేరియబుల్ అంటే మెమరీలో సమాచారం దాచడానికి ఇచ్చే ఒక పేరు.",
        visual: "┌───────────────┐\n│     score     │\n│       ↓       │\n│      100      │\n└───────────────┘\nవేరియబుల్ 'score' లో 100 దాచబడింది.",
        stepByStep: "1. వేరియబుల్ పేరు రాయండి\n2. `=` గుర్తు పెట్టండి\n3. సమాచారం (value) ఇవ్వండి\n4. ఉపయోగించుకోండి!",
        exampleFirst: `${codeSnippets.code}\nఈ కోడ్‌లో వేరియబుల్స్ ఎలా ఉపయోగించారో చూడండి.`,
        analogy: "లేబుల్ అతికించిన ఒక ఫైల్ లాంటిది."
      };
    }

    if (isLoop) {
      return {
        simple: "Loop అంటే ఒకే పనిని మళ్లీ మళ్లీ చేయడం.",
        story: "జాబితాలో ఉన్న 3 పేర్లను ఒక్కొక్కటిగా పిలవడానికి లూప్ ఉపయోగపడుతుంది.",
        realLife: "పాటల ప్లేలిస్ట్‌లో ఒకదాని తర్వాత ఒకటి పాటలు రావడం లాంటిది.",
        friend: "మళ్లీ మళ్లీ కోడ్ రాయకుండా ఒకేసారి చేయడానికి loop వాడతాం.",
        visual: "┌───────────────┐\n│ అంశం          │ ──> పని చేయి ──> తర్వాతి అంశం ──> [మళ్లీ చేయి]\n└───────────────┘",
        stepByStep: "1. ఒక జాబితా తీసుకోండి\n2. `for` లూప్ రాయండి\n3. చేయాల్సిన పని చెప్పండి\n4. పైథాన్ దాన్ని పూర్తి చేస్తుంది!",
        exampleFirst: `${codeSnippets.code}\nకోడ్ ఎలా వరుసగా నడుస్తుందో చూడండి.`,
        analogy: "రైలు చక్రాలు తిరిగినట్లు."
      };
    }

    return {
      simple: `${title} అనేది పైథాన్‌లో ఒక ముఖ్యమైన కాన్సెప్ట్. ఇది ప్రోగ్రామ్‌ను సులభంగా రాయడానికి సహాయపడుతుంది.`,
      story: `మనం ఒక ప్రాజెక్ట్ చేసేటప్పుడు ${title} ని ఉపయోగిస్తే కోడ్ చాలా స్పష్టంగా ఉంటుంది.`,
      realLife: `మన రోజువారీ పనులను క్రమపద్ధతిలో చేసుకున్నట్లే, ${title} ప్రోగ్రామ్‌ను చక్కగా నడుపుతుంది.`,
      friend: `${title} చాలా సులువైన అంశం. కోడ్ ఉదాహరణలతో సులభంగా నేర్చుకుందాం.`,
      visual: `┌───────────────────────┐\n│   అంశం: ${title.padEnd(10)} │\n│          ↓            │\n│   సరైన ఫలితం! ✨     │\n└───────────────────────┘`,
      stepByStep: `1. కాన్సెప్ట్ అర్థం చేసుకోండి\n2. కోడ్ రాయండి\n3. రన్ చేయండి\n4. ఫలితం చూడండి!`,
      exampleFirst: `ముందుగా కింద ఉన్న కోడ్ చూడండి:\n${codeSnippets.code}`,
      analogy: `${title} ఒక మంచి సాధనం లాంటిది.`
    };
  }

  // 4. HINDI
  if (isVar) {
    if (stage === "kid") {
      return {
        simple: "Variable को एक छोटे डिब्बे की तरह समझो। हम डिब्बे को एक नाम देते हैं और उसके अंदर कोई खिलौना या मान रखते हैं।",
        story: "एक छोटे बच्चे के पास एक खिलौनों का डिब्बा था। उसने डिब्बे पर 'toy' लिखा और अंदर 'Teddy' रख दिया। जब भी उसने 'toy' बुलाया, पाइथन ने उसे टेडी दे दिया!",
        realLife: "जैसे आपके पेंसिल बॉक्स पर आपका नाम लिखा होता है और अंदर पेंसिल होती है।",
        friend: "दोस्त, यह बहुत आसान है! Variable का मतलब है एक डिब्बा जिसका कोई नाम हो, जिसमें हम कुछ रख सकते हैं।",
        visual: "┌───────────────┐\n│    toy_box    │\n│       ↓       │\n│    'Teddy'    │\n└───────────────┘\nडिब्बे का नाम 'toy' है और अंदर 'Teddy' है!",
        stepByStep: "1. एक नाम चुनें (जैसे toy)\n2. उसके अंदर कोई मान रखें (जैसे 'Teddy')\n3. पाइथन उसे याद रखेगा\n4. उस नाम से उसे जब चाहे उपयोग करें!",
        exampleFirst: "यह कोड देखिए:\ntoy = 'Teddy'\nprint(toy)\nयहाँ 'toy' नाम के डिब्बे में 'Teddy' रखा गया है!",
        analogy: "Variable एक लेबल लगा हुआ डिब्बा है।"
      };
    }
    return {
      simple: "Variable को एक बॉक्स की तरह समझो। हम बॉक्स को एक नाम देते हैं और उसके अंदर value रखते हैं।",
      story: "गेम में स्कोर 100 होने पर गेम ने उसे `score = 100` में सुरक्षित रख लिया ताकि वह याद रहे।",
      realLife: "जैसे फोन में दोस्तों के नाम के साथ उनका नंबर सेव होता है।",
      friend: "Variable कंप्यूटर की मेमोरी में जानकारी रखने का एक आसान नाम है।",
      visual: "┌───────────────┐\n│     score     │\n│       ↓       │\n│      100      │\n└───────────────┘\nVariable 'score' में 100 सेव है।",
      stepByStep: "1. नाम लिखें\n2. `=` लगाएं\n3. वैल्यू दें\n4. इस्तेमाल करें!",
      exampleFirst: `${codeSnippets.code}\nदेखिए कैसे वेरिएबल में वैल्यू रखी गई है।`,
      analogy: "नाम की पर्ची लगा हुआ एक डिब्बा।"
    };
  }

  if (isLoop) {
    return {
      simple: "Loop का मतलब है एक ही काम को बार-बार करना।",
      story: "तीन खिलाड़ियों को एक-एक करके बधाई देने के लिए लूप का उपयोग किया गया।",
      realLife: "जैसे गानों की प्लेलिस्ट में एक के बाद एक गाना अपने आप बजता है।",
      friend: "बार-बार एक ही कोड लिखने से बचने के लिए लूप सबसे अच्छा तरीका है।",
      visual: "┌───────────────┐\n│ आइटम          │ ──> काम करो ──> अगला आइटम ──> [दोहराओ]\n└───────────────┘",
      stepByStep: "1. लिस्ट बनाएं\n2. `for` लूप लिखें\n3. काम बताएं\n4. पाइथन खुद चलाएगा!",
      exampleFirst: `${codeSnippets.code}\nदेखिए लूप ने कैसे सब कुछ प्रिंट किया।`,
      analogy: "गोल-गोल घूमने वाला झूला।"
    };
  }

  return {
    simple: `${title} पाइथन का एक महत्वपूर्ण हिस्सा है, जो कोड को आसान और साफ बनाता है।`,
    story: `जब हम कोई प्रोजेक्ट बनाते हैं, तो ${title} के इस्तेमाल से हमारा काम बहुत आसान हो जाता है।`,
    realLife: `जैसे हम अपनी चीजें करीने से रखते हैं, वैसे ही ${title} कोड को व्यवस्थित रखता है।`,
    friend: `दोस्त, ${title} बहुत आसान है। चलिए इसे सीधे उदाहरण के साथ समझते हैं।`,
    visual: `┌───────────────────────┐\n│   विषय: ${title.padEnd(10)} │\n│          ↓            │\n│   सफल परिणाम! ✨     │\n└───────────────────────┘`,
    stepByStep: `1. नियम को समझें\n2. कोड लिखें\n3. रन करें\n4. आउटपुट देखें!`,
    exampleFirst: `पहले नीचे दिया गया कोड देखिए:\n${codeSnippets.code}`,
    analogy: `${title} आपके टूलबॉक्स का एक उपयोगी औजार है।`
  };
}

// -------------------------------------------------------------
// LOCALIZED REAL-LIFE SCENARIOS
// -------------------------------------------------------------
function getLocalizedRealLife(lang, stage, title) {
  if (lang === "english") {
    if (stage === "kid") return "Just like having your name on your lunchbox with tasty cookies inside!";
    if (stage === "young") return "The score display in Fortnite or Roblox that updates every time you score.";
    if (stage === "college") return "Student grade calculation system managing course credits and semester GPA.";
    if (stage === "graduate") return "Employee payroll engine computing gross salary, bonus, and tax deductions.";
    return "Application state tracking live user sessions and cart checkouts in cloud microservices.";
  }
  if (lang === "english-telugu") {
    if (stage === "kid") return "Mana lunchbox paina peru rasukoni, lopala cookies pettadam lantidi!";
    if (stage === "young") return "Roblox or BGMI lo mana score and health real-time lo screen paina display avvadam laga.";
    if (stage === "college") return "College marks portal lo student GPA and roll number track cheyyadam laga.";
    if (stage === "graduate") return "Company payroll lo employee salary, PF, and bonus calculate chesi slip generate cheyyadam.";
    return "E-commerce cloud backend lo active user cart and session data manage cheyyadam.";
  }
  if (lang === "telugu") {
    if (stage === "kid") return "పేరు రాసి ఉన్న ఒక లంచ్ బాక్స్ లోపల బిస్కెట్లు ఉన్నట్లు!";
    if (stage === "young") return "వీడియో గేమ్‌లో మన స్కోరు మరియు లైఫ్ పాయింట్లు గుర్తుంచుకోవడం లాంటిది.";
    if (stage === "college") return "కాలేజీలో విద్యార్థుల మార్కులు మరియు గ్రేడ్స్ లెక్కించడం లాంటిది.";
    if (stage === "graduate") return "కంపెనీలో ఉద్యోగుల జీతాలు మరియు బోనస్ లెక్కించడం లాంటిది.";
    return "క్లౌడ్ సర్వర్లలో యూజర్ డేటాను భద్రపరచడం లాంటిది.";
  }
  // Hindi
  if (stage === "kid") return "जैसे आपके लंच बॉक्स पर आपका नाम लिखा हो और अंदर स्वादिष्ट खाना हो!";
  if (stage === "young") return "जैसे वीडियो गेम में आपका स्कोर और लाइफ पॉइंट याद रखे जाते हैं।";
  if (stage === "college") return "जैसे कॉलेज में छात्रों के अंक और रोल नंबर का रिकॉर्ड रखा जाता है।";
  if (stage === "graduate") return "जैसे कंपनी में कर्मचारियों का वेतन और बोनस का हिसाब होता है।";
  return "जैसे क्लाउड सर्वर पर उपयोगकर्ता की जानकारी को मैनेज किया जाता है।";
}

// -------------------------------------------------------------
// LOCALIZED HOW IT WORKS
// -------------------------------------------------------------
function getLocalizedHowItWorks(lang, stage, title, codeObj) {
  if (lang === "english") {
    return `Python reads your code line by line and executes instructions in order to produce the output.`;
  }
  if (lang === "english-telugu") {
    return `Python prathi line ni order lo execute chesi output ni screen paina print chesthundi.`;
  }
  if (lang === "telugu") {
    return `పైథాన్ కోడ్‌ను వరుసగా చదివి ఫలితాన్ని స్క్రీన్‌పై చూపిస్తుంది.`;
  }
  return `पायथन कोड को एक-एक लाइन करके पढ़ता है और परिणाम दिखाता है।`;
}

// -------------------------------------------------------------
// LOCALIZED IMPORTANT POINTS
// -------------------------------------------------------------
function getLocalizedImportantPoints(lang, stage, title) {
  if (lang === "english") {
    return [
      `Always keep ${title} clear, concise, and well-named.`,
      `Python executes instructions sequentially from top to bottom.`,
      `Test your code frequently in the interactive playground.`
    ];
  }
  if (lang === "english-telugu") {
    return [
      `${title} ni eppudu clear ga and meaningful names tho rayali.`,
      `Python code ni top nunchi bottom varaku line by line run chesthundi.`,
      `Code raseppudu indentation and syntax ni check cheskondi.`
    ];
  }
  if (lang === "telugu") {
    return [
      `${title} కోసం ఎల్లప్పుడూ స్పష్టమైన మరియు అర్థవంతమైన పేర్లను ఉపయోగించండి.`,
      `పైథాన్ కోడ్‌ను పైనుంచి కిందికి వరుసగా రన్ చేస్తుంది.`,
      `ఎప్పటికప్పుడు కోడ్‌ను రన్ చేసి అవుట్‌పుట్ సరిచూసుకోండి.`
    ];
  }
  return [
    `${title} के लिए हमेशा स्पष्ट और सही नामों का उपयोग करें।`,
    `पायथन कोड को ऊपर से नीचे तक एक-एक लाइन करके चलाता है।`,
    `कोड को नियमित रूप से चलाकर आउटपुट की जांच करें।`
  ];
}

// -------------------------------------------------------------
// LOCALIZED COMMON MISTAKES
// -------------------------------------------------------------
function getLocalizedCommonMistakes(lang, stage, title) {
  if (lang === "english") {
    return {
      mistake: `Typo in name or improper capitalization (e.g. print vs Print).`,
      fix: `Remember that Python is case-sensitive: always use lowercase keywords.`
    };
  }
  if (lang === "english-telugu") {
    return {
      mistake: `Capital letters rayadam (e.g. print badulu Print rayadam).`,
      fix: `Python case-sensitive, anduke keywords ni lowercase lone rayali.`
    };
  }
  if (lang === "telugu") {
    return {
      mistake: `పేర్లలో స్పెల్లింగ్ తప్పులు లేదా క్యాపిటల్ లెటర్స్ రాయడం.`,
      fix: `పైథాన్ కేస్-సెన్సిటివ్, కాబట్టి సరైన చిన్న అక్షరాలను వాడండి.`
    };
  }
  return {
    mistake: `स्पेलिंग में गलती या कैपिटल अक्षरों का गलत उपयोग करना।`,
    fix: `पायथन केस-सेंसिटिव है, इसलिए हमेशा सही स्मॉल लेटर्स लिखें।`
  };
}

// -------------------------------------------------------------
// LOCALIZED TRY IT YOURSELF
// -------------------------------------------------------------
function getLocalizedTryIt(lang, stage, title, codeObj) {
  const goalText = lang === "english"
    ? `Master ${title} by writing and running working code in the editor.`
    : (lang === "english-telugu"
      ? `Editor lo code rasi ${title} ni execute cheyyandi.`
      : (lang === "telugu"
        ? `ఎడిటర్‌లో కోడ్ రాసి ${title} పై పట్టు సాధించండి.`
        : `एडिटर में कोड लिखकर ${title} का अभ्यास करें।`));

  const taskText = lang === "english"
    ? (stage === "kid" ? "Let's make a box for your favorite toy and print it!" : `Write and run Python code to test ${title}.`)
    : (lang === "english-telugu"
      ? (stage === "kid" ? "Nee favorite toy kosam oka box create chesi print cheyyi!" : `Editor lo code rasi ${title} ni test cheyyandi.`)
      : (lang === "telugu"
        ? (stage === "kid" ? "మీ ఇష్టమైన బొమ్మ కోసం ఒక పెట్టె తయారు చేసి ప్రింట్ చేయండి!" : `ఎడిటర్‌లో కోడ్ రాసి ${title} ని పరీక్షించండి.`)
        : (stage === "kid" ? "अपने पसंदीदा खिलौने के लिए एक बॉक्स बनाएं और प्रिंट करें!" : `एडिटर में कोड लिखकर ${title} का परीक्षण करें।`)));

  const hintText = lang === "english"
    ? "Check that all quotes are closed and variable names match exactly."
    : (lang === "english-telugu"
      ? "Quotes close chesaro ledo, variable name correct ga undo chusondi."
      : (lang === "telugu"
        ? "కొటేషన్లు సరిగ్గా మూసివేయబడి ఉన్నాయో లేదో తనిఖీ చేయండి."
        : "चेक करें कि कोट्स सही से बंद हैं और नाम सही हैं।"));

  const explanationText = lang === "english"
    ? "Great job! Your Python script executed cleanly and produced the expected output."
    : (lang === "english-telugu"
      ? "Super mama! Nee code successfully run ayyi correct output vachindi."
      : (lang === "telugu"
        ? "చాలా బాగుంది! మీ కోడ్ విజయవంతంగా రన్ అయ్యి సరైన ఫలితాన్ని ఇచ్చింది."
        : "बहुत बढ़िया! आपका कोड सफलतापूर्वक चला और सही आउटपुट आया।"));

  return {
    title: lang === "english" ? `🧪 Try It Yourself` : (lang === "english-telugu" ? `🧪 Try It Yourself` : (lang === "telugu" ? `🧪 ప్రాక్టీస్ చేయండి` : `🧪 खुद करके देखें`)),
    goal: goalText,
    task: taskText,
    starterCode: codeObj.code,
    solution: codeObj.code,
    expectedOutput: codeObj.output,
    hint: hintText,
    explanation: explanationText
  };
}

// -------------------------------------------------------------
// LOCALIZED QUESTIONS (3 Easy, 2 Medium, 1 Challenge)
// -------------------------------------------------------------
// -------------------------------------------------------------
// LOCALIZED QUESTIONS (3 Easy, 2 Medium, 1 Challenge)
// -------------------------------------------------------------
function getLocalizedQuestions(lang, stage, title, concept = "") {
  const t = (title + " " + concept).toLowerCase();

  // Helper to construct questions with clean options & validated answers
  const buildConceptQuestions = () => {
    // 1. Python Basics / Intro / Syntax / Print / Comments
    if (t.includes("what_is_python") || t.includes("why_learn") || t.includes("where_python") || t.includes("syntax") || t.includes("print") || t.includes("comment") || t.includes("first_program")) {
      return {
        en: [
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Who created the Python programming language in 1991?`,
            options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Bjarne Stroustrup"],
            correctAnswer: "Guido van Rossum",
            explanation: "Python was created by Dutch programmer Guido van Rossum and first released in 1991."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Which file extension is used for standard Python source code files?`,
            options: [".py", ".python", ".pyt", ".pt"],
            correctAnswer: ".py",
            explanation: "Python files use the standard `.py` file extension."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Which symbol is used to write a single-line comment in Python?`,
            options: ["#", "//", "/*", "--"],
            correctAnswer: "#",
            explanation: "In Python, the hash symbol `#` marks the beginning of a single-line comment."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `How does Python structure and separate code blocks?`,
            options: [
              "Using consistent indentation (whitespace)",
              "Using curly braces { }",
              "Using begin and end keywords",
              "Using semicolons ; at line ends"
            ],
            correctAnswer: "Using consistent indentation (whitespace)",
            explanation: "Unlike C++ or Java, Python uses indentation (4 spaces by convention) to define code blocks."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `What is the expected output of ` + "`print('Hello', 'World', sep='-')`?",
            options: ["Hello-World", "Hello World", "Hello - World", "HelloWorld"],
            correctAnswer: "Hello-World",
            explanation: "The `sep` parameter specifies the separator string placed between items in `print()`."
          },
          {
            type: "Challenge Question",
            difficulty: "Challenge",
            question: `Why is Python described as an interpreted, dynamically-typed language?`,
            options: [
              "CPython compiles source to bytecode and evaluates it in PVM without manual type declarations",
              "It directly compiles to raw machine CPU opcodes at save time",
              "Variables require strict static data types before runtime",
              "It cannot run without a web browser"
            ],
            correctAnswer: "CPython compiles source to bytecode and evaluates it in PVM without manual type declarations",
            explanation: "Python types are bound to runtime objects on the heap, and bytecode executes dynamically in the PVM."
          }
        ],
        te_en: [
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Python programming language ni 1991 lo evaru create chesaru?`,
            options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Brendan Eich"],
            correctAnswer: "Guido van Rossum",
            explanation: "Python ni Guido van Rossum 1991 lo create chesaru."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Python source files ki standard file extension edi?`,
            options: [".py", ".python", ".code", ".pt"],
            correctAnswer: ".py",
            explanation: "Python files `.py` extension tho save avthayi."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Python lo single-line comment rayadaniki ఏ symbol use chestham?`,
            options: ["#", "//", "/*", "--"],
            correctAnswer: "#",
            explanation: "`#` symbol tho comment raste Python daanni ignore chestundi."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `Python lo code blocks ni ela structure chestham?`,
            options: [
              "Consistent indentation (spaces) use chesi",
              "Curly braces { } use chesi",
              "Semicolons ; use chesi",
              "Square brackets [ ] use chesi"
            ],
            correctAnswer: "Consistent indentation (spaces) use chesi",
            explanation: "Python lo indentation (4 spaces) tho code block level decide avtundi."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `print('Hello', 'World', sep='-') output em vastundi?`,
            options: ["Hello-World", "Hello World", "Hello, World", "Error"],
            correctAnswer: "Hello-World",
            explanation: "`sep='-'` valla words madhya hyphen `-` separator print avtundi."
          },
          {
            type: "Challenge Question",
            difficulty: "Challenge",
            question: `Python dynamic typing ante enti?`,
            options: [
              "Variable type declare cheyyalsina avasaram ledu, runtime lo automatic ga decide avtundi",
              "Types eppudu marchalemu",
              "Only numbers matrame store cheyyachu",
              "Code run avvadaniki internet kavali"
            ],
            correctAnswer: "Variable type declare cheyyalsina avasaram ledu, runtime lo automatic ga decide avtundi",
            explanation: "Python runtime lo value ni batti data type ni assign chesthundi."
          }
        ],
        te: [
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `పైథాన్ ప్రోగ్రామింగ్ భాషను 1991 లో ఎవరు రూపొందించారు?`,
            options: ["గైడో వాన్ రోసమ్ (Guido van Rossum)", "డెన్నిస్ రిట్చీ", "జేమ్స్ గోస్లింగ్", "బ్రెండన్ ఐచ్"],
            correctAnswer: "గైడో వాన్ రోసమ్ (Guido van Rossum)",
            explanation: "పైథాన్‌ను గైడో వాన్ రోసమ్ 1991 లో రూపొందించారు."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `పైథాన్ ఫైళ్లను సేవ్ చేయడానికి ఏ ఎక్స్‌టెన్షన్ వాడతారు?`,
            options: [".py", ".python", ".code", ".pt"],
            correctAnswer: ".py",
            explanation: "పైథాన్ కోడ్ ఫైల్స్ `.py` ఎక్స్‌టెన్షన్‌తో ముగుస్తాయి."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `పైథాన్‌లో కామెంట్ రాయడానికి ఏ గుర్తును ఉపయోగిస్తారు?`,
            options: ["#", "//", "/*", "--"],
            correctAnswer: "#",
            explanation: "`#` గుర్తుతో మొదలయ్యే లైన్లను పైథాన్ కామెంట్స్‌గా భావిస్తుంది."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `పైథాన్‌లో కోడ్ బ్లాకులను ఎలా గుర్తిస్తారు?`,
            options: [
              "స్పష్టమైన ఇండెంటేషన్ (ఖాళీ స్థలాలు) ద్వారా",
              "కర్లీ బ్రాకెట్లు { } ద్వారా",
              "సెమికోలన్లు ; ద్వారా",
              "ట్యాగ్‌లు ద్వారా"
            ],
            correctAnswer: "స్పష్టమైన ఇండెంటేషన్ (ఖాళీ స్థలాలు) ద్వారా",
            explanation: "పైథాన్‌లో ఇండెంటేషన్ కోడ్ నిర్మాణానికి అత్యంత ముఖ్యం."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `print('A', 'B', sep='*') అవుట్‌పుట్ ఏమిటి?`,
            options: ["A*B", "A B", "AB", "Error"],
            correctAnswer: "A*B",
            explanation: "`sep='*'` ద్వారా అక్షరాల మధ్య స్టార్ గుర్తు ముద్రించబడుతుంది."
          },
          {
            type: "Challenge Question",
            difficulty: "Challenge",
            question: `పైథాన్ డైనమిక్ టైపింగ్ అంటే ఏమిటి?`,
            options: [
              "వేరియబుల్ రకాన్ని ముందే చెప్పాల్సిన పనిలేదు, విలువను బట్టి మారుతుంది",
              "డేటా టైప్స్ అస్సలు ఉండవు",
              "ఎల్లప్పుడూ స్ట్రింగ్స్ మాత్రమే ఉంటాయి",
              "కోడ్ ఎగ్జిక్యూట్ అవ్వదు"
            ],
            correctAnswer: "వేరియబుల్ రకాన్ని ముందే చెప్పాల్సిన పనిలేదు, విలువను బట్టి మారుతుంది",
            explanation: "రన్‌టైమ్‌లో పైథాన్ ఆటోమేటిక్‌గా వేరియబుల్ డేటా రకాన్ని కేటాయిస్తుంది."
          }
        ],
        hi: [
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `पायथन प्रोग्रामिंग भाषा का निर्माण 1991 में किसने किया था?`,
            options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Bjarne Stroustrup"],
            correctAnswer: "Guido van Rossum",
            explanation: "पायथन का निर्माण ग्विडो वैन रोसुम (Guido van Rossum) ने 1991 में किया था।"
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `पायथन फाइलों के लिए किस एक्सटेंशन का उपयोग किया जाता है?`,
            options: [".py", ".python", ".pyt", ".pt"],
            correctAnswer: ".py",
            explanation: "पायथन फाइलों को हमेशा `.py` एक्सटेंशन के साथ सेव किया जाता है।"
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `पायथन में कमेंट लिखने के लिए किस चिह्न का उपयोग होता है?`,
            options: ["#", "//", "/*", "--"],
            correctAnswer: "#",
            explanation: "`#` चिह्न के साथ लिखी गई लाइनों को पायथन रन नहीं करता।"
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `पायथन में कोड ब्लॉक को कैसे पहचाना जाता है?`,
            options: [
              "सही इंडेंटेशन (इंडेंट/स्पेस) के द्वारा",
              "कर्ली ब्रैकेट्स { } के द्वारा",
              "सेमीकोलन ; के द्वारा",
              "राउंड ब्रैकेट्स ( ) के द्वारा"
            ],
            correctAnswer: "सही इंडेंटेशन (इंडेंट/स्पेस) के द्वारा",
            explanation: "पायथन में कोड ब्लॉक्स को अलग करने के लिए इंडेंटेशन का उपयोग होता है।"
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `print('Namaste', 'India', sep='-') का आउटपुट क्या होगा?`,
            options: ["Namaste-India", "Namaste India", "Namaste,India", "Error"],
            correctAnswer: "Namaste-India",
            explanation: "`sep='-'` दो शब्दों के बीच हाइफन चिह्न लगाता है।"
          },
          {
            type: "Challenge Question",
            difficulty: "Challenge",
            question: `पायथन में डायनेमिक टाइपिंग का क्या मतलब है?`,
            options: [
              "वेरिएबल का डेटा टाइप पहले से तय नहीं करना पड़ता, वैल्यू के अनुसार बदलता है",
              "डेटा टाइप कभी नहीं बदल सकता",
              "सिर्फ संख्याएं ही इस्तेमाल हो सकती हैं",
              "यह केवल ब्राउज़र में चलता है"
            ],
            correctAnswer: "वेरिएबल का डेटा टाइप पहले से तय नहीं करना पड़ता, वैल्यू के अनुसार बदलता है",
            explanation: "पायथन अपने आप रनटाइम पर वेरिएबल का डेटा प्रकार पहचान लेता है।"
          }
        ]
      };
    }

    // 2. Operators (Arithmetic, Comparison, Logical, Membership, Identity)
    if (t.includes("operator") || t.includes("arithmetic") || t.includes("comparison") || t.includes("logical") || t.includes("membership") || t.includes("identity") || t.includes("precedence")) {
      return {
        en: [
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `What is the result of floor division ` + "`7 // 2` in Python?",
            options: ["3", "3.5", "4", "1"],
            correctAnswer: "3",
            explanation: "Floor division `//` divides and rounds down to the nearest whole integer (7 // 2 = 3)."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Which operator calculates the remainder of a division in Python?`,
            options: ["% (Modulus)", "// (Floor Division)", "/ (True Division)", "** (Exponent)"],
            correctAnswer: "% (Modulus)",
            explanation: "The `%` modulus operator computes the remainder (e.g., 7 % 2 = 1)."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `What operator is used to test equality between two values in Python?`,
            options: ["==", "=", "===", "equals"],
            correctAnswer: "==",
            explanation: "`==` tests value equality, while `=` assigns a value to a variable."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `What is the output of ` + "`True and not False`?",
            options: ["True", "False", "None", "Error"],
            correctAnswer: "True",
            explanation: "`not False` evaluates to True, and `True and True` evaluates to True."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `What is the difference between ` + "`is` and `==` in Python?",
            options: [
              "`is` checks memory object identity, while `==` checks value equality",
              "`==` checks memory addresses, while `is` checks data types",
              "Both are identical aliases",
              "`is` only works on strings"
            ],
            correctAnswer: "`is` checks memory object identity, while `==` checks value equality",
            explanation: "`is` verifies `id(a) == id(b)` (same memory address), whereas `==` verifies value equality."
          },
          {
            type: "Challenge Question",
            difficulty: "Challenge",
            question: `Evaluate the expression following operator precedence: ` + "`2 + 3 * 2 ** 3`",
            options: ["26", "40", "100", "32"],
            correctAnswer: "26",
            explanation: "Exponentiation comes first: `2 ** 3 = 8`. Then multiplication: `3 * 8 = 24`. Finally addition: `2 + 24 = 26`."
          }
        ],
        te_en: [
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Python lo floor division ` + "`7 // 2` result em vastundi?",
            options: ["3", "3.5", "4", "1"],
            correctAnswer: "3",
            explanation: "Floor division `//` decimal part ni remove chesi whole number 3 isthundi."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Division remainder find cheyyadaniki ఏ operator use chestham?`,
            options: ["%", "//", "/", "**"],
            correctAnswer: "%",
            explanation: "`%` (Modulus) operator remainder ని లెక్కించడానికి ఉపయోగపడుతుంది."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Rendu values equal ah kaada check cheyyadaniki edi vadali?`,
            options: ["==", "=", "===", "equals"],
            correctAnswer: "==",
            explanation: "`==` equality check chesthundi, `=` value assign chesthundi."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `True and not False expression result enti?`,
            options: ["True", "False", "None", "Error"],
            correctAnswer: "True",
            explanation: "`not False` True avtundi, and `True and True` = True."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: "`is` and `==` madhya difference enti?",
            options: [
              "`is` memory location check chesthundi, `==` values equal ah kaada check chesthundi",
              "`==` memory check chesthundi",
              "Renditiki difference ledu",
              "`is` numbers lo pani cheyyadu"
            ],
            correctAnswer: "`is` memory location check chesthundi, `==` values equal ah kaada check chesthundi",
            explanation: "`is` object identity (id) check chestundi, `==` value check chestundi."
          },
          {
            type: "Challenge Question",
            difficulty: "Challenge",
            question: `2 + 3 * 2 ** 3 expression output enti?`,
            options: ["26", "40", "100", "32"],
            correctAnswer: "26",
            explanation: "`2 ** 3 = 8`, `3 * 8 = 24`, `2 + 24 = 26`."
          }
        ],
        te: [
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `పైథాన్‌లో ఫ్లోర్ డివిజన్ ` + "`7 // 2` ఫలితం ఏమిటి?",
            options: ["3", "3.5", "4", "1"],
            correctAnswer: "3",
            explanation: "`//` గుర్తు దశాంశాలను తొలగించి పూర్ణాంకం 3 ని ఇస్తుంది."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `శేషం (Remainder) కనుగొనడానికి ఏ ఆపరేటర్ వాడతారు?`,
            options: ["%", "//", "/", "**"],
            correctAnswer: "%",
            explanation: "`%` (మాడ్యులస్) శేషాన్ని లెక్కిస్తుంది."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `రెండు విలువలు సమానమా కాదా అని పరీక్షించడానికి ఏది వాడతారు?`,
            options: ["==", "=", "===", "equals"],
            correctAnswer: "==",
            explanation: "`==` సమానత్వాన్ని పరీక్షిస్తుంది."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `True and not False ఫలితం ఏమిటి?`,
            options: ["True", "False", "None", "Error"],
            correctAnswer: "True",
            explanation: "`not False` True అవుతుంది, కాబట్టి ఫలితం True."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: "`is` మరియు `==` మధ్య తేడా ఏమిటి?",
            options: [
              "`is` మెమరీ అడ్రస్ పరీక్షిస్తుంది, `==` విలువలను పరీక్షిస్తుంది",
              "`==` మెమరీని పరీక్షిస్తుంది",
              "రెండూ ఒకటే",
              "`is` కేవలం స్ట్రింగ్స్‌కి మాత్రమే"
            ],
            correctAnswer: "`is` మెమరీ అడ్రస్ పరీక్షిస్తుంది, `==` విలువలను పరీక్షిస్తుంది",
            explanation: "`is` ఆబ్జెక్ట్ ఐడెంటిటీని, `==` డేటా విలువను పరీక్షిస్తుంది."
          },
          {
            type: "Challenge Question",
            difficulty: "Challenge",
            question: `2 + 3 * 2 ** 3 ఫలితం ఎంత?`,
            options: ["26", "40", "100", "32"],
            correctAnswer: "26",
            explanation: "మొదట ఘాతం `2 ** 3 = 8`, గుణకారం `3 * 8 = 24`, కూడిక `2 + 24 = 26`."
          }
        ],
        hi: [
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `पायथन में ` + "`7 // 2` का परिणाम क्या होगा?",
            options: ["3", "3.5", "4", "1"],
            correctAnswer: "3",
            explanation: "फ्लोर डिवीजन `//` दशमलव हटाकर सबसे छोटा पूर्णांक 3 देता है।"
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `शेषफल (Remainder) ज्ञात करने के लिए किस ऑपरेटर का उपयोग होता है?`,
            options: ["%", "//", "/", "**"],
            correctAnswer: "%",
            explanation: "`%` (मॉड्यूलो) ऑपरेटर शेषफल देता है।"
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `दो मानों की बराबरी जांचने के लिए किस ऑपरेटर का उपयोग होता है?`,
            options: ["==", "=", "===", "equals"],
            correctAnswer: "==",
            explanation: "`==` मानों की तुलना करता है।"
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `True and not False का परिणाम क्या होगा?`,
            options: ["True", "False", "None", "Error"],
            correctAnswer: "True",
            explanation: "`not False` True बनता है, इसलिए `True and True = True`।"
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: "`is` और `==` में क्या अंतर है?",
            options: [
              "`is` मेमोरी एड्रेस चेक करता है, `==` वैल्यू की तुलना करता है",
              "`==` मेमोरी चेक करता है",
              "दोनों एक समान हैं",
              "`is` केवल स्ट्रिंग में चलता है"
            ],
            correctAnswer: "`is` मेमोरी एड्रेस चेक करता है, `==` वैल्यू की तुलना करता है",
            explanation: "`is` मेमोरी ऑब्जेक्ट की पहचान करता है, जबकि `==` मान की जांच करता है।"
          },
          {
            type: "Challenge Question",
            difficulty: "Challenge",
            question: `2 + 3 * 2 ** 3 का सही उत्तर क्या होगा?`,
            options: ["26", "40", "100", "32"],
            correctAnswer: "26",
            explanation: "पहले घात `2 ** 3 = 8`, फिर गुणा `3 * 8 = 24`, फिर जोड़ `2 + 24 = 26`।"
          }
        ]
      };
    }

    // 3. Loops (for, while, range, break, continue)
    if (t.includes("loop") || t.includes("range") || t.includes("break") || t.includes("continue") || t.includes("while") || t.includes("nested_loop")) {
      return {
        en: [
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `What numbers are generated by ` + "`range(1, 5)` in Python?",
            options: ["1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "1, 5"],
            correctAnswer: "1, 2, 3, 4",
            explanation: "`range(start, stop)` is stop-exclusive: it generates numbers from 1 up to (but not including) 5."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Which keyword immediately terminates and exits a loop in Python?`,
            options: ["break", "continue", "pass", "exit()"],
            correctAnswer: "break",
            explanation: "The `break` statement instantly exits the enclosing loop."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Which keyword skips the rest of the current iteration and moves to the next loop step?`,
            options: ["continue", "break", "pass", "skip"],
            correctAnswer: "continue",
            explanation: "The `continue` statement skips to the next iteration of the loop."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `What happens if a while loop condition never becomes False?`,
            options: [
              "It becomes an infinite loop and runs indefinitely until stopped",
              "Python raises an automatic SyntaxError",
              "It runs exactly 100 times and shuts down",
              "The computer turns off"
            ],
            correctAnswer: "It becomes an infinite loop and runs indefinitely until stopped",
            explanation: "A loop without a terminating condition or break executes indefinitely (infinite loop)."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `What does the ` + "`else` block attached to a for loop do?",
            options: [
              "Executes only if the loop finishes normally without hitting a break statement",
              "Executes only when break is triggered",
              "Executes on every iteration",
              "Raises an error in Python"
            ],
            correctAnswer: "Executes only if the loop finishes normally without hitting a break statement",
            explanation: "The `else` clause in a Python for/while loop runs if and only if the loop completes without a `break`."
          },
          {
            type: "Challenge Question",
            difficulty: "Challenge",
            question: `Predict the output of:` + "\n```python\nfor i in range(3):\n    if i == 1: continue\n    print(i, end=' ')\n```",
            options: ["0 2 ", "0 1 2 ", "1 2 ", "0 "],
            correctAnswer: "0 2 ",
            explanation: "When `i == 1`, `continue` skips the print call, outputting `0 2 `."
          }
        ],
        te_en: [
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Python lo ` + "`range(1, 5)` ఏ numbers ni generate chesthundi?",
            options: ["1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "1, 5"],
            correctAnswer: "1, 2, 3, 4",
            explanation: "`range(1, 5)` stop value 5 ni include cheyyadu, 1 nunchi 4 varaku isthundi."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Loop ni immediate ga stop chesi bayataki ravalante ఏ keyword use cheyyali?`,
            options: ["break", "continue", "pass", "stop"],
            correctAnswer: "break",
            explanation: "`break` keyword loop execution ni ventane terminate chestundi."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `Current iteration skip chesi next loop round ki velladaniki edi vadali?`,
            options: ["continue", "break", "pass", "next"],
            correctAnswer: "continue",
            explanation: "`continue` statement current step skip chesi next iteration ki velthundi."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `While loop condition eppudu False avvakapothe em jarugutundi?`,
            options: [
              "Infinite loop ga continuous ga run avtundi",
              "SyntaxError vastundi",
              "Auto ga 10 times run ayyi aaguthundi",
              "Computer crash avtundi"
            ],
            correctAnswer: "Infinite loop ga continuous ga run avtundi",
            explanation: "Terminating condition leni loop infinite loop ga continuous ga run avtundi."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `For loop tho paatu ` + "`else:` block raste adi eppudu run avtundi?",
            options: [
              "Loop lo break statement hit avvakunda complete ayna tharvatha",
              "Break execute ayna ventane",
              "Prathi round lo",
              "Error vastundi"
            ],
            correctAnswer: "Loop lo break statement hit avvakunda complete ayna tharvatha",
            explanation: "Loop normal ga complete ayithe `else` block execute avtundi."
          },
          {
            type: "Challenge Question",
            difficulty: "Challenge",
            question: `for i in range(3): if i == 1: continue; print(i) output enti?`,
            options: ["0 2 ", "0 1 2 ", "1 2 ", "0 "],
            correctAnswer: "0 2 ",
            explanation: "`i == 1` ayinappudu `continue` skip chestundi, kabatti `0 2 ` print avtundi."
          }
        ],
        te: [
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `పైథాన్‌లో ` + "`range(1, 5)` ఏ సంఖ్యలను ఉత్పత్తి చేస్తుంది?",
            options: ["1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "1, 5"],
            correctAnswer: "1, 2, 3, 4",
            explanation: "`range(1, 5)` లో 5 చేర్చబడదు, కాబట్టి 1 నుండి 4 వరకు వస్తుంది."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `లూప్‌ను వెంటనే ఆపి బయటకు రావడానికి ఏ కీవర్డ్ వాడతారు?`,
            options: ["break", "continue", "pass", "exit"],
            correctAnswer: "break",
            explanation: "`break` స్టేట్‌మెంట్ లూప్‌ను వెంటనే ఆపివేస్తుంది."
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `ప్రస్తుత స్టెప్‌ను దాటవేసి తర్వాతి రౌండ్‌కు వెళ్లడానికి ఏది వాడతారు?`,
            options: ["continue", "break", "pass", "skip"],
            correctAnswer: "continue",
            explanation: "`continue` స్టేట్‌మెంట్ తర్వాతి రౌండ్‌కు వెళుతుంది."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `While లూప్ షరతు ఎప్పటికీ False కాకపోతే ఏమవుతుంది?`,
            options: [
              "అనంతమైన లూప్ (Infinite loop) గా నిరంతరం నడుస్తుంది",
              "ఎర్రర్ వస్తుంది",
              "10 సార్లు మాత్రమే నడుస్తుంది",
              "కంప్యూటర్ ఆగిపోతుంది"
            ],
            correctAnswer: "అనంతమైన లూప్ (Infinite loop) గా నిరంతరం నడుస్తుంది",
            explanation: "షరతు మారకపోతే లూప్ ఆగకుండా తిరుగుతూనే ఉంటుంది."
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `For లూప్‌లో ` + "`else:` ఎప్పుడు అమలవుతుంది?",
            options: [
              "లూప్ బ్రేక్ లేకుండా విజయవంతంగా పూర్తయినప్పుడు",
              "బ్రేక్ జరిగినప్పుడు",
              "ప్రతి రౌండ్‌లో",
              "ఎర్రర్ వచ్చినప్పుడు"
            ],
            correctAnswer: "లూప్ బ్రేక్ లేకుండా విజయవంతంగా పూర్తయినప్పుడు",
            explanation: "లూప్ సహజంగా ముగిసినప్పుడు మాత్రమే `else` రన్ అవుతుంది."
          },
          {
            type: "Challenge Question",
            difficulty: "Challenge",
            question: `for i in range(3): if i == 1: continue; print(i) ఫలితం ఏమిటి?`,
            options: ["0 2 ", "0 1 2 ", "1 2 ", "0 "],
            correctAnswer: "0 2 ",
            explanation: "`i == 1` వద్ద continue అవ్వడం వల్ల `0 2 ` ముద్రించబడుతుంది."
          }
        ],
        hi: [
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `पायथन में ` + "`range(1, 5)` कौन सी संख्याएं देता है?",
            options: ["1, 2, 3, 4", "1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "1, 5"],
            correctAnswer: "1, 2, 3, 4",
            explanation: "`range(1, 5)` में 5 शामिल नहीं होता, इसलिए 1 से 4 तक संख्याएं आती हैं।"
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `लूप को तुरंत समाप्त करने के लिए किस कीवर्ड का उपयोग होता है?`,
            options: ["break", "continue", "pass", "exit"],
            correctAnswer: "break",
            explanation: "`break` स्टेटमेंट लूप को तुरंत बंद कर देता है।"
          },
          {
            type: "Multiple Choice",
            difficulty: "Easy",
            question: `मौजूदा चक्र को छोड़कर अगले लूप चक्र पर जाने के लिए किसका उपयोग होता है?`,
            options: ["continue", "break", "pass", "skip"],
            correctAnswer: "continue",
            explanation: "`continue` स्टेटमेंट अगले राउंड पर भेज देता है।"
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `यदि While लूप की शर्त कभी False न हो तो क्या होगा?`,
            options: [
              "वह अनंत लूप (Infinite loop) बनकर लगातार चलता रहेगा",
              "SyntaxError आएगा",
              "10 बार चलकर बंद हो जाएगा",
              "कंप्यूटर बंद हो जाएगा"
            ],
            correctAnswer: "वह अनंत लूप (Infinite loop) बनकर लगातार चलता रहेगा",
            explanation: "रुकने की शर्त न होने पर लूप अनिश्चितकाल तक चलता रहता है।"
          },
          {
            type: "Multiple Choice",
            difficulty: "Medium",
            question: `For लूप के साथ ` + "`else:` कब चलता है?",
            options: [
              "जब लूप बिना किसी break के पूरा समाप्त होता है",
              "जब break होता है",
              "हर चक्र में",
              "कभी नहीं"
            ],
            correctAnswer: "जब लूप बिना किसी break के पूरा समाप्त होता है",
            explanation: "लूप के सामान्य अंत पर ही `else` ब्लॉक रन होता है।"
          },
          {
            type: "Challenge Question",
            difficulty: "Challenge",
            question: `for i in range(3): if i == 1: continue; print(i) का आउटपुट क्या होगा?`,
            options: ["0 2 ", "0 1 2 ", "1 2 ", "0 "],
            correctAnswer: "0 2 ",
            explanation: "`i == 1` पर continue कॉल होने के कारण `0 2 ` प्रिंट होगा।"
          }
        ]
      };
    }

    // Default concept questions tailored for all other topics
    return {
      en: [
        {
          type: "Multiple Choice",
          difficulty: "Easy",
          question: `What is the core purpose of ${title} in Python?`,
          options: [
            `To organize, execute, and structure Python code cleanly`,
            `To erase operating system drivers`,
            `To turn off computer hardware`,
            `To play random audio beeps`
          ],
          correctAnswer: `To organize, execute, and structure Python code cleanly`,
          explanation: `${title} is an essential Python feature designed for clean, robust programming.`
        },
        {
          type: "Multiple Choice",
          difficulty: "Easy",
          question: `How does Python ensure high code readability when working with ${title}?`,
          options: [
            "Through clean, intuitive syntax and minimal boilerplate",
            "By requiring complex manual memory pointers",
            "By enforcing mandatory XML configuration files",
            "By disallowing all variables"
          ],
          correctAnswer: "Through clean, intuitive syntax and minimal boilerplate",
          explanation: "Python emphasizes readable, English-like syntax across all core features."
        },
        {
          type: "Multiple Choice",
          difficulty: "Easy",
          question: `Is Python case-sensitive when evaluating identifiers and keywords for ${title}?`,
          options: [
            "Yes, uppercase and lowercase names are completely distinct",
            "No, capitalization is ignored entirely",
            "Only inside numerical calculations",
            "Only when offline"
          ],
          correctAnswer: "Yes, uppercase and lowercase names are completely distinct",
          explanation: "Python is case-sensitive: `Score` and `score` represent distinct identifiers."
        },
        {
          type: "Multiple Choice",
          difficulty: "Medium",
          question: `What is a common best practice when implementing ${title} in Python projects?`,
          options: [
            "Follow PEP 8 styling, use descriptive naming, and handle edge cases gracefully",
            "Write everything inside a single 10,000-line global script",
            "Avoid all comments and documentation",
            "Disable all error checks"
          ],
          correctAnswer: "Follow PEP 8 styling, use descriptive naming, and handle edge cases gracefully",
          explanation: "PEP 8 standards and clean modular design ensure code maintainability."
        },
        {
          type: "Multiple Choice",
          difficulty: "Medium",
          question: `What happens if invalid syntax or undefined symbols are passed while using ${title}?`,
          options: [
            "Python interpreter raises a descriptive exception (e.g. SyntaxError or NameError)",
            "The system converts the disk to read-only",
            "The program silently ignores the error and proceeds",
            "The code deletes the file"
          ],
          correctAnswer: "Python interpreter raises a descriptive exception (e.g. SyntaxError or NameError)",
          explanation: "Python raises descriptive runtime or parse exceptions to pinpoint errors quickly."
        },
        {
          type: "Challenge Question",
          difficulty: "Challenge",
          question: `In production enterprise architectures, why is ${title} valued for scalability?`,
          options: [
            "It provides modular, maintainable, and testable components with low cognitive overhead",
            "It bypasses all network security firewalls",
            "It guarantees zero CPU usage at all times",
            "It replaces all database storage"
          ],
          correctAnswer: "It provides modular, maintainable, and testable components with low cognitive overhead",
          explanation: "Clean abstraction and modularity enable engineering teams to scale systems effectively."
        }
      ],
      te_en: [
        {
          type: "Multiple Choice",
          difficulty: "Easy",
          question: `Python lo ${title} mukhyanga enduku use chestham?`,
          options: [
            `Program code ni clean ga and modular ga manage cheyyadaniki`,
            `System files ni delete cheyyadaniki`,
            `Computer shutdown cheyyadaniki`,
            `Only games play cheyyadaniki`
          ],
          correctAnswer: `Program code ni clean ga and modular ga manage cheyyadaniki`,
          explanation: `${title} anedi program execution and data flow ni manage chesthundi.`
        },
        {
          type: "Multiple Choice",
          difficulty: "Easy",
          question: `Python code readability ni ela ensure chesthundi?`,
          options: [
            "Clean and simple English-like syntax dwara",
            "Complex pointers rayadam dwara",
            "XML files use chesi",
            "Variables vadakunda"
          ],
          correctAnswer: "Clean and simple English-like syntax dwara",
          explanation: "Python clean syntax valla evaraina easy ga code read cheyyagalaru."
        },
        {
          type: "Multiple Choice",
          difficulty: "Easy",
          question: `Python case-sensitive ah kaada?`,
          options: [
            "Yes, case-sensitive (Score and score are different)",
            "No, case matter avvadu",
            "Only numbers lone",
            "None"
          ],
          correctAnswer: "Yes, case-sensitive (Score and score are different)",
          explanation: "Python lo capital and small letters ni completely separate variables ga treat chesthundi."
        },
        {
          type: "Multiple Choice",
          difficulty: "Medium",
          question: `Python lo code rasetappudu best practice edi?`,
          options: [
            "PEP 8 guidelines follow avvadam and clear variable names rayadam",
            "Single line lo motham code rayadam",
            "Comments eppudu rayakudadu",
            "Errors ni ignore cheyyadam"
          ],
          correctAnswer: "PEP 8 guidelines follow avvadam and clear variable names rayadam",
          explanation: "PEP 8 standards follow avthe code maintainable ga untundi."
        },
        {
          type: "Multiple Choice",
          difficulty: "Medium",
          question: `Define cheyyani variable ni access cheyyadaniki try chesthe em error vastundi?`,
          options: ["NameError", "ZeroError", "FileError", "SyntaxError"],
          correctAnswer: "NameError",
          explanation: "Define cheyyani variable ni access cheyyadaniki try chesthe Python NameError isthundi."
        },
        {
          type: "Challenge Question",
          difficulty: "Challenge",
          question: `Production software systems lo ${title} enduku useful?`,
          options: [
            "Clean architecture and scalable maintenance kosam",
            "Security break cheyyadaniki",
            "Zero CPU consume cheyyadaniki",
            "None"
          ],
          correctAnswer: "Clean architecture and scalable maintenance kosam",
          explanation: "Modular coding valla software scale avvadam easy avtundi."
        }
      ],
      te: [
        {
          type: "Multiple Choice",
          difficulty: "Easy",
          question: `పైథాన్‌లో ${title} యొక్క ముఖ్యమైన ఉపయోగం ఏమిటి?`,
          options: [
            `కోడ్‌ను స్పష్టంగా మరియు సులభంగా నిర్వహించడానికి`,
            `ఫైళ్లను తొలగించడానికి`,
            `కంప్యూటర్ ఆపడానికి`,
            `పాటలు వినడానికి`
          ],
          correctAnswer: `కోడ్‌ను స్పష్టంగా మరియు సులభంగా నిర్వహించడానికి`,
          explanation: `${title} ప్రోగ్రామ్‌ను శుభ్రంగా రాయడానికి ఉపయోగపడుతుంది.`
        },
        {
          type: "Multiple Choice",
          difficulty: "Easy",
          question: `పైథాన్ కేస్-సెన్సిటివ్ అవునా కాదా?`,
          options: ["అవును (A మరియు a వేర్వేరు)", "కాదు", "సంఖ్యలలో మాత్రమే", "ఏదీ కాదు"],
          correctAnswer: "అవును (A మరియు a వేర్వేరు)",
          explanation: "పైథాన్‌లో పెద్ద అక్షరాలు మరియు చిన్న అక్షరాలు వేర్వేరుగా పరిగణించబడతాయి."
        },
        {
          type: "Multiple Choice",
          difficulty: "Easy",
          question: `పైథాన్ వేరియబుల్స్ కోసం ఉత్తమ పద్ధతి ఏది?`,
          options: ["snake_case", "camelCase", "PascalCase", "kebab-case"],
          correctAnswer: "snake_case",
          explanation: "PEP 8 ప్రకారం snake_case వాడటం ఉత్తమం."
        },
        {
          type: "Multiple Choice",
          difficulty: "Medium",
          question: `విలువ ఇవ్వకుండా వేరియబుల్ వాడితే ఏ ఎర్రర్ వస్తుంది?`,
          options: ["NameError", "ValueError", "TypeError", "ZeroError"],
          correctAnswer: "NameError",
          explanation: "గుర్తు తెలియని పేరును పిలిచినప్పుడు పైథాన్ NameError ఇస్తుంది."
        },
        {
          type: "Multiple Choice",
          difficulty: "Medium",
          question: `పైథాన్ కోడ్ రాయడంలో పాటించాల్సిన నియమాలు ఏవి?`,
          options: [
            "స్పష్టమైన పేర్లు మరియు సరైన ఇండెంటేషన్ వాడటం",
            "ఒకే లైన్‌లో మొత్తం కోడ్ రాయడం",
            "కామెంట్స్ రాయకపోవడం",
            "ఎర్రర్లను దాచడం"
          ],
          correctAnswer: "స్పష్టమైన పేర్లు మరియు సరైన ఇండెంటేషన్ వాడటం",
          explanation: "స్పష్టమైన పేర్లు కోడ్‌ను చదవడానికి సులభతరం చేస్తాయి."
        },
        {
          type: "Challenge Question",
          difficulty: "Challenge",
          question: `పైథాన్‌లో ${title} వల్ల కలిగే ప్రధాన ప్రయోజనం ఏమిటి?`,
          options: [
            "నాణ్యమైన మరియు వేగవంతమైన సాఫ్ట్‌వేర్ అభివృద్ధి",
            "కంప్యూటర్ వేగం తగ్గించడం",
            "ఫైల్స్ మాయం చేయడం",
            "ఏదీ కాదు"
          ],
          correctAnswer: "నాణ్యమైన మరియు వేగవంతమైన సాఫ్ట్‌వేర్ అభివృద్ధి",
          explanation: "పైథాన్ మాడ్యులర్ భావనలు సాఫ్ట్‌వేర్‌ను మరింత బలంగా నిర్మిస్తాయి."
        }
      ],
      hi: [
        {
          type: "Multiple Choice",
          difficulty: "Easy",
          question: `पायथन में ${title} का मुख्य उद्देश्य क्या है?`,
          options: [
            `कोड को साफ, स्पष्ट और सही तरीके से व्यवस्थित करना`,
            `फाइलों को मिटाना`,
            `कंप्यूटर बंद करना`,
            `ध्वनि बजाना`
          ],
          correctAnswer: `कोड को साफ, स्पष्ट और सही तरीके से व्यवस्थित करना`,
          explanation: `${title} प्रोग्राम को आसान और सही बनाने में मदद करता है।`
        },
        {
          type: "Multiple Choice",
          difficulty: "Easy",
          question: `क्या पायथन केस-सेंसिटिव है?`,
          options: ["हाँ (Score और score अलग हैं)", "नहीं", "सिर्फ नंबरों में", "कोई नहीं"],
          correctAnswer: "हाँ (Score और score अलग हैं)",
          explanation: "पायथन में बड़े और छोटे अक्षर अलग-अलग माने जाते हैं।"
        },
        {
          type: "Multiple Choice",
          difficulty: "Easy",
          question: `पायथन में वेरिएबल नामकरण की सबसे अच्छी शैली कौन सी है?`,
          options: ["snake_case", "camelCase", "PascalCase", "kebab-case"],
          correctAnswer: "snake_case",
          explanation: "PEP 8 के अनुसार snake_case सबसे सही तरीका है।"
        },
        {
          type: "Multiple Choice",
          difficulty: "Medium",
          question: `बिना मान दिए वेरिएबल इस्तेमाल करने पर क्या एरर आता है?`,
          options: ["NameError", "ValueError", "TypeError", "ZeroError"],
          correctAnswer: "NameError",
          explanation: "अगर वेरिएबल पहले से नहीं बना है, तो NameError आता है।"
        },
        {
          type: "Multiple Choice",
          difficulty: "Medium",
          question: `पायथन में कोड लिखते समय सबसे अच्छी आदत क्या है?`,
          options: [
            "PEP 8 नियमों का पालन और स्पष्ट नामकरण",
            "एक ही लाइन में पूरा कोड लिखना",
            "कमेंट्स कभी न लिखना",
            "एरर को नजरअंदाज करना"
          ],
          correctAnswer: "PEP 8 नियमों का पालन और स्पष्ट नामकरण",
          explanation: "साफ कोड और सही नियम प्रोग्राम को बनाए रखने में मदद करते हैं।"
        },
        {
          type: "Challenge Question",
          difficulty: "Challenge",
          question: `उत्पादन (Production) स्तर पर ${title} का क्या महत्व है?`,
          options: [
            "मजबूत, समझने योग्य और स्केलेबल सिस्टम तैयार करना",
            "सिस्टम को क्रैश करना",
            "मेमोरी को बर्बाद करना",
            "कोई नहीं"
          ],
          correctAnswer: "मजबूत, समझने योग्य और स्केलेबल सिस्टम तैयार करना",
          explanation: "मॉड्यूलर डिजाइन की मदद से बड़े सिस्टम को आसानी से बढ़ाया जा सकता है।"
        }
      ]
    };
  };

  const pool = buildConceptQuestions();
  if (lang === "english") return pool.en;
  if (lang === "english-telugu") return pool.te_en;
  if (lang === "telugu") return pool.te;
  return pool.hi;
}

// -------------------------------------------------------------
// LOCALIZED CHALLENGE
// -------------------------------------------------------------
function getLocalizedChallenge(lang, stage, title) {
  if (lang === "english") return `Write your own script demonstrating ${title} and verify the output in the console!`;
  if (lang === "english-telugu") return `Nuvve sonthaga ${title} use chesi oka script rasi console lo verify cheyyi mama!`;
  if (lang === "telugu") return `${title} ని ఉపయోగించి సొంతంగా ఒక కోడ్ రాసి ఫలితాన్ని చూడండి!`;
  return `${title} का उपयोग करके खुद एक छोटा कोड लिखें और परिणाम देखें!`;
}

// -------------------------------------------------------------
// LOCALIZED INTERVIEW QUESTIONS
// -------------------------------------------------------------
function getLocalizedInterview(lang, stage, title) {
  const isKidYoung = stage === "kid" || stage === "young";

  if (lang === "english") {
    if (isKidYoung) {
      return [
        {
          type: "Quick Question",
          question: `What is ${title} in simple words?`,
          answer: `${title} is a friendly helper in Python that makes our instructions work!`
        },
        {
          type: "Fun Question",
          question: `Why do programmers love ${title}?`,
          answer: `Because it makes coding fast, easy, and super fun!`
        }
      ];
    }

    return [
      {
        type: "Basic Question",
        question: `What is ${title} and how does it work in Python?`,
        answer: `${title} provides a clean, standardized syntax to manage program execution and memory state.`
      },
      {
        type: "Practical Question",
        question: `Can you give a practical example of ${title} in Python?`,
        answer: `Yes. In day-to-day coding, ${title} is used to structure data and prevent redundant computations.`
      },
      {
        type: "Scenario Question",
        question: `When should you use ${title} in a real-world enterprise project?`,
        answer: `Use ${title} when building scalable, readable, and maintainable services where state transitions must be explicit.`
      },
      {
        type: "Common Interview Mistake",
        question: `What mistake do candidates often make regarding ${title}?`,
        answer: `Assuming static typing constraints or over-complicating logic when Python provides concise built-ins.`
      },
      {
        type: "Good Interview Answer",
        question: `How would you summarize ${title} in a technical interview?`,
        answer: `I describe ${title} as a core Python building block that ensures high code readability and clean memory management.`
      }
    ];
  }

  if (lang === "english-telugu") {
    if (isKidYoung) {
      return [
        {
          type: "Quick Question",
          question: `${title} ante enti simple ga?`,
          answer: `${title} anedi Python lo manam computer ki panulu cheppadaniki use chese oka magical tool!`
        },
        {
          type: "Fun Question",
          question: `Coders andaru ${title} ni enduku istapadatharu?`,
          answer: `Endukante daani valla coding chala easy ga and fast ga aipothundi!`
        }
      ];
    }

    return [
      {
        type: "Basic Question",
        question: `Python lo ${title} ela work avtundi?`,
        answer: `${title} anedi code execution and memory state ni clean ga manage cheyyadaniki help chestundi.`
      },
      {
        type: "Practical Question",
        question: `${title} ki oka practical code example cheppandi?`,
        answer: `Real-world projects lo data ni structure chesi calculations cheyyadaniki ${title} ni use chestham.`
      },
      {
        type: "Scenario Question",
        question: `Real-world company projects lo ${title} ni eppudu use chestham?`,
        answer: `Modular, readable, and scalable backend applications develop chesetappudu ${title} ni vaadathamu.`
      },
      {
        type: "Common Interview Mistake",
        question: `Interviews lo ${title} gurinchi candidates chese common mistake enti?`,
        answer: `Python dynamic typing and built-in features ni marchipoyi unnecessarily complex code rayadam.`
      },
      {
        type: "Good Interview Answer",
        question: `Technical interview lo ${title} ni ela explain cheyyali?`,
        answer: `${title} anedi Python clean syntax and memory management ki essential concept ani simple ga explain cheyyali.`
      }
    ];
  }

  if (lang === "telugu") {
    return [
      {
        type: "Basic Question",
        question: `పైథాన్‌లో ${title} ఎలా పనిచేస్తుంది?`,
        answer: `${title} ప్రోగ్రామ్ మరియు మెమరీని సరిగ్గా నిర్వహించడానికి సహాయపడుతుంది.`
      },
      {
        type: "Practical Question",
        question: `${title} కి ఒక ఉదాహరణ చెప్పండి?`,
        answer: `డేటాను క్రమపద్ధతిలో ఉంచి కోడ్‌ను స్పష్టంగా అమలు చేయడానికి ${title} ఉపయోగపడుతుంది.`
      },
      {
        type: "Scenario Question",
        question: `రియల్ ప్రాజెక్టులలో ${title} ని ఎప్పుడు వాడతాం?`,
        answer: `కోడ్ సులభంగా నిర్వహించదగినదిగా మరియు వేగంగా పనిచేయడానికి వాడతాం.`
      }
    ];
  }

  // Hindi
  return [
    {
      type: "Basic Question",
      question: `पायथन में ${title} कैसे काम करता है?`,
      answer: `${title} प्रोग्राम और मेमोरी को सही तरीके से मैनेज करने में मदद करता है।`
    },
    {
      type: "Practical Question",
      question: `${title} का एक उपयोगी उदाहरण क्या है?`,
      answer: `डेटा को सही तरीके से स्टोर करने और कोड को आसान बनाने के लिए हम ${title} का उपयोग करते हैं।`
    },
    {
      type: "Scenario Question",
      question: `असली प्रोजेक्ट्स में ${title} का उपयोग कब किया जाता है?`,
      answer: `जब हमें कोड को साफ और मेंटेन करने योग्य बनाना होता है, तब हम इसका उपयोग करते हैं।`
    }
  ];
}
