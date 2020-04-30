class ContactRequest{
    buscarContato(callback){
        let contacts = false;

        $.ajax({
            url: `${api_url}/contatos.json`,
            success: (resposta) =>{
                callback(resposta);
            },
        });
    }

    excluirContato(id, callback){
        $.ajax({
            url: `${api_url}/contatos/${id}.json`,
            type: 'DELETE',
            success: (resposta) => {
                callback(resposta);
            }
        })
    }

    cadastrarContato(Contact, callback){
        $.ajax({
            url: `${api_url}/contatos.json`,
            type: 'POST',
            dataType: 'json',
            content: 'application/json',
            data: JSON.stringify(Contact),
            success: (resposta) => {
                callback(resposta);
            }
        });
    }

}