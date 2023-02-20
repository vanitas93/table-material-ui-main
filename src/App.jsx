import "./App.css";
import { useEffect, useState } from "react";
import Table from "./components/Table";
import {
  loginRequest,
  getAllProductsLength,
  getProducts,
} from "./services/services";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [productsLength, setProductsLength] = useState(0);

  useEffect(() => {
    loginRequest();
    fetchAllProductsLength();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [page, rowsPerPage]);

  const fetchProducts = async () => {
    const products = await getProducts(rowsPerPage, page);
    setAllProducts(products);
  };

  const fetchAllProductsLength = async () => {
    const length = await getAllProductsLength();
    setProductsLength(length);
  };

  return (
    <div className="App">
      <Table
        products={allProducts}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        productsLength={productsLength}
      />
    </div>
  );
}

export default App;
