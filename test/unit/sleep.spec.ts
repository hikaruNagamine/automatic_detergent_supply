import { sleep } from '../../src/unit/sleep'

describe('sleepを読み込んで使う', () => {
    it('sleep実行します',async () => {
        await sleep(100)
    });
});