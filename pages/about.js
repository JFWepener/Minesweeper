import Link from "next/link";
import Layout from "../components/Layout";

const myStyle = {
  color: "red",
  borderLeft: "5px solid black",
  padding: "5px",
};

const About = () => (
  <Layout mainTitle="My About Page">
    <h2>About page</h2>

    <p>This is my about page!</p>

    <style jsx>{`
      p {
        color: indigo;
        font-size: 20px;
      }
    `}</style>
  </Layout>
);

export default About;
