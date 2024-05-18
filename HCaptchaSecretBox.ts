import { Box, OnException, Expect } from "@layer92/core";

/** A key used to authenticate the server. */
export class HCaptchaSecretBox extends Box<string>{
    constructor(data:string,onValidationFail?:OnException){
        // these assumptions are incorrect
        // Expect(data.length===42,"length must be 42");
        // Expect(data.startsWith("0x"), "must start with 0x");
        super(data);
    }
}