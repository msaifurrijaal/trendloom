import axios from "axios";

export const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      const response = {
        success: true,
        data: res.data,
      };
      callback(response);
    })
    .catch((err) => {
      const response = {
        success: false,
        error: err.message,
      };
      callback(response);
    });
};

export const getLimitProducts = (limit, callback) => {
  axios
    .get("https://fakestoreapi.com/products?limit=" + limit)
    .then((res) => {
      const response = {
        success: true,
        data: res.data,
      };
      callback(response);
    })
    .catch((err) => {
      const response = {
        success: false,
        error: err.message,
      };
      callback(response);
    });
};

export const getDetailProduct = (id, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      const response = {
        success: true,
        data: res.data,
      };
      callback(response);
    })
    .catch((err) => {
      const response = {
        success: false,
        error: err.message,
      };
      callback(response);
    });
};

export const getProductsByCat = (cat, callback) => {
  console.log(`https://fakestoreapi.com/products/${cat}`);
  axios
    .get(`https://fakestoreapi.com/products/category/${cat}`)
    .then((res) => {
      const response = {
        success: true,
        data: res.data,
      };
      callback(response);
    })
    .catch((err) => {
      const response = {
        success: false,
        error: err.message,
      }
      callback(response)
    });
};
