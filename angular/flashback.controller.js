(function() {
    'use strict';

angular
    .module("flashbackApp")
    .controller("flashbackController", flashbackController);

    function flashbackController(){
        var vm = this;

        function init(){
            vm.players = [
                { name: 'Henrique', points: 0 },
                { name: 'Douglas', points: 0 },
                { name: 'Caio', points: 0 },
                { name: 'Pinho', points: 0 },
                { name: 'Barbosa', points: 0 },
                { name: 'Sem vida', points: 0 },
                { name: 'Bruno', points: 0 },
                { name: 'Vitinho', points: 0 },
                { name: 'Miguel', points: 0 },
                { name: 'Arthur', points: 0 },
                { name: 'André', points: 0 },
                { name: 'Lucas Sgt', points: 0 },
                { name: 'Freire', points: 0 },
                { name: 'Luis Henrique', points: 0 },
                { name: 'Bizzunci', points: 0 },
                { name: 'Coelho', points: 0 },
                { name: 'Igor', points: 0 },
                { name: 'Rostiolla', points: 0 },
                { name: 'Renan', points: 0 },
                { name: 'Bombado', points: 0 },
                { name: 'João Ski', points: 0 },
                { name: 'Fred', points: 0 },
                { name: 'Dennis', points: 0 },
                { name: 'Adriano', points: 0 },
                { name: 'João Trator', points: 0 },
                { name: 'João F', points: 0 },
                { name: 'João Vitor ', points: 0 },
                { name: 'João Abrantes ', points: 0 },
                { name: 'Márcio Piragibe', points: 0 }                    
            ];

            vm.playersList=[];
            vm.events = events;
            vm.events.list();

            vm.date = new Date();
            vm.date = ""+vm.date.getDate() + "/"+(vm.date.getMonth()+1)+"/2020";
        };   

        const events={
            list: function(){
                angular.copy(vm.players,vm.playersList);
            },
            addScore: function(player,p){
                for(let i=0;i<vm.playersList.length;i++){
                    if(vm.playersList[i].name === player){
                        vm.playersList[i].points = vm.playersList[i].points + p;
                    }
                }               
            },
            subtractScore: function(player,p){
                for(let i=0;i<vm.playersList.length;i++){
                    if(vm.playersList[i].name === player){
                        vm.playersList[i].points = vm.playersList[i].points - p;
                    }
                }               
            },

            
        };

        init();
    }
})();