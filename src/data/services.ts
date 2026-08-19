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
    image: '/images/clean-home.jpg',
    icon: HardHat,
    includes: ['Fine construction dust removed from accessible surfaces', 'Cabinets, drawers, shelves & ledges cleaned', 'Baseboards, trim, doors & frames wiped down', 'Fixtures, countertops & finished surfaces cleaned', 'Floors thoroughly vacuumed and mopped', 'Interior/exterior windows, glass & mirrors cleaned', 'Bathrooms & kitchens detailed', 'Light switches, outlets & door handles cleaned', 'Vents, sills & other reachable detail areas dusted', 'Light construction debris & leftover materials removed'],
    quoteNotice: 'Post Construction Cleans can be very particular so we want to get you the most accurate price possible.',
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
