import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncreptionDecreptionService } from 'src/app/utils/encreption-decreption.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  queryMsg:any = "";
  constructor(private _route:ActivatedRoute,private _router:Router,private _enc:EncreptionDecreptionService) { }

  ngOnInit(): void {
    this._route.queryParams.subscribe(res=>{
      console.log(res);

      console.log('res.errormsg',res.errormsg);
      console.log('res.errormsg',this._enc.dcrypt(res.errormsg));
      this.queryMsg = this._enc.dcrypt(res.msg);
      console.log(this.queryMsg)
    })
  }

}
