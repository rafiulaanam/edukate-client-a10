import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courses =useLoaderData()
    console.log(courses)
    const {title} = courses;
    return (
        <div className=' card card-body'>
            <h1 className="text-5xl py-10">{title}</h1>
            <h1 className="text-5xl py-10">Checkout Here</h1>
           <div className=' card grid grid-cols-1 gap-4'>
           <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
           <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
           <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
           <input type="text" placeholder="Address" className="input input-bordered w-full max-w-xs" />
           </div>
           <button className='btn btn-primary w-40'>Checkout</button>
        </div>
    );
};

export default Checkout;