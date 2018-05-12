import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSelectScreenComponent } from './player-select-screen.component';

describe('PlayerSelectScreenComponent', () => {
  let component: PlayerSelectScreenComponent;
  let fixture: ComponentFixture<PlayerSelectScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSelectScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSelectScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
