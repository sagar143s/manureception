import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import WeddingCard from "./components/card";
import GallerySlider from "./components/gallery";
import Map from './components/map'

export default function Home() {
  return (
    <div className={styles.page}>
      <Header/>
      <WeddingCard/>
      {/* <GallerySlider/> */}
      {/* <Map/> */}
            {/* <GallerySlider/> */}

       
    </div>
  );
}
