import { Provider } from "react-redux";
import { useStore } from "../store";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.scss";

export default function App({
  Component,
  pageProps: { session, initialReduxState, ...pageProps },
}) {
  const store = useStore(initialReduxState);

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
