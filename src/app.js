import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const PORT = process.env.PORT || 5400;

// Определяем __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Подключаем CORS с разрешением определённого домена
app.use(cors({
    origin: ['https://w-list.ru', 'https://files.w-list.ru']
}));

// Указываем папку с PDF файлами
app.get('/free_contract.pdf', (req, res) => {
    res.sendFile(join(__dirname, 'pdfs', 'free_contract.pdf'));
});

app.get('/soglasie_na_obrabotku_personalnyh_dannyh.pdf', (req, res) => {
    res.sendFile(join(__dirname, 'pdfs', 'soglasie_na_obrabotku_personalnyh_dannyh.pdf'));
});

app.get('/cookies.pdf', (req, res) => {
    res.sendFile(join(__dirname, 'pdfs', 'cookies.pdf'));
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
