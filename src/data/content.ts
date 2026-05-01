export const content = {
  meta: {
    name: "Jeremy Hua",
    email: "jeremy.hua@queensu.ca",
    location: "Toronto, CA",
    title: "Jeremy Hua: systems, behavior, and how companies move",
    description: "Notes on behavior, consumer vs internal systems, Toronto.",
  },

  about: {
    heading: "About",
    paragraphs: [
      "I look for the system underneath the surface.",
      "At WestJet, Tim Hortons, and now Zip, the surface is always simple: a seat, a coffee, a purchase request. The real story is coordination, data, and what actually slows down.",
    ],
  },

  notes: {
    heading: "Notes",
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
      {
        title: "Every domain runs on the same physics",
        body: "A loyalty program, an ultramarathon, a pipe band, a microgreens farm. Different surfaces, same underlying structure. Incentives shape behavior. Coordination determines speed. Feedback tells you when you're wrong. The skill isn't knowing more domains. It's noticing the pattern faster.",
      },
    ],
  },

  experience: {
    heading: "Where I've spent real time",
    subhead: "Context I can stand behind.",
    items: [
      {
        company: "Zip",
        status: "Current",
        role: "Procurement workflow at enterprise scale. Every purchase request touches finance, legal, IT, and ops. The bottleneck is never the budget, it's the coordination getting there.",
        description:
          "Enterprise spend management: intake-to-procure, where internal systems determine what a company can actually buy and how fast.",
        links: [
          { label: "ziphq.com", url: "https://ziphq.com" },
        ],
        proofLink: "#proof-work",
      },
      {
        company: "Tim Hortons",
        status: "Prior",
        role: "Loyalty program, 3.5M+ active users. Spent most of my time in behavioral data and offer pipelines. Once caught an issue affecting 50K daily redemptions that had gone unnoticed.",
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
    heading: "Work & proof",
    subhead:
      "I'm a strategy and operations person who tends to end up inside the systems running consumer and enterprise businesses: loyalty programs, airline products, procurement workflows. The work is usually somewhere between the obvious surface and whatever is actually slowing things down.",
    work: {
      title: "Same problem, different surface",
      body: "A coffee, a seat, a purchase request. Simple on top, full of coordination, data tradeoffs, and misaligned incentives underneath.\n\nThe companies look different. The problem is the same.",
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
        body: "Plans collide with weather, stomachs, and sleep debt. The useful skill isn't toughness. It's noticing early when the system is sending a signal you should obey.\n\nMost performance problems are feedback problems, easier to ignore in an office than at mile 40.",
        closer: "Endurance isn't pushing harder. It's listening sooner.",
        stat: "3,000+",
        statLabel: "km in 2 years",
        imageCount: 2,
      },
      {
        id: "proof-hobbies",
        tag: "Experiments",
        title: "Running experiments",
        intro:
          "Courts, trails, ice, water, tables. Different rules, same appetite for testing things.",
        body: "Skiing, basketball, ultimate, track, table tennis, hockey, surfing, pool. They taught me timing, space, and the gap between intention and execution under pressure.\n\nGames with visible rules, where proof is immediate and humbling.\n\nI built a microgreens farm, small-scale agriculture with fast feedback loops. Seed to harvest in under two weeks. A tiny system where inputs, environment, and timing all compound visibly.\n\nI also got curious about social media, wanted to understand how attention works. Posted 200 times, amassed 7M+ views. The algorithm is its own system with its own physics.",
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
        body: "I'm drawn to places where the infrastructure is different enough that you stop autopiloting. That's where you notice how much of common sense is just local habit.",
        closer: "Most obvious things are just local agreements.",
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

  projects: {
    heading: "Side projects",
    subhead: "Things I build on my own time.",
    items: [
      {
        id: "budget-tracker",
        title: "Budget Tracker",
        description: "Most budgeting tools show you categories. This one shows you patterns, where money actually goes versus where you think it goes. Built because the gap between the two was embarrassing.",
        status: "Building",
        tags: ["Personal finance", "Behavior"],
      },
      {
        id: "risk-calculator",
        title: "Investment Risk Calculator",
        description: "Risk tolerance quizzes ask how you'd feel about losing money. This one asks about your actual situation, income stability, time horizon, existing obligations, and gives a calibrated output, not a personality type.",
        status: "Building",
        tags: ["Investing", "Decision tools"],
      },
    ],
  },

  synthesis: {
    heading: "The through-line",
    paragraphs: [
      "Every domain I've spent real time in runs on the same physics: loyalty programs, ultramarathons, pipe bands, algorithms. Incentives shape behavior. Coordination determines speed. Feedback tells you when you're wrong, if you're listening.",
      "What changes is the surface. What stays the same is the system.",
      "That's the question I keep asking: not what is this, but how does it actually work, and where does it slow down?",
    ],
    closer: "The question travels.",
  },

  contact: {
    heading: "Contact",
    body: "If you're building something and want to think through the system underneath it, or if something I've written or worked on is relevant to what you're doing, I'm reachable.",
    cta: "Get in touch",
  },
} as const;
