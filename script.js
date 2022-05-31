function symbols(operand) {
  document.querySelector("textarea").textContent += operand;
}
function numbers(num) {
  document.querySelector("textarea").textContent += num;
  document.querySelector("textarea").style.fontSize = "200";
}
function clearScreen() {
  document.querySelector("textarea").textContent = " ";
}
function calculation() {
  let textcontent = querySelector("#screener").textContent;
  eval(textcontent.value);
}
