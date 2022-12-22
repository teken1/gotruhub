import React, { useRef, useState } from "react";
import { Input, InputWithVis, Button, TextIconButton } from "../..";

export const ImportUserSheetTable = ({ closeModal, isOpen }) => {
  
  const [uploadSheet, setUploadSheet] = useState("");
  const docs = uploadSheet;

  const uploadSheetRef = useRef();

  const uploadSheets = () => {
    // document.querySelector(".sheetUpload")?.click();
    uploadSheetRef?.current?.click();
  };
  const handleFileChange = (sheet, kind) => {
    console.log(sheet.length);
    if (kind === "excel") { 
      setUploadSheet(sheet[0]);
    }
  };

  const handleDownload = () => {
    fetch('usersSheet.xlsx').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'usersSheet.xlsx';
          alink.click();
      })
  })
  }
return(
  <div
    style={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.25)",
      display: isOpen ? "flex" : "none",
      top: 0,
      left: 0,
    }}
    className="center z"
    onClick={() => closeModal(false)}
  >
    <div
      style={{ width: "60vw", height: 600, overflowY: "auto" }}
      className="bg-white z "
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div>
        <div className="managemodal">
          <div className="mana">
            <h4>Import User Data</h4>
            <button onClick={() => closeModal(false)} className="bad">
              <img src="./images/bad.svg" />
            </button>
          </div>
        </div>
        <div style={{ padding: "0 32px", marginTop: 40 }}>
          <div
            style={{
              display: "grid", marginBottom:37
            }}
          >
            <div
              onClick={() => {
                if (!uploadSheet) uploadSheets();
              }}
              style={{
                border: "1px dashed #D5D7E4",
                backgroundColor: "#fff",
                borderRadius: 4,
                marginBottom: 24,
                flex: 1,
                height: 200
              }}
              className={"hover center " + (!docs && "pointer")}
            >
              <div className="center" style={{ position: "relative" }}>
                <h3
                  style={{
                    marginBottom: 8,
                    color: "rgba(111, 121, 117, 1)",

                    width: 170
                  }}
                  className="f12"
                >
                  {docs ? docs?.name : "Users Sheet" + " (xlsx, xls and csv only)"}
                </h3>
                <div style={{ position: "absolute", left: -50 }}>
                  {docs ? (
                    <img src="/images/csv.png" />
                  ) : (
                    <img src="/images/upload.svg" />
                  )}
                </div>
                {docs && (
                  <div
                    onClick={(e) => {
                      setUploadSheet(null);
                      uploadSheetRef.current.value = null;
                      console.log(uploadSheet);
                      
                    }}
                    style={{ position: "absolute", right: -50 }}
                    className="pointer"
                  >
                    <img src="/images/Delete.svg" />
                  </div>
                )}
              </div>
            </div>
            <input
              accept=".xlsx,.xls,.csv"
              type="file"
              ref={uploadSheetRef}
              className="sheetUpload"
              onChange={(e) => handleFileChange(e.target.files, "excel")}
              style={{ display: "none" }}
            />
          </div>
          <div
            style={{
              columnGap: 32,
              display: "none",
              alignItems:"center",
              gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
            }}
            className={uploadSheet && "displayBlock"}
          >
            <Button
              title="Upload Imported Data"
              classes="bg-grey1 fg-white br-4"
              btnStyles={{ padding: "15px 39px"}}
            />
            
          </div>
          <div
            className="flex justify-end"
            style={{ columnGap: 24, marginTop: 60 }}
          >
          <TextIconButton
            onClick={handleDownload}
            src="/images/csv.png"
            imgStyles={{verticalAlign:"bottom", marginRight:5, width:20}}
            title="Download Sample Data"
            btnStyles={{ padding: "15px 45px" }}
            classes="br-4"
          />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};
