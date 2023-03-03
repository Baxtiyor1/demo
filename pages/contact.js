import Head from "next/head";
import ContactComp from "../src/Components/contact/contactComp";
import ContactIntro from "../src/Components/contactIntro/contactIntro";

// import Components
import Layout from "../src/Components/layout/layout";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout bgPathLay={"contact"}>
        <ContactIntro/>
        <ContactComp/>
      </Layout>
    </>

  );
}
