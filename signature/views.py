from django.shortcuts import render
from .models import SignatureTool

def home_view(request):
    return render(request, 'signature/index.html')