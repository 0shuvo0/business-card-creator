const $ = (selector, parent = document) => parent.querySelector(selector)
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)]


const previewContainer = $('.preview__content')

let generatedTemplate = ''


function renderCard(data = defaultData){
    const template = `<svg width="1189" height="679" viewBox="0 0 1189 679" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    
    
    <style>
    @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;900");
    </style>
    <g id="Frame 1" clip-path="url(#clip0_1_2)">
    <rect width="1189" height="679" fill="white"/>
    <g id="ic:round-email">
    <path id="Vector" d="M114.667 468.333H93.3333C91.8667 468.333 90.68 469.533 90.68 471L90.6667 487C90.6667 488.467 91.8667 489.667 93.3333 489.667H114.667C116.133 489.667 117.333 488.467 117.333 487V471C117.333 469.533 116.133 468.333 114.667 468.333ZM114.133 474L104.707 479.893C104.28 480.16 103.72 480.16 103.293 479.893L93.8667 474C93.733 473.925 93.6159 473.824 93.5225 473.702C93.4291 473.58 93.3614 473.441 93.3234 473.293C93.2855 473.144 93.278 472.989 93.3015 472.838C93.3251 472.686 93.3791 472.541 93.4604 472.411C93.5416 472.281 93.6484 472.169 93.7743 472.081C93.9002 471.994 94.0425 471.933 94.1927 471.902C94.3428 471.871 94.4977 471.871 94.6479 471.901C94.7982 471.932 94.9406 471.993 95.0667 472.08L104 477.667L112.933 472.08C113.059 471.993 113.202 471.932 113.352 471.901C113.502 471.871 113.657 471.871 113.807 471.902C113.958 471.933 114.1 471.994 114.226 472.081C114.352 472.169 114.458 472.281 114.54 472.411C114.621 472.541 114.675 472.686 114.698 472.838C114.722 472.989 114.715 473.144 114.677 473.293C114.639 473.441 114.571 473.58 114.477 473.702C114.384 473.824 114.267 473.925 114.133 474Z" fill="#2D2D2D"/>
    </g>
    <g id="Group 1">
    <g id="Frame" clip-path="url(#clip1_1_2)">
    <path id="card_shape_3_outer" d="M1172.94 -174.217C1193.77 -174.217 1214.25 -168.732 1232.29 -158.313C1250.34 -147.893 1265.33 -132.907 1275.75 -114.86L1423.44 140.947C1433.86 158.994 1439.34 179.466 1439.34 200.304C1439.34 221.143 1433.86 241.615 1423.44 259.662L1275.75 515.469C1265.33 533.516 1250.34 548.502 1232.29 558.921C1214.25 569.341 1193.77 574.826 1172.94 574.826L877.555 574.826C856.716 574.826 836.245 569.341 818.198 558.921C800.151 548.502 785.164 533.516 774.745 515.469L627.055 259.662C616.635 241.615 611.15 221.143 611.15 200.304C611.15 179.466 616.635 158.994 627.055 140.947L774.745 -114.86C785.164 -132.907 800.151 -147.893 818.198 -158.313C836.244 -168.732 856.716 -174.217 877.555 -174.217" fill="${data.primaryColor}"/>
    </g>
    <g id="Frame_2" clip-path="url(#clip2_1_2)">
    <path id="card_shape_3_inner" d="M1130.61 -68.8338C1145.57 -68.8564 1160.27 -64.9325 1173.22 -57.4566C1186.16 -49.9807 1196.91 -39.2162 1204.37 -26.2449L1310.16 157.616C1317.62 170.588 1321.54 185.308 1321.51 200.299C1321.49 215.29 1317.53 230.023 1310.03 243.017L1203.69 427.198C1196.19 440.192 1185.41 450.989 1172.44 458.504C1159.47 466.019 1144.76 469.987 1129.8 470.009L917.676 470.329C902.711 470.352 888.015 466.428 875.067 458.952C862.118 451.476 851.372 440.711 843.909 427.74L738.126 243.879C730.663 230.908 726.746 216.187 726.769 201.196C726.791 186.205 730.753 171.472 738.255 158.479L844.592 -25.7026C852.094 -38.6964 862.872 -49.4934 875.843 -57.0083C888.814 -64.5233 903.522 -68.4915 918.486 -68.5141" fill="${data.secondaryryColor}"/>
    </g>
    <rect id="card_company_logo" x="837" y="85" width="273" height="233" fill="url(#pattern0)"/>
    </g>
    <path id="card_shape_1" d="M398.72 16.1325C402.021 16.1275 405.263 16.9932 408.12 18.6425C410.977 20.2918 413.347 22.6667 414.994 25.5284L438.332 66.092C439.978 68.9538 440.843 72.2015 440.838 75.5088C440.833 78.8161 439.959 82.0664 438.304 84.9331L414.843 125.567C413.188 128.434 410.81 130.816 407.949 132.474C405.087 134.132 401.842 135.007 398.541 135.012L351.743 135.083C348.441 135.088 345.199 134.222 342.342 132.573C339.486 130.923 337.115 128.549 335.468 125.687L312.13 85.1233C310.484 82.2616 309.62 79.0139 309.625 75.7066C309.63 72.3993 310.504 69.1489 312.159 66.2822L335.619 25.6481C337.274 22.7814 339.652 20.3994 342.514 18.7414C345.375 17.0834 348.62 16.208 351.922 16.203" fill="${data.primaryColor}"/>
    <g id="Group 2">
    <g id="Frame_3" clip-path="url(#clip3_1_2)">
    <path id="card_shape_2" d="M207.922 560.569C214.237 558.877 220.886 558.877 227.201 560.569C233.516 562.261 239.274 565.586 243.897 570.208L309.424 635.735C314.047 640.358 317.371 646.116 319.063 652.431C320.755 658.746 320.755 665.395 319.063 671.71L295.079 761.221C293.387 767.536 290.062 773.294 285.439 777.917C280.817 782.54 275.058 785.864 268.743 787.556L179.232 811.541C172.917 813.233 166.268 813.233 159.953 811.541C153.639 809.849 147.88 806.524 143.258 801.901L77.7309 736.375C73.1081 731.752 69.7835 725.993 68.0915 719.679C66.3994 713.364 66.3994 706.715 68.0915 700.4L92.0759 610.889C93.768 604.574 97.0925 598.816 101.715 594.193C106.338 589.57 112.096 586.245 118.411 584.553" fill="${data.primaryColor}"/>
    </g>
    <g id="Frame_4" clip-path="url(#clip4_1_2)">
    <path id="Vector_2" d="M203.652 595.941C208.185 594.719 212.957 594.715 217.488 595.929C222.019 597.143 226.149 599.532 229.464 602.857L276.449 649.984C279.764 653.309 282.146 657.452 283.357 661.997C284.567 666.541 284.563 671.328 283.345 675.874L266.076 740.322C264.858 744.869 262.468 749.016 259.148 752.347C255.827 755.677 251.693 758.074 247.159 759.296L182.905 776.616C178.372 777.838 173.6 777.843 169.07 776.628C164.539 775.414 160.408 773.025 157.093 769.7L110.108 722.573C106.793 719.248 104.411 715.105 103.201 710.561C101.99 706.016 101.994 701.23 103.213 696.683L120.481 632.235C121.7 627.688 124.089 623.541 127.41 620.211C130.73 616.88 134.865 614.484 139.398 613.262" fill="white"/>
    </g>
    </g>
    <path id="Vector_3" d="M118.744 516.155L105.872 503.293C105.779 503.2 105.669 503.126 105.548 503.076C105.427 503.026 105.297 503 105.166 503C105.034 503 104.905 503.026 104.783 503.076C104.662 503.126 104.552 503.2 104.459 503.293L91.5875 516.155C91.2125 516.53 91 517.04 91 517.571C91 518.674 91.8969 519.571 93 519.571H94.3563V528.749C94.3563 529.302 94.8031 529.749 95.3563 529.749H103.166V522.749H106.666V529.749H114.975C115.528 529.749 115.975 529.302 115.975 528.749V519.571H117.331C117.862 519.571 118.372 519.362 118.747 518.984C119.525 518.202 119.525 516.937 118.744 516.155Z" fill="#2D2D2D"/>
    <g id="Group 3">
    <mask id="mask0_1_2" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="95" y="84" width="259" height="234">
    <path id="Vector_4" d="M270.556 84.3461C277.045 84.3423 283.419 86.0478 289.037 89.2912C294.654 92.5346 299.318 97.2015 302.559 102.823L348.502 182.505C351.743 188.126 353.448 194.504 353.444 200.997C353.44 207.491 351.729 213.871 348.481 219.496L302.446 299.231C299.198 304.856 294.529 309.528 288.907 312.778C283.286 316.028 276.91 317.741 270.421 317.745L178.444 317.798C171.955 317.802 165.581 316.096 159.963 312.853C154.346 309.609 149.682 304.943 146.441 299.321L100.498 219.639C97.2566 214.018 95.5522 207.64 95.5559 201.147C95.5597 194.653 97.2714 188.274 100.519 182.648L146.554 102.913C149.802 97.2881 154.471 92.6157 160.093 89.3659C165.714 86.116 172.09 84.4031 178.579 84.3993" fill="#5583C2"/>
    </mask>
    <g mask="url(#mask0_1_2)">
    <rect id="image 1" x="92" y="76" width="261" height="263" fill="url(#pattern1)"/>
    </g>
    </g>
    <text id="card_user_name" fill="#151515" xml:space="preserve" style="white-space: pre" font-family="'Nunito'" font-size="58" font-weight="800" letter-spacing="0.01em"><tspan x="88" y="395.091">${data.name}</tspan></text>
    <text id="card_user_designation" fill="${data.primaryColor}" xml:space="preserve" style="white-space: pre" font-family="'Nunito'" font-size="33" font-weight="500" letter-spacing="-0.02em"><tspan x="88" y="435">${data.designation}</tspan></text>
    <text id="card_user_email" fill="#3D3D3D" xml:space="preserve" style="white-space: pre" font-family="'Nunito'" font-size="24" letter-spacing="-0.02em"><tspan x="126" y="487.227">${data.email}</tspan></text>
    <text id="card_user_address" fill="#3D3D3D" xml:space="preserve" style="white-space: pre" font-family="'Nunito'" font-size="24" letter-spacing="-0.02em"><tspan x="126" y="524.227">${data.address}</tspan></text>
    </g>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_1_2" transform="scale(0.0018315 0.00214592)"/>
    </pattern>
    <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image1_1_2" transform="matrix(0.00201533 0 0 0.002 -0.00383142 0)"/>
    </pattern>
    <clipPath id="clip0_1_2">
    <rect width="1189" height="679" fill="white"/>
    </clipPath>
    <clipPath id="clip1_1_2">
    <rect width="831.002" height="831.002" fill="white" transform="translate(873.161 -367.281) rotate(30)"/>
    </clipPath>
    <clipPath id="clip2_1_2">
    <rect width="596.244" height="598.322" fill="white" transform="translate(1235.95 -164.645) rotate(75)"/>
    </clipPath>
    <clipPath id="clip3_1_2">
    <rect width="260.707" height="260.707" fill="white" transform="translate(101.403 526.405) rotate(15)"/>
    </clipPath>
    <clipPath id="clip4_1_2">
    <rect width="187.057" height="187.709" fill="white" transform="translate(227.795 558.353) rotate(60)"/>
    </clipPath>
    <image id="image0_1_2" data-name="image.png" width="546" height="466" xlink:href="${data.logo}"/>
    <image id="image1_1_2" data-name="image.png" width="500" height="500" xlink:href="${data.dp}"/>
    </defs>
    </svg>
    `
    generatedTemplate = template
    previewContainer.innerHTML = `<span>${template}</span>`
}

async function init(){
    const dp = await getBase64FromPath(defaultData.dp)
    const logo = await getBase64FromPath(defaultData.logo, false)
    defaultData.dp = dp
    defaultData.logo = logo
    renderCard({
        ...defaultData
    })
    console.log(dp);
}
init()


const fileInputs = $$('.file-input')
fileInputs.forEach(createFileInput)

function createFileInput(input){
    const file = $('input.file', input)
    const label = $('.file-text', input)
    
    const defaultLabel = label.innerText

    file.addEventListener('change', () => {
        if(file.files.length){
            label.innerText = file.files[0].name
        }else{
            label.innerText = defaultLabel
        }
    })
}

const colorInputs = $$('.color-input')
colorInputs.forEach(createColorInput)

function createColorInput(input){
    const color = $('input.color', input)
    const label = $('.file-text', input)
    
    color.value = label.innerText

    color.addEventListener('input', () => {
        label.innerText = color.value
    })
}


// Inputs
const nameInput = $('.name-input')
const designationInput = $('.designation-input')
const dpInput = $('.dp-input')
const logoInput = $('.logo-input')
const emailInput = $('.email-input')
const addressInput = $('.address-input')
const primaryColorInput = $('.primary-color-input')
const secondaryColorInput = $('.secondary-color-input')


async function  resolveImg(img, square, cb){
    img.onload = () => {
        const imgWidth = img.width
        const imgHeight = img.height
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        if(square){
            const cropSize = Math.min(imgWidth, imgHeight)
            canvas.width = cropSize
            canvas.height = cropSize
            ctx.drawImage(img, (imgWidth - cropSize) / 2, (imgHeight - cropSize) / 2, cropSize, cropSize, 0, 0, cropSize, cropSize)
        }else{
            canvas.width = imgWidth
            canvas.height = imgHeight
            ctx.drawImage(img, 0, 0, imgWidth, imgHeight)
        }


        cb(canvas.toDataURL('image/png'))

    }
}

function getBase64(file, square = true){
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            const img = new Image()
            img.src = reader.result

            resolveImg(img, square, resolve)
        }
    })
}

function getBase64FromPath(path, square = true){
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = path
        resolveImg(img, square, resolve)
    })
}



const allInputs = [nameInput, designationInput, dpInput, logoInput, emailInput, addressInput, primaryColorInput, secondaryColorInput]
allInputs.forEach(input => {
    input.addEventListener('input', async () => {
        const data = {
            ...defaultData
        }

        if(nameInput.value && nameInput.value.trim()) data.name = nameInput.value.trim()
        if(designationInput.value && designationInput.value.trim()) data.designation = designationInput.value.trim()
        if(emailInput.value && emailInput.value.trim()) data.email = emailInput.value.trim()
        if(addressInput.value && addressInput.value.trim()) data.address = addressInput.value.trim()
        if(primaryColorInput.value && primaryColorInput.value.trim()){
            data.primaryColor = primaryColorInput.value.trim()
            document.body.style.backgroundColor = primaryColorInput.value.trim()
        }
        if(secondaryColorInput.value && secondaryColorInput.value.trim()) data.secondaryryColor = secondaryColorInput.value.trim()
        
        if(dpInput.files.length && dpInput.files[0]){
            data.dp = await getBase64(dpInput.files[0])
        }else{

        }

        if(logoInput.files.length && logoInput.files[0]){
            data.logo = await getBase64(logoInput.files[0], false)
        }

        renderCard(data)
    })

})


const saveSVGBtn = $('.btn-save-svg')
saveSVGBtn.addEventListener('click', () => {
    const svg = generatedTemplate
    const blob = new Blob([svg], {type: "image/svg+xml;charset=utf-8"})
    
    const a = document.createElement('a')
    a.download = 'card.svg'
    a.href = window.URL.createObjectURL(blob)
    a.click()
})


const savePNGBtn = $('.btn-save-png')
savePNGBtn.addEventListener('click', () => {
    const svg = generatedTemplate
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = 'data:image/svg+xml;base64,' + btoa(svg)
    img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        const png = canvas.toDataURL('image/png')
        const blob = dataURItoBlob(png)
        const a = document.createElement('a')
        a.download = 'card.png'
        a.href = window.URL.createObjectURL(blob)
        a.click()
    }
})

function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1])
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    const ab = new ArrayBuffer(byteString.length)
    const ia = new Uint8Array(ab)
    for (let i = 0; i < byteString.length; i++)
    {
        ia[i] = byteString.charCodeAt(i)
    }
    return new Blob([ab], {type: mimeString})
}

const printBtn = $('.btn-print-card')
printBtn.addEventListener('click', () => {
    const svg = generatedTemplate
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = 'data:image/svg+xml;base64,' + btoa(svg)
    img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0)
        const png = canvas.toDataURL('image/png')
        const blob = dataURItoBlob(png)
        const url = window.URL.createObjectURL(blob)
        const iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = url
        document.body.appendChild(iframe)
        iframe.contentWindow.print()
    }
})


const createNewBtn = $('.btn-create-new')
createNewBtn.addEventListener('click', () => {
    allInputs.forEach(input => {
        input.value = ''
    })
    renderCard()
})

const colors = [
    ['#72195A', '#421736'],
    ['#44BBA4', '#358D7C'],
    ['#AF1B3F', '#820725'],
    ['#F08700', '#894D00'],
    ['#2E282A', '#585355'],
    ['#B497D6', '#CAA7F3'],
    ['#CACFD6', '#85878A'],
    ['#FF0000', '#A80000'],
    ['#71A9F7', '#B5D4FF']
]
const totalColors = colors.length
let i = 0
function cycleCards(){
    const intervalFn = () => {
        renderCard({
            ...defaultData,
            primaryColor: colors[i % totalColors][0],
            secondaryryColor: colors[i % totalColors][1]
        })
        document.body.style.backgroundColor = colors[i % totalColors][0]
        i++
    }
    const interval = setInterval(intervalFn, 1500)
    window.addEventListener('click', () => clearInterval(interval))
}
cycleCards()