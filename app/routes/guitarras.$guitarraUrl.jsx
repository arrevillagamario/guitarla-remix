import React from "react";
import { getGuitarra } from "../models/guitarras.server.js";

export async function loader(params) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);
  console.log(guitarra);
  return {};
}
const Guitarra = () => {
  return <div>Guitarra</div>;
};

export default Guitarra;
