import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global-styles";
// import Theme from "styles/theme";
import Layout from "utils/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { darkTheme, lightTheme } from "styles/theme";
import { Provider, useSelector } from "react-redux";
import configureAppStore from "store/configureStore";
import useDarkMode from "use-dark-mode";
import Script from "next/script";

function MyApp({ Component, pageProps, ...props }) {
  const router = useRouter();
  // ----------------------------------- Theme
  const darkMode = useDarkMode();
  const theme = darkMode.value ? darkTheme : lightTheme;

  console.log({ darkMode });

  const initialState = {};
  const store = configureAppStore(initialState);
  return (
    <>
      <Script src="noflash.js"></Script>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AnimatePresence exitBeforeEnter>
            <Layout Component={Component} pageProps={pageProps} props={props} key={router.route} />
          </AnimatePresence>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
