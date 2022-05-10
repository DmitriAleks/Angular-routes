import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PostComponent } from "./post/post.component";
import { PostsComponent } from "./posts/posts.component";


const routes: Routes = [
    {  path: '', component:HomeComponent },
{  path: 'about', component:AboutComponent },
{  path: 'posts', component:PostsComponent },
// путь без слеша /
{ path: 'posts/:id', component: PostComponent},
//  /: указываю некую динамику роуту
]

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports: [RouterModule]
})


export class AppRoutingModule {

}