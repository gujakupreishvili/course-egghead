import { main_container } from "./index.js";
let three_div; // Declare a variable to store the reference to the parent div
export function three_container(
  width,
  height,
  backgroundColor,
  textContent1,
  textContent1_color,
  textContent1_size,
  img,
  ltl_rect_color,
  new_container_text2_color
) {
  // Check if the parent div already exists
  if (!three_div) {
    // If it doesn't exist, create a new parent div
    three_div = document.createElement("div");
    main_container.appendChild(three_div);
    three_div.style.display = "flex";
    three_div.style.flexDirection = "row";
    three_div.style.gap = "30px";
  }
  // Create a new container within the parent div
  const new_container = document.createElement("div");
  three_div.appendChild(new_container);
  // Set container properties
  const img_new_container = document.createElement("img");
  new_container.appendChild(img_new_container);
  img_new_container.src = img;
  img_new_container.style.width = "70px";
  img_new_container.style.height = "76px";
  const new_container_text1 = document.createElement("h3");
  new_container.appendChild(new_container_text1);
  new_container_text1.textContent = textContent1;
  new_container_text1.style.color = textContent1_color;
  new_container_text1.style.fontSize = textContent1_size;
  new_container_text1.style.marginTop = "20px";
  new_container.style.padding = "35px 40px";
  new_container.style.width = width;
  new_container.style.height = height;
  new_container.style.backgroundColor = backgroundColor;
  // ltl-rct
  const ltl_rect = document.createElement("hr");
  new_container.appendChild(ltl_rect);
  ltl_rect.style.width = "50px";
  ltl_rect.style.height = "2px";
  ltl_rect.style.marginTop = "20px";
  ltl_rect.style.backgroundColor = ltl_rect_color;
  // second text
  const new_container_text2 = document.createElement("p");
  new_container.appendChild(new_container_text2);
  new_container_text2.textContent =
    "The gradual accumulation of information about atomic and small-scale behaviour...";
  new_container_text2.style.width = "222px";
  new_container_text2.style.height = "60px";
  new_container_text2.style.color = new_container_text2_color;
  new_container_text2.style.fontSize = "14px";
  new_container_text2.style.marginTop = "20px";
}
