import json
from django.shortcuts import render
from django.http import HttpResponse


def index(request):

	context = {
		'first_name': 'Rosa',
		'last_name': 'Durante',
		'position': 'FrontEnd Developer',
		'main_picture':  'img/picture.png',
		'copyright': ' 2012 Rosa Durante',
	}

	return render(request, "website/index.html", context)


def social_networks(request):

	context = [{
		'social_name': 'linkedin',
		'url_base': 'http://www.linkedin.com/in/',
		'username': 'rdurantelerate',
	}, {
		'social_name': 'github',
		'url_base': 'http://github.com/',
		'username': 'rosunix',
	}, {
		'social_name': 'twitter',
		'url_base': 'http://www.twitter.com/',
		'username': 'rosunix',
	}, {
		'social_name': 'camera',
		'url_base': 'http://instagram.com/',
		'username': 'rosunix',
	}, {
		'social_name': 'envelope-alt',
		'url_base': 'mailto:',
		'username': 'me@rosadurante.com',
	}]

	return HttpResponse(json.dumps(context), 'application/json')


def skills(request):

	context = [{
		'name': 'FrontEnd side',
		'list': [{
			'name': 'Javascript',
			'value': 3
		}, {
			'name': 'Backbone',
			'value': 3
		}, {
			'name': 'jQuery',
			'value': 4
		}, {
			'name': 'LESS',
			'value': 4,
		}, {
			'name': 'CSS3',
			'value': 2.5
		}, {
			'name': 'Advanced CSS',
			'value': 3.5
		}, {
			'name': 'HTML5',
			'value': 3
		}, {
			'name': 'HTML',
			'value': 4.5
		}]
	}, {
		'name': 'BackEnd side',
		'list': [{
			'name': 'Django',
			'value': 3.5
		}, {
			'name': 'Python',
			'value': 2.5
		}]
	}, {
		'name': 'More skills',
		'list': [{
			'name':'SCRUM',
			'value': 4.5
		}, {
			'name': 'Git',
			'value': 3
		}, {
			'name': 'TDD',
			'value': 2.5
		}]
	}]

	return HttpResponse(json.dumps(context), 'application/json')


def experience(request):

	context = [{
		'position': 'Frontend developer',
		'company': 'Hogarth Worldwide Ltd',
		'date_begin': 'March 2012',
		'date_end': 'Present',
		'description': 'As a frontend developer I worked on internal tools such as management web applications and public web applications like Zonza.tv doing that projects looks great and useful using technologies like HTML5, CSS3, Javascript and frameworks JS like jQuery, RequireJS and BackboneJS. Also I often give my point of view about design on both platforms'
	}, {
		'position': 'Frontend and Android developer',
		'company': 'Zocolab project',
		'date_begin': 'June 2011',
		'date_end': 'February 2012',
		'description': 'As co-founder of this project of start-up, I worked in very several tasks, but the main are two: first, I did the design and front-end developement of our web page, using Django as a base, and tools like jQuery, jQuery Mobile or Twitter Bootstrap. Also, I did some steps on Android development, doing some little proofs of concept'
	}, {
		'position': 'QA developer',
		'company': 'Yaco Sistemas SL',
		'date_begin': 'June 2010',
		'date_end': 'May 2011',
		'description': 'As part of my job, I participated on some Django complex project, where several system had to operate between them. For that, I wrote a lot of unit tests for each system, and also some integration tests, bewaring that the REST APIs was working properly. In addition, I also did some work as front-end testing, using tools like Selenium IDE'
	}]

	return HttpResponse(json.dumps(context), 'application/json')
