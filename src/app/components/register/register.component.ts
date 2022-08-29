import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  constructor(private auth:AuthService) {
    this.user=new User("mark","m@g.com","12345","pass");
   }

  ngOnInit(): void {
  }
onFormSubmit(){
  console.log(this.user);
  this.auth.register(this.user).subscribe((response)=>{
    console.log(response);
  })
}
}
