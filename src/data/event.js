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
  { time: '9:00', end: '10:30', title: 'Opening: welcome, special address and keynote', session: 1 },
  { time: '10:30', end: '11:00', title: 'Tea break & exhibition tour', kind: 'break' },
  {
    time: '11:00',
    end: '12:00',
    title: 'High-Level Leadership Panel',
    sub: 'From policy to nationwide implementation',
    session: 2,
  },
  {
    time: '12:00',
    end: '1:00',
    title: 'Fireside Chat 1: From Policy to Nationwide Implementation',
    sub: 'Policy deep dive on the National Telemedicine Guidelines and the Digital Health Bill',
    session: 3,
  },
  { time: '1:00', end: '2:00', title: 'Networking lunch', kind: 'break' },
  {
    time: '2:00',
    end: '3:00',
    title: 'Fireside Chat 2: Financing & Incentivisation',
    sub: 'Who pays for telehealth today, and who pays in three years',
    session: 4,
  },
  {
    time: '3:00',
    end: '4:00',
    title: 'Fireside Chat 3: Driving Adoption Through Community Sensitisation',
    sub: 'Markets, pharmacies, faith leaders and local government',
    session: 5,
  },
  {
    time: '4:00',
    end: '5:00',
    title: 'Youth Forum & Innovation Showcase',
    sub: 'Including the Student Innovation Challenge finals',
    session: '6–7',
  },
  {
    time: '5:00',
    end: '5:30',
    title: 'Closing plenary: the Abuja Declaration on Telehealth',
    session: 8,
  },
  { time: '7:00', end: '11:00', title: 'NTC 2.0 Gala & Awards Night', kind: 'gala' },
];

// Only people marked "Confirmed" on the speaker tracker. Verify before each deploy.
export const speakers = [
  {
    name: 'Dr Funmi Adewara',
    role: 'Convener, NTC · Founder & CEO',
    org: 'Mobihealth International',
    photo: null,
  },
  { name: 'Dr Mories Atoki', role: 'Chief Executive Officer', org: 'ABCHealth', photo: null, tag: 'Moderator' },
  { name: 'Dr Olufunke Fasawe', role: 'Country Director, Nigeria', org: 'Clinton Health Access Initiative', photo: null },
  { name: 'Dr Uchenna Igbokwe', role: 'Executive Director & CEO', org: 'SCIDaR', photo: null },
  { name: 'Mr Dauda Majanbu', role: 'Country Lead, Nigeria', org: 'VillageReach', photo: null },
  { name: 'Dr Abiola Oshunniyi', role: 'Head, Project Management Office', org: 'NCDC', photo: null },
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
