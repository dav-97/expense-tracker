import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Create", href: "#" },
  ];
  return (
    <div className="flex justify-center w-screen h-full min-h-screen p-8 bg-bg-100 text-text-100">
      <div className="w-full h-full max-w-3xl p-4 border rounded-md bg-bg-200 border-bg-300">
        <header className="rounded-md bg-bg-300">
          <nav
            className="flex items-center justify-center p-4 mx-auto max-w-7xl lg:px-8"
            aria-label="Global"
          >
            <div className="flex gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-text-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </header>
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default App;
