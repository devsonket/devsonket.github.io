const fs = require("fs")
const puppeteer = require("puppeteer")

const isItDark = require("./isItDark")

const filesRaw = []
const workingFolder = "../data/"
const files = fs.readdirSync(workingFolder)

files.forEach(file => {
  if (file.endsWith(".json")) {
    const data = require(`../data/${file}`)
    filesRaw.push({ id: data.id, title: data.title, color: data.colorPref })
  }
})

const main = async () => {
  const browser = await puppeteer.launch()

  browser.on("disconnected", () => {
    return 0
  })

  const page = await browser.newPage()

  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 1,
  })

  for (let i = 0; i < filesRaw.length; i++) {
    const imgHTML = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <title>HTML to Generate Thumbnail</title>
          <style>
            @font-face {
              font-family: "Hind Siliguri";
              src: url("./src/assets/fonts/HindSiliguri-Light.woff2") format("woff2"),
                url("./src/assets/fonts/HindSiliguri-Light.woff") format("woff");
              font-weight: 300;
              font-style: normal;
            }

            @font-face {
              font-family: "Hind Siliguri";
              src: url("./src/assets/fonts/HindSiliguri-Regular.woff2") format("woff2"),
                url("./src/assets/fonts/HindSiliguri-Regular.woff") format("woff");
              font-weight: 400;
              font-style: normal;
            }

            @font-face {
              font-family: "Hind Siliguri";
              src: url("./src/assets/fonts/HindSiliguri-Bold.woff2") format("woff2"),
                url("./src/assets/fonts/HindSiliguri-Bold.woff") format("woff");
              font-weight: 800;
              font-style: normal;
            }

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body {
              font-family: "Hind Siliguri";
              background: ${filesRaw[i].color};
              color: ${isItDark(filesRaw[i].color) ? "#fffeff" : "#201f22"}
            }
          </style>
        </head>
        <body>
          <div
            style="height: 100vh; width: 100vw; display: flex; flex-direction: column; align-items: center; justify-content: space-evenly"
          >
            <div style="font-size: 36px; font-weight: bold;">
              <span
                style="display:inline-block; background-color: ${
                  isItDark(filesRaw[i].color) ? "#fffeff" : "#201f22"
                }; color: ${
      filesRaw[i].color
    }; padding: 0 8px; border-radius: 4px; margin-right: 5px;"
                >ডেভ</span
              >সংকেত
            </div>
            <div style="text-align: center; padding: 0 120px;">
              <h2 style="font-size: 72px; line-height: 78px;">${
                filesRaw[i].title
              }</h2>
              <p style="font-size: 22px;">বাংলা ডেভেলপার চিটশিট</p>
            </div>
            <pre style="font-family: consolas; font-weight: bold; font-size: 26px;">
      https://devsonket.com/${filesRaw[i].id}</pre
            >
          </div>
        </body>
      </html>
    `
    page.setExtraHTTPHeaders({
      "Accept-Charset": "utf-8",
      "Content-Type": "text/html; charset=utf-8",
    })
    await page.setContent(imgHTML)
    await page.screenshot({
      type: "jpeg",
      path: `../static/static/thumbnail/${filesRaw[i].id}.jpg`,
      quality: 85,
    })
  }
  await browser.close()
}

main()
