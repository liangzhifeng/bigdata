I$("48de2aa5ffeba2b2ea4be61093257f1f",function(e,t,n,i,a,s,r){var o=s._$getBody();var c=o.clientHeight;var l={menu:{show:!1,top:600,func:"showMenu"},support:{show:!1,top:2470,func:"showAdvantage"}};r={init:function(){this.initScroll();this.initBannerScrollView();this.initSupportScrollView();this.initServices();this.initUser();s._$addHeadEvent()},initScroll:function(){var e=this;t._$addEvent(window,"scroll",e.checkScroll._$bind(e));e.checkScroll()},checkScroll:function(){for(var e in l){var t=l[e];var n=o.scrollTop||document.documentElement.scrollTop;if(!t.show&&n<t.top&&c+n>t.top){this[t.func].apply(this);t.show=!0}}},initBannerScrollView:function(){var t=e._$getByClassName("homeBanners","pager-link")[0];if(!t)return!1;e._$addClassName(t,"active");e._$delClassName(t,"f-hide");a._$$Slider._$allocate({delay:5e3,duration:""!==s._$cssSupport("opacity")?300:1,container:e._$getByClassName("homeBanners","slide-wrapper")[0],pointer:e._$getByClassName("homeBanners","scroll-pager")[0],type:2,trigger:"click",crtClassName:"active"})},initServices:function(){var n=e._$getByClassName(o,"m-home-services")[0];t._$addEvent(n,"mouseover",this.activeService.bind(this,n))},activeService:function(n,i){var a=t._$getElement(i,"m-home-service");if(a){var s=e._$getByClassName(n,"active");if(s.length>0)s.forEach(function(t){e._$delClassName(t,"active")});if(!e._$hasClassName(a,"active"))e._$addClassName(a,"active")}},initSupportScrollView:function(){var n=5;var a=e._$getByClassName(o,"m-home-supports");if(!a||!a.length)return!1;var s=e._$getByClassName(a[0],"m-scrollview")[0];var r=i._$$ScrollView._$allocate({container:s,interval:5e3,notHoverPause:!0,type:"opacity",unit:"",showSize:n,index:2,changeSlideCallBack:function(e,t){}});window.supportScrollView=r;t._$addEvent(s,"click",function(i){var a=t._$getElement(i,"c:m-home-support");if(a){var s=parseInt(e._$dataset(a.parentNode,"index"))||0;var o=r.index;if(s>o){t._$stop(i);if(s-o>Math.floor(n/2))r._$go(0-(n-s),!0);else r._$go(s,!0)}else if(s<o){t._$stop(i);if(o-s>Math.floor(n/2))r._$go(n+s,!0);else r._$go(s,!0)}}})},initUserScrollView:function(){var t=e._$getByClassName(o,"m-home-users");if(!t||!t.length)return!1;var n=e._$getByClassName(t[0],"m-scrollview")[0];var a=i._$$ScrollView._$allocate({container:n,interval:5e3,notHoverPause:!0,type:"opacity",unit:"",changeSlideCallBack:function(e,t){}});window.userScrollView=a},showMenu:function(){var t=e._$getByClassName(o,"menus-container")[0];e._$addClassName(t,"menus-container-show")},showAdvantage:function(){var t=e._$getByClassName("homeAdvantages","advantage-text");for(var n=t.length-1;n>=0;n--){var i=t[n];this.doAdvantage(i,0,parseInt(i.innerHTML))}},doAdvantage:function(e,t,n){var i=t;var a=setInterval(function(){i+=1;if(!(i>n))e.innerHTML=i;else a=window.clearInterval(a)},1e3/(n-t))},initUser:function(){var n=e._$getByClassName(o,"m-home-users-large")[0];t._$addEvent(n,"mouseover",this.activeUser.bind(this,n))},activeUser:function(n,i){var a=t._$getElement(i,"m-home-user-large");if(a){var s=e._$getByClassName(n,"active");if(s.length>0)s.forEach(function(t){e._$delClassName(t,"active")});if(!e._$hasClassName(a,"active"))e._$addClassName(a,"active")}}};r.init()},"d17f2a2f28f55eeaf2411457c9d8e342","2bc842432992cf30f9d6c63359d08fc6","5a4f80a65865dc858c284526d0e660cc","21ae8a94bdf5025dd81b3712428af9aa","b68b6689976b3f25c1e1c9e6182f9ca0","af4c748f3d8fe2809a6081a7b8b254e6");
//# sourceMappingURL=./s/pt_index.js.map