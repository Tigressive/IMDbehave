// identify the form
const form = document.getElementById('myForm');

// take over the submit event
form.addEventListener('submit', (ev) => {
// prevent the submit default from happening
    ev.preventDefault();

    // create the data object
    const data = {};
// loop through any input that is not a SUBMIT
// and create a data object based on those inputs
    let inputs = Array.from(form.getElementsByTagName('input'));

    // inputs = inputs.filter((input) => {
    //   return input.getAttribute('type') !== 'submit';
    // });


    // is this a new item
    let isNew = true;
    let id = '';
    inputs.forEach((input) => {
        if (input.getAttribute('type') !== 'submit')
        {

            if (input.getAttribute('type') === 'hidden')
            {
                if (input.value !== '' && input.value !== 'new')
                {
                    isNew = false;
                    id = `/${input.value}`;
                }
            }
            else
            {
                data[input.getAttribute('name')] = input.value;
            }
        }
    });

    const endpoint = form.getAttribute('action');
    const fetchOptions = {
        method: (isNew) ? 'POST' : 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    fetch(`http://localhost:3000${endpoint}${id}`, fetchOptions)
        .then((response) => response.json())
        .then((data) => {
            console.log('data: ', data);
        })
        .catch((err) => {
            console.log('Catch any error: ', err);
        });

// send the data to the correct endpoint ??
});
