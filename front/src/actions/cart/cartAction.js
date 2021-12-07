import { MODIFY_CART, ADD_QUANTITY } from "./actions-types";

export const modifyCart = (cart, newProduct, quantityInCart) => {
  return function (dispatch) {
    let checkIndex = cart.findIndex((c) => c.id === newProduct.id);

    if (checkIndex === -1) {
      newProduct.quantityInCart = parseInt(quantityInCart);
      cart.push(newProduct);
    } else {
      cart[checkIndex].quantityInCart += parseInt(quantityInCart);
    }

    let lsCart = JSON.stringify(cart);
    window.localStorage.setItem("cart", lsCart);

    dispatch({
      type: MODIFY_CART,
      payload: cart,
    });
  };
};

export const deleteItem = (cart, product) => {
  return function (dispatch) {
    console.log("DELETE ITEM TRIGGERED ?");
    let newCart = cart.filter((c) => c.id !== product.id);

    let lsCart = JSON.stringify(newCart);
    window.localStorage.setItem("cart", lsCart);
    dispatch({
      type: MODIFY_CART,
      payload: newCart,
    });
  };
};

//  //INSIDE HOME COMPONENT
//  if(action.type === ADD_TO_CART){
//   let addedItem = state.items.find(item=> item.id === action.id)
//   //check if the action id exists in the addedItems
//  let existed_item= state.addedItems.find(item=> action.id === item.id)
//  if(existed_item)
//  {
//     addedItem.quantity += 1
//      return{
//         ...state,
//          total: state.total + addedItem.price
//           }
// }
//  else{
//     addedItem.quantity = 1;
//     //calculating the total
//     let newTotal = state.total + addedItem.price

//     return{
//         ...state,
//         addedItems: [...state.addedItems, addedItem],
//         total : newTotal
//     }

// }
// }
