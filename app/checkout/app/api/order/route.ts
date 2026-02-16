import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name");
  const phone = formData.get("phone");
  const city = formData.get("city");
  const address = formData.get("address");
  const products = formData.get("products");

  await resend.emails.send({
    from: "Zouri Motors <onboarding@resend.dev>",
    to: ["khazouri8@gmail.com"],
    subject: "طلب جديد - زوري موتورز",
    html: `
      <h2>طلب جديد</h2>
      <p><strong>الاسم:</strong> ${name}</p>
      <p><strong>الهاتف:</strong> ${phone}</p>
      <p><strong>المدينة:</strong> ${city}</p>
      <p><strong>العنوان:</strong> ${address}</p>
      <pre>${products}</pre>
    `,
  });

  return NextResponse.redirect(
    new URL("/thank-you", req.url),
    303
  );
}
