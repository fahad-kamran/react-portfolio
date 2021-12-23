import React from 'react';
import { useState } from 'react';

export default function AboutText() {
    const [aboutPara, setAboutPara] = useState([
        "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.",
        "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. porttitor at sem.",
        "Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
    ])
    return (
        <div className='col-md-6'>
            <h2 className='about-heading py-3'>About me</h2>
            {aboutPara.map((item, index) => {
                return <p key={index} className='big-para'>{item}</p>
            })}
        </div>
    )
}
