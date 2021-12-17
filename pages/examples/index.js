import styles from "../../styles/Home.module.css";
import Link from "next/link";

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=10"
  );
  const data = await res.json();

  return {
    props: { examples: data },
  };
};

export default function Examples({ examples }) {
  return (
    <div>
      <h1>Examples</h1>
      <div className={styles.titlediv}>
        {examples.map((example) => (
          <Link href={"/examples/" + example.id} key={example.id}>
            <a>
              <div className={styles.namelayout}>
                <div className={styles.d_flex}>
                  <h3> {example.id} </h3>
                  <h4> .{example.title}</h4>{" "}
                </div>

                <img src={example.url} alt="images" height={250} />
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
