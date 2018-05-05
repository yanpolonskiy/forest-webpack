let upButton = document.querySelector('.ar-up');
let downButton = document.querySelector('.ar-down');
let descCounter = 1;
let descNumber = 3;
let descObj = {
    1: {
        desc: "Site-name1",
        tech: "tech1"
    },
    2: {
        desc: "Site-name2",
        tech: "tech2"
    },
    3: {
        desc: "Site-name3",
        tech: "tech3"
    },
};

upButton.addEventListener('click', nextWork);
downButton.addEventListener('click', nextWork);

function nextWork() {
    moveDown(document.querySelector('.big_work'));
    moveUp(document.querySelector('.low_work .up'));
    moveDown(document.querySelector('.low_work .down'));
    descCounter++;
    if (descCounter > descNumber) {
        descCounter = 1;
    }
    changeDesc(descCounter);
}

function changeDesc(num) {
    let span = document.querySelector('.left span');
    let desc = document.querySelector('.left h2');
    span.style.opacity = '0';
    desc.style.opacity = '0';
    setTimeout(function() {
        // Load new content
        span.innerHTML = descObj[num].tech;
        span.style.opacity = '1';
        desc.innerHTML = descObj[num].desc;
        desc.style.opacity = '1';
    }, 650);
}

/*
function previousWork() {
    moveDown(document.querySelector('.big_work'));
    moveUp(document.querySelector('.low_work .up'));
    moveDown(document.querySelector('.low_work .down'))
}*/



function moveUp(container) {
    let active = container.querySelector('.active');
    let prev;
    let next;
    if (active.previousElementSibling.classList.contains('walls')) {
        prev = container.lastElementChild;
    } else {
        prev = active.previousElementSibling;
    }

    if (active.nextElementSibling == null) {
        next = container.children[1];
    } else {
        next = active.nextElementSibling;;
    }

    next.classList.toggle('hiddenBot');
    next.classList.toggle('active');
    prev.classList.toggle('hiddenTop');
    prev.classList.toggle('hideToBot');

    active.classList.toggle('active');
    active.classList.toggle('hiddenTop');
    setTimeout(() => {
        fixClasses(container);
    }, 500);
}

function moveDown(container) {
    let active = container.querySelector('.active');
    let prev;
    let next;
    if (active.previousElementSibling.classList.contains('walls')) {
        prev = container.lastElementChild;
    } else {
        prev = active.previousElementSibling;
    }

    if (active.nextElementSibling == null) {
        next = container.children[1];
    } else {
        next = active.nextElementSibling;;
    }



    next.classList.toggle('hiddenBot');
    next.classList.toggle('hideToTop');
    prev.classList.toggle('active');
    prev.classList.toggle('hiddenTop');
    active.classList.toggle('active');
    active.classList.toggle('hiddenBot');

    setTimeout(() => {
        fixClasses(container);
    }, 500);
}

function fixClasses(container) {
    console.log('assa');
    for (let i = 0; i < container.children.length; i++) {
        let element = container.children[i]

        if (element.classList.contains('hideToBot')) {
            element.classList.toggle('hiddenBot');
            element.classList.toggle('hideToBot');
        }
        if (element.classList.contains('hideToTop')) {
            element.classList.toggle('hiddenTop');
            element.classList.toggle('hideToTop');
        }
    }
}