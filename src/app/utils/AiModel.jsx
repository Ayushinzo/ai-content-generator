const {
    GoogleGenerativeAI
} = require("@google/generative-ai");
// import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai'
// const apiKey = "AIzaSyBkEsonlFfNzeZQ-iNLhlQgBChAD398l64";
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [],
});
export default chatSession;