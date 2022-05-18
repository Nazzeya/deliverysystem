import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  { path: "feed", component: FeedComponent },
  { path: "", component: AuthPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
