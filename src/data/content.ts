export const content = {
  meta: {
    name: "Jeremy Hua",
    email: "jeremy.hua@queensu.ca",
    location: "Toronto, Canada",
    title: "Jeremy Hua — systems, behavior, and how companies move",
    description: "Notes on behavior, consumer vs internal systems, Toronto.",
  },

  hero: {
    eyebrow: "Thinking in systems",
    headline: "Most friction isn't in the experience.",
    headlineLine2: "It's in the system that decides what the experience can be.",
    subhead:
      "I'm interested in how decisions actually get made—\nwhat creates momentum, and what quietly kills it.",
    currentStatus: "Currently: studying how rewards programs quietly train behavior at Tim Hortons",
    currentDetail:
      "Not just points—but timing, frequency, and what the system teaches people to value.",
    signature: "Systems before distance",
    signatureNote:
      "The long run isn't about pushing harder—it's about removing what makes you stop. Get the system right, and the distance takes care of itself.",
    cta: "Get in touch",
  },

  tension: {
    line1: "Companies obsess over customer experience.",
    line2: "But most of what customers feel\nwas decided long before they showed up.",
  },

  about: {
    heading: "About",
    paragraphs: [
      "I started by looking at the surface—\nhow people experience brands, offers, journeys.",
      "Then something didn't add up.",
      "The friction wasn't where I was looking.",
      "It was upstream—in the systems that decide what gets built, what gets prioritized, and how fast anything can move.",
      "At WestJet and now Tim Hortons, I've seen the same pattern at different scales: the surface looks simple—a seat, a coffee, a reward—but the real story lives in coordination, constraints, and tradeoffs.",
    ],
  },

  alsoMe: {
    heading: "Also me",
    note: "Each chip jumps to a story in Proof. Work context lives in Proof too—see the section below Notes.",
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
      "Short observations—mostly about systems, incentives, and the gap between what companies say and how they actually run.",
    items: [
      {
        title: "From the front stage to the back office",
        body: "I started by looking at how people experience brands—journeys, offers, loyalty. The more I looked, the more I noticed the real constraints were upstream: data, governance, incentives, and the way decisions travel.",
      },
      {
        title: "Rewards apps are behavior machines",
        body: "A rewards program isn't just points. It's a loop: frequency, habit, and the design of tradeoffs. The interesting questions are what the system optimizes for—and what it quietly ignores.",
      },
      {
        title: "Airlines sell seats",
        body: "But they run on networks, crews, and constraints that customers never see—and constantly feel. Customer-facing fixes often collide with realities that never show up in a deck.",
      },
      {
        title: "Effort isn't the constraint. The system is.",
        body: "People can work hard and still move slowly when the system punishes coordination. Discipline matters, but leverage matters more—where a small change unlocks a big outcome.",
      },
      {
        title: "Misalignment doesn't look like conflict",
        body: "It looks like progress—slightly in the wrong direction. When every team uses different definitions of success, you don't get friction—you get drift. Drift looks peaceful until it shows up as rework, latency, and missed windows.",
      },
    ],
  },

  experience: {
    heading: "Where I've spent real time",
    subhead:
      "Not a logo wall—context I can stand behind. The write-up underneath is the same story you'll find in Proof (systems, scale, and what guests don't see).",
    items: [
      {
        company: "Tim Hortons",
        status: "Current",
        description:
          "Consumer-scale systems and how digital touchpoints interact with operations, habits, and incentives.",
        proofLink: "#proof-work",
      },
      {
        company: "WestJet",
        status: "Prior",
        description:
          "Networked travel businesses—where customer experience meets operational reality at scale.",
        proofLink: "#proof-work",
      },
    ],
  },

  proof: {
    heading: "Stories & proof",
    subhead:
      "Work first (so the logos above land somewhere real), then the personal chips—swap in photos and sharper anecdotes whenever you want.",
    work: {
      title: "Same problem, different surface",
      body: "Tim Hortons and WestJet look different. They're the same problem.\n\nA simple surface, sitting on top of a system full of tradeoffs: data, operations, incentives, and timing.\n\nThat's the layer I keep coming back to.",
    },
    stories: [
      {
        id: "proof-band",
        tag: "Leadership",
        title: "When the room is loud on purpose",
        intro:
          "A Scottish pipe band isn't subtle. You learn that volume can be precise—and that leadership is sometimes just keeping tempo honest.",
        body: "Leading a marching band is a weird mix of theatre and logistics: music, movement, and egos, all moving at once. You can't micromanage your way through it—you set standards, rehearse the boring parts, and trust people to hold the line when the crowd is watching.\n\nI keep coming back to that when I think about organizations: alignment isn't a slide; it's what happens when dozens of people interpret the same beat.",
        closer: "Tempo is alignment you can hear.",
        imageCount: 2,
      },
      {
        id: "proof-ultra",
        tag: "Endurance",
        title: "Ultras as a feedback system",
        intro:
          "Long races are a blunt instrument: you can't negotiate with distance. You can only adjust cadence, fuel, and ego.",
        body: "Ultramarathons strip the story down. Plans collide with weather, stomachs, and sleep debt. The useful skill isn't toughness theater—it's noticing early when the system (your body, your day) is sending a signal you should obey.\n\nThat's the parallel I care about: most 'performance problems' are feedback problems—just easier to ignore in an office than at mile 40.",
        closer: "Endurance isn't about pushing harder. It's about listening sooner.",
        imageCount: 2,
      },
      {
        id: "proof-hobbies",
        tag: "Play",
        title: "Granola hobbies",
        intro:
          "Growing up, a lot of my life was filed under courts, trails, ice, water, and tables—different rules, same appetite for repetition.",
        body: "Skiing, basketball, ultimate, track, table tennis, hockey, surfing, pool: I spent real time in these—not as a tourist. They taught me different versions of the same thing: timing, space, teammates, and the gap between what you intend and what your body does under pressure.\n\nI don't live in every one of these every week now, but I still come back when I can. They're the counterweight to the abstract stuff—games with visible rules, where proof is immediate and a little humbling.",
        imageCount: 2,
      },
      {
        id: "proof-travel",
        tag: "Perspective",
        title: "New defaults",
        intro:
          "Travel doesn't make you wise—but it does swap your defaults: time, space, what counts as normal.",
        body: "I'm drawn to places where the infrastructure is different enough that you stop autopiloting. That's often where you notice how much of 'common sense' is just local habit.\n\nIt's the same reason I like big complex employers: the world looks obvious until you see the machinery.",
        closer: "Most \"obvious\" things are just local agreements.",
        imageCount: 2,
      },
    ],
  },

  howIThink: {
    heading: "How I think",
    subhead: "A loose method—more habit than framework.",
    steps: [
      "Observe behavior—ignore stated intent.",
      "Map the system—decisions, data, constraints.",
      "Find friction—where things slow or distort.",
      "Name tradeoffs—every fix moves the pain.",
      "Find leverage—small changes, outsized effects.",
    ],
  },

  offTheClock: {
    heading: "Off the clock",
    body: `The "Also me" row is the quick version—band, ultras, granola hobbies, airports. I cut my own hair, mix my own electrolytes, and read constantly, because repetition is where you learn how systems behave when nobody's watching.`,
  },

  transitions: {
    beforeProof: "So where does this actually show up?",
    beforePersonal: "This isn't just how I work—it's how I tend to see everything.",
    beforeMethod: "A way of seeing becomes a way of working.",
  },

  contact: {
    heading: "Contact",
    body: "If you're thinking about systems, incentives, or how things actually move—\nwe'll probably have something to talk about.",
    cta: "Get in touch",
  },
} as const;
