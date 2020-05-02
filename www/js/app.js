$('.collection-item').on('click', function () {

    var $badge = $('.badge', this);
    if ($badge.length == 0) {
        $badge = $('<span class="badge brown-text">0</span>').appendTo(this);
    }

    $badge.text(parseInt($badge.text()) + 1);
});

$('#confirmar').on('click', function () {

    var texto = '';

    $('.badge').parent().each(function () {
        var produto = this.firstChild.textContent;
        var quantidade = this.lastChild.textContent;

        texto += produto + ': ' + quantidade + ', ';
    });

    $('#resumo').text(texto);
});

$('.modal-trigger').leanModal();

$('.collection').on('click', '.badge', function () {
    $(this).remove();
    return false;
});

$('.acao-limpar').on('click', function () {
    $('#numero-mesa').val('');
    $('.badge').remove();
});

$('.scan-qrcode').click(function (e) {
    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if (result.text) {
                Materialize.toast('Mesa ' + result.text, 2000);
                $('#numero-mesa').val(result.text);
            }
        },
        function (error) {
            Materialize.toast('Erro ' + error, 2000, 'red-text');
        },
        {
            preferFrontCamera: false, // iOS and Android
            showFlipCameraButton: true, // iOS and Android
            showTorchButton: true, // iOS and Android
            torchOn: true, // Android, launch with the torch switched on (if available)
            saveHistory: true, // Android, save scan history (default false)
            prompt: "Coloque o QR Code dentro da área de escaneamento.", // Android
            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
            formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
            orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
            disableAnimations: true, // iOS
            disableSuccessBeep: false // iOS and Android
        }
    );
});
