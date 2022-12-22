import React, { useState, useContext, useEffect } from "react";
import { CheckoutModal, ProcessingModal, SuccessModal } from "../modals";
import CustomSwitch from "../FormElements/CustomSwitch";
import { Context, AgentContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { FormControlLabel } from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

export const DeskModeContent = () => {
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [processingModal, setProcessingModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const {agent} = useContext(AgentContext);
  const navigate = useNavigate();
  const [isDeskMode, setIsDeskMode] = useState(true);
  const { navIsCollapsed, setNavIsCollaped } = useContext(Context);
  
  const [productsData, setProductsData] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const notify = (message) => toast(message);
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);

  const handleInputChange = (e, index) => {
    const productFind = productsData.findIndex((obj => obj._id == index));
    productsData[productFind]['quantity'] = Number(e.target.value);
    // let temp = quantity;
    // temp['quantity'] = e.target.value;
    // temp['index'] = index;
    // // temp = e.target.value;
    // setQuantity(temp);
  };

  const token = localStorage.getItem("token");
  const domagent = localStorage.getItem("agent");
  const domain = domagent.domain;
  const myHeaders = new Headers();
    myHeaders.append("domain", domain);
    myHeaders.append("AUTHORIZATION", "Bearer "+token);

  const handleRemoveCart = async (rval, ripx) => {
      const cartFind = cartData.find(({_id}) => _id === ripx);
      if (cartFind) {
        const cartTotal = cartFind.total;  
        const cartArray = cartData.filter(object => {
          return object._id !== ripx;
        });
        const theTotal = Number(total) - Number(cartTotal);
        setTotal(theTotal);
        setCartData(cartArray);
        toast.success("You have successfully removed " + cartFind.name + " from your cart.");
      }
  }

  const handleAdd2Cart = async (val, ipx) => {
      const myData = productsData;
      const productFind = myData.find(({_id}) => _id === ipx);
      const cartFind = cartData.find(({_id}) => _id === ipx);
      // productFind['quantity'] = Number(quantity);
      if (productFind.availableQty >= productFind.quantity) {
        if (cartFind) {
          toast.error("You can't add " + productFind.name + " more than once to your cart.");
        } else {
          const cartTotal = Number(productFind.quantity) * Number(productFind.sellingPrice);
          const cartItem = {
            _id:productFind._id,
            name:productFind.name,
            quantity:productFind.quantity,
            sellingPrice:productFind.sellingPrice,
            total:cartTotal
          }
          const cartArray = (prevData) => [
            ...prevData,cartItem
          ];
          const theTotal = Number(cartTotal) + Number(total);
          setTotal(theTotal);
          setCartData(cartArray);
          toast.success(productFind.name + " has been added to cart successfully.");
        }
      } else {
        toast.error(productFind.name + " have " + productFind.availableQty + " quantities left");
      }
  }
  
  const getProductList = async () => {
    
    const resp = await fetch(
      "https://gotruhubapi.herokuapp.com/api/v1/products",
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
      setProductsData(dataLists);
      console.log(dataLists);
    }
    )();
  
  }, 
  
  []);
  const handleCheckout = () => {
    total > 0 ? setCheckoutModal(true)
    :
    notify("There are no items in your cart!");
  }
  return (
    <main>
    <Toaster
      toastOptions={{
        className: ""
      }}
    />
      <CheckoutModal amountToPay={total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} isOpen={checkoutModal} closeModal={setCheckoutModal} />
      <ProcessingModal
        isOpen={processingModal}
        closeModal={setProcessingModal}
      />
      <SuccessModal isOpen={successModal} closeModal={setSuccessModal} />
      { isDeskMode ?
      <>
      <div
        className="flex justify-between align-center"
        style={{ marginBottom: 30, marginTop: 40 }}
      >
        <h1 className="f32 fg-grey1 fw700"> Desk Mode</h1>
        <div>
          <span className="fg-grey1">Desk mode</span>
          <FormControlLabel
            style={{marginLeft:0}}
            control={<CustomSwitch sx={{ m: 1 }} />}
            checked={isDeskMode}
            onChange={() => setIsDeskMode(!isDeskMode)}
          />
        </div>
      </div>
      <section className="deskgrid" style={{display:"flex",
        justifyContent:"space-between"
    }}>
        <section className="deskgridOne">
          <div className="deskgridProduct">
            <h3 style={{paddingBottom:0}}>Product List</h3>
            <div className="deskdiv">
              <div className="deskModeSort">
                <label>Sort:</label>
                <div className="desktop">
                  <p>Top to bottom</p>
                  <div>
                    <img src="./images/sort.svg" />
                  </div>
                </div>
              </div>
              <div className="desksearch">
                <div className="desksearchItems">
                  <img src="./images/searchicon.svg" />
                  <input type="search" placeholder={"Search for item "}></input>
                </div>
              </div>
            </div>
          </div>

          <table>
            <thead>
              <th>S/N</th>
              <th>Category</th>
              <th>Product</th>
              <th>Avail. Qty</th>
              <th>Selling Price</th>
              <th>Qty to purchase</th>
              <th>Action</th>
            </thead>
            <tbody>
              {productsData.map((product,iex) => {
                return(
                  <tr key={iex}>                
                    <td>{(iex * 1) + 1}</td>
                    <td>{product.category}</td>
                    <td>{product.name}</td>
                    <td>{product.availableQty}</td>
                    <td>₦{product.sellingPrice}</td>
                    <td>
                      <div>
                        <input
                          className="deskborder"
                          type="number"
                          step="1"
                          placeholder="1"
                          onInput={(e)=>{
                            handleInputChange(e,product._id)
                            }
                          }
                          min="1"
                          max={product.availableQty}
                        />
                      </div>
                    </td>
                    <td>
                      <div onClick={(val)=>{
                        handleAdd2Cart(val,product._id)
                        }} className="greenadd" style={{cursor:"pointer"}}>
                        <img src="../images/greenadd.svg" alt="Add to Card" />
                        Add to cart
                      </div>
                    </td>
                  </tr>
                  ) 
              })}
            </tbody>
          </table>
        </section>

        <section className="cart">
          <section className="deskgridProduct" style={{marginTop:36,marginBottom:36}}>
            <h3 style={{paddingBottom:0}}>Cart</h3>
          </section>

          <table className="cartTable">
            <thead>
              <th>Product</th>
              <th>Qty added</th>
              <th>S. Price</th>
              <th>Action</th>
            </thead>
            <tbody>
              {cartData.map((item, idx) => {
                return(
                  <tr key={idx}>       
                    <td>{item.name}</td>
                    <td>
                      <div className="cartsales">{item.quantity}</div>
                    </td>
                    <td>₦{item.sellingPrice}</td>
                    <td>
                      <div onClick={(rval)=>{
                        handleRemoveCart(rval,item._id)
                        }} style={{cursor:"pointer"}} className="cartActions">
                        <img src="./images/bad.svg" />
                      </div>
                    </td>
                  </tr>
                )
                })}
            </tbody>
          </table>
          <section className="bottomHolder">
            <section className="checkout">
              <div className="sumProducts">
                <p>Total Price</p>
                <p>₦ {total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
              </div>
              <button
                onClick={handleCheckout}
              >
                Check out
              </button>
            </section>
          </section>
        </section>
      </section>
      </>
      :
      navigate("/dashboard")
      }
    </main>
  );
};