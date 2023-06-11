import React from 'react'
import Image from 'next/image';
// import loading from "@public/video/loading.gif"
const Loading = () => {
    return (
        <div className='absolute' style={{right:"600px"}}>
            <Image
                src="/assets/video/loading.gif"
                alt="loading.."
                width={100}
                height={100}
                draggable="false"
            />
        </div>
    )
}

export default Loading