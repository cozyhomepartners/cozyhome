// Local landing pages: one per city, served at /we-buy-houses/:slug.
// Each targets "we buy houses <city>" / "cash home buyers <city>" /
// "sell my house fast <city>" searches.
export interface City {
  slug: string;
  name: string;
  state: 'MO' | 'KS';
  stateName: 'Missouri' | 'Kansas';
  county: string;
  /** One or two sentences that make this page about this place, not a template. */
  local: string;
  nearby: string[]; // slugs
}

export const CITIES: City[] = [
  {
    slug: 'kansas-city-mo',
    name: 'Kansas City',
    state: 'MO',
    stateName: 'Missouri',
    county: 'Jackson County',
    local:
      'From older homes near downtown and Midtown to post-war houses in the Northland and South KC, we buy across every part of Kansas City, Missouri, in any condition.',
    nearby: ['kansas-city-ks', 'raytown-mo', 'independence-mo', 'grandview-mo', 'gladstone-mo'],
  },
  {
    slug: 'kansas-city-ks',
    name: 'Kansas City',
    state: 'KS',
    stateName: 'Kansas',
    county: 'Wyandotte County',
    local:
      'We buy houses throughout Kansas City, Kansas and the rest of Wyandotte County, including older homes that need more work than a retail buyer will take on.',
    nearby: ['kansas-city-mo', 'shawnee-ks', 'overland-park-ks', 'parkville-mo'],
  },
  {
    slug: 'overland-park-ks',
    name: 'Overland Park',
    state: 'KS',
    stateName: 'Kansas',
    county: 'Johnson County',
    local:
      'Overland Park homes often sell well on the open market. We are the option for owners who would rather skip months of showings, repairs and buyer financing risk.',
    nearby: ['olathe-ks', 'lenexa-ks', 'leawood-ks', 'prairie-village-ks', 'shawnee-ks'],
  },
  {
    slug: 'olathe-ks',
    name: 'Olathe',
    state: 'KS',
    stateName: 'Kansas',
    county: 'Johnson County',
    local:
      'Whether it is a starter home you have outgrown or a rental you are done managing, we make cash offers on houses all over Olathe, the Johnson County seat.',
    nearby: ['lenexa-ks', 'overland-park-ks', 'shawnee-ks', 'leawood-ks'],
  },
  {
    slug: 'lenexa-ks',
    name: 'Lenexa',
    state: 'KS',
    stateName: 'Kansas',
    county: 'Johnson County',
    local:
      'We buy Lenexa houses as-is, so dated finishes, deferred maintenance or a full basement are not a reason to wait to sell.',
    nearby: ['shawnee-ks', 'olathe-ks', 'overland-park-ks', 'kansas-city-ks'],
  },
  {
    slug: 'shawnee-ks',
    name: 'Shawnee',
    state: 'KS',
    stateName: 'Kansas',
    county: 'Johnson County',
    local:
      'Selling a house in Shawnee without listing it is simple with us: one private visit, a written cash offer within 24 hours, and a closing date you choose.',
    nearby: ['lenexa-ks', 'kansas-city-ks', 'overland-park-ks', 'olathe-ks'],
  },
  {
    slug: 'prairie-village-ks',
    name: 'Prairie Village',
    state: 'KS',
    stateName: 'Kansas',
    county: 'Johnson County',
    local:
      'Many Prairie Village homes date back to the mid-century. If yours needs updates you do not want to make, we will buy it the way it is.',
    nearby: ['leawood-ks', 'overland-park-ks', 'kansas-city-mo', 'shawnee-ks'],
  },
  {
    slug: 'leawood-ks',
    name: 'Leawood',
    state: 'KS',
    stateName: 'Kansas',
    county: 'Johnson County',
    local:
      'For Leawood owners who value privacy and a predictable timeline, we offer a direct sale with no open houses and no buyer financing to fall through.',
    nearby: ['prairie-village-ks', 'overland-park-ks', 'olathe-ks', 'kansas-city-mo'],
  },
  {
    slug: 'independence-mo',
    name: 'Independence',
    state: 'MO',
    stateName: 'Missouri',
    county: 'Jackson County',
    local:
      'We buy houses in every Independence neighborhood, including older homes, inherited properties and rentals with tenants still in place.',
    nearby: ['raytown-mo', 'blue-springs-mo', 'kansas-city-mo', 'lees-summit-mo'],
  },
  {
    slug: 'lees-summit-mo',
    name: "Lee's Summit",
    state: 'MO',
    stateName: 'Missouri',
    county: 'Jackson County',
    local:
      "Relocating, downsizing or settling an estate in Lee's Summit? We give you a fair cash number fast so you can plan around a firm closing date.",
    nearby: ['blue-springs-mo', 'raytown-mo', 'independence-mo', 'belton-mo'],
  },
  {
    slug: 'blue-springs-mo',
    name: 'Blue Springs',
    state: 'MO',
    stateName: 'Missouri',
    county: 'Jackson County',
    local:
      'Blue Springs sellers can skip the repairs, staging and showings entirely. We buy as-is and pay the closing costs.',
    nearby: ['lees-summit-mo', 'independence-mo', 'raytown-mo'],
  },
  {
    slug: 'raytown-mo',
    name: 'Raytown',
    state: 'MO',
    stateName: 'Missouri',
    county: 'Jackson County',
    local:
      'We are active cash home buyers in Raytown and make offers on houses that need anything from a little paint to a full renovation.',
    nearby: ['kansas-city-mo', 'independence-mo', 'lees-summit-mo', 'grandview-mo'],
  },
  {
    slug: 'grandview-mo',
    name: 'Grandview',
    state: 'MO',
    stateName: 'Missouri',
    county: 'Jackson County',
    local:
      'Selling a Grandview house fast for cash means no commissions, no repairs and a closing in as little as seven days.',
    nearby: ['raytown-mo', 'belton-mo', 'kansas-city-mo', 'lees-summit-mo'],
  },
  {
    slug: 'liberty-mo',
    name: 'Liberty',
    state: 'MO',
    stateName: 'Missouri',
    county: 'Clay County',
    local:
      'We buy houses for cash in Liberty, the Clay County seat, and throughout the Northland, on your timeline and in any condition.',
    nearby: ['gladstone-mo', 'kansas-city-mo', 'parkville-mo'],
  },
  {
    slug: 'gladstone-mo',
    name: 'Gladstone',
    state: 'MO',
    stateName: 'Missouri',
    county: 'Clay County',
    local:
      'Gladstone homeowners can get a written cash offer within 24 hours of one short visit, with no obligation to accept it.',
    nearby: ['liberty-mo', 'kansas-city-mo', 'parkville-mo'],
  },
  {
    slug: 'parkville-mo',
    name: 'Parkville',
    state: 'MO',
    stateName: 'Missouri',
    county: 'Platte County',
    local:
      'We buy houses across Parkville and the rest of Platte County, from older homes near the river to newer builds that just need a fast, certain sale.',
    nearby: ['gladstone-mo', 'kansas-city-mo', 'liberty-mo', 'kansas-city-ks'],
  },
  {
    slug: 'belton-mo',
    name: 'Belton',
    state: 'MO',
    stateName: 'Missouri',
    county: 'Cass County',
    local:
      'In Belton and across Cass County we buy houses as-is for cash, so you can sell without fixing, cleaning or listing.',
    nearby: ['grandview-mo', 'harrisonville-mo', 'lees-summit-mo', 'raytown-mo'],
  },
  {
    slug: 'harrisonville-mo',
    name: 'Harrisonville',
    state: 'MO',
    stateName: 'Missouri',
    county: 'Cass County',
    local:
      'Harrisonville and rural Cass County properties are welcome too. We make fair cash offers on houses that are hard to sell the traditional way.',
    nearby: ['belton-mo', 'lees-summit-mo', 'grandview-mo'],
  },
];

export const cityBySlug = (slug: string | undefined) => CITIES.find((c) => c.slug === slug);
export const cityLabel = (c: City) => `${c.name}, ${c.state}`;
