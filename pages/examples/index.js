import styles from "../../styles/Home.module.css";
import Link from 'next/link';

export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return{
      props: {examples : data }
  }
  
}

export default function Examples({examples}) {

    return(
        <div className={styles.container}>

            <h1>Examples</h1>
            
            {examples.map(example => (

                <Link  href={'/examples/' + example.id }
                key={example.id} >
                    <a>
                        <div  className={styles.namelayout}> 
                        <h2>{example.name}</h2>
                        
                        <h3>Address</h3>
                        <div>
                            {example.address.street}
                        
                        </div>
                        <div>
                        {example.address.suite} </div>
                        </div>

                    </a>


                </Link>
            ))}
         
        </div>
    )
};
