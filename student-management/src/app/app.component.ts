import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    NgIf
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm!: FormGroup;
  successMessage: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Display success message and reset the form
      this.successMessage = 'Registration successful!';
      console.log(this.registrationForm.value);
      this.registrationForm.reset();
    }
  }
}
