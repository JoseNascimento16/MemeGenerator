from django.urls import path
from . import views
from django_distill import distill_path

def get_index():
    # The index URI path, '', contains no parameters, named or otherwise.
    # You can simply just return nothing here.
    return None

urlpatterns = [
    distill_path('',views.index, name='index')
]