import { facts } from "../../utils/facts";

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

  const fact = facts[Math.floor(Math.random() * facts.length)];

  return Response.json(fact);
};

export default random;
