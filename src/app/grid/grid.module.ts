import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridItemComponent } from './components/grid-item/grid-item.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [GridComponent, GridItemComponent],
  imports: [CommonModule],
  exports: [GridComponent],
})
export class GridModule {}
