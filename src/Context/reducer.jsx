export const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      const updatedCartInc = state.passengerType.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
      const newAmountInc = updatedCartInc.reduce(
        (amount, item) => amount + item.amount,
        0
      );
      return {
        ...state,
        passengerType: updatedCartInc,
        amount: newAmountInc,
      };

    case "dec":
      const updatedCartDec = state.passengerType.map((item) =>
        item.id === action.payload
          ? { ...item, amount: Math.max(item.amount - 1, 0) }
          : item
      );
      const newAmountDec = updatedCartDec.reduce(
        (amount, item) => amount + item.amount,
        0
      );
      return {
        ...state,
        passengerType: updatedCartDec,
        amount: newAmountDec,
      };

    default:
      return state;
  }
};
