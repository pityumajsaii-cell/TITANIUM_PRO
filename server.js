import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.static('.'));
app.use(express.json());

// Pénzügyi modul és n8n kapcsolat
app.get('/services', (req, res) => { 
  res.json({ 
    core_products: ["LeadGen", "Content-Factory", "Automation-Stack"], 
    advanced_services: ["Audit-As-A-Service", "Crypto-Shield", "Token-Gateway"], 
    status: "GLOBAL_COMMERCIAL_MODE_ACTIVE" 
  });
    products: ["LeadGen", "Content-Factory", "Automation-Stack"], 
    status: "AVAILABLE_FOR_RENT" 
  }); 
});

app.post('/global-hunt', (req, res) => { 
  const { country, company } = req.body; 
  console.log("Global Hunter: Célozva -> " + company + " (" + country + ")"); 
  res.json({ 
    core_products: ["LeadGen", "Content-Factory", "Automation-Stack"], 
    advanced_services: ["Audit-As-A-Service", "Crypto-Shield", "Token-Gateway"], 
    status: "GLOBAL_COMMERCIAL_MODE_ACTIVE" 
  });
});

app.post('/post-video', (req, res) => { 
  // Ez a végpont indítja a YouTube API-t 
  console.log("YouTube Engine: Napi 8 videó ciklus indítva..."); 
  res.json({ 
    core_products: ["LeadGen", "Content-Factory", "Automation-Stack"], 
    advanced_services: ["Audit-As-A-Service", "Crypto-Shield", "Token-Gateway"], 
    status: "GLOBAL_COMMERCIAL_MODE_ACTIVE" 
  });
});

app.post('/send-offer', (req, res) => { 
  const { email } = req.body; 
  console.log("Sales Bot: Ajánlat küldve -> " + email); 
  res.json({ 
    core_products: ["LeadGen", "Content-Factory", "Automation-Stack"], 
    advanced_services: ["Audit-As-A-Service", "Crypto-Shield", "Token-Gateway"], 
    status: "GLOBAL_COMMERCIAL_MODE_ACTIVE" 
  });
});

app.post('/checkout', async (req, res) => {
  const n8nUrl = process.env.N8N_WEBHOOK_URL || "https://titaniumtolna.app.n8n.cloud/webhook/titanium";
  console.log("Küldés az n8n-nek:", n8nUrl);
  res.json({ 
    core_products: ["LeadGen", "Content-Factory", "Automation-Stack"], 
    advanced_services: ["Audit-As-A-Service", "Crypto-Shield", "Token-Gateway"], 
    status: "GLOBAL_COMMERCIAL_MODE_ACTIVE" 
  });
});

  res.json({ 
    core_products: ["LeadGen", "Content-Factory", "Automation-Stack"], 
    advanced_services: ["Audit-As-A-Service", "Crypto-Shield", "Token-Gateway"], 
    status: "GLOBAL_COMMERCIAL_MODE_ACTIVE" 
  });
  res.json({ 
    core_products: ["LeadGen", "Content-Factory", "Automation-Stack"], 
    advanced_services: ["Audit-As-A-Service", "Crypto-Shield", "Token-Gateway"], 
    status: "GLOBAL_COMMERCIAL_MODE_ACTIVE" 
  });

app.listen(3000, () => console.log("Titanium Server online"));
