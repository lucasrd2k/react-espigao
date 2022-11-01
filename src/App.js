import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = './img/logo.png'
        className = "App-logo"
        alt = "logo" / >
        <
        br / >
        <
        form >
        <
        label > Usuário: < /label><br / >
        <
        input / > < br / >

        <
        label > Senha: < /label><br / >
        <
        input type = 'password' / > < br / >
        <
        a href = '#'
        className = 'App-link' > Esqueceu a senha ? < /a> {
            /* Usar border-radius nos inputs, 
                    personalizar o botão com a imagem prosicionada e 
                    tirar o sublinhado do esqueceu a senha */
        } <
        br / >
        <
        button >
        <
        img src = "./img/logo.png"
        className = 'imgButton' / >
        Continuar <
        /button>

        <
        button >
        <
        img src = "./img/logo.png"
        className = 'imgButton' / >
        Cadastrar <
        /button> <
        /form>

        <
        /header>

        <
        /div>
    );
}

export default App;