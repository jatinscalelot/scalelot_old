import 'reflect-metadata';
import Career from '../dto/Career';
import {autoInjectable} from "tsyringe";
import CareerRepository from '../repository/CareerRepository';
import FileDTO from "../dto/FileDTO";
import FileService from "./FileService";
import Logger from "../utils/Logger";

@autoInjectable()
export default class CareerService{

  private _careerRepository: CareerRepository;
  private _fileService: FileService;


  constructor(careerRepository: CareerRepository, fileService: FileService) {
    this._careerRepository = careerRepository;
    this._fileService = fileService;
  }

  public async createCareer(career: Career, files: FileDTO[]): Promise<Career> {

      let fileIds: string[] = [];

      for (let fileIndex in files) {
          let savedFile: FileDTO = await this._fileService.saveFile(files[fileIndex]);
          require("fs").writeFile("./public/assets/images/dynamic-images/" + savedFile.id, files[fileIndex].buffer, 'base64', function(err: any) {
            Logger.debug(err);
          });
          fileIds.push(savedFile.id.toString());
      }

      career.files = fileIds;
      return this._careerRepository.saveCareer(career);
      
    }

    public async fetchAllCareer(): Promise<Career[]> {
        return this._careerRepository.getAllCareer();
    }
}