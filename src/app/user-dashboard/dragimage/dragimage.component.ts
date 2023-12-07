import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dragimage',
  templateUrl: './dragimage.component.html',
  styleUrls: ['./dragimage.component.scss'],
})
export class DragimageComponent implements OnInit {
  deliverOrder: FormGroup;
  imageUrl = '../../../assets/image/Vector.png';

  fileInput: any;

  constructor(private fb: FormBuilder) {
    this.deliverOrder = this.fb.group({
      deliveryImage: new FormControl(null, [Validators.required]),
      deliveryDetails: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.fileInput = document.getElementById('file');
  }

  onFileChange(event: any) {
    if (event.target.files) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
    }
  }

  submitOrder() {
    if (this.deliverOrder.valid) {
      const imageSize = this.deliverOrder.get('deliveryImage')?.value;
      const details = this.deliverOrder.get('deliveryDetails')?.value;

      console.log(
        'Image Size:',
        imageSize ? imageSize.size : 'No image selected'
      );
      console.log('Details:', details);

      this.deliverOrder.reset();

      if (this.fileInput) {
        this.fileInput.value = '';
      }
      this.imageUrl = '../../../assets/image/Vector.png';
    }
  }
}
