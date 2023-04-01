import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import maker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData =[
        {
            id:1,
            name:'opening Hours',
            description:'open 9.00 am to 5.00 pm everyday',
            icon : clock
        
        },
        {
            id:2,
            name:'Our Location',
            description:'open 9.00 am to 5.00 pm everyday',
            icon : maker
           
        },
        {
            id:3,
            name:'Contact Us',
            description:'open 9.00 am to 5.00 pm everyday',
            icon : phone
           
        },
    

    ]
    return (
        <div className='grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card=><InfoCard 
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;