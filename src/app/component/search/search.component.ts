import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // นำเข้า HttpClientModule
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchForm: FormGroup;
  @Output() searchResult = new EventEmitter<string>(); // ส่งข้อมูลการค้นหาไปยัง parent component

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchQuery: [''],
    });
  }

  onSubmit() {
    const searchQuery = this.searchForm.value.searchQuery;
    this.searchResult.emit(searchQuery); // ส่งข้อมูลการค้นหาไปยัง parent component
  }
}