import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNewReleaseComponent } from './single-new-release.component';

describe('SingleNewReleaseComponent', () => {
  let component: SingleNewReleaseComponent;
  let fixture: ComponentFixture<SingleNewReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNewReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNewReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
