import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import { CardContent, CardHeader } from "@material-ui/core";
import Home from "@material-ui/icons/Home";

//components
import Label from "./Label";

const useStyles = makeStyles({
  root: {
    borderRadius: 20,
  },
  header: {
    backgroundColor: "#337ab7",
    textAlign: "center",
  },
  subheader: {
    color: "#fff",
  },
  fright: {
    float: "right",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
  },
});
function ReportCard(props) {
  const { title } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        classes={{
          subheader: classes.subheader,
        }}
        subheader={title}
      ></CardHeader>
      <CardContent>{props.children}</CardContent>
    </Card>
  );
}

export default ReportCard;
