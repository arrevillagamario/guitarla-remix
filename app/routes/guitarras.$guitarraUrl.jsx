import React from "react";
import { getGuitarra } from "../models/guitarras.server.js";
import { useLoaderData } from "@remix-run/react";

export async function loader(req) {
  const guitarra = await getGuitarra(req.params.guitarraUrl);
  console.log(guitarra);
  return {};
}
const Guitarra = () => {
  const guitarra = loader();
  return <div>Guitarra</div>;
};

export default Guitarra;
