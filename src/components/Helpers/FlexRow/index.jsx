import styles from "./Index.module.css";
export const FlexRow = ({ children }) => {
  return (
    <div className={styles.wrapper} style={{ columnGap: "2vw" }}>
      {children}
    </div>
  );
};
