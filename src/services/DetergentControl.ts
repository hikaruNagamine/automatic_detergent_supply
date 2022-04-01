import { UserGpio } from '../unit/gpio'
import { SettingFile, IFile, defaultFileSettings } from '../unit/SettingFile'
import { sleep } from '../unit/sleep'

// const file:string = "/opt/app/settings.json";

//インターフェース
export interface IDetergentControl {
    response: string;
    setting: IFile;
}

//クラス
export class DetergentControl {
    private _gpio: UserGpio;
    private _file:string = "/opt/app/settings.json"; // TODO : SETTING_FILE_PATHをどこで設定するか。設定ファイルを別途持つならコンストラクタで設定ファイル読み込みする

    /**
     * constructor
     */
    constructor(set_gpio: number = 10) {
        this._gpio = new UserGpio(set_gpio);
    }
    /**
     * get
     */
    public async getSettings(): Promise<IDetergentControl> {
        try {
            const setting_file = new SettingFile(this._file);
            let result = await setting_file.read();
            return {
                response: 'success',
                setting: result
            }
        } catch (error) {
            console.log(error);
            return {
                response: 'error',
                setting: defaultFileSettings
            }
        }
    }
    /**
     * settings
     * @param set_gpio 
     * @returns 
     */
    public async updateSettings(p_setting:IFile): Promise<IDetergentControl> {
        const setting_file = new SettingFile(this._file);
        let result = await setting_file.save(p_setting);
        return {
            response: 'success',
            setting: result
        }
    }
    /**
     * output
     */
    public async output() {
        try {
            const setting_file = new SettingFile(this._file);
            let result = await setting_file.read();

            await this._gpio.turnOn()
            
            // wait time dispenser
            await sleep(result.ml_motor_time_ms);

            await this._gpio.turnOff()
        } catch(error) {
            await this._gpio.turnOff()
            throw error
        }
    }

    /**
     * stop
     * @param params 
     */
    public async stop() {
        await this._gpio.turnOff()
    }
}