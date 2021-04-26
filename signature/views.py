from django.shortcuts import render, redirect
from .models import UserImage
from django.contrib.auth.decorators import login_required
from .forms import UserImageForm
import json
from django.http import HttpResponse

@login_required
def home_view(request):
    form = UserImageForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('signature:home')
    context = {'form':form}
    return render(request, 'signature/index.html', context)

def upload(request):
    if request.method == 'POST':
        if request.is_ajax():
            myimage = request.FILES.get('img')
            uploaded_image = UserImage(image=myimage)
            uploaded_image.save()
            photo = UserImage.objects.first()
            print(response_data)
    return HttpResponse(photo)
    # return render(request, 'signature/index.html')