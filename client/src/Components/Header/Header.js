import * as React from "react";
import { faker } from "@faker-js/faker";

export default function ButtonAppBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <img
                src={faker.image.avatar()}
                alt="logo"
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}
              />
              <h3>ProfesioHub</h3>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
