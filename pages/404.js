import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import classes from "../styles/404.module.scss";

const Error = () => {
  const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 3000);
  // }, [router]);

  return (
    <div className={classes.Error}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <p>404</p>
        <p>Somethings went wrong. Page Not Found</p>
      </div>
    </div>
  );
};

export default Error;
