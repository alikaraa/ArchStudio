import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Arch Studio</title>
        <link
          href="https://fonts.googleapis.com/css?family=Spartan:wght@400,500,600,700"
          rel="stylesheet"
          key="google-font-cabin"
        />
      </Head>
      <Component {...pageProps} />
      <style global jsx>{`
        body,
        html,
        input,
        button,
        textarea {
          font-family: "Spartan", sans-serif;
          margin: 0;
          padding: 0;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

export default MyApp;
