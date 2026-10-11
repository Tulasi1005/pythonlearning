import path from 'path';
import { fileURLToPath } from 'url';
import { writeTopicFile } from './helper.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.join(__dirname, '../../src/data');

// Import helper functions to generate rich 5-stage structures
function makeTopic(id, topicNumber, sectionId, sectionTitle, title, stages) {
  return { id, topicNumber, sectionId, sectionTitle, title, stages };
}

// -------------------------------------------------------------
// SECTION 1: PYTHON BASICS (Topics 1-9)
// -------------------------------------------------------------
const pythonBasics = [
  makeTopic("what-is-python", 1, "python-basics", "Section 1 — Python Basics", "What is Python?", {
    kid: {
      intro: "Meet Python! It's like a super friendly robot friend who loves to follow your fun instructions.",
      theory: "Imagine you have a magic robot puppy. If you talk to it in simple words like 'sit' and 'play', it listens! Python is a friendly computer language you use to tell the computer to draw pictures, play animal sounds, and make magic on the screen.",
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
          options: ["A friendly robot language for computers", "A scary real snake", "A cheese sandwich", "A bicycle wheel"],
          correctAnswer: "A friendly robot language for computers",
          explanation: "Python is a fun, easy way to tell computers what to do!",
          difficulty: "Easy"
        }
      ],
      challenge: "Can you change the message to print your pet's name or favorite animal sound?"
    },
    young: {
      intro: "Python is the world's #1 coding language used to build games, Discord bots, Roblox tools, and YouTube engines!",
      theory: "Python was designed so anyone can read code just like reading plain English. Unlike older coding languages that require 20 confusing lines just to display a number, Python lets you command computers and build games in single, clean lines.",
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
  }),

  makeTopic("installing-python", 2, "python-basics", "Section 1 — Python Basics", "Installing Python", {
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
  }),

  makeTopic("first-python-program", 3, "python-basics", "Section 1 — Python Basics", "First Python Program", {
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
  })
];

console.log(`Prepared ${pythonBasics.length} basics topics.`);
