import React from 'react'
import STYLES from '../lib/twStyles'

const Footer: React.FC = () => {
    return (
        <div className='px-2 py-12 banner04 flex flex-col items-center justify-center' >
            <a href='https://github.com/Imagine96' target="_blank" className={`${STYLES.pText} ${STYLES.whiteText} text-sm`} > <span className='bold' > Imagine96 </span>  </a>
        </div>
    )
}

export default Footer