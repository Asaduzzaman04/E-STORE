
export const  GetcardProducts = () =>{

    let cartProducts = sessionStorage.getItem("cartProducts")
     if(cartProducts === null){
        return [];
     }
     cartProducts = JSON.parse(cartProducts)
     
    
    return cartProducts 
    }