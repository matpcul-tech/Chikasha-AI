export const DEMO_CONVERSATIONS = {
  language: [
    {
      prompts: [
        "How do I say 'Hello, how are you?' in Chickasaw?",
        "Teach me a greeting in Chikashshanompa'",
        "Translate 'good morning' to Chickasaw",
      ],
      response: {
        text: `Chokma! (jók-mah)

This is the Chickasaw word for "Hello."

To say "Hello, how are you?" you can use:

Chokma, chinchokma?
(jók-mah, chin-jók-mah)

A response would be:

Achokma.
(ah-jók-mah)`,
        audio: true,
        phrases: [
          { chickasaw: "Chokma", english: "Hello / It is good", pronunciation: "jók-mah" },
          { chickasaw: "Chinchokma?", english: "How are you?", pronunciation: "chin-jók-mah" },
          { chickasaw: "Achokma", english: "I am good/well", pronunciation: "ah-jók-mah" },
          { chickasaw: "Yakoke", english: "Thank you", pronunciation: "yah-kó-ki" },
        ],
      },
    },
  ],
  health: [
    {
      prompts: [
        "What preventive care should I get?",
        "Show my health dashboard",
      ],
      response: {
        text: `Your Preventive Care Summary

Recommended:
• Annual blood panel
• Blood pressure monitoring
• Diabetes screening
• Vision screening

All records remain on Nation-controlled infrastructure.`,
        dashboard: true,
      },
    },
  ],
  citizen: [
    {
      prompts: [
        "How do I apply for housing assistance?",
        "What benefits am I eligible for?",
      ],
      response: {
        text: `Chickasaw Nation Housing Assistance

Available programs may include:
1. Home Loan Program
2. Down Payment Assistance
3. Home Repair & Rehabilitation
4. Rental Assistance`,
        actions: ["Start Pre-Qualification", "Find Nearest Office", "Download Application"],
      },
    },
  ],
  cultural: [
    {
      prompts: [
        "Tell me about Chickasaw history",
        "Show cultural knowledge content",
      ],
      response: {
        text: `The Chickasaw Nation has a rich history, strong governance traditions, and a deep commitment to language and cultural preservation.`,
      },
    },
  ],
}
    },
  ],
  health: [
    {
      prompts: [
        "What are my health screening recommendations?",
        "What preventive care should I get?",
        "Show my health dashboard",
      ],
      response: {
        text: `**Your Preventive Care Summary**\n\nBased on your age group and health profile, the CFM Health Intelligence module recommends the following screenings through the Chickasaw Nation Medical Center:\n\n**Priority — Schedule This Quarter:**\n• Annual comprehensive blood panel — Due: Overdue by 2 months\n• Blood pressure monitoring — Last: 128/82 — Borderline, recheck in 30 days\n\n**Upcoming — Next 6 Months:**\n• A1C / Diabetes screening — Scheduled: September 2025\n• Cardiovascular risk assessment\n\n**Annual — On Track:**\n• Vision screening — Completed March 2025\n• Dental exam — Scheduled July 2025\n\nAll records stored on Chickasaw Nation sovereign infrastructure via Trace Fiber. No data leaves Nation-controlled systems.`,
        dashboard: true,
      },
    },
    {
      prompts: [
        "Show diabetes prevention data for our community",
        "What are the diabetes statistics?",
        "Community health trends",
      ],
      response: {
        text: `**Community Health Intelligence — Diabetes Prevention**\n\nThe CFM tracks de-identified, aggregate health trends across consenting citizens to enable early intervention.\n\n**Key Findings (Simulated Pilot Data):**\n\n• Pre-diabetic identification rate increased 340% with AI-assisted screening vs. traditional methods\n• Average detection moved from 4.2 years after onset to 1.8 years before clinical symptoms\n• Cost per early intervention: $3,200/patient vs. $47,000/patient for late-stage management\n\nRecommendation: Expand pilot screening cohort from 500 to 2,000 citizens in Year 2. Projected cost avoidance: $8M–$20M annually.\n\nAll data governed by Chickasaw Nation tribal law. Zero data shared with federal databases without explicit Nation consent.`,
        stats: [
          { label: "Early Detection Rate", value: "340%", sub: "increase" },
          { label: "Avg. Early Warning", value: "1.8 yrs", sub: "before symptoms" },
          { label: "Cost Savings", value: "93%", sub: "per patient" },
        ],
      },
    },
  ],
  citizen: [
    {
      prompts: [
        "How do I apply for housing assistance?",
        "What benefits am I eligible for?",
        "Help with my benefits application",
      ],
      response: {
        text: `**Chickasaw Nation Housing Assistance**\n\nAs an enrolled Chickasaw citizen, you may be eligible for several housing programs:\n\n**1. Home Loan Program**\nLow-interest loans for home purchase within the 13-county jurisdiction. Current rate: 3.25% fixed.\n\n**2. Down Payment Assistance**\nUp to $15,000 for first-time homebuyers. Income-qualified.\n\n**3. Home Repair & Rehabilitation**\nGrants up to $25,000 for necessary repairs to owner-occupied homes.\n\n**4. Rental Assistance**\nMonthly rental support for qualifying citizens.\n\nI can help you start a pre-qualification form right now, or connect you with a housing counselor at the Chickasaw Nation Division of Housing.`,
        actions: ["Start Pre-Qualification", "Find Nearest Office", "Download Application"],
      },
    },
    {
      prompts: [
        "Help me find education programs",
        "Chickasaw education assistance",
        "Scholarship information",
      ],
      response: {
        text: `**Chickasaw Nation Education Programs**\n\nThe Nation offers comprehensive education support at every stage:\n\n**K-12 Support**\n• School supply assistance\n• Tutoring programs\n• STEM enrichment camps\n\n**Higher Education**\n• Chickasaw Nation Education Foundation scholarships — up to $8,000/year\n• Graduate and professional school funding\n• GED completion assistance\n\n**Career Development**\n• Workforce training programs\n• Vocational certifications\n• Professional development grants\n\nBased on your profile, you may qualify for 3 active scholarship programs. Want me to check eligibility?`,
        actions: ["Check Scholarship Eligibility", "View All Programs", "Talk to Advisor"],
      },
    },
  ],
  cultural: [
    {
      prompts: [
        "Tell me about the Chickasaw removal story",
        "What happened during the Trail of Tears?",
        "Chickasaw Nation history",
      ],
      response: {
        text: `**The Chickasaw Removal — A Story of Resilience**\n\nThe Chickasaw people's forced removal from their homeland in present-day Mississippi, Alabama, and Tennessee began in the 1830s following the Treaty of Pontotoc Creek (1832) and the Treaty of Doaksville (1837).\n\n**What Makes the Chickasaw Story Unique:**\n\nUnlike other removed tribes, the Chickasaw Nation negotiated the sale of their homeland — refusing to simply surrender it. They received $3 million for their lands, and used those funds to purchase territory from the Choctaw Nation in Indian Territory.\n\n**The Chickasaw people were never conquered. They were displaced by policy, but they negotiated from strength even in removal.**\n\nThe journey itself was devastating — hundreds died from disease, exposure, and deprivation. But the Nation rebuilt, establishing a constitutional government, schools, and a thriving economy in Indian Territory.\n\nToday, the Chickasaw Nation is one of the most economically powerful tribal nations in America — with over 80,000 citizens and enterprises spanning gaming, manufacturing, banking, and technology.\n\n**Unconquered. Unconquerable.**`,
        sources: ["Chickasaw Nation Archives", "Chickasaw.tv", "Dept. of History & Culture"],
      },
    },
    {
      prompts: [
        "Who are the traditional Chickasaw clans?",
        "Tell me about Chickasaw clan system",
        "Chickasaw social structure",
      ],
      response: {
        text: `**Iksa — The Chickasaw Clan System**\n\nThe Chickasaw people organized their society through a matrilineal clan system called **Iksa**. Clan membership passed through the mother's line.\n\n**The Two Moieties:**\n\n**Imosaktca'** (the elder division)\n**Intcukwalipa** (the younger division)\n\nIndividual clans included:\n• Minko' Iksa — Chief clan\n• Panther\n• Bird\n• Fish\n• Deer\n• Raccoon\n\n**Why It Matters Today:**\nClan identity shaped governance, marriage rules, and social obligations. Understanding Iksa helps citizens connect with the deep social fabric that sustained Chickasaw society for centuries.\n\nThe CFM sources this from the Chickasaw Nation Department of History & Culture and validated oral histories.`,
        sources: ["Chickasaw Nation Dept. of History & Culture", "Chickasaw Press Publications"],
      },
    },
  ],
};
