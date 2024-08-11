import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global-styles";
import Layout from "utils/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { darkTheme, lightTheme } from "styles/theme";
import { Provider } from "react-redux";
import configureAppStore from "store/configureStore";
import useDarkMode from "use-dark-mode";
import Script from "next/script";
import { useEffect } from "react";

function MyApp({ Component, pageProps, ...props }) {
  const router = useRouter();
  const darkMode = useDarkMode(false);

  // Persist dark mode state using local storage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      savedMode === "true" ? darkMode.enable() : darkMode.disable();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.value);
  }, [darkMode.value]);

  const theme = darkMode.value ? darkTheme : lightTheme;

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
