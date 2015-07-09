$(function() {
	function autoGrowCards() {
		$('#members .row').each(function(index, row) {
			var $cardContent = $(row).find('.card-content').first();
			console.log($cardContent)
			var $otherCard = $cardContent.parents('.col').siblings();
			if (!$otherCard.length) return;

			var $otherCardContent = $otherCard.find('.card-content');
			console.log($otherCardContent.height(), $cardContent.height())
			if ($otherCardContent.height() > $cardContent.height()) {
				console.log('changing')
				$cardContent.height($otherCardContent.height());
			} else {
				$otherCardContent.height($cardContent.height());
			}
		});
	}
	autoGrowCards();
	$(window).resize(function() {
		$('.card-content').attr('style', '')
		autoGrowCards();
	});
});