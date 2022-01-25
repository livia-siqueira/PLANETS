import { useCallback, useEffect, useState } from "react";
import { getPlanetById } from "@shared";
import { Planet } from "@shared";
import { Button, Footer, Header } from "@components";
import * as s from "./styles";

const PlanetsScreen: React.FC = () => {
  const [planetActive, setPlanetActive] = useState<string>("1");
  const [planet, setPlanet] = useState<Planet>();
  const [imageActive, setImageActive] = useState<number>(1);

  const changePlanet = useCallback((id: string) => {
    setImageActive(1);
    setPlanetActive(id);
  }, []);

  const changeImage = useCallback((number: number) => {
    setImageActive(number);
  }, []);

  useEffect(() => {
    const getPlanet = async () => {
      const resp = await getPlanetById(planetActive);
      setPlanet(resp);
    };
    getPlanet();
  }, [planetActive]);

  return (
    <s.Container>
      <Header changePlanet={changePlanet} />
      <s.Content>
        <s.ContainerImage>
          {imageActive === 1 ? (
            <s.Image src={planet?.images.planet} />
          ) : imageActive === 2 ? (
            <s.Image src={planet?.images.internal} />
          ) : (
            <s.Image src={planet?.images.geology} />
          )}
        </s.ContainerImage>
        <s.Description>
          <s.TitleDescription>
            <s.Name>{planet?.name}</s.Name>
            <s.Text>{planet?.overview.content}</s.Text>
          </s.TitleDescription>
          <s.ContainerButton>
            <Button
              title="01 OVERVIEW"
              event={changeImage}
              number={1}
              isActive={imageActive === 1}
            />
            <Button
              title="02 INTERNAL STRUCTURE"
              event={changeImage}
              number={2}
              isActive={imageActive === 2}
            />
            <Button
              title="03 SURFACE GEOLOGY"
              event={changeImage}
              number={3}
              isActive={imageActive === 3}
            />
          </s.ContainerButton>
        </s.Description>
      </s.Content>
      <s.Details>{planet && <Footer planet={planet} />}</s.Details>
    </s.Container>
  );
};

export default PlanetsScreen;
