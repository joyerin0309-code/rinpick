$(function () {
    $('.hamburger-btn').click(function () {
        $('.header-nav').addClass('on');
    });

    $('.close-btn').click(function () {
        $('.header-nav').removeClass('on');
    });

    $('.header-nav a').click(function () {
        $('.header-nav').removeClass('on');
    });

    $(".privacy-open").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".privacy-popup").show();
    });

    $(".privacy-popup__close").on("click", function () {
        $(".privacy-popup").hide();
    });


});

// document.addEventListener("DOMContentLoaded", () => {
//     const section = document.querySelector(".special-snap");
//     if (!section) return;

//     const cards = Array.from(section.querySelectorAll(".special__card"));
//     if (!cards.length) return;

//     let isMoving = false;
//     let tops = [];
//     let lastWheelTime = 0;

//     const updateTops = () => {
//         tops = cards.map(card =>
//             Math.round(card.getBoundingClientRect().top + window.scrollY)
//         );
//     };

//     // 최초/리사이즈/로드 시 갱신
//     updateTops();
//     window.addEventListener("resize", updateTops);
//     window.addEventListener("load", updateTops);

//     const getNextIndex = (y) => {
//         for (let i = 0; i < tops.length; i++) {
//             if (tops[i] > y + 10) return i;   // 현재보다 아래 첫 카드
//         }
//         return tops.length - 1;
//     };

//     const getPrevIndex = (y) => {
//         for (let i = tops.length - 1; i >= 0; i--) {
//             if (tops[i] < y - 10) return i;   // 현재보다 위 마지막 카드
//         }
//         return 0;
//     };

//     const moveTo = (idx) => {
//         if (idx < 0 || idx >= tops.length) return;

//         isMoving = true;
//         window.scrollTo({ top: tops[idx], behavior: "smooth" });

//         setTimeout(() => {
//             isMoving = false;
//         }, 480);
//     };

//     const wheelHandler = (e) => {
//         // ✅ 모바일/태블릿은 자연 스크롤
//         if (window.matchMedia("(max-width: 768px)").matches) return;

//         // ✅ 렉 방지 쓰로틀
//         const now = Date.now();
//         if (now - lastWheelTime < 200) return;
//         lastWheelTime = now;

//         if (isMoving) {
//             e.preventDefault();
//             return;
//         }

//         const sectionTop = section.getBoundingClientRect().top + window.scrollY;
//         const sectionBottom = sectionTop + section.offsetHeight;

//         const winTop = window.scrollY;
//         const winBottom = winTop + window.innerHeight;

//         // ✅ special이 화면에 들어왔을 때만 개입
//         const inSpecial = winBottom > sectionTop + 80 && winTop < sectionBottom - 80;
//         if (!inSpecial) return;

//         if (!tops.length) updateTops();

//         const y = Math.round(window.scrollY);
//         const dir = e.deltaY > 0 ? 1 : -1;

//         const firstTop = tops[0];
//         const lastTop = tops[tops.length - 1];

//         const atFirst = y <= firstTop + 10;
//         const atLast = y >= lastTop - 10;

//         // ✅ 경계에서는 휠을 잡지 않음
//         // → 마지막 카드 후 다음 섹션으로 자연 이동
//         if (dir > 0 && atLast) return;
//         if (dir < 0 && atFirst) return;

//         e.preventDefault();

//         if (dir > 0) {
//             moveTo(getNextIndex(y));
//         } else {
//             moveTo(getPrevIndex(y));
//         }
//     };

//     // ✅ 핵심: passive false
//     window.addEventListener("wheel", wheelHandler, { passive: false });
// });


