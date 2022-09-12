export default function displayMenu() {
    const content = document.getElementById("content");
    const menuTitle = document.createElement("div")
    menuTitle.textContent = "Menu"

    const menuItems = [];

    const tea = {name:"Tea", info:"A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right", cost:"$2", type:"drink"}
    const bearyTea = {name:"Beary Tea", info:"A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.", cost:"$3", type:"drink"}
    const toast = {name:"Toast and Jam", info:"A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.", cost:"$1", type:"side"}
    const fruit = {name:"Fresh Fruit", info:"A small bowl of fresh fruit, whatever we find at the market for the day.", cost:"$3", type:"side"}
    const pancake = {name:"Pancakes", info:"A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.", cost:"$4", type:"main"}
    const french = {name:"French Toast", info:"Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.", cost:"$5", type:"main"}
    const vegSand = {name:"Veggie Sandwich", info:"Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.", cost:"$8", type:"main"}
    const blt = {name:"BLT", info:"Interested in the Beary Veggie Sandwich but also love bacon? Say no more.", cost:"$6", type:"main"}

    menuItems.push(tea, bearyTea, toast, fruit, pancake, french, vegSand, blt)
    console.log(menuItems[0].name)

    const drinksTitle = document.createElement("div")
    drinksTitle.textContent = "Drinks"
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].type == "drink") {
            const tempDrink = document.createElement('div');
            tempDrink.classList.add(menuItems[i].type);
            const tempDrinkTitle = document.createElement('h3');
            tempDrinkTitle.textContent = menuItems[i].name;
            const tempDrinkInfo = document.createElement('p');
            tempDrinkInfo.textContent = menuItems[i].info;
            const tempDrinkCost = document.createElement("h4")
            tempDrinkCost.textContent = menuItems[i].cost
            tempDrink.append(tempDrinkTitle, tempDrinkInfo, tempDrinkCost)
            drinksTitle.append(tempDrink)
        }
    }

    const sidesTitle = document.createElement("div")
    sidesTitle.textContent = "Sides"
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].type == "side") {
            const tempSide = document.createElement('div');
            tempSide.classList.add(menuItems[i].type);
            const tempSideTitle = document.createElement('h3');
            tempSideTitle.textContent = menuItems[i].name;
            const tempSideInfo = document.createElement('p');
            tempSideInfo.textContent = menuItems[i].info;
            const tempSideCost = document.createElement("h4")
            tempSideCost.textContent = menuItems[i].cost
            tempSide.append(tempSideTitle, tempSideInfo, tempSideCost)
            sidesTitle.append(tempSide)
        }
    }
    const mainsTitle = document.createElement("div")
    mainsTitle.textContent = "Mains"
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].type == "main") {
            const tempMains = document.createElement('div');
            tempMains.classList.add(menuItems[i].type);
            const tempMainsTitle = document.createElement('h3');
            tempMainsTitle.textContent = menuItems[i].name;
            const tempMainsInfo = document.createElement('p');
            tempMainsInfo.textContent = menuItems[i].info;
            const tempMainsCost = document.createElement("h4")
            tempMainsCost.textContent = menuItems[i].cost
            tempMains.append(tempMainsTitle, tempMainsInfo, tempMainsCost)
            mainsTitle.append(tempMains)
        }
    }
    content.append(menuTitle, drinksTitle, sidesTitle, mainsTitle)

}