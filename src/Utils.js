import MatchData from "./matches.json";

export const Colors = [
  "#e6194b",
  "#3cb44b",
  "#ffe119",
  "#4363d8",
  "#f58231",
  "#911eb4",
  "#46f0f0",
  "#f032e6",
  "#bcf60c",
  "#fabebe",
  "#008080",
  "#e6beff",
  "#9a6324",
  "#fffac8",
  "#800000",
  "#aaffc3",
  "#808000",
  "#ffd8b1",
  "#000075",
  "#808080",
  "#ffffff",
  "#000000" 
];

export const FilterMatch = (matches = MatchData) => {
  let retObj = {};
  matches.rounds.forEach(({ matches }) => {
    matches.forEach(({ team1, team2, score1, score2 }) => {
      if (retObj[team1.code]) {
        retObj[team1.code].totalMatch = retObj[team1.code].totalMatch + 1;
        if (score1 > score2) {
          retObj[team1.code].won = retObj[team1.code].won + 1;
        } else if (score1 < score2) {
          retObj[team1.code].lost = retObj[team1.code].lost + 1;
        } else {
          retObj[team1.code].ties = retObj[team1.code].ties + 1;
        }
        retObj[team1.code].totalScoreFor =
          retObj[team1.code].totalScoreFor + score1;
        retObj[team1.code].totalScoreAgainst =
          retObj[team1.code].totalScoreAgainst + score2;
      } else {
        retObj[team1.code] = {
          totalMatch: 1,
          won: score1 > score2 ? 1 : 0,
          lost: score1 < score2 ? 1 : 0,
          totalScoreFor: score1,
          totalScoreAgainst: score2,
          ties: score2 === score1 ? 1 : 0
        };
      }
      if (retObj[team2.code]) {
        retObj[team2.code].totalMatch = retObj[team2.code].totalMatch + 1;
        if (score1 > score2) {
          retObj[team2.code].won = retObj[team2.code].won + 1;
        } else if (score1 < score2) {
          retObj[team2.code].lost = retObj[team2.code].lost + 1;
        } else {
          retObj[team2.code].ties = retObj[team2.code].ties + 1;
        }
        retObj[team2.code].totalScoreFor =
          retObj[team2.code].totalScoreFor + score1;
        retObj[team2.code].totalScoreAgainst =
          retObj[team2.code].totalScoreAgainst + score2;
      } else {
        retObj[team2.code] = {
          totalMatch: 1,
          won: score1 > score2 ? 1 : 0,
          lost: score1 < score2 ? 1 : 0,
          totalScoreFor: score1,
          totalScoreAgainst: score2,
          ties: score2 === score1 ? 1 : 0

        };
      }
    });
  });
  return retObj;
};
