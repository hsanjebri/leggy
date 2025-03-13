import {Component, OnInit} from '@angular/core';
import {ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {UnsubscribeOnDestroyAdapter} from '../shared/UnsubscribeOnDestroyAdapter';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { AuthService } from '../core/service/auth.service'; // ✅ Properly import it



@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,  // ✅ Add Material Form Field
    MatInputModule,      // ✅ Add Material Input
    MatIconModule,       // ✅ Add Material Icons
    MatButtonModule,     // ✅ Add Material Buttons
    MatCardModule ,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  authForm!: UntypedFormGroup;
  submitted = false;
  loading = false;
  error = '';
  hide = true;

  //
  doctor_id :number= -1;
  patient_id :number= -1;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    super();

  }

  ngOnInit() {

    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.authForm.controls;
  }

  onSubmit() {
    // this.submitted = true;
    // this.loading = true;
    // this.error = '';
    // if (this.authForm.invalid) {
    //   this.error = 'Username and Password not valid !';
    //   return;
    // } else {
    //   //     this.subs.sink = this.authService
    //   //       .login(this.f['username'].value, this.f['password'].value)
    //   //       .subscribe({
    //   //         next: (res) => {
    //   //           if (res) {
    //   //             setTimeout(() => {
    //   //               const role = this.authService.currentUserValue.role;
    //   //               if (role === Role.All || role === Role.Admin) {
    //   //                 this.router.navigate(['/admin/dashboard/main']);
    //   //               } else if (role === Role.Doctor) {
    //   //                 this.doctor_id = this.authService.currentUserValue.id
    //   //                 this.router.navigate(['/doctor/dashboard']);
    //   //               } else if (role === Role.Patient) {
    //   //                 this.patient_id = this.authService.currentUserValue.id
    //   //                 this.router.navigate(['/patient/dashboard']);
    //   //               } else {
    //   //                 this.router.navigate(['/authentication/signin']);
    //   //               }
    //   //               this.loading = false;
    //   //             }, 1000);
    //   //           } else {
    //   //             this.error = 'Invalid Login';
    //   //           }
    //   //         },
    //   //         error: (error) => {
    //   //           this.error = error;
    //   //           this.submitted = false;
    //   //           this.loading = false;
    //   //         },
    //   //       });
    //   //   }
    //   // }
    // }
  }

  loginWithGoogle() {

  }

  loginWithFacebook() {

  }
}

