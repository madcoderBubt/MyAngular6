import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { DonarsComponent } from './donars/donars.component';
import { DonarComponent } from './donar/donar.component';
import { DonarDataService } from './donar-data.service';
import { PutDonarComponent } from './put-donar/put-donar.component';
import { NewDonarComponent } from './new-donar/new-donar.component';
import { FilterDonarComponent } from './filter-donar/filter-donar.component';

const appRoutes: Routes=[
  {
    path: '',
    component: DonarsComponent
  },{
    path: 'donar/:id',
    component: DonarComponent
  },{
    path: 'putDonar',
    component: NewDonarComponent
  },{
    path: 'putDonar/:id',
    component: PutDonarComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    DonarsComponent,
    DonarComponent,
    PutDonarComponent,
    NewDonarComponent,
    FilterDonarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    NgModel,NgForm
  ],
  providers: [DonarDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
