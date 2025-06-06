import { Component } from '@angular/core';

import { SidebarMenuComponent } from '../../layout/sidebar-menu/sidebar-menu.component';
import { HeaderAdminComponent } from '../../layout/header-admin/header-admin.component';
import { CardInstituicaoComponent } from '../../components/card-instituicao/card-instituicao.component';
import { TableUsersComponent } from '../../components/tables-admin/table-users/table-users.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-admin-users',
  standalone: true,
  imports: [
    SidebarMenuComponent,
    HeaderAdminComponent,
    CardInstituicaoComponent,
    TableUsersComponent,
  ],
  templateUrl: './view-admin-users.component.html',
  styleUrl: './view-admin-users.component.scss',
})
export class ViewAdminUsersComponent {
  isSidebarCollapsed = false;

  onSidebarCollapseChange(collapsed: boolean): void {
    this.isSidebarCollapsed = collapsed;
  }
}
