// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from "../../config/nodemailer";
//Nodemailer :https://nodemailer.com/about/
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ message: "Bad Request" });
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: data.subject,
        text: "this is a test string",
        html: "<h1>Test Title</h1><p>Some body text</p>",
      });
      return res.status(200).json({ message: "success" });
    } catch (error) {
      console.log("error", error);
      return res.status(400).json({ message: error.message });
    }
  }
  // console.log("req.body", req.body);
  return res.status(400).json({ message: "Bad Request" });
};

export default handler;
