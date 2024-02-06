import styles from './home.module.css';
import Image from 'next/image';

const HomePage = () => {

  return (

    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>
          Lorem, ipsun dolor sit amet consectetur adipiscing elit. Vero blandtiits adipisci minima reciciendis a autem assumenda dolore
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image className={styles.brandImg} src="/brands.png" alt="brands logo" fill />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src='/hero.gif' alt='gif of light bulb' fill className={styles.heroImg} />
      </div>
    </div>
  )
};

export default HomePage;



