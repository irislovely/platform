import {Component, Input} from '@angular/core';
import {IUserRecord} from "../../redux/user.models";
import {IRequestRecord} from "../../redux/requests.models";
import {RequestService} from "../../services/request/request.service";

@Component({
  selector: 'fnd-watchlink',
  templateUrl: './watchlink.component.html',
  styleUrls: ['./watchlink.component.scss']
})
export class WatchlinkComponent {
  @Input() user: IUserRecord;
  @Input() request: IRequestRecord;

  constructor(private requestService: RequestService) {

  }

  public isWatcher(): boolean {
    return this.request.watchers.indexOf(this.user.email) > -1;
  }

  public toggleIsWatcher(): void {
    if (!this.isWatcher()) {
      this.requestService.setUserAsWatcher(this.request, this.user);
    } else {
      this.requestService.unSetUserAsWatcher(this.request, this.user);
    }
  }
}