import { Box, OnException } from "@layer92/core";
/** A key used to authenticate the server. */
export declare class HCaptchaSecretBox extends Box<string> {
    constructor(data: string, onValidationFail?: OnException);
}
