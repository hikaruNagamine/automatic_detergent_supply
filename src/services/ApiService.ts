//インターフェース
export interface IApiService {
    test: string;
}

//クラス
export class ApiService {

    public async get(): Promise<IApiService> {
        return {
            test: 'app test'
        }   
    }
    public async update(): Promise<IApiService> {
        return {
            test: 'app test'
        }   
    }
    public async delete(): Promise<IApiService> {
        return {
            test: 'app test'
        }   
    }
    public async detergent_out(): Promise<IApiService> {
        return {
            test: 'app test'
        }   
    }
    
    public async clone(){
    }
}