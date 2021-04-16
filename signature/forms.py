from django import forms
from .models import SignatureTool

class SignatureToolForm(forms.ModelForm):
    class Meta:
        model = SignatureTool
        fields = ['image']