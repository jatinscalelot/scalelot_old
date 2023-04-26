import {autoInjectable} from "tsyringe";
import Logger from "../utils/Logger";
import EmailConfig from "../config/EmailConfig";
import {GMAIL_CONFIG} from "../config/Config";

@autoInjectable()
export default class EmailService {
    private emailConfig: EmailConfig;

    constructor(emailConfig: EmailConfig) {
        Logger.debug("Creating EmailService Instance")
        this.emailConfig = emailConfig;
    }

    //ToDo: Change this method for new Email Service Provider
    public async sendEmail(to: string, subject: string, text: string, html?: string, headers?: any): Promise<boolean> {
        let response = await this.emailConfig.transporter.sendMail({
            from: GMAIL_CONFIG.user,
            to: to,
            subject: subject,
            text: text,
            html: html,
            headers: headers
        });
	console.log('response', response);
        Logger.debug("Mail sent");
        return true;
    }
}
