import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ServiceListCheckbox } from "../ServiceListCheckbox";

export const ServiceList = () => {
  const [activeButton, setActiveButton] = useState("product");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [availableQty, setAvailableQty] = useState("");
  const [qtyPerUnit, setQtyPerUnit] = useState("");
  const [minimumQty, setMinimumQty] = useState("");
  const [unitOfSale, setUnitOfSale] = useState("");

  const notify = (message) => toast(message);
  const domAgents = JSON.parse(localStorage.getItem("agent"));
  const domain = domAgents.domain;
  const myHeaders = new Headers();
  myHeaders.append("domain", domain);
  // myHeaders.append("AUTHORIZATION", "Bearer "+token);
  const raw = {
    name,
    category,
    manufacturer,
    costPrice,
    sellingPrice,
    availableQty,
    qtyPerUnit,
    minimumQty,
    unitOfSale,

  };
const sraw = JSON.stringify(raw);
const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: sraw,
  redirect: 'follow'
};
const addNewProduct = async () => {
  console.log(raw);
  console.log(sraw);
  console.log(domain);
  const token = localStorage.getItem("token");
  // const resp = await fetch(
  //   "https://gotruhub-api.herokuapp.com/api/v1/products", requestOptions);
  const respo = axios.post("https://gotruhub-api.herokuapp.com/api/v1/products", raw, {headers: {
    "AUTHORIZATION":"Bearer "+token,
    "domain":domain,
  }
  });
  const data = await respo;
  if (data.error) {
    console.log(data);
    console.log(data.error);
    toast.error(data.error.message);
    return;
  }
  const myData = JSON.stringify(data?.data);
  toast.success("Product added successfully");
}
useEffect(() => {
  const items = localStorage.getItem("agent")
},[])
  return (
    <>
    <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid rgba(145, 64, 64, 1)",
              padding: "16px",
              color: "rgba(145, 64, 64, 1)",
              opacity:1
            },
          }}
        />
    <section className="productholder">
      <div className="sellproduct">
        <div className="addservice">
          <h3 style={{marginTop:29, marginBottom:20}}>Add New Product</h3>
        </div>
        <div className="greenproducts">
          <button
            onClick={() => setActiveButton("product")}
            className={activeButton === "product" ? "greenbg" : "whiteInvBtn"}
          >
            Products
          </button>
        </div>

        <div className="namedproduct">
          <div className="productinput">
            <label>Product name</label>
            <input type="text" placeholder="Product name"
            value={name} onInput={(e) => setName(e.target.value)}
            />
          </div>

          <div className="productinput">
            <label>Category</label>
            <input type="text" placeholder="Enter Category"
            value={category} onInput={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="productinput">
            <label>Manufacturer</label>
            <input type="text" placeholder="Enter Manufacturer"
            value={manufacturer} onInput={(e) => setManufacturer(e.target.value)}
            />
          </div>

          <div className="productinputType">
            <div className="productinputText">
              <label>Cost Price</label>  
              <input type="number" placeholder="0.00"
              step="0.01"
              value={costPrice} onInput={(e) => setCostPrice(e.target.value)}
              />
            </div>

            <div className="productinputText">
              <label>Selling Price</label>
              <input type="number" placeholder="0.00"
              step="0.01"
              value={sellingPrice} onInput={(e) =>{ setSellingPrice(e.target.value);
            }
              }
              />
            </div>
          </div>

          <div className="productinputType">
            <div className="productinputText">
              <label>Available Quantity</label>
              <input type="number" placeholder="0"
              value={availableQty} onInput={(e) => setAvailableQty(e.target.value)}
              />
            </div>
              <div className="productinputText">
                <label>Quantity per unit</label>      
                <input type="number" placeholder="0"
                value={qtyPerUnit} onInput={(e) => setQtyPerUnit(e.target.value)}
                />
              </div>
          </div>

          <div className="productinputType">
          <div className="productinputText">
            <label>Minimum Quantity</label>
            <input type="number" placeholder="0"
            value={minimumQty} onInput={(e) => setMinimumQty(e.target.value)}
            />
          </div>

            <div className="productinputText">
              <label>Unit of sale</label>
              <input type="text" placeholder="Enter Unit of sale"
              value={unitOfSale} onInput={(e) => setUnitOfSale(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="includebton">
          <button onClick={addNewProduct}>Add Product</button>
        </div>
      </div>
    </section>
    </>
  );
};
