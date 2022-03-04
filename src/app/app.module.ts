// imports pre-defined
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// imports user defined
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './shared/material.module';
import { ListOfEmployeesComponent } from './list-of-employees/list-of-employees.component';
import { AddOrUpdateEmployeeComponent } from './add-or-update-employee/add-or-update-employee.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    AddOrUpdateEmployeeComponent,
    DeleteConfirmationComponent,
    ListOfEmployeesComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddOrUpdateEmployeeComponent]
})
export class AppModule { }
