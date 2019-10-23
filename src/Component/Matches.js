import React from "react";
import styled from "styled-components";
import { FilterMatch } from "../Utils";

const Matches = () => {
  const FilteredMatch = FilterMatch();
  return (
      <TableWrapper>
        <table>
          <thead>
            <tr>
              <th>Teams</th>
              <th>Total Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Ties</th>
              <th>Total Goals Scored For </th>
              <th>Total Goals Scored Against</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(FilteredMatch).map(code => {
              return (
                <tr key={code}>
                  <td>{code}</td>
                  <td>{FilteredMatch[code].totalMatch}</td>
                  <td>{FilteredMatch[code].won}</td>
                  <td>{FilteredMatch[code].lost}</td>
                  <td>
                    {FilteredMatch[code].totalMatch -
                      FilteredMatch[code].won -
                      FilteredMatch[code].lost}
                  </td>
                  <td>{FilteredMatch[code].totalScoreFor}</td>
                  <td>{FilteredMatch[code].totalScoreAgainst}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableWrapper>
  );
};

const TableWrapper = styled.div`
  overflow-x: auto;
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export default Matches;
