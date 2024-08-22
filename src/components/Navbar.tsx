import { Box, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      width="100%"
      padding={".2rem"}
      bgcolor={"rgba(0, 47, 52, 0.03)"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box>Props</Box>
      <Box>Home All Properties About Us</Box>
      <Box>
        <TextField
          size="small"
          placeholder="Search Properties"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box>Saved Properties Notifications Login/SignUp Sell Button</Box>
    </Stack>
  );
};

export default Navbar;
