//インターフェース
export interface IApiService {
    test: string;
}

//クラス
export class ApiService {

    public async test(): Promise<IApiService> {
        return {
            test: 'app test'
        }   
    }
    
    public async clone(){
    }
}