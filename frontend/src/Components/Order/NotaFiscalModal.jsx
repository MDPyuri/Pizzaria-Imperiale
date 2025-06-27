import React, { useState } from 'react';
import './NotaFiscalModal.css';

const NotaFiscalModal = ({ isOpen, onClose, pedidoId, valorTotal }) => {
    const [isDownloading, setIsDownloading] = useState(false);

    if (!isOpen) return null;

    const handleDownloadNotaFiscal = async () => {
        try {
            setIsDownloading(true);
            const notaFiscalUrl = `http://localhost:3000/nota-fiscal/gerar/${pedidoId}`;

            // Verifica se o servidor está respondendo antes de abrir
            const testResponse = await fetch(notaFiscalUrl, { method: 'HEAD' });

            if (testResponse.ok) {
                window.open(notaFiscalUrl, '_blank');
            } else {
                alert('❌ Erro ao gerar nota fiscal. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao baixar nota fiscal:', error);
            alert(
                '❌ Erro de conexão. Verifique se o servidor está funcionando.'
            );
        } finally {
            setIsDownloading(false);
            onClose();
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>🎉 Pedido Realizado com Sucesso!</h2>
                </div>

                <div className="modal-body">
                    <div className="success-icon">✅</div>
                    <div className="order-details">
                        <p>
                            <strong>Número do Pedido:</strong> #{pedidoId}
                        </p>
                        <p>
                            <strong>Valor Total:</strong> R$ {valorTotal}
                        </p>
                    </div>

                    <div className="nota-fiscal-section">
                        <h3>📄 Nota Fiscal</h3>
                        <p>Deseja baixar a nota fiscal do seu pedido?</p>
                    </div>
                </div>

                <div className="modal-footer">
                    <button className="btn-secondary" onClick={onClose}>
                        Não, obrigado
                    </button>
                    <button
                        className="btn-primary"
                        onClick={handleDownloadNotaFiscal}
                        disabled={isDownloading}
                    >
                        {isDownloading
                            ? '⏳ Gerando PDF...'
                            : '📥 Baixar Nota Fiscal'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotaFiscalModal;
