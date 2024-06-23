import {RiReactjsLine,RiHtml5Line,RiJavaLine} from 'react-icons/ri'
import { FaPython } from "react-icons/fa"
import { SiPowerbi,SiCss3 } from "react-icons/si"
import { DiMysql } from "react-icons/di"
const Technologies = () => {
  return (
    <div className="border-b border-neutral-600 pb-24 lg:mb-30 ">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Line className="text-7xl text-orange-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCss3 className="text-7xl text-blue-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-7xl text-cyan-500" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavaLine className="text-7xl text-red-600" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPowerbi className="text-7xl text-yellow-600" />
            </div>
        </div>
      
    </div>
  )
}

export default Technologies
