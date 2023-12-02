import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';

const cardsData = [
    {
        id: 1,
        imageSrc: 'https://via.placeholder.com/900x300',
        description: 'blog 1',
        link: '/blog1',
    },
    {
        id: 2,
        imageSrc: 'https://via.placeholder.com/900x300',
        description: 'blog 2',
        link: '/blog2',
    },
    {
        id: 3,
        imageSrc: 'https://via.placeholder.com/900x300',
        description: 'blog 3',
        link: '/blog3',
    },
];

const Page = () => {
    return (
        <div>
            <Navbar />
            <section className="text-black h-full bg-customGreen flex flex-col text-center">
                <h1 className="text-2xl font-serif mt-40 italic">Latest Articles</h1>
                <div className="flex flex-col items-center">
                    {cardsData.map((card) => (
                        <BlogList
                            key={card.id}
                            imageSrc={card.imageSrc}
                            description={card.description}
                            link={card.link}
                        />
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Page;
