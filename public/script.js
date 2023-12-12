console.log("This is logged from the public folder");

const form = document.querySelector("form");
const lastNameInput = document.getElementById("lastname");
const firstNameInput = document.getElementById("firstname");
const emailInput = document.getElementById("email");

let firstName = "";
let lastName = "";
let email = "";

const handleSubmitNameAndEmail = (event) => {
  event.preventDefault();

  console.log("Form submitted");

  const container = document.getElementById("container");
  container.replaceChildren();
  const form = document.createElement("form");
  container.appendChild(form);

  // A második oldal cime
  const Secontitle = document.createElement("h1");
  form.appendChild(Secontitle);
  Secontitle.innerHTML = "Adjda meg a telepítési címet";

  // A mádosik oldal első inputja (irányitoszám)
  const locationInput1 = document.createElement("input");
  form.appendChild(locationInput1);
  locationInput1.placeholder = "Irányítószám";

  // A mádosik oldal második inputja (Város)
  const locationInput2 = document.createElement("input");
  form.appendChild(locationInput2);
  locationInput2.placeholder = "Város";

  // A mádosik oldal harmadik inputja (Utca)
  const locationInput3 = document.createElement("input");
  form.appendChild(locationInput3);
  locationInput3.placeholder = "Utca";

  // A mádosik oldal negyedik inputja (Hazszam)
  const locationInput4 = document.createElement("input");
  form.appendChild(locationInput4);
  locationInput4.placeholder = "Házszám";

  // A második oldal tovább gombja
  const submitButton2 = document.createElement("input");
  submitButton2.type = "submit";
  submitButton2.value = "Tovább";
  form.appendChild(submitButton2);
  submitButton2.classList.add("submit");

  const handleSubmitLocation = (event) => {
    event.preventDefault();
    console.log("Form submitted");

    const container = document.getElementById("container");
    container.replaceChildren();
    const form = document.createElement("form");
    container.appendChild(form);
    
// A harmadik oldal cime
    const ThirdTitle = document.createElement("h1")
    form.appendChild(ThirdTitle)
    ThirdTitle.innerHTML = "Adja meg az éves átlag fogyasztását"

    // A harmadik oldal div-je amibe vannak a gombok
    const ButtonDiv = document.createElement("div");
    form.appendChild(ButtonDiv);
    ButtonDiv.classList.add("ThirdPage");

    // A harmadik oldal 1. gombja
    const ConsButton1 = document.createElement("button");
    ConsButton1.type = "button";
    ButtonDiv.appendChild(ConsButton1);
    ConsButton1.classList.add("button");
    ConsButton1.textContent = "2000 kWh";
    ConsButton1.setAttribute("id","ThrdFisrtBt")
    document.getElementById("ThrdFisrtBt").onclick = function() {FirstBtValue()};

    form.addEventListener("button", (event) => handleButtonClick(event))
    const handleButtonClick = (event) => {
      event.preventDefault();
    }

    const ButtonNewClass = document.querySelectorAll(".button")

    ButtonNewClass.forEach(ButtonNewClass => {
      ButtonNewClass.addEventListener('click', () => {
        document.querySelector('.buttonclicked').classList.remove('buttonclicked');
        ButtonNewClass.classList.remove('button')
        ButtonNewClass.classList.add('buttonclicked')
      })
    })

    // Az első gomb funkciója 
    function FirstBtValue () {
      console.log(document.getElementById("ThrdFisrtBt").textContent)
    }

    // A harmadik oldal 1 gombjának képe
    const ThrdPgImg1 = document.createElement("img");
    ConsButton1.appendChild(ThrdPgImg1);
    ThrdPgImg1.src = "./assets/oneperson.png";
    ThrdPgImg1.classList.add("ThirdPageImg");

    // A harmadik oldal 2. gombja
    const ConsButton2 = document.createElement("button");
    ConsButton2.type = "button";
    ButtonDiv.appendChild(ConsButton2);
    ConsButton2.classList.add("button");
    ConsButton2.textContent = "3500 kWh";
    ConsButton2.setAttribute("id", "ThrdSecBt")
    document.getElementById("ThrdSecBt").onclick = function() {SecBtValue()};
    // Az második gomb funkciója 
    function SecBtValue (){
      console.log(document.getElementById("ThrdSecBt").textContent)
    }
    
    // A harmadik oldal  2. gobjának képe
    const ThrdPgImg2 = document.createElement("img");
    ConsButton2.appendChild(ThrdPgImg2);
    ThrdPgImg2.src = "./assets/twoperson.png";
    ThrdPgImg2.classList.add("ThirdPageImg");

    // A harmadik oldal 3. gombja
    const ConsButton3 = document.createElement("button");
    ConsButton3.type = "button";
    ButtonDiv.appendChild(ConsButton3);
    ConsButton3.classList.add("button");
    ConsButton3.textContent = "5000 kWh";
    ConsButton3.setAttribute("id", "ThrdThrdBt")
    document.getElementById("ThrdThrdBt").onclick = function() {ThrdBtValue()};
    // Az harmadik gomb funkciója 
    function ThrdBtValue (){
      console.log(document.getElementById("ThrdThrdBt").textContent)
    }
    // A harmadik oldal 3. gobjának képe
    const ThrdPgImg3 = document.createElement("img");
    ConsButton3.appendChild(ThrdPgImg3);
    ThrdPgImg3.src = "./assets/family.png";
    ThrdPgImg3.classList.add("ThirdPageImg");

    // A harmadik oldal 4. gombja
    const ConsButton4 = document.createElement("button");
    ConsButton4.type = "button";
    ButtonDiv.appendChild(ConsButton4);
    ConsButton4.classList.add("button");
    ConsButton4.textContent = "7000 kWh";
    ConsButton4.setAttribute("id", "ThrdFrthBt")
    document.getElementById("ThrdFrthBt").onclick = function() {ThrdFrthValue()};
    // Az negyedik gomb funkciója 
    function ThrdFrthValue (){
      console.log(document.getElementById("ThrdFrthBt").textContent)
    }

    // A harmadik oldal  4. gobjának képe
    const ThrdPgImg4 = document.createElement("img");
    ConsButton4.appendChild(ThrdPgImg4);
    ThrdPgImg4.src = "./assets/bigfamily.png";
    ThrdPgImg4.classList.add("ThirdPageImg");
    
    // A harmadik oldal Tovább gombja
    const submitButton3 = document.createElement("input");
    submitButton3.type = "submit";
    submitButton3.value = "Tovább";
    form.appendChild(submitButton3);
    submitButton3.classList.add("submit"); 
  };
  
  form.addEventListener("submit", (event) => handleSubmitLocation(event));
};

const handleSubmitForm = (event) => {
  // Prevents the page from refreshing automatically after the form is submitted
  event.preventDefault();

  // Collect data from the form
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Send data to the backend
  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      //TODO Handle the response from the server
      //TODO Let the user know that the from has been successfully sent, etc.
      console.info(response);
    })
    .catch((error) => {
      console.error("Hiba a beküldésben: ", error);
    });
};

// const all_button = document.getElementsByClassName("button-75");
// console.log(all_button);

// all_button.forEach(bt => {
//   bt.addEventListener("click", (e) =>{
//     console.log(e.target.textContent)
//   })
// })

form.addEventListener("submit", (event) => handleSubmitNameAndEmail(event));
