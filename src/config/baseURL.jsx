// export default process.NODE_ENV !== "production"
//   ? "http://localhost:5005/api/v1"
//   : "https://mytownmart-api.herokuapp.com/api/v1";
console.log(process.env.NODE_ENV);

export default process.env.NODE_ENV
  ? "http://localhost:5005/api/v1"
  : "https://mytownmart-api.herokuapp.com/api/v1";
