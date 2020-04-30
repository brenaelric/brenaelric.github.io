const atualizarQuantidade = (usuarios) =>{
  $('#quantidade-usuarios').html(Object.keys(usuarios).length);
}
(new UserRequest()).buscarUsers(atualizarQuantidade);

const atualizarTabela = (usuarios) =>{
  $('#tabela_usuarios').html('');

  for(let id in usuarios){
    let cadaUsuario = usuarios[id];

    $('#tabela_usuarios').append(`
          <tr>
            <td>${cadaUsuario.nome}</td>
            <td>${cadaUsuario.email}</td>
            <td>${moment(cadaUsuario.registrado_em).format('DD/MM/YYYY HH:mm:ss')}</td>
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

  let config ={
    language:{
      lengthMenu: "Mostrando _MENU_ alquimistas por página",
      info: "Mostrando  _END_   de total de  _MAX_   (página _PAGE_ de  _PAGES_ )",
      paginate:{
        previous: 'Anterior',
        next: 'Próxima',
      },
      search: 'Pesquisar',
      zeroRecords: 'Nenhum resultado encontrado',
      infoFiltered: 'Buscado num total de  _MAX_  alquimistas',
      infoEmpty: '',
    },
  }

  $('#datatables').DataTable(config).reload();

  $('#datatables').DataTable(config);
}

const listarUsuarios = () =>{
  (new UserRequest()).buscarUsers(atualizarTabela);

};

const excluirUsuario = (id, nome) =>{

  $('#excluir-usuario').html(nome);

  $('#modal-excluir').modal();

  $('#confirmar-excluir').click(() =>{

    (new UserRequest()).excluirUsuario(id, listarUsuarios);
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

  const usuario = new User(
      $('#cadastro_nome').val(),
      $('#cadastro_email').val(),
      $('#cadastro_senha').val()
  );

  (new UserRequest()).cadastrarUsuario(usuario, listarUsuarios);

  $('#modal-novo-usuario').modal('hide');
  $('#form-cadastro')[0].reset();
  $.toast({
    heading: 'Pronto!',
    text: 'Novo Alquimista Cadastrado!',
    position: 'top-right',
  });
});

listarUsuarios();


