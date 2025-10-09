import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLivresListComponent } from './admin-livres-list.component';

describe('AdminLivresListComponent', () => {
  let component: AdminLivresListComponent;
  let fixture: ComponentFixture<AdminLivresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLivresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLivresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
