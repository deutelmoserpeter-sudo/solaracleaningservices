export type BlogSection = {
  heading: string
  paragraphs: string[]
  tips?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  description: string
  category: string
  date: string
  displayDate: string
  readTime: string
  image: string
  imageAlt: string
  sections: BlogSection[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'deep-cleaning-checklist-st-petersburg-home',
    title: 'The Complete Deep Cleaning Checklist for a St. Petersburg Home',
    excerpt: 'A room-by-room plan for tackling Florida dust, humidity, buildup, and the details routine cleaning can miss.',
    description: 'Use this room-by-room deep cleaning checklist to refresh your St. Petersburg, Florida home, from kitchens and bathrooms to floors and overlooked details.',
    category: 'Deep cleaning',
    date: '2026-09-24',
    displayDate: 'September 24, 2026',
    readTime: '7 min read',
    image: '/images/deep-cleaning-540.jpg',
    imageAlt: 'A bright kitchen prepared for a detailed deep cleaning',
    sections: [
      {
        heading: 'What makes a deep clean different?',
        paragraphs: [
          'Routine cleaning keeps everyday mess under control. A deep clean goes further, spending more time on buildup, edges, fixtures, baseboards, and areas that are easy to overlook during weekly upkeep.',
          'In St. Petersburg, open windows, sandy shoes, pets, and year-round humidity can make dust and residue return quickly. Working from high surfaces down—and finishing one room at a time—helps prevent freshly cleaned areas from getting dirty again.',
        ],
      },
      {
        heading: 'Kitchen deep cleaning checklist',
        paragraphs: ['Start with the room that usually holds the most grease, crumbs, and high-touch surfaces. Clear counters first so every area is accessible.'],
        tips: ['Dust light fixtures, vents, cabinet tops, and the top of the refrigerator', 'Degrease the range hood, backsplash, stovetop, and cabinet fronts', 'Clean small appliances and wipe beneath countertop items', 'Scrub the sink, faucet, drain, and disposal splash guard', 'Wipe baseboards, door frames, switches, and handles', 'Vacuum edges before mopping the floor'],
      },
      {
        heading: 'Bathroom deep cleaning checklist',
        paragraphs: ['Humidity makes bathrooms especially prone to soap film, mineral spots, and mildew. Ventilation and regular drying are just as important as the products you use.'],
        tips: ['Dust vents, lighting, shelves, and trim before using wet cleaners', 'Apply cleaner to showers and tubs and allow the proper dwell time', 'Detail grout lines, shower tracks, fixtures, and glass', 'Disinfect the toilet, including the base and surrounding floor', 'Polish mirrors and remove residue from vanities and sinks', 'Wash bath mats and leave the room ventilated until dry'],
      },
      {
        heading: 'Bedrooms and living spaces',
        paragraphs: ['Soft furnishings hold more dust than they appear to. A thorough reset includes the areas behind, beneath, and above the furniture you see every day.'],
        tips: ['Dust ceiling fans, vents, blinds, frames, and shelves', 'Vacuum upholstery and beneath removable cushions', 'Move lightweight furniture to clean floor edges and baseboards', 'Wipe doors, handles, switches, and frequently touched surfaces', 'Vacuum slowly in overlapping passes, then mop suitable hard floors'],
      },
      {
        heading: 'When to call a professional cleaner',
        paragraphs: ['A professional deep cleaning service can help when the checklist is larger than your available time, before guests arrive, after a busy season, or when you want a clean baseline before beginning recurring service. Solara serves St. Petersburg and nearby Pinellas County communities with detailed cleaning tailored to the home.'],
      },
    ],
  },
  {
    slug: 'how-often-professional-house-cleaning',
    title: 'How Often Should You Schedule Professional House Cleaning?',
    excerpt: 'Weekly, biweekly, or monthly? Find a realistic cleaning rhythm based on your household, pets, schedule, and priorities.',
    description: 'Learn how often to schedule professional house cleaning and compare weekly, biweekly, and monthly service for your St. Petersburg household.',
    category: 'Cleaning routines',
    date: '2026-09-17',
    displayDate: 'September 17, 2026',
    readTime: '6 min read',
    image: '/images/recurring-cleaning-540.jpg',
    imageAlt: 'A calm, tidy living room maintained with recurring house cleaning',
    sections: [
      {
        heading: 'The best schedule is the one you can maintain',
        paragraphs: ['There is no universal cleaning frequency. The right schedule depends on how many people use the home, whether you have pets, how often you cook, and how much upkeep you want to handle between visits.', 'Think about your goal: do you want the home consistently maintained, help with the heavier tasks, or an occasional reset? That answer makes choosing a cadence much easier.'],
      },
      {
        heading: 'Weekly cleaning',
        paragraphs: ['Weekly service works well for active households where floors, kitchens, and bathrooms show use quickly. It keeps buildup low and reduces the amount of catch-up needed before guests or busy weekends.'],
        tips: ['Families with young children', 'Homes with multiple pets', 'People who entertain often', 'Households with limited time for routine upkeep'],
      },
      {
        heading: 'Biweekly cleaning',
        paragraphs: ['Every two weeks is a popular balance between professional care and light upkeep. It is frequent enough to keep bathrooms, dust, and floors manageable without requiring a visit every week.'],
        tips: ['Small to medium households', 'One-pet homes', 'People who tidy regularly but want help with full-home cleaning', 'Anyone looking for a dependable maintenance rhythm'],
      },
      {
        heading: 'Monthly cleaning',
        paragraphs: ['Monthly service is best for lower-traffic homes or households that already handle routine cleaning. Because more buildup can collect between visits, a monthly appointment may take more time than a weekly or biweekly maintenance clean.'],
        tips: ['One-person households', 'Frequently traveled homes', 'Households that clean throughout the month', 'Targeted help with bathrooms, floors, and dusting'],
      },
      {
        heading: 'Adjust for life in coastal Florida',
        paragraphs: ['St. Petersburg homes often contend with sand, pollen, pet hair, and moisture. During rainy months, after home projects, or when windows stay open, you may benefit from temporarily increasing your cleaning frequency.', 'Start with the cadence that matches your current needs and adjust after a few visits. A reliable cleaning company should help you find a practical schedule rather than push a one-size-fits-all plan.'],
      },
    ],
  },
  {
    slug: 'move-out-cleaning-checklist',
    title: 'Move-Out Cleaning Checklist: Leave Every Room Ready',
    excerpt: 'A practical guide to cleaning an empty home, protecting your timeline, and making a smoother handoff to the next resident.',
    description: 'Follow a detailed move-out cleaning checklist for kitchens, bathrooms, bedrooms, and living spaces before handing over your St. Petersburg home.',
    category: 'Moving',
    date: '2026-09-10',
    displayDate: 'September 10, 2026',
    readTime: '7 min read',
    image: '/images/move-in-out-cleaning-540.jpg',
    imageAlt: 'An empty, freshly cleaned room ready for move-in',
    sections: [
      {
        heading: 'Clean after the home is empty',
        paragraphs: ['Schedule the final clean after boxes, furniture, and trash have been removed. An empty home gives you access to cabinet interiors, closets, baseboards, walls, and appliance areas that are difficult to reach during packing.', 'Before starting, confirm any cleaning requirements in your lease, sale agreement, or property manager’s instructions. Take photos when the work is complete.'],
      },
      {
        heading: 'Kitchen checklist',
        paragraphs: ['Kitchens usually require the most time, so begin there while you still have energy and daylight.'],
        tips: ['Empty and wipe cabinet, drawer, and pantry interiors', 'Clean inside the refrigerator and oven once they are cool and empty', 'Degrease the stovetop, backsplash, hood, and cabinet fronts', 'Scrub the sink and polish fixtures', 'Wipe counters, baseboards, doors, and switches', 'Vacuum and mop beneath accessible appliance areas'],
      },
      {
        heading: 'Bathroom checklist',
        paragraphs: ['Work from dry dusting to wet cleaning so loose debris does not land on finished surfaces.'],
        tips: ['Remove soap film from the shower, tub, tile, and glass', 'Clean vanities, drawers, mirrors, and fixtures', 'Disinfect the toilet inside and out', 'Dust vents and wipe baseboards and doors', 'Vacuum and mop the floor, including behind the toilet'],
      },
      {
        heading: 'Bedrooms, closets, and living areas',
        paragraphs: ['With furniture gone, marks and dust that were hidden become visible. Inspect each room in good light before moving on.'],
        tips: ['Dust fans, fixtures, blinds, ledges, and vents', 'Wipe shelves and empty closet interiors', 'Spot-clean removable marks where appropriate', 'Clean doors, handles, switches, and baseboards', 'Vacuum carpet edges and mop hard flooring'],
      },
      {
        heading: 'Plan the final handoff',
        paragraphs: ['Leave enough time for surfaces and floors to dry before the walkthrough. Remove cleaning supplies and take a final look from each doorway for missed corners, streaks, or items left behind.', 'If moving logistics already fill your schedule, professional move-in and move-out cleaning can handle the detailed final reset. Solara cleans empty homes across St. Petersburg and surrounding Pinellas County areas so the space is ready for its next chapter.'],
      },
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
