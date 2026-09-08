from rest_framework import serializers
from .models import Product,CaseStudy,Insight,ContactMessage
class ProductSerializer(serializers.ModelSerializer):
 class Meta: model=Product; fields="__all__"
class CaseStudySerializer(serializers.ModelSerializer):
 class Meta: model=CaseStudy; fields="__all__"
class InsightSerializer(serializers.ModelSerializer):
 class Meta: model=Insight; fields="__all__"
class ContactMessageSerializer(serializers.ModelSerializer):
 class Meta: model=ContactMessage; fields=["id","name","email","company","project_type","budget","message","created_at","is_read"]; read_only_fields=["id","created_at","is_read"]
