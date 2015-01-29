$(function(){

    $.get('http://www.merriam-webster.com/word/index.xml', function (data) {
        $(data).find("item").eq(0).each(function () {
            var el = $(this);

            word = $('#word');
            text = '';

            descr = el.find("description").text();

            text += descr;
            text += el.find("enclosure").text();

            text += '<a class="listen">Listen to a podcast</a>';
            text += '<audio src=' + el.find("enclosure").attr('url') + ' controls></audio>';

            word.html(text);

            $('.listen').on('click', function () {

            	$(this).hide();
            	$('audio').show();
            	
            });


        });
    });

})