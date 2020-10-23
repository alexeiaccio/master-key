import * as fs from "fs";

import Scene from "../components/Scene";

export async function getStaticProps() {
  const items = await fs.readFileSync("public/data/items.json", "utf-8");

  return {
    props: {
      items: JSON.parse(items),
    },
  };
}

export default function Index({ items }) {
  return <Scene items={items} />;
}
