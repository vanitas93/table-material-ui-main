import axios from "axios";

export const loginRequest = () => {
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
    }),
  })
    .then((res) => res.json())
    .then(console.log);
};

export const getAllProductsLength = async () => {
  const result = await axios("https://dummyjson.com/products");
  return result.data.total;
};

export const getProducts = async (rowsPerPage, page) => {
  const skip = page * rowsPerPage;
  const result = await axios(
    `https://dummyjson.com/products?limit=${rowsPerPage}&skip=${skip}`
  );
  return result.data.products;
};
