//インターフェース
export interface IApiService {
    test: string;
}

//クラス
export class ApiService {
    // TODO : SETTING_FILE_PATHをどこで設定するか。設定ファイルを別途持つならコンストラクタで設定ファイル読み込みする

    public async test(): Promise<IApiService> {
        return {
            test: 'app test'
        }   
    }
    
    public async clone(){
    }
}