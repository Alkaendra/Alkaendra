import {
  faAnkh,
  faBrain,
  faChessKing,
  faChessPawn,
  faCoins,
  faHandHoldingUsd,
  faHandPointRight,
  faHandshake,
  faHeart,
  faHourglass,
  faMars,
  faScroll,
  faShieldAlt,
  faSitemap,
  faThumbsUp,
  faUsers,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { lenguaImmalar } from "../../nomenclator/kuannachta/immalar";
import { generateRandomNames } from "../../nomenclator/nomenclator-generator";
import InlineContent from "../../page/inline-content/inline-content";
import StackContent from "../../page/stack-content/stack-content";
import DataContainerWithSupraTitle from "../data-container-with-supra-title/data-container-with-supra-title";
import RandomNameGeneratorIcon from "../random-name-generator-icon/random-name-generator-icon";
import "./leader-badge.scss";

const LeaderBadge = (props: any) => {
  const { leader } = props;

  const [currentLeaderData, setCurrentLeaderData] = React.useState(leader);

  console.log("LEADER ---> ", currentLeaderData);

  const changeLeaderName = () =>
    setCurrentLeaderData({
      ...currentLeaderData,
      name: generateRandomNames(lenguaImmalar, 1)[0],
    });
  const changeLeaderFamiliy = () =>
    setCurrentLeaderData({
      ...currentLeaderData,
      familiy: generateRandomNames(lenguaImmalar, 1)[0],
    });

  return (
    <div className="leader-badge">
      <div className="full-name">
        <div className="name">
          <RandomNameGeneratorIcon onClick={() => changeLeaderName()} />
          {currentLeaderData.name}
        </div>
        <div className="dinasty">
          <RandomNameGeneratorIcon onClick={() => changeLeaderFamiliy()} />
          {currentLeaderData.familiy}
        </div>
      </div>
      <div className="traits">{currentLeaderData.traits.join(", ")}</div>
      <StackContent cssCustomClass="data">
        <DataContainerWithSupraTitle supraTitle="Datos Físicos">
          <InlineContent cssCustomClass="health-data" even>
            <FontAwesomeIcon
              icon={leader.gender === "Female" ? faVenus : faMars}
            />
            <StackContent cssCustomClass="health-icon">
              <FontAwesomeIcon icon={faHeart} title="Salud" />
              {currentLeaderData.total_health}
            </StackContent>
            <StackContent cssCustomClass="age-icon">
              <FontAwesomeIcon icon={faHourglass} title="Edad" />
              {currentLeaderData.age} años
            </StackContent>
            <StackContent cssCustomClass="fortune-icon">
              <FontAwesomeIcon icon={faHandPointRight} title="Fortuna" />
              {currentLeaderData.fortune}
            </StackContent>
          </InlineContent>
        </DataContainerWithSupraTitle>
        <DataContainerWithSupraTitle supraTitle="Datos Políticos">
          <InlineContent cssCustomClass="political-data" even>
            <StackContent cssCustomClass="influence-icon">
              <FontAwesomeIcon icon={faSitemap} title="Influencia" />
              {currentLeaderData.influence}
            </StackContent>
            <StackContent cssCustomClass="loyalty-to-leader-icon">
              <FontAwesomeIcon icon={faChessKing} title="Lealtad a su Señor" />
              {currentLeaderData.loyalty_to_overlod}
            </StackContent>
            <StackContent cssCustomClass="subjects-loyalty-icon">
              <FontAwesomeIcon
                icon={faChessPawn}
                title="Lealtad de sus Subditos"
              />
              {currentLeaderData.loyalty_from_subjects}
            </StackContent>
          </InlineContent>
        </DataContainerWithSupraTitle>
        <DataContainerWithSupraTitle supraTitle="Habilidades">
          <StackContent cssCustomClass="skills">
            <InlineContent cssCustomClass="skill-row">
              <StackContent cssCustomClass="diplomatical-icon">
                <FontAwesomeIcon
                  icon={faScroll}
                  title="Habilidad Diplomática"
                />
                {currentLeaderData.skills.diplomatical}
              </StackContent>
              <StackContent cssCustomClass="economical-icon">
                <FontAwesomeIcon
                  icon={faHandHoldingUsd}
                  title="Habilidad Económica"
                />
                {currentLeaderData.skills.economical}
              </StackContent>
              <StackContent cssCustomClass="martial-icon">
                <FontAwesomeIcon icon={faShieldAlt} title="Habilidad Marcial" />
                {currentLeaderData.skills.martial}
              </StackContent>
              <StackContent cssCustomClass="mental-icon">
                <FontAwesomeIcon icon={faBrain} title="Habilidad Mental" />
                {currentLeaderData.skills.mental}
              </StackContent>
              <StackContent cssCustomClass="moral-icon">
                <FontAwesomeIcon icon={faThumbsUp} title="Habilidad Moral" />
                {currentLeaderData.skills.moral}
              </StackContent>
              <StackContent cssCustomClass="political-icon">
                <FontAwesomeIcon
                  icon={faHandshake}
                  title="Habilidad Política"
                />
                {currentLeaderData.skills.political}
              </StackContent>
              <StackContent cssCustomClass="social-icon">
                <FontAwesomeIcon icon={faUsers} title="Habilidad Social" />
                {currentLeaderData.skills.social}
              </StackContent>
              <StackContent cssCustomClass="spiritual-icon">
                <FontAwesomeIcon icon={faAnkh} title="Habilidad Espiritual" />
                {currentLeaderData.skills.spiritual}
              </StackContent>
            </InlineContent>
          </StackContent>
        </DataContainerWithSupraTitle>
        <DataContainerWithSupraTitle supraTitle="Posesiones">
          <StackContent cssCustomClass="belongings-data">
            <InlineContent cssCustomClass="skill-row" even>
              <StackContent cssCustomClass="personal-wealth-icon">
                <FontAwesomeIcon icon={faCoins} title="Habilidad Espiritual" />
                {currentLeaderData.personal_wealth}
              </StackContent>
              <StackContent> </StackContent>
            </InlineContent>
          </StackContent>
        </DataContainerWithSupraTitle>
      </StackContent>
    </div>
  );
};

export default LeaderBadge;
