"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HCaptchaVerifier = void 0;
const axios_utilities_1 = require("@layer92/axios-utilities");
class HCaptchaVerifier {
    constructor(_secret) {
        this._secret = _secret;
        this._axios = new axios_utilities_1.AxiosWebClient({});
    }
    /**
     *
     * @param param0.onHttpError a callback if the web request to the hcaptcha server fails
     * @returns
     */
    async verify_isSuccessfulAsync({ tokenBox, onHttpError }) {
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
                secret: this._secret.getData(),
                response: tokenBox.getData(),
            },
            onHttpError,
        });
        return !!response.success;
    }
}
exports.HCaptchaVerifier = HCaptchaVerifier;
