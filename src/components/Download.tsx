import React from 'react'
import STYLES from "../lib/twStyles"
import assets from "../assets"

interface Props {

}

const Download: React.FC<Props> = () => {
    return (
        <div className={`${STYLES.section} `} >
            <div className={`${STYLES.sectionImg} flex-col text-center items-center mt-8`} >
                <h1 className={`${STYLES.h1Text} ${STYLES.blackText}`} >
                    Download source code
                </h1>
                <p className={`${STYLES.pText} ${STYLES.blackText}`} >
                    Full source code on github
                </p>
                <a target="_blank" href="https://github.com/Imagine96/react-native-demo-showcase" className={`${STYLES.btnPrimary} hover:transition`} >
                    Source Code
                </a>
                <div className={`${STYLES.flexCenter}`} >
                    <img alt='download' src={`${assets.scene}`} />
                </div>
            </div>
        </div>
    )
}

export default Download