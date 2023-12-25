var count = 0;

var sliderImageHOME = document.querySelector("#sliderImageHOME");
sliderImageHOME.src = imagesListSlider[count];


function backsliderImageHOME() {
    if (count === 0) {
        count = imagesListSlider.length - 1;
    } else {
        count = count - 1;
    }
    sliderImageHOME.src = imagesListSlider[count];
}

function nextsliderImageHOME() {
    if (count < imagesListSlider.length - 1) {
        count = count + 1;
    } else {
        count = 0;
    }
    sliderImageHOME.src = imagesListSlider[count];
}
