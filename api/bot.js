export default async function handler(req, res) {

  const TOKEN = "8320205588:AAG0oUc4psbAOWRqRXZjrFHNKaYhr55dkmY";
  const OWNER_ID = "1187841877";

  if (req.method === "POST") {

    const data = req.body;

    let messageText = "";

    // Web App se bill aaya
    if (data.bill) {
      messageText = data.bill;
    }

    // Telegram se normal message
    if (data.message) {
      messageText = data.message.text;
    }

    if (messageText !== "") {

      await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: OWNER_ID,
          text: messageText
        })
      });

    }
  }

  res.status(200).json({ status: "ok" });
}
