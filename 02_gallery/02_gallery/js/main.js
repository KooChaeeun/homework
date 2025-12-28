let data = [
    {
        id: 1,
        title: '파묘',
        desc: '미국 LA에서 거액의 의뢰를 받은 무속인과 풍수사가 기이한 병이 대물림되는 집안의 묘를 파헤치면서 벌어지는 미스터리 오컬트 영화.',
        thumurl: 'images/thum0.jpg',
        bigurl: 'images/img0.jpg',
    },
    {
        id: 2,
        title: '범죄도시',
        desc: '괴물형사 마석도가 강력반 팀원들과 함께 잔혹한 범죄 조직을 소탕하기 위해 펼치는 통쾌한 범죄 액션 영화.',
        thumurl: 'images/thum1.jpg',
        bigurl: 'images/img1.jpg',
    },
    {
        id: 3,
        title: '부산행',
        desc: '정체불명의 바이러스가 퍼진 대한민국, 서울에서 부산으로 향하는 KTX 안에서 벌어지는 극한의 생존을 그린 재난 좀비 영화.',
        thumurl: 'images/thum2.jpg',
        bigurl: 'images/img2.jpg',
    },
    {
        id: 4,
        title: '기생충',
        desc: '전원 백수인 기택 가족이 부유한 박 사장 집에 하나둘씩 취업하며 벌어지는 예기치 못한 사건을 그린 블랙코미디 스릴러.',
        thumurl: 'images/thum3.jpg',
        bigurl: 'images/img3.jpg',
    },
    {
        id: 5,
        title: '신과함께: 죄와 벌',
        desc: '사후 세계에 도착한 망자가 49일 동안 7개의 지옥에서 재판을 받으며 자신의 삶을 되돌아보는 판타지 드라마 영화.',
        thumurl: 'images/thum4.jpg',
        bigurl: 'images/img4.jpg',
    },
    {
        id: 6,
        title: '올드보이',
        desc: '15년 동안 이유도 모른 채 감금되었다 풀려난 한 남자가 자신을 가둔 인물을 찾아 복수에 나서는 강렬한 복수 스릴러.',
        thumurl: 'images/thum5.jpg',
        bigurl: 'images/img5.jpg',
    },
    {
        id: 7,
        title: '아바타',
        desc: '인류가 자원을 채굴하기 위해 외계 행성 판도라에 침입하면서 원주민 나비족과 벌이는 갈등과 공존의 이야기를 그린 SF 대작.',
        thumurl: 'images/thum6.jpg',
        bigurl: 'images/img6.jpg',
    },
    {
        id: 8,
        title: '인터스텔라',
        desc: '지구의 미래가 위기에 처한 상황에서 인류의 생존을 위해 우주로 떠난 탐사대의 시간과 공간을 초월한 여정을 그린 SF 영화.',
        thumurl: 'images/thum7.jpg',
        bigurl: 'images/img7.jpg',
    },
];

const prevBtn = document.querySelector('.btn.prev');
const nextBtn = document.querySelector('.btn.next');
const thumImg = document.querySelector('.list-img article img');
const title = document.querySelector('.list-img article strong');
const desc = document.querySelector('.list-img article .txt');
const bigImg = document.querySelector('.big-img img');
const currentNum = document.querySelector('.current');
const totalNum = document.querySelector('.total');

let cnt = 0;
const total = data.length;

const updateSlide = () => {
    const item = data[cnt];
    thumImg.src = item.thumurl;
    thumImg.alt = item.title;
    title.textContent = item.title;
    desc.textContent = item.desc;
    bigImg.src = item.bigurl;
    bigImg.alt = item.title;

    currentNum.textContent = cnt + 1;
    totalNum.textContent = total;

    prevBtn.style.visibility = (cnt === 0) ? 'hidden' : 'visible';
    nextBtn.style.visibility = (cnt === total - 1) ? 'hidden' : 'visible';
};
/* if문으로 풀어쓰기
if (cnt === 0) {
    prevBtn.style.visibility = 'hidden';
} else {
    prevBtn.style.visibility = 'visible';
} 
*/

nextBtn.addEventListener('click', () => {
    if (cnt < total - 1) {
        cnt++;
        updateSlide();
    }
});
prevBtn.addEventListener('click', () => {
    if (cnt > 0) {
        cnt--;
        updateSlide();
    }
});

updateSlide();