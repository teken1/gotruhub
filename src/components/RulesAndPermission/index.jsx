import { Table } from "..";
export const RulesAndPermission = () => {
  const headers = [
    "S/N",
    "Type",
    "Name/Model",
    "Color",
    "Serial Number",
    "Assigned to",
    "Status",
  ];
  const body = [
    [
      { value: "Desktop" },
      { value: "imac 2017" },
      { value: "Black" },
      { value: "0000000000" },
      { value: "--:--" },
      {
        value: "Avaiable",
        style: {
          color: "#19201D",
          backgroundColor: "rgba(23, 30, 27, 0.08)",
          padding: 3,
          borderRadius: 4,
          fontSize: 14,
          width: "fit-content",
        },
      },
    ],
    [
      { value: "Desktop" },
      { value: "imac 2017" },
      { value: "Black" },
      { value: "0000000000" },
      { value: "--:--" },
      {
        value: "Assigned",
        style: {
          color: "#40916C",
          backgroundColor: "rgba(64, 145, 108, 0.1)",
          padding: 3,
          borderRadius: 4,
          fontSize: 14,
          width: "fit-content",
        },
      },
    ],
    [
      { value: "Desktop" },
      { value: "imac 2017" },
      { value: "Black" },
      { value: "0000000000" },
      { value: "--:--" },
      {
        value: "Not working",
        style: {
          color: "#914040",
          backgroundColor: "rgba(145, 64, 64, 0.08)",
          padding: 3,
          borderRadius: 4,
          fontSize: 14,
          width: "fit-content",
        },
      },
    ],
    [
      { value: "Desktop" },
      { value: "imac 2017" },
      { value: "Black" },
      { value: "0000000000" },
      { value: "Emeka Juliua" },
      { value: "Avaiable" },
    ],
  ];
  return (
    <div className="bg-white">
      <Table headers={headers} body={body} />
    </div>
  );
};
