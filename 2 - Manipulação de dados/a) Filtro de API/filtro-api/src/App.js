import React, { Component } from 'react';
import api from './API';

class App extends Component {

  state = {
    produtos: [],
    filtroProduto: '',
  }

  async componentDidMount() {
    const response = await api.get('');

    this.setState({ produtos: response.data })
  }

  filterProducts = (event) => {
    this.setState({ filtroProduto: event.target.value });
  };

  submitFiltro = async (event) => {
    event.preventDefault();
    const { filtroProduto } = this.state;

    const response = await api.get('', {
      params: {
        product_type: filtroProduto,
      },
    });

    this.setState({ produtos: response.data });
  };

  render() {
    const { produtos, filtroProduto } = this.state;

    return (
      <div>
        <h1>Product line of beauty</h1>

        <form onSubmit={this.submitFiltro}>
          <label htmlFor="filtroProduto">Filter by category: </label>
          <input
            type="text"
            id="filtroProduto"
            value={filtroProduto}
            onChange={this.filterProducts}
          />
          <button type="submit">Filter</button>
        </form>

        {console.log(produtos)}

        {produtos.map(produto => (
          <li key={produto.id}>
            <h4>
              <strong>Product: </strong>
              {produto.name}xx
            </h4>
            <p>Category: {produto.product_type}
            </p>

          </li>
        ))}
      </div>
    );
  }
}

export default App;
