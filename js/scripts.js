$(document).ready(function () {
	$('.navLink').click(function(e)
	{ 
		navClick(e) 
	});
	$('.dot').click(function(e)
	{ 
		dotClick(e) 
	});
	function navClick(e)
	{
		$('#blurbs div').removeClass();
		x = e.target.id
		$('#contentBox').removeClass();
		$('#contentBox').addClass(x);
	};

	function dotClick(e)
	{
		
		x = e.target.id
		y = 'b' + x;
		$('#blurbs div').removeClass();
		$('#' + y).addClass('active');
	};
});