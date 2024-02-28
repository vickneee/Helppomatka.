// CREATING a Short ERROR MESSAGE Catcher
export const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
