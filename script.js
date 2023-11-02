// __________________________________________________
// _____________________CÔNG TẮC_____________________

const themeButton = document.getElementById("theme-button");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Thay đổi trạng thái của nút chuyển đổi
  if (document.body.classList.contains("dark-theme")) {
    themeButton.classList.add("active");
  } else {
    themeButton.classList.remove("active");
  }
});

// ________________________________________________________
// _____________________MÀU NGẪU NHIÊN_____________________

const backgroundColors = ["#f0a6ca", "#a8d8e6", "#ffd28d", "#c2e4f9", "#ffc1a0"];

const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
const header = document.querySelector("header");
const main = document.querySelector("main");
const abouttag = document.querySelector(".tag");
header.style.backgroundColor = randomColor;
header.style.boxShadow = `0 0 12px 4px ${randomColor}`;
main.style.borderColor = randomColor;
main.style.boxShadow = `0 0 12px 4px ${randomColor}`;
abouttag.style.backgroundColor = randomColor;

// _________________________________________________
// _____________________CÁC TAG_____________________

const tags = document.querySelectorAll(".tag");
const tagContents = document.querySelectorAll(".tag-content");
tags.forEach((tag) => {
    tag.style.borderColor = randomColor;
    tag.addEventListener("click", () => {
        const selectedTag = tag.getAttribute("data-tag");
        tagContents.forEach((content) => {
            content.classList.remove("active");
            if (content.id === selectedTag) {
                content.classList.add("active");
            }
        });
        // Loại bỏ màu nền của tất cả các tag trước khi thay đổi màu nền cho tag được nhấn
        tags.forEach((otherTag) => {
            otherTag.style.backgroundColor = null;
        });
        tag.style.backgroundColor = randomColor;
    });
});
