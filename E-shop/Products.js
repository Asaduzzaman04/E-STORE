import { addToCard } from "./addToCard";

const product = document.querySelector(".store");

const productUrl = "/Product.json";

const products = async () => {
  const res = await fetch(productUrl);
  const prodData = await res.json();

  prodData.forEach((element) => {
    const section = document.createElement("section");
    section.classList.add(`${element.elid}`)
    product.appendChild(section);
    section.innerHTML = `<div class='hover:rotate-y-180 bg-[#f6f8fc] flex flex-col justify-center items-center transition-all duration-300 ease-linear hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-105  gap-5  rounded-lg px-[7%] py-[5%] group '>
      <section class=" flex flex-col justify-center items-start gap-5">


        <div class=" bg-accent text-white font-light w-fit px-2.5 py-1.5 rounded-3xl group-hover:shadow-2xl shadow-blue-500/20 group-hover:scale-105 transition-all duration-300 ease-linear">
        <span>${element.category}</span>
        </div>

        <div class=' flex justify-center items-center  overflow-hidden'>
        <img class='w-[90%] group-hover:scale-110 transition-all duration-300 ease-linear' src=${
          element.image
        } alt=${element.name}>
        </div>
    

        <div class="flex flex-col justify-center items-start  gap-1 ">
        <p class="text-2xl font-bold">${element.name}</p>
        <div class="text-yellow-400">
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        </div>
        </div>

        <div class="text-sm">
        <h1>${element.description}</h1>
        </div>


        <div class="flex justify-center items-center gap-3 text-xl"> 
            <p>$${parseInt(element.price)}</p>
            <p class="line-through"> $${parseInt(element.price * 1.5)}</p>
        </div>



        <div class="font-normal">
                <p >Total Stocks Available: <span id=${element.stock} > ${element.stock}</span> </p>
        </div>


        <div class="flex justify-center items-center gap-3"> 
            <p>Quantity(Pieces) :</p>
            
            <div class="flex  border-2 border-black rounded-md gap-5 text-xl px-2">
            <button id=${element.increment} class='border-r-2 border-black pr-2'> + </button>
            <p id=${element.qualityValue}>0</p>
            <button id=${element.decrement} class='border-l-2 border-black pl-2'> - </button>
            </div>
        </div>

    </section>
     <div>
         <button id=${element.id}
            class=" w-fit active:scale-95 border-Secondary border-[3px] px-4 py-1 rounded-md bg-Secondary text-white hover:bg-white hover:text-Secondary transition-all duration-300 shadow-xl"><i class="ri-shopping-cart-2-fill"></i> add to cart</button>
        </div>
    </div>`;

    // =====products-quantity=====\\

    let number = 0
  
    const quantity = document.getElementById(`${element.qualityValue}`)
    const inc = document.getElementById(`${element.increment}`)
    const dec = document.getElementById(`${element.decrement}`)
    const stock = document.getElementById(`${element.stock}`)
        
        inc.addEventListener("click", () =>{
         if(number < `${element.stock}`){
          number += 1
          quantity.textContent = number
          stock.textContent = Number(`${element.stock}`) - number
         }
        })

        dec.addEventListener("click", () => {
         if(number > 0){
          number -= 1
          quantity.textContent = number
          
         }
        })
  

   // =====gsap-Animation-on products===== \\

    gsap.from(`.${element.elid}`, {
      scrollTrigger: {
        trigger: `.${element.elid}`,
        scroller: "body",
        scrub: 3,
        start: "top 95%",
        end: "top 40%"
      },
      duration: 0.7,
      y: 60,
      opacity: 0,
    });


    // =====card-button-event-created=====\\
    const card = document.getElementById(`${element.id}`);
    
  
    card.addEventListener("click", () => {
      if(number === 0){
        confirm(`First Add Quantity of ${element.name}`)
      }else{
        addToCard(element,number)
        
      }
    });
  });
};
products();


//=====Promotion-section-gsap-animation=====\\

gsap.from(".quote-1",{
  opacity :0,
  x:-200,
  duration: 0.7,
scrollTrigger :{
  trigger: ".quote-1",
  scroller: "body",
  scrub: 3,
  start : "top 60%",
  end: "top 40% "
}

})
gsap.from(".quote-2",{
  opacity :0,
  y:200,
  duration: 0.7,
  scrollTrigger :{
    trigger: ".quote-2",
    scroller: "body",
    scrub: 3,
    start : "top 90%",
    end: "top 60% "
  }

})