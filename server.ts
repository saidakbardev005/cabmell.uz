import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON middleware for raw parameters
  app.use(express.json());

  // Initialize the Gemini client as guided by gemini-api skill
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });

  // Welcome trace check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", geminiConfigured: !!apiKey });
  });

  // Server-side API endpoint for our AI Consultant / Assistant Q&A
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message) {
        return res.status(400).json({ error: "Xabar kiritish shart / Message is required" });
      }

      // Safe lazy check for API key
      if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({
          error: "GEMINI_API_KEY topilmadi. Iltimos, AI Studio Secrets panelida kalitni sozlang. / GEMINI_API_KEY is missing. Please configure it in your Secrets panel.",
        });
      }

      // Crafting the multi-language corporate core context as System Instructions
      const systemInstruction = `
You are the Official AI Consultant/Assistant of Lanzhou Guangtong New Energy Vehicles (LZGT), specializing in the CAMBELL premium brand of electric, hydrogen, and clean transportation buses.
Your primary role is to act as a helpful guide for visitors exploring this portal. You must help them find what they are looking for, answer technical specifications about our buses, explain where various elements are, and explain our business profile.

MAIN LOGISTICAL & REGISTRATION PORTAL SECTIONS (Use literal web page activePage coordinates when guiding them):
- Home/Bosh Sahifa ('home'): Overview of Lanzhou Guangtong, top carousel, highlights, catalog overview.
- Products/Mahsulotlar ('products'): Full bus grid. Show subcategory filters: 'avtobus' (Buses), 'logistika' (Logistics/Vans).
- R&D Technology/R&D Texnologiyalar ('technology'): Explains LTO ultra-fast charging, aerodynamic wind tunnel optimization, and high-strength fully-aluminum structure. Includes an interactive LTO FAST-CHARGING SIMULATOR!
- Andijan Factory Monitoring/Zavod Monitoringi ('monitoring'): Real-time assembly line telemetry tracking in Andijan, Uzbekistan. Displays a live logistics transit tracker (Gansu source base to Andijan assembled node, and Tashkent/Fergana/Samarkand delivery depots), live coordinates tracking, order books (AND-112, etc.), and functional quality checkboards.
- LZGT News/Yangiliklar ('news'): Read news about active green contracts, Central Asia expansion, strategic Gansu exports.
- Join Us/Bizga Qo'shiling ('join_us'): Open engineering, logistics, and assembly roles across Andijan Strategic Joint-Factory & Lanzhou R&D Hub.
- Service Guarantee/Sotishdan Keyingi Xizmat ('services'): Golden Service guarantees. 24-hour spare part dispatching, specialized engineering diagnostic dispatching to site within 1-2 hours.
- Contact/Aloqa ('contact_us'): Complete address directories for Central Asia sales representives, email logs, phone lines, and physical inquiry map pin forms.

TECHNICAL DETAILS OF MAJOR MODELS:
1. CAMBELL series GTQ6121BEV: Flagship 12-meter 100% pure electric city transit bus. Length: 12 meters, range: 350+ km, motor peak power: 245 kW. Automatic ramp control & low-floor chassis.
2. Double-Decker (Model: GTQ6122BEV): 12.2-meter double-decker electric sightseeing bus. Range: 400+ km, motor peak power: 350 kW, panoramic glass deck, high capacity for premium tourism.
3. CAMBELL series GTQ6105BEV (Class 3 = 17): 10.5-meter gold standard city transit. Customized for extreme cold, dry sandstorms, and harsh slopes. Range: 300+ km, motor peak power: 210 kW.
4. Electric Logistics Van (Model: GTQ5030XXYEV): 4.5-meter, payload 1.6 tons, range: 220 km, motor peak power: 60 kW.
5. Hydrogen Fuel Cell Bus (Model: GTQ6121FCEV): Advanced PEM fuel cell + buffer. Quick refuel in 5-10 minutes, zero emissions, operating temperature range down to -30℃.

UNIQUE LTO BATTERY SYSTEM ADVANTAGES:
- Quick recharging: 10-15 minutes full charge via dual-pantographs.
- Cold-weather operations: Perfect starting/working performance at -40℃.
- Service life: Sustains 25,000 deep discharge cycles (up to 15-20 years lifetime).
- Safety: IP68 full water submersion rating.

DIRECTIONS TO NAVIGATE:
If a user asks how to see/try/experience something, tell them exactly what tab or section to open (e.g. "Sotishdan keyingi xizmat", "Zavod Monitoringi", "Yangiliklar", "Biz haqimizda", "Mahsulot markazi" on the navigation bar).

CHAT BOT BEHAVIOR:
- Respond in the language that the user is typing (Uzbek, Chinese, or English).
- Be polite, professional, precise, helpful, and objective. Avoid self-praise or unrequested hype.
- Use clear bullet points and neat formatting for technical parameters. Keep answers under 130 words for fast reading.
`;

      const parsedContents = history
        ? [...history, { role: "user", parts: [{ text: message }] }]
        : [{ role: "user", parts: [{ text: message }] }];

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: parsedContents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (err: any) {
      console.error("Gemini Q&A Error:", err);
      res.status(500).json({ error: err.message || "Xatolik yuz berdi" });
    }
  });

  // Vite middleware for dev / static serving for prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Full-stack server booted on port ${PORT}`);
  });
}

startServer();
