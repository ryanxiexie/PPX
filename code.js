$(document).ready(function(){var patt1=/^[a-z0-9_-]{11}$/i;var
patt2=/https?:\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?/i;$(".form-div").on("mouseover",".list-tabs",function(e){e.preventDefault();$(".tab-pane").removeClass("active");tabId=$(this).attr("href");$(this).tab("show");$(tabId).addClass("active")});$(document).on("ajaxStart
ajaxStop",function(){$("#loading").toggle()});$("#url,#url1").on("paste",function(e){setTimeout(function(){let
url;let click_target;if(e.target.id=="url"){url=$("#url");click_target="#search"}else{url=$("#url1");click_target="#search1"}if(url.val().replace(/\s+/g,'').match(patt1)||url.val().replace(/\s+/g,'').match(patt2)){if(url.val().replace(/\s+/g,'').match(patt2)){$("#url,#url1").val(url.val().replace(/\s+/g,'').match(patt2)[0])}}else{return}$(click_target).click()},300)});$("#fodownload").on("click",function(e){var
type=$("#promotype").attr('type');$.ajax({type:"GET",global:false,url:"/promotion?type="+type,success:function(data){}})});var
lock=true;$("#search,#search1").on("click",function(e){if(!lock){return}lock=false;var
url;if(e.target.id=="search"){url=$("#url")}else{url=$("#url1")}var
listVideo=$(".listVideo");if(listVideo.length>0){listVideo.remove()}if(url.val().replace(/\s+/g,'')==""){return}if(url.val().replace(/\s+/g,'').match(patt1)||url.val().replace(/\s+/g,'').match(patt2)){if(url.val().replace(/\s+/g,'').match(patt2)){$("#url,#url1").val(url.val().replace(/\s+/g,'').match(patt2)[0])}}else{let
lang=navigator.language;let
ale_mess;if(lang.indexOf('zh')!==-1){ale_mess='æ‚¨è¾“å…¥çš„è§†é¢‘é“¾æŽ¥æœ‰è¯¯ï¼Œè¯·é‡æ–°è¾“å…¥ï¼'}else{ale_mess='Video
link is wrong, please re-enter!'}alert(ale_mess);lock=true;return}var
errormes=$(".errormes");var
fodownload=$("#fodownload");if(errormes.css("display")=="block"){errormes.css("display","none")}if(fodownload.css("margin-top")=="0px"){fodownload.css("margin-top","55px")}let
url_offset=$('#url').offset()['top'];$('html,body').animate({scrollTop:url_offset},500);var
lang=$("#lang").attr('lang');var mess1;var mess2;var mess3;var mess4;var
mess5;var mess6;var mess7;var mess8;var mess9;if(lang=='en'){mess1='Network
Error, Please try again later.';mess2='Link Error, Please make sure the link is
correct and try again.';mess3='Video id Error, Please check the id and try
again.';mess4='Incomplete youtube id, Please make sure the id is correct and try
again.';mess5='Sorry,Paid videos cannot be downloaded.';mess6='Link Error or
video is private, Please check the link and try again.';mess7='This video was
not found, please try another video link.';mess8='Sorry, this video link cannot
be resolved, please try another link.';mess9='Please refresh the page and try
again.'}else if(lang=='de'){mess1='Netzwerkfehler. Bitte versuchen Sie es
spÃ¤ter erneut.';mess2='Link Error, Bitte stellen Sie sicher, dass der Link
korrekt ist und versuchen Sie es erneut.';mess3='Video-ID-Fehler. Bitte
Ã¼berprÃ¼fen Sie die ID und versuchen Sie es erneut.';mess4='UnvollstÃ¤ndige
YouTube-ID. Bitte stellen Sie sicher, dass die ID korrekt ist, und versuchen Sie
es erneut.';mess5='Bezahlte Videos kÃ¶nnen leider nicht heruntergeladen
werden.';mess6='Linkfehler oder Video ist privat. Bitte Ã¼berprÃ¼fen Sie den
Link und versuchen Sie es erneut.';mess7='Dieses Video wurde nicht gefunden.
Bitte versuchen Sie es mit einem anderen Videolink.';mess8='Dieser Videolink
kann leider nicht aufgelÃ¶st werden. Bitte versuchen Sie es mit einem anderen
Link.';mess9='Bitte aktualisieren Sie die Seite und versuchen Sie es
erneut.'}else if(lang=='fr'){mess1='Erreur rÃ©seau, veuillez rÃ©essayer plus
tard.';mess2='Erreur de lien, assurez-vous que le lien est correct et essayez Ã
nouveau.';mess3='Erreur de l\'identifiant vidÃ©o, veuillez vÃ©rifier
l\'identifiant et rÃ©essayer.';mess4='Identifiant YouTube incomplet,
assurez-vous que cet identifiant est correct et rÃ©essayez.';mess5='DÃ©solÃ©,
les vidÃ©os payÃ©es ne peuvent pas Ãªtre tÃ©lÃ©chargÃ©es.';mess6='Erreur de lien
ou vidÃ©o privÃ©e, veuillez vÃ©rifier le lien et rÃ©essayer.';mess7='Cette
vidÃ©o n\'a pas Ã©tÃ© trouvÃ©e. Veuillez essayer un autre lien
vidÃ©o.';mess8='DÃ©solÃ©, ce lien vidÃ©o ne peut pas Ãªtre rÃ©solu, veuillez
essayer un autre lien.';mess9='Veuillez actualiser la page et rÃ©essayer.'}else
if(lang=='es'){mess1='Error de red, intÃ©ntalo de nuevo mÃ¡s
tarde.';mess2='Error de enlace, asegÃºrese de que el enlace sea correcto e
intente nuevamente.';mess3='Video id Error, por favor verifique la id y vuelva a
intentarlo.';mess4='ID de YouTube incompleta, asegÃºrese de que la ID sea
correcta y vuelva a intentarlo.';mess5='Lo sentimos, los videos pagados no se
pueden descargar.';mess6='Error de enlace o el video es privado, compruebe el
enlace y vuelva a intentarlo.';mess7='Este video no se encontrÃ³, por favor
intente con otro enlace de video.';mess8='Lo sentimos, este enlace de video no
se puede resolver, intente con otro enlace.';mess9='Actualice la pÃ¡gina y
vuelva a intentarlo.'}else if(lang=='ru'){mess1='ÐžÑˆÐ¸Ð±ÐºÐ° ÑÐµÑ‚Ð¸,
Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ Ð¿Ð¾Ð·Ð¶Ðµ.';mess2='ÐžÑˆÐ¸Ð±ÐºÐ° ÑÑÑ‹Ð»ÐºÐ¸.
Ð£Ð±ÐµÐ´Ð¸Ñ‚ÐµÑÑŒ, Ñ‡Ñ‚Ð¾ ÑÑÑ‹Ð»ÐºÐ° Ð²ÐµÑ€Ð½Ð°, Ð¸ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ
Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.';mess3='ÐžÑˆÐ¸Ð±ÐºÐ° Ð¸Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸ÐºÐ°Ñ‚Ð¾Ñ€Ð° Ð²Ð¸Ð´ÐµÐ¾.
ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ Ð¸Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸ÐºÐ°Ñ‚Ð¾Ñ€ Ð¸
Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ ÑÐ½Ð¾Ð²Ð°.';mess4='ÐÐµÐ¿Ð¾Ð»Ð½Ñ‹Ð¹
Ð¸Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸ÐºÐ°Ñ‚Ð¾Ñ€ YouTube, Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, ÑƒÐ±ÐµÐ´Ð¸Ñ‚ÐµÑÑŒ,
Ñ‡Ñ‚Ð¾ Ð¸Ð´ÐµÐ½Ñ‚Ð¸Ñ„Ð¸ÐºÐ°Ñ‚Ð¾Ñ€ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ñ‹Ð¹ Ð¸ Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ
ÑÐ½Ð¾Ð²Ð°.';mess5='Ð˜Ð·Ð²Ð¸Ð½Ð¸Ñ‚Ðµ, Ð¿Ð»Ð°Ñ‚Ð½Ð¾Ðµ Ð²Ð¸Ð´ÐµÐ¾ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚
Ð±Ñ‹Ñ‚ÑŒ Ð·Ð°Ð³Ñ€ÑƒÐ¶ÐµÐ½Ð¾.';mess6='ÐžÑˆÐ¸Ð±ÐºÐ° ÑÑÑ‹Ð»ÐºÐ¸ Ð¸Ð»Ð¸ Ð²Ð¸Ð´ÐµÐ¾
Ð·Ð°ÐºÑ€Ñ‹Ñ‚Ð¾. ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ ÑÑÑ‹Ð»ÐºÑƒ Ð¸
Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.';mess7='Ð­Ñ‚Ð¾ Ð²Ð¸Ð´ÐµÐ¾ Ð½Ðµ Ð±Ñ‹Ð»Ð¾
Ð½Ð°Ð¹Ð´ÐµÐ½Ð¾, Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ Ð´Ñ€ÑƒÐ³ÑƒÑŽ
ÑÑÑ‹Ð»ÐºÑƒ Ð½Ð° Ð²Ð¸Ð´ÐµÐ¾.';mess8='Ðš ÑÐ¾Ð¶Ð°Ð»ÐµÐ½Ð¸ÑŽ, ÑÑ‚Ð° ÑÑÑ‹Ð»ÐºÐ° Ð½Ð°
Ð²Ð¸Ð´ÐµÐ¾ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ñ€Ð°Ð·Ñ€ÐµÑˆÐµÐ½Ð°, Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹Ñ‚Ðµ
Ð´Ñ€ÑƒÐ³ÑƒÑŽ ÑÑÑ‹Ð»ÐºÑƒ.';mess9='ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¾Ð±Ð½Ð¾Ð²Ð¸Ñ‚Ðµ
ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñƒ Ð¸ Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€Ð¸Ñ‚Ðµ Ð¿Ð¾Ð¿Ñ‹Ñ‚ÐºÑƒ.'}else
if(lang=='jp'){mess1='ãƒãƒƒãƒˆãƒ¯ãƒ¼ã‚¯ã‚¨ãƒ©ãƒ¼ã§ã™ã€‚ã—ã°ã‚‰ãã—ã¦ã‹ã‚‰ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ãã
ã•ã„ã€‚';mess2='ãƒªãƒ³ã‚¯ã‚¨ãƒ©ãƒ¼ã€ãƒªãƒ³ã‚¯ãŒæ­£ã—ã„ã“ã¨ã‚’ç¢ºèªã—ã¦ã‚‚ã†ä¸€åº¦ã‚„ã‚Šç›´ã—ã¦ãã
ã•ã„ã€‚';mess3='ãƒ“ãƒ‡ã‚ªIDã‚¨ãƒ©ãƒ¼ã€IDã‚’ç¢ºèªã—ã¦ã‚‚ã†ä¸€åº¦ã‚„ã‚Šç›´ã—ã¦ãã
ã•ã„ã€‚';mess4='
YouTubeã®IDãŒä¸å®Œå…¨ã§ã™ã€‚IDãŒæ­£ã—ã„ã“ã¨ã‚’ç¢ºèªã—ã¦ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ãã
ã•ã„ã€‚';mess5='ç”³ã—è¨³ã‚ã‚Šã¾ã›ã‚“ã€æœ‰æ–™å‹•ç”»ã¯ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰ã§ãã¾ã›ã‚“ã€‚';mess6='ãƒªãƒ³ã‚¯ã‚¨ãƒ©ãƒ¼ã¾ãŸã¯ãƒ“ãƒ‡ã‚ªã¯éžå…¬é–‹ã§ã™ã€‚ãƒªãƒ³ã‚¯ã‚’ç¢ºèªã—ã¦ã‚‚ã†ä¸€åº¦ã‚„ã‚Šç›´ã—ã¦ãã
ã•ã„ã€‚';mess7='ã“ã®ãƒ“ãƒ‡ã‚ªã¯è¦‹ã¤ã‹ã‚Šã¾ã›ã‚“ã§ã—ãŸã€‚åˆ¥ã®ãƒ“ãƒ‡ã‚ªãƒªãƒ³ã‚¯ã‚’è©¦ã—ã¦ãã
ã•ã„ã€‚';mess8='ã“ã®ãƒ“ãƒ‡ã‚ªãƒªãƒ³ã‚¯ã¯è§£æ±ºã§ãã¾ã›ã‚“ã€‚åˆ¥ã®ãƒªãƒ³ã‚¯ã‚’ãŠè©¦ã—ãã
ã•ã„ã€‚';mess9='ãƒšãƒ¼ã‚¸ã‚’æ›´æ–°ã—ã¦ã€ã‚‚ã†ä¸€åº¦ãŠè©¦ã—ãã ã•ã„ã€‚'}else
if(lang=='pt'){mess1='Erro de rede, por favor, tente novamente mais
tarde.';mess2='Link Error, Por favor, verifique se o link estÃ¡ correto e tente
novamente.';mess3='Video id Error, Por favor, verifique o id e tente
novamente.';mess4='ID do youtube incompleto, por favor, verifique se o id estÃ¡
correto e tente novamente.';mess5='Desculpe, vÃ­deos pagos nÃ£o podem ser
baixados.';mess6='Link Erro ou vÃ­deo Ã© privado, por favor, verifique o link e
tente novamente.';mess7='Este vÃ­deo nÃ£o foi encontrado, por favor tente outro
link de vÃ­deo.';mess8='Desculpe, este link do vÃ­deo nÃ£o pode ser resolvido.
Tente outro link.';mess9='Atualize a pÃ¡gina e tente novamente.'}else
if(lang=='it'){mess1='Errore di rete, riprova piÃ¹ tardi.';mess2='Errore
collegamento, assicurati che il collegamento sia corretto e
riprova.';mess3='Errore ID video, controlla l\'id e riprova.';mess4='ID YouTube
incompleto, assicurati che l\'id sia corretto e riprova.';mess5='Siamo
spiacenti, non Ã¨ possibile scaricare video a pagamento.';mess6='Errore
collegamento o video privato, controlla il collegamento e
riprova.';mess7='Questo video non Ã¨ stato trovato, prova con un altro
collegamento video.';mess8='Spiacenti, questo collegamento video non puÃ² essere
risolto, prova un altro collegamento.';mess9='Perfavore ricarica la pagina e
riprova.'}else if(lang=='kr'){mess1='ë„¤íŠ¸ì›Œí¬ ì˜¤ë¥˜ìž…ë‹ˆë‹¤. ë‚˜ì¤‘ì—
ë‹¤ì‹œ ì‹œë„í•˜ì‹­ì‹œì˜¤.';mess2='ë§í¬ ì˜¤ë¥˜ìž…ë‹ˆë‹¤, ë§í¬ê°€ ë§žëŠ”ì§€ í™•ì¸
í•˜ì‹œê³ ë‹¤ì‹œ ì‹œë„í•˜ì‹­ì‹œì˜¤.';mess3='ë™ì˜ìƒ ID ì˜¤ë¥˜ìž…ë‹ˆë‹¤. IDë¥¼
í™•ì¸í•˜ê³ ë‹¤ì‹œ ì‹œë„í•˜ì‹­ì‹œì˜¤.';mess4='ìœ íŠœë¸Œ IDê°€ ë¶ˆì™„ì „í•˜ë‹¤.
ì´ë“œê°€ ì •í™•í•œì§€ í™•ì¸í•˜ê³ ë‹¤ì‹œ
ì‹œë„í•´ì£¼ì„¸ìš”.';mess5='ì£„ì†¡í•©ë‹ˆë‹¤, ìœ ë£Œ ë¹„ë””ì˜¤ë¥¼ ë‹¤ìš´ë¡œë“œ í•
ìˆ˜ ì—†ìŠµë‹ˆë‹¤.';mess6='ë§í¬ ì˜¤ë¥˜ ë˜ëŠ” ë¹„ë””ì˜¤ê°€ ë¹„ê³µê°œìž…ë‹ˆë‹¤.
ë§í¬ë¥¼ í™•ì¸í•œ í›„ ë‹¤ì‹œ ì‹œë„í•˜ì‹­ì‹œì˜¤.';mess7='ì´ ë¹„ë””ì˜¤ë¥¼ ì°¾ì„ ìˆ˜
ì—†ìŠµë‹ˆë‹¤. ë‹¤ë¥¸ ë¹„ë””ì˜¤ ë§í¬ë¥¼
ì‹œë„í•˜ì‹­ì‹œì˜¤.';mess8='ì£„ì†¡í•©ë‹ˆë‹¤.ì´ ë¹„ë””ì˜¤ ë§í¬ë¥¼ í•´ê²°í• ìˆ˜
ì—†ìŠµë‹ˆë‹¤. ë‹¤ë¥¸ ë§í¬ë¥¼ ì‹œë„í•˜ì‹­ì‹œì˜¤.';mess9='íŽ˜ì´ì§€ë¥¼ ìƒˆë¡œê³
ì¹¨í•˜ê³ ë‹¤ì‹œ ì‹œë„í•˜ì‹­ì‹œì˜¤.'}else if(lang=='sa'){mess1='Ø®Ø·Ø£ ÙÙŠ
Ø§Ù„Ø´Ø¨ÙƒØ© ØŒ ÙŠØ±Ø¬Ù‰ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰
Ù„Ø§Ø­Ù‚Ù‹Ø§.';mess2='Ø®Ø·Ø£ ÙÙŠ Ø§Ù„Ø±Ø§Ø¨Ø· ØŒ ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªØ£ÙƒØ¯ Ù…Ù† Ø£Ù†
Ø§Ù„Ø±Ø§Ø¨Ø· ØµØ­ÙŠØ­ ÙˆØ§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.';mess3='Ø®Ø·Ø£ Ù…Ø¹Ø±Ù
Ø§Ù„ÙÙŠØ¯ÙŠÙˆ ØŒ ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ù…Ø¹Ø±Ù ÙˆØ§Ù„Ù…Ø­Ø§ÙˆÙ„Ø©
Ù…Ø±Ø© Ø£Ø®Ø±Ù‰.';mess4='Ù…Ø¹Ø±Ù youtube ØºÙŠØ± Ù…ÙƒØªÙ…Ù„ ØŒ ÙŠØ±Ø¬Ù‰
Ø§Ù„ØªØ£ÙƒØ¯ Ù…Ù† ØµØ­Ø© Ø§Ù„Ù…Ø¹Ø±Ù ÙˆØ§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø©
Ø£Ø®Ø±Ù‰.';mess5='Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§ ÙŠÙ…ÙƒÙ† ØªÙ†Ø²ÙŠÙ„ Ù…Ù‚Ø§Ø·Ø¹
Ø§Ù„ÙÙŠØ¯ÙŠÙˆ Ø§Ù„Ù…Ø¯ÙÙˆØ¹Ø©.';mess6='Ø®Ø·Ø£ Ø£Ùˆ Ù…Ù‚Ø·Ø¹ ÙÙŠØ¯ÙŠÙˆ Ø®Ø§Øµ ØŒ
ÙŠØ±Ø¬Ù‰ Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø§Ù„Ø±Ø§Ø¨Ø· ÙˆØ§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ø©
Ø£Ø®Ø±Ù‰.';mess7='Ù„Ù… ÙŠØªÙ… Ø§Ù„Ø¹Ø«ÙˆØ± Ø¹Ù„Ù‰ Ù‡Ø°Ø§ Ø§Ù„ÙÙŠØ¯ÙŠÙˆ ØŒ
ÙŠØ±Ø¬Ù‰ ØªØ¬Ø±Ø¨Ø© Ø±Ø§Ø¨Ø· ÙÙŠØ¯ÙŠÙˆ Ø¢Ø®Ø±.';mess8='Ø¹Ø°Ø±Ù‹Ø§ ØŒ Ù„Ø§
ÙŠÙ…ÙƒÙ† Ø­Ù„ Ø±Ø§Ø¨Ø· Ø§Ù„ÙÙŠØ¯ÙŠÙˆ Ù‡Ø°Ø§ ØŒ ÙŠØ±Ø¬Ù‰ ØªØ¬Ø±Ø¨Ø© Ø±Ø§Ø¨Ø·
Ø¢Ø®Ø±.';mess9='ÙŠØ±Ø¬Ù‰ ØªØ­Ø¯ÙŠØ« Ø§Ù„ØµÙØ­Ø© ÙˆØ­Ø§ÙˆÙ„ Ù…Ø±Ø©
Ø£Ø®Ø±Ù‰.'}else if(lang=='hr'){mess1='à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤• à¤¤à¥à¤°à¥à¤Ÿà¤¿,
à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¬à¤¾à¤¦ à¤®à¥‡à¤‚ à¤ªà¥à¤¨à¤ƒ à¤ªà¥à¤°à¤¯à¤¾à¤¸
à¤•à¤°à¥‡à¤‚à¥¤';mess2='à¤²à¤¿à¤‚à¤• à¤¤à¥à¤°à¥à¤Ÿà¤¿, à¤•à¥ƒà¤ªà¤¯à¤¾
à¤¸à¥à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤•à¤°à¥‡à¤‚ à¤•à¤¿ à¤²à¤¿à¤‚à¤• à¤¸à¤¹à¥€ à¤¹à¥ˆ
à¤”à¤° à¤ªà¥à¤¨: à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤•à¤°à¥‡à¤‚à¥¤';mess3='à¤µà¥€à¤¡à¤¿à¤¯à¥‹
à¤†à¤ˆà¤¡à¥€ à¤¤à¥à¤°à¥à¤Ÿà¤¿, à¤•à¥ƒà¤ªà¤¯à¤¾ à¤†à¤ˆà¤¡à¥€ à¤•à¥€ à¤œà¤¾à¤‚à¤š
à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤ªà¥à¤¨: à¤ªà¥à¤°à¤¯à¤¾à¤¸
à¤•à¤°à¥‡à¤‚à¥¤';mess4='à¤…à¤§à¥‚à¤°à¥€ youtube à¤†à¤ˆà¤¡à¥€, à¤•à¥ƒà¤ªà¤¯à¤¾
à¤¸à¥à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤•à¤°à¥‡à¤‚ à¤•à¤¿ à¤†à¤ˆà¤¡à¥€ à¤¸à¤¹à¥€ à¤¹à¥ˆ
à¤”à¤° à¤ªà¥à¤¨: à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤•à¤°à¥‡à¤‚à¥¤';mess5='à¤•à¥à¤·à¤®à¤¾
à¤•à¤°à¥‡à¤‚, à¤ªà¥‡à¤¡ à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤¨à¤¹à¥€à¤‚
à¤•à¤¿à¤ à¤œà¤¾ à¤¸à¤•à¤¤à¥‡à¥¤';mess6='à¤²à¤¿à¤‚à¤• à¤¤à¥à¤°à¥à¤Ÿà¤¿ à¤¯à¤¾
à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤¨à¤¿à¤œà¥€ à¤¹à¥ˆ, à¤•à¥ƒà¤ªà¤¯à¤¾ à¤²à¤¿à¤‚à¤• à¤•à¥€
à¤œà¤¾à¤à¤š à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤ªà¥à¤¨à¤ƒ à¤ªà¥à¤°à¤¯à¤¾à¤¸
à¤•à¤°à¥‡à¤‚à¥¤';mess7='à¤¯à¤¹ à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤¨à¤¹à¥€à¤‚ à¤®à¤¿à¤²à¤¾,
à¤•à¥ƒà¤ªà¤¯à¤¾ à¤…à¤¨à¥à¤¯ à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤²à¤¿à¤‚à¤•
à¤†à¤œà¤¼à¤®à¤¾à¤à¤‚à¥¤';mess8='à¤•à¥à¤·à¤®à¤¾ à¤•à¤°à¥‡à¤‚, à¤‡à¤¸
à¤µà¥€à¤¡à¤¿à¤¯à¥‹ à¤²à¤¿à¤‚à¤• à¤•à¥‹ à¤¹à¤² à¤¨à¤¹à¥€à¤‚ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾
à¤¸à¤•à¤¤à¤¾ à¤¹à¥ˆ, à¤•à¥ƒà¤ªà¤¯à¤¾ à¤…à¤¨à¥à¤¯ à¤²à¤¿à¤‚à¤• à¤•à¤¾
à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤•à¤°à¥‡à¤‚à¥¤';mess9='à¤•à¤ªà¥ƒà¤·à¥à¤ à¤•à¥‹
à¤°à¥€à¤«à¥à¤°à¥‡à¤¶ à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤ªà¥à¤¨: à¤ªà¥à¤°à¤¯à¤¾à¤¸
à¤•à¤°à¥‡à¤‚à¥¤'}else if(lang=='id'){mess1='Kesalahan Jaringan, Silakan coba
lagi nanti.';mess2='Kesalahan Tautan, Pastikan tautannya benar dan coba
lagi.';mess3='Kesalahan id video, Silakan periksa id dan coba
lagi.';mess4='Ketidaklengkapan id youtube, Pastikan idnya benar dan coba
lagi.';mess5='Maaf, Video berbayar tidak dapat diunduh.';mess6='Kesalahan Tautan
atau video bersifat pribadi, Silakan periksa tautan dan coba lagi.';mess7='Video
ini tidak ditemukan, silakan coba tautan video lainnya.';mess8='Maaf, tautan
video ini tidak dapat diselesaikan, silakan coba tautan lain.';mess9='Segarkan
halaman dan coba lagi.'}else if(lang=='tr'){mess1='AÄŸ HatasÄ±, LÃ¼tfen daha
sonra tekrar deneyin.';mess2='BaÄŸlantÄ± HatasÄ±, LÃ¼tfen baÄŸlantÄ±nÄ±n doÄŸru
olduÄŸundan emin olun ve tekrar deneyin.';mess3='Video kimliÄŸi HatasÄ±, LÃ¼tfen
kimliÄŸi kontrol edin ve tekrar deneyin.';mess4='Eksik youtube kimliÄŸi, LÃ¼tfen
kimliÄŸin doÄŸru olduÄŸundan emin olun ve tekrar deneyin.';mess5='ÃœzgÃ¼nÃ¼z,
Ã¼cretli videolar indirilemiyor.';mess6='BaÄŸlantÄ± HatasÄ± veya video Ã¶zel,
LÃ¼tfen baÄŸlantÄ±yÄ± kontrol edin ve tekrar deneyin.';mess7='Bu video
bulunamadÄ±, lÃ¼tfen baÅŸka bir video linki deneyin.';mess8='Maalesef, bu video
baÄŸlantÄ±sÄ± Ã§Ã¶zÃ¼lemiyor, lÃ¼tfen baÅŸka bir baÄŸlantÄ±
deneyin.';mess9='LÃ¼tfen sayfayÄ± yenileyin ve tekrar deneyin.'}else
if(lang=='zh-tw'){mess1='ç¶²çµ¡éŒ¯èª¤ï¼Œè«‹ç¨å¾Œé‡è©¦ï¼ ';mess2='è¦–é
»éˆæŽ¥éŒ¯èª¤,è«‹æª¢æŸ¥è¦–é »éˆæŽ¥æ˜¯å¦æ­£ç¢ºä¸¦é‡è©¦ï¼ ';mess3='è¦–é
»IDéŒ¯èª¤,è«‹æª¢æŸ¥IDä¸¦é‡è©¦ï¼ ';mess4='Youtube
IDä¸å®Œæ•´,è«‹æª¢æŸ¥IDä¸¦é‡è©¦ï¼ ';mess5='æŠ±æ­‰,ä»˜è²»è¦–é »ç„¡æ³•ä¸‹è¼‰ï¼
';mess6='éˆæŽ¥éŒ¯èª¤æˆ–è¦–é
»æ˜¯ç§æœ‰çš„ï¼Œè«‹æª¢æŸ¥éˆæŽ¥ä¸¦é‡è©¦';mess7='æœªæ‰¾åˆ°æ­¤è¦–é
»ï¼Œè«‹å˜—è©¦å…¶å®ƒçš„è¦–é »éˆæŽ¥';mess8='æŠ±æ­‰ï¼Œè©²è¦–é
»éˆæŽ¥ç„¡æ³•è§£æžï¼Œè«‹å˜—è©¦å…¶å®ƒéˆæŽ¥ã€‚';mess9='é
é¢åœç•™æ™‚é–“éŽé•·ï¼Œè«‹åˆ·æ–°ç¶²é å¾Œé‡è©¦ã€‚'}else
if(lang=='zh-cn'){mess1='æœåŠ¡å™¨ç¹å¿™ï¼Œè¯·ç¨åŽé‡è¯•ï¼';mess2='è§†é¢‘é“¾æŽ¥é”™è¯¯,è¯·æ£€æŸ¥è§†é¢‘é“¾æŽ¥æ˜¯å¦æ­£ç¡®å¹¶é‡è¯•ï¼';mess3='è§†é¢‘IDé”™è¯¯,è¯·æ£€æŸ¥IDå¹¶é‡è¯•ï¼';mess4='Youtube
IDä¸å®Œæ•´,è¯·æ£€æŸ¥IDå¹¶é‡è¯•ï¼';mess5='æŠ±æ­‰,ä»˜è´¹è§†é¢‘æ—
æ³•ä¸‹è½½ï¼';mess6='é“¾æŽ¥é”™è¯¯æˆ–è§†é¢‘æ˜¯ç§æœ‰çš„ï¼Œè¯·æ£€æŸ¥é“¾æŽ¥å¹¶é‡è¯•';mess7='æœªæ‰¾åˆ°æ­¤è§†é¢‘ï¼Œè¯·å°è¯•å…¶å®ƒçš„è§†é¢‘é“¾æŽ¥';mess8='æŠ±æ­‰ï¼Œè¯¥è§†é¢‘é“¾æŽ¥æ—
æ³•è§£æžï¼Œè¯·å°è¯•å…¶å®ƒé“¾æŽ¥ã€‚';mess9='é¡µé¢åœç•™æ—¶é—´è¿‡é•¿ï¼Œè¯·åˆ·æ–°ç½‘é¡µåŽé‡è¯•ã€‚'}else{mess1='Network
Error, Please try again later.';mess2='Link Error, Please make sure the link is
correct and try again.';mess3='Video id Error, Please check the id and try
again.';mess4='Incomplete youtube id, Please make sure the id is correct and try
again.';mess5='Sorry,Paid videos cannot be downloaded.';mess6='Link Error or
video is private, Please check the link and try again.';mess7='This video was
not found, please try another video link.';mess8='Sorry, this video link cannot
be resolved, please try another link.';mess9='Please refresh the page and try
again.'}var
getlink=$.ajax({type:"GET",timeout:30000,url:"/csgeturl?urlInfo="+encodeURIComponent(url.val())+"&lang="+lang,success:function(data){if(data.indexOf("<div
class=")!=-1){fodownload.after(data)}else
if(data=="unsupported"){errormes.text(mess8);errormes.css("display","block");fodownload.css("margin-top","0")}else
if(data=="urlerror"){errormes.text(mess2);errormes.css("display","block");fodownload.css("margin-top","0")}else
if(data=="extract"){errormes.text(mess3);errormes.css("display","block");fodownload.css("margin-top","0")}else
if(data=="incomplete"){errormes.text(mess4);errormes.css("display","block");fodownload.css("margin-top","0")}else
if(data=="unavailable"){errormes.text(mess5);errormes.css("display","block");fodownload.css("margin-top","0")}else
if(data=="registered"){errormes.text(mess6);errormes.css("display","block");fodownload.css("margin-top","0")}else
if(data=="unfound"||data=="deleted"){errormes.text(mess7);errormes.css("display","block");fodownload.css("margin-top","0")}else
if(data=="Illegal
request!"){errormes.text(mess9);errormes.css("display","block");fodownload.css("margin-top","0")}else
if(data.indexOf("<html")!=-1){location.reload()}else
if(data=="check"){if(lang=="zh-cn"){$.getScript("https://www.recaptcha.net/recaptcha/api.js")}else{$.getScript("https://www.google.com/recaptcha/api.js")}$("#mymodal-check").modal("toggle")}else{errormes.text(mess1);errormes.css("display","block");fodownload.css("margin-top","0")}lock=true},error:function(XMLHttpRequest,textStatus,errorThrown){alert(mess1);lock=true}})});var
checkForm=$("#form-check");checkForm.on("submit",function(e){e.preventDefault();var
respo=grecaptcha.getResponse();if(respo.length==0){$("#checkmess1").slideDown(500);setTimeout(function(){$("#checkmess1").slideUp(500)},3000);return}$.ajax({type:"POST",url:"/check",global:false,data:{captcha:respo},success:function(result){if(result=="pass"){$("#mymodal-check").modal("toggle")}else
if(result=="fail"){$("#checkmess2").slideDown(500);setTimeout(function(){$("#checkmess2").slideUp(500)},3000)}else{location.reload()}}})});$(".form-div").on("click",".btn-video-download,.m-download",function(){$("#downloadbtn").addClass("hidebtn");$("#mymodal-data").modal("toggle");var
sharebtn=setInterval(function(){if($('#mymodal-data').is(':visible')){$(".atss-left").hide()}if($('#mymodal-data').is(':hidden')){$(".atss-left").show();clearInterval(sharebtn)}},200)});var
top=$('.input-submit').offset().top;$(document).scroll(function(){var
scrTop=$(window).scrollTop();if(scrTop>=top){$('#form-fixed').css({'display':'block'})}else{$('#form-fixed').css({'display':'none'})}});$("#url,#url1").on("input
change paste propertychange focus blur",function(e){let
str;if(e.target.id=="url"){str=$("#url").val();$("#url1").val(str)}else{str=$("#url1").val();$("#url").val(str)}if(str.length>0){$(".clear-content,.clear-content-fixed").show()}else{$(".clear-content,.clear-content-fixed").hide()}});$(".clear-content,.clear-content-fixed").on("click",function(){$("#url,#url1").val('');$(".clear-content,.clear-content-fixed").hide()});$(".user-input").css('width',$('.form-div').css('width'));$(window).resize(function(){$(".user-input").css('width',$('.form-div').css('width'))})});
