import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyAppSharedModule } from 'app/shared/shared.module';
import { EntryComponent } from './entry.component';
import { EntryDetailComponent } from './entry-detail.component';
import { EntryUpdateComponent } from './entry-update.component';
import { EntryDeleteDialogComponent } from './entry-delete-dialog.component';
import { entryRoute } from './entry.route';

@NgModule({
  imports: [MyAppSharedModule, RouterModule.forChild(entryRoute)],
  declarations: [EntryComponent, EntryDetailComponent, EntryUpdateComponent, EntryDeleteDialogComponent],
  entryComponents: [EntryDeleteDialogComponent],
})
export class MyAppEntryModule {}
