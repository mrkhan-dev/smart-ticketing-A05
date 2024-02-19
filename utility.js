function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function setTextElementByClassList(elementId, value) {
  const element = document.getElementsByClassName(elementId);
  element.innerText = value;
}

function setBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-[#1DD100]");
}

function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-[#1DD100]");
}

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function blurElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("blur");
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementTextValue = element.innerText;
  const value = parseInt(elementTextValue);
  return value;
}

function getTElementById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function removeClassById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getInputElementById(elementId) {
  const element = document.getElementById(elementId);
  const value = element.value;
  return value;
}
