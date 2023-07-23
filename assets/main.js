const inputs = document.querySelectorAll("input");

for (const input of inputs) {
  input.addEventListener("keydown", function (event) {
    // Obtém o código da tecla pressionada
    const tecla = event.key;

    // Verifica se a tecla pressionada é um número ou a tecla backspace
    if (!(/[0-9]/.test(tecla) || tecla === "Backspace")) {
      // Se não for um número nem a tecla de apagar, previne a ação padrão (não insere o caractere)
      event.preventDefault();
    }
  });
}

const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const errors = document.querySelectorAll(".error");
const labelInput = document.querySelectorAll("label");
const results = document.querySelectorAll(".result");

const date = new Date();
const thisYear = date.getFullYear();
const i = 0;

function cleanError(item, object) {
  for (item of object) {
    item.textContent = "";
  }
  return item;
}

// LOOPS FUNCTIONS
function interation(item, object, className) {
  for (item of object) {
    item.classList.add(className);
  }
  return item;
}

function InitialValue(item, object) {
  for (item of object) {
    item.textContent = "--";
  }
  return item;
}

function sendValues() {
  if (day.value === "" && month.value === "" && year.value === "") {
    InitialValue(i, results);
    interation(i, inputs, "errorInput");
    for (const error of errors) {
      error.textContent = "This Field is required";
    }
    interation(i, labelInput, "text-red-600");
  } else if (!regexNumbersOnly.test(day.value)) {
    InitialValue(i, results);
    interation(i, labelInput, "text-red-600");
    cleanError(i, errors);
    interation(i, inputs, "errorInput");
    errors[0].textContent = "Must be a number";
  } else if (!regexNumbersOnly.test(month.value)) {
    InitialValue(i, results);
    interation(i, labelInput, "text-red-600");
    cleanError(i, errors);
    interation(i, inputs, "errorInput");
    errors[1].textContent = "Must be a number";
  } else if (!regexNumbersOnly.test(year.value)) {
    InitialValue(i, results);
    interation(i, labelInput, "text-red-600");
    cleanError(i, errors);
    interation(i, inputs, "errorInput");
    errors[2].textContent = "Must be a number";
  } else if (day.value > 31 || day.value < 1) {
    InitialValue(i, results);
    interation(i, labelInput, "text-red-600");
    cleanError(i, errors);
    interation(i, inputs, "errorInput");
    errors[0].textContent = "Must be a valid day";
  } else if (month.value > 12 || month.value < 1) {
    InitialValue(i, results);
    interation(i, labelInput, "text-red-600");
    cleanError(i, errors);
    interation(i, inputs, "errorInput");
    errors[1].textContent = "Must be a valid month";
  } else if (year.value >= thisYear || year.value <= 1000) {
    InitialValue(i, results);
    interation(i, labelInput, "text-red-600");
    cleanError(i, errors);
    interation(i, inputs, "errorInput");
    errors[2].textContent = "Must be a valid year";
  } else if (day.value > 31 && month.value > 12 && year.value >= thisYear) {
    InitialValue(i, results);
    interation(i, labelInput, "text-red-600");
    cleanError(i, errors);
    interation(i, inputs, "errorInput");
    errors[0].textContent = "Must be a valid day";
    errors[1].textContent = "Must be a valid month";
    errors[2].textContent = "Must be in the past";
  } else if (
    (month.value === "4" && day.value === "31") ||
    (month.value === "6" && day.value === "31") ||
    (month.value === "9" && day.value === "31") ||
    (month.value === "11" && day.value === "31") ||
    (month.value === "2" && day.value >= "30")
  ) {
    InitialValue(i, results);
    interation(i, labelInput, "text-red-600");
    cleanError(i, errors);
    interation(i, inputs, "errorInput");
    errors[0].textContent = "Must be a valid day";
  } else {
    for (const input of inputs) {
      input.classList.remove("errorInput");
    }
    for (const error of errors) {
      error.textContent = "";
    }
    for (const label of labelInput) {
      label.classList.remove("text-red-600");
    }

    // CONVERTING STRING TO NUMBER
    const dayNumber = parseInt(day.value);
    const monthNumber = parseInt(month.value);
    const yearNumber = parseInt(year.value);

    const wasBorn = thisYear - yearNumber;
    const yearInMonth = wasBorn * 12;
    // AS A YEAR CAN HAVE 365 DAYS OU 366 DAYS, WE
    // WE CAN TAKE THE AVERAGE BETWEEN THE TWO: 365.25
    const yearInDays = wasBorn * 365.25;
    results[0].textContent = wasBorn;
    results[1].textContent = yearInMonth;
    results[2].textContent = parseInt(yearInDays);
  }
}
