export const content = {
  meta: {
    name: "Jeremy Hua",
    email: "jeremy.hua@queensu.ca",
    location: "Toronto, CA",
    title: "Jeremy Hua — systems, behavior, and how companies move",
    description: "Notes on behavior, consumer vs internal systems, Toronto.",
  },

  hero: {
    headline: "Systems, behavior, and how things actually move.",
    cta: "Say hi",
  },

  tension: {
    line1: "Companies obsess over customer experience.",
    line2: "But most of what customers feel\nwas decided long before they showed up.",
  },

  about: {
    heading: "About",
    paragraphs: [
      "I started by looking at how people experience brands: journeys, offers, loyalty.",
      "The friction wasn't where I was looking. It was upstream, in the systems that decide what gets built and how fast anything can move.",
      "At WestJet and Tim Hortons, the surface looks simple. A seat, a coffee, a reward. But the real story lives in coordination, constraints, and tradeoffs.",
    ],
  },

  alsoMe: {
    heading: "Also me",
    note: "Each chip links to a story below.",
    chips: [
      { label: "Led a Scottish marching band", anchor: "proof-band" },
      { label: "Ultra marathons", anchor: "proof-ultra" },
      { label: "Granola hobbies", anchor: "proof-hobbies" },
      { label: "Travel", anchor: "proof-travel" },
    ],
  },

  notes: {
    heading: "Notes",
    subhead:
      "Short observations on systems, incentives, and the gap between what companies say and how they run.",
    items: [
      {
        title: "Rewards apps are behavior machines",
        body: "A rewards program isn't just points. It's a closed loop designed to shape frequency, habit formation, and perceived value. The best ones make the user feel smart for participating. The worst ones just discount the brand.",
      },
      {
        title: "Effort isn't the constraint",
        body: "People work hard and still move slowly when the system punishes coordination. The bottleneck is rarely talent. It's how decisions travel through an org. Leverage matters more than hours.",
      },
      {
        title: "Misalignment doesn't look like conflict",
        body: "It looks like progress, slightly in the wrong direction. Teams ship confidently while drifting apart. Drift looks peaceful until it shows up as rework, missed quarters, or features nobody asked for.",
      },
      {
        title: "Internal tools shape customer experience",
        body: "The CRM, the dashboard, the ops workflow nobody redesigned since 2019. These invisible systems decide what frontline teams can actually do. Customers feel internal friction even when they can't name it.",
      },
    ],
  },

  experience: {
    heading: "Where I've spent real time",
    subhead:
      "Context I can stand behind.",
    items: [
      {
        company: "Tim Hortons",
        status: "Current",
        role: "Loyalty program, 3.5M+ active users. Spend most of my time in behavioral data and offer pipelines. Once caught an issue affecting 50K daily redemptions that had gone unnoticed.",
        description:
          "Consumer-scale systems: how digital touchpoints interact with operations, habits, and incentives.",
        links: [
          { label: "Tims Rewards", url: "https://www.timhortons.com/timsrewards" },
        ],
        proofLink: "#proof-work",
      },
      {
        company: "WestJet",
        status: "Prior",
        role: "Helped coordinate 30+ initiatives and an 80-stakeholder loyalty program rebuild. Mostly learned how slowly large organizations move, and why.",
        description:
          "Networked travel, where customer experience meets operational reality at scale.",
        links: [
          { label: "UltraBasic", url: "https://www.westjet.com/en-ca/news/2024/westjet-introduces-ultrabasic-" },
          { label: "WestJet Rewards", url: "https://www.westjet.com/en-ca/rewards/new-westjet-rewards" },
        ],
        proofLink: "#proof-work",
      },
    ],
  },

  proof: {
    heading: "Stories & proof",
    subhead:
      "Work first, then the personal stuff.",
    work: {
      title: "Same problem, different surface",
      body: "Tim Hortons and WestJet look different. They're the same problem.\n\nA simple surface on top of a system full of tradeoffs: data, operations, incentives, timing.",
    },
    stories: [
      {
        id: "proof-band",
        tag: "Leadership",
        title: "When the room is loud on purpose",
        intro:
          "A pipe band isn't subtle. You learn that volume can be precise, and that leadership is sometimes just keeping tempo honest.",
        body: "Leading a marching band is theatre and logistics at once. You set standards, rehearse the boring parts, and trust people to hold the line when it counts.\n\nAlignment isn't a slide. It's what happens when dozens of people interpret the same beat.",
        closer: "Tempo is alignment you can hear.",
        stat: "100+",
        statLabel: "musicians led",
        imageCount: 2,
      },
      {
        id: "proof-ultra",
        tag: "Endurance",
        title: "Ultras as a feedback system",
        intro:
          "Long races are blunt: you can't negotiate with distance.",
        body: "Plans collide with weather, stomachs, and sleep debt. The useful skill isn't toughness. It's noticing early when the system is sending a signal you should obey.\n\nMost 'performance problems' are feedback problems, easier to ignore in an office than at mile 40.",
        closer: "Endurance isn't pushing harder. It's listening sooner.",
        stat: "3,000+",
        statLabel: "km in 2 years",
        imageCount: 2,
      },
      {
        id: "proof-hobbies",
        tag: "Play",
        title: "Granola hobbies",
        intro:
          "Courts, trails, ice, water, tables. Different rules, same appetite for repetition.",
        body: "Skiing, basketball, ultimate, track, table tennis, hockey, surfing, pool. They taught me timing, space, and the gap between intention and execution under pressure.\n\nGames with visible rules, where proof is immediate and humbling.\n\nI also got curious about social media — wanted to understand how attention works. Posted 200 times, amassed 7M+ views. Learned the algorithm is its own system with its own physics.",
        stat: "7M+",
        statLabel: "views · 200 posts",
        imageCount: 2,
      },
      {
        id: "proof-travel",
        tag: "Perspective",
        title: "New defaults",
        intro:
          "Travel swaps your defaults: time, space, what counts as normal.",
        body: "I'm drawn to places where the infrastructure is different enough that you stop autopiloting. That's where you notice how much of 'common sense' is just local habit.",
        closer: "Most \"obvious\" things are just local agreements.",
        stat: "53",
        statLabel: "countries · 30 in 3 months",
        imageCount: 2,
      },
    ],
  },

  howIThink: {
    heading: "How I think",
    subhead: "More habit than framework.",
    steps: [
      "Observe behavior. Ignore stated intent.",
      "Map the system: decisions, data, constraints.",
      "Find friction, where things slow or distort.",
      "Name tradeoffs. Every fix moves the pain.",
      "Find leverage. Small changes, outsized effects.",
    ],
  },

  offTheClock: {
    heading: "Off the clock",
    body: `Band, ultras, granola hobbies, airports. I cut my own hair, mix my own electrolytes, and read constantly. Repetition is where you learn how systems behave when nobody's watching.`,
  },

  transitions: {
    beforeProof: "So where does this show up?",
    beforePersonal: "Not just how I work, but how I see everything.",
    beforeMethod: "A way of seeing becomes a way of working.",
  },

  contact: {
    heading: "Contact",
    body: "If you're thinking about systems, incentives, or how things actually move,\nlet's talk.",
    cta: "Get in touch",
  },
} as const;
