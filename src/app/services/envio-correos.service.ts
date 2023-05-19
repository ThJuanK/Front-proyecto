import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EnvioCorreosService {

  constructor(private http: HttpClient) { }

  private id: string = ""
  obj!: boolean;

  setId(id: string): void{
    this.id = id
  }
  getId(): string{
    return this.id
  }

  setObj(obj: boolean){
    this.obj = obj
  }

  enviarCorreo(id: string): void{
    this.http.get(`https://confirmacion-python.herokuapp.com/id/${id}`)
    .subscribe(
      () => {}
    )
  }



}
