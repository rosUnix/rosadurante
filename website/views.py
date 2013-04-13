import json
from django.shortcuts import render
from django.http import HttpResponse

from website.utils import datas


def index(request):
    return render(request, "website/index.html", datas(None))


def social_networks(request):
    return HttpResponse(json.dumps(datas('social_networks')['social_networks']), 'application/json')


def skills(request):
    return HttpResponse(json.dumps(datas('skills')['skills']), 'application/json')


def experience(request):
    return HttpResponse(json.dumps(datas('experience')['experience']), 'application/json')


