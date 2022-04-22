import React from 'react'
import STYLES from "../lib/twStyles"
import Button from "./Button"
import assets from "../assets"

interface Props {
    showBtn?: boolean,
    img: string,
    banner: string,
    title: string,
    description: string,
    reverse?: boolean
}

const Section: React.FC<Props> = ({ showBtn, img, banner, title, description, reverse }) => {
    return (
        <div className={`min-h-screen ${STYLES.section} p-8 ${reverse ? "bg-transparent" : STYLES.bgPrimary} ${STYLES.sectionImg} bg-transparent ${banner}`} >
            <div className={`flex items-center z-10 p-8 ${reverse ? STYLES.boxReverseClass : STYLES.boxClass} w-11/12 md:w-3/4`} >
                <div className={`${STYLES.descDiv} ${reverse ? "fadeRightMini" : "fadeLeftMini"} lg:min-w-[400px] fadeLeftMini`} >
                    <h1 className={`${STYLES.h1Text} ${reverse ? STYLES.blackText : STYLES.whiteText}`} > {title} </h1>
                    <p className={`${STYLES.descriptionText} ${reverse ? STYLES.blackText : STYLES.whiteText}`} > {description} </p>
                    {
                        showBtn ? <Button assetUrl={assets.expo} link='https://expo.dev/@imagine_96/myAwesomeProject?serviceType=classic&distribution=expo-go' styles={`${STYLES.btnBlack}`} /> : null
                    }
                </div>
                <div className={`${STYLES.flexCenter} -translate-y-10`} >
                    <img className={`${STYLES.sectionImg} ${reverse ? "fadeLeftMini" : "fadeRightMini"}`} src={img} alt="mockup" />
                </div>

            </div>
        </div>
    )
}

export default Section