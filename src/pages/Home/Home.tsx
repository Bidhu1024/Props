import { Box, Grid, Typography } from "@mui/material";
import DummyProperties from "./DummyProperties.json";
import { memo } from "react";
import IndividualProperties from "./IndividualProperties";
import { Property } from "../../helper/Types";

const Home = () => {
  console.log(DummyProperties);
  return (
    <Box width="100%">
      <Box
        height="20rem"
        bgcolor={"red"}
        width={"100%"}
        marginTop={".4rem"}
      ></Box>
      <Box
        width="100%"
        padding={"1rem"}
        bgcolor={"lightgrey"}
        sx={{ opacity: "1",mt:"1rem" }}

      >
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography fontSize={"1.5rem"} color={"black"}>
            More on For Rent: House & Apartments
          </Typography>
          <Typography
            sx={{
              textDecoration: "underline",
              fontWeight: "bold",
              ":hover": {
                textDecoration: "none",
                cursor: "pointer",
              },
            }}
          >
            View More
          </Typography>
        </Box>
       <Grid container spacing={2}>
      {DummyProperties?.map((datas:Property)=>{
        return(
        <IndividualProperties datas={datas}/>
        )
      })}
    </Grid>
      </Box>
    </Box>
  );
};

export default memo(Home);
