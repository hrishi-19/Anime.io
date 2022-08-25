import React from 'react';
import data from '../data';
import Content from './content';
export default function Contents() {
    const contents=data.map(item=><Content name={item.heading} desc={item.desc} left={item.left}/>)
    return (
        <div className='bg-center bg-cover ' style={{backgroundImage:`url("/images/content-bg.jpg")`}}>
           
            {contents}

        </div>
    )
}