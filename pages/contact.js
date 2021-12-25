import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import ContactComponent from "containers/ContactContainer";

// const ContactComponent = dynamic(import("containers/ContactContainer"));
export default function Contact({ clickedNavState }) {
  return <ContactComponent clickedNavState={clickedNavState} />;
}

Contact.defaultLayout = "Contact";
// Work.footer = ["work1", "work2", "work3"];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
