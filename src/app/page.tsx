import styles from "./page.module.css";
import Header from "@/components/layout/header/Header";
import Mv from "@/components/sections/mv/Mv";
import Footer from "@/components/layout/footer/Footer";
import Important from '@/components/sections/important/Important';
import Conscious from '@/components/sections/conscious/Conscious';
import Media from '@/components/sections/media/Media';
import About from '@/components/sections/about/About';
import Capabilities from '@/components/sections/capabilities/Capabilities';
import Works from '@/components/sections/works/Works';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Mv />
        <Important />
        <Conscious />
        <Media />
        <About />
        <Capabilities />
        <Works />
      </main>
      <Footer />
    </div>
  );
}
