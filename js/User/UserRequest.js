class UserRequest{
    buscarUsers(callback){
        let users = false;

        $.ajax({
            url: `${api_url}/usuarios.json`,
            success: (resposta) =>{
                callback(resposta);
            },
        });
    }

    excluirUsuario(id, callback){
        $.ajax({
            url: `${api_url}/usuarios/${id}.json`,
            type: 'DELETE',
            success: (resposta) => {
                callback(resposta);
            }
        })
    }

    cadastrarUsuario(User, callback){

        $.ajax({
            url: `${api_url}/usuarios.json`,
            type: 'POST',
            dataType: 'json',
            content: 'application/json',
            data: JSON.stringify(User),
            success: (resposta) => {
                callback(resposta);
            }
        });
    }

}