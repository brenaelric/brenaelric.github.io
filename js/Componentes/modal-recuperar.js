document.getElementById('modal-recuperar').innerHTML=`
    <div class="modal fade" ID="recuperar-senha" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title">Recuperar Senha</h5>
            <button class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <form action="">
              <label for="recover">Email: </label>
              <input id="recover" type="email" class="form-control form-control-lg" placeholder="Informe seu email">
              <button class="btn btn-primary btn-lg mt-3">RECUPERAR</button>
            </form>
          </div>
            <form action="" method="post">
              <input type="email" class="form-control form-control-lg mt-4" placeholder="Email"</input>
              <input type="password" class="form-control form-control-lg mt-2" placeholder="Senha"></input>
              <button class="btn btn-dark btn-lg btn-block mt-3">ENTRAR</button>
            </form>
        </div>
      </div>
    </div>
`;