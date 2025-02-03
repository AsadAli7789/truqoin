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
    subject: "Mail from TruQoin",
    text: "", // plain text body
    html: `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
    h2 {
  color: #333;
}
        p {
            font-size: 14px;
            color: #333;
        }
        .details {
            margin-top: 20px;
        }
        .label {
            font-weight: bold;
        }
           #loop {
  
  width: 300px;
  height: 100px;
}

    </style>
</head>
<body>

<div class="email-container">
    <h2>New Contact Form Submission from   <img src="https://firebasestorage.googleapis.com/v0/b/asad-f3717.appspot.com/o/web%2Flogo.png?alt=media&token=6db3454a-bb70-4828-baea-8f80a468ab31" id="loop" /></h2>
    <p>Dear Asad,</p>
    <p>I hope this message finds you well.</p>
    <p>You have received a new contact form submission through the TruQuoin  </p>
    <ul>
    <li>
      <b>Name:</b>${Firstname}</li>
     <li>
      <b>Email:</b>${Email}</li>
         <li>
      <b>Subject:</b>${Subject}</li>
     
       <li>
      <b>Text:</b>${text}</li>
     
    </ul>


`,
  });

  console.log("Message sent: %s", info.messageId);

  return NextResponse.json(
    { message: "sent success fuly " },
    { status: "201" }
  );
}
