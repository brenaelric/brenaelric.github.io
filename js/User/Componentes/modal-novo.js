document.getElementById('modalNovo').innerHTML = `
<div id="modal-novo-usuario" class="modal fade" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Novo Alquimista</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form id="form-cadastro" action="#" method="post">
            <div class="modal-body">
              <input required id="cadastro_nome" type="text" class="form-control form-control-lg mt-4" placeholder="nome">
              <input required id="cadastro_email" type="email" class="form-control form-control-lg mt-2" placeholder="email">
              <input required id="cadastro_senha" type="password" class="form-control form-control-lg mt-2" placeholder="Senha">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button class="btn btn-dark">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
`;