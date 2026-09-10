// Stub — wire this to the real Gemini REST call using VITE_GEMINI_API_KEY.
// Returns a plain-English risk summary string given current dashboard state.

export async function getAISummary({ floodStatus, floodLevel, eszStatus, reportCount }) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    return 'AI summary unavailable — Gemini API key not configured yet.';
  }

  const prompt = `You are a park ranger assistant for Kaziranga National Park.
Water level is currently ${floodLevel}m (status: ${floodStatus}).
ESZ boundary status: ${eszStatus}.
There are ${reportCount} recent poaching reports.
Write one short, plain-English paragraph (2-3 sentences) summarizing the current
risk situation for a ranger checking the dashboard this morning.`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'Could not generate summary.';
  } catch (err) {
    console.error('Gemini API error:', err);
    return 'Error generating AI summary. Please try again.';
  }
}