import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput
} from 'mdb-react-ui-kit';
import styles from './FormCadastrar.module.css';
import { api } from '../../services/api';


const FormCadastrar = () => {
    const [Nome, setNome] = useState('');
    const [DataNasc, setDataNasc] = useState('');
    const [Endereco, setEndereco] = useState('');
    const [Cidade, setCidade] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');

    const [mensagem, setMensagem] = useState('');
  
    const cadastrarUsuario = async (e) => {
      e.preventDefault();
  
      const novoUsuario = {
       Nome,
       DataNasc,
       Endereco, 
       Cidade,
       Telefone,
       Email,
       Senha
      };
  
      try {
        const response = await api.post('/usuarios', novoUsuario);
        setMensagem('Usuário cadastrado com sucesso!');
        setNome('');
        setDataNasc('');
        setEndereco('');
        setCidade('');
        setTelefone('');
        setEmail('');
        setSenha('');
      } catch (error) {
        setMensagem('Erro ao cadastrar usuário.');
      }
    };


return(
    <MDBContainer fluid className={`p-0`}>
      <MDBRow className="g-0">
        {/* Lado esquerdo: Formulário */}
        <MDBCol md="6" className="d-flex align-items-center justify-content-center bg-white">
          <form onSubmit={cadastrarUsuario} className={`p-5 rounded shadow w-75`}>
            <h3 className="text-center mb-4">Cadastra-se Aqui!</h3>

            <div className="mb-4">
              <MDBInput
                label="Nome"
                id="Nome"
                type="text"
                value={Nome}
                onChange={(e) => setNome(e.target.value)}
                className="form-control"
                />
            </div>

            <div className="mb-4">
              <MDBInput
                label="Data de Nascimento"
                id="DataNasc"
                type="date"
                value={DataNasc}
                onChange={(e) => setDataNasc(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <MDBInput
                label="Endereço"
                id="Endereco"
                type="text"
                value={Endereco}
                onChange={(e) => setEndereco(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <MDBInput
                label="Cidade"
                id="Cidade"
                type="text"
                value={Cidade}
                onChange={(e) => setCidade(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <MDBInput
                label="Telefone"
                id="Telefone"
                type="tel"
                value={Telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <MDBInput
                label="Email"
                id="Email"
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="mb-4">
              <MDBInput
                label="Senha"
                id="Senha"
                type="password"
                value={Senha}
                onChange={(e) => setSenha(e.target.value)}
                className="form-control"
              />
            </div>

            <MDBBtn type="submit" className = {`btn btn-success w-100 ${styles.MDBBtn}`}>
              Concluir
            </MDBBtn>

            {mensagem && <p className="mt-3">{mensagem}</p>}
          </form>
        </MDBCol>

        {/* Lado direito: Imagem */}
            <MDBCol md="6"  className={`d-none d-md-flex ${styles.imagemLateral}`}>
            <div>
            <img src="/fazenda-cadastrar.png" alt="Imagem de fazenda" className={styles.imagem} />
            <p className={styles.textoImagem}>
            Crie sua conta e gerencie suas rações de forma prática e organizada.
            <br />
            Seu estoque sempre no controle e seus animais sempre bem cuidados.
            </p>
        </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export {FormCadastrar };