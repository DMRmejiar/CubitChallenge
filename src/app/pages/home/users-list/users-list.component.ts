import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Request } from 'src/app/models/request.model';
import { UsersService } from 'src/app/services/users.service';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
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
    this.usersService.getById(pId)
      .then((data) => {
        console.log(data.data);
        const dialogRef = this.dialog.open(UserDetailComponent, {
          data: data.data
        });
        dialogRef.afterClosed();
      })
      .catch((error) => console.log(error));
  }

  async updatePage(pPage: number) {
    try {
      this.request = await this.usersService.getByPage(pPage);
    } catch (error) {
      console.log(error)
    }
  }

  onChangePage($event: any) {
    this.updatePage($event.pageIndex + 1);
  }

}
