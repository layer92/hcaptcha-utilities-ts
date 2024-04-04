import { HCaptchaSecretBox } from "./HCaptchaSecretBox";
import { HCaptchaResponseTokenBox } from "./HCaptchaResponseTokenBox";
import { OnAxiosHttpError } from "@layer92/axios-utilities";
export declare class HCaptchaVerifier {
    private readonly _secret;
    private readonly _axios;
    constructor(_secret: HCaptchaSecretBox);
    /**
     *
     * @param param0.onHttpError a callback if the web request to the hcaptcha server fails
     * @returns
     */
    verify_isSuccessfulAsync({ tokenBox, onHttpError }: {
        tokenBox: HCaptchaResponseTokenBox;
        onHttpError?: OnAxiosHttpError;
    }): Promise<boolean>;
}
