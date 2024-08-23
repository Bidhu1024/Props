import {
  Box,
  Stack,
  TextField,
  Typography,
  Badge,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();
  return (
    <Stack
      direction={"row"}
      width="100%"
      padding={".2rem"}
      bgcolor={"rgba(0, 47, 52, 0.03)"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box sx={{ cursor: "pointer" }}>Props</Box>
      <Box display={"flex"} gap="1rem" alignItems={"center"}>
        <Typography onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
          Home
        </Typography>
        <Typography
          onClick={() => navigate("/properties")}
          sx={{ cursor: "pointer" }}
        >
          All Properties
        </Typography>
        <Typography
          onClick={() => navigate("/about")}
          sx={{ cursor: "pointer" }}
        >
          About Us
        </Typography>
      </Box>
      <Box>
        <TextField
          size="small"
          value={searchText}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setSearchText(e.target.value)}
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
      <Box display={"flex"} gap="1rem" alignItems={"center"}>
        <FavoriteBorderIcon sx={{ cursor: "pointer" }} />
        <Badge badgeContent={4} color="error">
          <NotificationsNoneOutlinedIcon sx={{ cursor: "pointer" }} />
        </Badge>
        <Button variant="contained">Login/SignUp</Button>
        <Button
          variant="contained"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          Sell
        </Button>
      </Box>
    </Stack>
  );
};

export default Navbar;
