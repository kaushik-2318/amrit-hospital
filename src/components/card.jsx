import React from 'react'

function card(props) {
    return (
        <div className='border-2 w-[250px] h-[250px] flex justify-center items-center flex-col sm:h-[200px] sm:w-[200px] gap-3 bg-white'>
            <img src={props.image} className='h-[200px] sm:h-[150px]' alt="Doctor" />
            <div>{props.imagetitle}</div>
        </div>
    )
}

export default card
