import { Planet } from "src/shared/types";
import Details from "../Details";
import * as s from "./styles";

interface PropsFooter {
  planet: Planet;
}

const Footer: React.FC<PropsFooter> = ({ planet }) => {
  const { rotation, revolution, radius, temperature } = planet;
  return (
    <s.Container>
      <Details titleInformation="rotation time" information={rotation} />
      <Details titleInformation="revolution time" information={revolution} />
      <Details titleInformation="radius" information={radius} />
      <Details titleInformation="average temp." information={temperature} />
    </s.Container>
  );
};

export default Footer;
