import React, { Component } from 'react';
import produtos from '../api/produtos';
import '../index.css';

class TabelaProdutos extends Component {
    state = {
        produtos: [],
        ordenadoPor: '',
        ordem: 'asc',
        mensagem: '',
    };

    componentDidMount() {
        this.setState({ produtos });
    }

    handleSort = coluna => {
        const { ordenadoPor, ordem, produtos } = this.state;

        if (ordenadoPor === coluna) {
            this.setState({
                produtos: produtos.reverse(),
                ordem: ordem === 'asc' ? 'desc' : 'asc',
            });
        } else {
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

        this.setState({
            mensagem: `Você selecionou a coluna ${coluna}.`,
        });
    };

    render() {
        const { produtos, ordenadoPor, ordem, mensagem } = this.state;

        return (
            <div className="tabela-container">
                <h2 className="titulo">Tabela de Produtos</h2>
                <p className="mensagem">{mensagem}</p>
                <table className="tabela">
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
            </div>
        );
    }
}

export default TabelaProdutos;
