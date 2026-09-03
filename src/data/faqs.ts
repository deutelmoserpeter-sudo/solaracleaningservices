export type FaqQuestion = {
  category: string
  question: string
  answer: string
}

export const faqQuestions: FaqQuestion[] = [
  {
    category: 'Before your clean',
    question: 'Do I need to be home during my clean?',
    answer: 'Not at all. Most clients share a door code, lockbox, or other entry instructions. We confirm the details ahead of time and send a message when your space is ready.',
  },
  {
    category: 'Before your clean',
    question: 'How should I prepare for the team?',
    answer: 'Simply put away personal items and clear clutter from surfaces and floors you’d like cleaned. Make sure our team has access to the areas being serviced, and we’ll take care of the rest.',
  },
  {
    category: 'Products & people',
    question: 'Do you bring cleaning supplies?',
    answer: 'Yes. Our team arrives with professional tools and thoughtfully selected products. We are also happy to use a product you provide when you leave clear instructions.',
  },
  {
    category: 'Products & people',
    question: 'Are you pet friendly?',
    answer: 'Absolutely. We love pets and note any care instructions before your first visit. If a pet is anxious around vacuums or new people, we recommend setting up a comfortable separate space.',
  },
  {
    category: 'Pricing & scheduling',
    question: 'How does pricing work?',
    answer: 'Just fill out our quick booking form with a few details about your home and get an instant, custom quote. If you like the price, you can schedule your cleaning right away—it’s that easy.',
  },
  {
    category: 'Pricing & scheduling',
    question: 'Can I book a one-time cleaning?',
    answer: 'Yes. We offer one-time standard, deep, move in or out, office, and post-construction cleaning, along with recurring weekly, biweekly, and monthly options.',
  },
  {
    category: 'Pricing & scheduling',
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made before 12:00 PM the day before your scheduled cleaning are free. Cancellations after this time are subject to a 50% cancellation fee to compensate for the time reserved for your appointment.',
  },
  {
    category: 'During your clean',
    question: 'Will I have the same cleaner each visit?',
    answer: 'We aim for consistency and keep your preferences on file. Occasionally another trusted team member may step in because of scheduling, illness, or time away.',
  },
  {
    category: 'During your clean',
    question: 'How long does a cleaning take?',
    answer: 'Timing depends on the size and condition of the space and the service selected. We provide an estimated arrival window and scope before the appointment rather than rushing a detailed clean.',
  },
  {
    category: 'Special requests',
    question: 'Can I request add-on tasks?',
    answer: 'Yes. Tell us about extras such as inside appliances, interior windows, or focused detail areas when requesting your quote so we can allow the right amount of time.',
  },
  {
    category: 'Special requests',
    question: 'Do you clean offices and commercial spaces?',
    answer: 'Yes. We clean professional offices, studios, and small client-facing workplaces. Office pricing is customized around the space, priorities, access, and preferred service schedule.',
  },
  {
    category: 'After your clean',
    question: 'What if something needs more attention?',
    answer: 'Please contact us as soon as possible. Clear, timely feedback helps us understand what was missed and make the situation right.',
  },
]
