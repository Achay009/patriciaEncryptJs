const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const patcrypt = {}

patcrypt.encrypt = function(){

}

patcrypt.encryptFile = function(filePath, publicKeyPath){
    const publicKey = fs.readFileSync(publicKeyPath)
    const file = fs.readFileSync(filePath)
    const encrypted = crypto.publicEncrypt(publicKey, file)
    const encryptedFilePath = path.join(path.dirname(filePath), path.basename(filePath, path.extname(filePath)) + '.pat')
    fs.writeFileSync(encryptedFilePath, encrypted)
}


patcrypt.decryptFile = function(filePath, privateKeyPath){
    const privateKey = fs.readFileSync(privateKeyPath)
    const file = fs.readFileSync(filePath)
    const decrypted = crypto.privateDecrypt(privateKey, file)
    const decryptedFilePath = path.join(path.dirname(filePath), path.basename(filePath, path.extname(filePath)) + '.pat')
    fs.writeFileSync(decryptedFilePath, decrypted)
}

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