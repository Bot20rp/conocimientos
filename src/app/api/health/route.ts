export const runtime = "nodejs";

export async function GET() {
  return Response.json({
    ok: true,
    service: "conocimientos",
    version: "0.1.0",
    status: "Operativo",
    timestamp: new Date().toISOString(),
  });
}
