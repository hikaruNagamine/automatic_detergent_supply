// functionをexportして使用する場合
export function addCalcFun(baseValue: number, addValue: number): number {
    return baseValue + addValue;
}

// classをexportして使用する場合
export class Calc {
    private baseValue: number;

    constructor(baseValue: number) {
        this.baseValue = baseValue;
    }

    add(addValue: number): number {
        return this.baseValue + addValue;
    }
}

// async functionをexportして使用する場合
export async function addCalcAsyncFun(baseValue: number, addValue: number): Promise<number> {
    return baseValue + addValue;
}


// エラーの発生を確認する場合
export function callErrorFun(): void {
    throw new Error('error');
}

export async function callErrorAsyncFun(): Promise<void> {
    throw new Error('asyncError');
}

// ログが呼ばれた確認する
export function callConsoleLog(logMessage: string): void {
    console.log(logMessage);
}

// 実装側で通信を送る場合
import axios from 'axios';

export async function getRequest(): Promise<any> {
    const response = await axios.get('http://localhost:5678');
    return response.data;
}