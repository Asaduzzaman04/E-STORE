import { GetcardProducts } from "./GetcardProducts";

export const addToCard = (element, number) => {
  const ArrStroge = GetcardProducts();

  let { id, name, price,  } = element;
  price = price * number;
  
  const include = ArrStroge.find((el) =>  el.id === id)

  if (include) {
    return false;
  }

  ArrStroge.push({ id, name, price, number  });

  sessionStorage.setItem("cartProducts", JSON.stringify(ArrStroge));

  const cardIconNum = document.getElementById("cartNum");
     cardIconNum.textContent = ArrStroge.length;
    
};
