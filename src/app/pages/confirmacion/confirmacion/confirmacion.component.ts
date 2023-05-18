import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnvioCorreosService } from 'src/app/services/envio-correos.service';
import { MenuItem, Message} from 'primeng/api';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit{
  private _id!: string;
  public menuItems: MenuItem[] = [];
  public notificacion!: Message[];

  constructor(private route: ActivatedRoute,  private router: Router, private envios: EnvioCorreosService){}

  ngOnInit(): void {
    localStorage.clear();

    this._id = this.route.snapshot.queryParamMap.get('_id')!
    console.log(this._id)

    if(!this._id) this.router.navigate(['error'])
    else{
      localStorage.setItem('_id', this._id)
    }
  }

  enviar(){
    this.notificacion= [
      { severity: 'success', summary: '¡gracias!', detail: 'Te enviaremos un correo de confirmación.' },
    ];

    console.log("AAAAAAAAAAAAA")

    //this.envios.enviarCorreo(this._id)

    this.cerrar()
  }

  cerrar(){
    setTimeout(() => window.close(), 5000)
  }
}
