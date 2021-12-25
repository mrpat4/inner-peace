import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import WorkComponent from "containers/WorkContainer";

// const WorkComponent = dynamic(import("containers/WorkContainer"));
export default function Works({ clickedNavState }) {
  return <WorkComponent clickedNavState={clickedNavState} />;
}

Works.defaultLayout = "Works";
// Work.footer = ["work1", "work2", "work3"];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
