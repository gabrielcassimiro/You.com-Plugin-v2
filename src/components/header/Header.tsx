import "./Header.css";
import youCom from "../../assets/ydc-logo.svg";

const Header = () => {
  return (
    <header className="header_container">
      <a target="_blank" href="https://you.com/">
        <img className="logo" src={youCom} alt="YOU.COM" />
      </a>
    </header>
  );
};

export default Header;
