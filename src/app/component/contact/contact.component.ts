import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalstorageService } from '../../services/localstorage/localstorage.service';
import { SharedModule } from '../../shared/shared.module';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,SharedModule,AccordionModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  reviewForm!: FormGroup;
  ratings: number[] = [1, 2, 3, 4, 5];
  showContactForm = false;
  showReviewForm = false;

  constructor(private fb: FormBuilder, private localStorageService: LocalstorageService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });

    this.reviewForm = this.fb.group({
      rating: ['', Validators.required]
    });
  }

  toggleContactForm(): void {
    this.showContactForm = !this.showContactForm;
  }

  toggleReviewForm(): void {
    this.showReviewForm = !this.showReviewForm;
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
      // Add your logic to handle the form submission
    } else {
      console.log('Form is invalid');
    }
  }

  onReviewSubmit(): void {
    if (this.reviewForm.valid) {
      const rating = this.reviewForm.value.rating;
      console.log('Review Submitted', rating);
      const reviews = this.localStorageService.getReviews() || [];
      reviews.push(rating);
      this.localStorageService.setReviews(reviews);
    } else {
      console.log('Review Form is invalid');
    }
  }
}
