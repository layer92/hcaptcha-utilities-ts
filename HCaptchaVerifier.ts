import { AxiosWebClient, OnAxiosHttpError } from "@layer92/axios-utilities-console";

export class HCaptchaVerifier {
    private readonly _axios = new AxiosWebClient({});

    constructor(
        private readonly _secret: string
    ) {

    }

    /**
     * 
     * @param param0.onHttpError a callback if the web request to the hcaptcha server fails
     * @returns 
     */
    async verify_isSuccessfulAsync({token,onHttpError}:{token: string, onHttpError?: OnAxiosHttpError}) {
        // hcaptcha doesn't accept json data, you have to use form-encoded: https://stackoverflow.com/a/52416003
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        // https://docs.hcaptcha.com/
        const response = await this._axios.requestAsync({
            method: "post",
            pathOnHost: `https://hcaptcha.com/siteverify`,
            addHeaders: headers,
            body: {
                secret: this._secret,
                response: token,
            },
            onHttpError,
        }) as HCaptchaSiteVerifyApiResponseData;
        return !!response.success;
    }
}


// https://docs.hcaptcha.com/
type HCaptchaSiteVerifyApiResponseData = {
    /** is the passcode valid, and does it meet security criteria you specified, e.g. sitekey? */
    "success": true | false,
    /** timestamp of the challenge (ISO format yyyy-MM-dd'T'HH:mm:ssZZ) */
    "challenge_ts": string,
    /** the hostname of the site where the challenge was solved */
    "hostname": string,
    /** optional: whether the response will be credited */
    "credit"?: true | false,
    /** optional: any error codes  */
    "error-codes"?: (
        /** Your secret key is missing. */
        "missing-input-secret"
        /** Your secret key is invalid or malformed. */
        | "invalid-input-secret"
        /** The response parameter (verification token) is missing. */
        | "missing-input-response"
        /** The response parameter (verification token) is invalid or malformed. */
        | "invalid-input-response"
        /** The request is invalid or malformed. */
        | "bad-request"
        /** The response parameter has already been checked, or has another issue. */
        | "invalid-or-already-seen-response"
        /** You have used a testing sitekey but have not used its matching secret. */
        | "not-using-dummy-passcode"
        /** The sitekey is not registered with the provided secret. */
        | "sitekey-secret-mismatch"
    )[]
    /** ENTERPRISE feature: a score denoting malicious activity. */
    "score"?: number,
    /** ENTERPRISE feature: reason(s) for score. */
    "score_reason"?: string[]
}