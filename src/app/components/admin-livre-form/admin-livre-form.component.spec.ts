import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLivreFormComponent } from './admin-livre-form.component';

describe('AdminLivreFormComponent', () => {
  let component: AdminLivreFormComponent;
  let fixture: ComponentFixture<AdminLivreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLivreFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLivreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
