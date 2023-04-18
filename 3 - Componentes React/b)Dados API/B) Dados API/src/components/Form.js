import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handleMessageChange = (event) => {
        this.setState({ message: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { name, email, message } = this.state;

        // Aqui você pode enviar os dados para a API usando fetch ou axios
        fetch('http://localhost:3000/api/form', {
            method: 'POST',
            body: JSON.stringify({ name, email, message })
        })
            .then(response => {
                if (response.ok) {
                    console.log('Dados enviados com sucesso!');
                } else {
                    console.log('Erro ao enviar dados.');
                }
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                </label>
                <br />
                <label>
                    Message:
                    <textarea value={this.state.message} onChange={this.handleMessageChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;
