import {ApiError, InternalError, NotFoundError} from "../error/ApiError";
import express, {NextFunction, Request, Response} from "express";
import {environment} from "../config/Config";
import Logger from "../utils/Logger";
import PortfolioProject from "../dto/PortfolioProject";
import Testimonial from "../dto/Testimonial";
import {PortfolioTagsEnum} from "../utils/enum/PortfolioTagsEnum";
import PortfolioProjectService from "../service/PortfolioProjectService";
import TestimonialService from "../service/TestimonialService";
import {container} from "tsyringe";

export default class ErrorHandlerMiddlewares {

    static undefinedRoutesErrorMiddleware = async (req: Request, res: Response, next: NextFunction) => next(new NotFoundError());

    static errorHandlerMiddleware = async (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof ApiError) {
            Logger.debug("API Error caught");
            return res.redirect('/');
            // ApiError.handle(err, res);
        } else {
            if (environment === 'development') {
                Logger.error(err);
                return res.redirect('/');
                // return res.status(500).send(err.message);
            }
            return res.redirect('/');
            // ApiError.handle(new InternalError(), res);
        }
    }


}
