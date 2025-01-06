const feedbackForm = document.querySelector('.feedback-form');
 
let formDate = {
    email: "",
    message: "",
};
const fillFormField = event => {
    try {
        if (localStorage.length === 0) {
            return;
        }
        const formDateforLS = JSON.parse(localStorage.getItem("feedback-form-state"));

        formDate = formDateforLS;

        for (const key in formDateforLS) {
            feedbackForm.elements[key].value = formDateforLS[key];
        }
    } catch (err) {
        console.log(err);
    }
}

fillFormField()

const onFormFieldChange = event => {
    const { target: formFieldEd } = event;
    formDate[formFieldEd.name] = formFieldEd.value;
localStorage.setItem("feedback-form-state", JSON.stringify(formDate))
}

const onFeedbakFofmSubmit = event => {
     event.preventDefault();
    if (formDate.email.trim() === "" || formDate.message.trim() === "") {
        return alert('Fill please all fields')
    }
    console.log(formDate);
    formDate = {
    email: "",
    message: "",
};
    const {currentTarget: formEl} = event;
    formEl.reset()
    localStorage.removeItem("feedback-form-state")
}

feedbackForm.addEventListener('input', onFormFieldChange);
feedbackForm.addEventListener('submit', onFeedbakFofmSubmit)