export default async function handler(req) {

  const url = "https://api.the-odds-api.com/v4/sports/soccer/odds/?regions=eu&markets=h2h&apiKey=c652908a94bc3cc4a43c631260dcc724";

  try {
    const response = await fetch(url);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Erro na API" }), {
      status: 500
    });
  }
}
