class User{
    constructor(nome, email, senha){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    getName(){
        return this.nome;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.senha;
    }

}