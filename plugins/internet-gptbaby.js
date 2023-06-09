import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
if (!text) return m.reply("Input query\nExample: .gptbaby hello")
await m.reply(wait)
try {
// Contoh penggunaan
let result = await gptBaby(text)
await m.reply(convertNewline(result.content))
} catch (e) {
await m.reply(eror)
}
}
handler.help = ["gptbaby"]
handler.tags = ["internet"]
handler.command = /^(gptbaby)$/i
export default handler

function convertNewline(output) {
  const convertedOutput = output.replace(/\\n/g, '\n');
  return convertedOutput;
}

/* New Line */
async function gptBaby(your_qus) {
  const baseURL = "https://fasdsgdfsg97986agagyk656.lovebaby.today/";
  const messageChain8 = [{ role: "user", content: your_qus }];
  
  try {
    const response = await fetch(baseURL + "api/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "text/event-stream",
        "origin": "https://fasdsgdfsg97986agagyk656.lovebaby.today/",
        "Referer": baseURL
      },
      body: JSON.stringify({
        messages: messageChain8,
        stream: true,
        model: "gpt-3.5-turbo",
        temperature: 0.5,
        presence_penalty: 0
      })
    });
    
    // Handle the response data here
    const inputText = await response.text();
  const arrays = inputText.split('\n');
  const result = arrays.reduce((acc, item) => {
    const match = item.match(/"content":"([^"]+)"/);
    if (match) {
      const content = match[1];
      acc.push(content);
    }
    return acc;
  }, []);

  const mergedContent = { content: result.join('') };
  return mergedContent;
  } catch (error) {
    // Handle any errors here
    console.error(error);
  }
}
