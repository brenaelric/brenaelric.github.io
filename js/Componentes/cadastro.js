document.getElementById('cadastro').innerHTML=`
     <form action="" method="post" id="form_cadastro">
              <input required id="cadastro_nome" type="text" class="form-control form-control-lg mt-4" placeholder="nome">
              <input required id="cadastro_email" type="email" class="form-control form-control-lg mt-2" placeholder="email">
              <input required id="cadastro_senha" type="password" class="form-control form-control-lg mt-2" placeholder="Senha">
              <button id="cadastro_btn" class="btn btn-dark btn-lg btn-block mt-3">CADASTRAR</button>
            </form>
  
            <div class="alert alert-infp" style="display: none; text-align: center;" id="cadastro_ok">
              <strong>Pronto</strong>
              <br>
              Cadastro realizado!
              <br>
              <button id="novo_cadastro" class="btn btn-info">Novo Cadastro</button>
            </div>
            <div class="alert alert-danger" style="display: none; text-align: center;" id="cadastro_erro">
              <strong>Erro: </strong> Tente novamente.
            </div>
`;