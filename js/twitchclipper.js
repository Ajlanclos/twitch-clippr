angular.module('main', [])

    // Controller
    .controller('twitchUserCtrl', function($scope, $http) {
        
        // Vars
        $scope.twuser = {};
        $scope.searchUser = function() {
            $scope.twuser.username;

            // Get the user id
             $http.get(
                'https://api.twitch.tv/kraken/users?login=' + $scope.twuser.username, {
                headers: {
                    'Accept': 'application/vnd.twitchtv.v5+json',
                    'Client-ID': 'uo6dggojyb8d6soh92zknwmi5ej1q2'
                }
            })
            .then(function(response) {
                $scope.user = response.data;

                // Use the user id to get list of clips
                $http.get(
                    'https://api.twitch.tv/kraken/channels/' + $scope.user.users[0]._id + '/videos', {
                    headers: {
                        'Accept': 'application/vnd.twitchtv.v5+json',
                        'Client-ID': 'uo6dggojyb8d6soh92zknwmi5ej1q2'
                    }
                })
                .then(function(response) {
                    $scope.clips = response.data.videos;
                });

            });
        }
       
    });

    // .controller('twitchClipCtrl', function($scope, $http) {
        
        

    // });
