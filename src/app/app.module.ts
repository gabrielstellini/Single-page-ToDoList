import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ToDoListHomeComponent } from './to-do-list-home/to-do-list-home.component';
import { ToDoDetailComponent } from './to-do-list-home/to-do-detail/to-do-detail.component';
import { ToDoListItemComponent } from "./to-do-list-home/to-do-detail/to-do-list-item/to-do-list-item.component";
import { ToDoAddComponent } from './to-do-list-home/to-do-add/to-do-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListHomeComponent,
    ToDoDetailComponent,
    ToDoListItemComponent,
    ToDoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
