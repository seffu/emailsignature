from django.shortcuts import render, redirect
from .models import SignatureTool
from django.contrib.auth.decorators import login_required
from .forms import SignatureToolForm

@login_required
def home_view(request):
    form = SignatureToolForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('signature:home')
    context = {'form':form}
    return render(request, 'signature/index.html', context)