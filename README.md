# FB Graph API Data Scrapping

1. Firstly open a facebook developer account.
2. Then create a business app.
3. Open through facebook graph API tool.
4. Generate user access short term token by connecting your app and facebook id. During connecting the fb account, select pages that you want to test to access. 
5. Select page and permissions (email, catalog_management, pages_show_list, instagram_basic, pages_read_engagement, pages_manage_metadata, pages_read_user_content,      pages_manage_ads, pages_manage_posts, pages_manage_engagement)
6. Select page on graph api tool.
7. Pressing submit button on (me?fields=id,name) you will get page id and page name.
8. Copy page id and access token of the page to the field page id and access token in App.js
9. To create long term token, write this code to graph api tool command:  
oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}&client_secret={app-secret}&fb_exchange_token={your-access-token} 
10. insert your app id, app secret and user access token on the given area, later press submit button. 
11. On the get command, select the component which you want to see from your facebook page and press the submit button to display your desired contents.
