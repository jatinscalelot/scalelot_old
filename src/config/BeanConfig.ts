import CareerController from "../routes/v1/career/CareerController";
import {container, singleton} from "tsyringe";
import LoginController from "../routes/v1/login/LoginController";
import ContactUsController from "../routes/v1/contactus/ContactUsController";
import MetaKeywordsController from "../routes/v1/metakeywords/MetaKeywordsController";
import PortfolioProjectController from "../routes/v1/portfolioproject/PortfolioProjectConrtroller";
import TestimonialController from "../routes/v1/testimonial/TestimonialController";

@singleton()
export default class BeanConfig {
    //Controllers
    private readonly _careerController: CareerController;
    private readonly _loginController: LoginController;
    private readonly _contactUsController: ContactUsController;
    private readonly _metaKeywordsController: MetaKeywordsController;
    private readonly _portfolioProjectController: PortfolioProjectController;
    private readonly _testimonialController: TestimonialController;

    constructor() {
        this._careerController = container.resolve(CareerController);
        this._loginController = container.resolve(LoginController);
        this._contactUsController = container.resolve(ContactUsController);
        this._metaKeywordsController = container.resolve(MetaKeywordsController);
        this._portfolioProjectController = container.resolve(PortfolioProjectController);
        this._testimonialController = container.resolve(TestimonialController);
    }

    get careerController(): CareerController {
        return this._careerController;
    }

    get loginController(): LoginController {
        return this._loginController;
    }

    get contactUsController(): ContactUsController {
        return this._contactUsController;
    }

    get metaKeywordsController(): MetaKeywordsController {
        return this._metaKeywordsController;
    }

    get portfolioProjectController(): PortfolioProjectController {
        return this._portfolioProjectController;
    }

    get testimonialController(): TestimonialController {
        return this._testimonialController;
    }
}
