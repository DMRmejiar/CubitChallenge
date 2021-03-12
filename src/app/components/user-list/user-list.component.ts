import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Request } from 'src/app/models/request.model';
import { UsersService } from 'src/app/services/users.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[];
  request: Request;
  pageSizeOptions: number[];

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog
  ) {
    this.request = {
      data: [],
      page: 1,
      per_page: 0,
      total: 0,
      total_pages: 0,
    }
    this.pageSizeOptions = [6];
    this.displayedColumns = ['id', 'first_name', 'last_name', 'view'];
  }

  ngOnInit(): void {
    this.updatePage(1);
  }

  onViewUser(pId: number) {
    this.usersService.getById(pId + 1)
      .then((data) => {
        console.log(data.data);
        const dialogRef = this.dialog.open(UserDetailComponent, {
          data: data.data
        });
        dialogRef.afterClosed();
      })
      .catch((error) => console.log(error));
  }

  updatePage(pPage: number) {
    this.usersService.getByPage(pPage)
      .then((req) => {
        this.request = req;
      })
      .catch((error) => console.log(error));
  }

  onChangePage($event: any) {
    this.updatePage($event.pageIndex + 1);
  }

}
