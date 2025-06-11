'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { twMerge } from 'tailwind-merge'

interface FAQAccodionProps {
  question: string
  answer: string
  faqIndex: number
}
export const FAQAccodion = ({ question, answer, faqIndex }: FAQAccodionProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <div
      key={question}
      className="border-t border-stone-400 border-dotted py-6 last:border-b md:py-8 lg:py-10 relative group/faq isolate"
      onClick={() => {
        if (faqIndex === selectedIndex) {
          setSelectedIndex(null)
        } else {
          setSelectedIndex(faqIndex)
        }
      }}
    >
      <div
        className={twMerge(
          'absolute h-0 w-full bottom-0 left-0  -z-10 group-hover/faq:h-full transition-all duration-700',
          faqIndex === selectedIndex && 'h-full',
        )}
      />
      <div
        className={twMerge(
          'flex items-center justify-between gap-4 transition-all duration-700 lg:group-hover/faq:px-8',
          faqIndex === selectedIndex && 'lg:px-8',
        )}
      >
        <div className="text-2xl md:text-3xl lg:text-4xl">{question}</div>
        <div
          className={twMerge(
            'inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0 transition-all duration-300 bg-blue-700',
            faqIndex === selectedIndex && 'rotate-45',
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {faqIndex === selectedIndex && (
          <motion.div
            className="overflow-hidden lg:px-8"
            initial={{
              height: 0,
            }}
            animate={{
              height: 'auto',
            }}
            exit={{
              height: 0,
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
          >
            <p className="text-xl mt-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
