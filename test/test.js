

import QrCode from 'qrcode-reader'

const qr = new QrCode()

qr.callback = (result, err) => {
    if (err) {
        console.log('okerr');
    } else {
        console.log(result);
    }
}

qr.decode('data:image/png;base64,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')