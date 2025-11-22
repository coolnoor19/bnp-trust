import React from "react";
import Layout from "../layout/Layout";
import Hero from "../sections/Hero";
import InspirationSection from "../sections/InspirationSection";
import Programs from "../sections/Programs";
import Mission from "../sections/Mission";

const Home = () => {
  return (
    <Layout >
      <Hero />
      <InspirationSection />
      <Programs />
      <Mission/>
     </Layout>
  );
};

export default Home;
