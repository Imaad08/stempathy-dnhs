import Navbar from '@/components/Navbar';
import Image from 'next/image';
import ImageSlider from '@/components/ImageSlider';
import Footer from '@/components/Footer'


const aboutPage = () => {
    const imageUrl = 'https://static.wixstatic.com/media/1df416_717fad7f2a0e4fd1a623e7a5c8d6fb45~mv2.png/v1/fill/w_679,h_521,al_c,lg_1,q_85,enc_auto/Screenshot%202023-09-18%20215025.png';

    return (
        <div>
            <Navbar />
            <section
                className="text-black h-screen bg-gray-200 flex flex-col justify-center items-center"
            >
                <h1 className=' text-2xl font-serif mt-40 italic'>About</h1>
                <br>
                </br>
                <h2 className='text-5xl font-serif'>STEMpathy DNHS</h2>

                <br>
                </br>
                <br>
                </br>
                <p className=' font-serif flex justify-center text-center items-center max-w-6xl mx-auto'>
                    We at Stempathy believe that access to a proper education is a basic
                    human right. That’s why we are dedicated to elevating humanity through
                    the education of children around the globe in the field of robotics,
                    programming, and STEM. By creating our own curriculums and teaching them
                    through multiple mediums, we hope to reach our goal.
                </p>
                <br>
                </br>
                <p className=' flex justify-center text-center font-serif'>
                    So far, we have spread our mission of teaching STEM to over 100 students
                    and are striving to go past and through the world.
                </p>
                <br>
                </br>
                <br>
                </br>
                <div className="flex justify-center items-center">
                    <Image src={imageUrl} alt="StempathyLogo" width={279} height={121} />
                </div>
            </section >
            <section
                className="text-black h-screen bg-customGreen flex flex-col text-center"
            >
                <h1 className=' text-black text-5xl font-serif mt-20 italic'>Past Camps/Plans</h1>
                <br>
                </br>
                <br>
                </br>
                <p className=' font-seri max-w-6xl mx-auto'>
                    We at STEMpathy have already spread our mission of equitable STEM education to over 100 students locally. We are currently in the process of expanding internationally to schools not only in San Diego but also in India.
                </p>
                <ImageSlider />
                <br>
                </br>
            </section>
            <div className='w-screen h-26 bg-gray-200 border-black'>
                <Footer />
            </div>
        </div>
    );
};

export default aboutPage;
