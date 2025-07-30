// // // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // const { GoogleGenAI } = require("@google/genai");
// // // Access your API key as an environment variable (see "Set up your API key" above)
// // const AI = new GoogleGenAI(process.env.GEMINI_API_KEY);

// // async function cropPredictorServices(soil, altitude, temperature, humidiy, rainfall) {

// //   // For text-only input, use the gemini-pro model
// // const model = AI.getGenerativeModel({ model: "gemini-pro" });
  
// //   const prompt =
// //     `Predict the crops and give me data based on these environmental factors: Soil type: ${soil} Altitude (in km): ${altitude} Temperature (in degree Celsius): ${temperature} Humidity (in %): ${humidiy} Rainfall (in mm): ${rainfall} Note: Ensure the following conditions are met: - Altitude should be a numerical value between 0 and 10 (kilometers). - Temperature should be a numerical value between -50 and 50 (degree Celsius). - Humidity should be a numerical value between 0 and 100 (%). - Rainfall should be a numerical value between 0 and 1000 (mm).`;

// //     // For streaming purpose
// //     //   const result = await model.generateContentStream(prompt);

// //     //   let text = "";
// //     //   for await (const chunk of result.stream) {
// //     //     const chunkText = chunk.text();
// //     //     console.log(chunkText);
// //     //     text += chunkText;
// //     //   }
    
// //     const result = await model.generateContent(prompt);
// //     console.log("Result: ", result);
// //     const response = await result.response;
// //     const text = response.text();
// //     return text;
// // }

// // module.exports = {
// //   cropPredictorServices,
// // };// services/aiService.js
// const { GoogleGenAI } = require("@google/genai");
// require("dotenv").config();

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// async function cropPredictorServices(soil, altitude, temperature, humidity, rainfall) {
//   const prompt = `Predict the crops and give me data based on these environmental factors:
// - Soil type: ${soil}
// - Altitude (in km): ${altitude}
// - Temperature (in degree Celsius): ${temperature}
// - Humidity (in %): ${humidity}
// - Rainfall (in mm): ${rainfall}

// Ensure these constraints:
// - Altitude: 0–10 km
// - Temperature: -50 to 50 °C
// - Humidity: 0–100%
// - Rainfall: 0–1000 mm`;

//   const result = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: [{ role: "user", parts: [{ text: prompt }] }],
//   });

//   return result.text();
// }

// // ✅ Make sure this is at the bottom of the file:
// module.exports = { cropPredictorServices };
const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function cropPredictorServices(soil, altitude, temperature, humidity, rainfall) {
  const prompt = `Predict the crops and give me data based on these environmental factors:
- Soil type: ${soil}
- Altitude (in km): ${altitude}
- Temperature (in degree Celsius): ${temperature}
- Humidity (in %): ${humidity}
- Rainfall (in mm): ${rainfall}

Ensure these constraints:
- Altitude: 0–10 km
- Temperature: -50 to 50 °C
- Humidity: 0–100%
- Rainfall: 0–1000 mm`;

  const result = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  });

  // ✅ Access actual response text safely
  const text = result.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("No response from Gemini model.");
  }

  return text;
}

module.exports = { cropPredictorServices };
