"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HCaptchaSecretBox = void 0;
const core_1 = require("@layer92/core");
/** A key used to authenticate the server. */
class HCaptchaSecretBox extends core_1.Box {
    constructor(data, onValidationFail) {
        (0, core_1.Expect)(data.length === 42, "length must be OnException");
        (0, core_1.Expect)(data.startsWith("0x"), "must start with 0x");
        super(data);
    }
}
exports.HCaptchaSecretBox = HCaptchaSecretBox;
