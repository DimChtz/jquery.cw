if ( typeof jQuery === 'undefined' ) { throw new Error('jQuery is not loaded.'); }

(function($, window){

    $.confirm = function( opt ) {

        $('<div/>', { class: 'cw-wrapper ' + opt['theme'] || 'dark' })
            .css({ left: ($(window).width() - 460) / 2 + 'px' })
            .append($('<div/>', { class: 'cw-header', text: opt['title'] || '' }))
            .append($('<div/>', { class: 'cw-content', text: opt['content'] || '' }))
            .append($('<div/>', { class: 'cw-button blue', text: opt['okay']['text'] || 'Yes' }).click(function() {
                $('#cw-screencover').click(); (typeof opt['okay']['action'] === 'function' ? opt['okay']['action'] : function(){})(); }))
            .append($('<div/>', { class: 'cw-button', text: opt['cancel']['text'] || 'No' }).click(function() {
                $('#cw-screencover').click(); (typeof opt['cancel']['action'] === 'function' ? opt['cancel']['action'] : function(){})(); }))
            .animate({ top: '70px', opacity: '1.0' }, 900)
            .appendTo( $('body')
                .append($('<div/>', { id: 'cw-screencover' })
                .animate({ opacity: '1.0' }, 900)
                .click(function() {
                    $('.cw-wrapper').animate({ top: '-300px', opacity: '0.0' }, 900, function() { $(this).remove(); });
                    $(this).animate({ opacity: '0.0' }, 900, function() { $(this).remove(); });
                }))
            );
        
    }

    window.$cw = $.confirm;

})(jQuery, window);