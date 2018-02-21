const path = require('path')
const utils = require('./utils')

const filePath = path.resolve('node_modules/@ngtools/webpack/src')
const fileName = 'compiler_host.d.ts'

let fileText = utils.readFromFile(filePath, fileName)

const missingFields = `
    readonly atimeMs: number;
    readonly mtimeMs: number;
    readonly ctimeMs: number;
    readonly birthtimeMs: number;`

fileText = fileText.replace(missingFields, '')

const newText = `readonly birthtime: Date;${missingFields}`

fileText = fileText.replace('readonly birthtime: Date;', newText)

utils.writeToFile(filePath, fileName, fileText)
