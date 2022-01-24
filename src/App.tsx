import { ThemeProvider } from "styled-components";
import { Theme, GlobalStyle } from "@shared";
import PlanetsScreen from "./pages/PlanetsScreen";

function App() {
  return (
   <ThemeProvider theme={Theme}>
     <GlobalStyle/>
     <PlanetsScreen/>
   </ThemeProvider>
  );
}

export default App;
