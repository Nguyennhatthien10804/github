function sumCb(a, b) {
    return a + b
}

function subCb(a, b) {
   return a - b
}

function multiCb(a, b) {
   return a * b
}

function divCb(a, b) {
   return a / b
}

function caculate(a, b, cb) {
   return cb(a, b);
}
