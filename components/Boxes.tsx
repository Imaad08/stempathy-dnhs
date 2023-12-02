import React from 'react';

const Boxes = () => {
    const boxStyle = {
        height: '400px',
        minHeight: '200px',
    };

    return (
        <div className="flex flex-col md:flex-row justify-center md:gap-4 mx-auto">
            <div className="bg-customGreen p-4 md:p-8 m-4 rounded-lg relative md:w-1/3" style={boxStyle}>
                <div className="h-full flex flex-col justify-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">Vision</h2>
                    <p className="text-sm md:text-base mb-2">ALL for STEM and STEM for ALL</p>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <a href="/aboutPage">
                        <button className="h-10 font-serif w-40 text-white transition-colors duration-150 bg-customBlue rounded-lg focus:shadow-outline hover:bg-customBlueHover">
                            Learn More
                        </button>
                    </a>
                </div>
            </div>

            <div className="bg-customGray p-4 md:p-8 m-4 rounded-lg relative md:w-1/3" style={boxStyle}>
                <div className="h-full flex flex-col justify-center">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">Mission</h2>
                    <p className="text-sm md:text-base mb-2">Elevating humanity by educating and inspiring children around the globe</p>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <a href="/aboutPage">
                        <button className="h-10 font-serif w-40 text-white transition-colors duration-150 bg-customBlue rounded-lg focus:shadow-outline hover:bg-customBlueHover">
                            Learn More
                        </button>
                    </a>
                </div>
            </div>

            <div className="bg-customTeal p-4 md:p-8 m-4 rounded-lg relative md:w-1/3" style={boxStyle}>
                <div className="h-full flex flex-col justify-center mt-[18px]">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-black">Values</h2>
                    <ul className="text-black">
                        <li>Teamwork</li>
                        <li>Respect</li>
                        <li>Inclusion</li>
                        <li>Excellence</li>
                    </ul>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                    <a href="/aboutPage">
                        <button className="h-10 font-serif w-40 text-white transition-colors duration-150 bg-customBlue rounded-lg focus:shadow-outline hover:bg-customBlueHover">
                            Learn More
                        </button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Boxes;
