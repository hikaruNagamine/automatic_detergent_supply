import gpio from 'rpi-gpio';
// var gpiop = require('rpi-gpio').promise;

//クラス
export class UserGpio {
    private _gpio: number;
    /**
     * constructor
     */
    public constructor(gpio: number) {
        this._gpio = gpio;
    }
    public async turnOn(): Promise<void> {
        try {
            await gpio.promise.setup(this._gpio, gpio.DIR_OUT);
            await gpio.promise.write(this._gpio, true);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    public async turnOff(): Promise<void> {
        try {
            await gpio.promise.setup(this._gpio, gpio.DIR_OUT);
            await gpio.promise.write(this._gpio, false);
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
    public async read(): Promise<boolean> {
        try {
            let read_gpio:boolean = await gpio.promise.read(this._gpio);
            return read_gpio;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}