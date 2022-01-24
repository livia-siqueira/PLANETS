import { useCallback, useEffect, useState } from "react";
import { getPlanetById } from "@shared";
import { Planet } from "@shared";
import { Button, Footer, Header } from "@components";
import * as s from "./styles";

const PlanetsScreen: React.FC = () => {
  const [planetActive, setPlanetActive] = useState<string>("1");
  const [planet, setPlanet] = useState<Planet>();

  const changePlanet = useCallback((id: string) => {
    setPlanetActive(id);
  }, []);

  useEffect(() => {
    const getPlanet = async () => {
      const resp = await getPlanetById(planetActive);
      setPlanet(resp);
    };
    getPlanet();
  }, [planet, planetActive]);

  return (
    <s.Container>
      <Header changePlanet={changePlanet} />
      <s.Content>
        <s.ContainerImage>
          <s.Image src={planet?.images.internal} />
        </s.ContainerImage>
        <s.Description>
          <s.Name>{planet?.name}</s.Name>
          <s.TitleDescription>{planet?.overview.content}</s.TitleDescription>
          <s.ContainerButton>
            <Button title="01 OVERVIEW" />
            <Button title="02 INTERNAL STRUCTURE" />
            <Button title="03 SURFACE GEOLOGY" />
          </s.ContainerButton>
        </s.Description>
      </s.Content>
      <s.Details>{planet && <Footer planet={planet} />}</s.Details>
    </s.Container>
  );
};

export default PlanetsScreen;
