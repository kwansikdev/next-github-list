import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: "Noto Sans KR", sans-serif;
          }
        `}
      </style>
    </>
  );
}

export default MyApp;
