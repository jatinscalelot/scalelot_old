import {autoInjectable} from "tsyringe";
import ContactUsRepository from "../repository/ContactUsRepository";
import ContactUs from "../dto/ContactUs";
import EmailService from "./EmailService";
import FileDTO from "../dto/FileDTO";
import Logger from "../utils/Logger";
import FileService from "./FileService";

@autoInjectable()
export default class ContactUsService {

    private _contactUsRepository: ContactUsRepository;
    private _emailService: EmailService;
    private _fileService: FileService;

    constructor(contactUsRepository: ContactUsRepository, emailService: EmailService, fileService: FileService) {
        this._contactUsRepository = contactUsRepository;
        this._emailService = emailService;
        this._fileService = fileService;
    }

    public async addContactUsQuery(contactUs: ContactUs, files: FileDTO[]): Promise<ContactUs> {
        let savedFiles: FileDTO[] = [];

        let fileIds: string[] = [];

        for (let fileIndex in files) {
            let savedFile: FileDTO = await this._fileService.saveFile(files[fileIndex]);
            require("fs").writeFile("./public/assets/images/dynamic-images/" + savedFile.id, files[fileIndex].buffer, 'base64', function(err: any) {
                Logger.debug(err);
            });
            fileIds.push(savedFile.id.toString());
        }

        contactUs.files = fileIds;

        let contactUsFromDB: ContactUs = await this._contactUsRepository.saveContactUs(contactUs);

        try {
            await this._emailService.sendEmail("hr@scalelot.com", "Someone tried to contact us", JSON.stringify(contactUsFromDB));
            await this._emailService.sendEmail(contactUs.email, "Thank you for contacting us.", JSON.stringify(contactUsFromDB));
        }
        catch (e: any) {
            Logger.error("Error while sending emails. Please contact developer to debug this.");
        }

        return contactUsFromDB;
    }

    public async getAllContactUsQuery(): Promise<ContactUs[]> {
        return this._contactUsRepository.getAllContactUsQuery();
    }
}