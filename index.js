// Output selected.
const output_years = document.querySelector(".output-year");
const output_months= document.querySelector(".output-month");
const output_days = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

// 
let isValid = false;
const input_years = document.querySelector("#year");
const input_months = document.querySelector("#month");
const input_days = document.querySelector("#day");

// Error span 



const error_year = document.querySelector(".error-year");
const error_month = document.querySelector(".error-month");
const error_day = document.querySelector(".error-day");
submit_btn.addEventListener('click', calculateDate)
input_days.addEventListener("input", (e) => {
    if(+input_days.value > 31) {
        error_day.textContent = "Must be a valid date"
        isValid = false;
        return;
    } else {
        isValid = true;
        error_day.textContent = "";
    }
    if(+input_days.value === 0) {
        isValid = false;
        error_day.textContent = "This is field is required"
        isValid = false;
    } else {
        error_day.textContent = "";
    }
});

input_months.addEventListener("input", (e) => {
    if(+input_months.value > 12) {
        error_month.textContent = "Must be a valid month"
        isValid = false;
        return;
    } else {
        isValid = true;
        error_month.textContent = "";
    }
    if(+input_months.value === 0) {
        isValid = false;
        error_month.textContent = "This is field is required"
        isValid = false;
    } else {
        error_month.textContent = "";
    }
});

input_years.addEventListener("input", (e) => {
    if(+input_years.value > 2023) {
        error_year.textContent = "Must be a valid month"
        isValid = false;
        return;
    } else {
        isValid = true;
        error_year.textContent = "";
    }
    if(+input_years.value === 0) {
        isValid = false;
        error_year.textContent = "This is field is required"
        isValid = false;
    } else {
        error_year.textContent = "";
    }
});



function calculateDate() {
    if(isValid) {
        let birthday = `${input_months.value}/${input_days.value}/${input_years.value}`;
        console.log(birthday);
        let bdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - bdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970 ;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();
        // output
        output_days.textContent = ageDay;
        output_months.textContent = ageMonth;
        output_years.textContent = ageYears;
    } else {
        alert("error");
    }
}