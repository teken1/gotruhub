import React, { useEffect, useState } from "react";
import { ProductTableContent } from "../ProductTableContent";
import toast, { Toaster } from "react-hot-toast";

export const ProductTable = ({ isExpanded, searchValue }) => {
  const [count, setCount] = useState(1);
  // setCount = count + 1;
  const [productsData, setProductsData] = useState([]);

  const notify = (message) => toast(message);

  const token = localStorage.getItem("token");
  const domagent = localStorage.getItem("agent");
  const domain = domagent.domain;
  const myHeaders = new Headers();
    myHeaders.append("domain", domain);
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
      const myData = JSON.stringify(data?.products);
      return myData;
    }
    useEffect(() => {
      ( 
        async function renderProducts() {
        const lists = await getProductList();
        const dataLists = JSON.parse(lists);
        if (searchValue === "" || searchValue === null || searchValue === undefined) {
          setProductsData(dataLists);
        } else {
          const arrayLists = dataLists.filter(searchOutput => {
            return (searchOutput.name.includes(searchValue)
            || searchOutput.category.includes(searchValue)
            || searchOutput.manufacturer.includes(searchValue)
            );
          });
          setProductsData(arrayLists);
          // console.log(arrayLists);
        }
      }
      )();
    
    }, 
    
    [productsData]);
  return (
    <section>
      <table>
        <thead>
          <th>S/N</th>
          <th>Product</th>
          <th className={!isExpanded && "hide"}>Category</th>
          <th className={!isExpanded && "hide"}>Manufacturer</th>
          <th>C. Price</th>
          <th>S. Price</th>
          <th>Avail. Qty</th>
          <th className={!isExpanded && "hide"}>Unit of sale</th>
          <th>Qty rem.</th>
          <th className={!isExpanded && "hide"}>Action</th>
        </thead>
        <tbody>
          {productsData.length !== 0 ?
          productsData.map((item, idx) => {
            const product_id = item?._id;
            const product = item?.name;
            const category = item?.category;
            const manufacturer = item?.manufacturer;
            const costPrice = item?.costPrice;
            const sellingPrice = item?.sellingPrice;
            const availableQty = item?.availableQty;
            const unitOfSale = item?.unitOfSale;
            return(
            <tr>
            <ProductTableContent
              sn={idx * 1 + 1} 
              product_id={product_id}
              product={product}
              category={category}
              manufacturer={manufacturer}
              cprice={costPrice}
              sprice={sellingPrice}
              available={availableQty}
              unit={unitOfSale}
              quantity={item?.qtyPerUnit}
              miniQty={item?.minimumQty}
              action={"View"}
              isExpanded={isExpanded}
            /> 
          </tr>
            )
          }):
          <tr><td colSpan={11} align="center">No Data Found</td></tr>}
        </tbody>
      </table>

      <section className="nexted">
        <div className="backfront">
          <img src="./images/back.svg"></img>
          <p>{count}</p>
          <img src="./images/front.svg"></img>
        </div>
      </section>
    </section>
  );
};
