import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./theme/theme";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Button colorScheme="teal">ボタン</Button>
      </BrowserRouter>
    </ChakraProvider>
  );
}
