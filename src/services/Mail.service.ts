// import config from '/src/config.mjs';
// import nodemailer from 'nodemailer';
// import { SentMessageInfo, Transporter } from 'nodemailer';
//
// export default class MailService {
//      readonly transporter;
//        constructor() {
//          this.transporter = nodemailer.createTransport({
//            service: config.mailService,
//            auth: {
//              user: config.email,
//              pass: config.password,
//            },
//          });
//        }
//
//      static async sendMail(email, subject, body){
//         const mailOptions = {
//           from: config.email,
//           to: email,
//           subject,
//           html: body,
//         };
//
//         return await this.transporter.sendMail(mailOptions);
//      }
// }
