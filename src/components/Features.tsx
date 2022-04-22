import React from 'react'
import assets from "../assets"
import STYLES from "../lib/twStyles"
import FeatureCard from "./FeatureCard"
import { Banner } from "./Banner"

interface Props {

}

const Features: React.FC<Props> = ({ }) => {
    return (
        <div className={`relative min-h-screen ${STYLES.section} ${"banner03"}`} >
            <div className={`${STYLES.sectionImg} z-10 flex-col text-center `} >
                <div>
                    <h1 className={`${STYLES.h1Text} ${STYLES.whiteText}`} >
                        Technologies
                    </h1>
                    <p className={`${STYLES.pText} ${STYLES.whiteText}`} >
                        This has been developed  using a cross-platform technology, React-Native.
                    </p>
                    <div className={`${STYLES.flexWrap}`} >
                        <FeatureCard iconUrl={assets.react} text="React Native" />
                        <FeatureCard iconUrl={assets.ts} text="Typescript" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features