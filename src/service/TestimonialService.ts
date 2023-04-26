import {autoInjectable} from "tsyringe";
import Testimonial from "../dto/Testimonial";
import TestimonialRepository from "../repository/TestimonialRepository";
import FileDTO from "../dto/FileDTO";
import Logger from "../utils/Logger";
import FileService from "./FileService";

@autoInjectable()
export default class TestimonialService {

    private _testimonialRepository: TestimonialRepository;
    private _fileService: FileService;

    constructor(testimonialRepository: TestimonialRepository, fileService: FileService) {
        this._testimonialRepository = testimonialRepository;
        this._fileService = fileService;
    }

    public async addTestimonial(testimonial: Testimonial, files: FileDTO[]): Promise<Testimonial> {
        let fileIds: string[] = [];

        for (let fileIndex in files) {
            let savedFile: FileDTO = await this._fileService.saveFile(files[fileIndex]);
            require("fs").writeFile("./public/assets/images/dynamic-images/" + savedFile.id, files[fileIndex].buffer, 'base64', function(err: any) {
                Logger.debug(err);
            });
            fileIds.push(savedFile.id.toString());
        }

        testimonial.files = fileIds;
        Logger.debug("Files saved");
        return this._testimonialRepository.addTestimonial(testimonial);
    }

    public async getAllTestimonials() {
        return this._testimonialRepository.getAllTestimonails();
    }
}