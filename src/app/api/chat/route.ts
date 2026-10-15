import { NextRequest, NextResponse } from "next/server";
import { getChatResponse } from "@/ai/flows/chatbot-flow";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await getChatResponse(body);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to fetch response" }, { status: 500 });
  }
}
