import Head from 'next/head';
import data from '../data.json';
import InfoHeader from '../components/InfoHeader';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

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
    </div>
  );
}
