import '@/styles/reset.css'
import '@/styles/settings.scss'
import '@/styles/global.scss'
import styles from "./page.module.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
      </main>
      <Footer />
    </div>
  );
}
