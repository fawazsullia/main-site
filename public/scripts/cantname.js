const totalHits = document.getElementById("total-hits")
const uniqueHits = document.getElementById("unique-hits")
const visitCountry = document.getElementById("highest-visit-country")
const visitDevice = document.getElementById("highest-visit-device")
const refreshBtn = document.getElementById("refresh-btn")

refreshBtn.addEventListener("click", ()=>{
    displayData()
})

function displayData(){
console.log("hehe")
    async function fetchAnalytics() {
        const res = await fetch("/api/get-analytics")
        const data = await res.json()
        return data
    }
    
    fetchAnalytics().then((data)=>{
        totalHits.innerText = data.total.totalhits
        uniqueHits.innerText = data.total.totaluniquehits
        visitCountry.innerText = data.highestCountry.country
        visitDevice.innerText = data.highestDevice.devicetype
    })
    

}

displayData()



