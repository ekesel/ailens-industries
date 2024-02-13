import Head from 'next/head';
import data from '../data.json';
import InfoHeader from '../components/InfoHeader';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CarouselWrap from '../components/CarouselWrap';
import Filter from '../components/Filter';
import Footer from '../components/Footer';

export default function Industries() {
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
      <Filter categories={data?.categories} />
      <Footer contactData={data?.contact} socialMedia={data?.socialMedia} />
    </div>
  );
}
