import { CATEGORIES } from "../utils/categories";
import { Example } from "../components/Example";
import { facts } from "../utils/facts";

const Home = () => (
  <>
    <h1 className="sr-only">The useless api</h1>
    <h2 className="text-center">
      <span className="bg-black/60 p-2">Want useless facts?</span> We have those
      in spades
    </h2>
    <div className="flex justify-center">
      <div className="stats shadow rounded-r-none border-r-base-content/20 border-r">
        <div className="stat">
          <div className="stat-title">Total facts</div>
          <div className="stat-value">{facts.length}</div>
        </div>
      </div>
      <div className="stats shadow rounded-l-none">
        <div className="stat">
          <div className="stat-title">Categories</div>
          <div className="stat-value">{Object.keys(CATEGORIES).length}</div>
        </div>
      </div>
    </div>
    <h2 className="my-12">Usage</h2>
    <Example desc="Get one fact" />
    <Example path="count=3" desc="Get a certain number of facts" />
    <Example path="category=iceland" cat desc="Get only facts in a category" />
  </>
);

export default Home;
