import { Header } from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex justify-center w-screen h-full min-h-screen p-8 bg-bg-100 text-text-100">
      <div className="w-full h-full max-w-3xl p-4 border rounded-md bg-bg-200 border-bg-300">
        <Header />
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
