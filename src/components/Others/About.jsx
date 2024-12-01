import React, { useState } from 'react';
import image1 from '../assets/Home.jpg';
import image2 from '../assets/Rust.jpg'; 
import image3 from '../assets/Chatgpt.jpg'; // Add another image for demonstration
import image4 from '../assets/Cplusplus.jpg'; // Add another image for demonstration
import image5 from '../assets/HTML.jpg'; // Add another image for demonstration
import image6 from '../assets/php.jpg'; // Add another image for demonstration
import image7 from '../assets/AI.jpg'; // Add another image for demonstration
// Add another image for demonstration
import left from '../assets/left.png';
import right from '../assets/right.png';

const About = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7];
    const attractionLines = [
        "Learn Anything, Share Everything – Your Journey Starts Here!",
        "Where Knowledge Meets Collaboration – Elevate Together!",
        "Discover, Share, and Thrive – The Platform for Curious Minds.",
        "Empower Your Future – One Lesson, One Share at a Time!",
        "From Learners to Leaders – Start Your Knowledge Adventure!",
        "Explore. Teach. Inspire. – Build Your Legacy of Learning!",
        "Your Gateway to Growth – Learn More, Share More, Achieve More!"
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Handlers for left and right arrows
    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative overflow-hidden w-full h-[80vh] mt-8">
            {/* Left Arrow */}
            <img
                className="absolute left-5 top-1/3 transform -translate-y-1/2 h-[40px] hover:cursor-pointer z-10"
                src={left}
                alt="Previous"
                onClick={handleLeftClick}
            />

            {/* Sliding Images */}
            <div
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    // width: `${images.length * 100}%`,
                }}
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="w-full flex-none"
                        style={{ width: "100%" }}
                    >
                        <img
                            className="w-full h-[55vh] object-cover"
                            src={img}
                            alt={`Slide ${index + 1}`}
                        />

                    <div>
                        <h1 className='text-black text-3xl font-semibold text-center mt-5'>{attractionLines[index]}</h1>
                    </div>
                    </div>
                    
                ))}
            </div>

            {/* Right Arrow */}
            <img
                className="absolute right-5 top-1/3 transform -translate-y-1/2 h-[40px] hover:cursor-pointer z-10"
                src={right}
                alt="Next"
                onClick={handleRightClick}
            />
            
        </div>
    );
};

export default About;
