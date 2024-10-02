let Saturate  = document.getElementById("Saturate")
let Contrast  = document.getElementById("Contrast")
let Brightness  = document.getElementById("Brightness")
let Sepia  = document.getElementById("Sepia")
let GrayScale  = document.getElementById("GrayScale")
let Blur  = document.getElementById("Blur")
let rotate  = document.getElementById("rotate")
let opacity = document.getElementById("opasity")

let upload = document.querySelector(".photo .upload")

let img  = document.getElementById("img")
let uploadfile = document.getElementById("upload")
let reset  = document.getElementById("reset")
let download  = document.getElementById("dowload")

window.onload = function(){
    reset.style.display = "none"
    download.style.display = "none"
}

uploadfile.onchange = function(){
    reset.style.display = "block"
    download.style.display = "block"
    let file = new FileReader()
    file.readAsDataURL(uploadfile.files[0])
    file.onload = function(){
        img.src = file.result
    }
}

let filters = document.querySelectorAll(".line .myRange")
filters.forEach((filter) => {
    filter.addEventListener("input" , function(){
        img.style.filter = `
        saturate(${Saturate.value})
        contrast(${Contrast.value})
        brightness(${Brightness.value})
        sepia(${Sepia.value})
        grayScale(${GrayScale.value})
        blur(${Blur.value}px)
        hue-rotate(${rotate.value}deg)
        opacity(${opacity.value})
        `
    })
})

reset.addEventListener("click" , function(){
    Saturate.value = "1"
    Contrast.value = "1"
    Brightness.value ="1"
    Sepia.value = "0"
    GrayScale.value = "0"
    Blur.value = "0"
    rotate.value = "0"
    opacity.value = "0"
    img.style.filter = `
        saturate(${Saturate.value})
        contrast(${Contrast.value})
        brightness(${Brightness.value})
        sepia(${Sepia.value})
        grayScale(${GrayScale.value})
        blur(${Blur.value}px)
        hue-rotate(${rotate.value}deg)
        opacity(${opacity.value})
    `
})

let canvas = document.createElement("canvas");
let ctx = canvas.getContext("2d");

download.onclick = function(){
    // مسح الكانفاس
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // تطبيق الفلاتر على الكانفاس
    ctx.filter = `
        saturate(${Saturate.value})
        contrast(${Contrast.value})
        brightness(${Brightness.value})
        sepia(${Sepia.value})
        grayscale(${GrayScale.value})
        blur(${Blur.value}px)
        hue-rotate(${rotate.value}deg)
        opacity(${opacity.value})
    `;
    
    // رسم الصورة في الكانفاس
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    // إنشاء رابط لتحميل الصورة
    let link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = canvas.toDataURL();  // تحويل الصورة في الكانفاس إلى بيانات URL
    link.click();  // تحميل الصورة
}













