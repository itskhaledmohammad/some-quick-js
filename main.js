// KG TO POUNDS
converterElemInput = document.querySelector("#kg-to-pound input");
document.querySelector("#conv").addEventListener("change", converter);

// Listeners
converterElemInput.addEventListener("keyup", converter);
window.addEventListener("load", () => {
  funWithNumbers();
  generateQuote();
  converter();
});

document.querySelectorAll(".color").forEach(item => {
  item.addEventListener("click", e => {
    document.querySelector("#random-quote").className =
      "box " + e.target.classList[1];
  });
});
document
  .querySelector("#number-list")
  .addEventListener("keyup", funWithNumbers);

// Converter
function converter() {
  var valc = converterElemInput.value;
  convMode = document.querySelector("#conv").value;
  if (convMode == 1) {
    output = valc * 2.20462;
  } else {
    output = valc * 0.453592;
  }
  document.querySelector("#oupt").innerHTML =
    output + (convMode == 1 ? " pound(s)" : " kg(s)");
}

// NUMBER LIST
function funWithNumbers() {
  numbers = document.querySelector("#number-list").value;
  arr = eval("[" + numbers + "]");
  max = Math.max(...arr);
  min = Math.min(...arr);
  sum = arr.reduce((acc, curr) => acc + curr);
  average = sum / arr.length;
  reverse = arr.reverse();

  document.querySelector("#max").innerHTML = "Max: " + max;
  document.querySelector("#min").innerHTML = "Min: " + min;
  document.querySelector("#sum").innerHTML = "Sum:" + sum;
  document.querySelector("#average").innerHTML = "Average:" + average;
  document.querySelector("#reverse-order").innerHTML =
    "Reverse Order: " + reverse;
}

// Random Quotes
var quotes = [
  [
    "Wear what you wish and eat what you wish, as long as you avoid two practices: extravagance and haughtiness.",
    "Qatādah(Ibn Abī Al-Dunyā, Al-Tawāḍuʿ Wa Al-Khumūl ḥadīth 90.)"
  ],
  [
    "Wear what you wish and eat what you wish, as long as you avoid two practices: extravagance and haughtiness.",
    " ʿAbdullāh b. ʿAbbās(Ibn Abī Shaybah, Al-Muṣannaf ḥadīth 26601.)"
  ],
  [
    "If you want your ṣalāh to benefit you, say (to yourself): perhaps I will never pray another (my life will end before the next prayer).",
    "Bakr b. ʿAbdillāh Al-Muzanī(Ibn Abī Al-Dunyā, Qaṣr Al-ʾAmal article 104.)"
  ]
];

function generateQuote() {
  randIndx = Math.floor(Math.random() * quotes.length);
  document.querySelector("blockquote").innerHTML =
    "<p><span id='quote-mark'>&#8220;</span>" +
    quotes[randIndx][0] +
    "</p>" +
    "<p id='author'>- " +
    quotes[randIndx][1] +
    "</p>";
}

// Magic
var txtbx = document.querySelector("#magic-string");
function ClearIt() {
  txtbx.value = "";
}
function Capitalize() {
  txtbx.value = txtbx.value.toUpperCase();
}
function Sort() {
  txtbx.value = txtbx.value
    .split("\n")
    .sort()
    .join("\n");
}
function Reverse() {
  txtbx.value = txtbx.value
    .split("\n")
    .reverse()
    .join("\n");
}
function Strip() {
  txtbx.value = document
    .querySelector("#magic-string")
    .value.split("\n")
    .filter(e => e.trim() != "")
    .join("\n")
    .trim();
}
function AddNumbers() {
  txtbx.value = txtbx.value
    .split("\n")
    .map((elem, indx) => indx + 1 + ". " + elem)
    .join("\n");
}
function Shuffle() {
  currArr = txtbx.value.split("\n");
  var newArr = [];
  for (i = currArr.length - 1; i > 0; i--) {
    myval = currArr[i];
    indx = Math.floor(Math.random() * i);
    currArr[i] = currArr[indx];
    currArr[indx] = myval;
  }
  txtbx.value = currArr.join("\n");
}
