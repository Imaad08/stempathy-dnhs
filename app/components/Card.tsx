import React from 'react';
import Link from 'next/link';

interface CardProps {
    imageSrc: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, description, link }) => {
    return (
        <div className="max-w-xs bg-white p-4 rounded-lg shadow-lg m-4 h-full flex flex-col justify-between">
            <img src={imageSrc} alt="Card Image" className="w-92 h-64 object-cover mb-4 rounded" />
            <p className="text-gray-800 mb-2">{description}</p>
            <div className="flex justify-center">
                <Link href={link}>
                    <p className="h-10 w-40 bg-customBlue text-white px-4 py-2 rounded hover:bg-customBlueHover transition duration-300 ease-in-out">
                        Read More
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Card;
