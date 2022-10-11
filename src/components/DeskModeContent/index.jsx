import React, { useState } from "react";
import { DeskRow } from "../DeskRow";
import { CartRow } from "../CartRow";
import { CheckoutModal, ProcessingModal, SuccessModal } from "../modals";

export const DeskModeContent = () => {
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [processingModal, setProcessingModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  // checkoutModal = isOpen;
  return (
    <main>
      <CheckoutModal isOpen={checkoutModal} closeModal={setCheckoutModal} />
      <ProcessingModal
        isOpen={processingModal}
        closeModal={setProcessingModal}
      />
      <SuccessModal isOpen={successModal} closeModal={setSuccessModal} />
      <section className="deskgrid">
        <section className="deskgridOne">
          <div className="deskgridProduct">
            <h3>Product List</h3>
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
              {[2, 4, 6, 4, 5, 6, 2, 4, 1].map((item, idx) => (
                <DeskRow sn={idx * 1 + 1} />
              ))}
            </tbody>
          </table>
        </section>

        <section className="cart">
          <section className="deskgridProduct">
            <h3>Cart</h3>
          </section>

          <table className="cartTable">
            <thead>
              <th>Product</th>
              <th>Qty added</th>
              <th>S. Price</th>
              <th>Action</th>
            </thead>
            <tbody>
              {[2, 4, 7, 3, 6, 8, 4].map((item, idx) => (
                <CartRow />
              ))}
            </tbody>
          </table>
          <section className="bottomHolder">
            <section className="checkout">
              <div className="sumProducts">
                <p>Total Price</p>
                <p>N 1,200,990.00</p>
              </div>
              <button
                onClick={() => {
                  setSuccessModal(true);
                }}
              >
                Check out
              </button>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};
