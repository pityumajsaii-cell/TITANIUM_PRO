import express from "express";
import dotenv from "dotenv";
import os from "os";

dotenv.config();
const app = express();
app.use(express.json());

// Egyszerű monitorozási adatok
app.get('/health', (req, res) => {
    res.json({
        status: "ok",
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage().heapUsed / 1024 / 1024 + " MB",
        cpuLoad: os.loadavg()
    });
});

// Checkout végpont
app.post('/checkout', (req, res) => {
    res.json({ url: "https://buy.stripe.com/28EeVfeqwfKA0Y33Gv9IQ03" });
});

// Biztonsági logolás - minden bejövő kérést figyelünk
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.listen(3000, () => console.log("Titanium-Pro fut a 3000-es porton - Monitorozás aktív"));
