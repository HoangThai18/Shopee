function dateCount() {
    const countdownDate = new Date(2024, 0, 1, 0, 0, 0).getTime()

    const countdown = setInterval(() => {
        const now = new Date().getTime()
        const distance = countdownDate - now

        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = String(
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        ).padStart(2, '0')
        const minutes = String(
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        ).padStart(2, '0')
        const seconds = String(
            Math.floor((distance % (1000 * 60)) / 1000)
        ).padStart(2, '0')

        document.getElementById('days').innerHTML = days
        document.getElementById('hours').innerHTML = hours
        document.getElementById('minutes').innerHTML = minutes
        document.getElementById('seconds').innerHTML = seconds

        if (distance < 0) {
            clearInterval(countdown)
            document.querySelector('.countdown-text').innerHTML = 'Đã kết thúc'
            document.querySelector('.timer').style.display = 'none'
        }
    }, 1000)
}
function sliderBanner() {
    let currentImgIndex = 0
    const imageElements = document.querySelectorAll('.image-container img')
    const totalImages = imageElements.length
    const dotsFirst = document.querySelector('.banner-index')
    const prevButtonFirst = document.querySelector('.prev-btn')
    const nextButtonFirst = document.querySelector('.next-btn')
    let slideshowIntervalFirst
    function showImageF(index) {
        if (index >= 0 && index < totalImages && imageElements[index]) {
            imageElements.forEach((img) => {
                img.classList.remove('active')
            })

            imageElements[index].classList.add('active')
            updateDotsF(index)
        } else {
            console.error(
                'Invalid index or element:',
                index,
                imageElements[index]
            )
        }
    }

    function updateDotsF(index) {
        const dotsF = document.querySelectorAll('.dot')
        dotsF.forEach((dot) => {
            dot.classList.remove('active-dot')
        })

        dotsF[index].classList.add('active-dot')
    }

    function nextImageF() {
        currentImgIndex = (currentImgIndex + 1) % totalImages
        showImageF(currentImgIndex)

        const offset = currentImgIndex * -100
        document.querySelector(
            '.image-container'
        ).style.transform = `translateX(${offset}%)`
        if (currentImgIndex === 0) {
            document.querySelector(
                '.banner-images'
            ).style.transform = `translateX(0%)`
        } else if (currentImgIndex === totalImages - 1) {
            document.querySelector(
                '.banner-images'
            ).style.transform = `translateX(-${(totalImages - 7) * 100}%)`
        }
    }
    for (let i = 0; i < totalImages; i++) {
        const dotF = document.createElement('span')
        dotF.classList.add('dot')
        dotF.addEventListener('click', () => {
            currentImgIndex = i
            showImageF(currentImgIndex)

            const offset = currentImgIndex * -100
            document.querySelector(
                '.image-container'
            ).style.transform = `translateX(${offset}%)`
        })
        dotsFirst.appendChild(dotF)
    }

    showImageF(currentImgIndex)

    function startSlideshow() {
        slideshowIntervalFirst = setInterval(nextImageF, 3000)
    }

    s
    startSlideshow()

    prevButtonFirst.addEventListener('click', () => {
        clearInterval(slideshowIntervalFirst)
        currentImgIndex = (currentImgIndex - 1 + totalImages) % totalImages
        showImageF(currentImgIndex)

        const offset = currentImgIndex * -100
        document.querySelector(
            '.banner-images'
        ).style.transform = `translateX(${offset}%)`

        startSlideshow()
    })

    nextButtonFirst.addEventListener('click', () => {
        clearInterval(slideshowIntervalFirst)
        currentImgIndex = (currentImgIndex + 1) % totalImages
        showImageF(currentImgIndex)

        const offset = currentImgIndex * -100
        document.querySelector(
            '.banner-images'
        ).style.transform = `translateX(${offset}%)`

        startSlideshow()
    })
}
function sliderSubBanner() {
    let currentImgIndexSub = 0
    const imageElementsSub = document.querySelectorAll(
        '.shopee-banner-carousel .show-banner-carousel img'
    )
    const totalImagesSub = imageElementsSub.length
    const dotsContainer = document.querySelector('.stardust-carousel-dots')
    const prevButton = document.querySelector('.prev-btn')
    const nextButton = document.querySelector('.next-btn')
    let slideshowInterval
    function showImage(index) {
        imageElementsSub.forEach((img) => {
            img.classList.remove('active')
        })

        imageElementsSub[index].classList.add('active')
        updateDots(index)
    }

    function updateDots(index) {
        const dots = document.querySelectorAll('.dot-sub')
        dots.forEach((dot) => {
            dot.classList.remove('active-dot-sub')
        })

        dots[index].classList.add('active-dot-sub')
    }

    function nextImage() {
        currentImgIndexSub = (currentImgIndexSub + 1) % totalImagesSub
        showImage(currentImgIndexSub)

        const offset = currentImgIndexSub * -100
        document.querySelector(
            '.show-banner-carousel'
        ).style.transform = `translateX(${offset}%)`
    }

    for (let i = 0; i < totalImagesSub; i++) {
        const dot = document.createElement('div')
        dot.classList.add('dot-sub')
        dot.addEventListener('click', () => {
            currentImgIndexSub = i
            showImage(currentImgIndexSub)

            const offset = currentImgIndexSub * -100
            document.querySelector(
                '.show-banner-carousel'
            ).style.transform = `translateX(${offset}%)`
        })
        dotsContainer.appendChild(dot)
    }

    showImage(currentImgIndexSub)

    function startSlideshow() {
        slideshowInterval = setInterval(nextImage, 3000)
    }

    startSlideshow()

    prevButton.addEventListener('click', () => {
        clearInterval(slideshowInterval)
        currentImgIndexSub =
            (currentImgIndexSub - 1 + totalImagesSub) % totalImagesSub
        showImage(currentImgIndexSub)

        const offset = currentImgIndexSub * -100
        document.querySelector(
            '.show-banner-carousel'
        ).style.transform = `translateX(${offset}%)`

        startSlideshow()
    })

    nextButton.addEventListener('click', () => {
        clearInterval(slideshowInterval) // Ngừng bộ đếm thời gian tự động
        currentImgIndexSub = (currentImgIndexSub + 1) % totalImagesSub
        showImage(currentImgIndexSub)

        const offset = currentImgIndexSub * -100
        document.querySelector(
            '.show-banner-carousel'
        ).style.transform = `translateX(${offset}%)`

        startSlideshow()
    })
}
