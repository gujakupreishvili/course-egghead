export const footer_conteiner = document.getElementsByTagName("footer")[0];
footer_conteiner.style.display = "flex";
footer_conteiner.style.flexDirection = "column";
footer_conteiner.style.alignItems = "center";
footer_conteiner.style.gap = "0px";
footer_conteiner.style.padding = "160px 0 200px";
footer_conteiner.style.background = "#fff";
export function footer_function() {
  const footer_div = document.createElement("div");
  footer_conteiner.appendChild(footer_div);
  footer_div.style.display = "flex";
  footer_div.style.alignItems = "center";
  // first -foooter -text
  const Practice_advice = document.createElement("p");
  footer_div.appendChild(Practice_advice);
  Practice_advice.style.width = "114px";
  Practice_advice.textContent = "Practice Advice";
  Practice_advice.style.color = "#23A6F0";
  const footer_h1 = document.createElement("h1");
  // second footer -text
  footer_conteiner.appendChild(footer_h1);
  footer_h1.style.width = "381px";
  footer_h1.style.fontSize = "40px";
  footer_h1.style.color = "#252B42";
  footer_h1.textContent = "Featured Products";
  footer_h1.style.textAlign = "center";
  footer_h1.style.marginTop = "10px";
  // third text
  const footer_p = document.createElement("p");
  footer_conteiner.appendChild(footer_p);
  footer_p.style.width = "469px";
  footer_p.style.fontSize = "14px";
  footer_p.style.lineHeight = "20px";
  footer_p.style.color = "#737373";
  footer_p.textContent =
    "Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics ";
  footer_p.style.marginTop = "10px";
  footer_p.style.textAlign = "center";
  footer_p.style.marginBottom = "80px";
  // input container
  const footer_btn_div = document.createElement("div");
  footer_conteiner.appendChild(footer_btn_div);
  footer_btn_div.style.display = "flex";
  const input_container = document.createElement("input");
  footer_btn_div.appendChild(input_container);
  input_container.style.width = "571px";
  input_container.style.height = "58px";
  input_container.placeholder = "Your Email";
  input_container.style.paddingLeft = "20px";
  // submit container
  const submit = document.createElement("button");
  footer_btn_div.appendChild(submit);
  submit.style.width = "117px";
  submit.style.height = "58px";
  submit.style.padding = "15px,22.5px";
  submit.style.backgroundColor = "#23A6F0";
  submit.style.border = "none";
  submit.style.borderRadius = "0px,5px,5px,0px";
  submit.textContent = "Subscribe";
  submit.style.color = "#fff";
  submit.style.fontSize = "14px";
}
