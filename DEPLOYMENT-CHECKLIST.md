# BIAvanta Production Checklist

## Frontend
- [ ] Root Directory = `frontend`
- [ ] Build = `npm install && npm run build`
- [ ] Publish Directory = `dist`
- [ ] `VITE_API_BASE_URL=https://biavanta-backend.onrender.com/api`
- [ ] Rewrite `/*` -> `/index.html`

## Backend
- [ ] Root Directory = `backend`
- [ ] `DEBUG=False`
- [ ] `ALLOWED_HOSTS=biavanta-backend.onrender.com`
- [ ] `CORS_ALLOWED_ORIGINS=https://biavanta-frontend.onrender.com`
- [ ] `CSRF_TRUSTED_ORIGINS=https://biavanta-frontend.onrender.com`
- [ ] PostgreSQL `DATABASE_URL` is connected
- [ ] Health check `/api/health/` returns status `ok`

## Final browser tests
- [ ] Home
- [ ] Company
- [ ] Products
- [ ] Solutions
- [ ] Work
- [ ] Innovation
- [ ] Insights
- [ ] Founder
- [ ] Portfolio
- [ ] Contact
- [ ] Refresh a direct route such as `/products`
- [ ] Submit the contact form
- [ ] Check mobile menu and mobile layout
