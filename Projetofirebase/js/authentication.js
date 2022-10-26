const baseURL = "http://127.0.0.1:5500"
    /** 
    @param {string} email
    @param {string} senha
    @return {object}
    */
function loginFirebase(email, senha) {

    firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)
        .then(result => {
            alert(`bem vindo , ${JSON.stringify(result.user.email)}`)
            window.location.href = `${ baseURL}/home.html`

        })

    .catch(error => {
        let mensagemerro = ''
        switch (error.code) {
            case 'auth/invalid-email':
                mensagemerro = 'O e-mail é invalido'
                break;

            case 'auth/email-already-exists':
                break;


            default:
                mensagemerro = error.message

        }
        alert(`Erro ao efetuar o login : ${mensagemerro}`)


    })
}
/**  
     * @param { String } - email do usuario 
    email
   * @param { String } - senha do usuario 
    senha
    * @return { Object } - o usuario criado 
    */

function novoUsuario(email, senha) {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then((result) => {
            alert(`Bem vindo,${JSON.stringify(result.user.email)}`)
            window.location.href = `${baseURL}/home.html`


        })


    .catch(error => {
        alert(`Não foi possivel Cadastrar usuario. erro: ${error.message}`)
    })
}
/**
 * verificaLogado 
 * verifica se o usuario esta logado no sistema
 * @return{null}
 * 
 */
function verificaLogado() {
    firebase.auth().onAuthStateChanged(user => {
        if (!user) {
            console.log('Acesso invalido Redirecionando...')
            window.location.href = baseURL

        }
    })

}