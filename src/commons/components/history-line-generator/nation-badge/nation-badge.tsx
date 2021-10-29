import React from "react";
import LeaderBadge from "../leader-badge/leader-badge";
import SettlementBadge from "../settlement-badge/settlement-badge";
import "./nation-badge.scss";

const NationBadge = (props: any) => {
  const { leader, settlement } = props;

  const [currentLeaderData, setCurrentleaderData] = React.useState(leader);
  const [currentNationData, setCurrentNationData] = React.useState(settlement);

  return (
    <div className="nation-badge">
      <LeaderBadge leader={currentLeaderData} />
      <SettlementBadge
        leader={currentLeaderData}
        settlement={currentNationData}
      />
    </div>
  );
};
export default NationBadge;
