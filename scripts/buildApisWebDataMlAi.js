import { writeCleanData } from './dataWriter.js';

// APIS (84-92)
const apis = [
  {
    id: "what-is-an-api",
    topicNumber: 84,
    sectionId: "apis",
    sectionTitle: "Section 14 — APIs",
    title: "What is an API?",
    shortDescription: "Understand Application Programming Interfaces as digital contracts enabling software systems to communicate and exchange data.",
    whatYouWillLearn: [
      "The definition and role of an API",
      "Client-Server architecture model",
      "Types of APIs: Web APIs, Library APIs, OS APIs",
      "Why APIs drive modern interconnected applications"
    ],
    explanation: "An API (Application Programming Interface) is a formal set of rules, protocols, and tools that allows different software applications to communicate with each other.\n\nAnalogy:\nThink of an API like a waiter in a restaurant. You (the client) sit at the table with the menu. You give your order to the waiter (the API), who takes it to the kitchen (the server/database) and brings your food (the response) back to you.",
    example: {
      code: "sample_response = {\n    \"city\": \"London\",\n    \"temp_c\": 18.5,\n    \"condition\": \"Partly Cloudy\"\n}\nprint(f\"Weather in {sample_response['city']}: {sample_response['temp_c']}°C\")",
      output: "Weather in London: 18.5°C",
      howItWorks: "The client makes a request to the endpoint, and the server returns structured JSON data."
    },
    commonMistakes: [
      "Confusing an API with a user interface (APIs are designed for machine-to-machine data exchange)."
    ],
    practiceQuestions: [
      {
        question: "What does the API acronym stand for?",
        answer: "print(\"Application Programming Interface\")",
        output: "Application Programming Interface"
      }
    ],
    interviewQuestion: "What is the difference between an API and an SDK?",
    interviewAnswer: "An API is the specification and endpoint interface for communicating with a service over the network. An SDK (Software Development Kit) is a package of libraries, tools, and code wrappers that developers install to interact with that API conveniently."
  },
  {
    id: "http-protocol",
    topicNumber: 85,
    sectionId: "apis",
    sectionTitle: "Section 14 — APIs",
    title: "HTTP Protocol",
    shortDescription: "Explore the foundation of data communication on the World Wide Web: URLs, Headers, Status Codes, and Payloads.",
    whatYouWillLearn: [
      "How HTTP (HyperText Transfer Protocol) works",
      "HTTP Request structure (Method, URL, Headers, Body)",
      "HTTP Response structure (Status Code, Headers, Body)",
      "HTTP Status Code families (2xx, 3xx, 4xx, 5xx)"
    ],
    explanation: "HTTP is a stateless, application-layer request-response protocol powering the internet.\n\nKey Status Code Families:\n- 2xx (Success): 200 OK, 201 Created, 204 No Content\n- 3xx (Redirection): 301 Moved Permanently, 302 Found\n- 4xx (Client Error): 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found\n- 5xx (Server Error): 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable",
    example: {
      code: "status_codes = {\n    200: \"OK\",\n    201: \"Created\",\n    404: \"Not Found\",\n    500: \"Server Error\"\n}\nfor code, desc in status_codes.items():\n    print(f\"HTTP {code}: {desc}\")",
      output: "HTTP 200: OK\nHTTP 201: Created\nHTTP 404: Not Found\nHTTP 500: Server Error",
      howItWorks: "HTTP status codes standardize communication between client and server across all platforms."
    },
    commonMistakes: [
      "Returning a 200 OK status code when the response payload actually contains an error message."
    ],
    practiceQuestions: [
      {
        question: "Which HTTP status code indicates a resource was successfully created?",
        answer: "print(\"201 Created\")",
        output: "201 Created"
      }
    ],
    interviewQuestion: "What does it mean that HTTP is a 'stateless' protocol?",
    interviewAnswer: "Each HTTP request is executed independently in isolation; the server does not retain session memory between distinct requests unless state is explicitly passed via cookies, headers, or tokens."
  },
  {
    id: "http-get-method",
    topicNumber: 86,
    sectionId: "apis",
    sectionTitle: "Section 14 — APIs",
    title: "GET Method",
    shortDescription: "Retrieve representations of resources from servers safely and idempotently without modifying state.",
    whatYouWillLearn: [
      "The role of HTTP GET",
      "Idempotency and safety characteristics",
      "Passing query parameters in URLs (?search=python&page=2)",
      "Caching GET responses"
    ],
    explanation: "The HTTP GET method requests data from a specified resource.\n\nProperties:\n1. Safe: Does not modify the server state.\n2. Idempotent: Making multiple identical GET requests produces the same result without side effects.\n3. Query Parameters: Data is appended to the URL query string (e.g. ?limit=10&offset=0).",
    example: {
      code: "print(\"GET requests fetch resource state without modifying server data.\")",
      output: "GET requests fetch resource state without modifying server data.",
      howItWorks: "GET requests have no payload body; all parameters travel via the URL path and query string."
    },
    commonMistakes: [
      "Using GET to trigger data mutations or deletions."
    ],
    practiceQuestions: [
      {
        question: "Should sensitive credentials like passwords ever be passed in a GET query string?",
        answer: "print(\"No - passwords in URLs appear in browser history and server access logs.\")",
        output: "No - passwords in URLs appear in browser history and server access logs."
      }
    ],
    interviewQuestion: "What does it mean for an HTTP method to be 'idempotent'?",
    interviewAnswer: "An HTTP method is idempotent if making the same request multiple times in succession produces the exact same server state as making it once (e.g. GET, PUT, DELETE)."
  },
  {
    id: "http-post-method",
    topicNumber: 87,
    sectionId: "apis",
    sectionTitle: "Section 14 — APIs",
    title: "POST Method",
    shortDescription: "Submit data to the server to create new resources or trigger processing actions.",
    whatYouWillLearn: [
      "The role of HTTP POST",
      "Sending request bodies (JSON, form-urlencoded)",
      "Why POST is non-idempotent (creates duplicate items if repeated)",
      "Returning HTTP 201 Created and Location headers"
    ],
    explanation: "The HTTP POST method submits an entity to the specified resource, often causing a change in state or side effects on the server (e.g., creating a new user, submitting a payment, posting a comment).\n\nPOST is non-idempotent: sending the same POST request twice will typically create two separate resources.",
    example: {
      code: "payload = {\"title\": \"Learn Python\", \"completed\": False}\nprint(\"POST payload prepared:\", payload)",
      output: "POST payload prepared: {'title': 'Learn Python', 'completed': False}",
      howItWorks: "Data travels in the request body, protected by TLS/HTTPS encryption."
    },
    commonMistakes: [
      "Forgetting to set Content-Type: application/json header when sending JSON in the request body."
    ],
    practiceQuestions: [
      {
        question: "Is HTTP POST considered idempotent?",
        answer: "print(\"No, POST is not idempotent because repeating it creates new resources.\")",
        output: "No, POST is not idempotent because repeating it creates new resources."
      }
    ],
    interviewQuestion: "What is the primary difference between POST and PUT in REST APIs?",
    interviewAnswer: "POST is used to create a new subordinate resource (non-idempotent, server determines resource URI). PUT is used to create or completely replace a resource at a known URI (idempotent)."
  },
  {
    id: "http-put-method",
    topicNumber: 88,
    sectionId: "apis",
    sectionTitle: "Section 14 — APIs",
    title: "PUT Method",
    shortDescription: "Completely replace or create a target resource at a known URI idempotently.",
    whatYouWillLearn: [
      "The role of HTTP PUT",
      "Full resource replacement semantics",
      "Difference between PUT (full replace) and PATCH (partial update)",
      "Idempotency of PUT"
    ],
    explanation: "The HTTP PUT method replaces all current representations of the target resource with the request payload.\n\nIf the resource does not exist, PUT can create it. If it exists, PUT replaces the entire entity. (For partial updates modifying only selected fields, HTTP PATCH is used).",
    example: {
      code: "put_payload = {\"name\": \"Tulasi Updated\", \"role\": \"Lead Engineer\"}\nprint(f\"PUT /api/v1/users/42 with payload: {put_payload}\")",
      output: "PUT /api/v1/users/42 with payload: {'name': 'Tulasi Updated', 'role': 'Lead Engineer'}",
      howItWorks: "PUT replaces the resource record entirely with the provided payload."
    },
    commonMistakes: [
      "Using PUT for partial updates where omitted fields accidentally get set to null/empty (use PATCH for partial modifications)."
    ],
    practiceQuestions: [
      {
        question: "Which HTTP method is specifically intended for partial updates?",
        answer: "print(\"HTTP PATCH\")",
        output: "HTTP PATCH"
      }
    ],
    interviewQuestion: "Why is PUT idempotent while POST is not?",
    interviewAnswer: "Sending a PUT request with the full target state 10 times results in the exact same resource state on the server. Sending a POST request 10 times creates 10 separate records."
  },
  {
    id: "http-delete-method",
    topicNumber: 89,
    sectionId: "apis",
    sectionTitle: "Section 14 — APIs",
    title: "DELETE Method",
    shortDescription: "Remove specified resources from the server idempotently with HTTP 200 OK or 204 No Content.",
    whatYouWillLearn: [
      "The role of HTTP DELETE",
      "Deleting resources by identifier (e.g. DELETE /api/items/15)",
      "Handling successful deletion responses (204 No Content)",
      "Idempotency of DELETE"
    ],
    explanation: "The HTTP DELETE method requests that the server delete the resource identified by the Request-URI.\n\nResponses:\n- 204 No Content: Resource deleted successfully, no body returned.\n- 200 OK: Resource deleted and confirmation message or deleted entity returned.\n- 404 Not Found: Resource was not found.",
    example: {
      code: "print(\"DELETE /api/v1/articles/105 HTTP/1.1\\nResponse: HTTP/1.1 204 No Content\")",
      output: "DELETE /api/v1/articles/105 HTTP/1.1\nResponse: HTTP/1.1 204 No Content",
      howItWorks: "The server locates the record with ID 105 and removes it from the database."
    },
    commonMistakes: [
      "Returning 200 OK with an empty body instead of using 204 No Content."
    ],
    practiceQuestions: [
      {
        question: "What HTTP status code represents 'No Content' after a successful delete?",
        answer: "print(\"204 No Content\")",
        output: "204 No Content"
      }
    ],
    interviewQuestion: "Is HTTP DELETE idempotent if the second call returns 404 Not Found?",
    interviewAnswer: "Yes. Idempotency refers to server state, not the response status code. After the first DELETE removes the item, subsequent DELETE calls leave the server in the exact same state (the item remains deleted)."
  },
  {
    id: "rest-api",
    topicNumber: 90,
    sectionId: "apis",
    sectionTitle: "Section 14 — APIs",
    title: "REST API",
    shortDescription: "Design scalable, predictable web APIs adhering to Representational State Transfer architectural constraints.",
    whatYouWillLearn: [
      "6 core REST architectural constraints",
      "Resource-oriented URI design (/resources/{id}/subresources)",
      "Mapping HTTP verbs (GET, POST, PUT, DELETE) to CRUD operations",
      "HATEOAS and stateless communication"
    ],
    explanation: "REST (Representational State Transfer) is an architectural style for networked applications introduced by Roy Fielding in 2000.\n\nKey REST Principles:\n1. Resource-based: URIs use nouns, not verbs (e.g. /api/orders, NOT /api/createOrder).\n2. Standard HTTP Methods: GET (read), POST (create), PUT/PATCH (update), DELETE (remove).\n3. Statelessness: Every request contains all information needed to process it.\n4. JSON Representations: Data is exchanged using standard JSON format.",
    example: {
      code: "print(\"GET  /api/courses   -> List courses\\nPOST /api/courses   -> Create course\")",
      output: "GET  /api/courses   -> List courses\nPOST /api/courses   -> Create course",
      howItWorks: "URIs represent nouns (resources) while HTTP verbs represent actions."
    },
    commonMistakes: [
      "Using verbs in URIs like /api/getUsers or /api/deleteUser instead of clean nouns and HTTP methods."
    ],
    practiceQuestions: [
      {
        question: "How should an endpoint to fetch comments for post 5 be named in REST?",
        answer: "print(\"/api/posts/5/comments\")",
        output: "/api/posts/5/comments"
      }
    ],
    interviewQuestion: "What are the 6 architectural constraints of REST?",
    interviewAnswer: "1) Client-Server architecture, 2) Statelessness, 3) Cacheability, 4) Layered System, 5) Uniform Interface, and 6) Code on Demand (optional)."
  },
  {
    id: "json-api",
    topicNumber: 91,
    sectionId: "apis",
    sectionTitle: "Section 14 — APIs",
    title: "JSON API",
    shortDescription: "Structure clean JSON API payloads with standard conventions for data, pagination, errors, and metadata.",
    whatYouWillLearn: [
      "Standard JSON API payload formatting",
      "Structuring error envelopes (code, message, details)",
      "Pagination metadata (page, limit, total_count, total_pages)",
      "Standardizing content negotiation with Content-Type headers"
    ],
    explanation: "A well-designed JSON API provides consistent, predictable data structures across all endpoints.\n\nStandard Response Structure:\n{\n  \"data\": [...],\n  \"meta\": { \"page\": 1, \"total\": 100 },\n  \"error\": null\n}",
    example: {
      code: "import json\nresp = {\"data\": [{\"id\": 1, \"title\": \"Python\"}], \"error\": None}\nprint(json.dumps(resp, indent=2))",
      output: "{\n  \"data\": [\n    {\n      \"id\": 1,\n      \"title\": \"Python\"\n    }\n  ],\n  \"error\": null\n}",
      howItWorks: "Uniform JSON envelopes allow client libraries to parse all API responses consistently."
    },
    commonMistakes: [
      "Returning raw primitives or arrays without standard envelope wrappers or pagination metadata."
    ],
    practiceQuestions: [
      {
        question: "What header indicates that the client expects a JSON response?",
        answer: "print(\"Accept: application/json\")",
        output: "Accept: application/json"
      }
    ],
    interviewQuestion: "What is the official MIME type for JSON and JSON:API specification?",
    interviewAnswer: "Standard JSON is application/json, while the formal JSON:API specification is application/vnd.api+json."
  },
  {
    id: "python-requests",
    topicNumber: 92,
    sectionId: "apis",
    sectionTitle: "Section 14 — APIs",
    title: "Python Requests",
    shortDescription: "Consume HTTP APIs easily with Python's popular 'HTTP for Humans' requests library.",
    whatYouWillLearn: [
      "Making GET, POST, PUT, DELETE requests with requests",
      "Parsing JSON responses with response.json()",
      "Handling authentication, headers, and query parameters",
      "Configuring timeouts and error handling with raise_for_status()"
    ],
    explanation: "The 'requests' library is the de-facto standard for making HTTP requests in Python.\n\nKey Methods:\n- requests.get(url, params=...)\n- requests.post(url, json=..., headers=...)\n- response.status_code\n- response.json(): Automatically parses JSON response body into a Python dict/list\n- response.raise_for_status(): Raises an HTTPError if status code is 4xx or 5xx",
    example: {
      code: "print(\"requests makes HTTP networking intuitive: resp = requests.get(url)\")",
      output: "requests makes HTTP networking intuitive: resp = requests.get(url)",
      howItWorks: "requests handles connection pooling, TLS verification, keep-alive, and JSON parsing seamlessly."
    },
    commonMistakes: [
      "Making requests without specifying a timeout parameter."
    ],
    practiceQuestions: [
      {
        question: "How do you pass a Python dictionary as a JSON payload in requests.post()?",
        answer: "print(\"requests.post(url, json=data)\")",
        output: "requests.post(url, json=data)"
      }
    ],
    interviewQuestion: "What is requests.Session and why should you use it when making multiple requests?",
    interviewAnswer: "requests.Session persists connection pools (reusing underlying TCP sockets across requests via HTTP Keep-Alive) and shares cookies and default headers, dramatically reducing latency."
  }
];

writeCleanData("apis.js", "apis", apis);

// WEB DEV (93-95)
const webDevelopment = [
  {
    id: "flask",
    topicNumber: 93,
    sectionId: "web-development",
    sectionTitle: "Section 15 — Web Development",
    title: "Flask",
    shortDescription: "Build lightweight, flexible web applications and REST microservices using Python's iconic microframework.",
    whatYouWillLearn: [
      "Flask microframework philosophy (unopinionated, extensible)",
      "Routing with @app.route decorators",
      "Handling GET and POST request data",
      "Rendering Jinja2 HTML templates and returning JSON"
    ],
    explanation: "Flask is a lightweight WSGI microframework for Python. It provides the core essentials: URL routing, request/response handling, and Jinja2 templating, leaving database and authentication choices entirely up to the developer.\n\nCore Components:\n- Flask(__name__): Initializes the app instance\n- @app.route('/path', methods=['GET']): Registers a URL handler\n- jsonify(): Returns JSON responses with proper headers",
    example: {
      code: "print(\"from flask import Flask\\napp = Flask(__name__)\\n@app.route('/')\\ndef home(): return {'msg': 'Hello'}\")",
      output: "from flask import Flask\napp = Flask(__name__)\n@app.route('/')\ndef home(): return {'msg': 'Hello'}",
      howItWorks: "Flask binds Python functions to URL endpoints using decorator routes."
    },
    commonMistakes: [
      "Running Flask's built-in development server app.run() in production (use Gunicorn instead)."
    ],
    practiceQuestions: [
      {
        question: "How do you define a route in Flask that only responds to HTTP POST requests?",
        answer: "print(\"@app.route('/submit', methods=['POST'])\")",
        output: "@app.route('/submit', methods=['POST'])"
      }
    ],
    interviewQuestion: "What is WSGI (Web Server Gateway Interface)?",
    interviewAnswer: "WSGI (PEP 3333) is the standard interface specification between web servers (like Nginx/Gunicorn) and Python web applications/frameworks (like Flask and Django)."
  },
  {
    id: "fastapi",
    topicNumber: 94,
    sectionId: "web-development",
    sectionTitle: "Section 15 — Web Development",
    title: "FastAPI",
    shortDescription: "Build modern, high-performance, asynchronous REST APIs with Python 3.8+ type hints, Pydantic, and automatic Swagger docs.",
    whatYouWillLearn: [
      "Modern async Python with ASGI and Starlette",
      "Automatic data validation and serialization with Pydantic",
      "Interactive auto-generated Swagger UI (/docs) and ReDoc",
      "Dependency Injection system in FastAPI"
    ],
    explanation: "FastAPI is a modern, blazing-fast web framework for building APIs with Python 3.8+ based on standard Python type hints.\n\nKey Features:\n- Performance: On par with NodeJS and Go (powered by Starlette & Uvicorn).\n- Auto Docs: Generates interactive OpenAPI (Swagger) documentation automatically at /docs.\n- Type Validation: Eliminates manual request parsing; Pydantic validates inputs and returns descriptive 422 errors automatically.",
    example: {
      code: "print(\"from fastapi import FastAPI\\napp = FastAPI()\\n@app.get('/')\\nasync def root(): return {'status': 'ok'}\")",
      output: "from fastapi import FastAPI\napp = FastAPI()\n@app.get('/')\nasync def root(): return {'status': 'ok'}",
      howItWorks: "Pydantic models enforce schema types, validating every incoming request automatically."
    },
    commonMistakes: [
      "Blocking the event loop in async endpoints by running heavy synchronous blocking calls."
    ],
    practiceQuestions: [
      {
        question: "What URL path serves interactive Swagger documentation in a standard FastAPI app?",
        answer: "print(\"/docs\")",
        output: "/docs"
      }
    ],
    interviewQuestion: "What is the difference between WSGI and ASGI?",
    interviewAnswer: "WSGI is synchronous and handles one request per worker thread. ASGI (Asynchronous Server Gateway Interface) is asynchronous and supports concurrent async/await coroutines, WebSockets, and long-polling on a single event loop."
  },
  {
    id: "django",
    topicNumber: 95,
    sectionId: "web-development",
    sectionTitle: "Section 15 — Web Development",
    title: "Django",
    shortDescription: "Build full-stack, enterprise-grade web applications using Python's full-featured 'batteries-included' web framework.",
    whatYouWillLearn: [
      "The Django MVT (Model-View-Template) architectural pattern",
      "Built-in ORM, Migrations, and Auto-Generated Admin Panel",
      "Built-in Authentication, CSRF, and Security Protections",
      "Django REST Framework (DRF) for enterprise APIs"
    ],
    explanation: "Django is a high-level, batteries-included Python web framework designed to help developers build secure, scalable applications from concept to completion as fast as possible.\n\nWhat comes built-in?\n- Automatic admin interface (/admin)\n- Database ORM and schema migrations (makemigrations, migrate)\n- User authentication, permissions, password hashing\n- CSRF, SQL injection, and XSS security protections",
    example: {
      code: "print(\"# Django Model definition:\\nfrom django.db import models\\nclass Article(models.Model): title = models.CharField(max_length=200)\")",
      output: "# Django Model definition:\nfrom django.db import models\nclass Article(models.Model): title = models.CharField(max_length=200)",
      howItWorks: "Django follows the MVT pattern: Models define data, Views handle logic, and Templates render the UI."
    },
    commonMistakes: [
      "Modifying models without running python manage.py makemigrations and python manage.py migrate."
    ],
    practiceQuestions: [
      {
        question: "What Django command applies pending database schema migrations?",
        answer: "print(\"python manage.py migrate\")",
        output: "python manage.py migrate"
      }
    ],
    interviewQuestion: "What is the difference between MVC and Django's MVT pattern?",
    interviewAnswer: "In Django's MVT: 'Model' is the data layer (ORM), 'View' is the controller logic (handling HTTP requests), and 'Template' is the presentation layer (HTML/Jinja). Django framework itself acts as the overall Controller."
  }
];

writeCleanData("webDevelopment.js", "webDevelopment", webDevelopment);

// DATA ANALYSIS (96-100)
const dataAnalysis = [
  {
    id: "numpy",
    topicNumber: 96,
    sectionId: "data-analysis",
    sectionTitle: "Section 16 — Data Analysis",
    title: "NumPy",
    shortDescription: "High-performance scientific computing and multi-dimensional array operations in Python.",
    whatYouWillLearn: [
      "The ndarray N-dimensional array object",
      "Vectorized operations and broadcasting without slow Python loops",
      "Array indexing, slicing, reshaping, and linear algebra",
      "Why NumPy is orders of magnitude faster than standard Python lists"
    ],
    explanation: "NumPy (Numerical Python) is the foundational package for scientific computing in Python.\n\nWhy is NumPy so fast?\nNumPy arrays are stored in contiguous blocks of memory with homogeneous data types, and core math operations are written in highly optimized C and Fortran.\n\nKey Features:\n- Multi-dimensional ndarray\n- Element-wise vectorized calculations\n- Matrix math and linear algebra operations",
    example: {
      code: "data = [1, 2, 3, 4, 5]\nvectorized = [x * 2 for x in data]\nprint(\"Vectorized output:\", vectorized)",
      output: "Vectorized output: [2, 4, 6, 8, 10]",
      howItWorks: "NumPy applies operations to all array elements in parallel using low-level SIMD CPU instructions."
    },
    commonMistakes: [
      "Using explicit Python for loops to iterate over NumPy arrays."
    ],
    practiceQuestions: [
      {
        question: "What is the primary multi-dimensional array data structure in NumPy?",
        answer: "print(\"numpy.ndarray\")",
        output: "numpy.ndarray"
      }
    ],
    interviewQuestion: "What is 'broadcasting' in NumPy?",
    interviewAnswer: "Broadcasting is NumPy's mechanism that allows arithmetic operations between arrays of different shapes by virtually stretching the smaller array along compatible dimensions without copying data."
  },
  {
    id: "pandas",
    topicNumber: 97,
    sectionId: "data-analysis",
    sectionTitle: "Section 16 — Data Analysis",
    title: "Pandas",
    shortDescription: "Manipulate, analyze, filter, and aggregate structured tabular data using DataFrames and Series.",
    whatYouWillLearn: [
      "Pandas Series (1D) and DataFrame (2D) structures",
      "Loading data from CSV, Excel, SQL, and JSON",
      "Filtering, selection (.loc, .iloc), and querying",
      "Groupby aggregations, joins, merges, and pivot tables"
    ],
    explanation: "Pandas is the premier data manipulation and analysis library for Python.\n\nCore Data Structures:\n1. Series: 1-dimensional labeled array.\n2. DataFrame: 2-dimensional labeled data structure with columns of potentially different types (similar to a SQL table or Excel sheet).",
    example: {
      code: "print(\"Pandas simplifies tabular data slicing, filtering, and aggregation.\")",
      output: "Pandas simplifies tabular data slicing, filtering, and aggregation.",
      howItWorks: "DataFrames provide labeled index-based and column-based fast querying."
    },
    commonMistakes: [
      "Confusing .loc (label-based) with .iloc (integer position-based)."
    ],
    practiceQuestions: [
      {
        question: "What is the difference between .loc and .iloc in Pandas?",
        answer: "print(\".loc is label/name based; .iloc is integer index position based.\")",
        output: ".loc is label/name based; .iloc is integer index position based."
      }
    ],
    interviewQuestion: "How does Pandas handle missing data, and what methods are used to clean them?",
    interviewAnswer: "Missing values are represented as NaN (or None). Common methods to handle them include df.isna() (detect), df.dropna() (remove), and df.fillna(value) (impute)."
  },
  {
    id: "matplotlib",
    topicNumber: 98,
    sectionId: "data-analysis",
    sectionTitle: "Section 16 — Data Analysis",
    title: "Matplotlib",
    shortDescription: "Generate static, animated, and publication-quality charts and plots in Python.",
    whatYouWillLearn: [
      "The pyplot interface (plt.plot, plt.scatter, plt.bar, plt.hist)",
      "Figures and Axes object-oriented plotting model",
      "Customizing titles, labels, legends, grids, and colors",
      "Saving plots to high-resolution image files (PNG, SVG, PDF)"
    ],
    explanation: "Matplotlib is the most widely used data visualization library in Python, providing full control over every pixel in a chart.\n\nPlot Types:\n- Line plots: plt.plot(x, y)\n- Bar charts: plt.bar(categories, values)\n- Scatter plots: plt.scatter(x, y)\n- Histograms: plt.hist(data, bins=20)",
    example: {
      code: "print(\"Matplotlib generates publication-grade visualizations from raw data.\")",
      output: "Matplotlib generates publication-grade visualizations from raw data.",
      howItWorks: "Matplotlib renders coordinate geometry to image buffers or GUI canvases."
    },
    commonMistakes: [
      "Forgetting to call plt.show() or plt.savefig() to display or save the chart."
    ],
    practiceQuestions: [
      {
        question: "What function in Matplotlib saves a generated chart to an image file?",
        answer: "print(\"plt.savefig('filename.png')\")",
        output: "plt.savefig('filename.png')"
      }
    ],
    interviewQuestion: "What is the difference between the state-based Pyplot interface and the Object-Oriented (OO) interface in Matplotlib?",
    interviewAnswer: "Pyplot (plt.plot()) maintains an implicit global state pointing to the current active figure/axis. The Object-Oriented interface (fig, ax = plt.subplots()) explicitly controls Figure and Axes objects, which is far cleaner and necessary for multi-panel subplots."
  },
  {
    id: "data-cleaning",
    topicNumber: 99,
    sectionId: "data-analysis",
    sectionTitle: "Section 16 — Data Analysis",
    title: "Data Cleaning",
    shortDescription: "Transform messy real-world datasets into clean, reliable inputs by handling missing values, duplicates, and outliers.",
    whatYouWillLearn: [
      "Handling missing data (imputation, dropping, forward-fill)",
      "Detecting and removing duplicate rows",
      "Type conversion and parsing messy date strings",
      "Outlier detection using IQR (Interquartile Range) and Z-scores"
    ],
    explanation: "Real-world data is notoriously messy, containing missing fields, duplicates, invalid formats, and corrupted entries. Over 80% of a data scientist's time is spent on data cleaning and preparation.\n\nCore Cleaning Steps:\n1. Removing duplicates: df.drop_duplicates()\n2. Missing values: df.dropna() or df.fillna(df.median())\n3. Standardizing strings: df['email'] = df['email'].str.lower().str.strip()",
    example: {
      code: "records = [{\"user\": \" alice \", \"val\": 10}, {\"user\": \"BOB\", \"val\": 20}]\ncleaned = [{\"user\": r[\"user\"].strip().lower(), \"val\": r[\"val\"]} for r in records]\nprint(\"Cleaned:\", cleaned)",
      output: "Cleaned: [{'user': 'alice', 'val': 10}, {'user': 'bob', 'val': 20}]",
      howItWorks: "Normalization, deduplication, and type casting turn dirty input records into structured data."
    },
    commonMistakes: [
      "Blindly dropping all rows with missing values (dropna()), which can discard massive portions of valuable data."
    ],
    practiceQuestions: [
      {
        question: "Why is median imputation often preferred over mean imputation for skewed numerical data?",
        answer: "print(\"Median is robust against extreme outlier distortion.\")",
        output: "Median is robust against extreme outlier distortion."
      }
    ],
    interviewQuestion: "What is data leakage during preprocessing and how do you prevent it?",
    interviewAnswer: "Data leakage happens when information from the test dataset leaks into the training dataset during preprocessing (such as calculating global mean before splitting). It is prevented by computing transformations strictly on the training split and applying them onto the test split."
  },
  {
    id: "data-visualization",
    topicNumber: 100,
    sectionId: "data-analysis",
    sectionTitle: "Section 16 — Data Analysis",
    title: "Data Visualization",
    shortDescription: "Communicate insights effectively using statistical visualization libraries like Seaborn and Plotly.",
    whatYouWillLearn: [
      "Statistical plotting with Seaborn (heatmaps, violin plots, pairplots)",
      "Interactive charts and dashboards with Plotly",
      "Choosing the right chart for the right data type",
      "Color theory and accessibility in data visualization"
    ],
    explanation: "Data visualization translates complex datasets into intuitive visual representations that reveal patterns, correlations, trends, and anomalies.\n\nKey Python Visualization Tools:\n- Matplotlib: Core low-level engine\n- Seaborn: High-level statistical charts with built-in themes and color palettes\n- Plotly: Interactive zoomable web-based charts using D3.js under the hood",
    example: {
      code: "print(\"Modern visualization tools allow deep exploratory data analysis.\")",
      output: "Modern visualization tools allow deep exploratory data analysis.",
      howItWorks: "High-level visualization libraries infer plot layout and legends directly from DataFrame column headers."
    },
    commonMistakes: [
      "Using 3D pie charts or misleading axis scales that distort data perception."
    ],
    practiceQuestions: [
      {
        question: "Which Python visualization library specializes in interactive HTML/web charts?",
        answer: "print(\"Plotly\")",
        output: "Plotly"
      }
    ],
    interviewQuestion: "What is a correlation matrix heatmap and what insights does it provide?",
    interviewAnswer: "A correlation heatmap displays pairwise Pearson/Spearman correlation coefficients (-1 to +1) between numerical features as a colored 2D grid, instantly identifying collinearity and strong predictors."
  }
];

writeCleanData("dataAnalysis.js", "dataAnalysis", dataAnalysis);

// MACHINE LEARNING (101-108)
const machineLearning = [
  {
    id: "what-is-machine-learning",
    topicNumber: 101,
    sectionId: "machine-learning",
    sectionTitle: "Section 17 — Machine Learning",
    title: "What is Machine Learning?",
    shortDescription: "Understand the shift from explicit rule-based programming to algorithms that learn patterns from historical data.",
    whatYouWillLearn: [
      "Traditional Programming vs Machine Learning paradigm shift",
      "Features (X), Targets/Labels (y), and Models",
      "The ML Lifecycle: Ingestion -> Preprocessing -> Training -> Evaluation -> Deployment",
      "Overview of Supervised, Unsupervised, and Reinforcement Learning"
    ],
    explanation: "Machine Learning (ML) is a branch of Artificial Intelligence that enables computers to learn patterns directly from data and make predictions without being explicitly programmed with hardcoded rules.\n\nTraditional Programming:\nRules + Data -> Answers\n\nMachine Learning:\nData + Answers -> Rules (Model)",
    example: {
      code: "def simple_learned_model(sqft, bedrooms):\n    w1, w2, bias = 150.0, 25000.0, 50000.0\n    return (w1 * sqft) + (w2 * bedrooms) + bias\n\nprice = simple_learned_model(1800, 3)\nprint(f\"Estimated Price: ${price:,.2f}\")",
      output: "Estimated Price: $395,000.00",
      howItWorks: "ML algorithms optimize model weights minimizing error between predicted output and actual ground truth."
    },
    commonMistakes: [
      "Applying complex machine learning to simple problems solvable with basic if-else logic."
    ],
    practiceQuestions: [
      {
        question: "In Machine Learning, what is the difference between features and labels?",
        answer: "print(\"Features (X) are inputs; Labels (y) are target outputs.\")",
        output: "Features (X) are inputs; Labels (y) are target outputs."
      }
    ],
    interviewQuestion: "What is the difference between Overfitting and Underfitting?",
    interviewAnswer: "Overfitting occurs when a model memorizes training noise and performs poorly on unseen test data (high variance). Underfitting occurs when a model is too simple to capture underlying patterns even on training data (high bias)."
  },
  {
    id: "supervised-learning",
    topicNumber: 102,
    sectionId: "machine-learning",
    sectionTitle: "Section 17 — Machine Learning",
    title: "Supervised Learning",
    shortDescription: "Train predictive models using labeled datasets where both input features (X) and ground truth targets (y) are known.",
    whatYouWillLearn: [
      "The Supervised Learning training paradigm",
      "Classification (discrete labels) vs Regression (continuous numbers)",
      "Popular supervised algorithms (Linear Regression, Decision Trees, Random Forests, XGBoost, SVM)",
      "Training loss minimization and gradient descent"
    ],
    explanation: "Supervised Learning uses labeled datasets to train algorithms to classify data or predict continuous outcomes accurately.\n\nTwo Primary Types:\n1. Classification: Predicts discrete categorical labels (e.g., Spam vs Not Spam, Tumor vs Benign).\n2. Regression: Predicts continuous numerical quantities (e.g., House Price, Stock Value, Temperature).",
    example: {
      code: "print(\"Supervised learning maps input features X to known output labels y.\")",
      output: "Supervised learning maps input features X to known output labels y.",
      howItWorks: "The model compares its predictions against ground truth labels and adjusts internal parameters iteratively."
    },
    commonMistakes: [
      "Training on imbalanced classes without resampling, leading to deceptive accuracy metrics."
    ],
    practiceQuestions: [
      {
        question: "Is predicting whether an email is spam a classification or regression problem?",
        answer: "print(\"Classification\")",
        output: "Classification"
      }
    ],
    interviewQuestion: "What is the Bias-Variance Tradeoff in supervised learning?",
    interviewAnswer: "Bias is error from erroneous model assumptions (leads to underfitting); Variance is sensitivity to small fluctuations in training data (leads to overfitting). The goal is to balance model complexity to minimize total error on unseen data."
  },
  {
    id: "unsupervised-learning",
    topicNumber: 103,
    sectionId: "machine-learning",
    sectionTitle: "Section 17 — Machine Learning",
    title: "Unsupervised Learning",
    shortDescription: "Discover hidden patterns, clusters, and intrinsic structures in unlabeled datasets without human supervision.",
    whatYouWillLearn: [
      "Unlabeled data discovery paradigm",
      "Clustering (K-Means, DBSCAN, Hierarchical)",
      "Dimensionality Reduction (PCA, t-SNE, UMAP)",
      "Anomaly and fraud detection applications"
    ],
    explanation: "Unsupervised Learning discovers inherent patterns, groupings, and low-dimensional representations in datasets without any pre-existing target labels.\n\nMajor Applications:\n- Customer Segmentation: Grouping users by purchasing behavior.\n- Anomaly Detection: Flagging unusual credit card transactions.\n- Dimensionality Reduction: Compressing thousands of features down to 2D/3D for visualization.",
    example: {
      code: "print(\"Unsupervised learning groups data points by intrinsic geometric proximity.\")",
      output: "Unsupervised learning groups data points by intrinsic geometric proximity.",
      howItWorks: "Algorithms cluster points by minimizing intra-cluster distance and maximizing inter-cluster distance."
    },
    commonMistakes: [
      "Trying to evaluate unsupervised models with standard supervised metrics like accuracy."
    ],
    practiceQuestions: [
      {
        question: "Name a classic algorithm used for unsupervised clustering.",
        answer: "print(\"K-Means Clustering\")",
        output: "K-Means Clustering"
      }
    ],
    interviewQuestion: "What is Principal Component Analysis (PCA) and why is it used?",
    interviewAnswer: "PCA is an unsupervised linear dimensionality reduction technique that projects high-dimensional data onto orthogonal axes of maximum variance, preserving major information while reducing computational complexity."
  },
  {
    id: "regression",
    topicNumber: 104,
    sectionId: "machine-learning",
    sectionTitle: "Section 17 — Machine Learning",
    title: "Regression",
    shortDescription: "Model and predict continuous numeric quantities using Linear Regression, Polynomial Regression, and Regularization.",
    whatYouWillLearn: [
      "Linear Regression equation: y = wx + b",
      "Ordinary Least Squares (OLS) and Cost Function (Mean Squared Error)",
      "Multiple Linear Regression with multiple features",
      "Regularization techniques: Ridge (L2) and Lasso (L1)"
    ],
    explanation: "Regression algorithms model relationships between independent feature variables (X) and a continuous dependent target variable (y).\n\nEvaluation Metrics:\n- MSE (Mean Squared Error)\n- RMSE (Root Mean Squared Error)\n- MAE (Mean Absolute Error)\n- R² Score (Coefficient of Determination, 0 to 1)",
    example: {
      code: "def linear_regressor(x):\n    return (2.5 * x) + 10.0\n\ninputs = [1, 2, 3, 4]\npredictions = [linear_regressor(x) for x in inputs]\nprint(\"Predictions:\", predictions)",
      output: "Predictions: [12.5, 15.0, 17.5, 20.0]",
      howItWorks: "Regression finds the best-fit hyperplane that minimizes squared vertical distances from points to the line."
    },
    commonMistakes: [
      "Using regression metrics (like MSE) on classification problems or vice versa."
    ],
    practiceQuestions: [
      {
        question: "What metric measures the proportion of variance explained by a regression model?",
        answer: "print(\"R² (R-squared / Coefficient of Determination)\")",
        output: "R² (R-squared / Coefficient of Determination)"
      }
    ],
    interviewQuestion: "What is the difference between Ridge (L2) and Lasso (L1) regularization?",
    interviewAnswer: "L1 (Lasso) adds the absolute sum of weights to the loss function, driving irrelevant feature weights strictly to zero (performing feature selection). L2 (Ridge) adds the squared sum of weights, shrinking weights close to zero without zeroing them entirely."
  },
  {
    id: "classification",
    topicNumber: 105,
    sectionId: "machine-learning",
    sectionTitle: "Section 17 — Machine Learning",
    title: "Classification",
    shortDescription: "Predict discrete categorical outcomes and class probabilities using Logistic Regression, Decision Trees, and Ensembles.",
    whatYouWillLearn: [
      "Binary vs Multi-Class vs Multi-Label Classification",
      "Logistic Regression and Sigmoid activation function",
      "Decision Trees and Random Forest ensembles",
      "Evaluation: Precision, Recall, F1-Score, ROC-AUC"
    ],
    explanation: "Classification algorithms predict categorical outcomes.\n\nThe Sigmoid Function:\nMaps any real-valued number into a probability between 0.0 and 1.0:\nσ(z) = 1 / (1 + e^-z)\n\nKey Metrics:\n- Precision: Of all predicted positive, how many were actually positive?\n- Recall: Of all actual positives, how many did we capture?\n- F1-Score: Harmonic mean of Precision and Recall.",
    example: {
      code: "import math\ndef sigmoid(z): return 1 / (1 + math.exp(-z))\nprint(\"Sigmoid of 0.0:\", round(sigmoid(0.0), 3))",
      output: "Sigmoid of 0.0: 0.5",
      howItWorks: "Logits are transformed to probabilities; a threshold (default 0.5) assigns the discrete class label."
    },
    commonMistakes: [
      "Relying solely on Accuracy on imbalanced datasets."
    ],
    practiceQuestions: [
      {
        question: "Which metric is the harmonic mean of precision and recall?",
        answer: "print(\"F1-Score\")",
        output: "F1-Score"
      }
    ],
    interviewQuestion: "What is a Confusion Matrix in classification evaluation?",
    interviewAnswer: "A Confusion Matrix is a 2x2 (or NxN) table showing the counts of True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN), providing the raw basis for all classification metrics."
  },
  {
    id: "clustering",
    topicNumber: 106,
    sectionId: "machine-learning",
    sectionTitle: "Section 17 — Machine Learning",
    title: "Clustering",
    shortDescription: "Group unlabeled data points into clusters based on geometric similarity, density, and distance metrics.",
    whatYouWillLearn: [
      "K-Means clustering algorithm steps (Initialize, Assign, Update)",
      "Choosing optimal K using the Elbow Method & Silhouette Score",
      "Density-based clustering with DBSCAN (handles noise & arbitrary shapes)",
      "Hierarchical Agglomerative Clustering and Dendrograms"
    ],
    explanation: "Clustering partitions unlabeled data points into groups such that points within the same cluster are highly similar, while points in different clusters are distinctly different.\n\nK-Means Steps:\n1. Randomly place K centroids in feature space.\n2. Assign each point to the closest centroid (Euclidean distance).\n3. Recompute centroid positions as the mean of all assigned points.\n4. Repeat steps 2-3 until convergence.",
    example: {
      code: "points = [(1, 2), (2, 4), (3, 3)]\nc_x = sum(p[0] for p in points) / len(points)\nc_y = sum(p[1] for p in points) / len(points)\nprint(f\"Updated Centroid: ({c_x:.2f}, {c_y:.2f})\")",
      output: "Updated Centroid: (2.00, 3.00)",
      howItWorks: "Centroids shift to the mathematical center of their assigned cluster members on each iteration."
    },
    commonMistakes: [
      "Not scaling numerical features (with StandardScaler) before running distance-based clustering like K-Means."
    ],
    practiceQuestions: [
      {
        question: "What visual heuristic method helps choose the optimal number of clusters K in K-Means?",
        answer: "print(\"The Elbow Method (plotting inertia vs K)\")",
        output: "The Elbow Method (plotting inertia vs K)"
      }
    ],
    interviewQuestion: "Why is feature scaling mandatory before running K-Means clustering?",
    interviewAnswer: "K-Means relies on Euclidean distance. Features with large scales (e.g. salary in thousands) would dominate the distance calculation compared to features with small scales (e.g. age in tens)."
  },
  {
    id: "model-evaluation",
    topicNumber: 107,
    sectionId: "machine-learning",
    sectionTitle: "Section 17 — Machine Learning",
    title: "Model Evaluation",
    shortDescription: "Assess model generalization using train/test splits, k-fold cross-validation, and rigorous performance metrics.",
    whatYouWillLearn: [
      "Train/Validation/Test data splitting methodology",
      "K-Fold Cross-Validation for robust error estimation",
      "ROC (Receiver Operating Characteristic) curve and AUC",
      "Hyperparameter tuning with GridSearchCV and RandomizedSearchCV"
    ],
    explanation: "Model evaluation measures how well a trained model generalizes to new, unseen real-world data.\n\nGolden Rule of Machine Learning:\nNEVER evaluate final model performance on the training dataset. Always evaluate on a held-out test dataset or via K-Fold Cross-Validation.",
    example: {
      code: "dataset = list(range(100))\ntrain_data = dataset[:80]\ntest_data = dataset[80:]\nprint(f\"Train: {len(train_data)}, Test: {len(test_data)}\")",
      output: "Train: 80, Test: 20",
      howItWorks: "Splitting data guarantees that test evaluation reflects true real-world generalization performance."
    },
    commonMistakes: [
      "Data leakage: scaling or imputing data on the full dataset before splitting into train/test splits."
    ],
    practiceQuestions: [
      {
        question: "What is the standard purpose of K-Fold Cross-Validation?",
        answer: "print(\"To assess model generalization across K distinct data splits.\")",
        output: "To assess model generalization across K distinct data splits."
      }
    ],
    interviewQuestion: "What does an ROC-AUC score of 0.5 vs 1.0 indicate?",
    interviewAnswer: "An AUC of 0.5 indicates a model that performs no better than random guessing. An AUC of 1.0 represents a perfect classifier that cleanly separates all positive and negative instances."
  },
  {
    id: "scikit-learn",
    topicNumber: 108,
    sectionId: "machine-learning",
    sectionTitle: "Section 17 — Machine Learning",
    title: "Scikit-learn",
    shortDescription: "Master Python's premier machine learning library with its unified estimator API: fit(), predict(), and transform().",
    whatYouWillLearn: [
      "The unified Estimator API (.fit(), .predict(), .transform())",
      "Preprocessing with StandardScaler, OneHotEncoder, and Pipeline",
      "Building end-to-end reproducible ML pipelines",
      "Model serialization with joblib / pickle"
    ],
    explanation: "Scikit-learn (sklearn) is the premier classical machine learning library for Python.\n\nThe Scikit-learn API Design:\n1. model.fit(X, y): Trains the estimator on data.\n2. model.predict(X_new): Generates predictions.\n3. transformer.transform(X): Applies learned preprocessing transformations.\n4. Pipeline: Chains preprocessing and modeling into a single leak-free object.",
    example: {
      code: "print(\"Scikit-learn unified pipeline: pipeline = make_pipeline(StandardScaler(), LogisticRegression())\")",
      output: "Scikit-learn unified pipeline: pipeline = make_pipeline(StandardScaler(), LogisticRegression())",
      howItWorks: "Pipelines prevent data leakage by fitting scalers exclusively on the training split during cross-validation."
    },
    commonMistakes: [
      "Calling fit_transform on the test dataset (always call fit_transform on train, and only transform on test)."
    ],
    practiceQuestions: [
      {
        question: "What method in Scikit-learn is used to train an estimator on data?",
        answer: "print(\".fit(X, y)\")",
        output: ".fit(X, y)"
      }
    ],
    interviewQuestion: "Why should you use a Scikit-learn Pipeline instead of manually preprocessing steps?",
    interviewAnswer: "A Pipeline bundles preprocessing and modeling into a single atomic estimator, preventing data leakage during cross-validation and ensuring identical transformations are applied at inference time."
  }
];

writeCleanData("machineLearning.js", "machineLearning", machineLearning);

// AI (109-116)
const ai = [
  {
    id: "what-is-ai",
    topicNumber: 109,
    sectionId: "ai",
    sectionTitle: "Section 18 — AI",
    title: "What is AI?",
    shortDescription: "Explore Artificial Intelligence from historical expert systems to modern deep neural networks and cognitive computing.",
    whatYouWillLearn: [
      "The taxonomy of AI, Machine Learning, and Deep Learning",
      "Narrow AI (ANI) vs General AI (AGI) vs Super AI (ASI)",
      "Neural Networks and Deep Learning architectures (CNNs, RNNs, Transformers)",
      "How Python became the global programming standard for AI"
    ],
    explanation: "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines programmed to think, reason, perceive, and make decisions.\n\nAI Hierarchy:\n- Artificial Intelligence (Broadest): Any technique that enables computers to mimic human behavior.\n- Machine Learning (Subset): Statistical methods enabling machines to learn from data.\n- Deep Learning (Subset of ML): Multi-layered artificial neural networks inspired by biological brains.\n\nWhy Python for AI?\nPython's concise syntax, rapid prototyping capabilities, and vast ecosystem of specialized C++/CUDA accelerated libraries (PyTorch, TensorFlow, JAX, NumPy) make it the undisputed language of AI research and engineering.",
    example: {
      code: "def neuron(inputs, weights, bias):\n    z = sum(x * w for x, w in zip(inputs, weights)) + bias\n    return max(0.0, z)  # ReLU activation\n\nprint(\"Activated Output:\", neuron([0.5, 0.8], [0.4, 0.9], 0.1))",
      output: "Activated Output: 1.02",
      howItWorks: "Neural networks compose billions of these simple mathematical units into deep representation hierarchies."
    },
    commonMistakes: [
      "Confusing AI as a single monolith rather than understanding the distinct layers (Classical AI, ML, Deep Learning, Generative AI)."
    ],
    practiceQuestions: [
      {
        question: "What is the relationship between AI, Machine Learning, and Deep Learning?",
        answer: "print(\"Deep Learning is a subset of Machine Learning, which is a subset of AI.\")",
        output: "Deep Learning is a subset of Machine Learning, which is a subset of AI."
      }
    ],
    interviewQuestion: "Why is Python rather than C++ the primary language used by AI researchers?",
    interviewAnswer: "Python provides an expressive high-level interface for experimentation, while performance-critical tensor operations and GPU computations are executed in underlying C++/CUDA bindings via libraries like PyTorch and TensorFlow."
  },
  {
    id: "generative-ai",
    topicNumber: 110,
    sectionId: "ai",
    sectionTitle: "Section 18 — AI",
    title: "Generative AI",
    shortDescription: "Understand models capable of creating new synthetic content including text, images, audio, video, and code.",
    whatYouWillLearn: [
      "Discriminative models (p(y|x)) vs Generative models (p(x) or p(x,y))",
      "Key generative paradigms: Diffusion Models, GANs, VAEs, Autoregressive Transformers",
      "Applications in code generation, creative art, and synthetic data",
      "Safety, alignment, and hallucinations"
    ],
    explanation: "Unlike traditional AI models that classify or predict (Discriminative AI), Generative AI creates brand-new, original content (text, code, images, audio, 3D assets).\n\nKey Generative Modalities:\n1. Text & Code: Autoregressive Transformer models predicting next tokens (e.g. Gemini, GPT, Claude).\n2. Images & Video: Diffusion models iteratively denoising Gaussian noise into coherent high-resolution images.\n3. Audio & Voice: Neural vocoders and multi-modal voice synthesis.",
    example: {
      code: "tokens = [\"Python\", \"is\", \"a\"]\nnext_token = \"language\"\ntokens.append(next_token)\nprint(\"Generated Sentence:\", \" \".join(tokens))",
      output: "Generated Sentence: Python is a language",
      howItWorks: "Generative text models repeatedly predict probability distributions over vocabulary for the subsequent token."
    },
    commonMistakes: [
      "Assuming Generative AI 'knows' facts like a search engine rather than generating statistically probable sequences of tokens."
    ],
    practiceQuestions: [
      {
        question: "What is the core difference between discriminative and generative AI?",
        answer: "print(\"Discriminative AI classifies existing data; Generative AI creates new data.\")",
        output: "Discriminative AI classifies existing data; Generative AI creates new data."
      }
    ],
    interviewQuestion: "What causes 'hallucinations' in Generative Large Language Models?",
    interviewAnswer: "LLMs are probabilistic token prediction engines optimized for fluency rather than factual verification. When trained on ambiguous data, the model samples plausible-sounding tokens that have no factual grounding in reality."
  },
  {
    id: "llms",
    topicNumber: 111,
    sectionId: "ai",
    sectionTitle: "Section 18 — AI",
    title: "LLMs (Large Language Models)",
    shortDescription: "Discover how Transformer architectures, self-attention mechanisms, and tokenization power modern LLMs.",
    whatYouWillLearn: [
      "The Transformer Architecture ('Attention Is All You Need', 2017)",
      "Self-Attention mechanism and context windows",
      "Tokenization (BPE, WordPiece, SentencePiece)",
      "Pre-training (Next-token prediction) -> SFT (Supervised Fine-Tuning) -> RLHF"
    ],
    explanation: "Large Language Models (LLMs) are deep neural networks trained on massive corpora of text using the Transformer architecture.\n\nThe 3 Training Stages:\n1. Pre-training: Self-supervised learning on trillions of tokens to learn grammar, facts, and reasoning.\n2. SFT (Instruction Tuning): Fine-tuning on curated question-answer demonstrations.\n3. RLHF / DPO: Alignment with human preferences for safety, truthfulness, and helpfulness.",
    example: {
      code: "sample_prompt = \"Explain quantum computing in simple Python terms.\"\nestimated_tokens = int(len(sample_prompt.split()) * 1.3)\nprint(f\"Estimated tokens: {estimated_tokens}\")",
      output: "Estimated tokens: 9",
      howItWorks: "Text is broken into sub-word tokens before passing into transformer attention layers."
    },
    commonMistakes: [
      "Assuming 1 word equals 1 token (tokens are sub-word units: ~100 tokens ≈ 75 words)."
    ],
    practiceQuestions: [
      {
        question: "What core deep learning mechanism introduced in 2017 enabled modern Large Language Models?",
        answer: "print(\"Self-Attention (The Transformer Architecture)\")",
        output: "Self-Attention (The Transformer Architecture)"
      }
    ],
    interviewQuestion: "How does the Self-Attention mechanism in Transformers work?",
    interviewAnswer: "Self-attention maps each token into Query (Q), Key (K), and Value (V) vectors. It computes dot products between queries and keys to determine how much attention every word should pay to every other word in the context."
  },
  {
    id: "prompt-engineering",
    topicNumber: 112,
    sectionId: "ai",
    sectionTitle: "Section 18 — AI",
    title: "Prompt Engineering",
    shortDescription: "Structure effective natural language prompts to guide LLMs toward accurate, consistent, and structured outputs.",
    whatYouWillLearn: [
      "Role prompting and system instructions",
      "Zero-Shot vs Few-Shot Prompting with in-context examples",
      "Chain-of-Thought (CoT) reasoning step-by-step",
      "Enforcing JSON schema outputs from LLMs"
    ],
    explanation: "Prompt Engineering is the practice of crafting and structuring inputs to guide generative AI models to produce optimal, accurate, and properly formatted results.\n\nProven Techniques:\n1. Role Definition: 'You are an expert senior Python architect...'\n2. Few-Shot Examples: Provide 2-3 input/output demonstrations.\n3. Chain-of-Thought: Ask the model to 'think step by step before answering'.\n4. Output Constraints: 'Respond strictly in valid JSON matching this schema...'",
    example: {
      code: "def build_prompt(code_snippet):\n    return f\"You are a Python Security Auditor.\\nReview this code:\\n{code_snippet}\\nRespond in JSON.\"\n\nprint(build_prompt(\"query = f'SELECT * FROM users'\"))",
      output: "You are a Python Security Auditor.\nReview this code:\nquery = f'SELECT * FROM users'\nRespond in JSON.",
      howItWorks: "Clear constraints and output formatting instructions produce deterministic results from LLMs."
    },
    commonMistakes: [
      "Giving vague, open-ended instructions and expecting specific formatting."
    ],
    practiceQuestions: [
      {
        question: "What is 'Few-Shot Prompting'?",
        answer: "print(\"Providing demonstration examples of input and desired output inside the prompt.\")",
        output: "Providing demonstration examples of input and desired output inside the prompt."
      }
    ],
    interviewQuestion: "What is Chain-of-Thought (CoT) prompting and why does it improve reasoning performance?",
    interviewAnswer: "CoT prompting instructs the LLM to break down complex multi-step reasoning problems into sequential intermediate thought steps, allocating more compute (tokens) to reasoning before outputting the final answer."
  },
  {
    id: "ai-apis",
    topicNumber: 113,
    sectionId: "ai",
    sectionTitle: "Section 18 — AI",
    title: "AI APIs",
    shortDescription: "Integrate state-of-the-art AI models into Python applications via cloud SDKs and REST endpoints.",
    whatYouWillLearn: [
      "Integrating AI APIs in Python (Google Gemini, OpenAI, Anthropic)",
      "Managing API keys securely via environment variables (.env)",
      "Configuring hyperparameters: temperature, top_p, max_tokens",
      "Streaming tokens in real-time"
    ],
    explanation: "Cloud AI APIs allow developers to integrate foundation models into Python applications with only a few lines of code.\n\nKey Hyperparameters:\n- Temperature (0.0 to 2.0): Lower values (e.g. 0.2) produce focused, deterministic outputs (great for code); higher values (e.g. 0.9) produce creative variations.\n- Max Output Tokens: Limits the maximum length of generated response.\n- Top-P (Nucleus Sampling): Limits token choices to cumulative probability threshold.",
    example: {
      code: "print(\"AI APIs execute inference: client.models.generate_content(model='gemini-2.5-flash', contents=prompt)\")",
      output: "AI APIs execute inference: client.models.generate_content(model='gemini-2.5-flash', contents=prompt)",
      howItWorks: "The SDK authenticates over HTTPS, sends prompt parameters, and receives generated text."
    },
    commonMistakes: [
      "Hardcoding API keys in source code (always load from os.getenv('API_KEY'))."
    ],
    practiceQuestions: [
      {
        question: "What does setting temperature to 0.0 do to an LLM's responses?",
        answer: "print(\"Makes responses as deterministic as possible.\")",
        output: "Makes responses as deterministic as possible."
      }
    ],
    interviewQuestion: "What is the difference between streaming responses vs standard blocking API calls in AI applications?",
    interviewAnswer: "Streaming utilizes Server-Sent Events (SSE) to deliver tokens chunk-by-chunk to the user in real time as they are generated, drastically improving perceived time-to-first-token (TTFT) latency."
  },
  {
    id: "embeddings",
    topicNumber: 114,
    sectionId: "ai",
    sectionTitle: "Section 18 — AI",
    title: "Embeddings",
    shortDescription: "Convert words, sentences, and code into dense high-dimensional vectors capturing semantic meaning.",
    whatYouWillLearn: [
      "What an embedding vector is (e.g. array of 768 or 1536 floats)",
      "Semantic similarity vs keyword matching",
      "Computing Cosine Similarity and Dot Product",
      "Vector databases (Chroma, Pinecone, Qdrant, FAISS, pgvector)"
    ],
    explanation: "An embedding is a numerical representation of semantic meaning. Text is converted into a vector (a list of numbers, such as 1536 floats).\n\nTexts with similar meanings are positioned close to each other in high-dimensional vector space.\n\nCosine Similarity Formula:\nCosine Similarity = (A · B) / (||A|| * ||B||)\nResult is between -1 and +1 (1.0 = identical semantic meaning).",
    example: {
      code: "import math\n\ndef cosine_sim(v1, v2):\n    dot = sum(a * b for a, b in zip(v1, v2))\n    n1 = math.sqrt(sum(a*a for a in v1))\n    n2 = math.sqrt(sum(b*b for b in v2))\n    return dot / (n1 * n2)\n\nprint(\"Sim (similar):\", round(cosine_sim([1, 1], [0.9, 0.95]), 4))",
      output: "Sim (similar): 0.9997",
      howItWorks: "Semantic proximity in vector space allows computers to compare meaning mathematically."
    },
    commonMistakes: [
      "Comparing embeddings generated by two different embedding model architectures."
    ],
    practiceQuestions: [
      {
        question: "What metric is most commonly used to measure the semantic similarity between two embedding vectors?",
        answer: "print(\"Cosine Similarity\")",
        output: "Cosine Similarity"
      }
    ],
    interviewQuestion: "Why can't you compare embeddings generated by two different embedding models?",
    interviewAnswer: "Each embedding model maps semantic space into its own unique dimensional manifold. Comparing vectors across different models is meaningless because their vector coordinate spaces are completely distinct."
  },
  {
    id: "rag",
    topicNumber: 115,
    sectionId: "ai",
    sectionTitle: "Section 18 — AI",
    title: "RAG (Retrieval-Augmented Generation)",
    shortDescription: "Empower LLMs with external private enterprise knowledge by dynamically retrieving relevant document chunks.",
    whatYouWillLearn: [
      "The RAG architecture and why it eliminates outdated knowledge",
      "Document Chunking and Vector Indexing strategies",
      "Retrieval: Semantic search in vector databases",
      "Generation: Augmenting LLM context with retrieved chunks"
    ],
    explanation: "RAG (Retrieval-Augmented Generation) combines the power of search information retrieval with LLM text generation.\n\nThe 4-Step RAG Pipeline:\n1. INGEST: Load documents, chunk them into small passages (e.g. 500 tokens), compute embedding vectors, and store them in a vector database.\n2. RETRIEVE: When a user asks a question, embed the query and retrieve top-K most similar text chunks via vector search.\n3. AUGMENT: Inject the retrieved chunks into the prompt context.\n4. GENERATE: The LLM generates a grounded answer based strictly on the retrieved source material.",
    example: {
      code: "context = \"Python 3.13 was released with experimental free-threaded mode.\"\nquery = \"What is new in Python 3.13?\"\nrag_prompt = f\"Context: {context}\\nQuestion: {query}\\nAnswer:\"\nprint(rag_prompt)",
      output: "Context: Python 3.13 was released with experimental free-threaded mode.\nQuestion: What is new in Python 3.13?\nAnswer:",
      howItWorks: "The model grounds its answer directly in the factual context injected from the vector database."
    },
    commonMistakes: [
      "Chunk sizes too large (dilutes semantic relevance) or too small (loses necessary context)."
    ],
    practiceQuestions: [
      {
        question: "What does RAG stand for in AI systems?",
        answer: "print(\"Retrieval-Augmented Generation\")",
        output: "Retrieval-Augmented Generation"
      }
    ],
    interviewQuestion: "What are the key advantages of RAG over fine-tuning an LLM?",
    interviewAnswer: "RAG provides real-time knowledge updates without expensive model retraining, enables transparent citation of exact source documents, eliminates hallucinations on private data, and respects document access-control permissions."
  },
  {
    id: "ai-chatbots",
    topicNumber: 116,
    sectionId: "ai",
    sectionTitle: "Section 18 — AI",
    title: "AI Chatbots",
    shortDescription: "Build conversational AI assistants that maintain multi-turn dialogue memory, system instructions, and tool calling capabilities.",
    whatYouWillLearn: [
      "Multi-turn conversation history management (role: user, assistant, system)",
      "Managing sliding context windows and message truncation",
      "Function / Tool Calling (Agentic AI)",
      "Streaming chat UI interfaces in Python"
    ],
    explanation: "An AI Chatbot is an interactive conversational agent powered by Large Language Models that maintains state across multiple conversation turns.\n\nConversation Structure:\nLLMs are stateless; memory is created by sending the entire conversation history with each new message:\n- System: Sets persona, rules, and behavioral boundaries.\n- User: Messages sent by the human.\n- Assistant: Prior responses generated by the AI model.",
    example: {
      code: "history = [\n    {\"role\": \"system\", \"content\": \"You are a Python tutor.\"},\n    {\"role\": \"user\", \"content\": \"What is a tuple?\"}\n]\nprint(\"Turns in conversation:\", len(history))",
      output: "Turns in conversation: 2",
      howItWorks: "Feeding the entire list of message turns gives the model full contextual awareness of past exchanges."
    },
    commonMistakes: [
      "Accumulating infinite chat history until context window limits crash the API."
    ],
    practiceQuestions: [
      {
        question: "Why must conversational chat applications send previous messages back to the LLM on every turn?",
        answer: "print(\"Because LLMs are stateless and do not retain server-side session memory.\")",
        output: "Because LLMs are stateless and do not retain server-side session memory."
      }
    ],
    interviewQuestion: "What is 'Tool Calling' (Function Calling) in modern AI chat models?",
    interviewAnswer: "Tool Calling enables an LLM to detect when external data or actions are required, returning a structured JSON call with function name and arguments. The application executes the function (e.g. SQL query, API call) and feeds results back to the LLM to synthesize the final answer."
  }
];

writeCleanData("ai.js", "ai", ai);
