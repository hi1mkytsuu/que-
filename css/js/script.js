document.addEventListener('DOMContentLoaded', () => {
    // Exibe o resumo do pacote na tela de reserva
    const orderDetails = document.getElementById('order-summary');
    if (orderDetails) {
        const urlParams = new URLSearchParams(window.location.search);
        const destino = urlParams.get('destino') || 'Pacote de Viagem Customizado';
        const preco = urlParams.get('preco') || 'Sob consulta';
        
        orderDetails.innerHTML = `
            <div style="background: #eef7ff; padding: 1rem; border-radius: 6px; margin-bottom: 1.5rem; border-left: 4px solid #00d4ff;">
                <h3 style="color: #0a2540; margin-bottom: 0.3rem;">Item Selecionado</h3>
                <p><strong>Destino / Serviço:</strong> ${destino}</p>
                <p><strong>Valor estimado:</strong> ${preco}</p>
            </div>
        `;
    }
});

function processarPagamento(event) {
    event.preventDefault();
    alert('Reserva efetuada com sucesso! A American Dreams Travel enviará a confirmação e os vouchers para o seu e-mail.');
    window.location.href = 'index.html';
}

function enviarMensagem(event) {
    event.preventDefault();
    alert('Obrigado pelo contato! Nossa equipe responderá sua mensagem em até 24 horas.');
    event.target.reset();
}