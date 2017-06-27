import { NgModule } from '@angular/core';
import { UserRoutingModule, routedComponents } from './user.routing';

@NgModule({
  imports: [UserRoutingModule],
  exports: [UserRoutingModule],
  declarations: [routedComponents]
})
export class UserModule { }
