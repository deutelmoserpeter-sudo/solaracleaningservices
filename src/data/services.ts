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
  includeGroups?: { title: string; items: string[] }[]
  fitPoints?: string[]
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
    includeGroups: [
      {
        title: 'Throughout your home',
        items: [
          'Accessible surfaces and furniture dusted',
          'Window sills and décor dusted; reachable cobwebs removed',
          'Light switches and door handles wiped',
          'Trash emptied and liners replaced',
          'Carpets and rugs vacuumed; hard floors swept or vacuumed and mopped',
        ],
      },
      {
        title: 'Kitchen',
        items: [
          'Countertops cleaned and sanitized',
          'Backsplash cleaned as needed and stovetop wiped',
          'Microwave interior cleaned',
          'Appliance exteriors plus cabinet and drawer fronts wiped',
          'Sink and faucet cleaned',
          'Floor swept or vacuumed and mopped; trash emptied',
        ],
      },
      {
        title: 'Bathrooms',
        items: [
          'Toilets cleaned and sanitized inside and out',
          'Sinks, faucets, and countertops cleaned and sanitized',
          'Mirrors cleaned',
          'Showers and tubs cleaned, including normal soap buildup',
          'Cabinet fronts wiped; floor cleaned and trash emptied',
        ],
      },
      {
        title: 'Bedrooms & living areas',
        items: [
          'Accessible furniture, surfaces, and décor dusted',
          'Beds neatly made',
          'Rugs and carpets vacuumed',
          'Hard floors swept or vacuumed and mopped',
          'Trash emptied',
        ],
      },
    ],
    fitPoints: [
      'Your home is generally maintained without heavy buildup',
      'You want a one-time refresh before guests or a busy week',
      'Kitchens, bathrooms, floors, and everyday surfaces need attention',
      'You’re starting a regular weekly, biweekly, or monthly routine',
    ],
    seoTitle: 'Standard House Cleaning in Pinellas County, FL | Solara Cleaning',
    metaDescription: 'Keep your home fresh with standard house cleaning in St. Petersburg, FL. See what Solara includes and get an instant cleaning quote online.',
    h1: 'Standard Cleaning',
    bestForDetails: 'Choose a standard clean when your home is generally maintained but needs professional attention in the rooms you use most. It works well as a one-time refresh or as the foundation for ongoing care.',
    faqs: [
      { question: 'What is included in a standard cleaning?', answer: 'We dust accessible surfaces and furniture, wipe high-touch areas, clean kitchen counters, sinks, stovetops, appliance exteriors, bathrooms, mirrors, showers, and tubs, care for floors throughout the home, make beds, and empty trash.' },
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
    image: '/images/clean-home-540.jpg',
    icon: SprayCan,
    includes: ['Everything in Standard Cleaning', 'Baseboards, trim & doors thoroughly cleaned', 'Cabinet fronts, drawers & detailed surfaces cleaned', 'Interior window glass, sills & frames cleaned', 'Light fixtures, ceiling fans & vents dusted', 'Hard-to-reach areas, corners & buildup detailed'],
    includeGroups: [
      {
        title: 'Throughout your home',
        items: [
          'Accessible surfaces, furniture, décor, shelves, and ledges thoroughly dusted',
          'Ceiling fans, light fixtures, vents, and vent covers wiped',
          'Cobwebs removed from ceilings, corners, and edges',
          'Baseboards, doors, door frames, and trim thoroughly cleaned',
          'Light switches and other high-touch surfaces wiped; visible wall marks spot-cleaned',
          'Interior window glass, sills, and frames cleaned',
          'Accessible areas behind and underneath furniture plus hard-to-reach corners detailed',
          'Trash emptied with liners replaced; upholstery, carpets, rugs, and hard floors cleaned',
        ],
      },
      {
        title: 'Kitchen',
        items: [
          'Countertops and backsplash cleaned and sanitized',
          'Stovetop and range hood exterior thoroughly cleaned',
          'Appliance exteriors and edges detailed',
          'Cabinet and drawer fronts, handles, and pulls wiped',
          'Sink and faucet thoroughly cleaned and polished',
          'Accessible grease, grime, and buildup removed; floor cleaned and trash relined',
        ],
      },
      {
        title: 'Bathrooms',
        items: [
          'Countertops, sinks, and faucets cleaned and disinfected',
          'Toilets disinfected inside, outside, around the base, and surrounding area',
          'Showers, tubs, fixtures, and faucets thoroughly cleaned',
          'Accessible soap scum and buildup removed',
          'Mirrors, vanity fronts, handles, shelving, fixtures, and accessible vents wiped',
          'Floor cleaned and trash relined',
        ],
      },
      {
        title: 'Bedrooms',
        items: [
          'Furniture, surfaces, décor, shelves, and ledges dusted',
          'Accessible areas behind and underneath furniture cleaned',
          'Trash emptied and liner replaced',
          'Carpets and rugs vacuumed; hard floors swept or vacuumed and mopped',
        ],
      },
      {
        title: 'Living & common areas',
        items: [
          'Furniture, tables, décor, shelving, and ledges dusted',
          'Accessible areas behind and underneath furniture cleaned',
          'Accessible upholstery vacuumed',
          'Trash emptied and liners replaced',
          'Carpets and rugs vacuumed; hard floors swept or vacuumed and mopped',
        ],
      },
      {
        title: 'Final check',
        items: [
          'Rooms checked for missed dust, debris, buildup, or streaks',
          'Floors, baseboards, corners, and detailed areas reviewed for completion',
          'Moved items returned to their original positions',
        ],
      },
    ],
    fitPoints: [
      'Your home has visible dust, grime, or buildup beyond routine upkeep',
      'You’re booking your first professional cleaning or preparing for recurring visits',
      'You want seasonal detail work or a reset before or after a special occasion',
      'Baseboards, fixtures, vents, interior glass, and overlooked areas need attention',
    ],
    seoTitle: 'Deep Cleaning in Pinellas County, FL | Solara Cleaning',
    metaDescription: 'Refresh overlooked areas with deep cleaning in St. Petersburg, FL. Explore Solara’s detailed service and request your instant house cleaning quote.',
    h1: 'Deep Cleaning',
    bestForDetails: 'A deep clean is useful before an event, during a seasonal reset, or whenever routine cleaning has not kept up with detail work. It is also a practical first service before switching to recurring visits.',
    faqs: [
      { question: 'What is the difference between standard and deep cleaning?', answer: 'Standard cleaning focuses on routine upkeep. Deep cleaning includes that work plus detailed attention to buildup, baseboards, doors and trim, fixtures, vents, interior glass, appliance edges, areas behind furniture, and other frequently missed spaces.' },
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
    image: '/images/hero-cleaning-540.jpg',
    icon: CalendarDays,
    includes: ['A schedule shaped around your household', 'Consistent room-by-room checklist', 'Priority notes saved for future visits', 'Routine kitchen and bathroom care', 'Weekly, biweekly, or monthly options'],
    includeGroups: [
      {
        title: 'A schedule that fits',
        items: [
          'Weekly service for busy, high-traffic households',
          'Biweekly service for a steady maintenance rhythm',
          'Monthly service for homes that need occasional support',
          'A cleaning cadence shaped around your household and routine',
        ],
      },
      {
        title: 'Consistent every visit',
        items: [
          'A consistent room-by-room checklist at each appointment',
          'Routine kitchen and bathroom care',
          'Regular attention to floors, accessible surfaces, and high-touch areas',
          'Ongoing upkeep that helps keep everyday mess from piling up',
        ],
      },
      {
        title: 'Your priorities remembered',
        items: [
          'Priority notes saved for future visits',
          'Your household preferences carried from one appointment to the next',
          'Known focus areas kept visible to the cleaning team',
          'A familiar plan without starting over each time',
        ],
      },
      {
        title: 'A home that stays ready',
        items: [
          'Regular visits that help prevent dust and residue from building up',
          'Less catch-up cleaning between appointments',
          'Dependable support for families, professionals, and pet owners',
          'More time back without letting routine cleaning fall behind',
        ],
      },
    ],
    fitPoints: [
      'You want cleaning handled on a dependable schedule',
      'Your household benefits from consistent kitchen, bathroom, and floor care',
      'You want priorities remembered from one visit to the next',
      'Weekly, biweekly, or monthly upkeep fits your home and routine',
    ],
    seoTitle: 'Recurring House Cleaning in Pinellas County, FL | Solara Cleaning',
    metaDescription: 'Schedule recurring house cleaning in St. Petersburg, FL with weekly, biweekly, or monthly options. Get an instant quote from Solara Cleaning.',
    h1: 'Recurring Cleaning',
    bestForDetails: 'Recurring care is designed for households that want to prevent dust, bathroom residue, and kitchen mess from building up. Choose weekly, biweekly, or monthly visits based on your household and routine.',
    faqs: [
      { question: 'How often should I schedule house cleaning?', answer: 'Weekly service suits busy or high-traffic homes, biweekly care provides a steady maintenance rhythm, and monthly visits can support homes that need occasional help. The right interval depends on your household.' },
      { question: 'What does recurring cleaning include?', answer: 'Visits follow a consistent room-by-room plan covering accessible surfaces, high-touch areas, kitchens, bathrooms, bedrooms, living areas, floors, beds, and trash. Solara also keeps notes about your priorities for future visits.' },
      { question: 'Do you offer one-time cleaning instead?', answer: 'Yes. We offer one-time standard, deep, move-in/out, office, and post-construction cleaning. Recurring service is available when you prefer ongoing weekly, biweekly, or monthly care.' },
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
    image: '/images/team-cleaning-540.jpg',
    icon: KeyRound,
    includes: ['Detailed kitchens and bathrooms', 'Inside empty cabinets, drawers & closets', 'Baseboards, doors, trim & reachable surfaces', 'Floors vacuumed, swept & mopped', 'Appliance exteriors cleaned', 'Interior windows & glass cleaned', 'Light fixtures, switches & door handles cleaned', 'Dust, dirt & buildup removed throughout'],
    includeGroups: [
      {
        title: 'Throughout your home',
        items: [
          'Accessible surfaces, shelves, fixtures, ceiling fans, and fan blades dusted',
          'Reachable cobwebs removed',
          'Baseboards, doors, door frames, and trim cleaned',
          'Light switches and door handles wiped; visible wall marks spot-cleaned',
          'Window sills, frames, and interior glass cleaned',
          'Empty closets, shelving, corners, edges, and crevices detailed',
          'Carpets and rugs vacuumed',
          'Hard floors swept or vacuumed and mopped; trash emptied',
        ],
      },
      {
        title: 'Kitchen',
        items: [
          'Countertops and backsplash cleaned and sanitized',
          'Stovetop and range hood exterior thoroughly cleaned',
          'Oven cleaned inside and out',
          'Refrigerator and freezer cleaned inside and out',
          'Appliance exteriors cleaned',
          'Empty cabinets and drawers cleaned inside; fronts, handles, and pulls wiped',
          'Sink and faucet cleaned and polished; accessible grease and buildup removed',
          'Floors swept or vacuumed and mopped',
        ],
      },
      {
        title: 'Bathrooms',
        items: [
          'Toilets, sinks, faucets, and countertops cleaned and sanitized',
          'Mirrors cleaned',
          'Showers and tubs thoroughly cleaned',
          'Accessible soap scum and normal buildup removed',
          'Empty cabinets and drawers cleaned inside',
          'Vanity fronts, handles, pulls, baseboards, doors, and trim cleaned',
          'Floors swept or vacuumed and mopped; trash emptied',
        ],
      },
      {
        title: 'Bedrooms & living areas',
        items: [
          'All accessible surfaces dusted',
          'Empty closets, shelving, and closet floors cleaned',
          'Baseboards, doors, frames, and trim cleaned',
          'Window sills, frames, and interior glass cleaned',
          'Carpets vacuumed',
          'Hard floors swept or vacuumed and mopped',
        ],
      },
    ],
    fitPoints: [
      'You’re moving into a new home and want a fresh start',
      'You’re preparing a property for new occupants',
      'You need a thorough end-of-lease cleaning',
      'A vacant property needs to be ready for sale or rent',
    ],
    seoTitle: 'Move-In & Move-Out Cleaning in Pinellas County, FL | Solara Cleaning',
    metaDescription: 'Book move-in or move-out cleaning in St. Petersburg, FL. Solara details empty homes for a fresh arrival or smoother handoff. Get a quote.',
    h1: 'Move In/Out Cleaning',
    bestForDetails: 'This service supports renters, owners, and property professionals when a home is empty or nearly empty. It provides access to cabinets, closets, floors, and surfaces that are harder to reach once belongings arrive.',
    faqs: [
      { question: 'Do you offer move-out cleaning?', answer: 'Yes. Solara provides detailed end-of-lease and move-out cleaning for renters, owners, and property managers preparing an empty home for its next occupant, sale, or rental.' },
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
    image: '/images/office-cleaning-540.jpg',
    icon: Building2,
    includes: ['Dusting and wiping of desks, chairs, and shared surfaces', 'Breakroom and restroom cleaning and restocking', 'High-touch surfaces disinfected', 'Floors vacuumed and mopped', 'Trash removal and liner replacement', 'Interior glass and mirror cleaning', 'General tidying of common areas', 'Flexible recurring service options'],
    includeGroups: [
      {
        title: 'Offices & common areas',
        items: [
          'Desks, furniture, and accessible surfaces dusted',
          'High-touch surfaces wiped',
          'Doors, handles, and light switches cleaned',
          'Interior glass and mirrors cleaned',
          'Trash emptied and liners replaced',
          'Carpets and rugs vacuumed; hard floors swept or vacuumed and mopped',
        ],
      },
      {
        title: 'Breakroom & kitchen',
        items: [
          'Countertops cleaned and sanitized',
          'Tables and seating areas cleaned',
          'Appliance exteriors cleaned',
          'Microwave interior cleaned',
          'Sink and faucet cleaned and sanitized',
          'Trash emptied and floors swept or vacuumed and mopped',
        ],
      },
      {
        title: 'Restrooms',
        items: [
          'Toilets and urinals cleaned and sanitized',
          'Sinks, faucets, and countertops cleaned',
          'Mirrors cleaned',
          'Provided soap and paper products refilled',
          'Trash emptied',
          'Floors swept or vacuumed and mopped',
        ],
      },
      {
        title: 'Additional areas',
        items: [
          'Reception and waiting areas cleaned',
          'Conference rooms cleaned',
          'Window sills dusted',
          'Visible marks spot-cleaned',
          'Accessible shelving and fixtures cleaned',
        ],
      },
    ],
    fitPoints: [
      'Professional offices that need a consistently polished setting',
      'Studios and small businesses with shared spaces',
      'Client-facing workplaces with reception or conference rooms',
      'Teams needing one-time or dependable recurring service',
    ],
    quoteNotice: 'Office Cleans can be very particular so we want to get you the most accurate price possible.',
    seoTitle: 'Office Cleaning in Pinellas County, FL | Solara Cleaning',
    metaDescription: 'Professional office cleaning in St. Petersburg, FL for small workplaces, studios, and shared spaces. Contact Solara for an accurate custom quote.',
    h1: 'Office Cleaning',
    bestForDetails: 'Office cleaning is suited to small businesses, studios, and professional spaces that need tidy common areas, restrooms, breakrooms, floors, and client-facing rooms. The scope can reflect how the workplace is used.',
    faqs: [
      { question: 'What types of workplaces do you clean?', answer: 'Solara serves professional offices, studios, small businesses, and client-facing workplaces in the St. Petersburg area.' },
      { question: 'What is included in office cleaning?', answer: 'Typical work includes desks and shared surfaces, high-touch areas, breakrooms, restrooms, reception and conference rooms, trash, interior glass, mirrors, carpets, and hard floors. Provided soap and paper products can also be refilled.' },
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
    description: 'A detailed cleaning designed to remove construction dust, residue, and light debris after renovations or new construction. We methodically clean surfaces, fixtures, floors, glass, and cabinetry so the finished space feels ready to use.',
    idealFor: 'Homeowners, contractors, remodelers, designers, and property professionals completing a project.',
    image: '/images/construction-site-540.jpg',
    icon: HardHat,
    includes: ['Fine construction dust removed from accessible surfaces', 'Cabinets, drawers, shelves & ledges cleaned', 'Baseboards, trim, doors & frames wiped down', 'Fixtures, countertops & finished surfaces cleaned', 'Floors thoroughly vacuumed and mopped', 'Interior/exterior windows, glass & mirrors cleaned', 'Bathrooms & kitchens detailed', 'Light switches, outlets & door handles cleaned', 'Vents, sills & other reachable detail areas dusted', 'Light construction debris & leftover materials removed'],
    includeGroups: [
      {
        title: 'Throughout your home',
        items: [
          'Construction dust removed from accessible surfaces',
          'Baseboards, trim, doors, and frames cleaned',
          'Ceiling fans and light fixtures dusted',
          'Switches, outlets, and handles wiped',
          'Window glass, sills, frames, and tracks cleaned',
          'Corners, edges, and crevices detailed',
        ],
      },
      {
        title: 'Kitchen',
        items: [
          'Countertops and backsplash cleaned',
          'Cabinets and drawers cleaned inside and out',
          'Appliance exteriors cleaned',
          'Sink, faucet, and fixtures cleaned',
          'Dust and light construction residue removed',
          'Floors thoroughly vacuumed and mopped',
        ],
      },
      {
        title: 'Bathrooms',
        items: [
          'Toilets, sinks, and countertops cleaned',
          'Mirrors, showers, and tubs cleaned',
          'Cabinets and drawers cleaned inside and out',
          'Faucets and fixtures cleaned',
          'Dust and light construction residue removed',
          'Floors thoroughly vacuumed and mopped',
        ],
      },
      {
        title: 'Living areas & bedrooms',
        items: [
          'All accessible surfaces dusted',
          'Closets, shelving, and built-ins cleaned',
          'Window glass, sills, frames, and tracks cleaned',
          'Baseboards, doors, and trim cleaned',
          'Switches, outlets, and handles wiped',
          'Carpets and rugs vacuumed',
          'Hard floors thoroughly vacuumed and mopped',
        ],
      },
    ],
    fitPoints: [
      'A renovation or remodel has reached the final cleaning stage',
      'New construction needs detailed dust removal before use',
      'Contractors or designers need a polished project handoff',
      'A finished space needs light residue removed before move-in or reveal',
    ],
    quoteNotice: 'Post Construction Cleans can be very particular so we want to get you the most accurate price possible.',
    seoTitle: 'Post-Construction Cleaning in Pinellas County, FL | Solara Cleaning',
    metaDescription: 'Clear renovation dust with post-construction cleaning in St. Petersburg, FL. Solara prepares finished spaces for use. Request an accurate quote.',
    h1: 'Post Construction Cleaning',
    bestForDetails: 'This detailed final clean is intended for completed home builds, remodels, and renovations. It helps homeowners and project professionals move from construction work to a clean, usable finished space.',
    faqs: [
      { question: 'What does post-construction cleaning cover?', answer: 'The service focuses on construction dust and light residue across accessible surfaces, cabinetry, trim, fixtures, window glass and tracks, kitchens, bathrooms, closets, carpets, and hard floors.' },
      { question: 'Is post-construction cleaning the same as regular house cleaning?', answer: 'No. Renovation dust spreads differently from everyday household dust and requires a more methodical scope. Heavy construction debris, hazardous materials, and extensive paint, grout, or adhesive removal are not included.' },
      { question: 'How do I request a post-construction quote?', answer: 'Call or email Solara with information about the project, the finished space, and the cleaning needed so the team can provide an accurate custom quote.' },
    ],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
