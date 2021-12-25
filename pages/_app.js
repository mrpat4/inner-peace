import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global-styles";
import Theme from "styles/theme";
import Layout from "utils/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps, ...props }) {
  const router = useRouter();

  return (
    <ThemeProvider theme={Theme("ltr")}>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Layout Component={Component} pageProps={pageProps} props={props} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
