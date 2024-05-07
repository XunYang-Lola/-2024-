import React from "react";
import { Grid } from "@mui/material";
import NavBarRO from "../components/NavBarRO.jsx";
import SideBar from "../components/SideBar.jsx";
import { useSearchParams } from "react-router-dom";

export default function DocumentPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const projectName = searchParams.get("projectName");
  return (
    <Grid container spacing={2}>
      {/* 顶部导航栏 */}
      <Grid item xs={12}>
        <NavBarRO title="ManageYourProject--文档" projectName={projectName}/>
      </Grid>
      <Grid item container spacing={2}>
        {/* 侧边栏 */}
        <Grid
          item
          container
          justifyContent="center"
          alignItems="flex-start"
          xs={2}
        >
          <SideBar projectName={projectName}></SideBar>
        </Grid>
        <Grid item container xs={10}>
          <></>
        </Grid>
      </Grid>
    </Grid>
  );
}
