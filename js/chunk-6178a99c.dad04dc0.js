(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6178a99c"],{"1ef8":function(e,t,n){},"24db":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.BaseFirebaseOk?n("div",{staticClass:"ContenedorMarcadorResultados Visible"},[e._v(" "+e._s(e.NombreJugador())+" "),n("b",[e._v(e._s(e.Ganadas()))]),e._v(" - "),n("b",[e._v(e._s(e.Perdidas()))]),e._v(" Others "),n("div",{staticClass:"ContenedorPanel"},[n("div",{staticClass:"ContenedorTitulo"},[e._v("Edit Score")]),n("div",{staticClass:"ContenedorBotones"},[n("div",{staticClass:"BotonesLeft"},[n("div",{staticClass:"Boton BotonRojo noselect",on:{click:function(t){return e.RestarWin()}}},[e._v("↓")]),e._v(" "),n("div",{staticClass:"Boton BotonVerde noselect",on:{click:function(t){return e.SumarWin()}}},[e._v("↑")])]),n("div",{staticClass:"BotonReset noselect",attrs:{title:"It save the current score"},on:{click:function(t){return e.ResetearMarcador()}}},[e._v("Reset")]),n("div",{staticClass:"BotonesRight"},[n("div",{staticClass:"Boton BotonRojo noselect",on:{click:function(t){return e.RestarLose()}}},[e._v("↓")]),e._v(" "),n("div",{staticClass:"Boton BotonVerde noselect",on:{click:function(t){return e.SumarLose()}}},[e._v("↑")])])])])]):e._e()},r=[],a=(n("4160"),n("fb6a"),n("ac1f"),n("1276"),n("159b"),n("bee2")),o=n("d4ec"),i=(n("96cf"),n("1da1")),c=n("260b"),u=(n("66ce"),n("000b"),{apiKey:"AIzaSyCGlSx7Kv8kdglNrv-4V7P5R-gKp8cysdU",authDomain:"aoe2de-4d410.firebaseapp.com",databaseURL:"https://aoe2de-4d410-default-rtdb.firebaseio.com",projectId:"aoe2de-4d410",storageBucket:"aoe2de-4d410.appspot.com",messagingSenderId:"661198727406",appId:"1:661198727406:web:6ecf558118a4d828882bff",measurementId:"G-XR8V7V8BDM"}),l=(n("7491"),c["a"].initializeApp(u));c["a"].analytics();var d=l.database(),h=d.ref("MarcadorResultados"),f={name:"MarcadorResultadosFB",firebase:{MarcadorResultados:h},props:{},data:function(){return{MiNombre:"TM Marty",DatosMarcador:{Ganadas:0,Perdidas:0},ProfileId:"",InfoFB:null,BaseFirebaseOk:!1,InfoInicialSeteada:!1}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:setTimeout((function(){e.IntentoSeterInfoInicial()}),200);case 1:case"end":return t.stop()}}),t)})))()},methods:{IntentoSeterInfoInicial:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("IntentoSeterInfoInicial"),""!=e.NombreJugador()){t.next=6;break}return setTimeout((function(){e.IntentoSeterInfoInicial()}),200),t.abrupt("return");case 6:e.ProfileId=e.$parent.ProfileId;case 7:return t.next=9,e.ObtenerInfoDeUnProfile(e.ProfileId);case 9:if(e.InfoFB=t.sent,null!=e.InfoFB){t.next=16;break}return t.next=13,h.push(new _(e.ProfileId,e.NombreJugador()));case 13:return t.next=15,e.ObtenerInfoDeUnProfile(e.ProfileId);case 15:e.InfoFB=t.sent;case 16:if(null!=e.InfoFB){t.next=19;break}return console.log("VER"),t.abrupt("return");case 19:n=d.ref("MarcadorResultados/"+e.InfoFB.key),n.on("value",(function(t){var n=t.val();e.InfoFB._Name=e.NombreJugador(),e.InfoFB._Registros=n._Registros})),e.BaseFirebaseOk=!0;case 22:case"end":return t.stop()}}),t)})))()},ActualizarRegistrosEnFirebase:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=e,t.next=4,d.ref("MarcadorResultados/"+n.InfoFB.key).update({_Registros:n.InfoFB._Registros,_Name:n.NombreJugador()}).then((function(e){}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},ObtenerInfoDeUnProfile:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=null,t.prev=1,t.next=4,h.once("value",(function(t){t.forEach((function(t){t.val()._ProfileId==e&&(n=t.val(),n.key=t.key)}))}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),console.log(t.t0);case 9:return t.abrupt("return",n);case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()},SumarWin:function(){var e=this.InfoFB._Registros[this.InfoFB._Registros.length-1];e._Ganadas+=1,this.ActualizarRegistrosEnFirebase()},RestarWin:function(){var e=this.InfoFB._Registros[this.InfoFB._Registros.length-1];e._Ganadas>0&&(e._Ganadas-=1,this.ActualizarRegistrosEnFirebase())},SumarLose:function(){var e=this.InfoFB._Registros[this.InfoFB._Registros.length-1];e._Perdidas+=1,this.ActualizarRegistrosEnFirebase()},RestarLose:function(){var e=this.InfoFB._Registros[this.InfoFB._Registros.length-1];e._Perdidas>0&&(e._Perdidas-=1,this.ActualizarRegistrosEnFirebase())},ResetearMarcador:function(){this.InfoFB._Registros.push(new g),this.ActualizarRegistrosEnFirebase()},Ganadas:function(){return this.InfoFB._Registros[this.InfoFB._Registros.length-1]._Ganadas},Perdidas:function(){return this.InfoFB._Registros[this.InfoFB._Registros.length-1]._Perdidas},NombreJugador:function(){return this.$parent.NombreJugador&&this.$parent.NombreJugador.length>0?this.$parent.NombreJugador:""}}},_=function e(t,n){Object(o["a"])(this,e),this._ProfileId=t,this._Name=n,this._Registros=[],this._Registros.push(new g)},g=function e(){Object(o["a"])(this,e),this._Ganadas=0,this._Perdidas=0,this._Fecha=new b},b=function(){function e(t){Object(o["a"])(this,e),t||(t=new Date),this._Año=t.getFullYear(),this._Mes=t.getMonth()+1,this._Dia=t.getDate(),this._Horas=t.getHours(),this._Minutos=t.getMinutes(),this._Segundos=t.getSeconds(),this._FechaYHora=this.ObtenerTexto(),this._Fecha=this.ObtenerTexto1()}return Object(a["a"])(e,[{key:"ObtenerTexto",value:function(){var e="";try{e+=("0"+this._Dia).slice(-2),e+="/"+("0"+this._Mes).slice(-2),e+="/"+this._Año,e+=" "+("0"+this._Horas).slice(-2),e+=":"+("0"+this._Minutos).slice(-2),e+=":"+("0"+this._Segundos).slice(-2)}catch(t){console.log(t)}return e}},{key:"ObtenerTexto1",value:function(){var e="";try{e+=("0"+this._Dia).slice(-2),e+="/"+("0"+this._Mes).slice(-2),e+="/"+this._Año}catch(t){console.log(t)}return e}},{key:"Paquete",value:function(){return this._Año+"/"+this._Mes+"/"+this._Dia+"/"+this._Horas+"/"+this._Minutos+"/"+this._Segundos}},{key:"SetearDesdePaquete",value:function(e){var t=e.split("/");6==t.length&&(this._Año=t[0],this._Mes=t[1],this._Dia=t[2],this._Horas=t[3],this._Minutos=t[4],this._Segundos=t[5],this._FechaYHora=this.ObtenerTexto(),this._Fecha=this.ObtenerTexto1())}},{key:"ObtenerFecha",value:function(){var e=new Date(Date.UTC(this._Año,this._Mes-1,this._Dia,this._Horas,this._Minutos,this._Segundos));return e}}]),e}(),v=f,I=(n("58d4"),n("2877")),R=Object(I["a"])(v,s,r,!1,null,"38c2607e",null);t["default"]=R.exports},"58d4":function(e,t,n){"use strict";n("1ef8")}}]);
//# sourceMappingURL=chunk-6178a99c.dad04dc0.js.map