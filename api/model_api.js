// "use strict";
var db=require("../apps/common/database");
var conn=db.getConnection();
var Post={
    getAllPost:function(callback){
        return conn.query("SELECT * FROM posts",callback);
    },
    getPostById:function(id,callback){
        return conn.query("SELECT * FROM posts WHERE ID=?",[id],callback);
    },
    addPost:function(params,callback){
        //console.log(params);
       return conn.query('INSERT INTO posts SET ?', params,callback);
         //return conn.query('INSERT INTO posts (id,tittle,content,author,created_at,updated_at) values (?,?,?,?,?,?)',[params.id,params.tittle,params.content,params.author,params.created_at,params.updated_at],callback);
    },
   
    deletePost:function(id,callback){
        return conn.query("DELETE FROM posts WHERE id=?",[id],callback);
    },
    updatePost:function(id,params,callback){
        console.log(id);
        console.log(params);
        return conn.query('UPDATE posts SET tittle=?,content=?,author=?,created_at=?,updated_at=? WHERE id=?',[params.tittle,params.content,params.author,params.created_at,params.updated_at,params.id],callback);
    }

    
};
module.exports=Post;