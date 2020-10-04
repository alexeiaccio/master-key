import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <p>...</p>,
});

const Index = () => {
  return <Map />;
};

export default Index;
