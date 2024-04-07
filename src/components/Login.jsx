import { Box, Button, Container, Grid } from "@mui/material";
import { useAppContext } from "../utils/context";
import React from "react";
import { addUserDB } from "../utils/saveUserData";
import { useCollectionData } from "react-firebase-hooks/firestore";


export default function Login() {
  const { auth, firebase, users} = useAppContext();
  

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user);
    addUserDB(user, users);
  }

  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          style={{ width: 400, background: "#fafafa", borderRadius: 15 }}
        >
          <Box p={5}>
            <Button color={"warning"} variant={"outlined"} onClick={login}>
              LOGIN WITH{" "}
              <img
                style={{ marginLeft: "10px" }}
                width={80}
                src="https://iconape.com/wp-content/files/ur/370111/svg/google-logo-icon-png-svg.png"
              ></img>
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
