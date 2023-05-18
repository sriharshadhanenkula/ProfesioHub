import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { faker } from "@faker-js/faker";
import Avatar from "@mui/material/Avatar";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar
            className="mx-2"
            alt="Remy Sharp"
            src={faker.image.avatar()}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ProfesioHub
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
