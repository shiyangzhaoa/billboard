const $ = selectors => document.querySelector(selectors);
const $all = selectors => document.querySelectorAll(selectors);

//用于展示的图片
const imgList1 = Array.from({ length: 11 }, (v, i) => `./image/face${i+1}.jpg`);
const imgList2 = Array.from({ length: 11 }, (v, i) => `./image/face${i+1}.jpg`);
const imgList3 = Array.from({ length: 11 }, (v, i) => `./image/face${i+1}.jpg`);
const imgList = imgList1.concat(imgList2, imgList3);

const faceList = Array.from({ length: 126 }, () => {
  const face = document.createElement("span");
  const img = document.createElement("img");
  const i = document.createElement("i");
  i.style.left = '-100%';
  face.append(img);
  face.append(i);
  return face;
});

const box = document.createElement("div");
box.classList.add('eoi-box');
faceList.forEach(ele => {
  box.append(ele);
});

document.body.appendChild(box);
//以上是创建dom的过程

let EOITextArr = 
[
  '                 ',
  '  xxxx  xx  xxx  ',
  '  x    x  x  x   ',
  '  xxxx x  x  x   ',
  '  x    x  x  x   ',
  '  xxxx  xx  xxx  ',
  '                 ',
];
let EOIArr = [];
EOITextArr.forEach((v, i) => {
  for(let j = 1; j < v.length; j++) {
    if (v[j] === 'x') {
      EOIArr.push(i * 18 + j);
    }
  }
})

const textArr = [].concat(EOIArr);
const imgArr = [].concat(EOIArr);

const imgEles = $all('img');
const spanEles = $all('span');
const iEles = $all('i');

const timer = setInterval(() => {
  const length = textArr.length;
  const showNumber = textArr.splice(Math.random() * length, 1);
  spanEles[showNumber].style.backgroundColor = '#F40';
  imgEles[showNumber].src = imgList.splice(Math.floor(Math.random() * imgList.length), 1);
  iEles[showNumber].style.left = '100%';
  if (!textArr.length) {
    clearInterval(timer);
    showImg();
  }
}, 25);

const imgSrc = Array.from({ length: 33 }, (v, i) => i);

const showImg = () => {
  const imgTimer = setInterval(() => {
    const length = imgArr.length;
    const [showNumber] = imgArr.splice(Math.random() * length, 1);
    const [imgIndex] = imgSrc.splice(Math.random() * imgSrc.length, 1);
    
    imgEles[showNumber].style.display = 'inline';
    spanEles[showNumber].style.backgroundColor = '#fff';
    iEles[showNumber].style.left = '-100%';

    if (imgArr.length === 0) {
      spanEles[showNumber].classList.add('you');
      clearInterval(imgTimer);
    }
  }, 25);
}