const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const patcrypt = {}

patcrypt.encrypt = function(){

}

patcrypt

patcrypt.generateKeyPair = function(){
    const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: 'password'
        }
    })
    fs.writeFileSync('private.pem', privateKey)
    fs.writeFileSync('public.pem', publicKey)
}

patcrypt.generateKeyPair();