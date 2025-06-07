
async function addText(value) {
    const paragraph = document.getElementById("text");
    console.log("Value: ", await value)
    paragraph.textContent = `Faltam ${value.daysToBirthday} dias para o seu aniversário`;
    paragraph.classList.remove("hidden");
    paragraph.classList.add("visible__text");
}

function addImage() {
    const image = document.getElementById("image");
    image.classList.remove("hidden");
    image.classList.add("visible__image");
}

function getDates() {
    const birthdayDate = String(document.getElementById("date_picker").value)
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')
    const currentDateString = String(`${year}-${month}-${day}`)
    return {
        currentDate: currentDateString,
        birthdayDate: birthdayDate
    }
};

function calculateDays(dates) {
        return axios.post('/api/calculate', dates)
        .then((res) => {
            console.log("Resposta do Backend: ", res.data);
            return res.data;
        })
        .catch((error) => {
            console.error(error);
            return null;
        });
};

async function remainingDays() {
    const value = await calculateDays(getDates());
    console.log(value)
    addImage();
    addText(value);
};