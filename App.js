const barsBtn = document.querySelector(".bars__icon");
const arrowBtn = document.querySelector(".arrow__icon");
const sideBar = document.querySelector(".sidebar");
const iconText = document.querySelectorAll(".sidebar .sidebar__content .list__items li a .icons__text");
const tooltip = document.querySelectorAll(".tooltip");
const hoverText = document.querySelectorAll(".hover__text");
const accText = document.querySelector(".account__text");
const allIcons = document.querySelectorAll(".sidebar .sidebar__content .list__items li a i");
// const closeBtn = document.querySelector(".close__btn");
// const accordian = document.querySelector(".accordian");
// const accBtn = document.querySelector(".acc__click");
// const accSpan = document.querySelector(".text");


// const sideBar = document.querySelector(".sidebar");
// const openBtn = document.querySelector("#hamburger__menu");
// let items = document.querySelector(".items");
// let closeBtn2 = document.querySelector("#cancel");


barsBtn.addEventListener("click", open1);

function open1() {
    accText.style.display = `block`;
    arrowBtn.style.display = "block";
    barsBtn.style.display = "none";
    sideBar.style.width = "14em";
    iconText.forEach((e) => {
        e.style.fontSize = `20px`;
    });
    tooltip.forEach((e) => {
        e.style.opacity = `0`;
    });
    hoverText.forEach((e) => {
        e.style.opacity = `1`;
    });



}
// allIcons.forEach((icon) => {
//     icon.addEventListener('mouseover', (e) => {
//         const resultTool = e.target.clientY;
//         tooltip.style.translateY = resultTool
//     });
// });
arrowBtn.addEventListener("click", close);

function close() {
    accText.style.display = `none`;
    sideBar.style.width = "5em";
    arrowBtn.style.display = "none";
    barsBtn.style.display = "block";
    barsBtn.style.display = "block";
    iconText.forEach((e) => {
        e.style.fontSize = `0`;
    });
    tooltip.forEach((e) => {
        e.style.opacity = `1`;
    })
    hoverText.forEach((e) => {
        e.style.opacity = `0`;
    });

}





// barsBtn.addEventListener("click", () => {
//     if (!clicked) {
//         clicked = true;
//         barsBtn.innerHTML = ` <i class="fas fa-arrow-left"></i> `;
//         // arrowBtn.style.display = "block";
//         // barsBtn.style.display = "none";
//     } else {
//         clicked = false;
//         barsBtn.innerHTML = ` <i class="fas fa-bars"></i> `;
//         // arrowBtn.style.display = "none";
//         // barsBtn.style.display = "block";

//     }
// });








// let clicked = false;




// likeBtn.addEventListener("click", () => {
//     if (!clicked) {
//         clicked = true;
//         likeIcon.innerHTML = ` <i class="fas fa-thumbs-up "></i>`
//         count.textContent++;
//     } else {
//         clicked = false;
//         likeIcon.innerHTML = ` <i class="far fa-thumbs-up "></i>`;
//         count.textContent--;
//     }
// });
// dislikeBtn.addEventListener("click", () => {
//     if (!clicked) {
//         clicked = true;
//         dislikeIcon.innerHTML = ` <i class="fas fa-thumbs-down "></i>`
//         count2.textContent++;
//     } else {
//         clicked = false;
//         dislikeIcon.innerHTML = ` <i class="far fa-thumbs-down "></i>`;
//         count2.textContent--;
//     }
// });




// openBtn.addEventListener("click", open);

// function open() {
//     // sideBar.style.width = "250px"
//     items.style.display = "block";
//     closeBtn2.style.right = "0";
//     openBtn.style.left = "-50px";
//     sideBar.classList.add("activeSidebar")
//     backHover.style.width = "100%";
// }
// closeBtn2.addEventListener("click", close2);

// function close2() {
//     backHover.style.width = "0";
//     openBtn.style.left = "0";
//     // sideBar.style.width = "0";
//     items.style.display = "block";
//     closeBtn2.style.right = "-40px";
//     sideBar.classList.remove("activeSidebar")
//         // closeBtn2.classList.add("cancelActive");
// }