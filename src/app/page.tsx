import '@/styles/reset.css'
import '@/styles/settings.scss'
import '@/styles/global.scss'
import styles from "./page.module.css";
import Header from "@/components/layout/header/Header";
import Mv from "@/components/sections/mv/Mv";
import Footer from "@/components/layout/footer/Footer";
import Important from '@/components/sections/important/Important';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Mv />
        <Important />
      </main>
      <Footer />
    </div>
  );
}
