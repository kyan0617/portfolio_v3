'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Capabilities.module.scss';
import Title from '@/components/ui/title/Title';
import ChevronButton from '@/components/ui/chevronButton/ChevronButton';

export default function Capabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    if (newIndex !== null) setImageIndex(newIndex);
  };

  const capabilitiesList = [
    {
      title: 'Shopify構築',
      text: 'Shopifyでは、Liquidを使用したテーマ構築やカスタマイズを行なっています。\n前職でネットショップの立ち上げや運営に携わっていた経験を活かし、更新のしやすさや運用面を意識した実装を心がけています。\nセクション単位での編集や、テキスト・画像の差し替えがしやすく、デザイン崩れが起こりにくい構成を意識しながら制作しています。',
      image: '/capabilities_image_01.jpg',
    },
    {
      title: 'WordPress',
      text: 'WordPressのオリジナルテーマ制作を行なっています。\n実装時には、セクションのコンポーネント化を意識し、保守・管理のしやすいサイト作りを心がけています。また、カスタム投稿タイプの設計などを通して、更新担当者にとって使いやすい管理画面構築にも取り組んでいます。今後は、視覚的にも楽しめる少々高度なアニメーションの表現にもチャレンジしてみたいと考えています。',
      image: '/capabilities_image_02.jpg',
    },
    {
      title: 'フロントエンド実装',
      text: 'Nuxt.jsやNext.jsを使用した、Webアプリケーションのフロントエンド実装にも取り組んでいます。\nフロントエンド領域では、実務での実装経験を重ねつつ、スキル強化を目指して学習を続けています。\n今後は、UIや体験面にもこだわった実装ができるよう、表現の幅を広げていきたいと考えています。',
      image: '/capabilities_image_03.jpg',
    },
  ];

  return (
    <section className={styles.capabilities}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.head}>
            <Title subtitle="Capabilities" main="できる事" />
            <div key={imageIndex} className={`${styles.image} ${openIndex === null ? styles.imageHidden : ''}`}>
              <Image src={capabilitiesList[imageIndex].image} alt={`${capabilitiesList[imageIndex].title}のイメージ画像です。`} width={285} height={184} />
            </div>
          </div>
          <div className={styles.content}>
            <ul className={styles.list}>
              {capabilitiesList.map((item, index) => (
                <li className={styles.item} key={index}>
                  <div className={styles.itemTitle} onClick={() => handleClick(index)}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <div className={styles.button}>
                      <ChevronButton isOpen={openIndex === index}/>
                    </div>
                  </div>
                  <div className={`${styles.itemContent} ${openIndex === index ? styles.open : ''}`}>
                    <div className={styles.itemContentInner}>
                      <p className={styles.text}>{item.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
