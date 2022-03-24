//インターフェース
export interface ITest {
    test: string;
}

//クラス
export class ApiService {
    // TODO : SETTING_FILE_PATHをどこで設定するか。設定ファイルを別途持つならコンストラクタで設定ファイル読み込みする

    public async test(): Promise<ITest> {
        return {
            test: 'app test'
        }   
    }
    
    public async clone(){
    }
}