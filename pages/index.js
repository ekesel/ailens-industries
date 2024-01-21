import Head from 'next/head';
import data from '../data.json';
import InfoHeader from '../components/InfoHeader';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CarouselWrap from '../components/CarouselWrap';
import SubHeading from '../components/SubHeading';
import styles from '../styles/Home.module.css';
import Tile from '../components/Tile';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{data?.title}</title>
        <link rel="icon" href={data?.favicon} />
      </Head>
      <InfoHeader
        location={data?.location}
        socialLinks={data?.socialMedia}
      />
      <Header
        callHelpText={data?.callHelpText}
        phone={data?.phone}
        emailHelpText={data?.emailHelpText}
        email={data?.email}
        certificateText={data?.certificateText}
        certificate={data?.certificate}
      />
      <NavBar />
      <CarouselWrap carouselImages={data?.carouselImages} />
      <SubHeading subHeadingSubTitle={data?.subHeadingSubTitle} subHeadingTitle={data?.subHeadingTitle} idKey={data?.subHeadingKey} />
      <div className={styles.centerContainer}>
        <div className={styles.container}>
          <div className={styles.tile}>
            <Tile data={data?.tileOne} number={'01'} color={'yellow'} />
          </div>
          <div className={styles.tile}>
            <Tile data={data?.tileTwo} number={'02'} color={'blue'} />
          </div>
        </div>
      </div>
      <Footer contactData={data?.contact} socialMedia={data?.socialMedia} />
    </div>
  );
}
