import { writeCleanData } from './dataWriter.js';

// OOP (57-66)
const oop = [
  {
    id: "classes",
    topicNumber: 57,
    sectionId: "oop",
    sectionTitle: "Section 10 — OOP",
    title: "Classes",
    shortDescription: "Understand classes as user-defined blueprints for creating structured objects with state and behavior.",
    whatYouWillLearn: [
      "What a class is (blueprint/template)",
      "Defining classes with the class keyword",
      "Attributes and methods overview",
      "PEP 8 naming convention (PascalCase / CapWords)"
    ],
    explanation: "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects' that bundle state (attributes) and behavior (methods).\n\nA class is a blueprint or template from which individual objects are instantiated. Think of a class like an architectural blueprint for a house: the blueprint describes the layout and specifications, while the houses built from it are individual object instances.",
    example: {
      code: "class Car:\n    \"\"\"Blueprint for creating automotive vehicles.\"\"\"\n    pass\n\ncar1 = Car()\nprint(\"Created object:\", car1)\nprint(\"Is car1 a Car?\", isinstance(car1, Car))",
      output: "Created object: <__main__.Car object at 0x7f8b90>\nIs car1 a Car? True",
      howItWorks: "The class keyword defines the type, and calling Car() instantiates a new unique object in memory."
    },
    commonMistakes: [
      "Using snake_case for class names instead of PascalCase (e.g., car_blueprint instead of CarBlueprint)."
    ],
    practiceQuestions: [
      {
        question: "Define an empty class called Book using the pass statement.",
        answer: "class Book:\n    pass\n\nb = Book()\nprint(type(b).__name__)",
        output: "Book"
      }
    ],
    interviewQuestion: "What is the relationship between a class and a type in Python 3?",
    interviewAnswer: "In Python 3, classes and types are unified. Every class is an instance of type (metaclass), and creating a user-defined class creates a first-class data type in Python."
  },
  {
    id: "objects",
    topicNumber: 58,
    sectionId: "oop",
    sectionTitle: "Section 10 — OOP",
    title: "Objects",
    shortDescription: "Instantiate concrete objects from class blueprints, each with its own memory space and identity.",
    whatYouWillLearn: [
      "Instantiating objects from classes",
      "Checking object identity with id() and isinstance()",
      "How objects maintain independent attribute states",
      "The 'Everything is an Object' philosophy in Python"
    ],
    explanation: "An object is a specific instance of a class. When a class is defined, no memory is allocated until an object of that class is created (instantiated).\n\nIn Python, 'everything is an object' — including integers, strings, functions, modules, and classes themselves!",
    example: {
      code: "class Robot:\n    def __init__(self, name):\n        self.name = name\n\nr1 = Robot(\"Atlas\")\nr2 = Robot(\"Spot\")\n\nprint(f\"Robot 1: {r1.name}\")\nprint(f\"Robot 2: {r2.name}\")\nprint(\"Are they the same object?\", r1 is r2)",
      output: "Robot 1: Atlas\nRobot 2: Spot\nAre they the same object? False",
      howItWorks: "Each call to Robot() allocates a fresh object at a distinct memory address."
    },
    commonMistakes: [
      "Assuming modifications to attributes on one object instance affect other separate instances."
    ],
    practiceQuestions: [
      {
        question: "Create an instance of class User and store it in variable current_user.",
        answer: "class User:\n    pass\n\ncurrent_user = User()\nprint(isinstance(current_user, User))",
        output: "True"
      }
    ],
    interviewQuestion: "What does the phrase 'Everything in Python is an object' mean?",
    interviewAnswer: "It means that all data types (integers, strings, lists, functions, classes, modules) inherit from object in the CPython object model and have attributes and methods."
  },
  {
    id: "constructors",
    topicNumber: 59,
    sectionId: "oop",
    sectionTitle: "Section 10 — OOP",
    title: "Constructors (__init__)",
    shortDescription: "Initialize object state upon creation using the __init__ initializer method and self reference.",
    whatYouWillLearn: [
      "The role of the __init__ initializer method",
      "Understanding the 'self' parameter",
      "Passing initialization arguments",
      "Difference between __new__ (allocation) and __init__ (initialization)"
    ],
    explanation: "The '__init__' method is Python's initializer (commonly referred to as the constructor). It is automatically invoked whenever a new instance of the class is created.\n\nThe 'self' Parameter:\n'self' represents the specific instance of the class being created. Through 'self', you bind attributes directly to that specific instance.",
    example: {
      code: "class Product:\n    def __init__(self, name, price, stock=0):\n        self.name = name\n        self.price = price\n        self.stock = stock\n        print(f\"Initialized product: {self.name} at ${self.price}\")\n\np1 = Product(\"Mechanical Keyboard\", 89.99, stock=15)",
      output: "Initialized product: Mechanical Keyboard at $89.99",
      howItWorks: "Product('Mechanical Keyboard', 89.99) calls __init__ automatically, passing the newly created instance as 'self'."
    },
    commonMistakes: [
      "Omitting self as the first parameter in __init__.",
      "Attempting to return a value from __init__ (it must always return None; returning a value raises TypeError)."
    ],
    practiceQuestions: [
      {
        question: "Create a class Account with an __init__ that sets self.owner and self.balance.",
        answer: "class Account:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\nacc = Account(\"Tulasi\", 500)\nprint(f\"{acc.owner}: ${acc.balance}\")",
        output: "Tulasi: $500"
      }
    ],
    interviewQuestion: "What is the technical difference between __new__ and __init__ in Python?",
    interviewAnswer: "__new__ is the actual constructor method that allocates and returns a new empty object instance in memory. __init__ is the initializer method that receives that instance (as self) and configures its initial attributes."
  },
  {
    id: "instance-variables",
    topicNumber: 60,
    sectionId: "oop",
    sectionTitle: "Section 10 — OOP",
    title: "Instance Variables",
    shortDescription: "Manage unique per-instance state tied to specific object instances via self.attribute.",
    whatYouWillLearn: [
      "Defining instance variables with self",
      "Instance namespace (__dict__)",
      "Dynamic attribute assignment",
      "Preventing unwanted attributes with __slots__"
    ],
    explanation: "Instance variables are variables that belong exclusively to a specific instance of a class.\n\nEvery object created from the class maintains its own private copy of instance variables inside its instance namespace dictionary (obj.__dict__).",
    example: {
      code: "class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\ns1 = Student(\"Alex\", 92)\ns2 = Student(\"Beth\", 85)\n\ns1.score = 95\nprint(f\"{s1.name} Score:\", s1.score)\nprint(f\"{s2.name} Score:\", s2.score)",
      output: "Alex Score: 95\nBeth Score: 85",
      howItWorks: "Each instance holds its own key-value dictionary storing its instance variables."
    },
    commonMistakes: [
      "Declaring mutable instance variables directly in the class body instead of inside __init__ (making them shared class variables)."
    ],
    practiceQuestions: [
      {
        question: "Define a class Laptop with instance variables brand and ram_gb.",
        answer: "class Laptop:\n    def __init__(self, brand, ram_gb):\n        self.brand = brand\n        self.ram_gb = ram_gb\n\nl = Laptop(\"Dell\", 16)\nprint(l.brand, l.ram_gb)",
        output: "Dell 16"
      }
    ],
    interviewQuestion: "What is __slots__ and why is it used in Python classes?",
    interviewAnswer: "__slots__ explicitly declares allowed instance attributes as a tuple, preventing the creation of the dynamic __dict__ for each instance. This saves memory and speeds up attribute access in applications with millions of objects."
  },
  {
    id: "class-variables",
    topicNumber: 61,
    sectionId: "oop",
    sectionTitle: "Section 10 — OOP",
    title: "Class Variables",
    shortDescription: "Share data and state across all instances of a class using class-level attributes.",
    whatYouWillLearn: [
      "Defining class variables in the class body",
      "Accessing class variables via ClassName.var vs self.var",
      "Tracking global instance counts",
      "Attribute lookup hierarchy"
    ],
    explanation: "A class variable is defined inside the class body (outside any methods) and is shared by ALL instances of that class.\n\nCommon Use Cases:\n- Constants common to all objects (e.g., interest_rate = 0.05)\n- Tracking total instances created (e.g., counter = 0)\n- Default configurations shared across instances",
    example: {
      code: "class Employee:\n    company_name = \"Tech Innovations Corp\"\n    employee_count = 0\n\n    def __init__(self, name):\n        self.name = name\n        Employee.employee_count += 1\n\ne1 = Employee(\"Alice\")\ne2 = Employee(\"Bob\")\n\nprint(\"Company:\", Employee.company_name)\nprint(\"Total Employees:\", Employee.employee_count)",
      output: "Company: Tech Innovations Corp\nTotal Employees: 2",
      howItWorks: "Employee.employee_count increments whenever any new Employee instance is initialized."
    },
    commonMistakes: [
      "Writing self.employee_count += 1 inside __init__ (this creates a shadowing instance variable on self rather than incrementing the shared class variable; use Employee.employee_count += 1)."
    ],
    practiceQuestions: [
      {
        question: "Define a class Circle with a class variable PI = 3.14159.",
        answer: "class Circle:\n    PI = 3.14159\n\nprint(Circle.PI)",
        output: "3.14159"
      }
    ],
    interviewQuestion: "What happens when you assign a value to self.class_variable on an instance?",
    interviewAnswer: "It creates a new instance variable with that name on that specific instance, shadowing (overriding) the class variable for that instance without modifying the shared class variable on the class itself."
  },
  {
    id: "methods",
    topicNumber: 62,
    sectionId: "oop",
    sectionTitle: "Section 10 — OOP",
    title: "Methods (Instance, Class, Static)",
    shortDescription: "Understand the three method types in Python: instance methods (self), class methods (@classmethod / cls), and static methods (@staticmethod).",
    whatYouWillLearn: [
      "Instance methods taking 'self'",
      "Class methods taking 'cls' using @classmethod",
      "Static methods without self/cls using @staticmethod",
      "Alternative constructors via class methods"
    ],
    explanation: "Python supports 3 distinct types of methods:\n1. Instance Methods: Take self as the first argument; access and modify instance state and class state.\n2. Class Methods (@classmethod): Take cls as the first argument; access and modify class state. Often used as factory methods / alternative constructors.\n3. Static Methods (@staticmethod): Take neither self nor cls; regular self-contained utility functions grouped within the class namespace.",
    example: {
      code: "class Date:\n    def __init__(self, year, month, day):\n        self.year = year\n        self.month = month\n        self.day = day\n\n    def format(self):\n        return f\"{self.year:04d}-{self.month:02d}-{self.day:02d}\"\n\n    @classmethod\n    def from_string(cls, date_str):\n        y, m, d = map(int, date_str.split(\"-\"))\n        return cls(y, m, d)\n\n    @staticmethod\n    def is_valid_year(year):\n        return 1900 <= year <= 2100\n\nd = Date.from_string(\"2026-10-07\")\nprint(\"Formatted Date:\", d.format())\nprint(\"Is 2026 valid?\", Date.is_valid_year(2026))",
      output: "Formatted Date: 2026-10-07\nIs 2026 valid? True",
      howItWorks: "@classmethod receives the class object 'cls' allowing factory instantiation. @staticmethod behaves like a plain function bound to the class."
    },
    commonMistakes: [
      "Forgetting @classmethod decorator when accepting cls.",
      "Using an instance method when neither self nor cls is referenced (use @staticmethod instead)."
    ],
    practiceQuestions: [
      {
        question: "Define a static method add(a, b) inside a MathUtils class.",
        answer: "class MathUtils:\n    @staticmethod\n    def add(a, b):\n        return a + b\n\nprint(MathUtils.add(15, 25))",
        output: "40"
      }
    ],
    interviewQuestion: "When should you use a @classmethod instead of an __init__ constructor?",
    interviewAnswer: "Use @classmethod when creating alternative constructors (e.g. from_dict, from_json, from_csv) that parse raw input data into arguments and instantiate the class cleanly."
  },
  {
    id: "inheritance",
    topicNumber: 63,
    sectionId: "oop",
    sectionTitle: "Section 10 — OOP",
    title: "Inheritance",
    shortDescription: "Derive new child classes from parent classes to reuse code, override behaviors, and use super().",
    whatYouWillLearn: [
      "Single and multiple inheritance syntax",
      "Invoking parent methods with super()",
      "Method overriding in child classes",
      "Method Resolution Order (MRO) and C3 Linearization"
    ],
    explanation: "Inheritance allows a child (derived) class to inherit attributes and methods from a parent (base) class, promoting code reuse.\n\nThe super() Function:\nsuper().__init__(...) delegates attribute initialization to the parent class, ensuring base class setup logic runs properly.",
    example: {
      code: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def make_sound(self):\n        return \"Some generic sound\"\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed\n\n    def make_sound(self):\n        return \"Woof! Woof!\"\n\ndog = Dog(\"Buddy\", \"Golden Retriever\")\nprint(f\"{dog.name} says: {dog.make_sound()}\")",
      output: "Buddy says: Woof! Woof!",
      howItWorks: "Dog inherits self.name initialization from Animal via super().__init__(name) and overrides make_sound()."
    },
    commonMistakes: [
      "Forgetting to call super().__init__() in the child class, leaving parent attributes uninitialized."
    ],
    practiceQuestions: [
      {
        question: "Create a class Vehicle with speed=0 and a child class Bike that inherits from it.",
        answer: "class Vehicle:\n    def __init__(self):\n        self.speed = 0\n\nclass Bike(Vehicle):\n    pass\n\nb = Bike()\nprint(\"Speed:\", b.speed)",
        output: "Speed: 0"
      }
    ],
    interviewQuestion: "What is MRO (Method Resolution Order) in Python and how do you view it?",
    interviewAnswer: "MRO is the order in which Python searches parent classes for attributes/methods in multiple inheritance hierarchies (calculated via C3 Linearization). You can inspect it with ClassName.__mro__ or ClassName.mro()."
  },
  {
    id: "polymorphism",
    topicNumber: 64,
    sectionId: "oop",
    sectionTitle: "Section 10 — OOP",
    title: "Polymorphism",
    shortDescription: "Treat different object types through a uniform interface using Duck Typing and method overriding.",
    whatYouWillLearn: [
      "Polymorphism across different classes",
      "Python's 'Duck Typing' philosophy",
      "Operator overloading with dunder magic methods",
      "Writing generic polymorphic functions"
    ],
    explanation: "Polymorphism means 'many forms'. It allows different classes to define methods with the exact same name, allowing them to be used interchangeably.\n\nDuck Typing:\nPython does not require formal interfaces. If an object implements the expected method (e.g. .speak()), Python can invoke it without caring about its explicit class inheritance.",
    example: {
      code: "class PDFExporter:\n    def export(self, data):\n        return f\"Exporting {data} to PDF file.\"\n\nclass CSVExporter:\n    def export(self, data):\n        return f\"Exporting {data} to CSV spreadsheet.\"\n\ndef process_report(exporter, dataset):\n    print(exporter.export(dataset))\n\nprocess_report(PDFExporter(), \"Financial Q3\")\nprocess_report(CSVExporter(), \"Financial Q3\")",
      output: "Exporting Financial Q3 to PDF file.\nExporting Financial Q3 to CSV spreadsheet.",
      howItWorks: "Both classes implement export(); process_report works seamlessly with any object that provides export()."
    },
    commonMistakes: [
      "Forcing rigid inheritance trees when simple duck typing or composition is cleaner."
    ],
    practiceQuestions: [
      {
        question: "Implement a __str__ dunder method on a class Item(name, price) to print 'Item: Book ($15)'.",
        answer: "class Item:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n    def __str__(self):\n        return f\"Item: {self.name} (${self.price})\"\n\nprint(Item(\"Book\", 15))",
        output: "Item: Book ($15)"
      }
    ],
    interviewQuestion: "What is Duck Typing in Python?",
    interviewAnswer: "Duck typing is Python's dynamic typing approach where an object's suitability is determined by the presence of specific methods and properties, rather than its explicit inheritance from a particular class."
  },
  {
    id: "encapsulation",
    topicNumber: 65,
    sectionId: "oop",
    sectionTitle: "Section 10 — OOP",
    title: "Encapsulation",
    shortDescription: "Protect internal object state using public, protected (_single_underscore), private (__double_underscore), and @property decorators.",
    whatYouWillLearn: [
      "Public vs Protected (_var) vs Private (__var) conventions",
      "Name mangling in Python (_ClassName__var)",
      "Creating getters and setters with @property and @setter",
      "Data validation through property setters"
    ],
    explanation: "Encapsulation bundles data and the methods that operate on that data inside a class, restricting direct outside access to prevent unintended state corruption.\n\nConventions in Python:\n- self.name: Public (accessible everywhere)\n- self._internal: Protected (convention: treat as internal, avoid direct external use)\n- self.__secret: Private (Python renames it via Name Mangling to _Class__secret)\n\nThe @property Decorator:\nAllows getter and setter methods to be accessed like regular attributes while validating inputs.",
    example: {
      code: "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.__balance = balance\n\n    @property\n    def balance(self):\n        return self.__balance\n\n    @balance.setter\n    def balance(self, value):\n        if value < 0:\n            raise ValueError(\"Balance cannot be negative!\")\n        self.__balance = value\n\nacc = BankAccount(\"Tulasi\", 1000)\nacc.balance = 1500\nprint(f\"Owner: {acc.owner}, Balance: ${acc.balance}\")",
      output: "Owner: Tulasi, Balance: $1500",
      howItWorks: "Direct access to acc.__balance from outside is prevented, forcing changes through the validated property setter."
    },
    commonMistakes: [
      "Assuming private attributes (__var) are 100% strictly private (Python uses name mangling: acc._BankAccount__balance can still be accessed, though discouraged)."
    ],
    practiceQuestions: [
      {
        question: "Define a class with a private attribute __pin = 1234 and a property getter pin.",
        answer: "class Vault:\n    def __init__(self):\n        self.__pin = 1234\n    @property\n    def pin(self):\n        return self.__pin\n\nv = Vault()\nprint(\"PIN:\", v.pin)",
        output: "PIN: 1234"
      }
    ],
    interviewQuestion: "How does Python implement private variables with double underscores under the hood?",
    interviewAnswer: "Python applies 'Name Mangling', transforming __var into _ClassName__var in the object's __dict__ to prevent accidental name collisions in subclasses."
  },
  {
    id: "abstraction",
    topicNumber: 66,
    sectionId: "oop",
    sectionTitle: "Section 10 — OOP",
    title: "Abstraction",
    shortDescription: "Enforce API contracts and hide implementation details using Abstract Base Classes (abc module and @abstractmethod).",
    whatYouWillLearn: [
      "The concept of abstraction in software design",
      "Using the abc module and ABC base class",
      "Defining abstract methods with @abstractmethod",
      "Enforcing that subclasses implement required methods"
    ],
    explanation: "Abstraction hides complex internal implementation details and shows only the essential interface to the user.\n\nIn Python, the abc (Abstract Base Classes) module enables you to define abstract blueprints that CANNOT be instantiated directly, forcing all subclasses to implement decorated @abstractmethod definitions.",
    example: {
      code: "from abc import ABC, abstractmethod\n\nclass PaymentProcessor(ABC):\n    @abstractmethod\n    def pay(self, amount):\n        pass\n\nclass StripeProcessor(PaymentProcessor):\n    def pay(self, amount):\n        return f\"Processed ${amount} via Stripe API.\"\n\nstripe = StripeProcessor()\nprint(stripe.pay(250))",
      output: "Processed $250 via Stripe API.",
      howItWorks: "PaymentProcessor acts as an enforced contract. Any child class missing the pay() method cannot be instantiated."
    },
    commonMistakes: [
      "Trying to directly instantiate an abstract class that has unimplemented abstract methods.",
      "Forgetting to inherit from ABC when using @abstractmethod."
    ],
    practiceQuestions: [
      {
        question: "Create an abstract class Shape inheriting from ABC with an abstract method area().",
        answer: "from abc import ABC, abstractmethod\n\nclass Shape(ABC):\n    @abstractmethod\n    def area(self):\n        pass\n\nprint(\"Shape ABC created successfully\")",
        output: "Shape ABC created successfully"
      }
    ],
    interviewQuestion: "What happens if a subclass does not implement all abstract methods of an Abstract Base Class?",
    interviewAnswer: "Python raises a TypeError: Can't instantiate abstract class SubClass with abstract methods ... as soon as you attempt to create an instance of that subclass."
  }
];

writeCleanData("oop.js", "oop", oop);

// FILES (67-71)
const files = [
  {
    id: "reading-files",
    topicNumber: 67,
    sectionId: "files",
    sectionTitle: "Section 11 — File Handling",
    title: "Reading Files",
    shortDescription: "Open and read text files safely using the with open() context manager, read(), readline(), and readlines().",
    whatYouWillLearn: [
      "Opening files in read mode ('r')",
      "The 'with' statement for automatic resource cleanup",
      "Differences between read(), readline(), and iterating line-by-line",
      "Handling character encodings (e.g. encoding='utf-8')"
    ],
    explanation: "Python provides built-in file I/O capabilities.\n\nThe 'with open()' statement is the standard best practice. It acts as a context manager that automatically closes the file stream when the block exits, even if an unexpected exception occurs.\n\nFile Reading Methods:\n- f.read(): Reads entire file content as a single string.\n- f.readline(): Reads one line at a time.\n- for line in f:: Memory-efficient streaming line by line (ideal for huge files).",
    example: {
      code: "import io\nsample_content = \"Line 1: Python Basics\\nLine 2: File Handling\"\nfile_sim = io.StringIO(sample_content)\n\nfor line_num, line in enumerate(file_sim, 1):\n    print(f\"[{line_num}] {line.strip()}\")",
      output: "[1] Line 1: Python Basics\n[2] Line 2: File Handling",
      howItWorks: "Iterating directly over the file object streams lines one by one with minimal memory consumption."
    },
    commonMistakes: [
      "Using open() without with and forgetting to call f.close(), causing file lock or descriptor leaks."
    ],
    practiceQuestions: [
      {
        question: "Write the standard snippet to open 'data.txt' for reading with UTF-8 encoding.",
        answer: "print(\"with open('data.txt', 'r', encoding='utf-8') as f:\")",
        output: "with open('data.txt', 'r', encoding='utf-8') as f:"
      }
    ],
    interviewQuestion: "Why is iterating over a file object (for line in file:) better than file.readlines() for large files?",
    interviewAnswer: "file.readlines() loads the entire file into a list in RAM at once, whereas for line in file uses a generator stream to buffer and yield one line at a time in O(1) memory."
  },
  {
    id: "writing-files",
    topicNumber: 68,
    sectionId: "files",
    sectionTitle: "Section 11 — File Handling",
    title: "Writing Files",
    shortDescription: "Write text data to files using 'w' mode, write(), writelines(), and handle overwrites cleanly.",
    whatYouWillLearn: [
      "Opening files in write mode ('w')",
      "Warning: 'w' mode truncates and overwrites existing file contents",
      "Writing strings with .write() and lists of strings with .writelines()",
      "Flushing write buffers to disk"
    ],
    explanation: "To write text to a file, open the file in 'w' mode.\n\nCAUTION: Opening an existing file in 'w' mode immediately truncates (erases) its previous content! If the file does not exist, Python creates it automatically.",
    example: {
      code: "import io\nmemory_file = io.StringIO()\nmemory_file.write(\"User: Tulasi\\nRole: Admin\\n\")\nmemory_file.seek(0)\nprint(\"Written Content:\\n\" + memory_file.read())",
      output: "Written Content:\nUser: Tulasi\nRole: Admin",
      howItWorks: ".write() writes the string to the stream buffer; closing or flushing commits it to disk."
    },
    commonMistakes: [
      "Opening in 'w' when you intended to append (which unintentionally erases previous data)."
    ],
    practiceQuestions: [
      {
        question: "What happens if you open a non-existent file in 'w' mode?",
        answer: "print(\"File is created automatically\")",
        output: "File is created automatically"
      }
    ],
    interviewQuestion: "What is the difference between write() and writelines() in Python?",
    interviewAnswer: "write(str) takes a single string. writelines(iterable) accepts an iterable of strings and writes them sequentially without adding newlines automatically."
  },
  {
    id: "appending-files",
    topicNumber: 69,
    sectionId: "files",
    sectionTitle: "Section 11 — File Handling",
    title: "Appending Files",
    shortDescription: "Append new data to the end of existing files using 'a' mode without overwriting existing contents.",
    whatYouWillLearn: [
      "Opening files in append mode ('a')",
      "Preserving existing file content while adding new records",
      "Timestamp logging patterns",
      "Automatic file creation if file does not yet exist"
    ],
    explanation: "Opening a file in append mode ('a') positions the file pointer at the very end of the file. Any data written will be added after existing contents without modifying or erasing what was already there.\n\nIf the file does not exist, 'a' mode creates it automatically.",
    example: {
      code: "import io\nlog_stream = io.StringIO(\"2026-10-01: Server Started\\n\")\nlog_stream.seek(0, io.SEEK_END)\nlog_stream.write(\"2026-10-07: Backup Completed\\n\")\nlog_stream.seek(0)\nprint(\"Log file content:\\n\" + log_stream.read())",
      output: "Log file content:\n2026-10-01: Server Started\n2026-10-07: Backup Completed",
      howItWorks: "Append mode places the write head at the end of the file, preserving earlier log entries."
    },
    commonMistakes: [
      "Forgetting to include a trailing newline (\\n) when appending lines."
    ],
    practiceQuestions: [
      {
        question: "Which file open mode should you use to add log lines without deleting previous logs?",
        answer: "mode = 'a'\nprint(f\"Open mode: '{mode}'\")",
        output: "Open mode: 'a'"
      }
    ],
    interviewQuestion: "What is the difference between 'w+', 'a+', and 'r+' modes in Python?",
    interviewAnswer: "r+ opens for reading and writing (pointer at start, does not truncate); w+ opens for reading and writing (truncates file to 0 bytes); a+ opens for reading and appending (pointer at end for writes, creates if not exists)."
  },
  {
    id: "csv-files",
    topicNumber: 70,
    sectionId: "files",
    sectionTitle: "Section 11 — File Handling",
    title: "CSV Files",
    shortDescription: "Read and write Comma Separated Values (CSV) spreadsheets using Python's built-in csv module.",
    whatYouWillLearn: [
      "The built-in csv module",
      "csv.reader and csv.writer for list-based row processing",
      "csv.DictReader and csv.DictWriter for key-value row processing",
      "Handling headers, delimiters, and newline=''"
    ],
    explanation: "CSV (Comma-Separated Values) is the standard tabular file format.\n\nPython's built-in csv module handles parsing quotes, commas, escapes, and delimiters automatically.\n\nDictReader / DictWriter:\nMaps each row to a dictionary where keys are the column headers, making tabular data processing intuitive and resilient to column reordering.",
    example: {
      code: "import csv, io\n\ncsv_data = \"\"\"name,role,salary\nAlice,Lead Engineer,120000\nBob,Data Analyst,95000\"\"\"\n\nreader = csv.DictReader(io.StringIO(csv_data))\nfor row in reader:\n    print(f\"{row['name']} -> {row['role']} (${row['salary']})\")",
      output: "Alice -> Lead Engineer ($120000)\nBob -> Data Analyst ($95000)",
      howItWorks: "DictReader automatically uses the first row as column header keys."
    },
    commonMistakes: [
      "Opening CSV files for writing without newline='' on Windows (can result in blank empty lines between every row)."
    ],
    practiceQuestions: [
      {
        question: "Why should you use csv.DictReader over basic csv.reader?",
        answer: "print(\"Access by header name\")",
        output: "Access by header name"
      }
    ],
    interviewQuestion: "Why is newline='' required when opening a file for writing with csv.writer?",
    interviewAnswer: "The csv module has its own internal newline handling. Without newline='', Python's universal newline translation adds extra carriage returns on Windows, creating double newlines."
  },
  {
    id: "json-files",
    topicNumber: 71,
    sectionId: "files",
    sectionTitle: "Section 11 — File Handling",
    title: "JSON Files",
    shortDescription: "Serialize and deserialize structured JSON data using json.dump(), json.load(), json.dumps(), and json.loads().",
    whatYouWillLearn: [
      "The built-in json module",
      "dumps() and loads() for string JSON serialization",
      "dump() and load() for file stream JSON serialization",
      "Formatting JSON with indent and sort_keys",
      "Type mapping between Python types and JSON types"
    ],
    explanation: "JSON (JavaScript Object Notation) is the ubiquitous standard data format for web APIs, configurations, and data exchange.\n\nCore JSON Methods:\n- json.dumps(obj): Serializes Python dict/list to a JSON string.\n- json.loads(str): Deserializes JSON string to Python dict/list.\n- json.dump(obj, file): Serializes directly to a file handle.\n- json.load(file): Deserializes directly from a file handle.",
    example: {
      code: "import json\n\nprofile = {\n    \"user_id\": 101,\n    \"name\": \"Tulasi\",\n    \"skills\": [\"Python\", \"FastAPI\"]\n}\n\njson_text = json.dumps(profile, indent=2)\nprint(\"Formatted JSON:\\n\", json_text)\n\nparsed = json.loads(json_text)\nprint(\"Parsed name:\", parsed[\"name\"])",
      output: "Formatted JSON:\n {\n  \"user_id\": 101,\n  \"name\": \"Tulasi\",\n  \"skills\": [\n    \"Python\",\n    \"FastAPI\"\n  ]\n}\nParsed name: Tulasi",
      howItWorks: "Python's True becomes JSON 'true', None becomes 'null', and dict becomes a JSON object."
    },
    commonMistakes: [
      "Confusing load/dump (for file streams) with loads/dumps (for string objects)."
    ],
    practiceQuestions: [
      {
        question: "Convert dictionary data = {'status': 200, 'ok': True} into a JSON string.",
        answer: "import json\ndata = {'status': 200, 'ok': True}\njson_str = json.dumps(data)\nprint(json_str)",
        output: "{\"status\": 200, \"ok\": true}"
      }
    ],
    interviewQuestion: "How do you serialize a Python datetime or custom object using json.dumps?",
    interviewAnswer: "Pass a custom serializer function to the default parameter of json.dumps (e.g. json.dumps(obj, default=str)), or subclass json.JSONEncoder and implement the default() method."
  }
];

writeCleanData("files.js", "files", files);

// ADVANCED (72-77)
const advanced = [
  {
    id: "iterators",
    topicNumber: 72,
    sectionId: "advanced",
    sectionTitle: "Section 12 — Advanced Python",
    title: "Iterators",
    shortDescription: "Understand Python's Iterator Protocol (__iter__ and __next__) and how lazy sequential data processing works.",
    whatYouWillLearn: [
      "The Iterator Protocol: __iter__() and __next__()",
      "Iterable vs Iterator distinction",
      "StopIteration exception signaling end of sequence",
      "Building custom iterator classes"
    ],
    explanation: "In Python, an Iterable is any object capable of returning its members one at a time (e.g. lists, tuples, strings).\n\nAn Iterator is an object that represents a stream of data. It implements two dunder methods:\n1. __iter__(): Returns the iterator object itself.\n2. __next__(): Returns the next item in the sequence. When no items remain, it raises the StopIteration exception.",
    example: {
      code: "class CountDown:\n    def __init__(self, start):\n        self.current = start\n    def __iter__(self):\n        return self\n    def __next__(self):\n        if self.current <= 0:\n            raise StopIteration\n        val = self.current\n        self.current -= 1\n        return val\n\nfor num in CountDown(3):\n    print(num, end=\" \")",
      output: "3 2 1 ",
      howItWorks: "The for loop automatically calls iter(counter) and repeatedly calls next() until StopIteration is caught."
    },
    commonMistakes: [
      "Assuming an iterator can be rewound or reused after exhaustion (once exhausted, you must create a new iterator instance)."
    ],
    practiceQuestions: [
      {
        question: "What built-in exception signals to Python that an iterator has no more elements?",
        answer: "print(\"StopIteration\")",
        output: "StopIteration"
      }
    ],
    interviewQuestion: "What is the key difference between an Iterable and an Iterator?",
    interviewAnswer: "An Iterable is an object with an __iter__() method that returns an Iterator (e.g. list, dict). An Iterator has both __iter__() and a __next__() method that maintains state to yield values one by one."
  },
  {
    id: "generators",
    topicNumber: 73,
    sectionId: "advanced",
    sectionTitle: "Section 12 — Advanced Python",
    title: "Generators",
    shortDescription: "Create memory-efficient iterators using functions containing the yield keyword and generator expressions.",
    whatYouWillLearn: [
      "The yield keyword and lazy state suspension",
      "Generator functions vs regular return functions",
      "Generator expressions (n for n in iterable)",
      "Massive memory savings on large datasets"
    ],
    explanation: "Generators provide an easy way to implement iterators. A generator is written like a regular function, but instead of 'return', it uses the 'yield' keyword.\n\nWhen 'yield' is executed, the function's state is frozen in memory and the yielded value is sent to the caller. When the caller requests the next value, the function resumes execution immediately after the yield statement!",
    example: {
      code: "def fibonacci_sequence(limit):\n    a, b = 0, 1\n    count = 0\n    while count < limit:\n        yield a\n        a, b = b, a + b\n        count += 1\n\nfib = fibonacci_sequence(6)\nprint(\"Fibonacci:\", list(fib))",
      output: "Fibonacci: [0, 1, 1, 2, 3, 5]",
      howItWorks: "Values are generated on demand one at a time, consuming O(1) constant memory regardless of sequence size."
    },
    commonMistakes: [
      "Trying to access generator items by index: gen[0] raises TypeError (generators do not support indexing; use next() or iterate)."
    ],
    practiceQuestions: [
      {
        question: "Write a generator function even_numbers(max_n) that yields even numbers up to max_n.",
        answer: "def even_numbers(max_n):\n    for i in range(0, max_n + 1, 2):\n        yield i\n\nprint(list(even_numbers(6)))",
        output: "[0, 2, 4, 6]"
      }
    ],
    interviewQuestion: "How do generators optimize memory when processing multi-gigabyte log files?",
    interviewAnswer: "Generators stream and process lines one at a time into memory as needed rather than loading the entire multi-gigabyte file into RAM, keeping the process memory footprint constant at only a few kilobytes."
  },
  {
    id: "decorators",
    topicNumber: 74,
    sectionId: "advanced",
    sectionTitle: "Section 12 — Advanced Python",
    title: "Decorators",
    shortDescription: "Wrap and extend functions or methods with higher-order functions using the clean @decorator syntax.",
    whatYouWillLearn: [
      "Higher-order functions taking and returning functions",
      "The @decorator syntactic sugar",
      "Writing wrapper functions with *args and **kwargs",
      "Preserving function metadata with functools.wraps",
      "Real-world use cases: timing, logging, authentication, caching"
    ],
    explanation: "A decorator is a design pattern that allows you to dynamically extend or alter the behavior of a function or method without modifying its actual source code.\n\nIn Python, a decorator is a higher-order function that takes another function as an argument, defines an inner wrapper function that adds behavior, and returns the wrapper.",
    example: {
      code: "import functools, time\n\ndef timer(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.perf_counter()\n        res = func(*args, **kwargs)\n        dur = time.perf_counter() - start\n        print(f\"[{func.__name__}] ran in {dur:.4f}s\")\n        return res\n    return wrapper\n\n@timer\ndef calculate():\n    return sum(range(100000))\n\nprint(\"Result:\", calculate())",
      output: "[calculate] ran in 0.0035s\nResult: 4999950000",
      howItWorks: "@timer wraps calculate() transparently."
    },
    commonMistakes: [
      "Forgetting @functools.wraps(func), which accidentally overwrites the original function's __name__ and __doc__ metadata."
    ],
    practiceQuestions: [
      {
        question: "What decorator from functools should always be applied to custom decorator wrapper functions?",
        answer: "print(\"@functools.wraps(func)\")",
        output: "@functools.wraps(func)"
      }
    ],
    interviewQuestion: "How do you pass arguments to a decorator itself (e.g. @repeat(num_times=3))?",
    interviewAnswer: "You write a decorator factory function that takes the decorator arguments and returns the actual decorator function, resulting in 3 nested function levels (factory -> decorator -> wrapper)."
  },
  {
    id: "context-managers",
    topicNumber: 75,
    sectionId: "advanced",
    sectionTitle: "Section 12 — Advanced Python",
    title: "Context Managers",
    shortDescription: "Manage resource allocation and cleanup using the with statement and __enter__/__exit__ protocol.",
    whatYouWillLearn: [
      "The with statement mechanics",
      "The Context Manager Protocol: __enter__() and __exit__()",
      "Using the contextlib.contextmanager generator decorator",
      "Suppressing and handling exceptions inside __exit__"
    ],
    explanation: "Context managers ensure that resources are properly set up and torn down (such as opening/closing files, database connections, acquiring/releasing thread locks).\n\nThe Protocol:\n1. __enter__(): Prepares the resource and returns the target for the 'as' variable.\n2. __exit__(exc_type, exc_val, exc_tb): Always executes upon leaving the block, handling cleanup and optionally suppressing exceptions.",
    example: {
      code: "from contextlib import contextmanager\n\n@contextmanager\ndef demo_session():\n    print(\"1. Setup session\")\n    try:\n        yield \"Active Session\"\n    finally:\n        print(\"3. Cleanup session\")\n\nwith demo_session() as s:\n    print(\"2. Using:\", s)",
      output: "1. Setup session\n2. Using: Active Session\n3. Cleanup session",
      howItWorks: "The code before yield runs on enter; code after yield in finally is guaranteed to run on exit."
    },
    commonMistakes: [
      "Returning False or nothing from __exit__ when an exception was intentionally handled."
    ],
    practiceQuestions: [
      {
        question: "What two special methods must a class implement to be used as a context manager with the with statement?",
        answer: "print(\"__enter__ and __exit__\")",
        output: "__enter__ and __exit__"
      }
    ],
    interviewQuestion: "How can you suppress a specific exception using Python's contextlib standard library?",
    interviewAnswer: "Use from contextlib import suppress and wrap the block in with suppress(FileNotFoundError):, which cleanly swallows the specified exception."
  },
  {
    id: "type-hints",
    topicNumber: 76,
    sectionId: "advanced",
    sectionTitle: "Section 12 — Advanced Python",
    title: "Type Hints",
    shortDescription: "Add static type annotations to variables, function parameters, and return types for clarity and static analysis.",
    whatYouWillLearn: [
      "Type annotation syntax for variables and functions",
      "Using typing module: Union, Optional, List, Dict, Callable, Any",
      "Modern union syntax (int | str) in Python 3.10+",
      "Static type checking with tools like Mypy and Pyright"
    ],
    explanation: "Python is dynamically typed, but Python 3.5+ introduced optional Type Hints. Type hints do NOT enforce types at runtime, but provide huge benefits:\n- Improved IDE autocomplete and documentation\n- Static bug detection with tools like mypy\n- Clear contracts in team codebases\n\nSyntax:\ndef greet(name: str, age: int) -> str:",
    example: {
      code: "def calculate_discount(price: float, discount: float = 0.10) -> float:\n    return price * (1.0 - discount)\n\nprint(\"Discounted:\", calculate_discount(100.0, 0.20))",
      output: "Discounted: 80.0",
      howItWorks: "Annotations inform developers and typecheckers of intended data types while Python executes at standard dynamic speed."
    },
    commonMistakes: [
      "Assuming Python will raise a runtime TypeError if a type hint is violated."
    ],
    practiceQuestions: [
      {
        question: "Write type hints for a function add(x, y) accepting integers and returning an integer.",
        answer: "def add(x: int, y: int) -> int:\n    return x + y\n\nprint(add(5, 10))",
        output: "15"
      }
    ],
    interviewQuestion: "Do Python type annotations affect runtime performance?",
    interviewAnswer: "No. Type annotations are evaluated once at module definition time and stored in the __annotations__ dictionary, having zero overhead on function execution."
  },
  {
    id: "dataclasses",
    topicNumber: 77,
    sectionId: "advanced",
    sectionTitle: "Section 12 — Advanced Python",
    title: "Dataclasses",
    shortDescription: "Automatically generate boilerplate __init__, __repr__, and __eq__ methods for data-holding classes with @dataclass.",
    whatYouWillLearn: [
      "The @dataclass decorator (Python 3.7+)",
      "Automatic generation of __init__, __repr__, and __eq__",
      "Configuring frozen=True for immutable data structures",
      "Default values and default_factory with field()"
    ],
    explanation: "The @dataclass decorator (introduced in Python 3.7) eliminates tedious boilerplate when creating classes whose primary purpose is to store data.\n\nIt automatically generates:\n- __init__()\n- __repr__() (clean printable representation)\n- __eq__() (value equality comparison)\n- __hash__() (when frozen=True)",
    example: {
      code: "from dataclasses import dataclass\n\n@dataclass(frozen=True)\nclass Course:\n    title: str\n    instructor: str\n    lessons_count: int\n\nc = Course(\"Mastering Python\", \"Tulasi\", 116)\nprint(c)",
      output: "Course(title='Mastering Python', instructor='Tulasi', lessons_count=116)",
      howItWorks: "@dataclass automatically inspects class type annotations and generates constructor and repr code."
    },
    commonMistakes: [
      "Using mutable default arguments like tags: list = [] directly (must use field(default_factory=list))."
    ],
    practiceQuestions: [
      {
        question: "Create a simple @dataclass called Point with x: int and y: int.",
        answer: "from dataclasses import dataclass\n\n@dataclass\nclass Point:\n    x: int\n    y: int\n\np = Point(10, 20)\nprint(p)",
        output: "Point(x=10, y=20)"
      }
    ],
    interviewQuestion: "What is the difference between a @dataclass and a namedtuple?",
    interviewAnswer: "A namedtuple is an immutable subclass of tuple that supports index slicing and unpacking. A @dataclass is a regular Python class that supports type annotations, inheritance, default values, and can be either mutable or immutable."
  }
];

writeCleanData("advanced.js", "advanced", advanced);

// DATABASES (78-83)
const databases = [
  {
    id: "database-basics",
    topicNumber: 78,
    sectionId: "databases",
    sectionTitle: "Section 13 — Databases",
    title: "Database Basics",
    shortDescription: "Understand relational (SQL) and non-relational (NoSQL) databases, tables, schemas, and persistence.",
    whatYouWillLearn: [
      "Relational vs Non-Relational database models",
      "Tables, rows, columns, and primary/foreign keys",
      "The Python DB-API 2.0 standard (PEP 249)",
      "Connecting Python applications to database engines"
    ],
    explanation: "Databases provide structured, persistent storage for application data.\n\nDatabase Categories:\n1. Relational (RDBMS/SQL): SQLite, PostgreSQL, MySQL. Data is organized into structured tables with strict schemas and foreign key relationships.\n2. Non-Relational (NoSQL): MongoDB, Redis. Document or key-value stores for flexible schema models.\n\nPython DB-API 2.0:\nPython standardizes database interaction via PEP 249. Almost every SQL database driver in Python implements the same core methods: connect(), cursor(), execute(), fetchall(), and commit().",
    example: {
      code: "# Standard DB-API pattern in Python\nprint(\"PEP 249 DB-API standardizes database drivers across Python.\")",
      output: "PEP 249 DB-API standardizes database drivers across Python.",
      howItWorks: "DB-API standard provides a unified interface across SQLite, Postgres, MySQL, and Oracle."
    },
    commonMistakes: [
      "Not closing database connections, leading to connection pool exhaustion.",
      "String-concatenating user input into SQL strings (SQL Injection vulnerability)."
    ],
    practiceQuestions: [
      {
        question: "What PEP specifies Python's standard database API?",
        answer: "print(\"PEP 249 - Python Database API Specification v2.0\")",
        output: "PEP 249 - Python Database API Specification v2.0"
      }
    ],
    interviewQuestion: "What is the primary risk of string interpolation in SQL queries and how is it prevented?",
    interviewAnswer: "String interpolation exposes applications to SQL Injection attacks. It is prevented by using parameterized queries (placeholders like ? or %s), where the database engine safely separates query structure from user parameters."
  },
  {
    id: "sqlite",
    topicNumber: 79,
    sectionId: "databases",
    sectionTitle: "Section 13 — Databases",
    title: "SQLite",
    shortDescription: "Work with zero-configuration, serverless, self-contained relational databases using Python's built-in sqlite3 module.",
    whatYouWillLearn: [
      "The built-in sqlite3 module",
      "Creating in-memory or file-backed databases",
      "Executing DDL and DML queries",
      "Using row factories for dictionary-like column access"
    ],
    explanation: "SQLite is a lightweight, serverless database engine built directly into Python. It requires zero setup and stores the entire database in a single file on disk (or in RAM with :memory:).\n\nBest for: Prototyping, desktop software, mobile apps, embedded devices, and lightweight web apps.",
    example: {
      code: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncursor = conn.cursor()\ncursor.execute(\"CREATE TABLE learners (id INT PRIMARY KEY, name TEXT)\")\ncursor.execute(\"INSERT INTO learners VALUES (?, ?)\", (1, \"Tulasi\"))\nconn.commit()\n\ncursor.execute(\"SELECT name FROM learners\")\nprint(\"Learner:\", cursor.fetchone()[0])\nconn.close()",
      output: "Learner: Tulasi",
      howItWorks: "sqlite3 creates tables, executes SQL queries, and commits transactions directly in memory."
    },
    commonMistakes: [
      "Forgetting to call conn.commit() after INSERT or UPDATE operations."
    ],
    practiceQuestions: [
      {
        question: "How do you create an in-memory SQLite database in Python?",
        answer: "import sqlite3\nconn = sqlite3.connect(\":memory:\")\nprint(\"Connected to in-memory SQLite\")\nconn.close()",
        output: "Connected to in-memory SQLite"
      }
    ],
    interviewQuestion: "What happens if you do not call connection.commit() in Python sqlite3?",
    interviewAnswer: "Modifications (INSERT, UPDATE, DELETE) exist only within the current transaction buffer and will be discarded (rolled back) when the connection closes."
  },
  {
    id: "postgresql",
    topicNumber: 80,
    sectionId: "databases",
    sectionTitle: "Section 13 — Databases",
    title: "PostgreSQL",
    shortDescription: "Connect Python to robust production PostgreSQL databases using drivers like psycopg (psycopg3) and asyncpg.",
    whatYouWillLearn: [
      "Why PostgreSQL is the top choice for production web apps",
      "Connecting with psycopg3 and psycopg2",
      "Connection pooling and performance",
      "Working with JSONB columns and advanced Postgres features"
    ],
    explanation: "PostgreSQL is an enterprise-grade, open-source object-relational database renowned for reliability, SQL compliance, ACID guarantees, and JSONB capabilities.\n\nConnecting in Python:\nUse the modern psycopg (psycopg3) or asyncpg driver:\nimport psycopg\nconn = psycopg.connect(\"postgresql://user:pass@localhost:5432/mydb\")",
    example: {
      code: "print(\"psycopg connects Python directly to enterprise PostgreSQL.\")",
      output: "psycopg connects Python directly to enterprise PostgreSQL.",
      howItWorks: "psycopg manages socket communication, binary protocol encoding, and connection pools with Postgres."
    },
    commonMistakes: [
      "Hardcoding database passwords in plaintext instead of using environment variables."
    ],
    practiceQuestions: [
      {
        question: "What is the recommended modern PostgreSQL driver for Python 3?",
        answer: "print(\"psycopg (version 3) or asyncpg\")",
        output: "psycopg (version 3) or asyncpg"
      }
    ],
    interviewQuestion: "Why is PostgreSQL preferred over MySQL in many Python and Data Science projects?",
    interviewAnswer: "Postgres provides superior support for native JSONB indexing, rich procedural extensions (PostGIS, pgvector for AI embeddings), strong standard SQL compliance, and advanced concurrency controls (MVCC)."
  },
  {
    id: "mysql",
    topicNumber: 81,
    sectionId: "databases",
    sectionTitle: "Section 13 — Databases",
    title: "MySQL",
    shortDescription: "Connect Python applications to MySQL and MariaDB servers using mysql-connector-python and PyMySQL.",
    whatYouWillLearn: [
      "Connecting to MySQL with PyMySQL / mysql-connector",
      "Executing transactions with auto-commit options",
      "Managing connection pools in high-traffic applications",
      "Differences between MySQL and PostgreSQL"
    ],
    explanation: "MySQL is one of the world's most widely deployed relational database systems, powering millions of web applications.\n\nPython Drivers:\n- mysql-connector-python: Official Oracle driver.\n- PyMySQL: Pure Python implementation (easy to install without C compilers).",
    example: {
      code: "print(\"PyMySQL provides a pure-Python interface to MySQL.\")",
      output: "PyMySQL provides a pure-Python interface to MySQL.",
      howItWorks: "The driver communicates over TCP port 3306 adhering to PEP 249 standard methods."
    },
    commonMistakes: [
      "Forgetting to install the driver via pip install pymysql."
    ],
    practiceQuestions: [
      {
        question: "Name two common Python libraries for interacting with MySQL.",
        answer: "print(\"PyMySQL and mysql-connector-python\")",
        output: "PyMySQL and mysql-connector-python"
      }
    ],
    interviewQuestion: "What is connection pooling and why is it critical in database-backed applications?",
    interviewAnswer: "Creating database TCP handshakes and authenticating connections is expensive. A connection pool maintains a set of pre-warmed open connections that can be borrowed and returned quickly by concurrent requests."
  },
  {
    id: "crud-operations",
    topicNumber: 82,
    sectionId: "databases",
    sectionTitle: "Section 13 — Databases",
    title: "CRUD Operations",
    shortDescription: "Master Create, Read, Update, and Delete data lifecycle operations safely with SQL and Python.",
    whatYouWillLearn: [
      "Create (INSERT INTO)",
      "Read (SELECT ... WHERE)",
      "Update (UPDATE ... SET ... WHERE)",
      "Delete (DELETE FROM ... WHERE)",
      "Parameterized query safety"
    ],
    explanation: "CRUD represents the four fundamental operations performed on persistent storage:\n1. CREATE: INSERT INTO table (col) VALUES (?)\n2. READ: SELECT col FROM table WHERE condition\n3. UPDATE: UPDATE table SET col = ? WHERE id = ?\n4. DELETE: DELETE FROM table WHERE id = ?\n\nCRITICAL: Always use a WHERE clause on UPDATE and DELETE to avoid modifying or deleting every single row in the table!",
    example: {
      code: "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE items (id INT, title TEXT)\")\ncur.execute(\"INSERT INTO items VALUES (?, ?)\", (1, \"Keyboard\"))\nconn.commit()\n\ncur.execute(\"SELECT * FROM items\")\nprint(\"Read rows:\", cur.fetchall())\nconn.close()",
      output: "Read rows: [(1, 'Keyboard')]",
      howItWorks: "All 4 basic operations execute sequentially within transactions on the database."
    },
    commonMistakes: [
      "Executing DELETE FROM table without a WHERE clause."
    ],
    practiceQuestions: [
      {
        question: "What does the 'C-R-U-D' acronym stand for?",
        answer: "print(\"Create, Read, Update, Delete\")",
        output: "Create, Read, Update, Delete"
      }
    ],
    interviewQuestion: "What is ACID in database systems and why does it matter?",
    interviewAnswer: "ACID stands for Atomicity (all-or-nothing), Consistency (rules enforced), Isolation (concurrent safety), and Durability (committed data survives crashes). It guarantees reliable transaction processing."
  },
  {
    id: "sqlalchemy",
    topicNumber: 83,
    sectionId: "databases",
    sectionTitle: "Section 13 — Databases",
    title: "SQLAlchemy",
    shortDescription: "Harness Python's most popular Object Relational Mapper (ORM) and SQL toolkit for database abstraction.",
    whatYouWillLearn: [
      "SQLAlchemy Core vs SQLAlchemy ORM",
      "Defining models with mapped classes and DeclarativeBase",
      "Managing sessions and unit of work with Session",
      "Writing type-safe queries without raw SQL strings"
    ],
    explanation: "SQLAlchemy is the gold standard Python SQL toolkit and Object Relational Mapper (ORM).\n\nKey Advantages:\n- Maps Python classes directly to database tables.\n- Eliminates raw SQL syntax differences across SQLite, PostgreSQL, and MySQL.\n- Unit of Work pattern automatically tracks object modifications and commits minimal changes.",
    example: {
      code: "print(\"SQLAlchemy ORM maps Python objects to relational tables.\")",
      output: "SQLAlchemy ORM maps Python objects to relational tables.",
      howItWorks: "SQLAlchemy translates Python object operations into optimized dialect-specific SQL queries."
    },
    commonMistakes: [
      "The N+1 query problem (fixed with joinedload() / selectinload())."
    ],
    practiceQuestions: [
      {
        question: "What does an ORM (Object Relational Mapper) do?",
        answer: "print(\"Object-to-table abstraction\")",
        output: "Object-to-table abstraction"
      }
    ],
    interviewQuestion: "What is the N+1 query problem in ORMs and how do you resolve it in SQLAlchemy?",
    interviewAnswer: "The N+1 problem occurs when querying N child records triggers N individual SQL queries rather than 1 batch query. In SQLAlchemy, it is resolved using eager loading techniques like joinedload() or selectinload()."
  }
];

writeCleanData("databases.js", "databases", databases);
