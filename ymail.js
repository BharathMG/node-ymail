  var crypto = require('crypto');
  var params={};
  var hash = crypto.createHmac('sha1', "dj0yJmk9Q2FuQnhtbkwxWlJCJmQ9WVdrOU9YSnJhRTVOTjJVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0xNQ--").update("SECRET").digest('hex')
  params['oauth_nonce'] = 'ce2130523f788f323213f76314ed3965ea6';
  params['oauth_timestamp'] = Math.floor(new Date().getTime() / 1000);
  params['oauth_consumer_key'] = 'dj0yJmk9Q2FuQnhtbkwxWlJCJmQ9WVdrOU9YSnJhRTVOTjJVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0xNQ--';
  params['oauth_signature_method'] = 'plaintext';
  params['oauth_signature'] = 'SECRET&';
  params['oauth_version'] = 1.0;
  params['oauth_callback'] = 'oob';

  var OAuth = require('oauth');
  var OAuth2 = OAuth.OAuth2;
  var oauth2 = new OAuth2("dj0yJmk9Q2FuQnhtbkwxWlJCJmQ9WVdrOU9YSnJhRTVOTjJVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0xNQ--",
         "", 
         'https://api.login.yahoo.com/oauth/v2/get_request_token', 
         null,
         'oauth2/token', 
         null);
       oauth2.getOAuthAccessToken(
         '',
         params,"https://api.login.yahoo.com/oauth/v2/get_request_token",
         function (e, access_token, refresh_token, results){
          var token = results['oauth_token'];
         console.log('bearer: ',results['oauth_token']);
         oauth2.get("https://api.login.yahoo.com/oauth/v2/request_auth?oauth_token="+token,token,function(){

         });
       });

