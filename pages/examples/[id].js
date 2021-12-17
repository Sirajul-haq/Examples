import Head from "next/head";
import styles from "../../styles/Home.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
  const data = await res.json();

  const paths = data.map((example) => {
    return {
      params: { id: example.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/photos/" + id);
  const data = await res.json();

  return {
    props: { example: data },
  };
};

const Details = ({ example }) => {
  return (
    <div>
      <Head>
        <title>{example.title}</title>
        <meta property="og:image" content={example.url} />
        <meta property="og:description" content={example.title} />
      </Head>

      <div className={styles.navstyles}>
        <h1> Person Detail page</h1>
        <span> Back </span>
      </div>
      <fieldset>
        <div className={styles["d-flex"] + " " + styles[" align-items-center"]}>
          <span>{example.albumId} </span>
          <h2>{example.title}</h2>
        </div>

        <div>
          <img src={example.url} height="250" width="250" />
        </div>
        <div>
          <img src={example.thumbnailUrl} height="100" width="100" />
        </div>
      </fieldset>
    </div>
  );
};

export default Details;
