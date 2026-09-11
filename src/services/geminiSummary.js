const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent`;

function buildPrompt({ floodStatus, floodLevel, eszStatus, corridorFact, reportCount }) {
  return `You are briefing a forest ranger at Kaziranga National Park. Based on the data below, write a short situational briefing.

Flood status: ${floodStatus} (water level: ${floodLevel}m)
ESZ boundary context: ${eszStatus}
Known corridor fact: ${corridorFact}
Recent incident reports: ${reportCount} reports logged in the last 7 days

Format your response EXACTLY like this, no extra text before or after:

HEADLINE: [one punchy sentence capturing the single most important thing right now]
- [bullet 1: flood/water situation, specific and actionable]
- [bullet 2: incident/poaching activity, specific and actionable]
- [bullet 3: wildlife movement or corridor risk, tied to the corridor fact and flood status]

Be direct and specific — use the actual numbers given. Do not be vague or generic.`;
}

export async function getAISummary(inputData) {
  const prompt = buildPrompt(inputData);

  try {
    const response = await fetch(`${ENDPOINT}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
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
    return 'HEADLINE: Unable to generate summary right now.\n- Please try refreshing.';
  }
}