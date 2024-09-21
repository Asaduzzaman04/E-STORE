const product = document.querySelector(".store");

const productUrl = "./Product.json";

const products = async () => {
  const res = await fetch(productUrl);
  const prodData = await res.json();
  prodData.forEach((element) => {
    const section = document.createElement("section");
    product.appendChild(section);
    section.innerHTML = `<div class='bg-[#f6f8fc] flex flex-col justify-center items-center transition-all duration-300 ease-linear hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-105  gap-5  rounded-lg px-[7%] py-[5%] group '>
      <section class=" flex flex-col justify-center items-start gap-5">


        <div class=" bg-accent text-white font-light w-fit px-2.5 py-1.5 rounded-3xl">
        <span>${element.category}</span>
        </div>

        <div class=' flex justify-center items-center  overflow-hidden'>
        <img class='w-[90%] group-hover:scale-110 transition-all duration-300 ease-linear' src=${element.image} alt=${element.name}>
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
                <p>Total Stocks Available: ${element.stock}</p>
        </div>


        <div class="flex justify-center items-center gap-3"> 
            <p>Quantity(Pieces) :</p>
            
            <div class="flex  border-2 border-black rounded-md gap-5 text-xl px-2">
            <button class='border-r-2 border-black pr-2'> + </button>
            <p> 0</p>
            <button class='border-l-2 border-black pl-2'> - </button>
            </div>
        </div>

    </section>
     <div>
         <button 
            class=" w-fit active:scale-95 border-Secondary border-[3px] px-4 py-1 rounded-md bg-Secondary text-white hover:bg-white hover:text-Secondary transition-all duration-300 shadow-xl"><i class="ri-shopping-cart-2-fill"></i> add to cart</button>
        </div>
    </div>`;
  });
};
products();
