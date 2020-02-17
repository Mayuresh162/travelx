import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelx';

  getUrl() {
    return "url('http://www.dotwnews.com/modules/image_resize/image_resize.php?image=/uploads/posts/luxury_family_travel.jpg&width=860&height=468&cropratio=860:468')";
  }
}
