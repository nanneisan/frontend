import React, { useState, useEffect } from "react";
import UserChart from "../../components/UserChart";

//services
import { getPieChart } from "../../services/chartService";

function PieChart() {
  const [data, setData] = useState([]);
  const [label, setLabel] = useState([]);
  const backgroundColor = ["rgba(54, 162, 235)", "rgba(255, 99, 132)"];

  useEffect(() => {
    async function fetch() {
      const response = await getPieChart();
      if (response?.data) {
        let result = response.data;
        setData(result.data);
        setLabel(result.label);
      }
    }
    fetch();
  }, []);

  return (
    <div id="pie-chart">
      {data.length > 0 && label.length > 0 && (
        <UserChart
          id="piechart"
          type="pie"
          data={data}
          label={label}
          color={backgroundColor}
        />
      )}
    </div>
  );
}

export default PieChart;
