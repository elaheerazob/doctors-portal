import React from 'react';
import quote from "../../assets/icons/quote.svg"
import pepole1 from "../../assets/images/people1.png"
import pepole2 from "../../assets/images/people2.png"
import pepole3 from "../../assets/images/people3.png"
import Review from './Review';

const Testimonials = () => {
    const reviews =[
        {
            _id: 1,
            name: "Winson Herry",
            review: ' ',
            location: "Dhaka",
            img: pepole1,
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: ' ',
            location: "Dhaka",
            img: pepole2,
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: ' ',
            location: "Dhaka",
            img: pepole3,
        },
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-xl text-primary font-bold'>Testimonial</h1>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <div><img className='w-24 lg:w-48'  src={quote} alt="" /></div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;