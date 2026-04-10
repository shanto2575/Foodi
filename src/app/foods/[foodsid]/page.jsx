import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar } from 'react-icons/fa';

const FoodsDetailsPage = async ({ params }) => {
    const { foodsid } = await params;

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodsid}`)
    const data = await res.json()
    const foods = data.data
    const { dish_name, category, price, rating, image_link, main_ingredients, approximate_nutrition_per_serving: nutrition } = foods
    // console.log(foods)

    return (
        <div>
            <div className='container mx-auto flex gap-20 my-10 border rounded-2xl p-5'>
                <div className='card w-[550px] h-[600px]'>
                    <Image
                        src={image_link}
                        alt={dish_name}
                        fill
                        sizes='(max-width:746px) 100vw,33vw'
                    ></Image>
                </div>
                <div>
                    <h2>Name : {dish_name}</h2>
                    <p>Category : {category}</p>
                    <p>Price : {price}</p>
                    <p className='flex gap-3 items-center'>Rating : <FaStar></FaStar> {rating}</p>
                    <div className='my-5'>
                        <h2 className='font-bold badge badge-info text-xl my-3'>main ingredients </h2>
                        <ol className='list-decimal'>
                            {
                                main_ingredients.map((ingredients, index) => <li key={index}>{ingredients}</li>)
                            }
                        </ol>
                    </div>
                    <div>
                        <h2 className='font-bold text-xl badge my-3 badge-success'>nutrition</h2>
                        <ol className='list-disc'>
                            <li>calories : {nutrition.calories}</li>
                            <li>protein : {nutrition.protein}</li>
                            <li>carbohydrates : {nutrition.carbohydrates}</li>
                            <li>fat : {nutrition.fat}</li>
                            <li>fiber : {nutrition.fiber}</li>
                        </ol>
                    </div>
                    <div className='flex gap-5 my-10'>
                        <Link href={'/foods'} className='btn btn-primary p-2'>Go Back</Link>
                        <Link href={''} className='btn btn-success p-2'>Add to Cart</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FoodsDetailsPage