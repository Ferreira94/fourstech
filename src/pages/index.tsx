import About from '@/components/About';
import Header from '@/components/Header';
import Introduction from '@/components/Introduction';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Inicial | Fourstech Agência Digital</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
        <div className="w-screen h-full bg-backgroundImg bg-cover bg-center bg-no-repeat fixed top-0" />
        <Header />
        <Introduction />
        <About />
      </main>
    </>
  );
}
