const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`;

function buildPrompt({ floodStatus, floodLevel, eszStatus, corridorFact, reportCount }) {
  return `You are helping a forest ranger at Kaziranga National Park.
Write one short, plain-English paragraph (2-3 sentences max) summarizing the current situation.

Flood status: ${floodStatus} (water level: ${floodLevel}m)
ESZ boundary context: ${eszStatus}
Known corridor fact: ${corridorFact}
Recent incident reports: ${reportCount} reports logged in the last 7 days

Be direct and actionable, like a briefing — not generic or vague.`;
}

export async function getAISummary(inputData) {
  const prompt = buildPrompt(inputData);

  try {
    const response = await fetch(`${ENDPOINT}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          { parts: [{ text: prompt }] }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const summaryText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!summaryText) {
      throw new Error('No summary text returned');
    }

    return summaryText;
  } catch (error) {
    console.error('Failed to get AI summary:', error);
    return 'Unable to generate summary right now. Please try refreshing.';
  }
}