var posts=["2024/06/21/免费托管域名网站/","2024/04/12/hexo版本升级/","2024/06/25/hello-world/","2024/03/11/Markdown简明语法教程/","2024/06/21/cloudflare节点测速网址/","2024/06/10/SpringBoot 项目中使用Log4j2详细（避坑）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };