/**
 * Vendora — site content and configuration.
 *
 * Every piece of brand, copy, location, FAQ and image data used by the page
 * lives here so it can be replaced without touching components.
 *
 * IMPORTANT: this is a concept demo. Nothing below describes a confirmed
 * service area, product catalogue, machine model, price or commission.
 * Keep any edits conditional until those details are agreed.
 */

export const brand = {
  name: 'Vendora',
  tagline: 'Managed vending concept',
  demoNotice: 'Concept demo — brand and service details are illustrative.',
  // Placeholder only. Replace with real contact details before launch.
  // Rendered as plain text, never as a live link.
  contactPlaceholder: 'Contact details to be confirmed before launch.',
};

export const nav = {
  links: [
    { label: 'The service', href: '#service' },
    { label: 'Locations', href: '#locations' },
    { label: 'Commitments', href: '#commitments' },
    { label: 'How it works', href: '#process' },
  ],
  cta: { label: 'Discuss your site', href: '#enquiry' },
};

export const images = {
  heroMachine: {
    // Concept illustration of an unbranded machine. Replace with a real,
    // licensed cutout (transparent PNG/WebP) of the chosen machine once a
    // supplier is confirmed. Keep the aspect ratio or update width/height.
    // BASE_URL keeps the path working when the build is hosted under a sub-path.
    src: `${import.meta.env.BASE_URL}images/vendora-concept-machine.svg`,
    width: 560,
    height: 980,
    alt: 'Concept illustration of an unbranded vending machine stocked with bottled drinks and snacks, with a contactless card reader beside the selection panel.',
    caption: 'Concept illustration — not a specific machine.',
  },
};

/**
 * Location photography: Unsplash Licence (free to use, no attribution
 * required). Sources in README.md. Illustrative locations, not Vendora sites.
 */
const media = (file) => `${import.meta.env.BASE_URL}media/${file}`;
export const photos = {
  workplace: { src: media('workplace.webp'), width: 1800, height: 1200, alt: 'A modern office kitchen with dark cabinets, a white worktop and a coffee machine.' },
  warehouse: { src: media('warehouse.webp'), width: 1800, height: 1200, alt: 'A large, brightly lit warehouse floor with a polished concrete finish.' },
  gym: { src: media('gym.webp'), width: 1800, height: 1350, alt: 'A gym floor with weight machines and racks under strip lighting.' },
  student: { src: media('student.webp'), width: 1800, height: 1200, alt: 'Tall red-brick residential blocks under a clear blue sky.' },
};

/**
 * Decorative product models scattered around sections (see Floaters.jsx).
 * Positions are % of the section; depth controls scroll drift.
 */
export const decor = {
  benefits: [
    { type: 'can', variant: 'coral', top: '6%', right: '6%', size: '4.5rem', rotate: 12, depth: 0.6 },
    { type: 'crisps', variant: 'amber', top: '30%', right: '14%', size: '5.5rem', rotate: -10, depth: 0.3, mobile: false },
    { type: 'bottle', top: '62%', left: '2%', size: '3.6rem', rotate: -14, depth: 0.8, mobile: false },
  ],
  commitments: [
    { type: 'bowl', top: '8%', right: '5%', size: '8rem', rotate: -6, depth: 0.5, mobile: false },
    { type: 'can', variant: 'teal', bottom: '10%', left: '3%', size: '3.8rem', rotate: -18, depth: 0.7, mobile: false },
  ],
  cta: [
    { type: 'bottle', top: '14%', right: '18%', size: '4.2rem', rotate: 16, depth: 0.7 },
    { type: 'crisps', variant: 'blue', top: '48%', right: '6%', size: '6rem', rotate: 8, depth: 0.4, mobile: false },
    { type: 'can', variant: 'lime', bottom: '4%', right: '16%', size: '3.6rem', rotate: -10, depth: 0.9, mobile: false },
    { type: 'bowl', bottom: '12%', right: '2%', size: '7rem', rotate: 4, depth: 0.25, mobile: false },
  ],
  enquiry: [
    { type: 'can', variant: 'coral', bottom: '6%', left: '4%', size: '3.6rem', rotate: 14, depth: 0.5, mobile: false },
  ],
};

export const hero = {
  eyebrow: 'Managed vending for UK sites',
  headingLines: ['Better breaks.', 'Right where they happen.'],
  supporting:
    'Explore a managed vending setup for your workplace, gym or shared space.',
  primaryCta: { label: 'Discuss your site', href: '#enquiry' },
  secondaryCta: { label: 'Explore the service', href: '#service' },
  smallPrint: 'Products, placement and servicing planned around your location.',
  statements: [
    'Choose the right setup.',
    'Keep refreshments within reach.',
    'Leave the servicing to us.',
  ],
  // Desktop scroll sequence: each statement is pinned to a part of the machine.
  // x / y are percentages of the machine image; side is where the label sits.
  // Re-aim these if the hero image is replaced.
  callouts: [
    { x: 12, y: 30, side: 'left', label: 'Setup', note: 'Machine and product rows planned per site' },
    { x: 12, y: 86, side: 'left', label: 'Access', note: 'Drinks and snacks where people already are' },
    { x: 89, y: 48, side: 'right', label: 'Service', note: 'Restocking and maintenance as agreed' },
  ],
};

export const benefits = {
  id: 'service',
  eyebrow: 'The service',
  heading: 'A useful addition. Less work for your team.',
  intro:
    'A managed vending service puts packaged refreshments where people already spend their day, with the operator looking after the machine rather than your staff.',
  // Large statement that highlights word by word as it scrolls into view.
  manifesto:
    'No vending to manage, no stock cupboard to watch. Just a machine planned around the people who use your space, and an operator who keeps it running.',
  items: [
    {
      title: 'Refreshments within reach',
      body: 'Drinks and snacks available on site, so a short break does not mean a trip off the premises.',
      detail: 'For staff, members, residents or visitors',
    },
    {
      title: 'A mix suited to the space',
      body: 'Product choices planned around who uses the location and when, rather than a one-size-fits-all selection.',
      detail: 'Reviewed as usage becomes clearer',
    },
    {
      title: 'Servicing handled by the operator',
      body: 'Restocking and maintenance follow an agreed plan, so your team is not left managing stock or faults.',
      detail: 'Scope agreed before installation',
    },
  ],
};

export const locations = {
  id: 'locations',
  eyebrow: 'Locations',
  heading: 'Different spaces. Different needs.',
  intro:
    'Each type of site has its own rhythm. Select one to see how a setup might be shaped around it.',
  mixDisclaimer:
    'Illustrative only. Final products depend on equipment, supplier availability and the agreed servicing arrangement.',
  items: [
    {
      id: 'workplaces',
      label: 'Workplaces',
      photo: 'workplace',
      products: [{ type: 'can', variant: 'teal' }, { type: 'crisps', variant: 'amber' }],
      need: 'A dependable option for a drink or snack between meetings, without leaving the building.',
      detail: 'Breaks are short and often unplanned. A machine close to where people already gather saves a trip out and keeps the kitchen tidy.',
      considerations: ['Break times and meeting rhythm', 'Where staff already gather', 'Lighter options alongside treats'],
      mix: ['Bottled water and soft drinks', 'Everyday snacks', 'Lighter and lower-sugar options'],
      cta: 'Discuss your workplace',
      siteType: 'workplace',
    },
    {
      id: 'warehouses',
      label: 'Warehouses and manufacturing',
      photo: 'warehouse',
      products: [{ type: 'bowl' }, { type: 'can', variant: 'coral' }],
      need: 'Refreshments within reach across the working day, including for teams on different shifts.',
      detail: 'Night and weekend shifts rarely have a canteen open. Placement, stock levels and servicing visits need to fit around operations, not interrupt them.',
      considerations: ['Shift patterns and night teams', 'Servicing access that avoids busy routes', 'Robust placement away from traffic lanes'],
      mix: ['Packaged drinks', 'Snacks', 'Potential food options, subject to equipment and servicing arrangements'],
      cta: 'Discuss your warehouse or plant',
      siteType: 'warehouse',
    },
    {
      id: 'gyms',
      label: 'Gyms',
      photo: 'gym',
      products: [{ type: 'bottle' }, { type: 'can', variant: 'lime' }],
      need: 'Something to drink or refuel with before or after a session, close to the training floor.',
      detail: 'Members want hydration first and something to refuel with after training. A tidy, well-stocked machine reflects on the gym itself.',
      considerations: ['Peak hours before and after work', 'Hydration first, then refuelling', 'Near the training floor or reception'],
      mix: ['Bottled water and sports drinks', 'Protein bars', 'Packaged sports nutrition'],
      cta: 'Discuss your gym',
      siteType: 'gym',
    },
    {
      id: 'student',
      label: 'Student accommodation',
      photo: 'student',
      products: [{ type: 'crisps', variant: 'blue' }, { type: 'bowl' }],
      need: 'Evening and weekend access to drinks and snacks for residents, close to home.',
      detail: 'Residents use shared spaces late and at weekends. A clear way to report a problem matters as much as the products inside.',
      considerations: ['Late-evening and weekend use', 'Secure, well-lit placement', 'Simple fault reporting for residents'],
      mix: ['Drinks', 'Snacks', 'Selected everyday items, depending on the equipment'],
      cta: 'Discuss your accommodation',
      siteType: 'student',
    },
  ],
};

export const commitments = {
  id: 'commitments',
  eyebrow: 'Commitments',
  heading: 'Responsibility you can see before you sign anything.',
  intro: 'Every site is different, but these are the standards the service is built around.',
  items: [
    { title: 'A named contact', body: 'One person who knows your site and answers for it, rather than a ticket queue.' },
    { title: 'Everything in writing', body: 'Costs, any commission, restocking rhythm and response times are set out in a service agreement before installation.' },
    { title: 'A clear fault and refund route', body: 'Each machine is labelled with how to report a problem and how refunds are handled, so nobody on your team has to.' },
    { title: 'Clean, safe equipment', body: 'Machines cleaned on each visit. Electrical safety and insurance documents shared with you before installation.' },
    { title: 'Honest product information', body: 'Allergen and nutrition details as supplied by manufacturers, and a product mix reviewed with you, not imposed.' },
    { title: 'Less waste', body: 'Restocking planned around what actually sells, and packaging recycling discussed for your site.' },
  ],
  note: 'Intended commitments for this concept. Final wording is agreed in each site’s service agreement.',
};

export const serviceScope = {
  id: 'scope',
  eyebrow: 'Service scope',
  heading: 'A setup shaped around your site.',
  intro: 'The intended managed-service model runs in four parts.',
  steps: [
    {
      title: 'Assess the location',
      body: 'Understand footfall, opening hours, available space and power before recommending anything.',
    },
    {
      title: 'Recommend equipment and products',
      body: 'Suggest a machine type and product mix that suit the people using the space.',
    },
    {
      title: 'Agree installation and terms',
      body: 'Confirm placement, access, installation and the commercial arrangement in writing.',
    },
    {
      title: 'Plan restocking and maintenance',
      body: 'Set a servicing rhythm and a clear route for reporting faults or requests.',
    },
  ],
  note: 'Equipment, availability and commercial terms are confirmed after a site discussion.',
  options: {
    heading: 'Options to discuss',
    body: 'These depend on the equipment chosen and are not fixed specifications.',
    items: [
      {
        title: 'Contactless payments',
        body: 'Card and mobile payment readers may be available on suitable machines.',
      },
      {
        title: 'Remote monitoring',
        body: 'Some equipment can report stock levels or faults remotely to help plan servicing visits.',
      },
    ],
  },
};

export const process = {
  id: 'process',
  eyebrow: 'How it works',
  heading: 'From first conversation to the first vend.',
  steps: [
    {
      title: 'Tell us about your site.',
      body: 'Share the location type, rough daily users and where a machine might go.',
    },
    {
      title: 'Review a suitable setup.',
      body: 'Look at a proposed machine type, product mix and servicing approach.',
    },
    {
      title: 'Agree placement and terms.',
      body: 'Settle position, access, installation and the commercial arrangement.',
    },
    {
      title: 'Install and manage the service.',
      body: 'The machine is installed and the operator runs restocking and maintenance as agreed.',
    },
  ],
};

export const support = {
  id: 'support',
  eyebrow: 'Support',
  statement: 'If something on your site isn’t working, putting it right is our job — not yours.',
  attribution: 'Vendora support principle',
  stepsHeading: 'How a problem gets fixed',
  steps: [
    { title: 'Report', body: 'Anyone can report a fault using the details on the machine, or by contacting your named person.' },
    { title: 'Logged', body: 'The report is recorded and acknowledged, so you know it has been picked up.' },
    { title: 'Visit', body: 'An engineer attends within the time set in your service agreement.' },
    { title: 'Follow-up', body: 'Refunds are handled and the cause is noted, so the same problem is less likely to return.' },
  ],
};

export const proof = {
  id: 'proof',
  eyebrow: 'Proof',
  heading: 'Proof, once we’ve earned it.',
  intro: 'We would rather show nothing than show something we can’t back up.',
  slots: [
    { title: 'Reviews from host sites', body: 'Verified reviews will appear here after launch. No invented quotes, no anonymous five-star badges.', status: 'After launch' },
    { title: 'Memberships and accreditations', body: 'Being confirmed. Industry membership, insurance and safety documentation will be listed here with references you can check.', status: 'To be confirmed' },
  ],
};

export const ctaBand = {
  kicker: 'Next step',
  lead: 'A short conversation is enough to see whether a machine makes sense for your site.',
  link: { label: 'Discuss your site', href: '#enquiry' },
};

export const faq = {
  id: 'faq',
  eyebrow: 'Questions',
  heading: 'Straight answers.',
  items: [
    { q: 'Is our location suitable?', a: 'It depends on the space, power supply, access for servicing and how many people use the site each day. A short discussion is the quickest way to find out.' },
    { q: 'Is there a cost to the host business?', a: 'Costs and any host commission depend on the site, equipment and agreed service. They are set out in writing before installation, so there are no surprises later.' },
    { q: 'What happens if the machine breaks or takes someone’s money?', a: 'Each machine is labelled with how to report a fault and how refunds are handled. Reports go to us, not your team, and the response time is part of your service agreement.' },
    { q: 'Are we tied into a long contract?', a: 'Contract length is agreed with each site and written into the service agreement. We’ll explain the terms plainly before you commit to anything.' },
    { q: 'What products could be available?', a: 'Typically packaged drinks and snacks, with other options considered where the equipment and servicing arrangement allow. The final mix is agreed with you and reviewed over time.' },
    { q: 'Can customers pay by card?', a: 'Contactless card and mobile payments may be possible, depending on the machine chosen. This is confirmed as part of the proposed setup.' },
  ],
};

export const enquiry = {
  id: 'enquiry',
  eyebrow: 'Enquire',
  heading: 'Could vending work at your site?',
  intro:
    'Tell us a little about the location. A few details are enough to start a conversation.',
  whatWeAsk: [
    'What kind of site it is',
    'Roughly how many people use it each day',
    'Where a machine might go',
  ],
  siteTypes: [
    { value: '', label: 'Select a site type' },
    { value: 'workplace', label: 'Workplace or office' },
    { value: 'warehouse', label: 'Warehouse or manufacturing' },
    { value: 'gym', label: 'Gym or leisure' },
    { value: 'student', label: 'Student accommodation' },
    { value: 'other', label: 'Other shared space' },
  ],
  dailyUsers: [
    { value: '', label: 'Not sure / prefer not to say' },
    { value: 'under-50', label: 'Under 50' },
    { value: '50-150', label: '50 to 150' },
    { value: '150-400', label: '150 to 400' },
    { value: '400-plus', label: 'More than 400' },
  ],
  submitLabel: 'Preview enquiry',
  demoNote: 'Demo form — enquiries are not sent.',
  resultHeading: 'Demo enquiry prepared. Nothing has been sent.',
  resultBody:
    'This is a preview of what would be shared. In this demo the details stay in this browser tab and are cleared when you leave or refresh the page.',
};

export const footer = {
  links: [
    ...nav.links,
    { label: 'Support', href: '#support' },
    { label: 'Questions', href: '#faq' },
    { label: 'Discuss your site', href: '#enquiry' },
  ],
};
