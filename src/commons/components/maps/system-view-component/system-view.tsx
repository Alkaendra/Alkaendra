import React from "react";
import InlineContent from "../../page/inline-content/inline-content";
import StackContent from "../../page/stack-content/stack-content";
import spaceStationIcon from "../../../../assets/icons/GalacticMapIcons/development/OrbitalStationIcon.svg";
import culturalDevelopmentIcon from "../../../../assets/icons/GalacticMapIcons/development/CulturalDevelopmentIcon.svg";
import economicalDevelopmentIcon from "../../../../assets/icons/GalacticMapIcons/development/EconomicalDevelopmentIcon.svg";
import industrialDevelopmentIcon from "../../../../assets/icons/GalacticMapIcons/development/IndustrialDevelopmentIcon.svg";
import technologicalDevelopmentIcon from "../../../../assets/icons/GalacticMapIcons/development/TechDevelopmentIcon.svg";
import armyPresenceIcon from "../../../../assets/icons/GalacticMapIcons/system-data/ArmyPresenceIcon.svg";
import fleetPresenceIcon from "../../../../assets/icons/GalacticMapIcons/system-data/FleetPresenceIcon.svg";
import landDefencesIcon from "../../../../assets/icons/GalacticMapIcons/system-data/SystemDefenceIcon.svg";
import economicalResourcesProductionIcon from "../../../../assets/icons/GalacticMapIcons/resources/EconomicalResourcesProductionIcon.svg";
import industrialResourcesProductionIcon from "../../../../assets/icons/GalacticMapIcons/resources/IndustrialResourcesProductionIcon.svg";
import edibleResourcesProductionIcon from "../../../../assets/icons/GalacticMapIcons/resources/EdibleResourcesProductionIcon.svg";
import "./system-view.scss";

const getDevelopmentIcon = (type: string) => {
  switch (type) {
    case "cultural":
      return culturalDevelopmentIcon;
    case "economical":
      return economicalDevelopmentIcon;
    case "industrial":
      return industrialDevelopmentIcon;
    default:
      return technologicalDevelopmentIcon;
  }
};

const getResourceIcon = (type: string) => {
  switch (type) {
    case "economical":
      return economicalResourcesProductionIcon;
    case "industrial":
      return industrialResourcesProductionIcon;
    default:
      return edibleResourcesProductionIcon;
  }
};

const SystemView = (props: any) => {
  const { systemData } = props;
  return (
    <section className="map__system-view">
      <StackContent cssCustomClass="system-view__container">
        <div className="system-development">
          {systemData?.development?.map((dev: any) => (
            <StackContent>
              {dev.spaceStations?.number > 0 && (
                <div className="development-space-station">
                  <div className="space-stations__number">
                    {dev.spaceStations?.number}
                  </div>
                  <img
                    className="space-stations__icon"
                    src={spaceStationIcon}
                  />
                </div>
              )}
              {dev.value > 0 && (
                <div className="development">
                  <div className="development__value">{dev.value}</div>
                  <img
                    className="development__icon"
                    src={getDevelopmentIcon(dev.type)}
                  />
                </div>
              )}
            </StackContent>
          ))}
        </div>
        <InlineContent cssCustomClass="system-data" even>
          <StackContent cssCustomClass="system__planetary-defences">
            {systemData.defences?.armies > 0 && (
              <InlineContent>
                <img
                  className="planetary-armies__icon"
                  src={armyPresenceIcon}
                />
                <div className="planetary-armies__value">
                  {systemData.defences?.armies}
                </div>
              </InlineContent>
            )}
            {systemData.defences?.landDefenceValue > 0 && (
              <StackContent>
                <div className="land-defences__value">
                  {systemData.defences?.landDefenceValue}
                </div>
                <img className="land-defences__icon" src={landDefencesIcon} />
              </StackContent>
            )}
          </StackContent>
          <StackContent cssCustomClass="system__orbital-defences">
            {systemData.defences?.fleets > 0 && (
              <InlineContent>
                <img className="orbital-fleets__icon" src={fleetPresenceIcon} />
                <div className="orbital-fleets__value">
                  {systemData.defences?.fleets}
                </div>
              </InlineContent>
            )}
            {systemData.defences?.orbitalDefenceValue > 0 && (
              <StackContent>
                <div className="orbital-defences__value">
                  {systemData.defences?.orbitalDefenceValue}
                </div>
                <img
                  className="orbital-defences__icon"
                  src={landDefencesIcon}
                />
              </StackContent>
            )}
          </StackContent>
        </InlineContent>
        <div className="system-name">{systemData.name}</div>
        <div className="system-resource-production">
          {systemData.resources.map((resource: any, index: number) => (
            <StackContent>
              {resource.refineries?.length && (
                <div className="refinery-space-station">
                  <div className="space-refineries__number">
                    {resource.refineries?.[index]?.number}
                  </div>
                  <img
                    className="space-stations__icon"
                    src={spaceStationIcon}
                  />
                </div>
              )}
              {resource.value > 0 && (
                <div className="resource">
                  <div className="resource__value">{resource.value}</div>
                  <img
                    className="resource__icon"
                    src={getResourceIcon(resource.type)}
                  />
                </div>
              )}
            </StackContent>
          ))}
        </div>
        <div className="system-specials">
          {systemData.specials?.length && (
            <div className="system__specials"></div>
          )}
        </div>
      </StackContent>
    </section>
  );
};

export default SystemView;
