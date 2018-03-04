"use strict";

(function() {

	var AccountController = function(accountService, $log) 
	{

		$log.log("Accountcontroller is created");
		var vm = this;
		
		vm.isHidden = false;
		

		vm.hideTable = function() 
		{
			vm.isHidden = !vm.isHidden
		};
		
		vm.removeDetails = function(removeAccountDetails){
			vm.removeFirstName = removeAccountDetails.firstName;
			vm.removeSecondName = removeAccountDetails.secondName;
			vm.removeAccountNumber = removeAccountDetails.accountNumber;
			vm.fullremoveAccountDetails = removeAccountDetails;
			
		}
		
		vm.removeAccount = function(){

				$log.log("removeAccount");
				console.log(vm.fullremoveAccountDetails);
				accountService.removeAccount(vm.fullremoveAccountDetails);
				location.reload();
		}

		vm.updateDetails = function(updateDetails){
			vm.updateFirstName = updateDetails.firstName;
			vm.updateSecondName = updateDetails.secondName;
			vm.updateAccountNumber = updateDetails.accountNumber;
			vm.accountId = updateDetails.id;
			
		}
		
		vm.updateAccount = function(){

		$log.log("updatedAccount");
		 var updateAccountString = '{"id": "' + vm.accountId +'","firstName":"'+ vm.updatedFirstName +'", "secondName":"' + vm.updatedSecondName + '", "accountNumber":"' + vm.updatedAccountNumber + '", "transactions":[]}'
	 		$log.log(updateAccountString);
		  		var updateAccountDetails = JSON.parse(updateAccountString);
		  		$log.log(updateAccountDetails);
		  			accountService.updateAccount(updateAccountDetails);
		  			location.reload();
		}
		
		function init() 
		{
			accountService
					.getAccounts()
					.then(
							function(results) 
							{
								vm.accounts = results;
								$log
										.log("In the account controller the value of the result promise is ");
								$log.log(JSON.stringify(vm.accounts));
							}, function(error) 
							{
								vm.error = true;
								vm.errorMessage = error;
							});
		}

		init();

	};

	angular.module('accountApp').controller('accountController',
			[ 'accountService', '$log', AccountController ]);
}());