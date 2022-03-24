// APIのITテスト
import axios from 'axios';

describe('結合テスト', () => {
    it('稼働しているはずのサーバーにリクエストを投げて、意図した挙動になるか確認', async () => {
        const response = await axios.post('http://localhost:8080/test', { test: "test", name: 'integrationTestUser' });
        expect(response.data.name).toBe('test name');
        // リクエストを受け取っていればデータが作られているはず
        // const user = await findByName('integrationTestUser');
        // expect(user.name).toBe('integrationTestUser');
    });
});