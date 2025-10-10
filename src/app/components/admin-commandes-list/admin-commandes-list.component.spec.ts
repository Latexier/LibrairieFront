import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommandesListComponent } from './admin-commandes-list.component';

describe('AdminCommandesListComponent', () => {
  let component: AdminCommandesListComponent;
  let fixture: ComponentFixture<AdminCommandesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCommandesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCommandesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
