import { Component, OnInit } from '@angular/core';
import { appPath } from 'src/app/app-path.const';
import { SendType } from './send-type.enum';

@Component({
  selector: 'app-receipt-info',
  templateUrl: './receipt-info.component.html',
  styleUrls: ['./receipt-info.component.css']
})
export class ReceiptInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  path = appPath;

  // 給 Template 用的寄送方式列舉
  sendType = SendType;

  // 當前的寄送類型，預設使用 Email
  selectedType = SendType.EMAIL;

  // 切換寄送類型
  switch(type: number): void {
    this.selectedType = type;
    // console.log("SWITCH:" + type);
  }

  // 傳入的寄送類型是否為當前所選擇的寄送類型
  didSelected(type: number): boolean {
    // console.log("DIDS:" + type);
    return this.selectedType === type;
  }
}
