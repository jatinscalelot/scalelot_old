import {autoInjectable} from "tsyringe";
import PortfolioProject from "../dto/PortfolioProject";
import PortfolioProjectRepository from "../repository/PortfolioProjectRepository";
import FileDTO from "../dto/FileDTO";
import FileService from "./FileService";
import Logger from "../utils/Logger";

@autoInjectable()
export default class PortfolioProjectService {

    private _portfolioProjectRepository: PortfolioProjectRepository;
    private _fileService: FileService;

    constructor(portfolioProjectRepository: PortfolioProjectRepository, fileService: FileService) {
        this._portfolioProjectRepository = portfolioProjectRepository;
        this._fileService = fileService;
    }

    public async addPortfolioProject(portfolioProject: PortfolioProject, files: FileDTO[]): Promise<PortfolioProject> {

        let fileIds: string[] = [];

        for (let fileIndex in files) {
            let savedFile: FileDTO = await this._fileService.saveFile(files[fileIndex]);
            require("fs").writeFile("./public/assets/images/dynamic-images/" + savedFile.id, files[fileIndex].buffer, 'base64', function(err: any) {
                Logger.debug(err);
            });
            fileIds.push(savedFile.id.toString());
        }

        portfolioProject.files = fileIds;

        return this._portfolioProjectRepository.addPortfolioProject(portfolioProject);
    }

    public async getAllPortfolio(): Promise<PortfolioProject[]> {
        return this._portfolioProjectRepository.getAllPortfolioProjects();
    }
}