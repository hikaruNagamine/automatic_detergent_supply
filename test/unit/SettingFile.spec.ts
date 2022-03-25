import { IFile, SettingFile } from '../../src/unit/SettingFile';
describe('ファイルクラスのテスト', () => {
    const test_default: IFile = {
        version: '0.0.0',
        ml_water2detergent: 20,
        ml_motor_time: 20
    } as const;


    describe('checkExistFile', () => {
        it('checkExistFile error', () => {
            const testSetFile = new SettingFile(test_default, "");
            expect(testSetFile.checkExistFile()).rejects.toThrow();
        });
    });

    describe('save', () => {
        it('save success', async () => {
            const file:string = "/opt/app/test-settings.json";
            const testSetFile = new SettingFile(test_default, file);
            const result = await testSetFile.save(test_default);
            const resultJSON = Object.entries(result).sort().toString();
            const testJSON = Object.entries(test_default).sort().toString();
            expect(Object.is(resultJSON, testJSON)).toBe(true);
        });
    });

    describe('read', () => {
        it('read success', async () => {
            const file:string = "/opt/app/test-settings.json";
            const testSetFile = new SettingFile(test_default, file);
            const result = await testSetFile.read();
            const resultJSON = Object.entries(result).sort().toString();
            const testJSON = Object.entries(test_default).sort().toString();
            expect(Object.is(resultJSON, testJSON)).toBe(true);
        });
    });
});