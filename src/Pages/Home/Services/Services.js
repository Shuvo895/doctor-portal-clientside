import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const servicesData=[
        {
            id: 1,
            name:'Fluoride Treatment',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit dicta excepturi sequi tempora minus temporibus sint asperiores dolor repellendus?',
            img:fluoride
        },
        {
            id: 2,
            name:'Cavity Filling',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit dicta excepturi sequi tempora minus temporibus sint asperiores dolor repellendus?',
            img:cavity
        },
        {
            id: 3,
            name:'Teeth Whiteing',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius suscipit dicta excepturi sequi tempora minus temporibus sint asperiores dolor repellendus?',
            img:whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
            <h3 className='text-xl font-bold text-sky-400 uppercase'>our services</h3>
            <h2 className='text-3xl'>Services We Provide </h2>
        </div>
       <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
       {
            servicesData.map(service=><Service
                key={service.id}
                service={service}
            >
            </Service>)
        }
       </div>
        </div>
    );
};

export default Services;