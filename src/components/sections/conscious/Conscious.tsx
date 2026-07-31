// import Link from 'next/link';
import Image from 'next/image';
import Title from '@/components/ui/title/Title';
import styles from './Conscious.module.scss';

export default function Conscious() {
  const consciousList = [
    {
      num: '01',
      image: '/consciousSection_01.png',
      title: '“伝えたい”を、カタチにする。',
      text: 'クライアントやディレクター、デザイナーが力を合わせて作り上げた“伝えたい”という想いを、\n実装でかたちにしていく。\nその意図や空気感も実装に乗せて、見てくださる方に届けられるよう心がけています。',
    },
    {
      num: '02',
      image: '/consciousSection_01.png',
      title: 'オンラインでも、\n温かみのあるコミュニケーション。',
      text: '仕事をする上では、コミュニケーションを通じた信頼関係をいちばん大切にしています。\nやりとりの多くがオンラインになるからこそ、伝わりやすく、やわらかい言葉選びを意識しています。',
    },
    {
      num: '03',
      image: '/consciousSection_01.png',
      title: '運用する人にも、やさしい設計を。',
      text: '管理画面のカスタマイズや、デザイン崩れが起こりにくい実装など、運用のしやすさを意識して実装しています。\n更新や修正を悩まず行えるような、直感的な設計を心がけています。',
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
                <div className={styles.image}>
                  <Image src={item.image} alt={`${item.title}のイメージ画像です。`} width={100} height={100} />
                </div>
                <div className={styles.details}>
                  <span className={styles.num}>{item.num}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
