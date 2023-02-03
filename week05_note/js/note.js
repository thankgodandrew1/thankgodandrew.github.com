const fetchBtn = document.getElementById("fetchBtn");
      const jsonDataDiv = document.getElementById("jsonData");

      fetchBtn.addEventListener("click", () => {
        fetch("https://thankgodandrew1.github.io/wdd230/chamber/js/json/data.json")
          .then(response => response.json())
          .then(data => {
            jsonDataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
          });
      });



function printArgs(...args) {
document.querySelector("#rest-example").innerText = "Function called with arguments: " + args;
}

const arr = [1, 2, 3];
const arr2 = [...arr, 4, 5];

document.querySelector("#spread-example").innerText = "Original array: " + arr + "\nSpread result: " + arr2;

const loadBtn = document.querySelector("#load-spa");
      const exampleEl = document.querySelector("#spa-example");
      
      loadBtn.addEventListener("click", function() {
        exampleEl.innerText = "Loading SPA...";
        setTimeout(function() {
          exampleEl.innerText = "Single Page App loaded successfully!";
        }, 3000);
      });

const toggleButton = document.getElementById("toggle");
const detailsDiv = document.getElementById("details");

toggleButton.addEventListener("click", function() {
if (detailsDiv.style.display === "none") {
    detailsDiv.style.display = "block";
    toggleButton.innerHTML = "Hide Details";
} else {
    detailsDiv.style.display = "none";
    toggleButton.innerHTML = "Toggle Details";
}
});