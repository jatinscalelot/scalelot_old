import {autoInjectable} from "tsyringe";
import FileDTO from "../dto/FileDTO";
import FilesRepository from "../repository/FilesRepository";
import Logger from "../utils/Logger";

@autoInjectable()
export default class FileService {
    private _filesRepository: FilesRepository;

    constructor(filesRepository: FilesRepository) {
        this._filesRepository = filesRepository;
    }

    public async saveFiles(files: FileDTO[]): Promise<FileDTO[]> {
        Logger.debug("Saving file Service");
        return this._filesRepository.saveFiles(files)
    }

    public async saveFile(file: FileDTO): Promise<FileDTO> {
        Logger.debug("Saving file Service");
        return this._filesRepository.saveFile(file)
    }
}