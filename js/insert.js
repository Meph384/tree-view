$(function () {
    var options = {
        placeholderCss: {
            'background-color': '#c0c0c0'
        },
        isAllowed: function (cEl, hint) {
                hint.css('background-color', '#99ff99');
                return true;
        },
        opener: {
            active: true,
            as: 'html', // if as is not set plugin uses background image
            close: '<i class="fa fa-minus c1"></i>',
            open: '<i class="fa fa-plus c2"></i>',
            openerCss: {
                'display': 'inline-block',
                'float': 'left',
                'margin-left': '-40px',
                'margin-right': '5px',
                'font-size': '1.1em'
            }
        },
    };

    $('#sTree2').sortableLists(options);
});

document.getElementById("text")
    .addEventListener("keydown", e => {
    if (e.key === 'Enter') {
        document.getElementById("add").click();
    }
});