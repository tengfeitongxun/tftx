/**
 * Created by JackGao on 23/6/15.
 */

+function () {

    'use strict';

    angular.module('home', []).controller('HomeController', HomeController);

    function HomeController() {

        this.update_show = false;
        this.slider_show = true;

        this.updates = [
            {
                id: 0,
                title: '维修工招聘',
                content: '维修工招聘...'
            },
            {
                id: 1,
                title: '新近一批手机屏',
                content: '新近一批手机屏...'
            },
            {
                id: 2,
                title: '学员培训报名',
                content: '学员培训报名...'
            },
            {
                id: 3,
                title: '端午节员工福利',
                content: '端午节员工福利..'
            },
            {
                id: 4,
                title: '客户关系维护',
                content: '客户关系维护..'
            }
        ];

        this.goto_update = function(update){
            this.current_update = update;
            this.update_show = true;
            this.slider_show = false;
        };

        this.close_update = function(){
            this.update_show = false;
            this.slider_show = true;
        };

        this.sliders = [
            {
                id:0,
                img_url: 'app/modules/home/images/slider0.jpg',
                title: '',
                link_url: 'slider0'
            },
            {
                id:1,
                img_url: 'app/modules/home/images/slider1.jpg',
                alt: '',
                link_url: 'slider1'
            },
            {
                id:2,
                img_url: 'app/modules/home/images/slider2.jpg',
                title: '',
                link_url: 'slider2'
            },
            {
                id:3,
                img_url: 'app/modules/home/images/slider3.jpg',
                title: '',
                link_url: 'slider3'
            },
            {
                id:4,
                img_url: 'app/modules/home/images/slider4.jpg',
                title: '',
                link_url: 'slider4'
            }
        ];

        this.goto_slider = function(slider){
            console.log("go to slider url: "+ slider.link_url);
        };

        $('#news-slider').carousel();
    }

}();