import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      ></Button>
    </header>
  );
};

Header.defaultProps = {
  title: "Order Basket",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const headingStyle = {
  color: "orange",
  backgroundColor: "transparent",
  padding: "3px 10px",
  borderRadius: "10px",
};

export default Header;
