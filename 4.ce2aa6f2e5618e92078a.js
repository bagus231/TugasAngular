(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jkDv:function(t,o,n){"use strict";n.r(o),n.d(o,"AdminModule",function(){return T});var e=n("ofXK"),a=n("fXoL"),i=n("H+bZ"),c=n("tyNb"),r=n("/t3+"),s=n("bTqV"),b=n("NFeN"),d=n("XhcP"),p=n("MutI"),m=n("FKr1");let u=(()=>{class t{constructor(t,o){this.api=t,this.router=o}ngOnInit(){this.checklogin()}checklogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}logout(){confirm("keluar aplikasi?")&&(localStorage.removeItem("appToken"),window.location.reload())}}return t.\u0275fac=function(o){return new(o||t)(a.Nb(i.a),a.Nb(c.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-admin"]],decls:30,vars:9,consts:[["color","primary",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["mat-button","",3,"click"],[1,"admin-container"],["mode","side",1,"sidenav-left",3,"position","opened","fixedInViewport","fixedTopGap","fixedBottomGap"],["sidenav",""],["routerLink","/admin/dashboard"],["matListIcon",""],["matLine",""],["routerLink","/admin/product"],["mode","side",1,"example-sidenav",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],[2,"padding","20px","background-color","#ccc"]],template:function(t,o){if(1&t){const t=a.Ub();a.Rb(0),a.Tb(1,"mat-toolbar",0),a.Tb(2,"button",1),a.ac("click",function(){return a.qc(t),a.oc(14).toggle()}),a.Tb(3,"mat-icon"),a.xc(4,"menu"),a.Sb(),a.Sb(),a.Tb(5,"span"),a.xc(6,"My Angular"),a.Sb(),a.Ob(7,"div",2),a.Tb(8,"small"),a.xc(9,"Admin"),a.Sb(),a.Tb(10,"button",3),a.ac("click",function(){return o.logout()}),a.xc(11,"Logout"),a.Sb(),a.Sb(),a.Tb(12,"mat-sidenav-container",4),a.Tb(13,"mat-sidenav",5,6),a.Tb(15,"mat-nav-list"),a.Tb(16,"mat-list-item",7),a.Tb(17,"mat-icon",8),a.xc(18,"dashboard"),a.Sb(),a.Tb(19,"h3",9),a.xc(20,"Dashboard"),a.Sb(),a.Sb(),a.Tb(21,"mat-list-item",10),a.Tb(22,"mat-icon",8),a.xc(23,"camera_enhance"),a.Sb(),a.Tb(24,"h3",9),a.xc(25,"Product"),a.Sb(),a.Sb(),a.Sb(),a.Sb(),a.Ob(26,"mat-sidenav",11,6),a.Tb(28,"mat-sidenav-content",12),a.Ob(29,"router-outlet"),a.Sb(),a.Sb(),a.Qb()}2&t&&(a.Cb(13),a.jc("position","start")("opened",!0)("fixedInViewport",!0)("fixedTopGap",64)("fixedBottomGap",0),a.Cb(13),a.jc("position","end")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0))},directives:[r.a,s.a,b.a,d.b,d.a,p.d,p.b,c.b,p.a,m.j,d.c,c.d],styles:[""]}),t})(),l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=a.Hb({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,o){1&t&&(a.Tb(0,"p"),a.xc(1,"dashboard works!"),a.Sb())},styles:[""]}),t})();var f=n("3Pt+"),h=n("w55g");const x=[{path:"",component:u,children:[{path:"dashboard",component:l},{path:"image",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=a.Hb({type:t,selectors:[["app-image"]],decls:2,vars:0,template:function(t,o){1&t&&(a.Tb(0,"p"),a.xc(1,"image works!"),a.Sb())},styles:[""]}),t})()},{path:"product",component:n("FEFJ").a}]}];let T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({imports:[[e.c,c.c.forChild(x),f.e,h.a]]}),t})()}}]);