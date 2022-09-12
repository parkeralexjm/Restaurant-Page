export default function displayInfo() {
    const content = document.getElementById("content");
    const infoTitle = document.createElement("div")
    infoTitle.textContent = "Contact Us"
    
    const employees = []
    const mama = {name:"Mama Bunny", role:"Manager", number:"555-555-5554", email:"totallyRealEmail@notFake.com"}
    const papa = {name:"Papa Bunny", role:"Chef", number:"555-555-5555", email:"perfectlyRealEmail@notFake.com"}
    const baby = {name:"Baby Bunny", role:"Waiter", number:"555-555-5556", email:"totallyRealEmail@notFake.com"}
    employees.push(mama, papa, baby)
    
    const employeeInfo = document.createElement("div")
    for (let i = 0; i < employees.length; i++) {
        const tempEmployee = document.createElement('div');
        tempEmployee.classList.add("employee");
        const tempName = document.createElement('h3');
        tempName.textContent = employees[i].name;
        const tempRole = document.createElement('p');
        tempRole.textContent = employees[i].role;
        const tempNumber = document.createElement("p")
        tempNumber.textContent = employees[i].number
        const tempEmail = document.createElement("p")
        tempEmail.textContent = employees[i].email
        tempEmployee.append(tempName, tempRole, tempNumber, tempEmail)
        employeeInfo.append(tempEmployee)
    }

    content.append(infoTitle, employeeInfo)
}