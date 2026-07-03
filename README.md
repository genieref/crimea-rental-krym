# КрымАренда

Публичный лендинг с каталогом жилья, преимуществами, формой бронирования и защищённой серверной частью для отправки заявок в Telegram и Яндекс.Таблицы.

## Деплой на Vercel

1. Подключите репозиторий https://github.com/iferodev/crimea-rental-krym к Vercel.
2. Установите переменные окружения:
   - `TELEGRAM_BOT_TOKEN` — токен бота
   - `TELEGRAM_CHAT_ID` — идентификатор чата/канала
   - `YANDEX_OAUTH_TOKEN` — токен доступа к Яндекс.Таблицам
   - `YANDEX_SHEET_ID` — ID таблицы
   - `YANDEX_SHEET_NAME` — наименование листа
   - `INTERNAL_API_SECRET` — произвольный секрет для защиты внутренних вызовов
3. В структуре проекта замените заглушки в `/app/api/submit` на реальные запросы к Telegram API и Яндекс.Таблицам.

## Content
Объекты и цены хранятся в `src/components/catalog.tsx`, изображения в `public/images`.

## Мультиязык
Предусмотрена поддержка ru/en через `src/middleware.ts` и `src/messages/*.json`.
