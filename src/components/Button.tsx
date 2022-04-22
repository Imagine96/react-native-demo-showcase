import React from 'react'
import STYLES from "../lib/twStyles"

interface Props {
    styles: string,
    assetUrl: string,
    link: string
}

const Button: React.FC<Props> = ({ styles, assetUrl, link }) => {
    return (
        <button onClick={() => window.open(link, "_blank")} className={styles} >
            <img src={assetUrl} alt="xpo icon" className={STYLES.btnIcon} />
            <div>
                <p className={`${STYLES.btnText} font-normal text-xs`} > Check it out in </p>
                <p className={`${STYLES.btnText} font-bold text-xs`} > Expo store </p>
            </div>
        </button>
    )
}

export default Button