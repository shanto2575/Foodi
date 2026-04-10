import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaStar } from 'react-icons/fa';

const FoodsCard = ({ food }) => {
    const { id, dish_name, category, price, rating, image_link } = food;

    return (
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300">
            <figure className="relative w-full h-72">
                <Image
                    src={image_link}
                    alt={dish_name}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-contain"
                />
            </figure>

            <div className="card-body">
                <h2 className="card-title font-bold text-xl justify-between">
                    {dish_name}
                </h2>
                <p className='font-semibold'>Category : {category}</p>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-lg font-bold text-primary">
                        ৳ {price}
                    </p>

                    <p className="text-yellow-500 font-semibold flex justify-end gap-3 ">
                        <FaStar></FaStar> {rating}
                    </p>
                </div>
                <div className='flex gap-4'>
                    <Link href={''} className='btn btn-success'><button>Add To Cart</button></Link>
                    <Link href={`/foods/${id}`} className='btn btn-primary'><button>Show Details</button></Link>
                </div>
            </div>
        </div>
    )
}

export default FoodsCard