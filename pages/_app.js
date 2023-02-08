import Master from "@/Components/layout/master";
import '../styles/main.css';


export default function App({ Component, pageProps }) {
  return (
    <Master>
      <Component {...pageProps} />
    </Master>
  );
}
