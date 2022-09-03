import React from 'react'
import { Container, Form } from './styles';
import Input from '../../Components/Input';
import Botao from '../../Components/Botao';

const Login = () => {

    const handleSubmit = async () => {
        try {
            alert('Login')
        }
        catch (err) {
            alert('Algo deu errado com o login' + err)
        }
    }

    const handleChange = (event) => {
        console.log('Digitando...', event.target.name, event.target.value)
    }

    return ( 
        <Container>
            <Form>
                <h1>Faça o seu Login! 👋</h1>
                <Input
                    name='email'
                    placeholder='Digite o seu e-mail'
                    onChange={handleChange}
                    type='email'
                />
                <Input
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={handleChange}
                    type='password'
                />
                <Botao
                    type='submit'
                    text='Entrar!'
                    onClick={handleSubmit}
                    //disabled={}
                />
                <div>
                    <p>Não possui conta?</p>
                    <a>Cadastrar</a>
                </div>
            </Form>
        </Container>
     );
}
 
export default Login;