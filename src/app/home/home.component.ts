import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  form: FormGroup = new FormGroup({
    boyname: new FormControl(''),
    girlname:new FormControl('')
  });



  submitted = false;
  public response:any;
  ;


  constructor(private formBuilder: FormBuilder,private _usr: UserService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        boyname: [
          '',
          [
            Validators.required,
            Validators.maxLength(20),
          ],
        ],
        girlname: [
          '',
          [
            Validators.required,
            Validators.maxLength(20),
          ],
         ],
      },

     
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;


   
    console.log('jkgjhgj');

    console.log(this.form.value);
    this.setData();
    this.saveEmployee();

  }

  redirect() {
    this.router.navigate(['/home'])
  }
  public user:User =new User;
  
    userForm: FormGroup = new FormGroup({
  
      boyname: new FormControl(''),
      girlname: new FormControl(''),

      
    });
  
  public msg:string;
  
  setData() {
    this.user.boy=this.form.value.boyname;
    this.user.girl=this.form.value.girlname;

  }
 
  saveEmployee(){

    this._usr.getFlames(this.user).subscribe( data => {this.response=data.flames;

      console.log(data);
    });
  }

  check() {
      this.goToEmployeeList();
     
  }
      goToEmployeeList(){
        this.router.navigate(['/login']);
      }
  }
  

