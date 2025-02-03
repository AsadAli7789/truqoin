import { message } from "antd";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { Email, Firstname, text, Subject } = await req.json();
  console.log("req=>", req);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_API_USER,
      pass: process.env.NEXT_PUBLIC_API_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_API_USER,
    to: process.env.NEXT_PUBLIC_API_RECEVER,
    subject: "MAil from Catepiller",
    text: "", // plain text body
    html: `<ul>
         <li>Email : ${Email}</li>
         <li>Name : ${Firstname}</li>
          <li>Review : ${text}</li>
   <li>Review : ${Subject}</li>

         
         </ul>`,
  });

  console.log("Message sent: %s", info.messageId);

  return NextResponse.json(
    { message: "sent success fuly " },
    { status: "201" }
  );
}
