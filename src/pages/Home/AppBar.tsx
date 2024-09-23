// This component will have the footer in which app info will be shown

import { Box, Typography } from '@mui/material';
import React from "react";

const AppBar = () => {
  return (
    <Box sx={{ mt: "1rem" }} height="16rem" width="100%" display={"flex"} justifyContent={"space-evenly"} padding={".5rem"}>
      <Box>
        <img
          src="https://static.vecteezy.com/system/resources/previews/023/455/601/original/app-launch-app-launch-event-post-template-with-rocket-in-mobile-screen-mobile-app-launching-announcement-post-startup-rocket-launch-new-mobile-application-launch-event-post-vector.jpg"
          alt="app launch"
          height="220px"
          width={"220px"}
        />
      </Box>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"} sx={{borderRight:'3px solid gray'}} height="100%">
            <Typography>
                TRY THE PROPS APP
            </Typography>
            <Typography>
                Buy,Sell or Rent any Property using the app in your mobile.
            </Typography>
        </Box>
        <Box height="100%">
            <Typography>GET YOUR APP TODAY</Typography>
            <img src="https://www.logo.wine/a/logo/App_Store_(iOS)/App_Store_(iOS)-Badge-Alternative-Logo.wine.svg" alt="apple store" height="2rem" width="5rem" />
        </Box>
      </Box>
    </Box>
  );
};

export default AppBar;
