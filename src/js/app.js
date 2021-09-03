$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 1500,
		prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.svg" alt=""></button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					dots: true
				}
			}
		]
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	toggleClass('.catalog-item__link')
	toggleClass('.catalog-item__back')

	function toggleClass(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault()
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
			})
		})
	}

	//modal

	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow')
	})

	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow')
	})

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__subtitle').text($('.catalog-item__title').eq(i).text())
			$('.overlay, #order').fadeIn('slow')
		})
	})

});