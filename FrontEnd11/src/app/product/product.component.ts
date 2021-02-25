import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Worker } from 'src/app/services/worker';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  worker!: Worker;
  completeForm() {
    console.log(this.worker);
    // test for worker presence
   // if (this.worker.id == undefined) {
      if (!this.worker.id) {
        console.log(this.worker.id);
      this._AdMinService.addItem(this.worker).subscribe((worker) => {
     //   console.log(worker);
        this._AdmRouter.navigate(['/']);
      }, (error) => { console.log(error); });
    }
    else {
      // Both update and create worker
      console.log(this.worker.id);
      var zed=(this.worker);
      this._AdMinService.saveOrUpdateItem(this.worker.id, this.worker).subscribe((worker) => {
      //  console.log(worker);
        console.log(zed);
        this._AdmRouter.navigate(['/']);
      }, (error) => { console.log(error); });
    }
  }



  // private workers: Worker[];
  public workers!: Worker[];
  constructor(private _userService: AccountService,
    private _router: Router, private service: AccountService,
    private _AdMinService: AccountService, 
    private _AdmRouter: Router) { }

  ngOnInit() {
    this._userService.getItems().subscribe(
      (workers) => { console.log(workers); this.workers = workers; }
      , (error) => { console.log(error); })
    this.service.getData().subscribe(data => {
      this.finalresults = data;
    });
    this.worker = this._AdMinService.getter();
  }


  // Double
  saveOrUpdateItem(worker: Worker) {
    this._userService.setter(worker);
    this._router.navigate(['/enrolls']);
  }

  // remove worker
  deleteItem(worker: Worker) {
    this._userService.deleteItem(worker.id).subscribe(
      (data) => { this.workers.splice(this.workers.indexOf(worker), 1); }
      , (error) => { console.log(error); });

  }
  // add worker
  newItem() {
    let worker = new Worker();
    this._userService.setter(worker);
    this._router.navigate(['/enrolls']);
  }
  // show all workers
  showlist() {
    this._router.navigate(['/']);
  }

  
}
