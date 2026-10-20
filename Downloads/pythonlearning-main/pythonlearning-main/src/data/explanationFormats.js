export const EXPLANATION_FORMATS = [
  {
    id: "simple",
    label: "Simple Explanation",
    icon: "💡",
    tagline: "Direct and straightforward explanation in plain words."
  },
  {
    id: "story",
    label: "Story Explanation",
    icon: "📖",
    tagline: "Learn through a memorable story and relatable characters."
  },
  {
    id: "realLife",
    label: "Real-Life Connection",
    icon: "🌍",
    tagline: "Connect the concept directly to everyday experiences."
  },
  {
    id: "friend",
    label: "Friend Explanation",
    icon: "😊",
    tagline: "A casual chat as if a buddy is teaching you over coffee."
  },
  {
    id: "visual",
    label: "Visual / Diagram",
    icon: "🖼️",
    tagline: "Visual flow diagram and structural representation."
  },
  {
    id: "stepByStep",
    label: "Step-by-Step Breakdown",
    icon: "🔢",
    tagline: "Broken down into 1-2-3 sequential bite-sized steps."
  },
  {
    id: "exampleFirst",
    label: "Code Example First",
    icon: "💻",
    tagline: "Look at working code first, then explore why it works."
  },
  {
    id: "analogy",
    label: "Relatable Analogy",
    icon: "🧩",
    tagline: "Clear comparison with everyday physical objects."
  }
];

export const DEFAULT_FORMAT = "simple";

export function getFormatById(formatId) {
  return EXPLANATION_FORMATS.find((f) => f.id === formatId) || EXPLANATION_FORMATS[0];
}

export function getNextExplanationFormat(currentFormatId) {
  const currentIndex = EXPLANATION_FORMATS.findIndex((f) => f.id === currentFormatId);
  if (currentIndex === -1 || currentIndex === EXPLANATION_FORMATS.length - 1) {
    return EXPLANATION_FORMATS[0].id;
  }
  return EXPLANATION_FORMATS[currentIndex + 1].id;
}
