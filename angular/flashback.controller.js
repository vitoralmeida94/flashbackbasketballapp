(function() {
    'use strict';

angular
    .module("flashbackApp")
    .controller("flashbackController", flashbackController);

    function flashbackController(){
        var vm = this;

        function init(){
            vm.players = [
                {name:'Capitão',points:0},
                {name:'Douglas',points:0},
                {name:'Barbosa',points:0},
                {name:'Pinho',points:0},
                {name:'Miguel',points:0},
                {name:'Caio',points:0},
                {name:'Vitor',points:0},
                {name:'Bruno',points:0},
                {name:'Andre',points:0},
                {name:'Denis',points:0},
                {name:'Arthur',points:0},
                {name:'Renan',points:0},
                {name:'Sem Vida',points:0},
                {name:'Sgt Sousa',points:0},
                {name:'Bombado',points:0},
                {name:'Frederico',points:0},
                {name:'João Pedro',points:0},
                {name:'João Vitor',points:0},
                {name:'Luis',points:0},
                {name:'Freire',points:0}
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
               
            }

            
        };

        init();
    }
})();