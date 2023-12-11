# Lesson 4.4: Multiple Conditional Statements

## 🔀 Multiple Conditions
- Understanding `if` and `else` statements.
- Analyze and explain the given code snippets.

### Example: Basic Conditional
```javascript
if(hideText === "on") {
  document.querySelector("p").display = "none";
} else {
  document.querySelector("p").display = "block";
}
```
- **Discussion:** What happens when the condition is true/false?

### Grade Example: Before `else if`
```javascript
if(grade >= 90) {
  alert("Grade: A");
} else {
  alert("Grade: F");
}
```
- **Issue:** This code does not cover grades between 89 and 0.

### Grade Example: Using `else if`
```javascript
if(grade >= 90) {
  alert("Grade: A");
} else if (grade >= 80) {
  alert("Grade: B");
} else if (grade >= 70) {
  alert("Grade: C");
} else {
  alert("Keep trying!");
}
```


### Multiple If-Else Conditions
```javascript
let day = "Friday";

if(day === "Monday") {
  alert("HW is due");
} else if (day === "Friday") {
  alert("Early dismissal");
} else if (day === "Saturday") {
  alert("Go to the movies");
} else {	
  alert("Relax!");
}
```

---

Happy coding! 🚀