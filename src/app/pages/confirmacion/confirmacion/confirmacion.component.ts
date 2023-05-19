import { Component, OnInit } from '@angular/core';
import { EnvioCorreosService } from 'src/app/services/envio-correos.service';
import { MenuItem, Message} from 'primeng/api';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit{
  private _id!: string;
  public menuItems: MenuItem[] = [];
  public notificacion!: Message[];
  private pulsado: boolean = false

  constructor(private envios: EnvioCorreosService, private router: Router){
    this._id = this.envios.getId()
  }

  ngOnInit(): void {
    this.router.navigateByUrl("confirmacion")
    console.log(this.envios.obj)
    if(!this.envios.obj){
      this.router.navigateByUrl("error")
    }
  }

  enviar(){
    if(!this.pulsado){
      this.pulsado = true
      this.notificacion= [
        { severity: 'success', summary: '¡gracias!', detail: 'Te enviaremos un correo de confirmación.' },
      ];

      this.envios.enviarCorreo(this._id)

      this.agradecer()

      this.cerrar()
    }
  }

  cerrar(){
    setTimeout(() => window.close(), 5000)
  }

  notificar(){
    if(!this.pulsado){
      Swal.fire({
        title: '¿Seguro que no quieres renovar?',
        showDenyButton: true,
        confirmButtonText: 'Volver',
        denyButtonText: `Aceptar`,
      }).then((result) => {
        if (result.isConfirmed) {

        } else if (result.isDenied) {
          this.pulsado = true
          Swal.fire({title: 'Gracias! :(', showConfirmButton: false})
          this.cerrar()
        }
      })
    }
  }

  agradecer(){
    Swal.fire({
      title: 'Gracias',
      text: 'Te hemos enviado un correo de confirmación',
      icon: 'success',
      showConfirmButton: false
    });
  }
}
