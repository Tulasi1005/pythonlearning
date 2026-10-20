import path from 'path';
import { fileURLToPath } from 'url';
import { writeTopicFile } from './helper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../../src/data');

// ==========================================
// SECTION 1: PYTHON BASICS (Topics 1-9)
// ==========================================
export const pythonBasics = [
  {
    id: "what-is-python",
    topicNumber: 1,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "What is Python?",
    stages: {
      kid: {
        intro: "Meet Python! It is like a super-friendly friendly robot friend who loves to follow your fun instructions.",
        theory: "Imagine you have a magic robot puppy. If you talk to it in English words like 'sit' and 'play', it listens! Python is a friendly language you use to tell the computer to draw pictures, play animal sounds, and make magic on the screen.",
        visual: {
          metaphor: "Friendly Robot Friend",
          badge: "🧸 Friendly Robot",
          description: "You give simple magic words to your robot buddy, and it happily does them right away!",
          elements: [
            { label: "You Say", value: "Say Hello!", color: "emerald", icon: "Sparkles" },
            { label: "Python Robot", value: "Beep Boop! Listening!", color: "blue", icon: "Bot" },
            { label: "Magic Screen", value: "Hello World!", color: "amber", icon: "Monitor" }
          ]
        },
        realLifeExample: "Just like saying 'Please give me my teddy bear!', you tell Python to show your favorite cartoon on the screen.",
        code: "# Say hello to your new friend!\nprint(\"Hello, I am Python! 🐍\")\nprint(\"Let's play and make magic!\")",
        output: "Hello, I am Python! 🐍\nLet's play and make magic!",
        howItWorks: "The magic word 'print' tells Python to show your friendly words on the big screen.",
        tryItYourself: {
          title: "🧪 Greet Your Favorite Toy",
          task: "Write a print statement that says 'Hello Teddy!' on the screen.",
          starterCode: "# Tell Python to say hello to Teddy\nprint(\"...\")",
          solution: "print(\"Hello Teddy!\")",
          expectedOutput: "Hello Teddy!"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "What is Python?",
            options: ["A friendly robot language for computers", "A scary real snake under the bed", "A sandwich", "A car wheel"],
            correctAnswer: "A friendly robot language for computers",
            explanation: "Python is a fun, easy way to tell computers what to do!",
            difficulty: "Easy"
          },
          {
            type: "Predict the Output",
            question: "What will show on screen from: print(\"Woof Woof!\")?",
            options: ["Woof Woof!", "Meow Meow!", "Nothing", "Error"],
            correctAnswer: "Woof Woof!",
            explanation: "Python shows whatever friendly words you put inside the speech marks.",
            difficulty: "Easy"
          }
        ],
        challenge: "Can you change the message to print your pet's name or favorite animal sound?"
      },
      young: {
        intro: "Python is the world's most popular coding language used to build games, YouTube bots, Roblox plugins, and smart apps!",
        theory: "Python was built so anyone can read code just like plain English books. Unlike older coding languages that require 20 confusing lines just to display a number, Python lets you command computers and build games in single, clean lines.",
        visual: {
          metaphor: "Game Engine Scripting",
          badge: "🎒 Game Builder Engine",
          description: "Python takes your game commands, translates them instantly, and runs your game world without lag.",
          elements: [
            { label: "Your Script", value: "player.speed = 10", color: "blue", icon: "Gamepad2" },
            { label: "Python Interpreter", value: "Translates line-by-line", color: "indigo", icon: "Cpu" },
            { label: "Game Action", value: "Player zooms across map!", color: "emerald", icon: "Zap" }
          ]
        },
        realLifeExample: "Minecraft plugins, Spotify playlist generators, and Discord chat bots are all built with Python code.",
        code: "# Welcome to your first gamer script\nplayer_name = \"Alex\"\ngame_title = \"Dragon Quest\"\nprint(f\"[START] {player_name} enters {game_title}!\")",
        output: "[START] Alex enters Dragon Quest!",
        howItWorks: "We store your player's name in a variable, and Python combines it into an announcement using print().",
        tryItYourself: {
          title: "🧪 Spawn Your Gamer Avatar",
          task: "Create a gamer tag variable and print '[ONLINE] <your_tag> has joined the server!'.",
          starterCode: "gamer_tag = \"ShadowNinja\"\n# Print your join message here:\n",
          solution: "gamer_tag = \"ShadowNinja\"\nprint(f\"[ONLINE] {gamer_tag} has joined the server!\")",
          expectedOutput: "[ONLINE] ShadowNinja has joined the server!"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "Why do game developers and engineers love Python?",
            options: ["It reads like English and builds things super fast", "It only runs on calculators", "It requires 100 lines for a simple print", "It is only for math teachers"],
            correctAnswer: "It reads like English and builds things super fast",
            explanation: "Python emphasizes developer velocity, clean syntax, and huge libraries.",
            difficulty: "Easy"
          },
          {
            type: "Find the Error",
            question: "What is wrong with: print(Hello Gamer!)",
            options: ["Missing quotation marks around the text string", "print should be uppercase", "Python cannot say Hello", "No semicolon"],
            correctAnswer: "Missing quotation marks around the text string",
            explanation: "Text messages in Python must always be enclosed in quotes like \"Hello Gamer!\".",
            difficulty: "Medium"
          }
        ],
        challenge: "Build a 3-line startup banner for your custom multiplayer game server!"
      },
      college: {
        intro: "Python is a high-level, dynamically typed, interpreted programming language emphasizing code readability and programmer productivity.",
        theory: "Created by Guido van Rossum and released in 1991, Python follows the 'Zen of Python' philosophy: 'Simple is better than complex; Readability counts.' Python programs compile into bytecode (.pyc), which is dynamically interpreted by the Python Virtual Machine (PVM). It is multi-paradigm, supporting Object-Oriented, Functional, and Procedural programming paradigms with automatic memory management via reference counting and cyclic garbage collection.",
        visual: {
          metaphor: "PVM Execution Pipeline",
          badge: "🎓 Compilation & PVM Architecture",
          description: "Source code (.py) is compiled to bytecode (.pyc) and executed on the Python Virtual Machine (PVM).",
          elements: [
            { label: "Source (.py)", value: "High-level syntax", color: "indigo", icon: "FileCode" },
            { label: "Compiler", value: "AST -> Bytecode (.pyc)", color: "blue", icon: "Workflow" },
            { label: "PVM / Runtime", value: "Dynamic Execution & Memory Heap", color: "purple", icon: "Cpu" }
          ]
        },
        realLifeExample: "Academic research algorithms, university lab data processors, automated test frameworks, and machine learning models in NumPy/PyTorch.",
        code: "# Demonstrating dynamic typing and standard execution\nlanguage = \"Python\"\nrelease_year = 1991\nparadigm = [\"OOP\", \"Functional\", \"Procedural\"]\n\nprint(f\"Language: {language} (Est. {release_year})\")\nprint(f\"Supported Paradigms: {', '.join(paradigm)}\")",
        output: "Language: Python (Est. 1991)\nSupported Paradigms: OOP, Functional, Procedural",
        howItWorks: "Python dynamically allocates variables on the heap, binds references without explicit type declarations, and interpolates strings cleanly via f-strings.",
        tryItYourself: {
          title: "🧪 Inspect Student Record Variables",
          task: "Declare variables for student_name, roll_no, and gpa, then print a formatted student profile string.",
          starterCode: "student_name = \"Aarav\"\nroll_no = 101\ngpa = 3.92\n# Output student profile\n",
          solution: "student_name = \"Aarav\"\nroll_no = 101\ngpa = 3.92\nprint(f\"Student: {student_name} | Roll: #{roll_no} | GPA: {gpa}\")",
          expectedOutput: "Student: Aarav | Roll: #101 | GPA: 3.92"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "How does Python execute source code under CPython?",
            options: ["Compiles source to bytecode (.pyc) which is executed by the PVM", "Directly compiles to x86/ARM binary at build time", "Translates into JavaScript in browser", "Runs via an OS kernel driver directly"],
            correctAnswer: "Compiles source to bytecode (.pyc) which is executed by the PVM",
            explanation: "CPython compiles .py files into bytecode instructions and evaluates them in a virtual machine loop.",
            difficulty: "Medium"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "Why is Python classified as a dynamically typed and interpreted language?",
            answer: "Python is dynamically typed because types are checked at runtime rather than compile time. It is interpreted because its bytecode is evaluated line-by-line by the Python Virtual Machine rather than directly compiled into machine assembly."
          },
          {
            type: "Practical",
            question: "What is the difference between CPython, PyPy, and Jython?",
            answer: "CPython is the reference standard interpreter written in C. PyPy is a JIT-compiled interpreter providing significant speedups for long-running loops. Jython runs Python code on the Java Virtual Machine (JVM)."
          },
          {
            type: "Scenario",
            question: "When would you prefer Python over C++ or Go in a software project?",
            answer: "Python is preferred when rapid prototyping, extensive scientific/AI library support (PyTorch, Pandas), maintainability, and fast iteration cycles outweigh raw millisecond execution CPU bounds."
          }
        ]
      },
      graduate: {
        intro: "Python is an enterprise-grade programming language powering scalable backend systems, data pipelines, and financial engines at scale.",
        theory: "In commercial environments, Python is celebrated for its rich standard library ('batteries included') and massive ecosystem. It is the de-facto backbone for enterprise ETL pipelines, RESTful microservices (FastAPI/Django), automated cloud infrastructure (Boto3/Ansible), and predictive analytics. Because development time costs more than compute hardware, Python's clean expressiveness dramatically shortens time-to-market.",
        visual: {
          metaphor: "Enterprise Service Architecture",
          badge: "💼 Enterprise Backend Pipeline",
          description: "Python integrates API gateways, background celery workers, and database transactions into reliable business systems.",
          elements: [
            { label: "Client Request", value: "REST API JSON / HTTP", color: "blue", icon: "Globe" },
            { label: "Python Service", value: "FastAPI Business Logic & Auth", color: "emerald", icon: "Server" },
            { label: "Data Layer", value: "PostgreSQL & Redis Cache", color: "amber", icon: "Database" }
          ]
        },
        realLifeExample: "Instagram's Django backend handling billions of requests, Uber's pricing algorithms, and Netflix's recommendation pipelines.",
        code: "# Enterprise employee onboarding calculation\nemployee_name = \"Pooja Sharma\"\ndepartment = \"Engineering\"\nbase_salary = 85000\nbenefits_rate = 0.18\ntotal_cost = base_salary * (1 + benefits_rate)\n\nprint(f\"[HR SYSTEM] Employee: {employee_name} ({department})\")\nprint(f\"Total Annual Comp & Benefits: ${total_cost:,.2f}\")",
        output: "[HR SYSTEM] Employee: Pooja Sharma (Engineering)\nTotal Annual Comp & Benefits: $100,300.00",
        howItWorks: "Calculates total compensation including benefits overhead and uses advanced string formatting (:,.2f) for clean business reporting.",
        tryItYourself: {
          title: "🧪 Calculate Department Budget",
          task: "Create variables for department_name, headcount, and avg_salary. Compute and print the total quarterly budget.",
          starterCode: "department_name = \"Data Analytics\"\nheadcount = 12\navg_salary = 92000\n# Calculate quarterly payroll cost:\n",
          solution: "department_name = \"Data Analytics\"\nheadcount = 12\navg_salary = 92000\nquarterly_cost = (headcount * avg_salary) / 4\nprint(f\"Department: {department_name} | Q1 Payroll Budget: ${quarterly_cost:,.2f}\")",
          expectedOutput: "Department: Data Analytics | Q1 Payroll Budget: $276,000.00"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "Why is Python heavily chosen for cloud automation and data pipelines?",
            options: ["Vast enterprise library support, rapid development velocity, and unified data APIs", "It is the only language that supports databases", "It has zero memory consumption", "It does not require testing"],
            correctAnswer: "Vast enterprise library support, rapid development velocity, and unified data APIs",
            explanation: "Python's rich ecosystem (Pandas, SQLAlchemy, Celery, Boto3) provides turnkey solutions for modern business workflows.",
            difficulty: "Medium"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "How does Python achieve memory management in large-scale applications?",
            answer: "Python uses automatic memory management consisting of reference counting (immediate deallocation when refcount reaches 0) and a generational cyclic garbage collector (Gen 0, 1, 2) to resolve circular object references."
          },
          {
            type: "Practical",
            question: "Explain the Global Interpreter Lock (GIL) and its architectural impact on concurrency.",
            answer: "The GIL is a mutex in CPython preventing multiple native threads from executing Python bytecode simultaneously. For I/O-bound tasks, `asyncio` or threading releases the GIL during network waits. For CPU-bound tasks, multiprocessing or C extensions bypass the GIL."
          },
          {
            type: "Scenario",
            question: "How do you structure an enterprise Python repository for long-term maintainability?",
            answer: "Use poetry/uv for dependency locking, enforce type hints with `mypy`, apply automated linting/formatting via `ruff`, structure modules with clean boundaries (controllers, services, repositories), and implement comprehensive unit tests with `pytest`."
          }
        ]
      },
      professional: {
        intro: "Python in production: engineering high-throughput microservices, distributed data pipelines, AI infrastructure, and maintainable systems.",
        theory: "Senior engineers evaluate Python through the lenses of architecture, memory layout, runtime profiling, and operational stability. Understanding the CPython internals—such as PyObject representations, method resolution order (MRO), dictionary hash tables, opcode evaluation loops, and async event loops (libuv/asyncio)—is essential for architecting reliable systems under heavy SLA constraints.",
        visual: {
          metaphor: "Production Microservice & Runtime Memory",
          badge: "🚀 Production Architecture & CPython Internals",
          description: "High-concurrency async service running under Gunicorn/Uvicorn with memory tracing and connection pooling.",
          elements: [
            { label: "Edge Gateway", value: "NGINX SSL & Rate Limiting", color: "purple", icon: "ShieldCheck" },
            { label: "Async App Workers", value: "Uvicorn + UVLoop Workers", color: "blue", icon: "Layers" },
            { label: "CPython Memory", value: "PyObject Heap & Small Object Allocator (PyMalloc)", color: "emerald", icon: "Cpu" }
          ]
        },
        realLifeExample: "Large-scale financial trade risk scoring, algorithmic market data aggregators, and distributed model serving clusters.",
        code: "import sys\n\nservice_meta = {\n    \"service\": \"payment-gateway\",\n    \"version\": \"2.4.1\",\n    \"active_connections\": 4250,\n    \"health_status\": \"OPTIMAL\"\n}\n\nprint(f\"Service: {service_meta['service']} | Status: {service_meta['health_status']}\")\nprint(f\"Dict Memory Footprint: {sys.getsizeof(service_meta)} bytes\")",
        output: "Service: payment-gateway | Status: OPTIMAL\nDict Memory Footprint: 232 bytes",
        howItWorks: "Inspects metadata dictionaries and memory sizing under CPython's compact dictionary implementation (PEP 468/PEP 509).",
        tryItYourself: {
          title: "🧪 Microservice Health Check Metric",
          task: "Construct a dictionary holding latency_ms, error_rate, and p99_metric, then format an alert if latency exceeds 200ms.",
          starterCode: "telemetry = {\"service\": \"order-api\", \"latency_ms\": 245.5, \"error_rate\": 0.002}\n# Check latency and print operational status\n",
          solution: "telemetry = {\"service\": \"order-api\", \"latency_ms\": 245.5, \"error_rate\": 0.002}\nis_degraded = telemetry[\"latency_ms\"] > 200\nstatus = \"[ALERT DEGRADED]\" if is_degraded else \"[HEALTHY]\"\nprint(f\"{status} {telemetry['service']}: Latency {telemetry['latency_ms']}ms (Error Rate: {telemetry['error_rate']:.2%})\")",
          expectedOutput: "[ALERT DEGRADED] order-api: Latency 245.5ms (Error Rate: 0.20%)"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "How does Python's small object allocator (PyMalloc) optimize heap allocations?",
            options: ["Allocates fixed-size memory pools and arenas for objects <= 512 bytes to reduce OS syscall overhead", "Converts all variables to C structs automatically", "Disables memory garbage collection entirely", "Stores everything on CPU L1 cache"],
            correctAnswer: "Allocates fixed-size memory pools and arenas for objects <= 512 bytes to reduce OS syscall overhead",
            explanation: "PyMalloc manages 256KB arenas subdivided into 4KB pools to bypass OS `malloc` overhead for short-lived small objects.",
            difficulty: "Hard"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "Describe the internal structure of a PyObject in CPython.",
            answer: "Every Python object contains `_PyObject_HEAD_EXTRA`, `ob_refcnt` (reference counter for memory deallocation), and `ob_type` (pointer to the type object `PyTypeObject` defining its methods and memory layout). Variable-sized objects (like lists or strings) also contain `ob_size`."
          },
          {
            type: "Practical",
            question: "How do you profile memory leaks and CPU bottlenecks in a production Python service?",
            answer: "Use `tracemalloc` for memory allocation diffs, `py-spy` for non-intrusive sampling CPU profiling in production without restarting, and `objgraph` to inspect retained cyclic object references."
          },
          {
            type: "Scenario",
            question: "Your team's API has high latency spikes during high-concurrency bursts. How do you triage and optimize?",
            answer: "1. Audit synchronous I/O blocking the asyncio event loop. 2. Verify database connection pool limits. 3. Tune garbage collection thresholds (`gc.set_threshold`) or disable GC during critical request cycles. 4. Offload CPU-heavy transforms to Celery background workers or C-extensions/Cython."
          },
          {
            type: "Best Practice",
            question: "What are the key architectural tenets of building 12-factor cloud-native Python applications?",
            answer: "Explicit dependency isolation (`pyproject.toml`), environment variable configuration via `pydantic-settings`, stateless process execution, logging structured JSON directly to stdout, and graceful shutdown signal handling (`SIGTERM`/`SIGINT`)."
          }
        ]
      }
    }
  },
  {
    id: "installing-python",
    topicNumber: 2,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "Installing Python",
    stages: {
      kid: {
        intro: "Let's invite Python into our computer house so we can start playing!",
        theory: "Installing Python is like downloading a magical toy app. Once it is on your computer, your computer learns to understand all your drawing and animal commands.",
        visual: {
          metaphor: "Unboxing a Magic Toy Kit",
          badge: "🧸 Magic Toy Unboxing",
          description: "Open the box, press install, and your computer gains magical coding powers!",
          elements: [
            { label: "Step 1", value: "Download Python App", color: "emerald", icon: "Download" },
            { label: "Step 2", value: "Click Magic Setup", color: "blue", icon: "CheckCircle" },
            { label: "Step 3", value: "Ready to Play!", color: "amber", icon: "Smile" }
          ]
        },
        realLifeExample: "Just like setting up your toy train track on the carpet before the train can zoom!",
        code: "# Check if Python is ready to play\nprint(\"Python is installed and ready for fun!\")",
        output: "Python is installed and ready for fun!",
        howItWorks: "When Python is installed, your computer runs this code and prints the cheerful message.",
        tryItYourself: {
          title: "🧪 Check Your Playground",
          task: "Print 'My Python workshop is open!'.",
          starterCode: "print(\"...\")",
          solution: "print(\"My Python workshop is open!\")",
          expectedOutput: "My Python workshop is open!"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "Where do we get Python safely?",
            options: ["From python.org official website", "From a candy store", "From the garden", "From television"],
            correctAnswer: "From python.org official website",
            explanation: "Always download Python from its official home at python.org.",
            difficulty: "Easy"
          }
        ],
        challenge: "Celebrate your installation by printing your own welcome message!"
      },
      young: {
        intro: "Install Python and VS Code on your PC or Mac to start building your own games and tools!",
        theory: "To run Python scripts, you install the official Python interpreter from python.org. Crucial pro-tip on Windows: ALWAYS check the box that says 'Add Python to PATH' so your command terminal can find the 'python' command anywhere.",
        visual: {
          metaphor: "Game Launcher Installation",
          badge: "🎒 Game Engine Setup",
          description: "Install interpreter runtime + configure PATH + install VS Code editor.",
          elements: [
            { label: "Runtime", value: "Python 3.12+ Interpreter", color: "blue", icon: "Cpu" },
            { label: "PATH Config", value: "Global Terminal Access", color: "emerald", icon: "Terminal" },
            { label: "IDE", value: "VS Code with Python Ext", color: "purple", icon: "Layout" }
          ]
        },
        realLifeExample: "Installing Steam or Epic Games before playing your favorite titles.",
        code: "# Verify Python and Pip runtime\nimport sys\nprint(f\"Python Version: {sys.version.split()[0]}\")\nprint(\"Environment status: Online & Ready!\")",
        output: "Python Version: 3.12.2\nEnvironment status: Online & Ready!",
        howItWorks: "sys.version inspects the installed interpreter environment version directly from code.",
        tryItYourself: {
          title: "🧪 Check Platform Runtime",
          task: "Import platform module and print platform.system().",
          starterCode: "import platform\n# Print your operating system:\n",
          solution: "import platform\nprint(f\"Operating System: {platform.system()}\")",
          expectedOutput: "Operating System: Windows"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "What checkbox is essential to check when installing Python on Windows?",
            options: ["Add Python to PATH", "Delete all games", "Disable Internet", "Turn off screen"],
            correctAnswer: "Add Python to PATH",
            explanation: "Checking 'Add Python to PATH' enables terminal access to 'python' and 'pip' from any directory.",
            difficulty: "Easy"
          }
        ],
        challenge: "Open your terminal and run 'python --version' to see your installed engine version!"
      },
      college: {
        intro: "Setting up Python 3 development environments, virtual environments (venv), PATH configurations, and modern IDE tooling.",
        theory: "Python installation provisions the interpreter executable (`python3`), standard library modules, and the package installer (`pip`). In academic and software development settings, isolating project dependencies via isolated virtual environments (`python -m venv .venv`) prevents dependency version conflicts across projects.",
        visual: {
          metaphor: "Environment Isolation & PATH Resolution",
          badge: "🎓 Virtual Environments & System PATH",
          description: "System PATH directs OS commands to active isolated virtual environments.",
          elements: [
            { label: "Global OS", value: "System Python Interpreter", color: "slate", icon: "HardDrive" },
            { label: "Virtual Env", value: ".venv (Isolated site-packages)", color: "indigo", icon: "Box" },
            { label: "Package Manager", value: "pip install (PyPI)", color: "emerald", icon: "Package" }
          ]
        },
        realLifeExample: "Setting up lab machines to run assignment code with isolated NumPy/SciPy package versions.",
        code: "import sys\nimport os\n\nprint(f\"Executable: {sys.executable}\")\nprint(f\"Virtual Env Active: {sys.prefix != sys.base_prefix}\")",
        output: "Executable: /usr/local/bin/python3\nVirtual Env Active: True",
        howItWorks: "Comparing sys.prefix to sys.base_prefix programmatically verifies if execution occurs within an isolated venv.",
        tryItYourself: {
          title: "🧪 Verify Python Path",
          task: "Print sys.version and sys.platform using the sys module.",
          starterCode: "import sys\n# Output Python version and platform:\n",
          solution: "import sys\nprint(f\"Version: {sys.version.split()[0]} on {sys.platform}\")",
          expectedOutput: "Version: 3.12.0 on win32"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "What is the primary benefit of using 'python -m venv'?",
            options: ["Isolating project dependencies so different projects can use different package versions", "Makes Python run 10x faster", "Encrypts your source code", "Replaces the operating system"],
            correctAnswer: "Isolating project dependencies so different projects can use different package versions",
            explanation: "Virtual environments create standalone directory trees containing independent Python binaries and site-packages.",
            difficulty: "Medium"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "What is the role of the PATH environment variable in Python execution?",
            answer: "PATH is an environment variable containing an ordered list of directories. When you type `python` or `pip` in the shell, the OS searches those directories in order to find the executable binary."
          },
          {
            type: "Practical",
            question: "How do virtual environments work under the hood in Python?",
            answer: "A virtualenv contains a `pyvenv.cfg` file pointing back to the base Python installation and a local `site-packages` directory. When activated, it modifies `PATH` so `python` points to the virtual environment's interpreter."
          }
        ]
      },
      graduate: {
        intro: "Enterprise Python workspace provisioning, multi-version management (pyenv/uv), and containerized deployments.",
        theory: "In engineering organizations, developers rarely install global Python versions directly. Instead, modern teams use toolchain managers like `pyenv` or `uv` to manage multiple Python runtimes across projects, lock dependencies deterministically via `poetry.lock` or `uv.lock`, and package services in slim Docker images (`python:3.12-slim`).",
        visual: {
          metaphor: "Containerized & Locked Dependency Tooling",
          badge: "💼 Enterprise Toolchain & Containers",
          description: "Deterministic builds with uv/poetry, Docker containers, and CI/CD pipelines.",
          elements: [
            { label: "Version Manager", value: "pyenv / uv / asdf", color: "blue", icon: "GitBranch" },
            { label: "Lockfile", value: "pyproject.toml + poetry.lock", color: "emerald", icon: "Lock" },
            { label: "Container", value: "Docker python:3.12-slim", color: "purple", icon: "Container" }
          ]
        },
        realLifeExample: "Standardizing development environments across 200 engineers so 'it works on my machine' never happens.",
        code: "import sys\nimport site\n\nprint(\"[ENV AUDIT] Runtime Configuration:\")\nprint(f\"Python Version: {sys.version.split()[0]}\")\nprint(f\"Package Directory: {site.getsitepackages()[0]}\")",
        output: "[ENV AUDIT] Runtime Configuration:\nPython Version: 3.12.2\nPackage Directory: /app/.venv/lib/python3.12/site-packages",
        howItWorks: "Audits Python site-packages directory programmatically for deployment validation.",
        tryItYourself: {
          title: "🧪 Audit System Environment",
          task: "Create a dictionary containing python_version and environment mode ('Production' / 'Development') and print it.",
          starterCode: "import sys\n# Create env audit dictionary:\n",
          solution: "import sys\nenv_data = {\"version\": sys.version.split()[0], \"env\": \"Production\"}\nprint(f\"[STATUS] Running Python {env_data['version']} in {env_data['env']} Mode\")",
          expectedOutput: "[STATUS] Running Python 3.12.2 in Production Mode"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "Why do enterprise teams avoid deploying code with floating dependency ranges?",
            options: ["Sub-dependencies can release breaking changes, resulting in non-reproducible production builds", "Floating dependencies consume extra hard drive space", "Python forbids floating dependencies", "It slows down CPU clock speeds"],
            correctAnswer: "Sub-dependencies can release breaking changes, resulting in non-reproducible production builds",
            explanation: "Lockfiles guarantee that every engineer, staging server, and production container installs byte-for-byte identical package versions.",
            difficulty: "Medium"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "How do lockfiles like poetry.lock or uv.lock ensure build reproducibility?",
            answer: "Lockfiles record exact version numbers, cryptographic hashes (SHA-256), and resolved dependency sub-trees for every package, eliminating non-deterministic resolution discrepancies across deployment targets."
          },
          {
            type: "Scenario",
            question: "How do you minimize the attack surface and image size of a Python Docker container in production?",
            answer: "Use multi-stage Docker builds: compile wheels in a build stage with build tools, then copy only compiled artifacts into a lightweight `python:3.12-slim` or distroless base image running as a non-root user."
          }
        ]
      },
      professional: {
        intro: "Deterministic runtime provisioning, C-extension toolchains, distroless container builds, and security posture.",
        theory: "Production engineering demands reproducible runtime environments with pinned compiler toolchains, cryptographic dependency verification, and minimal container footprints. Engineers must manage C-extension compilation (e.g. `numpy`, `cryptography`) via pre-built manylinux wheels, implement vulnerability scanning (`pip-audit`, `trivy`), and ensure zero-root execution in Kubernetes pods.",
        visual: {
          metaphor: "Multi-Stage Distroless Production Build",
          badge: "🚀 Production CI/CD & Artifact Pipeline",
          description: "Multi-stage build compiles dependencies and produces minimal, non-root hardened runtime images.",
          elements: [
            { label: "Build Stage", value: "Compiles C-wheels & UV resolution", color: "blue", icon: "Hammer" },
            { label: "Security Gate", value: "Trivy & pip-audit CVE verification", color: "red", icon: "ShieldAlert" },
            { label: "Runtime Stage", value: "Distroless Non-Root Container (<80MB)", color: "emerald", icon: "CheckCircle2" }
          ]
        },
        realLifeExample: "Zero-trust Kubernetes deployments processing millions of encrypted financial payloads.",
        code: "import sys\nimport ssl\n\nprint(\"[SEC AUDIT] Production Runtime Verification:\")\nprint(f\"OpenSSL Version: {ssl.OPENSSL_VERSION}\")\nprint(f\"64-bit Architecture: {sys.maxsize > 2**32}\")\nprint(f\"Byteorder: {sys.byteorder}\")",
        output: "[SEC AUDIT] Production Runtime Verification:\nOpenSSL Version: OpenSSL 3.1.4 24 Oct 2023\n64-bit Architecture: True\nByteorder: little",
        howItWorks: "Inspects underlying crypto libraries (OpenSSL), word sizes, and architecture properties for production security compliance.",
        tryItYourself: {
          title: "🧪 Production Security & Runtime Check",
          task: "Check if sys.flags.optimize is enabled (bytecode optimization flag) and print status.",
          starterCode: "import sys\n# Check optimize flag\n",
          solution: "import sys\nopt_level = sys.flags.optimize\nprint(f\"[RUNTIME] Optimization Level: {opt_level} (Docstrings/Asserts {'stripped' if opt_level > 0 else 'active'})\")",
          expectedOutput: "[RUNTIME] Optimization Level: 0 (Docstrings/Asserts active)"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "What is the purpose of 'manylinux' wheel standards (PEP 513/571/599/600)?",
            options: ["Ensuring pre-compiled C-extension binary wheels run across diverse Linux distributions without local GCC compilation", "Making Linux run Windows binaries", "Speeding up CPU clocks", "Disabling open-source licenses"],
            correctAnswer: "Ensuring pre-compiled C-extension binary wheels run across diverse Linux distributions without local GCC compilation",
            explanation: "Manylinux defines baseline glibc/ABI standards allowing package maintainers to ship binary wheels compatible with all modern Linux distros.",
            difficulty: "Hard"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "What is the performance and security impact of running Python with the -O and -OO flags?",
            answer: "`-O` removes `assert` statements and sets `__debug__` to False. `-OO` additionally strips docstrings from bytecode. In production, removing docstrings reduces memory overhead, but relying on `assert` for business authorization is an anti-pattern because `-O` silently bypasses assertions."
          },
          {
            type: "Scenario",
            question: "A high-security financial backend requires hermetic, air-gapped CI/CD builds. How do you design the Python dependency pipeline?",
            answer: "Host an internal PyPI proxy (e.g. Artifactory/Nexus) with signed wheel verification. Pin all dependencies with exact SHA-256 hashes in `requirements.txt` or `uv.lock`. Execute `pip install --require-hashes --no-index --find-links=/local/wheelhouse` during container compilation."
          }
        ]
      }
    }
  }
];

// Helper to generate full sections
console.log("Building adaptive Section 1 to 3...");
