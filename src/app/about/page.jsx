import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>We create digital ideas that are bigger, bolder, braver and better.</h1>
                <p className={styles.desc}>
                    Lorem, ipsun dolor sit amet consectetur adipiscing elit. Vero blandtiits adipisci minima reciciendis a autem assumenda dolore
                </p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>
                            Years of experience
                        </p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>
                            Years of experience
                        </p>
                    </div>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>
                            Years of experience
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src='/about.png'
                    alt='About Image'
                    fill
                />
            </div>
        </div>
    )
};

export default AboutPage;



//in next.js we use <Image/> tag not <img/>
//next.js is not showing our images directly, instead it is caching/optimizing it first in the next folder
//for different screen sizes
//To utilize this feature, you can add fill to the tag and it will reference the size of its parent container
//make sure your parent container position is relative