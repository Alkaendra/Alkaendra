import React from "react";
import { species } from "./utils";
import { Link, useRouteMatch } from "react-router-dom";
import titulo from "../../../../assets/images/titulo_principal.png";
import "./species-list.scss";

type UrlParams = {
  speciesId: string;
};

const SpeciesList = (props: any) => {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <div className="species-list__title">
        <div className="species-list__title__body">
          <h1 className="titulo-pagina">Habitantes de Alkaendra</h1>
        </div>
      </div>
      <div className="species-list__container">
        <div>
          {species.map((card: any) => (
            <Link to={`${url}/${card.name}`} key={card.name}>
              <img src={card.source} alt={card.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeciesList;
