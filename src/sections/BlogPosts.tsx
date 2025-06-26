import { getPayload } from 'payload'
import React from 'react'
import configPromise from '@payload-config'
import { Card, Carousel } from '@/components/ui/apple-cards-carousel'
import { Category } from '@/payload-types'

const BlogPosts = async () => {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 5,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  const cards = posts.docs.map((post, index) => (
    <Card
      key={post.id}
      card={post.meta!}
      index={index}
      category={post.categories as Category[]}
      slug={post.slug}
      title={post.title}
    />
  ))
  return (
    <section className="section" id="blogs">
      <div className="container">
        <h2 className="text-5xl md:text-7xl font-semibold lg:text-8xl">Some of Our Blog Posts</h2>

        <p className="text-xl md:text-2xl font-medium text-accent pt-2">
          We&apos;ve curated some of our best posts to give you a taste of what we have to offer.
        </p>
        <div className="mt-10 ">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  )
}

export default BlogPosts
