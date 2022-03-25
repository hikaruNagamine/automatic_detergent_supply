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

        // it('checkExistFile success', () => {
        //     const testSetFile = new SettingFile(test_default, "/opt/app/settings.json");
        // });
    });

    // describe('success save', () => {
    // });

    // describe('success read', () => {
    // });
});