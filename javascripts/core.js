function bind_core_events() {

	$('.form_toggle_control a').off('click tap').on('click tap', function(){
		$('.form_toggle_section').not($(this).parents('.form_toggle_section')).removeClass('opened')
		$(this).parents('.form_toggle_section').toggleClass('opened')
	})

	if ($('.form_progress_container').length) {
		$('.form_progress').animate({width: $('.form_progress').attr('data-width')})
	}

	$('.dropdown-trigger').off('click tap').on('click tap', function(){
		$('.dropdown').not($(this).parents('.dropdown')).removeClass('is-active')
		$(this).parents('.dropdown').toggleClass('is-active')
	})

	$('.tabs li a').off('click tap').on('click tap', function(){
		if ($(this).parents('.tabs').hasClass('pricing_toggle')) {
			$('.tabs li').removeClass('is-active')
			$(this).parents('li').addClass('is-active')
			$('.pricingtable').removeClass('monthly annual')
			$('.pricingtable').addClass($(this).parents('li').attr('data-tab'))
		} else {
			var tab = $(this).attr('data-tab')
			$('.tabbed_content_box').removeClass('open')
			$('.tabbed_content_box#' + tab).addClass('open')
			$('.tabs li').removeClass('is-active')
			$(this).parents('li').addClass('is-active')
		}
	})


	// $('form .actions input.button').on('click tap', function(){
	// 	$(this).addClass('is-loading')
	// })

	if ($('canvas#canvas.confetti_container').length) {
		SetGlobals();
		// InitializeButton();
		// InitializeConfetti();

		$(window).resize(function () {
		    W = window.innerWidth;
		    H = window.innerHeight;
		    canvas.width = W;
		    canvas.height = H;
		});
		InitializeConfetti();
		setTimeout(function(){
			DeactivateConfetti();
			setTimeout(function(){
				$('canvas#canvas.confetti_container').remove()
			},5000)
		},2000)
	}

	$('.filepicker input').on('change', function() {
		name = $(this)[0].files[0].name
		$(this).parents('.filepicker').find('span.file-name').text(name)
	});

	$('a.delete_attachment').off('click tap').on('click tap', function(){
		$(this).parents('.field').find('.filepicker').addClass('disabled')
		$(this).parents('.field').find('span.file-name').text('')
	})

	$('.upgrade_button').on('click', function() {
		$(this).addClass('is-loading')
	})

	$('a.cancel_reply').off('click tap').on('click tap', function(){
		$('#comment_parent_id').val('')
		$('#comment_content').val('')
		$('.reply_toolbar .reply_to_name').text('')
		$('.reply_toolbar').hide()
	})

	$('a.reply').off('click tap').on('click tap', function(){
		$('.dropdown').removeClass('is-active')
		parent_id = $(this).attr('data-reply-to-id')
		parent = $(this).parents('.comment')
		user_name = parent.find('strong.username').text()
		$('.reply_toolbar .reply_to_name').text(user_name)
		$('.reply_toolbar').show()
		$('#comment_parent_id').val(parent_id)
	})

}

$(document).on('turbolinks:load',function(event){
	bind_core_events()
})