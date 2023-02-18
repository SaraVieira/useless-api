import { useEffect, useState } from "react";
import { facts } from "../utils/facts";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate as docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function Home() {
  const [fact, setFact] = useState("");
  useEffect(() => {
    getFact();
  }, []);

  const getFact = () =>
    fetch("/api/random")
      .then((rsp) => rsp.json())
      .then(setFact);
  return (
    <>
      <h3>Does what it says</h3>
      <h3>Want useless facts? We have those</h3>
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Total facts</div>
          <div class="stat-value">{facts.length}</div>
        </div>
      </div>
      <h3>Usage</h3>
      <kbd className="kbd kbd-lg">GET useless.dotenv.dev/random</kbd>
      <div className="mockup-code my-12">
        <pre>
          <SyntaxHighlighter
            language="json"
            style={{
              ...docco,
              hljs: {
                background: "transparent",
                padding: 0,
                color: "inherit",
              },
            }}
          >
            {JSON.stringify(fact, null, 2)}
          </SyntaxHighlighter>
        </pre>
      </div>
    </>
  );
}
