const form = document.getElementById('form');
const labID = document.getElementById('labID');
const email = document.getElementById('email');
const NumPc = document.getElementById('NumPc');
const problemtype = document.getElementById('problemtype');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};



const validateInputs = () => {
    const labIDValue = labID.value.trim();
    const NumPcValue = NumPc.value.trim();
    const problemtypeValue = problemtype.value.trim();

    if(labIDValue === '') {
        setError(labID, 'labID is required');
    } else {
        setSuccess(labID);
    }


    if(NumPcValue === '') {
        setError(NumPc, 'NumPc is required');
    } else if (isNaN( NumPcValue )) {
        setError(NumPc, 'NumPc must be number.');
    } else {
        setSuccess(NumPc);
    }

  if(problemtypeValue == "-1" ) {
      setError(problemtype, 'Please provide your problem type!');
   }
   else{
    setSuccess(problemtype);
   }

};
