import { ContactUsEmailTemplate } from "@/app/templates/contactUsTemplate";
import { ContactUsPayload } from "@/types/email.types";
import { Resend } from "resend";
import { success } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { payload } = body as { payload: ContactUsPayload };
  try {
    const data = await resend.emails.send({
      from: "Elephant-Island <notifications@elephant-island.com>",
      to: ["randilasenath.rs@gmail.com"],
      subject: `New Customer Enqiry : ${payload.phone || ""}`,
      html: ContactUsEmailTemplate(payload),
    });

    return Response.json({success : false , data : data});
  } catch (err) {
    return Response.json({ success: false, data: err });
  }
}
