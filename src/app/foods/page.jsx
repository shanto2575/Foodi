import FoodsCard from '@/Components/Ui/Foods/FoodsCard'
import React from 'react'

export const metadata = {
    title: 'Foods',
    description: '...',
}
const Foods = async () => {
    const res = await fetch(' https://phi-lab-server.vercel.app/api/v1/lab/foods')
    const data = await res.json()
    const foods = data.data
    // console.log(foods)
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 container mx-auto'>
            {
                foods.map(food=><FoodsCard key={food.id} food={food}></FoodsCard>)
            }
        </div>
        </>
    )
}

export default Foods