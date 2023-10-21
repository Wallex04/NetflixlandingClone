let accord = document.getElementsByClassName("question-one");
let i;
for (i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function(){
    this.classList.toggle("active");
    let accordionText = this.nextElementSibling;
    if (accordionText.style.display === "block") {
      accordionText.style.display = "none";
    } else {
      accordionText.style.display = "block";
    }
  });
}


console.log("hello world");