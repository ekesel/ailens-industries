import React from 'react'
import Head from 'next/head';
import data from '../../data.json';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import CarouselWrap from '../../components/CarouselWrap';
import Footer from '../../components/Footer';
import Filter from '../../components/Filter';

const index = () => {
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
      <Filter categories={data?.industries} />
      <Footer contactData={data?.contact} socialMedia={data?.header?.socialMedia} homeLink={data?.homeLink} />
    </div>
  )
}

export default index