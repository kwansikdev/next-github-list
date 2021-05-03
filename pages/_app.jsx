import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <style jsx>
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
