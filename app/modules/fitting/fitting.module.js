/**
 * Created by JackGao on 23/6/15.
 */

+function(){

    'use strict'

    angular.module('fitting',[]).controller('FittingController',FittingController);

    function FittingController(){
        this.categories = [
            {
                title: '电池',
                filters:[['brands','品牌'],['prices','价格']],
                brands:['全部','三星','华为','小米','魅族',
                    '步步高','OPPO','中兴','酷派'],
                prices:[[0,9],[18,27],[27,36],[36,45],[45,54]]
            },
            {
                title: '读卡器',
                filters:[['brands','品牌']],
                prices:[[0,2],[4,6],[10-12]]
            },
            {
                title: '内存',
                filters:[['brands','品牌'],['prices','价格'],['mem_size','内存大小']],
                brands:['全部','三星','联想','索尼','金士顿',
                    '杰力科','飞毛腿','镁鲨','优博思'],
                prices:[[0,9],[18,27],[27,36],[36,45],[45,54]]
            }
        ];
    }

}();
