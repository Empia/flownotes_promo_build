window.isRetina=function(){var t="undefined"==typeof exports?window:exports,i="(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";return t.devicePixelRatio>1||!(!t.matchMedia||!t.matchMedia(i).matches)}(),window.startupKit=window.startupKit||{},startupKit.uiKitHeader=startupKit.uiKitHeader||{},startupKit.uiKitHeader._inFixedMode=function(t){if($(t+" .navbar .btn-navbar").unbind().click(function(){$("#header-dockbar").length&&".header-16"!==t&&$(this).closest(".navbar").find(".nav-collapse").toggleClass("has-header-dockbar"),$(t).hasClass("no-shift")||$("html").toggleClass("nav-visible"),$("html.nav-visible").find(".nav-collapse").hide(),$(t).find(".nav-collapse").show(),$(t).find(".navbar").toggleClass("nav-visible")}),$(document).bind("mousedown touchstart",function(i){$(i.target).closest(t+" .nav-collapse,"+t+" .navbar .btn-navbar").length||($(t).find(".navbar").removeClass("nav-visible"),$("html").removeClass("nav-visible"))}),$(t+" .navbar").hasClass("navbar-fixed-top")){var i=$(t+"-sub"),e=i.outerHeight()-70;if($(t).outerHeight()>0)var n=$(t).css("background-color");else if($(t+"-sub").length>0)var n=$(t+"-sub").css("background-color");else var n="#fff";var o=$('<div class="'+t.slice(1)+'-startup-antiflicker" style="position: fixed; z-index: 25; left: 0; top: 0; width: 100%; height: 70px; background: '+n+';" />');i.before(o);var a=$("<div />");a.hide().height(i.outerHeight()),i.after(a);var r=$(".background, .caption, .controls > *",i),s=$(t);r.each(function(){$(this).data("origOpacity",$(this).css("opacity"))});var c=i.outerHeight()-120,u=e;$(window).scroll(function(){var n=(e-$(window).scrollTop())/e;n=Math.max(0,n),r.each(function(){$(this).css("opacity",$(this).data("origOpacity")*n)}),o.css("background-color",$(".pt-page-current",i).css("background-color")),$(window).scrollTop()>e?i.hasClass("fixed")||(i.addClass("fixed").css({position:"fixed",top:-e}),a.show()):i.hasClass("fixed")&&(i.removeClass("fixed").css({position:"",top:""}),a.hide());var d=-(c-$(window).scrollTop())/(u-c);d=1-Math.min(1,Math.max(0,d)),$(window).resize(function(){h()});var h=function(){$(".navbar",s).css($(window).width()<767?{top:-6+26*d}:$(window).width()<480?{top:-6+26*d}:{top:-6+51*d})};h(),$(".navbar .brand",s).css({"font-size":18+7*d,"padding-top":30+-7*d}),$(".navbar .brand img",s).css({width:25+25*d,height:25+25*d,"margin-top":-1+-9*d}),$(".navbar .btn-navbar",s).css({"margin-top":30+-2*d}),$(t+".navbar .nav > li > a",s).css($(window).width()>979?{"font-size":12+2*d}:{"font-size":""})})}},startupKit.uiKitHeader.header1=function(){var t=PageTransitions();t.init("#pt-main"),$("#pt-main .control-prev").on("click",function(){return t.gotoPage(5,"prev"),!1}),$("#pt-main .control-next").on("click",function(){return t.gotoPage(6,"next"),!1}),startupKit.uiKitHeader._inFixedMode(".header-1")},startupKit.uiKitHeader.header2=function(){startupKit.uiKitHeader._inFixedMode(".header-2")},startupKit.uiKitHeader.header3=function(){startupKit.uiKitHeader._inFixedMode(".header-3")},startupKit.uiKitHeader.header4=function(){},startupKit.uiKitHeader.header5=function(){startupKit.uiKitHeader._inFixedMode(".header-5"),$(window).resize(function(){var t=0;$(".header-5-sub .pt-page").css("height","auto").each(function(){var i=$(this).outerHeight();i>t&&(t=i)}).css("height",t+"px"),$(".header-5-sub .page-transitions").css("height",t+"px")});var t=PageTransitions();t.init("#h-5-pt-1"),$("#h-5-pt-1 .pt-control-prev").on("click",function(){return t.gotoPage(5,"prev"),!1}),$("#h-5-pt-1 .pt-control-next").on("click",function(){return t.gotoPage(6,"next"),!1});var i=$(".header-5 .navbar");$(".search",i).click(function(){return i.hasClass("search-mode")||(i.addClass("search-mode"),setTimeout(function(){$('header .navbar .navbar-search input[type="text"]').focus()},1e3)),!1}),$(".close-search",i).click(function(){return i.removeClass("search-mode"),!1})},startupKit.uiKitHeader.header6=function(){startupKit.uiKitHeader._inFixedMode(".header-6")},startupKit.uiKitHeader.header7=function(){startupKit.uiKitHeader._inFixedMode(".header-7"),$(window).resize(function(){var t=0;$(".header-7-sub section").css("height",$(this).height()+"px").each(function(){var i=$(this).outerHeight();i>t&&(t=i)}).css("height",t+"px"),$(".header-7-sub .page-transitions").css("height",t+"px");var i=$(".header-7-sub .pt-controls").height();$(".header-7-sub .pt-controls").css("margin-top",-1*t/2-i+"px"),$(".header-7-sub .pt-controls").css("padding-bottom",t/2-i+"px")});var t=PageTransitions();t.init("#h-7-pt-main"),$(".header-7-sub .pt-controls .pt-indicators > *").on("click",function(){if($(this).hasClass("active"))return!1;var i=$(this).parent().children(".active").index(),e=$(this).index();$(".header-7-sub").css("background-color",$("#h-7-pt-main").children(".pt-page").eq(e).find("section").css("background-color"));var n=5;return e>i&&(n=6),t.gotoPage(n,e),$(this).addClass("active").parent().children().not(this).removeClass("active"),!1})},startupKit.uiKitHeader.header8=function(){startupKit.uiKitHeader._inFixedMode(".header-8")},startupKit.uiKitHeader.header9=function(){startupKit.uiKitHeader._inFixedMode(".header-9"),$(window).resize(function(){var t=0;$("body > section:not(.header-9-sub)").each(function(){t+=$(this).outerHeight()}),$(".sidebar-content").css("height",t+"px")})},startupKit.uiKitHeader.header10=function(){startupKit.uiKitHeader._inFixedMode(".header-10"),$(".header-10 .navbar").hasClass("navbar-fixed-top")&&$(".header-10").css("position","fixed"),$(".header-10-sub .control-btn").on("click",function(){return $.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitHeader.header11=function(){startupKit.uiKitHeader._inFixedMode(".header-11"),$(".header-11 .navbar").hasClass("navbar-fixed-top")&&$(".header-11").css("position","fixed"),$(window).resize(function(){var t=$(".header-11-sub .player");$(window).width()<751?(console.log($(window).width()),$(".header-11-sub .signup-form").before(t),$(".header-11-sub .player-wrapper").hide()):($(".header-11-sub .player-wrapper").append(t),$(".header-11-sub .player-wrapper").show())})},startupKit.uiKitHeader.header12=function(){},startupKit.uiKitHeader.header13=function(){},startupKit.uiKitHeader.header14=function(){},startupKit.uiKitHeader.header15=function(){startupKit.uiKitHeader._inFixedMode(".header-15")},startupKit.uiKitHeader.header16=function(){startupKit.uiKitHeader._inFixedMode(".header-16");var t=PageTransitions();t.init("#h-16-pt-main"),$("#h-16-pt-main .pt-control-prev").on("click",function(){return t.gotoPage(2,"prev"),!1}),$("#h-16-pt-main .pt-control-next").on("click",function(){return t.gotoPage(1,"next"),!1}),$(".header-16-sub .scroll-btn a").on("click",function(t){return t.preventDefault(),$.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitHeader.header17=function(){startupKit.uiKitHeader._inFixedMode(".header-17");var t=PageTransitions();t.init("#h-17-pt-1"),$(".pt-controls .pt-indicators > *").on("click",function(){if($(this).hasClass("active"))return!1;var i=$(this).parent().children(".active").index(),e=$(this).index(),n=44;return e>i&&(n=45),t.gotoPage(n,e),$(this).addClass("active").parent().children().not(this).removeClass("active"),!1}),$(window).resize(function(){$(".header-17-sub .page-transitions").each(function(){var t=0;$(".pt-page",this).css("height","auto").each(function(){var i=$(this).outerHeight();i>t&&(t=i)}).css("height",t+"px"),$(this).css("height",t+"px")})})},startupKit.uiKitHeader.header18=function(){$(window).resize(function(){maxH=$(window).height(),$(".header-18 .page-transitions").css("height",maxH+"px")});var t=PageTransitions();t.init("#h-18-pt-main"),$(".header-18 .pt-control-prev").on("click",function(){return t.gotoPage(5,"prev"),!1}),$(".header-18 .pt-control-next").on("click",function(){return t.gotoPage(6,"next"),!1})},startupKit.uiKitHeader.header19=function(){startupKit.uiKitHeader._inFixedMode(".header-19")},startupKit.uiKitHeader.header20=function(){startupKit.uiKitHeader._inFixedMode(".header-20")},startupKit.uiKitHeader.header21=function(){startupKit.uiKitHeader._inFixedMode(".header-21"),maxH=$(window).height(),0!=$(".navbar-fixed-top").length&&(maxH-=$(".navbar-fixed-top").outerHeight()),0!=$(".header-21").length&&(maxH-=$(".header-21").outerHeight()),3>maxH/90&&$(".header-21-sub .control-btn").css("bottom",0),$(".header-21-sub").height(maxH),$(".header-21-sub .control-btn").on("click",function(){return $.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitHeader.header22=function(){startupKit.uiKitHeader._inFixedMode(".header-22")},startupKit.uiKitHeader.header23=function(){startupKit.uiKitHeader._inFixedMode(".header-23")},startupKit.uiKitContent=startupKit.uiKitContent||{},startupKit.uiKitContent.content1=function(){},startupKit.uiKitContent.content2=function(){},startupKit.uiKitContent.content3=function(){},startupKit.uiKitContent.content4=function(){},startupKit.uiKitContent.content5=function(){},startupKit.uiKitContent.content6=function(){},startupKit.uiKitContent.content7=function(){!function(t){0!=t.length&&($("img:first-child",t).css("left","-29.7%"),$(window).resize(function(){t.hasClass("ani-processed")||t.data("scrollPos",t.offset().top-$(window).height()+t.outerHeight())}).scroll(function(){t.hasClass("ani-processed")||$(window).scrollTop()>=t.data("scrollPos")&&(t.addClass("ani-processed"),$("img:first-child",t).animate({left:0},500))}))}($(".screen"))},startupKit.uiKitContent.content8=function(){},startupKit.uiKitContent.content9=function(){},startupKit.uiKitContent.content10=function(){},startupKit.uiKitContent.content11=function(){},startupKit.uiKitContent.content12=function(){},startupKit.uiKitContent.content13=function(){},startupKit.uiKitContent.content14=function(){},startupKit.uiKitContent.content15=function(){},startupKit.uiKitContent.content16=function(){$(".content-16 .control-btn").on("click",function(){return $.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitContent.content17=function(){$(window).resize(function(){$("#c-17_myCarousel").each(function(){var t=0;$(".item",this).each(function(){var i=$(this).outerHeight();i>t&&(t=i)}),$("#c-17_myCarousel .carousel-inner",this).css("height",t+"px")})}),$("#c-17_myCarousel").carousel({interval:4e3})},startupKit.uiKitContent.content18=function(){$(window).resize(function(){$("#c-18_myCarousel").each(function(){var t=0;$(".item",this).each(function(){var i=$(this).outerHeight();i>t&&(t=i)}),$(".carousel-inner",this).css("height",t+"px")})}),$("#c-18_myCarousel").bind("slid",function(){$(".carousel-control",this).removeClass("disabled"),0==$(".item.active",this).index()?$(".carousel-control.left",this).addClass("disabled"):$(".item.active",this).index()==$(".item",this).length-1&&$(".carousel-control.right",this).addClass("disabled")})},startupKit.uiKitContent.content19=function(){},startupKit.uiKitContent.content20=function(){},startupKit.uiKitContent.content21=function(){$(window).resize(function(){$(".content-21 .features").each(function(){var t=0;$(".features-body",this).css("height","auto").each(function(){var i=$(this).outerHeight();i>t&&(t=i)}).css("height",t+"px"),$(".features-bodies",this).css("height",t+"px")})}),$(".content-21 .features .features-header .box").click(function(){return $(this).addClass("active").parent().children().not(this).removeClass("active"),$(this).closest(".features").find(".features-body").removeClass("active").eq($(this).index()).addClass("active"),!1})},startupKit.uiKitContent.content22=function(){!function(t){isRetina&&$(".img img",t).each(function(){$(this).attr("src",$(this).attr("src").replace(/.png/i,"@2x.png"))}),$(window).resize(function(){t.hasClass("ani-processed")||t.data("scrollPos",t.offset().top-$(window).height()+t.outerHeight()-parseInt(t.css("padding-bottom"),10))}).scroll(function(){t.hasClass("ani-processed")||$(window).scrollTop()>=t.data("scrollPos")&&t.addClass("ani-processed")})}($(".content-22"))},startupKit.uiKitContent.content23=function(){$(".content-23 .control-btn").on("click",function(){return $.scrollTo($(this).closest("section").next(),{axis:"y",duration:500}),!1})},startupKit.uiKitContent.content24=function(){$(window).resize(function(){$(".content-24 .features").each(function(){var t=0;$(".features-body",this).css("height","auto").each(function(){var i=$(this).outerHeight();i>t&&(t=i)}).css("height",t+"px"),$(".features-bodies",this).css("height",t+"px")})}),$(".content-24 .features .features-header .box").click(function(){return $(this).addClass("active").parent().children().not(this).removeClass("active"),$(this).closest(".features").find(".features-body").removeClass("active").eq($(this).index()).addClass("active"),!1})},startupKit.uiKitContent.content25=function(){(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.mobile)&&($(".svg").remove(),$(".nosvg").attr("style","display:block;")),function(t){t.css("opacity",0),$svg=$("#spaceship",t),$("#rocket-raw",$svg).attr("transform","translate(-100,100)"),$("#rocketmask1",$svg).attr("transform","translate(100,-100)"),$(window).resize(function(){t.hasClass("ani-processed")||t.data("scrollPos",t.offset().top-$(window).height()+t.outerHeight());var i=$(".content-25 .svg"),e=$(".content-25 .nosvg");$(window).width()<751?($(".content-25 .container h3:first-child").after(i),$(".content-25 .container h3:first-child").after(e),$(".content-25 .span6:nth-child(2)").hide()):($(".content-25 .span6:nth-child(2)").show(),$(".content-25 .span6:nth-child(2)").append(i),$(".content-25 .span6:nth-child(2)").append(e))}).scroll(function(){t.hasClass("ani-processed")||$(window).scrollTop()>=t.data("scrollPos")&&(t.addClass("ani-processed"),t.animate({opacity:1},600),$("#rocket-raw, #rocketmask1",$svg).clearQueue().stop().animate({svgTransform:"translate(0,0)"},{duration:800,easing:"easeInOutQuad"}))})}($(".content-25 .span6 + .span6"))},startupKit.uiKitContent.content26=function(){},startupKit.uiKitContent.content27=function(){(!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.mobile)&&($(".svg").remove(),$(".nosvg").attr("style","display:block;")),$(window).resize(function(){var t=$(".content-27 .svg"),i=$(".content-27 .nosvg");$(window).width()<751?($(".content-27 .container h3:first-child").after(t),$(".content-27 .container h3:first-child").after(i),$(".content-27 .span4:first-child").hide()):($(".content-27 .span4:first-child").show(),$(".content-27 .span4:first-child").append(t),$(".content-27 .span4:first-child").append(i))})},startupKit.uiKitContent.content28=function(){},startupKit.uiKitContent.content29=function(){},startupKit.uiKitContent.content30=function(){$(window).resize(function(){for(var t=$(".content-30 .span3"),i=0;i<=t.length;i++){var e=$(t[i]).find(".description-top");$(window).width()<=480?$(t[i]).find(".img").after(e):$(t[i]).find(".img").before(e)}})},startupKit.uiKitContent.content31=function(){!function(t){$(window).scroll(function(){$(window).width()>480&&$(".row",t).each(function(){$(window).scrollTop()>=$(this).offset().top-$(window).height()+$(window).height()/2+100?$(this).addClass("active"):$(this).removeClass("active")})}),$(window).resize(function(){$(".page-transitions",t).each(function(){var t=0;$(".pt-page",this).css("height","auto").each(function(){var i=$(this).outerHeight();i>t&&(t=i)}).css("height",t+"px"),$(this).css("height",t+"px")})}),$(".page-transitions",t).each(function(){var t=PageTransitions();t.init(this),$(".pt-control-prev",this).on("click",function(){return t.gotoPage(68,"prev"),!1}),$(".pt-control-next",this).on("click",function(){return t.gotoPage(68,"next"),!1})})}($(".content-31"))},startupKit.uiKitContent.content32=function(){},startupKit.uiKitContent.content33=function(){},startupKit.uiKitContent.content34=function(){$(window).resize(function(){var t=0;$(".content-34 section").each(function(){var i=$(this).outerHeight();i>t&&(t=i)}),$(".content-34 .page-transitions").css("height",t+"px");var i=$(".content-34 .pt-controls").height();$(".content-34 .pt-controls").css("margin-top",-1*i/2+"px")});var t=PageTransitions();t.init("#content-34-pt-main"),$(".content-34 .pt-controls .pt-indicators > *").on("click",function(){if($(this).hasClass("active"))return!1;var i=$(this).parent().children(".active").index(),e=$(this).index(),n=5;return e>i&&(n=6),t.gotoPage(n,e),$(this).addClass("active").parent().children().not(this).removeClass("active"),!1})},startupKit.uiKitContent.content35=function(){},startupKit.uiKitContent.content36=function(){},startupKit.uiKitBlog=startupKit.uiKitBlog||{},startupKit.uiKitBlog.blog1=function(){$(window).resize(function(){$(".page-transitions").each(function(){var t=0;$(".pt-page",this).css("height","auto").each(function(){var i=$(this).outerHeight();i>t&&(t=i)}).css("height",t+"px"),$(this).css("height",t+"px")})});var t=PageTransitions();t.init($("#b1-pt-1")),$("#b1-pt-1 .pt-control-prev").on("click",function(){return t.gotoPage(28,"prev"),!1}),$("#b1-pt-1 .pt-control-next").on("click",function(){return t.gotoPage(29,"next"),!1})},startupKit.uiKitBlog.blog2=function(){},startupKit.uiKitBlog.blog3=function(){},startupKit.uiKitBlog.blog4=function(){},startupKit.uiKitBlog.blog5=function(){var t=PageTransitions();t.init($("#b5-pt-2")),$("#b5-pt-2 .pt-control-prev").on("click",function(){return t.gotoPage(28,"prev"),!1}),$("#b5-pt-2 .pt-control-next").on("click",function(){return t.gotoPage(29,"next"),!1})},startupKit.uiKitCrew=startupKit.uiKitCrew||function(){$(".member .photo img").each(function(){$(this).hide().parent().css("background-image",'url("'+this.src+'")')})},startupKit.uiKitProjects=startupKit.uiKitProjects||{},startupKit.uiKitProjects.project1=function(){},startupKit.uiKitProjects.project2=function(){},startupKit.uiKitProjects.project3=function(){},startupKit.uiKitProjects.project4=function(){$(".overlay").on("hover",function(){$(this).closest(".project").find(".name").toggleClass("hover")})},startupKit.uiKitFooter=startupKit.uiKitFooter||{},startupKit.uiKitFooter.footer1=function(){},startupKit.uiKitFooter.footer2=function(){},startupKit.uiKitFooter.footer3=function(){},startupKit.uiKitFooter.footer4=function(){},startupKit.uiKitFooter.footer5=function(){},startupKit.uiKitFooter.footer6=function(){},startupKit.uiKitFooter.footer7=function(){},startupKit.uiKitFooter.footer8=function(){},startupKit.uiKitFooter.footer9=function(){},startupKit.uiKitFooter.footer10=function(){},startupKit.uiKitFooter.footer11=function(){},startupKit.uiKitFooter.footer12=function(){},startupKit.uiKitFooter.footer13=function(){},startupKit.uiKitFooter.footer14=function(){},startupKit.uiKitFooter.footer15=function(){},function(t){t(function(){for(header in startupKit.uiKitHeader)headerNumber=header.slice(6),0!=jQuery(".header-"+headerNumber).length&&startupKit.uiKitHeader[header]();for(content in startupKit.uiKitContent)contentNumber=content.slice(7),0!=jQuery(".content-"+contentNumber).length&&startupKit.uiKitContent[content]();for(blog in startupKit.uiKitBlog)blogNumber=blog.slice(4),0!=jQuery(".blog-"+blogNumber).length&&startupKit.uiKitBlog[blog]();for(project in startupKit.uiKitProjects)projectNumber=project.slice(7),0!=jQuery(".projects-"+projectNumber).length&&startupKit.uiKitProjects[project]();startupKit.uiKitCrew();for(footer in startupKit.uiKitFooter)footerNumber=footer.slice(6),0!=jQuery(".footer-"+footerNumber).length&&startupKit.uiKitFooter[footer]();t(window).load(function(){t("html").addClass("loaded"),t(window).resize()}),/msie/i.test(navigator.userAgent)&&t("img").each(function(){t(this).css({width:t(this).attr("width")+"px",height:"auto"})}),t(".input-prepend, .input-append").on("focus","input",function(){t(this).closest(".control-group, form").addClass("focus")}).on("blur","input",function(){t(this).closest(".control-group, form").removeClass("focus")}),t(".project .photo img").each(function(){t(this).hide().parent().css("background-image",'url("'+this.src+'")')});var i=t(".tiles");t(window).resize(function(){t(this).width()<768?i.hasClass("phone-mode")||(t('td[class*="tile-"]',i).each(function(){t("<div />").addClass(this.className).append(t(this).contents()).appendTo(i)}),i.addClass("phone-mode")):i.hasClass("phone-mode")&&(t('> [class*="tile-"]',i).each(function(e){t('td[class*="tile-"]',i).eq(e).append(t(this).contents()),t(this).remove()}),i.removeClass("phone-mode"))}),i.on("mouseenter",'[class*="tile-"]',function(){t(this).removeClass("faded").closest(".tiles").find('[class*="tile-"]').not(this).addClass("faded")}).on("mouseleave",'[class*="tile-"]',function(){t(this).closest(".tiles").find('[class*="tile-"]').removeClass("faded")})})}(jQuery);