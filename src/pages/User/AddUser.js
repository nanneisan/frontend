import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Select, MenuItem } from "@material-ui/core";

//components
import Label from "../../components/Label";
import Input from "../../components/Input";
import AppButton from "../../components/Button";

import { create } from "../../services/chartService";

const GenderList = [
  {
    value: "M",
    label: "Male",
  },
  {
    value: "F",
    label: "Female",
  },
];

const useStyles = makeStyles({
  label: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  row: {
    marginTop: 20,
  },
  btnSave: {
    marginRight: 10,
  },
  fl_right: {
    float: "right",
  },
});

function AddUser() {
  const classes = useStyles();

  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const save = async () => {
    try {
      const response = await create(data);
      if (response) window.location.replace("/");
    } catch (err) {
      alert("Incomplete Information!");
    }
  };

  return (
    <div>
      <Label variant="h5">User Entry</Label>
      <Grid container spacing={3} className={classes.row}>
        <Grid item xs={12} sm={3}>
          <Label variant="body1" className={classes.label}>
            Name:
          </Label>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Input
            id="filled-full-width"
            variant="outlined"
            size="small"
            fullWidth={true}
            name="name"
            handleChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <Label variant="body1" className={classes.label}>
            Age:
          </Label>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Input
            id="filled-full-width"
            variant="outlined"
            size="small"
            fullWidth={true}
            name="age"
            type={"number"}
            min={0}
            handleChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} sm={3}>
          <Label variant="body1" className={classes.label}>
            Gender:
          </Label>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Select
            labelId="payment_method_list_label"
            id="payment_method_list"
            value={data["payment_method"]}
            name="gender"
            onChange={handleChange}
            fullWidth={true}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {GenderList.map(({ value, label }) => (
              <MenuItem value={value} key={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item xs={12} sm={10}>
          <div className={classes.fl_right}>
            <AppButton
              variant="contained"
              color="primary"
              className={classes.btnSave}
              onClick={save}
            >
              Save
            </AppButton>
            <AppButton variant="outlined">Cancel</AppButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AddUser;
