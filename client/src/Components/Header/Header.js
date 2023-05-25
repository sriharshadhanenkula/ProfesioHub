import * as React from "react";
import myLogo from "../../assets/logo.jpg";
import "./myHeader.css";

export default function ButtonAppBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav
            className="navbar navbar-expand-lg "
            style={{ backgroundColor: "#f0f4f7" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src={myLogo}
                alt="logo"
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />

              <h1 className="logo-text">ProfesioHub</h1>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
