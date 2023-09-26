import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent {

  constructor(private formbuilder: FormBuilder){}
  // form=this.formbuilder.group({
  //   illness:['',[Validators.required]]
  // });

  form=new FormGroup({
    illness:new FormControl('',[Validators.required])
  })


  submit(){
    if(this.form.valid){
      console.log('form data ::',this.form.value);

    }
  }

 

}
