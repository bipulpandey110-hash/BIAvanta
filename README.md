# BIAvanta — Full-Stack Company Website

A premium light-blue corporate website for BIAvanta, built with React + TypeScript + Django REST Framework.

## Included
Home, Company, Founder, Products, Solutions, Work, Innovation, Insights, Portfolio and Contact.

## Local development

Backend:
```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py seed_demo
python manage.py runserver
```

Frontend:
```powershell
cd frontend
npm install
npm run dev
```

Create `frontend/.env`:
```env
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

## Render

### Backend
- Root Directory: `backend`
- Build: `pip install -r requirements.txt && python manage.py migrate && python manage.py collectstatic --noinput && python manage.py seed_demo`
- Start: `gunicorn config.wsgi:application --workers 2 --threads 4 --timeout 60`
- Health: `/api/health/`

Set:
- `DEBUG=False`
- `SECRET_KEY=<generated>`
- `ALLOWED_HOSTS=biavanta-backend.onrender.com`
- `CORS_ALLOWED_ORIGINS=https://biavanta-frontend.onrender.com`
- `CSRF_TRUSTED_ORIGINS=https://biavanta-frontend.onrender.com`
- `DATABASE_URL=<your PostgreSQL connection string>`

### Frontend
- Root Directory: `frontend`
- Build: `npm install && npm run build`
- Publish Directory: `dist`
- `VITE_API_BASE_URL=https://biavanta-backend.onrender.com/api`

The Render blueprint includes the SPA rewrite `/* -> /index.html`, so refreshing any React route works correctly.
