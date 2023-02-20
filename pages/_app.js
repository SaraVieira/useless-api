import Head from "next/head";
import "../globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>the_useless_api</title>
        <meta name="title" content="the_useless_api" />
        <meta
          name="description"
          content="Need useless facts? We got that in spades. The most useless API of all time, never have awkward silence again."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://useless.dotenv.dev/" />
        <meta property="og:title" content="the_useless_api" />
        <meta
          property="og:description"
          content="Need useless facts? We got that in spades. The most useless API of all time, never have awkward silence again."
        />
        <meta
          property="og:image"
          content="https://useless.dotenv.dev/meta.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://useless.dotenv.dev/" />
        <meta property="twitter:title" content="the_useless_api" />
        <meta
          property="twitter:description"
          content="Need useless facts? We got that in spades. The most useless API of all time, never have awkward silence again."
        />
        <meta
          property="twitter:image"
          content="https://useless.dotenv.dev/meta.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000" />
      </Head>
      <nav className="flex justify-center my-12">
        <img src="/logo.svg" alt="logo" width="500" className="max-w-[80%]" />
      </nav>
      <div className="md:max-w-3xl max-w-[80%] m-auto prose">
        <Component {...pageProps} />
      </div>
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <div>
          <p>
            Created by @NikkitaFTW <br />
          </p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/NikkitaFTW">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="https://github.com/SaraVieira/useless-api">
              <svg
                role="img"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyApp;
