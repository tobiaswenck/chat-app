import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MainChatComponent } from './main-chat/main-chat.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatItemComponent } from './chat-item/chat-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    MainChatComponent,
    ProfileComponent,
    ChatItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
