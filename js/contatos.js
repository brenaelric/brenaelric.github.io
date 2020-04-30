const atualizarTabela = (contatos) =>{
    $('#tabela_contatos').html('');

    for(let id in contatos){
        let cadaContato = contatos[id];

        $('#tabela_contatos').append(`
          <tr>
            <td>${cadaContato.nome}</td>
            <td>${cadaContato.email}</td>
            <td>${cadaContato.telefone}</td>
            <td></td>
            <td>
              <a href="#" class="btn btn-warning btn-sm">
                Editar
              </a>
              <a href="#" onclick="excluirContato('${id}', '${cadaContato.nome}')" class="btn btn-danger btn-sm">
                Excluir
              </a>
            </td>
          </tr>
      `);
    }
}

const listarContatos = () =>{
    (new ContactRequest()).buscarContato(atualizarTabela);

};

const excluirContato = (id, nome) =>{

    $('#excluir-contato').html(nome);

    $('#modal-excluir').modal();

    $('#confirmar-excluir').click(() =>{

        (new ContactRequest()).excluirContato(id, listarContatos);
        $('#modal-excluir').modal('hide');

        $.toast().reset('all');
        $.toast({
            heading: 'Pronto!',
            icon: 'info',
            text: `Alquimista ${nome} eliminado`,
            position: 'top-right',
        });
    });
};

$('#form-cadastro').submit((evento) =>{
    evento.preventDefault();

    const contato = new Contact(
        $('#cadastro_nome').val(),
        $('#cadastro_email').val(),
        $('#cadastro_telefone').val()
    );

    (new ContactRequest()).cadastrarContato(contato, listarContatos);

    $('#modal-novo-contato').modal('hide');
    $('#form-cadastro')[0].reset();
    $.toast({
        heading: 'Pronto!',
        text: 'Novo Contato Cadastrado!',
        position: 'top-right',
    });
});

listarContatos();
