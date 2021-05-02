import "semantic-ui-css/semantic.min.css";

export default function App({ Component, pageProps }) {
  console.log("App initialization");
  return <Component {...pageProps} />;
}
