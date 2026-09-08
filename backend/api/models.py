from django.db import models
class Product(models.Model):
 name=models.CharField(max_length=120); slug=models.SlugField(unique=True); category=models.CharField(max_length=120); description=models.TextField(); featured=models.BooleanField(default=True); order=models.PositiveIntegerField(default=0)
 class Meta: ordering=["order","name"]
 def __str__(self): return self.name
class CaseStudy(models.Model):
 title=models.CharField(max_length=160); slug=models.SlugField(unique=True); category=models.CharField(max_length=120); summary=models.TextField(); challenge=models.TextField(blank=True); approach=models.TextField(blank=True); technology=models.CharField(max_length=255,blank=True); featured=models.BooleanField(default=True)
 def __str__(self): return self.title
class Insight(models.Model):
 title=models.CharField(max_length=200); slug=models.SlugField(unique=True); category=models.CharField(max_length=80); excerpt=models.TextField(); published_at=models.DateField(auto_now_add=True)
 class Meta: ordering=["-published_at"]
 def __str__(self): return self.title
class ContactMessage(models.Model):
 name=models.CharField(max_length=120); email=models.EmailField(); company=models.CharField(max_length=160,blank=True); project_type=models.CharField(max_length=120,blank=True); budget=models.CharField(max_length=80,blank=True); message=models.TextField(); created_at=models.DateTimeField(auto_now_add=True); is_read=models.BooleanField(default=False)
 class Meta: ordering=["-created_at"]
 def __str__(self): return f"{self.name} — {self.email}"
