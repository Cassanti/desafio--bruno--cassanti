class CaixaDaLanchonete {
    constructor() {
        this.cardapio = [
            { id: 'cafe', produto: 'Café', valor: 3.00 },
            { id: 'chantily', produto: 'Chantily (extra do café)', valor: 1.50 },
            { id: 'suco', produto: 'Suco Natural', valor: 6.20 },
            { id: 'sanduiche', produto: 'Sanduíche', valor: 6.50 },
            { id: 'queijo', produto: 'Queijo (extra do Sanduíche)', valor: 2.00 },
            { id: 'salgado', produto: 'Salgado', valor: 7.25 },
            { id: 'combo1', produto: 'Suco + Sanduíche', valor: 9.50 },
            { id: 'combo2', produto: 'Café + Sanduíche', valor: 7.50 }
        ];

        this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
    }

    calcularValorDaCompra(itens, formaDePagamento) {
        let totalValor = 0;
        let encontrouTodosItens = true;
    
        for (const item of itens) {
            let encontrouItem = false;
    
            for (const itemComprado of this.cardapio) {
                if (itemComprado.id === item) {
                    totalValor += itemComprado.valor;
                    encontrouItem = true;
                    break;
                }
            }
    
            if (!encontrouItem) {
                encontrouTodosItens = false;
                break; 
            }
        }
    
        if (!encontrouTodosItens) {
            return 'Um ou mais produtos não encontrados!';
        }
    
        if (formaDePagamento === 'dinheiro') {
            totalValor *= 0.95;
        } else if (formaDePagamento === 'credito') {
            totalValor *= 1.03;
        } else if (!this.formasDePagamento.includes(formaDePagamento)) {
            return 'Forma de pagamento inválida!';
        }
    
        return totalValor.toFixed(2);
    }
}
