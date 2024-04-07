import { Avatar, Container, Grid } from "@mui/material";
import React from "react";

export default function Friends({ users }) {
  return;
  <Container>
    <Grid>
      {users.map(({ name, photoURL }) => {
        <Grid
          container
          alignItems={"center"}
          gap={"10px"}
        //   border={"1px solid tomato"}
          borderRadius={"10px"}
          padding={"10px"}
        >
          <Avatar src={photoURL} />
          <Grid bgcolor={"#434e74"} color={"white"} padding={"5px"} borderRadius={"20px"}>
            <p color="#fff">{name}</p>
          </Grid>
        </Grid>;
      })}
    </Grid>
  </Container>;
}
