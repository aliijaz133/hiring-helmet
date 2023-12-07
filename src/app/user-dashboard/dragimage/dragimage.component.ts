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
  imageUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.deliverOrder = this.fb.group({
      deliveryImage: new FormControl(null, [Validators.required]),
      deliveryDetails: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any) {
    const file = event.target.files[0];
    console.log('Selected File:', file);

    this.deliverOrder.patchValue({
      deliveryImage: file,
    });

    // Display the uploaded image
    const reader = new FileReader();
    reader.onload = (e: any) => {
      console.log('Image Loaded:', e);
      this.imageUrl = e.target.result;
    };

    reader.readAsDataURL(file);
  }

  submitOrder() {
    if (this.deliverOrder.valid) {
      const imageSize = this.deliverOrder.get('deliveryImage')?.value;
      const details = this.deliverOrder.get('deliveryDetails')?.value;

      console.log(
        'Image Size:',
        imageSize ? imageSize.sizeOf : 'No image selected'
      );
      console.log('Details:', details);

      // Add your submit logic here
    }

    this.deliverOrder.reset();
    this.imageUrl = null; // Reset the image URL after form submission
  }
}
