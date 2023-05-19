import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvioCorreosService } from 'src/app/services/envio-correos.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.component.html',
  styles: [
  ]
})
export class VerificacionComponent implements OnInit{

  ngOnInit(): void {

  }
  constructor(private route: ActivatedRoute,  private router: Router, private envios: EnvioCorreosService, private http: HttpClient){
    this._id = this.route.snapshot.queryParamMap.get('_id')!

    this.http.get<boolean>(`https://confirmacion-python.herokuapp.com/comprobar/${this._id}`)
    .subscribe(resp =>{
      this.valido = resp
    })

    setTimeout(() => {
      if(!this._id) this.router.navigate(['error'])
      else{
      if(this.valido) {
        this.envios.setId(this._id)
        this.envios.setObj(true)
        this.router.navigate(['confirmacion'])
      }
      else{
        this.router.navigate(['error'])
      }
    }
    }, 5000)

  }


  private valido!: boolean;
  private _id: string = ""


}
