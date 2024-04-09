import * as React from "react";
import { Box, TextField, Grid } from "@material-ui/core";

export default function InputBox({ label, value, onChange }) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item container>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <label>{label}</label>
        </Box>
      </Grid>
      <Grid item container>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch " },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField variant="outlined" value={value} onChange={onChange} />
        </Box>
      </Grid>
    </Grid>
  );
}
