$('#form_cadastro').submit((event) => {
  event.preventDefault();

  $('#form_cadastro').fadeOut();
  $('#cadastro_ok').hide();
  $('#cadastro_erro').hide();

  const usuario = new User(
      $('#cadastro_nome').val(),
      $('#cadastro_email').val(),
      $('#cadastro_senha').val()
  );

  (new UserRequest()).cadastrarUsuario(usuario);

      $('#cadastro_ok').fadeIn();
      $('#form_cadastro')[0].reset();
});

$('#novo_cadastro').click(()=>{
  $('#cadastro_ok').fadeOut();
  $('#form_cadastro').fadeIn();

})
