import React, {useState} from 'react'
import { Container, Form } from './styles';
import Input from '../../Components/Input';
import Botao from '../../Components/Botao';
import { validarEmail, validarSenha } from '../../Utils/validadores';
import UserService from '../../Services/UserService'

const userService = new UserService()

const Login = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const response = await userService.login(form)
            console.log('response do login', response)
            if (response === true) {
                alert('Usuário logado com sucesso!')
                //navegar para a home
            }
            setLoading(false)
        }
        catch (err) {
            alert('Algo deu errado com o login' + err)
        }
    }

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password)
    }

    console.log('Form esta válido?', validadorInput())

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
                    disabled={loading === true || !validadorInput()}
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