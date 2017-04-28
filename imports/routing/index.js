/**
 * Created by Robi on 4/25/2017.
 */
import route from './router.js';
import Login from '/imports/ui/pages/login';
import Register from '/imports/ui/pages/register';
import Posts from '/imports/ui/pages/postsList';
import PostsCreate from '/imports/ui/pages/postsCreate';
import PostEdit from '/imports/ui/pages/postEdit';
import Home from '/imports/ui/pages/home';

route('/', Home);
route('/login', Login);
route('/register', Register);
route('/posts', Posts, {roles: 'USER'});
route('/posts/create', PostsCreate);
route('/post/edit/:id', PostEdit);