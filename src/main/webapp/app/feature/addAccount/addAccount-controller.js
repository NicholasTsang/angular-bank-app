"use strict";

(function() {

	var AddAccountController = function(accountService, $log) {

		$log.log("AddAccountcontroller is created");
		var vm = this;
		var accountDetails;
		
		

		vm.submit = function() {
			$log.log("Submit");
			
			  var jsonString = '{"firstName": "'+ vm.firstName
			  +'","secondName": "'+ vm.surName +'","accountNumber": "'+
			  vm.accountNumber +'","transactions": []}'; 
			  
			  $log.log(jsonString);
			  accountDetails = JSON.parse(jsonString);
			  
			  console.log(accountDetails.firstName);
			  console.log(accountDetails.secondName);
			  console.log(accountDetails.accountNumber);
			  accountService.saveAccount(accountDetails);
			 
		}

	};

	angular.module('accountApp').controller('AddAccountController',
			[ 'accountService', '$log', AddAccountController ]);
}());