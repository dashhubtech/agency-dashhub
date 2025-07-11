'use client'
import { cn, parseImage } from '@/lib/utils'
import { User } from '@/payload-types'

interface CardContentProps {
  title: string
  description: string
  icon?: React.ReactNode
  image: string
}

export function CardBlogContent({ title, description, icon, image }: CardContentProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          ' cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4',
          ` bg-cover`,
        )}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col">
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">{title}</h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">{description}</p>
        </div>
      </div>
    </div>
  )
}
