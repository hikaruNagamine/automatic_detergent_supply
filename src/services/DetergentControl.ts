import { UserGpio } from '../unit/gpio'
// import { SettingFile } from './SettingFile'
// import { timeout } from '../unit/timeout'

//インターフェース
export interface IDetergentControl {
    response: string;
}

//クラス
export class DetergentControl {
    private _gpio: UserGpio;
    /**
     * constructor
     */
    constructor(set_gpio: number = 10) {
        this._gpio = new UserGpio(set_gpio);
    }
    /**
     * get
     */
    public async getSettings() {

    }
    /**
     * settings
     * @param set_gpio 
     * @returns 
     */
    public async updateSettings(): Promise<IDetergentControl> {
        // const setting_file = new SettingFile();
        // await setting_file.save({flg_buzzer, buzzer_time});
        return {
            response: 'success'
        }
    }
    /**
     * output
     */
    public async output() {
        if (true) {
            console.log(Date.now())
            await this._gpio.turnOn()
            await this._gpio.turnOff()
        } else {
            await this._gpio.turnOff()
        }
    }
}