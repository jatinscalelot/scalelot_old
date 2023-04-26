import {autoInjectable} from "tsyringe";
import ContactUs from "../dto/ContactUs";
import ContactUsEntity from "./entity/ContactUsEntity";
import AppUtils from "../utils/AppUtils";
import {instanceToPlain, plainToInstance} from "class-transformer";
import Logger from "../utils/Logger";

@autoInjectable()
export default class ContactUsRepository {
    public async saveContactUs(contactUs: ContactUs): Promise<ContactUs> {
        const contactUsEntity = new ContactUsEntity(AppUtils.nullPropsRemover(instanceToPlain(contactUs)));
        await contactUsEntity.save();
        return plainToInstance(ContactUs, contactUsEntity, {excludeExtraneousValues: true});
    }

    public async getAllContactUsQuery(): Promise<ContactUs[]> {
        const contactUsList = await ContactUsEntity.find({});
        return plainToInstance(ContactUs, contactUsList, {excludeExtraneousValues: true});
    }
}