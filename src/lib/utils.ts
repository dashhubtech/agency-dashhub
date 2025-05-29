import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ImageProps } from 'next/image'
import { Media } from '@/payload-types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseImage(image: (number | null) | Media | undefined) {
  if (typeof image === 'number' || !image) return null

  return {
    src: image.url, // string | null | undefined
    width: image.width, // number | null | undefined
    height: image.height, // number | null | undefined
    alt: image.alt, // string | null | undefined
  } as ImageProps // eeeeee, this isn't ideal
}
