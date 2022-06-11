import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncreptionDecreptionService } from 'src/app/utils/encreption-decreption.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  queryMsg:any = "";
  constructor(private _route:ActivatedRoute,private _router:Router,private _enc:EncreptionDecreptionService) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(res=>{
      console.log(res)
      this.queryMsg = this._enc.dcrypt(res.msg);
      console.log(this.queryMsg)
    })
  }

}
