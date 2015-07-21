$(function() {
	var $rankingsTableHeader = $('#rankings-table-header');
	$table = $('#rankings-table')
	$rankingsTableHeader.pushpin({
		top: $table.offset().top - 100,
		bottom: $table.offset().top - 118 + $table.height() - $rankingsTableHeader.height()
	});
});
