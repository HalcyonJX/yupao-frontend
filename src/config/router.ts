import Team from "../pages/Team.vue";
import Index from "../pages/Index.vue";
import User from "../pages/User.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserEditPage from "../pages/UserEditPage.vue";
//定义一些路由
const routes = [
    {path:'/',component:Index},
    {path:'/team',component:Team},
    {path:'/user',component:User},
    {path:'/search',component:SearchPage},
    {path:'/user/edit',component:UserEditPage},
];

export default routes;