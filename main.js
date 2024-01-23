const imie = document.querySelector("#imie")
const nazw = document.querySelector("#nazw")
const slc = document.querySelector("#kl")
const zgd = document.querySelector("#zgd")
const srd = document.querySelector("#srd")
const Knp = document.querySelector("#Knp")
const snc = document.querySelector("#snc")
const npj = document.querySelector("#npj")
const Btn = document.querySelector("#Btn1")
const dis = document.querySelector("#dis")
const array = []

Btn.addEventListener("click", function(evt){
    evt.preventDefault()
    const dane = {
        imie: imie.value,
        nazwisko: nazw.value,
        select: slc.value,
        srednia: srd.value,
        kanapka: Knp.checked ? 1.8 : 0,
        Baton: snc.checked ? 1.7 : 0,
        Napoj: npj.checked ? 4 : 0,

    }
    if(zgd.checked){
        if (srd.value>=4.00&& srd.value<=5.00){
        rabat=0.05
        rab = "5%"
            suma =Number((Number(dane.kanapka) + Number(dane.Baton) + Number(dane.Napoj))*rabat/100).toFixed(2)
            suma = Number(Number(suma)-(Number(suma)*Number(rabat))).toFixed(2)
    }
    if(srd=>5.00&& srd.value<=6){
        rabat=0.15
        rab="15%"
        suma =(Number(dane.kanapka) + Number(dane.Baton) + Number(dane.Napoj))
        suma = Number(Number(suma)-(Number(suma)*Number(rabat))).toFixed(2)
    }
    else{
        rab = "Trzeba bylo sie uczyc!"
        suma =Number((Number(dane.kanapka) + Number(dane.Baton) + Number(dane.Napoj))).toFixed(2)
    }
    
    array.push(dane)
    console.log(array)
    dis.innerHTML=`Twoje imie: ${dane.imie} <br>Twoje nazwisko: ${dane.nazwisko}</br><br>Twoja klasa: ${dane.select}</br><br>Twoj rabat: ${rab}</br><br>Ile placisz: ${suma} zł</br>`
    }
    else{
        document.write("Wyraź zgode!");
    }
    
})