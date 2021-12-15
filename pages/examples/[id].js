import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
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
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { example: data },
  };
};

const Details = ({ example }) => {
  return (
    <div>
      <Head>
        <title>{example.name}</title>
        <meta name="description" content={example.email} />
        <meta name="Keywords" content={example.address.street} />
      </Head>
      <div> Person Detail page</div>

      <h2>{example.name}</h2>

      <p>{example.email}</p>
      <h3>Address</h3>
      <p>{example.address.street}</p>
      <p>{example.address.city}</p>
    </div>
  );
};

export default Details;
