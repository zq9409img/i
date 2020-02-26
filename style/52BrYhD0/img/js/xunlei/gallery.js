
    var backDiv=null,popDiv = null;
    var Msgbox = {};
    /**
     * 普通提示层
     * var opts = {btn_title:'确定',btn_href:'http://www.baidu.com/',btn_target:'_blank'};
     * msgbox.commonMsg('recard_box',opts);
     */
    // Msgbox.commonMsg = Msgbox.showmsg = function(msg,opts){
    //     Msgbox.exit();
    //     $('#act_msgbox_common').length ? popDiv = $('#act_msgbox_common'):popDiv = createpopDiv();
    //     var btn_title =  (opts && opts.btn_title) || '确定';
    //     var btn_class =  (opts && opts.btn_class) || '';
    //     var btn_href =  (opts && opts.btn_href) || 'javascript:msgExit()';
    //     var btn_target =  (opts && opts.btn_target == 1)? '_blank':'';
    //     if(opts && opts['boxTitle']){
    //         opts['boxTitle'] ? opts['boxTitle'] = opts['boxTitle']: opts['boxTitle']='温馨提示';
    //         popDiv.find('[name=boxTitle]').html(opts['boxTitle']);
    //     } else {
    //         popDiv.find('[name=boxTitle]').html('温馨提示');
    //     }
    //     popDiv.find("[name=msgbox_info]").html(msg);
    //     var btn = popDiv.find('[name=box_btn]');
    //     btn.replaceWith('<a class="act-pop-btn act-pop-btn-hot '+btn_class+'" href="'+btn_href+'" name="box_btn" title="'+btn_title+'" target="'+btn_target+'">'+btn_title+'</a>');;
    //     createBackground(opts);
    //     popDiv.show();
    //     if(backDiv){backDiv.show();}
    //     refreshBind();
    // };
    /**
     * 显示指定id的div
     * 调用方式：showDiv('showdiv',{opacity:0});
     */
    Msgbox.showDiv = Msgbox.show = function(id,opts){
        Msgbox.exit();
        popDiv = $('#'+id);
        popDiv.show();
        popDiv
        createBackground(opts);
        if(backDiv){backDiv.show();}
        refreshBind();
    };

    Msgbox.showErrorMsg = function(MSGID,opts){
        // console.log(active_cfg)
        if(active_cfg && active_cfg['msg']){
            var MSG = active_cfg['msg'][MSGID];
        }
        // var uid = getCookie('userid');
        // if(MSG['btn_class'].indexOf('add_uid') != -1 ){
        //     MSG['btn_link'] = MSG['btn_link'] + "?uid="+uid;
        // }
        var opts = opts;
        if(MSG){
            opts = {btn_title:MSG['btn_text'],btn_href:MSG['btn_link'],btn_target:MSG['btn_action'],boxTitle:MSG['title'],btn_class:MSG['btn_class']};
            Msgbox.commonMsg(MSG['content'],opts);
        } else {
            Msgbox.commonMsg(MSGID,opts);
        }
    }

    Msgbox.exit = function(){
        if(popDiv) popDiv.hide();
        if(backDiv) backDiv.remove();
    };



    /**
     * 创建通用弹出层
     * 默认style为common，这里留一个style的选项方便以后扩展
     */
    function createpopDiv(opts){
        var style = (opts && opts.style) || 'common';

        switch(style){
            case 'common':
  