import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-x-a",
  standalone: true,
  imports: [RouterLink],
  template: `
    <a
      class="group block max-w-max rounded-full bg-app-alabaster-50 p-1 hover:bg-app-alabaster active:bg-app-ebony"
      [routerLink]="appRouterLink"
      [queryParams]="appQueryParams"
    >
      x
    </a>
  `,
})
export class XAnchorComponent {
  @Input()
  appRouterLink: string | null = null;
  @Input()
  appQueryParams: RouterLink["queryParams"] = null;
}
