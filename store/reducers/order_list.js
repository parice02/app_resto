//const initial = [{ food: "", price: "", quantity: "", total_price: "" }];
const initial = [];

function order_list(state = initial, action) {
  switch (action.type) {
    case "ADD_ORDER":
      return [...state, action.order] || state;
    case "DELETE_ALL_VISITES":
      return { orders: [] };
    default:
      return state;
  }
}

export default order_list;
