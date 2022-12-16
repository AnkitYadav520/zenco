

// slideshow
const slideshowDivs = () => {
    for (let index = 1; index <= 5; index++) {
        const div = document.createElement('div');
        const img = document.createElement('img');

        img.src = `img/slideshow/section-1-bg-${index}.jpg`;

        // img.style.transition = "scale 10s";
        img.classList.add('img-style');

        div.appendChild(img);

        index === 1 && div.classList.add('change');

        const slideShow = document.querySelector('.slideshow');
        slideShow.appendChild(div);
    }
}

slideshowDivs();
// End of slideshowDivs

// slideshow
const divs = document.querySelectorAll('.slideshow div');
let count = 1;

const slideshow = ()=>{
    setInterval(()=>{

        let div = document.querySelector('.slideshow div.change');
        
        div.classList.remove('change');

        if(count < divs.length){
            div.nextElementSibling.classList.add('change');
        }else{
            divs[0].classList.add('change');
            count = 1;
        }
        count++;
    }, 13000);
}

slideshow();
// end of slideshow

// Sidebar
document.querySelector(".hamburger-menu").addEventListener("click", ()=>{
    document.querySelector('.front-page').classList.toggle('changeSidebar');
    // execute after some delay
    if(window.innerWidth < 1000) {
        setTimeout(()=> {
            document.querySelector('.front-page').classList.toggle('change-delay');
        }, 100);
    }else {
        setTimeout(()=> {
            document.querySelector('.front-page').classList.toggle('change-delay');
        }, 500); 
    }
});
// end of sidebar

// navbar
const dropdownItems = document.querySelectorAll(".dropdown-hover");
const navbarEl = document.querySelector('.navbar-wrapper');
const menuIcon = document.querySelector('.menu1');
const navbar = document.querySelector('.navbar');

if(window.innerWidth < 1000){
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change');

        if(!navbar.classList.contains('change')) {
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.style.left = '-20rem';
            });
        }
    });

    document.querySelectorAll('.show-dropdown').forEach(link => {
        link.addEventListener('click', () => {
            link.nextElementSibling.style.left = '0';
        });
    }); 
    
    document.querySelectorAll('.dropdown-heading-link').forEach(headingLink => {
        headingLink.addEventListener('click', () => {
            headingLink.parentElement.parentElement.style.left = '-20rem';
        });
    });
    
}else{
    dropdownItems.forEach(dropdownItem => {

    dropdownItem.addEventListener('mouseover', () => {
        dropdownItem.lastElementChild.style.cssText = 'opacity: 1;visibility: visible';

        navbarEl.style.background= 'linear-gradient(to right,#066399, #2f90dfc9, #0663992e )';
        
        dropdownItem.firstElementChild.firstElementChild.style.rotate = '180deg';
    });

    dropdownItem.addEventListener('mouseout', () => {
        dropdownItem.lastElementChild.style.cssText = 'opacity: 0;visibility: hidden;';

        navbarEl.style.background = 'none';

        dropdownItem.firstElementChild.firstElementChild.style.rotate = '0deg';
        });
    });
}


// end of navbar

// reach us section video
const video = document.querySelector(".video-wrapper .video");

const button = document.querySelector(".video-wrapper .buttons i");

const bar = document.querySelector(".video-wrapper .video-bar");

const playPause = () => {
    if(video.paused) {
        video.play();
        button.className = 'far fa-pause-circle';
        video.style.opacity = '.7';
    }else {
        video.pause();
        button.className = 'far fa-play-circle';
        video.style.opacity = '.3';
    }
    
}

button.addEventListener('click', () => {
    playPause();
});

video.addEventListener('timeupdate', () => {
    const barWidth = video.currentTime / video.duration;
    bar.style.width = `${barWidth * 100}%`;

    if(video.ended){
        button.className = 'far fa-play-circle';
        video.style.opacity = '.3';
    }
});
// end of reach us section video

// video gallery section
const videos = document.querySelectorAll(".gallery-video");

videos.forEach((video) => {
    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.pause();
        video.muted = true;
        // mute.child.className = 'fa-solid fa-volume-xmark';
    });
});
// end of video gallery section

// products section
const imgWrappers = document.querySelectorAll('.card-img-wrapper');
countProduct = 1
let intervalId

imgWrappers.forEach((imgWrapper) => {
        
    imgWrapper.addEventListener('mouseover', () => {

        intervalId = setInterval(() => {

            const images = imgWrapper.querySelectorAll('img')

            let item = imgWrapper.querySelector('img.active')

            item.classList.remove('active')
                
            if (countProduct < images.length){
                
                images[countProduct].classList.add('active')
            }
            else {
                images[0].classList.add('active')
                countProduct = 0
            }

                countProduct++
        }, 1200)

    })

    imgWrapper.addEventListener('mouseout', () => {

        window.clearInterval(intervalId)

        const images = imgWrapper.querySelectorAll('img')

        let item = imgWrapper.querySelector('img.active')

        item.classList.remove('active')

        images[0].classList.add('active')

        // console.log(images)
    })
})
// end of products section

// scroll arrow button
document.querySelector('.scroll-btn').addEventListener('click', () => {
    document.querySelector('html').style.scrollBehavior = "smooth";

    setTimeout(() => {
        document.querySelector('html').style.scrollBehavior = "unset";
    }, 1000);
});