import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService } from './auth.service' 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PjourneyComponent } from './pjourney/pjourney.component';
import { HelpComponent } from './help/help.component';
import { LeditComponent } from './ledit/ledit.component';
import { LpasswordComponent } from './lpassword/lpassword.component';
import { LcheckbkComponent } from './lcheckbk/lcheckbk.component';
import { LnewbkComponent } from './lnewbk/lnewbk.component';
import { LnewbkcpyComponent } from './lnewbkcpy/lnewbkcpy.component';
import { LbkreturnComponent } from './lbkreturn/lbkreturn.component';
import { LbkissueComponent } from './lbkissue/lbkissue.component';
import { LbkissuelistComponent } from './lbkissuelist/lbkissuelist.component';
import { LaddmemComponent } from './laddmem/laddmem.component';
import { LpaymentComponent } from './lpayment/lpayment.component';
import { LpayhistoryComponent } from './lpayhistory/lpayhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EditComponent,
    DeleteComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    PjourneyComponent,
    HelpComponent,
    LeditComponent,
    LpasswordComponent,
    LcheckbkComponent,
    LnewbkComponent,
    LnewbkcpyComponent,
    LbkreturnComponent,
    LbkissueComponent,
    LbkissuelistComponent,
    LaddmemComponent,
    LpaymentComponent,
    LpayhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent,canActivate:[AuthService]},
      {path:"home",component:HomeComponent,canActivate:[AuthService]},
      {path:"register",component:RegisterComponent,canActivate:[AuthService]},
      {path:"edit/:No",component:EditComponent,canActivate:[AuthService]},
      {path:"delete/:No",component:DeleteComponent,canActivate:[AuthService]},
      {path:"pjourney",component:PjourneyComponent},
      {path:"login",component:LoginComponent},
      {path:"about",component:AboutComponent},
      {path:"contact",component:ContactComponent},
      {path:"help",component:HelpComponent},
      {path:"laddmem",component:LaddmemComponent},
      {path:"lbkissue",component:LbkissueComponent},
      {path:"lbkissuelist",component:LbkissuelistComponent},
      {path:"lbkreturn",component:LbkreturnComponent},
      {path:"lcheckbk",component:LcheckbkComponent},
      {path:"ledit",component:LeditComponent},
      {path:"lnewbk",component:LnewbkComponent},
      {path:"lnewbkcpy",component:LnewbkcpyComponent},
      {path:"lpassword",component:LpasswordComponent},
      {path:"lpayment",component:LpaymentComponent},
      {path:"lpayhistory",component:LpayhistoryComponent},
      {path:"contact",component:ContactComponent},
      {path:"**",component:NotfoundComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
