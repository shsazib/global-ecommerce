import Master from "@/Components/layout/master";
import '../styles/main.css';
import { AppProvider } from "@/Global-fun/AppProvider";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Master>
        <Component {...pageProps} />
      </Master>
    </AppProvider>
  );
}
