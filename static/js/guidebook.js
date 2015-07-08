$(function() {
	$toc = $('.table-of-contents .collapsible');
	/* Add anchor links to markdown headers */
	$('#post-content').children("h2, h3, h4, h5, h6").each(function(i, el) {
		var $el, icon, id, tagName, link;
		$el = $(el);
		id = $el.attr('id');
		tagName = $el.prop("tagName").toLowerCase();
		link = '<a class="spylink" href="#' + id + '">' + $el.text() + '</a>';
		if (tagName == 'h3') {
			$toc.append('<li class="unit">' +
          					'<div class="collapsible-header">' + link + '</div>' +
          					'<div class="collapsible-body"></div>' +
        				'</li>');
		} else {
			$('.table-of-contents .collapsible > li').last().find('.collapsible-body').append('<li>' + link + '</li>');
		}
		$el.addClass('scrollspy');

		icon = '<i class="fa fa-link"></i>';
		if (id) {
		    return $el.append($("<a />").addClass("header-link").attr("href", "#" + id).html(icon));
		}
    });

    $('.scrollspy').on('scrollSpy:enter', function() {
    	$('.collapsible-header').removeClass('active');
    	$('.spylink.active').parents('.unit').children('.collapsible-header').trigger('click.collapse');
    });
    function containTOC() {
	    $('.table-of-contents').css({
	    	'max-width': $('.table-of-contents').width()
	    });
    }
    containTOC();

    $(document).on('resize', function() {
    	containTOC();
    })

	$('.scrollspy').scrollSpy();
})