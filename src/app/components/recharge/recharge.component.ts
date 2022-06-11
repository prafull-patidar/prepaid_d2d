import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncreptionDecreptionService } from 'src/app/utils/encreption-decreption.service';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  userId: any;
  queryMsg: any;

  rechargeForm: FormGroup;
  datamsg:any;
  discomcode:any
  amount:any;

  url:any=environment.submitformurl;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _enc: EncreptionDecreptionService,
    public fb: FormBuilder) { }

  ngOnInit(): void {


    this._route.queryParams.subscribe(res => {
      console.log('res.datamsg', this._enc.dcrypt(res.datamsg));
      console.log('res.discomcode', this._enc.dcrypt(res.discomcode));

      console.log('res.amount', this._enc.dcrypt(res.amount));
      this.datamsg= this._enc.dcrypt(res.datamsg);
      this.discomcode = this._enc.dcrypt(res.discomcode);
      this.amount= this._enc.dcrypt(res.amount);

    })

  

  }

  recharge() {

    console.log('recharge ')
  }

}
