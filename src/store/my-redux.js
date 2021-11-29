// action
const action = { type: "increment" };
const action2 = { type: "decrement", payload: {} };

//action creator
const actionCreator = () => ({ type: "increment", payload: {} });

// reducer
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

//store
