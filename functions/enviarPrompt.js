const fetch = require("node-fetch");

exports.handler = async function(event) {
  try {
    console.log("BODY RECIBIDO:", event.body); // 👈 agrega esto

    const { prompt } = JSON.parse(event.body);

    const response = await fetch("https://aderesopablo.app.n8n.cloud/webhook/generacionblog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data })
    };
  } catch (error) {
    console.error("Error al enviar a n8n:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};
