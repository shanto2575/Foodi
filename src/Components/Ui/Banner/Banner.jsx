import Image from "next/image";
import React from "react";
import banner from "../../../assets/pngtree-delicious-and-testy-cheese-burger-png-image_16763714.png";

const Banner = () => {
    return (
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16">
            <div className="space-y-6 md:w-1/2 text-center md:text-left">

                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    🍔 Delicious{" "}
                    <span className="text-orange-500">Cheese Burger</span>
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed">
                    Enjoy the most tasty and juicy burgers made with fresh ingredients.
                    Perfect taste for your hunger and happiness every single bite.
                </p>

                <div className="flex gap-4 justify-center md:justify-start">

                    <button className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-xl shadow-md">
                        Order Now
                    </button>

                    <button className="border border-gray-400 px-6 py-3 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 hover:text-black">
                        Learn More
                    </button>

                </div>
            </div>

            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <Image
                    src={banner}
                    alt="Cheese Burger"
                    width={450}
                    height={500}
                    className="drop-shadow-2xl hover:scale-105 transition duration-300"
                />
            </div>

        </div>
    );
};

export default Banner;