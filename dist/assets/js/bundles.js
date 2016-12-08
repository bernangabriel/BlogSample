!function(t){"use strict";t.module("app.module",["ui.router","ui.bootstrap","cp.ngConfirm"])}(window.angular),function(t){t.module("app.module").constant("constants",{api:"http://localhost:3000/"})}(window.angular),function(t){function e(t,e){e.otherwise("/home")}t.module("app.module").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(window.angular),function(t){"use strict";function e(t){t.state("about",{url:"/about",templateUrl:"about.html",controller:"aboutCtrl as vm"})}t.module("app.module").config(e),e.$inject=["$stateProvider"]}(window.angular),function(t){"use strict";function e(t,e){t.state("home",{url:"/home",templateUrl:"home.html",controller:"homeCtrl as vm",title:"Home"}),e.otherwise("/home")}t.module("app.module").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(window.angular),function(t){"use strict";function e(t){t.state("user",{url:"/user",templateUrl:"user.html",controller:"userCtrl as vm"})}t.module("app.module").config(e),e.$inject=["$stateProvider"]}(window.angular),function(t){"use strict";function e(t,e){function o(t){return t.get()}t.state("post",{url:"/post",templateUrl:"post.html",controller:"postCtrl as vm",resolve:{postList:o}}).state("details",{url:"/details/:id",templateUrl:"post-details.html",controller:"postDetailsCtrl as vm"}),o.$inject=["postService"]}t.module("app.module").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(window.angular),function(t){"use strict";function e(t,e){function o(o){return t.get(e.api+"comments?postId="+o)}function n(o){return t.post(e.api+"comments",o)}var s={getByPostId:o,insert:n};return s}t.module("app.module").factory("commentService",e),e.$inject=["$http","constants"]}(window.angular),function(t){function e(t){function e(e,o){t({title:e,type:"green",content:o,buttons:{close:function(t,e){}}})}var o={successMessage:e};return o}t.module("app.module").factory("util",e),e.$inject=["$ngConfirm"]}(window.angular),function(t){"use strict";function e(t,e){function o(){return t.get(e.api+"users")}function n(o){return t.get(e.api+"users/"+o)}var s={getAll:o,getById:n};return s}t.module("app.module").factory("userService",e),e.$inject=["$http","constants"]}(window.angular),function(t){"use strict";function e(t,e){function o(){return t.get(e.api+"posts")}function n(o){return t.get(e.api+"posts/"+o)}function s(o){return t.post(e.api+"posts",o)}function r(o){return t.delete(e.api+"posts/"+o)}function u(o){return t.put(e.api+"posts/"+o.id,o)}function i(o){return t.get(e.api+"posts?userId="+o)}var c={get:o,getById:n,insert:s,deletePost:r,updatePost:u,getPostsByUser:i};return c}t.module("app.module").factory("postService",e),e.$inject=["$http","constants"]}(window.angular),function(t){function e(t,e){e.enabledPostSearch=!1}t.module("app.module").controller("aboutCtrl",e),e.$inject=["$scope","$rootScope"]}(window.angular),function(t){function e(t,e){e.enabledPostSearch=!1}t.module("app.module").controller("homeCtrl",e),e.$inject=["$scope","$rootScope"]}(window.angular),function(t){function e(t,e,o){function n(){o.getAll().then(function(t){t.data&&(s.users=t.data)})}e.enabledPostSearch=!1;var s=this;n()}t.module("app.module").controller("userCtrl",e),e.$inject=["$scope","$rootScope","userService"]}(window.angular),function(t){function e(t,e,o,n){function s(t){try{o.getById(t).then(function(t){t.data?r.details=t.data:e.go("/post")})}catch(t){e.go("/post")}}var r=this;t.id?s(t.id):e.go("/post")}t.module("app.module").controller("postDetailsCtrl",e),e.$inject=["$stateParams","$state","postService","userService"]}(window.angular),function(t){function e(t,e,o,n,s,r,u,i){function c(){if(g.posts){var e=g.posts.length+3;t.newPostSize=e,m(e)}}function a(e){e&&r.getById(e.userId).then(function(e){e.data&&(t.currentUser=e.data,n({title:"User Details",contentUrl:"user-details.tpl.html",scope:t,buttons:{close:function(t,e){}}}))})}function l(e){var n=o.open({templateUrl:"edit-post.tpl.html",controller:["$scope",function(o){function r(e){s.updatePost(e).then(function(e){u(),m(t.newPostSize),i.successMessage("Success","Post updated successfully!")})}function u(){n.close("dismiss")}o.users=g.users,o.save=r,o.close=u,s.getById(e.id).then(function(t){t.data&&(o.post=t.data)})}]})}function d(e){e&&n({title:"Delete Post!",content:"Are you sure you want to delete this post <strong>"+e.title+"</strong>",buttons:{delete:{text:"Delete",btnClass:"btn-red",action:function(){s.deletePost(e.id).then(function(e){e.data&&(m(t.newPostSize),i.successMessage("Success","Post deleted successfully!"))})}},close:function(t,e){}}})}function p(){var e=o.open({templateUrl:"add-new-post.tpl.html",controller:["$scope","postService",function(o,n){function s(e){e&&n.insert(e).then(function(e){r(),m(t.newPostSize),i.successMessage("Success","Post added successfully!")})}function r(){e.close("dismiss")}o.users=g.users,o.addNewPost=s,o.close=r}]})}function f(){r.getAll().then(function(t){g.users=t.data})}function m(t){s.get().then(function(e){if(e.data){var o=e.data.map(function(t){if(t.userId){var e=g.users.filter(function(e){if(e.id==t.userId)return t});e&&(t.userName=e[0].name)}return t});g.posts=o.reverse().slice(0,3|t)}})}e.enabledPostSearch=!0,e.searchPost="";var g=this;e.openAddNewPost=p,g.editPost=l,g.deletePost=d,g.viewUser=a,g.showMorePosts=c,f(),setTimeout(function(){m(3)},25)}t.module("app.module").controller("postCtrl",e),e.$inject=["$scope","$rootScope","$uibModal","$ngConfirm","postService","userService","postList","util"]}(window.angular),function(t){"use strict";function e(t,e,o){var n={restrict:"EA",templateUrl:"post-author/post-author.tpl.html",controller:["$scope",function(n){t.id&&e.getById(t.id).then(function(t){t.data&&t.data.userId&&o.getById(t.data.userId).then(function(t){t.data&&(n.user=t.data)})})}]};return n}t.module("app.module").directive("postAuthor",e),e.$inject=["$stateParams","postService","userService"]}(window.angular),function(t){"use strict";function e(t,e){function o(o,n){function s(){if(o.postId)var t=n.open({templateUrl:"post-comments/add-new-comment.tpl.html",controller:["$scope",function(n){function s(t){t&&(t.postId=o.postId,e.insert(t).then(function(t){u(),r()}))}function u(){t.close("dismiss")}n.add=s,n.close=u}]})}function r(){o.postId&&e.getByPostId(o.postId).then(function(t){o.comments=t.data.reverse()})}o.openAddNewComment=s,o.postId=t.id,r()}var n={restrict:"EA",templateUrl:"post-comments/post-comments.tpl.html",controller:o};return o.$inject=["$scope","$uibModal"],n}t.module("app.module").directive("postComments",e),e.$inject=["$stateParams","commentService"]}(window.angular),function(t){"use strict";function e(){var t={restrict:"EA",templateUrl:"user-widget/user-widget.tpl.html",controller:["$scope","userService","postService",function(t,e,o){e.getAll().then(function(e){e.data&&(t.users=e.data)})}]};return t}t.module("app.module").directive("userWidget",e)}(window.angular);
//# sourceMappingURL=bundles.js.map
