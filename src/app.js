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

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
