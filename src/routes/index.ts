import express from 'express';
import helmet from 'helmet';

import { ApiService } from '../services/ApiService';
import { TestService } from '../services/TestService';

const app = express();
app.use(helmet());

// ルーティングする
const router = express.Router();

const clone_service = new ApiService();
clone_service.clone().catch(e => {console.log("ERROR!", e)});

// routerにルーティングの動作を記述する


// sample test service
router.get('/helloWorld', (req, res) => {
    res.status(200).send({ message: 'Hello, world' });
});

router.get('/test', (req, res, next) => {
    const service = new TestService();
    service
        .test()
        .then(result => res.status(200).send(result))
        .catch(next);
});

router.post('/test', (req, res, next) => {
    const params = req.body;
    const service = new TestService();
    service
        .setting(params)
        .then(result => res.status(200).send(result))
        .catch(next);
});

// api service
// router.get('/detergent', (req, res, next) => {
//     // const { user } = req.params;
//     const service = new ApiService();
//     service
//         .get()
//         .then(result => res.status(200).send(result))
//         .catch(next);
// });

// -------------------------------------------------
//  以下、何のルーティングにもマッチしないorエラー
// -------------------------------------------------

// いずれのルーティングにもマッチしない(==NOT FOUND)
app.use((req, res) => {
    res.status(404);
    res.render('error', {
        param: {
            status: 404,
            message: 'not found'
        },
    });
});

//routerをモジュールとして扱う準備
export default router;