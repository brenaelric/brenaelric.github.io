document.getElementById('modalExcluir').innerHTML = `
    <div id="modal-excluir" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Excluir alquimista <span id="excluir-usuario"></span>?</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="alert alert-info">Após exclusão a ação não poderá ser revertida!</div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" id="confirmar-excluir" class="btn btn-primary">Confirmar</button>
            </div>
          </div>
        </div>
     </div>
`;