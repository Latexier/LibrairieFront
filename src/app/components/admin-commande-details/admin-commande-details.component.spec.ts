import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommandeDetailsComponent } from './admin-commande-details.component';

describe('AdminCommandeDetailsComponent', () => {
  let component: AdminCommandeDetailsComponent;
  let fixture: ComponentFixture<AdminCommandeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCommandeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCommandeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
