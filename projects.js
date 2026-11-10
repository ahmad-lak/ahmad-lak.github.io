// ============================================================
// EDIT THIS FILE to update the site. Search for "TODO" first.
// Adding a project = add one object to PROJECTS. Nothing else.
// Each project automatically gets its own "How it works" page
// (project.html?p=<id>) with its own video.
// ============================================================

const SITE = {
  name: "Ahmad Lak",
  email: "TODO-your-professional-email@example.com", // TODO
  github: "https://github.com/TODO-handle",          // TODO
  linkedin: ""                                        // TODO (optional)
};

// The ONE project you are working on right now. Update after a break.
const NOW = {
  title: "Lead Follow-Up, v2",
  description: "Upgrading the follow-up workflow so replies are written by AI, mention the property the lead asked about, ask a couple of qualifying questions, and log every lead for the agent."
};

// Statistics. Keep these sourced. Replace the third one with YOUR measured number.
const STATS = [
  {
    value: "45%",
    label: "of paid work activities could be automated with technology that already exists",
    note: "McKinsey Global Institute, 2015-2017 analysis (technical potential, not a guaranteed saving)",
    url: "https://www.mckinsey.com/featured-insights/future-of-work/four-fundamentals-of-workplace-automation"
  },
  {
    value: "21\u00d7",
    label: "higher odds of qualifying a web lead when it is contacted within 5 minutes instead of 30",
    note: "MIT / InsideSales lead response study (2007), also covered by HBR in 2011",
    url: "https://ainora.lt/blog/lead-response-time-5-minutes-study-2026"
  },
  {
    value: "TODO min",
    label: "saved per post, measured from my own test run",
    note: "TODO: time a manual post, time the automated one, and put the real numbers here",
    todo: true
  }
];

// category must be one of: "Lead Handling", "Marketing", "Other"
// video must be an EMBED link (YouTube: https://www.youtube.com/embed/VIDEO_ID)
const PROJECTS = [
  {
    id: "listing-auto-poster",
    category: "Marketing",
    title: "Listing Auto-Poster with Human Approval",
    problem: "Agents lose time rewriting every listing as a social post, and don't trust AI to post unchecked.",
    summary: "Submit a listing form with the property's real photos. AI drafts the caption, you approve it, and it posts to Facebook.",
    steps: [
      "Agent fills in a short form with listing details and real photos",
      "AI writes a caption in the agent's tone",
      "Agent reviews and approves or edits the caption",
      "Approved post is published to the Facebook page"
    ],
    tags: ["n8n", "OpenAI", "Facebook"], // TODO: replace with the tools you actually used
    repo: "",  // TODO: link to the project repo
    video: ""  // TODO: embed link to this project's 60-90 sec video
  },
  {
    id: "lead-follow-up",
    category: "Lead Handling",
    title: "Lead Follow-Up Automation",
    problem: "Leads who don't get a quick reply go to the next agent.",
    summary: "When a lead submits a form, a follow-up email goes out automatically.",
    steps: [
      "Lead submits the inquiry form",
      "Follow-up email is sent automatically"
    ],
    next: "AI-written replies that mention the property, ask qualifying questions, log the lead, and notify the agent.",
    tags: ["n8n", "Gmail"], // TODO: replace with the tools you actually used
    repo: "",
    video: ""
  },
  {
    id: "content-generator",
    category: "Other",
    title: "AI Content Generator",
    problem: "Producing consistent written content takes time.",
    summary: "A tool that generates written content with AI, built to practice prompt and workflow design.",
    steps: [],
    tags: ["OpenAI"], // TODO
    repo: "",
    video: ""
  }
];
