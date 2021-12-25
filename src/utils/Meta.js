import Head from "next/head";
import PropTypes from "prop-types";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      {/* <link rel="shortcut icon" type="image/x-icon" href="/images/newSetIcons/favicon.ico" />
      <link rel="apple-touch-icon" sizes="114×114" href="/images/newSetIcons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="72×72" href="/images/newSetIcons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" href="/images/newSetIcons/apple-icon.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/images/newSetIcons/android-icon-192x192.png" />
      <link rel="manifest" href="/images/newSetIcons/manifest.json"></link>
      <link rel="icon" href="/images/newSetIcons/favicon-16x16.png" /> */}
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Inner-Peace",
  keywords: "digital",
  description: "Parham payam Portfolio",
};

// prop types
Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
};

export default Meta;
