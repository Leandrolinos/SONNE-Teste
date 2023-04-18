import axios from 'axios';

axios.post('/api/form', {
    name: this.state.name,
    email: this.state.email,
    message: this.state.message
})
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    });
