import Head from "next/head";
import classes from "@/styles/Home.module.scss";
import Form from "@/components/form";
export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/db/db.json");
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { options: data },
  };
};
const Home = ({ options }) => {
  return (
    <>
      <Head>
        <title>Window frame project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={classes.Main}>
        <h2>Select Your Options</h2>
        <Form options={options.data} />
      </main>
    </>
  );
};

export default Home;