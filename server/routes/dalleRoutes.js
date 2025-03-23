import express from "express";
import * as dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Test
router.route("/").get((req, res) => {
    res.send("Hello from Gemini");
});

// Main
router.route("/").post(async (req, res) => {
    try {
        const { prompt } = req.body;

        // Initialize the Gemini model with image generation capability
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash-exp-image-generation",
            generationConfig: {
                responseModalities: ["Text", "Image"],
            },
        });

        // Generate image response
        const response = await model.generateContent(prompt);

        let imageData;
        for (const part of response.response.candidates[0].content.parts) {
            if (part.inlineData) {
                imageData = part.inlineData.data;
                break;
            }
        }

        if (!imageData) {
            throw new Error("No image data received from Gemini.");
        }

        // Send base64 image back to frontend
        res.status(200).json({ photo: imageData });
    } catch (error) {
        console.error("Error generating image:", error);
        res.status(500).send(error.message);
    }
});

export default router;
