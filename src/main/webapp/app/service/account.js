"use strict";

(function () {

    
    function AccountService ($log, accountDal) {

        this.getAccounts = function()
        {
        	$log.log("Accountservice getaccounts");
        	return accountDal.getAccounts();
        };
        
        this.saveAccount = function(accountDetails)
        {
        	$log.log("Accountservice saveAccount");
        	console.log(accountDetails);
        	return accountDal.saveAccount(accountDetails);
        }
        
    }
    
    angular.module("accountApp").service("accountService", ['$log','accountDal', AccountService]);

}());