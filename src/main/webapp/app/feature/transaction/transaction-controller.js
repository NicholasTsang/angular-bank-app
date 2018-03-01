(function() {

    var TransactionController =  function() {
        
    	var vm = this;
    	
    	vm.bestTrainer = 'Shafeeq';
    	vm.notShafeeq1 = 'Tadas'; 
            
    };

    angular.module('accountApp').controller('transactionController', [TransactionController]);
}());