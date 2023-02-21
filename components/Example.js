import SyntaxHighlighter from "react-syntax-highlighter";
import { CATEGORIES } from "../utils/categories";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect, useState } from "react";

export const Example = ({ path, cat, desc }) => {
  const [fact, setFact] = useState("");
  useEffect(() => {
    getFact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFact = () =>
    fetch(`/api/random${path ? `?${path}` : ""}`)
      .then((rsp) => rsp.json())
      .then(setFact);
  return (
    <>
      <h4>{desc}</h4>
      <kbd className="kbd kbd-lg">
        GET useless.dotenv.dev/api/random{path ? `?${path}` : ""}
      </kbd>
      {cat && (
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-8"
        >
          <div className="collapse-title font-medium">
            See available categories
          </div>
          <div className="collapse-content">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.values(CATEGORIES).map((cat, i) => (
                    <tr key={i}>
                      <td>{cat.name}</td>
                      <td>{cat.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <div className="mockup-code mb-12 mt-6">
        <SyntaxHighlighter
          language="json"
          style={{
            ...agate,
            hljs: {
              background: "transparent",
              padding: 0,
              color: "inherit",
              paddingLeft: 18,
            },
          }}
        >
          {fact ? JSON.stringify(fact, null, 2) : ""}
        </SyntaxHighlighter>
      </div>
    </>
  );
};
