let button = document.querySelector("button");

button.addEventListener("click", function() {
    let weather = document.querySelector(".weather").value;
     let paragraph = document.querySelector("p");
  let p = document.querySelector("p");
    // 1. Write a conditional statement:
    //  - If the input is "rainy", change the text in the paragraph tag to "Bring an umbrella!"
    //  - Else, change the text in the paragraph tag to "Enjoy the sun!"
if (weather === "rainy") {
  paragraph.innerText = "Bring an umbrella!";
} else {
  p.innerText = "Enjoy the sun!";
}

});