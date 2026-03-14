
import { GoogleGenAI, Type } from "@google/genai";

export const getCourseRecommendation = async (userStruggle: string) => {
  try {
    // Initialize inside the call to ensure the latest API key is used and to avoid top-level ReferenceErrors
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : '';
    const ai = new GoogleGenAI({ apiKey: apiKey || '' });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is feeling: ${userStruggle}. Based on their struggle, recommend the most suitable course from: AI Clone, CGI Ads, Digital Marketing, Video Editing, English Language, Urdu Shayeri, Depression/Anxiety/OCD Recovery, or Civil Defence. Focus specifically on identifying needs for Religious OCD (Waswasa) if mentioned. Provide a brief, disciplined reason why.`,
      config: {
        systemInstruction: "You are a professional growth advisor. You do not use hype or fake motivation. You provide direct, structured advice focused on discipline, mental health recovery, and skill-building. For mental health queries, suggest the 'Depression, Anxiety & OCD Recovery' course with empathy but a structured approach.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedCourse: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            nextStep: { type: Type.STRING }
          },
          required: ["recommendedCourse", "reasoning", "nextStep"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini recommendation error:", error);
    return null;
  }
};
