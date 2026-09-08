# BIAvanta — Full-Stack Company Website

Premium company/product website for BIAvanta with React + TypeScript frontend and Django REST backend.

## Includes
Home, Company, Founder, Products, Solutions, Work, Innovation, Insights, Founder Portfolio and Contact.

## Local
Backend: `cd backend && python -m venv .venv && .venv\Scripts\activate && pip install -r requirements.txt && python manage.py migrate && python manage.py seed_demo && python manage.py runserver`

Frontend: `cd frontend && npm install && npm run dev`

Frontend env: `VITE_API_BASE_URL=http://127.0.0.1:8000/api`

## Render
Backend root: `backend`; build: `pip install -r requirements.txt && python manage.py migrate && python manage.py collectstatic --noinput && python manage.py seed_demo`; start: `gunicorn config.wsgi:application`.
Frontend root: `frontend`; build: `npm install && npm run build`; publish: `dist`.
Backend env: DEBUG=False, SECRET_KEY, ALLOWED_HOSTS, CORS_ALLOWED_ORIGINS, DATABASE_URL. Frontend env: VITE_API_BASE_URL=https://YOUR-BACKEND.onrender.com/api. Add static rewrite `/*` -> `/index.html`.

Admin: `/admin/`.
