export const Table = ({ headers = [], body = [] }) => {
  return (
    <table className="tsec">
      <thead className="headings">
        {headers.map((header, idx) => (
          <th key={idx}>{header}</th>
        ))}
      </thead>
      <tbody className="tbt">
        {body.map((items, idx) => (
          <tr key={idx}>
            <td
              style={{
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 32,
              }}
              className="fg-grey1"
            >
              {idx * 1 + 1}
            </td>
            {items.map((item, idx) => (
              <td
                style={{
                  paddingTop: 12,
                  paddingBottom: 12,
                  paddingLeft: 32,
                }}
                className="fg-grey1"
              >
                <div>
                  <p style={{ ...item.style }}>{item?.value}</p>
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
