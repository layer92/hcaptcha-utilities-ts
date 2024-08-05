import { OnAxiosHttpError } from "@layer92/axios-utilities-console";
export declare class HCaptchaVerifier {
    private readonly _secret;
    private readonly _axios;
    constructor(_secret: string);
    /**
     *
     * @param param0.onHttpError a callback if the web request to the hcaptcha server fails
     * @returns
     */
    verify_isSuccessfulAsync({ token, onHttpError }: {
        token: string;
        onHttpError?: OnAxiosHttpError;
    }): Promise<boolean>;
}
