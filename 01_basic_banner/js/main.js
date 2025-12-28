const slideData = [
  { img: "images/img0.jpg" },
  { img: "images/img1.jpg" },
  { img: "images/img2.jpg" },
  { img: "images/img3.jpg" },
  { img: "images/img4.jpg" }
];

const wrapper = document.querySelector(".swiper-wrapper");

slideData.forEach((item, index) => {
  wrapper.innerHTML += `
    <div class="swiper-slide">
      <img src="${item.img}" alt="">
      <div class="text">
        <h2>고양이${index} 타이틀</h2>
        <p>고양이${index}에 대한 설명입니다. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.lorem ipsum dolor sit amet.lorem ipsum dolor sit amet. lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  `;
});

const swiper = new Swiper(".banner", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
