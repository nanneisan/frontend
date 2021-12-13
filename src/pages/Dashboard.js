import React from "react";
import Grid from "@material-ui/core/Grid";
import BarChart from "./UserChart/BarChart";
import PieChart from "./UserChart/PieChart";
import User from "./User";
import ReportCard from "../components/ReportCard";

function Dashboard() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6} sm={6}>
        <ReportCard title="Number of People Group By Age">
          <BarChart />
        </ReportCard>
      </Grid>

      <Grid item xs={6} sm={6}>
        <ReportCard title="Gender Ratio (%)">
          <PieChart />
        </ReportCard>
      </Grid>

      <Grid item xs={12} sm={12}>
        <ReportCard title="User List">
          <User />
        </ReportCard>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
