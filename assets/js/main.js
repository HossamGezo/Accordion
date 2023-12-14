// Project Variables
let action = document.querySelector(".accordion");

// Accordion Event
action.addEventListener("click", function (e) {
  let plus = e.target.classList.contains("icon");
  if (plus) {
    // Add & Remove ( Minus, Plus )
    e.target.classList.toggle("fa-minus");
    e.target.classList.toggle("fa-plus");
    let sectionDesc = e.target.parentElement.nextElementSibling;
    if (e.target.classList.contains("fa-minus")) {
      sectionDesc.style.cssText = `height: ${sectionDesc.scrollHeight + 50}px; padding: 20px;`;
    } else {
      sectionDesc.style.cssText = `height: 0;`;
    }
  }
});