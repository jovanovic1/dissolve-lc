//tealium universal tag - utag.639 ut4.0.202307270536, Copyright 2023 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={id:id};utag.o[loader].sender[id]=u;u.ev={view:1,link:1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.callback=function(){twq('config',u.data.pixelId);u.data.events.forEach(function(event){twq('event',event,u.data[event]);});};u.map={};u.extend=[function(a,b){try{if(1){setTimeout(function(){if(typeof utag.data.order_id!=='undefined'){var prodCount=Array.isArray(utag.data.product_id)?utag.data.product_id.length:1;twq('init','obxql');var addProductCount=utag.data.product_sku_short.length||1;var contentArray=[];for(var dex=0;dex<addProductCount;dex++){var sku=(dex<utag.data.product_sku_short.length)?utag.data.product_sku_short[dex]:"";var name=(dex<utag.data.product_id.length)?utag.data.product_id[dex]:"";var price=(dex<utag.data.product_unit_price.length)?utag.data.product_unit_price[dex]:"";var quantity=(dex<utag.data.product_quantity.length)?utag.data.product_quantity[dex]:"1";var content={content_name:name,content_id:sku,quantity:quantity,price:price,}
contentArray.push(content);}
twq('track','Purchase',{value:utag.data.order_subtotal,currency:'USD',num_items:prodCount,contents:contentArray});}},500);jQuery('body').on('mousedown','.buy-opt,.js-addToCartBtn,.js-add-to-cart,.addToCart',function(e){var prodPrice=jQuery(this).attr('data-analytics-product-list-price');var contentID=jQuery(this).attr('data-analytics-product-sku-short');twq('track','AddToCart',{content_name:(typeof utag.data.product_id!=='undefined')?utag.data.product_id.toString():"",content_id:contentID,quantity:1,value:prodPrice,currency:'USD'});});}}catch(e){utag.DB(e)}}];u.send=function(utag_event,data_layer){if(u.ev[utag_event]||u.ev.all!==undefined){utag.DB('send:639');utag.DB(data_layer);var a,b,c,d,e,f,g,h,query_params;a=utag_event;b=data_layer;u.data={base_url:'https://static.ads-twitter.com/uwt.js',pixelId:'obxql',email_address:'',phone_number:'',external_id:'',search_string:'',description:'',twclid:'',order_total:'',order_currency:'',order_id:'',product_category:'',product_skus:'',product_names:'',product_unit_price:'',product_quantity:'',content_group_id:'',events:[]};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB('send:639:EXTENSIONS');utag.DB(data_layer);query_params=[];Object.keys(utag.loader.GV(u.map)).forEach(function(mapping_key){if(data_layer[mapping_key]!==undefined&&data_layer[mapping_key]!==''){var destinations=u.map[mapping_key].split(',');destinations.forEach(function(parameter){if(u.data.hasOwnProperty(parameter)||parameter.indexOf('.')>-1){u.map_func(parameter.split('.'),u.data,data_layer[mapping_key]);}});}else{var event_destinations=mapping_key.split(':');if(event_destinations.length===2&&String(data_layer[event_destinations[0]])===String(event_destinations[1])){if(u.map[mapping_key]){u.data.events=u.data.events.concat(u.map[mapping_key].split(','));}}}});utag.DB('send:639:MAPPINGS');utag.DB(u.data);var eCommerceMapping=[{eCommerceData:data_layer._ctotal,name:'order_total',isArray:false},{eCommerceData:data_layer._ccurrency,name:'order_currency',isArray:false},{eCommerceData:data_layer._corder,name:'order_id',isArray:false},{eCommerceData:data_layer._ccat,name:'product_category',isArray:true},{eCommerceData:data_layer._csku,name:'product_skus',isArray:true},{eCommerceData:data_layer._cprodname,name:'product_names',isArray:true},{eCommerceData:data_layer._cprice,name:'product_unit_price',isArray:true},{eCommerceData:data_layer._cquan,name:'product_quantity',isArray:true}];eCommerceMapping.forEach(function(dataObject){if(!dataObject.isArray){u.data[dataObject.name]=u.data[dataObject.name]||dataObject.eCommerceData||'';}else if(u.data[dataObject.name].length===0&&dataObject.eCommerceData!==undefined&&dataObject.isArray){u.data[dataObject.name]=dataObject.eCommerceData.slice(0);}});if(!u.data.pixelId){utag.DB(u.id+': Tag not fired: Required attribute Pixel Id not populated');return;}
if(u.initialized){u.callback();}else{if(!u.scriptrequested){u.scriptrequested=true;!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[]);}(window,document,'script');utag.ut.loader({'type':'script','src':u.data.base_url,'cb':u.callback,'loc':'script','id':'utag_639','attrs':{}});}}
utag.DB('send:639:COMPLETE');}};utag.o[loader].loader.LOAD(id);}('639','logitech.main'));}catch(error){utag.DB(error);}
