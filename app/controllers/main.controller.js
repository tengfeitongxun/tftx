/**
 * Created by JackGao on 22/6/15.
 */

+(function () {

    angular.module('tftx').controller('MainController', MainController);

    function MainController($scope) {

        this.brand = '腾飞通讯';

        this.modules = [
            {
                name: 'home',
                title: '首页',
                tpl_url: 'app/modules/home/views/home.tpl.html'
            },
            {
                name: 'fixing',
                title: '手机维修',
                tpl_url: 'app/modules/fixing/views/fixing.tpl.html'
            },
            {
                name: 'fitting',
                title: '手机配件',
                tpl_url: 'app/modules/fitting/views/fitting.tpl.html'
            },
            {
                name: 'phoneBuy',
                title: '手机采购',
                tpl_url: 'app/modules/phoneBuy/views/phoneBuy.tpl.html'
            },
            {
                name: 'smartNO',
                title: '手机靓号',
                tpl_url: 'app/modules/smartNO/views/smartNO.tpl.html'
            },
            {
                name: 'recruit',
                title: '招贤纳士',
                tpl_url: 'app/modules/recruit/views/recruit.tpl.html'
            },
            {
                name: 'contactUS',
                title: '联系我们',
                tpl_url: 'app/modules/contactUS/views/contactUS.tpl.html'
            }
        ];
        this.main_template_url = this.modules[0].tpl_url;

        this.go_home = function(){
            this.main_template_url = this.modules[0].tpl_url;
        };

        this.goto_module = function(module){
            this.main_template_url = module.tpl_url;
        };
    }

})();