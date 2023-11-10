import { ChangeDetectionStrategy, Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { XAnchorComponent } from "./components/anchors/x-anchor.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
  standalone: true,
  imports: [NgOptimizedImage, XAnchorComponent],
  template: `
    <div class="relative">
      <div class="pointer-events-none absolute inset-0 h-72">
        <img
          class="object-cover"
          ngSrc="../../../assets/catalogue_background.png"
          fill="true"
          priority="true"
          alt="Catalogue background image"
        />
      </div>

      <!--needs to be relative, so absolute container above doesn't come on top-->
      <div class="relative">
        <app-x-a />
      </div>
    </div>
  `,
})
export class AppComponent {}
