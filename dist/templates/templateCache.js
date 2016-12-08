angular.module('app.module').run(['$templateCache', function($templateCache) {$templateCache.put('home.html','<div class="jumbotron" style="background-color:#fff;">\r\n    <h1 style="color: #f1c40f;">Welcome to Blog Sample</h1>\r\n</div>');
$templateCache.put('add-new-post.tpl.html','<div class="modal-header">\r\n    <h3 class="modal-title">Add new post</h3>\r\n</div>\r\n<div class="modal-body">\r\n    <div class="row">\r\n        <div class="col-md-12">\r\n            <div data-ng-form name="postForm">\r\n               <div class="form-group">\r\n                   <label for="user">User</label>\r\n                   <select ng-model="post.userId" ng-options="item.id as item.name for item in users" class="form-control" required>\r\n                       <option value="">[ Select ]</option>\r\n                   </select>\r\n               </div>\r\n                <div class="form-group">\r\n                    <label for="name">Title</label>\r\n                    <input type="text" class="form-control" ng-model="post.title" required>\r\n                </div>\r\n                <div class="form-group">\r\n                    <label for="body">Body</label>\r\n                    <textarea rows="4" cols="3" class="form-control" ng-model="post.body" required></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="modal-footer">\r\n    <button class="btn btn-success" type="button" ng-click="addNewPost(post)" ng-disabled="!postForm.$valid">Add Post</button>\r\n    <button class="btn btn-default" type="button" ng-click="close()">Close</button>\r\n</div>');
$templateCache.put('edit-post.tpl.html','<div class="modal-header">\r\n    <h3 class="modal-title">Edit Post</h3>\r\n</div>\r\n<div class="modal-body">\r\n    <div class="row">\r\n        <div class="col-md-12">\r\n            <div data-ng-form name="postForm">\r\n                <div class="form-group">\r\n                    <label for="user">User</label>\r\n                    <select ng-model="post.userId" ng-options="item.id as item.name for item in users" class="form-control" required>\r\n                        <option value="">[ Select ]</option>\r\n                    </select>\r\n                </div>\r\n                <div class="form-group">\r\n                    <label for="name">Title</label>\r\n                    <input type="text" class="form-control" ng-model="post.title" required>\r\n                </div>\r\n                <div class="form-group">\r\n                    <label for="body">Body</label>\r\n                    <textarea rows="4" cols="3" class="form-control" ng-model="post.body" required></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="modal-footer">\r\n    <button class="btn btn-success" type="button" ng-click="save(post)" ng-disabled="!postForm.$valid">Save</button>\r\n    <button class="btn btn-default" type="button" ng-click="close()">Close</button>\r\n</div>');
$templateCache.put('post-details.html','<div class="hidden-md hidden-sm">\r\n    <div post-author></div>\r\n</div>\r\n\r\n<div class="row">\r\n    <div class="post-container">\r\n        <h4 style="font-size:27px; margin:0px;color: #2980b9;margin-bottom: 10px;">{{vm.details.title}}</h4>\r\n        <p style="font-size: 16px;">{{vm.details.body}}</p>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n<div class="row post-container">\r\n    <div class="col-md-12">\r\n        <div post-comments post-id="{{vm.details.id}}"></div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<style>\r\n    .post-container {\r\n        background: #fff;\r\n        padding: 2em 1.5em;\r\n        box-shadow: 0px 1px 4px 0px rgba(104, 123, 144, 0.31);\r\n        border-radius: 0.3em;\r\n    }\r\n</style>');
$templateCache.put('post.html','<div class="hidden-md hidden-sm">\r\n    <div user-widget></div>\r\n</div>\r\n<div class="row">\r\n   <h4 class="post-page-title">Latest Blog Post</h4>\r\n    <div class="col-md-12">\r\n        <div class="post-box col-lg-12 col-md-4 col-sm-6" ng-repeat="item in vm.posts |filter:searchPost">\r\n            <div class="row">\r\n                <div class="col-lg-8 col-md-4">\r\n                    <span class="post-title">\r\n                        {{item.title}}\r\n                    </span>\r\n                </div>\r\n                <div class="col-lg-4 col-md-2 text-right">\r\n                    <span class="post-body">Posted By <a style="cursor:pointer;" ng-click="vm.viewUser(item)">{{item.userName}}</a></span>\r\n                </div>\r\n            </div>\r\n            <p class="post-body">{{item.body}}</p>\r\n            <div class="row">\r\n                <div class="col-lg-4 col-md-2 text-left">\r\n                    <a class="btn btn-default btn-sm" ui-sref="details({id:item.id})">Read More</a>\r\n                </div>\r\n                <div class="col-lg-8 col-md-4 col-md-8 text-right">\r\n                    <a class="btn btn-primary btn-sm" ng-click="vm.editPost(item)"> <i class="fa fa-pencil-square-o"></i> </a>\r\n                    <a class="btn btn-danger btn-sm" ng-click="vm.deletePost(item)"> <i class="fa fa-trash"></i> </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<br>\r\n<div class="row">\r\n    <div class="col-md-12 text-center">\r\n        <button class="btn btn-primary btn-lg" ng-click="vm.showMorePosts()">Show More Posts</button>\r\n    </div>\r\n</div>');
$templateCache.put('user-details.tpl.html','<ul class="list-group">\r\n    <li class="list-group-item"><span class="badge">{{currentUser.name}}</span>Name: </li>\r\n    <li class="list-group-item"><span class="badge">{{currentUser.username}}</span>Username:</li>\r\n    <li class="list-group-item"><span class="badge">{{currentUser.email}}</span>Email:</li>\r\n    <li class="list-group-item"><span class="badge">{{currentUser.website}}</span>Website</li>\r\n</ul>');
$templateCache.put('user.html','<div class="row">\r\n    <div class="col-md-12">\r\n        <h4 class="post-page-title">Users List</h4>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <div class="col-md-12">\r\n        <div class="post-box">\r\n            <div class="bs-callout bs-callout-warning" ng-repeat="item in vm.users track by $index">\r\n                <div class="row">\r\n                    <div class="col-md-6 text-left">\r\n                        <h4>{{item.name}} <span class="badge">{{item.email}}</span> </h4>\r\n                    </div>\r\n                    <div class="col-md-6 text-right">\r\n                        <span>{{item.username}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class="row">\r\n                    <div class="col-md-12">\r\n                        <lable style="font-weight:bold">Phone: </lable> <span>{{item.phone}}</span>\r\n                        <br>\r\n                        <lable style="font-weight:bold">Website: </lable> <span>{{item.website}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<style>\r\n    .bs-callout {\r\n        padding: 10px;\r\n        margin: 20px 0;\r\n        border: 1px solid #eee;\r\n        border-left-color: #2980b9;\r\n        border-left-width: 5px;\r\n        border-radius: 3px;\r\n    }\r\n</style>');
$templateCache.put('about.html','<div class="row">\r\n    <div class="col-md-12">\r\n        <h4 class="post-page-title">Welcome to about page</h4>\r\n    </div>\r\n</div>');
$templateCache.put('post-author/post-author.tpl.html','<div class="author-widget">\r\n    <div class="panel panel-warning">\r\n        <div class="panel-heading">About Post Author</div>\r\n        <div class="panel-body">\r\n            <div class="media ng-scope">\r\n                <div class="media-left">\r\n                    <i class="fa fa-user-circle" style="font-size: 60px;"></i>\r\n                </div>\r\n                <div class="media-body">\r\n                    <h4 class="media-heading ng-binding" style="color:#f39c12;">{{user.name}}</h4>\r\n                    <p style="line-height:18px;" class="ng-binding">({{user.username}})</p>\r\n                    <p class="badge">{{user.email}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>');
$templateCache.put('post-comments/add-new-comment.tpl.html','<div class="modal-header">\r\n    <h3 class="modal-title">Add new comment</h3>\r\n</div>\r\n<div class="modal-body">\r\n    <div class="row">\r\n        <div class="col-md-12">\r\n            <div data-ng-form name="commentForm">\r\n                <div class="form-group">\r\n                    <label for="name">Name</label>\r\n                    <input type="text" class="form-control" ng-model="comment.name" required>\r\n                </div>\r\n                <div class="form-group">\r\n                    <label for="email">Email</label>\r\n                    <input type="text" class="form-control" ng-model="comment.email" required>\r\n                </div>\r\n                <div class="form-group">\r\n                    <label for="body">Body</label>\r\n                    <textarea rows="4" cols="3" class="form-control" ng-model="comment.body" required></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="modal-footer">\r\n    <button class="btn btn-success" type="button" ng-click="add(comment)" ng-disabled="!commentForm.$valid">Add Comment</button>\r\n    <button class="btn btn-default" type="button" ng-click="close()">Close</button>\r\n</div>');
$templateCache.put('post-comments/post-comments.tpl.html','<div class="row">\r\n    <div class="row">\r\n        <div class="col-md-4">\r\n            <h4 class="comment">Comments</h4>\r\n        </div>\r\n        <div class="col-md-8 text-right">\r\n            <a href="" class="btn btn-success btn-sm" ng-click="openAddNewComment()"><i class="fa fa-comment-o"></i> Add new comment</a>\r\n        </div>\r\n    </div>\r\n    <div class="row">\r\n        <div class="col-md-12">\r\n            <div class="box-comment">\r\n                <div class="media" ng-repeat="item in comments track by $index">\r\n                    <div class="media-left">\r\n                        <i class="fa fa-user-circle" style="font-size: 42px;"></i>\r\n                    </div>\r\n                    <div class="media-body">\r\n                        <h4 class="media-heading" style="color:#f39c12; font-size:17px;">{{item.email}}</h4>\r\n                        <p style="line-height:18px; font-size:12px;">{{item.body}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<style>\r\n    .post-container {\r\n        margin-top: 9px;\r\n        color: #868f98;\r\n        font-weight: 400;\r\n        font-size: 1em;\r\n        line-height: 1.8em;\r\n        margin-bottom: 1em;\r\n    }\r\n\r\n    .box-comment {\r\n        line-height: 40px;\r\n    }\r\n\r\n    .box-comment-email {\r\n    }\r\n\r\n    .box-comment i {\r\n        position: relative;\r\n        font-size: 52px;\r\n    }\r\n\r\n    .box-comment span {\r\n        vertical-align: top;\r\n        color: #7f8c8d;\r\n    }\r\n\r\n    .comment {\r\n        font-size: 1.5em;\r\n        margin-bottom: 1.2em;\r\n        color: #556a7f;\r\n        font-weight: 700;\r\n    }\r\n</style>');
$templateCache.put('user-widget/user-widget.tpl.html','<div class="user-widget">\r\n    <div class="panel panel-warning">\r\n        <div class="panel-heading">Users</div>\r\n        <div class="panel-body">\r\n            <table class="table table-hover">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Name</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr ng-repeat="item in users track by $index">\r\n                        <td>{{item.name}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>');}]);