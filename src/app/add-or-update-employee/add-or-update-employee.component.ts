import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-or-update-employee',
  templateUrl: './add-or-update-employee.component.html',
  styleUrls: ['./add-or-update-employee.component.scss']
})
export class AddOrUpdateEmployeeComponent implements OnInit {

  public isCreation: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
