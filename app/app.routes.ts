
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import {BookComponent} from './book/book.component';
import { AddBookComponent } from "./add-book/add-book.component";
import { ManageBookComponent } from "./manage-book/manage-book.component";
import { ViewDetailsComponent } from "./book/view-details.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { UpdateBookComponent } from "./manage-book/update-book.component";

export const routes : Routes = [
    // {path:'',component:AppComponent},
    {path:'book',component:BookComponent,
        // children : [
        //     {path:'view-details/:id',component:ViewDetailsComponent}
        // ]
    },
    {path:'view-details/:id',component:ViewDetailsComponent},
    {path:'add-book',component:AddBookComponent},
    // {path:'add-book/:id',component:ViewDetailsComponent},
    {path:'manage-book',component:ManageBookComponent},
    {path:'update-book/:id',component:UpdateBookComponent},
    {path:'', redirectTo:'/book', pathMatch:'full'},
    {path:'**',component:PageNotFoundComponent}
];
export const routing = RouterModule.forRoot(routes);