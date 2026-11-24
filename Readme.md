# Daily Maths Practice Website

## 1. Project Overview

Daily Maths Practice is a responsive web application developed using React and JavaScript. It helps users improve their mathematical calculation skills through daily practice and online tests.

The application provides different mathematical topics, serial practice, random tests, an interactive numeric keypad, automatic answer checking and progress tracking.

The website uses browser LocalStorage to save user progress and statistics without requiring a backend or database.

## 2. Objectives

- Improve mathematical calculation speed.
- Develop accuracy in basic mathematics.
- Provide interactive maths practice.
- Help users prepare for mathematical examinations.
- Track practice progress and test performance.
- Provide an easy-to-use interface for mobile and desktop devices.

## 3. Topics Covered

The application includes the following topics:

### 1. Multiplication Tables
- Tables from 1 to 25.
- Select individual multiplication tables.
- Practise multiplication from ×1 to ×10.
- Random multiplication tests.

### 2. Fraction, Decimal and Percentage Conversions
Six conversion directions:

- Fraction to Decimal
- Fraction to Percentage
- Decimal to Fraction
- Decimal to Percentage
- Percentage to Fraction
- Percentage to Decimal

### 3. Squares
- Squares from 1 to 30.

### 4. Square Roots
- Square roots of perfect squares from 1² to 30².

### 5. Cubes
- Cubes from 1 to 20.

### 6. Cube Roots
- Cube roots of perfect cubes from 1³ to 20³.

## 4. Main Features

### Serial Practice
- Questions appear in sequential order.
- Immediate answer checking.
- Automatically moves to the next question after a correct answer.
- Saves practice progress.
- Allows users to continue from where they stopped.

### Test Mode
- Generates random questions.
- Selectable question ranges.
- Different question counts: 10, 20, 30 and 50.
- Displays final score.
- Calculates accuracy.
- Tracks time taken.

### Interactive Numeric Keypad
The application provides an on-screen keypad containing:

- Numbers 0–9.
- Decimal point (.).
- Fraction symbol (/).
- Percentage symbol (%).
- Backspace.
- Clear button.

### Automatic Answer Checking
- Correct answers are accepted automatically.
- Moves to the next question.
- Incorrect answers display feedback.
- Users can correct their answers.

### Progress Tracking
- Tracks completed questions.
- Counts correct answers.
- Records completed tests.
- Saves progress using LocalStorage.

### Responsive Design
The website supports:
- Desktop computers.
- Laptops.
- Tablets.
- Android and iOS mobile devices.

## 5. Technologies Used

| Technology | Purpose |
|---|---|
| HTML | Webpage structure |
| CSS | Styling and responsive design |
| JavaScript | Application logic |
| React.js | User interface development |
| React Router DOM | Navigation between pages |
| Lucide React | Icons |
| LocalStorage | Saving progress and statistics |
| Vite | Development server and build tool |

## 6. Project Structure

```text
maths_mern/
│
└── frontend/
    │
    ├── public/
    │
    ├── src/
    │   │
    │   ├── components/
    │   │   └── PracticeEngine.jsx
    │   │
    │   ├── pages/
    │   │   ├── Dashboard.jsx
    │   │   ├── Tables.jsx
    │   │   ├── Conversions.jsx
    │   │   ├── ConversionPractice.jsx
    │   │   ├── Squares.jsx
    │   │   ├── SquareRoots.jsx
    │   │   ├── Cubes.jsx
    │   │   └── CubeRoots.jsx
    │   │
    │   ├── utils/
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    │
    ├── package.json
    └── index.html
```

## 7. Installation and Execution

### Step 1: Install Node.js

Download and install Node.js on your computer.

### Step 2: Open the project

Open the project folder in Visual Studio Code.

### Step 3: Open the terminal

Navigate to the frontend directory:

```bash
cd D:\maths_mern\frontend
```

### Step 4: Install dependencies

```bash
npm install
```

Install the required packages:

```bash
npm install react-router-dom lucide-react
```

### Step 5: Run the application

```bash
npm run dev
```

### Step 6: Open the website

Open the development URL displayed in the terminal, usually:

```text
http://localhost:5173/
```

## 8. Data Storage

This project uses browser LocalStorage to save:

- Completed questions.
- Correct answers.
- Completed tests.
- Serial practice progress.

The application does not require a backend server or database.

**Note:** Progress is stored in the browser. Clearing browser storage may remove saved progress.

## 9. Future Enhancements

The following features can be added in future versions:

- User login and registration.
- Leaderboard.
- Daily practice challenges.
- Difficulty levels.
- Detailed performance reports.
- Wrong-answer history and review.
- Sound effects and achievements.
- More mathematical topics.

## 10. Conclusion

Daily Maths Practice is a simple and interactive web application designed to improve mathematical skills. It provides different mathematical topics, serial practice, random tests and an interactive numeric keypad.

Using React, JavaScript, CSS and LocalStorage, the application provides a responsive and user-friendly learning experience without requiring a backend.

The project helps users improve their calculation speed, accuracy and confidence through regular mathematical practice.

---

**Project Name:** Daily Maths Practice Website

**Frontend:** React.js

**Programming Language:** JavaScript

**Styling:** CSS

**Storage:** Browser LocalStorage

**Development Tool:** Visual Studio Code