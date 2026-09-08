from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Product,CaseStudy,Insight,ContactMessage
from .serializers import ProductSerializer,CaseStudySerializer,InsightSerializer,ContactMessageSerializer
class HealthView(APIView):
 def get(self,request): return Response({"status":"ok","service":"BIAvanta API"})
class ProductListView(generics.ListAPIView): queryset=Product.objects.all(); serializer_class=ProductSerializer
class CaseStudyListView(generics.ListAPIView): queryset=CaseStudy.objects.all(); serializer_class=CaseStudySerializer
class InsightListView(generics.ListAPIView): queryset=Insight.objects.all(); serializer_class=InsightSerializer
class ContactCreateView(generics.CreateAPIView): queryset=ContactMessage.objects.all(); serializer_class=ContactMessageSerializer
