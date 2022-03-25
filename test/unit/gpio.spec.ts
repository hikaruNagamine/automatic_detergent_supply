import { UserGpio } from '../../src/unit/gpio'
describe.skip('GPIOユニットのテスト', () => {
    describe('gpio', () => {
        it('gpio constructor', () => {
            const testSetFile = new UserGpio(10);
            // expect(testSetFile.checkExistFile()).rejects.toThrow();
        });
    });
})