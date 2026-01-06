import express from "express";
import * as dotenv from "dotenv";
import { HfInference } from "@huggingface/inference";

dotenv.config();

const router = express.Router();

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

// Test
router.route("/").get((req, res) => {
    res.send("Hello from Hugging Face Image Generation");
});

router.route("/").post(async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        console.log("Generating image with prompt:", prompt);

        const blob = await hf.textToImage({
            inputs: prompt,
            model: "black-forest-labs/FLUX.1-schnell",
        });

        // Convert blob to base64
        const arrayBuffer = await blob.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const imageData = buffer.toString('base64');

        if (!imageData) {
            throw new Error("No image data received from Hugging Face");
        }

        console.log("Image generated successfully");

        // Send base64 image back to frontend
        res.status(200).json({ photo: imageData });

    } catch (error) {
        console.error("Error generating image:", error);
        res.status(500).json({ error: error.message });
    }
});

export default router;