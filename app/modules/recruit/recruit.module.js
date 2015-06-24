/**
 * Created by JackGao on 22/6/15.
 */


+(function () {

    'use strict';

    angular.module('recruit', []).controller('RecruitController',RecruitController);

    function RecruitController(){
        this.message = '本店招一名换屏的维修工 有意者联系15263562555'+
        ' 地址聊城市 东昌府区 柳园北路 汽车总站出站口对过 鸿发通讯城';
    }

})();