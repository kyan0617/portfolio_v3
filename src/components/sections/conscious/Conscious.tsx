// import Link from 'next/link';
import Title from '@/components/ui/title/Title';
import styles from './Conscious.module.scss';

export default function Conscious() {
  const consciousList = [
    {
      num: '01',
      title: <>“伝えたい”を、<br className={styles.brPc} />カタチにする。</>,
      text: <>クライアントやディレクター、デザイナーが力を合わせて作り上げた<br className={styles.brPc} />“伝えたい”という想いを、<br className={styles.brSp} />実装でかたちにしていく。<br />その意図や空気感も実装に乗せて、見てくださる方に届けられるよう心がけています。</>,
    },
    {
      num: '02',
      title: <>オンラインでも、<br />温かみのある<br className={styles.brPc} />コミュニケーション。</>,
      text: <>コミュニケーションを通じた信頼関係を一番大切にしています。<br />やりとりの多くがオンラインになるからこそ、<br className={styles.brPc} />伝わりやすく、やわらかい言葉選びを意識しています。</>,
    },
    {
      num: '03',
      title: <>運用する人にも、<br className={styles.brPc} />やさしい設計を。</>,
      text: <>管理画面のカスタマイズや、デザイン崩れが起こりにくい実装など、<br className={styles.brPc} />運用のしやすさを意識して実装しています。<br />更新や修正を悩まず行えるような、直感的な設計を心がけています。</>,
    },
  ];
  return (
    <section className={styles.conscious}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Title subtitle="Conscious" main="意識している事" />
        </div>
        <div className={styles.content}>
          <ul className={styles.list}>
            {consciousList.map((item, index) => (
              <li className={styles.item} key={index}>
                <span className={styles.num}>{item.num}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
