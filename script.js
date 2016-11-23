var app = angular.module("appName", []);

app.factory('redditShit', function () {
  var uselessListOfPosts= [];

  return {lalala : uselessListOfPosts};
})

app.controller('weLostCtrl', function ($scope, redditShit) {
  $scope.posts = redditShit.lalala;

  $scope.postText = function () {
    $scope.posts.push({name: $scope.newPost, likes: 0});
    $scope.newPost = '';
  };

  $scope.addLike = function (i) {
   redditShit.lalala[i].likes += 1;
  };
})