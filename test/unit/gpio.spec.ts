import { UserGpio } from '../../src/unit/gpio'
import gpio from 'rpi-gpio';
describe('GPIOユニットのテスト', () => {
    it.skip('turnOn success', () => {
        const testSetFile = new UserGpio(10);
        // expect(testSetFile.checkExistFile()).rejects.toThrow();
    });
    it.skip('turnOff success', () => {
        const testSetFile = new UserGpio(10);
        // expect(testSetFile.checkExistFile()).rejects.toThrow();
    });
    it.skip('read success', async () => {
        const testSetFile = new UserGpio(10);
        
        const randomMock = jest.spyOn(gpio.promise, 'read');
        await testSetFile.read();
        expect(randomMock).rejects.toBe(true);
        // expect(testSetFile.checkExistFile()).rejects.toThrow();
    });
})