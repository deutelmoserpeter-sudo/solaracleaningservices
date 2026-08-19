import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import type { FaqQuestion } from '../data/faqs'

type FaqListProps = {
  items: FaqQuestion[]
}

function renderAnswer(answer: string) {
  return answer.split(/(contact us|call us)/gi).map((part, index) => {
    const normalizedPart = part.toLowerCase()

    if (normalizedPart === 'contact us' || normalizedPart === 'call us') {
      return <a href="tel:+17274333048" key={`${part}-${index}`}>{part}</a>
    }

    return part
  })
}

export function FaqList({ items }: FaqListProps) {
  const [openFaq, setOpenFaq] = useState(-1)

  return (
    <div className="faq-list">
      {items.map((faq, index) => (
        <article className={openFaq === index ? 'faq-item is-open' : 'faq-item'} key={faq.question}>
          <button
            type="button"
            onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
            aria-expanded={openFaq === index}
          >
            <span className="faq-question-copy"><small>{faq.category}</small><span>{faq.question}</span></span><ChevronDown />
          </button>
          <div className="faq-answer"><p>{renderAnswer(faq.answer)}</p></div>
        </article>
      ))}
    </div>
  )
}
