// import './estilo.css'
import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
//import { getAddress } from 'address-br';

function DadosEntrega({ aoEnviar }) {

    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [endereco, setEndereco] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    // async function BuscaEndereco() {
    //     const address = getAddress(13253616); 
    //     const {bairro, cidade, estado, rua} = address;
    //     console.log(bairro,"\n", cidade,"\n", estado,"\n", rua);
    //     }

    return (
        <form onSubmit={
            (event) => { 
                event.preventDefault();
                aoEnviar({ cep, endereco, numero, estado, cidade });
            }}>

            <TextField
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value);
                }}
                name="cep"
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <Button
                variant="text"
                color="secondary">
                Não sei meu CEP 
            </Button>

            <TextField
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value);
                }}
                id="numero"
                name="endereco"
                label="Número"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <TextField
                value={complemento}
                onChange={(event) => {
                    setComplemento(event.target.value);
                }}
                id="Complemento"
                label="Complemento"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <TextField
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value);
                }}
                id="endereco"
                name="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <TextField
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value);
                }}
                id="estado"
                name="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <TextField
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value);
                }}
                id="cidade"
                name="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth>
                Finalizar Cadastro
            </Button>

        </form>
    )
}

export default DadosEntrega;