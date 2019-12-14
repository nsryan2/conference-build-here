
$('#show').click(function()
{
	$('#show').css('display','none');
	$('#data').show();
	$('#hide').show();
});	

$('#hide').click(function()
{
	$('#hide').css('display','none');
	$('#data').hide();
	$('#show').show();
});	