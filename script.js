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


// Danh sách các màu nền có thể chọn
const backgroundColors = ["#f0a6ca", "#a8d8e6", "#ffd28d", "#c2e4f9", "#ffc1a0"];

const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];

// Lấy phần header và đặt màu nền bằng màu đã chọn
const header = document.querySelector("header");
const main = document.querySelector("main");
header.style.backgroundColor = randomColor;
header.style.boxShadow = `0 0 12px 4px ${randomColor}`;
main.style.borderColor = randomColor;
main.style.boxShadow = `0 0 12px 4px ${randomColor}`;
