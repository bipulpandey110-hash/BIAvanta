# Deployment

1. Push this project to a GitHub repository.
2. Render backend: root `backend`, build `pip install -r requirements.txt && python manage.py migrate && python manage.py collectstatic --noinput && python manage.py seed_demo`, start `gunicorn config.wsgi:application`.
3. Set `DEBUG=False`, `SECRET_KEY`, `ALLOWED_HOSTS`, `CORS_ALLOWED_ORIGINS`, and a PostgreSQL `DATABASE_URL`.
4. Render frontend: root `frontend`, build `npm install && npm run build`, publish `dist`. Set `VITE_API_BASE_URL` to the backend `/api` URL.
5. Add SPA rewrite `/*` -> `/index.html`.
6. Test `/api/health/`, `/api/products/`, `/api/insights/`, `/api/work/`, contact form and `/admin/`.
