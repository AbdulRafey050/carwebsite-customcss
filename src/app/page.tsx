import React from 'react'
import Hero from '@/components/hero'
import Card from '@/components/card'
import Test from '@/components/test'
import TechnologySection from '@/components/tech'

const page = () => {
  return (
    <div>
      <Hero />
      <Card />
      <Test />
      <TechnologySection/>
     </div>
  )
}

export default page