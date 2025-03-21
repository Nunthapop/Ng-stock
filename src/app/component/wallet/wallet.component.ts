import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CurrencyService } from '../../services/currency.service'; // Import the service
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms'; // Import ReactiveFormsModule and FormBuilder

@Component({
  selector: 'app-wallet',
  imports: [SharedModule, CommonModule, ReactiveFormsModule], // Add ReactiveFormsModule to imports
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletComponent {
  currencyData$!: Observable<any>;
  currencyForm: FormGroup;
  convertedAmount: number | null = null;
  exchangeRate: number | null = null;

  constructor(private currencyService: CurrencyService, private fb: FormBuilder) { // Inject FormBuilder
    this.currencyForm = this.fb.group({
      base: [''],
      target: [''],
      amount: ['']
    });
  }

  onSubmit() {
    const { base, target, amount } = this.currencyForm.value;
    this.currencyData$ = this.currencyService.getCurrency(base, target); // Use the service with form values
    this.currencyData$.subscribe(currencyData => {
      if (currencyData && currencyData.data && currencyData.data[target]) {
        this.exchangeRate = currencyData.data[target].value;
        if (amount !== null && this.exchangeRate !== null) {
          this.convertedAmount = amount * this.exchangeRate; // Perform conversion after exchange rate is fetched
        }
      }
    });
  }
}