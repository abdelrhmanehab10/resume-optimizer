import pdfParse from "pdf-parse";
import fetch from "node-fetch";

export async function POST(req: Request) {
  const data = await req.json();
  const { url } = data;
  console.log(url);

  try {
  } catch (error) {}
}
