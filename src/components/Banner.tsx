import React from 'react'

interface Props {
    imgUrl: string
}

const Banner: React.FC<Props> = ({ imgUrl }) => {
    return (
        <div className='absolute top-0 left-0 w-full h-full z-0' >
            <img className='h-full w-full' src={imgUrl} />
        </div>
    )
}


interface SBProps {
    imgUrl: string
}
export {
    Banner,
} 