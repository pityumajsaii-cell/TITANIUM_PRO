import express from "express";
import dotenv from "dotenv";
import os from "os";

dotenv.config();
const app = express();
app.use(express.json());

// Éles fizetőkapu
app.post('/checkout', (req, res) => {
    res.json({ url: "https://buy.stripe.com/28EeVfeqwfKA0Y33Gv9IQ03" });
});

// Biztonsági monitorozás
app.get('/health', (req, res) => {
    res.json({ status: "active", uptime: process.uptime(), memory: process.memoryUsage().heapUsed });
});

app.listen(3000, () => console.log("Titanium-Pro: Éles üzemmódban (Port: 3000)"));
