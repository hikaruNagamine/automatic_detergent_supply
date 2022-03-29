import { UserGpio } from '../unit/gpio'
import { SettingFile, IFile } from '../unit/SettingFile'
// import { timeout } from '../unit/timeout'

const file:string = "/opt/app/test-settings.json";

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
    public async updateSettings(p_setting:IFile): Promise<IDetergentControl> {
        const file:string = "/opt/app/settings.json";
        const setting_file = new SettingFile(file);
        let result = await setting_file.save(p_setting);
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
            // wait time dispenser
            await this._gpio.turnOff()
        } else {
            await this._gpio.turnOff()
        }
    }
}