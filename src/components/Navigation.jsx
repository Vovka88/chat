import { AppBar, Grid, Toolbar, Button } from "@mui/material";
import { useAppContext } from "../utils/context";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";

export default function Navigation() {
  const { auth } = useAppContext();
  const [user] = useAuthState(auth);
  return (
    <AppBar color={"default"} position="static">
      <Toolbar>
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button color={"warning"} variant={"outlined"} onClick={() => auth.signOut()}>
              EXIT
            </Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button color={"primary"} variant={"outlined"}>
                LOGIN
              </Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
