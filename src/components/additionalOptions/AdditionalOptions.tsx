import youWrite from "../../assets/icon-youwrite.svg";
import youImagine from "../../assets/icon-stablediffusion.svg";
import "./AdditionalOptions.css";
import { Tooltip } from "@mui/material";

const AdditionalOptions = () => {
  return (
    <div className="items-div">
      <div className="item">
        <Tooltip title="Use AI to write emails, essays, and more">
          <a
            target="_blank"
            href="https://you.com/search?q=how+to+write+well&&tbm=youwrite&cfr=youwrite&"
          >
            <img className="logo" src={youWrite} alt="YOU.COM" />
            <p>YouWrite</p>
          </a>
        </Tooltip>
      </div>
      <div className="item">
        <Tooltip title="Create whatever image you can imagine">
          <a
            target="_blank"
            href="https://you.com/search?q=%40draw+a+cute+dog+in+space&tbm=imagine&cfr=imagine"
          >
            <img className="logo" src={youImagine} alt="YOU.COM" />
            <p>YouImagine</p>
          </a>
        </Tooltip>
      </div>
      {/* <div className="item">
        <a target="_blank" href="https://you.com/">
          <img className="logo" src={youEnhanced} alt="YOU.COM" />
          <p>YouEnhanced</p>
        </a>
      </div> */}
    </div>
  );
};

export default AdditionalOptions;
