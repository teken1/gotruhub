export const SearchInput = ({ ...rest }) => (
  <form className="relative">
    <input
      placeholder="Search for messages"
      type="search"
      style={{
        width: "100%",
        padding: "15px 15px 15px 43px",
        border: "1px solid rgba(218, 223, 221, 1)",
      }}
      className="f14 br-8"
      {...rest}
    />
    <div
      style={{
        position: "absolute",
        top: 0,
        height: "100%",
        left: 10,
        padding: "0 8px",
      }}
      className="flex align-center pointer hover"
    >
      <img src="/images/search-icon.svg" />
    </div>
  </form>
);
