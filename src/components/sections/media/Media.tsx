import styles from './Media.module.scss';
import Image from 'next/image';


export default function Media() {
  return (
    <section className={styles.important}>
      <div className={styles.inner}>
        <picture>
          <source srcSet="/media_image_pc.jpg" media="(min-width: 769px)" />
          <Image src="/media_image_sp.jpg" alt="" width={1284} height={1011} />
        </picture>
      </div>
    </section>
  );
}
