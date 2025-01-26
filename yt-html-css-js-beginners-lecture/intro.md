# Beginner's Guide to Web Development: HTML, CSS & JavaScript
## Tutor: ```JAMES MORGAN```
---

## Part 1: HTML Basics

### What is HTML?
- HyperText Markup Language
- Structure of web pages
- Made up of elements/tags

### Basic HTML Structure
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <!-- Content goes here -->
    <h1>Hello World!</h1>
    <p>This is a paragraph</p>
</body>
</html>
```

### Common HTML Elements
```html
<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>

<!-- Lists -->
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>

<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>

<!-- Images -->
<img src="image.jpg" alt="Description"/>

<!-- Links -->
<a href="https://example.com">Visit Example</a>

<!-- Forms -->
<form>
  <input type="text" placeholder="Enter name">
  <button type="submit">Submit</button>
</form>
```

---

## Part 2: CSS Fundamentals

### What is CSS?
- Cascading Style Sheets
- Controls presentation/layout
- Selectors target HTML elements

### Basic CSS Syntax
```css
selector {
  property: value;
}
```

### Example CSS
```css
/* Change text color */
h1 {
  color: darkblue;
}

/* Box model */
.container {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
}

/* Flexbox layout */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### CSS Concepts to Cover:
1. Selectors (element, class, ID)
2. Box Model (margin, border, padding)
3. Flexbox/Grid layouts
4. Responsive design (media queries)

---

## Part 3: JavaScript Essentials

### What is JavaScript?
- Adds interactivity to web pages
- Runs in the browser
- Manipulates DOM elements

### Basic JS Syntax
```javascript
// Variables
let message = "Hello World!";
const PI = 3.14;

// Functions
function showAlert() {
  alert('Button clicked!');
}

// DOM Manipulation
document.querySelector('button').addEventListener('click', showAlert);
```

### JavaScript Basics to Cover:
1. Variables (`let`, `const`)
2. Data Types (strings, numbers, booleans)
3. Functions
4. DOM Manipulation
5. Event Listeners

---

## Part 4: Putting It All Together

### Example Project: Interactive Counter
```html
<!-- HTML -->
<div class="counter">
  <h2>Count: <span id="count">0</span></h2>
  <button id="increment">+</button>
  <button id="decrement">-</button>
</div>

<style>
/* CSS */
.counter {
  text-align: center;
  padding: 20px;
}

button {
  font-size: 1.2rem;
  margin: 0 10px;
  padding: 5px 15px;
}
</style>

<script>
// JavaScript
let count = 0;
const countElement = document.getElementById('count');

document.getElementById('increment').addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});

document.getElementById('decrement').addEventListener('click', () => {
  count--;
  countElement.textContent = count;
});
</script>
```

---

## Learning Path Recommendations
1. Master basic HTML structure
2. Practice CSS layout techniques
3. Learn DOM manipulation with JavaScript
4. Build small interactive components
5. Combine all three technologies in projects

## Resources
- [MDN Web Docs](https://developer.mozilla.org)
- [W3Schools](https://www.w3schools.com)
- [freeCodeCamp](https://www.freecodecamp.org)
