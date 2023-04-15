// import React, { useState, useEffect } from 'react';


// function FiltroAPI() {
//     const [produtos, setProdutos] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3000/api/produtos')
//             .then(response => response.json())
//             .then(data => setProdutos(data))
//             .catch(error => console.log(error));
//     }, []);

//     return (
//         <div>
//             <h1>Lista de Produtos:</h1>
//             <ul>
//                 {produtos.map((produto) => (
//                     <li key={produto.id}>
//                         <strong>{produto.name}</strong> - {produto.preco}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default FiltroAPI;


// import React, { Component } from 'react';



// class ProductList extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             products: [],
//             filter: '',
//         };
//     }

//     componentDidMount() {
//         fetch('/api/produtos')
//             .then(response => response.json())
//             .then(data => this.setState({ products: data }));
//     }

//     handleChange = (event) => {
//         this.setState({ filter: event.target.value });
//     }

//     render() {
//         const filteredProducts = this.state.products.filter(product =>
//             product.nome.toLowerCase().includes(this.state.filter.toLowerCase())
//         );

//         return (
//             <div>
//                 <input type="text" onChange={this.handleChange} />
//                 <ul>
//                     {filteredProducts.map(product => (
//                         <li key={product.id}>{product.nome} - {product.preco}</li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }

