import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminClientListeComponent } from './admin-client-liste.component';

describe('AdminClientListeComponent', () => {
  let component: AdminClientListeComponent;
  let fixture: ComponentFixture<AdminClientListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClientListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminClientListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
