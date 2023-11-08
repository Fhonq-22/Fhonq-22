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

// __________________________________________________
// _____________________SỞ THÍCH_____________________

function showHobbyInfo(hobbyName) {
    let description = '';
    let images = '';
    let audio = '';

    // Xác định nội dung và hình ảnh dựa vào tên sở thích
    if (hobbyName === 'Nghe nhạc') {
        description = 'Tớ thường dành thời gian để nghe nhạc, '+
        'bởi âm nhạc là cách tốt để thư giãn sau một ngày làm việc căng thẳng.';
        images = '<img src="IMG/hobbies/music01.gif" style="width: 80%; display: inline-block; margin: 0 10%;">';
        audio = '<audio controls autoplay style="width: 100%;"><source src="Audio/2OClock-Dori.mp3" type="audio/mpeg"></audio>';
    } else if (hobbyName === 'Đọc truyện tranh') {
        description = 'Tớ thường đắm chìm trong những tình tiết hấp dẫn trong truyện tranh. '+
        'Không biết cậu có thích đọc truyện Doraemon, Conan như tớ không nhỉ?';
        images = '<img src="IMG/hobbies/comic01.gif" style="width: 40%; display: inline-block; margin: 0 5%;">' +
                 '<img src="IMG/hobbies/comic02.gif" style="width: 40%; display: inline-block; margin: 0 5%;">';
    } else if (hobbyName === 'Chơi cờ') {
        description = 'Không chỉ giúp rèn luyện tư duy chiến thuật và sự kiên nhẫn, '+
        'nó còn khiến tớ có niềm vui lớn khi chiến thắng. '+
        'Cậu có muốn chơi với tớ 1 ván cờ không?';
        images = '<img src="IMG/hobbies/chess01.gif" style="width: 80%; display: inline-block; margin: 0 10%;">';
    } else if (hobbyName === 'Xem phim') {
        description = 'Tớ là người đam mê điện ảnh. Dù là phim hài, hoạt hình, học đường, BL, hoặc kinh dị, '+
        'thì tớ vẫn luôn sẵn sàng thả mình vào thế giới của điện ảnh.';
        images = '<img src="IMG/hobbies/movie01.gif" style="width: 80%; display: inline-block; margin: 0 10%;">';
    } else if (hobbyName === 'Du lịch') {
        description = 'Tớ yêu việc khám phá những nơi mới, '+
        'học về văn hóa địa phương, cũng như tạo ra những kỷ niệm đáng nhớ. '+
        'Cậu có muốn đến Hàn Quốc, DisneyLand cùng tớ không^^?.';
        images = '<img src="IMG/hobbies/travel01.gif" style="width: 40%; display: inline-block; margin: 0 5%;">' +
                 '<img src="IMG/hobbies/travel02.gif" style="width: 40%; display: inline-block; margin: 0 5%;">';
    } else if (hobbyName === 'Chơi game') {
        description = 'Chơi game là cách tuyệt vời để tớ thư giãn và kết nối với bạn bè. '+
        'Cậu có thể vào phần <strong>"Liên hệ"</strong> để xem tớ đang chơi game gì nhiều nhé!';
        images = '<img src="IMG/hobbies/game01.gif" style="width: 80%; display: inline-block; margin: 0 10%;">';
    } else if (hobbyName === 'Thú cưng') {
        description = 'Thú cưng không chỉ là bạn đồng hành mà còn là một phần quan trọng trong cuộc sống của tớ.'+
        'Tớ thì thích mèo, còn cậu?';
        images = '<img src="IMG/hobbies/pet01.gif" style="width: 80%; display: inline-block; margin: 0 10%;">';
    } else if (hobbyName === 'Chụp ảnh') {
        description = 'Tớ thích lưu giữ những khoảnh khắc đẹp qua những bức ảnh và chia sẻ chúng với mọi người. '+
        'Nó giúp tớ thấy thế giới xung quanh từ một góc độ mới.';
        images = '<img src="IMG/hobbies/photo01.gif" style="width: 80%; display: inline-block; margin: 0 10%;">';
    } else if (hobbyName === 'Vẽ') {
        description = 'Đây cũng là cách để tớ thư giãn và tạo ra những tác phẩm "độc đáo".';
        images = '<img src="IMG/hobbies/draw01.gif" style="width: 80%; display: inline-block; margin: 0 10%;">';
    } else if (hobbyName === 'Học ngoại ngữ') {
        description = 'Tớ luôn quan tâm đến việc học ngoại ngữ và hiện tớ đang cố học tiếng Trung.';
        images = '<img src="IMG/hobbies/study01.gif" style="width: 80%; display: inline-block; margin: 0 10%;">';
    } else if (hobbyName === 'Thiên văn học') {
        description = 'Tớ thích quan sát sao trên bầu trời đêm và các hiện tượng thiên văn. '+
        'Cùng lắng nghe câu chuyện của các ngôi sao và hành tinh trong vũ trụ nhá...';
        images = '<img src="IMG/hobbies/universe01.gif" style="width: 40%; display: inline-block; margin: 0 5%;">' +
                 '<img src="IMG/hobbies/universe02.gif" style="width: 40%; display: inline-block; margin: 0 5%;">';
    }

    Swal.fire({
        title: hobbyName,
        html: '<p>' + description + '</p>' + images + audio,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            content: 'hobby-popup'
        }
    });
}

// _______________________________________________
// _____________________DỰ ÁN_____________________

function toggleDropdown(element) {
    var dropdown = element.nextElementSibling;
    var dropdownContent = dropdown.querySelector(".dropdown-content");
    dropdownContent.classList.toggle("show");
}

function showDetails() {
    const target = event.target;
    const href = target.getAttribute('href');

    if (!href) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
        Swal.fire({
            text: "Dự án không khả dụng!",
            icon: "error",
            confirmButtonText: "OK"
        });
    }
}

function showParticipants(projectId) {
    var participantsList = document.getElementById('participants-list-' + projectId);
    if (participantsList.style.display === 'block') {
        participantsList.style.display = 'none';
    } else {
        participantsList.style.display = 'block';
    }
}

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


// ______________________________________________
// _____________________KHÁC_____________________

$(document).ready(function () {
    $(".task").click(function () {
        var $task = $(this);
        $task.addClass("clicked");
        setTimeout(function() {
            $task.removeClass("clicked");
        }, 500);

        var $taskContent = $task.find(".task-content");
        var $taskCircle = $task.find(".task-circle");
        $taskCircle.toggleClass("clicked");
        $taskContent.find(".task-time, .task-description").toggle();
    });
});
