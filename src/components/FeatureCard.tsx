import React from 'react'
import STYLES from "../lib/twStyles"

interface Props {
    iconUrl: string,
    text: string,
}

const FeatureCard: React.FC<Props> = ({ iconUrl, text }) => {
    return (
        <div className={`${STYLES.featureCard}`} >
            <img className={`${STYLES.featureImg}`} src={iconUrl} />
            <p className={`${STYLES.featureText}`} > {text} </p>
        </div>
    )
}

export default FeatureCard