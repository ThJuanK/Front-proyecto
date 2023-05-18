import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EnvioCorreosService {

  constructor(private http: HttpClient) { }

  enviarCorreo(id: string): void{
    this.http.get(`https://confirmacion-python.herokuapp.com/id/${id}`)
    .subscribe(
      () => {}
    )
    console.log("Enviado!")
  }


  comprobar(id:string): any{
    this.http.get(`https://confirmacion-python.herokuapp.com/comprobar/${id}`)
    .subscribe(resp =>{
      return {"existe": resp}
    })
  }
}
