// utils/wrapAsync.js
module.exports = (fn) => {
  return (req, res, next) => {
    // wrap async function and catch errors
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};