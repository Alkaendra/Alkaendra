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
import diplomaticSkillIcon from "../../../../assets/icons/svg/SVG/diplomatic-skill-icon.svg";
import economicSkillIcon from "../../../../assets/icons/svg/SVG/economic-skill-icon.svg";
import martialSkillIcon from "../../../../assets/icons/svg/SVG/martial-skill-icon.svg";
import mentalSkillIcon from "../../../../assets/icons/svg/SVG/mental-skill-icon.svg";
import moralSkillIcon from "../../../../assets/icons/svg/SVG/moral-skill-icon.svg";
import politicalSkillIcon from "../../../../assets/icons/svg/SVG/political-skill-icon.svg";
import socialSkillIcon from "../../../../assets/icons/svg/SVG/social-skill-icon.svg";
import spiritualSkillIcon from "../../../../assets/icons/svg/SVG/spiritual-skill-icon.svg";
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
              <StackContent cssCustomClass="diplomatical-icon skill-icon">
                <img src={diplomaticSkillIcon} title="Habilidad Diplomática" />
                <span className="skill-value">
                  {currentLeaderData.skills.diplomatical}
                </span>
              </StackContent>
              <StackContent cssCustomClass="economical-icon skill-icon">
                <img src={economicSkillIcon} title="Habilidad Económica" />
                <span className="skill-value">
                  {currentLeaderData.skills.economical}
                </span>
              </StackContent>
              <StackContent cssCustomClass="martial-icon skill-icon">
                <img src={martialSkillIcon} title="Habilidad Marcial" />
                <span className="skill-value">
                  {currentLeaderData.skills.martial}
                </span>
              </StackContent>
              <StackContent cssCustomClass="mental-icon skill-icon">
                <img src={mentalSkillIcon} title="Habilidad Mental" />
                <span className="skill-value">
                  {currentLeaderData.skills.mental}
                </span>
              </StackContent>
              <StackContent cssCustomClass="moral-icon skill-icon">
                <img src={moralSkillIcon} title="Habilidad Moral" />
                <span className="skill-value">
                  {currentLeaderData.skills.moral}
                </span>
              </StackContent>
              <StackContent cssCustomClass="political-icon skill-icon">
                <img src={politicalSkillIcon} title="Habilidad Política" />
                <span className="skill-value">
                  {currentLeaderData.skills.political}
                </span>
              </StackContent>
              <StackContent cssCustomClass="social-icon skill-icon">
                <img src={socialSkillIcon} title="Habilidad Social" />
                <span className="skill-value">
                  {currentLeaderData.skills.social}
                </span>
              </StackContent>
              <StackContent cssCustomClass="spiritual-icon skill-icon">
                <img src={spiritualSkillIcon} title="Habilidad Espiritual" />
                <span className="skill-value">
                  {currentLeaderData.skills.spiritual}
                </span>
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
