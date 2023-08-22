"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Section1 } from "@/components/section1"
import { Section2 } from "@/components/section2"
import { Section3 } from "@/components/section3"

const Page = ()=> {
  return (
  <div className="overflow-x-hidden text-white bg-[#0b1d27]">
      <Header/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
    </div>
  )
}

export default Page