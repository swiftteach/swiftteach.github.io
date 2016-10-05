(function($) {
	$(function() {
		$('.style-changer .scalia-combobox').each(function() {
			$(this).combobox();
		});

		$('#ssc-concept-selector, #ssc-sample-selector').change(function () {
			$.cookie('scalia_top_area_style', '', { expires: -1, path: '/' });
			$.cookie('scalia_logo_position', '', { expires: -1, path: '/' });
			$.cookie('scalia_page_layout_style', '', { expires: -1, path: '/' });
			$.cookie('scalia_basic_outer_background_image', '', { expires: -1, path: '/' });
		});

		$('#ssc-concept-selector, #ssc-sample-selector').change(function() {
			window.location.href = $(this).val();
		});

		$('#ssc-theme-selector').change(function() {
			window.open($(this).val(), '_blank');
		});

		$('.style-changer .backgrounds input').change(function() {
			$('.style-changer .backgrounds a').removeClass('active');
			$('.style-changer .backgrounds a[href="'+$(this).val()+'"]').addClass('active');
		}).trigger('change');

		$('.style-changer .backgrounds a').click(function(e) {
			e.preventDefault();
			$('.style-changer .backgrounds input').val($(this).attr('href')).trigger('change');
		});

		$(window).load(function() {
			if($.cookie('style_changer_status') == undefined || $.cookie('style_changer_status') == 'open') {
				$('.style-changer-holder').addClass('collapsed');
				setTimeout(function() {
					if($.cookie('style_changer_status') == undefined) {
						$('.style-changer-holder').removeClass('collapsed');
						$.cookie('style_changer_status', 'closed', { path: '/' });
					}
				}, 3000);
			}
		});

		$('.ssc-button').click(function(e) {
			e.preventDefault();
			$('.style-changer-holder').toggleClass('collapsed');
			if($('.style-changer-holder').is('.collapsed')) {
				$.cookie('style_changer_status', 'open', { path: '/' });
				$('body, html').animate({scrollTop: 0});
			} else {
				$.cookie('style_changer_status', 'closed', { path: '/' });
			}
		});

	});
})(jQuery);