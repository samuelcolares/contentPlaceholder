const header = document.querySelector(`#header`)
const title = document.querySelector(`#title`)
const excerpt = document.querySelector(`#excerpt`)
const profileImg = document.querySelector(`#profile-img`)
const nameAuthor = document.querySelector(`#name`)
const date = document.querySelector(`#date`)

const animated_bgs = document.querySelectorAll(`.animated-bg`)
const animated_bgs_text = document.querySelectorAll(`.animated-bg-text`)


function getData() {
    header.innerHTML = '<img src="img/airforcehalloween1-removebg-preview.png" alt="">'
    title.innerHTML = `Nike Air Force 1 Low '07 QS Purple Skeleton Halloween`
    excerpt.innerHTML = `In a look fitting for Halloween, the Nike Air Force 1 Low in Purple Skeleton shows off a skeleton foot graphic in glowing white on both sides of the upper. Also celebrating the Halloween season is the semi-translucent, glow-in-the-dark outsole that sports the Nike Air name. The whole look is a reimagining of the original Nike Air Force silhouette, which was designed in 1982. As all Nike Air Force 1 shoes do, this sneaker makes use of Nike Air technology, a no-slip rubber sole, and a leather upper punctured with holes on the top of the toe for breathability.`
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/30.jpg" alt="">`
    nameAuthor.innerHTML = `John Doe`
    date.innerHTML = new Date().toLocaleDateString();

    animated_bgs.forEach(x => x.classList.remove(`animated-bg`))
    animated_bgs_text.forEach(x => x.classList.remove(`animated-bg-text`))

}

setTimeout(getData, 2500)

const button = document.querySelector(`.darkMode`)

let flag = false
button.onclick = function () {
    button.classList.toggle(`active`)
    if (!flag) {
        flag = true
        document.documentElement.style.setProperty('--primary-color', '#1e1d1dc7');
        document.documentElement.style.setProperty('--secondary-color', 'white');
        document.documentElement.style.setProperty('--body-bg', 'black');
        document.documentElement.style.setProperty('--shadow-color', 'rgba(255, 255, 255, 0.473)');

    } else {
        flag = false
        document.documentElement.style.setProperty('--primary-color', 'white');
        document.documentElement.style.setProperty('--secondary-color', 'black');
        document.documentElement.style.setProperty('--body-bg', '#ecf0f1');
        document.documentElement.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.473)');
    }

}

let fotoInicial = 0
function rotatebg(x) {
    const fotos = [1, 2, 3, 4]
    header.innerHTML = `<img src="img/airforcehalloween${fotos[x]}-removebg-preview.png" alt="">`
}

let int

setTimeout(() => {
    int = setInterval(() => {
        fotoInicial++
        if (fotoInicial > 3) {
            fotoInicial = 0
        }
        header.classList.add('bkk')
        setTimeout(() => {
            rotatebg(fotoInicial)
        }, 1001)
        setTimeout(() => {
            header.classList.remove('bkk')
        }, 1100)
    }, 5000)

}, 2500)

header.addEventListener(`mouseenter`, () => clearInterval(int))
header.addEventListener(`mouseleave`, () => {
    int = setInterval(() => {
        fotoInicial++
        if (fotoInicial > 3) {
            fotoInicial = 0
        }
        header.classList.add('bkk')
        setTimeout(() => {
            rotatebg(fotoInicial)
        }, 1001)
        setTimeout(() => {
            header.classList.remove('bkk')
        }, 1100)
    }, 5000)
})