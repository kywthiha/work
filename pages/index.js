import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { startClock } from "../actions";
import Layout from "../components/layout";
import Work from "../components/work";

const Index = () => {
  return (
    <Layout>
      <Work />
    </Layout>
  );
};

export default Index;
