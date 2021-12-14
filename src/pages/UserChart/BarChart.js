import React, { useState, useEffect } from "react";
import UserChart from "../../components/UserChart";

//constant
import { barchart } from "../../constants/charts";

//services
import { getBarChart } from "../../services/chartService";

function BarChart() {
  const [data, setData] = useState(barchart.data);
  const [label, setLabel] = useState(barchart.label);
  const title = "# of People";
  const backgroundColor = [
    "rgba(255, 99, 132)",
    "rgba(54, 162, 235)",
    "rgba(153, 102, 255)",
  ];

  useEffect(() => {
    async function fetch() {
      const response = await getBarChart();
      if (response?.data) {
        let result = response.data;
        setData(result.data);
        setLabel(result.label);
      }
    }
    fetch();
  }, []);
  return (
    <div id="bar-chart">
      {data.length > 0 && label.length > 0 && (
        <UserChart
          id="barchart"
          type="bar"
          data={data}
          label={label}
          title={title}
          color={backgroundColor}
        />
      )}
    </div>
  );
}

export default BarChart;
