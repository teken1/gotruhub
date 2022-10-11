import styles from "./monitor.css";

export const Manage = ({ img, title, text = "", features = [], action }) => {
  return (
    <div
      style={{ padding: "0 7vw", marginTop: 57, columnGap: "2vw" }}
      className={styles.attendanceContainer}
    >
      <div style={{ flex: 1 }}>
        <h3 style={{ fontSize: 32, textAlign:"center" }}>{title}</h3>
        <p style={{ color: "#444A47", marginTop: 16, textAlign:"center", maxWidth:450, marginLeft:"auto", marginRight:"auto",fontSize:16, lineHeight:"22.4px"  }}>{text}</p>
        <ul style={{ marginTop: 24, marginBottom: 34 }}>
          {features.map((feature, idx) => (
            <li style={{ marginBottom: 16 }} key={idx}>
              <p style={{ color: "#000", fontWeight:700, fontSize:24, textAlign:"center" }}>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
