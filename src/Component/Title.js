import React, { useState } from "react";
import styled from "styled-components";
import Matches from "./Matches";
import BubbleChart from "./BubbleChart";

const Title = () => {
  const [view, setView] = useState("matches");

  const handlePage = page => {
    setView(page);
  };
  return (
    <>
      <TitleWrapper>
        <NameWrapper
          active={view === "matches"}
          onClick={handlePage.bind(null, "matches")}
        >
          Matches
        </NameWrapper>
        <NameWrapper
          active={view === "chart"}
          onClick={handlePage.bind(null, "chart")}
        >
          Bubble Chart
        </NameWrapper>
      </TitleWrapper>
      {view === "matches" && <Matches />}
      {view === "chart" && <BubbleChart />}
    </>
  );
};

const NameWrapper = styled.div`
  width: 50%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.active ? "cornflowerblue" : "initial")};
`;

const TitleWrapper = styled.div`
  display: flex;
  height: 60px;
`;

export default Title;
