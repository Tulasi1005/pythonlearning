// Age-Adapted 5-Stage Python Curriculum
export const projectsData = [
  {
    "id": "kid-animal-sound-bot",
    "stage": "kid",
    "difficulty": "Beginner",
    "name": "🧸 Magic Animal Sound Bot",
    "description": "Build a friendly talking bot that makes animal sounds when you choose an animal friend!",
    "skillsUsed": [
      "print()",
      "Variables",
      "if conditions"
    ],
    "requirements": [
      "Ask which animal friend wants to speak",
      "If 'dog', bark 'Woof Woof! 🐶'",
      "If 'cat', purr 'Meow Meow! 🐱'",
      "If 'duck', quack 'Quack Quack! 🦆'"
    ],
    "expectedResult": "=== MAGIC ANIMAL BOT ===\nAnimal: dog\nThe dog says: Woof Woof! 🐶\nHave a happy day!",
    "basicImplementationSteps": [
      "Create a variable called animal = 'dog'",
      "Use if animal == 'dog' to print the happy bark",
      "Add elif for cat and duck sounds",
      "Print a friendly goodbye message"
    ],
    "codeSnippet": "# Magic Animal Sound Bot\nanimal = \"dog\"\n\nprint(\"=== MAGIC ANIMAL BOT ===\")\nprint(f\"Animal chosen: {animal}\")\n\nif animal == \"dog\":\n    print(\"The dog says: Woof Woof! 🐶\")\nelif animal == \"cat\":\n    print(\"The cat says: Meow Meow! 🐱\")\nelif animal == \"duck\":\n    print(\"The duck says: Quack Quack! 🦆\")\nelse:\n    print(\"A sweet mystery animal! 🐾\")\n\nprint(\"Have a happy day playing!\")"
  },
  {
    "id": "kid-candy-counter",
    "stage": "kid",
    "difficulty": "Beginner",
    "name": "🍬 Sweet Candy Jar Counter",
    "description": "Count the sweet candies in your magic jar and share them with teddy bear!",
    "skillsUsed": [
      "Numbers",
      "Addition (+)",
      "f-strings"
    ],
    "requirements": [
      "Start with 5 strawberry candies",
      "Add 3 chocolate candies from granny",
      "Print the total candies in your jar"
    ],
    "expectedResult": "=== CANDY JAR ===\nStrawberry Candies: 5 🍓\nChocolate Candies: 3 🍫\nTotal Sweet Candies: 8 🍬\nYum yum!",
    "basicImplementationSteps": [
      "Store strawberry = 5 and chocolate = 3",
      "Add them together into total_candies",
      "Print the sweet total with candy emojis"
    ],
    "codeSnippet": "# Sweet Candy Counter\nstrawberry = 5\nchocolate = 3\ntotal_candies = strawberry + chocolate\n\nprint(\"=== CANDY JAR ===\")\nprint(f\"Strawberry Candies: {strawberry} 🍓\")\nprint(f\"Chocolate Candies: {chocolate} 🍫\")\nprint(f\"Total Sweet Candies: {total_candies} 🍬\")\nprint(\"Yum yum! Let's share with Teddy!\")"
  },
  {
    "id": "kid-traffic-light",
    "stage": "kid",
    "difficulty": "Beginner",
    "name": "🚦 Toy Car Traffic Controller",
    "description": "Help your toy cars know when to zoom and when to stop safely at the traffic light!",
    "skillsUsed": [
      "if-elif-else",
      "Strings",
      "print()"
    ],
    "requirements": [
      "Check light color: Red, Yellow, or Green",
      "Red -> Stop! 🛑",
      "Yellow -> Slow down! ⚠️",
      "Green -> Go Vroom! 🚗"
    ],
    "expectedResult": "=== TRAFFIC LIGHT ===\nLight is: Green 🟢\nAction: Go Vroom Vroom! 🚗💨",
    "basicImplementationSteps": [
      "Create light = 'Green'",
      "Check light with if-elif-else",
      "Print the toy car driving action"
    ],
    "codeSnippet": "# Traffic Controller\nlight = \"Green\"\n\nprint(\"=== TRAFFIC LIGHT ===\")\nprint(f\"Light is: {light} 🟢\")\n\nif light == \"Red\":\n    print(\"Action: Stop and wait! 🛑\")\nelif light == \"Yellow\":\n    print(\"Action: Slow down safely! ⚠️\")\nelif light == \"Green\":\n    print(\"Action: Go Vroom Vroom! 🚗💨\")"
  },
  {
    "id": "kid-toy-box-sorter",
    "stage": "kid",
    "difficulty": "Beginner",
    "name": "🧸 Toy Box Organizer",
    "description": "Put all your favorite toys into the toy box and count them up!",
    "skillsUsed": [
      "Lists",
      "for loops",
      "len()"
    ],
    "requirements": [
      "Create a list of 4 favorite toys",
      "Loop through and name each toy",
      "Print total toys in the box"
    ],
    "expectedResult": "=== TOY BOX ===\n1. 🚗 Red Race Car\n2. 🧸 Cuddly Teddy\n3. 🚀 Space Rocket\n4. ⚽ Bouncy Ball\nTotal toys packed: 4 toys!",
    "basicImplementationSteps": [
      "Create a list of toys",
      "Use a for-loop with enumerate",
      "Print the total count with len()"
    ],
    "codeSnippet": "# Toy Box Organizer\ntoys = [\"🚗 Red Race Car\", \"🧸 Cuddly Teddy\", \"🚀 Space Rocket\", \"⚽ Bouncy Ball\"]\n\nprint(\"=== TOY BOX ===\")\nfor idx, toy in enumerate(toys, 1):\n    print(f\"{idx}. {toy}\")\n\nprint(f\"Total toys packed: {len(toys)} toys! Good job tidying up! ⭐\")"
  },
  {
    "id": "kid-magic-color-picker",
    "stage": "kid",
    "difficulty": "Beginner",
    "name": "🎨 Rainbow Color Brush",
    "description": "Pick your magic paintbrush color and paint a sunshine picture!",
    "skillsUsed": [
      "Variables",
      "f-strings",
      "print()"
    ],
    "requirements": [
      "Choose a paintbrush color",
      "Print which picture you are painting",
      "Show a cheerful rainbow badge"
    ],
    "expectedResult": "=== RAINBOW ART ===\nBrush Color: Bright Yellow 💛\nPainting: A Happy Sunshine ☀️\nMasterpiece finished!",
    "basicImplementationSteps": [
      "Set brush_color = 'Bright Yellow'",
      "Set drawing = 'Happy Sunshine'",
      "Print the masterpiece banner"
    ],
    "codeSnippet": "# Rainbow Brush\nbrush_color = \"Bright Yellow 💛\"\ndrawing = \"A Happy Sunshine ☀️\"\n\nprint(\"=== RAINBOW ART ===\")\nprint(f\"Brush Color: {brush_color}\")\nprint(f\"Painting: {drawing}\")\nprint(\"Masterpiece finished! ⭐ Ready for the fridge door!\")"
  },
  {
    "id": "young-rock-paper-scissors",
    "stage": "young",
    "difficulty": "Beginner",
    "name": "🎮 Rock Paper Scissors Arena",
    "description": "Build an epic battle game against the computer with random moves and score tracking!",
    "skillsUsed": [
      "random module",
      "Conditions",
      "while loops"
    ],
    "requirements": [
      "Player chooses Rock, Paper, or Scissors",
      "Computer picks randomly via random.choice()",
      "Determine winner using game rules",
      "Track player and computer scores"
    ],
    "expectedResult": "=== ROCK PAPER SCISSORS ARENA ===\nPlayer: Rock 🪨 vs CPU: Scissors ✂️\nResult: YOU WIN! +1 Point\nScore: Player 1 - CPU 0",
    "basicImplementationSteps": [
      "Import random",
      "Define choices = ['Rock', 'Paper', 'Scissors']",
      "Compare moves and announce the winner",
      "Update score variables"
    ],
    "codeSnippet": "import random\n\nchoices = [\"Rock\", \"Paper\", \"Scissors\"]\nplayer_move = \"Rock\"\ncpu_move = \"Scissors\"  # random.choice(choices)\n\nprint(\"=== ROCK PAPER SCISSORS ARENA ===\")\nprint(f\"Player: {player_move} vs CPU: {cpu_move}\")\n\nif player_move == cpu_move:\n    print(\"Result: IT'S A TIE! 🤝\")\nelif (player_move == \"Rock\" and cpu_move == \"Scissors\") or \\\n     (player_move == \"Paper\" and cpu_move == \"Rock\") or \\\n     (player_move == \"Scissors\" and cpu_move == \"Paper\"):\n    print(\"Result: YOU WIN! 🏆 +1 Point\")\nelse:\n    print(\"Result: CPU WINS! 🤖\")"
  },
  {
    "id": "young-hero-inventory",
    "stage": "young",
    "difficulty": "Intermediate",
    "name": "⚔️ RPG Hero Inventory & Loot Manager",
    "description": "Manage your fantasy character's backpack: equip swords, drink potions, and drop heavy loot!",
    "skillsUsed": [
      "Lists",
      "Dictionaries",
      "Functions"
    ],
    "requirements": [
      "Store inventory items with quantities and power ratings",
      "Function to equip an item and increase attack power",
      "Function to use a health potion and restore HP",
      "Display an formatted HUD status box"
    ],
    "expectedResult": "=== HERO STATUS: ShadowKnight ===\nHP: 100/100 | Attack Power: 45\nInventory: [\"Laser Katana (+30)\", \"Health Potion x2\", \"Dragon Shield\"]\nItem used: Health Potion (+25 HP restored)",
    "basicImplementationSteps": [
      "Create hero dictionary with hp, attack, and inventory list",
      "Write use_potion() function",
      "Write equip_weapon() function",
      "Print clean status summary"
    ],
    "codeSnippet": "hero = {\n    \"name\": \"ShadowKnight\",\n    \"hp\": 75,\n    \"max_hp\": 100,\n    \"attack\": 45,\n    \"inventory\": [\"Laser Katana\", \"Health Potion\", \"Dragon Shield\"]\n}\n\ndef use_potion(character):\n    if \"Health Potion\" in character[\"inventory\"]:\n        character[\"hp\"] = min(character[\"max_hp\"], character[\"hp\"] + 25)\n        character[\"inventory\"].remove(\"Health Potion\")\n        print(f\"[HEAL] Used Health Potion! HP is now {character['hp']}/{character['max_hp']}\")\n\nprint(f\"=== HERO STATUS: {hero['name']} ===\")\nprint(f\"HP: {hero['hp']}/{hero['max_hp']} | Attack: {hero['attack']}\")\nuse_potion(hero)"
  },
  {
    "id": "young-number-guesser",
    "stage": "young",
    "difficulty": "Beginner",
    "name": "🎯 Secret Number Guessing Game",
    "description": "Guess the secret number between 1 and 100 with 'Too High' / 'Too Low' clues!",
    "skillsUsed": [
      "random",
      "while loop",
      "if-elif-else"
    ],
    "requirements": [
      "Generate random number 1-100",
      "Give clues on each guess",
      "Count total attempts taken to win"
    ],
    "expectedResult": "=== NUMBER GUESSER ===\nGuess 1: 50 -> Too Low! ⬆️\nGuess 2: 75 -> Too High! ⬇️\nGuess 3: 63 -> BINGO! Correct in 3 tries! 🎯",
    "basicImplementationSteps": [
      "Set secret = 63",
      "Simulate guesses and check vs secret",
      "Print win message with attempt count"
    ],
    "codeSnippet": "secret_number = 63\nguesses = [50, 75, 63]\n\nprint(\"=== NUMBER GUESSER ===\")\nfor attempt, guess in enumerate(guesses, 1):\n    if guess < secret_number:\n        print(f\"Guess {attempt}: {guess} -> Too Low! ⬆️\")\n    elif guess > secret_number:\n        print(f\"Guess {attempt}: {guess} -> Too High! ⬇️\")\n    else:\n        print(f\"Guess {attempt}: {guess} -> BINGO! Correct in {attempt} tries! 🎯\")\n        break"
  },
  {
    "id": "young-quiz-master",
    "stage": "young",
    "difficulty": "Intermediate",
    "name": "🏆 Ultimate Gamer Trivia Bot",
    "description": "A quiz game that asks questions about Minecraft, Pokemon, and coding, calculating your final score!",
    "skillsUsed": [
      "Lists of Dictionaries",
      "Loops",
      "Score tracking"
    ],
    "requirements": [
      "Store quiz questions with options and answers",
      "Loop through questions and check player answers",
      "Award 10 points per correct answer",
      "Print final badge based on score"
    ],
    "expectedResult": "=== GAMER TRIVIA QUIZ ===\nQ1: What is the rarest ore in Minecraft? -> Netherite ✅ (+10 pts)\nQ2: What is Python's print command? -> print() ✅ (+10 pts)\nFinal Score: 20/20 | Rank: TRIVIA MASTER 👑",
    "basicImplementationSteps": [
      "Create list of question dicts",
      "Iterate with for-loop",
      "Calculate score and display badge"
    ],
    "codeSnippet": "quiz = [\n    {\"q\": \"What is the rarest ore in Minecraft?\", \"ans\": \"Netherite\", \"player\": \"Netherite\"},\n    {\"q\": \"What Python function shows text?\", \"ans\": \"print()\", \"player\": \"print()\"}\n]\n\nscore = 0\nprint(\"=== GAMER TRIVIA QUIZ ===\")\nfor idx, item in enumerate(quiz, 1):\n    if item[\"player\"] == item[\"ans\"]:\n        score += 10\n        print(f\"Q{idx}: {item['q']} -> {item['player']} ✅ (+10 pts)\")\n    else:\n        print(f\"Q{idx}: {item['q']} -> Incorrect ❌\")\n\nprint(f\"Final Score: {score}/{len(quiz)*10} | Rank: TRIVIA MASTER 👑\")"
  },
  {
    "id": "young-password-generator",
    "stage": "young",
    "difficulty": "Intermediate",
    "name": "🔐 Super Safe Password Generator",
    "description": "Generate unbreakable random gamer passwords with letters, numbers, and symbols!",
    "skillsUsed": [
      "string module",
      "random.choice",
      "list join"
    ],
    "requirements": [
      "Combine uppercase, lowercase, numbers, and symbols",
      "Generate random 12-character passwords",
      "Rate password strength"
    ],
    "expectedResult": "=== PASS-GENERATOR 3000 ===\nGenerated Safe Password: K9#xP2$mQ8@v\nStrength: UNBREAKABLE 🛡️ (12 characters)",
    "basicImplementationSteps": [
      "Import random and string",
      "Build character pool",
      "Select 12 random characters and join"
    ],
    "codeSnippet": "import random\nimport string\n\ndef generate_password(length=12):\n    chars = string.ascii_letters + string.digits + \"!@#$%^&*\"\n    password = \"\".join(random.choice(chars) for _ in range(length))\n    return password\n\npwd = generate_password(12)\nprint(\"=== PASS-GENERATOR 3000 ===\")\nprint(f\"Generated Safe Password: {pwd}\")\nprint(\"Strength: UNBREAKABLE 🛡️ (12 characters)\")"
  },
  {
    "id": "college-student-grading",
    "stage": "college",
    "difficulty": "Intermediate",
    "name": "🎓 Student GPA & Gradebook System",
    "description": "Comprehensive student grade calculation engine computing semester GPA, letter grades, and rank.",
    "skillsUsed": [
      "Dictionary mappings",
      "Functions",
      "Statistical calculations"
    ],
    "requirements": [
      "Store courses, credit hours, and numerical marks",
      "Compute weighted GPA on a 4.0 scale",
      "Assign letter grades (A, B, C, F)",
      "Generate formatted academic transcript"
    ],
    "expectedResult": "=== ACADEMIC TRANSCRIPT ===\nStudent: Ananya Sharma | Roll: 2024CS104\nCS101 (4 cr): 92 -> A (Grade Point: 4.0)\nMA102 (3 cr): 84 -> B (Grade Point: 3.0)\nSemester GPA: 3.57 / 4.00 (Status: Dean's List)",
    "basicImplementationSteps": [
      "Define grade conversion mapping",
      "Calculate total weighted points / total credits",
      "Output formatted transcript table"
    ],
    "codeSnippet": "def compute_grade(marks):\n    if marks >= 90: return \"A\", 4.0\n    elif marks >= 80: return \"B\", 3.0\n    elif marks >= 70: return \"C\", 2.0\n    else: return \"F\", 0.0\n\ncourses = [\n    {\"code\": \"CS101\", \"credits\": 4, \"marks\": 92},\n    {\"code\": \"MA102\", \"credits\": 3, \"marks\": 84}\n]\n\ntotal_points, total_credits = 0, 0\nprint(\"=== ACADEMIC TRANSCRIPT ===\")\nprint(\"Student: Ananya Sharma | Roll: 2024CS104\")\n\nfor c in courses:\n    letter, pt = compute_grade(c[\"marks\"])\n    total_points += pt * c[\"credits\"]\n    total_credits += c[\"credits\"]\n    print(f\"{c['code']} ({c['credits']} cr): {c['marks']} -> {letter} (Grade Point: {pt})\")\n\ngpa = total_points / total_credits\nprint(f\"Semester GPA: {gpa:.2f} / 4.00 (Status: Dean's List)\")"
  },
  {
    "id": "college-expense-tracker",
    "stage": "college",
    "difficulty": "Intermediate",
    "name": "💰 Campus Expense & Budget Tracker",
    "description": "Track student monthly spending across food, books, and rent with budget variance warnings.",
    "skillsUsed": [
      "Data aggregations",
      "CSV export",
      "Conditionals"
    ],
    "requirements": [
      "Log expenses with category, date, and amount",
      "Compute total spend by category",
      "Alert if category exceeds monthly budget threshold"
    ],
    "expectedResult": "=== CAMPUS BUDGET AUDIT ===\nFood: $320.00 / $300.00 [OVER BUDGET by $20.00! ⚠️]\nBooks: $140.00 / $200.00 [OK: $60.00 left]\nTotal Spent: $460.00",
    "basicImplementationSteps": [
      "Store transactions list",
      "Group totals with dictionary aggregation",
      "Compare with budget thresholds"
    ],
    "codeSnippet": "expenses = [\n    {\"cat\": \"Food\", \"amt\": 180.0},\n    {\"cat\": \"Food\", \"amt\": 140.0},\n    {\"cat\": \"Books\", \"amt\": 140.0}\n]\nbudget = {\"Food\": 300.0, \"Books\": 200.0}\n\ncategory_totals = {}\nfor e in expenses:\n    category_totals[e[\"cat\"]] = category_totals.get(e[\"cat\"], 0) + e[\"amt\"]\n\nprint(\"=== CAMPUS BUDGET AUDIT ===\")\nfor cat, spent in category_totals.items():\n    limit = budget.get(cat, 0)\n    status = f\"OVER BUDGET by ${spent-limit:.2f}! ⚠️\" if spent > limit else f\"OK: ${limit-spent:.2f} left\"\n    print(f\"{cat}: ${spent:.2f} / ${limit:.2f} [{status}]\")"
  },
  {
    "id": "college-library-manager",
    "stage": "college",
    "difficulty": "Intermediate",
    "name": "📚 University Library Book Reservation Manager",
    "description": "Object-oriented book checkout and return system calculating overdue fines.",
    "skillsUsed": [
      "OOP Classes",
      "datetime module",
      "Inheritance"
    ],
    "requirements": [
      "Book class with ISBN, title, and status",
      "Member checkout method with 14-day loan duration",
      "Return method calculating $0.50/day overdue fine"
    ],
    "expectedResult": "=== LIBRARY SYSTEM ===\nChecked out: 'Algorithms 4th Ed' to Member #1024\nReturned 4 days late -> Overdue Fine: $2.00\nStatus: Book returned to available shelf.",
    "basicImplementationSteps": [
      "Create Book and Library classes",
      "Track checkout date and return date",
      "Compute fine if days > 14"
    ],
    "codeSnippet": "class Book:\n    def __init__(self, isbn, title):\n        self.isbn = isbn\n        self.title = title\n        self.is_borrowed = False\n\n    def checkout(self, member_id):\n        self.is_borrowed = True\n        print(f\"[CHECKOUT] '{self.title}' issued to Member #{member_id}\")\n\n    def return_book(self, days_kept):\n        self.is_borrowed = False\n        overdue = max(0, days_kept - 14)\n        fine = overdue * 0.50\n        print(f\"[RETURN] '{self.title}' returned ({overdue} days late). Fine: ${fine:.2f}\")\n\nb = Book(\"978-0131103627\", \"Algorithms 4th Ed\")\nb.checkout(1024)\nb.return_book(18)"
  },
  {
    "id": "college-matrix-calc",
    "stage": "college",
    "difficulty": "Advanced",
    "name": "🔢 Linear Algebra 2D Matrix Engine",
    "description": "Compute matrix addition, scalar multiplication, and matrix dot product from scratch without external libraries.",
    "skillsUsed": [
      "Nested lists",
      "List comprehensions",
      "Algorithmic complexity"
    ],
    "requirements": [
      "Validate matching inner dimensions (A cols == B rows)",
      "Compute 2D matrix multiplication O(N^3)",
      "Display formatted matrix output"
    ],
    "expectedResult": "=== MATRIX MULTIPLICATION (2x2) ===\n[ [1, 2],    *  [ [5, 6],   =  [ [19, 22],\n  [3, 4] ]        [7, 8] ]       [43, 50] ]",
    "basicImplementationSteps": [
      "Define matrices A and B as 2D lists",
      "Use triple nested loop for dot product",
      "Print aligned row strings"
    ],
    "codeSnippet": "def matrix_multiply(A, B):\n    rows_A, cols_A = len(A), len(A[0])\n    rows_B, cols_B = len(B), len(B[0])\n    assert cols_A == rows_B, \"Dimension mismatch\"\n    \n    result = [[0 for _ in range(cols_B)] for _ in range(rows_A)]\n    for i in range(rows_A):\n        for j in range(cols_B):\n            for k in range(cols_A):\n                result[i][j] += A[i][k] * B[k][j]\n    return result\n\nA = [[1, 2], [3, 4]]\nB = [[5, 6], [7, 8]]\nprint(f\"Matrix Product: {matrix_multiply(A, B)}\")"
  },
  {
    "id": "college-contact-book",
    "stage": "college",
    "difficulty": "Intermediate",
    "name": "📇 Contact Manager with Search & Sorting",
    "description": "Store, search, filter, and sort contacts alphabetically with phone and email validation.",
    "skillsUsed": [
      "Dictionary hashing",
      "Lambda sorting",
      "Regex validation"
    ],
    "requirements": [
      "Add and delete contact entries",
      "Search by prefix or substring in O(1) or O(N)",
      "Sort and display contacts by last name"
    ],
    "expectedResult": "=== CONTACT DIRECTORY ===\nFound 2 matching 'Ravi':\n- Ravi Kumar | ravi@cs.univ.edu | +91-9876543210\n- Ravindra Nath | rnath@univ.edu | +91-9123456780",
    "basicImplementationSteps": [
      "Store contacts list of dicts",
      "Write search_contacts(query) filter",
      "Format output lines"
    ],
    "codeSnippet": "contacts = [\n    {\"name\": \"Ravi Kumar\", \"email\": \"ravi@cs.univ.edu\", \"phone\": \"+91-9876543210\"},\n    {\"name\": \"Anita Roy\", \"email\": \"anita@univ.edu\", \"phone\": \"+91-9811223344\"},\n    {\"name\": \"Ravindra Nath\", \"email\": \"rnath@univ.edu\", \"phone\": \"+91-9123456780\"}\n]\n\ndef search(query):\n    return [c for c in contacts if query.lower() in c[\"name\"].lower()]\n\nmatches = search(\"Ravi\")\nprint(\"=== CONTACT DIRECTORY ===\")\nprint(f\"Found {len(matches)} matching 'Ravi':\")\nfor m in matches:\n    print(f\"- {m['name']} | {m['email']} | {m['phone']}\")"
  },
  {
    "id": "grad-employee-payroll",
    "stage": "graduate",
    "difficulty": "Intermediate",
    "name": "💼 Enterprise Payroll & Tax Calculation Engine",
    "description": "Compute gross pay, income tax brackets, pension deductions, and net payouts for diverse employee tiers.",
    "skillsUsed": [
      "OOP inheritance",
      "Tax bracket logic",
      "Decimal precision"
    ],
    "requirements": [
      "Base Employee class with Salaried and Hourly subclasses",
      "Calculate federal/state tax progressive brackets",
      "Generate payroll paystub report with breakdown"
    ],
    "expectedResult": "=== PAYROLL PAYSTUB ===\nEmployee: Vikram Patel (Senior Engineer)\nGross Salary: $9,500.00\nTax Deduction (22%): $2,090.00\nPension (5%): $475.00\nNet Disbursed: $6,935.00",
    "basicImplementationSteps": [
      "Define Employee class hierarchy",
      "Calculate progressive tax tiers",
      "Print clean financial stub"
    ],
    "codeSnippet": "class Employee:\n    def __init__(self, name, role, base_salary):\n        self.name = name\n        self.role = role\n        self.base_salary = base_salary\n\n    def compute_paystub(self):\n        tax = self.base_salary * 0.22\n        pension = self.base_salary * 0.05\n        net = self.base_salary - tax - pension\n        return {\"gross\": self.base_salary, \"tax\": tax, \"pension\": pension, \"net\": net}\n\ne = Employee(\"Vikram Patel\", \"Senior Engineer\", 9500.0)\nstub = e.compute_paystub()\nprint(\"=== PAYROLL PAYSTUB ===\")\nprint(f\"Employee: {e.name} ({e.role})\")\nprint(f\"Gross: ${stub['gross']:,.2f} | Tax: ${stub['tax']:,.2f} | Net: ${stub['net']:,.2f}\")"
  },
  {
    "id": "grad-ecommerce-cart-api",
    "stage": "graduate",
    "difficulty": "Advanced",
    "name": "🛒 E-Commerce Cart & Discount Coupon API",
    "description": "RESTful shopping cart service with SKU validation, coupon code processing, and sales tax calculation.",
    "skillsUsed": [
      "REST design",
      "Dictionary data store",
      "Exceptions"
    ],
    "requirements": [
      "Add, update, and remove items with stock verification",
      "Apply percentage or flat-rate coupon discounts",
      "Compute state tax and shipping tiers based on subtotal"
    ],
    "expectedResult": "=== CART SUMMARY ===\nSubtotal (3 items): $240.00\nCoupon Applied (SAVE20): -$48.00\nSales Tax (8.25%): $15.84 | Shipping: FREE\nFinal Settlement: $207.84",
    "basicImplementationSteps": [
      "Create Cart class with items dictionary",
      "Implement apply_coupon() with validation",
      "Calculate tax and final settlement"
    ],
    "codeSnippet": "class ShoppingCart:\n    def __init__(self):\n        self.items = {}\n        self.discount = 0.0\n\n    def add(self, sku, price, qty=1):\n        self.items[sku] = self.items.get(sku, 0) + price * qty\n\n    def apply_coupon(self, code):\n        if code == \"SAVE20\":\n            self.discount = 0.20\n\n    def checkout(self):\n        subtotal = sum(self.items.values())\n        discount_amt = subtotal * self.discount\n        tax = (subtotal - discount_amt) * 0.0825\n        total = (subtotal - discount_amt) + tax\n        return subtotal, discount_amt, tax, total\n\nc = ShoppingCart()\nc.add(\"LAPTOP-STAND\", 40.0, 2)\nc.add(\"MECH-KEYBOARD\", 160.0, 1)\nc.apply_coupon(\"SAVE20\")\nsub, disc, tax, total = c.checkout()\nprint(f\"Subtotal: ${sub:.2f} | Discount: -${disc:.2f} | Tax: ${tax:.2f} | Total: ${total:.2f}\")"
  },
  {
    "id": "grad-inventory-db",
    "stage": "graduate",
    "difficulty": "Advanced",
    "name": "📦 Warehouse Inventory & Low-Stock Alert System",
    "description": "SQLite-backed warehouse manager with automated low-stock reorder triggers and CSV export.",
    "skillsUsed": [
      "sqlite3",
      "Parameterized SQL",
      "Context managers"
    ],
    "requirements": [
      "Create SQLite products table with SKU, quantity, and reorder threshold",
      "Execute safe parameterized CRUD queries",
      "Generate automated restocking alert report"
    ],
    "expectedResult": "=== WAREHOUSE STOCK AUDIT ===\nSKU-104 'USB-C Cable': Qty 8 (Reorder at 20) -> [ALERT REORDER REQUIRED]\nSKU-205 'Monitor Arm': Qty 45 (Reorder at 15) -> [HEALTHY STOCK]",
    "basicImplementationSteps": [
      "Open sqlite3 in-memory database",
      "Create products schema and seed data",
      "Query items where quantity <= reorder_threshold"
    ],
    "codeSnippet": "import sqlite3\n\nconn = sqlite3.connect(\":memory:\")\ncur = conn.cursor()\ncur.execute(\"CREATE TABLE inventory (sku TEXT, name TEXT, qty INT, threshold INT)\")\ncur.executemany(\"INSERT INTO inventory VALUES (?, ?, ?, ?)\", [\n    (\"SKU-104\", \"USB-C Cable\", 8, 20),\n    (\"SKU-205\", \"Monitor Arm\", 45, 15)\n])\nconn.commit()\n\nprint(\"=== WAREHOUSE STOCK AUDIT ===\")\nfor row in cur.execute(\"SELECT sku, name, qty, threshold FROM inventory\"): \n    sku, name, qty, thresh = row\n    status = \"ALERT REORDER REQUIRED\" if qty <= thresh else \"HEALTHY STOCK\"\n    print(f\"{sku} '{name}': Qty {qty} (Threshold {thresh}) -> [{status}]\")"
  },
  {
    "id": "grad-atm-banking",
    "stage": "graduate",
    "difficulty": "Advanced",
    "name": "💳 Banking ATM Transaction & Ledger Engine",
    "description": "Thread-safe bank account simulator with PIN authentication, overdraft protection, and transaction auditing.",
    "skillsUsed": [
      "Custom Exceptions",
      "State validation",
      "Audit logging"
    ],
    "requirements": [
      "PIN authentication with 3 failed attempt lockout",
      "Deposit, withdraw, and fund transfer operations",
      "Maintain persistent audit ledger with timestamps"
    ],
    "expectedResult": "=== BANKING AUDIT TRAIL ===\n[AUTH] User #4401 Authenticated successfully\n[TX] Withdraw $200.00 -> New Balance: $1,450.00\n[TX] Transfer $300.00 to #4402 -> Balance: $1,150.00",
    "basicImplementationSteps": [
      "Create BankAccount class with balance validation",
      "Raise InsufficientFundsException on overdraft",
      "Log transactions to audit list"
    ],
    "codeSnippet": "class InsufficientFunds(Exception): pass\n\nclass BankAccount:\n    def __init__(self, acc_id, balance=1000.0):\n        self.acc_id = acc_id\n        self.balance = balance\n        self.ledger = []\n\n    def withdraw(self, amount):\n        if amount > self.balance:\n            raise InsufficientFunds(f\"Overdraft! Requested ${amount} > Balance ${self.balance}\")\n        self.balance -= amount\n        self.ledger.append(f\"Withdraw -${amount:.2f}\")\n        print(f\"[TX] Withdrew ${amount:.2f} | Balance: ${self.balance:.2f}\")\n\nacc = BankAccount(\"ACC-4401\", 1650.0)\nacc.withdraw(200.0)"
  },
  {
    "id": "grad-ticket-system",
    "stage": "graduate",
    "difficulty": "Intermediate",
    "name": "🎫 Customer Support Ticket Workflow Manager",
    "description": "Support desk queue prioritizing customer tickets by severity (P1/P2/P3) and routing to agents.",
    "skillsUsed": [
      "Enum",
      "Queue / Heapq",
      "Dataclasses"
    ],
    "requirements": [
      "Ticket dataclass with id, severity, customer, and status",
      "Queue prioritization (P1 Critical processed before P3 Low)",
      "Status transitions (OPEN -> IN_PROGRESS -> RESOLVED)"
    ],
    "expectedResult": "=== TICKET DISPATCH QUEUE ===\nProcessing [P1 CRITICAL] #102: Payment Gateway Down (Assignee: Agent Sarah)\nProcessing [P2 MEDIUM] #101: Password reset link expired (Assignee: Agent Dan)",
    "basicImplementationSteps": [
      "Define Priority enum",
      "Sort tickets by priority key",
      "Dispatch tickets to agent queue"
    ],
    "codeSnippet": "tickets = [\n    {\"id\": 101, \"priority\": 2, \"issue\": \"Password reset expired\"},\n    {\"id\": 102, \"priority\": 1, \"issue\": \"Payment Gateway 500 Error\"},\n    {\"id\": 103, \"priority\": 3, \"issue\": \"Typo in FAQ page\"}\n]\n\ntickets.sort(key=lambda x: x[\"priority\"])\nprint(\"=== TICKET DISPATCH QUEUE ===\")\nfor t in tickets:\n    pri_label = \"P1 CRITICAL\" if t[\"priority\"] == 1 else (\"P2 MEDIUM\" if t[\"priority\"] == 2 else \"P3 LOW\")\n    print(f\"Processing [{pri_label}] #{t['id']}: {t['issue']}\")"
  },
  {
    "id": "prof-fastapi-microservice",
    "stage": "professional",
    "difficulty": "Advanced",
    "name": "🚀 High-Throughput FastAPI Microservice with JWT Auth",
    "description": "Production RESTful microservice featuring Pydantic schemas, dependency injection, async DB connection pooling, and JWT bearer security.",
    "skillsUsed": [
      "FastAPI",
      "Pydantic v2",
      "JWT Auth",
      "Asyncio"
    ],
    "requirements": [
      "Strict Pydantic request/response model validation",
      "JWT token generation and cryptographic validation dependency",
      "Structured JSON logging and OpenTelemetry trace propagation",
      "Health check probe endpoints (/healthz, /readyz)"
    ],
    "expectedResult": "=== FASTAPI RUNTIME TELEMETRY ===\n[BOOTSTRAP] Uvicorn worker started with uvloop\n[AUTH] Verified JWT Bearer token for sub='usr_8829'\n[METRIC] POST /api/v1/orders - Status 201 Created (Duration: 3.2ms, Memory: +4KB)",
    "basicImplementationSteps": [
      "Define Pydantic schema models",
      "Construct FastAPI router with auth dependency",
      "Simulate async request processing and telemetry emission"
    ],
    "codeSnippet": "from typing import Optional\nimport time\n\n# Simulated FastAPI route handler with Pydantic payload\ndef handle_order(payload: dict, token: str):\n    start = time.perf_counter()\n    assert token.startswith(\"Bearer ey\"), \"Invalid JWT format\"\n    order_id = f\"ord_{int(time.time())}\"\n    elapsed_ms = (time.perf_counter() - start) * 1000\n    return {\n        \"status\": 201,\n        \"order_id\": order_id,\n        \"item\": payload[\"sku\"],\n        \"latency_ms\": round(elapsed_ms, 2)\n    }\n\nres = handle_order({\"sku\": \"PROD-99\", \"amount\": 149.99}, \"Bearer eyJhbGciOi...\")\nprint(\"=== FASTAPI SERVICE RESPONSE ===\")\nprint(f\"Status: {res['status']} | Order ID: {res['order_id']} | Latency: {res['latency_ms']}ms\")"
  },
  {
    "id": "prof-async-scraper",
    "stage": "professional",
    "difficulty": "Advanced",
    "name": "⚡ Async Web Crawler with Token Bucket Rate Limiter",
    "description": "High-concurrency web scraper utilizing aiohttp, semaphore concurrency throttling, and token bucket rate limiting to prevent 429 errors.",
    "skillsUsed": [
      "asyncio",
      "aiohttp",
      "Semaphore",
      "Token Bucket"
    ],
    "requirements": [
      "Asynchronous fetch pool using asyncio.Semaphore(10)",
      "Token bucket rate limiter capping requests at 50 req/sec",
      "Automatic exponential backoff on HTTP 429/503 status codes"
    ],
    "expectedResult": "=== ASYNC SCRAPER RUNNER ===\n[CONCURRENCY] Fetching 100 URLs with concurrency cap = 10\n[RATE LIMITER] Token bucket consumed 50 tokens/sec\n[COMPLETE] 100/100 pages scraped in 1.84s (Zero 429 rate limit errors)",
    "basicImplementationSteps": [
      "Implement TokenBucket class with refill interval",
      "Create async worker pool bounded by Semaphore",
      "Process futures with asyncio.gather()"
    ],
    "codeSnippet": "import asyncio\nimport time\n\nclass AsyncRateLimiter:\n    def __init__(self, rate=50):\n        self.rate = rate\n        self.semaphore = asyncio.Semaphore(10)\n\n    async def fetch(self, url_id):\n        async with self.semaphore:\n            # Simulated non-blocking async network request\n            await asyncio.sleep(0.01)\n            return f\"Data for url_{url_id}\"\n\nasync def main():\n    limiter = AsyncRateLimiter(rate=50)\n    tasks = [limiter.fetch(i) for i in range(5)]\n    results = await asyncio.gather(*tasks)\n    print(f\"Scraped {len(results)} targets concurrently: {results[:2]}...\")\n\nasyncio.run(main())"
  },
  {
    "id": "prof-redis-task-queue",
    "stage": "professional",
    "difficulty": "Advanced",
    "name": "🔄 Distributed Task Queue & Dead-Letter Worker",
    "description": "Celery-like distributed worker engine using Redis LPUSH/BRPOP with exponential retry policies and dead-letter queues (DLQ).",
    "skillsUsed": [
      "Distributed systems",
      "Retry backoff",
      "Dead-letter queue"
    ],
    "requirements": [
      "Producer pushes JSON payloads to Redis queue",
      "Worker consumes tasks with BRPOP blocking dequeue",
      "Move tasks failing 3 retries into Dead-Letter Queue (DLQ)"
    ],
    "expectedResult": "=== DISTRIBUTED QUEUE WORKER ===\n[DISPATCH] Processing task #8891 (attempt 1/3) -> SUCCESS\n[ALERT] Task #8892 failed 3 retries -> Routed to Dead-Letter Queue (DLQ)\nWorker status: Listening for next payload...",
    "basicImplementationSteps": [
      "Define Task wrapper with payload, attempts, and status",
      "Implement retry loop with backoff multiplier",
      "Route exhausted tasks to DLQ buffer"
    ],
    "codeSnippet": "def process_task_with_retry(task):\n    max_retries = 3\n    for attempt in range(1, max_retries + 1):\n        try:\n            if task.get(\"fail_simulated\") and attempt < 3:\n                raise ConnectionError(\"Upstream timeout\")\n            return {\"status\": \"SUCCESS\", \"task_id\": task[\"id\"], \"attempts\": attempt}\n        except Exception as e:\n            if attempt == max_retries:\n                return {\"status\": \"DLQ_ROUTED\", \"task_id\": task[\"id\"], \"error\": str(e)}\n\nprint(\"Task 1:\", process_task_with_retry({\"id\": \"task_1\", \"fail_simulated\": False}))\nprint(\"Task 2:\", process_task_with_retry({\"id\": \"task_2\", \"fail_simulated\": True}))"
  },
  {
    "id": "prof-opentelemetry-pipeline",
    "stage": "professional",
    "difficulty": "Advanced",
    "name": "📊 OpenTelemetry Distributed Tracing Middleware",
    "description": "Instrument microservices with W3C tracecontext headers, span lifecycle tracking, and Prometheus metric exporters.",
    "skillsUsed": [
      "OpenTelemetry",
      "Distributed tracing",
      "Context propagation"
    ],
    "requirements": [
      "Extract and inject W3C traceparent headers across service hops",
      "Create custom spans tracking database queries and external HTTP calls",
      "Emit Prometheus RED metrics (Rate, Errors, Duration)"
    ],
    "expectedResult": "=== OPENTELEMETRY TRACE EXPORTER ===\n[TRACE 4bf92f35] Span 'auth_check': 1.2ms (OK)\n[TRACE 4bf92f35] Span 'db_query_orders': 4.8ms (OK)\n[TRACE 4bf92f35] Root Span 'POST /checkout' Total Latency: 6.8ms",
    "basicImplementationSteps": [
      "Create context manager for Span lifecycle",
      "Inject span IDs into structured logs",
      "Measure wall-clock latency with time.perf_counter_ns()"
    ],
    "codeSnippet": "import time\nimport uuid\n\nclass TraceSpan:\n    def __init__(self, name, trace_id=None):\n        self.name = name\n        self.trace_id = trace_id or uuid.uuid4().hex[:16]\n\n    def __enter__(self):\n        self.start = time.perf_counter_ns()\n        return self\n\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        duration_ms = (time.perf_counter_ns() - self.start) / 1_000_000\n        print(f\"[TRACE {self.trace_id}] Span '{self.name}': {duration_ms:.2f}ms (Status: {'ERROR' if exc_type else 'OK'})\")\n\nwith TraceSpan(\"db_query_orders\"):\n    time.sleep(0.005)"
  },
  {
    "id": "prof-memory-profiler",
    "stage": "professional",
    "difficulty": "Advanced",
    "name": "🔍 Memory Leak Detection & CPython Tracemalloc Profiler",
    "description": "Automated production memory regression suite comparing heap snapshots with tracemalloc and objgraph to detect memory leaks.",
    "skillsUsed": [
      "tracemalloc",
      "gc module",
      "Heap snapshots"
    ],
    "requirements": [
      "Take baseline heap allocation snapshot",
      "Simulate high-concurrency request load",
      "Compare top 5 memory line differences and identify leaking references"
    ],
    "expectedResult": "=== TRACEMALLOC HEAP AUDIT ===\nTop Memory Regressions:\n1. /app/cache.py:42: +4.2MB (retained 10,000 dict objects)\n2. /app/models.py:18: +0.8MB (unbounded list growth)\nMemory Leak Detected: Cache eviction policy failed to run!",
    "basicImplementationSteps": [
      "Start tracemalloc with 10 trace frames",
      "Execute simulated workload",
      "Compare snapshot diffs and print report"
    ],
    "codeSnippet": "import tracemalloc\n\ntracemalloc.start()\nsnapshot1 = tracemalloc.take_snapshot()\n\n# Simulated memory allocation\nleak_cache = [f\"session_token_{i}\" for i in range(50000)]\n\nsnapshot2 = tracemalloc.take_snapshot()\ntop_stats = snapshot2.compare_to(snapshot1, 'lineno')\n\nprint(\"=== TRACEMALLOC HEAP AUDIT ===\")\nfor stat in top_stats[:2]:\n    print(stat)\ntracemalloc.stop()"
  }
];
