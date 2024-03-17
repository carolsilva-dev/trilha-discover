function getFlag(flag) {
    console.log(process.argv)
    const index = process.argv.indexOf(flag) + 1
    console.log(`valor do index é: ${index}`)
    return process.argv[index]
}

module.exports = getFlag