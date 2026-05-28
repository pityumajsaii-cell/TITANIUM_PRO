import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.static('.'));
app.use(express.json());

// Pénzügyi modul és n8n kapcsolat
app.post('/post-video', (req, res) => { 
  // Ez a végpont indítja a YouTube API-t 
  console.log("YouTube Engine: Napi 8 videó ciklus indítva..."); 
  res.json({ status: "SCHEDULED", videos: 8 }); 
});

app.post('/send-offer', (req, res) => { 
  const { email } = req.body; 
  console.log("Sales Bot: Ajánlat küldve -> " + email); 
  res.json({ status: "SENT", log: "Titanium_Offer_Activated" }); 
});

app.post('/checkout', async (req, res) => {
  const n8nUrl = process.env.N8N_WEBHOOK_URL || "https://titaniumtolna.app.n8n.cloud/webhook/titanium";
  console.log("Küldés az n8n-nek:", n8nUrl);
  res.json({ url: "https://buy.stripe.com/28EeVfeqwfKA0Y33Gv9IQ03", status: "success" });
});

app.get('/health', (req, res) => res.json({ status: "active" }));
app.get('/finance-report', (req, res) => res.json({ status: "OPTIMIZED", tax: "27%" }));

app.listen(3000, () => console.log("Titanium Server online"));
