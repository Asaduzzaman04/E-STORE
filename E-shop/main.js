// navbar-fixed-section
const navFix = document.querySelector(".nav-fixed");
const heroSection = document.querySelector(".hero-section");

window.addEventListener("scroll", () => {
  const yAxis = navFix.offsetTop;
  if (window.scrollY > yAxis) {
    navFix.classList.add("top");
  } else {
    navFix.classList.remove("top");
  }
});

// header-section-gsap-animation
gsap.from(".image", {
  delay: 0.3,
  duration: 2,
  x: 300,
  opacity: 0,
  ease: "elastic.out",
});

gsap.from(".hero-ex", {
  delay: 0.4,
  duration: 0.5,
  y: "300%",
  opacity: 0,
});
gsap.from(".hero-title", {
  delay: 0.6,
  duration: 0.6,
  y: "300%",
  opacity: 0,
});
gsap.from(".hero-des", {
  delay: 0.8,
  duration: 0.7,
  y: "300%",
  opacity: 0,
});

gsap.from(".products", {
  y: "1000%",
  delay: 1,
  duration: 0.7,
  opacity: 0,
});

// -----offer-section------
const offerMain = document.getElementById("offer-main");

const url = "http://localhost:5173/Data.json";

const offerData = async () => {
  const data = await fetch(url);
  const res = await data.json();
  for (const display of res) {
    const divition = document.createElement("section");
    divition.classList.add(`${display.class}`);
    offerMain.appendChild(divition);
    divition.innerHTML = `<section  class= "overflow-hidden z-20  p-6  flex flex-row justify-center items-start md:items-center md:flex-row md:justify-around border-r-[1px] relative before:absolute before:contents-[''] before:bottom-0 before:right-0 before:h-[90%] before:w-[40%] md:before:w-[45%] md:before:h-[80%] before:translate-x-1/4 before:translate-y-1/4 before:-z-10 before:bg-accent before:rounded-full">


      <div class="title flex flex-col justify-start items-start gap-5">
        <p class="uppercase font-light text-[#341f97] text-lg  italic">${display.yearOffer}</p>
        <h3 class="uppercase  text-2xl md:text-3xl">${display.offerPercent}</h3>
        <button class="offer-btn  text-xl transition-all duration-300 ease-linear hover:scale-[1.1] ">${display.shopBtn}<i class="ri-arrow-right-line "></i></button>
      </div>

      <div class=" overflow-hidden transition-all duration-300 ease-linear offer-image w-[80%] md:w-[100%] lg:w-[80%] hover:scale-[1.1]">
        <img src='${display.productImg}' alt="">
      </div>
    </section>`;
  }
  gsap.from(".childOne", {
    scrollTrigger: {
      trigger: "childOne",
      scroller: "body",
      scrub: 3,
      start: "top 25%",
      end: "top -60%",
    },
    duration: 1,
    y: 800,
    opacity: 0,
  });

  gsap.from(".childTwo", {
    scrollTrigger: {
      trigger: "childTwo",
      scroller: "body",
      scrub: 3,

      start: "top 25%",
      end: "top -60%",
    },
    duration: 1.5,
    y: 1500,
    opacity: 0,
  });

  gsap.from(".childThree", {
    scrollTrigger: {
      trigger: "childThree",
      scroller: "body",
      scrub: 3,

      start: "top 25%",
      end: "top -60%",
    },
    duration: 2,
    y: 2300,
    opacity: 0,
  });
};
offerData();
