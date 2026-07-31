// import Link from 'next/link';
import { client, Cases } from '@/lib/microcms';

import styles from './Works.module.scss';
import Title from '@/components/ui/title/Title';
import Image from 'next/image';
import Button from '@/components/ui/button/Button';

export default async function Works() {
  const data = await client.getList<Cases>({ endpoint: 'cases'});
  const cases = data.contents;

  return (
    <section id="works" className={styles.works}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Title subtitle="Works" main="制作事例" isCenter />
        </div>
        <div className={styles.main}>
          <ul className={styles.list}>
            {cases.map((item) => (
              <li key={item.id} className={styles.item}>
                <a href={item.url} className={styles.link} target="_blank">
                  <div className={styles.image}>
                    <Image src={item.thumbnail.url} alt={`${item.title}のイメージ画像です。`} width={590} height={332} />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.details}>
                      <h3 className={styles.title}>{item.title}</h3>
                      <p className={styles.category}>
                        <span>{item.responsibility}</span>/<span>{item.year}</span>
                      </p>
                    </div>
                    <div className={styles.button}>
                      <Button />
                    </div>
                  </div>
                </a>
                {item.agency && item.agencyLink && (
                  <a href={item.agencyLink} className={styles.agencyLink} target="_blank">
                    <span className={styles.agencyLabel}>Agency: </span>
                    <span className={styles.agencyName}>{item.agency}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
