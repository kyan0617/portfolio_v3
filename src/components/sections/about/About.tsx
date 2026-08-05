// import Link from 'next/link';
import Title from '@/components/ui/title/Title';
import styles from './About.module.scss';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.head}>
            <Title subtitle="About" main="わたしについて" isCenterSp={true} />
          </div>
          <div className={styles.profile}>
            <div className={styles.image}>
              <Image src="/about_image.png" alt="わたしについて" fill sizes="(min-width: 768px) 183px, 163px" style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.details}>
              <h3 className={styles.name_en}>Haruka Nishida</h3>
              <p className={styles.name_ja}>西田 遥香</p>
            </div>
            <p className={styles.text}>
              1995年生まれ、愛知県名古屋市在住。
              <br />
              2021年からフリーランスのWEBコーダーとして活動開始。主に、Shopify構築（Liquid）や、WordPressのオリジナルテーマ制作を行なっています。
              <br />
              また、Nuxt.jsやNext.jsなどのフレームワークを用いたWEBアプリのフロント実装も担当しております。
              <br />
              現在は、フロントエンド領域のスキルをさらに強化し、実務で活かせる技術の幅を広げるため、Astroなどの技術習得にも取り組んでいます。
            </p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <span className={styles.label}>出身地</span>
                <span className={styles.value}>愛知県名古屋市</span>
              </li>
              <li className={styles.item}>
                <span className={styles.label}>趣味</span>
                <span className={styles.value}>旅行、読書、音楽、ドラム</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
