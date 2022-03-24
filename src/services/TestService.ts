//インターフェース
export interface ITest {
    test: string;
    name: string;
}

//クラス
export class TestService {
    public async test(): Promise<ITest> {
        return {
            test: 'test',
            name: "test name"
        } 
    }

    public async setting(params: ITest): Promise<ITest> {
        return {
            test: "test setting!",
            name: "test name"
        }
    }
}