import Vue from 'vue';
import './sass/style.scss';
import './css/style.css';
import $ from 'jquery';


 new Vue({
    el : '#app',
    data : {
     message : 'Vue running 測試'  
    }
 })

 $("button").click(function(){
   $(".box").slideToggle();
 });
