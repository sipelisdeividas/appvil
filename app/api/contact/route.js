import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  if (request.method === "POST") {
    try {
      const { first_name, last_name, email, message } = await request.json();

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.CONTACT_EMAIL,
          pass: process.env.CONTACT_PASSWORD,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.CONTACT_EMAIL,
        subject: "Contact Form Submission",
        html: `
                    <h1>Kontaktų Forma</h1>
                    <p>Vardas: ${first_name}</p>
                    <p>Pavardė: ${last_name}</p>
                    <p>El. paštas: ${email}</p>
                
                    <p>Žinutė: ${message}</p>
                `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json("email has been sent");
    } catch (error) {
      return NextResponse.json("email has not been sent");
    }
  } else {
    return NextResponse.json("method not allowed");
  }
}
