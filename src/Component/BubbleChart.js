import React from "react";
import { Bubble } from "react-chartjs-2";
import { FilterMatch, Colors } from "../Utils";
import styled from "styled-components";


var options = {
  data: {
    datasets: Object.entries(FilterMatch()).map(
      ([name, matchDetails], index) => {
        return {
          label: name,
          data: [
            {
              x: matchDetails.lost,
              y: matchDetails.won,
              r: matchDetails.totalScoreFor
            }
          ],
          backgroundColor: Colors[index]
        };
      }
    )
  }
};

const BubbleChart = () => {
  return (
    <ChartWrapper>
      <Bubble data={options.data} width={100} height={50} />
    </ChartWrapper>
  );
};

const ChartWrapper = styled.div`
  padding: 3rem;
`;

export default BubbleChart;
