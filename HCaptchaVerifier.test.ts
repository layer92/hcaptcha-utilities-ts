import assert from "assert";
import { HCaptchaVerifier } from "./HCaptchaVerifier"

/** https://docs.hcaptcha.com/#integration-testing-test-keys */
const TestSecret = "0x0000000000000000000000000000000000000000";
const TestToken = "10000000-aaaa-bbbb-cccc-000000000001";
const BadToken = "10000123-aaaa-bbbb-cccc-000000000001";

describe('test hcaptcha (requires internet access)', function () {
    it('test token should pass verification', async function () {
        const verifier = new HCaptchaVerifier(TestSecret);
        const success = await verifier.verify_isSuccessfulAsync({token:TestToken});
        assert(success);
    });

    it('bad token should fail verification', async function () {
        const verifier = new HCaptchaVerifier(TestSecret);
        const success = await verifier.verify_isSuccessfulAsync({token:BadToken});
        assert(!success,"expected bad token to fail");
    });
});