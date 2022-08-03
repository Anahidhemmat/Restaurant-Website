const appContainer = document.querySelector("#app-container");

const createImgElement = (srcAtr, classAtr = "", altAtr = "") => {
  const image = document.createElement("img");
  image.src = srcAtr;
  image.className = classAtr;
  image.alt = altAtr;
  return image;
};

const createButtonElement = (text = "", type = "", classAtr = "") => {
  const button = document.createElement("button");
  button.textContent = text;
  button.className = classAtr;
  button.type = type;
  return button;
};

const createNavElement = (classAtr = "", childElement = "") => {
  const nav = document.createElement("nav");
  nav.className = classAtr;
  nav.append(...childElement);
  return nav;
};

const createHeaderElement = (classAtr = "", childElement = []) => {
  const header = document.createElement("header");
  header.className = classAtr;
  header.append(...childElement);
  return header;
};

const createSectionElement = (classAtr = "", childElement = []) => {
  const section = document.createElement("section");
  section.className = classAtr;
  section.append(...childElement);
  return section;
};

const createAnchorElement = (
  hrefAtr,
  classAtr = "",
  childElement = [],
  text,
  target = "_self"
) => {
  const a = document.createElement("a");
  a.href = hrefAtr;
  a.className = classAtr;
  a.textContent = text;
  a.target = target;
  a.append(...childElement);
  return a;
};

const createFormElement = (classAtr = "", childElement = []) => {
  const form = document.createElement("form");
  form.className = classAtr;
  form.append(...childElement);
  return form;
};

const createInputElement = (
  classAtr = "",
  placeholderAtr = "",
  typeAtr = ""
) => {
  const input = document.createElement("input");
  input.className = classAtr;
  input.type = typeAtr;
  input.placeholder = placeholderAtr;
  return input;
};

const createPElement = (classAtr = "", text = "", childElement = []) => {
  const p = document.createElement("p");
  p.className = classAtr;
  p.textContent = text;
  p.append(...childElement);
  return p;
};

const createSubElement = (text, classAtr = "") => {
  const sub = document.createElement("sub");
  sub.textContent = text;
  sub.className = classAtr;
  return sub;
};

const createUlElement = (classAtr = "", childElement = []) => {
  const ul = document.createElement("ul");
  ul.className = classAtr;
  ul.append(...childElement);
  return ul;
};
const createLiElements = (texts = [], childElement = [], classAtr = "") => {
  const lis = texts.map((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    li.append(...childElement);
    li.className = classAtr;
    return li;
  });
  return lis;
};
const crteateIconElements = (classAtr = []) => {
  const icons = classAtr.map((iClass) => {
    const i = document.createElement("i");
    i.className = iClass;
    return i;
  });
  return icons;
};
const createIconElement = (classAtr = "") => {
  const i = document.createElement("i");
  i.className = classAtr;
  return i;
};

// ------- header section -------- //
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("show-navbar");
});
