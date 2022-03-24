// importを使う場合
import { addCalcFun } from '../src/testSamples';

describe('functionを読み込んで使う', () => {
    it('1たす8は9になる関数で実行します', () => {
        expect(addCalcFun(1, 8)).toBe(9);
    });
});

// requireを使う場合
const standardPractice = require('../src/testSamples');
describe('classを読み込んで使う', () => {
    it('9たす23は32になるようなCalc Classで実行します', () => {
        const calc = new standardPractice.Calc(9);
        expect(calc.add(23)).toBe(32);
    });
});

// async await を使う場合
import { addCalcAsyncFun } from '../src/testSamples';
describe('async/awaitを使ったテスト', () => {
    describe('beforeEachでasync/await', () => {
        let result = 0;
        beforeEach(async () => {
            result = await addCalcAsyncFun(8, 22);
        });

        it('8たす22は30をasync/awaitで', () => {
            expect(result).toBe(30);
        });
    });

    describe('itの中でasync/await', () => {
        it('7たす21は28をasync/awaitで', async () => {
            const result = await addCalcAsyncFun(7, 21);
            expect(result).toBe(28);
        });

        it('7たす22は29をexpect resolvesで', () => {
            expect(addCalcAsyncFun(7, 22)).resolves.toBe(29);
        });
    });
});

// エラーの発生を確認する場合
import { callErrorFun, callErrorAsyncFun } from '../src/testSamples';
describe('エラーの発生を確認するテスト', () => {
    it('通常のエラー', () => {
        expect(callErrorFun).toThrow();
    });

    it('async/await(Promise)の中でのエラー', () => {
        expect(callErrorAsyncFun()).rejects.toThrow();
    });
});

describe('stub, mock, spyを使ったテスト', () => {
    it('Math.random関数をmockとして取得し、呼び出してみる', () => {
        // function自体を上書いて仮のmock functionを作ってしまう
        const randomMock = jest.fn(Math.random);
        const mathMockFunc = randomMock.mockReturnValue(0.5); // mock functionにして0.5を固定で返す
        expect(mathMockFunc()).toBe(0.5);
    });

    it('addCalcFun関数をmockとして取得し、呼び出してみる', () => {
        // function自体を上書いて仮のmock functionを作ってしまう
        const addCalcMock = jest.fn(addCalcFun);
        const addCalcMockFunc = addCalcMock.mockReturnValue(0.5); // mock functionにして0.5を固定で返す
        expect(addCalcMockFunc(1, 8)).toBe(0.5);
    });

    it('Math.random関数をspyして、呼び出してみる', () => {
        // functionの結果を上書いてしまう場合はspyOnを使う
        const randomMock = jest.spyOn(Math, 'random');
        randomMock.mockReturnValue(0.7);
        expect(Math.random()).toBe(0.7);
    });
});


import { callConsoleLog } from '../src/testSamples';
describe('処理が呼ばれたかどうか確認するためのテスト', () => {
    it('console.log()をspyOnしてMockしたものを呼び出したのかどうか確認する', () => {
        const consoleLogMock = jest.spyOn(console, 'log');
        callConsoleLog('test1');
        // toHaveBeenCalledWithは指定された関数が指定された引数の値で一回でも呼ばれたのかどうか確認する場合に使用する
        expect(consoleLogMock).toHaveBeenCalledWith('test1');
    });
});

// 意図した通信と結果を確認する
import axios from 'axios';
import { getRequest } from '../src/testSamples';

describe('通信を送る場合のテスト', () => {
    let httpRequestGetMock: jest.SpyInstance;

    beforeEach(() => {
        // axiosのgetの結果を上書き
        httpRequestGetMock = jest.spyOn(axios, 'get');
        httpRequestGetMock.mockResolvedValue({ data: { message: 'hello!!' } });
    });

    it('mockで意図したURLに通信を送り、返ってくるはずのものを確認するテスト', async () => {
        const res = await getRequest();
        expect(res.message).toBe('hello!!');
        expect(httpRequestGetMock).toHaveBeenCalledWith('http://localhost:5678');
    });
});