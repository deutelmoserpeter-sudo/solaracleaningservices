import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Sparkles } from 'lucide-react'

import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { getBlogPost } from '../data/blog'

function renderParagraph(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    return link ? <a key={`${link[2]}-${index}`} href={link[2]}>{link[1]}</a> : part
  })
}

export const Route = createFileRoute('/blog/$postSlug')({
  component: BlogPostPage,
  head: ({ params }) => {
    const post = getBlogPost(params.postSlug)
    if (!post) return { meta: [{ title: 'Article Not Found | Solara Cleaning' }, { name: 'robots', content: 'noindex' }] }
    const url = `https://solaracleaningfl.com/blog/${post.slug}/`
    return {
      meta: [
        { title: `${post.title} | Solara Cleaning` },
        { name: 'description', content: post.description },
        { property: 'og:title', content: post.title },
        { property: 'og:description', content: post.description },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: url },
        { property: 'og:image', content: `https://solaracleaningfl.com${post.image}` },
        { property: 'article:published_time', content: post.date },
      ],
      links: [{ rel: 'canonical', href: url }],
    }
  },
})

function BlogPostPage() {
  const { postSlug } = Route.useParams()
  const post = getBlogPost(postSlug)

  if (!post) {
    return (
      <div className="site-shell blog-shell">
        <SiteHeader />
        <main className="blog-not-found">
          <Sparkles size={38} />
          <p className="eyebrow">Solara journal</p>
          <h1>That article isn’t here.</h1>
          <a className="button button-dark" href="/blog/">Browse the blog <ArrowRight size={18} /></a>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const pageUrl = `https://solaracleaningfl.com/blog/${post.slug}/`
  const schema = [
    { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.description, image: `https://solaracleaningfl.com${post.image}`, datePublished: post.date, dateModified: post.date, mainEntityOfPage: pageUrl, author: { '@type': 'Organization', name: 'Solara Cleaning Services' }, publisher: { '@type': 'Organization', name: 'Solara Cleaning Services', url: 'https://solaracleaningfl.com/' } },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://solaracleaningfl.com/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://solaracleaningfl.com/blog/' },
      { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl },
    ] },
  ]

  return (
    <div className="site-shell blog-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <SiteHeader />
      <main>
        <article>
          <header className="article-hero">
            <div className="article-hero-copy">
              <a className="article-back" href="/blog/"><ArrowLeft size={17} /> All articles</a>
              <p className="eyebrow">{post.category}</p>
              <h1>{post.title}</h1>
              <p className="article-deck">{post.excerpt}</p>
              <div className="article-details"><span><CalendarDays size={16} /> <time dateTime={post.date}>{post.displayDate}</time></span><span><Clock size={16} /> {post.readTime}</span></div>
            </div>
            <div className="article-hero-image"><img src={post.image} alt={post.imageAlt} width={540} height={360} loading="eager" fetchPriority="high" /><span>Solara home guide</span></div>
          </header>

          <div className="article-layout section">
            <aside className="article-aside">
              <p className="eyebrow">In this guide</p>
              <ol>{post.sections.map((section) => <li key={section.heading}><a href={`#${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}>{section.heading}</a></li>)}</ol>
            </aside>
            <div className="article-body">
              {post.sections.map((section) => {
                const id = section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
                return <section id={id} key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{renderParagraph(paragraph)}</p>)}
                  {section.tips && <ul>{section.tips.map((tip) => <li key={tip}>{tip}</li>)}</ul>}
                </section>
              })}
              <aside className="article-callout">
                <Sparkles size={24} />
                <div><h2>A cleaner home is one click away.</h2><p>Get an instant quote for thoughtful cleaning in St. Petersburg and nearby Pinellas County communities.</p></div>
                <a className="button button-dark" href="/book-now">BOOK NOW <ArrowRight size={18} /></a>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
