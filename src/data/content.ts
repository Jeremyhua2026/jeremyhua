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
    headline: "Most friction lives behind the experience.",
    subhead:
      "I'm interested in how decisions get made—what creates momentum, and what quietly stalls it—especially in the systems companies use to move.",
    signature: "The long run",
    signatureNote:
      "Distance rewards pacing; organizations reward the same kind of patience—if the system allows it.",
    cta: "Get in touch",
  },

  about: {
    heading: "About",
    paragraphs: [
      "Hi. I'm Jeremy.",
      "I've always been interested in how people make decisions—what drives behavior, what creates momentum, and what causes things to stall.",
      "That curiosity started on the surface of the economy. I worked at WestJet and now at Tim Hortons, looking at how large-scale consumer systems operate—from airline networks to one of the most active rewards apps in the country.",
      "Over time, my perspective shifted. Most friction doesn't actually exist in the customer experience. It exists behind the scenes—inside the systems that determine how companies make decisions, allocate resources, and move.",
      "Lately, I've been more interested in those internal systems. The ones that quietly shape what's possible.",
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
        title: "Airlines are networks with human faces",
        body: "An airline sells seats, but it runs on networks, crews, and operational constraints. Customer-facing fixes often collide with realities that never show up in a deck.",
      },
      {
        title: "Effort isn't motivation",
        body: "People can work hard and still move slowly when the system punishes coordination. Discipline matters, but leverage matters more—where a small change unlocks a big outcome.",
      },
      {
        title: "The quiet cost of 'alignment'",
        body: "When every team uses different definitions of success, you don't get conflict—you get drift. Drift looks peaceful until it shows up as rework, latency, and missed windows.",
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
      title: "Systems at national scale",
      body: "Tim Hortons and WestJet are different businesses, but the same kind of puzzle shows up: the guest sees a simple surface—an offer, a seat, a reward—while the real constraints live in data, operations, and how decisions travel. This is the genuine through-line behind both names above—not a pitch, just the layer I keep staring at.",
    },
    stories: [
      {
        id: "proof-band",
        tag: "Leadership",
        title: "When the room is loud on purpose",
        intro:
          "A Scottish pipe band isn't subtle. You learn that volume can be precise—and that leadership is sometimes just keeping tempo honest.",
        body: "Leading a marching band is a weird mix of theatre and logistics: music, movement, and egos, all moving at once. You can't micromanage your way through it—you set standards, rehearse the boring parts, and trust people to hold the line when the crowd is watching.\n\nI keep coming back to that when I think about organizations: alignment isn't a slide; it's what happens when dozens of people interpret the same beat.",
        imageCount: 2,
      },
      {
        id: "proof-ultra",
        tag: "Endurance",
        title: "Ultras as a feedback system",
        intro:
          "Long races are a blunt instrument: you can't negotiate with distance. You can only adjust cadence, fuel, and ego.",
        body: "Ultramarathons strip the story down. Plans collide with weather, stomachs, and sleep debt. The useful skill isn't toughness theater—it's noticing early when the system (your body, your day) is sending a signal you should obey.\n\nThat's the parallel I care about: most 'performance problems' are feedback problems—just easier to ignore in an office than at mile 40.",
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
        imageCount: 2,
      },
    ],
  },

  howIThink: {
    heading: "How I think",
    subhead: "A loose method—more habit than framework.",
    steps: [
      "Observe behavior—what people do, not just what they say.",
      "Map the system—who decides, what information exists, where it breaks.",
      "Find friction—handoffs, incentives, latency, ambiguity.",
      "Name tradeoffs—every fix reallocates pain somewhere else.",
      "Look for leverage—small changes that change the shape of decisions.",
    ],
  },

  offTheClock: {
    heading: "Off the clock",
    body: `The "Also me" row is the quick version—band, ultras, granola hobbies, airports. I cut my own hair, mix my own electrolytes, and read constantly, because repetition is where you learn how systems behave when nobody's watching.`,
  },

  contact: {
    heading: "Contact",
    body: "If something here resonated, I'd love to hear from you.",
    cta: "Get in touch",
  },
} as const;
