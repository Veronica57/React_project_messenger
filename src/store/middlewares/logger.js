export const logger = (store) => (next) => (action) => {
  console.log("dispatching:", action);
  console.log("prevState:", store.getState());

  const result = next(action);
  console.log("nextState:", store.getState());

  return result;
};
