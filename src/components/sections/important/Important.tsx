// import Link from 'next/link';
import Title from '@/components/ui/title/Title';
import styles from './Important.module.scss';

export default function Important() {
  return (
    <section className={styles.important}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Title subtitle="Important" main="大切にしている事" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.slogan}>
            <span className={styles.accent}>相手の想いを尊重して</span>
            仕事をする事。
          </h3>
          <p className={styles.textWrapper}>
            <span className={styles.text}>
              デザインに込められた想いを、<br />
              忠実に形にしていく。
            </span>
            <span className={styles.text}>
              このような思いを持って、<br />
              日々の実装に取り組んでいます。
            </span>
            <span className={styles.text}>
              だからこそ、日頃のコミュニケーションも、丁寧に重ねていくことを心がけています。
            </span>
            <span className={styles.text}>
              ひとつひとつの“伝えたい”を、大切に。
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
