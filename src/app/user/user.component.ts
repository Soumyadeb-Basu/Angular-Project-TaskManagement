import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';
import { DUMMY_USERS } from '../USERS';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /* selectedUser = signal(DUMMY_USERS[randomIndex]);

  image = computed(()=>'assets/users/'+this.selectedUser().avatar);
*/
  //@Input({required:true}) avatar!: string;
  @Input({ required: true }) id!: string;
  avatar = input.required<string>(); //returns a signal but read-only(cannot be changed by set() method for signals)
  @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  /* get image() {
    return 'assets/users/' + this.avatar;
  } */

  image = computed(() => 'assets/users/' + this.avatar());

  onSelectUser(id: string) {
    //const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
    //this.selectedUser[DUMMY_USERS[...]] (Old method without signals, uses zone.js in backend)
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //return 'assets/users/' + this.avatar;
    this.select.emit(id);
  }
}
