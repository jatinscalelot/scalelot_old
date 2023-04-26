import { instanceToPlain, plainToInstance } from "class-transformer";
import Career from "../dto/Career";
import AppUtils from "../utils/AppUtils";
import { autoInjectable } from "tsyringe";
import Login from "../dto/Login";
import LoginEntity from "./entity/LoginEntity";
import ContactUs from "../dto/ContactUs";

@autoInjectable()
export default class LoginRepository{

    public async getLogin(login: Login): Promise<Login> {

        const loginEntity: any = await LoginEntity.findOne({userName: login.userName});
        return  plainToInstance(Login, loginEntity, {excludeExtraneousValues: true});

    }

}