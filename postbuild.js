const fs = require("promise-fs")
const colors = require('colors-cli')
const files = []

const error = colors.red
const success = colors.green

const walker = async (files, path, nest) => {

    const dirFiles = await fs.readdir(path)

    for (let c = 0; c < dirFiles.length; c++) {
        const file = dirFiles[c]
        const stats = await fs.lstat(`${path}${file}`)

        if (stats.isDirectory()) {
            await walker(files, `${path}${file}/`, `${nest}/${file}`)
        } else {
            files.push(`${nest}/${file}`)
        }
    }
}

const deletor = async (path) => {

    const dirFiles = await fs.readdir(path)

    for (let c = 0; c < dirFiles.length; c++) {
        const file = dirFiles[c]
        const stats = await fs.lstat(`${path}${file}`)

        if (stats.isDirectory()) {
            await deletor(`${path}${file}/`)
        } else {
            await fs.unlink(`${path}${file}`)
        }
    }
}

deletor("./static/")
    .then(() => {
        console.log(success("Deleted all old files"))
        return ""
    })
    .then(() => walker(files, "build/", "."))
    .then(() => {
        // console.log(files)

        const fileWritePromises = files.map(name => {
            return new Promise(async (resolve, reject) => {
                try {
                    const data = await fs.readFile(`build/${name}`)
                    await fs.writeFile(name, data, {flag: "a+"})

                    resolve()
                } catch (err) {
                    reject(err)
                }
            })
        })

        return Promise.all(fileWritePromises)
    })
    .then(() => {
        console.log(success("All files have been written and ready to be deployed."))
    })
    .catch(err => {
        console.log(error(err))
        console.log(error("Please rebuild or checkout to the last stable release"))
    })