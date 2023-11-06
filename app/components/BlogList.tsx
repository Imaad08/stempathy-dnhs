import React from 'react';
import Link from 'next/link';

interface BlogListProps {
    imageSrc: string;
    description: string;
    link: string;
}

const BlogList: React.FC<BlogListProps> = ({ imageSrc, description, link }) => {
    return (
        <div className="bg-white p-4 shadow-md rounded-lg mb-4">
            <img src={imageSrc} alt={description} className="w-full h-auto rounded-md" />
            <div className="mt-4">
                <p className="text-xl font-semibold">{description}</p>
                <Link href={link}>
                    <p className="bg-customBlue text-white px-4 py-2 rounded hover:bg-customBlueHover transition duration-300 ease-in-out cursor-pointer">
                        Read More
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default BlogList;
