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
      <meta content="Parham Payam's resume" name="description" />
      <meta content="Parham Payam's resume" property="og:title" />
      <meta content="Parham Payam's resume" property="og:description" />
      <meta content="/image/apple-touch-icon.png" property="og:image" />
      <meta property="og:url" content="" />
      <meta property="og:site_name" content="Inner Peace" />
      <meta content="Parham Payam's resume" property="twitter:title" />
      <meta content="Parham Payam's resume" property="twitter:description" />
      <meta content="/image/apple-touch-icon.png" property="twitter:image" />
      <meta property="og:type" content="website" />
      <meta content="summary" name="twitter:card" />
      <meta name="twitter:site" content="@ " />
      <meta name="twitter:creator" content="@ " />
      <meta property="fb:admins" content="132951670226590" />
      <link rel="icon" href="/image/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" sizes="180x180" href="/image/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/image/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/image/favicon-16x16.png" />
      <link rel="manifest" href="/image/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      {/* <script src="https://www.google.com/recaptcha/api.js"></script> */}
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: " Inner Peace",
  keywords: "digital,resume,website",
  description: "Parham Payam's resume",
};

// prop types
Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
};

export default Meta;
