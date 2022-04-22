import { useState } from 'react'
import { Section, Download, Features, Footer } from "./components"
import assets from './assets'
import content from './lib/content'

function App() {

  return (
    <div>
      <Section showBtn img={assets.homeHero} title={content.home.title} description={content.home.description} banner={"banner"} />
      <Section showBtn img={assets.homeCards} title={content.card.title} description={content.card.description} reverse banner="" />
      <Features />
      <Section showBtn img={assets.mockup} title={content.deployment.title} description={content.deployment.description} reverse banner='sm:min-h-0' />
      <Section showBtn img={assets.feature} title={content.card.title} description={content.card.description} banner="banner04 sm:pt-[200px] sm:min-h-0" />
      <Download />
      <Footer />
    </div>
  )
}

export default App
