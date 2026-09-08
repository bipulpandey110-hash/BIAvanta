from django.urls import path
from .views import HealthView,ProductListView,CaseStudyListView,InsightListView,ContactCreateView
urlpatterns=[path("health/",HealthView.as_view()),path("products/",ProductListView.as_view()),path("work/",CaseStudyListView.as_view()),path("insights/",InsightListView.as_view()),path("contact/",ContactCreateView.as_view())]
