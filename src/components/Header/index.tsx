import { useCallback, useEffect, useState } from "react";
import { namesPlanets } from "src/shared/helpers";
import { LinkPlanet } from "../../components";
import * as s from "./styles";
import { FiMenu } from "react-icons/fi";

interface PropsHeader {
  changePlanet: (id: string) => void;
}

const Header: React.FC<PropsHeader> = ({ changePlanet }) => {
  const [planets, setPlanets] = useState<string[]>([]);
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    const getNamePlanets = async () => {
      const names: string[] = await namesPlanets();
      setPlanets(names);
    };
    getNamePlanets();
  }, []);

  const setMenuVisible = useCallback(() => {
    setMenu((prev) => !prev);
  }, [])

  return (
    <s.Container>
      <s.Content>
        <s.Title>the planets</s.Title>
        <s.Nav>
          {planets.map((planet, index) => {
            return (
              <LinkPlanet
                key={index}
                event={changePlanet}
                title={planet}
                id={(index + 1).toString()}
              />
            );
          })}
        </s.Nav>
        <s.Menu>
          <s.ButtonMenu onClick={setMenuVisible}>
            <FiMenu color="white" size={36} />
          </s.ButtonMenu>
          {menu && <s.NavMenu>
            {planets.map((planet, index) => {
              return (
                <LinkPlanet
                  key={index}
                  event={changePlanet}
                  title={planet}
                  id={(index + 1).toString()}
                />
              );
            })}
          </s.NavMenu>}
        </s.Menu>
      </s.Content>
    </s.Container>
  );
};

export default Header;
