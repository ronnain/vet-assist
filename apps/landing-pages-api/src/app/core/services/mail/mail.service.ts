import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import nodemailer from 'nodemailer';

@Injectable()
export class MailService {

  constructor(private configService: ConfigService) {}

    private transporter = nodemailer.createTransport({
        host: this.configService.get<string>('MAIL_HOST'),
        port: this.configService.get<number>('MAIL_PORT'),
        secure: true,
        auth: {
          user: this.configService.get<string>('MAIL_AUTH_USER'),
          pass: this.configService.get<string>('MAIL_AUTH_PASS')
        },
        tls : { rejectUnauthorized: false }
    });

    async main({toAddresses}: {toAddresses: string[]}) {
        // send mail with defined transport object
        const info = await this.transporter.sendMail({
          from: '"🐶🐭🐹🦎 Romain 🐇🐈🐟🐢" <romain@sommeilprofond.fr>', // sender address
          to: toAddresses.join(', '), // list of receivers
          subject: "Lien pour accéder à l'application", // Subject line
          text: `Bonjour,

Nous vous remercions de l'intérêt que vous portez à notre application. Nous sommes ravis de voir votre enthousiasme pour l'utiliser au plus vite.

Cependant, nous tenons à vous informer que l'application que vous attendez avec impatience est actuellement en cours de développement pour garantir une expérience exceptionnelle dès son lancement.

Nous travaillons sans relâche pour finaliser tous les détails et nous vous assurons que nous faisons tout notre possible pour accélérer le processus.

Nous vous prions de bien vouloir patienter un peu plus longtemps. Soyez assuré(e) que nous vous tiendrons informé(e) dès que l'application sera prête à être téléchargée.

Nous tenons à vous remercier pour votre patience et votre soutien continu.

Cordialement,
L'équipe de développement de l'application`, // plain text body
          html: `
<p>Bonjour</p>

<p>Nous vous remercions de l'intérêt que vous portez à notre application. Nous sommes ravis de voir votre enthousiasme pour l'utiliser au plus vite.</p>

<p>Cependant, nous tenons à vous informer que l'application que vous attendez avec impatience est actuellement en cours de développement pour garantir une expérience exceptionnelle dès son lancement.</p>

<p>Nous travaillons sans relâche pour finaliser tous les détails et nous vous assurons que nous faisons tout notre possible pour accélérer le processus.</p>

<p>Nous vous prions de bien vouloir patienter un peu plus longtemps. Soyez assuré(e) que nous vous tiendrons informé(e) dès que l'application sera prête à être téléchargée.</p>

<p>Nous tenons à vous remercier pour votre patience et votre soutien continu.</p>

<p>Cordialement,<br>
L'équipe de développement de l'application</p>`, // html body
        });
    }

}