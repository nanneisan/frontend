import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//chart-js
import Chart from "chart.js/auto";

function UserChart(props) {
  const { id, type, data, label, color, title = "" } = props;
  var [myChart, setMyChart] = useState(null);

  useEffect(() => {
    // Get the context of the canvas element we want to select
    let ctx = document.getElementById(id).getContext("2d");
    if (myChart) {
      myChart.reset();
      myChart.data = {
        labels: label,
        datasets: [
          {
            label: title,
            data: data,
            backgroundColor: color,
          },
        ],
      };
      myChart.update();
      setMyChart(myChart);
    } else {
      let newChart = new Chart(ctx, {
        type: type,
        data: {
          labels: label,
          datasets: [
            {
              label: title,
              data: data,
              backgroundColor: color,
            },
          ],
        },
        options: {
          legend: {
            position: "bottom",
            align: "center",
            labels: {
              boxWidth: 27,
              borderRadius: 4,
            },
          },
        },
      });
      setMyChart(newChart);
    }
  }, [data, label]);

  return (
    <div>
      <canvas id={id}></canvas>
    </div>
  );
}

UserChart.defaultProps = {
  id: "",
  data: [],
  label: [],
  type: "",
};

UserChart.propTypes = {
  id: PropTypes.string,
  data: PropTypes.array,
  label: PropTypes.array,
  type: PropTypes.string,
};

export default UserChart;
