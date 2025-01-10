// Qs. Create a H2 heading element with text-"Hello JavaScript".Append "from Home" to this text using JS.

// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + "from home";

// Qs. Create 3 divs with common class name = "box". Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
// console.log(divs[0]);
let idx = 1;
for (div of divs) {
  div.innerText = `new value ${idx}`;
  idx++;
}

// divs[0].innerText = "new unique value 2";
