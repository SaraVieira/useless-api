import { useEffect, useState } from "react";
import { CATEGORIES, facts } from "../utils/facts";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Example = ({ path, cat, desc }) => {
  const [fact, setFact] = useState("");
  useEffect(() => {
    getFact();
  }, []);

  const getFact = () =>
    fetch(`/api/random${path ? `?${path}` : ""}`)
      .then((rsp) => rsp.json())
      .then(setFact);
  return (
    <>
      <h4>{desc}</h4>
      <kbd className="kbd kbd-lg">
        GET useless.dotenv.dev/random{path ? `?${path}` : ""}
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

export default function Home() {
  return (
    <>
      <h1 className="sr-only">The useless api</h1>
      <h2 className="text-center">
        <span className="bg-black/60 p-2">Want useless facts?</span> We have
        those in spades
      </h2>
      <div className="flex justify-center">
        <div class="stats shadow rounded-r-none border-r-base-content/20 border-r">
          <div class="stat">
            <div class="stat-title">Total facts</div>
            <div class="stat-value">{facts.length}</div>
          </div>
        </div>
        <div class="stats shadow rounded-l-none">
          <div class="stat">
            <div class="stat-title">Categories</div>
            <div class="stat-value">{Object.keys(CATEGORIES).length}</div>
          </div>
        </div>
      </div>
      <h2 className="my-12">Usage</h2>
      <Example desc="Get one fact" />
      <Example path="count=3" desc="Get a certain number of facts" />
      <Example
        path="category=iceland"
        cat
        desc="Get only facts in a category"
      />
    </>
  );
}
