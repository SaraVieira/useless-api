import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import "../globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <SEO />
      <nav className="flex justify-center my-12">
        <img src="/logo.svg" alt="logo" width="500" className="max-w-[80%]" />
      </nav>
      <div className="md:max-w-3xl max-w-[80%] m-auto prose">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
