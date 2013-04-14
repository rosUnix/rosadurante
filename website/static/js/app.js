define('app', ['jquery', 'underscore', 'Backbone', 'Mustache'], function($, _, Backbone, Mustache) {

  	/** Define all libraries we go to use along the frontend.
        That's means, jQuery, Underscore and Backbone. **/

    var baseView = Backbone.View.extend({

	    	initialize: function (options) {
	    		this.el = options.el;
	    		this.$el = $(this.el);

                // Remove default datas inside this block.
                this.$el.children().remove();

	    		_.bindAll(this, 'render', 'render_element');

	    		this.template = options.template;
	    		this.parent = options.parent;

	    		this.collection = new Backbone.Collection();
	    		this.collection.url = function () {
	    			return options.url;
	    		};

	    		var self = this;
	    		this.collection.fetch({ success: function () { self.render(); } });
	    	},

	    	render: function () {
	    		var self = this;
	    		this.collection.each(function (model) {
    				self.$el.each( function (i, view) {
    					$(view).append(self.render_element(model));
    				});
	    		});

	    		this.trigger('rendered');
	    	},

	    	render_element: function (model) {
	    		return Mustache.render(this.template, model.toJSON());
	    	}
    	}),

    	skillView = baseView.extend({

    		initialize: function (options) {
    			baseView.prototype.initialize.call(this, options);

    			this.bind('rendered', this.show_skills, this);
    		},

    		show_skills: function () {
    			var self = this,
    				i;
    			this.collection.each( function (item) {
    				item.get('list').forEach( function (skill) {
    					$element = $(self.el).find('.' + skill.name.split(' ')[0] + ' .blocks');
    					for (i = 1; i <= skill.value; i++) {
    						$element.append('<div class="one-block"></div>');
    					}
    					if ($element.find('.one-block').length < skill.value) {
    						// Means that Value has 0.5 more.
    						$element.append('<div class="half-block"></div>');
    					}
    				});
    			});
    		}
    	}),

    	appView = Backbone.View.extend({

    		exp_template: '<li>' +
    			'<label>{{ date_begin }} - {{ date_end }}</label>' +
	    		'<p class="highlight"><a href="{{ company_url }}" target="_blank">{{ company }}</a></p><p>{{ position }}</p>' +
	    		'<p class="description">{{ description }}</p>' +
	    		'</li>',
	    	skills_template: '<div>' +
	    		'<h3>{{ name }}</h3>' +
	    		'<ul>{{#list}}<li class="{{ name }}"><div class="label"><p>{{ name }}</p></div>' +
	    		'<div class="blocks"></div></li>{{/list}}</ul>' +
	    		'</div>',
	    	social_networks_template: '<li class="{{ social_name }}">' +
	    		'<div><a href="{{ url_base }}{{ username }}" target="_blank">' +
	    		'<span class="icon-{{ social_name }}"></span></a></div>' +
	    		'</li>',

	  		initialize: function (options) {

	  			this.el = options.el;
	  			this.$el = $(this.el);

	  			this.experience = new baseView({
	  				el: this.$el.find('ul.experience'),
	  				parent: this,
	  				url: '/experience',
	  				template: this.exp_template
	  			});

	  			this.social_networks = new baseView({
	  				el: this.$el.find('ul.social-networks'),
	  				parent: this,
	  				url: '/social_networks',
	  				template: this.social_networks_template

	  				/* TODO: behaviour */
	  			});

	  			this.skills = new skillView({
	  				el: this.$el.find('div.skills'),
	  				parent: this,
	  				url: '/skills',
	  				template: this.skills_template

	  				/* TODO: behaviour */
	  			});
	  		}
  		}),

		app = new appView({
			el: $('html'),
		});
});
