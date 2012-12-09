from django.conf.urls import patterns, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'website.views.index', name='index'),
    url(r'social_networks$', 'website.views.social_networks', name='social_networks'),
    url(r'skills$', 'website.views.skills', name='skills'),
    url(r'experience$', 'website.views.experience', name='experience'),
)
