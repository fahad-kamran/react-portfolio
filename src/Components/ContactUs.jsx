import React from 'react';

import SendMessage from './SendMessage';
import Get_In_Touch from './Get_In_Touch';

export default function ContactUs() {
    return (
        <div className='ContactUs bg-image'>
            <div className="container-lg py-5">
                <div className="bg-white text-dark p-5 rounded">
                    <div className="row">
                        <SendMessage />
                        <Get_In_Touch />
                    </div>
                </div>
            </div>
        </div>
    )
}
