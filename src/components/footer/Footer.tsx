import { Tooltip } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="parent">
      <Tooltip title="Developed by Gabriel Cassimiro">
        <a
          className="a"
          href="https://gabrielcassimiro.github.io/"
          target="_blank"
        >
          <div className="dev-icon">
            <FontAwesomeIcon icon={faCode} className="icon" size="xl" />
          </div>
        </a>
      </Tooltip>
    </div>
  );
};

export default Footer;
