"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdapterRoute = void 0;
const AdapterRoute = (controller) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const httpRequest = {
                body: req.body,
                params: req.params,
                query: req.query,
                user: req.user
            };
            const httpResponse = yield controller.handle(httpRequest, next);
            return res.status(httpResponse.statusCode).json({
                success: httpResponse.success,
                message: httpResponse.message,
                body: httpResponse.body
            });
        }
        catch (error) {
            next(error);
        }
    });
};
exports.AdapterRoute = AdapterRoute;
