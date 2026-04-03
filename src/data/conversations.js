export const CONVERSATIONS = {
  language: [
    {
      prompts: ["How do I say 'Hello, how are you?' in Chickasaw?", "Teach me a greeting"],
      response: {
        text: `**Chokma! (jók-mah)**\n\nThis is the Chickasaw word for "Hello" — it conveys well-being and goodwill.\n\nTo say **"Hello, how are you?"**:\n\n**Chokma, chinchokma?**\n*(jók-mah, chin-jók-mah)*\n\nLiteral meaning: "Good, are you good?"\n\nThe response would be:\n**Achokma, chinchokma?**\n*(ah-jók-mah, chin-jók-mah)*\n"I am good, are you good?"`,
        phrases: [
          { chickasaw: "Chokma", english: "Hello / It is good", pronunciation: "jók-mah" },
          { chickasaw: "Chinchokma?", english: "How are you?", pronunciation: "chin-jók-mah" },
          { chickasaw: "Achokma", english: "I am good/well", pronunciation: "ah-jók-mah" },
          { chickasaw: "Yakoke", english: "Thank you", pronunciation: "yah-kó-ki" },
        ],
      },
    },
    {
      prompts: ["How do I count in Chickasaw?", "Numbers in Chikashshanompa'"],
      response: {
        text: `**Chickasaw Numbers — Holhtina'**\n\nThe Chickasaw number system is base-ten:\n\n**1** — Chaffa *(CHAHF-fah)*\n**2** — Toklo *(TOHK-loh)*\n**3** — Tochchí'na *(tohch-CHEE-nah)*\n**4** — Oshta' *(OHSH-tah)*\n**5** — Talhlhá'pi *(tahl-HLAH-pee)*\n\nThe word for ten is **Pokkó'li** *(pohk-KOH-lee)*.\n\nWould you like to practice counting?`,
        phrases: [
          { chickasaw: "Chaffa", english: "One", pronunciation: "CHAHF-fah" },
          { chickasaw: "Toklo", english: "Two", pronunciation: "TOHK-loh" },
          { chickasaw: "Tochchí'na", english: "Three", pronunciation: "tohch-CHEE-nah" },
          { chickasaw: "Oshta'", english: "Four", pronunciation: "OHSH-tah" },
          { chickasaw: "Talhlhá'pi", english: "Five", pronunciation: "tahl-HLAH-pee" },
        ],
      },
    },
  ],
  health: [
    {
      prompts: ["What are my health screening recommendations?", "Show my health dashboard"],
      response: {
        text: `**Your Preventive Care Summary**\n\nThe CFM Health Intelligence module recommends:\n\n**Priority — Schedule This Quarter:**\n• Annual comprehensive blood panel — Overdue by 2 months\n• Blood pressure monitoring — Last: 128/82, recheck in 30 days\n\n**Upcoming — Next 6 Months:**\n• A1C / Diabetes screening — September 2025\n• Cardiovascular risk assessment\n\n**On Track:**\n• Vision screening — Completed March 2025\n• Dental exam — Scheduled July 2025\n\nAll records on sovereign infrastructure via Trace Fiber.`,
      },
    },
    {
      prompts: ["Show diabetes prevention data", "Community health trends"],
      response: {
        text: `**Community Health Intelligence — Diabetes Prevention**\n\nThe CFM tracks de-identified health trends across consenting citizens.\n\n**Key Findings (Simulated Pilot):**\n\n• Pre-diabetic identification up 340% with AI screening\n• Detection moved from 4.2 years after onset to 1.8 years before symptoms\n• Early intervention: $3,200/patient vs. $47,000 late-stage\n\nRecommendation: Expand from 500 to 2,000 citizens. Projected savings: $8M–$20M annually.\n\nAll data governed by Chickasaw Nation tribal law.`,
        stats: [
          { label: "Early Detection", value: "340%", sub: "increase" },
          { label: "Early Warning", value: "1.8 yrs", sub: "before symptoms" },
          { label: "Cost Savings", value: "93%", sub: "per patient" },
        ],
      },
    },
  ],
  citizen: [
    {
      prompts: ["How do I apply for housing assistance?", "What benefits am I eligible for?"],
      response: {
        text: `**Chickasaw Nation Housing Assistance**\n\nAs an enrolled citizen, you may be eligible for:\n\n**1. Home Loan Program**\nLow-interest loans within the 13-county jurisdiction. Rate: 3.25% fixed.\n\n**2. Down Payment Assistance**\nUp to $15,000 for first-time homebuyers.\n\n**3. Home Repair & Rehabilitation**\nGrants up to $25,000 for owner-occupied homes.\n\n**4. Rental Assistance**\nMonthly support for qualifying citizens.\n\nYour nearest office is in Ada, OK.`,
        actions: ["Start Pre-Qualification", "Find Nearest Office", "Download Application"],
      },
    },
    {
      prompts: ["Help me find education programs", "Scholarship information"],
      response: {
        text: `**Chickasaw Nation Education Programs**\n\n**Higher Education**\n• Education Foundation scholarships — up to $8,000/year\n• Graduate and professional school funding\n• GED completion assistance\n\n**Career Development**\n• Workforce training programs\n• Vocational certifications\n• Professional development grants\n\nYou may qualify for 3 active scholarship programs.`,
        actions: ["Check Eligibility", "View All Programs", "Talk to Advisor"],
      },
    },
  ],
  cultural: [
    {
      prompts: ["Tell me about the Chickasaw removal", "Chickasaw Nation history"],
      response: {
        text: `**The Chickasaw Removal — A Story of Resilience**\n\nForced removal from Mississippi, Alabama, and Tennessee began in the 1830s.\n\n**What Makes the Chickasaw Story Unique:**\n\nUnlike other removed tribes, the Chickasaw Nation *negotiated the sale of their homeland* — refusing to surrender it. They received $3 million and purchased territory from the Choctaw Nation.\n\n**The Chickasaw people were never conquered. They were displaced by policy, but negotiated from strength.**\n\nThe journey was devastating — hundreds died. But the Nation rebuilt with a constitutional government, schools, and a thriving economy.\n\nToday: 80,000+ citizens, enterprises spanning gaming, manufacturing, banking, and technology.\n\n**Unconquered. Unconquerable.**`,
        sources: ["Chickasaw Nation Archives", "Chickasaw.tv", "Dept. of History & Culture"],
      },
    },
    {
      prompts: ["Tell me about Chickasaw clans", "Chickasaw social structure"],
      response: {
        text: `**Iksa — The Chickasaw Clan System**\n\nThe Chickasaw organized society through a matrilineal clan system called **Iksa**. Your clan was your mother's clan.\n\n**Two Moieties:**\n**Imosaktca'** (elder division)\n**Intcukwalipa** (younger division)\n\nClans included:\n• Minko' Iksa — Chief clan\n• Panther, Bird, Fish, Deer, Raccoon\n\nClan identity shaped governance, marriage rules, and social obligations. Understanding Iksa connects citizens with the deep social fabric that sustained Chickasaw society for centuries.\n\nSourced from the Chickasaw Nation Department of History & Culture.`,
        sources: ["Chickasaw Nation Dept. of History & Culture", "Chickasaw Press"],
      },
    },
  ],
};
