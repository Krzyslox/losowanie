const btn = document.querySelector('button');
const div = document.querySelector('div')
const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja", "Kasia"];



const nameGenerator = () => {
    //losowanie liczby od 0 do 6.(999)
    const index = Math.floor(names.length * Math.random())
    div.textContent = `Wybranę imię to ${names[index]}`
}


btn.addEventListener('click', nameGenerator)
