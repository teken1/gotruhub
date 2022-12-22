import { React, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ConfigureTable } from "../ConfigureTable";
import { ConfigureTableReport } from "../ConfigureTableReport";
import { Filter } from "../Filter";
import { TableNav } from "../Helpers/TableNav";
import { ReportRow } from "../ReportRow";
import { SalesModal } from "../modals";
import toast, { Toaster } from "react-hot-toast";

export const ReportPage = () => {
  const navigate = useNavigate();
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [salesModalIsOpen, setSalesModalIsOpen] = useState(false);
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const [salesData, setSalesData] = useState([]);
  const [uName, setUName] = useState("");
  const [uDept, setUDept] = useState("");

  const notify = (message) => toast(message);

  
  const handlePrint = () =>{
    const now = new Date().toDateString();
     const printSection = document.querySelector(".reportTable").outerHTML;
     const a= window.open('', '', 'height=500, width=500');
     a.document.write('<html>');
     a.document.write('<body > <h2>Sales Report Sheet Of '+uName+' Generated On ' + now + '<br/><br/>' );
     a.document.write(printSection);
     a.document.write('</body></html>');
     a.document.close();
     a.print();
    };

  const myId = searchParams.get('id');
  const token = localStorage.getItem("token");
  const domagent = localStorage.getItem("agent");
  const domain = JSON.parse(domagent).domain;
  const myHeaders = new Headers();
    myHeaders.append("domain", domain);
    myHeaders.append("AUTHORIZATION", "Bearer "+token);

    const getSalesList = async () => {
    
      const resp = await fetch(
        "https://gotruhubapi.herokuapp.com/api/v1/sales/"+myId,
        {
          method: "GET",
          headers: myHeaders,
          redirect: 'follow',
        }
      );
    
      const uresp = await fetch(
        "https://gotruhubapi.herokuapp.com/api/v1/users/"+myId,
        {
          method: "GET",
          headers: myHeaders,
          redirect: 'follow',
        }
      );
      const udata = await uresp.json();
      const rUdata = udata?.data;
      setUName(rUdata.firstName + " " + rUdata.lastName);
      setUDept(rUdata.department);
      const data = await resp.json();
      if (data.error) {
        notify(data.error.message);
        return;
      }
      const myData = JSON.stringify(data?.data);
      console.log(data);
      console.log(myData);
      return myData;
    }

  const changeEditState = () => {
    setEditIsOpen(!editIsOpen);
  };

useEffect(()=> {
  ( 
    async function renderReport() {
    const lists = await getSalesList();
    const dataLists = JSON.parse(lists);
    if (searchValue === "" || searchValue === null || searchValue === undefined) {
      setSalesData(dataLists);
    } else {
      const arrayLists = dataLists.filter(searchOutput => {
        return (searchOutput.name.includes(searchValue)
        || searchOutput.category.includes(searchValue)
        || searchOutput.manufacturer.includes(searchValue)
        );
      });
      setSalesData(arrayLists);
    }
  }
  )();
},[salesData])
  return (
    <main>
      <img className="goback" src="/images/go.svg"  onClick={() => navigate(-1)} />
      <SalesModal isOpen={salesModalIsOpen} />
      <section className="vertical">
        <section className="salesreport">
          <div className="reportfile">
            <h3>Report for {uName}</h3>

            <section className="sectionfilter">
              <div className="printbutts">
                <button onClick={handlePrint} className="reportbutt">Print Report</button>
                {/* <div onClick={changeEditState}>
                  {editIsOpen && (
                    <ConfigureTableReport
                      changeModalState={setSalesModalIsOpen}
                    />
                  )}

                  <button className="dotbutts" onClick={changeEditState}>
                    <img src="/images/3dots.svg"></img>
                  </button>
                </div> */}
              </div>
            </section>
          </div>

          <div className="department">
            <h3>Class/Department: {uDept}</h3>
          </div>

          <div className="reportTable">
            <table>
              <thead>
                <th>S/N</th>
                <th>Date</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Unit </th>
                <th>Unit Price</th>
                <th>T. amount</th>
                <th>Action</th>
              </thead>
              <tbody>
                { salesData.length >= 1 ?
                salesData.map((item, idx) => {
                  const _id = item._id;
                  const amount = item.amount;
                  const confirmedBy = item.confirmedBy;
                  const member = item.member;
                  const memberId = item.memberId;
                  const memberDept = item.memberDept;
                  const orderId = item.orderId;
                  const pid = item.product.pid;
                  const price = item.product.price;
                  const qty = item.product.qty;
                  const unit = item.product.unit;
                  const pname = item.product.name;
                  const orderedAt = item.orderedAt;
                  const updatedAt = item.updatedAt;
                  const paymentMethod = item.paymentMethod;
                  const state = item.state;
                  const totalQty = item.totalQty;
                return(
                  <ReportRow
                  sn={idx * 1 + 1} 
                  sales_id={_id}
                  amount={amount}
                  seller={confirmedBy}
                  cname={member}
                  cid={memberId}
                  cdept={memberDept}
                  orderId={orderId}
                  pid={pid}
                  pname={pname}
                  pprice={price}
                  pqty={qty}
                  punit={unit}
                  orderedAt={orderedAt}
                  updatedAt={updatedAt}
                  payType={paymentMethod}
                  state={state}
                  totalQty={totalQty}
                  />
                )
              }):
              <tr><td colSpan={8} align="center">No Data Found</td></tr>}
              </tbody>
            </table>
          </div>

          <section className="Navi">
            <TableNav />
          </section>
        </section>
      </section>

      <SalesModal isOpen={salesModalIsOpen} closeModal={setSalesModalIsOpen} />
    </main>
  );
};
