import React, { useState } from 'react';
import {MDBContainer,MDBRow,MDBCol,MDBBtn,MDBInput} from 'mdb-react-ui-kit';
import styles from './FormLogin.module.css';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const navigate = useNavigate();

  const submeterFormulario = async (event) => {
    event.preventDefault();

    if (!email || !senha) {
      setMensagem('Preencha todos os campos!');
      return;
    }

    try {
      const response = await api.get('/usuarios', {
        params: {
          Email: email,
          Senha: senha
        }
      });

      if (response.data.length > 0) {
        setMensagem('Login bem-sucedido!');
        // Aqui você pode salvar o usuário no localStorage ou contexto se quiser
        navigate('/dashboard'); // ou qualquer rota segura
      } else {
        setMensagem('E-mail ou senha incorretos!');
      }
    } catch (error) {
      setMensagem('Erro ao tentar fazer login.');
    }
  };

  return(
    <MDBContainer fluid className={`p-0`}>
      <MDBRow className="g-0">
        {/* Lado esquerdo: Formulário */}
        <MDBCol md="6" className="d-flex align-items-center justify-content-center bg-white">
          <form onSubmit={submeterFormulario} className={`p-5 rounded shadow w-75`}>
          <div
          className="mb-3 mx-auto" style={{
            backgroundImage: 'url("/public/icon-fazenda.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
          }}
        ></div>
            <h3 className="text-center mb-4">Faça Login Aqui!</h3>

            <div className="mb-4">
              <MDBInput
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-control"
                />
            </div>

            <div className="mb-4">
              <MDBInput
                label="Senha"
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                className="form-control"
              />
            </div>

            <MDBBtn type="submit" className = {`btn btn-success w-100 ${styles.MDBBtn}`}>
              Entrar
            </MDBBtn>

            {mensagem && <p className="mt-3 text-center text-danger">{mensagem}</p>}

            <div className={styles.textoCadastro}>
              <p className="mb-0">Não é cadastrado?</p>
              <Link to="/cadastra-se"><span>Cadastre-se aqui!</span></Link>
            </div>
          </form>
        </MDBCol>

        {/* Lado direito: Imagem */}
        <MDBCol md="6"  className={`d-none d-md-flex ${styles.imagemLateral}`}>

           <div className={styles.imagemLateralTexto}>

            <h2>Bem-vindo ao seu sistema de Gerenciamento de alimentos!</h2>
            <p>Conecte-se e comece a Gerenciar.</p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export { FormLogin };
