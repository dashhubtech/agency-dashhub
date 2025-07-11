import { getPayload } from 'payload'
import React from 'react'
import configPromise from '@payload-config'
import { Card, Carousel } from '@/components/ui/apple-cards-carousel'
import { Category, User } from '@/payload-types'
import { CardBlogContent } from '@/components/content-card'
import { parseImage } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

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

  return (
    <section className="section" id="blogs">
      <div className="container">
        <div className="flex flex-col gap-4 ">
          <Badge className="text-lg bg-blue-800 shadow-md">Blogs</Badge>
          <h2 className="text-5xl md:text-7xl font-semibold lg:text-8xl">From Creative Minds</h2>
          <p className="text-sm md:text-base font-medium text-accent pt-2">
            We&apos;ve curated some of our best blog posts to give you a taste of what we have to
            offer.
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          {posts.docs.map((post, index) => (
            <div key={post.id} className="">
              <CardBlogContent
                title={post.title}
                description={post.meta?.description as string}
                image={parseImage(post.meta?.image)?.src as string}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPosts
