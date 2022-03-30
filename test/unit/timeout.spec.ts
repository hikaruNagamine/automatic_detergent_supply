import { timeout } from '../../src/unit/timeout'

describe('timeoutを読み込んで使う', () => {
    it('timeout実行します',async () => {
        await timeout(100)
    });
});