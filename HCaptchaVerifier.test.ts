import assert from "assert";
import { HCaptchaResponseTokenBox } from "./HCaptchaResponseTokenBox";
import { HCaptchaSecretBox } from "./HCaptchaSecretBox";
import { HCaptchaVerifier } from "./HCaptchaVerifier"

/** https://docs.hcaptcha.com/#integration-testing-test-keys */
const TestSecretBox = new HCaptchaSecretBox("0x0000000000000000000000000000000000000000");
const TestTokenBox = new HCaptchaResponseTokenBox("10000000-aaaa-bbbb-cccc-000000000001");
const BadTokenBox = new HCaptchaResponseTokenBox("10000123-aaaa-bbbb-cccc-000000000001");

describe('test hcaptcha (requires internet access)', function () {
    it('test token should pass verification', async function () {
        const verifier = new HCaptchaVerifier(TestSecretBox);
        const success = await verifier.verify_isSuccessfulAsync({tokenBox:TestTokenBox});
        assert(success);
    });

    it('bad token should fail verification', async function () {
        const verifier = new HCaptchaVerifier(TestSecretBox);
        const success = await verifier.verify_isSuccessfulAsync({tokenBox:BadTokenBox});
        assert(!success,"expected bad token to fail");
    });
});