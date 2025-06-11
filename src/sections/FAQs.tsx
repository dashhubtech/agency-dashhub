import { FAQAccodion } from '@/components/faq-accodion'
import { getPayload } from 'payload'

import configPromise from '@payload-config'

import { type FC } from 'react'

const FAQs: FC = async () => {
  const payload = await getPayload({ config: configPromise })

  const faqs = await payload.find({
    collection: 'faqs',
    depth: 1,
    limit: 5,
    overrideAccess: false,
    select: {
      title: true,
      description: true,
    },
  })

  return (
    <section className="section" id="faqs">
      <div className="container">
        <h2 className="text-5xl md:text-7xl font-semibold lg:text-8xl">FAQs</h2>
        <div className="mt-10 md:mt-16 lg:mt-20">
          {faqs.docs.map(({ title, description }, faqIndex) => (
            <FAQAccodion key={title} question={title} answer={description} faqIndex={faqIndex} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs
