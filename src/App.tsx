import {ThemeProvider} from "styled-components";
import { __diagramMockData } from "./mock/diagramData";
import {appTheme} from "./theme";

import DiagramWidget from "./widgets/DiagramWidget/DiagramWidget";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <DiagramWidget initialValues={__diagramMockData} />
    </ThemeProvider>)
}

export default App;
