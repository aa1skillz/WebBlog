function Post(){
    function bindEvent(){
        $(".post_edit").click(function(e){
            var params={
                id: $(".id").val(),
                tittle: $(".tittle").val(),
                content: tinymce.get("content").getContent(),
                author: $(".author").val()
        };
        var base_url=location.protocol+"//"+document.domain+":"+location.port;
        $.ajax({
            url: base_url+"/admin/post/edit",
            type: "put",
            data: params,
            dataType: "json",
            success: function(res){
                if(res && res.status_code == 200){
                    location.reload();
                }
            }
        });
        });
        $(".post_delete").click(function(e){
            var post_id=$(this).attr("post_id");
            var base_url=location.protocol+"//"+document.domain+":"+location.port;
            $.ajax({
                url: base_url+"/admin/post/delete",
                type: "DELETE",
                data: {id:post_id},
                dataType: "json",
                success: function(res){
                    if(res && res.status_code == 200){
                        location.reload();
                    }
                }
            });
        })
    }
    bindEvent();
}
$(function(){
    Post();
});



        // $.ajax({
            
        //     url: base_url+"/admin/post/edit",
        //     type:  'PUT',
        //     data: params,
        // })
        // .done(function(res) {
        //     if(res && res.status_code ==200){
        //                      location.reload;
        //                }
        // })
        // .fail(function() {
        //     console.log("error");
        // })
        // .always(function() {
        //     console.log("complete");
        // });