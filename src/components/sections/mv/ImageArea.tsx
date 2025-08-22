import Image from 'next/image'
import styles from './ImageArea.module.scss';

export default function MvImageArea() {
  return (
    <div className={styles.imageAreaWrapper}>
      <div className={styles.button}>
        <div className={styles.buttonInner}>
          <Image
            src="/mv_button_arrow.svg"
            alt=""
            width={16}
            height={16}
          />
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/mv_image.jpg"
          alt=""
          width={1280}
          height={720}
        />
      </div>
    </div>
  );
}
