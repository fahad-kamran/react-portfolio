import React from 'react'

export default function SectionHeader(props) {
    return (
        <div className='text-center py-5'>
            <h1 className='text-dark'>{props.name}</h1>
            <p>{props.para}</p>
            <div className="divider"></div>
        </div>
    )
}
