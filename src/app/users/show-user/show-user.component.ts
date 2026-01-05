import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  users:any;
  constructor(@Inject(MAT_DIALOG_DATA)public data:any) {
            this.users = this.data

  }

  ngOnInit(): void {
        console.log(this.users)

  }

}
