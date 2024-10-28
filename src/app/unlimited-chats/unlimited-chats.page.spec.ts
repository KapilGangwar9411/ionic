import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnlimitedChatsPage } from './unlimited-chats.page';

describe('UnlimitedChatsPage', () => {
  let component: UnlimitedChatsPage;
  let fixture: ComponentFixture<UnlimitedChatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlimitedChatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
