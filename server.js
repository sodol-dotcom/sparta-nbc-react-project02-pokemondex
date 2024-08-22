import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// ES 모듈에서는 __dirname과 __filename을 사용할 수 없기 때문에 아래와 같이 설정한다.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공 (React 앱의 build 폴더를 가리킨다.)
app.use(express.static(path.join(__dirname, 'build')));

// 모든 요청을 index.html로 리다이렉트 (리엑트 라우터 처리)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`)
});