/**
 * General Vocabulary & Academic / Professional English Terms Dictionary
 * Structured across 5 Learning Stages and 4 Languages
 */

export const GENERAL_WORDS = [
  {
    term: "program",
    category: "general",
    synonyms: ["programs", "computer program", "software program"],
    pythonExample: "# A friendly Python program\nuser = 'Explorer'\nprint(f'Welcome to Python, {user}!')",
    howUsed: "Used to describe a set of written instructions executed by a computer to perform a specific task.",
    meanings: {
      english: {
        kid: {
          meaning: "A program is a magic list of instructions that tells a computer or robot what to do step by step.",
          explanation: "Just like a recipe tells you how to bake a yummy cake, a computer program tells your tablet how to play a game or draw a picture.",
          example: "A fun program that makes a cartoon cat jump when you press the spacebar.",
          remember: "Program = a list of instructions for a computer."
        },
        young: {
          meaning: "A program is a collection of code instructions that a computer runs to perform a task.",
          explanation: "Every app, game, and website you use (like Minecraft, YouTube, or Discord) is a computer program created by writing code in languages like Python.",
          example: "A score counter program that calculates bonus points in a video game.",
          remember: "Program = written code that makes a computer do useful work."
        },
        college: {
          meaning: "An executable sequence of instructions written in a programming language to solve computational problems.",
          explanation: "Programs take input data, process it according to algorithmic logic and control flows, and generate desired output states.",
          example: "A Python program that parses web data and stores analysis results in a database.",
          remember: "Program = deterministic sequence of instructions transforming inputs into outputs."
        },
        graduate: {
          meaning: "A compiled or interpreted software artifact containing machine or bytecode instructions executed within an operating system runtime.",
          explanation: "Encompasses process lifecycle management, memory allocation (stack and heap), I/O multiplexing, and concurrency models.",
          example: "Multi-threaded backend services processing streaming transaction data.",
          remember: "Program = cohesive executable runtime process."
        },
        professional: {
          meaning: "An executable software entity embodying business logic, data workflows, and system interactions within production infrastructure.",
          explanation: "Engineered with modular architecture, automated test suites, observability metrics, and containerized deployment pipelines.",
          example: "High-throughput microservices deployed as Docker containers in Kubernetes clusters.",
          remember: "Program = robust, production-grade executable service."
        }
      },
      "english-telugu": {
        kid: {
          meaning: "Program ante computer ki manam icche step-by-step instructions list.",
          explanation: "Manam game lo robot ni nadipinchali ante daaniki instructions ivvali kadha, daanne program antaru.",
          example: "Cat jump cheyyadaniki rase simple code.",
          remember: "Program = computer ki em cheyyalo cheppe instructions."
        },
        young: {
          meaning: "Program ante computer oka task cheyyadaniki manam Python lo rase instructions set.",
          explanation: "YouTube, WhatsApp, and games anni coding tho create chesina computer programs.",
          example: "Game score calculate chese Python program.",
          remember: "Program = computer execute chese code instructions."
        },
        college: {
          meaning: "Program ante specific problem ni solve cheyyadaniki structured ga rase executable instructions.",
          explanation: "Input data ni teesukuni logic apply chesi final output generate cheyyadame program yokka main purpose.",
          example: "Student marks calculate chesi grade print chese Python program.",
          remember: "Program = input ni output ga convert chese logic sequence."
        },
        graduate: {
          meaning: "Program ante memory and CPU resources use chesukuntu run ayye executable process.",
          explanation: "Operating system environment lo data structures and algorithms ni integrate chesi execute chestundi.",
          example: "Real-time chat server application program.",
          remember: "Program = production-level computational logic."
        },
        professional: {
          meaning: "Program ante enterprise workflows and business logic ni run chese production software unit.",
          explanation: "Microservices, background worker daemons, and REST API services anni software programs.",
          example: "Scalable payment processing service program.",
          remember: "Program = enterprise service executing business logic."
        }
      },
      telugu: {
        kid: {
          meaning: "ప్రోగ్రామ్ అంటే కంప్యూటర్‌కు పని చెప్పే మ్యాజిక్ సూచనల జాబితా.",
          explanation: "మనం ఒక రోబోట్ బొమ్మతో మాట్లాడటానికి లేదా గేమ్‌లో బొమ్మలు కదలడానికి ఇచ్చే సూచనలనే ప్రోగ్రామ్ అంటారు.",
          example: "బటన్ నొక్కినప్పుడు లైట్ వెలిగేలా చేసే చిన్న ప్రోగ్రామ్.",
          remember: "ప్రోగ్రామ్ = కంప్యూటర్‌కు ఇచ్చే సూచనలు."
        },
        young: {
          meaning: "ప్రోగ్రామ్ అంటే కంప్యూటర్ ఒక నిర్దిష్ట పనిని పూర్తి చేయడానికి మనం రాసే సూచనల సమాహారం.",
          explanation: "మనం ఫోన్‌లో వాడే యూట్యూబ్, వాట్సాప్ మరియు వీడియో గేమ్‌లు అన్నీ ప్రోగ్రామింగ్ కోడ్ ద్వారా రూపొందించిన ప్రోగ్రామ్‌లే.",
          example: "విద్యార్థుల పరీక్ష మార్కులను లెక్కించే పైథాన్ ప్రోగ్రామ్.",
          remember: "ప్రోగ్రామ్ = కంప్యూటర్ అమలు చేసే కోడ్ సూచనలు."
        },
        college: {
          meaning: "కంప్యూటర్ ప్రోగ్రామ్ అనేది సమస్యలను పరిష్కరించడానికి ప్రోగ్రామింగ్ భాషలో రాసిన సూచనల క్రమం.",
          explanation: "ఇది ఇన్‌పుట్ డేటాను స్వీకరించి, లాజిక్ ఆధారంగా ప్రాసెస్ చేసి ఖచ్చితమైన ఫలితాన్ని (Output) అందిస్తుంది.",
          example: "డేటా విశ్లేషణ చేసే పైథాన్ అప్లికేషన్ ప్రోగ్రామ్.",
          remember: "ప్రోగ్రామ్ = ఇన్‌పుట్‌ను అవుట్‌పుట్‌గా మార్చే లాజిక్ సమాహారం."
        },
        graduate: {
          meaning: "ఆపరేటింగ్ సిస్టమ్‌లో మెమరీ మరియు ప్రాసెసర్‌ని సమర్థవంతంగా వాడుకుంటూ నడిచే ఎగ్జిక్యూటబుల్ సాఫ్ట్‌వేర్ ఆర్టిఫాక్ట్.",
          explanation: "డేటా స్ట్రక్చర్స్, అల్గారిథమ్స్ మరియు I/O ఆపరేషన్ల కలయికతో రూపొందించబడుతుంది.",
          example: "క్లౌడ్ సర్వర్‌లో నడిచే బ్యాకెండ్ API ప్రోగ్రామ్.",
          remember: "ప్రోగ్రామ్ = ఎగ్జిక్యూటబుల్ సిస్టమ్ ప్రాసెస్."
        },
        professional: {
          meaning: "ఉత్పాదక వాతావరణంలో (Production) వ్యాపార అవసరాలను తీర్చే విశ్వసనీయ సాఫ్ట్‌వేర్ సేవ.",
          explanation: "మైక్రోసర్వీసెస్, ఏపీఐలు మరియు డాకర్ కంటైనర్లలో నడిచే ఆధునిక డిజిటల్ వ్యవస్థ.",
          example: "లక్షలాది లావాదేవీలను నిర్వహించే పేమెంట్ గేట్‌వే ప్రోగ్రామ్.",
          remember: "ప్రోగ్రామ్ = ఎంటర్‌ప్రైజ్ బిజినెస్ లాజిక్ ఎగ్జిక్యూషన్."
        }
      },
      hindi: {
        kid: {
          meaning: "प्रोग्राम निर्देशों (Instructions) की एक जादुई सूची है जो कंप्यूटर या खिलौने को बताती है कि क्या करना है।",
          explanation: "जैसे किसी खेल के नियम होते हैं, वैसे ही कंप्यूटर प्रोग्राम बताता है कि गेम में बिल्ली कब कूदेगी।",
          example: "स्क्रीन पर रंग-बिरंगे तारे बनाने वाला प्रोग्राम।",
          remember: "प्रोग्राम = कंप्यूटर के लिए आसान निर्देश।"
        },
        young: {
          meaning: "प्रोग्राम कोड निर्देशों का एक समूह है जिसे कंप्यूटर किसी काम को पूरा करने के लिए चलाता है।",
          explanation: "आपके फोन में चलने वाले सभी ऐप्स (यूट्यूब, व्हाट्सएप, गेम्स) प्रोग्रामिंग भाषा में लिखे गए प्रोग्राम हैं।",
          example: "गेम में स्कोर जोड़ने वाला एक साधारण पायथन प्रोग्राम।",
          remember: "प्रोग्राम = कंप्यूटर द्वारा चलाया जाने वाला कोड।"
        },
        college: {
          meaning: "प्रोग्राम किसी प्रोग्रामिंग भाषा में लिखा गया निर्देशों का एक क्रमबद्ध समूह है जो किसी समस्या को हल करता है।",
          explanation: "यह डेटा इनपुट लेता है, लॉजिक प्रोसेस करता है और सही आउटपुट स्क्रीन या फाइल में देता है।",
          example: "छात्रों के अंकों का विश्लेषण करने वाला पायथन प्रोग्राम।",
          remember: "प्रोग्राम = इनपुट को आउटपुट में बदलने वाला लॉजिक।"
        },
        graduate: {
          meaning: "ऑपरेटिंग सिस्टम में निष्पादित (Execute) होने वाला एक सॉफ्टवेयर प्रोसेस जो मेमोरी और सीपीयू का उपयोग करता है।",
          explanation: "यह डेटा संरचनाओं, एल्गोरिदम और समवर्ती प्रक्रियाओं (Concurrency) का समन्वय करता है।",
          example: "रियल-टाइम डेटा स्ट्रीम को प्रोसेस करने वाला बैकएंड प्रोग्राम।",
          remember: "प्रोग्राम = कार्यशील निष्पादन योग्य प्रणाली।"
        },
        professional: {
          meaning: "व्यावसायिक लॉजिक और डेटा वर्कफ़्लो को लागू करने वाला उत्पादन-स्तरीय (Production-grade) सॉफ्टवेयर सिस्टम।",
          explanation: "यह स्केलेबल आर्किटेक्चर, माइक्रोसर्विसेज और स्वचालित क्लाउड पाइपलाइनों में चलता है।",
          example: "लाखों उपयोगकर्ताओं के लिए भुगतान प्रसंस्करण सेवा का प्रोग्राम।",
          remember: "प्रोग्राम = उत्पादन-स्तरीय एंटरप्राइज सॉफ्टवेयर सेवा।"
        }
      }
    }
  },
  {
    term: "reliable",
    category: "general",
    synonyms: ["reliability", "reliably", "dependable", "trustworthy", "relible"],
    pythonExample: "try:\n    result = process_data()\nexcept Exception as e:\n    result = fallback_data()  # Keeps the program running reliably",
    howUsed: "Used to describe code, systems, or tools that work consistently without unexpected failures or crashes.",
    meanings: {
      english: {
        kid: {
          meaning: "Reliable means something you can always trust to work properly without breaking.",
          explanation: "Just like a best friend who always helps you, reliable code always runs happily without breaking or stopping.",
          example: "A reliable alarm clock that rings on time every single morning.",
          remember: "Reliable = trustworthy and never lets you down."
        },
        young: {
          meaning: "Reliable refers to software or machines that perform dependably without crashing.",
          explanation: "When you write reliable code, you make sure to handle mistakes gracefully so your app stays online and keeps working.",
          example: "A reliable video game that doesn't freeze or crash in the middle of a boss fight.",
          remember: "Reliable = works consistently without unexpected errors."
        },
        college: {
          meaning: "The probability that a system performs its required functions without failure under specified conditions for a specified duration.",
          explanation: "Software reliability is achieved through defensive programming, automated test coverage, and comprehensive exception handling.",
          example: "Designing fault-tolerant microservices with automated health recovery.",
          remember: "Reliable = mathematically consistent and fault-tolerant."
        },
        graduate: {
          meaning: "System attribute indicating deterministic behavior, low Mean Time Between Failures (MTBF), and resilient error recovery.",
          explanation: "Engineers build reliability into backend services using circuit breakers, retries with exponential backoff, and idempotent APIs.",
          example: "Building payment processing services with 99.99% uptime guarantees.",
          remember: "Reliable = resilient, deterministic, and fault-isolated."
        },
        professional: {
          meaning: "Production resilience ensuring high availability (SLAs/SLOs), fault containment, and predictable operational uptime.",
          explanation: "Emphasizing Chaos Engineering, automated failover protocols, distributed observability, and graceful degradation.",
          example: "Implementing distributed consensus with fallback queues for zero data loss.",
          remember: "Reliable = engineered for uninterrupted, fault-tolerant production uptime."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Reliable ante nammadagina vidhamga, elanti errors lekunda eppudu sarigga pani cheyadam.",
          explanation: "Manam rase software eppudu crash avvakunda, smooth ga run aithe daanni reliable software antaru.",
          example: "Eppudu sarigga pani chese bike laaga, reliable code eppudu neat ga execute avtundi.",
          remember: "Reliable = eppudu nammadagina vidhamga pani cheyadam."
        }
      },
      telugu: {
        young: {
          meaning: "నమ్మదగినది (Reliable) అంటే ఎటువంటి అంతరాయం లేదా సమస్యలు లేకుండా ఎల్లప్పుడూ సరిగ్గా పనిచేసే గుణం.",
          explanation: "సాఫ్ట్‌వేర్ ఎప్పుడూ క్రాష్ కాకుండా, అంచనా వేసినట్లుగా పనిచేస్తే దానిని నమ్మదగిన సాఫ్ట్‌వేర్ (Reliable Software) అంటారు.",
          example: "సమయానికి మోగే అలారం గడియారం.",
          remember: "Reliable = నమ్మదగిన రీతిలో పనిచేయడం."
        }
      },
      hindi: {
        young: {
          meaning: "विश्वसनीय (Reliable) का मतलब है कोई ऐसी चीज़ या कोड जिस पर आप पूरा भरोसा कर सकें कि वह बिना रुके सही काम करेगा।",
          explanation: "जब कोई सॉफ्टवेयर या गेम बिना क्रैश हुए सुचारू रूप से चलता है, तो उसे 'Reliable' कहा जाता है।",
          example: "एक भरोसेमंद अलार्म जो हर सुबह सही समय पर बजता है।",
          remember: "Reliable = बिना रुकावट भरोसेमंद काम करना।"
        }
      }
    }
  },
  {
    term: "reusable",
    category: "general",
    synonyms: ["reusability", "reuse", "reusing", "modular"],
    pythonExample: "def format_currency(amount):\n    return f'${amount:,.2f}'\n\n# Reusable across all checkout pages\nprint(format_currency(1250))",
    howUsed: "Used to describe functions, classes, or modules written once and used in many different places in a project.",
    meanings: {
      english: {
        kid: {
          meaning: "Reusable means you can use something again and again instead of throwing it away.",
          explanation: "Like your favorite water bottle that you wash and drink from every single day instead of using a new plastic cup!",
          example: "Writing one song function that plays music on every game level.",
          remember: "Reusable = use it again without rebuilding it."
        },
        young: {
          meaning: "Reusable means designed so you can use it in multiple places without rewriting it.",
          explanation: "In programming, writing reusable code saves time, avoids mistakes, and keeps your project clean and organized.",
          example: "A function that calculates math scores can be used for 10 different subjects.",
          remember: "Reusable = write once, use everywhere."
        },
        college: {
          meaning: "The architectural quality of software components allowing them to be utilized across multiple contexts without modification.",
          explanation: "Adheres to the DRY (Don't Repeat Yourself) principle, reducing codebase footprint and vulnerability surfaces.",
          example: "Creating generic database abstraction classes and utility formatting packages.",
          remember: "Reusable = modular abstraction minimizing duplication."
        },
        graduate: {
          meaning: "Component design promoting modular composition, loose coupling, and standardized interface compatibility.",
          explanation: "Enables shared internal package ecosystems, UI component libraries, and SDK client generators.",
          example: "Architecting shared UI design systems used across web and mobile client applications.",
          remember: "Reusable = standardized modular building block."
        },
        professional: {
          meaning: "Enterprise asset leverage through shared libraries, micro-frontends, and generic core SDK frameworks.",
          explanation: "Significantly decreases Time-To-Market (TTM) and reduces maintenance overhead across cross-functional engineering teams.",
          example: "Maintaining enterprise-wide authentication and telemetry SDKs used across 50+ services.",
          remember: "Reusable = high-leverage architectural component."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Reusable ante malli malli create cheyyakunda okasari rasi multiple places lo vaadukovadam.",
          explanation: "Oka function ni okasari rasi, different places lo direct ga call cheyadaniki reusability antaru.",
          example: "Math calculation function ni anni pages lo use cheyadam.",
          remember: "Reusable = Write once, use anywhere."
        }
      },
      telugu: {
        young: {
          meaning: "పునర్వినియోగించదగినది (Reusable) అంటే ఒకసారి రాసిన కోడ్ లేదా ఫంక్షన్‌ను మళ్లీ మళ్లీ ఎక్కడైనా వాడుకునే సౌలభ్యం.",
          explanation: "ప్రతిసారి కొత్తగా రాయాల్సిన అవసరం లేకుండా, ఇప్పటికే ఉన్న కోడ్‌ను ఇతర పేజీలలో లేదా ప్రాజెక్ట్‌లలో సులభంగా వాడవచ్చు.",
          example: "ఒకే లాగిన్ ఫంక్షన్‌ను అన్ని పేజీలలో ఉపయోగించడం.",
          remember: "Reusable = ఒకసారి రాసి అనేక చోట్ల వాడుకోవడం."
        }
      },
      hindi: {
        young: {
          meaning: "पुन: प्रयोज्य (Reusable) का मतलब है कि एक बार कोड लिखकर उसे बार-बार अलग-अलग जगहों पर उपयोग किया जा सकता है।",
          explanation: "जब हम कोई फंक्शन एक बार लिखते हैं और उसे पूरे प्रोजेक्ट में कई जगह इस्तेमाल करते हैं, तो समय बचता है।",
          example: "एक ईमेल भेजने वाला फंक्शन जो कई अलग-अलग पेज पर काम करता है।",
          remember: "Reusable = एक बार लिखो, हर जगह इस्तेमाल करो।"
        }
      }
    }
  },
  {
    term: "efficient",
    category: "general",
    synonyms: ["efficiency", "efficiently", "fast", "optimized"],
    pythonExample: "# Using a set for O(1) instant lookup\nallowed_users = {'alice', 'bob', 'charlie'}\nif 'alice' in allowed_users:\n    print('Access granted efficiently!')",
    howUsed: "Used to describe algorithms or software that run fast and use very little CPU memory or battery power.",
    meanings: {
      english: {
        kid: {
          meaning: "Efficient means doing a job super fast and using as little energy or effort as possible.",
          explanation: "Like putting on your shoes quickly in one smooth step so you can rush outside to play without wasting time!",
          example: "A fast game that loads in 1 second and doesn't drain your tablet battery.",
          remember: "Efficient = fast, smart, and saves energy."
        },
        young: {
          meaning: "Efficient describes a program that does its job quickly while using as little computer memory and battery as possible.",
          explanation: "Good programmers look for efficient ways to write code so phone batteries don't drain and games don't lag.",
          example: "Searching through 10,000 game items instantly without freezing the screen.",
          remember: "Efficient = maximum speed with minimum battery and memory usage."
        },
        college: {
          meaning: "Optimized utilization of computational resources, characterized by minimal time complexity O(n) and space complexity O(1).",
          explanation: "Algorithms are analyzed through Big-O notation to ensure high throughput and low latency under massive data loads.",
          example: "Replacing nested O(n^2) loops with O(n) hash map lookups.",
          remember: "Efficient = optimal asymptotic time and space complexity."
        },
        graduate: {
          meaning: "Resource-conscious computational design optimizing memory cache lines, branch prediction, and thread utilization.",
          explanation: "Achieved via zero-copy data structures, vectorization (SIMD), and non-blocking asynchronous event loops.",
          example: "Optimizing high-frequency trading engines to process orders in sub-millisecond latencies.",
          remember: "Efficient = hardware-aligned, low-latency execution."
        },
        professional: {
          meaning: "Infrastructure cost optimization and latency reduction achieved through profile-guided optimization and efficient algorithms.",
          explanation: "Directly minimizes cloud computing operational expenditure (AWS/GCP bill) and maximizes system queries-per-second (QPS).",
          example: "Refactoring database queries to reduce cloud server costs by 40% while handling 100k requests/sec.",
          remember: "Efficient = cost-effective, high-throughput production performance."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Efficient ante thakkuva time and memory lo fast ga pani complete cheyadam.",
          explanation: "Code ni slow ga lekunda, memory takkuva use chesukuntu fast ga run ayyela rayadanni efficient programming antaru.",
          example: "Game lag avvakunda instant ga load avvadam.",
          remember: "Efficient = thakkuva memory tho fast ga run avvadam."
        }
      },
      telugu: {
        young: {
          meaning: "సమర్థవంతమైనది (Efficient) అంటే తక్కువ సమయం మరియు తక్కువ మెమరీని ఉపయోగించి పనిని చాలా వేగంగా పూర్తి చేయడం.",
          explanation: "కంప్యూటర్ బ్యాటరీ మరియు మెమరీ తక్కువగా వాడుకుంటూ వేగంగా నడిచే కోడ్‌ను సమర్థవంతమైనది (Efficient) అంటారు.",
          example: "ఒక్క సెకనులో వేల పేర్లను వెతికే వేగవంతమైన సెర్చ్ ప్రోగ్రామ్.",
          remember: "Efficient = తక్కువ సమయంలో గరిష్ట పనితీరు."
        }
      },
      hindi: {
        young: {
          meaning: "कुशल या दक्ष (Efficient) का मतलब है कि कोई प्रोग्राम बहुत कम मेमोरी और बैटरी का उपयोग करके बहुत तेज़ी से काम करता है।",
          explanation: "प्रोग्रामिंग में जो कोड कंप्यूटर की मेमोरी और बैटरी कम खर्च करके बहुत तेज़ी से चलता है, उसे कुशल (Efficient) कहते हैं।",
          example: "बिना हैंग हुए तुरंत लोड होने वाला ऐप।",
          remember: "Efficient = कम समय और कम मेमोरी में सबसे तेज़ काम।"
        }
      }
    }
  },
  {
    term: "application",
    category: "general",
    synonyms: ["app", "applications", "software app"],
    pythonExample: "# A simple console application\nprint('=== Calculator App ===')\nnum1 = float(input('Number 1: '))\nprint(f'Doubled: {num1 * 2}')",
    howUsed: "Used to describe a complete software program (like a mobile app, web app, or desktop software) created for end users.",
    meanings: {
      english: {
        kid: {
          meaning: "An application (or app) is a fun software program on your tablet or computer that lets you play or learn.",
          explanation: "Apps like drawing games, video players, and storybooks are all applications built by programmers.",
          example: "A drawing app where you paint colorful animals.",
          remember: "Application = an app made for you to use."
        },
        young: {
          meaning: "An application (app) is a complete program designed to help users perform specific tasks or play games.",
          explanation: "YouTube, Spotify, Roblox, and Discord are all applications created using programming languages like Python and JavaScript.",
          example: "A weather application that shows tomorrow's temperature.",
          remember: "Application = full software program built for users."
        },
        college: {
          meaning: "A complete software package executing user-facing business logic, UI interactions, and backend data processing.",
          explanation: "Applications typically follow layered architectures: Presentation layer (Frontend), Business logic layer, and Persistence layer (Database).",
          example: "Building a Full-Stack web application using FastAPI, React, and PostgreSQL.",
          remember: "Application = cohesive software system delivering end-user functionality."
        },
        graduate: {
          meaning: "An integrated software solution addressing specific domain requirements through client-server, microservice, or desktop architectures.",
          explanation: "Encompasses lifecycle phases: requirements, system design, testing, CI/CD deployment, and runtime observability.",
          example: "Developing multi-tenant SaaS applications with authentication and billing.",
          remember: "Application = production software system solving domain problems."
        },
        professional: {
          meaning: "Production software system delivering scalable digital services, enterprise capabilities, or consumer platforms.",
          explanation: "Maintained through distributed architectures, containerized deployments (Docker/Kubernetes), and SLA-backed cloud infrastructure.",
          example: "Deploying high-concurrency fintech applications with zero-downtime rolling updates.",
          remember: "Application = enterprise software platform delivering business value."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Application (app) ante users vaadukodaniki tayaru chesina oka complete software program.",
          explanation: "YouTube, WhatsApp, and Games anni coding tho tayaru chesina applications.",
          example: "Weather check chese weather app or chat app.",
          remember: "Application = users kosam create chesina software program."
        }
      },
      telugu: {
        young: {
          meaning: "అప్లికేషన్ లేదా యాప్ (Application) అంటే వినియోగదారుల అవసరాల కోసం రూపొందించిన పూర్తి సాఫ్ట్‌వేర్ ప్రోగ్రామ్.",
          explanation: "మనం ఫోన్‌లో లేదా కంప్యూటర్‌లో ఉపయోగించే వాట్సాప్, యూట్యూబ్ మరియు ఆటలన్నీ అప్లికేషన్‌లే.",
          example: "ఆన్‌లైన్ లో చదువుకోవడానికి ఉపయోగించే లెర్నింగ్ యాప్.",
          remember: "అప్లికేషన్ = ప్రజల అవసరాలను తీర్చే సాఫ్ట్‌వేర్ ప్రోగ్రామ్."
        }
      },
      hindi: {
        young: {
          meaning: "एप्लिकेशन या ऐप (Application) एक पूरा सॉफ्टवेयर प्रोग्राम है जो उपयोगकर्ताओं के काम को आसान बनाने के लिए बनाया जाता है।",
          explanation: "मोबाइल और कंप्यूटर में चलने वाले सभी ऐप्स (जैसे व्हाट्सएप, यूट्यूब या गेम) को एप्लिकेशन कहा जाता है।",
          example: "कैलकुलेटर ऐप या मौसम की जानकारी देने वाला ऐप।",
          remember: "Application = काम पूरा करने वाला पूरा सॉफ्टवेयर।"
        }
      }
    }
  },
  {
    term: "software",
    category: "general",
    synonyms: ["softwares", "software program", "programs"],
    pythonExample: "print('Software powers modern computers!')",
    howUsed: "Used to describe the intangible digital programs and operating instructions that run on computer hardware.",
    meanings: {
      english: {
        kid: {
          meaning: "Software is the smart brain and games inside a computer that you can see on the screen.",
          explanation: "Hardware is the physical screen and keyboard you can touch. Software is the magic code inside that makes games play and music sound.",
          example: "A drawing game on your tablet is software.",
          remember: "Software = the digital programs and games inside the computer."
        },
        young: {
          meaning: "Software is a collection of programs and data that tells a computer hardware what to do.",
          explanation: "Without software, a computer is just empty plastic and metal. Software brings it to life.",
          example: "Operating systems like Windows, apps like Chrome, and games are all software.",
          remember: "Software = digital programs that bring hardware to life."
        },
        college: {
          meaning: "The non-tangible component of computing systems comprising programs, procedures, and documentation.",
          explanation: "Divided into System Software (OS, device drivers, compilers) and Application Software (user tools, business systems).",
          example: "Developing multi-platform application software using Python and Qt.",
          remember: "Software = programmatic logic driving physical hardware."
        },
        graduate: {
          meaning: "Logical abstractions, algorithms, and bytecode executing across distributed computing platforms.",
          explanation: "Engineered following rigorous Software Engineering principles (Design Patterns, CI/CD, Reliability Engineering).",
          example: "Enterprise distributed software architectures.",
          remember: "Software = systematically engineered computational systems."
        },
        professional: {
          meaning: "Enterprise digital intellectual property delivering automated capabilities, products, and services.",
          explanation: "Maintained through scalable DevOps pipelines, security compliance, and continuous deployment lifecycles.",
          example: "Cloud-native SaaS software platforms.",
          remember: "Software = high-value scalable digital asset."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Software ante computer lo run ayye digital programs and applications.",
          explanation: "Computer screen, keyboard hardware aithe... daanilo run ayye apps, games, and Windows ni software antaru.",
          example: "WhatsApp, Chrome browser, and Python anni software.",
          remember: "Software = hardware meeda run ayye digital programs."
        }
      },
      telugu: {
        young: {
          meaning: "సాఫ్ట్‌వేర్ (Software) అంటే కంప్యూటర్ హార్డ్‌వేర్‌ను నడిపించడానికి ఉపయోగపడే డిజిటల్ ప్రోగ్రామ్‌ల సముదాయం.",
          explanation: "మనం ముట్టుకోగలిగే కీబోర్డ్, మానిటర్ హార్డ్‌వేర్ అయితే, వాటిలో నడిచే యాప్‌లు మరియు గేమ్స్ సాఫ్ట్‌వేర్.",
          example: "యూట్యూబ్, విండోస్ మరియు గూగుల్ క్రోమ్ సాఫ్ట్‌వేర్‌కు ఉదాహరణలు.",
          remember: "సాఫ్ట్‌వేర్ = కంప్యూటర్‌ను నడిపించే డిజిటల్ ప్రోగ్రామ్‌లు."
        }
      },
      hindi: {
        young: {
          meaning: "सॉफ्टवेयर (Software) कंप्यूटर प्रोग्राम और डेटा का एक संग्रह है जो हार्डवेयर को काम करने का निर्देश देता है।",
          explanation: "कंप्यूटर का कीबोर्ड और स्क्रीन हार्डवेयर है, जबकि उसमें चलने वाले गेम्स और ऐप्स सॉफ्टवेयर हैं।",
          example: "विंडोज ऑपरेटिंग सिस्टम, व्हाट्सएप और फोटो एडिटिंग ऐप।",
          remember: "सॉफ्टवेयर = कंप्यूटर को चलाने वाले डिजिटल प्रोग्राम।"
        }
      }
    }
  },
  {
    term: "code",
    category: "general",
    synonyms: ["source code", "coding", "program code"],
    pythonExample: "# Python Code\nmessage = 'Hello World'\nprint(message)",
    howUsed: "Used to describe written statements in a programming language that instruct a computer.",
    meanings: {
      english: {
        kid: {
          meaning: "Code is special secret writing that lets you speak to computers and build games.",
          explanation: "When you write code in Python, the computer reads your words and does what you ask, like painting a star or playing a sound.",
          example: "Writing print('Hello') is writing code!",
          remember: "Code = friendly instructions written for computers."
        },
        young: {
          meaning: "Code is the set of instructions written in a programming language that tells a computer what to do.",
          explanation: "Programmers write code in text editors, and computers translate and run that code to make websites, games, and robots work.",
          example: "Writing if-else logic in Python code to check player scores.",
          remember: "Code = the text instructions that make software work."
        },
        college: {
          meaning: "Source code comprises human-readable text written according to the formal grammar of a programming language.",
          explanation: "Compiled into bytecode or machine language to be executed by a virtual machine or hardware processor.",
          example: "Writing modular, PEP 8 compliant Python source code.",
          remember: "Code = human-readable specification of computational logic."
        },
        graduate: {
          meaning: "Syntactic expressions of algorithmic logic and data transformations adhering to language specification standards.",
          explanation: "Evaluated through static analysis, AST parsers, automated testing, and performance profiling.",
          example: "Refactoring legacy codebases for asynchronous concurrency and zero memory leaks.",
          remember: "Code = executable algorithmic specification."
        },
        professional: {
          meaning: "Maintainable, production-grade source artifacts subjected to version control (Git), code reviews, and CI/CD validation.",
          explanation: "Follows Clean Code, SOLID principles, and enterprise architectural standards to guarantee long-term system maintainability.",
          example: "Maintaining high-concurrency distributed backend microservices codebases.",
          remember: "Code = production digital asset driving system execution."
        }
      },
      "english-telugu": {
        young: {
          meaning: "Code ante computer ki manam Python lanti language lo rase text instructions.",
          explanation: "Manam English lo instructions rasi computer tho games and apps create cheyadaniki use chese text ni code antaru.",
          example: "print('Hi') ani rayadanni code antam.",
          remember: "Code = computer ki em cheyyalo cheppe written text."
        }
      },
      telugu: {
        young: {
          meaning: "కోడ్ (Code) అంటే కంప్యూటర్‌కు అర్థమయ్యేలా ప్రోగ్రామింగ్ భాషలో మనం రాసే సూచనల పాఠ్యం.",
          explanation: "మనం మాట్లాడే భాష కంప్యూటర్‌కు అర్థం కాదు, అందుకే పైథాన్ వంటి భాషలో కోడ్ రాసి కంప్యూటర్‌తో పనులు చేయిస్తాము.",
          example: "print('నమస్తే') అని పైథాన్‌లో రాయడం కోడింగ్ అవుతుంది.",
          remember: "కోడ్ = కంప్యూటర్‌తో మాట్లాడేందుకు మనం రాసే సూచనలు."
        }
      },
      hindi: {
        young: {
          meaning: "कोड (Code) प्रोग्रामिंग भाषा में लिखे गए वे निर्देश हैं जो कंप्यूटर को बताते हैं कि क्या करना है।",
          explanation: "हम कंप्यूटर से सीधे बात नहीं कर सकते, इसलिए पायथन जैसी भाषा में कोड लिखकर सॉफ्टवेयर और गेम बनाते हैं।",
          example: "पायथन में print('नमस्ते') लिखना कोड कहलाता है।",
          remember: "कोड = कंप्यूटर को निर्देश देने वाला टेक्स्ट।"
        }
      }
    }
  }
];
