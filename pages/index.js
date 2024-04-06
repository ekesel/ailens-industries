import Head from 'next/head';
import data from '../data.json';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CarouselWrap from '../components/CarouselWrap';
import Footer from '../components/Footer';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{data?.header?.title}</title>
        <link rel="icon" href={data?.favicon} />
      </Head>
      <Header
        title={data?.header?.title}
        phone={data?.header?.phone}
        location={data?.header?.location}
        socialMedia={data?.header?.socialMedia}
      />
      <NavBar homeLink={data?.homeLink} />
      <CarouselWrap carouselImages={data?.carouselImages} />
      {/* <SubHeading subHeadingSubTitle={data?.subHeadingSubTitle} subHeadingTitle={data?.subHeadingTitle} idKey={data?.subHeadingKey} />
      <div className={styles.centerContainer}>
        <div className={styles.container}>
          <div className={styles.tile}>
            <Link href="/industries">
              <Tile data={data?.tileOne} number={'01'} color={'yellow'} />
            </Link>
          </div>
          <div className={styles.tile}>
            <Tile data={data?.tileTwo} number={'02'} color={'blue'} />
          </div>
        </div>
      </div> */}
      <Categories categories={data?.category_types} />
      <Footer contactData={data?.contact} socialMedia={data?.header?.socialMedia} homeLink={data?.homeLink} />
    </div>
  );
}
