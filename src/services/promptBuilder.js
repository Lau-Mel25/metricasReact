
export function buildStructuredPrompt({ system, template, userInput }) {
  return {
    system,
    user: {
      template,
      input: userInput,
    },
  };
}
