import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

export default function Footer() {
    return (
        <div className='py-3 bg-primary text-white text-center'>
            <div className="container-lg">
                <p className='mb-0'><CopyrightIcon style={{ fontSize: '16px' }} /> Copyright <strong>2021</strong>. All Rights Reserved</p>
                <p className="mb-0">Designed by BootstrapMade</p>
            </div>
        </div>
    )
}
