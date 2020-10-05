import * as fs from "fs";
import Scene from "../components/Scene";

export async function getStaticProps() {
  const items = await fs.readFileSync("public/data/items.json", "utf-8");
  const positions = await fs.readFileSync("public/data/positions.json", "utf-8");

  return {
    props: {
      items: JSON.parse(items),
      positions: JSON.parse(positions),
    },
  };
}

export default function Index({ items, positions }) {
  return <Scene items={items} positions={positions} />;
}
