import type { LucideIcon } from 'lucide-react'
import {
  Building2,
  CalendarDays,
  HardHat,
  House,
  KeyRound,
  SprayCan,
} from 'lucide-react'

export type CleaningService = {
  number: string
  slug: string
  title: string
  shortTitle: string
  note: string
  text: string
  intro: string
  description: string
  idealFor: string
  image: string
  icon: LucideIcon
  includes: string[]
  quoteNotice?: string
  seoTitle: string
  metaDescription: string
  h1: string
  bestForDetails: string
  faqs: { question: string; answer: string }[]
}

export const services: CleaningService[] = [
  {
    number: '01',
    slug: 'standard-cleaning',
    title: 'Standard Cleaning',
    shortTitle: 'Standard clean',
    note: 'Everyday home care',
    text: 'A thoughtful room-by-room clean that restores freshness, order, and shine throughout your home.',
    intro: 'Reliable care for a home that feels fresh, comfortable, and ready for everyday life.',
    description: 'Our standard cleaning service handles the essential details that make your home feel noticeably lighter. We work through kitchens, bathrooms, bedrooms, and living spaces with a consistent checklist and careful attention to high-touch areas.',
    idealFor: 'Busy households, occasional resets, and homes that need dependable professional upkeep.',
    image: '/images/cleaning-sun.jpg',
    icon: House,
    includes: ['Dusting & wiping of accessible surfaces', 'Kitchens cleaned, including counters & exterior appliances', 'Bathrooms cleaned, including toilets inside & out, showers & tubs', 'Floors vacuumed, swept & mopped', 'Trash removal & high-touch surfaces cleaned'],
    seoTitle: 'Standard House Cleaning St. Petersburg, FL | Solara',
    metaDescription: 'Keep your home fresh with standard house cleaning in St. Petersburg, FL. See what Solara includes and get an instant cleaning quote online.',
    h1: 'Standard House Cleaning in St. Petersburg, FL',
    bestForDetails: 'Choose a standard clean when your home is generally maintained but needs professional attention in the rooms you use most. It works well as a one-time refresh or as the foundation for ongoing care.',
    faqs: [
      { question: 'What is included in a standard cleaning?', answer: 'We dust and wipe accessible surfaces, clean kitchen counters and appliance exteriors, clean bathrooms, care for floors, remove trash, and wipe high-touch surfaces.' },
      { question: 'Is standard cleaning right for a first visit?', answer: 'It can be when the home is regularly maintained. If there is significant buildup or many overlooked detail areas, deep cleaning may be a better starting point.' },
      { question: 'Do I need to provide cleaning supplies?', answer: 'No. Solara brings the tools and cleaning products needed for the scheduled service. You may provide a preferred product with clear instructions.' },
    ],
  },
  {
    number: '02',
    slug: 'deep-cleaning',
    title: 'Deep Cleaning',
    shortTitle: 'Deep clean',
    note: 'The full-home reset',
    text: 'A detailed top-to-bottom clean for first visits, seasonal refreshes, and the places daily cleaning misses.',
    intro: 'A more detailed reset for the corners, buildup, and overlooked areas that deserve extra attention.',
    description: 'Deep cleaning gives your home a comprehensive refresh beyond routine maintenance. The team spends additional time on detail work, buildup, baseboards, fixtures, and frequently missed surfaces so every room feels renewed.',
    idealFor: 'First-time clients, seasonal cleaning, special occasions, or homes overdue for a thorough reset.',
    image: '/images/clean-home.jpg',
    icon: SprayCan,
    includes: ['Everything in Standard Cleaning', 'Baseboards, trim & doors thoroughly cleaned', 'Cabinet fronts, drawers & detailed surfaces cleaned', 'Interior window glass, sills & frames cleaned', 'Light fixtures, ceiling fans & vents dusted', 'Hard-to-reach areas, corners & buildup detailed'],
    seoTitle: 'Deep Cleaning Services St. Petersburg, FL | Solara',
    metaDescription: 'Refresh overlooked areas with deep cleaning in St. Petersburg, FL. Explore Solara’s detailed service and request your instant house cleaning quote.',
    h1: 'Deep Cleaning Services in St. Petersburg, FL',
    bestForDetails: 'A deep clean is useful before an event, during a seasonal reset, or whenever routine cleaning has not kept up with detail work. It is also a practical first service before switching to recurring visits.',
    faqs: [
      { question: 'What is the difference between standard and deep cleaning?', answer: 'Standard cleaning focuses on routine upkeep. Deep cleaning includes that work plus added attention to buildup, baseboards, doors, fixtures, vents, interior glass, and other frequently missed details.' },
      { question: 'How should I prepare for a deep clean?', answer: 'Put away personal items and clear clutter from the floors and surfaces you want cleaned. This lets the team spend more time on detailed cleaning.' },
      { question: 'Can I book recurring service after a deep clean?', answer: 'Yes. Recurring cleaning can help maintain the refreshed space on a weekly, biweekly, or monthly schedule.' },
    ],
  },
  {
    number: '03',
    slug: 'recurring-cleaning',
    title: 'Recurring Cleaning',
    shortTitle: 'Recurring clean',
    note: 'Our most-loved service',
    text: 'Weekly, biweekly, or monthly care tailored to your routine so your home stays consistently fresh.',
    intro: 'Consistent cleaning on a schedule that keeps your home ready without taking over your free time.',
    description: 'Recurring service creates an easy rhythm for your home. After learning your priorities, we return on a weekly, biweekly, or monthly schedule with a consistent plan that keeps mess and buildup from piling up.',
    idealFor: 'Families, professionals, pet owners, and anyone who wants cleaning handled on a reliable schedule.',
    image: '/images/hero-cleaning.jpg',
    icon: CalendarDays,
    includes: ['A schedule shaped around your household', 'Consistent room-by-room checklist', 'Priority notes saved for future visits', 'Routine kitchen and bathroom care', 'Weekly, biweekly, or monthly options'],
    seoTitle: 'Recurring House Cleaning St. Petersburg, FL | Solara',
    metaDescription: 'Schedule recurring house cleaning in St. Petersburg, FL with weekly, biweekly, or monthly options. Get an instant quote from Solara Cleaning.',
    h1: 'Recurring House Cleaning in St. Petersburg, FL',
    bestForDetails: 'Recurring care is designed for households that want to prevent dust, bathroom residue, and kitchen mess from building up. Choose weekly, biweekly, or monthly visits based on your household and routine.',
    faqs: [
      { question: 'How often should I schedule house cleaning?', answer: 'Weekly service suits busy or high-traffic homes, biweekly care provides a steady maintenance rhythm, and monthly visits can support homes that need occasional help. The right interval depends on your household.' },
      { question: 'What does recurring cleaning include?', answer: 'Visits follow a consistent room-by-room plan with routine kitchen, bathroom, floor, surface, and high-touch-area care. Solara also keeps notes about your priorities.' },
      { question: 'Do you offer one-time cleaning instead?', answer: 'Yes. Standard and deep cleaning are available for one-time needs when an ongoing schedule is not the right fit.' },
    ],
  },
  {
    number: '04',
    slug: 'move-in-out-cleaning',
    title: 'Move In/Out Cleaning',
    shortTitle: 'Move in / out',
    note: 'Fresh beginnings',
    text: 'Detailed empty-home cleaning that makes moving day lighter and leaves the space ready for what comes next.',
    intro: 'A thorough empty-space clean for a smoother handoff, a fresh arrival, and one less moving-day task.',
    description: 'Moving is demanding enough without worrying about the final clean. We focus on empty cabinets, appliances, bathrooms, floors, and the details that help a home feel move-in ready for you, a buyer, or the next tenant.',
    idealFor: 'Renters, homeowners, property managers, and anyone preparing an empty home for its next chapter.',
    image: '/images/team-cleaning.jpg',
    icon: KeyRound,
    includes: ['Detailed kitchens and bathrooms', 'Inside empty cabinets, drawers & closets', 'Baseboards, doors, trim & reachable surfaces', 'Floors vacuumed, swept & mopped', 'Appliance exteriors cleaned', 'Interior windows & glass cleaned', 'Light fixtures, switches & door handles cleaned', 'Dust, dirt & buildup removed throughout'],
    seoTitle: 'Move-In & Move-Out Cleaning St. Petersburg, FL | Solara',
    metaDescription: 'Book move-in or move-out cleaning in St. Petersburg, FL. Solara details empty homes for a fresh arrival or smoother handoff. Get a quote.',
    h1: 'Move-In & Move-Out Cleaning in St. Petersburg, FL',
    bestForDetails: 'This service supports renters, owners, and property professionals when a home is empty or nearly empty. It provides access to cabinets, closets, floors, and surfaces that are harder to reach once belongings arrive.',
    faqs: [
      { question: 'Do you offer move-out cleaning?', answer: 'Yes. Solara cleans empty homes for renters, owners, and property managers preparing for a handoff in the St. Petersburg area.' },
      { question: 'Does move-in cleaning include inside cabinets?', answer: 'Yes. Empty cabinets, drawers, and closets are included, along with detailed kitchens, bathrooms, trim, floors, reachable surfaces, and interior glass.' },
      { question: 'Should the home be empty before the appointment?', answer: 'An empty or nearly empty space gives the team access to the areas included in this service. Share any timing or access details when requesting your quote.' },
    ],
  },
  {
    number: '05',
    slug: 'office-cleaning',
    title: 'Office Cleaning',
    shortTitle: 'Office clean',
    note: 'A polished workplace',
    text: 'Professional cleaning for offices and small commercial spaces that need to feel welcoming, tidy, and ready.',
    intro: 'Dependable workplace cleaning that supports a professional, comfortable environment for teams and visitors.',
    description: 'Our office cleaning service is designed for small offices and professional spaces that value a consistently polished atmosphere. We focus on shared areas, restrooms, breakrooms, floors, and high-touch surfaces with minimal disruption.',
    idealFor: 'Professional offices, studios, small businesses, and client-facing workplaces across St. Pete.',
    image: '/images/office-cleaning.jpg',
    icon: Building2,
    includes: ['Dusting and wiping of desks, chairs, and shared surfaces', 'Breakroom and restroom cleaning and restocking', 'High-touch surfaces disinfected', 'Floors vacuumed and mopped', 'Trash removal and liner replacement', 'Interior glass and mirror cleaning', 'General tidying of common areas', 'Flexible recurring service options'],
    quoteNotice: 'Office Cleans can be very particular so we want to get you the most accurate price possible.',
    seoTitle: 'Office Cleaning Services St. Petersburg, FL | Solara',
    metaDescription: 'Professional office cleaning in St. Petersburg, FL for small workplaces, studios, and shared spaces. Contact Solara for an accurate custom quote.',
    h1: 'Office Cleaning Services in St. Petersburg, FL',
    bestForDetails: 'Office cleaning is suited to small businesses, studios, and professional spaces that need tidy common areas, restrooms, breakrooms, floors, and client-facing rooms. The scope can reflect how the workplace is used.',
    faqs: [
      { question: 'What types of workplaces do you clean?', answer: 'Solara serves professional offices, studios, small businesses, and client-facing workplaces in the St. Petersburg area.' },
      { question: 'What is included in office cleaning?', answer: 'Typical work includes shared surfaces, breakrooms, restrooms, floors, trash, interior glass, mirrors, and high-touch areas. The final scope is shaped around the workplace.' },
      { question: 'How do I get an office cleaning quote?', answer: 'Call or email Solara with details about your space, cleaning priorities, access, and preferred frequency so the team can prepare an accurate quote.' },
    ],
  },
  {
    number: '06',
    slug: 'post-construction-cleaning',
    title: 'Post Construction Cleaning',
    shortTitle: 'Post construction',
    note: 'Ready for the reveal',
    text: 'Careful removal of renovation dust and debris so a newly finished space is clean, polished, and ready to enjoy.',
    intro: 'The detailed final clean that turns a completed project into a finished, move-ready space.',
    description: 'Construction can leave fine dust in places ordinary cleaning can miss. We methodically clean surfaces, fixtures, floors, ledges, and cabinetry so the craftsmanship can shine and the space feels ready to use.',
    idealFor: 'Homeowners, contractors, remodelers, designers, and property professionals completing a project.',
    image: '/images/construction-site.jpg',
    icon: HardHat,
    includes: ['Fine construction dust removed from accessible surfaces', 'Cabinets, drawers, shelves & ledges cleaned', 'Baseboards, trim, doors & frames wiped down', 'Fixtures, countertops & finished surfaces cleaned', 'Floors thoroughly vacuumed and mopped', 'Interior/exterior windows, glass & mirrors cleaned', 'Bathrooms & kitchens detailed', 'Light switches, outlets & door handles cleaned', 'Vents, sills & other reachable detail areas dusted', 'Light construction debris & leftover materials removed'],
    quoteNotice: 'Post Construction Cleans can be very particular so we want to get you the most accurate price possible.',
    seoTitle: 'Post-Construction Cleaning St. Petersburg, FL | Solara',
    metaDescription: 'Clear renovation dust with post-construction cleaning in St. Petersburg, FL. Solara prepares finished spaces for use. Request an accurate quote.',
    h1: 'Post-Construction Cleaning in St. Petersburg, FL',
    bestForDetails: 'This detailed final clean is intended for completed home builds, remodels, and renovations. It helps homeowners and project professionals move from construction work to a clean, usable finished space.',
    faqs: [
      { question: 'What does post-construction cleaning cover?', answer: 'The service focuses on fine dust across accessible surfaces, cabinetry, ledges, trim, fixtures, finished surfaces, floors, glass, kitchens, bathrooms, and other reachable detail areas.' },
      { question: 'Is post-construction cleaning the same as regular house cleaning?', answer: 'No. Renovation dust spreads differently from everyday household dust and requires a more methodical scope. Solara reviews project details before providing a quote.' },
      { question: 'How do I request a post-construction quote?', answer: 'Call or email Solara with information about the project, the finished space, and the cleaning needed so the team can provide an accurate custom quote.' },
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
