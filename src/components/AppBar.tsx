import React, { useContext } from "react";
import Box from "@mui/material/Box";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SearchBar from "../UI/SearchBar";
import Switch from "@mui/material/Switch";
import { Typography } from "@mui/material";
import { ColorModeContext } from "../store/color-mode-context";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

function AppBar() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const mode = theme.palette.mode;

  return (
    <Box sx={{}}>
      <SportsEsportsIcon />
      <SearchBar />
      <FormControlLabel
        control={
          <Switch
            id="switchModeButton"
            checked={mode === "dark" ? true : false}
            onChange={toggleColorMode}
          />
        }
        label={mode}
      />
    </Box>
  );
}

export default AppBar;
