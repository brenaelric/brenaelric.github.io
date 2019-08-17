const listarUsuarios = () =>{
  $('#tabela_usuarios').html('');
  $.ajax({
  url:`${api_url}/usuarios.json`,
  success:(resposta) => {
    for(let id in resposta){
      let cadaUsuario = resposta[id];

      $('#tabela_usuarios').append(`
          <tr>
            <td>${cadaUsuario.nome}</td>
            <td>${cadaUsuario.email}</td>
            <td></td>
            <td>
              <a href="#" class="btn btn-warning btn-sm">
                Editar
              </a>
              <a href="#" onclick="excluirUsuario('${id}', '${cadaUsuario.nome}')" class="btn btn-danger btn-sm">
                Excluir
              </a>
            </td>
          </tr>
      `);
    }
  }
});
};


const excluirUsuario = (id, nome) =>{

  $('#excluir-usuario').html(nome);

  $('#modal-excluir').modal();

  $('#confirmar-excluir').click(() =>{
    $.ajax({
      url:`https://brena-frontend-api.firebaseio.com/usuarios/${id}.json`,
      type: 'DELETE',
      success: (resposta) =>{
        listarUsuarios();
        $('#modal-excluir').modal('hide');

        $.toast().reset('all');
        $.toast({
          heading: 'Pronto!',
          icon: 'info',
          text: `Alquimista ${nome} eliminado`,
          position: 'top-right',
        });
      },
    });
  });
};

$('#form-cadastro').submit((evento) =>{
  evento.preventDefault();

  const usuario ={
    nome: $('#cadastro_nome').val(),
    email: $('#cadastro_email').val(),
    senha: $('#cadastro_senha').val(),
  };

  $.ajax({
    url:`${api_url}/usuarios.json`,
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(usuario),
    success: (resposta) =>{
      $('#modal-novo-usuario').modal('hide');
      listarUsuarios();
      $('#form-cadastro')[0].reset();
      $.toast({
        heading: 'Pronto!',
        text: 'Novo Alquimista Cadastrado!',
        position: 'top-right',
      });
    },
    error: (resposta) =>{

    }
  });
});

listarUsuarios();
