import { main_container } from "./index.js";
let buttons_div;
export function main_button_div(
  textContent,
  width,
  height,
  backgroundColor,
  borderRadius,
  color,
  border
) {
  // Check if the div already exists
  if (!buttons_div) {
    // If it doesn't exist, create a new div
    buttons_div = document.createElement("div");
    buttons_div.style.display = "flex";
    buttons_div.style.gap = "10px";
    buttons_div.style.marginBottom = "120px";
    main_container.appendChild(buttons_div);
  }
  const new_button = document.createElement("button");
  buttons_div.appendChild(new_button);
  new_button.textContent = textContent;
  new_button.style.width = width;
  new_button.style.height = height;
  new_button.style.backgroundColor = backgroundColor;
  new_button.style.borderRadius = borderRadius;
  new_button.style.color = color;
  new_button.style.border = border;
}