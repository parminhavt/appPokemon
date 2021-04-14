import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoDialogService, PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';
import { BreadcrumbControlService } from 'dts-backoffice-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  menus = [
      { label: 'Pokemon', action: this.goTo.bind(this, '/pokemonMnt') },
      { label: 'Sobre', action: this.goTo.bind(this, '/about') }
  ];

  notificationActions: Array<PoToolbarAction> = [
    { icon: 'po-icon-message', label: 'Você tem uma mensagem!', type: 'danger', action: item => this.openDialog(item) }
  ];

  constructor(
      private router: Router,
      private poDialog: PoDialogService,
      private breadcrumbControlService: BreadcrumbControlService
  ) { }

  public getNotificationNumber(): number {
    return this.notificationActions.filter(not => not.type === 'danger').length;
  }

  public openDialog(item: PoToolbarAction): void {
    this.poDialog.alert({
      title: 'Olá',
      message: `Seja bem vindo ao AppPokemon, divirta-se!`,
      ok: undefined
    });

    item.type = 'default';
  }

  public goTo(url: string): void {
      // Reinicia o BreadCrumb
      this.breadcrumbControlService.newBreadcrumb();

      this.router.navigate([url]);
  }

  ngDestroy(): void {
    localStorage.clear();
  }

}
