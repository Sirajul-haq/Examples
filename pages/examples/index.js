import styles from "../../styles/Home.module.css";
import Link from "next/link";
// import Image from 'next/Image';

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
  const data = await res.json();

  return {
    props: { examples: data },
  };
};

export default function Examples({ examples }) {
  return (
    <div className={styles.container}>
      <h1>Examples</h1>

      {examples.map((example) => (
        <Link href={"/examples/" + example.id} key={example.id}>
          <a>
            <div className={styles.namelayout}>
         <h3>   {example.id} </h3>
              <h2>{example.title}</h2>

              <img src={example.url} alt="images"  />
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
