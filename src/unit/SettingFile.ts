import { access, writeFile, readFile } from 'fs/promises';
import { constants } from 'fs';

// interface
export type IFile = Readonly<{
    version: string,            // setting file version
    ml_water2detergent: number, // mL(milliliter): 1 mL(water) = ? mL(detergent)
    ml_motor_time_ms: number       // Time to drive the motor = 1 mL of detergent
}>

// default
export const defaultFileSettings: IFile = {
    version: '1.0.0',
    ml_water2detergent: 10,
    ml_motor_time_ms: 10
} as const;

//クラス
export class SettingFile {
    private _version: string;
    private _ml_water2detergent: number;
    private _ml_motor_time: number;
    private _setting_file_path: string;

    /**
     * constructor
     */
    public constructor(init_setting_file_path: string, init: Partial<IFile> = defaultFileSettings) {
        const dfl:IFile = defaultFileSettings;
        this._version = (init.version || dfl.version);
        this._ml_water2detergent = (init.ml_water2detergent || dfl.ml_water2detergent);
        this._ml_motor_time = (init.ml_motor_time_ms || dfl.ml_motor_time_ms);
        this._setting_file_path = init_setting_file_path
    }
    public async checkExistFile(): Promise<void> {
        try {
            await access(this._setting_file_path, constants.R_OK | constants.W_OK);
        } catch (error) {
            // console.log(`${this._setting_file_path} ${error ? 'is not' : 'is'} readable and writable`);
            throw error;
        }
    }
    public async save(set_setting: IFile): Promise<IFile> {
        try {
            await this.checkExistFile();
            let file = await readFile(this._setting_file_path, 'utf8')
            let settings = JSON.parse(file)
            settings = {
                ...settings,
                ...set_setting
            }
            await writeFile(this._setting_file_path, JSON.stringify(settings), 'utf8')
            return settings
        } catch (error) {
            // console.log(`SettingFile save error. : ${error}`);
            throw error;
        }
    }
    public async read(): Promise<IFile> {
        try {
            await this.checkExistFile();
            // read file setting 
            let file = await readFile(this._setting_file_path, 'utf8')
            let settings = JSON.parse(file)
            return settings
        } catch (error) {
            // console.log(`SettingFile read error. : ${error}`);
            throw error;
        }
    }
}