export default async function handler(req, res) {
  const TOKEN = "8320205588:AAG0oUc4psbAOWRqRXZjrFHNKaYhr55dkmY";
  const OWNER_ID = "1187841877";

  if (req.method === "POST") {
    const data = req.body;

    if (data.message) {
      const text = data.message.text;
      const chat_id = OWNER_ID;

      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chat_id,
          text: text
        })
      });
    }
  }

  res.status(200).json({ status: "ok" });
}
