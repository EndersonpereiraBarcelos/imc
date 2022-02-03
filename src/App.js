import React from 'react';
import { useState } from 'react';
import './app.css';

function App() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');

    const [mensagem, setMensagem] = useState('');

    function calcularIMC() {
        const alt = altura / 100;
        const imc = peso / (alt * alt);

        if (imc < 18.6) {
            setMensagem('Cuidado abaixo do peso Seu IMC: ' + imc.toFixed(2));
        } else if (imc >= 18.6 && imc < 24.9) {
            setMensagem('Peso idal! seu IMC: ' + imc.toFixed(2));
        } else if (imc >= 24.9 && imc < 34.9) {
            setMensagem('Cuidado acimado peso!! IMC: ' + imc.toFixed(2));
        } else if (imc > 34.9) {
            setMensagem('Cuidado Obesidade!! seu IMC: ' + imc.toFixed(2));
        }
    }

    return (
        <div className="app">
            <h1>Calculadora IMC</h1>
            <span>Vamos calcular seu IMC</span>

            <div className="area-input">
                <input
                    type="text"
                    placeholder="Peso em (kg) Ex:90"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Altura me (cm) Ex: 180"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                />

                <button onClick={calcularIMC}>Calcular</button>
            </div>

            <h3>{mensagem}</h3>
        </div>
    );
}

export default App;
