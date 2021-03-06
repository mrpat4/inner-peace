import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Loading from "reusableComponents/Loading";
import Main from "containers/MainContainer";

// const Main = dynamic(import("containers/MainContainer"));
export default function Home({ clickedNavState }) {
  return <Main clickedNavState={clickedNavState} />;
}

Home.defaultLayout = "Home";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
