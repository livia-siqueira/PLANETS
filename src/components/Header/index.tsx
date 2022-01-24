import { useEffect, useState } from "react";
import { namesPlanets } from "src/shared/helpers";
import {LinkPlanet} from "../../components"
import * as s from "./styles";

interface PropsHeader  {
    changePlanet: (id: string) => void
}

const Header : React.FC<PropsHeader> = ({changePlanet}) => {
  const [planets, setPlanets] = useState<string[]>([]);

  useEffect(() => {
    const getNamePlanets = async () => {
      const names = await namesPlanets();
      setPlanets(names);
    };
    getNamePlanets();
  }, [planets]);

  return (
    <s.Container>
      <s.Content>
        <s.Title>the planets</s.Title>
        <s.Nav>
          {planets.map((planet, index) => {
            return <LinkPlanet key={index} title={planet} id={(index+1).toString()}/>;
          })}
        </s.Nav>
      </s.Content>
    </s.Container>
  );
};

export default Header;
