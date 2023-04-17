import Layout from "../components/Navigation/Layout";
import "../styles/globals.css";
import { store } from "../store/redux-store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
