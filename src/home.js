export default function displayHome() {
    const content = document.getElementById("content");
    const homeTitle = document.createElement("div")
    homeTitle.classList.add("homeTitle")
    homeTitle.textContent = "Hoppy Cafe"

    const homeSummary = document.createElement("div")
    homeSummary.classList.add("homeSummary")
    homeSummary.textContent = "At Black Rabbit Cafe, we are all about getting people together and enjoying each other’s company. We believe that what we do can weave a fabric of positive relationships and experiences. The best way to earn our guests’ trust and loyalty is by showing what we believe in every day. That means we have to know what we stand for and act in a way that supports it. "

    const homeOpening = document.createElement("div")
    homeOpening.classList.add("homeOpening")
    const homeOpeningTitle = document.createElement('h3')
    homeOpeningTitle.textContent = "Hours"
    const homeOpeningList = document.createElement("ul")
    const monday = document.createElement("li")
    monday.textContent = "Monday - 7.30 am – 4.00 pm"
    const tuesday = document.createElement("li")
    tuesday.textContent = "Tuesday - 7.30 am – 4.00 pm"
    const wednesday = document.createElement("li")
    wednesday.textContent = "Wednesday - 7.30 am – 4.00 pm"
    const thursday = document.createElement("li")
    thursday.textContent = "Thursday - 7.30 am – 4.00 pm"
    const friday = document.createElement("li")
    friday.textContent = "Friday - 7.30 am – 4.00 pm"
    const saturday = document.createElement("li")
    saturday.textContent = "Saturday - 9.00 am – 5.00 pm"
    const sunday = document.createElement("li")
    sunday.textContent = "Sunday - 9.00 am – 5.00 pm"
    homeOpeningList.append(monday, tuesday, wednesday, thursday, friday, saturday, sunday)
    homeOpening.append(homeOpeningTitle, homeOpeningList)


    const homeLocation = document.createElement("div")
    homeLocation.classList.add("homeLocation")
    const homeLocationTitle = document.createElement("h3")
    homeLocationTitle.textContent = "Location"
    const homeLocationInfo = document.createElement("p")
    homeLocationInfo.textContent = "308 Old Brompton Road, Kensington, London, SW5 9JF"
    homeLocation.append(homeLocationTitle, homeLocationInfo)

    content.append(homeTitle, homeSummary, homeOpening, homeLocation)

}