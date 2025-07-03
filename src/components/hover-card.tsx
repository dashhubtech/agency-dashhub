import React from 'react'
import { IconType } from 'react-icons'

interface CardType {
  title: string
  subtitle: string
  Icon: IconType
}

const HoverCard = ({ title, subtitle, Icon }: CardType) => {
  return (
    <div className="w-full p-4  border-[1px] border-slate-300 relative overflow-hidden group bg-white flex flex-col items-center justify-center h-[300px] gap-4 rounded-2xl shadow-md">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-7xl text-blue-600 text- group-hover:text-white transition-colors relative duration-300" />
      <h3 className="font-medium text-2xl text-slate-950 group-hover:text-white relative duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative duration-300 !text-xl">
        {subtitle}
      </p>
    </div>
  )
}

export default HoverCard
