import { useContext, useState } from "react";
import "./input.css";
import { GlobalContext } from "../Actions";

const Upload = () => {
  const [, , , , , , , setImage] = useContext(GlobalContext);
  const [, ] = useState(0);
  const [name,setName]=useState("")
  console.log(process.env);

  function HandleUpload(e) {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);

      setName(e.target.files[0].name);
    }
  }

  
  return (
    <div>
      <h2>File Upload & Image Preview</h2>

      <div id="file-upload-form" className="uploader">
        <input
          id="file-upload"
          type="file"
          name="fileUpload"
          onChange={HandleUpload}
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          style={{display:"none"}}
        />

        <label htmlFor="file-upload" id="file-drag">
          <img id="file-image" src="#" alt="Preview" className="hidden" />
          <div id="start">
            <i className="fa fa-download" aria-hidden="true"></i>
            
            <div id="notimage" className="hidden">
              Please select an Excel
            </div>
            <span id="file-upload-btn" className="btn btn-primary">
              Select a file
            </span>
          </div>
          <div id="response">
            <div id="messages"></div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {name}
            </div>
          </div>
        </label>
       
      </div>
    </div>
  );
};
export default Upload;
