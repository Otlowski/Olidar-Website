/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$( document ).ready(function() {
                
    var mainVC = {};
        mainVC.$mainContent = $('.main-content');
        //init function
        mainVC.init = function(){
            var mainContent = mainVC.$mainContent;
                mainContent.fadeOut();
        };
        mainVC.init();
                
});

