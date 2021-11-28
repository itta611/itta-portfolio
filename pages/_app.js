import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp
