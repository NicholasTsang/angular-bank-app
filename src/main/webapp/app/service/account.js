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
        
        this.removeAccount = function(removeAccountDetails){
        	$log.log("Accountservice removeAccount");
        	console.log(removeAccountDetails);
        	return accountDal.deleteAccount(removeAccountDetails);
        }
        
        this.updateAccount = function(updateAccountDetails){
        	$log.log("Accountservice updateAccount");
        	console.log(updateAccountDetails);
        	return accountDal.updateAccount(updateAccountDetails);
        }
    }
    
    angular.module("accountApp").service("accountService", ['$log','accountDal', AccountService]);

}());