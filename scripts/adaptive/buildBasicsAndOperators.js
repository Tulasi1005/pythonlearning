import path from 'path';
import { fileURLToPath } from 'url';
import { writeTopicFile } from './helper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../../src/data');

// ==========================================
// SECTION 1: PYTHON BASICS (Topics 1-9)
// ==========================================
const pythonBasics = [
  {
    id: "what-is-python",
    topicNumber: 1,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "What is Python?",
    stages: {
      kid: {
        intro: "Meet Python! It is like a super-friendly robot friend who loves to follow your fun instructions.",
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
          }
        ]
      }
    }
  },
  {
    id: "first-python-program",
    topicNumber: 3,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "First Python Program",
    stages: {
      kid: {
        intro: "Let's make our computer talk out loud for the very first time!",
        theory: "Writing your first program is like teaching your parrot a funny new word. When you write `print('Hello World!')`, the computer smiles and repeats your words back to you!",
        visual: {
          metaphor: "Talking Parrot Megaphone",
          badge: "🧸 Talking Megaphone",
          description: "Whatever words you whisper into print(...), the computer announces out loud!",
          elements: [
            { label: "You Write", value: "print('Hello Friends!')", color: "emerald", icon: "Edit3" },
            { label: "Computer Speaks", value: "Hello Friends! 🎉", color: "blue", icon: "Volume2" }
          ]
        },
        realLifeExample: "Pressing the big red button on a talking toy bear that says 'I love you!'.",
        code: "# Make your computer speak!\nprint(\"Hello World! 🌟\")\nprint(\"I wrote my first Python code!\")",
        output: "Hello World! 🌟\nI wrote my first Python code!",
        howItWorks: "The print() command takes everything inside the quotes and paints it on your screen.",
        tryItYourself: {
          title: "🧪 Make the Computer Say Your Name",
          task: "Write a print statement with your name inside.",
          starterCode: "print(\"Hello, my name is ...\")",
          solution: "print(\"Hello, my name is Leo!\")",
          expectedOutput: "Hello, my name is Leo!"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "What magic word makes the computer write messages on screen?",
            options: ["print()", "jump()", "sleep()", "eat()"],
            correctAnswer: "print()",
            explanation: "print() is Python's built-in instruction for displaying words.",
            difficulty: "Easy"
          }
        ],
        challenge: "Print three lines of your favorite cartoon song lyrics!"
      },
      young: {
        intro: "Write your canonical 'Hello, World!' and run your first gamer script file.",
        theory: "Every coder in history started with 'Hello, World!'. In Python, you create a text file named `main.py`, write your code, and run it in terminal with `python main.py`. Unlike Java or C++ which require 10 lines of class boilerplate, Python executes your code instantly in one line.",
        visual: {
          metaphor: "Command Terminal Execution",
          badge: "🎒 Terminal Shell Run",
          description: "Write script file -> save as .py -> run `python main.py` in terminal.",
          elements: [
            { label: "Script File", value: "main.py", color: "blue", icon: "FileText" },
            { label: "Terminal Command", value: "python main.py", color: "indigo", icon: "Terminal" },
            { label: "Output Stream", value: "Standard Output (stdout)", color: "emerald", icon: "Play" }
          ]
        },
        realLifeExample: "Typing `/spawn diamond_sword` into Minecraft chat command console.",
        code: "# Classic gamer greeting script\nprint(\"=== QUEST LAUNCHER ===\")\nprint(\"Hello, World!\")\nprint(\"Player 1 connected successfully.\")",
        output: "=== QUEST LAUNCHER ===\nHello, World!\nPlayer 1 connected successfully.",
        howItWorks: "print() pushes formatted text strings directly into standard output (stdout) with trailing newlines.",
        tryItYourself: {
          title: "🧪 Build a Quest Intro",
          task: "Print a 2-line quest title and difficulty level.",
          starterCode: "# Print quest banner\n",
          solution: "print(\"=== MISSION: DRAGON LAIR ===\")\nprint(\"Difficulty: HEROIC\")",
          expectedOutput: "=== MISSION: DRAGON LAIR ===\nDifficulty: HEROIC"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "What file extension do Python source files use?",
            options: [".py", ".python", ".exe", ".doc"],
            correctAnswer: ".py",
            explanation: "Python script files always use the `.py` file extension.",
            difficulty: "Easy"
          }
        ],
        challenge: "Write a script that displays your favorite game title and your high score!"
      },
      college: {
        intro: "Syntax structure, interpreter execution lifecycle, standard output streams (sys.stdout), and script arguments.",
        theory: "A minimal Python script requires zero boilerplate headers or static `main()` class methods. When `python script.py` is invoked, the CPython runtime initializes built-in namespaces (`__builtins__`), sets module metadata (`__name__ == '__main__'`), compiles source text into AST and bytecode, and streams evaluation results directly to POSIX file descriptor 1 (`sys.stdout`).",
        visual: {
          metaphor: "Standard I/O Stream Pipeline",
          badge: "🎓 Process Initialization & stdout",
          description: "Interpreter parses top-level statements and writes output bytes to sys.stdout.",
          elements: [
            { label: "Source Stream", value: "script.py (Top-level statements)", color: "indigo", icon: "Code2" },
            { label: "Runtime Module", value: "__main__ namespace", color: "blue", icon: "Box" },
            { label: "File Descriptor 1", value: "sys.stdout buffer flush", color: "emerald", icon: "ArrowRight" }
          ]
        },
        realLifeExample: "Executing lab computation scripts that output formatted data matrices for plotting.",
        code: "import sys\n\ndef main():\n    print(\"Hello, World!\")\n    print(f\"Executed via: {sys.argv[0]}\")\n\nif __name__ == \"__main__\":\n    main()",
        output: "Hello, World!\nExecuted via: main.py",
        howItWorks: "The `if __name__ == '__main__':` idiom ensures `main()` executes only when run directly as a script, not when imported.",
        tryItYourself: {
          title: "🧪 Write Modular Entry Point",
          task: "Define a function greet_student() and call it inside an if __name__ == '__main__' guard.",
          starterCode: "# Define function and entry point:\n",
          solution: "def greet_student(name):\n    print(f\"Welcome to Computer Science Lab, {name}!\")\n\nif __name__ == \"__main__\":\n    greet_student(\"Rohan\")",
          expectedOutput: "Welcome to Computer Science Lab, Rohan!"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "Why is 'if __name__ == \"__main__\":' standard practice in Python?",
            options: ["It prevents code from executing automatically when the file is imported into another module", "It speeds up compilation", "It is required for print to work", "It is an OS security rule"],
            correctAnswer: "It prevents code from executing automatically when the file is imported into another module",
            explanation: "When imported, `__name__` is set to the module name; when run directly, it is `'__main__'`. This guard prevents unwanted side-effects on import.",
            difficulty: "Medium"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "What is `__name__` in Python and how is it populated?",
            answer: "`__name__` is a special built-in module attribute. When a script is passed directly to the interpreter (e.g. `python script.py`), `__name__` is assigned the string `'__main__'`. When imported (`import script`), `__name__` is assigned the module's import path name."
          }
        ]
      },
      graduate: {
        intro: "Command-line interface (CLI) architecture, structured process output, POSIX return codes, and logging standards.",
        theory: "In enterprise services and automated cron runners, production scripts must follow POSIX standards: accept standardized CLI arguments (`argparse`/`click`), emit structured logs rather than raw `print()` statements, and return explicit exit status codes (`sys.exit(0)` for success, non-zero for failure) to allow orchestrators like Airflow and Kubernetes to handle failures.",
        visual: {
          metaphor: "Enterprise CLI Process Execution",
          badge: "💼 Production CLI & Status Codes",
          description: "CLI parses parameters, outputs structured logs, and signals exit code to OS orchestrator.",
          elements: [
            { label: "CLI Args", value: "sys.argv / argparse flags", color: "blue", icon: "Terminal" },
            { label: "Structured Log", value: "logging / JSON stdout", color: "purple", icon: "FileText" },
            { label: "Exit Status", value: "sys.exit(0) Success Code", color: "emerald", icon: "CheckCircle" }
          ]
        },
        realLifeExample: "Nightly automated billing reconcilers triggered by Kubernetes CronJobs.",
        code: "import sys\nimport logging\n\nlogging.basicConfig(level=logging.INFO, format=\"%(asctime)s [%(levelname)s] %(message)s\")\n\ndef run_reconciliation():\n    logging.info(\"Starting ledger reconciliation batch...\")\n    logging.info(\"Processed 1,240 records with 0 errors.\")\n    return 0\n\nif __name__ == \"__main__\":\n    sys.exit(run_reconciliation())",
        output: "2026-10-07 12:00:00 [INFO] Starting ledger reconciliation batch...\n2026-10-07 12:00:01 [INFO] Processed 1,240 records with 0 errors.",
        howItWorks: "Uses Python's logging module for timestamped operational logs and propagates return code to `sys.exit()`.",
        tryItYourself: {
          title: "🧪 Build a Batch Job Logger",
          task: "Create a job function that prints a JSON-formatted log line and returns exit code 0.",
          starterCode: "import json\nimport sys\n# Output JSON log\n",
          solution: "import json\nimport sys\nlog_entry = {\"job\": \"invoice_sync\", \"status\": \"SUCCESS\", \"records\": 450}\nprint(json.dumps(log_entry))\nsys.exit(0)",
          expectedOutput: "{\"job\": \"invoice_sync\", \"status\": \"SUCCESS\", \"records\": 450}"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "Why should production backend services use logging instead of print()?",
            options: ["Logging supports log levels (INFO/WARN/ERROR), output timestamps, thread tracking, and structured destinations", "print() crashes in Docker", "print() is deprecated in Python 3", "Logging requires zero CPU"],
            correctAnswer: "Logging supports log levels (INFO/WARN/ERROR), output timestamps, thread tracking, and structured destinations",
            explanation: "Python's `logging` framework enables standardized log filtering, JSON serialization for Datadog/ELK, and thread-safe streaming.",
            difficulty: "Medium"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "How do exit codes work in Python scripts and why do orchestrators rely on them?",
            answer: "A process communicates its termination status to the parent OS shell via an integer exit code (0 for success, 1-255 for errors). CI/CD runners, Docker, and Kubernetes inspect this exit code to decide whether to restart a pod or trigger alerts."
          }
        ]
      },
      professional: {
        intro: "Application bootstrap architecture, signal trapping (SIGTERM/SIGINT), graceful shutdown, and 12-factor lifecycle.",
        theory: "Senior engineers treat the first entry point of an application as a critical lifecycle boundary. Production bootstrapping requires registering signal handlers (`signal.signal`) for graceful pod termination, initializing connection pools, validating environment schemas (Pydantic), establishing OpenTelemetry tracing contexts, and cleanly flushing telemetry buffers before process exit.",
        visual: {
          metaphor: "Graceful Container Lifecycle & Signal Trap",
          badge: "🚀 Application Lifecycle & Signal Trapping",
          description: "Handles SIGTERM signals, drains in-flight HTTP requests, and flushes connection pools gracefully.",
          elements: [
            { label: "OS Signal", value: "SIGTERM / Kubernetes Eviction", color: "red", icon: "AlertCircle" },
            { label: "Signal Trap", value: "signal.signal(signal.SIGTERM, handler)", color: "amber", icon: "ShieldAlert" },
            { label: "Graceful Drain", value: "Flush DB pool & telemetry -> sys.exit(0)", color: "emerald", icon: "Check" }
          ]
        },
        realLifeExample: "Zero-downtime rolling deployments in Kubernetes clusters handling thousands of active websockets.",
        code: "import signal\nimport sys\n\ndef graceful_shutdown(signum, frame):\n    print(f\"[LIFECYCLE] Received signal {signum}. Draining active connections...\")\n    print(\"[LIFECYCLE] DB pools closed. Terminating cleanly.\")\n    sys.exit(0)\n\nsignal.signal(signal.SIGINT, graceful_shutdown)\nprint(\"[BOOTSTRAP] Production payment-worker running (PID ready).\")",
        output: "[BOOTSTRAP] Production payment-worker running (PID ready).",
        howItWorks: "Hooks the OS interrupt signal (`SIGINT`) to trigger graceful cleanup routines before terminating.",
        tryItYourself: {
          title: "🧪 Signal Handler Registration",
          task: "Register a dummy signal handler for SIGTERM and verify the handler function name.",
          starterCode: "import signal\n# Define and check signal handler\n",
          solution: "import signal\ndef on_terminate(sig, frame):\n    pass\nsignal.signal(signal.SIGTERM, on_terminate)\nprint(\"[INIT] Registered SIGTERM handler successfully.\")",
          expectedOutput: "[INIT] Registered SIGTERM handler successfully."
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "Why must cloud microservices handle SIGTERM rather than allowing immediate SIGKILL?",
            options: ["To finish in-flight requests, commit active DB transactions, and close open sockets without data corruption", "Because SIGKILL is illegal", "SIGTERM makes CPU coolers run quieter", "Python cannot run without SIGTERM"],
            correctAnswer: "To finish in-flight requests, commit active DB transactions, and close open sockets without data corruption",
            explanation: "Kubernetes sends SIGTERM to allow applications a graceful termination period (default 30s) before issuing an uncatchable SIGKILL.",
            difficulty: "Hard"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "How does Python's signal module interact with the Global Interpreter Lock and the main thread?",
            answer: "In Python, signal handlers are always executed in the main thread of the Python interpreter, even if the OS signal was delivered to a background thread. The Python runtime sets a flag and evaluates the handler during the main thread's bytecode loop."
          }
        ]
      }
    }
  },
  {
    id: "python-syntax",
    topicNumber: 4,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "Python Syntax & Indentation",
    stages: {
      kid: {
        intro: "Python loves neat rooms! Just like lining up your toy cars nicely, Python loves neat lines.",
        theory: "In Python, we use neat spaces called 'indentation' to show which toy belongs in which box. If you keep your lines neat and tidy, Python is super happy!",
        visual: {
          metaphor: "Neat Toy Shelf",
          badge: "🧸 Neat Toy Blocks",
          description: "Line up your toy blocks neatly so Python knows they belong together!",
          elements: [
            { label: "Neat Line", value: "4 Spaces (Tab)", color: "emerald", icon: "AlignLeft" },
            { label: "Happy Python", value: "Everything works smoothly!", color: "blue", icon: "Smile" }
          ]
        },
        realLifeExample: "Putting all your crayons inside the crayon box, and all your stuffed animals on the bed.",
        code: "# Neat and tidy code\nif True:\n    print(\"I am tucked neatly inside with 4 spaces! 🧸\")",
        output: "I am tucked neatly inside with 4 spaces! 🧸",
        howItWorks: "The 4 spaces before print tell Python that this message belongs inside the if block.",
        tryItYourself: {
          title: "🧪 Tidy Up the Spaces",
          task: "Indent the print line with 4 spaces inside the if block.",
          starterCode: "if True:\nprint(\"Please indent me!\")",
          solution: "if True:\n    print(\"I am neatly indented!\")",
          expectedOutput: "I am neatly indented!"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "How does Python know which lines belong inside a block?",
            options: ["Neat spaces (indentation)", "Screaming loudly", "Closing the laptop", "Using crayons"],
            correctAnswer: "Neat spaces (indentation)",
            explanation: "Python uses indentation (4 spaces) to define blocks of code.",
            difficulty: "Easy"
          }
        ],
        challenge: "Write two print statements neatly indented inside an if True block!"
      },
      young: {
        intro: "Master Python's indentation rules: no curly braces `{}` needed, just clean 4-space tabs!",
        theory: "Unlike languages like JavaScript or C++ that use curly brackets `{}` and semicolons `;`, Python enforces clean code using whitespace indentation. A code block starts with a colon `:` and every line inside it is indented by 4 spaces. If you mix spaces and tabs, Python throws an `IndentationError`.",
        visual: {
          metaphor: "Game Block Hierarchy",
          badge: "🎒 Code Block Hierarchy",
          description: "Parent statement `:` -> 4 Spaces Indentation -> Child block execution.",
          elements: [
            { label: "Condition", value: "if player_alive:", color: "blue", icon: "ChevronRight" },
            { label: "Indented Block", value: "    player.run()\n    player.jump()", color: "emerald", icon: "CornerDownRight" }
          ]
        },
        realLifeExample: "Organizing your game inventory: all potions grouped under the 'Potions' tab.",
        code: "# Clean Python indentation in a game check\nhas_gem = True\n\nif has_gem:\n    print(\"[SUCCESS] Door unlocked! 🗝️\")\n    print(\"You gained 50 XP!\")\nprint(\"Game loop continues...\")",
        output: "[SUCCESS] Door unlocked! 🗝️\nYou gained 50 XP!\nGame loop continues...",
        howItWorks: "Lines indented with 4 spaces only run if `has_gem` is True. The last line has no indentation, so it always runs.",
        tryItYourself: {
          title: "🧪 Fix the Indentation Bug",
          task: "Indent the action line so it sits inside the condition block.",
          starterCode: "is_game_over = False\nif not is_game_over:\nprint(\"Keep playing!\")",
          solution: "is_game_over = False\nif not is_game_over:\n    print(\"Keep playing!\")",
          expectedOutput: "Keep playing!"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "What error does Python raise when code lines are misaligned?",
            options: ["IndentationError", "GameLagError", "SyntaxLoopError", "ColorError"],
            correctAnswer: "IndentationError",
            explanation: "Python throws an IndentationError whenever indentation spaces are mismatched.",
            difficulty: "Easy"
          }
        ],
        challenge: "Create an if-statement that prints two gamer stats neatly indented!"
      },
      college: {
        intro: "Lexical structure, off-side rule, PEP 8 style standards, and tokenization of INDENT/DEDENT opcodes.",
        theory: "Python implements Peter Landin's 'off-side rule', where visual indentation delineates block scoping rather than lexical delimiters. The Python tokenizer emits synthetic `INDENT` and `DEDENT` tokens onto the parser stack whenever column depths increase or decrease following a colon `:`. PEP 8 establishes the strict universal convention: 4 spaces per indentation level, forbidding ASCII tabs.",
        visual: {
          metaphor: "Tokenizer INDENT/DEDENT Stack",
          badge: "🎓 Lexical Analysis & Scoping",
          description: "Lexer translates whitespace shifts into INDENT and DEDENT tokens for AST generation.",
          elements: [
            { label: "Colon ':'", value: "Begins block scope", color: "blue", icon: "List" },
            { label: "INDENT Token", value: "Pushes indent depth to stack", color: "indigo", icon: "ArrowRight" },
            { label: "DEDENT Token", value: "Pops indent depth from stack", color: "emerald", icon: "ArrowLeft" }
          ]
        },
        realLifeExample: "Eliminating the 'dangling else' ambiguity inherent in C/Java nested conditionals.",
        code: "# Demonstrating lexical block scoping\ndef evaluate_grade(score):\n    if score >= 90:\n        status = \"Distinction\"\n    else:\n        status = \"Passing\"\n    return status\n\nprint(f\"Result: {evaluate_grade(94)}\")",
        output: "Result: Distinction",
        howItWorks: "The AST parser groups statements under the `If` AST node based on the emitted INDENT/DEDENT tokens.",
        tryItYourself: {
          title: "🧪 Construct Nested PEP 8 Scope",
          task: "Write a nested function that computes squares with clean 4-space indentation.",
          starterCode: "def compute(x):\n# Return x squared inside\n",
          solution: "def compute(x):\n    result = x ** 2\n    return result\n\nprint(compute(8))",
          expectedOutput: "64"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "What PEP document defines the official Python style guide for indentation and formatting?",
            options: ["PEP 8", "PEP 20", "PEP 484", "PEP 572"],
            correctAnswer: "PEP 8",
            explanation: "PEP 8 is the definitive style guide for Python code.",
            difficulty: "Easy"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "How does Python's tokenizer handle indentation under the hood?",
            answer: "The tokenizer maintains an internal stack of indentation levels (starting with 0). When a line begins with more spaces than the stack top, it pushes the new depth and emits an `INDENT` token. When indentation decreases, it pops levels and emits `DEDENT` tokens until matching the parent depth."
          }
        ]
      },
      graduate: {
        intro: "Enterprise code style enforcement, automated CI linting (Ruff/Black/Flake8), and maintainability metrics.",
        theory: "In professional engineering teams, debates over syntax and formatting are entirely automated away. Teams configure strict pre-commit hooks and CI pipelines utilizing ultra-fast linters (`ruff`) and opinionated formatters (`black`) to enforce PEP 8 standards, cyclomatic complexity limits, and consistent whitespace across millions of lines of code.",
        visual: {
          metaphor: "Automated Pre-Commit Linting Gate",
          badge: "💼 Automated Linting & CI Gate",
          description: "Pre-commit hooks validate whitespace, type hints, and imports before code merge.",
          elements: [
            { label: "Git Commit", value: "Developer triggers commit", color: "blue", icon: "GitCommit" },
            { label: "Ruff / Black", value: "Auto-formats 4-space PEP 8", color: "emerald", icon: "CheckSquare" },
            { label: "CI Pipeline", value: "Guarantees 100% clean repo", color: "purple", icon: "ShieldCheck" }
          ]
        },
        realLifeExample: "Maintaining uniform code style across 50 microservices developed by 12 distributed squads.",
        code: "# Clean enterprise code adhering to strict PEP 8\nfrom typing import Dict\n\ndef process_transaction(payload: Dict[str, float]) -> float:\n    tax_rate = 0.0825\n    subtotal = payload.get(\"amount\", 0.0)\n    total = subtotal * (1 + tax_rate)\n    return round(total, 2)\n\nprint(f\"Settlement Total: ${process_transaction({'amount': 150.0}):.2f}\")",
        output: "Settlement Total: $162.38",
        howItWorks: "Adheres to clean PEP 8 indentation, explicit type hinting, and standard naming conventions.",
        tryItYourself: {
          title: "🧪 Format Financial Fee Calculator",
          task: "Write a clean function calculate_fee(amount: float) -> float returning amount * 0.025.",
          starterCode: "def calculate_fee(amount: float) -> float:\n# Return fee\n",
          solution: "def calculate_fee(amount: float) -> float:\n    return round(amount * 0.025, 2)\n\nprint(f\"Fee: ${calculate_fee(1000.0):.2f}\")",
          expectedOutput: "Fee: $25.00"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "Which modern tool is widely adopted for ultra-fast Python linting and formatting in enterprise CI/CD?",
            options: ["Ruff (written in Rust)", "Internet Explorer", "WordPad", "Flash Player"],
            correctAnswer: "Ruff (written in Rust)",
            explanation: "Ruff is 10-100x faster than legacy linters and combines Flake8, Black, isort, and pyupgrade into one binary.",
            difficulty: "Medium"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "Why does Python forbid mixing spaces and tabs in source files?",
            answer: "Since Python 3, mixing tabs and spaces for indentation in the same file results in a fatal `TabError`. Because different editors render tabs as 2, 4, or 8 spaces, mixing them creates visual illusions where blocks appear aligned to the developer but fail lexical parsing."
          }
        ]
      },
      professional: {
        intro: "AST compilation nuances, compiler flags, cyclomatic complexity control, and bytecode analysis.",
        theory: "Senior engineers analyze Python syntax beyond formatting aesthetics. Understanding the compiler's Abstract Syntax Tree (AST), the role of opcode jump targets (`JUMP_FORWARD`, `POP_JUMP_IF_FALSE`), and how block structuring affects CPU branch prediction and bytecode size enables architects to write clean, cache-friendly code while keeping cyclomatic complexity under strict thresholds.",
        visual: {
          metaphor: "AST Bytecode Emission & Jump Tables",
          badge: "🚀 AST Node Graph & Opcode Offsets",
          description: "Parser compiles indented statements into nested AST block structures and relative jump offsets.",
          elements: [
            { label: "AST Block", value: "ast.If / ast.FunctionDef", color: "indigo", icon: "GitFork" },
            { label: "Bytecode Op", value: "POP_JUMP_IF_FALSE to offset +14", color: "blue", icon: "Cpu" },
            { label: "Complexity", value: "Radon cyclomatic complexity score", color: "emerald", icon: "Activity" }
          ]
        },
        realLifeExample: "Refactoring high-throughput algorithmic dispatchers to reduce nested branch depths and AST evaluation overhead.",
        code: "import dis\n\ndef check_threshold(val: int) -> bool:\n    if val > 100:\n        return True\n    return False\n\nprint(\"[DISASSEMBLY OF INDENTED BLOCK]\")\ndis.dis(check_threshold)",
        output: "[DISASSEMBLY OF INDENTED BLOCK]\n  4           0 LOAD_FAST                0 (val)\n              2 LOAD_CONST               1 (100)\n              4 COMPARE_OP              68 (>)\n              8 POP_JUMP_IF_FALSE        2 (to 14)\n\n  5          10 LOAD_CONST               2 (True)\n             12 RETURN_VALUE\n\n  6     >>   14 LOAD_CONST               3 (False)\n             16 RETURN_VALUE",
        howItWorks: "Disassembles Python bytecode showing how indented if/else blocks translate directly into `POP_JUMP_IF_FALSE` offsets.",
        tryItYourself: {
          title: "🧪 Inspect AST Structure",
          task: "Use the built-in ast module to parse 'x = 10' and print the AST body node type.",
          starterCode: "import ast\n# Parse statement and inspect node\n",
          solution: "import ast\ntree = ast.parse('x = 10')\nprint(type(tree.body[0]).__name__)",
          expectedOutput: "Assign"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "What module in Python's standard library allows you to inspect and manipulate syntax at the AST level?",
            options: ["ast", "syntax_tool", "py_compiler", "token_magic"],
            correctAnswer: "ast",
            explanation: "The `ast` module provides full programmatic access to Python's Abstract Syntax Tree for analysis and transformation.",
            difficulty: "Hard"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "How does Python's AST optimizer simplify constant expressions at compile time?",
            answer: "Python's compiler performs constant folding via AST peephole optimization. Expressions like `24 * 60 * 60` are evaluated at compile time into `86400` and stored directly in `co_consts`, eliminating runtime arithmetic."
          }
        ]
      }
    }
  },
  {
    id: "variables",
    topicNumber: 5,
    sectionId: "python-basics",
    sectionTitle: "Section 1 — Python Basics",
    title: "Variables & Memory Binding",
    stages: {
      kid: {
        intro: "Imagine you have a magical toy box with a name tag on it!",
        theory: "A variable is just like a labeled toy box! You stick a sticker on the box that says 'toy', and you place your favorite Teddy Bear inside. Whenever you ask Python for 'toy', it opens the box and gives you your Teddy Bear!",
        visual: {
          metaphor: "Labeled Toy Box",
          badge: "🧸 Toy Box Model",
          description: "Stick a label on the box and place your favorite treasure inside!",
          elements: [
            { label: "Box Label", value: "toy", color: "emerald", icon: "Tag" },
            { label: "Inside Box", value: "\"Teddy Bear\" 🧸", color: "blue", icon: "Box" },
            { label: "When You Call", value: "Python brings out Teddy!", color: "amber", icon: "Sparkles" }
          ]
        },
        realLifeExample: "Your lunchbox has your name on it, and yummy cookies inside!",
        code: "# Your very own labeled toy box\ntoy = \"Teddy Bear 🧸\"\nprint(\"Inside the toy box we have:\")\nprint(toy)",
        output: "Inside the toy box we have:\nTeddy Bear 🧸",
        howItWorks: "We create a box named `toy` and put `Teddy Bear` in it. print(toy) shows what is inside.",
        tryItYourself: {
          title: "🧪 Make a Candy Box Variable",
          task: "Create a variable called candy and give it your favorite sweet treat, then print it!",
          starterCode: "# Create your candy variable:\ncandy = \"...\"\nprint(candy)",
          solution: "candy = \"Chocolate\"\nprint(candy)",
          expectedOutput: "Chocolate"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "What is a variable in Python?",
            options: ["A labeled box to remember something", "A loud noise", "A broken wheel", "A spoon"],
            correctAnswer: "A labeled box to remember something",
            explanation: "Variables give a name to information so your computer can remember it!",
            difficulty: "Easy"
          }
        ],
        challenge: "Create two boxes: one for 'pet_name' and one for 'pet_color', and print them both!"
      },
      young: {
        intro: "Variables are your game's memory slots—they store player health, gold coins, and inventory weapons!",
        theory: "In games, things are constantly changing: your character takes damage, collects loot, or levels up. Variables store these numbers and names in computer memory so your game can remember your high score and current power level.",
        visual: {
          metaphor: "Game HUD & Inventory Slots",
          badge: "🎒 Gamer HUD Memory Slot",
          description: "Variables hold real-time game values in memory slots.",
          elements: [
            { label: "player_name", value: "\"ShadowKnight\"", color: "blue", icon: "User" },
            { label: "hp_points", value: "100", color: "emerald", icon: "Heart" },
            { label: "gold_coins", value: "450", color: "amber", icon: "Coins" }
          ]
        },
        realLifeExample: "The score display in Fortnite or Roblox that updates every time you score a goal.",
        code: "# Storing player stats in variables\nplayer_name = \"AlexNinja\"\nhp = 100\ngold = 250\n\nprint(f\"Player: {player_name}\")\nprint(f\"HP: {hp} | Gold: {gold} coins\")",
        output: "Player: AlexNinja\nHP: 100 | Gold: 250 coins",
        howItWorks: "We define variables for name, hp, and gold, then display them in a game HUD banner using an f-string.",
        tryItYourself: {
          title: "🧪 Level Up Your Character",
          task: "Create variables for hero_name, level, and weapon, and print your character status.",
          starterCode: "# Create hero variables:\n",
          solution: "hero_name = \"Valkyrie\"\nlevel = 5\nweapon = \"Laser Bow\"\nprint(f\"Hero: {hero_name} | Level: {level} | Weapon: {weapon}\")",
          expectedOutput: "Hero: Valkyrie | Level: 5 | Weapon: Laser Bow"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "Can the value inside a Python variable be changed later in the game?",
            options: ["Yes, you can assign a new value anytime", "No, variables can never change", "Only if you restart the computer", "Only on Mondays"],
            correctAnswer: "Yes, you can assign a new value anytime",
            explanation: "Variables are 'variable'—you can update their value as your program runs.",
            difficulty: "Easy"
          }
        ],
        challenge: "Create a gold variable with 50 coins, simulate finding 25 more coins (`gold = gold + 25`), and print the new total!"
      },
      college: {
        intro: "Name binding semantics, symbol tables, heap object references, and dynamic typing.",
        theory: "Unlike C/C++ or Java where variables are strongly typed memory containers of fixed size, Python implements 'name-binding'. A variable is simply an entry in a namespace symbol table that stores a reference (memory address pointer) to a dynamically allocated object on the heap. Multiple variables can reference the exact same underlying object (aliasing).",
        visual: {
          metaphor: "Symbol Table & Heap Reference",
          badge: "🎓 Symbol Table & Memory Pointer",
          description: "Identifiers in the symbol table point to PyObjects in the memory heap.",
          elements: [
            { label: "Identifier", value: "student_id (Symbol Table)", color: "indigo", icon: "Tag" },
            { label: "Heap Address", value: "0x7fff409b (Pointer)", color: "blue", icon: "ArrowRight" },
            { label: "PyObject", value: "int(1048) [refcnt: 1]", color: "purple", icon: "Cpu" }
          ]
        },
        realLifeExample: "University registration system mapping student roll numbers to student profile records.",
        code: "# Demonstrating identity, memory address, and references\nx = [1, 2, 3]\ny = x  # y references the exact same list object\n\nprint(f\"x id: {id(x)} | y id: {id(y)}\")\nprint(f\"Are they identical? {x is y}\")\n\ny.append(4)\nprint(f\"x after mutating y: {x}\")",
        output: "x id: 14073528 | y id: 14073528\nAre they identical? True\nx after mutating y: [1, 2, 3, 4]",
        howItWorks: "`id()` returns the memory address. Assigning `y = x` copies the reference pointer, not the list data, so mutating `y` alters `x`.",
        tryItYourself: {
          title: "🧪 Inspect Memory Identity",
          task: "Create two variables with identical short strings and verify their id() using the 'is' operator.",
          starterCode: "a = \"python_rocks\"\nb = \"python_rocks\"\n# Check identity\n",
          solution: "a = \"python_rocks\"\nb = \"python_rocks\"\nprint(f\"Same object in memory? {a is b}\")",
          expectedOutput: "Same object in memory? True"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "In Python, what happens when you write `b = a` for a list?",
            options: ["b receives a reference pointer to the same list object in memory", "A deep copy of the entire list is duplicated in RAM", "a is immediately deleted", "Python throws a syntax error"],
            correctAnswer: "b receives a reference pointer to the same list object in memory",
            explanation: "Assignment binds the name `b` to the existing object referenced by `a`.",
            difficulty: "Medium"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "What is the difference between `==` and `is` in Python variable comparisons?",
            answer: "`==` evaluates equality of values (`__eq__`), checking if two objects contain equivalent data. `is` evaluates object identity, verifying if both variables point to the exact same memory address (`id(a) == id(b)`)."
          },
          {
            type: "Practical",
            question: "What is Python's string and small integer interning mechanism?",
            answer: "To optimize memory and comparison speed, CPython automatically interns small integers (from -5 to 256) and ASCII identifier strings during startup, caching singletons in global memory so repeated references share the same address."
          }
        ]
      },
      graduate: {
        intro: "Application state management, object lifecycle, scope isolation (LEGB), and immutability patterns.",
        theory: "In commercial systems, managing state across service layers requires deep awareness of mutability and scope resolution (LEGB: Local, Enclosing, Global, Built-in). Unintentional variable mutations across function calls lead to elusive state corruption bugs in concurrent backends.",
        visual: {
          metaphor: "State Container & Immutability Boundary",
          badge: "💼 State Boundary & Variable Lifecycle",
          description: "Immutable value objects prevent accidental mutations across service boundaries.",
          elements: [
            { label: "Request Context", value: "Immutable Payload (Frozen)", color: "blue", icon: "Lock" },
            { label: "Service Layer", value: "Pure Functions / No Side Effects", color: "emerald", icon: "Workflow" },
            { label: "Database Entity", value: "Target State Sync", color: "amber", icon: "Database" }
          ]
        },
        realLifeExample: "Salary calculation engine computing gross, deductions, and net pay without modifying source employee records.",
        code: "# Employee compensation state processing\nemployee_name = \"Anjali\"\nmonthly_salary = 45000\nbonus = 5000\n\ntotal_salary = monthly_salary + bonus\nprint(f\"Employee: {employee_name} | Total Salary: ${total_salary:,}\")",
        output: "Employee: Anjali | Total Salary: $50,000",
        howItWorks: "Variables store employee attributes and compute derived values cleanly without side effects.",
        tryItYourself: {
          title: "🧪 Compute E-Commerce Order Total",
          task: "Create variables for unit_price, quantity, and discount_rate, and print the calculated net order total.",
          starterCode: "unit_price = 49.99\nquantity = 3\ndiscount_rate = 0.10\n# Calculate net total:\n",
          solution: "unit_price = 49.99\nquantity = 3\ndiscount_rate = 0.10\ngross = unit_price * quantity\nnet = gross * (1 - discount_rate)\nprint(f\"Net Total: ${net:.2f}\")",
          expectedOutput: "Net Total: $134.97"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "Why should mutable default arguments (like `def process(items=[])`) never be used in production services?",
            options: ["The default list is instantiated once at module load and shared across all future function invocations, causing state leakage", "It throws a syntax error on startup", "It slows down network requests", "It deletes all items"],
            correctAnswer: "The default list is instantiated once at module load and shared across all future function invocations, causing state leakage",
            explanation: "Default parameters are evaluated when the function definition is executed, not at each call. Use `items=None` instead.",
            difficulty: "Medium"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "Explain the LEGB scope resolution rule in Python.",
            answer: "When resolving a variable name, Python searches in order: Local (inside the current function), Enclosing (enclosing functions in nested closures), Global (module top-level), and Built-in (built-in namespace like `len`, `range`)."
          }
        ]
      },
      professional: {
        intro: "Memory layout of PyObject, reference counting overhead, slots optimization, and cache locality.",
        theory: "In high-throughput microservices, senior engineers understand that Python variables are pointer wrappers around heap PyObjects. Every standard object instantiation incurs 16-28 bytes of header overhead (`ob_refcnt` + `ob_type`). Utilizing `__slots__` or `@dataclass(slots=True)` eliminates per-instance `__dict__` overhead, reducing memory footprint by over 60% and significantly improving CPU L1/L2 cache locality.",
        visual: {
          metaphor: "CPython PyObject Memory & Slots Optimization",
          badge: "🚀 PyObject Layout & Slots Optimization",
          description: "Eliminating per-instance __dict__ reduces memory from 152 bytes to 48 bytes per record.",
          elements: [
            { label: "Standard Dict Object", value: "152 bytes (Heap dict allocation)", color: "red", icon: "HardDrive" },
            { label: "Slots Array Object", value: "48 bytes (Direct struct array offset)", color: "emerald", icon: "Zap" },
            { label: "Throughput Gain", value: "3.2x faster attribute access", color: "purple", icon: "TrendingUp" }
          ]
        },
        realLifeExample: "High-frequency trade order book caching 10 million order objects in memory simultaneously.",
        code: "import sys\n\nclass StandardOrder:\n    def __init__(self, order_id: str, amount: float):\n        self.order_id = order_id\n        self.amount = amount\n\nclass OptimizedOrder:\n    __slots__ = ('order_id', 'amount')\n    def __init__(self, order_id: str, amount: float):\n        self.order_id = order_id\n        self.amount = amount\n\nstd = StandardOrder(\"ord_1\", 100.0)\nopt = OptimizedOrder(\"ord_1\", 100.0)\n\nprint(f\"Standard Instance: {sys.getsizeof(std)} bytes + dict: {sys.getsizeof(std.__dict__)} bytes\")\nprint(f\"Optimized Slots Instance: {sys.getsizeof(opt)} bytes (No __dict__ overhead)\")",
        output: "Standard Instance: 48 bytes + dict: 104 bytes\nOptimized Slots Instance: 48 bytes (No __dict__ overhead)",
        howItWorks: "`__slots__` reserves fixed descriptor offsets in C-struct layout, eliminating the per-instance dictionary entirely.",
        tryItYourself: {
          title: "🧪 Implement Slots Data Model",
          task: "Create a TelemetryPoint class with __slots__ = ('ts', 'val') and instantiate it.",
          starterCode: "class TelemetryPoint:\n    # Define slots and init\n    pass\n",
          solution: "class TelemetryPoint:\n    __slots__ = ('ts', 'val')\n    def __init__(self, ts: int, val: float):\n        self.ts = ts\n        self.val = val\n\np = TelemetryPoint(1700000000, 98.6)\nprint(f\"Telemetry ts: {p.ts} | val: {p.val}\")",
          expectedOutput: "Telemetry ts: 1700000000 | val: 98.6"
        },
        questions: [
          {
            type: "Multiple Choice",
            question: "What is the primary architectural advantage of `__slots__` in Python data models?",
            options: ["Replaces dynamic per-instance `__dict__` hash maps with fixed C-struct offsets, saving massive memory", "Makes variables globally accessible", "Encrypts memory buffers", "Enables multithreading"],
            correctAnswer: "Replaces dynamic per-instance `__dict__` hash maps with fixed C-struct offsets, saving massive memory",
            explanation: "`__slots__` prevents dynamic dictionary creation for instance attributes, drastically reducing memory consumption in millions of objects.",
            difficulty: "Hard"
          }
        ],
        interviewQuestions: [
          {
            type: "Basic",
            question: "How does Python handle reference counting cycles that would otherwise cause memory leaks?",
            answer: "CPython employs a cyclic garbage collector that tracks container objects (lists, dicts, custom classes). It periodically analyzes object reference graphs across 3 generations using trial deletions to detect isolated self-referencing clusters and deallocates them."
          }
        ]
      }
    }
  }
];

// Write Section 1 basics
writeTopicFile(path.join(DATA_DIR, 'pythonBasics.js'), 'pythonBasics', pythonBasics);
