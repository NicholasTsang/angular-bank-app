"use strict";

(function () {

    function AccountDal ($log, dal) {

        this.getAccounts = function () {
        	$log.log("AccountDal get account");
            return dal.http.GET("rest/account/json");
        };

        this.saveAccount = function (accountToSave) {
        	$log.log(" AccountDal saveAccount");
            return dal.http.POST("rest/account/json", accountToSave);
        };

        this.updateAccount = function (accountToUpdate) {
        	$log.log("AccountDal update Account");
            return dal.http.PUT("rest/account/json/" + accountToUpdate.id , accountToUpdate);
        };

        this.deleteAccount = function (itemToDelete) {
        	$log.log("AccountDal deleteAccount");
            return dal.http.DELETE("rest/account/json/", itemToDelete);
        };
    }
    
    angular.module("accountApp").service("accountDal", ["$log", "dal", AccountDal]);
}());