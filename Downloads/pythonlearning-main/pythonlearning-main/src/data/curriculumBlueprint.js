// Comprehensive 19-Section / 198-Topic Python Curriculum Blueprint
export const CURRICULUM_BLUEPRINT = [
  // SECTION 1 — PYTHON BASICS (21 topics)
  {
    sectionId: "python-basics",
    sectionNumber: 1,
    sectionTitle: "Section 1 — Python Basics",
    icon: "Code2",
    topics: [
      { id: "what-is-python", num: 1, title: "What is Python?", concept: "what_is_python" },
      { id: "why-learn-python", num: 2, title: "Why Learn Python?", concept: "why_learn_python" },
      { id: "where-python-is-used", num: 3, title: "Where Python is Used", concept: "where_python_used" },
      { id: "installing-python", num: 4, title: "Installing Python", concept: "installing_python" },
      { id: "python-idle-editor", num: 5, title: "Python IDLE / Code Editor", concept: "python_idle_editor" },
      { id: "first-python-program", num: 6, title: "First Python Program", concept: "first_program" },
      { id: "python-syntax", num: 7, title: "Python Syntax", concept: "python_syntax" },
      { id: "print-function", num: 8, title: "print()", concept: "print_func" },
      { id: "comments", num: 9, title: "Comments", concept: "comments" },
      { id: "variables", num: 10, title: "Variables", concept: "variables" },
      { id: "constants", num: 11, title: "Constants", concept: "constants" },
      { id: "naming-variables", num: 12, title: "Naming Variables", concept: "naming_variables" },
      { id: "data-types", num: 13, title: "Data Types", concept: "data_types" },
      { id: "type-int", num: 14, title: "int", concept: "type_int" },
      { id: "type-float", num: 15, title: "float", concept: "type_float" },
      { id: "type-string", num: 16, title: "string", concept: "type_string" },
      { id: "type-boolean", num: 17, title: "boolean", concept: "type_boolean" },
      { id: "type-function", num: 18, title: "type()", concept: "type_func" },
      { id: "type-conversion", num: 19, title: "Type Conversion", concept: "type_conversion" },
      { id: "input-function", num: 20, title: "input()", concept: "input_func" },
      { id: "output-formatting", num: 21, title: "Output Formatting", concept: "output_formatting" }
    ]
  },

  // SECTION 2 — OPERATORS (7 topics)
  {
    sectionId: "operators",
    sectionNumber: 2,
    sectionTitle: "Section 2 — Operators",
    icon: "Binary",
    topics: [
      { id: "arithmetic-operators", num: 22, title: "Arithmetic Operators", concept: "arithmetic_operators" },
      { id: "assignment-operators", num: 23, title: "Assignment Operators", concept: "assignment_operators" },
      { id: "comparison-operators", num: 24, title: "Comparison Operators", concept: "comparison_operators" },
      { id: "logical-operators", num: 25, title: "Logical Operators", concept: "logical_operators" },
      { id: "membership-operators", num: 26, title: "Membership Operators", concept: "membership_operators" },
      { id: "identity-operators", num: 27, title: "Identity Operators", concept: "identity_operators" },
      { id: "operator-precedence", num: 28, title: "Operator Precedence", concept: "operator_precedence" }
    ]
  },

  // SECTION 3 — CONDITIONS (7 topics)
  {
    sectionId: "conditions",
    sectionNumber: 3,
    sectionTitle: "Section 3 — Conditions",
    icon: "Split",
    topics: [
      { id: "what-is-decision-making", num: 29, title: "What is Decision Making?", concept: "decision_making" },
      { id: "if-statement", num: 30, title: "if", concept: "if_statement" },
      { id: "if-else-statement", num: 31, title: "if else", concept: "if_else_statement" },
      { id: "if-elif-else-statement", num: 32, title: "if elif else", concept: "if_elif_else_statement" },
      { id: "nested-if", num: 33, title: "Nested if", concept: "nested_if" },
      { id: "multiple-conditions", num: 34, title: "Multiple Conditions", concept: "multiple_conditions" },
      { id: "conditional-expression", num: 35, title: "Conditional Expression", concept: "conditional_expression" }
    ]
  },

  // SECTION 4 — LOOPS (10 topics)
  {
    sectionId: "loops",
    sectionNumber: 4,
    sectionTitle: "Section 4 — Loops",
    icon: "Repeat",
    topics: [
      { id: "what-is-a-loop", num: 36, title: "What is a Loop?", concept: "what_is_loop" },
      { id: "for-loop", num: 37, title: "for Loop", concept: "for_loop" },
      { id: "while-loop", num: 38, title: "while Loop", concept: "while_loop" },
      { id: "range-function", num: 39, title: "range()", concept: "range_function" },
      { id: "break-statement", num: 40, title: "break", concept: "break_statement" },
      { id: "continue-statement", num: 41, title: "continue", concept: "continue_statement" },
      { id: "pass-statement", num: 42, title: "pass", concept: "pass_statement" },
      { id: "nested-loops", num: 43, title: "Nested Loops", concept: "nested_loops" },
      { id: "loop-with-strings", num: 44, title: "Loop with Strings", concept: "loop_with_strings" },
      { id: "loop-with-lists", num: 45, title: "Loop with Lists", concept: "loop_with_lists" }
    ]
  },

  // SECTION 5 — STRINGS (14 topics)
  {
    sectionId: "strings",
    sectionNumber: 5,
    sectionTitle: "Section 5 — Strings",
    icon: "Type",
    topics: [
      { id: "what-is-a-string", num: 46, title: "What is a String?", concept: "what_is_string" },
      { id: "creating-strings", num: 47, title: "Creating Strings", concept: "creating_strings" },
      { id: "string-indexing", num: 48, title: "String Indexing", concept: "string_indexing" },
      { id: "string-slicing", num: 49, title: "String Slicing", concept: "string_slicing" },
      { id: "string-length", num: 50, title: "String Length", concept: "string_length" },
      { id: "string-methods", num: 51, title: "String Methods", concept: "string_methods" },
      { id: "upper-method", num: 52, title: "upper()", concept: "upper_method" },
      { id: "lower-method", num: 53, title: "lower()", concept: "lower_method" },
      { id: "strip-method", num: 54, title: "strip()", concept: "strip_method" },
      { id: "replace-method", num: 55, title: "replace()", concept: "replace_method" },
      { id: "split-method", num: 56, title: "split()", concept: "split_method" },
      { id: "join-method", num: 57, title: "join()", concept: "join_method" },
      { id: "string-formatting", num: 58, title: "String Formatting", concept: "string_formatting" },
      { id: "f-strings", num: 59, title: "f-strings", concept: "f_strings" }
    ]
  },

  // SECTION 6 — LISTS (10 topics)
  {
    sectionId: "lists",
    sectionNumber: 6,
    sectionTitle: "Section 6 — Lists",
    icon: "Layers",
    topics: [
      { id: "what-is-a-list", num: 60, title: "What is a List?", concept: "what_is_list" },
      { id: "creating-lists", num: 61, title: "Creating Lists", concept: "creating_lists" },
      { id: "accessing-list-items", num: 62, title: "Accessing List Items", concept: "accessing_list_items" },
      { id: "changing-list-items", num: 63, title: "Changing List Items", concept: "changing_list_items" },
      { id: "adding-items-to-list", num: 64, title: "Adding Items", concept: "adding_list_items" },
      { id: "removing-items-from-list", num: 65, title: "Removing Items", concept: "removing_list_items" },
      { id: "list-methods", num: 66, title: "List Methods", concept: "list_methods" },
      { id: "list-slicing", num: 67, title: "List Slicing", concept: "list_slicing" },
      { id: "looping-through-lists", num: 68, title: "Looping Through Lists", concept: "looping_lists" },
      { id: "list-comprehension", num: 69, title: "List Comprehension", concept: "list_comprehension" }
    ]
  },

  // SECTION 7 — TUPLES, SETS AND DICTIONARIES (11 topics)
  {
    sectionId: "tuples-sets-dicts",
    sectionNumber: 7,
    sectionTitle: "Section 7 — Tuples, Sets and Dictionaries",
    icon: "Boxes",
    topics: [
      { id: "what-is-a-tuple", num: 70, title: "What is a Tuple?", concept: "what_is_tuple" },
      { id: "tuple-operations", num: 71, title: "Tuple Operations", concept: "tuple_operations" },
      { id: "what-is-a-set", num: 72, title: "What is a Set?", concept: "what_is_set" },
      { id: "set-operations", num: 73, title: "Set Operations", concept: "set_operations" },
      { id: "what-is-a-dictionary", num: 74, title: "What is a Dictionary?", concept: "what_is_dict" },
      { id: "dictionary-keys-values", num: 75, title: "Dictionary Keys and Values", concept: "dict_keys_values" },
      { id: "adding-dictionary-items", num: 76, title: "Adding Dictionary Items", concept: "adding_dict_items" },
      { id: "updating-dictionary-items", num: 77, title: "Updating Dictionary Items", concept: "updating_dict_items" },
      { id: "removing-dictionary-items", num: 78, title: "Removing Dictionary Items", concept: "removing_dict_items" },
      { id: "looping-through-dictionary", num: 79, title: "Looping Through Dictionary", concept: "looping_dict" },
      { id: "dictionary-comprehension", num: 80, title: "Dictionary Comprehension", concept: "dict_comprehension" }
    ]
  },

  // SECTION 8 — FUNCTIONS (15 topics)
  {
    sectionId: "functions",
    sectionNumber: 8,
    sectionTitle: "Section 8 — Functions",
    icon: "Boxes",
    topics: [
      { id: "what-is-a-function", num: 81, title: "What is a Function?", concept: "what_is_function" },
      { id: "creating-a-function", num: 82, title: "Creating a Function", concept: "creating_function" },
      { id: "calling-a-function", num: 83, title: "Calling a Function", concept: "calling_function" },
      { id: "parameters", num: 84, title: "Parameters", concept: "parameters" },
      { id: "arguments", num: 85, title: "Arguments", concept: "arguments" },
      { id: "return-statement", num: 86, title: "return", concept: "return_statement" },
      { id: "default-arguments", num: 87, title: "Default Arguments", concept: "default_arguments" },
      { id: "keyword-arguments", num: 88, title: "Keyword Arguments", concept: "keyword_arguments" },
      { id: "args", num: 89, title: "*args", concept: "args_varargs" },
      { id: "kwargs", num: 90, title: "**kwargs", concept: "kwargs_varargs" },
      { id: "lambda-functions", num: 91, title: "Lambda Functions", concept: "lambda_functions" },
      { id: "recursion", num: 92, title: "Recursion", concept: "recursion" },
      { id: "scope", num: 93, title: "Scope", concept: "scope" },
      { id: "local-variables", num: 94, title: "Local Variables", concept: "local_variables" },
      { id: "global-variables", num: 95, title: "Global Variables", concept: "global_variables" }
    ]
  },

  // SECTION 9 — MODULES AND PACKAGES (7 topics)
  {
    sectionId: "modules",
    sectionNumber: 9,
    sectionTitle: "Section 9 — Modules and Packages",
    icon: "PackageCheck",
    topics: [
      { id: "what-is-a-module", num: 96, title: "What is a Module?", concept: "what_is_module" },
      { id: "import-statement", num: 97, title: "import", concept: "import_statement" },
      { id: "from-import", num: 98, title: "from import", concept: "from_import" },
      { id: "creating-your-own-module", num: 99, title: "Creating Your Own Module", concept: "create_module" },
      { id: "packages", num: 100, title: "Packages", concept: "packages" },
      { id: "pip", num: 101, title: "pip", concept: "pip_manager" },
      { id: "python-standard-library", num: 102, title: "Python Standard Library", concept: "standard_library" }
    ]
  },

  // SECTION 10 — ERROR HANDLING (11 topics)
  {
    sectionId: "exceptions",
    sectionNumber: 10,
    sectionTitle: "Section 10 — Error Handling",
    icon: "AlertTriangle",
    topics: [
      { id: "what-is-an-error", num: 103, title: "What is an Error?", concept: "what_is_error" },
      { id: "syntax-error", num: 104, title: "Syntax Error", concept: "syntax_error" },
      { id: "runtime-error", num: 105, title: "Runtime Error", concept: "runtime_error" },
      { id: "logical-error", num: 106, title: "Logical Error", concept: "logical_error" },
      { id: "exceptions", num: 107, title: "Exceptions", concept: "exceptions_concept" },
      { id: "try-block", num: 108, title: "try", concept: "try_block" },
      { id: "except-block", num: 109, title: "except", concept: "except_block" },
      { id: "else-in-try", num: 110, title: "else", concept: "else_block_error" },
      { id: "finally-block", num: 111, title: "finally", concept: "finally_block" },
      { id: "raise-statement", num: 112, title: "raise", concept: "raise_statement" },
      { id: "custom-exceptions", num: 113, title: "Custom Exceptions", concept: "custom_exceptions" }
    ]
  },

  // SECTION 11 — OOP (12 topics)
  {
    sectionId: "oop",
    sectionNumber: 11,
    sectionTitle: "Section 11 — OOP",
    icon: "Cpu",
    topics: [
      { id: "what-is-oop", num: 114, title: "What is OOP?", concept: "what_is_oop" },
      { id: "class", num: 115, title: "Class", concept: "class_concept" },
      { id: "object", num: 116, title: "Object", concept: "object_concept" },
      { id: "init-constructor", num: 117, title: "__init__", concept: "init_constructor" },
      { id: "instance-variables", num: 118, title: "Instance Variables", concept: "instance_variables" },
      { id: "class-variables", num: 119, title: "Class Variables", concept: "class_variables" },
      { id: "methods", num: 120, title: "Methods", concept: "methods_concept" },
      { id: "inheritance", num: 121, title: "Inheritance", concept: "inheritance" },
      { id: "multiple-inheritance", num: 122, title: "Multiple Inheritance", concept: "multiple_inheritance" },
      { id: "polymorphism", num: 123, title: "Polymorphism", concept: "polymorphism" },
      { id: "encapsulation", num: 124, title: "Encapsulation", concept: "encapsulation" },
      { id: "abstraction", num: 125, title: "Abstraction", concept: "abstraction" }
    ]
  },

  // SECTION 12 — FILE HANDLING (8 topics)
  {
    sectionId: "files",
    sectionNumber: 12,
    sectionTitle: "Section 12 — File Handling",
    icon: "FileText",
    topics: [
      { id: "what-is-file-handling", num: 126, title: "What is File Handling?", concept: "what_is_file_handling" },
      { id: "opening-a-file", num: 127, title: "Opening a File", concept: "opening_file" },
      { id: "reading-a-file", num: 128, title: "Reading a File", concept: "reading_file" },
      { id: "writing-a-file", num: 129, title: "Writing a File", concept: "writing_file" },
      { id: "appending-files", num: 130, title: "Appending", concept: "appending_file" },
      { id: "with-open", num: 131, title: "with open()", concept: "with_open" },
      { id: "csv-files", num: 132, title: "CSV Files", concept: "csv_files" },
      { id: "json-files", num: 133, title: "JSON Files", concept: "json_files" }
    ]
  },

  // SECTION 13 — ADVANCED PYTHON (7 topics)
  {
    sectionId: "advanced",
    sectionNumber: 13,
    sectionTitle: "Section 13 — Advanced Python",
    icon: "Zap",
    topics: [
      { id: "iterators", num: 134, title: "Iterators", concept: "iterators" },
      { id: "generators", num: 135, title: "Generators", concept: "generators" },
      { id: "yield-keyword", num: 136, title: "yield", concept: "yield_keyword" },
      { id: "decorators", num: 137, title: "Decorators", concept: "decorators" },
      { id: "context-managers", num: 138, title: "Context Managers", concept: "context_managers" },
      { id: "type-hints", num: 139, title: "Type Hints", concept: "type_hints" },
      { id: "dataclasses", num: 140, title: "Dataclasses", concept: "dataclasses" }
    ]
  },

  // SECTION 14 — DATABASES (9 topics)
  {
    sectionId: "databases",
    sectionNumber: 14,
    sectionTitle: "Section 14 — Databases",
    icon: "Database",
    topics: [
      { id: "what-is-a-database", num: 141, title: "What is a Database?", concept: "what_is_database" },
      { id: "sqlite", num: 142, title: "SQLite", concept: "sqlite" },
      { id: "postgresql", num: 143, title: "PostgreSQL", concept: "postgresql" },
      { id: "mysql", num: 144, title: "MySQL", concept: "mysql" },
      { id: "tables", num: 145, title: "Tables", concept: "database_tables" },
      { id: "records", num: 146, title: "Records", concept: "database_records" },
      { id: "crud-operations", num: 147, title: "CRUD", concept: "crud_operations" },
      { id: "sql-from-python", num: 148, title: "SQL from Python", concept: "sql_from_python" },
      { id: "sqlalchemy", num: 149, title: "SQLAlchemy", concept: "sqlalchemy" }
    ]
  },

  // SECTION 15 — APIs (11 topics)
  {
    sectionId: "apis",
    sectionNumber: 15,
    sectionTitle: "Section 15 — APIs",
    icon: "Globe",
    topics: [
      { id: "what-is-an-api", num: 150, title: "What is an API?", concept: "what_is_api" },
      { id: "client-and-server", num: 151, title: "Client and Server", concept: "client_server" },
      { id: "http-protocol", num: 152, title: "HTTP", concept: "http_protocol" },
      { id: "http-get", num: 153, title: "GET", concept: "http_get" },
      { id: "http-post", num: 154, title: "POST", concept: "http_post" },
      { id: "http-put", num: 155, title: "PUT", concept: "http_put" },
      { id: "http-delete", num: 156, title: "DELETE", concept: "http_delete" },
      { id: "rest-api", num: 157, title: "REST API", concept: "rest_api" },
      { id: "json-format", num: 158, title: "JSON", concept: "json_format" },
      { id: "requests-library", num: 159, title: "requests library", concept: "requests_library" },
      { id: "using-apis-from-python", num: 160, title: "Using APIs from Python", concept: "using_apis_python" }
    ]
  },

  // SECTION 16 — WEB DEVELOPMENT (8 topics)
  {
    sectionId: "web-development",
    sectionNumber: 16,
    sectionTitle: "Section 16 — Web Development",
    icon: "Layout",
    topics: [
      { id: "what-is-web-development", num: 161, title: "What is Web Development?", concept: "what_is_web_dev" },
      { id: "flask", num: 162, title: "Flask", concept: "flask_basics" },
      { id: "flask-routes", num: 163, title: "Flask Routes", concept: "flask_routes" },
      { id: "flask-api", num: 164, title: "Flask API", concept: "flask_api" },
      { id: "fastapi", num: 165, title: "FastAPI", concept: "fastapi_basics" },
      { id: "fastapi-routes", num: 166, title: "FastAPI Routes", concept: "fastapi_routes" },
      { id: "django", num: 167, title: "Django", concept: "django_basics" },
      { id: "django-basics", num: 168, title: "Django Basics", concept: "django_architecture" }
    ]
  },

  // SECTION 17 — DATA ANALYSIS (9 topics)
  {
    sectionId: "data-analysis",
    sectionNumber: 17,
    sectionTitle: "Section 17 — Data Analysis",
    icon: "BarChart3",
    topics: [
      { id: "what-is-data-analysis", num: 169, title: "What is Data Analysis?", concept: "what_is_data_analysis" },
      { id: "numpy", num: 170, title: "NumPy", concept: "numpy_basics" },
      { id: "numpy-arrays", num: 171, title: "NumPy Arrays", concept: "numpy_arrays" },
      { id: "pandas", num: 172, title: "Pandas", concept: "pandas_basics" },
      { id: "dataframes", num: 173, title: "DataFrames", concept: "dataframes" },
      { id: "reading-csv-with-pandas", num: 174, title: "Reading CSV with Pandas", concept: "read_csv_pandas" },
      { id: "data-cleaning", num: 175, title: "Data Cleaning", concept: "data_cleaning" },
      { id: "matplotlib", num: 176, title: "Matplotlib", concept: "matplotlib_basics" },
      { id: "data-visualization", num: 177, title: "Data Visualization", concept: "data_visualization" }
    ]
  },

  // SECTION 18 — MACHINE LEARNING (11 topics)
  {
    sectionId: "machine-learning",
    sectionNumber: 18,
    sectionTitle: "Section 18 — Machine Learning",
    icon: "Brain",
    topics: [
      { id: "what-is-machine-learning", num: 178, title: "What is Machine Learning?", concept: "what_is_ml" },
      { id: "ai-vs-ml", num: 179, title: "AI vs ML", concept: "ai_vs_ml" },
      { id: "supervised-learning", num: 180, title: "Supervised Learning", concept: "supervised_learning" },
      { id: "unsupervised-learning", num: 181, title: "Unsupervised Learning", concept: "unsupervised_learning" },
      { id: "regression", num: 182, title: "Regression", concept: "regression" },
      { id: "classification", num: 183, title: "Classification", concept: "classification" },
      { id: "clustering", num: 184, title: "Clustering", concept: "clustering" },
      { id: "training-data", num: 185, title: "Training Data", concept: "training_data" },
      { id: "testing-data", num: 186, title: "Testing Data", concept: "testing_data" },
      { id: "model-evaluation", num: 187, title: "Model Evaluation", concept: "model_evaluation" },
      { id: "scikit-learn", num: 188, title: "scikit-learn", concept: "scikit_learn" }
    ]
  },

  // SECTION 19 — AI (10 topics)
  {
    sectionId: "ai",
    sectionNumber: 19,
    sectionTitle: "Section 19 — AI",
    icon: "Sparkles",
    topics: [
      { id: "what-is-ai", num: 189, title: "What is AI?", concept: "what_is_ai" },
      { id: "generative-ai", num: 190, title: "Generative AI", concept: "generative_ai" },
      { id: "large-language-models", num: 191, title: "Large Language Models", concept: "large_language_models" },
      { id: "prompt-engineering", num: 192, title: "Prompt Engineering", concept: "prompt_engineering" },
      { id: "ai-apis", num: 193, title: "AI APIs", concept: "ai_apis" },
      { id: "embeddings", num: 194, title: "Embeddings", concept: "embeddings" },
      { id: "vector-databases", num: 195, title: "Vector Databases", concept: "vector_databases" },
      { id: "rag", num: 196, title: "RAG", concept: "rag_concept" },
      { id: "ai-chatbots", num: 197, title: "AI Chatbots", concept: "ai_chatbots" },
      { id: "building-ai-applications", num: 198, title: "Building AI Applications with Python", concept: "building_ai_apps" }
    ]
  }
];
