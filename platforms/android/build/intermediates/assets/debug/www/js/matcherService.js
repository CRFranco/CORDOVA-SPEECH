angular.module("starter").provider("matcher", function () {

    this.$get = function () {
        return {
            compare: function (text) {
                console.log("sou o texto dentro do matcher: "+text);
                

                // integrar isso aqui na aplicação de tabs e daí fazer a mudança de estado
                // colocar o reconhecimento de voz em um serviço distinto
                // hoje ele é controller pq conversa com a view...se eu colocar a frase reconhecida como um retorno posso transforma-lo
                // em um servico
                var voice= /((reconhecimento\s)(de\s)?(voz))/i;
                var chat = /(chat)/i;
                var account = /(conta)/i;
                var cancel = /(cancelar?|abortar?|voltar?)/i;

                if(text.match(voice)){
                    console.log("voice");
                } else if(text.match(chat)){
                    console.log("chat");    
                } else if(text.match(account)){
                    console.log("account");
                } else if(text.match(cancel)){
                    console.log("cancel");
                } else {
                    console.log("não reconheceu");
                }



                return true;
            }

        };
    };
});