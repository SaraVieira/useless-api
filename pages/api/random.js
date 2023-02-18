import { CATEGORIES, facts } from "../../utils/facts";

export const config = {
  runtime: "edge",
};

const error = (error) =>
  new Response(
    JSON.stringify({
      error,
    }),
    {
      status: 500,
      headers: {
        "content-type": "application/json",
      },
    }
  );

const random = async function (req) {
  const { searchParams } = new URL(req.url);
  const count = searchParams.get("count");
  const category = searchParams.get("category");
  if (count) {
    if (count <= 20) {
      let factsResponse = [];

      for (let i = count; i >= 0; i--) {
        factsResponse.push(facts[Math.floor(Math.random() * facts.length)]);
      }
      return Response.json(factsResponse);
    } else {
      return error("Maximum allowed is 20");
    }
  }

  if (category) {
    if (CATEGORIES[category.toLocaleUpperCase()]) {
      let f = facts.filter((f) => f.category === category);
      return Response.json(f[Math.floor(Math.random() * f.length)]);
    } else {
      return error(
        `Category does not exist, available categories are ${Object.keys(
          CATEGORIES
        )
          .join(", ")
          .toLocaleLowerCase()}`
      );
    }
  }

  const fact = facts[Math.floor(Math.random() * facts.length)];

  return Response.json(fact);
};

export default random;
