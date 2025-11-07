// /app/api/chat/route.js
export async function POST(req) {
    try {
      const body = await req.json();
  
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`, 
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          messages: body.messages,
        }),
      });
  
      const data = await response.json();
      console.log("Groq API raw response:", data);

  
      return Response.json(data);
    } catch (err) {
      console.error(err);
      return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
  }
  