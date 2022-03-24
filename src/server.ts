import express from 'express';
import helmet from 'helmet';

const app = express();
app.use(helmet());

// Constants
const PORT = process.env.PORT || 8080; // port番号を指定

// ------ ルーティング ------ //
import router from './routes/index';
app.use('/', router);


//サーバ起動
app.listen(PORT);
console.log('listen on PORT ' + PORT);

export default app;