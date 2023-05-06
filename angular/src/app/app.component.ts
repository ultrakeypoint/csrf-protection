import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {OrderService} from './services/order.service';
import {ToastrService} from 'ngx-toastr';
import {take} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private os: OrderService,
    private ts: ToastrService
  ) {}

  public fg = this.fb.group({
    count: [0, [Validators.required]],
  });

  ngOnInit() {}
  async requestDelivery() {
    if (0 >= Number(this?.fg?.value?.count)) {
      this.ts.error('1개 이상 입력해주세요.');
      return;
    }

    this.os
      .order(this.fg.value.count)
      .pipe(take(1))
      .subscribe({
        next: (r) => {
          this.ts.success('주문하였습니다.');
          console.log(r);
        },
        error: (r) => console.log(r),
      });
  }
}
