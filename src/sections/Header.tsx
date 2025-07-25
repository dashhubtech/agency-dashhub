'use client'

import { type FC, type MouseEvent, useEffect, useState } from 'react'
import { motion, useAnimate } from 'motion/react'
import Link from 'next/link'
import Button from '@/components/Button'
import Logo from '@/assets/logo.png'
import localFont from 'next/font/local'

const navItems = [
  {
    href: '#home',
    label: 'Home',
  },
  {
    href: '#about',
    label: 'About',
  },
  {
    href: '#faqs',
    label: 'FAQs',
  },
  {
    href: '#services',
    label: 'Services',
  },
  {
    href: '#blogs',
    label: 'Blogs',
  },
  {
    href: '#contact',
    label: 'Contact',
  },
]

const canopeeFont = localFont({
  src: [
    {
      path: '../fonts/canopee.otf',
    },
  ],
  variable: '--font-canopee',
})

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [topLineScope, topLineAnimate] = useAnimate()
  const [bottomLineScope, bottomLineAnimate] = useAnimate()
  const [navScope, navAnimate] = useAnimate()

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ])
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ])

      navAnimate(
        navScope.current,
        {
          height: '100%',
        },
        {
          duration: 0.7,
        },
      )
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ])
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ])

      navAnimate(navScope.current, {
        height: 0,
      })
    }
  }, [
    isOpen,
    topLineAnimate,
    topLineScope,
    bottomLineAnimate,
    bottomLineScope,
    navScope,
    navAnimate,
  ])

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsOpen(false)

    const url = new URL(e.currentTarget.href)

    const hash = url.hash

    const target = document.querySelector(hash)

    if (!target) return
    target.scrollIntoView({ behavior: 'smooth' })

    // element.scrollIntoView({behavior: "smooth"})
  }
  return (
    <header>
      <div
        className={`fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-20 ${canopeeFont.className}`}
        ref={navScope}
      >
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <Link
              className="text-stone-200 border-t last:border-b py-8 group/nav-item   border-stone-800 relative isolate "
              href={href}
              key={label}
              onClick={handleClickMobileNavItem}
            >
              <div className="container max-w-full! flex items-center justify-between">
                <span className="text-3xl md:text-5xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10" />
            </Link>
          ))}
        </nav>
      </div>
      <div className=" fixed top-0 left-0 w-full backdrop-blur-md z-20">
        <div className="container max-w-full!">
          <div className="flex justify-between h-20 items-center">
            <div>
              <Link href="/">
                <img src={Logo.src} alt="dashhub" className="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full z-20">
        <div className="container max-w-full!">
          <div className="flex justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="size-11 border  rounded-full inline-flex items-center justify-center bg-blue-700 text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={topLineScope}
                    style={{
                      transformOrigin: '12px 8px',
                    }}
                  />
                  <motion.rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    ref={bottomLineScope}
                    style={{
                      transformOrigin: '12px 16px',
                    }}
                  />
                </svg>
              </div>

              <a href="#contact">
                <Button
                  variant="primary"
                  className="bg-blue-700 h-11 px-6 rounded-xl text-white border-blue-700 uppercase hidden md:inline-flex "
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
