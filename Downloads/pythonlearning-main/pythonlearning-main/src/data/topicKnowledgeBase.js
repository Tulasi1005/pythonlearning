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
    questions: getLocalizedQuestions(lang, stage, title),
    challenge: getLocalizedChallenge(lang, stage, title),
    interviewQuestions: getLocalizedInterview(lang, stage, title)
  };
}

function getStageCode(stage, title, concept) {
  const t = title.toLowerCase();

  // Variables & Naming & Constants
  if (t.includes("variable") || t.includes("constant") || t.includes("naming")) {
    if (stage === "kid") {
      return { code: `toy = "Teddy 🧸"\nprint(toy)`, output: `Teddy 🧸` };
    }
    if (stage === "young") {
      return { code: `player = "Rahul"\nscore = 100\nprint(player)\nprint(score)`, output: `Rahul\n100` };
    }
    if (stage === "college") {
      return { code: `name = "Rahul"\nage = 18\nmarks = 85\nprint(f"Student: {name}, Age: {age}, Marks: {marks}")`, output: `Student: Rahul, Age: 18, Marks: 85` };
    }
    if (stage === "graduate") {
      return { code: `salary = 45000\nbonus = 5000\ntotal = salary + bonus\nprint(f"Total Salary: \${total}")`, output: `Total Salary: $50000` };
    }
    return { code: `employee = {\n    "name": "Anjali",\n    "salary": 45000,\n    "department": "IT"\n}\nprint(employee["name"])\nprint(f"Salary: \${employee['salary']}")`, output: `Anjali\nSalary: $45000` };
  }

  // Output, Print, Hello
  if (t.includes("print") || t.includes("output") || t.includes("first python program") || t.includes("syntax")) {
    if (stage === "kid") {
      return { code: `print("Hello Teddy! 🧸")\nprint("I love Python! 🌟")`, output: `Hello Teddy! 🧸\nI love Python! 🌟` };
    }
    if (stage === "young") {
      return { code: `print("=== GAME START ===")\nprint("Player: Alex | Level: 1")`, output: `=== GAME START ===\nPlayer: Alex | Level: 1` };
    }
    if (stage === "college") {
      return { code: `name = "Priya"\ngpa = 3.9\nprint(f"Student: {name} | GPA: {gpa}")`, output: `Student: Priya | GPA: 3.9` };
    }
    if (stage === "graduate") {
      return { code: `status = "SUCCESS"\ncode = 200\nprint(f"Response: {status} (Code: {code})")`, output: `Response: SUCCESS (Code: 200)` };
    }
    return { code: `import sys\nprint("[INFO] Service worker initialized on port 8080", file=sys.stdout)`, output: `[INFO] Service worker initialized on port 8080` };
  }

  // Data Types & Types
  if (t.includes("type") || t.includes("int") || t.includes("float") || t.includes("boolean")) {
    if (stage === "kid") {
      return { code: `age = 5\nname = "Bunny"\nis_happy = True\nprint(name)\nprint(age)`, output: `Bunny\n5` };
    }
    if (stage === "young") {
      return { code: `level = 10\nspeed = 4.5\nis_alive = True\nprint(f"Level: {level}, Speed: {speed}")`, output: `Level: 10, Speed: 4.5` };
    }
    if (stage === "college") {
      return { code: `item_price = 19.99\nquantity = 3\ntotal = item_price * quantity\nprint(f"Total: \${total:.2f} (Type: {type(total).__name__})")`, output: `Total: $59.97 (Type: float)` };
    }
    if (stage === "graduate") {
      return { code: `user_id = 1045\nis_active = True\naccount_balance = 12500.50\nprint(f"ID: {user_id} | Balance: \${account_balance:,}")`, output: `ID: 1045 | Balance: $12,500.5` };
    }
    return { code: `from typing import Dict, Any\nconfig: Dict[str, Any] = {"port": 8000, "debug": False, "timeout": 3.5}\nprint(config)`, output: `{'port': 8000, 'debug': False, 'timeout': 3.5}` };
  }

  // Loops (For / While / Range / Break / Continue)
  if (t.includes("loop") || t.includes("range") || t.includes("break") || t.includes("continue") || t.includes("pass")) {
    if (stage === "kid") {
      return { code: `toys = ["🚗 Car", "🧸 Teddy", "⚽ Ball"]\nfor t in toys:\n    print(f"Playing with {t}!")`, output: `Playing with 🚗 Car!\nPlaying with 🧸 Teddy!\nPlaying with ⚽ Ball!` };
    }
    if (stage === "young") {
      return { code: `scores = [10, 25, 50]\nfor s in scores:\n    print(f"Earned {s} bonus points! 🏆")`, output: `Earned 10 bonus points! 🏆\nEarned 25 bonus points! 🏆\nEarned 50 bonus points! 🏆` };
    }
    if (stage === "college") {
      return { code: `marks = [85, 90, 78, 92]\ntotal = 0\nfor m in marks:\n    total += m\nprint(f"Average: {total / len(marks):.1f}")`, output: `Average: 86.2` };
    }
    if (stage === "graduate") {
      return { code: `salaries = [45000, 52000, 60000]\nfor idx, sal in enumerate(salaries, 1):\n    print(f"Employee #{idx}: \${sal:,}")`, output: `Employee #1: $45,000\nEmployee #2: $52,000\nEmployee #3: $60,000` };
    }
    return { code: `tasks = ["auth_check", "db_sync", "cache_warmup"]\nfor task in tasks:\n    print(f"[PROCESS] Completed {task} in 1.2ms")`, output: `[PROCESS] Completed auth_check in 1.2ms\n[PROCESS] Completed db_sync in 1.2ms\n[PROCESS] Completed cache_warmup in 1.2ms` };
  }

  // Conditions (if, if-else, if-elif-else, ternary)
  if (t.includes("condition") || t.includes("if") || t.includes("else") || t.includes("decision")) {
    if (stage === "kid") {
      return { code: `traffic_light = "Green"\nif traffic_light == "Green":\n    print("Go Go Vroom! 🚗💨")\nelse:\n    print("Stop and wait! 🛑")`, output: `Go Go Vroom! 🚗💨` };
    }
    if (stage === "young") {
      return { code: `health = 45\nif health > 50:\n    print("Player is energized! ⚡")\nelse:\n    print("Find a health potion! 🧪")`, output: `Find a health potion! 🧪` };
    }
    if (stage === "college") {
      return { code: `score = 88\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"\nelse:\n    grade = "C"\nprint(f"Final Grade: {grade}")`, output: `Final Grade: B` };
    }
    if (stage === "graduate") {
      return { code: `order_total = 120\nif order_total > 100:\n    discount = 15\nelse:\n    discount = 0\nprint(f"Net Pay: \${order_total - discount}")`, output: `Net Pay: $105` };
    }
    return { code: `status_code = 200\nif 200 <= status_code < 300:\n    print("[HTTP] Request succeeded")\nelse:\n    print("[HTTP] Alert: retry required")`, output: `[HTTP] Request succeeded` };
  }

  // Functions (def, parameters, return, args, kwargs, lambda)
  if (t.includes("function") || t.includes("parameter") || t.includes("argument") || t.includes("return") || t.includes("lambda") || t.includes("recursion") || t.includes("scope")) {
    if (stage === "kid") {
      return { code: `def say_hello(toy):\n    print(f"Hello my happy {toy}! 🧸")\n\nsay_hello("Teddy")`, output: `Hello my happy Teddy! 🧸` };
    }
    if (stage === "young") {
      return { code: `def power_up(player, boost):\n    return f"{player} gained +{boost} Power! ⚡"\n\nprint(power_up("Alex", 50))`, output: `Alex gained +50 Power! ⚡` };
    }
    if (stage === "college") {
      return { code: `def calculate_gpa(marks_list):\n    return sum(marks_list) / len(marks_list)\n\nprint(f"GPA: {calculate_gpa([85, 90, 80]):.2f}")`, output: `GPA: 85.00` };
    }
    if (stage === "graduate") {
      return { code: `def compute_net_salary(base, bonus, tax_rate=0.1):\n    gross = base + bonus\n    return gross * (1 - tax_rate)\n\nprint(f"Net: \${compute_net_salary(50000, 5000):,.2f}")`, output: `Net: $49,500.00` };
    }
    return { code: `def format_response(status, payload):\n    return {"status": status, "data": payload, "meta": {"cached": True}}\n\nprint(format_response(200, {"id": 101}))`, output: `{'status': 200, 'data': {'id': 101}, 'meta': {'cached': True}}` };
  }

  // Data Structures: Lists, Tuples, Sets, Dicts
  if (t.includes("list") || t.includes("tuple") || t.includes("set") || t.includes("dict")) {
    if (stage === "kid") {
      return { code: `toy_box = ["Teddy 🧸", "Car 🚗", "Ball ⚽"]\nprint(f"My first toy is: {toy_box[0]}")`, output: `My first toy is: Teddy 🧸` };
    }
    if (stage === "young") {
      return { code: `inventory = {"sword": 1, "potions": 3, "gold": 150}\nprint(f"Gold: {inventory['gold']}")`, output: `Gold: 150` };
    }
    if (stage === "college") {
      return { code: `student = {"id": 101, "name": "Rahul", "courses": ["CS101", "MATH201"]}\nprint(f"Enrolled courses: {len(student['courses'])}")`, output: `Enrolled courses: 2` };
    }
    if (stage === "graduate") {
      return { code: `department_salaries = {\n    "Engineering": [45000, 55000],\n    "Marketing": [38000, 42000]\n}\nprint(f"Eng Count: {len(department_salaries['Engineering'])}")`, output: `Eng Count: 2` };
    }
    return { code: `user_cache = {"usr_1": {"role": "admin", "active": True}}\nprint(f"Admin: {user_cache.get('usr_1', {}).get('role') == 'admin'}")`, output: `Admin: True` };
  }

  // OOP & Classes
  if (t.includes("class") || t.includes("object") || t.includes("oop") || t.includes("init") || t.includes("inheritance") || t.includes("polymorphism") || t.includes("encapsulation") || t.includes("abstraction")) {
    if (stage === "kid") {
      return { code: `class Toy:\n    def __init__(self, name):\n        self.name = name\n    def play(self):\n        print(f"Playing with {self.name}! 🧸")\n\nt = Toy("Teddy")\nt.play()`, output: `Playing with Teddy! 🧸` };
    }
    if (stage === "young") {
      return { code: `class Player:\n    def __init__(self, name, hp=100):\n        self.name = name\n        self.hp = hp\n    def take_hit(self, dmg):\n        self.hp -= dmg\n        print(f"{self.name} HP: {self.hp}")\n\np = Player("Alex")\np.take_hit(20)`, output: `Alex HP: 80` };
    }
    if (stage === "college") {
      return { code: `class Student:\n    def __init__(self, name, roll):\n        self.name = name\n        self.roll = roll\n    def display(self):\n        print(f"Student: {self.name} (Roll: {self.roll})")\n\ns = Student("Rahul", 101)\ns.display()`, output: `Student: Rahul (Roll: 101)` };
    }
    if (stage === "graduate") {
      return { code: `class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n    def apply_raise(self, percent):\n        self.salary += self.salary * (percent / 100)\n\ne = Employee("Anjali", 45000)\ne.apply_raise(10)\nprint(f"New Salary: \${e.salary:,.0f}")`, output: `New Salary: $49,500` };
    }
    return { code: `class UserService:\n    def __init__(self, db_conn):\n        self.db = db_conn\n    def get_user(self, uid):\n        return {"uid": uid, "name": "Anjali", "active": True}\n\ns = UserService("db_pool")\nprint(s.get_user(99))`, output: `{'uid': 99, 'name': 'Anjali', 'active': True}` };
  }

  
  // Web Development
  if (t.includes("web") || t.includes("flask") || t.includes("django") || t.includes("fastapi")) {
    if (stage === "kid") return { code: `print("dY~ Starting my web server for " + title)`, output: `dY~ Starting my web server for...` };
    if (stage === "young") return { code: `server_running = True\nif server_running:\n    print(f"[{title}] Server is Online!")`, output: `[Web] Server is Online!` };
    if (stage === "college") return { code: `def handle_request():\n    return {"status": 200, "page": title}\nprint(handle_request())`, output: `{'status': 200, 'page': ...}` };
    if (stage === "graduate") return { code: `from flask import Flask\napp = Flask(__name__)\n@app.route('/')\ndef home():\n    return f"Welcome to {title}"\nprint("Flask App Configured")`, output: `Flask App Configured` };
    return { code: `import fastapi\napp = fastapi.FastAPI()\n@app.get("/api/v1")\nasync def api_root():\n    return {"service": title, "status": "healthy"}\nprint("API Configured")`, output: `API Configured` };
  }
  // Data Analysis
  if (t.includes("data") || t.includes("numpy") || t.includes("pandas") || t.includes("csv") || t.includes("matplotlib")) {
    if (stage === "kid") return { code: `print("dY4O Analyzing data for " + title)`, output: `dY4O Analyzing data for...` };
    if (stage === "young") return { code: `scores = [90, 85, 95]\naverage = sum(scores) / len(scores)\nprint(f"Average: {average}")`, output: `Average: 90.0` };
    if (stage === "college") return { code: `import pandas as pd\ndata = {'Name': ['A', 'B'], 'Score': [90, 85]}\ndf = pd.DataFrame(data)\nprint(df.head())`, output: `  Name  Score\n0    A     90\n1    B     85` };
    if (stage === "graduate") return { code: `import numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(f"Mean: {np.mean(arr)}, Std: {np.std(arr):.2f}")`, output: `Mean: 3.0, Std: 1.41` };
    return { code: `import pandas as pd\n# Clean and aggregate data\ndf = pd.DataFrame({'Sales': [100, 200, None, 300]})\ndf.fillna(df['Sales'].mean(), inplace=True)\nprint(f"Total Sales: {df['Sales'].sum()}")`, output: `Total Sales: 800.0` };
  }
  // Machine Learning
  if (t.includes("machine learning") || t.includes("ml") || t.includes("supervised") || t.includes("unsupervised") || t.includes("regression") || t.includes("classification") || t.includes("clustering") || t.includes("training") || t.includes("testing")) {
    if (stage === "kid") return { code: `print("dY9  Training the robot for " + title)`, output: `dY9  Training the robot for...` };
    if (stage === "young") return { code: `robot_brain = {"cat": "dY~", "dog": "dY~Z"}\nprint(f"Prediction: {robot_brain.get('cat')}")`, output: `Prediction: dY~` };
    if (stage === "college") return { code: `from sklearn.linear_model import LinearRegression\nimport numpy as np\nX = np.array([[1], [2], [3]])\ny = np.array([2, 4, 6])\nmodel = LinearRegression().fit(X, y)\nprint(f"Prediction for 4: {model.predict([[4]])[0]:.2f}")`, output: `Prediction for 4: 8.00` };
    if (stage === "graduate") return { code: `from sklearn.ensemble import RandomForestClassifier\n# Train model on features\nprint("Model training completed. Accuracy: 95.4%")`, output: `Model training completed. Accuracy: 95.4%` };
    return { code: `import xgboost as xgb\n# DMatrix for advanced ML\nprint(f"[ML Ops] Model deployment ready for {title} (AUC: 0.92)")`, output: `[ML Ops] Model deployment ready for ... (AUC: 0.92)` };
  }
  // AI
  if (t.includes("ai") || t.includes("artificial intelligence") || t.includes("neural") || t.includes("nlp") || t.includes("vision")) {
    if (stage === "kid") return { code: `print("dY' Talking to the AI about " + title)`, output: `dY' Talking to the AI about...` };
    if (stage === "young") return { code: `ai_memory = []\nai_memory.append("User said Hello")\nprint("AI Response: Hi there!")`, output: `AI Response: Hi there!` };
    if (stage === "college") return { code: `def generate_text(prompt):\n    return f"AI Generated based on: {prompt}"\nprint(generate_text("Learn Python"))`, output: `AI Generated based on: Learn Python` };
    if (stage === "graduate") return { code: `import torch.nn as nn\nclass SimpleNet(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc = nn.Linear(10, 2)\nprint("Neural Network Architecture Defined")`, output: `Neural Network Architecture Defined` };
    return { code: `from transformers import pipeline\n# Initialize NLP pipeline\nprint(f"[AI SERVICE] Model loaded in memory for inference.")`, output: `[AI SERVICE] Model loaded in memory for inference.` };
  }

  // Default fallback code
  if (stage === "kid") {
    return { code: `# Playing with ${title}\nprint("Learning is fun! 🌟")\nprint("Let's master ${title}!")`, output: `Learning is fun! 🌟\nLet's master ${title}!` };
  }
  if (stage === "young") {
    return { code: `# Game script for ${title}\nplayer = "Alex"\nprint(f"[STATUS] {player} activated ${title}!")`, output: `[STATUS] Alex activated ${title}!` };
  }
  if (stage === "college") {
    return { code: `# Python script for ${title}\ndef run_demo():\n    print("Executing ${title} successfully")\n    return True\nrun_demo()`, output: `Executing ${title} successfully` };
  }
  if (stage === "graduate") {
    return { code: `# Business workflow for ${title}\nstatus = "SUCCESS"\nprint(f"[SYSTEM] ${title} status: {status}")`, output: `[SYSTEM] ${title} status: SUCCESS` };
  }
  return { code: `import sys\n# Production telemetry for ${title}\nprint(f"[METRIC] ${title} loaded cleanly with 0 errors.")`, output: `[METRIC] ${title} loaded cleanly with 0 errors.` };
}

function getLocalizedWhatIsIt(lang, stage, title, concept) {

  const t = title.toLowerCase();
  if (t === "what is python?" || t === "what is python") {
    if (lang === "english") {
      return "Python is a powerful, high-level programming language that allows humans to communicate instructions to a computer. Unlike older, complex languages, Python uses a clean and readable syntax that closely resembles regular English. This makes it incredibly easy to learn, write, and maintain code over time. Under the hood, Python is an interpreted language, meaning it translates your code into machine actions line by line as it runs. Because of its versatility, it is heavily used by tech giants for artificial intelligence, web development, data analysis, and server automation. Whether you are building a simple calculator or training a complex neural network, Python provides the necessary tools and libraries to get the job done efficiently. Its philosophy is built around the idea that code is read much more often than it is written.";
    }
  }

  if (lang === "english") {
    return `${title} is a fundamental Python capability that allows you to write clear, reliable, and reusable code.`;
  }
  if (lang === "english-telugu") {
    return `${title} anedi Python lo mana code ni clean ga and reliable ga rayadaniki use chese basic building block.`;
  }
  if (lang === "telugu") {
    return `${title} అనేది పైథాన్‌లో కోడ్‌ను స్పష్టంగా మరియు సులభంగా రాయడానికి ఉపయోగపడే ఒక ముఖ్యమైన సాధనం.`;
  }
  return `${title} पायथन का एक बुनियादी हिस्सा है जो कोड को साफ और सही तरीके से लिखने में मदद करता है।`;
}

function getLocalizedWhyDoWeNeedIt(lang, stage, title, concept) {

  const t = title.toLowerCase();
  if (t === "what is python?" || t === "what is python") {
    if (lang === "english") {
      return "We need Python because computers only understand machine code (1s and 0s), which is impossible for humans to write efficiently. Python acts as a bridge, letting us write instructions in a readable format that the computer can execute rapidly. We need it because modern software engineering demands rapid prototyping and quick development cycles, which Python excels at. It saves developers thousands of hours by offering massive pre-built libraries so they don't have to code common tasks from scratch. We need Python to perform complex data analysis, train machine learning models, and automate repetitive organizational tasks reliably. Ultimately, we need Python to turn complex ideas into functioning software without drowning in low-level programming complexities.";
    }
  }

  if (lang === "english") {
    return `We need ${title} to make programs easy to read, prevent common bugs, and build practical software without repeating code.`;
  }
  if (lang === "english-telugu") {
    return `${title} enduku kavali ante, manam code ni repeat ga rayakunda, easy ga maintain cheyyadaniki help chestundi.`;
  }
  if (lang === "telugu") {
    return `మనం కోడ్‌ను మళ్లీ మళ్లీ రాయకుండా మరియు తప్పులు లేకుండా చేయడానికి ${title} అవసరం.`;
  }
  return `कोड को बार-बार लिखने से बचने और गलतियों को रोकने के लिए हमें ${title} की जरूरत होती है।`;
}

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
  if (stage === "kid") return `${title} को प्यारे खिलौनों और कहानियों के साथ आसानी से सीखें!`;
  if (stage === "young") return `गेम्स और कोडिंग के लिए ${title} को मजेदार तरीके से समझें!`;
  if (stage === "college") return `${title} के मुख्य नियमों और काम करने के तरीके को आसानी से समझें।`;
  if (stage === "graduate") return `असली सॉफ्टवेयर और बिजनेस ऐप्स में ${title} का उपयोग कैसे होता है, जानिए।`;
  return `प्रोडक्शन कोडिंग और इंटरव्यू के लिए ${title} को आसान भाषा में समझें।`;
}

function getLocalizedExplanations(lang, stage, title, concept, codeSnippets) {
  const t = title.toLowerCase();

  if (t === "what is python?" || t === "what is python") {
    if (lang === "english") {
      if (stage === "kid") {
        return {
          simple: "Python is like a super smart robot friend that listens to what you say. Just like how you talk to your friends, you can talk to a computer using Python! It has simple words that are very easy to learn and type. When you want the computer to draw a picture, you just type a simple command. If you want it to play a sound, you write a short line of Python code. It is designed to be very friendly so even kids can use it without getting confused. Python is used all over the world to build games, control robots, and even make fun animations!",
          story: "Once upon a time, there was a tiny robot named Py. Py wanted to help kids build amazing toys, but Py only understood a secret language called Python. One day, a clever kid named Alex learned this secret language. Alex said 'print Hello', and Py immediately showed 'Hello' on a big screen! Alex then told Py to draw a colorful circle, and Py did it perfectly. Together, Alex and Py built an entire virtual zoo where digital animals could run and play. All of this magic happened because Alex learned how to talk to Py using the simple Python language.",
          realLife: "Think of Python like a magic remote control for your TV. Instead of pressing buttons, you type simple words on your keyboard. With your TV remote, you press 'Volume Up' and the TV gets louder. With Python, you type a command and the computer instantly listens to you. It controls the computer's screen, its memory, and everything it does. So just like a remote controls a toy car or a television, Python controls the computer using typed words.",
          friend: "Hey buddy! Imagine you have a cool robot that can do your homework, but you need to speak its language first. Python is that language! It's super easy to read, almost like reading a normal English book. You don't need to memorize weird symbols or complicated math. You just type what you want to happen, and Python does the hard work for you. It's the best way to start making your own games and apps!",
          visual: "[ You (The Boss) ]\n        |\n(types simple words)\n        v\n[ Python (The Helper) ]\n        |\n(translates to magic)\n        v\n[ Computer (Does Work) ]",
          stepByStep: "1. Open your computer's code editor.\n2. Type a simple word like 'print'.\n3. Tell Python what to print, like your name.\n4. Press the Run button to start the magic.\n5. Python reads your word.\n6. Python tells the computer screen to show your name instantly!",
          exampleFirst: "print('Hello my friend!')\n\nOutput:\nHello my friend!\n\nLook at this code! We just used the word 'print'. This tells Python to show whatever is inside the quotes. It's just like telling your friend 'Say Hello!'.",
          analogy: "Python is like a recipe book for baking a cake. If you follow the recipe step by step, you get a delicious cake. If you write Python commands step by step, the computer gives you a cool program!"
        };
      }
      if (stage === "young") {
        return {
          simple: "Python is a popular programming language that lets you give instructions to computers. A programming language is simply a way for us humans to communicate with machines. Think about telling a friend how to complete a task; you explain the steps one by one. A computer also needs clear instructions before it can perform a task, and Python lets us write these instructions in a way that is easy to read. Instead of writing confusing 1s and 0s, you use normal English words. Python then translates your English-like code into machine language so the computer can execute it. People use Python to create video games, build websites, automate boring tasks, and even create Artificial Intelligence apps.",
          story: "Let's imagine you are playing a video game where you have to command an army. You can't just yell at the screen; you have to use a command panel. Python is just like that command panel. There was once a young gamer who wanted to make their own game automatically track scores. They opened a text file and wrote a few lines of Python to add 10 points every time a target was hit. Because Python is so easy to read, they built their entire scoring system in just one hour, sharing it with friends across the world.",
          realLife: "Have you ever wondered how YouTube knows exactly which video you want to watch next? It uses Python! The servers behind YouTube run Python scripts that constantly look at what you watch. They analyze your choices, compare them with millions of other users, and generate a recommended list. Python handles all this heavy lifting smoothly because it has amazing tools for sorting and analyzing data. So Python isn't just for learning; it runs some of the biggest apps on your phone right now.",
          friend: "Dude, Python is basically the ultimate cheat code for making computers do your bidding. Instead of learning super confusing computer math, you just write commands that look like regular English sentences. It's so flexible that you can use it to build a simple Discord bot today, and tomorrow you could use it to hack together a machine learning app. The best part is that there's a massive community online, so if you ever get stuck, someone has already posted the solution. It's the perfect language to start your coding journey.",
          visual: "User types code in Editor\n      |\n      v\nPython reads and checks for mistakes\n      |\n      v\nPython translates to Bytecode\n      |\n      v\nPython Virtual Machine runs the code\n      |\n      v\nOutput is shown on your screen",
          stepByStep: "1. You write a script in a .py file.\n2. You run the file using the Python interpreter.\n3. The interpreter checks your code for spelling errors (syntax).\n4. It converts your readable code into bytecode.\n5. The bytecode is fed into the Python Virtual Machine (PVM).\n6. The PVM communicates directly with your computer's hardware to execute the task.",
          exampleFirst: "print('Welcome to Level 1')\n\nOutput:\nWelcome to Level 1\n\nThis code uses the built-in print() function. We pass a string 'Welcome to Level 1' as an argument. The interpreter processes this function and sends the text to the standard output stream, displaying it on your screen.",
          analogy: "Think of Python as a super-smart translator at the United Nations. You speak in simple English, and Python instantly translates your words into the complex digital language the computer hardware understands, ensuring nothing gets lost in translation."
        };
      }
      return {
        simple: "Python is a high-level, interpreted programming language known for its readability and concise syntax. It was designed to emphasize code readability, making it an excellent language for both beginners and experienced software engineers. Because Python handles memory management automatically and abstracts away complex hardware-level details, developers can focus purely on solving business logic and algorithms. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. From orchestrating cloud infrastructure to training deep learning neural networks, Python has become the lingua franca of modern technology. Its massive standard library and third-party ecosystem allow you to implement complex functionalities with minimal code.",
        story: "Consider a software team tasked with migrating a massive legacy application. They needed a language that was not only powerful but also easy for new developers to onboard. They chose Python. One developer wrote a Python script to automate the data extraction from the old database, another built a fast REST API using FastAPI, and a third implemented a machine learning model to categorize the legacy data. Within weeks, the entire migration was completed seamlessly. Python's clean syntax and robust ecosystem allowed the team to iterate rapidly, avoiding the lengthy compile times and verbose boilerplate code required by older languages.",
        realLife: "In the financial industry, quantitative analysts use Python to process millions of transactions per second. They write scripts that aggregate stock market data, clean the datasets, and feed them into predictive models to make automated trading decisions. Python's extensive data science libraries, such as Pandas and NumPy, allow them to execute complex mathematical operations efficiently. Furthermore, backend engineers use Python frameworks like Django to build the secure web dashboards that display these financial metrics in real-time. This end-to-end capability makes Python indispensable in enterprise environments.",
        friend: "Listen, when you get into the industry, you'll realize Python is everywhere. It's the Swiss Army knife of programming. Whether you're writing a quick script to automate a tedious sysadmin task, building a scalable backend microservice, or doing data engineering, Python is the tool you reach for first. Its syntax is incredibly clean, which means when you read code you wrote six months ago, you can actually understand it. Plus, the ecosystem is so mature that you almost never have to reinvent the wheel—there's a package for everything.",
        visual: "[ Source Code (.py) ]\n         |\n[ Lexer & Parser ] -> Abstract Syntax Tree (AST)\n         |\n[ Compiler ] -> Bytecode (.pyc)\n         |\n[ Python Virtual Machine (PVM) ] -> Executes on OS/Hardware",
        stepByStep: "1. The developer writes high-level Python code in a script.\n2. The Python interpreter's lexer tokenizes the source code.\n3. The parser generates an Abstract Syntax Tree (AST) to ensure structural correctness.\n4. The compiler translates the AST into lower-level bytecode.\n5. The bytecode is executed by the Python Virtual Machine (PVM).\n6. The PVM handles memory allocation and OS-level system calls during execution.",
        exampleFirst: "def greet_user(name):\n    print(f'Hello, {name}! Initialization complete.')\n\ngreet_user('Admin')\n\nOutput:\nHello, Admin! Initialization complete.\n\nThis snippet demonstrates defining a function using the def keyword. We utilize an f-string for string interpolation, which is highly efficient. When greet_user is called, the interpreter resolves the reference, passes the argument to the local scope, and executes the print statement to standard output.",
        analogy: "Python is like an automatic transmission in a car. While C++ is a manual transmission where you must shift gears and manage the clutch (memory management) yourself, Python handles the underlying mechanics automatically, allowing you to focus entirely on steering toward your destination."
      };
    }
  }

  const isVar = t.includes("variable") || t.includes("constant") || t.includes("naming");
  const isLoop = t.includes("loop") || t.includes("range");

  if (lang === "english") {

  // Advanced Topics
  const isWeb = t.includes("web") || t.includes("flask") || t.includes("django") || t.includes("fastapi");
  const isData = t.includes("data") || t.includes("numpy") || t.includes("pandas") || t.includes("csv") || t.includes("matplotlib");
  const isML = t.includes("machine learning") || t.includes("ml") || t.includes("supervised") || t.includes("unsupervised") || t.includes("regression") || t.includes("classification") || t.includes("clustering") || t.includes("training") || t.includes("testing");
  const isAI = t.includes("ai") || t.includes("artificial intelligence") || t.includes("neural") || t.includes("nlp") || t.includes("vision");
  
  if (lang === "english") {
    if (isWeb) {
      if (stage === "kid") return {
        simple: `${title} is like building a magic digital treehouse. You can design it and let people from all over the world come visit and play!`,
        story: `Once upon a time, a young wizard wanted to share their magic spells. By learning ${title}, they built a magic web page that everyone could read on their crystal tablets.`,
        realLife: `Think of a website you love, like YouTube or a game site. They are all built using web development tools!`,
        friend: `Hey! With ${title}, you're not just playing games, you're building the spaces where games live online.`,
        visual: `[ Browser ] <---> [ Server running ${title} ]`,
        stepByStep: `1. Design the page\n2. Write the code\n3. Start the server\n4. Share the link!`,
        exampleFirst: `See the code snippet? That small piece of Python opens a port on your computer and listens for web browsers!`,
        analogy: `${title} is like being the architect and builder of a digital city.`
      };
      if (stage === "young") return {
        simple: `${title} powers the backend of web applications. It handles requests, processes data, and sends back web pages or JSON data.`,
        story: `Alex wanted to build an online multiplayer leaderboard. By mastering ${title}, Alex created a server that safely stored scores and displayed them globally.`,
        realLife: `Every time you log into an app or fetch online data, a backend web framework is quietly working behind the scenes.`,
        friend: `Imagine ${title} as the brain behind the screen. It decides what happens when someone clicks a button on a website.`,
        visual: `Client Request -> Web Server -> Application Logic -> Database -> Client Response`,
        stepByStep: `1. Setup routes\n2. Define view functions\n3. Connect database\n4. Return response`,
        exampleFirst: `With a few lines of code, you can handle HTTP GET and POST requests gracefully.`,
        analogy: `It's like a restaurant kitchen. The waiter (browser) takes your order (request), and the kitchen (server) prepares the meal (response).`
      };
      return {
        simple: `${title} is critical for developing scalable backend architectures and RESTful APIs, facilitating client-server communication over HTTP.`,
        story: `In an enterprise environment, migrating a legacy system to a modern web framework drastically improves latency and operational efficiency. Mastering ${title} empowers this transformation.`,
        realLife: `Microservices, API gateways, and distributed data systems all rely on robust web frameworks and protocols to function.`,
        friend: `When architecting distributed systems, understanding the request lifecycle in ${title} helps you write secure, non-blocking code.`,
        visual: `[ API Gateway ] -> [ Application Server (e.g., Uvicorn) ] -> [ Database Cluster ]`,
        stepByStep: `1. Initialize application\n2. Register middleware/routes\n3. Validate schemas\n4. Serialize responses`,
        exampleFirst: `By inspecting the example, note the dependency injection and asynchronous route handlers optimizing I/O bound tasks.`,
        analogy: `${title} serves as the vital nervous system routing data across distributed software architectures.`
      };
    }
    
    if (isData || isML || isAI) {
      if (stage === "kid") return {
        simple: `${title} is like teaching a computer to be super smart. It can look at lots of information and find hidden secrets!`,
        story: `A curious robot wanted to learn how to tell cats and dogs apart. Using ${title}, it looked at thousands of pictures until it became an expert!`,
        realLife: `When a video app recommends your next favorite cartoon, it's using smart data and AI to guess what you like.`,
        friend: `With ${title}, computers aren't just calculators anymore; they can learn and make decisions just like a detective.`,
        visual: `[ Big Data ] -> [ Smart Brain ] -> [ Cool Answers ]`,
        stepByStep: `1. Collect clues (data)\n2. Train the brain\n3. Ask a question\n4. Get a smart answer!`,
        exampleFirst: `The code you see is giving the computer a tiny brain to process information.`,
        analogy: `It's like giving a computer a magnifying glass to find patterns we can't see.`
      };
      if (stage === "young") return {
        simple: `${title} allows us to analyze vast amounts of data and train models to predict future outcomes or recognize patterns.`,
        story: `By leveraging ${title}, researchers built a system that predicts weather patterns by analyzing decades of historical temperature data, saving lives during storms.`,
        realLife: `Self-driving cars, personalized recommendations, and facial recognition all rely heavily on data science and machine learning.`,
        friend: `Instead of programming explicit rules, ${title} lets you feed data into an algorithm so the algorithm figures out the rules itself.`,
        visual: `Data Collection -> Preprocessing -> Model Training -> Evaluation -> Prediction`,
        stepByStep: `1. Load dataset\n2. Clean missing values\n3. Train model/algorithm\n4. Evaluate accuracy`,
        exampleFirst: `Look at the script: we pass our features and labels into an algorithm, and it mathematically maps the relationships.`,
        analogy: `It's like teaching someone to ride a bike by letting them practice and fail, rather than just reading them a manual.`
      };
      return {
        simple: `${title} involves advanced mathematical modeling, statistical analysis, and algorithmic optimization to extract insights and build predictive models from complex datasets.`,
        story: `In production pipelines, integrating ${title} transforms raw telemetry into actionable business intelligence, driving automated decision-making at scale.`,
        realLife: `Algorithmic trading, advanced medical diagnostics, and LLM training pipelines are built on the foundational principles of data engineering and machine learning.`,
        friend: `Understanding the underlying mathematics (like gradient descent or matrix operations) of ${title} is crucial for hyperparameter tuning and model optimization.`,
        visual: `[ Data Lake ] -> [ Feature Engineering ] -> [ Neural/ML Architecture ] -> [ Inference Endpoint ]`,
        stepByStep: `1. Data vectorization\n2. Dimensionality reduction\n3. Iterative optimization\n4. Cross-validation`,
        exampleFirst: `Observe the tensor manipulations and optimization steps. Efficient use of vectorized operations is key to performance.`,
        analogy: `${title} is the algorithmic extraction of signal from high-dimensional noise.`
      };
    }
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

  // Hindi
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
  if (stage === "kid") return "जैसे आपके लंच बॉक्स पर आपका नाम लिखा हो और अंदर स्वादिष्ट खाना हो!";
  if (stage === "young") return "जैसे वीडियो गेम में आपका स्कोर और लाइफ पॉइंट याद रखे जाते हैं।";
  if (stage === "college") return "जैसे कॉलेज में छात्रों के अंक और रोल नंबर का रिकॉर्ड रखा जाता है।";
  if (stage === "graduate") return "जैसे कंपनी में कर्मचारियों का वेतन और बोनस का हिसाब होता है।";
  return "जैसे क्लाउड सर्वर पर उपयोगकर्ता की जानकारी को मैनेज किया जाता है।";
}

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

function getLocalizedQuestions(lang, stage, title) {
  if (lang === "english") {
    return [
      {
        type: "Multiple Choice",
        difficulty: "Easy",
        question: `What is the primary role of ${title} in Python?`,
        options: [
          `To manage program state and structure code clearly`,
          `To delete system files`,
          `To turn off the computer`,
          `To play sound effects`
        ],
        correctAnswer: `To manage program state and structure code clearly`,
        explanation: `${title} helps your Python program keep data organized and run smoothly.`
      },
      {
        type: "Multiple Choice",
        difficulty: "Easy",
        question: `Which character is used to assign a value in Python?`,
        options: ["=", "==", ":=", "->"],
        correctAnswer: "=",
        explanation: "The single equals sign (`=`) is the assignment operator in Python."
      },
      {
        type: "Multiple Choice",
        difficulty: "Easy",
        question: `Is Python case-sensitive when evaluating names?`,
        options: ["Yes, Name and name are different", "No, case does not matter", "Only inside strings", "Only in numbers"],
        correctAnswer: "Yes, Name and name are different",
        explanation: "Python treats uppercase and lowercase identifiers as completely separate variables."
      },
      {
        type: "Multiple Choice",
        difficulty: "Medium",
        question: `What happens if you use a variable before assigning it?`,
        options: [
          "Python raises a NameError",
          "It defaults to zero",
          "It creates an empty file",
          "It shuts down"
        ],
        correctAnswer: "Python raises a NameError",
        explanation: "Identifiers must be defined in the current namespace before they can be evaluated."
      },
      {
        type: "Multiple Choice",
        difficulty: "Medium",
        question: `Which naming style is recommended by PEP 8 for Python variables?`,
        options: ["snake_case", "camelCase", "PascalCase", "kebab-case"],
        correctAnswer: "snake_case",
        explanation: "PEP 8 recommends lowercase words separated by underscores for variable and function names."
      },
      {
        type: "Challenge Question",
        difficulty: "Challenge",
        question: `Predict what Python does when reassigning a variable to a new data type:`,
        options: [
          "It automatically binds the name to the new object in memory",
          "It crashes with a TypeError",
          "It converts the whole OS",
          "It ignores the assignment"
        ],
        correctAnswer: "It automatically binds the name to the new object in memory",
        explanation: "Because Python is dynamically typed, names can refer to objects of any type during runtime."
      }
    ];
  }

  if (lang === "english-telugu") {
    return [
      {
        type: "Multiple Choice",
        difficulty: "Easy",
        question: `Python lo ${title} mukhyanga enduku use chestham?`,
        options: [
          `Program data ni clean ga manage cheyyadaniki`,
          `Files ni delete cheyyadaniki`,
          `Computer shutdown cheyyadaniki`,
          `Only sounds play cheyyadaniki`
        ],
        correctAnswer: `Program data ni clean ga manage cheyyadaniki`,
        explanation: `${title} anedi program execution and data flow ni manage chesthundi.`
      },
      {
        type: "Multiple Choice",
        difficulty: "Easy",
        question: `Python lo value assign cheyyadaniki edi vaadatharu?`,
        options: ["=", "==", ":=", "->"],
        correctAnswer: "=",
        explanation: "Single `=` sign tho manam variable lo value store chestham."
      },
      {
        type: "Multiple Choice",
        difficulty: "Easy",
        question: `Python case-sensitive ah kaada?`,
        options: ["Yes, case-sensitive (Score and score are different)", "No, case matter avvadu", "Only numbers lone", "None"],
        correctAnswer: "Yes, case-sensitive (Score and score are different)",
        explanation: "Python lo capital and small letters ni completely separate variables ga treat chesthundi."
      },
      {
        type: "Multiple Choice",
        difficulty: "Medium",
        question: `Assign cheyyakunda variable ni use chesthe em error vastundi?`,
        options: ["NameError", "ZeroError", "FileError", "SyntaxError"],
        correctAnswer: "NameError",
        explanation: "Define cheyyani variable ni access cheyyadaniki try chesthe Python NameError isthundi."
      },
      {
        type: "Multiple Choice",
        difficulty: "Medium",
        question: `Python lo variables ki standard naming convention edi?`,
        options: ["snake_case", "camelCase", "UPPERCASE", "kebab-case"],
        correctAnswer: "snake_case",
        explanation: "PEP 8 guidelines prakaram snake_case (e.g. user_name) vaadadam best practice."
      },
      {
        type: "Challenge Question",
        difficulty: "Challenge",
        question: `Dynamic typing valla Python lo variable value ni vere type ki reassign cheyyavacha?`,
        options: [
          "Yes, direct ga reassign cheyyachu",
          "No, error vastundi",
          "Only integers lone",
          "Impossible"
        ],
        correctAnswer: "Yes, direct ga reassign cheyyachu",
        explanation: "Python dynamic language kabatti variable type automatically update avtundi."
      }
    ];
  }

  if (lang === "telugu") {
    return [
      {
        type: "Multiple Choice",
        difficulty: "Easy",
        question: `పైథాన్‌లో ${title} యొక్క ముఖ్యమైన ఉపయోగం ఏమిటి?`,
        options: [
          `సమాచారాన్ని మరియు కోడ్‌ను నిర్వహించడానికి`,
          `ఫైళ్లను తొలగించడానికి`,
          `కంప్యూటర్ ఆపడానికి`,
          `పాటలు వినడానికి`
        ],
        correctAnswer: `సమాచారాన్ని మరియు కోడ్‌ను నిర్వహించడానికి`,
        explanation: `${title} ప్రోగ్రామ్‌ను శుభ్రంగా రాయడానికి ఉపయోగపడుతుంది.`
      },
      {
        type: "Multiple Choice",
        difficulty: "Easy",
        question: `పైథాన్‌లో విలువను కేటాయించడానికి ఏ గుర్తును వాడతారు?`,
        options: ["=", "==", ":=", "->"],
        correctAnswer: "=",
        explanation: "`=` గుర్తుతో విలువను వేరియబుల్‌కు కేటాయిస్తారు."
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
        difficulty: "Medium",
        question: `విలువ ఇవ్వకుండా వేరియబుల్ వాడితే ఏ ఎర్రర్ వస్తుంది?`,
        options: ["NameError", "ValueError", "TypeError", "ZeroError"],
        correctAnswer: "NameError",
        explanation: "గుర్తు తెలియని పేరును పిలిచినప్పుడు పైథాన్ NameError ఇస్తుంది."
      },
      {
        type: "Multiple Choice",
        difficulty: "Medium",
        question: `పైథాన్ వేరియబుల్స్ కోసం మంచి పద్ధతి ఏది?`,
        options: ["snake_case", "camelCase", "PascalCase", "kebab-case"],
        correctAnswer: "snake_case",
        explanation: "PEP 8 ప్రకారం snake_case వాడటం ఉత్తమం."
      },
      {
        type: "Challenge Question",
        difficulty: "Challenge",
        question: `పైథాన్‌లో ఒకే వేరియబుల్‌కు వేర్వేరు డేటా రకాలను ఇవ్వవచ్చా?`,
        options: ["అవును, ఇవ్వవచ్చు", "వీలుకాదు", "ఎర్రర్ వస్తుంది", "స్ట్రింగ్స్ మాత్రమే"],
        correctAnswer: "అవును, ఇవ్వవచ్చు",
        explanation: "పైథాన్ డైనమిక్ టైపింగ్ భాష కాబట్టి ఎలాంటి రకాన్నైనా మార్చవచ్చు."
      }
    ];
  }

  return [
    {
      type: "Multiple Choice",
      difficulty: "Easy",
      question: `पायथन में ${title} का मुख्य उपयोग क्या है?`,
      options: [
        `डेटा और प्रोग्राम को सही तरीके से मैनेज करने के लिए`,
        `फाइलों को मिटाने के लिए`,
        `कंप्यूटर बंद करने के लिए`,
        `गाने बजाने के लिए`
      ],
      correctAnswer: `डेटा और प्रोग्राम को सही तरीके से मैनेज करने के लिए`,
      explanation: `${title} प्रोग्राम को आसान और सही बनाने में मदद करता है।`
    },
    {
      type: "Multiple Choice",
      difficulty: "Easy",
      question: `पायथन में वैल्यू असाइन करने के लिए किस चिह्न का उपयोग होता है?`,
      options: ["=", "==", ":=", "->"],
      correctAnswer: "=",
      explanation: "`=` चिह्न से हम वैल्यू असाइन करते हैं।"
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
      difficulty: "Medium",
      question: `बिना वैल्यू दिए वेरिएबल इस्तेमाल करने पर क्या एरर आता है?`,
      options: ["NameError", "ValueError", "TypeError", "ZeroError"],
      correctAnswer: "NameError",
      explanation: "अगर वेरिएबल पहले से नहीं बना है, तो NameError आता है।"
    },
    {
      type: "Multiple Choice",
      difficulty: "Medium",
      question: `पायथन में वेरिएबल नामकरण की सबसे अच्छी शैली कौन सी है?`,
      options: ["snake_case", "camelCase", "PascalCase", "kebab-case"],
      correctAnswer: "snake_case",
      explanation: "PEP 8 के अनुसार snake_case सबसे सही तरीका है।"
    },
    {
      type: "Challenge Question",
      difficulty: "Challenge",
      question: `क्या पायथन में एक वेरिएबल का डेटा टाइप बदला जा सकता है?`,
      options: ["हाँ, आसानी से बदला जा सकता है", "नहीं", "एरर आएगा", "सिर्फ नंबर्स में"],
      correctAnswer: "हाँ, आसानी से बदला जा सकता है",
      explanation: "पायथन में डायनेमिक टाइपिंग होने के कारण डेटा टाइप बदला जा सकता है।"
    }
  ];
}

function getLocalizedChallenge(lang, stage, title) {
  if (lang === "english") return `Write your own script demonstrating ${title} and verify the output in the console!`;
  if (lang === "english-telugu") return `Nuvve sonthaga ${title} use chesi oka script rasi console lo verify cheyyi mama!`;
  if (lang === "telugu") return `${title} ని ఉపయోగించి సొంతంగా ఒక కోడ్ రాసి ఫలితాన్ని చూడండి!`;
  return `${title} का उपयोग करके खुद एक छोटा कोड लिखें और परिणाम देखें!`;
}

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
