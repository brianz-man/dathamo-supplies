import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface ServiceBookingButtonsProps {
    serviceName: string;
    phoneNumber: string;
}

export function ServiceBookingButtons({ serviceName, phoneNumber }: ServiceBookingButtonsProps) {
    const handleWhatsApp = () => {
        const message = `Hi, I'm interested in booking your ${serviceName} service.`;
        const whatsappUrl = `https://wa.me/${+254795822763}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl);
    };

    const handleCall = () => {
        window.location.href=(`tel:${+254795822763}`);
    };

    return (
        <div className='grid grid-cols-2 gap-4'>
            <button
                onClick={handleCall}
                className='flex items-center justify-center bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors'
            >
                <Phone className='h-5 w-5 mr-2' />
                Call Now
            </button>
            <button
                onClick={handleWhatsApp}
                className='flex items-center justify-center bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors'
            >
                <MessageCircle className='h-5 w-5 mr-2' />
                WhatsApp
            </button>

        </div>
    );
}

