export const main_container = document.getElementsByTagName("main")[0];
import { main_button_div } from "./style.js";
main_container.style.display = "flex";
main_container.style.flexDirection = "column";
main_container.style.alignItems = "center";
main_container.style.gap = "80px";
main_container.style.padding = "220px 0 80px";
main_container.style.background = "#252B42";
// creat welcome
const text_div = document.createElement("div");
main_container.appendChild(text_div);
text_div.style.display = "flex";
text_div.style.flexDirection = "column";
text_div.style.alignItems = "center";
text_div.style.gap = "40px";
const first_text = document.createElement("p");
first_text.textContent = "welcome";
text_div.appendChild(first_text);
first_text.style.width = "77px";
first_text.style.color = "#23A6F0";
first_text.style.fontSize = "16px";
// creat  first h1 text
const text2 = document.createElement("h1");
text_div.appendChild(text2);
text2.textContent = "Selling on the internet like a pro";
text2.style.width = "542px";
text2.style.fontSize = "58px";
text2.style.color = "#fff";
text2.style.lineHeight = "80px";
text2.style.textAlign = "center";
// creat  text3
const text3 = document.createElement("p");
text_div.appendChild(text3);
text3.textContent =
  "We know how large objects will act, but things on a small scale just do not act that way";
text3.style.width = "536px";
text3.style.fontSize = "20px";
text3.style.color = "#fff";
text3.style.lineHeight = "30px";
text3.style.textAlign = "center";
main_button_div(
  "Get Quote Now",
  "193px",
  "52px",
  "#23A6F0",
  "5px",
  "white",
  "none"
);
main_button_div(
  "Learn More",
  "163px",
  "52px",
  "#252B42",
  "5px",
  "#23A6F0",
  "2px solid"
);
import { three_container } from "./app.js";
three_container(
  "328px",
  "292px",
  "#fff",
  "training Courses",
  "#252B42",
  "16px",
  "emoj-img.png",
  "#E74040",
  "#737373"
);
three_container(
  "328px",
  "292px",
  "#fff",
  "2,769 online courses",
  "#252B42",
  "16px",
  "green-img.png",
  "#E74040",
  "#737373"
);
three_container(
  "328px",
  "292px",
  "#23A6F0",
  "training Courses",
  "#fff",
  "16px",
  "white.png",
  "#fff",
  "#fff"
);
import { footer_function } from "./footer.js";
footer_function();
