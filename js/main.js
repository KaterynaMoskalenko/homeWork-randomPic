'use.sctrict';
const pics = [
  " url('./img/1.png') ",
  " url('./img/1.png')",
   " url('./img/2.png')",
     "url('./img/3.png')",
    "url('./img/4.png')",
    "url('./img/5.png')",
  " url('./img/6.png')",
    " url('./img/7.png')",
    "url('./img/8.png')",
   " url('./img/9.png')",
    "url('./img/10.png')",
];

const btn = document.querySelector('.containerBtn');
const containerPic = document.querySelector('.containerPic')

btn.addEventListener('click', () => {
    console.log('yes its me button');
    let randomNum = Math.floor(Math.random() * pics.length);
    let pic = pics[randomNum];
    console.log(pic);
    containerPic.style.backgroundImage = pic;  
});

