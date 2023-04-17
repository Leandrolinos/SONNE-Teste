import React, { Component } from 'react';
import produtos from '../api/produtos';

class TabelaProdutos extends Component {
    state = {
        produtos: [],
        ordenadoPor: '',
        ordem: 'asc',
    };

    componentDidMount() {
        this.setState({ produtos });
    }

    handleSort = coluna => {
        const { ordenadoPor, ordem, produtos } = this.state;

        // Se a coluna atual já estiver ordenada
        // inverte a ordem da ordenação
        if (ordenadoPor === coluna) {
            this.setState({
                produtos: produtos.reverse(),
                ordem: ordem === 'asc' ? 'desc' : 'asc',
            });
        } else {
            // Se a coluna atual não estiver ordenada
            // ordena a lista pelo valor da coluna
            const sortedProdutos = produtos.sort((a, b) => {
                if (a[coluna] < b[coluna]) {
                    return ordem === 'asc' ? -1 : 1;
                }
                if (a[coluna] > b[coluna]) {
                    return ordem === 'asc' ? 1 : -1;
                }
                return 0;
            });

            this.setState({
                produtos: sortedProdutos,
                ordenadoPor: coluna,
                ordem: 'asc',
            });
        }
    };

    render() {
        const { produtos, ordenadoPor, ordem } = this.state;

        return (
            <table>
                <thead>
                    <tr>
                        <th onClick={() => this.handleSort('id')}>
                            ID {ordenadoPor === 'id' && (ordem === 'asc' ? '▲' : '▼')}
                        </th>
                        <th onClick={() => this.handleSort('nome')}>
                            Nome {ordenadoPor === 'nome' && (ordem === 'asc' ? '▲' : '▼')}
                        </th>
                        <th onClick={() => this.handleSort('categoria')}>
                            Categoria {ordenadoPor === 'categoria' && (ordem === 'asc' ? '▲' : '▼')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(produto => (
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.categoria}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default TabelaProdutos;


