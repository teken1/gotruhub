import React, { useContext, useEffect, useState } from "react";
import { DeskData } from "../DeskData";
import toast, { Toaster } from "react-hot-toast";
export const DeskRow = ({ sn }) => {
  const [productsData, setProductsData] = useState([]);
  const notify = (message) => toast(message);

  const token = localStorage.getItem("token");
  const myHeaders = new Headers();
    myHeaders.append("domain", "smart");
    myHeaders.append("AUTHORIZATION", "Bearer "+token);

  const getProductList = async () => {
    
    const resp = await fetch(
      "https://gotruhub-api.herokuapp.com/api/v1/products",
      {
        method: "GET",
        headers: myHeaders,
        redirect: 'follow',
      }
    );
    const data = await resp.json();
    if (data.error) {
      notify(data.error.message);
      return;
    }
    console.log(data.products);
    localStorage.setItem("products", JSON.stringify(data.products));
    return data;
  }
  useEffect(() => {
    ( async function renderProducts() {
      const lists = await getProductList();
      const dataLists = lists.products;
      console.log(dataLists);
      setProductsData(dataLists);
    })();
  
  }, []);
  return (
    <>
    {productsData.map((products,idx) => {
      return(
    <tr>
      <DeskData
        sn={sn}
        category={"Chocolate"}
        product={"Chocolate"}
        available={126}
        selling={"N 123,098.00"}
        quantity={0}
        action={"Add to cart"}
      />
    </tr> 
    )
  })}
  </>
  );
};
