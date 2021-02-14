import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxsModule } from '@ngxs/store';
import { TutorialState, TutorialStateModel } from './state/tutorial.state';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import { StateManComponent } from './state-man/state-man.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    CreateComponent,
    ReadComponent,
    StateManComponent,
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      TutorialState
    ]),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
