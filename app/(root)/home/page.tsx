import Navbar from '@/components/Navbar';
import Boxes from '@/components/Boxes';
import './globals.css';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Card from '@/components/Card';
import Contact from '@/components/contact'

const App = () => {
  const imageUrl = 'https://static.wixstatic.com/media/1df416_717fad7f2a0e4fd1a623e7a5c8d6fb45~mv2.png/v1/fill/w_679,h_521,al_c,lg_1,q_85,enc_auto/Screenshot%202023-09-18%20215025.png';

  const cardsData = [
    {
      id: 1,
      imageSrc: 'https://i.ibb.co/JdGqB7X/download-2-1.jpg',
      description: 'blog 1',
      link: '/blog1',
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/368x256',
      description: 'blog 2',
      link: '/blog2',
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/368x256',
      description: 'blog 3',
      link: '/blog2',
    },
  ];

  return (
    <div>
      <Navbar />
      <section
        id="home"
        className="text-black h-screen bg-gray-200 flex justify-center items-center"
      >
        <div className="flex justify-center items-center mt-10">
          <Image src={imageUrl} alt="StempathyLogo" width={679} height={521} />
        </div>
      </section>
      <section id="vision" className="bg-white h-screen] text-center flex">
        <Boxes />
      </section>
      <section className="text-white h-screen] bg-gray-200">
        <h1 className="font-serif text-3xl text-black text-center pt-10 underline">
          Blogs
        </h1>
        <div className="flex flex-col justify-center text-center items-center md:flex-row">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              imageSrc={card.imageSrc}
              description={card.description}
              link={card.link}
            />
          ))}
        </div>
      </section>
      <section className="w-screen h-screen">
        <Contact />
        
      </section>
      <div className='w-screen h-40 bg-gray-200'>
      </div>
      <div className='w-screen h-26 bg-gray-200 border-black'>
        <Footer />
      </div>

    </div >
  );
};

export default App;
