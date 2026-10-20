/**
 * Computer Science, Software Architecture, and Engineering Terms Dictionary
 * Structured across 5 Learning Stages and 4 Languages
 */

export const COMPUTER_TERMS = [
  {
    term: "automation",
    category: "computer",
    synonyms: ["automate", "automating", "automated", "automatic", "autmation"],
    pythonExample: "import time\n\nfor email in ['user1@mail.com', 'user2@mail.com']:\n    print(f'Sending automated email to {email}...')",
    howUsed: "Used to write scripts that perform repetitive tasks (like sending notifications, scraping websites, or cleaning data) automatically.",
    meanings: {
      english: {
        kid: {
          meaning: "Automation means a machine or computer doing a job for us without us doing every step ourselves.",
          explanation: "Imagine a toy train that moves on its tracks all by itself when you flip the switch. You don't have to push it!",
          example: "A robot vacuum cleaner that cleans the room automatically.",
          remember: "Automation = letting a machine do the work for you."
        },
        young: {
          meaning: "Automation means making a computer do a task for you instead of doing the same task again and again.",
          explanation: "Instead of manually calculating scores for 1,000 students one by one, a computer program calculates all of them in one second.",
          example: "An alarm clock app that rings every morning automatically.",
          remember: "Automation = computer performing repeated tasks automatically."
        },
        college: {
          meaning: "Automation means using software or code to perform repeated tasks with little to no manual effort.",
          explanation: "Python is heavily utilized in industry for automating file conversions, data pipelines, regression testing, and report generation.",
          example: "Writing a Python script to automatically download, parse, and graph weekly sales CSV files.",
          remember: "Automation = algorithmic execution replacing manual workflows."
        },
        graduate: {
          meaning: "Automation is the use of software or scripts to execute repetitive processes with minimal human intervention.",
          explanation: "Python is commonly used for file processing, reporting, CI/CD pipeline automation, data processing, and cloud orchestration.",
          example: "Automating server deployments, daily database backups, and data cleaning routines.",
          remember: "Automation = programmatic execution eliminating manual operational bottlenecks."
        },
        professional: {
          meaning: "Automation means using software to reduce manual, repetitive work by allowing a system to perform defined tasks automatically.",
          explanation: "In a workplace, Python can automate report generation, ETL data processing, file handling, notifications, integration testing, and cloud infrastructure management.",
          example: "Building automated CI/CD pipelines and event-driven serverless workflow triggers.",
          remember: "Automation = systematic, unattended workflow orchestration."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Automation ante repeated work ni computer tho automatic ga cheyinchadam.",
          explanation: "Manam every day same report manually create cheyyakunda, Python program use chesi automatic ga report generate cheyyachu.",
          example: "Daily 100 emails manually pampanavasaram lekunda program automatic ga pampistundi.",
          remember: "Automation = repeated work ni computer tho automatic ga cheyinchadam."
        }
      },
      telugu: {
        young: {
          meaning: "ఆటోమేషన్ (Automation) అంటే మనం ప్రతిసారి మాన్యువల్‌గా చేయాల్సిన పనిని కంప్యూటర్ లేదా సాఫ్ట్‌వేర్ ద్వారా స్వయంచాలకంగా చేయించడం.",
          explanation: "ప్రతిరోజూ ఒకే రిపోర్ట్‌ను చేతితో తయారు చేయడానికి బదులుగా, పైథాన్ ప్రోగ్రామ్ ద్వారా క్షణాల్లో ఆటోమేటిక్‌గా తయారు చేయవచ్చు.",
          example: "ప్రతి ఉదయం ఆటోమేటిక్ గా మోగించే అలారం లేదా ఈమెయిల్ పంపే ప్రోగ్రామ్.",
          remember: "ఆటోమేషన్ = కంప్యూటర్ తో పనిని ఆటోమేటిక్ గా చేయించడం."
        }
      },
      hindi: {
        young: {
          meaning: "ऑटोमेशन (Automation) का मतलब है किसी काम को कंप्यूटर या सॉफ्टवेयर से अपने आप (Automatically) करवाना।",
          explanation: "अगर हमें हर दिन 100 लोगों को ईमेल भेजना है, तो हाथ से एक-एक करके भेजने के बजाय पायथन प्रोग्राम से काम अपने आप करवाया जा सकता है।",
          example: "हर दिन अपने आप बनने वाली दैनिक रिपोर्ट या ऑटोमैटिक अलार्म।",
          remember: "Automation = कंप्यूटर से काम अपने आप करवाना।"
        }
      }
    }
  },
  {
    term: "programming language",
    category: "computer",
    synonyms: ["programming", "language", "coding language", "code", "langauge"],
    pythonExample: "print('Hello World')  # Written in the Python programming language",
    howUsed: "Used by humans to write clear instructions that computers can understand, translate, and execute.",
    meanings: {
      english: {
        kid: {
          meaning: "A programming language is a way we use special friendly words to talk to computers.",
          explanation: "Just like you speak English to your friends, you use a programming language like Python to tell a computer to play music or draw pictures.",
          example: "Python is a very friendly programming language.",
          remember: "Programming language = words to talk to computers."
        },
        young: {
          meaning: "A programming language is a set of instructions we use to communicate with a computer.",
          explanation: "Computers only know 1s and 0s. Programming languages give us human-readable words that get translated for the computer.",
          example: "Python, JavaScript, and C++ are programming languages used to make apps and games.",
          remember: "Programming language = code that tells a computer what to build."
        },
        college: {
          meaning: "A formal system designed to construct instructions that a machine can parse, compile, and execute.",
          explanation: "Provides formal syntax, semantics, type systems, and runtime execution models to express computational algorithms.",
          example: "High-level interpreted languages (Python) vs compiled languages (C++, Rust).",
          remember: "Programming language = formal specification for machine computation."
        },
        graduate: {
          meaning: "A standardized syntactic and semantic framework for expressing algorithmic problem-solving logic.",
          explanation: "Categorized by paradigm: imperative, object-oriented, functional, and declarative computational models.",
          example: "Leveraging Python's multi-paradigm capabilities for fast prototyping and backend services.",
          remember: "Programming language = standardized syntax and semantics for software development."
        },
        professional: {
          meaning: "A formal computational grammar enabling engineers to specify business logic, memory transformations, and system interactions.",
          explanation: "Selection depends on throughput, developer velocity, typing discipline, memory management, and ecosystem maturity.",
          example: "Using Python for data pipelines, AI/ML, and microservice backends.",
          remember: "Programming language = abstraction layer bridging business logic to machine execution."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Programming language ante computer tho matladadaniki, instructions ivvadaniki vaade bhasha.",
          explanation: "Computer ki mana normal bhasha ardam kaadu, anduke Python laanti programming language vaadi em cheyyalo cheptham.",
          example: "Python vaadi manam web apps, games and AI tayaru cheyachu.",
          remember: "Programming language = computer ki instructions iche bhasha."
        }
      },
      telugu: {
        young: {
          meaning: "ప్రోగ్రామింగ్ లాంగ్వేజ్ (Programming Language) అంటే కంప్యూటర్ తో కమ్యూనికేట్ చేయడానికి మరియు సూచనలు ఇవ్వడానికి ఉపయోగించే భాష.",
          explanation: "కంప్యూటర్ కు మన భాష అర్థం కాదు కాబట్టి, పైథాన్ లాంటి ప్రోగ్రామింగ్ భాషల ద్వారా మనం చేయాలనుకున్న పనిని వివరిస్తాము.",
          example: "పైథాన్, జావా మరియు సి++ ప్రోగ్రామింగ్ భాషలు.",
          remember: "ప్రోగ్రామింగ్ లాంగ్వేజ్ = కంప్యూటర్ తో మాట్లాడే భాష."
        }
      },
      hindi: {
        young: {
          meaning: "प्रोग्रामिंग लैंग्वेज (Programming Language) वह भाषा है जिससे हम कंप्यूटर को निर्देश (Instructions) देते हैं।",
          explanation: "कंप्यूटर को हमारी आम भाषा समझ नहीं आती, इसलिए हम पायथन जैसी प्रोग्रामिंग भाषा से उसे बताते हैं कि क्या काम करना है।",
          example: "Python एक बहुत आसान और लोकप्रिय प्रोग्रामिंग भाषा है।",
          remember: "Programming Language = कंप्यूटर को निर्देश देने वाली भाषा।"
        }
      }
    }
  },
  {
    term: "database",
    category: "computer",
    synonyms: ["databases", "db", "sql", "datastore"],
    pythonExample: "import sqlite3\n\nconn = sqlite3.connect('learning.db')\nprint('Database connected successfully!')",
    howUsed: "Used to save, search, organize, and retrieve structured information (like user accounts, lessons, and scores) permanently.",
    meanings: {
      english: {
        kid: {
          meaning: "A database is like a giant, super-organized digital chest where all your important game files are kept.",
          explanation: "When you turn off the computer, your toys inside the database are still safe and never get lost.",
          example: "The database that saves your high scores in video games.",
          remember: "Database = digital locker that stores data safely forever."
        },
        young: {
          meaning: "A database is an organized collection of data stored securely in a computer system.",
          explanation: "Every app (like Instagram, Netflix, or Roblox) uses a database to store user passwords, photos, comments, and profile info.",
          example: "A school database holding all student names, roll numbers, and exam marks.",
          remember: "Database = organized system for storing and querying app data."
        },
        college: {
          meaning: "A structured system for persistent data management supporting ACID transactions and querying languages (SQL/NoSQL).",
          explanation: "Databases provide relational schemas, primary/foreign keys, indexing, and query optimization for scalable data retrieval.",
          example: "Using PostgreSQL or MongoDB alongside Python ORMs like SQLAlchemy.",
          remember: "Database = persistent, indexed storage engine managing structured records."
        },
        graduate: {
          meaning: "A persistent data tier providing structured storage, concurrency control, and transactional durability.",
          explanation: "Encompasses relational DBMS (Postgres, MySQL) and non-relational document/key-value stores (Redis, DynamoDB).",
          example: "Designing relational database schemas with normalized tables and foreign key constraints.",
          remember: "Database = persistent data layer with transaction and query guarantees."
        },
        professional: {
          meaning: "Enterprise data persistence infrastructure optimized for read/write throughput, consistency models, and partition tolerance.",
          explanation: "Architecting database layers with connection pooling, read replicas, caching tiers (Redis), and distributed sharding.",
          example: "Managing PostgreSQL read-replicas and database migration scripts in production microservices.",
          remember: "Database = foundational persistence tier maintaining system state and consistency."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Database ante app lo unna data motham safe ga store chese digital storage system.",
          explanation: "User accounts, passwords, game scores anni power off chesina safe ga undadaniki database vaadatharu.",
          example: "Instagram lo photos and accounts save chese storage system database.",
          remember: "Database = data ni permanently store chese organized system."
        }
      },
      telugu: {
        young: {
          meaning: "డేటాబేస్ (Database) అంటే సమాచారాన్ని (Data) క్రమపద్ధతిలో భద్రపరిచే ఒక డిజిటల్ నిల్వ కేంద్రం.",
          explanation: "యూజర్ వివరాలు, పాస్‌వర్డ్‌లు, మార్కులు వంటి ముఖ్యమైన సమాచారం కంప్యూటర్ ఆఫ్ చేసినా పోకుండా భద్రంగా ఉండటానికి డేటాబేస్ వాడతారు.",
          example: "పాఠశాలలో విద్యార్థుల వివరాలను భద్రపరిచే డేటాబేస్.",
          remember: "డేటాబేస్ = సమాచారాన్ని భద్రపరిచే డిజిటల్ కేంద్రం."
        }
      },
      hindi: {
        young: {
          meaning: "डेटाबेस (Database) डिजिटल रूप से जानकारी को सुरक्षित और व्यवस्थित तरीके से स्टोर करने का सिस्टम है।",
          explanation: "उपयोगकर्ताओं के पासवर्ड, गेम स्कोर और फ़ाइलें सुरक्षित रखने के लिए डेटाबेस का उपयोग किया जाता है ताकि वे कभी खो न जाएं।",
          example: "स्कूल का रिकॉर्ड या यूट्यूब पर वीडियो की जानकारी रखने वाला सिस्टम।",
          remember: "Database = डेटा को व्यवस्थित और सुरक्षित रखने की जगह।"
        }
      }
    }
  },
  {
    term: "algorithm",
    category: "computer",
    synonyms: ["algorithms", "algorithmic", "step-by-step logic"],
    pythonExample: "def binary_search(arr, target):\n    # An efficient algorithm to find a number in a sorted list\n    low, high = 0, len(arr) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: low = mid + 1\n        else: high = mid - 1\n    return -1",
    howUsed: "Used to design clear, step-by-step logic to solve problems, sort data, find shortest paths, and calculate results efficiently.",
    meanings: {
      english: {
        kid: {
          meaning: "An algorithm is a step-by-step recipe to solve a puzzle or do a fun task.",
          explanation: "Like steps to brush your teeth: 1. Put paste on brush, 2. Brush teeth for 2 minutes, 3. Rinse with water.",
          example: "A recipe for making delicious chocolate cookies.",
          remember: "Algorithm = step-by-step instructions to solve a task."
        },
        young: {
          meaning: "An algorithm is a clear sequence of steps designed to solve a problem or complete a calculation.",
          explanation: "In video games, algorithms decide how smart computer enemies move, how maps are generated, and how scores are sorted.",
          example: "Finding the shortest route between two cities on Google Maps.",
          remember: "Algorithm = step-by-step problem-solving plan."
        },
        college: {
          meaning: "An unambiguous, finite sequence of computational steps that transforms input data into output.",
          explanation: "Analyzed using Big-O asymptotic notation for time and space complexity (e.g., O(n log n) sorting).",
          example: "Dijkstra's shortest path algorithm, Binary Search, and QuickSort.",
          remember: "Algorithm = mathematically defined computational procedure."
        },
        graduate: {
          meaning: "A rigorous mathematical procedure for solving computational problems within proven computational complexity bounds.",
          explanation: "Involves dynamic programming, greedy algorithms, divide-and-conquer, and graph traversal paradigms.",
          example: "Designing recommendation algorithms and tokenization parsers.",
          remember: "Algorithm = optimal computational logic evaluated by Big-O complexity."
        },
        professional: {
          meaning: "Deterministic or heuristic computational logic optimized for execution efficiency, latency, and resource constraints.",
          explanation: "Balancing theoretical algorithmic complexity with cache locality, concurrency, and real-world system bottlenecks.",
          example: "Implementing distributed consensus algorithms (Raft) and high-throughput stream processing filters.",
          remember: "Algorithm = optimized computational strategy for deterministic business processing."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Algorithm ante oka problem ni solve cheyadaniki manam prepare chese step-by-step plan.",
          explanation: "Oka game lo enemy ela move avvali, numbers ni ela sort cheyali ani step-by-step ga rase logic ni algorithm antaru.",
          example: "Google Maps lo shortest route find chese step-by-step logic algorithm.",
          remember: "Algorithm = problem solve chese step-by-step plan."
        }
      },
      telugu: {
        young: {
          meaning: "అల్గారిథమ్ (Algorithm) అంటే ఒక సమస్యను పరిష్కరించడానికి తయారుచేసిన దశలవారీ విధానం (Step-by-step plan).",
          explanation: "ఒక పనిని ఎలా పూర్తి చేయాలో క్రమపద్ధతిలో రాసే నియమాల సమూహాన్ని అల్గారిథమ్ అంటారు.",
          example: "గూగుల్ మ్యాప్స్ లో అత్యంత వేగవంతమైన దారిని కనుగొనే విధానం.",
          remember: "అల్గారిథమ్ = దశలవారీ పరిష్కార ప్రణాళిక."
        }
      },
      hindi: {
        young: {
          meaning: "एल्गोरिदम (Algorithm) किसी समस्या को हल करने के लिए बनाया गया क्रमबद्ध (Step-by-step) तरीका है।",
          explanation: "जैसे चाय बनाने की एक विधि होती है, वैसे ही कंप्यूटर में किसी काम को पूरा करने के लिए लिखे गए कदमों को एल्गोरिदम कहते हैं।",
          example: "संख्याओं को छोटे से बड़े क्रम में सजाने का तरीका।",
          remember: "Algorithm = काम पूरा करने का क्रमबद्ध तरीका।"
        }
      }
    }
  },
  {
    term: "architecture",
    category: "computer",
    synonyms: ["architectures", "architectural", "system architecture", "software architecture"],
    pythonExample: "# Clean 3-tier architecture structure\n# 1. Controller / Route Layer\n# 2. Service / Business Logic Layer\n# 3. Data Access / Repository Layer\n\nclass UserService:\n    def get_user(self, user_id):\n        return db.find_by_id(user_id)",
    howUsed: "Used to describe the high-level structural blueprint, design patterns, components, and relationships of a computer program or system.",
    meanings: {
      english: {
        kid: {
          meaning: "Architecture is like the drawing or blueprint for building a big castle or a strong house with LEGO bricks.",
          explanation: "Before you build a giant tower, you decide where the doors, windows, and roof go so it doesn't fall down.",
          example: "Drawing a blueprint before building a LEGO castle.",
          remember: "Architecture = the master plan and structure of a project."
        },
        young: {
          meaning: "Software architecture is the overall plan that decides how different parts of an app or game connect and work together.",
          explanation: "In a multiplayer game, the architecture decides how the game graphics, player inventory, and game servers talk to each other.",
          example: "Organizing a mobile game into graphics, physics, sound, and network components.",
          remember: "Architecture = how all components in a program fit together."
        },
        college: {
          meaning: "The fundamental organization of a software system embodied in its components, their relationships, and principles guiding its design.",
          explanation: "Common software architectures include Model-View-Controller (MVC), Microservices, Layered (N-Tier), and Event-Driven systems.",
          example: "Designing a university registration portal using MVC architecture with separate frontend and database tiers.",
          remember: "Architecture = high-level component structure and interaction design."
        },
        graduate: {
          meaning: "The structural blueprint defining system decomposition, component boundaries, communication protocols, and non-functional quality attributes (scalability, security, resilience).",
          explanation: "Involves selecting patterns like CQRS, Event Sourcing, Domain-Driven Design (DDD), and REST/gRPC interfaces to meet throughput and reliability SLAs.",
          example: "Architecting a high-throughput payment processing engine with isolated authentication, billing, and notification services.",
          remember: "Architecture = scalable component boundaries and communication blueprints."
        },
        professional: {
          meaning: "The high-level structural design, trade-off matrix, and boundary governance of distributed software systems aligning technical capabilities with business velocity.",
          explanation: "Balances latency, eventual consistency, partition tolerance (CAP theorem), fault isolation, and deployment ergonomics across microservices or modular monoliths.",
          example: "Designing a hybrid cloud architecture processing 50k requests/sec using Kafka event streams, Redis caching, and PostgreSQL read replicas.",
          remember: "Architecture = systematic governance of component boundaries, data flow, and operational trade-offs."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Architecture ante oka software or game lo unna different parts ela build avvali and connect avvali ani plan chese blueprint.",
          explanation: "Oka pedda building kattadaniki mundu plan vesinatte, software create cheyyadaniki mundu architecture design chestham.",
          example: "Game lo graphics, server, and player score components ni clean ga divide cheyyadam.",
          remember: "Architecture = software parts ela connect avvali ani cheppe structural plan."
        }
      },
      telugu: {
        young: {
          meaning: "ఆర్కిటెక్చర్ (Architecture) అంటే ఒక సాఫ్ట్‌వేర్ లేదా సిస్టమ్ యొక్క సమగ్ర నిర్మాణం మరియు బ్లూప్రింట్.",
          explanation: "ఒక పెద్ద భవనం నిర్మించడానికి ముందు ప్లాన్ గీసినట్లే, సాఫ్ట్‌వేర్ లోని వివిధ విభాగాలు ఎలా కలిసి పనిచేయాలో నిర్ణయించే విధానం.",
          example: "వెబ్‌సైట్‌లో యూజర్ ఇంటర్‌ఫేస్, సర్వర్ మరియు డేటాబేస్ ఎలా అనుసంధానమవ్వాలో ప్లాన్ చేయడం.",
          remember: "ఆర్కిటెక్చర్ = సాఫ్ట్‌వేర్ నిర్మాణ ప్రణాళిక మరియు పద్ధతి."
        }
      },
      hindi: {
        young: {
          meaning: "आर्किटेक्चर (Architecture) किसी सॉफ्टवेयर या सिस्टम का मुख्य ढाँचा और ब्लूप्रिंट होता है।",
          explanation: "जैसे घर बनाने से पहले उसका नक्शा तैयार किया जाता है, वैसे ही सॉफ्टवेयर के अलग-अलग हिस्सों को जोड़ने के लिए आर्किटेक्चर बनाया जाता है।",
          example: "गेम, ऐप और डेटाबेस के बीच सही कनेक्शन का ढाँचा तैयार करना।",
          remember: "Architecture = सॉफ्टवेयर का संरचनात्मक नक्शा और ढाँचा।"
        }
      }
    }
  },
  {
    term: "framework",
    category: "computer",
    synonyms: ["frameworks", "software framework", "web framework"],
    pythonExample: "# Using FastAPI web framework\nfrom fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get('/hello')\ndef greet():\n    return {'message': 'Hello World!'}",
    howUsed: "Used to provide a standard, pre-built foundation and structure to develop applications faster without writing everything from scratch.",
    meanings: {
      english: {
        kid: {
          meaning: "A framework is like a pre-built house frame or toy mold that helps you build something cool super fast!",
          explanation: "Instead of making LEGO bricks by hand, you get ready-made blocks and just snap them together.",
          example: "A coloring book with outline drawings ready for you to color.",
          remember: "Framework = ready-made structure to help you build quickly."
        },
        young: {
          meaning: "A framework is a set of pre-written code and tools that helps you build apps and games without writing standard features from zero.",
          explanation: "Frameworks like Pygame give you ready-made functions for handling player movement, sound effects, and collisions.",
          example: "Using Django or Flask to create websites quickly.",
          remember: "Framework = ready-to-use coding foundation."
        },
        college: {
          meaning: "A reusable software environment providing predefined functionality, architecture, and control flow for application development.",
          explanation: "Differs from libraries through 'Inversion of Control' (IoC) — the framework calls your code, rather than your code calling the library.",
          example: "Django, FastAPI, Flask, React, and Angular.",
          remember: "Framework = reusable platform with Inversion of Control."
        },
        graduate: {
          meaning: "An abstracted software foundation enforcing design patterns, routing, dependency management, and lifecycle hooks.",
          explanation: "Accelerates enterprise development by standardizing database ORM bindings, security authentication, and API endpoints.",
          example: "FastAPI with Pydantic for high-performance async REST microservices.",
          remember: "Framework = standardized architectural scaffolding with built-in conventions."
        },
        professional: {
          meaning: "An enterprise scaffolding establishing architectural guardrails, convention-over-configuration standards, and runtime pipelines.",
          explanation: "Reduces time-to-market while enforcing security standards (CSRF, XSS protection) and maintainability across distributed engineering teams.",
          example: "Standardizing enterprise microservices on FastAPI / Spring Boot with centralized observability middleware.",
          remember: "Framework = opinionated architectural foundation optimizing developer velocity."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Framework ante apps build cheyyadaniki ready ga unna code foundation and tools collection.",
          explanation: "Manam zero nunchi motham code rayakunda, framework icche pre-built features tho fast ga websites and apps create cheyyachu.",
          example: "FastAPI or Django use chesi 10 minutes lo website ready cheyyadam.",
          remember: "Framework = ready-made coding foundation."
        }
      },
      telugu: {
        young: {
          meaning: "ఫ్రేమ్‌వర్క్ (Framework) అనేది సాఫ్ట్‌వేర్ లేదా యాప్స్ వేగంగా నిర్మించడానికి అందించే ముందస్తు కోడ్ నిర్మాణం.",
          explanation: "మొదటి నుండి మొత్తం కోడ్ రాయాల్సిన అవసరం లేకుండా, ప్రాథమిక పనులన్నీ సులభంగా చేయడానికి ఇది సహాయపడుతుంది.",
          example: "పైథాన్‌లో వెబ్‌సైట్లు చేయడానికి Django లేదా Flask ఫ్రేమ్‌వర్క్ వాడటం.",
          remember: "ఫ్రేమ్‌వర్క్ = ముందుగానే సిద్ధం చేసిన కోడింగ్ పునాది."
        }
      },
      hindi: {
        young: {
          meaning: "फ्रेमवर्क (Framework) पहले से तैयार किया गया एक ऐसा ढाँचा है जो ऐप्स को तेजी से बनाने में मदद करता है।",
          explanation: "शुरुआत से सब कुछ कोड करने के बजाय, फ्रेमवर्क के तैयार टूल्स का उपयोग करके हम जल्दी वेबसाइट्स बना सकते हैं।",
          example: "Django या FastAPI का उपयोग करके वेब ऐप बनाना।",
          remember: "Framework = ऐप बनाने के लिए तैयार कोडिंग बेस।"
        }
      }
    }
  },
  {
    term: "cookie",
    category: "computer",
    synonyms: ["cookies", "http cookie", "web cookie", "browser cookie", "session cookie"],
    pythonExample: "# Reading and setting cookies in a Python Web Framework (Flask / FastAPI)\nfrom flask import Flask, request, make_response\n\napp = Flask(__name__)\n\n@app.route('/login')\ndef login():\n    resp = make_response('Logged in successfully!')\n    resp.set_cookie('session_user', 'student123', max_age=3600)  # Stores cookie for 1 hour\n    return resp\n\n@app.route('/profile')\ndef profile():\n    user = request.cookies.get('session_user')  # Reads the cookie\n    return f'Welcome back, {user}!'",
    howUsed: "Used by web servers and browsers to remember user login sessions, shopping carts, theme preferences, and track states across HTTP requests.",
    meanings: {
      english: {
        kid: {
          meaning: "A web cookie is a tiny secret note that a website leaves in your browser so it remembers your name and game scores next time you visit.",
          explanation: "Just like a stamp on your hand at a theme park that lets you walk back in without buying another ticket, a cookie tells the website who you are!",
          example: "A website remembering your favorite character or keeping you logged into your game.",
          remember: "Cookie = a tiny digital note that remembers who you are on a website."
        },
        young: {
          meaning: "A cookie is a small piece of data sent by a web server and stored in your web browser to remember your login, cart items, or settings.",
          explanation: "HTTP is stateless (it forgets you after every page click). Cookies allow websites like YouTube or Amazon to keep you logged in and remember items in your cart.",
          example: "Staying logged into an account even after closing and reopening the browser tab.",
          remember: "Cookie = small browser data file that saves user sessions and preferences."
        },
        college: {
          meaning: "An HTTP cookie is a small packet of state data transmitted via Set-Cookie and Cookie headers to maintain stateful sessions over stateless HTTP protocols.",
          explanation: "Classified into Session Cookies (in-memory, erased on browser close) and Persistent Cookies (stored on disk with Max-Age/Expires). Configured with Secure, HttpOnly, and SameSite attributes to prevent XSS and CSRF attacks.",
          example: "Storing JWT authentication tokens or session IDs securely using HttpOnly cookies in FastAPI/Django.",
          remember: "Cookie = client-side key-value token maintaining state over HTTP."
        },
        graduate: {
          meaning: "A client-side state persistence mechanism defined by RFC 6265, managing distributed session state, authentication tokens, and telemetry.",
          explanation: "Modern web architectures rely on signed and encrypted cookies with Strict SameSite policies, mitigating session hijacking and credential leakage across origins.",
          example: "Implementing distributed session stores with Redis and encrypted HttpOnly session cookies.",
          remember: "Cookie = cryptographically secured client session identifier."
        },
        professional: {
          meaning: "A standard web specification for stateful session orchestration, identity federation, and tracking compliance across distributed web applications.",
          explanation: "Managed in enterprise systems under GDPR/CCPA regulations with strict cookie consent banners, partitioned cookies (CHIPS), and zero-trust token rotation policies.",
          example: "Configuring enterprise SSO identity provider cookies with SameSite=Lax, Secure, and domain scoping.",
          remember: "Cookie = enterprise web session and identity boundary token."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Cookie ante website manam browser lo visit chesinappudu mana login details and preferences ni save chesukune oka small data piece.",
          explanation: "Websites eppudu stateless ga untayi (mana details gurthundavu). Cookie use chesi manam login ayyama leda, shopping cart lo em items unnayi anedi browser lo save chestundi.",
          example: "Website close chesi malli open chesina login lone undatam.",
          remember: "Cookie = website mana login and preferences ni gurthupettukune small data file."
        }
      },
      telugu: {
        young: {
          meaning: "కుకీ (HTTP Cookie) అనేది మీరు వెబ్‌సైట్లను సందర్శించినప్పుడు మీ లాగిన్ వివరాలు, ప్రాధాన్యతలు మరియు సెట్టింగ్‌లను గుర్తుంచుకోవడానికి బ్రౌజర్ దాచుకునే ఒక చిన్న డేటా ఫైల్.",
          explanation: "ఇంటర్నెట్ సహజంగా యూజర్లను గుర్తుంచుకోదు. కుకీల సహాయంతో అమెజాన్ లేదా యూట్యూబ్ వంటి వెబ్‌సైట్లు మిమ్మల్ని లాగిన్‌లో ఉంచుతాయి మరియు మీ కార్ట్ వస్తువులను భద్రపరుస్తాయి.",
          example: "వెబ్‌సైట్ మూసివేసి మళ్లీ తెరిచినా మీ లాగిన్ వివరాలు అలాగే ఉండటం.",
          remember: "కుకీ = యూజర్ లాగిన్ మరియు సెట్టింగ్‌లను గుర్తుంచుకునే బ్రౌజర్ డేటా."
        }
      },
      hindi: {
        young: {
          meaning: "कुकी (HTTP Cookie) एक छोटा सा डेटा टुकड़ा है जिसे कोई वेबसाइट आपके वेब ब्राउज़र में सेव करती है ताकि वह आपकी लॉगिन स्थिति, सेटिंग्स और प्राथमिकताओं को याद रख सके।",
          explanation: "इंटरनेट पर वेब पेज अपने आप उपयोगकर्ता को याद नहीं रखते। कुकीज़ के जरिए ही अमेज़न या यूट्यूब जैसी वेबसाइट्स आपके कार्ट का सामान और लॉगिन याद रखती हैं।",
          example: "ब्राउज़र बंद करके दोबारा खोलने पर भी किसी वेबसाइट में लॉगिन रहना।",
          remember: "Cookie = ब्राउज़र में सेव होने वाला छोटा डेटा जो आपकी सेटिंग्स याद रखता है।"
        }
      }
    }
  }
];

