import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'

import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { blogPosts } from '../data/blog'

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: 'Cleaning Tips & Home Care Guides | Solara Cleaning Blog' },
      { name: 'description', content: 'Practical house cleaning tips, checklists, and home care advice from Solara Cleaning Services in St. Petersburg, Florida.' },
      { property: 'og:title', content: 'Cleaning Tips & Home Care Guides | Solara Cleaning Blog' },
      { property: 'og:description', content: 'Practical cleaning guides for brighter, easier-to-maintain homes in St. Petersburg and Pinellas County.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://solaracleaningfl.com/blog/' },
      { property: 'og:image', content: 'https://solaracleaningfl.com/images/social-share-logo.png' },
    ],
    links: [{ rel: 'canonical', href: 'https://solaracleaningfl.com/blog/' }],
  }),
})

function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'The Bright Side',
    description: 'Cleaning tips and home care guides from Solara Cleaning Services.',
    url: 'https://solaracleaningfl.com/blog/',
    publisher: { '@type': 'Organization', name: 'Solara Cleaning Services', url: 'https://solaracleaningfl.com/' },
  }

  return (
    <div className="site-shell blog-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <SiteHeader />
      <main>
        <section className="blog-hero">
          <div className="blog-rays" aria-hidden="true" />
          <div>
            <p className="eyebrow"><Sparkles size={16} /> The Solara journal</p>
            <h1>The bright<br /><em>side of clean.</em></h1>
          </div>
          <p>Practical advice, room-by-room guides, and thoughtful routines for a home that feels lighter every day.</p>
        </section>

        <section className="blog-feature section" aria-labelledby="latest-story">
          <a className="blog-feature-image" href={`/blog/${featuredPost.slug}/`}>
            <img src={featuredPost.image} alt={featuredPost.imageAlt} width={540} height={360} loading="eager" fetchPriority="high" />
            <span>New guide</span>
          </a>
          <article>
            <p className="blog-meta"><span>{featuredPost.category}</span><time dateTime={featuredPost.date}>{featuredPost.displayDate}</time></p>
            <h2 id="latest-story"><a href={`/blog/${featuredPost.slug}/`}>{featuredPost.title}</a></h2>
            <p>{featuredPost.excerpt}</p>
            <a className="text-link" href={`/blog/${featuredPost.slug}/`}>Read the guide <ArrowRight size={17} /></a>
          </article>
        </section>

        <section className="blog-library section" aria-labelledby="more-guides">
          <header>
            <p className="eyebrow"><BookOpen size={16} /> Fresh from the journal</p>
            <h2 id="more-guides">More useful<br /><em>home notes.</em></h2>
          </header>
          <div className="blog-card-grid">
            {otherPosts.map((post, index) => (
              <article className={`blog-card blog-card-${index + 1}`} key={post.slug}>
                <a className="blog-card-image" href={`/blog/${post.slug}/`}>
                  <img src={post.image} alt={post.imageAlt} width={540} height={360} loading="lazy" />
                </a>
                <div>
                  <p className="blog-meta"><span>{post.category}</span><time dateTime={post.date}>{post.displayDate}</time></p>
                  <h3><a href={`/blog/${post.slug}/`}>{post.title}</a></h3>
                  <p>{post.excerpt}</p>
                  <a className="blog-card-link" href={`/blog/${post.slug}/`}>Read article <ArrowRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="blog-cta">
          <p className="eyebrow">Less scrubbing. More living.</p>
          <h2>Ready to hand off<br />the cleaning?</h2>
          <a className="button button-dark" href="/book-now">BOOK NOW <ArrowRight size={18} /></a>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
