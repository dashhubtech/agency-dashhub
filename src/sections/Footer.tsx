'use client'

import { type FC, type MouseEvent, useEffect } from 'react'
import Button from '@/components/Button'
import useTextRevealAnimation from '@/hooks/useTextRevealAnimation'
import { useInView } from 'motion/react'
import Link from 'next/link'
import TextAnimation from '@/components/text-animation'
import { IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'

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

const socialLinks = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/company/dashhub/',
    icon: IconBrandLinkedin,
  },
  {
    name: 'X',
    link: 'https://x.com/dashhubtech',
    icon: IconBrandX,
  },
]

const handleClickNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
  const url = new URL(e.currentTarget.href)

  const hash = url.hash

  const target = document.querySelector(hash)

  if (!target) return
  target.scrollIntoView({ behavior: 'smooth' })

  // element.scrollIntoView({behavior: "smooth"})
}

const Footer: FC = () => {
  const { scope, entranceAnimation } = useTextRevealAnimation()

  const inView = useInView(scope)

  useEffect(() => {
    if (inView) {
      entranceAnimation()
    }
  }, [inView, entranceAnimation])
  return (
    <footer className="bg-stone-900 text-white" id="contact">
      <div className="container">
        <div className="section">
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2 space-y-4">
              <TextAnimation>
                <h2 className="text-4xl md:text-7xl lg:text-8xl mt-8 font-extralight">
                  Enough talk. Let&apos;s make something great together.
                </h2>
              </TextAnimation>
              <Button
                variant="secondary"
                className="mt-8 text-sm"
                iconAfter={
                  <div className="overflow-hidden size-6">
                    <div className="h-5 w-12 flex group-hover/button:-translate-x-1/2 transition-transform duration-300  ">
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
                      </svg>{' '}
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
                  </div>
                }
              >
                contact@dashhubtech.com
              </Button>
              <Button className="w-[200px] flex items-center justify-center" variant="primary">
                <Link href="https://calendly.com/dashhubtech/audit-call">
                  Let&apos;s Get Started
                </Link>
              </Button>
            </div>

            <div>
              <nav className="flex flex-col gap-8 mt-16 md:items-end md:mt-0">
                {navItems.map(({ href, label }) => (
                  <Link href={href} key={label} onClick={handleClickNavItem}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-6 justify-between py-16 text-white/30">
          <div>
            <p className=" text-sm">Copyright &copy; DashHub &bull; All rights reserved. </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map(({ name, link, icon: Icon }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/30 transition-all duration-300 hover:text-white"
              >
                <Icon className="size-8" />
                <span className="hidden md:block text-sm">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
