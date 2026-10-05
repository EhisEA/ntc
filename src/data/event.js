// Single source of truth for event content. Update here, not in the page markup.
// Sources: tix.africa listing (2 Oct 2026), NTC 2.0 Programme draft v2, Speaker Tracker (26 Sep 2026).

export const event = {
  name: 'Nigerian Telehealth Conference',
  short: 'NTC 2.0',
  theme: 'The Future of Healthcare is Connected',
  themeAccent: 'Click & Brick',
  focus: 'Scaling Telehealth for Universal Health Coverage: From Policy to Nationwide Implementation',
  dateLabel: 'Tuesday, 20 October 2026',
  dateShort: '20 Oct 2026',
  // WAT is UTC+1
  startISO: '2026-10-20T08:00:00+01:00',
  conferenceHours: '8:00 AM – 6:00 PM',
  galaHours: '7:00 PM – 11:00 PM',
  format: 'In person & virtual',
  capacity: { physical: 400, virtual: 400 },
  venue: {
    name: 'Afreximbank African Trade Centre (AATC)',
    address: 'Plot 1573, Off Ralph Shodeinde Street, Central Business District, Abuja',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Afreximbank+African+Trade+Centre+Abuja',
  },
  ticketUrl:
    'https://www.tix.africa/discover/nigerian-telehealth-conference-ntc-2-0-the-nigerian-telehealth-conferenc',
  tagline: 'Connecting policy. Powering innovation. Transforming healthcare.',
};

export const contact = {
  phone: '+234 911 000 0557',
  phoneHref: 'tel:+2349110000557',
  support: 'support@mobihealthinternational.com',
  partnerships: 'ntc@mobihealthinternational.com',
  instagram: [
    { handle: '@nigeriatelehealthconference', url: 'https://instagram.com/nigeriatelehealthconference' },
    { handle: '@mymobihealth', url: 'https://instagram.com/mymobihealth' },
  ],
  hashtags: ['#NTC2026', '#TelehealthForAll', '#ClickAndBrick'],
};

// Early bird tiers closed 30 Sep 2026 and are intentionally not listed.
export const tickets = [
  {
    name: 'Virtual',
    price: '₦15,000',
    note: 'Join the full conference programme online from anywhere.',
    includes: ['Live stream of all sessions', 'Ask questions to the panels'],
  },
  {
    name: 'Conference',
    price: '₦54,100',
    note: 'Includes ₦4,100 booking fee.',
    includes: ['In-person access at AATC, Abuja', 'All sessions and the exhibition', 'Networking with speakers and delegates'],
  },
  {
    name: 'Conference + Awards Night',
    price: '₦108,100',
    note: 'Includes ₦8,100 booking fee.',
    includes: ['Everything in Conference', 'NTC 2.0 Gala & Awards Night, 7–11 PM'],
    featured: true,
  },
];

// Times from Programme draft v2 ("Programme at a glance"). Subject to change.
export const programme = [
  { time: '7:30', end: '9:00', title: 'Registration, exhibition & networking breakfast', kind: 'break' },
  { time: '9:00', end: '10:30', title: 'Opening: welcome, special address and keynote', session: 1, short: 'Opening' },
  { time: '10:30', end: '11:00', title: 'Tea break & exhibition tour', kind: 'break' },
  {
    time: '11:00',
    end: '12:00',
    title: 'High-Level Leadership Panel',
    sub: 'From policy to nationwide implementation',
    session: 2,
    short: 'Leadership Panel',
  },
  {
    time: '12:00',
    end: '1:00',
    title: 'Fireside Chat 1: From Policy to Nationwide Implementation',
    sub: 'Policy deep dive on the National Telemedicine Guidelines and the Digital Health Bill',
    session: 3,
    short: 'Fireside Chat 1 · Policy',
  },
  { time: '1:00', end: '2:00', title: 'Networking lunch', kind: 'break' },
  {
    time: '2:00',
    end: '3:00',
    title: 'Fireside Chat 2: Financing & Incentivisation',
    sub: 'Who pays for telehealth today, and who pays in three years',
    session: 4,
    short: 'Fireside Chat 2 · Financing',
  },
  {
    time: '3:00',
    end: '4:00',
    title: 'Fireside Chat 3: Driving Adoption Through Community Sensitisation',
    sub: 'Markets, pharmacies, faith leaders and local government',
    session: 5,
    short: 'Fireside Chat 3 · Adoption',
  },
  {
    time: '4:00',
    end: '5:00',
    title: 'Youth Forum & Innovation Showcase',
    sub: 'Including the Student Innovation Challenge finals',
    session: '6–7',
    short: 'Youth Forum & Showcase',
  },
  {
    time: '5:00',
    end: '5:30',
    title: 'Closing plenary: the Abuja Declaration on Telehealth',
    session: 8,
    short: 'Closing plenary',
  },
  { time: '7:00', end: '11:00', title: 'NTC 2.0 Gala & Awards Night', kind: 'gala' },
];

// Only people marked "Confirmed" on the speaker tracker. Verify before each deploy.
// `session` links the badge to a programme row; sessions follow the draft programme and may move.
export const speakers = [
  {
    name: 'Dr Funmi Adewara',
    role: 'Convener, NTC · Founder & CEO',
    org: 'Mobihealth International',
    photo: null,
    type: 'Speaker',
    session: 1,
  },
  { name: 'Dr Mories Atoki', role: 'Chief Executive Officer', org: 'ABCHealth', photo: null, type: 'Moderator', session: 2 },
  { name: 'Mr Dauda Majanbu', role: 'Country Lead, Nigeria', org: 'VillageReach', photo: null, type: 'Speaker', session: 2 },
  { name: 'Dr Uchenna Igbokwe', role: 'Executive Director & CEO', org: 'SCIDaR', photo: null, type: 'Speaker', session: 3 },
  {
    name: 'Dr Olufunke Fasawe',
    role: 'Country Director, Nigeria',
    org: 'Clinton Health Access Initiative',
    photo: null,
    type: 'Speaker',
    session: 4,
  },
  { name: 'Dr Abiola Oshunniyi', role: 'Head, Project Management Office', org: 'NCDC', photo: null, type: 'Speaker' },
];

export const topics = [
  'National Telemedicine Guidelines',
  'NHIA reimbursement & health insurance',
  'Digital health policy & legislation',
  'AI governance, interoperability & data protection',
  'Financing & investment',
  'Primary healthcare integration',
  'Education & workforce capacity',
];

export const audiences = [
  'Government',
  'Development partners',
  'Healthcare organisations',
  'Technology companies',
  'Financial institutions',
  'Telecoms companies',
  'Investors',
  'Universities',
  'Innovators',
];

export const faqs = [
  {
    q: 'Can I attend online?',
    a: 'Yes. NTC 2.0 is hybrid. The Virtual ticket (₦15,000) gives you the full conference programme online, and you can put questions to the panels.',
  },
  {
    q: 'Is the Awards Night included in my ticket?',
    a: 'Only with the Conference + Awards Night ticket. The Gala runs from 7:00 PM to 11:00 PM on the same day.',
  },
  {
    q: 'What time zone are the times in?',
    a: 'All times are West Africa Time (WAT, UTC+1), Abuja local time.',
  },
  {
    q: 'How do I sponsor, exhibit or advertise?',
    a: 'Email ntc@mobihealthinternational.com with your organisation and what you have in mind, and the team will send the options.',
  },
  {
    q: 'Who do I contact about my ticket?',
    a: 'Email support@mobihealthinternational.com or call +234 911 000 0557.',
  },
];

// Partners. Add a logo by dropping the file in public/partners/ and adding
// { name, logo: '/partners/file.svg', url } to the right tier. Empty tiers are hidden;
// while every tier is empty, the page shows the open partnership tiers instead.
// Tier names follow the NTC 2.0 brand guide; confirm them with the organisers.
export const partners = {
  convener: { name: 'Mobihealth International', logo: '/media/logos/mobihealth.png', role: 'Convener' },
  // Co-convener as shown on the team's portal; confirm with the organisers.
  coConveners: [
    { name: 'Society for Telemedicine and eHealth in Nigeria (SfTeHIN)', logo: '/media/logos/sftehin.png', role: 'Co-convener' },
  ],
  tiers: [
    { id: 'platinum', label: 'Platinum', blurb: 'Headline partner', logos: [] },
    { id: 'gold', label: 'Gold', blurb: 'Partner', logos: [] },
    { id: 'silver', label: 'Silver', blurb: 'Supporting partner', logos: [] },
    { id: 'exhibition', label: 'Exhibition partners', logos: [] },
    { id: 'media', label: 'Media partners', logos: [] },
  ],
};

// Brand moments across the day, taken from the Programme draft v2.
export const partnerMoments = [
  { time: '7:30 AM', title: 'Exhibition & Innovation Hub', text: 'A stand in the hub that opens at registration and runs through the day.' },
  { time: '9:00 AM', title: 'Goodwill message', text: 'A short message from your organisation during the Opening.' },
  { time: '1:00 PM', title: 'Sponsor meetings', text: 'Time with delegates and decision-makers over the networking lunch.' },
  { time: '4:50 PM', title: 'Innovation Showcase', text: 'A callout for exhibitors alongside the startups and student finalists.' },
  { time: '5:17 PM', title: 'Partnership announcements', text: 'Announce a commitment on stage at the closing plenary.' },
  { time: '7:00 PM', title: 'Gala & Awards Night', text: 'Sponsor an award category and be recognised at the gala dinner.' },
];

// one patient's connected journey (click = digital, brick = physical)
export const journey = [
  { kind: 'brick', title: 'Community', text: 'Care starts where people live: the market, the school, the street.' },
  { kind: 'brick', title: 'Primary health centre', text: 'The first point of care, a short walk from home.' },
  { kind: 'click', title: 'Teleconsultation', text: 'A doctor on screen, from anywhere in the country.' },
  { kind: 'both', title: 'Diagnostics', text: 'Tests done locally, results shared with the doctor digitally.' },
  { kind: 'click', title: 'Specialist care', text: 'The right specialist, without the long journey.' },
  { kind: 'brick', title: 'Referral', text: 'When a hospital is needed, the hand-off is ready.' },
  { kind: 'click', title: 'Follow-up', text: 'Check-ins and prescriptions by phone, so care continues at home.' },
];

export const reels = [
  {
    shape: 'wide', w: 960, h: 540,
    src: '/media/reels/ntc-pictures-reel-2.mp4', poster: '/media/reels/ntc-pictures-reel-2.webp',
    title: 'NTC 2025', caption: 'A national meeting on scaling telehealth across Nigeria.',
  },
  {
    shape: 'wide', w: 960, h: 540,
    src: '/media/reels/ntc-past-works-reel.mp4', poster: '/media/reels/ntc-past-works-reel.webp',
    title: 'In the community', caption: 'Mobihealth telehealth outreach, Bariga, Lagos.',
  },
  {
    shape: 'tall', w: 480, h: 854,
    src: '/media/reels/ntc-pictures-reel-1.mp4', poster: '/media/reels/ntc-pictures-reel-1.webp',
    title: 'NTC 2025 speakers', caption: 'Voices from the first conference.',
  },
];

