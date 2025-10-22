import React, { useContext, useState } from 'react'
import LoginStyles from './Login.module.css'
import { useAuthContext } from '../../shared/context/AuthContext'

const Login = () => {

    const {login} = useAuthContext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleLogin = async () => {
        console.log("Login made...");
        
        if (!email || !password) {
            setError('Por favor, preencha todos os campos')
            return
        }

        login (email, password)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleLogin()
        }
    }

  return (
    <div className={LoginStyles.loginPage}>
      <div className={LoginStyles.loginContainer}>
        <div className={LoginStyles.loginLogo}>
          <div className={LoginStyles.logoIcon}>𝕏</div>
          <span className={LoginStyles.logoText}>Login</span>
        </div>

        <h1 className={LoginStyles.loginTitle}>Entrar na sua conta</h1>
        <p className={LoginStyles.loginSubtitle}>Acesse sua conta para continuar</p>

        {error && (
          <div style={{
            background: '#fee2e2',
            color: '#dc2626',
            padding: '12px 16px',
            borderRadius: '8px',
            border: '1px solid #fecaca',
            marginBottom: '20px',
            fontSize: '14px',
            textAlign: 'center'
          }}>
            {error}
          </div>
        )}

        <form className={LoginStyles.loginForm}>
          <div className={LoginStyles.inputGroup}>
            <label htmlFor="email" className={LoginStyles.inputLabel}>Email ou nome de usuário</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email ou @usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className={LoginStyles.loginInput}
              disabled={isLoading}
            />
          </div>

          <div className={LoginStyles.inputGroup}>
            <label htmlFor="password" className={LoginStyles.inputLabel}>Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className={LoginStyles.loginInput}
              disabled={isLoading}
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className={LoginStyles.loginButton}
            disabled={isLoading || !email || !password}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className={LoginStyles.loginLinks}>
          <a href="#" className={LoginStyles.loginLink}>Esqueceu sua senha?</a>

          <div className={LoginStyles.loginDivider}>ou</div>

          <div className={LoginStyles.signupText}>
            Não tem uma conta?{' '}
            <a href="#" className={LoginStyles.signupLink}>Criar conta</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login