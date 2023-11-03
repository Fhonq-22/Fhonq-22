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

const backgroundColors = [
    "#f0a6ca", "#a8d8e6", "#ffd28d", "#c2e4f9", "#ffc1a0",
    "#b19cd9", "#a3e4d7", "#f0ceaa", "#d8e9f0", "#f7c6b9",
    "#f5e3e0", "#94e3d9", "#ffb6b9", "#99ddcc", "#f5c3ad",
    "#d6a2e0", "#9fb6cd", "#f3c7bd", "#ace7eb", "#c6e59e",
    "#ee99ac", "#88c0d0", "#b5a4cb", "#a0e5e9", "#f3ded7"
];

const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
const header = document.querySelector("header");
const main = document.querySelector("main");
const abouttag = document.querySelector(".tag");
const alltag = document.querySelector(".tags");

header.style.backgroundColor = randomColor;
header.style.boxShadow = `0 0 12px 4px ${randomColor}`;
main.style.borderColor = randomColor;
main.style.boxShadow = `0 0 12px 4px ${randomColor}`;
abouttag.style.backgroundColor = randomColor;
alltag.style.borderBottom = `2px solid ${randomColor}`;

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

// ________________________________________________
// _____________________VỀ TÔI_____________________

const infoLabels = document.querySelectorAll('.info-label');

infoLabels.forEach((label) => {
    label.addEventListener('click', () => {
        // Lấy icon được chọn
        const icon = label.querySelector('i').classList;

        // Lấy nội dung của info-content tương ứng
        const infoContent = label.nextElementSibling.textContent;

        let labelText = '';
        
        // Dựa vào icon để xác định label
        if (icon.contains('fa-user')) {
            labelText = 'Tên của tôi là:';
        } else if (icon.contains('fa-birthday-cake')) {
            labelText = 'Ngày sinh của tôi là:';
        } else if (icon.contains('fa-map-marker')) {
            labelText = 'Nơi ở của tôi là:';
        } else if (icon.contains('fa-bullseye')) {
            labelText = 'Mục tiêu của tôi là:';
        }

        // Tạo nội dung cho thông báo
        if (labelText) {
            title = labelText + ':';
        }
        
        // Hiển thị thông báo bằng Swal.fire
        Swal.fire({
            title: 'Thông tin',
            text: `${labelText} ${infoContent}`,
            icon: 'info',
        });
    });
});

// _________________________________________________
// _____________________LIÊN HỆ_____________________

const groups = document.querySelectorAll('.group');
groups.forEach((group) => {
  group.style.borderColor = randomColor;
  const h3 = group.querySelector('h3');
  h3.style.backgroundColor = randomColor;
  const as = group.querySelectorAll('a');
  as.forEach((a) => {
    a.style.backgroundColor = randomColor;
  });
});

const socialItems = document.querySelectorAll('.social-item');
socialItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Loại bỏ lớp "active" từ tất cả các phần tử trước
        socialItems.forEach((otherItem) => {
            otherItem.classList.remove('active');
        });
        item.classList.add('active');

        // Gán giá trị mới cho biến CSS --random-color
        document.documentElement.style.setProperty('--random-color', randomColor);
    });
});

// Lắng nghe sự kiện click trên liên kết Zalo
document.getElementById("zalo-link").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của liên kết
  Swal.fire({
    title: "Zalo QR",
    text: "Mở máy quét để kết bạn Zalo với mình nhé.",
    imageUrl: "IMG/ZaloQR.jpg", // Đường dẫn đến hình ảnh trong thư mục IMG
    imageAlt: "Hình ảnh",
    imageHeight: 200, 
    confirmButtonText: "Đã xong",
    confirmButtonColor: "#3085d6",
  });
});
