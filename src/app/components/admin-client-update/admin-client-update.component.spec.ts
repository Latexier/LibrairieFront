import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientUpdateComponent } from './admin-client-update.component';

describe('AdminClientUpdateComponent', () => {
  let component: AdminClientUpdateComponent;
  let fixture: ComponentFixture<AdminClientUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClientUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminClientUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
