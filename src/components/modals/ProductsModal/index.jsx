import { ButtonUnstyled } from "@mui/base";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NMSelect } from "../../FormElements/NMSelect";
import { Select } from "../../FormElements/Select";
export const ProductsModal = ({ closeModal, isOpen, sn, id,
  product,
  category,
  manufacturer,
  cprice,
  sprice,
  available,
  unit,
  quantity,
  minQty,
}) => {
    const [pid ,setPid] = useState(id);
    const [pName ,setPName] = useState(product);
    const [pCat ,setPCat] = useState(category);
    const [pBrand ,setPBrand] = useState(manufacturer);
    const [pCprice ,setPCprice] = useState(cprice);
    const [pSprice ,setPSprice] = useState(sprice);
    const [pAvail ,setPAvail] = useState(available);
    const [pUnit ,setPUnit] = useState(unit);
    const [pQuan ,setPQuan] = useState(quantity);
    const [pMinQty ,setPMinQty] = useState(minQty);
    const [upDomain, setUpDomain] = useState("");
      
  const productData = {
    "_id":pid,
    "name":pName,
    "category":pCat,
    "manufacturer":pBrand,
    "costPrice":pCprice,
    "sellingPrice":pSprice,
    "availableQty":pAvail,
    "unitOfSale":pUnit,
    "qtyPerUnit":pQuan,
    "minimumQty":pMinQty,
  };

  
  // console.log(productData);
  const notify = (message) => toast(message);

  const handleProductUpdate = () => {
    if (
      !pid ||
      !pName ||
      !pCat ||
      !pBrand ||
      !pCprice ||
      !pSprice ||
      !pAvail ||
      !pUnit ||
      !pQuan ||
      !pMinQty
    ) {
      notify("All Fields Are Required");
    } else {   
      const body = JSON.stringify(productData);
      console.log(body);
    const upToken = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("domain", upDomain);
    myHeaders.append("AUTHORIZATION", "Bearer "+upToken);
    alert(myHeaders);
    axios.put("https://gotruhub-api.herokuapp.com/api/v1/products", productData, {headers: {"domain":upDomain,"AUTHORIZATION":"Bearer "+upToken}
  })
  .then(response => console.log(response.body))
  .then(result => {
    toast.error(result);

    toast.success("Update successful!");
    console.log(result);
    closeModal(false);
  })
  .catch(error => {
    toast.error("Update unsuccessful!");
    console.log(error);
  });
}
    }
useEffect(() => {
  const domAgent = JSON.parse(localStorage.getItem("agent"));
  setUpDomain(domAgent.domain);

},[])  
    return(
  <div
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      top: 0,
      left: 0,
      display: isOpen ? "flex" : "none",
    }}
    className="center z"
    onClick={() => closeModal(false)}
  >
    <Toaster/>
    <div
      style={{ width: 999, height: 604 }}
      className="bg-white z "
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="managemodal">
        <div className="mana">
          <h4>Product Details</h4>
          <button onClick={() => closeModal(false)} className="bad">
            <img src="./images/bad.svg" />
          </button>
        </div>
      </div>

      <section className="registertext">

        <section className="registeredPassword" style={{display:"block"}}>
          <div className="namedproduct" style={{width:"100%"}}>
            <div className="productinputType">
              <div className="productinputText">
              <label>Product name</label>
              <input type="text" placeholder="Product name" value={pName} onInput={(e) => setPName(e.target.value)} />
            </div>

            <div className="productinputText">
              <label>Category</label>
              <NMSelect
                className="categorizeText"
                placeholder={pCat}
                options={[
                  { label: "Others", value: "others" },
                ]}
                onChange={(e) => setPCat(e.target.value)}
              />
            </div>

            <div className="productinputText">
              <label>Manufacturer</label>
              <input type="text" placeholder="Enter Manufacturer" 
              value={pBrand} onInput={(e) => setPBrand(e.target.value)} />
            </div>
            
            <div className="productinputText">
              <label>Unit of sale</label>
              <NMSelect
                className="categorizeText"
                placeholder={pUnit}
                options={[
                  { label: "Others", value: "others" },
                ]}
                onChange={(e) => setPUnit(e.target.value)}
              />
            </div>

            <div className="productinputText">
              <label>Minimum Quantity</label>
              <input type="number" placeholder="0" value={pMinQty} 
                style={{width:180}} onInput={(e) => setPMinQty(e.target.value)}/>
            </div>
          </div>

          <div className="productinputType">
            <div className="productinputText">
              <label>Cost Price (₦)</label>
              <input type="number" className="cprice" placeholder="0.00" value={pCprice} onInput={(e) => setPCprice(e.target.value)} />
            </div>

            <div className="productinputText">
              <label>Selling Price (₦)</label>
              <input type="number" placeholder="0.00" value={pSprice} onInput={(e) => setPSprice(e.target.value)
            } />
            </div>
            
            <div className="productinputText">
              <label>Available Quantity</label>
              <input type="number" placeholder="0" value={pAvail} onInput={(e) => setPAvail(e.target.value)} />
            </div>

              <div className="productinputText">
                <label>Quantity per unit</label>
              <input type="number" placeholder="0" value={pQuan} onInput={(e) => setPQuan(e.target.value)}/>
              </div>
          </div>
        </div>
        </section>
      </section>

      <section className="saveConfig">
        <div>
          <button  onClick={() => closeModal(false)}>Cancel</button>
          <button onClick={handleProductUpdate}>Update Product</button>
        </div>
      </section>
    </div>
  </div>
  );
  };
