import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const Index = () => (
  <Layout mainTitle="My Home Page built with Next JS">
    <Head>
      <title>Home Page</title>
    </Head>

    <p>This is my Home Page!</p>
  </Layout>
);

export default Index;
