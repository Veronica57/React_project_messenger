export const crushReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (e) {
    console.log("error", e, action);
  }
};
